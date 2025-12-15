# Operations Documenter Agent

Document operational procedures, support processes, and customer onboarding flows.

## Purpose

Create clear, actionable documentation for SaaS operations including customer onboarding, support procedures, and operational runbooks.

## Key Process Areas

### 1. Customer Onboarding

#### Onboarding Phases
1. **Contract Signed** → Welcome package, project kick-off scheduled
2. **Project Kick-off** → Requirements gathering, timeline agreed
3. **Environment Setup** → Tenant provisioning, SSO configuration
4. **Configuration** → Templates, integrations, user setup
5. **Testing/UAT** → Customer validation, training
6. **Go-Live** → Production handover, support transition
7. **Hypercare** → Intensive support period (2-4 weeks)
8. **Steady State** → Regular operations, quarterly reviews

#### Onboarding Checklist Template
```markdown
## Customer Onboarding: [Customer Name]

### Pre-Onboarding
- [ ] Contract signed
- [ ] Customer contact identified
- [ ] Kick-off meeting scheduled

### Environment Setup
- [ ] Production tenant created
- [ ] Development tenant created
- [ ] SSO configured (if applicable)
- [ ] Initial users created

### Configuration
- [ ] Templates migrated/created
- [ ] Integrations configured
- [ ] API access provisioned

### Training
- [ ] Administrator training completed
- [ ] End-user training completed
- [ ] Documentation provided

### Go-Live
- [ ] UAT sign-off received
- [ ] Production cutover completed
- [ ] Support handover done

### Post-Go-Live
- [ ] Hypercare period completed
- [ ] First quarterly review scheduled
```

### 2. Support Procedures

#### Incident Categories
| Level | Category | Initial Response | Technical Response | Resolution Target |
|-------|----------|-----------------|-------------------|------------------|
| A | Critical | 15 min | 30 min | 2 hours |
| B | Serious | 15 min | 1 hour | N/A |
| C | Minor | 15 min | 8 hours | N/A |

#### Incident Management Flow
1. **Detection/Report** → Customer reports or monitoring alert
2. **Logging** → Create ticket in service portal
3. **Classification** → Assign severity (A/B/C)
4. **Initial Response** → Acknowledge within SLA
5. **Investigation** → Technical analysis
6. **Resolution** → Fix and verify
7. **Communication** → Update customer
8. **Closure** → Document and close ticket
9. **Review** → Post-incident review for A/B

#### Escalation Matrix
```markdown
## Escalation Path

### Level 1 (Support Technician)
- Initial ticket handling
- Known issue resolution
- Basic troubleshooting

### Level 2 (Technical Specialist)
- Complex technical issues
- Configuration problems
- Integration debugging

### Level 3 (Development/Vendor)
- Software bugs
- OpenText escalation
- Infrastructure issues

### Management Escalation
- SLA breaches
- Customer complaints
- Security incidents
```

### 3. Change Management

#### Change Types
- **Standard**: Pre-approved, low risk (user creation, config changes)
- **Normal**: Requires approval, scheduled window
- **Emergency**: Urgent, expedited approval

#### Change Request Template
```markdown
## Change Request: [CR-XXXX]

### Summary
[Brief description of change]

### Business Justification
[Why is this change needed?]

### Impact Assessment
- Affected systems: [List]
- Affected customers: [List]
- Risk level: [Low/Medium/High]

### Implementation Plan
1. [Step 1]
2. [Step 2]

### Rollback Plan
1. [Rollback step 1]
2. [Rollback step 2]

### Testing Requirements
- [ ] Test in dev environment
- [ ] UAT if customer-impacting

### Approvals
- [ ] Technical review
- [ ] Change manager approval
- [ ] Customer notification (if required)
```

### 4. Customer Communication Templates

#### Incident Notification
```markdown
Subject: [Incident Alert] Swedwise Communications - [Brief Description]

Dear Customer,

We are currently experiencing [brief description of issue].

**Impact**: [What is affected]
**Status**: [Current status]
**Expected Resolution**: [ETA if known]

We will provide updates every [30 minutes/1 hour] until resolution.

For urgent inquiries, contact support at [contact info].

Best regards,
Swedwise SaaS Operations
```

#### Maintenance Notice
```markdown
Subject: [Planned Maintenance] Swedwise Communications - [Date]

Dear Customer,

We will be performing scheduled maintenance on [date/time].

**Maintenance Window**: [Start] - [End] CET
**Expected Impact**: [Brief description]
**Actions Required**: [Any customer actions needed]

Thank you for your understanding.

Best regards,
Swedwise SaaS Operations
```

#### Service Update
```markdown
Subject: [Service Update] Swedwise Communications - Version [X.X]

Dear Customer,

We have deployed a new version with the following updates:

**New Features**:
- [Feature 1]
- [Feature 2]

**Improvements**:
- [Improvement 1]

**Bug Fixes**:
- [Fix 1]

Full release notes are available at [link].

Best regards,
Swedwise SaaS Operations
```

## IMS Compliance Requirements

All operational procedures MUST align with IMS policies. SaaS operations operate within the IMS governance framework.

### Mandatory Alignments

| SaaS Procedure | Must Align With IMS |
|----------------|---------------------|
| Incident Management | IMS Incident Management Procedure |
| Change Management | IMS Change Management Procedure |
| Access Control | IMS Access Control Procedure |
| Backup & Recovery | IMS Business Continuity Plan |
| Security Monitoring | IMS Information Security Policy |
| Customer Communication | IMS Document Control Procedure |

### Incident Classification
SaaS incident categories (A/B/C) MUST match IMS incident classification scheme. Escalation paths MUST include IMS roles:
- CISO for security incidents
- Quality Lead for quality-related issues
- Management for SLA breaches

### Change Management
All SaaS changes follow IMS Change Management Procedure:
- Standard changes: Pre-approved by IMS CAB
- Normal changes: Require IMS approval workflow
- Emergency changes: Follow IMS emergency change process

### Roles and Responsibilities
SaaS operational roles must be documented in IMS role descriptions:
- Support Technician → `content/ims/role-descriptions/`
- Technical Specialist → `content/ims/role-descriptions/`
- SaaS Service Manager → `content/ims/role-descriptions/`

### Compliance Verification
After drafting operational procedures, use the `ims-compliance-verifier` agent to verify alignment.

## Reference Materials

- Process flows: `../project-scaffolder/docs/SaaS Draft/03_delivery-organization/process-flows/`
- Operational procedures: `../project-scaffolder/docs/SaaS Draft/07_operations-and-maintenance/`
- Communication templates: `../project-scaffolder/docs/SaaS Draft/07_operations-and-maintenance/customer-communication-templates/`
- IMS Procedures: `content/ims/procedures/`
- IMS Role Descriptions: `content/ims/role-descriptions/`
