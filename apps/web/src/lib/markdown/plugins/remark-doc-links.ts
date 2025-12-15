/**
 * Remark plugin to detect document IDs and WikiLinks
 * Converts them to link nodes in the markdown AST
 */

import { visit } from 'unist-util-visit';
import type { Root, Text, Link } from 'mdast';
import type { Plugin } from 'unified';
import { getDocumentById } from '../document-index';

// Document ID pattern: SW-[A-Z]{2,6}-[A-Z]{2,6}-\d{3}
const DOC_ID_REGEX = /\b(SW-[A-Z]{2,6}-[A-Z]{2,6}-\d{3})\b/g;

// WikiLink pattern: [[SW-XXX-XXX-NNN]] or [[SW-XXX-XXX-NNN|custom text]]
const WIKILINK_REGEX = /\[\[(SW-[A-Z]{2,6}-[A-Z]{2,6}-\d{3})(?:\|([^\]]+))?\]\]/g;

/**
 * Remark plugin to detect and convert document references to links
 */
export const remarkDocLinks: Plugin<[], Root> = () => {
  return async (tree) => {
    // Collect all document IDs first
    const documentIds = new Set<string>();

    visit(tree, 'text', (node: Text) => {
      const text = node.value;

      // Collect WikiLink document IDs
      const wikiLinkMatches = Array.from(text.matchAll(WIKILINK_REGEX));
      for (const match of wikiLinkMatches) {
        documentIds.add(match[1]);
      }

      // Collect bare document IDs
      const docIdMatches = Array.from(text.matchAll(DOC_ID_REGEX));
      for (const match of docIdMatches) {
        documentIds.add(match[1]);
      }
    });

    // Resolve all document IDs to get their slugs
    const resolvedDocs = new Map<string, string>();

    // Convert Set to Array to avoid iteration issues
    const docIdArray = Array.from(documentIds);

    for (const docId of docIdArray) {
      const doc = await getDocumentById(docId);
      if (doc) {
        resolvedDocs.set(docId, doc.slug);
      }
    }

    // Now process the text nodes and create links
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === undefined) return;

      const text = node.value;
      let hasLinks = false;
      const newNodes: Array<Text | Link> = [];
      let lastIndex = 0;

      // First, process WikiLinks (they take precedence)
      const wikiLinkMatches = Array.from(text.matchAll(WIKILINK_REGEX));

      if (wikiLinkMatches.length > 0) {
        hasLinks = true;

        for (const match of wikiLinkMatches) {
          const fullMatch = match[0];
          const docId = match[1];
          const customText = match[2];
          const matchIndex = match.index!;

          // Add text before the match
          if (matchIndex > lastIndex) {
            newNodes.push({
              type: 'text',
              value: text.slice(lastIndex, matchIndex),
            });
          }

          // Generate URL using slug from index, or fallback to document ID
          const slug = resolvedDocs.get(docId);
          const url = slug ? `/documents/${slug}` : `/documents/${docId}`;

          // Add the link node
          newNodes.push({
            type: 'link',
            url,
            title: null,
            data: {
              hProperties: {
                'data-doc-id': docId,
                'data-doc-link': 'true',
              },
            },
            children: [
              {
                type: 'text',
                value: customText || docId,
              },
            ],
          } as Link);

          lastIndex = matchIndex + fullMatch.length;
        }

        // Add remaining text
        if (lastIndex < text.length) {
          newNodes.push({
            type: 'text',
            value: text.slice(lastIndex),
          });
        }
      } else {
        // If no WikiLinks, look for bare document IDs
        const docIdMatches = Array.from(text.matchAll(DOC_ID_REGEX));

        if (docIdMatches.length > 0) {
          hasLinks = true;

          for (const match of docIdMatches) {
            const docId = match[1];
            const matchIndex = match.index!;

            // Add text before the match
            if (matchIndex > lastIndex) {
              newNodes.push({
                type: 'text',
                value: text.slice(lastIndex, matchIndex),
              });
            }

            // Generate URL using slug from index, or fallback to document ID
            const slug = resolvedDocs.get(docId);
            const url = slug ? `/documents/${slug}` : `/documents/${docId}`;

            // Add the link node
            newNodes.push({
              type: 'link',
              url,
              title: null,
              data: {
                hProperties: {
                  'data-doc-id': docId,
                  'data-doc-link': 'true',
                },
              },
              children: [
                {
                  type: 'text',
                  value: docId,
                },
              ],
            } as Link);

            lastIndex = matchIndex + docId.length;
          }

          // Add remaining text
          if (lastIndex < text.length) {
            newNodes.push({
              type: 'text',
              value: text.slice(lastIndex),
            });
          }
        }
      }

      // Replace the text node with the new nodes
      if (hasLinks && parent.children) {
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
};
