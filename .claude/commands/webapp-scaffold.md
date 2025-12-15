# Scaffold ISMS/LMS Web Application

Initialize the web application project structure for the ISMS/LMS platform.

## Task
Scaffold the web application: **$ARGUMENTS** (e.g., "full", "frontend-only", "api-only")

## Instructions

Create a Next.js-based web application with the following capabilities:
- Dynamic Markdown rendering to HTML
- Document version management
- Export to PDF/DOCX
- LMS features (training, assessments, certificates)

## Project Structure

```
ims-platform/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── logout/
│   │   ├── (main)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx            # Dashboard
│   │   │   ├── documents/
│   │   │   │   ├── page.tsx        # Document list
│   │   │   │   ├── [id]/
│   │   │   │   │   ├── page.tsx    # Document view
│   │   │   │   │   └── edit/
│   │   │   ├── training/
│   │   │   │   ├── page.tsx        # Training dashboard
│   │   │   │   ├── courses/
│   │   │   │   └── certificates/
│   │   │   └── admin/
│   │   │       ├── documents/
│   │   │       ├── training/
│   │   │       └── users/
│   │   └── api/
│   │       ├── documents/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       ├── route.ts
│   │       │       ├── render/
│   │       │       └── export/
│   │       ├── training/
│   │       │   ├── courses/
│   │       │   ├── enrollments/
│   │       │   └── assessments/
│   │       └── auth/
│   ├── components/
│   │   ├── ui/                     # Shared UI components
│   │   ├── document/               # Document-specific
│   │   │   ├── DocumentViewer.tsx
│   │   │   ├── DocumentHeader.tsx
│   │   │   ├── DocumentToc.tsx
│   │   │   └── ExportButton.tsx
│   │   ├── training/               # LMS components
│   │   │   ├── CourseCard.tsx
│   │   │   ├── ModuleViewer.tsx
│   │   │   ├── Assessment.tsx
│   │   │   └── Certificate.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── markdown/
│   │   │   ├── processor.ts        # Markdown → AST → HTML
│   │   │   ├── plugins/            # Custom remark/rehype plugins
│   │   │   └── directives.ts       # IMS-specific directives
│   │   ├── export/
│   │   │   ├── pdf.ts              # PDF generation
│   │   │   ├── docx.ts             # DOCX generation
│   │   │   └── templates/          # Export templates
│   │   ├── db/
│   │   │   ├── prisma.ts
│   │   │   └── queries/
│   │   ├── auth/
│   │   │   └── session.ts
│   │   └── utils/
│   ├── types/
│   │   ├── document.ts
│   │   ├── training.ts
│   │   └── user.ts
│   └── styles/
│       ├── globals.css
│       └── document.css            # Document rendering styles
├── content/                        # Markdown content (Git-versioned)
│   ├── policies/
│   ├── procedures/
│   ├── training/
│   └── ims-sections/
├── prisma/
│   └── schema.prisma
├── public/
│   ├── templates/                  # Export templates
│   └── images/
├── .env.example
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## package.json

```json
{
  "name": "swedwise-ims-platform",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:push": "prisma db push",
    "db:generate": "prisma generate",
    "db:studio": "prisma studio"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@prisma/client": "^5.0.0",
    "next-auth": "^4.24.0",

    "unified": "^11.0.0",
    "remark-parse": "^11.0.0",
    "remark-gfm": "^4.0.0",
    "remark-frontmatter": "^5.0.0",
    "remark-math": "^6.0.0",
    "remark-directive": "^3.0.0",
    "remark-rehype": "^11.0.0",
    "rehype-stringify": "^10.0.0",
    "rehype-katex": "^7.0.0",
    "rehype-highlight": "^7.0.0",
    "gray-matter": "^4.0.3",
    "unist-util-visit": "^5.0.0",

    "puppeteer": "^21.0.0",
    "docx": "^8.0.0",

    "@tanstack/react-query": "^5.0.0",
    "zod": "^3.22.0",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.290.0",

    "tailwindcss": "^3.3.0",
    "@tailwindcss/typography": "^0.5.10",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "prisma": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

## Key Files to Generate

### 1. Markdown Processor

Create `src/lib/markdown/processor.ts`:

```typescript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';
import { imsDirectives } from './directives';

export interface ProcessedDocument {
  frontmatter: Record<string, any>;
  html: string;
  toc: TocEntry[];
}

export async function processMarkdown(content: string): Promise<ProcessedDocument> {
  const { data: frontmatter, content: body } = matter(content);

  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkDirective)
    .use(imsDirectives)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify);

  const ast = processor.parse(body);
  const toc = extractToc(ast);
  const file = await processor.run(ast);
  const html = processor.stringify(file);

  return { frontmatter, html: String(html), toc };
}
```

### 2. Prisma Schema

Create `prisma/schema.prisma` with document, course, enrollment, and user models.

### 3. Document Viewer Component

Create `src/components/document/DocumentViewer.tsx` for rendering documents.

### 4. Export API Routes

Create API routes for PDF and DOCX export.

## Initialization Commands

After scaffolding, run:

```bash
cd ims-platform
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Output

Create the project structure in: `../ims-platform/`
