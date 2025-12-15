# Markdown Processing and Document Index

This directory contains the Markdown processing pipeline and document index service for the IMS/LMS platform.

## Overview

The system uses a unified AST-based approach for processing Markdown documents with integrated internal linking support.

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Markdown       │────▶│  AST Parser     │────▶│  Renderers      │
│  Source Files   │     │  (unified/remark)│     │  HTML           │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Document       │     │  Internal       │     │  Enhanced       │
│  Index          │     │  Links          │     │  Links          │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Core Components

### Document Index (`document-index.ts`)

The document index provides fast O(1) lookups for document metadata, mapping document IDs to their slugs and metadata.

**Key Features:**
- In-memory index for fast lookups
- Automatic index building on first access
- Maps document IDs (e.g., `SW-ISMS-POL-001`) to slugs (e.g., `policies--information-security-policy`)
- Lazy initialization with caching

**API:**

```typescript
// Get document by ID
const doc = await getDocumentById('SW-ISMS-POL-001');
// Returns: { document_id, slug, title, path, docType, status }

// Get multiple documents
const docs = await getDocumentsByIds(['SW-ISMS-POL-001', 'SW-IMS-PRO-002']);

// Search documents
const results = await searchDocuments('security');

// Get documents by type
const policies = await getDocumentsByType('policy');

// Get documents by status
const approved = await getDocumentsByStatus('approved');

// Get documents by category
const policyDocs = await getDocumentsByCategory('policies');

// Get index statistics
const stats = getIndexStats();
// Returns: { totalDocuments, lastBuilt, buildTimeMs, categories }

// Rebuild index (for development)
await rebuildIndex();
```

### Document Link Resolver (`document-link-resolver.ts`)

Unified interface for resolving document IDs to full metadata, combining the index-based approach with the legacy loader.

**API:**

```typescript
// Resolve single document ID
const doc = await resolveDocumentId('SW-ISMS-POL-001');

// Resolve multiple IDs
const docs = await resolveDocumentIds(['SW-ISMS-POL-001', 'SW-IMS-PRO-002']);

// Get CSS classes for styling
const typeClass = getDocumentTypeClass('policy'); // 'doc-link-policy'
const statusClass = getDocumentStatusClass('draft'); // 'doc-link-draft'

// Clear cache (testing)
clearDocumentCache();
```

### Markdown Processor (`processor.ts`)

Unified pipeline for parsing and rendering Markdown documents.

**Features:**
- Frontmatter parsing (YAML)
- GitHub Flavored Markdown support
- Automatic heading IDs and anchor links
- Table of contents extraction
- Internal document linking (auto-detection)

**API:**

```typescript
// Parse frontmatter
const { frontmatter, body } = parseMarkdown(content);

// Render to HTML
const html = await renderMarkdown(markdown);

// Process complete document
const doc = await processDocument(rawContent, path);
// Returns: { frontmatter, content, rawContent, tableOfContents, path, slug }

// Validate frontmatter
const { valid, errors } = validateFrontmatter(frontmatter);
```

### Document Loader (`loader.ts`)

File-based document loading from the content directory.

**API:**

```typescript
// Load by slug
const doc = await loadDocumentBySlug('policies--information-security-policy');

// Load by document ID
const doc = await loadDocumentById('SW-ISMS-POL-001');

// List documents in category
const docs = await listDocuments('policies');

// List all documents
const allDocs = await listAllDocuments();

// Search documents
const results = await searchDocuments('security');

// Get document counts
const counts = await getDocumentCounts();
```

## Plugins

### Remark Plugin: Document Links (`plugins/remark-doc-links.ts`)

Detects and converts document references to link nodes in the Markdown AST.

**Supported Patterns:**

1. **Bare Document IDs**: `SW-ISMS-POL-001`
   - Auto-linked to `/documents/policies--information-security-policy`

2. **WikiLinks**: `[[SW-ISMS-POL-001]]`
   - Links to the document with the document ID as text

3. **WikiLinks with Custom Text**: `[[SW-ISMS-POL-001|Security Policy]]`
   - Links to the document with custom link text

**Example:**

```markdown
This policy references [[SW-ISMS-POL-001|our security policy]] and
must be read in conjunction with SW-IMS-PRO-002.
```

Becomes:

```html
This policy references <a href="/documents/policies--information-security-policy"
  data-doc-id="SW-ISMS-POL-001" data-doc-link="true">our security policy</a> and
must be read in conjunction with <a href="/documents/procedures--risk-assessment-procedure"
  data-doc-id="SW-IMS-PRO-002" data-doc-link="true">SW-IMS-PRO-002</a>.
```

### Rehype Plugin: Document Link Enhancement (`plugins/rehype-doc-links.ts`)

Enhances document links with metadata after conversion to HTML.

**Enhancements:**
- Adds document title as tooltip
- Adds CSS classes for type and status
- Adds data attributes for client-side enhancement
- Marks broken links (document not found)

**Generated HTML:**

```html
<a href="/documents/policies--information-security-policy"
   class="doc-link doc-link-policy doc-link-draft"
   title="Information Security Policy (draft)"
   data-doc-id="SW-ISMS-POL-001"
   data-doc-type="policy"
   data-doc-status="draft"
   data-doc-title="Information Security Policy"
   data-doc-link="true">
  SW-ISMS-POL-001
</a>
```

## Internal Linking Flow

1. **Author writes Markdown** with document IDs or WikiLinks
2. **Remark plugin** (during parsing):
   - Collects all document IDs from the text
   - Queries the document index to get slugs
   - Converts document references to link nodes with correct URLs
3. **Rehype plugin** (during HTML generation):
   - Queries document metadata for all links
   - Adds CSS classes, tooltips, and data attributes
   - Marks broken links

## API Endpoints

### Get Index Stats

```http
GET /api/index/stats
```

Response:
```json
{
  "success": true,
  "data": {
    "totalDocuments": 8,
    "lastBuilt": "2025-12-15T13:52:00.000Z",
    "buildTimeMs": 55,
    "categories": {
      "policies": 2,
      "procedures": 1,
      "registers": 3,
      "role-descriptions": 2
    }
  }
}
```

### Rebuild Index

```http
POST /api/index/rebuild
```

Response:
```json
{
  "success": true,
  "message": "Index rebuilt successfully",
  "data": {
    "totalDocuments": 8,
    "lastBuilt": "2025-12-15T13:55:00.000Z",
    "buildTimeMs": 42,
    "categories": { ... }
  }
}
```

## Performance

The document index is optimized for fast lookups:

- **Index build time**: ~50ms for 8 documents
- **Lookup time**: O(1) for document ID → slug resolution
- **Lazy initialization**: Index built on first access
- **In-memory caching**: No disk I/O after initial build

## Document ID Format

```
SW-[SYSTEM]-[TYPE]-[NUMBER]

Examples:
  SW-IMS-POL-001    (IMS Policy #1)
  SW-ISMS-POL-001   (ISMS Policy #1)
  SW-QMS-PRO-003    (QMS Procedure #3)
  SW-EMS-REG-001    (EMS Register #1)
  SW-ISMS-ROLE-001  (ISMS Role #1)

Systems: IMS, QMS, EMS, ISMS
Types: POL, PRO, GUI, ROLE, FRM, TRN, REG
```

## Slug Format

Slugs are generated from file paths with `--` as the separator:

```
content/ims/policies/information-security-policy.md
→ policies--information-security-policy

content/ims/procedures/risk-assessment-procedure.md
→ procedures--risk-assessment-procedure

content/ims/registers/risk-register.md
→ registers--risk-register
```

## Development

### Watch for File Changes

For development, you can rebuild the index when files change:

```typescript
import chokidar from 'chokidar';
import { rebuildIndex } from '@/lib/markdown/document-index';

const watcher = chokidar.watch('../../content/ims/**/*.md');

watcher.on('change', async (path) => {
  console.log(`File changed: ${path}`);
  await rebuildIndex();
});
```

### Testing

```typescript
import { clearIndex, buildIndex, getDocumentById } from '@/lib/markdown/document-index';

// Clear index before each test
beforeEach(() => {
  clearIndex();
});

// Test document lookup
test('should find document by ID', async () => {
  await buildIndex();
  const doc = await getDocumentById('SW-ISMS-POL-001');
  expect(doc).toBeDefined();
  expect(doc?.slug).toBe('policies--information-security-policy');
});
```

## Troubleshooting

### Index not building

- Check that `CONTENT_DIR` environment variable points to the correct directory
- Verify Markdown files have `document_id` in frontmatter
- Check console for error messages during index build

### Links not resolving

- Verify document ID format matches the regex pattern
- Check that the referenced document exists in the content directory
- Inspect the index stats to see if the document was indexed

### Broken links

- Links will be marked with `doc-link-broken` class if document is not found
- Check the `data-doc-id` attribute to see which document is missing
- Rebuild the index if documents were recently added
