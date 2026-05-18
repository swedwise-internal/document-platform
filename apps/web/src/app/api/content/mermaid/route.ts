import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const CONTENT_BASE_DIR = process.env.CONTENT_BASE_DIR || '../../content';

/**
 * PUT /api/content/mermaid
 * Updates a specific mermaid code block in a markdown file.
 *
 * Body: { filePath: string, blockIndex: number, newCode: string }
 * - filePath: relative path within content dir, e.g. "operating-model/12-processes/02-contract-to-delivery.md"
 * - blockIndex: 0-based index of the mermaid block in the file
 * - newCode: the new mermaid diagram source
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { filePath, blockIndex, newCode } = body;

    if (typeof filePath !== 'string' || typeof blockIndex !== 'number' || typeof newCode !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid fields: filePath (string), blockIndex (number), newCode (string)' },
        { status: 400 }
      );
    }

    // Prevent path traversal
    const normalizedPath = path.normalize(filePath);
    if (normalizedPath.includes('..') || path.isAbsolute(normalizedPath)) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 400 });
    }

    const absolutePath = path.resolve(process.cwd(), CONTENT_BASE_DIR, normalizedPath);

    // Verify file exists and is within content directory
    const contentRoot = path.resolve(process.cwd(), CONTENT_BASE_DIR);
    if (!absolutePath.startsWith(contentRoot)) {
      return NextResponse.json({ error: 'File path outside content directory' }, { status: 403 });
    }

    let fileContent: string;
    try {
      fileContent = await fs.readFile(absolutePath, 'utf-8');
    } catch {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Find and replace the mermaid block at the given index
    const mermaidBlockRegex = /```mermaid\n([\s\S]*?)```/g;
    let match: RegExpExecArray | null;
    let currentIndex = 0;
    let found = false;

    let updatedContent = fileContent;

    // Reset regex
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
        { error: `Mermaid block at index ${blockIndex} not found (file has ${currentIndex} blocks)` },
        { status: 404 }
      );
    }

    await fs.writeFile(absolutePath, updatedContent, 'utf-8');

    return NextResponse.json({ success: true, filePath: normalizedPath, blockIndex });
  } catch (error) {
    console.error('Error updating mermaid block:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
