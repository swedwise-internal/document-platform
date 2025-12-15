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
  DocumentType
} from '@/types/document';
import { ContentArea } from '@/types/area';
import { getCategoriesForArea } from '@/lib/areas/categories';

// Base content directory path (relative to project root)
const CONTENT_BASE_DIR = process.env.CONTENT_BASE_DIR || '../../content';

/**
 * Get the absolute path to the content directory for an area
 */
function getContentPath(area: ContentArea = 'ims'): string {
  return path.resolve(process.cwd(), CONTENT_BASE_DIR, area);
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
export async function loadDocument(filePath: string, area: ContentArea = 'ims'): Promise<ParsedDocument | null> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const relativePath = path.relative(getContentPath(area), filePath);
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
export async function loadDocumentBySlug(slug: string, area: ContentArea = 'ims'): Promise<ParsedDocument | null> {
  // Convert slug back to path (-- becomes /)
  const filePath = path.join(
    getContentPath(area),
    slug.replace(/--/g, '/') + '.md'
  );

  return loadDocument(filePath, area);
}

/**
 * Load a document by document ID (e.g., SW-ISMS-POL-001)
 */
export async function loadDocumentById(documentId: string, area: ContentArea = 'ims'): Promise<ParsedDocument | null> {
  const documents = await listAllDocuments(area);
  const doc = documents.find(d => d.document_id === documentId);

  if (!doc) {
    return null;
  }

  const filePath = path.join(getContentPath(area), doc.path);
  return loadDocument(filePath, area);
}

/**
 * List all documents in a category
 */
export async function listDocuments(category: string, area: ContentArea = 'ims'): Promise<DocumentListItem[]> {
  const contentPath = getContentPath(area);
  const categoryPath = path.join(contentPath, category);

  if (!await isDirectory(categoryPath)) {
    return [];
  }

  const files = await getMarkdownFiles(categoryPath);
  const documents: DocumentListItem[] = [];

  for (const filePath of files) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const { frontmatter } = parseMarkdown(content);
      const relativePath = path.relative(contentPath, filePath);

      documents.push({
        document_id: frontmatter.document_id,
        title: frontmatter.title,
        doc_type: frontmatter.doc_type,
        status: frontmatter.status,
        classification: frontmatter.classification,
        standard: frontmatter.standard,
        path: relativePath,
        slug: relativePath.replace(/\.md$/, '').replace(/\//g, '--'),
        area,
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
export async function listAllDocuments(area: ContentArea = 'ims'): Promise<DocumentListItem[]> {
  const contentPath = getContentPath(area);
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
          area,
        });
      }
    } catch (error) {
      console.error(`Error parsing ${filePath}:`, error);
    }
  }

  return documents.sort((a, b) => a.document_id.localeCompare(b.document_id));
}

/**
 * Get document counts by category for an area
 */
export async function getDocumentCounts(area: ContentArea = 'ims'): Promise<Record<string, number>> {
  const categories = getCategoriesForArea(area);
  const counts: Record<string, number> = {};

  for (const category of categories) {
    const docs = await listDocuments(category.path, area);
    counts[category.id] = docs.length;
  }

  return counts;
}

/**
 * Search documents by title or content
 */
export async function searchDocuments(query: string, area: ContentArea = 'ims'): Promise<DocumentListItem[]> {
  const allDocs = await listAllDocuments(area);
  const lowerQuery = query.toLowerCase();

  return allDocs.filter(doc =>
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.document_id.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get documents by type
 */
export async function getDocumentsByType(type: DocumentType, area: ContentArea = 'ims'): Promise<DocumentListItem[]> {
  const allDocs = await listAllDocuments(area);
  return allDocs.filter(doc => doc.doc_type === type);
}

/**
 * Get documents by status
 */
export async function getDocumentsByStatus(status: string, area: ContentArea = 'ims'): Promise<DocumentListItem[]> {
  const allDocs = await listAllDocuments(area);
  return allDocs.filter(doc => doc.status === status);
}
