/**
 * Markdown Processing Pipeline
 * Uses unified/remark/rehype for AST-based document processing
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import matter from 'gray-matter';
import {
  DocumentFrontmatter,
  TrainingFrontmatter,
  ParsedDocument
} from '@/types/document';
import { remarkDocLinks } from './plugins/remark-doc-links';
import { rehypeDocLinks } from './plugins/rehype-doc-links';

/**
 * Create the unified processor pipeline
 */
function createProcessor() {
  return unified()
    .use(remarkParse) // Parse markdown to mdast
    .use(remarkGfm) // Support GitHub Flavored Markdown (tables, strikethrough, etc.)
    .use(remarkDocLinks) // Convert document IDs to links (remark plugin)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to hast
    .use(rehypeDocLinks) // Enhance document links with metadata (rehype plugin)
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' }) // Link headings
    .use(rehypeStringify, { allowDangerousHtml: true }); // Convert to HTML string
}

/**
 * Parse markdown content and extract frontmatter
 */
export function parseMarkdown(content: string): {
  frontmatter: DocumentFrontmatter | TrainingFrontmatter;
  body: string;
} {
  const { data, content: body } = matter(content);
  return {
    frontmatter: data as DocumentFrontmatter | TrainingFrontmatter,
    body,
  };
}

/**
 * Render markdown to HTML
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  const processor = createProcessor();
  const result = await processor.process(markdown);
  return String(result);
}

/**
 * Parse and render a complete document
 */
export async function processDocument(
  rawContent: string,
  path: string
): Promise<ParsedDocument> {
  const { frontmatter, body } = parseMarkdown(rawContent);
  const html = await renderMarkdown(body);
  const tableOfContents = extractTableOfContents(body);

  // Generate slug from path (use -- for path separators)
  const slug = path
    .replace(/^content\//, '')
    .replace(/\.md$/, '')
    .replace(/\//g, '--');

  return {
    frontmatter,
    content: html, // Rendered HTML
    rawContent: body, // Raw markdown
    tableOfContents,
    path,
    slug,
  };
}

/**
 * Extract table of contents from markdown
 */
export function extractTableOfContents(markdown: string): Array<{
  level: number;
  text: string;
  id: string;
}> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: Array<{ level: number; text: string; id: string }> = [];

  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ level, text, id });
  }

  return toc;
}

/**
 * Validate document frontmatter
 */
export function validateFrontmatter(
  frontmatter: Partial<DocumentFrontmatter>
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  const required = ['document_id', 'title', 'doc_type', 'version', 'status', 'classification', 'owner'];

  for (const field of required) {
    if (!frontmatter[field as keyof DocumentFrontmatter]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate document_id format (SW-XXX-XXX-NNN)
  if (frontmatter.document_id && !/^SW-[A-Z]+-[A-Z]+-\d{3}$/.test(frontmatter.document_id)) {
    errors.push(`Invalid document_id format: ${frontmatter.document_id}. Expected: SW-XXX-XXX-NNN`);
  }

  // Validate doc_type
  const validTypes = ['policy', 'procedure', 'guideline', 'role', 'form', 'training'];
  if (frontmatter.doc_type && !validTypes.includes(frontmatter.doc_type)) {
    errors.push(`Invalid doc_type: ${frontmatter.doc_type}`);
  }

  // Validate status
  const validStatuses = ['draft', 'review', 'approved', 'obsolete'];
  if (frontmatter.status && !validStatuses.includes(frontmatter.status)) {
    errors.push(`Invalid status: ${frontmatter.status}`);
  }

  // Validate classification
  const validClassifications = ['public', 'internal', 'confidential', 'restricted'];
  if (frontmatter.classification && !validClassifications.includes(frontmatter.classification)) {
    errors.push(`Invalid classification: ${frontmatter.classification}`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
