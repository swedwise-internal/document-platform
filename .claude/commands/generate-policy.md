# Generate IMS Policy Document

Generate a policy document for the Swedwise Integrated Management System.

## Task
Create a policy document for: **$ARGUMENTS**

## Instructions

1. Read the reference sample policies in `../project-scaffolder/docs/Sample Documentation/Policies & Guidelines/` for structure inspiration
2. Read the Swedwise organizational context from `../project-scaffolder/docs/Context Documents/`
3. Generate a policy document following this structure:

### Policy Structure

```markdown
# [Policy Title]

**Document ID**: SW-[SYSTEM]-POL-[NUMBER]-v1.0
**Effective Date**: [Date]
**Review Date**: [Date + 1 year]
**Owner**: [Role]
**Approved by**: Management Team

## 1. Purpose
[Why this policy exists and what it aims to achieve]

## 2. Scope
[Who and what this policy applies to]

## 3. Policy Statement
[The actual policy commitments and requirements]

## 4. Roles and Responsibilities
[Who is responsible for what]

## 5. Related Documents
[Links to related policies, procedures, and standards]

## 6. Definitions
[Key terms defined]

## 7. Review and Revision
[How and when the policy will be reviewed]

## Document Control
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial release |
```

## Context Requirements

- Adapt content for a 35-person consultancy company
- Align with Swedwise's "Make Time For The Good" philosophy
- Reference "The Machine" organizational framework where relevant
- Consider SaaS service delivery context
- Keep proportionate to company size - avoid over-engineering

## Output

Save the generated policy to: `templates/policies/[topic]-policy.md`
