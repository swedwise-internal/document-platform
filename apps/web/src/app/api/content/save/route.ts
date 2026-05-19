import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { resolveSlugPath, getAreaRoot, filePathToSlug, viewUrl } from '@/lib/content-paths';
import fs from 'fs/promises';
import path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

async function isGitRepo(dir: string): Promise<boolean> {
  try {
    await execFileAsync('git', ['rev-parse', '--git-dir'], { cwd: dir });
    return true;
  } catch {
    return false;
  }
}

async function gitCommit(
  root: string,
  filePath: string,
  userName: string,
  userEmail: string,
  message: string
): Promise<boolean> {
  const rel = path.relative(root, filePath);
  const gitConfig = ['-c', `user.name=${userName}`, '-c', `user.email=${userEmail}`];
  await execFileAsync('git', [...gitConfig, 'add', rel], { cwd: root });

  try {
    await execFileAsync('git', ['diff', '--cached', '--quiet'], { cwd: root });
    return false;
  } catch {
    // git diff --quiet exits 1 when there are staged changes.
  }

  await execFileAsync('git', [...gitConfig, 'commit', '-m', message], { cwd: root });
  return true;
}

async function gitPush(root: string): Promise<void> {
  await execFileAsync('git', ['push'], { cwd: root });
}

function canEditContent(role?: string): boolean {
  return ['ADMIN', 'IMS_OWNER', 'QUALITY_LEAD', 'CISO'].includes(role ?? '');
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const role = (session.user as { role?: string } | undefined)?.role;
  if (!canEditContent(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  let body: { area?: string; slug?: string; content?: string; newPath?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { area, content } = body;
  if (!area || content === undefined) {
    return NextResponse.json({ error: 'Missing area or content' }, { status: 400 });
  }

  const root = getAreaRoot(area);
  let filePath: string | null;
  let isNew = false;

  if (body.newPath) {
    // Creating a new file — newPath is a relative path like "12-processes/new-page.md"
    const rel = body.newPath.endsWith('.md') ? body.newPath : body.newPath + '.md';
    filePath = path.resolve(root, rel);
    if (!filePath.startsWith(root + path.sep)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }
    // Check it doesn't already exist
    try {
      await fs.access(filePath);
      return NextResponse.json({ error: 'File already exists' }, { status: 409 });
    } catch {
      // Expected — file should not exist
    }
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    isNew = true;
  } else if (body.slug) {
    filePath = resolveSlugPath(area, body.slug);
    if (!filePath) return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }
  } else {
    return NextResponse.json({ error: 'Missing slug or newPath' }, { status: 400 });
  }

  await fs.writeFile(filePath, content, 'utf-8');

  const slug = filePathToSlug(area, filePath);
  const docViewUrl = viewUrl(area, slug);

  // Best-effort git commit
  let committed = false;
  let pushed = false;
  try {
    if (await isGitRepo(root)) {
      const userName = session.user?.name ?? session.user?.email ?? 'Unknown';
      const userEmail = session.user?.email ?? 'noreply@swedwise.se';
      const message = isNew ? `docs: create ${slug}` : `docs: update ${slug}`;
      committed = await gitCommit(root, filePath, userName, userEmail, message);
      if (committed) {
        await gitPush(root);
        pushed = true;
      }
    }
  } catch (err) {
    console.warn('git commit/push skipped:', (err as Error).message);
  }

  return NextResponse.json({ ok: true, committed, pushed, slug, viewUrl: docViewUrl });
}
