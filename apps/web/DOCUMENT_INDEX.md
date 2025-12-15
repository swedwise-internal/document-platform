# Document Index Implementation Summary

## Overview

A complete document index service has been implemented to enable efficient internal linking between documents using document IDs.

## What Was Built

### 1. Document Index Service (`src/lib/markdown/document-index.ts`)

An in-memory index that maps document IDs to their file paths and slugs for O(1) lookup performance.

**Key Features:**
- Scans all Markdown files in `content/ims/` on first access
- Extracts document_id from frontmatter
- Maps document IDs to slugs (e.g., `SW-ISMS-POL-001` → `policies--information-security-policy`)
- Provides fast lookup functions
- Tracks statistics (build time, document counts by category)

**API Functions:**
```typescript
getDocumentById(id: string)              // Get single document
getDocumentsByIds(ids: string[])         // Get multiple documents
getAllDocuments()                        // Get all indexed documents
searchDocuments(query: string)           // Search by title or ID
getDocumentsByType(type: DocumentType)   // Filter by type
getDocumentsByStatus(status: DocumentStatus) // Filter by status
getDocumentsByCategory(category: string) // Filter by directory
getIndexStats()                          // Get index statistics
rebuildIndex()                           // Rebuild the index
clearIndex()                             // Clear the index (testing)
isIndexBuilt()                           // Check if built
```

### 2. Updated Remark Plugin (`src/lib/markdown/plugins/remark-doc-links.ts`)

Modified the document link detection plugin to use the index for generating correct URLs.

**How It Works:**
1. Scans document text for document IDs and WikiLinks
2. Queries the document index to get slugs for all found IDs
3. Generates URLs using slugs: `/documents/policies--information-security-policy`
4. Falls back to document ID if not found in index

**Supported Patterns:**
- Bare IDs: `SW-ISMS-POL-001` → auto-linked
- WikiLinks: `[[SW-ISMS-POL-001]]` → linked with ID as text
- WikiLinks with custom text: `[[SW-ISMS-POL-001|Security Policy]]` → linked with custom text

### 3. Updated Document Link Resolver (`src/lib/markdown/document-link-resolver.ts`)

Enhanced to use the document index as the primary resolution method with fallback to the loader-based approach.

**Features:**
- Uses index for fast lookups
- Falls back to file scanning if index lookup fails
- Maintains backward compatibility with existing code
- Re-exports all index functions for convenience

### 4. API Endpoints

Two new API endpoints for index management:

#### GET `/api/index/stats`
Returns index statistics:
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

#### POST `/api/index/rebuild`
Rebuilds the index (useful for development):
```json
{
  "success": true,
  "message": "Index rebuilt successfully",
  "data": { /* stats */ }
}
```

## How Internal Linking Works

### Before (Problem)

Documents referenced each other using document IDs in frontmatter and text:
- Document ID: `SW-ISMS-POL-001`
- File path: `content/ims/policies/information-security-policy.md`
- Slug: `policies--information-security-policy`
- URL: `/documents/policies--information-security-policy`

The remark plugin tried to use the document ID as the URL, which didn't work because:
- URL needed the slug, not the document ID
- No way to map document ID → slug

### After (Solution)

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Author writes: "See SW-ISMS-POL-001 for details"       │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Remark plugin detects: SW-ISMS-POL-001                 │
│    Queries index: getDocumentById('SW-ISMS-POL-001')      │
│    Returns: { slug: 'policies--information-security-...'}  │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Creates link with correct URL:                          │
│    <a href="/documents/policies--information-security-..."> │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Rehype plugin enhances link:                            │
│    Adds title, CSS classes, data attributes                │
└─────────────────────────────────────────────────────────────┘
```

## Performance

The document index provides significant performance improvements:

- **Build Time**: ~50-60ms for 8 documents
- **Lookup Time**: O(1) hash map lookup
- **Memory**: Minimal (only metadata, not full content)
- **Lazy Initialization**: Built on first access, cached thereafter

Current index stats from build:
```
Document index built: 8 documents in 55ms
Categories: { policies: 2, procedures: 1, registers: 3, 'role-descriptions': 2 }
```

## Document Structure

### Indexed Documents

1. **Policies** (2 documents)
   - `SW-ISMS-POL-001` → `policies--information-security-policy`
   - `SW-EMS-POL-001` → `policies--environmental-policy`

2. **Procedures** (1 document)
   - `SW-IMS-PRO-002` → `procedures--risk-assessment-procedure`

3. **Registers** (3 documents)
   - `SW-IMS-REG-001` → `registers--risk-register`
   - `SW-ISMS-REG-001` → `registers--asset-register`
   - `SW-EMS-REG-001` → `registers--environmental-aspects-register`

4. **Role Descriptions** (2 documents)
   - `SW-ISMS-ROLE-001` → `role-descriptions--ciso-role`
   - `SW-IMS-ROLE-001` → `role-descriptions--ims-owner-role`

### Document ID References Found

The risk assessment procedure contains multiple internal references:
- `SW-IMS-POL-001` - IMS Policy
- `SW-ISMS-POL-001` - Information Security Policy
- `SW-EMS-POL-001` - Environmental Policy
- `SW-IMS-FRM-003` - Risk Register Form

## Usage Examples

### In Markdown Documents

```markdown
---
document_id: SW-IMS-PRO-002
title: Risk Assessment Procedure
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
---

# Risk Assessment Procedure

This procedure implements the requirements of [[SW-IMS-POL-001|our IMS Policy]]
and SW-ISMS-POL-001.

All risks are recorded in the Risk Register (SW-IMS-REG-001).
```

### In Code

```typescript
import { getDocumentById, searchDocuments } from '@/lib/markdown/document-index';

// Get a specific document
const doc = await getDocumentById('SW-ISMS-POL-001');
console.log(doc?.slug); // 'policies--information-security-policy'

// Search for documents
const results = await searchDocuments('security');
results.forEach(doc => {
  console.log(`${doc.document_id}: ${doc.title}`);
});

// Get all policies
const policies = await getDocumentsByType('policy');
```

## Verification

All verification steps passed:

1. **Type Checking**: ✅ `npm run typecheck` - No errors
2. **Build**: ✅ `npm run build` - Successful
3. **Index Building**: ✅ Automatic during build (8 documents in 55ms)
4. **API Routes**: ✅ Created and compiled
5. **Documentation**: ✅ Complete README in `src/lib/markdown/`

## Files Modified/Created

### Created Files
1. `/apps/web/src/lib/markdown/document-index.ts` (311 lines)
2. `/apps/web/src/app/api/index/stats/route.ts` (24 lines)
3. `/apps/web/src/app/api/index/rebuild/route.ts` (25 lines)
4. `/apps/web/src/lib/markdown/README.md` (documentation)
5. `/apps/web/DOCUMENT_INDEX.md` (this file)

### Modified Files
1. `/apps/web/src/lib/markdown/plugins/remark-doc-links.ts`
   - Added index-based slug resolution
   - Changed URL generation to use slugs

2. `/apps/web/src/lib/markdown/document-link-resolver.ts`
   - Integrated with document index
   - Re-exported index functions
   - Added fallback mechanism

## Next Steps

The document index is now ready for use. Future enhancements could include:

1. **File Watching**: Automatically rebuild index when files change in development
2. **Incremental Updates**: Update single documents instead of full rebuild
3. **Validation**: Check for broken links during build
4. **Link Graph**: Visualize document relationships
5. **Search Index**: Full-text search across all documents
6. **Classification Support**: Add classification field to index entries

## Testing Recommendations

1. Test internal linking in a document with references
2. Test WikiLink syntax with custom text
3. Test broken link detection (reference non-existent document)
4. Test index rebuild endpoint
5. Test search functionality
6. Verify tooltips and CSS classes on rendered links
