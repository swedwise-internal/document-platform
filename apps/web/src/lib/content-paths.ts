import path from 'path';

const CONTENT_BASE_DIR = process.env.CONTENT_BASE_DIR || '../../content';
const OM_CONTENT_DIR =
  process.env.OPERATING_MODEL_CONTENT_DIR ||
  path.resolve(process.cwd(), '../../content/operating-model');

/** Returns the absolute root directory for a given area. */
export function getAreaRoot(area: string): string {
  if (area === 'operating-model') {
    return path.resolve(OM_CONTENT_DIR);
  }
  return path.resolve(process.cwd(), CONTENT_BASE_DIR, area);
}

/**
 * Resolves a slug to an absolute file path within the area root.
 * Returns null if the path would escape the root (traversal attempt).
 */
export function resolveSlugPath(area: string, slug: string): string | null {
  const root = getAreaRoot(area);
  const filePath = path.resolve(root, slug.replace(/--/g, '/') + '.md');
  if (!filePath.startsWith(root + path.sep) && filePath !== root) return null;
  return filePath;
}

/**
 * Resolves a raw relative path (e.g. "12-processes/new-page.md") within an area root.
 * Returns null on traversal attempt.
 */
export function resolveRelativePath(area: string, relPath: string): string | null {
  const root = getAreaRoot(area);
  const filePath = path.resolve(root, relPath);
  if (!filePath.startsWith(root + path.sep)) return null;
  return filePath;
}

/** Converts an absolute file path back to a URL slug. */
export function filePathToSlug(area: string, filePath: string): string {
  const root = getAreaRoot(area);
  return path.relative(root, filePath)
    .replace(/\.md$/, '')
    .replace(/\\/g, '/')
    .replace(/\//g, '--');
}

/** Build the view URL for a document. */
export function viewUrl(area: string, slug: string): string {
  const segments = slug.replace(/--/g, '/');
  if (area === 'operating-model') return `/operating-model/docs/${segments}`;
  return `/${area}/documents/${segments}`;
}
