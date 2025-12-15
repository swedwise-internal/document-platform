/**
 * Rehype plugin to enhance document links with metadata
 * Adds title, status, and type information to links
 */

import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';
import type { Plugin } from 'unified';
import {
  resolveDocumentIds,
  getDocumentTypeClass,
  getDocumentStatusClass,
} from '../document-link-resolver';

interface RehypeDocLinksOptions {
  // Future options could include:
  // - showTooltips: boolean
  // - colorCode: boolean
}

/**
 * Rehype plugin to enhance document links with metadata
 */
export const rehypeDocLinks: Plugin<[RehypeDocLinksOptions?], Root> = (options = {}) => {
  return async (tree) => {
    // Collect all document IDs from the tree
    const documentIds = new Set<string>();

    visit(tree, 'element', (node: Element) => {
      if (
        node.tagName === 'a' &&
        node.properties &&
        node.properties['dataDocLink'] === 'true'
      ) {
        const docId = node.properties['dataDocId'] as string;
        if (docId) {
          documentIds.add(docId);
        }
      }
    });

    // Resolve all document IDs at once
    const resolvedDocs = await resolveDocumentIds(Array.from(documentIds));

    // Enhance each link with metadata
    visit(tree, 'element', (node: Element) => {
      if (
        node.tagName === 'a' &&
        node.properties &&
        node.properties['dataDocLink'] === 'true'
      ) {
        const docId = node.properties['dataDocId'] as string;
        if (!docId) return;

        const doc = resolvedDocs.get(docId);

        if (doc) {
          // Document found - enhance the link
          const typeClass = getDocumentTypeClass(doc.doc_type);
          const statusClass = getDocumentStatusClass(doc.status);

          // Add classes
          const existingClass = node.properties.className as string[] | undefined;
          node.properties.className = [
            ...(existingClass || []),
            'doc-link',
            typeClass,
            statusClass,
          ].filter(Boolean);

          // Add title attribute (tooltip)
          node.properties.title = `${doc.title} (${doc.status})`;

          // Add data attributes for potential client-side enhancement
          node.properties['dataDocType'] = doc.doc_type;
          node.properties['dataDocStatus'] = doc.status;
          node.properties['dataDocTitle'] = doc.title;
        } else {
          // Document not found - mark as broken link
          const existingClass = node.properties.className as string[] | undefined;
          node.properties.className = [
            ...(existingClass || []),
            'doc-link',
            'doc-link-broken',
          ];

          // Add title to indicate broken link
          node.properties.title = `Document not found: ${docId}`;

          // Keep the data-doc-id for debugging
          node.properties['dataDocMissing'] = 'true';
        }
      }
    });
  };
};
