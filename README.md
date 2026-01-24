# Swedwise IMS Documentation Platform

An integrated documentation platform for ISO certification and SaaS service management, featuring a Next.js web application with document rendering, filtering, and Learning Management System (LMS) capabilities.

## Overview

This platform supports Swedwise AB in:

1. **ISO Certification** - Integrated Management System (IMS) for:
   - **ISO 9001:2015** - Quality Management System
   - **ISO 14001:2015** - Environmental Management System
   - **ISO 27001:2022** - Information Security Management System

2. **SaaS Service Documentation** - Swedwise Communications:
   - OpenText Exstream (document generation)
   - Notifications (multi-channel delivery)

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Development

```bash
# Install dependencies
make install

# Start development server
make dev

# Or run in background
make start
make stop
```

Open http://localhost:3000 to view the platform.

### Available Make Commands

```bash
make help          # Show all available commands
make dev           # Start dev server (foreground)
make start         # Start dev server (background)
make stop          # Stop background server
make build         # Build for production
make docs-count    # Count documents by category
make docs-status   # Show document status summary
```

## Project Structure

```
iso-certification/
├── apps/
│   └── web/                        # Next.js web application
│       ├── src/
│       │   ├── app/                # App router pages
│       │   │   └── (areas)/
│       │   │       ├── ims/        # IMS document pages
│       │   │       └── saas/       # SaaS document pages
│       │   ├── components/         # React components
│       │   ├── lib/                # Utilities and helpers
│       │   └── types/              # TypeScript definitions
│       └── prisma/                 # Database schema
│
├── content/
│   ├── ims/                        # IMS documentation (129 documents)
│   │   ├── policies/               # 20 policies
│   │   ├── procedures/             # 25 procedures
│   │   ├── guidelines/             # 6 guidelines
│   │   ├── role-descriptions/      # 11 role descriptions
│   │   ├── forms/                  # 41 forms
│   │   ├── training/               # 14 training courses
│   │   ├── registers/              # 4 registers
│   │   └── ims-manual/             # 8 manual sections (Clauses 4-10)
│   │
│   └── saas/                       # SaaS documentation (44 documents)
│       ├── service-description/    # Service overview
│       ├── service-components/     # Communications & Notifications specs
│       ├── operations/             # Operational procedures
│       ├── onboarding/             # Customer onboarding
│       ├── pricing/                # Pricing framework
│       ├── sales-materials/        # Sales guides
│       ├── training/               # Staff training
│       ├── contracts/              # Contract templates
│       └── project/                # Project documentation
│
├── docs/
│   ├── plans/                      # Development plans
│   └── project-plan/               # Status reports
│
├── .claude/
│   ├── commands/                   # Slash commands
│   └── agents/                     # Specialized AI agents
│
├── Makefile                        # Development utilities
├── CLAUDE.md                       # AI agent instructions
└── README.md                       # This file
```

## Web Application Features

### Document Management
- **Dynamic Rendering**: Markdown documents render on-the-fly (no rebuild required)
- **Filtering**: Filter by ISO standard, classification, status, and service component
- **Search**: Full-text search across all documents
- **Navigation**: Collapsible sections with persistent state (remembered between visits)
- **Anchor Links**: Direct links to document sections from dashboards

### Document Metadata
All documents include YAML frontmatter with:
- `document_id`: Unique identifier (e.g., SW-IMS-POL-001)
- `title`: Document title
- `status`: draft | review | approved | obsolete
- `classification`: public | internal | confidential | restricted
- `standard`: ISO standards covered (9001, 14001, 27001)
- `owner`: Responsible role

### Export Capabilities
- PDF export with consistent styling
- Print-friendly layouts

### LMS Integration (Training)
- Course metadata in frontmatter
- Assessment questions with pass/fail scoring
- Progress tracking support
- Validity periods for certifications

## Documentation Summary

### IMS Documents (129 total)

| Category | Count | Description |
|----------|-------|-------------|
| Policies | 20 | IMS, Quality, Environmental, Security policies |
| Procedures | 25 | Operational procedures for all processes |
| Guidelines | 6 | Practical how-to guidance |
| Role Descriptions | 11 | Responsibilities and authorities |
| Forms | 41 | Templates for operational use |
| Training | 14 | Awareness and role-specific training |
| Registers | 4 | Risk, asset, environmental registers |
| IMS Manual | 8 | Clauses 4-10 system documentation |

### SaaS Documents (44 total)

| Category | Count | Description |
|----------|-------|-------------|
| Service Description | 4 | Service overview and architecture |
| Service Components | 8 | Communications & Notifications specs |
| Operations | 4 | Support and incident procedures |
| Onboarding | 4 | Customer onboarding guides |
| Pricing | 4 | Pricing framework and packages |
| Sales Materials | 4 | Sales guides and collateral |
| Training | 9 | Staff training materials |
| Contracts | 6 | Contract templates and terms |
| Project | 1 | Project documentation |

## Document Naming Convention

```
SW-[SYSTEM]-[TYPE]-[NUMBER]

SYSTEM:
  IMS   - Integrated Management System
  QMS   - Quality Management System
  EMS   - Environmental Management System
  ISMS  - Information Security Management System

TYPE:
  POL   - Policy
  PRO   - Procedure
  GUI   - Guideline
  ROLE  - Role Description
  FRM   - Form
  TRN   - Training
  MAN   - Manual
  REG   - Register

NUMBER: 001-999
```

**Examples:**
- `SW-IMS-POL-001` - Integrated Management System Policy
- `SW-ISMS-PRO-002` - Incident Management Procedure
- `SW-QMS-FRM-005` - Customer Satisfaction Survey

## AI-Assisted Development

### Slash Commands

| Command | Description |
|---------|-------------|
| `/ims` | Switch to IMS development context |
| `/saas` | Switch to SaaS development context |
| `/project-status` | Generate project status report |

### Specialized Agents

| Agent | Purpose |
|-------|---------|
| `isms-analyst` | ISO requirements analysis, gap assessment |
| `document-writer` | Formal policy and procedure writing |
| `training-creator` | Training material development |
| `risk-analyst` | Risk assessment and treatment |
| `webapp-architect` | Web application architecture |
| `lms-developer` | LMS feature implementation |

## Technology Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Markdown | unified/remark/rehype |
| Database | PostgreSQL + Prisma |
| PDF Export | Puppeteer |

## Key Principles

1. **Proportionate** - Solutions fit a 35-person company
2. **Integrated** - Single system covering quality, environment, and security
3. **Practical** - Processes that staff will actually follow
4. **Risk-based** - Focus effort where risk is highest
5. **Cultural fit** - Align with Swedwise's "learning organization" values

## Project Status

**Phase 2: COMPLETE** - Documentation foundation established

- 173 documents created
- Web platform operational
- IMS Manual complete (Clauses 4-10)
- All forms created
- Training materials developed

**Next Phase**: Document review and approval process

See `docs/project-plan/status-report-2025-12-16.md` for detailed status.

## Development

### Code Quality

```bash
make lint        # Run ESLint
make typecheck   # Run TypeScript checks
make check       # Run all checks
```

### Database

```bash
make db-generate  # Generate Prisma client
make db-push      # Push schema to database
make db-studio    # Open Prisma Studio
```

### Documentation Utilities

```bash
make docs-count     # Count documents by category
make docs-status    # Show draft/review/approved counts
make docs-validate  # Validate frontmatter
make docs-tbd       # List documents with [TBD] placeholders
make docs-ids       # List all document IDs
```

## Company Context

**Swedwise AB**
- ~35 employees across 3 offices (Karlstad HQ, Stockholm, Uddevalla)
- Business: Software licenses, consulting, implementation projects
- Target market: Large public and private organizations in Nordic region
- Philosophy: "Learning organization" following "The Machine" framework
- Tagline: "Make Time For The Good"

## License

Internal use only - Swedwise AB
