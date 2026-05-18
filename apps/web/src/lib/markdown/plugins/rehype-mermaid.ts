/**
 * Rehype plugin that converts mermaid code blocks to div.mermaid
 * so Mermaid.js can render them client-side.
 *
 * Input:  <pre><code class="language-mermaid">...</code></pre>
 * Output: <div class="mermaid">...</div>
 */

import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

export function rehypeMermaid() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (
        node.tagName !== 'pre' ||
        node.children.length !== 1 ||
        node.children[0].type !== 'element'
      ) return;

      const code = node.children[0] as Element;
      if (code.tagName !== 'code') return;

      const classes = (code.properties?.className as string[]) ?? [];
      if (!classes.includes('language-mermaid')) return;

      // Extract text content
      const text = code.children
        .filter(c => c.type === 'text')
        .map(c => (c as { type: 'text'; value: string }).value)
        .join('');

      // Replace <pre><code> with <div class="mermaid" data-mermaid-source="...">
      if (parent && index !== undefined) {
        (parent as Element).children[index] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['mermaid'], 'data-mermaid-source': text },
          children: [{ type: 'text', value: text }],
        };
      }
    });
  };
}
