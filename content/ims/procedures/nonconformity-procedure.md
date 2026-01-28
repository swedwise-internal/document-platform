---
document_id: SW-IMS-PRO-005
title: Nonconformity and Corrective Action Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: IMS Owner
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-POL-001
  - SW-IMS-PRO-002
  - SW-IMS-PRO-003
  - SW-IMS-PRO-004
---

# Nonconformity and Corrective Action Procedure

**Document ID**: SW-IMS-PRO-005-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner
**Approved by**: [TBD]

## 1. Purpose

This procedure establishes a systematic approach for identifying, recording, analyzing, and correcting nonconformities within Swedwise's Integrated Management System (IMS). The purpose is to:

- Respond promptly to nonconformities and contain their effects
- Investigate root causes to prevent recurrence
- Implement effective corrective actions
- Verify effectiveness of corrective actions
- Continuously improve IMS processes
- Fulfill ISO 9001, ISO 14001, and ISO 27001 requirements
- Learn from mistakes and near-misses

This procedure applies to quality, environmental, and information security nonconformities.

## 2. Scope

This procedure covers:

- **Nonconformities** in products, services, processes, or systems that fail to meet requirements
- **Corrective actions** to eliminate the cause of nonconformities and prevent recurrence
- **Preventive actions** to address potential nonconformities identified through trend analysis

This procedure applies to:
- All Swedwise locations (Karlstad HQ, Stockholm, Uddevalla)
- All organizational units and departments
- All IMS processes (quality, environmental, information security)
- SaaS service operations
- Internal audit findings
- External audit findings
- Customer complaints
- Supplier nonconformities
- Security incidents requiring corrective action

**Out of Scope**:
- Routine service requests or minor issues not constituting nonconformities
- Immediate incident response (covered by incident management procedures; this procedure addresses longer-term corrective action)
- Observations from audits that don't represent nonconformities (improvement suggestions tracked separately)

## 3. Definitions

| Term | Definition |
|------|------------|
| **Nonconformity** | Non-fulfillment of a requirement (ISO, legal, customer, internal, or specified). |
| **Requirement** | Need or expectation that is stated, generally implied, or obligatory. |
| **Conformity** | Fulfillment of a requirement. |
| **Correction** | Immediate action to address a nonconformity (fix the symptom). Example: Complete the missing training record. |
| **Corrective Action** | Action to eliminate the root cause of a nonconformity to prevent recurrence (fix the system). Example: Implement automated training tracking. |
| **Preventive Action** | Action to eliminate the cause of a potential nonconformity (address risks before they occur). |
| **Root Cause** | Fundamental reason a nonconformity occurred; removing the root cause prevents recurrence. |
| **Root Cause Analysis (RCA)** | Systematic process to identify the underlying cause(s) of a nonconformity. |
| **5 Whys** | Iterative questioning technique to drill down to root cause by asking "why" multiple times. |
| **Fishbone Diagram** | Visual tool (Ishikawa diagram) to identify potential root causes across categories (People, Process, Equipment, Materials, Environment, Management). |
| **Corrective Action Request (CAR)** | Formal document initiating and tracking corrective action through closure. |
| **Recurrence** | Same or similar nonconformity happening again after corrective action was supposedly implemented. |
| **Effectiveness Verification** | Process to confirm corrective action resolved the issue and prevented recurrence. |
| **Trend Analysis** | Examination of multiple nonconformities over time to identify patterns or systemic issues. |
| **Major Nonconformity** | Serious failure or systemic breakdown; absence of a required system element; multiple related minor nonconformities. |
| **Minor Nonconformity** | Isolated lapse or deviation that doesn't compromise overall system effectiveness. |

## 4. Nonconformity Sources

Nonconformities can be identified from various sources:

| Source | Examples |
|--------|----------|
| **Internal Audits** | Audit findings (major or minor nonconformities) from SW-IMS-PRO-003 |
| **External Audits** | Certification body findings, customer audits, regulatory inspections |
| **Customer Feedback** | Complaints, dissatisfaction, contract breaches, service failures |
| **Supplier Issues** | Supplier nonconformities affecting Swedwise operations or deliverables |
| **Monitoring and Measurement** | KPI failures, objective non-achievement, performance deviations |
| **Security Incidents** | Information security events requiring root cause analysis and corrective action |
| **Environmental Incidents** | Spills, releases, non-compliance with environmental requirements |
| **Process Owners** | Staff identifying process failures, inefficiencies, or deviations |
| **Management Review** | Systemic issues identified during management reviews |
| **Risk Assessments** | Materialized risks requiring corrective action |
| **Staff Suggestions** | Employees reporting issues or near-misses |

**Proactive mindset**: Swedwise encourages a culture where staff report issues without fear of reprisal. Identifying and correcting nonconformities early prevents larger problems.

## 5. Nonconformity Classification

Nonconformities are classified to prioritize response:

### 5.1 Severity Classification

| Classification | Definition | Examples | Response Time |
|----------------|------------|----------|---------------|
| **Critical** | Immediate threat to customer, environment, security, or legal compliance; potential for significant harm or business disruption | - Major data breach<br>- Significant environmental release<br>- Safety incident<br>- Contract termination risk | Immediate containment; corrective action plan within 2 days |
| **Major** | Systemic failure or complete absence of required system element; multiple related minor NCs; significant impact on objectives | - No risk assessments conducted<br>- Security controls not implemented<br>- Repeated customer complaints on same issue | Corrective action plan within 1 week; implementation within 30 days |
| **Minor** | Isolated lapse or deviation; limited impact; doesn't compromise overall system effectiveness | - Missing training record<br>- Procedure not followed once<br>- Documentation error | Corrective action plan within 2 weeks; implementation within 60 days |
| **Observation** | Potential issue; not yet a nonconformity but could become one if not addressed | - Process inefficiency<br>- Unclear documentation<br>- Opportunity for improvement | No formal CAR required; tracked in improvement log |

**Classification criteria**:
- **Systemic vs. Isolated**: Is this a one-time error or a pattern?
- **Impact**: What's the consequence (customer, environment, security, compliance)?
- **Frequency**: How often does this occur?
- **Control Breakdown**: Is a required control missing or ineffective?

### 5.2 Category Classification

| Category | Focus Area | Examples |
|----------|-----------|----------|
| **Quality (QMS)** | Customer requirements, service delivery, product conformity | Project delays, scope issues, documentation errors, customer complaints |
| **Environmental (EMS)** | Environmental aspects, legal compliance, pollution prevention | Waste disposal violations, energy exceedances, travel policy non-compliance |
| **Information Security (ISMS)** | Confidentiality, integrity, availability, access control | Security incidents, unauthorized access, data breaches, policy violations |
| **Integrated (IMS)** | Cross-cutting issues affecting multiple systems | Document control failures, audit program issues, management review gaps |

## 6. Nonconformity and Corrective Action Process

The process follows a structured 8-step approach:

```
1. IDENTIFY ➔ 2. RECORD ➔ 3. CONTAIN ➔ 4. ANALYZE ➔
5. PLAN ➔ 6. IMPLEMENT ➔ 7. VERIFY ➔ 8. CLOSE
```

### Step 1: Identify Nonconformity

**Who**: Anyone (staff, auditors, customers, process owners)

**Actions**:
- Recognize that a requirement has not been met
- Determine the nature and extent of the nonconformity
- Gather initial evidence (photos, logs, records, witness statements)

**Example**:
- Internal auditor finds that quarterly access reviews have not been performed for 6 user accounts (requirement: SW-ISMS-PRO-001 Section 4.3)

### Step 2: Record Nonconformity

**Who**: Person identifying the NC, or delegated to IMS Owner/Department Head

**Actions**:
1. Initiate a **Corrective Action Request (CAR)** using form SW-IMS-FRM-007
2. Assign a unique CAR ID: CAR-YYYY-### (e.g., CAR-2025-042)
3. Document:
   - Description of the nonconformity (what, when, where)
   - Evidence supporting the NC
   - Requirement that was not met (ISO clause, procedure, policy, customer requirement)
   - Classification (Critical/Major/Minor; QMS/EMS/ISMS)
   - Identified by (name, date)
4. Assign **CAR Owner** (responsible for managing the CAR through closure)
   - Typically the process owner or department head of the area where NC occurred
5. Notify relevant parties (process owner, manager, IMS Owner)

**CAR Owner responsibilities**:
- Lead root cause analysis
- Develop corrective action plan
- Coordinate implementation
- Provide evidence of completion
- Report progress to IMS Owner

### Step 3: Contain Nonconformity (Immediate Correction)

**Who**: CAR Owner, Process Owner

**Actions**:
1. Take immediate action to control and correct the nonconformity:
   - **Correction** = fix the immediate problem (the symptom)
   - Example: Complete the missing access review immediately
2. Prevent further impact:
   - Quarantine nonconforming product/service if applicable
   - Notify affected customers if necessary
   - Implement temporary controls if needed
3. Assess whether other areas might be affected (scope assessment)
4. Document immediate actions taken

**Timeline**: Immediate to within 24 hours (depending on severity)

**Note**: Correction addresses the symptom. Corrective action (Step 5) addresses the root cause.

### Step 4: Analyze Root Cause

**Who**: CAR Owner, with support from relevant subject matter experts

**Actions**:
1. Investigate why the nonconformity occurred
2. Use root cause analysis techniques:
   - **5 Whys** (see Appendix A)
   - **Fishbone Diagram** (see Appendix B)
   - **Timeline analysis** (reconstruct sequence of events)
   - **Data analysis** (review trends, patterns)
3. Distinguish between symptoms and root causes
4. Consider multiple contributing factors:
   - **People**: Competence, awareness, communication
   - **Process**: Procedure clarity, effectiveness, compliance
   - **Technology**: Tool availability, usability, reliability
   - **Environment**: Workload, time pressure, resource constraints
   - **Management**: Oversight, prioritization, resource allocation
5. Document root cause analysis in the CAR
6. Validate root cause with evidence (not assumptions)

**Key question**: If we address this root cause, will the nonconformity be prevented from recurring?

**Example RCA** (5 Whys):
- **NC**: Quarterly access reviews not performed for 6 accounts
- **Why?** Access review calendar reminders were not set up
- **Why?** IT admin who used to set reminders left the company
- **Why?** Knowledge was not transferred before departure
- **Why?** No documented handover procedure for IT admin tasks
- **Why?** Role responsibilities for IT admin not clearly defined
- **ROOT CAUSE**: Lack of documented role responsibilities and handover procedures for IT administration

### Step 5: Plan Corrective Action

**Who**: CAR Owner, with input from process owners and management

**Actions**:
1. Develop corrective action plan addressing the root cause:
   - Define specific actions to prevent recurrence
   - Assign responsibilities (who will do what)
   - Set realistic deadlines
   - Identify resources needed (budget, time, tools)
   - Define success criteria (how will we know it worked?)
2. Consider control types:
   - **Preventive controls**: Stop the problem from occurring (training, automation, procedures)
   - **Detective controls**: Identify problems quickly (monitoring, audits, reviews)
   - **Corrective controls**: Fix problems when they occur (response procedures, escalation)
3. Evaluate whether corrective action is proportionate to the risk and impact
4. Obtain approvals:
   - **Minor NCs**: CAR Owner approval
   - **Major NCs**: Department Head + IMS Owner approval
   - **Critical NCs**: Management Team approval
5. Document corrective action plan in the CAR
6. Communicate plan to affected parties

**Corrective Action Plan Template**:

| Action | Responsible | Deadline | Resources | Success Criteria |
|--------|-------------|----------|-----------|------------------|
| [Specific action 1] | [Name] | [Date] | [Budget/time] | [How to measure success] |
| [Specific action 2] | [Name] | [Date] | [Budget/time] | [How to measure success] |

**Example Corrective Action Plan** (continuing example):

| Action | Responsible | Deadline | Resources | Success Criteria |
|--------|-------------|----------|-----------|------------------|
| Document IT Admin role description including access review responsibilities | CISO | 2025-03-15 | 4 hours | Role description published (SW-ISMS-ROLE-002) |
| Create IT Admin handover checklist | CISO | 2025-03-15 | 2 hours | Checklist available and referenced in role description |
| Implement automated access review reminders in IT management system | IT Admin | 2025-04-01 | 8 hours | Calendar reminders auto-generate quarterly |
| Conduct knowledge transfer session with IT Admin on critical recurring tasks | IT Lead | 2025-03-30 | 2 hours | Session completed; documented in training log |

### Step 6: Implement Corrective Action

**Who**: Action owners (assigned in corrective action plan)

**Actions**:
1. Execute corrective action plan according to timeline
2. Update relevant documentation (procedures, work instructions, forms)
3. Communicate changes to affected personnel
4. Provide training if behavior change is required
5. Update risk register if applicable (risk treatment)
6. Track progress and report status to CAR Owner and IMS Owner
7. Escalate if actions are delayed or blocked
8. Collect evidence of implementation:
   - Updated procedures (with version control)
   - Training records
   - Screenshots of system changes
   - Meeting minutes
   - Photos or other proof

**Timeline**:
- **Critical NCs**: 7 days
- **Major NCs**: 30 days
- **Minor NCs**: 60 days
- Extensions may be granted by IMS Owner with justification

**CAR Owner**: Monitor implementation progress; provide updates to IMS Owner monthly

### Step 7: Verify Effectiveness

**Who**: IMS Owner, Internal Auditor, or independent reviewer (not the CAR Owner)

**Actions**:
1. Review evidence that corrective actions were implemented
2. Verify that root cause was addressed (not just symptoms)
3. Assess whether the nonconformity is prevented from recurring:
   - **Document review**: Examine updated procedures, records, logs
   - **Interviews**: Ask staff if changes are understood and followed
   - **Observations**: Watch the process in action
   - **Data review**: Check if KPIs or metrics have improved
   - **Follow-up audit**: Conduct targeted audit of the area (if major NC)
4. Determine effectiveness:
   - **Effective**: Root cause addressed; no recurrence; sustainable solution
   - **Partially Effective**: Some improvement but issues remain; additional action needed
   - **Ineffective**: Nonconformity recurred or root cause not addressed; rework required
5. Schedule effectiveness check timing:
   - **Immediate verification**: Check implementation (within 30 days of completion)
   - **Sustained effectiveness**: Check after 3-6 months to ensure solution is sustained
6. Document verification results in the CAR

**Effectiveness verification questions**:
- Has the nonconformity recurred?
- Is the process now consistently meeting requirements?
- Are staff aware of and following the changes?
- Do records demonstrate sustained conformity?
- Is the solution practical and sustainable long-term?

**Example Verification** (continuing example):
- **Evidence reviewed**:
  - Role description SW-ISMS-ROLE-002 v1.0 published
  - IT Admin handover checklist created
  - Automated reminders configured; tested successfully
  - Knowledge transfer session documented in training log
- **Follow-up check** (3 months later):
  - Quarterly access reviews completed on time for Q2 2025
  - IT Admin confirms reminders received and acted upon
  - No missed reviews in sample of 10 user accounts
- **Conclusion**: Corrective action EFFECTIVE; CAR can be closed

### Step 8: Close Nonconformity

**Who**: IMS Owner (with CAR Owner confirmation)

**Actions**:
1. Confirm all corrective actions implemented
2. Confirm effectiveness verified
3. Update CAR status to **Closed**
4. Record closure date and approver
5. File CAR and supporting evidence
6. Update nonconformity register and metrics
7. Communicate closure to relevant parties
8. Identify lessons learned and share with organization (if applicable)

**Approval to close**:
- **Minor NCs**: IMS Owner
- **Major NCs**: IMS Owner + Department Head
- **Critical NCs**: Management Team

**If ineffective**: Reopen CAR; require revised corrective action plan; restart from Step 5

## 7. Trend Analysis and Preventive Action

### 7.1 Trend Analysis

The IMS Owner conducts **quarterly trend analysis** of nonconformities to identify:
- Repeated similar nonconformities (same root cause)
- Patterns by category (QMS, EMS, ISMS)
- Patterns by location, department, or process
- Increase or decrease in NC frequency or severity
- Recurring root causes (systemic issues)
- Areas with high recurrence rates (ineffective corrective actions)

**Trend analysis questions**:
- Are we seeing the same types of nonconformities repeatedly?
- Are certain processes or departments more prone to NCs?
- Are our corrective actions effective or are NCs recurring?
- Are there emerging risks we should address proactively?

**Output**: Trend analysis report presented in Management Review (SW-IMS-PRO-004)

### 7.2 Preventive Action

When trend analysis identifies potential nonconformities (risks):

1. **Assess the risk**: Use risk assessment procedure (SW-IMS-PRO-002)
2. **Develop preventive action plan**: Similar to corrective action but addresses potential issues before they occur
3. **Implement preventive controls**: Strengthen processes, training, monitoring
4. **Monitor effectiveness**: Track whether preventive actions reduce occurrence

**Example**:
- **Trend identified**: Three minor NCs in 6 months related to missing documentation in project deliverables
- **Root cause pattern**: Project teams under time pressure skip documentation steps
- **Preventive action**:
  - Implement project checklist with mandatory documentation review before closure
  - Add documentation time buffer to project plans (2 days)
  - Provide project manager training on documentation requirements
- **Expected outcome**: Reduce documentation-related NCs to zero

## 8. Recurrence Management

If a nonconformity recurs after corrective action was supposedly implemented:

1. **Re-open the CAR** (or create new CAR referencing previous CAR)
2. **Escalate**: Notify IMS Owner and Management Team
3. **Conduct deeper root cause analysis**: Previous RCA was insufficient
4. **Review effectiveness verification**: Was verification thorough? Were there false positives?
5. **Develop revised corrective action plan**: Address deeper root cause
6. **Assign different CAR Owner** if original owner was ineffective
7. **Increase oversight**: More frequent monitoring and verification
8. **Consider external support**: Bring in expert if internal capability is insufficient

**Recurrence indicates**:
- Ineffective root cause analysis
- Ineffective corrective action design
- Poor implementation
- Lack of resources or commitment
- Systemic cultural or management issues

**Persistent recurrence** (3+ times): Escalate to CEO for direct intervention

## 9. Nonconformity Reporting and Metrics

### 9.1 Nonconformity Register

All CARs are recorded in the **Nonconformity Register** (SW-IMS-FRM-008):

| CAR ID | Date Raised | Description | Category | Severity | Source | CAR Owner | Status | Due Date | Closure Date |
|--------|-------------|-------------|----------|----------|--------|-----------|--------|----------|--------------|
| CAR-2025-001 | 2025-01-15 | Missing access reviews | ISMS | Minor | Internal Audit | [Name] | Closed | 2025-03-15 | 2025-03-10 |

**Status values**: Open, In Progress, Verification, Closed, Reopened

**Location**: [TBD - Document management system]

### 9.2 Key Metrics

The following metrics are tracked and reported in Management Review:

| Metric | Purpose |
|--------|---------|
| **Number of NCs by category** (QMS, EMS, ISMS) | Identify problem areas |
| **Number of NCs by severity** (Critical, Major, Minor) | Assess risk level |
| **Number of NCs by source** (audit, customer, incident) | Understand detection methods |
| **Average time to close NCs** | Measure responsiveness |
| **Percentage of NCs closed on time** | Measure compliance with procedure |
| **Percentage of effective corrective actions** | Measure solution quality |
| **Recurrence rate** | Identify persistent issues |
| **Overdue CARs** | Identify bottlenecks |

**Targets** (example):
- 100% of Critical NCs closed within 7 days
- 90% of Major NCs closed within 30 days
- 85% of Minor NCs closed within 60 days
- <10% recurrence rate
- 90% effectiveness rate on first verification

### 9.3 Reporting Frequency

| Report | Frequency | Audience |
|--------|-----------|----------|
| **Open CAR status** | Monthly | IMS Owner, Department Heads |
| **NC metrics dashboard** | Quarterly | Management Team (in Management Review) |
| **Trend analysis report** | Quarterly | Management Team (in Management Review) |
| **Annual NC summary** | Annually | Management Team, All Staff |

## 10. Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **All Staff** | - Identify and report nonconformities<br>- Participate in root cause analysis<br>- Implement corrective actions as assigned<br>- Follow updated procedures resulting from CARs |
| **Process Owners** | - Identify nonconformities in their processes<br>- Act as CAR Owner for NCs in their area<br>- Conduct root cause analysis<br>- Develop and implement corrective action plans<br>- Provide evidence of completion |
| **Department Heads** | - Ensure nonconformities in their areas are addressed<br>- Approve corrective action plans (major NCs)<br>- Allocate resources for corrective actions<br>- Monitor CAR progress in their departments<br>- Support staff in implementing corrective actions |
| **IMS Owner** | - Maintain nonconformity register and CAR system<br>- Assign CAR IDs and track status<br>- Monitor CAR progress and escalate overdue CARs<br>- Verify effectiveness of corrective actions<br>- Conduct trend analysis quarterly<br>- Report NC metrics in Management Review<br>- Maintain this procedure |
| **CISO** | - Act as CAR Owner for information security NCs<br>- Conduct root cause analysis for security incidents<br>- Recommend security-related corrective actions<br>- Verify effectiveness of security corrective actions |
| **Quality Lead** | - Act as CAR Owner for quality NCs<br>- Analyze customer complaints for root causes<br>- Recommend quality-related corrective actions |
| **Environmental Lead** | - Act as CAR Owner for environmental NCs<br>- Analyze environmental incidents for root causes<br>- Recommend environmental corrective actions<br>- Ensure compliance with environmental legal requirements |
| **Management Team** | - Approve corrective action plans for critical and major NCs<br>- Allocate resources for significant corrective actions<br>- Review NC trends and metrics in Management Review<br>- Make decisions on systemic issues<br>- Support a culture of transparency and learning from mistakes |

## 11. Inputs and Outputs

### Inputs:
- Nonconformity identification (from audits, customers, incidents, monitoring)
- ISO requirements and organizational policies
- Previous CAR history and recurrence data
- Root cause analysis results
- Resource availability for corrective actions
- Risk assessment outputs

### Outputs:
- Corrective Action Requests (CARs)
- Root cause analysis documentation
- Corrective action plans
- Updated procedures and documentation
- Nonconformity register
- NC metrics and trend analysis reports
- Lessons learned and improvement opportunities
- Input to Management Review and risk assessment

## 12. Records

| Record | Retention Period | Location | Owner |
|--------|-----------------|----------|-------|
| Corrective Action Requests (CARs) | 7 years | [TBD] | IMS Owner |
| Nonconformity Register | Permanent (current + 7 years archived) | [TBD] | IMS Owner |
| Root Cause Analysis Documentation | 5 years | [TBD] | CAR Owner |
| Evidence of Corrective Action Implementation | 5 years | [TBD] | CAR Owner |
| Effectiveness Verification Records | 5 years | [TBD] | IMS Owner |
| Trend Analysis Reports | 7 years | [TBD] | IMS Owner |
| Customer Complaints (triggering CARs) | 5 years | [TBD] | Customer Success |

## 13. Related Documents

- **SW-IMS-POL-001** - Integrated Management System Policy
- **SW-IMS-PRO-001** - Document Control Procedure
- **SW-IMS-PRO-002** - Risk Assessment Procedure
- **SW-IMS-PRO-003** - Internal Audit Procedure
- **SW-IMS-PRO-004** - Management Review Procedure
- **SW-IMS-FRM-007** - Corrective Action Request (CAR) Form
- **SW-IMS-FRM-008** - Nonconformity Register Template
- **SW-IMS-FRM-002** - Improvement Suggestion Form

## 14. Continuous Improvement

This procedure and the corrective action process are continuously improved through:

- Lessons learned from corrective action effectiveness
- Feedback from CAR Owners on process usability
- Analysis of CAR closure rates and timelines
- Benchmarking against ISO best practices
- Incorporation of audit recommendations
- Staff training on root cause analysis techniques

**Process effectiveness indicators**:
- Declining trend in total nonconformities (effective preventive action)
- Low recurrence rate (effective root cause analysis)
- High on-time closure rate (efficient process)
- High effectiveness rate (quality corrective actions)
- Positive staff feedback (usable, supportive process)

---

## Appendix A: 5 Whys Technique

**Purpose**: Iteratively ask "Why?" to drill down from symptom to root cause.

**How to use**:
1. State the nonconformity clearly
2. Ask "Why did this happen?" and write the answer
3. Ask "Why?" about that answer
4. Repeat 4-5 times (or until you reach the root cause)
5. Validate: If we fix this root cause, will the NC be prevented?

**Example**:

| Question | Answer |
|----------|--------|
| **NC**: Customer received project deliverable with missing documentation | - |
| **Why?** | Project team did not complete documentation checklist before delivery |
| **Why?** | Checklist was not part of the project closure process |
| **Why?** | Project management procedure does not require checklist |
| **Why?** | Procedure was written before documentation requirements were formalized |
| **Why?** | No regular review of procedures to align with current practices |
| **ROOT CAUSE** | Lack of regular procedure review process |

**Corrective Action**: Implement annual procedure review schedule; update project management procedure to include mandatory documentation checklist.

---

## Appendix B: Fishbone (Ishikawa) Diagram

**Purpose**: Visually identify potential root causes across multiple categories.

**Categories (6Ms)**:
1. **Man (People)**: Skills, knowledge, training, communication, motivation
2. **Method (Process)**: Procedures, policies, work instructions, standards
3. **Machine (Technology)**: Tools, systems, software, equipment
4. **Material (Resources)**: Inputs, supplies, information, data
5. **Measurement**: Monitoring, KPIs, audits, inspections
6. **Management (Environment)**: Culture, oversight, priorities, workload

**How to use**:
1. Draw a horizontal arrow pointing to the NC (the "head" of the fish)
2. Draw diagonal lines ("bones") for each category
3. Brainstorm potential causes in each category
4. Identify the most likely root cause(s)
5. Validate with evidence

**Example Fishbone Diagram** (text representation):

```
                            People              Process
                               |                  |
                      Low awareness    Unclear procedure
                      No training      Not documented
                               |                  |
                               └────────┬─────────┘
                                        │
                                        ▼
                          ┌─────────────────────────┐
                          │  Nonconformity:         │
                          │  Security patch not     │
                          │  applied within 30 days │
                          └─────────────────────────┘
                                        ▲
                               ┌────────┴─────────┐
                               |                  |
                      Tool doesn't       No KPI tracking
                      auto-alert        No oversight
                               |                  |
                          Technology         Measurement
```

**Root Cause Identified**: No automated alerting for overdue patches + No KPI tracking of patch compliance

**Corrective Action**: Implement automated patch management tool with alerting; add patch compliance KPI to security dashboard.

---

## Appendix C: CAR Form Template

**CORRECTIVE ACTION REQUEST (CAR)**

**CAR ID**: CAR-YYYY-###
**Date Raised**: [Date]
**Raised By**: [Name]

---

**SECTION 1: NONCONFORMITY DESCRIPTION**

**Classification**:
- [ ] Critical   [ ] Major   [ ] Minor   [ ] Observation
- Category: [ ] QMS   [ ] EMS   [ ] ISMS   [ ] IMS

**Source**:
- [ ] Internal Audit   [ ] External Audit   [ ] Customer Complaint
- [ ] Supplier Issue   [ ] Incident   [ ] Monitoring   [ ] Other: _______

**Nonconformity Description** (What happened? When? Where?):


**Requirement Not Met** (ISO clause, procedure, policy, customer requirement):


**Evidence**:


**CAR Owner**: [Name]
**Target Closure Date**: [Date]

---

**SECTION 2: IMMEDIATE CORRECTION (Containment)**

**Immediate Actions Taken** (to fix the symptom and prevent further impact):


**Correction Completed By**: [Name]
**Correction Date**: [Date]

---

**SECTION 3: ROOT CAUSE ANALYSIS**

**RCA Method Used**: [ ] 5 Whys   [ ] Fishbone   [ ] Other: _______

**Root Cause Analysis**:


**Validated Root Cause** (If we fix this, the NC won't recur):


**RCA Conducted By**: [Name]
**RCA Date**: [Date]

---

**SECTION 4: CORRECTIVE ACTION PLAN**

| Action | Responsible | Deadline | Resources | Success Criteria |
|--------|-------------|----------|-----------|------------------|
| | | | | |
| | | | | |
| | | | | |

**Approval**:
- [ ] Minor NC: CAR Owner approval
- [ ] Major NC: Department Head + IMS Owner approval
- [ ] Critical NC: Management Team approval

**Approved By**: [Name]
**Approval Date**: [Date]

---

**SECTION 5: IMPLEMENTATION**

**Implementation Status**:
- Action 1: [Status, completion date]
- Action 2: [Status, completion date]
- Action 3: [Status, completion date]

**Evidence of Implementation** (attach documents, screenshots, records):


**Implementation Completed By**: [Name]
**Implementation Date**: [Date]

---

**SECTION 6: EFFECTIVENESS VERIFICATION**

**Verification Method**: [ ] Document Review   [ ] Interviews   [ ] Observations   [ ] Follow-up Audit   [ ] Data Review

**Verification Findings**:


**Effectiveness Assessment**:
- [ ] Effective (root cause addressed; no recurrence; sustainable)
- [ ] Partially Effective (requires additional action)
- [ ] Ineffective (NC recurred or root cause not addressed; rework required)

**Verified By**: [Name]
**Verification Date**: [Date]

---

**SECTION 7: CLOSURE**

**CAR Status**: [ ] Open   [ ] In Progress   [ ] Verification   [ ] Closed   [ ] Reopened

**Closure Approved By**: [Name]
**Closure Date**: [Date]

**Lessons Learned** (to share with organization):


---

## Appendix D: Quick Reference - CAR Process Flow

```
┌─────────────────────────────────────────────────────┐
│  1. IDENTIFY                                         │
│     - Recognize nonconformity                        │
│     - Gather evidence                                │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  2. RECORD                                           │
│     - Create CAR (assign ID)                         │
│     - Classify (severity, category)                  │
│     - Assign CAR Owner                               │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  3. CONTAIN (Immediate correction)                   │
│     - Fix the symptom                                │
│     - Prevent further impact                         │
│     - Document immediate actions                     │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  4. ANALYZE (Root cause)                             │
│     - Use 5 Whys or Fishbone                         │
│     - Identify underlying cause                      │
│     - Validate with evidence                         │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  5. PLAN (Corrective action)                         │
│     - Define actions to prevent recurrence           │
│     - Assign responsibilities and deadlines          │
│     - Obtain approvals                               │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  6. IMPLEMENT                                        │
│     - Execute corrective action plan                 │
│     - Update documentation, train staff              │
│     - Collect evidence of implementation             │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  7. VERIFY (Effectiveness)                           │
│     - Check implementation (immediate)               │
│     - Verify sustained effectiveness (3-6 months)    │
│     - Assess: Effective / Partially / Ineffective    │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  8. CLOSE                                            │
│     - Confirm effectiveness verified                 │
│     - Obtain closure approval                        │
│     - Update NC register                             │
│     - Share lessons learned                          │
└─────────────────────────────────────────────────────┘

      │  If ineffective or recurs: REOPEN ◄────┘
```

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
| Management Team Representative | | | |
