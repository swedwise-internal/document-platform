/**
 * Document Link Resolver
 * Resolves document IDs to metadata for link enhancement
 *
 * This module provides a unified interface for document resolution,
 * combining the legacy loader-based approach with the new index-based approach.
 */

import { listAllDocuments } from './loader';
import { getDocumentById as getDocByIdFromIndex, getDocumentsByIds as getDocsByIdsFromIndex } from './document-index';
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
 * Uses the new document index for improved performance
 */
export async function resolveDocumentId(
  documentId: string
): Promise<DocumentListItem | null> {
  try {
    // Try the new index-based approach first
    const indexEntry = await getDocByIdFromIndex(documentId);
    if (indexEntry) {
      // Convert to DocumentListItem format
      return {
        document_id: indexEntry.document_id,
        title: indexEntry.title,
        doc_type: indexEntry.docType,
        status: indexEntry.status,
        classification: 'internal', // Default - this info is not in the index
        path: indexEntry.path,
        slug: indexEntry.slug,
      };
    }
  } catch (error) {
    console.error('Error resolving document from index:', error);
  }

  // Fallback to cache-based approach
  const cache = await loadDocumentCache();
  return cache.get(documentId) || null;
}

/**
 * Resolve multiple document IDs at once
 * Uses the new document index for improved performance
 */
export async function resolveDocumentIds(
  documentIds: string[]
): Promise<Map<string, DocumentListItem | null>> {
  try {
    // Try the new index-based approach first
    const indexEntries = await getDocsByIdsFromIndex(documentIds);
    const results = new Map<string, DocumentListItem | null>();

    // Convert to array to avoid iteration issues
    const entries = Array.from(indexEntries.entries());

    for (const [id, entry] of entries) {
      if (entry) {
        results.set(id, {
          document_id: entry.document_id,
          title: entry.title,
          doc_type: entry.docType,
          status: entry.status,
          classification: 'internal', // Default - this info is not in the index
          path: entry.path,
          slug: entry.slug,
        });
      } else {
        results.set(id, null);
      }
    }

    return results;
  } catch (error) {
    console.error('Error resolving documents from index:', error);
  }

  // Fallback to cache-based approach
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
    contract: 'doc-link-contract',
    'service-component': 'doc-link-service-component',
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

// Re-export document index functions for convenience
export {
  getDocumentById,
  getDocumentsByIds,
  getAllDocuments,
  searchDocuments,
  getDocumentsByType,
  getDocumentsByStatus,
  getDocumentsByCategory,
  getIndexStats,
  rebuildIndex,
  clearIndex,
  isIndexBuilt,
} from './document-index';
