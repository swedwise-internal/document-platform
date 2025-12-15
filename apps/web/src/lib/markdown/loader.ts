/**
 * Document Loader
 * Reads markdown files from the content directory
 */

import fs from 'fs/promises';
import path from 'path';
import { parseMarkdown, processDocument } from './processor';
import {
  ParsedDocument,
  DocumentListItem,
  DocumentFrontmatter,
  DocumentType
} from '@/types/document';

// Content directory path (relative to project root)
// Default: ../../content/ims for monorepo structure (apps/web -> content/ims)
const CONTENT_DIR = process.env.CONTENT_DIR || '../../content/ims';

/**
 * Get the absolute path to the content directory
 */
function getContentPath(): string {
  return path.resolve(process.cwd(), CONTENT_DIR);
}

/**
 * Check if a path exists and is a directory
 */
async function isDirectory(dirPath: string): Promise<boolean> {
  try {
    const stats = await fs.stat(dirPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Get all markdown files in a directory recursively
 */
async function getMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const subFiles = await getMarkdownFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return files;
}

/**
 * Load a single document by path
 */
export async function loadDocument(filePath: string): Promise<ParsedDocument | null> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const relativePath = path.relative(getContentPath(), filePath);
    return await processDocument(content, relativePath);
  } catch (error) {
    console.error(`Error loading document ${filePath}:`, error);
    return null;
  }
}

/**
 * Load a document by slug
 * Slug format: category--filename (double hyphen separates path segments)
 */
export async function loadDocumentBySlug(slug: string): Promise<ParsedDocument | null> {
  // Convert slug back to path (-- becomes /)
  const filePath = path.join(
    getContentPath(),
    slug.replace(/--/g, '/') + '.md'
  );

  return loadDocument(filePath);
}

/**
 * Load a document by document ID (e.g., SW-ISMS-POL-001)
 */
export async function loadDocumentById(documentId: string): Promise<ParsedDocument | null> {
  const documents = await listAllDocuments();
  const doc = documents.find(d => d.document_id === documentId);

  if (!doc) {
    return null;
  }

  const filePath = path.join(getContentPath(), doc.path);
  return loadDocument(filePath);
}

/**
 * List all documents in a category
 */
export async function listDocuments(category: string): Promise<DocumentListItem[]> {
  const categoryPath = path.join(getContentPath(), category);

  if (!await isDirectory(categoryPath)) {
    return [];
  }

  const files = await getMarkdownFiles(categoryPath);
  const documents: DocumentListItem[] = [];

  for (const filePath of files) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const { frontmatter } = parseMarkdown(content);
      const relativePath = path.relative(getContentPath(), filePath);

      documents.push({
        document_id: frontmatter.document_id,
        title: frontmatter.title,
        doc_type: frontmatter.doc_type,
        status: frontmatter.status,
        classification: frontmatter.classification,
        standard: frontmatter.standard,
        path: relativePath,
        slug: relativePath.replace(/\.md$/, '').replace(/\//g, '--'),
      });
    } catch (error) {
      console.error(`Error parsing ${filePath}:`, error);
    }
  }

  // Sort by document_id
  return documents.sort((a, b) => a.document_id.localeCompare(b.document_id));
}

/**
 * List all documents across all categories
 */
export async function listAllDocuments(): Promise<DocumentListItem[]> {
  const contentPath = getContentPath();
  const files = await getMarkdownFiles(contentPath);
  const documents: DocumentListItem[] = [];

  for (const filePath of files) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const { frontmatter } = parseMarkdown(content);
      const relativePath = path.relative(contentPath, filePath);

      if (frontmatter.document_id) {
        documents.push({
          document_id: frontmatter.document_id,
          title: frontmatter.title,
          doc_type: frontmatter.doc_type,
          status: frontmatter.status,
          classification: frontmatter.classification,
          standard: frontmatter.standard,
          path: relativePath,
          slug: relativePath.replace(/\.md$/, '').replace(/\//g, '--'),
        });
      }
    } catch (error) {
      console.error(`Error parsing ${filePath}:`, error);
    }
  }

  return documents.sort((a, b) => a.document_id.localeCompare(b.document_id));
}

/**
 * Get document counts by category
 */
export async function getDocumentCounts(): Promise<Record<string, number>> {
  const categories = ['policies', 'procedures', 'guidelines', 'role-descriptions', 'training', 'forms', 'registers'];
  const counts: Record<string, number> = {};

  for (const category of categories) {
    const docs = await listDocuments(category);
    counts[category] = docs.length;
  }

  return counts;
}

/**
 * Search documents by title or content
 */
export async function searchDocuments(query: string): Promise<DocumentListItem[]> {
  const allDocs = await listAllDocuments();
  const lowerQuery = query.toLowerCase();

  return allDocs.filter(doc =>
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.document_id.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get documents by type
 */
export async function getDocumentsByType(type: DocumentType): Promise<DocumentListItem[]> {
  const allDocs = await listAllDocuments();
  return allDocs.filter(doc => doc.doc_type === type);
}

/**
 * Get documents by status
 */
export async function getDocumentsByStatus(status: string): Promise<DocumentListItem[]> {
  const allDocs = await listAllDocuments();
  return allDocs.filter(doc => doc.status === status);
}
