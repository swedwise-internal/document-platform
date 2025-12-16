---
document_id: SW-IMS-FRM-011
title: Change Request Form
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: Change Manager
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-IMS-PRO-008
  - SW-IMS-FRM-012
  - SW-IMS-FRM-013
---

# Change Request Form

## Purpose

This form is used to request, document, and track changes to Swedwise's systems, infrastructure, applications, processes, or services. It ensures that changes are properly evaluated, approved, and implemented in a controlled manner, minimizing risk and maintaining service quality.

## Instructions

1. **Submit before implementation**: All changes require approval before execution (except emergency changes—see procedure)
2. **Complete all sections**: Provide sufficient detail for informed decision-making
3. **Assess impact and risk**: Use SW-IMS-FRM-012 for detailed impact and risk assessment
4. **Obtain approvals**: Route to appropriate approvers based on change type and risk
5. **Track implementation**: Update status throughout change lifecycle
6. **Post-implementation review**: Complete SW-IMS-FRM-013 after change is deployed

---

## Section 1: Change Request Information

| Field | Details |
|-------|---------|
| **Change Request ID** | _[Auto-assigned: CHG-YYYY-NNN]_ |
| **Submission Date** | [YYYY-MM-DD] |
| **Requested By** | |
| **Requester Email** | |
| **Requester Department** | |
| **Requester Phone** | |

---

## Section 2: Change Classification

### 2.1 Change Type

**What type of change is this?**

- [ ] **Standard Change**: Pre-approved, low-risk, routine change with documented procedure
  - Specify standard change procedure: _______________________
- [ ] **Normal Change**: Requires evaluation, approval, and CAB review
- [ ] **Emergency Change**: Urgent change to restore service or prevent critical impact
  - Emergency justification: _______________________

### 2.2 Change Category

**What is being changed?**

- [ ] Infrastructure (servers, network, storage)
- [ ] Application/Software (installation, upgrade, configuration)
- [ ] Database (schema, data, configuration)
- [ ] Security (firewall rules, access controls, security tools)
- [ ] Process/Procedure (business process, workflow, documentation)
- [ ] Hardware (equipment addition, replacement, maintenance)
- [ ] Environment (development, test, staging, production)
- [ ] Third-Party/Vendor (supplier system, integration, service)
- [ ] Other: _______________________

### 2.3 Affected Service/System

**Which services or systems are affected?**

- [ ] SaaS Platform (OpenText Communications & Notifications)
- [ ] Customer-Facing Services
- [ ] Internal IT Systems
- [ ] Office Infrastructure
- [ ] Development/Test Environments
- [ ] Security Systems
- [ ] Backup/Recovery Systems
- [ ] Monitoring/Management Tools
- [ ] Other: _______________________

**Specific component(s):** _[e.g., Production web servers, Salesforce instance, VPN gateway]_

---

## Section 3: Change Description

### 3.1 Change Title

**Brief, descriptive title:**

_[e.g., "Upgrade SaaS platform database to PostgreSQL 15.2", "Implement MFA for admin access", "Update incident response procedure"]_

### 3.2 Detailed Description

**What will be changed?**

_[Describe the change in detail. What is the current state and what will the new state be?]_

**Current State:**

**Proposed State:**

### 3.3 Business Justification

**Why is this change needed?**

- [ ] Service improvement (performance, capacity, functionality)
- [ ] Security vulnerability remediation
- [ ] Compliance/regulatory requirement
- [ ] Bug fix/problem resolution
- [ ] Cost reduction
- [ ] Technology refresh/end-of-life replacement
- [ ] Customer request
- [ ] Business growth/new requirement
- [ ] Risk mitigation
- [ ] Other: _______________________

**Detailed Justification:**

_[Explain the business need, problem being solved, or opportunity being pursued]_

**What happens if this change is NOT made?**

_[Consequences of not implementing the change]_

### 3.4 Benefits

**Expected benefits of this change:**

- [ ] Improved service availability/reliability
- [ ] Enhanced security posture
- [ ] Better performance (specify: _______)
- [ ] Cost savings (specify: _______)
- [ ] Improved compliance
- [ ] Enhanced customer satisfaction
- [ ] Increased efficiency
- [ ] Risk reduction
- [ ] Other: _______________________

**Quantified benefits (if possible):**

_[e.g., "Reduce response time by 30%", "Save 50k SEK annually", "Eliminate critical security vulnerability"]_

---

## Section 4: Change Details

### 4.1 Implementation Plan

**How will this change be implemented?**

_[High-level implementation approach. Detailed steps should be in separate implementation plan for complex changes.]_

**Implementation Steps:**

1.
2.
3.
4.
5.

**Implementation Duration:** _[Hours or days]_

**Implementer(s):** _[Who will perform the change?]_

### 4.2 Proposed Schedule

| Field | Details |
|-------|---------|
| **Preferred Implementation Date** | [YYYY-MM-DD] |
| **Preferred Implementation Time** | _[Time window, e.g., 02:00-06:00]_ |
| **Maintenance Window Required?** | [ ] Yes - Duration: _______<br>[ ] No - No downtime expected |
| **Change Window Type** | [ ] Standard business hours<br>[ ] After hours<br>[ ] Weekend<br>[ ] Planned maintenance window |

**Scheduling Considerations:**

_[Blackout periods to avoid? Customer events? Peak usage times? Dependencies on other changes?]_

### 4.3 Testing and Validation

**Has this change been tested?**

- [ ] Yes - in development environment
- [ ] Yes - in test environment
- [ ] Yes - in staging environment
- [ ] Yes - in production (small-scale pilot)
- [ ] No - will be tested in production (explain why): _______
- [ ] Not applicable (explain why): _______

**Test Results Summary:**

**Post-Implementation Validation Plan:**

_[How will you verify the change was successful? Specific tests, checks, or measurements.]_

1.
2.
3.

**Success Criteria:**

_[What conditions must be met to consider the change successful?]_

### 4.4 Rollback Plan

**If the change fails, how will it be rolled back?**

_[Describe the procedure to return to the previous state]_

**Rollback Duration:** _[Time required to rollback]_

**Rollback Decision Point:** _[At what point/under what conditions will rollback be triggered?]_

**Rollback Tested?** [ ] Yes  [ ] No

---

## Section 5: Impact and Risk Assessment

**Complete SW-IMS-FRM-012 (Change Impact and Risk Assessment) and attach.**

**Summary of impact assessment:**

### 5.1 Impact Summary

**Affected Stakeholders:**

- [ ] All customers
- [ ] Specific customers: _______________________
- [ ] Internal staff
- [ ] Specific departments: _______________________
- [ ] Suppliers/partners
- [ ] No stakeholder impact

**Estimated User Impact:**

- [ ] **No Impact**: No user disruption
- [ ] **Low Impact**: Minor inconvenience, limited users affected
- [ ] **Medium Impact**: Noticeable disruption, significant user population affected
- [ ] **High Impact**: Major disruption, widespread impact
- [ ] **Critical Impact**: Service outage, all users affected

**Downtime Required?**

- [ ] No downtime
- [ ] Planned downtime: _______ minutes/hours
- [ ] Potential unplanned downtime (explain): _______

### 5.2 Risk Summary

**Overall Change Risk Rating:**

- [ ] **Low**: Routine change, low complexity, well-understood, minimal impact
- [ ] **Medium**: Moderate complexity, some unknowns, noticeable impact
- [ ] **High**: Complex change, significant unknowns, major impact
- [ ] **Critical**: Very complex, high uncertainty, critical systems affected

**Key Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| | [ ] Low  [ ] Medium  [ ] High | [ ] Low  [ ] Medium  [ ] High | |
| | [ ] Low  [ ] Medium  [ ] High | [ ] Low  [ ] Medium  [ ] High | |
| | [ ] Low  [ ] Medium  [ ] High | [ ] Low  [ ] Medium  [ ] High | |

**Reference:** SW-IMS-FRM-012 (Change Impact and Risk Assessment)

---

## Section 6: Dependencies and Relationships

### 6.1 Change Dependencies

**Does this change depend on other changes?**

- [ ] Yes - specify: _______________________
- [ ] No

**Are other changes dependent on this change?**

- [ ] Yes - specify: _______________________
- [ ] No

### 6.2 Related Items

**Related incidents, problems, or requests:**

| Type | ID | Description |
|------|----| ------------|
| [ ] Incident<br>[ ] Problem<br>[ ] Request | | |
| [ ] Incident<br>[ ] Problem<br>[ ] Request | | |

**Related projects or initiatives:**

---

## Section 7: Resources Required

### 7.1 Resource Requirements

| Resource Type | Requirement | Cost | Availability Confirmed? |
|---------------|-------------|------|-------------------------|
| **Staff Time** | _[Person-hours]_ | | [ ] Yes  [ ] No |
| **Tools/Software** | | | [ ] Yes  [ ] No  [ ] N/A |
| **Hardware** | | | [ ] Yes  [ ] No  [ ] N/A |
| **External Support** | _[Vendor, consultant]_ | | [ ] Yes  [ ] No  [ ] N/A |
| **Downtime/Maintenance Window** | _[Hours]_ | _[Opportunity cost]_ | [ ] Yes  [ ] No  [ ] N/A |
| **Other** | | | [ ] Yes  [ ] No  [ ] N/A |

**Total Estimated Cost:** _______________________

**Budget Approved?** [ ] Yes  [ ] No  [ ] N/A

### 7.2 Communications

**Who needs to be notified about this change?**

- [ ] All customers
- [ ] Specific customers: _______________________
- [ ] All staff
- [ ] Specific departments: _______________________
- [ ] Management
- [ ] Suppliers/partners
- [ ] External stakeholders: _______________________

**Communication Plan:**

| Stakeholder Group | Message | Channel | Timing | Owner |
|-------------------|---------|---------|--------|-------|
| | _[What to communicate]_ | _[Email, meeting, portal]_ | _[When]_ | |
| | | | | |

**Reference:** SW-IMS-FRM-010 (Communication Plan) if detailed plan required

---

## Section 8: Approval Workflow

### 8.1 Technical Approval

**Technical review by system/service owner:**

| Field | Response |
|-------|----------|
| **Technical Feasibility** | [ ] Feasible  [ ] Feasible with modifications  [ ] Not feasible |
| **Implementation Plan Adequate?** | [ ] Yes  [ ] No - see comments |
| **Rollback Plan Adequate?** | [ ] Yes  [ ] No - see comments |
| **Testing Sufficient?** | [ ] Yes  [ ] No - see comments |
| **Recommendation** | [ ] Approve  [ ] Approve with conditions  [ ] Reject  [ ] Defer |

**Technical Reviewer Comments:**

**Technical Approval:**

| Name | Role | Date | Signature |
|------|------|------|-----------|
| | System/Service Owner | | |

### 8.2 Change Advisory Board (CAB) Approval

**Required for:** Normal changes (Medium/High/Critical risk), Major changes, Cross-functional changes

**CAB Meeting Date:** [YYYY-MM-DD]

**CAB Decision:**

- [ ] **Approved**: Change approved as submitted
- [ ] **Approved with Conditions**: See conditions below
- [ ] **Deferred**: More information required; resubmit
- [ ] **Rejected**: Change not approved; see rationale

**CAB Conditions/Comments:**

**CAB Members Present:**

| Name | Role |
|------|------|
| | |
| | |
| | |

### 8.3 Management Approval (if required)

**Required for:** High/Critical risk changes, Changes affecting SLA, Budget > [threshold]

| Field | Response |
|-------|----------|
| **Business Impact Acceptable?** | [ ] Yes  [ ] No |
| **Risk Acceptable?** | [ ] Yes  [ ] No |
| **Resource Allocation Approved?** | [ ] Yes  [ ] No |
| **Decision** | [ ] Approve  [ ] Approve with conditions  [ ] Reject  [ ] Defer |

**Management Comments:**

**Management Approval:**

| Name | Role | Date | Signature |
|------|------|------|-----------|
| | CEO / Management Team | | |

### 8.4 Final Approval

**Change Approved for Implementation?** [ ] Yes  [ ] No

**Approved By:** _______________________

**Approval Date:** [YYYY-MM-DD]

**Scheduled Implementation Date/Time:** [YYYY-MM-DD HH:MM]

---

## Section 9: Implementation Tracking

### 9.1 Pre-Implementation Checklist

| Item | Status | Completed By | Date |
|------|--------|--------------|------|
| All approvals obtained | [ ] Complete  [ ] Pending | | |
| Resources confirmed available | [ ] Complete  [ ] Pending | | |
| Stakeholders notified | [ ] Complete  [ ] Pending | | |
| Backups verified current | [ ] Complete  [ ] Pending  [ ] N/A | | |
| Rollback plan documented | [ ] Complete  [ ] Pending | | |
| Implementation team briefed | [ ] Complete  [ ] Pending | | |
| Maintenance window scheduled | [ ] Complete  [ ] Pending  [ ] N/A | | |
| Monitoring/alerting prepared | [ ] Complete  [ ] Pending  [ ] N/A | | |

### 9.2 Implementation Log

| Date/Time | Activity | Status | Notes | Updated By |
|-----------|----------|--------|-------|------------|
| | Change implementation started | | | |
| | | | | |
| | | | | |
| | Change implementation completed | | | |

### 9.3 Post-Implementation Validation

**Validation Performed?** [ ] Yes  [ ] No

**Validation Date/Time:** [YYYY-MM-DD HH:MM]

**Validation Results:**

| Success Criterion | Result | Evidence |
|-------------------|--------|----------|
| | [ ] Pass  [ ] Fail | |
| | [ ] Pass  [ ] Fail | |
| | [ ] Pass  [ ] Fail | |

**Overall Validation:** [ ] Successful  [ ] Unsuccessful - Rollback initiated

### 9.4 Implementation Outcome

**Change Status:**

- [ ] **Successful**: Change implemented successfully; no issues
- [ ] **Successful with Issues**: Change implemented but minor issues noted (see notes)
- [ ] **Partially Successful**: Some objectives achieved; further work needed
- [ ] **Failed**: Change failed; rolled back to previous state
- [ ] **Cancelled**: Change cancelled before/during implementation

**Actual Implementation Date/Time:** [YYYY-MM-DD HH:MM]

**Actual Downtime:** _______ (if applicable)

**Issues Encountered:**

**Resolution of Issues:**

---

## Section 10: Post-Implementation Review

**Complete SW-IMS-FRM-013 (Post-Implementation Review) within [TBD - e.g., 7 days] of implementation.**

**PIR Completed?** [ ] Yes  [ ] No  [ ] N/A

**PIR Date:** [YYYY-MM-DD]

**PIR Summary:**

| Field | Result |
|-------|--------|
| **Objectives Achieved?** | [ ] Yes  [ ] Partially  [ ] No |
| **Issues Encountered?** | [ ] Yes - documented in PIR  [ ] No |
| **Lessons Learned Captured?** | [ ] Yes  [ ] No |
| **Follow-Up Actions Required?** | [ ] Yes - see PIR  [ ] No |

---

## Section 11: Change Closure

**Change Record Closed By:** _______________________

**Closure Date:** [YYYY-MM-DD]

**Final Status:** [ ] Successful  [ ] Unsuccessful  [ ] Cancelled

**Change Record Complete?**

- [ ] All approvals documented
- [ ] Implementation logged
- [ ] Validation completed
- [ ] PIR completed (if required)
- [ ] Lessons learned captured
- [ ] Documentation updated
- [ ] Stakeholders notified of outcome

**Closure Comments:**

---

## Notes for Users

### When to Submit a Change Request

Submit a change request for:

- **Infrastructure changes**: Server, network, storage modifications
- **Application changes**: Software installations, upgrades, configuration changes
- **Security changes**: Firewall rules, access controls, security tool changes
- **Process changes**: Significant updates to documented procedures or workflows
- **Database changes**: Schema changes, significant data updates

**Exceptions (no formal CR required):**

- Routine user access provisioning/de-provisioning (follow access control procedure)
- Document updates (follow document control procedure)
- Pre-approved standard changes with documented procedures

**When in doubt, submit a change request.**

### Change Types Explained

**Standard Change:**

- Low-risk, routine change
- Pre-approved by CAB (doesn't need individual approval)
- Documented procedure exists
- Examples: Password resets, routine patching, standard user provisioning

**Normal Change:**

- Requires evaluation and approval
- Reviewed by CAB for medium/high risk
- Most changes fall into this category
- Examples: System upgrades, configuration changes, new integrations

**Emergency Change:**

- Urgent change to restore service or prevent critical impact
- Abbreviated approval process (post-implementation approval allowed)
- Must still be documented and reviewed
- Examples: Hotfix for critical security vulnerability, emergency service restoration

### Risk-Based Approval Levels

| Risk Level | Approval Required |
|------------|-------------------|
| **Low** | Technical owner + Change Manager |
| **Medium** | CAB (Change Advisory Board) |
| **High** | CAB + Management approval |
| **Critical** | CAB + CEO approval |

### Change Advisory Board (CAB)

**Purpose**: Evaluate and approve changes, ensure coordination

**Typical Members:**

- Change Manager (chair)
- Operations Manager
- Security Lead (CISO)
- Service Delivery Manager
- Technical Leads (as needed)
- Customer Success representative

**Meeting Frequency**: Weekly (or as needed for urgent changes)

**CAB reviews:**

- Business justification
- Impact assessment
- Risk assessment
- Implementation plan
- Rollback plan
- Resource availability
- Schedule feasibility

### Blackout Periods

**Avoid changes during:**

- End-of-month/quarter processing
- Known high-traffic periods
- Major customer events
- Holiday periods (limited support available)
- Concurrent with other high-risk changes

**Exception**: Emergency changes required for service restoration.

### Post-Implementation Review (PIR)

**Required for:**

- High/Critical risk changes
- Changes that failed or required rollback
- Changes with significant issues during implementation
- Changes requested by management or CAB

**Optional for:**

- Low-risk standard changes
- Changes that went perfectly as planned

**PIR captures:**

- What went well
- What didn't go well
- Lessons learned
- Recommendations for improvement

### Integration with Other Processes

**Change Management integrates with:**

- **Incident Management**: Incidents may trigger emergency changes
- **Problem Management**: Problems may trigger changes to address root causes
- **Risk Management**: Changes may introduce or mitigate risks
- **Configuration Management**: Changes should update configuration records
- **Release Management**: Software releases are types of changes

### Common Reasons for Change Rejection

- Insufficient business justification
- Inadequate impact/risk assessment
- Incomplete implementation or rollback plan
- Insufficient testing
- Resource unavailability
- Timing conflicts (blackout period, conflicting changes)
- Unacceptable risk

**If your change is rejected**, work with the Change Manager to address concerns and resubmit.

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | Change Manager | Initial template creation | [TBD] |

**Next Review Date**: [TBD]

**Document Classification**: Internal

**Document Owner**: Change Manager
