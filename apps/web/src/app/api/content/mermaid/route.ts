import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { resolveRelativePath, getAreaRoot } from '@/lib/content-paths';
import fs from 'fs/promises';
import path from 'path';

/**
 * PUT /api/content/mermaid
 * Updates a specific mermaid code block in a markdown file.
 *
 * Body: { filePath, blockIndex, newCode }
 * - filePath: relative to the content root, e.g. "operating-model/12-processes/01-deal.md"
 *             OR "ims/procedures/incident-management-procedure.md"
 * - blockIndex: 0-based index of the mermaid block in the file
 * - newCode: updated mermaid source
 */
export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: { filePath?: string; blockIndex?: number; newCode?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { filePath, blockIndex, newCode } = body;
  if (typeof filePath !== 'string' || typeof blockIndex !== 'number' || typeof newCode !== 'string') {
    return NextResponse.json({ error: 'Missing filePath, blockIndex, or newCode' }, { status: 400 });
  }

  // Determine area from the first path segment
  const normalised = filePath.replace(/\\/g, '/');
  const firstSegment = normalised.split('/')[0];
  const relativeToArea = normalised.split('/').slice(1).join('/');

  const areaRoot = getAreaRoot(firstSegment);
  const absolutePath = resolveRelativePath(firstSegment, relativeToArea);

  if (!absolutePath) {
    return NextResponse.json({ error: 'Invalid file path' }, { status: 400 });
  }

  // Verify file is within its area root
  if (!absolutePath.startsWith(areaRoot + path.sep)) {
    return NextResponse.json({ error: 'File path outside content directory' }, { status: 403 });
  }

  let fileContent: string;
  try {
    fileContent = await fs.readFile(absolutePath, 'utf-8');
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  // Find and replace the mermaid block at blockIndex
  const mermaidBlockRegex = /```mermaid\n([\s\S]*?)```/g;
  let match: RegExpExecArray | null;
  let currentIndex = 0;
  let found = false;
  let updatedContent = fileContent;

  mermaidBlockRegex.lastIndex = 0;
  while ((match = mermaidBlockRegex.exec(fileContent)) !== null) {
    if (currentIndex === blockIndex) {
      const before = fileContent.slice(0, match.index);
      const after = fileContent.slice(match.index + match[0].length);
      updatedContent = before + '```mermaid\n' + newCode.trimEnd() + '\n```' + after;
      found = true;
      break;
    }
    currentIndex++;
  }

  if (!found) {
    return NextResponse.json(
      { error: `Block ${blockIndex} not found (file has ${currentIndex} blocks)` },
      { status: 404 }
    );
  }

  await fs.writeFile(absolutePath, updatedContent, 'utf-8');
  return NextResponse.json({ ok: true });
}
