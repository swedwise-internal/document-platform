/**
 * Document Index Service
 * Maintains an in-memory index mapping document IDs to their file paths/slugs
 * for efficient internal document linking
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type { DocumentType, DocumentStatus } from '@/types/document';

/**
 * Document index entry
 */
export interface DocumentIndexEntry {
  document_id: string;
  slug: string;
  title: string;
  path: string;
  docType: DocumentType;
  status: DocumentStatus;
}

/**
 * Document index statistics
 */
export interface DocumentIndexStats {
  totalDocuments: number;
  lastBuilt: Date | null;
  buildTimeMs: number;
  categories: Record<string, number>;
}

// Content directory path (relative to project root)
const CONTENT_DIR = process.env.CONTENT_DIR || '../../content/ims';

/**
 * In-memory document index
 */
let documentIndex: Map<string, DocumentIndexEntry> | null = null;
let indexStats: DocumentIndexStats = {
  totalDocuments: 0,
  lastBuilt: null,
  buildTimeMs: 0,
  categories: {},
};

/**
 * Get the absolute path to the content directory
 */
function getContentPath(): string {
  return path.resolve(process.cwd(), CONTENT_DIR);
}

/**
 * Recursively get all Markdown files in a directory
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
 * Build the document index by scanning all Markdown files
 */
export async function buildIndex(): Promise<Map<string, DocumentIndexEntry>> {
  const startTime = Date.now();
  const index = new Map<string, DocumentIndexEntry>();
  const contentPath = getContentPath();
  const categoryCounts: Record<string, number> = {};

  try {
    const files = await getMarkdownFiles(contentPath);

    for (const filePath of files) {
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        const { data } = matter(content);

        // Skip files without document_id
        if (!data.document_id) {
          console.warn(`Skipping file without document_id: ${filePath}`);
          continue;
        }

        const relativePath = path.relative(contentPath, filePath);

        // Generate slug from path (replace / with --)
        const slug = relativePath.replace(/\.md$/, '').replace(/\//g, '--');

        // Extract category from path (first directory)
        const category = relativePath.split('/')[0];
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;

        // Create index entry
        const entry: DocumentIndexEntry = {
          document_id: data.document_id,
          slug,
          title: data.title || 'Untitled',
          path: relativePath,
          docType: data.doc_type as DocumentType,
          status: data.status as DocumentStatus,
        };

        index.set(data.document_id, entry);
      } catch (error) {
        console.error(`Error parsing file ${filePath}:`, error);
      }
    }

    const buildTime = Date.now() - startTime;

    // Update stats
    indexStats = {
      totalDocuments: index.size,
      lastBuilt: new Date(),
      buildTimeMs: buildTime,
      categories: categoryCounts,
    };

    console.log(`Document index built: ${index.size} documents in ${buildTime}ms`);
    console.log('Categories:', categoryCounts);

    // Cache the index
    documentIndex = index;

    return index;
  } catch (error) {
    console.error('Error building document index:', error);
    throw error;
  }
}

/**
 * Get the document index (builds it if not already built)
 */
async function getIndex(): Promise<Map<string, DocumentIndexEntry>> {
  if (!documentIndex) {
    return await buildIndex();
  }
  return documentIndex;
}

/**
 * Get a document entry by document ID
 */
export async function getDocumentById(
  documentId: string
): Promise<DocumentIndexEntry | null> {
  const index = await getIndex();
  return index.get(documentId) || null;
}

/**
 * Get multiple document entries by IDs
 */
export async function getDocumentsByIds(
  documentIds: string[]
): Promise<Map<string, DocumentIndexEntry | null>> {
  const index = await getIndex();
  const results = new Map<string, DocumentIndexEntry | null>();

  for (const id of documentIds) {
    results.set(id, index.get(id) || null);
  }

  return results;
}

/**
 * Get all documents in the index
 */
export async function getAllDocuments(): Promise<DocumentIndexEntry[]> {
  const index = await getIndex();
  return Array.from(index.values());
}

/**
 * Get index statistics
 */
export function getIndexStats(): DocumentIndexStats {
  return { ...indexStats };
}

/**
 * Rebuild the index (useful for development file watching)
 */
export async function rebuildIndex(): Promise<void> {
  console.log('Rebuilding document index...');
  documentIndex = null;
  await buildIndex();
}

/**
 * Clear the index (useful for testing)
 */
export function clearIndex(): void {
  documentIndex = null;
  indexStats = {
    totalDocuments: 0,
    lastBuilt: null,
    buildTimeMs: 0,
    categories: {},
  };
}

/**
 * Check if the index is built
 */
export function isIndexBuilt(): boolean {
  return documentIndex !== null;
}

/**
 * Search documents by title or document ID
 */
export async function searchDocuments(query: string): Promise<DocumentIndexEntry[]> {
  const index = await getIndex();
  const lowerQuery = query.toLowerCase();
  const results: DocumentIndexEntry[] = [];

  // Convert to array to avoid iteration issues
  const entries = Array.from(index.values());

  for (const entry of entries) {
    if (
      entry.title.toLowerCase().includes(lowerQuery) ||
      entry.document_id.toLowerCase().includes(lowerQuery)
    ) {
      results.push(entry);
    }
  }

  return results;
}

/**
 * Get documents by type
 */
export async function getDocumentsByType(docType: DocumentType): Promise<DocumentIndexEntry[]> {
  const index = await getIndex();
  const results: DocumentIndexEntry[] = [];

  // Convert to array to avoid iteration issues
  const entries = Array.from(index.values());

  for (const entry of entries) {
    if (entry.docType === docType) {
      results.push(entry);
    }
  }

  return results;
}

/**
 * Get documents by status
 */
export async function getDocumentsByStatus(status: DocumentStatus): Promise<DocumentIndexEntry[]> {
  const index = await getIndex();
  const results: DocumentIndexEntry[] = [];

  // Convert to array to avoid iteration issues
  const entries = Array.from(index.values());

  for (const entry of entries) {
    if (entry.status === status) {
      results.push(entry);
    }
  }

  return results;
}

/**
 * Get documents by category (directory)
 */
export async function getDocumentsByCategory(category: string): Promise<DocumentIndexEntry[]> {
  const index = await getIndex();
  const results: DocumentIndexEntry[] = [];

  // Convert to array to avoid iteration issues
  const entries = Array.from(index.values());

  for (const entry of entries) {
    const entryCategory = entry.path.split('/')[0];
    if (entryCategory === category) {
      results.push(entry);
    }
  }

  return results;
}
