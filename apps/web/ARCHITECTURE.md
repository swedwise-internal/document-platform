# Document Index & Internal Linking Architecture

## System Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Content Layer                                    │
│  content/ims/                                                          │
│    ├── policies/information-security-policy.md                         │
│    │   frontmatter: document_id: SW-ISMS-POL-001                       │
│    ├── procedures/risk-assessment-procedure.md                         │
│    │   frontmatter: document_id: SW-IMS-PRO-002                        │
│    └── registers/risk-register.md                                      │
│        frontmatter: document_id: SW-IMS-REG-001                        │
└────────────────────────────────────────────────────────────────────────┘
                               │
                               │ File System Scan
                               ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      Document Index Service                             │
│  src/lib/markdown/document-index.ts                                    │
│                                                                         │
│  In-Memory Map:                                                        │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │ 'SW-ISMS-POL-001' → {                                          │   │
│  │   slug: 'policies--information-security-policy',               │   │
│  │   title: 'Information Security Policy',                        │   │
│  │   docType: 'policy', status: 'draft'                           │   │
│  │ }                                                               │   │
│  │ 'SW-IMS-PRO-002' → {                                           │   │
│  │   slug: 'procedures--risk-assessment-procedure', ...           │   │
│  │ }                                                               │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  API: getDocumentById(), searchDocuments(), etc.                      │
└────────────────────────────────────────────────────────────────────────┘
                               │
                               │ Queries during rendering
                               ▼
┌────────────────────────────────────────────────────────────────────────┐
│                    Markdown Processing Pipeline                         │
│                                                                         │
│  Step 1: Parse Markdown → AST (remark)                                │
│  ┌──────────────────────────────────────────────────────────────┐     │
│  │ Input: "This references SW-ISMS-POL-001"                      │     │
│  │ Output: mdast tree with text nodes                            │     │
│  └──────────────────────────────────────────────────────────────┘     │
│                               │                                         │
│                               ▼                                         │
│  Step 2: Detect & Convert Document Links (remark-doc-links)           │
│  ┌──────────────────────────────────────────────────────────────┐     │
│  │ 1. Find: SW-ISMS-POL-001                                      │     │
│  │ 2. Query index: getDocumentById('SW-ISMS-POL-001')           │     │
│  │ 3. Get slug: 'policies--information-security-policy'          │     │
│  │ 4. Create link: { type: 'link',                              │     │
│  │                   url: '/documents/policies--...', ... }      │     │
│  └──────────────────────────────────────────────────────────────┘     │
│                               │                                         │
│                               ▼                                         │
│  Step 3: Convert AST → HTML (rehype)                                  │
│  ┌──────────────────────────────────────────────────────────────┐     │
│  │ mdast link → hast <a> element                                 │     │
│  └──────────────────────────────────────────────────────────────┘     │
│                               │                                         │
│                               ▼                                         │
│  Step 4: Enhance Links (rehype-doc-links)                             │
│  ┌──────────────────────────────────────────────────────────────┐     │
│  │ 1. Find all links with data-doc-id                            │     │
│  │ 2. Resolve metadata from document-link-resolver               │     │
│  │ 3. Add CSS classes, title, data attributes                    │     │
│  │ Output: <a href="/documents/policies--..."                    │     │
│  │            class="doc-link doc-link-policy doc-link-draft"    │     │
│  │            title="Information Security Policy (draft)"        │     │
│  │            data-doc-type="policy" ...>                        │     │
│  └──────────────────────────────────────────────────────────────┘     │
│                               │                                         │
│                               ▼                                         │
│  Step 5: Generate HTML String                                         │
│  ┌──────────────────────────────────────────────────────────────┐     │
│  │ Output: Fully rendered HTML with enhanced links               │     │
│  └──────────────────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Rendered Output                                  │
│  ┌──────────────────────────────────────────────────────────────┐     │
│  │ <p>This references                                            │     │
│  │   <a href="/documents/policies--information-security-policy"  │     │
│  │      class="doc-link doc-link-policy doc-link-draft"          │     │
│  │      title="Information Security Policy (draft)"              │     │
│  │      data-doc-id="SW-ISMS-POL-001"                           │     │
│  │      data-doc-type="policy"                                   │     │
│  │      data-doc-status="draft"                                  │     │
│  │      data-doc-link="true">                                    │     │
│  │     SW-ISMS-POL-001                                           │     │
│  │   </a>                                                         │     │
│  │ </p>                                                           │     │
│  └──────────────────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

### Document Index Service
**File**: `src/lib/markdown/document-index.ts`

**Responsibilities**:
- Scan content directory for Markdown files
- Extract document_id from frontmatter
- Build in-memory map: document_id → metadata
- Provide O(1) lookup functions
- Track statistics

**API**:
```typescript
getDocumentById(id: string): Promise<DocumentIndexEntry | null>
getDocumentsByIds(ids: string[]): Promise<Map<string, DocumentIndexEntry>>
getAllDocuments(): Promise<DocumentIndexEntry[]>
searchDocuments(query: string): Promise<DocumentIndexEntry[]>
getIndexStats(): DocumentIndexStats
rebuildIndex(): Promise<void>
```

### Document Link Resolver
**File**: `src/lib/markdown/document-link-resolver.ts`

**Responsibilities**:
- Unified interface for document resolution
- Uses index service as primary source
- Falls back to file-based loader
- Provides CSS class mapping
- Re-exports index functions

**API**:
```typescript
resolveDocumentId(id: string): Promise<DocumentListItem | null>
resolveDocumentIds(ids: string[]): Promise<Map<string, DocumentListItem>>
getDocumentTypeClass(type: DocumentType): string
getDocumentStatusClass(status: string): string
```

### Remark Plugin: Document Links
**File**: `src/lib/markdown/plugins/remark-doc-links.ts`

**Responsibilities**:
- Detect document IDs in text (SW-XXX-XXX-NNN)
- Detect WikiLinks ([[SW-XXX-XXX-NNN]] or [[SW-XXX-XXX-NNN|text]])
- Query index for slugs
- Create link nodes in AST with correct URLs

**Patterns Supported**:
- Bare ID: `SW-ISMS-POL-001`
- WikiLink: `[[SW-ISMS-POL-001]]`
- WikiLink with text: `[[SW-ISMS-POL-001|Security Policy]]`

### Rehype Plugin: Link Enhancement
**File**: `src/lib/markdown/plugins/rehype-doc-links.ts`

**Responsibilities**:
- Find all document links (data-doc-link="true")
- Resolve metadata for each link
- Add CSS classes for styling
- Add title attribute (tooltip)
- Add data attributes for client-side use
- Mark broken links

**Enhanced Attributes**:
- `class`: doc-link, doc-link-{type}, doc-link-{status}
- `title`: "{Document Title} ({status})"
- `data-doc-type`: Document type
- `data-doc-status`: Document status
- `data-doc-title`: Document title

## Data Flow Example

### Input Document

```markdown
---
document_id: SW-IMS-PRO-002
title: Risk Assessment Procedure
related_documents:
  - SW-ISMS-POL-001
---

# Risk Assessment

This procedure implements [[SW-ISMS-POL-001|our security policy]].

See also SW-IMS-REG-001 for risk tracking.
```

### Processing Steps

1. **Parse Frontmatter** → Extract metadata
2. **Parse Body** → Create mdast tree
3. **Detect Links** → Find `SW-ISMS-POL-001` and `SW-IMS-REG-001`
4. **Query Index**:
   - `SW-ISMS-POL-001` → `policies--information-security-policy`
   - `SW-IMS-REG-001` → `registers--risk-register`
5. **Create Links** → Add link nodes to AST
6. **Convert to HTML** → mdast → hast
7. **Enhance Links** → Add metadata, classes, tooltips
8. **Stringify** → Final HTML

### Output HTML

```html
<h1>Risk Assessment</h1>

<p>This procedure implements
  <a href="/documents/policies--information-security-policy"
     class="doc-link doc-link-policy doc-link-draft"
     title="Information Security Policy (draft)"
     data-doc-id="SW-ISMS-POL-001"
     data-doc-type="policy"
     data-doc-status="draft"
     data-doc-title="Information Security Policy"
     data-doc-link="true">
    our security policy
  </a>.
</p>

<p>See also
  <a href="/documents/registers--risk-register"
     class="doc-link doc-link-form doc-link-approved"
     title="Risk Register (approved)"
     data-doc-id="SW-IMS-REG-001"
     data-doc-type="form"
     data-doc-status="approved"
     data-doc-title="Risk Register"
     data-doc-link="true">
    SW-IMS-REG-001
  </a>
  for risk tracking.
</p>
```

## Performance Characteristics

### Index Building
- **Time**: ~50-60ms for 8 documents
- **Space**: ~1KB per document (metadata only)
- **When**: On first access (lazy initialization)

### Link Resolution
- **Remark Phase**: Batch lookup for all IDs in document
- **Rehype Phase**: Batch lookup for all links in HTML
- **Lookup Time**: O(1) hash map access

### Caching Strategy
- **Index**: In-memory, persistent until rebuild
- **Resolver Cache**: Separate cache for DocumentListItem format
- **No Disk I/O**: After initial index build

## Error Handling

### Document Not Found
- **In Index**: Returns `null` from `getDocumentById()`
- **In Remark**: Falls back to document ID as URL
- **In Rehype**: Adds `doc-link-broken` class
- **In Browser**: Link still works (may return 404)

### Invalid Document ID Format
- **Regex**: Only matches `SW-[A-Z]{2,6}-[A-Z]{2,6}-\d{3}`
- **Invalid Format**: Ignored, not converted to link
- **No Errors**: Graceful degradation

### Missing Frontmatter
- **No document_id**: Skipped during index build
- **Warning**: Console warning logged
- **Impact**: Document not linkable by ID

## Future Enhancements

1. **File Watching**: Auto-rebuild on file changes
2. **Incremental Updates**: Update single documents
3. **Link Validation**: Check for broken links during build
4. **Link Graph**: Visualize document relationships
5. **Search Index**: Full-text search capability
6. **Analytics**: Track most-referenced documents
7. **Version Support**: Link to specific versions
8. **External Links**: Support cross-IMS linking (IMS ↔ SaaS)
