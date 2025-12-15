# Content Area Selection Implementation Plan

## Overview

Add multi-area support to the Swedwise IMS/LMS web application, allowing users to select between IMS (ISO certification) and SaaS (service documentation) content areas from a central landing page. Each area should function as a distinct section with its own dashboard, navigation, and document library.

## Architecture Decisions

### 1. Route Structure

Use Next.js 14 App Router **route groups** for clean URL structure and area isolation:

```
/                          # Area selection landing page
├── /(areas)/
│   ├── ims/              # IMS area
│   │   ├── page.tsx      # IMS dashboard
│   │   ├── documents/    # IMS document routes
│   │   │   ├── page.tsx
│   │   │   └── [...slug]/
│   │   │       └── page.tsx
│   │   ├── training/     # IMS training routes
│   │   │   └── page.tsx
│   │   └── registers/    # IMS registers
│   │       └── page.tsx
│   └── saas/             # SaaS area
│       ├── page.tsx      # SaaS dashboard
│       └── documents/    # SaaS document routes
│           ├── page.tsx
│           └── [...slug]/
│               └── page.tsx
```

**Rationale**: Route groups `(areas)` allow logical grouping without affecting URLs. The area name becomes part of the URL path, making bookmarks and navigation intuitive.

### 2. Content Loading Strategy

**Area-Aware Document Loader**: Extend the existing loader to accept an area parameter:

```typescript
// Before
const CONTENT_DIR = '../../content/ims';

// After
function getContentPath(area: 'ims' | 'saas'): string {
  const baseDir = process.env.CONTENT_DIR || '../../content';
  return path.resolve(process.cwd(), baseDir, area);
}
```

**Benefits**:
- Reuses existing markdown processing pipeline
- Maintains backward compatibility
- Simple to add new areas (just add directory)
- Each area can have different document categories

### 3. Type System Extensions

Add area-aware types to maintain type safety:

```typescript
export type ContentArea = 'ims' | 'saas';

export interface AreaConfig {
  id: ContentArea;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  categories: DocumentCategory[];
}

export interface DocumentListItem {
  // Existing fields...
  area: ContentArea; // NEW: identify which area document belongs to
}
```

### 4. Component Reusability

**Shared Components**: Reuse existing components (DocumentList, filters, CollapsibleSection) by making them area-agnostic.

**Area-Specific Components**: Create dashboard components that display area-specific metrics and quick actions.

**Isolation Strategy**:
- Shared UI components in `/components/ui/`
- Shared document components in `/components/documents/`
- Area-specific components in `/app/(areas)/[area-name]/components/`

### 5. Navigation Strategy

**Context-Aware Navigation**: Navigation should reflect the current area:

```
Header:
- Logo (links to area selection)
- Area Breadcrumb (IMS | SaaS)
- Area-specific menu items

IMS Navigation:
- Documents → Policies, Procedures, Guidelines, Roles
- Training → LMS courses
- Registers → Risk, Asset registers

SaaS Navigation:
- Documents → Service descriptions, Operations, Sales
- (Future) SLA Dashboard
- (Future) Customer Portal
```

## File Structure Changes

```
apps/web/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # MODIFY: Update header navigation
│   │   ├── page.tsx                      # REPLACE: Area selection landing
│   │   ├── (areas)/                      # NEW: Route group for areas
│   │   │   ├── layout.tsx               # NEW: Area-aware layout
│   │   │   ├── ims/                     # NEW: IMS area
│   │   │   │   ├── layout.tsx           # NEW: IMS-specific layout
│   │   │   │   ├── page.tsx             # NEW: IMS dashboard
│   │   │   │   ├── components/          # NEW: IMS-specific components
│   │   │   │   │   ├── IMSDashboard.tsx
│   │   │   │   │   └── ISOStandardsCard.tsx
│   │   │   │   ├── documents/
│   │   │   │   │   ├── page.tsx         # MOVE from /documents
│   │   │   │   │   └── [...slug]/
│   │   │   │   │       └── page.tsx     # MOVE from /documents/[slug]
│   │   │   │   ├── training/
│   │   │   │   │   └── page.tsx         # MOVE from /training
│   │   │   │   └── registers/
│   │   │   │       └── page.tsx         # MOVE from /registers
│   │   │   └── saas/                    # NEW: SaaS area
│   │   │       ├── layout.tsx           # NEW: SaaS-specific layout
│   │   │       ├── page.tsx             # NEW: SaaS dashboard
│   │   │       ├── components/          # NEW: SaaS-specific components
│   │   │       │   ├── SaaSDashboard.tsx
│   │   │       │   └── ServiceMetricsCard.tsx
│   │   │       └── documents/
│   │   │           ├── page.tsx         # NEW: SaaS documents list
│   │   │           └── [...slug]/
│   │   │               └── page.tsx     # NEW: SaaS document viewer
│   │   ├── globals.css                  # MODIFY: Add area-specific styles
│   │   └── api/                         # FUTURE: API routes
│   ├── components/
│   │   ├── AreaSelector.tsx             # NEW: Area selection cards
│   │   ├── AreaBreadcrumb.tsx           # NEW: Current area indicator
│   │   ├── documents/                   # NEW: Organize document components
│   │   │   ├── DocumentList.tsx        # MOVE from /components
│   │   │   ├── DocumentsPageClient.tsx # MOVE from /components
│   │   │   └── filters/                # NEW: Organize filters
│   │   │       ├── ISOStandardFilter.tsx  # MOVE
│   │   │       ├── ClassificationFilter.tsx # MOVE
│   │   │       └── StatusFilter.tsx     # MOVE
│   │   └── ui/                          # NEW: Base UI components
│   │       └── CollapsibleSection.tsx   # MOVE from /components
│   ├── lib/
│   │   ├── markdown/
│   │   │   ├── loader.ts                # MODIFY: Add area parameter
│   │   │   └── processor.ts             # NO CHANGE
│   │   └── areas/                       # NEW: Area configuration
│   │       ├── config.ts                # NEW: Area definitions
│   │       └── categories.ts            # NEW: Area-specific categories
│   └── types/
│       ├── document.ts                  # MODIFY: Add ContentArea type
│       └── area.ts                      # NEW: Area-related types
│
├── public/                               # NO CHANGE
├── prisma/                               # FUTURE: DB schema updates
└── package.json                          # NO CHANGE
```

## Component Hierarchy

```
Root Layout (apps/web/src/app/layout.tsx)
├── Header (modified)
│   ├── Logo (links to /)
│   ├── AreaBreadcrumb (if in area)
│   └── Navigation (area-aware)
└── Main Content
    └── Page Content

Area Selection Page (/)
└── AreaSelector
    ├── AreaCard (IMS)
    └── AreaCard (SaaS)

Area Layout (/(areas)/layout.tsx)
└── AreaProvider (context for current area)

IMS Dashboard (/ims)
├── IMSDashboard
│   ├── Stats Row (documents, training, completion, reviews)
│   ├── Document Categories Grid
│   ├── ISO Standards Cards
│   └── Quick Actions
└── Components from components/documents/

IMS Documents List (/ims/documents)
├── DocumentsPageClient
│   ├── Filters Row
│   │   ├── ISOStandardFilter
│   │   ├── ClassificationFilter
│   │   └── StatusFilter
│   └── DocumentList
│       └── CollapsibleSection (per category)

IMS Document Viewer (/ims/documents/[...slug])
├── Document Header (title, metadata)
├── Table of Contents
└── Document Content (rendered HTML)

SaaS Dashboard (/saas)
├── SaaSDashboard
│   ├── Stats Row (service docs, operations docs, sales materials)
│   ├── Document Categories Grid
│   ├── Service Metrics Card
│   └── Quick Actions
└── Components from components/documents/

SaaS Documents List (/saas/documents)
├── DocumentsPageClient (same as IMS)
│   ├── Filters Row (area-appropriate)
│   └── DocumentList
└── Components from components/documents/
```

## Implementation Steps

### Phase 1: Foundation (Type System & Configuration)

**Step 1.1: Create area types**

```bash
# Create new types file
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/types/area.ts
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/types/area.ts`
```typescript
export type ContentArea = 'ims' | 'saas';

export interface AreaConfig {
  id: ContentArea;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
  color: {
    bg: string;
    border: string;
    text: string;
  };
}

export interface AreaContext {
  area: ContentArea;
  config: AreaConfig;
}
```

**Step 1.2: Modify document types**

```bash
# Edit existing types file
# Add area field to DocumentListItem
```

**Modify**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/types/document.ts`
- Add `area: ContentArea` to `DocumentListItem` interface
- Import `ContentArea` from `./area`

**Step 1.3: Create area configuration**

```bash
# Create areas configuration directory
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/lib/areas
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/lib/areas/config.ts
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/lib/areas/categories.ts
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/lib/areas/config.ts`
```typescript
import { AreaConfig } from '@/types/area';

export const AREA_CONFIGS: Record<string, AreaConfig> = {
  ims: {
    id: 'ims',
    name: 'IMS',
    tagline: 'Integrated Management System',
    description: 'ISO 9001, 14001, and 27001 certification documentation',
    icon: '🏢',
    href: '/ims',
    color: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
    },
  },
  saas: {
    id: 'saas',
    name: 'SaaS',
    tagline: 'SaaS Service Documentation',
    description: 'Service descriptions, operations, and sales materials',
    icon: '☁️',
    href: '/saas',
    color: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-900',
    },
  },
};

export function getAreaConfig(area: string): AreaConfig {
  const config = AREA_CONFIGS[area];
  if (!config) {
    throw new Error(`Unknown area: ${area}`);
  }
  return config;
}
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/lib/areas/categories.ts`
```typescript
import { DocumentCategory } from '@/types/document';
import { ContentArea } from '@/types/area';

export const IMS_CATEGORIES: DocumentCategory[] = [
  { id: 'policies', name: 'Policies', description: 'Management policies', path: 'policies', count: 0 },
  { id: 'procedures', name: 'Procedures', description: 'Operational procedures', path: 'procedures', count: 0 },
  { id: 'guidelines', name: 'Guidelines', description: 'Non-mandatory guidance', path: 'guidelines', count: 0 },
  { id: 'role-descriptions', name: 'Roles', description: 'Role definitions', path: 'role-descriptions', count: 0 },
  { id: 'training', name: 'Training', description: 'LMS courses', path: 'training', count: 0 },
  { id: 'forms', name: 'Forms', description: 'Templates and forms', path: 'forms', count: 0 },
  { id: 'registers', name: 'Registers', description: 'Risk and asset registers', path: 'registers', count: 0 },
];

export const SAAS_CATEGORIES: DocumentCategory[] = [
  { id: 'service-description', name: 'Service Description', description: 'Technical service documentation', path: 'service-description', count: 0 },
  { id: 'operations', name: 'Operations', description: 'Operational procedures and runbooks', path: 'operations', count: 0 },
  { id: 'onboarding', name: 'Onboarding', description: 'Customer onboarding guides', path: 'onboarding', count: 0 },
  { id: 'sales-materials', name: 'Sales Materials', description: 'Sales collateral and demos', path: 'sales-materials', count: 0 },
  { id: 'pricing', name: 'Pricing', description: 'Pricing models and packages', path: 'pricing', count: 0 },
  { id: 'training', name: 'Training', description: 'Staff training materials', path: 'training', count: 0 },
];

export function getCategoriesForArea(area: ContentArea): DocumentCategory[] {
  switch (area) {
    case 'ims':
      return IMS_CATEGORIES;
    case 'saas':
      return SAAS_CATEGORIES;
    default:
      return [];
  }
}
```

### Phase 2: Update Document Loader

**Step 2.1: Modify loader to accept area parameter**

**Modify**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/lib/markdown/loader.ts`

Changes required:
1. Update `getContentPath()` to accept area parameter
2. Add area parameter to all export functions
3. Add `area` field to returned `DocumentListItem` objects
4. Update `CONTENT_DIR` handling

**Key changes**:
```typescript
// Before
const CONTENT_DIR = process.env.CONTENT_DIR || '../../content/ims';
function getContentPath(): string {
  return path.resolve(process.cwd(), CONTENT_DIR);
}

// After
function getContentPath(area: ContentArea = 'ims'): string {
  const baseDir = process.env.CONTENT_BASE_DIR || '../../content';
  return path.resolve(process.cwd(), baseDir, area);
}

// Update all functions to accept area parameter
export async function listDocuments(category: string, area: ContentArea = 'ims'): Promise<DocumentListItem[]>
export async function listAllDocuments(area: ContentArea = 'ims'): Promise<DocumentListItem[]>
// ... etc
```

### Phase 3: Create Shared Components

**Step 3.1: Reorganize existing components**

```bash
# Create component directories
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/components/ui
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/components/documents
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/components/documents/filters

# Move existing components (we'll do this programmatically)
```

**Step 3.2: Create AreaSelector component**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/components/AreaSelector.tsx
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/components/AreaSelector.tsx`
```typescript
import Link from 'next/link';
import { AREA_CONFIGS } from '@/lib/areas/config';

export function AreaSelector() {
  const areas = Object.values(AREA_CONFIGS);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {areas.map((area) => (
        <Link
          key={area.id}
          href={area.href}
          className={`card p-8 border-2 ${area.color.bg} ${area.color.border} hover:shadow-lg transition-all duration-200 hover:scale-105`}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">{area.icon}</div>
            <h2 className={`text-2xl font-bold ${area.color.text} mb-2`}>
              {area.name}
            </h2>
            <p className="text-lg font-medium text-slate-700 mb-3">
              {area.tagline}
            </p>
            <p className="text-sm text-slate-600">
              {area.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
```

**Step 3.3: Create AreaBreadcrumb component**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/components/AreaBreadcrumb.tsx
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/components/AreaBreadcrumb.tsx`
```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAreaConfig } from '@/lib/areas/config';
import { ContentArea } from '@/types/area';

export function AreaBreadcrumb() {
  const pathname = usePathname();

  // Extract area from pathname
  const match = pathname.match(/^\/(ims|saas)/);
  if (!match) return null;

  const area = match[1] as ContentArea;
  const config = getAreaConfig(area);

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link href="/" className="text-slate-500 hover:text-slate-700">
        Home
      </Link>
      <span className="text-slate-300">/</span>
      <Link
        href={config.href}
        className={`font-medium ${config.color.text} hover:underline`}
      >
        {config.name}
      </Link>
    </div>
  );
}
```

### Phase 4: Create Area Routes

**Step 4.1: Create route group structure**

```bash
# Create route group and area directories
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/components
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/documents/\[...slug\]
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/training
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/registers
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/saas/components
mkdir -p /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/saas/documents/\[...slug\]
```

**Step 4.2: Create area group layout**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/layout.tsx
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/(areas)/layout.tsx`
```typescript
export default function AreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

**Step 4.3: Create IMS area layout**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/layout.tsx
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/(areas)/ims/layout.tsx`
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IMS - Swedwise',
  description: 'Integrated Management System - ISO 9001, 14001, 27001',
};

export default function IMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

**Step 4.4: Create IMS dashboard**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/page.tsx
```

**Content**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/(areas)/ims/page.tsx`
```typescript
import Link from 'next/link';
import { IMS_CATEGORIES } from '@/lib/areas/categories';
import { getDocumentCounts } from '@/lib/markdown/loader';

const stats = [
  { label: 'Documents', value: '[TBD]', trend: 'Policies, procedures, guidelines' },
  { label: 'Training Courses', value: '[TBD]', trend: 'Active courses' },
  { label: 'Completion Rate', value: '[TBD]', trend: 'Staff training completion' },
  { label: 'Next Review', value: '[TBD]', trend: 'Documents due for review' },
];

export default async function IMSPage() {
  let counts: Record<string, number> = {};

  try {
    counts = await getDocumentCounts('ims');
  } catch (error) {
    console.error('Error loading document counts:', error);
  }

  const categories = IMS_CATEGORIES.map(cat => ({
    ...cat,
    count: counts[cat.id] || 0,
    icon: getCategoryIcon(cat.id),
    color: getCategoryColor(cat.id),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Integrated Management System
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          "Make Time For The Good" - Quality, Environmental, and Information Security Management
        </p>
      </div>

      {/* Implementation notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-amber-500 text-xl">⚠️</span>
          <div>
            <h3 className="font-semibold text-amber-800">Implementation In Progress</h3>
            <p className="text-sm text-amber-700 mt-1">
              The IMS is currently being implemented. Documents marked with <span className="bg-amber-100 px-1 rounded">[TBD]</span> require
              organizational input. Please contact the IMS Owner for questions.
            </p>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-4">
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Document categories */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Document Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/ims/documents?category=${category.id}`}
            className={`card p-6 border-2 ${category.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h3 className="font-semibold text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{category.description}</p>
                <p className="text-xs text-slate-400 mt-2">{category.count} documents</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ISO Standards coverage */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Standards Coverage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">Q</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 9001:2015</h3>
          </div>
          <p className="text-sm text-slate-600">Quality Management System</p>
          <p className="text-xs text-slate-400 mt-2">Customer focus, process approach, continuous improvement</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">E</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 14001:2015</h3>
          </div>
          <p className="text-sm text-slate-600">Environmental Management System</p>
          <p className="text-xs text-slate-400 mt-2">Environmental aspects, compliance, life-cycle perspective</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">S</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 27001:2022</h3>
          </div>
          <p className="text-sm text-slate-600">Information Security Management System</p>
          <p className="text-xs text-slate-400 mt-2">Risk management, 93 controls, asset protection</p>
        </div>
      </div>

      {/* Quick actions */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-3">
        <Link href="/ims/training" className="btn btn-primary">
          Start Training
        </Link>
        <Link href="/ims/documents" className="btn btn-secondary">
          Browse Documents
        </Link>
        <Link href="/ims/registers" className="btn btn-outline">
          View Registers
        </Link>
      </div>
    </div>
  );
}

// Helper functions
function getCategoryIcon(categoryId: string): string {
  const icons: Record<string, string> = {
    policies: '📋',
    procedures: '📝',
    guidelines: '📖',
    'role-descriptions': '👤',
    training: '🎓',
    forms: '📄',
    registers: '📊',
  };
  return icons[categoryId] || '📄';
}

function getCategoryColor(categoryId: string): string {
  const colors: Record<string, string> = {
    policies: 'bg-blue-50 border-blue-200',
    procedures: 'bg-green-50 border-green-200',
    guidelines: 'bg-purple-50 border-purple-200',
    'role-descriptions': 'bg-amber-50 border-amber-200',
    training: 'bg-pink-50 border-pink-200',
    forms: 'bg-slate-50 border-slate-200',
    registers: 'bg-red-50 border-red-200',
  };
  return colors[categoryId] || 'bg-slate-50 border-slate-200';
}
```

**Step 4.5: Create IMS documents page**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/documents/page.tsx
```

**Content**: Based on existing `/documents/page.tsx` but with area parameter:
```typescript
import { listAllDocuments } from '@/lib/markdown/loader';
import { DocumentListItem } from '@/types/document';
import { DocumentsPageClient } from '@/components/documents/DocumentsPageClient';

export const dynamic = 'force-dynamic';

export default async function IMSDocumentsPage() {
  let documents: DocumentListItem[];
  let error: string | null = null;

  try {
    documents = await listAllDocuments('ims'); // Pass area parameter
  } catch (e) {
    error = 'Unable to load IMS documents. Content directory may not be configured.';
    documents = [];
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">IMS Document Library</h1>
        <p className="mt-1 text-slate-600">
          Browse all IMS policies, procedures, and supporting documents
        </p>
      </div>

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800">{error}</p>
        </div>
      )}

      <DocumentsPageClient documents={documents} />
    </div>
  );
}
```

**Step 4.6: Create IMS document viewer**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/documents/\[...slug\]/page.tsx
```

**Content**: Based on existing `/documents/[slug]/page.tsx` but with area parameter

**Step 4.7: Create IMS training page**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/training/page.tsx
```

**Content**: Move existing `/training/page.tsx` content

**Step 4.8: Create IMS registers page**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/ims/registers/page.tsx
```

**Content**: Move existing `/registers/page.tsx` content

**Step 4.9: Create SaaS area layout and pages**

```bash
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/saas/layout.tsx
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/saas/page.tsx
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/saas/documents/page.tsx
touch /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/\(areas\)/saas/documents/\[...slug\]/page.tsx
```

Similar structure to IMS but with SaaS-specific content and categories.

### Phase 5: Update Root Pages

**Step 5.1: Replace root page with area selector**

**Modify**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/page.tsx`

```typescript
import { AreaSelector } from '@/components/AreaSelector';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Welcome section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Swedwise Documentation Platform
        </h1>
        <p className="text-xl text-slate-600 mb-2">
          "Make Time For The Good"
        </p>
        <p className="text-lg text-slate-500">
          Select a content area to get started
        </p>
      </div>

      {/* Area selection */}
      <AreaSelector />

      {/* Info section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 text-sm text-slate-500">
          <span>ISO 9001:2015</span>
          <span className="text-slate-300">|</span>
          <span>ISO 14001:2015</span>
          <span className="text-slate-300">|</span>
          <span>ISO 27001:2022</span>
        </div>
      </div>
    </div>
  );
}
```

**Step 5.2: Update root layout with area-aware navigation**

**Modify**: `/Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/layout.tsx`

Add AreaBreadcrumb and update navigation to be area-aware.

### Phase 6: Migration and Cleanup

**Step 6.1: Create redirects for old routes (optional for backward compatibility)**

Add redirects in `next.config.js`:
```javascript
async redirects() {
  return [
    {
      source: '/documents',
      destination: '/ims/documents',
      permanent: false,
    },
    {
      source: '/documents/:slug*',
      destination: '/ims/documents/:slug*',
      permanent: false,
    },
    {
      source: '/training',
      destination: '/ims/training',
      permanent: false,
    },
    {
      source: '/registers',
      destination: '/ims/registers',
      permanent: false,
    },
  ];
}
```

**Step 6.2: Clean up old routes**

After verifying the new routes work:
```bash
# Remove old route files
rm /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/documents/page.tsx
rm -rf /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/documents/\[slug\]
rm /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/training/page.tsx
rm /Users/daniel/Development/ISOCert/iso-certification/apps/web/src/app/registers/page.tsx
```

## Testing Checklist

### Functional Tests

- [ ] Root page (/) displays area selection cards
- [ ] IMS card links to /ims
- [ ] SaaS card links to /saas
- [ ] /ims displays IMS dashboard with correct categories
- [ ] /ims/documents lists only IMS documents
- [ ] /ims/documents/[slug] displays IMS document content
- [ ] /saas displays SaaS dashboard with correct categories
- [ ] /saas/documents lists only SaaS documents
- [ ] /saas/documents/[slug] displays SaaS document content
- [ ] Filters work correctly in both areas
- [ ] Navigation breadcrumb shows current area
- [ ] Document counts are accurate per area

### Visual Tests

- [ ] Area selection cards have distinct colors
- [ ] Hover effects work on area cards
- [ ] Dashboard layouts are consistent between areas
- [ ] Document lists render correctly
- [ ] Filters display properly
- [ ] Mobile responsive design works

### Error Handling

- [ ] Missing content directory shows appropriate error
- [ ] Invalid area shows 404
- [ ] Invalid document slug shows 404
- [ ] Empty categories display "no documents" message

## Environment Variables

Add to `.env.local` (optional):
```
# Base content directory (default: ../../content)
CONTENT_BASE_DIR=../../content
```

## Commands to Run

### Setup Phase
```bash
# 1. Create type files
cd /Users/daniel/Development/ISOCert/iso-certification/apps/web
mkdir -p src/types
touch src/types/area.ts

# 2. Create lib directories
mkdir -p src/lib/areas

# 3. Create component directories
mkdir -p src/components/ui
mkdir -p src/components/documents
mkdir -p src/components/documents/filters

# 4. Create route directories
mkdir -p "src/app/(areas)/ims/components"
mkdir -p "src/app/(areas)/ims/documents/[...slug]"
mkdir -p "src/app/(areas)/ims/training"
mkdir -p "src/app/(areas)/ims/registers"
mkdir -p "src/app/(areas)/saas/components"
mkdir -p "src/app/(areas)/saas/documents/[...slug]"

# 5. Verify content directories exist
ls -la ../../content/ims
ls -la ../../content/saas
```

### Implementation Phase
```bash
# 1. Install dependencies (if needed)
npm install

# 2. Run type checking
npm run typecheck

# 3. Run linter
npm run lint

# 4. Start development server
npm run dev

# 5. Test in browser
# Open http://localhost:3000
# Navigate through areas
# Test document loading
```

### Verification Phase
```bash
# 1. Build production bundle
npm run build

# 2. Start production server
npm run start

# 3. Run tests (if configured)
npm run test
```

## Migration Approach

### Incremental Migration Strategy

**Phase 1 - Foundation (Day 1)**
1. Create type system and configuration
2. Update document loader
3. Verify existing routes still work

**Phase 2 - New Routes (Day 2)**
1. Create area selection page
2. Create IMS area routes
3. Test IMS routes thoroughly

**Phase 3 - SaaS Area (Day 3)**
1. Create SaaS area routes
2. Populate SaaS content (if available)
3. Test SaaS routes

**Phase 4 - Migration & Cleanup (Day 4)**
1. Add redirects for old routes
2. Update all internal links
3. Remove old route files
4. Final testing

**Phase 5 - Polish (Day 5)**
1. Update navigation
2. Add area-specific styling
3. Performance optimization
4. Documentation updates

## Rollback Plan

If issues arise:

1. **Revert file changes**:
   ```bash
   git checkout main -- src/app/page.tsx
   git checkout main -- src/app/layout.tsx
   ```

2. **Remove new directories**:
   ```bash
   rm -rf src/app/\(areas\)
   ```

3. **Revert loader changes**:
   ```bash
   git checkout main -- src/lib/markdown/loader.ts
   ```

4. **Restart dev server**:
   ```bash
   npm run dev
   ```

## Performance Considerations

1. **Caching**: Implement content caching for frequently accessed documents
2. **Lazy Loading**: Consider lazy loading document content in lists
3. **Static Generation**: Use Next.js static generation where possible
4. **Code Splitting**: Leverage route-based code splitting (automatic with App Router)

## Future Enhancements

1. **Area-Specific Themes**: Custom color schemes per area
2. **Search**: Global search across all areas with area filter
3. **User Preferences**: Remember last visited area
4. **Area Permissions**: Role-based access control per area
5. **Cross-Area References**: Link documents across areas
6. **Analytics Dashboard**: Usage statistics per area
7. **API Routes**: RESTful API for external integrations
8. **Export Features**: Bulk export by area

## Key Files Summary

### New Files
- `src/types/area.ts` - Area type definitions
- `src/lib/areas/config.ts` - Area configurations
- `src/lib/areas/categories.ts` - Area-specific categories
- `src/components/AreaSelector.tsx` - Area selection component
- `src/components/AreaBreadcrumb.tsx` - Breadcrumb component
- `src/app/(areas)/layout.tsx` - Areas route group layout
- `src/app/(areas)/ims/*` - IMS area routes
- `src/app/(areas)/saas/*` - SaaS area routes

### Modified Files
- `src/app/page.tsx` - Root landing page (area selector)
- `src/app/layout.tsx` - Root layout (navigation updates)
- `src/lib/markdown/loader.ts` - Add area parameter
- `src/types/document.ts` - Add area field

### Deleted Files (after migration)
- `src/app/documents/page.tsx`
- `src/app/documents/[slug]/page.tsx`
- `src/app/training/page.tsx`
- `src/app/registers/page.tsx`

## Success Metrics

1. **Functionality**: All routes work correctly
2. **Performance**: Page load times < 2s
3. **Code Quality**: No TypeScript errors, passes linting
4. **User Experience**: Intuitive navigation between areas
5. **Maintainability**: Clear separation of concerns

## Documentation Updates Needed

After implementation:
1. Update README.md with new route structure
2. Document environment variables
3. Add area configuration guide
4. Update deployment instructions
5. Create user guide for area navigation

---

## Quick Reference

### URL Structure
```
/                          → Area selection
/ims                       → IMS dashboard
/ims/documents             → IMS documents list
/ims/documents/[slug]      → IMS document viewer
/ims/training              → IMS training courses
/ims/registers             → IMS registers
/saas                      → SaaS dashboard
/saas/documents            → SaaS documents list
/saas/documents/[slug]     → SaaS document viewer
```

### Content Directory Structure
```
content/
├── ims/
│   ├── policies/
│   ├── procedures/
│   ├── guidelines/
│   ├── role-descriptions/
│   ├── training/
│   ├── forms/
│   └── registers/
└── saas/
    ├── service-description/
    ├── operations/
    ├── onboarding/
    ├── sales-materials/
    ├── pricing/
    └── training/
```

### Key Functions
```typescript
// Get area configuration
getAreaConfig(area: ContentArea): AreaConfig

// Get categories for area
getCategoriesForArea(area: ContentArea): DocumentCategory[]

// Load documents for area
listAllDocuments(area: ContentArea): Promise<DocumentListItem[]>
listDocuments(category: string, area: ContentArea): Promise<DocumentListItem[]>
```
