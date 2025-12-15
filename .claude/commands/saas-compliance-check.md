# SaaS Compliance Check

Verify SaaS documentation against IMS policies and procedures.

## Task

Perform IMS compliance verification on: **$ARGUMENTS**

If no path specified, prompt for document to check or review all SaaS content.

## Verification Process

### 1. Identify Document Type

Determine the type of SaaS document being reviewed:
- Service description section
- Operational procedure
- Sales material
- Onboarding document
- Pricing documentation

### 2. Load Applicable IMS Documents

For the document type, identify relevant IMS policies and procedures:

| SaaS Document Type | Check Against IMS |
|--------------------|-------------------|
| Service Description | Information Security Policy, Quality Policy |
| Support Procedures | Incident Management, Change Management Procedures |
| Sales Materials | All policies (verify claims are accurate) |
| Security Sections | Information Security Policy, Access Control Procedure |
| SLA Sections | Quality objectives, documented commitments |

### 3. Compliance Checks

#### Information Security (ISO 27001)
- [ ] Security claims match IMS policy
- [ ] Data classification terms are consistent
- [ ] Access control descriptions align with procedure
- [ ] Incident categories match IMS classification
- [ ] Backup/DR claims match IMS commitments

#### Quality Management (ISO 9001)
- [ ] SLA targets achievable per IMS objectives
- [ ] Process descriptions follow IMS procedures
- [ ] Customer communication follows document control
- [ ] Roles match IMS role descriptions

#### Terminology
- [ ] Incident severity levels (A/B/C) consistent
- [ ] Role titles match IMS definitions
- [ ] Document classification scheme consistent
- [ ] Service level terminology consistent

### 4. Output Format

```markdown
# IMS Compliance Review

## Document Reviewed
- **Path**: [document path]
- **Type**: [document type]
- **Date**: [review date]

## Compliance Status
**Overall**: [Compliant / Partially Compliant / Non-Compliant]

## Findings

### Compliant Areas
- [List of compliant items]

### Gaps Identified

| # | Gap | IMS Reference | Severity | Recommendation |
|---|-----|---------------|----------|----------------|
| 1 | [Description] | [Policy/Procedure] | High/Med/Low | [Action] |

### Required Changes
1. [Specific change with location]
2. [Specific change with location]

## IMS Cross-References to Add
- Reference [IMS document] in section [X]
- Add link to [IMS procedure] for [topic]

## Next Steps
- [ ] Address high-severity gaps
- [ ] Update document with cross-references
- [ ] Re-verify after changes
```

## Quick Checks

### For Service Descriptions
1. Security section references Information Security Policy
2. SLA numbers match IMS quality objectives
3. Support levels align with IMS incident categories
4. Data handling matches Data Classification Policy

### For Operational Procedures
1. Escalation includes CISO, Quality Lead where appropriate
2. Change management follows IMS CAB process
3. Incident classification uses IMS scheme (A/B/C)
4. Roles are documented in IMS role descriptions

### For Sales Materials
1. ISO certification claims are current
2. Security capabilities match actual IMS controls
3. SLA promises don't exceed IMS commitments
4. Compliance statements are accurate

## Reference

- IMS Policies: `content/ims/policies/`
- IMS Procedures: `content/ims/procedures/`
- IMS Role Descriptions: `content/ims/role-descriptions/`
- SaaS Content: `content/saas/`
