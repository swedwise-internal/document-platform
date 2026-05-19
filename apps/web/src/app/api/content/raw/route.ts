import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { resolveSlugPath } from '@/lib/content-paths';
import fs from 'fs/promises';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const area = req.nextUrl.searchParams.get('area');
  const slug = req.nextUrl.searchParams.get('slug');

  if (!area || !slug) {
    return NextResponse.json({ error: 'Missing area or slug' }, { status: 400 });
  }

  const filePath = resolveSlugPath(area, slug);
  if (!filePath) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
  }

  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    return NextResponse.json({ content: raw });
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
