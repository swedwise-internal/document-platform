/**
 * Full-text search module for IMS documents
 */

import fs from 'fs/promises';
import path from 'path';
import { parseMarkdown } from '../markdown/processor';
import { ContentArea } from '@/types/area';

// Base content directory path
const CONTENT_BASE_DIR = process.env.CONTENT_BASE_DIR || '../../content';

export interface SearchResult {
  document_id: string;
  title: string;
  doc_type: string;
  status: string;
  classification: string;
  standard?: string[];
  slug: string;
  area: ContentArea;
  matches: SearchMatch[];
  score: number;
}

export interface SearchMatch {
  field: 'title' | 'document_id' | 'content';
  snippet: string;
  lineNumber?: number;
}

interface SearchOptions {
  areas?: ContentArea[];
  status?: string[];
  classification?: string[];
  docType?: string[];
  limit?: number;
}

/**
 * Get content path for an area
 */
function getContentPath(area: ContentArea): string {
  return path.resolve(process.cwd(), CONTENT_BASE_DIR, area);
}

/**
 * Get all markdown files recursively
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
  } catch {
    // Directory doesn't exist or isn't readable
  }

  return files;
}

/**
 * Extract snippet around a match
 */
function extractSnippet(content: string, query: string, contextChars: number = 80): string {
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerContent.indexOf(lowerQuery);

  if (index === -1) return '';

  const start = Math.max(0, index - contextChars);
  const end = Math.min(content.length, index + query.length + contextChars);

  let snippet = content.slice(start, end);

  // Add ellipsis if truncated
  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';

  return snippet;
}

/**
 * Find line number of match
 */
function findLineNumber(content: string, query: string): number | undefined {
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerContent.indexOf(lowerQuery);

  if (index === -1) return undefined;

  const lines = content.slice(0, index).split('\n');
  return lines.length;
}

/**
 * Calculate relevance score
 */
function calculateScore(matches: SearchMatch[], query: string, title: string, documentId: string): number {
  let score = 0;

  // Boost for title match
  if (title.toLowerCase().includes(query.toLowerCase())) {
    score += 100;
  }

  // Boost for document ID match
  if (documentId.toLowerCase().includes(query.toLowerCase())) {
    score += 80;
  }

  // Points for each content match
  const contentMatches = matches.filter(m => m.field === 'content');
  score += contentMatches.length * 10;

  // Boost for exact word matches
  const queryWords = query.toLowerCase().split(/\s+/);
  for (const word of queryWords) {
    if (title.toLowerCase().split(/\s+/).includes(word)) {
      score += 20;
    }
  }

  return score;
}

/**
 * Search documents across specified areas
 */
export async function searchDocuments(
  query: string,
  options: SearchOptions = {}
): Promise<SearchResult[]> {
  const {
    areas = ['ims', 'saas'],
    status,
    classification,
    docType,
    limit = 50
  } = options;

  if (!query || query.trim().length < 2) {
    return [];
  }

  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase().trim();

  for (const area of areas) {
    const contentPath = getContentPath(area);
    const files = await getMarkdownFiles(contentPath);

    for (const filePath of files) {
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        const { frontmatter, body } = parseMarkdown(content);

        // Skip if no document_id
        if (!frontmatter.document_id) continue;

        // Apply filters
        if (status && status.length > 0 && !status.includes(frontmatter.status)) continue;
        if (classification && classification.length > 0 && !classification.includes(frontmatter.classification)) continue;
        if (docType && docType.length > 0 && !docType.includes(frontmatter.doc_type)) continue;

        const matches: SearchMatch[] = [];

        // Search title
        if (frontmatter.title?.toLowerCase().includes(lowerQuery)) {
          matches.push({
            field: 'title',
            snippet: frontmatter.title
          });
        }

        // Search document ID
        if (frontmatter.document_id?.toLowerCase().includes(lowerQuery)) {
          matches.push({
            field: 'document_id',
            snippet: frontmatter.document_id
          });
        }

        // Search content
        if (body.toLowerCase().includes(lowerQuery)) {
          // Find up to 3 content matches
          let searchContent = body.toLowerCase();
          let offset = 0;
          let matchCount = 0;

          while (matchCount < 3) {
            const index = searchContent.indexOf(lowerQuery);
            if (index === -1) break;

            const actualIndex = offset + index;
            const snippet = extractSnippet(body, query, 80);
            const lineNumber = findLineNumber(body.slice(0, actualIndex + query.length), query);

            matches.push({
              field: 'content',
              snippet,
              lineNumber
            });

            offset = actualIndex + query.length;
            searchContent = body.toLowerCase().slice(offset);
            matchCount++;
          }
        }

        // Only include if we have matches
        if (matches.length > 0) {
          const relativePath = path.relative(contentPath, filePath);
          const slug = relativePath.replace(/\.md$/, '').replace(/\//g, '--');

          results.push({
            document_id: frontmatter.document_id,
            title: frontmatter.title,
            doc_type: frontmatter.doc_type,
            status: frontmatter.status,
            classification: frontmatter.classification,
            standard: frontmatter.standard,
            slug,
            area,
            matches,
            score: calculateScore(matches, query, frontmatter.title, frontmatter.document_id)
          });
        }
      } catch {
        // Skip files that can't be parsed
      }
    }
  }

  // Sort by score (descending) and limit results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/**
 * Get search suggestions (document titles and IDs matching prefix)
 */
export async function getSearchSuggestions(
  prefix: string,
  areas: ContentArea[] = ['ims', 'saas'],
  limit: number = 10
): Promise<Array<{ label: string; value: string; area: ContentArea }>> {
  if (!prefix || prefix.length < 2) return [];

  const suggestions: Array<{ label: string; value: string; area: ContentArea; score: number }> = [];
  const lowerPrefix = prefix.toLowerCase();

  for (const area of areas) {
    const contentPath = getContentPath(area);
    const files = await getMarkdownFiles(contentPath);

    for (const filePath of files) {
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        const { frontmatter } = parseMarkdown(content);

        if (!frontmatter.document_id) continue;

        const titleMatch = frontmatter.title?.toLowerCase().startsWith(lowerPrefix);
        const idMatch = frontmatter.document_id?.toLowerCase().startsWith(lowerPrefix);

        if (titleMatch) {
          suggestions.push({
            label: frontmatter.title,
            value: frontmatter.title,
            area,
            score: 100
          });
        }

        if (idMatch) {
          suggestions.push({
            label: `${frontmatter.document_id}: ${frontmatter.title}`,
            value: frontmatter.document_id,
            area,
            score: 90
          });
        }
      } catch {
        // Skip
      }
    }
  }

  return suggestions
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ label, value, area }) => ({ label, value, area }));
}
