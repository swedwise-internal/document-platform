# Swedwise ISO Certification Project

An AI-assisted project for implementing an Integrated Management System (IMS) and achieving ISO certification.

## Overview

This project supports Swedwise AB in achieving certification against:
- **ISO 9001:2015** - Quality Management System
- **ISO 14001:2015** - Environmental Management System
- **ISO 27001:2022** - Information Security Management System

Projektet inkluderar en **webbapplikation** (Next.js) för att visa och hantera IMS-dokumentation med integrerat LMS (Learning Management System) för utbildning.

## Project Structure

```
iso-certification/
├── apps/
│   └── web/                     # Next.js IMS/LMS webbapplikation
│       ├── src/
│       ├── prisma/
│       └── package.json
├── content/
│   └── ims/                     # IMS-dokumentation (Markdown)
│       ├── policies/
│       ├── procedures/
│       ├── guidelines/
│       ├── role-descriptions/
│       ├── training/
│       ├── forms/
│       ├── registers/
│       └── ims-manual/
├── packages/                    # Delad kod (för framtida bruk)
├── templates/                   # Dokumentmallar
├── docs/                        # Projektdokumentation
├── reference/                   # Referensmaterial
├── .claude/
│   ├── commands/               # Slash-kommandon för IMS-arbetsflöden
│   └── agents/                 # Specialiserade AI-agenter
├── CLAUDE.md                    # AI-agentinstruktioner
└── README.md                    # Denna fil
```

## Getting Started

### Prerequisites

- Node.js 18+ (för webbapplikationen)
- Claude Code CLI (för dokumentgenerering)

### Starta webbapplikationen

```bash
cd apps/web
npm install
npm run dev
```

Öppna http://localhost:3000 för att se IMS-plattformen.

### Dokumentgenerering med Claude Code

1. Starta Claude Code i projektroten:
   ```bash
   claude
   ```

2. Kör gap-analys:
   ```
   /ims:gap-analysis all
   ```

3. Generera dokument:
   ```
   /ims:generate-policy information-security
   /ims:generate-procedure incident-management
   ```

## Available Commands

| Command | Description |
|---------|-------------|
| `/ims:generate-policy [topic]` | Generate a policy document |
| `/ims:generate-procedure [topic]` | Generate a procedure document |
| `/ims:generate-role [role-name]` | Generate a role description |
| `/ims:gap-analysis [standard]` | Perform gap analysis |
| `/ims:create-training [topic]` | Create training material |
| `/ims:project-status` | Review implementation status |
| `/ims:audit-checklist [standard]` | Generate audit preparation checklist |

## AI Agents

Specialized agents are available for specific tasks:

- **isms-analyst**: ISO requirements analysis and gap assessment
- **document-writer**: Formal policy and procedure writing
- **training-creator**: Engaging training material development
- **risk-analyst**: Risk assessment and treatment planning

## Reference Documentation

The following reference materials are available in `../project-scaffolder/docs/`:

### Sample ISMS (Foxway)
- `Sample Documentation/` - Complete ISMS example to use as inspiration
  - Plan, Do, Check, Act structure
  - Policies and Guidelines
  - Processes and Procedures

### Swedwise Context
- `Context Documents/` - Company-specific context
  - Draft ISMS content
  - PMO documentation
  - "The Machine" organizational framework
  - Existing quality/environmental management drafts

## Implementation Approach

### Phase 1: Foundation
- Gap analysis
- Context documentation
- Planning

### Phase 2: Design
- Policies and procedures
- Risk assessment
- Role definitions

### Phase 3: Implementation
- Training
- Process rollout
- Control implementation

### Phase 4: Verification
- Internal audits
- Management review
- Improvement actions

### Phase 5: Certification
- Stage 1 audit
- Stage 2 audit
- Certificate achievement

## Key Principles

1. **Proportionate**: Solutions fit a 35-person company
2. **Integrated**: Single system covering quality, environment, and security
3. **Practical**: Processes that staff will actually follow
4. **Risk-based**: Focus effort where risk is highest
5. **Cultural fit**: Align with Swedwise's learning organization values

## Document Naming Convention

```
SW-[SYSTEM]-[TYPE]-[NUMBER]-v[VERSION]

SYSTEM: IMS, QMS, EMS, ISMS
TYPE: POL (Policy), PRO (Procedure), GUI (Guideline), ROLE (Role), FRM (Form)
NUMBER: 001-999
VERSION: Major.Minor
```

## Support

For questions about this project:
- Review `CLAUDE.md` for AI agent guidance
- Check the project plan in `docs/project-plan/`
- Reference sample documentation for examples
- Run `npm run dev` in `apps/web/` to explore the IMS platform

## License

Internal use only - Swedwise AB
