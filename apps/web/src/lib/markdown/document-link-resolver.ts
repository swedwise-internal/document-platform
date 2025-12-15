/**
 * Document Link Resolver
 * Resolves document IDs to metadata for link enhancement
 */

import { listAllDocuments } from './loader';
import type { DocumentListItem, DocumentType } from '@/types/document';

/**
 * Document metadata cache
 * Cached for the lifetime of the process
 */
let documentCache: Map<string, DocumentListItem> | null = null;

/**
 * Load and cache all document metadata
 */
async function loadDocumentCache(): Promise<Map<string, DocumentListItem>> {
  if (documentCache) {
    return documentCache;
  }

  const documents = await listAllDocuments();
  documentCache = new Map();

  for (const doc of documents) {
    documentCache.set(doc.document_id, doc);
  }

  return documentCache;
}

/**
 * Clear the document cache (useful for testing or when documents change)
 */
export function clearDocumentCache(): void {
  documentCache = null;
}

/**
 * Resolve a document ID to its metadata
 */
export async function resolveDocumentId(
  documentId: string
): Promise<DocumentListItem | null> {
  const cache = await loadDocumentCache();
  return cache.get(documentId) || null;
}

/**
 * Resolve multiple document IDs at once
 */
export async function resolveDocumentIds(
  documentIds: string[]
): Promise<Map<string, DocumentListItem | null>> {
  const cache = await loadDocumentCache();
  const results = new Map<string, DocumentListItem | null>();

  for (const id of documentIds) {
    results.set(id, cache.get(id) || null);
  }

  return results;
}

/**
 * Get CSS class for document type (for color-coding links)
 */
export function getDocumentTypeClass(docType: DocumentType): string {
  const typeClasses: Record<DocumentType, string> = {
    policy: 'doc-link-policy',
    procedure: 'doc-link-procedure',
    guideline: 'doc-link-guideline',
    role: 'doc-link-role',
    form: 'doc-link-form',
    training: 'doc-link-training',
  };

  return typeClasses[docType] || 'doc-link-default';
}

/**
 * Get status indicator class
 */
export function getDocumentStatusClass(status: string): string {
  const statusClasses: Record<string, string> = {
    draft: 'doc-link-draft',
    review: 'doc-link-review',
    approved: 'doc-link-approved',
    obsolete: 'doc-link-obsolete',
  };

  return statusClasses[status] || '';
}
