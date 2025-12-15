# Generate Audit Preparation Checklist

Generate an audit preparation checklist for ISO certification.

## Task
Generate audit checklist for: **$ARGUMENTS** (e.g., "ISO 27001", "ISO 9001", "ISO 14001", "Stage 1", "Stage 2")

## Instructions

1. Determine the audit type and standard
2. Generate appropriate checklist based on:
   - Standard requirements
   - Common auditor questions
   - Evidence requirements
   - Swedwise organizational context

## Audit Types

### Stage 1 Audit (Documentation Review)
Focus: Is the IMS properly designed and documented?
- Policy and scope review
- Documentation completeness
- Management commitment evidence
- Risk assessment approach

### Stage 2 Audit (Implementation Verification)
Focus: Is the IMS effectively implemented and maintained?
- Process effectiveness
- Records and evidence
- Staff interviews
- Continuous improvement evidence

### Surveillance Audit (Ongoing Compliance)
Focus: Is the IMS being maintained?
- Changes since last audit
- Corrective actions
- Continuous improvement
- Selected process sampling

## Checklist Format

```markdown
# Audit Preparation Checklist: [Standard] - [Audit Type]

**Audit Date**: [Date]
**Auditor**: [Name/Organization]
**Scope**: [Scope of audit]

## Pre-Audit Preparation

### Administrative
- [ ] Audit schedule confirmed
- [ ] Audit plan received and reviewed
- [ ] Audit team logistics arranged
- [ ] Meeting room booked
- [ ] Key personnel availability confirmed

### Documentation Ready
- [ ] IMS Manual accessible
- [ ] All policies current and approved
- [ ] Procedures available
- [ ] Records organized and accessible
- [ ] Previous audit reports available
- [ ] Corrective action status current

## Clause-by-Clause Checklist

### Clause 4: Context of the Organization

| Requirement | Evidence Required | Location | Ready? |
|-------------|------------------|----------|--------|
| 4.1 Understanding the organization and its context | SWOT analysis, context document | [Location] | [ ] |
| 4.2 Understanding needs and expectations of interested parties | Interested parties register | [Location] | [ ] |
| 4.3 Determining the scope | Scope statement | [Location] | [ ] |
| 4.4 Management system | IMS Manual, process maps | [Location] | [ ] |

### Clause 5: Leadership

| Requirement | Evidence Required | Location | Ready? |
|-------------|------------------|----------|--------|
| 5.1 Leadership and commitment | Management review minutes, resource allocation | [Location] | [ ] |
| 5.2 Policy | Signed policies, communication evidence | [Location] | [ ] |
| 5.3 Organizational roles | Role descriptions, org chart | [Location] | [ ] |

### Clause 6: Planning

| Requirement | Evidence Required | Location | Ready? |
|-------------|------------------|----------|--------|
| 6.1 Actions to address risks and opportunities | Risk register, risk assessments | [Location] | [ ] |
| 6.2 Objectives and planning | Objectives register, action plans | [Location] | [ ] |

### Clause 7: Support

| Requirement | Evidence Required | Location | Ready? |
|-------------|------------------|----------|--------|
| 7.1 Resources | Resource allocation records | [Location] | [ ] |
| 7.2 Competence | Training records, competence matrix | [Location] | [ ] |
| 7.3 Awareness | Training attendance, awareness communications | [Location] | [ ] |
| 7.4 Communication | Communication records, meeting minutes | [Location] | [ ] |
| 7.5 Documented information | Document register, version control | [Location] | [ ] |

### Clause 8: Operation

| Requirement | Evidence Required | Location | Ready? |
|-------------|------------------|----------|--------|
| 8.1 Operational planning and control | Process records, project records | [Location] | [ ] |
| [Standard-specific requirements] | [Evidence] | [Location] | [ ] |

### Clause 9: Performance Evaluation

| Requirement | Evidence Required | Location | Ready? |
|-------------|------------------|----------|--------|
| 9.1 Monitoring, measurement, analysis and evaluation | KPI records, analysis reports | [Location] | [ ] |
| 9.2 Internal audit | Audit schedule, audit reports, auditor competence | [Location] | [ ] |
| 9.3 Management review | Management review minutes, actions | [Location] | [ ] |

### Clause 10: Improvement

| Requirement | Evidence Required | Location | Ready? |
|-------------|------------------|----------|--------|
| 10.1 Continual improvement | Improvement records, trend analysis | [Location] | [ ] |
| 10.2 Nonconformity and corrective action | NCR log, corrective action records | [Location] | [ ] |

## Interview Preparation

### Key Personnel to Brief
| Role | Topics to Cover | Backup Person |
|------|-----------------|---------------|
| CEO | Policy, commitment, resources | [Backup] |
| IMS Owner | Overall system, effectiveness | [Backup] |
| CISO | Security controls, incidents | [Backup] |
| [Role] | [Topics] | [Backup] |

### Common Auditor Questions
1. How does top management demonstrate commitment?
2. How are risks identified and managed?
3. How is the effectiveness of the IMS measured?
4. How are nonconformities handled?
5. What improvements have been made since last review?

## Post-Audit Actions
- [ ] Escort auditor during closing meeting
- [ ] Receive and review audit findings
- [ ] Develop corrective action plan
- [ ] Communicate results to management
- [ ] Schedule follow-up if required
```

## Output

Save checklist to: `docs/project-plan/audit-checklist-[standard]-[type].md`
