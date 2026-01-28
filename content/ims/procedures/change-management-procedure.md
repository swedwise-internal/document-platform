---
document_id: SW-IMS-PRO-008
title: Change Management Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: IMS Owner
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
  - SW-IMS-PRO-002
  - SW-IMS-PRO-003
---

# Change Management Procedure

**Document ID**: SW-IMS-PRO-008-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner
**Approved by**: [TBD]

## 1. Purpose

This procedure establishes how Swedwise manages changes to systems, services, processes, and infrastructure to ensure:

- Changes are planned, assessed, and approved before implementation
- Risks and impacts are understood and mitigated
- Service continuity is maintained during changes
- Changes do not introduce unintended consequences
- Stakeholders are informed and prepared for changes
- Failed changes can be rolled back safely
- Lessons are learned and applied to future changes

## 2. Scope

This procedure applies to changes affecting:

**Technical Changes**:
- IT systems and infrastructure (servers, networks, platforms)
- SaaS services (Swedwise Communications platform, customer-facing services)
- Software applications and configurations
- Security controls and access policies
- Data structures and integrations

**Operational Changes**:
- IMS policies and procedures
- Service delivery processes
- Customer communication and support processes
- Business continuity and disaster recovery plans

**Organizational Changes**:
- Organizational structure and reporting relationships
- Roles and responsibilities
- Office locations and facilities
- Supplier and partner relationships

**Exclusions**:
- Minor documentation updates (typos, formatting) - follow Document Control Procedure (SW-IMS-PRO-001)
- Pre-approved routine maintenance (covered by standard changes, see Section 5.1)
- Customer project delivery work (unless affecting shared infrastructure or services)

## 3. Definitions

| Term | Definition |
|------|------------|
| **Change** | Addition, modification, or removal of anything that could affect IT services or operations. |
| **Change Request (CR)** | Formal proposal for a change, documented and submitted for assessment. |
| **Standard Change** | Pre-approved, low-risk, routine change following documented procedure. |
| **Normal Change** | Non-routine change requiring assessment, approval, and planning. |
| **Emergency Change** | Urgent change required to resolve critical incident or security threat. |
| **Change Advisory Board (CAB)** | Group that assesses and approves significant changes. |
| **Change Owner** | Person responsible for planning and implementing a change. |
| **Change Authority** | Person or group authorized to approve changes (varies by change category). |
| **Impact Assessment** | Analysis of how change will affect services, users, systems, and processes. |
| **Rollback Plan** | Documented procedure to restore previous state if change fails. |
| **Change Window** | Scheduled time period for implementing changes, typically low-usage period. |
| **Post-Implementation Review (PIR)** | Evaluation after change to confirm success and capture lessons learned. |

## 4. Change Management Principles

**Risk-Based Approach**:
- Changes are assessed for risk (likelihood and impact of failure)
- Approval level and rigor proportional to risk
- High-risk changes require more planning, testing, and approval

**Minimize Service Disruption**:
- Changes scheduled during low-usage periods when possible
- Customer notification for changes affecting SaaS services
- Rollback plans prepared for all significant changes

**Stakeholder Communication**:
- Affected parties informed in advance
- Clear communication of change purpose, timing, and impact
- Feedback mechanisms for concerns or issues

**Testing and Validation**:
- Changes tested in non-production environments when feasible
- Validation criteria defined before implementation
- Post-change verification confirms success

**Continuous Improvement**:
- Lessons learned from changes (successful and failed)
- Metrics tracked to improve change success rate
- Process improvements based on experience

## 5. Change Categories

### 5.1 Standard Changes

**Definition**: Pre-approved, low-risk, routine changes following documented procedures.

**Characteristics**:
- Well-understood, low risk, proven method
- Implemented frequently with predictable outcomes
- No CAB approval required (pre-authorized)
- Documented standard operating procedure exists
- Example triggers: recurring events, routine maintenance

**Examples**:

| Standard Change | Procedure | Frequency | Approval |
|-----------------|-----------|-----------|----------|
| Security patch deployment (non-critical systems) | Apply vendor patches to test environment, then production after 48 hours | Monthly patch cycle | IT Lead |
| User account creation/modification | Follow access control procedure | As needed | Manager approval + IT |
| SSL certificate renewal | Renew certificate 30 days before expiry | Annually per certificate | IT Lead |
| Backup schedule adjustment | Modify backup jobs per documented process | As needed | IT Lead |
| Standard software version upgrade (internal tools) | Test in staging, deploy to production | Quarterly | IT Lead |

**Process**:
1. Change Owner identifies standard change need
2. Follows documented standard procedure
3. Logs change in Change Log (for tracking and audit)
4. Implements change
5. Verifies success
6. Updates Change Log with outcome

**No formal Change Request required**, but change must be logged for audit trail.

### 5.2 Normal Changes

**Definition**: Non-routine changes requiring formal assessment, approval, and planning.

**Characteristics**:
- Not pre-approved; requires evaluation
- Moderate to high risk or complexity
- Affects multiple users, systems, or services
- Requires CAB or management approval
- Detailed planning and testing required

**Examples**:
- New SaaS service feature deployment
- Major software version upgrades
- Infrastructure changes (server replacement, network reconfiguration)
- New integration between systems
- Significant policy or procedure changes
- Organizational restructuring
- New supplier onboarding affecting operations

**Process**: See Section 6 (Normal Change Process).

### 5.3 Emergency Changes

**Definition**: Urgent changes required to resolve critical incidents or security threats.

**Characteristics**:
- Implemented urgently to restore service or address security threat
- Cannot wait for normal approval process
- Highest priority, expedited process
- Approval by Emergency Change Authority (CEO or designated)
- Retrospective CAB review (after implementation)

**Examples**:
- Emergency security patch (actively exploited vulnerability)
- Service restoration after critical outage
- Data breach containment actions
- Critical infrastructure failure requiring immediate replacement

**Process**: See Section 7 (Emergency Change Process).

**Important**: Emergency changes still require documentation and approval, but process is expedited. Do not bypass documentation.

## 6. Normal Change Process

### 6.1 Step 1 - Change Request Initiation

**Who**: Anyone can request a change (employee, manager, customer, supplier, IMS Owner).

**How**: Submit Change Request Form (SW-IMS-FRM-011) with:

**Required Information**:
- **Change Title**: Brief descriptive title
- **Change Owner**: Person responsible for implementing change
- **Requested By**: Person requesting change (if different from owner)
- **Business Justification**: Why is this change needed? What problem does it solve?
- **Description**: Detailed description of the change
- **Scope**: What systems, services, processes, or people are affected?
- **Proposed Timeline**: Desired implementation date and duration
- **Category**: Technical, Operational, Organizational
- **Priority**: Critical, High, Medium, Low (see Section 6.2)

**Submission**: Submit to IMS Owner or designated Change Manager.

**Acknowledgment**: Change Request logged and acknowledged within 1 business day.

### 6.2 Step 2 - Change Prioritization

IMS Owner or Change Manager assigns priority based on:

| Priority | Criteria | Response Time | CAB Review |
|----------|----------|---------------|------------|
| **Critical** | Addresses critical business need; tight deadline; regulatory requirement | Assess within 1 day | Next CAB meeting (expedited if urgent) |
| **High** | Significant business benefit; clear deadline; affects key services | Assess within 3 days | Next CAB meeting |
| **Medium** | Moderate benefit; flexible timeline; limited impact | Assess within 1 week | Next CAB meeting |
| **Low** | Nice to have; no deadline; minimal impact | Assess within 2 weeks | Batched for CAB review |

### 6.3 Step 3 - Impact and Risk Assessment

**Change Owner** conducts assessment with support from IMS Owner and subject matter experts:

#### Impact Assessment

**Questions to Answer**:
- **Services**: Which services will be affected? How (outage, degradation, enhancement)?
- **Users**: Who will be affected? How many users? Internal, external, or both?
- **Systems**: Which IT systems, applications, or infrastructure are impacted?
- **Dependencies**: What other systems, processes, or changes depend on this change?
- **Timing**: Are there constraints (e.g., SaaS change windows, customer maintenance windows)?
- **Compliance**: Does this affect IMS compliance (quality, environmental, security)?

#### Risk Assessment

Use IMS Risk Assessment methodology (SW-IMS-PRO-002):

**Identify Risks**:
- Change fails during implementation
- Unintended consequences (breaks something else)
- Performance degradation
- Security vulnerability introduced
- Data loss or corruption
- Rollback fails (cannot restore previous state)

**Assess Likelihood and Impact**: Use standard 5x5 risk matrix.

**Determine Overall Change Risk Level**:
- **Low Risk**: Likelihood ≤2, Impact ≤2 (Risk Score ≤4)
- **Medium Risk**: Risk Score 5-9
- **High Risk**: Risk Score 10-14
- **Critical Risk**: Risk Score ≥15

**Risk Mitigation**: Identify actions to reduce risk (testing, backups, rollback plan, training).

#### Document Assessment

Complete Impact and Risk Assessment section of Change Request Form.

### 6.4 Step 4 - Change Planning

**Change Owner** develops detailed Change Implementation Plan:

**Plan Contents**:

**1. Pre-Implementation**:
- Prerequisites (e.g., backups completed, dependencies resolved)
- Testing plan and results (if applicable)
- Communication plan (who to notify, when, how)
- Resource requirements (people, tools, budget)
- Approval of dependent changes

**2. Implementation Steps**:
- Detailed step-by-step procedure
- Responsible person for each step
- Estimated duration for each step
- Verification checkpoints ("test X works before proceeding to step Y")

**3. Rollback Plan**:
- Trigger criteria for rollback (under what conditions do we abort?)
- Rollback procedure (step-by-step to restore previous state)
- Rollback responsibility (who executes)
- Recovery time estimate

**4. Post-Implementation**:
- Verification tests (how to confirm change was successful)
- Monitoring plan (what to monitor, for how long)
- Documentation updates required (configuration docs, user guides)
- Post-Implementation Review (PIR) date (typically 7-30 days after)

**5. Communication Plan**:
- Who needs to be notified (users, customers, management, suppliers)
- Notification timing (advance notice, go-live notification, completion)
- Notification content and channels

**Change Window Selection**:

For SaaS services and shared infrastructure, changes should occur during designated change windows:

**Standard Change Windows** (example - adjust based on SaaS service usage patterns):
- **Weekly Maintenance Window**: Wednesdays 22:00-02:00 (CET) - for low-risk changes
- **Monthly Extended Window**: First Sunday 00:00-06:00 (CET) - for higher-risk changes
- **Emergency**: Anytime, with customer notification

**SaaS Service Change Windows (Swedwise Communications Platform)**:

For services with customer SLA commitments, changes must occur during designated change windows unless emergency change procedure is followed:

| Window Type | Schedule | Duration | Use |
|-------------|----------|----------|-----|
| **Weekly Maintenance** | Saturday 18:00-20:00 CET | 2 hours | Low-risk changes (patches, configuration tweaks) |
| **Monthly Extended** | Saturday 18:00 - Sunday 02:00 CET | 8 hours | Higher-risk changes (version upgrades, infrastructure) |
| **Emergency** | Anytime | As required | Critical incidents or security vulnerabilities only |

**Note:** SaaS change windows are specified in customer-facing Service Description (SW-SAAS-SVC-001) and form part of SLA commitments.

**Customer Notification Requirements** (for SaaS services):
- **Planned Maintenance** (no service impact): 3 business days advance notice
- **Service Disruption** (brief outage): 5 business days advance notice
- **Major Changes** (extended outage, significant feature change): 10 business days advance notice
- **Emergency**: Immediate notification, ongoing updates

### 6.5 Step 5 - Change Approval

Changes are approved by appropriate authority based on risk and impact:

#### Change Advisory Board (CAB)

**Composition** (core members):
- IMS Owner (Chair)
- CISO (for security-related changes)
- IT Lead or SaaS Operations Lead (for technical changes)
- Department Head(s) representing affected areas
- Change Owner (presents change request)
- Subject matter experts (invited as needed)

**Frequency**: Bi-weekly meetings (or weekly during periods of high change activity)

**Quorum**: At least 3 core members including IMS Owner or designated deputy

#### Approval Authorities

| Change Risk Level | Impact | Approval Authority | Timing |
|-------------------|--------|-------------------|--------|
| **Low Risk** | Limited (single user, minor system) | Change Owner + IMS Owner | Offline approval (within 2 days) |
| **Medium Risk** | Moderate (team, non-critical system) | CAB | Next CAB meeting |
| **High Risk** | Significant (department, critical system, SaaS service) | CAB + Management Team representative | CAB recommendation + Management approval |
| **Critical Risk** | Severe (organization-wide, major outage risk, high cost) | CAB + Management Team approval | CAB recommendation + Management Team meeting |

#### CAB Review Criteria

CAB evaluates each change request based on:
- **Business justification**: Is the benefit clear and worthwhile?
- **Risk assessment**: Are risks identified and mitigated adequately?
- **Impact assessment**: Are all affected parties and systems identified?
- **Implementation plan**: Is the plan detailed, realistic, and complete?
- **Rollback plan**: Can we recover if the change fails?
- **Resource availability**: Do we have people, tools, and time to implement?
- **Dependencies**: Are there conflicts with other planned changes?
- **Timing**: Is the proposed timing appropriate (change window, business calendar)?

#### CAB Decisions

CAB can:
- **Approve**: Change is approved; proceed with implementation
- **Approve with Conditions**: Approve if specific conditions met (e.g., additional testing)
- **Defer**: Request more information or planning; reschedule for next CAB
- **Reject**: Change does not justify risk or cost; do not proceed

**Documentation**: CAB decisions documented in Change Request record and CAB meeting minutes.

### 6.6 Step 6 - Change Implementation

Once approved:

**Pre-Implementation**:
1. **Confirm Prerequisites**: Verify all pre-conditions met (backups, dependencies, resources)
2. **Final Communication**: Notify affected parties per communication plan
3. **Readiness Check**: Change Owner confirms ready to proceed
4. **Go/No-Go Decision**: Final confirmation from IMS Owner or CAB Chair

**During Implementation**:
1. **Execute Implementation Plan**: Follow documented steps
2. **Document Progress**: Log actions, timestamps, issues encountered
3. **Monitor for Issues**: Watch for errors, performance degradation, unexpected behavior
4. **Decision Points**: At checkpoints, verify success before continuing
5. **Abort if Necessary**: If rollback trigger criteria met, execute rollback plan

**Communication During Implementation**:
- Notify stakeholders when implementation begins
- Provide updates if duration longer than expected
- Escalate immediately if issues encountered

**Responsibility**: Change Owner implements change; IMS Owner or designee available for support/escalation.

### 6.7 Step 7 - Post-Implementation Verification

Immediately after implementation:

**Verification Tests**:
- Run defined verification tests to confirm change successful
- Check that systems, services, and integrations function as expected
- Verify no unintended consequences (nothing else broken)
- Confirm rollback plan still viable (can still roll back if late issue discovered)

**Monitoring**:
- Enhanced monitoring for defined period (e.g., 24-72 hours)
- Watch for errors, performance issues, user complaints
- Alert Change Owner and IMS Owner if issues detected

**Communication**:
- Notify stakeholders of successful completion
- Provide new documentation or instructions if applicable
- Thank participants and acknowledge effort

**Update Change Record**:
- Mark change as "Implemented" with timestamp
- Document any deviations from plan
- Note any issues encountered and resolution
- Schedule Post-Implementation Review (PIR)

### 6.8 Step 8 - Post-Implementation Review (PIR)

**Timing**: 7-30 days after implementation (based on change complexity)

**Participants**: Change Owner, IMS Owner, key stakeholders

**Review Questions**:
- **Objectives Achieved?** Did the change deliver intended benefits?
- **Success?** Did implementation go as planned? Any issues?
- **User Satisfaction?** Are users satisfied with the change?
- **Performance?** Is system/service performing as expected?
- **Unintended Consequences?** Any negative impacts discovered?
- **Lessons Learned?** What went well? What could be improved?
- **Follow-Up Actions?** Any additional changes or fixes needed?

**Documentation**:
- PIR findings documented in Change Record
- Lessons learned shared with team and incorporated into future changes
- Process improvements identified and implemented

**Closure**:
- If change successful and no follow-up needed: Mark change as "Closed"
- If follow-up required: Create new Change Request(s) for remaining work

## 7. Emergency Change Process

### 7.1 When to Use Emergency Process

Use emergency change process ONLY when:
- Critical service outage affecting customers or business operations
- Active security threat requiring immediate action (e.g., zero-day exploit)
- Data integrity or confidentiality at immediate risk
- Regulatory or legal requirement with immediate deadline
- Waiting for normal approval process would cause unacceptable harm

**Do NOT use emergency process for**:
- Convenience or impatience
- Poor planning (should have been normal change)
- Management pressure without true emergency criteria

### 7.2 Emergency Change Process Steps

**Step 1: Declare Emergency Change** (within 15 minutes)
- Change Owner or Incident Manager identifies need for emergency change
- Notify Emergency Change Authority: IMS Owner, CISO (for security), or CEO (if others unavailable)
- Brief verbal approval to proceed (follow up with documentation)

**Step 2: Rapid Assessment** (within 30 minutes)
- Quick impact and risk assessment (abbreviated)
- Identify immediate risks of implementing vs. not implementing
- Confirm emergency criteria met

**Step 3: Emergency Approval**
- **Emergency Change Authority** (priority order):
  1. IMS Owner + CISO (for technical/security emergencies)
  2. Management Team representative (if IMS Owner/CISO unavailable)
  3. CEO (if none of above available or if organization-wide impact)
- Approval can be verbal initially; documented within 4 hours
- Minimum approval: 1 Emergency Change Authority member

**Step 4: Implement Change**
- Execute change with available resources (all-hands-on-deck if needed)
- Document actions taken (even brief notes)
- Communicate to affected stakeholders ASAP
- Monitor for immediate issues

**Step 5: Post-Implementation**
- Verify change resolved emergency
- Confirm no critical new issues introduced
- Notify stakeholders of resolution

**Step 6: Retrospective CAB Review** (within 5 business days)
- Present emergency change to CAB for retrospective review
- Assess: Was emergency classification justified?
- Review implementation and outcomes
- Identify improvements for future emergencies
- Document in CAB minutes

**Step 7: Follow-Up**
- If emergency change was temporary fix: Plan permanent solution (normal change)
- Post-Implementation Review (within 14 days)
- Update procedures if lessons learned

### 7.3 Emergency Change Documentation

Even in emergencies, document:
- **Change Request Form** (SW-IMS-FRM-011) - completed during or immediately after implementation
- What changed, why, who approved, when implemented
- Actions taken (step-by-step or summary)
- Outcome and verification
- Any issues or risks introduced

**Retrospective documentation is acceptable** for true emergencies, but must be completed within 24 hours.

## 8. Change Freeze Periods

**Definition**: Periods when changes are prohibited or heavily restricted to ensure stability.

**When to Implement Change Freeze**:
- **Business-Critical Periods**: Major customer deliveries, fiscal year-end, public sector procurement deadlines
- **Holiday Periods**: Limited staff availability (e.g., Christmas/New Year, summer vacation)
- **Pre/Post Major Changes**: Freeze before and after significant changes to allow stabilization
- **Audit Periods**: During external audits or certification assessments

**Change Freeze Policy**:
- **Hard Freeze**: No changes except critical emergency changes
- **Soft Freeze**: Normal changes discouraged; CAB approval required for all changes (no standard changes)

**Communication**: Change freeze periods communicated at least 30 days in advance.

**Emergency Changes During Freeze**: Allowed if meet emergency criteria; CEO or designee approval required.

## 9. Failed Change and Rollback

### 9.1 Rollback Decision Criteria

Rollback (revert change) if:
- Change does not pass verification tests
- Critical functionality broken
- Performance degradation beyond acceptable threshold
- Security vulnerability introduced
- Unable to complete implementation within change window
- Change Owner or IMS Owner determines risk too high to continue

**Decision**: Change Owner makes rollback decision in consultation with IMS Owner or CAB Chair (if available).

### 9.2 Rollback Execution

1. **Announce Rollback**: Notify stakeholders that change is being rolled back
2. **Execute Rollback Plan**: Follow documented rollback procedure
3. **Verify Rollback**: Confirm service restored to pre-change state
4. **Incident Management**: If service outage occurred, follow Incident Management Procedure (SW-IMS-PRO-003)
5. **Document**: Record rollback in Change Record with reason

### 9.3 Post-Rollback Actions

- **Root Cause Analysis**: Understand why change failed
- **Revise Change Plan**: Address issues before re-attempting
- **Re-submit for Approval**: If change still needed, submit revised Change Request
- **Lessons Learned**: Share findings with team; improve process

**Do NOT**:
- Attempt to re-implement immediately without understanding failure
- Blame individuals; focus on process and technical issues

## 10. Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **IMS Owner** | - Chair Change Advisory Board (CAB)<br>- Maintain change management process<br>- Log and track all changes<br>- Approve low-risk changes<br>- Emergency Change Authority (with CISO)<br>- Report change metrics to management<br>- Coordinate change freeze periods |
| **Change Advisory Board (CAB)** | - Review and approve normal changes<br>- Assess change risks and priorities<br>- Identify change conflicts and dependencies<br>- Retrospectively review emergency changes<br>- Recommend process improvements |
| **Change Owner** | - Initiate Change Request<br>- Conduct impact and risk assessment<br>- Develop implementation and rollback plans<br>- Implement approved changes<br>- Verify change success<br>- Document change activities<br>- Conduct Post-Implementation Review |
| **CISO** | - CAB member for security-related changes<br>- Assess security impact of all changes<br>- Emergency Change Authority (for security emergencies)<br>- Approve changes affecting security controls |
| **IT Lead / SaaS Operations Lead** | - CAB member for technical changes<br>- Provide technical expertise and feasibility input<br>- Coordinate technical change implementation<br>- Manage change windows and scheduling<br>- Monitor system stability post-change |
| **Department Heads** | - Request changes aligned with business needs<br>- CAB member representing their area<br>- Approve changes affecting their departments<br>- Communicate changes to their teams<br>- Provide resources for change implementation |
| **Management Team** | - Approve high and critical risk changes<br>- Allocate resources for significant changes<br>- Review change performance metrics<br>- Set change freeze periods based on business calendar |
| **All Employees** | - Request changes when needs identified<br>- Provide input to impact assessments<br>- Follow change procedures<br>- Report issues encountered post-change |

## 11. Change Management for SaaS Services

### 11.1 SaaS Service Change Categories

For **Swedwise Communications SaaS** and other SaaS offerings:

**Infrastructure Changes**:
- Kubernetes cluster updates
- Database version upgrades
- Network or firewall configuration changes
- Monitoring and logging system changes

**Application Changes**:
- OpenText Communications (Exstream) version upgrades
- Notification service updates (email, SMS gateway changes)
- API changes
- Configuration changes affecting multiple customers

**Customer-Specific Changes**:
- Individual customer configuration changes
- Template updates for single customer
- Customer onboarding/offboarding

### 11.2 SaaS Change Windows

**Standard Maintenance Windows**:
- **Weekly**: Wednesday 22:00-02:00 CET (4-hour window)
  - Low-risk changes (patches, configuration tweaks)
  - Brief service interruptions acceptable (<15 minutes)
- **Monthly Extended**: First Sunday 00:00-06:00 CET (6-hour window)
  - Higher-risk changes (version upgrades, infrastructure changes)
  - Longer service interruptions if needed (<2 hours)

**Emergency**: Anytime, with immediate customer notification

**Customer SLA Considerations**:
- SLA uptime target: 99.9% (allows ~43 minutes downtime/month)
- Planned maintenance excluded from SLA downtime
- Advance notice requirements per SLA (5-10 business days)

### 11.3 SaaS Customer Communication for Changes

**Planned Maintenance Notification**:

**Timing**:
- 10 business days advance notice: Major changes (>1 hour downtime or significant feature change)
- 5 business days advance notice: Standard changes (15-60 minutes downtime)
- 3 business days advance notice: Minor changes (no downtime or <15 minutes)

**Content**:
- Change description (what is changing, why)
- Maintenance window (date, time, timezone, duration)
- Expected impact (service availability, performance, functionality)
- Actions required by customer (if any)
- Contact information for questions

**Channels**:
- Email to designated customer contacts (primary)
- Service status page update (if available)
- In-application banner (if applicable)

**Emergency Changes**:
- Immediate notification when emergency declared
- Updates every 2 hours during extended incidents
- Resolution notification

### 11.4 Multi-Tenant Change Considerations

For SaaS platforms serving multiple customers:

**Testing**:
- Test in isolated staging environment that mirrors production
- Validate with sample customer configurations
- Consider impact on all tenant configurations (not just one customer)

**Rollback**:
- Ensure rollback does not affect customer data integrity
- Test rollback procedure in staging
- Prepare customer communication for rollback scenario

**Incremental Rollout** (if feasible):
- Deploy to subset of customers first (e.g., pilot customers)
- Monitor for issues before rolling out to all
- Staged rollout reduces blast radius if issues occur

## 12. Change Metrics and Reporting

### 12.1 Key Performance Indicators

| Metric | Target | Frequency | Purpose |
|--------|--------|-----------|---------|
| **Change Success Rate** | ≥95% | Monthly | Measure implementation quality |
| **Emergency Change Rate** | <10% of all changes | Quarterly | Identify poor planning; should be rare |
| **Changes Rolled Back** | <5% of changes | Monthly | Measure implementation quality and planning |
| **Unauthorized Changes** | Zero | Continuous | Ensure process compliance |
| **Average Change Lead Time** | <14 days (normal changes) | Quarterly | Measure process efficiency |
| **CAB Meeting Attendance** | ≥80% | Per meeting | Ensure adequate review participation |
| **PIR Completion Rate** | 100% (for medium+ risk changes) | Quarterly | Ensure learning from changes |

### 12.2 Change Reporting

**Monthly Change Report** (prepared by IMS Owner):
- Total changes implemented (by category: standard, normal, emergency)
- Change success rate and failures
- Changes in progress and pending approval
- Upcoming significant changes
- Issues and trends

**Audience**: Management Team, CAB

**Quarterly Change Review** (in IMS Management Review):
- Change metrics and trends
- Lessons learned from major changes
- Process improvements implemented
- Change freeze periods planned
- Resource adequacy for change management

## 13. Records to Maintain

| Record | Retention Period | Location | Owner |
|--------|-----------------|----------|-------|
| Change Request Forms (all changes) | 3 years | [TBD - Change Management System] | IMS Owner |
| Change Implementation Plans | 3 years | [TBD] | Change Owner |
| CAB Meeting Minutes | 5 years | [TBD] | IMS Owner |
| Change Log (master record of all changes) | 5 years | [TBD] | IMS Owner |
| Post-Implementation Review reports | 3 years | [TBD] | Change Owner |
| Emergency Change Approvals | 5 years | [TBD] | IMS Owner |
| Rollback Execution Records | 3 years | [TBD] | Change Owner |
| Change Metrics Reports | 5 years | [TBD] | IMS Owner |

## 14. Related Documents

- **SW-IMS-POL-001** - Integrated Management System Policy
- **SW-ISMS-POL-001** - Information Security Policy
- **SW-IMS-PRO-001** - Document Control Procedure
- **SW-IMS-PRO-002** - Risk Assessment Procedure
- **SW-IMS-PRO-003** - Incident Management Procedure
- **SW-IMS-PRO-007** - Communication Procedure
- **SW-IMS-FRM-011** - Change Request Form
- **SW-IMS-FRM-012** - Change Impact and Risk Assessment Template
- **SW-IMS-FRM-013** - Post-Implementation Review Template

## 15. Continuous Improvement

This procedure is subject to continuous improvement based on:

- Change success rates and failure analysis
- Post-Implementation Review findings
- CAB feedback and recommendations
- Incident reviews (changes causing incidents)
- Audit findings
- Industry best practices (ITIL, ISO 20000)

**Suggestions for improvement** should be submitted to the IMS Owner.

---

## Appendix A: Change Request Form Template

**Document ID**: SW-IMS-FRM-011

### Change Details

| Field | Value |
|-------|-------|
| **Change ID** | [Auto-assigned by IMS Owner] |
| **Change Title** | |
| **Change Owner** | |
| **Requested By** | [If different from owner] |
| **Date Requested** | |
| **Change Category** | ☐ Standard  ☐ Normal  ☐ Emergency |
| **Priority** | ☐ Critical  ☐ High  ☐ Medium  ☐ Low |

### Business Justification

**Why is this change needed? What problem does it solve or opportunity does it enable?**

_____________________________________________

### Change Description

**Detailed description of what will change:**

_____________________________________________

**Systems/Services/Processes Affected:**

_____________________________________________

### Impact Assessment

| Area | Impact Description | Severity (Low/Medium/High) |
|------|-------------------|---------------------------|
| **Services** | | |
| **Users** (how many, who) | | |
| **Systems** | | |
| **Dependencies** | | |
| **Compliance/IMS** | | |

**Estimated Downtime/Disruption**: _____________

### Risk Assessment

**Identified Risks**:

| Risk | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation |
|------|-----------------|--------------|------------|------------|
| | | | | |

**Overall Change Risk Level**: ☐ Low  ☐ Medium  ☐ High  ☐ Critical

### Implementation Plan

**Proposed Implementation Date/Time**: _____________

**Change Window**: ☐ Weekly Maintenance  ☐ Monthly Extended  ☐ Emergency  ☐ Other: _______

**Duration Estimate**: _____________

**Implementation Steps** (high-level):

1. _____________________________________________
2. _____________________________________________
3. _____________________________________________

**Testing Plan**:

_____________________________________________

**Rollback Plan**:

_____________________________________________

**Rollback Trigger Criteria**:

_____________________________________________

### Communication Plan

**Who needs to be notified?**

_____________________________________________

**Notification timing and content**:

_____________________________________________

### Resources Required

**People**: _____________________________________________

**Tools/Budget**: _____________________________________________

**Prerequisites**: _____________________________________________

---

### Approval Section

| Role | Name | Decision | Date | Comments |
|------|------|----------|------|----------|
| **IMS Owner** | | ☐ Approve ☐ Defer ☐ Reject | | |
| **CAB** | | ☐ Approve ☐ Defer ☐ Reject | | |
| **Management** (if required) | | ☐ Approve ☐ Defer ☐ Reject | | |

---

### Implementation Section

**Implementation Date/Time**: _____________

**Implemented By**: _____________

**Outcome**: ☐ Success  ☐ Failed (Rolled Back)  ☐ Partial Success

**Issues Encountered**:

_____________________________________________

**Verification Results**:

_____________________________________________

---

### Post-Implementation Review

**PIR Date**: _____________

**Objectives Achieved?** ☐ Yes  ☐ Partially  ☐ No

**Lessons Learned**:

_____________________________________________

**Follow-Up Actions** (if any):

_____________________________________________

**Change Status**: ☐ Closed  ☐ Follow-Up Required

---

## Appendix B: CAB Meeting Agenda Template

**Date**: _____________

**Time**: _____________

**Chair**: IMS Owner

**Attendees**:
- IMS Owner
- CISO
- IT Lead / SaaS Operations Lead
- Department Head(s): _____________
- Change Owners (as needed)

---

### Agenda

**1. Review of Previous Meeting Actions** (5 minutes)
- Status of action items from last meeting

**2. Change Metrics Review** (5 minutes)
- Changes implemented since last meeting (success/failure)
- Changes currently in progress
- Trends and issues

**3. Standard Changes Review** (5 minutes)
- Review log of standard changes implemented
- Identify any patterns or issues
- Confirm standard changes remain appropriate

**4. Normal Changes for Approval** (30-45 minutes)

For each change:
- Change Owner presents Change Request
- Q&A and discussion (risks, impacts, dependencies)
- CAB decision: Approve / Approve with Conditions / Defer / Reject

**Changes for Review**:

| Change ID | Title | Owner | Risk Level | Requested Date |
|-----------|-------|-------|------------|---------------|
| | | | | |

**5. Emergency Changes Retrospective Review** (10 minutes)
- Review emergency changes implemented since last meeting
- Assess: Was emergency classification justified?
- Lessons learned

**6. Upcoming Changes and Change Calendar** (5 minutes)
- Preview changes planned for next period
- Identify potential conflicts or resource constraints
- Confirm change freeze periods

**7. Process Improvements and AOB** (5 minutes)
- Suggestions for improving change management
- Any other business

---

**Next Meeting**: _____________

**Action Items**:

| Action | Responsible | Due Date |
|--------|-------------|----------|
| | | |

---

## Appendix C: Change Risk Assessment Quick Reference

Use this guide to quickly assess change risk level:

### Likelihood of Failure (1-5)

| Score | Description |
|-------|-------------|
| **1 - Rare** | Proven change; implemented many times successfully; well-understood |
| **2 - Unlikely** | Implemented before with minor issues; good understanding |
| **3 - Possible** | New but tested; moderate complexity; some unknowns |
| **4 - Likely** | Complex; limited testing; significant unknowns; dependencies |
| **5 - Almost Certain** | Highly complex; unproven; many unknowns; high technical risk |

### Impact if Failure Occurs (1-5)

| Score | Description |
|-------|-------------|
| **1 - Negligible** | Single user affected; workaround available; <1 hour disruption |
| **2 - Minor** | Small team affected; <4 hours disruption; no customer impact |
| **3 - Moderate** | Department affected; 4-8 hours disruption; some customer impact; workaround available |
| **4 - Major** | Organization-wide or SaaS service affected; >8 hours disruption; significant customer impact; SLA breach |
| **5 - Critical** | Business-critical failure; >24 hours disruption; major customer impact; data loss risk; regulatory breach |

### Overall Risk Level

**Risk Score = Likelihood × Impact**

| Risk Level | Score Range | Required Action |
|------------|-------------|-----------------|
| **Low** | 1-4 | IMS Owner approval; standard planning |
| **Medium** | 5-9 | CAB approval; detailed planning and testing |
| **High** | 10-14 | CAB + Management approval; extensive planning, testing, rollback plan |
| **Critical** | 15-25 | Management Team approval; full rigor; consider alternatives |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| IMS Owner | | | |
| CISO | | | |
| Management Team Representative | | | |
