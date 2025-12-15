# Create SaaS Onboarding Documentation

Generate customer onboarding documentation and checklists.

## Task
Create onboarding documentation: **$ARGUMENTS** (e.g., "checklist", "process-flow", "customer-guide", "internal-runbook")

## Onboarding Phases

### Phase 1: Contract & Welcome (Day 1-3)
- Contract signed
- Welcome package sent
- Project kick-off scheduled
- Customer contacts identified

### Phase 2: Project Kick-off (Week 1)
- Requirements gathering meeting
- Timeline and milestones agreed
- Technical prerequisites reviewed
- Success criteria defined

### Phase 3: Environment Setup (Week 2-3)
- Production tenant provisioned
- Development tenant provisioned
- SSO configuration (if applicable)
- Initial admin users created
- Network/firewall requirements addressed

### Phase 4: Configuration (Week 3-5)
- Templates created/migrated
- Integrations configured
- API access provisioned
- Branding applied
- Notification channels configured

### Phase 5: Testing & Training (Week 5-6)
- UAT environment prepared
- Customer testing
- Administrator training delivered
- End-user training (if included)
- Documentation handover

### Phase 6: Go-Live (Week 6-7)
- UAT sign-off received
- Production cutover
- DNS/routing changes
- Go-live verification
- Support handover

### Phase 7: Hypercare (Week 7-10)
- Intensive monitoring
- Daily check-ins
- Rapid issue resolution
- Performance tuning

### Phase 8: Steady State
- First quarterly review
- Normal support model
- Regular status meetings

## Document Types

### checklist
```markdown
## Customer Onboarding Checklist: [Customer Name]

**Project Start Date**: YYYY-MM-DD
**Target Go-Live**: YYYY-MM-DD
**Project Manager**: [Name]
**Customer Contact**: [Name]

### Pre-Onboarding
- [ ] Contract fully executed
- [ ] Customer billing set up
- [ ] Primary contact identified
- [ ] Kick-off meeting scheduled

### Environment Setup
- [ ] Production tenant created
- [ ] Development tenant created
- [ ] Tenant naming: [customer-prefix]
- [ ] SSO provider: [Azure AD/Okta/Other/None]
- [ ] SSO configuration completed
- [ ] Initial admin user: [email]

### Technical Setup
- [ ] API credentials generated
- [ ] Integration requirements documented
- [ ] Network/firewall rules confirmed
- [ ] SMTP gateway configured (if applicable)

### Configuration
- [ ] Templates migrated/created
- [ ] Notification templates configured
- [ ] Branding/styling applied
- [ ] User roles defined

### Training & Documentation
- [ ] Admin training scheduled
- [ ] Admin training completed
- [ ] User guide provided
- [ ] API documentation shared

### Go-Live
- [ ] UAT test plan completed
- [ ] UAT sign-off received
- [ ] Production cutover date confirmed
- [ ] Rollback plan documented
- [ ] Go-live completed
- [ ] Support handover done

### Post Go-Live
- [ ] Hypercare period: [start] - [end]
- [ ] First weekly review completed
- [ ] First monthly review scheduled
- [ ] Steady state confirmed
```

### process-flow
Visual process flow documentation including:
- Swimlane diagram (Customer / Swedwise roles)
- Decision points
- Escalation paths
- Milestone markers

### customer-guide
Customer-facing onboarding guide:
- What to expect
- Their responsibilities
- Key contacts
- Timeline
- FAQ

### internal-runbook
Internal team runbook:
- Step-by-step procedures
- Technical commands
- Verification steps
- Troubleshooting
- Escalation contacts

## Roles and Responsibilities

### Swedwise Team
| Role | Responsibility |
|------|---------------|
| Success Manager | Overall coordination, status meetings |
| Onboarding Consultant | Configuration, training |
| Technical Specialist | Integration, troubleshooting |
| Support Technician | Post-go-live support |

### Customer Team
| Role | Responsibility |
|------|---------------|
| Project Sponsor | Decisions, sign-offs |
| Technical Contact | Integration, testing |
| Administrator | Configuration, user management |
| End Users | Testing, feedback |

## Reference Materials

- Customer onboarding process: `../project-scaffolder/docs/SaaS Draft/03_delivery-organization/process-flows/customer-onboarding.md`
- Roles: `../project-scaffolder/docs/SaaS Draft/03_delivery-organization/roles/`

## Output

Save to: `content/saas/onboarding/[document-type].md`
