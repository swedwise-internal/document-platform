# Swedwise Documentation Platform

> AI-assisted development of documentation for ISO certification (IMS) and SaaS service offerings, with an integrated web platform for document management and LMS.

## Project Context

**Company**: Swedwise AB
**Tagline**: "Make Time For The Good"
**Size**: ~35 employees across 3 offices (Karlstad HQ, Stockholm, Uddevalla)
**Business**: Software licenses, consulting, and implementation projects for business-critical solutions
**Target Market**: Large public and private organizations in the Nordic region
**New Initiative**: SaaS offerings to meet procurement requirements

### Key Challenges
- Externally-focused workforce (consultants, sales)
- Currently weak internal routines
- Same resources handle consulting AND internal support/maintenance
- Need to demonstrate quality, environmental, and security processes for public procurements

### Organizational Philosophy
Swedwise operates as a "learning organization" following "The Machine" framework - emphasizing agility, autonomy, and continuous improvement rather than command-and-control hierarchy.

## ISO Standards Scope

| Standard | Focus Area | Key Requirements |
|----------|-----------|------------------|
| ISO 9001:2015 | Quality Management | Customer focus, process approach, continuous improvement |
| ISO 14001:2015 | Environmental Management | Environmental aspects, compliance, life-cycle perspective |
| ISO 27001:2022 | Information Security | Risk management, controls, asset protection |

## SaaS Service: Swedwise Communications

**Service**: OpenText Communications (Exstream) + Notifications as SaaS
**Target**: High-volume communicators (public sector, financial services, utilities)
**Infrastructure**: Swedish data center (Entiros AB), Kubernetes, multi-tenant

### MVP Scope (Initial Launch)
- Document generation (Communications/Exstream)
- Notifications (Email, SMS)
- Basic support structure (L1/L2/L3)
- 99.9% SLA target

### Deferred Features (Post-Launch)
- E-shop, Asset Management, E-archive
- eSign integration, AI personalization
- PEPPOL/Lodiq integrations
- Advanced analytics

### Key Metrics
| Metric | Target |
|--------|--------|
| Average Customer Price | 50,000 SEK/month |
| Onboarding Project | 100,000 SEK |
| Break-even | Month 18 (~June 2027) |
| SLA Uptime | >= 99.9% |

## Web Application Platform

The IMS includes a Next.js web application with integrated LMS for document management and training delivery.

### Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Markdown       │────▶│  AST Parser     │────▶│  Renderers      │
│  Source Files   │     │  (unified/remark)│     │  HTML/PDF/DOCX  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Git Version    │     │  Frontmatter    │     │  Document       │
│  Control        │     │  Metadata       │     │  Export         │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | Next.js 14 (App Router) | Server/client rendering |
| Markdown | unified/remark/rehype | AST-based document processing |
| Database | PostgreSQL + Prisma | User, training, and document metadata |
| PDF Export | Pandoc / Puppeteer | Document export |
| DOCX Export | docx library / Pandoc | Word document generation |
| Styling | Tailwind CSS | Responsive design |

### Key Features

1. **Dynamic Document Rendering**: Content renders on-the-fly from Markdown (no rebuild required)
2. **Version Control**: Git-based versioning with full history
3. **Multi-format Export**: PDF, DOCX, HTML with consistent styling
4. **LMS Integration**: Training courses, assessments, certificates, progress tracking
5. **Document Control**: Frontmatter-based metadata, approval workflows

### Monorepo Structure

```
iso-certification/
├── apps/
│   └── web/              # Next.js IMS/LMS web application
├── content/
│   ├── ims/              # IMS documentation (ISO certification)
│   │   ├── policies/
│   │   ├── procedures/
│   │   ├── guidelines/
│   │   ├── role-descriptions/
│   │   ├── training/
│   │   ├── forms/
│   │   ├── registers/
│   │   └── ims-manual/
│   └── saas/             # SaaS service documentation
│       ├── service-description/  # Service description sections
│       ├── pricing/              # Pricing models, packages
│       ├── onboarding/           # Customer onboarding docs
│       ├── operations/           # Support, incident, change mgmt
│       ├── sales-materials/      # Sales collateral
│       └── training/             # Staff training materials
├── packages/             # Shared code/utilities (future)
├── docs/                 # Project documentation
├── templates/            # Document templates
└── reference/            # Reference materials
```

### Content Repository Structure

Each content area (e.g., `content/ims/`) follows this structure:

```
content/ims/
├── policies/           # IMS policies
├── procedures/         # Operational procedures
├── guidelines/         # Non-mandatory guidance
├── role-descriptions/  # Role and responsibility definitions
├── training/           # LMS course content
├── forms/              # Form templates
├── registers/          # Risk, asset registers
└── ims-manual/         # IMS manual sections (clauses 4-10)
```

## Development Plans

The project is organized into two separate development tracks that can be worked on independently:

### Plan Structure

```
docs/plans/
├── ims-plan.md           # IMS development plan (ISO certification)
├── saas-plan.md          # SaaS development plan (Swedwise Communications)
└── architecture-plan.md  # Web platform architecture decisions
```

### Working with Plans

Use these slash commands to switch between development contexts:

| Command | Description |
|---------|-------------|
| `/ims` | Switch to IMS development context |
| `/saas` | Switch to SaaS development context |
| `/plan-status` | View status of both plans |

### IMS Plan (`docs/plans/ims-plan.md`)
- **Focus**: ISO 9001, 14001, 27001 certification documentation
- **Content**: `content/ims/` (policies, procedures, guidelines, roles)
- **Web Routes**: `/ims/*`
- **Status**: Phase 2 complete (65 documents created)

### SaaS Plan (`docs/plans/saas-plan.md`)
- **Focus**: Swedwise Communications service documentation
- **Content**: `content/saas/` (service docs, operations, sales)
- **Web Routes**: `/saas/*`
- **Status**: Phase 1 pending (documentation foundation)

### Plan Updates
When completing tasks:
1. Mark items as `[x]` in the plan file
2. Update status counts
3. Add notes for any blockers or dependencies

## Commands

### IMS Commands

```bash
# Document Generation
/ims:generate-policy [topic]      # Generate a policy document
/ims:generate-procedure [topic]   # Generate a procedure document
/ims:generate-role [role-name]    # Generate a role description

# Gap Analysis
/ims:gap-analysis [standard]      # Analyze gaps against ISO standard
/ims:control-mapping              # Map controls across standards

# Training & LMS
/ims:create-training [topic]      # Create training material
/ims:create-course [course-id]    # Create LMS training course with assessments
/ims:awareness-content            # Generate awareness content

# Web Application
/ims:webapp-scaffold [type]       # Scaffold web app (full|frontend-only|api-only)
/ims:setup-content-repo [mode]    # Initialize content repo (full|migrate-existing|empty)
/ims:render-document [path] [fmt] # Render Markdown to PDF/DOCX/HTML

# Project Management
/ims:project-status               # Review implementation status
/ims:audit-checklist [standard]   # Generate audit preparation checklist
```

### SaaS Commands

```bash
# Service Definition
/saas-service-description [section]  # Generate service description (intro|standard-service|support|sla|security|pricing|responsibilities|add-ons|appendices|full)
/saas-mvp-scope [action]             # Define MVP scope (review|compare-to-draft|launch-checklist|defer-analysis)

# Sales & Marketing
/saas-sales-material [type]          # Create sales material (one-pager|pitch-deck|demo-script|faq|roi-calculator)
/saas-pricing [type]                 # Generate pricing docs (pricing-model|packages|cost-analysis|customer-quote)

# Operations
/saas-onboarding [type]              # Create onboarding docs (checklist|process-flow|customer-guide|internal-runbook)
/saas-support-procedure [type]       # Create support procedures (incident-management|change-management|monitoring|backup-restore|escalation)

# Compliance
/saas-compliance-check [path]        # Verify SaaS document against IMS policies
```

## Specialized Agents

Custom AI agents for specialized tasks. Located in `.claude/agents/`.

### IMS Development Agents

| Agent | Purpose | Use For |
|-------|---------|---------|
| `isms-analyst` | ISO requirements analysis | Gap analysis, control mapping, compliance checking |
| `document-writer` | Formal document creation | Policies, procedures, consistent formatting |
| `training-creator` | Training material development | Course content, quizzes, awareness materials |
| `risk-analyst` | Risk assessment | Risk identification, treatment plans, registers |

### Web Application Agents

| Agent | Purpose | Use For |
|-------|---------|---------|
| `webapp-architect` | System architecture | Tech stack decisions, component design, APIs |
| `document-renderer` | Markdown processing | Rendering pipeline, export formats, caching |
| `lms-developer` | LMS implementation | Courses, assessments, progress tracking, certificates |

### SaaS GTM Agents

| Agent | Purpose | Use For |
|-------|---------|---------|
| `saas-gtm-planner` | Project planning | MVP scoping, timeline, prioritization |
| `service-description-writer` | Service documentation | Technical service descriptions, SLA, security |
| `sales-material-creator` | Sales collateral | One-pagers, pitch decks, demos, FAQs |
| `operations-documenter` | Operational procedures | Support, incident management, onboarding |

### Cross-Domain Agents

| Agent | Purpose | Use For |
|-------|---------|---------|
| `ims-compliance-verifier` | Compliance checking | Verify SaaS content aligns with IMS policies |

## IMS-SaaS Compliance Relationship

The SaaS service operates within the IMS governance framework. All SaaS documentation must align with IMS policies and procedures.

```
┌─────────────────────────────────────────────────────────────┐
│                    IMS Governance Layer                      │
│  (ISO 9001, ISO 14001, ISO 27001 Policies & Procedures)     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   SaaS Service Layer                         │
│  (Service Description, Operations, Sales, Onboarding)       │
└─────────────────────────────────────────────────────────────┘
```

### Compliance Flow
1. **IMS defines policies** → SaaS must comply
2. **SaaS content created** → Use SaaS agents
3. **Compliance verified** → Use `ims-compliance-verifier` agent
4. **Gaps identified** → Adjust SaaS content or escalate to IMS

### Key Alignment Areas
| SaaS Area | Must Align With |
|-----------|-----------------|
| Security claims | Information Security Policy |
| SLA commitments | IMS quality objectives |
| Incident management | IMS Incident Procedure |
| Change management | IMS Change Procedure |
| Data handling | Data Classification Policy |
| Supplier (OpenText) | Supplier Management Procedure |

## Document Conventions

### Policy Documents
- Clear purpose and scope
- Applicable to entire organization
- Approved by management
- Version controlled with review dates

### Procedures
- Step-by-step actionable instructions
- Clear roles and responsibilities
- Input/output definitions
- Reference to policies and forms

### Document ID Format
```
SW-[SYSTEM]-[TYPE]-[NUMBER]
Example: SW-IMS-POL-001 (Integrated Management System Policy)
         SW-QMS-PRO-003 (Quality Procedure)
         SW-ISMS-GUI-012 (Information Security Guideline)

Systems: IMS, QMS, EMS, ISMS
Types: POL (Policy), PRO (Procedure), GUI (Guideline), ROLE, FRM (Form), TRN (Training)
```

### Document Frontmatter Schema

All Markdown documents use YAML frontmatter for metadata:

```yaml
---
document_id: SW-IMS-POL-001
title: Document Title
doc_type: policy          # policy|procedure|guideline|role|form|training
version: "1.0"
status: draft             # draft|review|approved|obsolete
classification: internal  # public|internal|confidential|restricted
owner: Role Name
effective_date: 2024-01-15
review_date: 2025-01-15
standard:                 # ISO standards this applies to
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-IMS-PRO-001
---
```

### Training Course Frontmatter

Training documents include additional LMS metadata:

```yaml
training:
  course_id: security-awareness
  duration: 45              # minutes
  target_audience: [all_staff]
  required_for: [new_hire, annual_refresh]
  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
  validity_period: 12       # months
```

## File Boundaries

### Safe to Edit
- `/templates/` - Document templates (policies, procedures, training)
- `/docs/` - Working documents and drafts
- `/content/ims/` - Git-versioned IMS Markdown content
- `/content/saas/` - SaaS service documentation
- `/.claude/` - Agents and slash commands

### Web Application
- `/apps/web/src/` - Application source code
- `/apps/web/prisma/` - Database schema

### Reference Only (Read)
- `../project-scaffolder/docs/Sample Documentation/` - Foxway ISMS example
- `../project-scaffolder/docs/Context Documents/` - Swedwise context documents
- `../project-scaffolder/docs/SaaS Draft/` - SaaS GTM documentation kit (comprehensive draft)
- `../project-scaffolder/docs/SaaS Draft/OpenText Communications on SaaS Service Description*.pdf` - Service description template

## Verification

### After generating IMS documents:
1. Check document follows naming convention (SW-[SYSTEM]-[TYPE]-[NUMBER])
2. Verify all required frontmatter fields are present
3. Ensure language is clear and actionable
4. Confirm alignment with Swedwise organizational context
5. Cross-reference with ISO clause requirements

### After web application changes:
```bash
cd apps/web
npm run typecheck     # Verify TypeScript types
npm run lint          # Check code style
npm run test          # Run test suite
npm run build         # Verify production build
```

### After training content changes:
1. Verify course frontmatter matches schema
2. Check assessment questions have correct answers
3. Ensure learning objectives align with content
4. Validate any cross-references to documents

## Swedwise Organizational Units

When creating documents, reference these organizational units:
- **Customer Acquisition**: New customer sales, prospect management
- **Customer Development**: Existing customer growth, account management
- **Customer Success**: Onboarding, support, delivery management
- **Resource Management**: Staff allocation, training coordination
- **Discipline Forums**: Technical expertise areas (OpenText, Salesforce, etc.)
- **PMO**: Project Management Office (internal projects)
- **Management Team**: Strategic decisions, policy approval

## Risk-Based Approach

All IMS documents should reflect a risk-based approach:
1. Identify context and stakeholders
2. Determine risks and opportunities
3. Plan actions to address risks
4. Implement and operate
5. Monitor and measure
6. Review and improve (PDCA cycle)

## Integration Principles

The IMS integrates quality, environmental, and information security:
- Single management review process
- Unified internal audit program
- Common document control procedure
- Integrated risk assessment methodology
- Shared training and awareness program

## Writing Style Guidelines

- **Language**: English (all documentation)
- **Tone**: Professional but accessible
- **Audience**: Consider both internal staff and external auditors
- **Clarity**: Avoid jargon; define technical terms
- **Actionable**: Use active voice, clear instructions
- **Consistent**: Follow established document templates

## Key Stakeholders

| Role | Responsibility |
|------|---------------|
| CEO | Overall IMS accountability |
| CISO | Information security management |
| Quality Lead | Quality management coordination |
| Environmental Lead | Environmental management coordination |
| Risk Manager | Risk assessment and treatment |
| Department Heads | Implementation within their areas |

## Reference Materials

### External Documentation
- MyST MD Guide: https://mystmd.org/guide (Markdown rendering inspiration)
- unified ecosystem: https://unifiedjs.com/ (Markdown processing)

### Project Documentation
Located in `../project-scaffolder/docs/`:
- `Sample Documentation/` - Foxway ISMS example (adapt, don't copy)
- `Context Documents/` - Swedwise-specific context and drafts
- `Context Documents/Draft ISMS content/` - Previous ISMS draft work
- `Context Documents/Projektbeskrivning Swedwise SaaS GTM.pdf` - SaaS project description (Swedish)

### SaaS Documentation
Located in `../project-scaffolder/docs/SaaS Draft/`:
- `service-definition/` - Service description drafts
- `delivery-organization/` - Roles and process flows
- `finance-and-pricing/` - Pricing strategy, cost model
- `operations-and-maintenance/` - Operational procedures
- `sales-and-marketing/` - Sales arguments, demo scripts
- `OpenText Communications on SaaS Service Description*.pdf` - Professional service description template

## Important Notes

### IMS Development
1. **Adapt, Don't Copy**: Sample documentation is reference only; create Swedwise-specific content
2. **Proportionate**: Solutions should fit a 35-person company, not enterprise-scale
3. **Practical**: Focus on workable processes that staff will actually follow
4. **Cultural Fit**: Align with Swedwise's learning organization philosophy
5. **SaaS Focus**: Prioritize controls relevant to SaaS service delivery

### Web Application Development
6. **Dynamic Rendering**: Content renders on-the-fly from Markdown, no rebuild required
7. **Git-First**: All content is versioned in Git; the web app reads from the repository
8. **Unified Pipeline**: Use remark/rehype ecosystem for consistent AST-based processing
9. **Export Parity**: Rendered HTML, PDF, and DOCX should be visually consistent
10. **LMS Integration**: Training content uses the same Markdown pipeline with extended frontmatter

### SaaS Development
11. **MVP First**: Focus on core Communications + Notifications functionality; defer advanced features
12. **Draft as Reference**: The SaaS Draft folder is comprehensive but too detailed for MVP; use as reference, not template
13. **Service Description Format**: Follow the OpenText service description structure (10 sections)
14. **Swedish/English**: Customer-facing materials in Swedish; technical documentation in English
15. **Pricing Clarity**: Use the established pricing model (base + modules + transactions)
16. **SLA Commitments**: 99.9% uptime, 15 min initial response for critical incidents
