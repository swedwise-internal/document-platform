/**
 * Operating Model Document Loader
 * Reads plain markdown files without strict frontmatter requirements.
 * Content path is configured via OPERATING_MODEL_CONTENT_DIR env variable.
 */

import fs from 'fs/promises';
import path from 'path';
import { renderMarkdown, extractTableOfContents } from './processor';

const OM_CONTENT_DIR =
  process.env.OPERATING_MODEL_CONTENT_DIR ||
  path.resolve(process.cwd(), '../../content/operating-model');

export interface OmDocument {
  slug: string;
  title: string;
  content: string;
  tableOfContents: Array<{ level: number; text: string; id: string }>;
  path: string;
}

export interface OmDocumentListItem {
  slug: string;
  title: string;
  path: string;
  category: string;
}

/** Extract title from first H1 in markdown, fallback to filename */
function extractTitle(markdown: string, filePath: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  if (match) return match[1].trim();
  return path.basename(filePath, '.md').replace(/^\d+-/, '').replace(/-/g, ' ');
}

/** Recursively find all .md files under a directory */
async function findMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...await findMarkdownFiles(full));
      } else if (entry.name.endsWith('.md')) {
        files.push(full);
      }
    }
  } catch {
    // directory doesn't exist yet
  }
  return files;
}

/** Convert file path to URL slug */
function pathToSlug(filePath: string): string {
  return path.relative(OM_CONTENT_DIR, filePath)
    .replace(/\.md$/, '')
    .replace(/\\/g, '/')
    .replace(/\//g, '--');
}

/** Convert URL slug back to file path */
function slugToPath(slug: string): string {
  return path.join(OM_CONTENT_DIR, slug.replace(/--/g, '/') + '.md');
}

/** Load a single document by slug */
export async function loadOmDocumentBySlug(slug: string): Promise<OmDocument | null> {
  const filePath = slugToPath(slug);
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    // Strip YAML frontmatter if present
    const body = raw.replace(/^---[\s\S]*?---\n?/, '');
    const content = await renderMarkdown(body);
    return {
      slug,
      title: extractTitle(body, filePath),
      content,
      tableOfContents: extractTableOfContents(body),
      path: path.relative(OM_CONTENT_DIR, filePath),
    };
  } catch {
    return null;
  }
}

/** List all documents, optionally filtered by subfolder */
export async function listOmDocuments(subdir?: string): Promise<OmDocumentListItem[]> {
  const baseDir = subdir ? path.join(OM_CONTENT_DIR, subdir) : OM_CONTENT_DIR;
  const files = await findMarkdownFiles(baseDir);

  const items: OmDocumentListItem[] = await Promise.all(
    files.map(async (filePath) => {
      const raw = await fs.readFile(filePath, 'utf-8').catch(() => '');
      const body = raw.replace(/^---[\s\S]*?---\n?/, '');
      const rel = path.relative(OM_CONTENT_DIR, filePath);
      const parts = rel.replace(/\\/g, '/').split('/');
      return {
        slug: pathToSlug(filePath),
        title: extractTitle(body, filePath),
        path: rel,
        category: parts.length > 1 ? parts[0] : 'root',
      };
    })
  );

  return items.sort((a, b) => a.path.localeCompare(b.path));
}
