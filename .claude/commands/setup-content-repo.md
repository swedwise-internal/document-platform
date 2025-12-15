# Setup Content Repository

Initialize the content repository structure for the ISMS/LMS platform.

## Task
Setup content repository: **$ARGUMENTS** (e.g., "full", "migrate-existing", "empty")

## Instructions

Create a Git-versioned content repository structure that will store all Markdown documents for the ISMS/LMS platform.

## Repository Structure

```
content/
├── .gitignore
├── README.md
├── config/
│   ├── frontmatter-schema.yaml    # Frontmatter validation schema
│   ├── document-types.yaml        # Document type definitions
│   └── templates.yaml             # Template configurations
├── policies/
│   ├── _index.md                  # Section index
│   ├── ims/
│   │   ├── ims-policy.md
│   │   └── scope-statement.md
│   ├── quality/
│   │   └── quality-policy.md
│   ├── environmental/
│   │   └── environmental-policy.md
│   └── security/
│       ├── information-security-policy.md
│       ├── access-control-policy.md
│       ├── acceptable-use-policy.md
│       └── ...
├── procedures/
│   ├── _index.md
│   ├── core/
│   │   ├── document-control.md
│   │   ├── risk-assessment.md
│   │   ├── internal-audit.md
│   │   ├── management-review.md
│   │   └── corrective-action.md
│   ├── operational/
│   │   └── ...
│   └── security/
│       ├── incident-management.md
│       ├── access-management.md
│       └── ...
├── guidelines/
│   ├── _index.md
│   └── ...
├── role-descriptions/
│   ├── _index.md
│   ├── ims-owner.md
│   ├── ciso.md
│   ├── quality-lead.md
│   └── ...
├── training/
│   ├── _index.md
│   ├── courses/
│   │   ├── ims-awareness.md
│   │   ├── security-awareness.md
│   │   └── ...
│   └── modules/
│       └── ...
├── forms/
│   ├── _index.md
│   └── templates/
│       ├── risk-assessment-form.md
│       ├── incident-report-form.md
│       └── ...
├── registers/
│   ├── _index.md
│   ├── risk-register.md
│   ├── asset-register.md
│   └── ...
└── ims-manual/
    ├── _index.md
    ├── 01-introduction.md
    ├── 02-context.md
    ├── 03-leadership.md
    ├── 04-planning.md
    ├── 05-support.md
    ├── 06-operation.md
    ├── 07-performance-evaluation.md
    └── 08-improvement.md
```

## Section Index Template

Each folder contains a `_index.md` for navigation:

```markdown
---
title: Policies
description: Organizational policies for quality, environment, and security
doc_type: section
sort_order: 1
---

# Policies

This section contains all organizational policies governing the Integrated Management System.

## Categories

### Integrated Management System
Core policies that span all management system domains.

### Quality Management
Policies specific to ISO 9001 quality management.

### Environmental Management
Policies specific to ISO 14001 environmental management.

### Information Security
Policies specific to ISO 27001 information security management.
```

## Configuration Files

### frontmatter-schema.yaml

```yaml
# Schema for validating document frontmatter
required:
  - document_id
  - title
  - doc_type
  - owner

fields:
  document_id:
    type: string
    pattern: "^SW-(IMS|QMS|EMS|ISMS)-(POL|PRO|GUI|ROLE|FRM|TRN)-\\d{3}$"

  title:
    type: string
    minLength: 5
    maxLength: 200

  doc_type:
    type: string
    enum: [policy, procedure, guideline, role, form, training, register, section]

  version:
    type: string
    pattern: "^\\d+\\.\\d+$"

  status:
    type: string
    enum: [draft, review, approved, obsolete]
    default: draft

  classification:
    type: string
    enum: [public, internal, confidential, restricted]
    default: internal

  owner:
    type: string

  effective_date:
    type: date

  review_date:
    type: date

  standard:
    type: array
    items:
      enum: [ISO 9001, ISO 14001, ISO 27001]

  related_documents:
    type: array
    items:
      type: string
```

### document-types.yaml

```yaml
document_types:
  policy:
    prefix: POL
    template: policy-template.md
    approval_required: true
    review_period_months: 12

  procedure:
    prefix: PRO
    template: procedure-template.md
    approval_required: true
    review_period_months: 12

  guideline:
    prefix: GUI
    template: guideline-template.md
    approval_required: false
    review_period_months: 24

  role:
    prefix: ROLE
    template: role-template.md
    approval_required: true
    review_period_months: 12

  form:
    prefix: FRM
    template: form-template.md
    approval_required: false
    review_period_months: 24

  training:
    prefix: TRN
    template: training-template.md
    approval_required: true
    review_period_months: 12
```

## Git Configuration

### .gitignore

```gitignore
# OS
.DS_Store
Thumbs.db

# Editor
*.swp
*.swo
*~
.idea/
.vscode/

# Build outputs
output/
.cache/

# Temporary
*.tmp
*.bak
```

### Git Hooks (optional)

`.git/hooks/pre-commit`:
```bash
#!/bin/bash
# Validate frontmatter before commit

for file in $(git diff --cached --name-only --diff-filter=ACM | grep '\.md$'); do
  node scripts/validate-frontmatter.js "$file"
  if [ $? -ne 0 ]; then
    echo "Frontmatter validation failed for $file"
    exit 1
  fi
done
```

## Migration from Existing Content

If migrating from `../project-scaffolder/docs/Context Documents/Draft ISMS content/`:

1. Copy existing Markdown files to appropriate folders
2. Validate/update frontmatter to match schema
3. Rename files to follow naming convention
4. Update cross-references

```bash
# Example migration commands
cp -r "../project-scaffolder/docs/Context Documents/Draft ISMS content/policies_and_guidelines/"* content/policies/
cp -r "../project-scaffolder/docs/Context Documents/Draft ISMS content/processes_and_procedures/"* content/procedures/
cp -r "../project-scaffolder/docs/Context Documents/Draft ISMS content/role_descriptions/"* content/role-descriptions/
```

## Initialization Commands

```bash
# Initialize content repository
mkdir -p content
cd content
git init

# Create structure
mkdir -p policies/{ims,quality,environmental,security}
mkdir -p procedures/{core,operational,security}
mkdir -p guidelines
mkdir -p role-descriptions
mkdir -p training/{courses,modules}
mkdir -p forms/templates
mkdir -p registers
mkdir -p ims-manual
mkdir -p config

# Create initial commit
git add .
git commit -m "Initialize content repository structure"
```

## Output

Create content repository at: `content/` (relative to ims-platform project)
