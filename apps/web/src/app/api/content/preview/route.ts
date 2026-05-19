import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { processDocument } from '@/lib/markdown/processor';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: { content?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body.content) return NextResponse.json({ html: '' });

  try {
    const doc = await processDocument(body.content, 'preview.md');
    return NextResponse.json({ html: doc?.content ?? '' });
  } catch {
    return NextResponse.json({ html: '<p class="text-red-500">Preview error</p>' });
  }
}
