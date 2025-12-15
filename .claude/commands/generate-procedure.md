# Generate IMS Procedure Document

Generate a procedure document for the Swedwise Integrated Management System.

## Task
Create a procedure document for: **$ARGUMENTS**

## Instructions

1. Read reference procedures in `../project-scaffolder/docs/Sample Documentation/Processes & Procedures/` for structure inspiration
2. Read the Swedwise organizational context from `../project-scaffolder/docs/Context Documents/`
3. Generate a procedure document following this structure:

### Procedure Structure

```markdown
# [Procedure Title]

**Document ID**: SW-[SYSTEM]-PRO-[NUMBER]-v1.0
**Effective Date**: [Date]
**Review Date**: [Date + 1 year]
**Owner**: [Role]
**Related Policy**: [Link to governing policy]

## 1. Purpose
[What this procedure achieves]

## 2. Scope
[When and where this procedure applies]

## 3. Definitions
[Key terms used in this procedure]

## 4. Responsibilities

| Role | Responsibility |
|------|---------------|
| [Role] | [What they do in this procedure] |

## 5. Procedure

### 5.1 [Step Category]
1. [Specific action]
2. [Specific action]
3. [Specific action]

### 5.2 [Step Category]
1. [Specific action]
2. [Specific action]

## 6. Inputs and Outputs

**Inputs:**
- [What is needed to start]

**Outputs:**
- [What is produced]

## 7. Records
[What records are created and where they are stored]

## 8. Related Documents
- [Related policies]
- [Related procedures]
- [Forms and templates]

## 9. Flowchart (if applicable)
[Visual representation of the process]

## Document Control
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial release |
```

## Context Requirements

- Steps should be practical for a small consultancy
- Reference Swedwise organizational units appropriately
- Consider that staff are primarily externally-focused consultants
- Keep procedures simple enough to be followed consistently
- Include verification/validation steps where appropriate

## Output

Save the generated procedure to: `templates/procedures/[topic]-procedure.md`
