# Generate IMS Role Description

Generate an IMS role description for the Swedwise organization.

## Task
Create a role description for: **$ARGUMENTS**

## Instructions

1. Read existing role descriptions from `../project-scaffolder/docs/Context Documents/Draft ISMS content/role_descriptions/`
2. Read organizational context from `../project-scaffolder/docs/Context Documents/`
3. Consider integration across quality, environmental, and information security

## Role Description Structure

```markdown
# Role: [Role Title]

**Document ID**: SW-IMS-ROLE-[NUMBER]-v1.0
**Effective Date**: [Date]
**Review Date**: [Date + 1 year]
**Reports to**: [Manager Role]

## Purpose

[Brief description of why this role exists and its value to the IMS]

## Key Responsibilities

### Quality Management (ISO 9001)
- [Responsibility 1]
- [Responsibility 2]

### Environmental Management (ISO 14001)
- [Responsibility 1]
- [Responsibility 2]

### Information Security Management (ISO 27001)
- [Responsibility 1]
- [Responsibility 2]

### Integrated Responsibilities
- [Cross-cutting responsibilities]

## Authority

This role has authority to:
- [Authority 1]
- [Authority 2]
- [Authority 3]

## Competence Requirements

### Required Knowledge
- [Knowledge area 1]
- [Knowledge area 2]

### Required Skills
- [Skill 1]
- [Skill 2]

### Required Experience
- [Experience requirement]

### Recommended Training
- [Training course 1]
- [Training course 2]

## Key Interactions

| Stakeholder | Nature of Interaction |
|-------------|----------------------|
| [Role/Department] | [How they interact] |

## Performance Indicators

| KPI | Target | Measurement Method |
|-----|--------|-------------------|
| [KPI] | [Target] | [How measured] |

## Delegation

During absence, responsibilities are delegated to: [Deputy Role]

## Document Control
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial release |
```

## Key IMS Roles to Define

### Strategic Roles
- **IMS Owner / Management Representative**: Overall IMS accountability
- **CEO**: Top management commitment

### Domain-Specific Roles
- **CISO (Chief Information Security Officer)**: Information security leadership
- **Quality Lead**: Quality management coordination
- **Environmental Lead**: Environmental management coordination
- **Risk Manager**: Risk assessment and treatment coordination

### Operational Roles
- **Risk Owner**: Ownership of specific identified risks
- **Asset Owner**: Ownership of information assets
- **Treatment Responsible**: Implementation of risk treatments
- **Internal Auditor**: Conducting internal audits
- **Document Controller**: Managing documented information

### Supporting Roles (consider Swedwise structure)
- **Customer Developer**: Account management with IMS responsibilities
- **Resource Manager**: Competence management
- **Delivery Manager**: Project delivery with IMS compliance
- **Discipline Lead**: Technical area leadership

## Context Requirements

- Roles should fit a 35-person organization (avoid over-staffing)
- Consider that people may hold multiple roles
- Reference "The Machine" unit structure where applicable
- Keep proportionate to organizational risk and complexity

## Output

Save role description to: `templates/role-descriptions/[role-name]-role.md`
