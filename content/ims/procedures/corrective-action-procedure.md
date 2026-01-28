---
document_id: SW-IMS-PRO-009
title: Corrective Action Procedure
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
  - SW-IMS-PRO-004
---

# Corrective Action Procedure

**Document ID**: SW-IMS-PRO-009-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner
**Approved by**: [TBD]

## 1. Purpose

This procedure establishes a systematic approach to identifying, analyzing, and eliminating the root causes of nonconformities and other undesirable situations across Swedwise's Integrated Management System. It ensures:

- Nonconformities are identified and documented
- Root causes are systematically analyzed
- Effective corrective actions are implemented
- Actions are verified for effectiveness
- Similar issues are prevented from recurring
- Lessons learned are captured and shared
- Compliance with ISO 9001, ISO 14001, and ISO 27001 requirements

## 2. Scope

This procedure applies to:

- **Quality nonconformities**: Deviations from quality requirements, customer complaints, service failures
- **Environmental incidents**: Environmental impacts, compliance breaches, resource waste
- **Information security incidents**: Security breaches, data protection failures, control weaknesses
- **Process nonconformities**: Deviations from documented procedures
- **Audit findings**: Internal and external audit nonconformities
- **Management system deficiencies**: IMS process failures or weaknesses

This procedure applies to all Swedwise locations, all business activities, and all staff.

### Related But Separate Processes:
- **Immediate containment actions**: Covered by Incident Management Procedure
- **Preventive actions**: Integrated into Risk Assessment Procedure (SW-IMS-PRO-002)
- **Continual improvement**: Covered by Continual Improvement Procedure (SW-IMS-PRO-010)

## 3. Definitions

| Term | Definition |
|------|------------|
| **Nonconformity** | Non-fulfillment of a requirement. Can be against standards, regulations, procedures, customer specifications, or objectives. |
| **Major Nonconformity** | A significant failure that results in the inability to fulfill critical requirements or poses serious risk. Requires immediate action. |
| **Minor Nonconformity** | A less significant deviation that doesn't immediately compromise system effectiveness but requires correction. |
| **Observation** | A potential weakness or area for improvement that isn't yet a nonconformity. |
| **Root Cause** | The fundamental reason(s) why a nonconformity occurred. Eliminating root causes prevents recurrence. |
| **Corrective Action** | Action to eliminate the root cause of a nonconformity and prevent recurrence. |
| **Correction** | Immediate action to address a nonconformity (e.g., fix, repair, rework). Does not address root cause. |
| **Containment** | Temporary measures to limit the impact of a nonconformity while root cause analysis is conducted. |
| **Effectiveness Verification** | Process to confirm that corrective actions have eliminated the root cause and prevented recurrence. |
| **5 Whys** | Root cause analysis technique that asks "Why?" repeatedly to drill down to fundamental causes. |
| **Fishbone Diagram** | Visual root cause analysis tool (also called Ishikawa or Cause-and-Effect Diagram). |

## 4. Nonconformity Classification

### 4.1 Classification Criteria

Nonconformities are classified to determine urgency and response level:

| Classification | Definition | Examples | Response Time |
|---------------|------------|----------|---------------|
| **Critical** | Immediate threat to business operations, compliance, safety, or customer trust | - Major data breach<br>- Critical service outage<br>- Regulatory violation<br>- Customer contract termination threat | Immediate containment<br>Root cause analysis within 24 hours |
| **Major** | Significant impact on effectiveness of IMS, customer satisfaction, or compliance | - Repeated process failures<br>- Audit major findings<br>- Customer complaints (serious)<br>- Environmental incident | Containment within 24 hours<br>Root cause analysis within 5 days |
| **Minor** | Limited impact, doesn't compromise system effectiveness | - Isolated process deviation<br>- Audit minor findings<br>- Documentation errors<br>- Training gap | Address within 10 days |
| **Observation** | Potential for future nonconformity; improvement opportunity | - Incomplete records<br>- Unclear procedure<br>- Monitoring suggestion | Address within 30 days |

### 4.2 Classification Authority

| Classifier | Scope |
|-----------|-------|
| **IMS Owner** | All IMS-related nonconformities |
| **CISO** | Information security incidents |
| **Quality Lead** | Quality and customer-related nonconformities |
| **Environmental Lead** | Environmental incidents |
| **Department Heads** | Operational nonconformities in their areas |

Reclassification may occur as more information becomes available.

## 5. Corrective Action Process

The corrective action process follows the **8D Problem Solving** methodology adapted for Swedwise:

```
D0: Prepare → D1: Team → D2: Describe → D3: Contain → D4: Root Cause →
D5: Corrective Actions → D6: Implement → D7: Prevent Recurrence → D8: Close & Celebrate
```

### 5.1 D0: Prepare and Identify

**Objective**: Recognize and document the nonconformity

**Step 1: Identify the Nonconformity**

Nonconformities can be identified through:
- Internal audits
- External audits (certification, customer, regulatory)
- Customer complaints
- Incident reports
- Process monitoring and measurement
- Management review
- Risk assessments
- Employee reports
- Self-identification by process owners

**Step 2: Initial Documentation**

Person identifying the nonconformity completes **Corrective Action Request (CAR)** form (SW-IMS-FRM-003):

| Field | Description |
|-------|-------------|
| CAR ID | Unique identifier (auto-generated: CAR-YYYY-NNN) |
| Date Identified | When nonconformity was discovered |
| Identified By | Name of person reporting |
| Source | Audit, complaint, incident, monitoring, etc. |
| Classification | Critical, Major, Minor, Observation (initial) |
| Management System | QMS, EMS, ISMS, or multiple |
| Title | Brief description (one line) |
| Description | Detailed description of what went wrong |
| Evidence | Photos, logs, reports, customer feedback, etc. |
| Affected Process/Area | Which process or area is affected |
| Immediate Impact | What is the current impact? |

**Step 3: Notify IMS Owner**

- Submitter sends CAR form to IMS Owner
- Critical and Major nonconformities: Immediate notification (phone/Teams)
- Minor and Observations: Email notification

**Step 4: Log in CAR Register**

- IMS Owner logs CAR in Corrective Action Register (SW-IMS-REG-003)
- Assigns CAR ID
- Records receipt date

### 5.2 D1: Form a Team

**Objective**: Assemble the right people to solve the problem

**Step 1: Assign CAR Owner**

IMS Owner assigns a **CAR Owner** based on:
- Subject matter expertise
- Process ownership
- Availability and workload
- Authority to implement changes

**Step 2: Identify Team Members**

CAR Owner identifies team members (if needed):
- For **Minor/Observation**: CAR Owner may work alone
- For **Major/Critical**: Form cross-functional team (3-5 people)

Team may include:
- Process owners
- Subject matter experts
- Staff who perform the process
- Quality, environmental, or security specialists
- External experts (if needed)

**Step 3: Kickoff**

- CAR Owner schedules kickoff meeting (within timelines in Section 4.1)
- Reviews nonconformity details
- Assigns team roles
- Establishes timeline

### 5.3 D2: Describe the Problem

**Objective**: Fully understand what happened, when, where, and to what extent

**Step 1: Gather Facts**

Use the **5W2H** framework:

| Question | Information to Gather |
|----------|---------------------|
| **What** | What went wrong? What was the deviation? What should have happened? |
| **When** | When did it occur? When was it discovered? Is it ongoing? |
| **Where** | Where did it happen? Which location, system, process step? |
| **Who** | Who was involved? Who discovered it? Who is affected? |
| **Why** | Why is this a problem? Why does it matter? (Impact, not root cause yet) |
| **How** | How did it happen? How was it discovered? |
| **How Much** | How many instances? What is the extent/scope? |

**Step 2: Define the Problem Statement**

Create a clear, specific problem statement:

**Template**:
*"[What went wrong] occurred [when/where], resulting in [impact], affecting [who/what]. This deviates from [requirement/expectation]."*

**Example**:
*"Customer data was accessed by unauthorized user on 2024-02-15 in the SaaS platform due to weak password policy, resulting in potential GDPR breach affecting 150 customer records. This deviates from ISO 27001 access control requirements and GDPR Article 32."*

**Step 3: Quantify the Problem**

- How many times has this occurred?
- What is the trend? (Increasing, stable, decreasing)
- What is the cost/impact? (Financial, customer, reputation, compliance)

**Step 4: Document**

Update CAR form with detailed problem description.

### 5.4 D3: Implement Containment Actions

**Objective**: Immediately limit the damage and protect customers, the organization, and stakeholders

**Step 1: Identify Containment Actions**

Containment actions are **temporary** measures to:
- Prevent the problem from getting worse
- Protect customers and stakeholders
- Isolate affected products, services, or systems
- Prevent further nonconformities

**Examples**:

| Nonconformity Type | Containment Action |
|-------------------|-------------------|
| Data breach | Revoke compromised credentials, isolate affected systems |
| Service failure | Activate backup system, manual workaround |
| Customer complaint | Offer compensation, assign dedicated support |
| Environmental spill | Stop source, contain spread, notify authorities |
| Audit finding | Stop affected process temporarily, increase monitoring |

**Step 2: Implement Containment**

- CAR Owner coordinates implementation
- Document what was done, when, and by whom
- Communicate to affected stakeholders

**Step 3: Verify Containment Effectiveness**

- Confirm containment actions are working
- Monitor for further incidents
- Document verification

**Note**: Containment does **not** fix the root cause. It's a stopgap while root cause analysis proceeds.

### 5.5 D4: Root Cause Analysis

**Objective**: Identify the true underlying cause(s) of the nonconformity

#### Method 1: 5 Whys (for simpler problems)

Ask "Why?" repeatedly to drill down to the root cause.

**Example**:

| Level | Question | Answer |
|-------|----------|--------|
| Problem | Customer data accessed by unauthorized user | - |
| Why 1? | Why was data accessed? | User account was compromised |
| Why 2? | Why was account compromised? | Weak password was guessed |
| Why 3? | Why was password weak? | No password complexity policy enforced |
| Why 4? | Why no policy enforced? | System default settings not changed |
| Why 5? | Why not changed? | Configuration checklist didn't include password policy |
| **Root Cause** | **Configuration checklist incomplete** | |

**Guidelines**:
- Ask "Why?" at least 5 times (may need more or fewer)
- Stop when you reach a cause that is within Swedwise's control to fix
- Avoid stopping at "human error" – dig deeper
- Root cause should be specific and actionable

#### Method 2: Fishbone Diagram (for complex problems)

Organize potential causes into categories:

**Categories (6Ms)**:
1. **Method**: Processes, procedures, work instructions
2. **Machine**: Equipment, software, systems, tools
3. **Material**: Inputs, resources, data, supplies
4. **Manpower**: People, skills, training, staffing
5. **Measurement**: Monitoring, metrics, controls, audits
6. **Mother Nature (Environment)**: Physical environment, external factors

**Process**:
1. Draw fishbone with problem at the head
2. Brainstorm causes in each category
3. For each cause, ask "Why?" to find sub-causes
4. Identify the most likely root cause(s)
5. Test hypothesis with evidence

#### Method 3: Barrier Analysis (for incidents)

Identify what barriers **failed** to prevent the nonconformity:

| Barrier Type | Example | Did It Exist? | Did It Work? | Why Did It Fail? |
|--------------|---------|---------------|--------------|------------------|
| Physical | Access control, locks | Yes | No | Lock bypassed with social engineering |
| Procedural | Procedure, checklist | No | N/A | No procedure existed |
| Technical | Firewall, encryption | Yes | Yes | Configured incorrectly |
| Human | Training, awareness | Yes | No | Training not reinforced |

**Root Cause**: The weakest or missing barrier.

#### Step 1: Select Root Cause Method

CAR Owner selects method based on:
- **5 Whys**: Simple, single-cause problems
- **Fishbone**: Complex, multi-factor problems
- **Barrier Analysis**: Incidents, security breaches

#### Step 2: Conduct Analysis

- Involve team members
- Use evidence and data (not assumptions)
- Document the analysis process
- Identify **all** root causes (may be multiple)

#### Step 3: Validate Root Causes

Test each identified root cause:
- If we eliminate this cause, will the problem stop?
- Is this cause within our control?
- Is there evidence supporting this as a root cause?

#### Step 4: Document

Update CAR form with:
- Root cause analysis method used
- Root causes identified (list all)
- Evidence supporting each root cause
- Analysis diagrams or notes (attach)

### 5.6 D5: Select Corrective Actions

**Objective**: Choose actions that will eliminate root causes and prevent recurrence

**Step 1: Brainstorm Solutions**

For each root cause, identify possible corrective actions:

| Root Cause | Possible Corrective Actions |
|------------|---------------------------|
| Configuration checklist incomplete | - Add password policy to checklist<br>- Create automated configuration script<br>- Implement configuration management tool<br>- Conduct peer review of configurations |

**Step 2: Evaluate Options**

Assess each option against criteria:

| Criterion | Weight | Evaluation |
|-----------|--------|-----------|
| Effectiveness | High | Will it eliminate the root cause? |
| Feasibility | High | Can we implement it with available resources? |
| Cost | Medium | What is the cost vs. benefit? |
| Timeline | Medium | How quickly can we implement? |
| Sustainability | Medium | Will it be maintained long-term? |
| Side Effects | Low | Will it create other problems? |

**Step 3: Select Best Actions**

Choose action(s) that:
- Directly address root cause(s)
- Are feasible and cost-effective
- Can be implemented within reasonable timeframe
- Have lasting effect

**Step 4: Develop Action Plan**

For each selected corrective action:

| Field | Description |
|-------|-------------|
| Action Description | What will be done |
| Owner | Who is responsible |
| Target Date | When it will be completed |
| Resources Needed | Budget, tools, people |
| Success Criteria | How will we know it's done correctly |
| Status | Not Started, In Progress, Complete |

### 5.7 D6: Implement Corrective Actions

**Objective**: Execute the action plan

**Step 1: Kick Off Implementation**

- Action owners notified and accept responsibility
- Resources allocated
- Timeline confirmed
- Implementation tracked in CAR Register

**Step 2: Execute Actions**

Action owners carry out their assigned actions:
- Follow the action plan
- Document progress
- Report obstacles or delays
- Request support if needed

**Step 3: Update Documentation**

If corrective actions involve changes to IMS documents:
- Update procedures, guidelines, work instructions
- Follow Document Control Procedure (SW-IMS-PRO-001)
- Ensure changes are approved before implementation

**Step 4: Communicate Changes**

- Inform affected staff about changes
- Explain why changes are necessary (link to nonconformity)
- Provide training if needed
- Update job aids, checklists, tools

**Step 5: Monitor Progress**

- CAR Owner reviews progress weekly (Major/Critical) or bi-weekly (Minor)
- IMS Owner reviews overdue actions
- Escalate delays to management if needed

### 5.8 D7: Prevent Recurrence

**Objective**: Ensure the problem doesn't happen elsewhere or in the future

**Step 1: Apply Systemically**

Consider whether corrective actions should be applied more broadly:
- Same process at other locations
- Similar processes
- Related systems or services
- Other departments

**Step 2: Update Risk Assessment**

- Add new risk identified by this nonconformity to Risk Register (SW-IMS-PRO-002)
- Update existing risk scores if needed
- Implement additional preventive controls

**Step 3: Share Lessons Learned**

- Document lessons learned
- Share with relevant teams (anonymized if appropriate)
- Include in training materials
- Discuss in team meetings or management review

**Step 4: Enhance Controls**

Consider additional preventive measures:
- Automated checks or alerts
- Improved monitoring
- Enhanced training
- Clearer procedures
- Better tools or equipment

### 5.9 D8: Verify Effectiveness and Close

**Objective**: Confirm that corrective actions have worked and close the CAR

**Step 1: Wait for Evidence Period**

Allow sufficient time for evidence of effectiveness:

| Nonconformity Type | Evidence Period |
|-------------------|----------------|
| One-time occurrence | 1-3 months |
| Frequent occurrence | 3-6 months |
| Systemic issue | 6-12 months |
| Major/Critical | Longer observation |

**Step 2: Collect Evidence**

Gather evidence that the nonconformity has not recurred:
- Monitoring data
- Audit results
- Customer feedback
- Incident reports
- Process metrics
- Inspection records

**Step 3: Verify Effectiveness**

Determine if corrective actions were effective:

| Evaluation | Criteria |
|-----------|----------|
| **Effective** | - No recurrence during evidence period<br>- Root cause eliminated<br>- Metrics improved<br>- Stakeholders satisfied |
| **Partially Effective** | - Reduced frequency but not eliminated<br>- Some improvement in metrics<br>- Additional actions needed |
| **Not Effective** | - Nonconformity recurred<br>- No improvement in metrics<br>- Root cause not addressed |

**Step 4: Close or Re-Open**

- **If Effective**:
  - Update CAR status to "Closed - Effective"
  - Document verification evidence
  - Close date recorded
  - Celebrate success (recognize team effort)

- **If Partially/Not Effective**:
  - Update CAR status to "Re-Opened"
  - Return to D4 (Root Cause Analysis) or D5 (Select Different Actions)
  - Identify why actions were ineffective
  - Develop additional corrective actions

**Step 5: Final Documentation**

Complete CAR form with:
- Verification date
- Verification method
- Verification results
- Lessons learned
- Closure date
- Final sign-off by IMS Owner

**Step 6: Communicate Closure**

- Notify original submitter
- Thank team members
- Share success story (if appropriate)

## 6. Inputs and Outputs

### Inputs
- Nonconformity identification (audits, complaints, incidents, monitoring)
- Audit reports (internal and external)
- Customer complaints and feedback
- Incident reports
- Risk assessment results
- Process performance data
- Employee reports and suggestions

### Outputs
- Corrective Action Requests (CARs)
- Root cause analysis reports
- Corrective action plans
- Updated procedures and documents
- Training materials (updated)
- Risk register updates
- Lessons learned documentation
- CAR closure reports
- Effectiveness verification records

## 7. Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **IMS Owner** | - Maintain this procedure<br>- Receive and log all CARs<br>- Assign CAR owners<br>- Monitor CAR progress and escalate delays<br>- Verify effectiveness before closure<br>- Report CAR status in management review<br>- Maintain CAR Register<br>- Provide root cause analysis training |
| **CAR Owner** | - Lead corrective action process for assigned CARs<br>- Form team (if needed)<br>- Conduct or coordinate root cause analysis<br>- Develop corrective action plan<br>- Monitor action implementation<br>- Coordinate verification<br>- Document all steps<br>- Report progress to IMS Owner |
| **Action Owners** | - Implement assigned corrective actions<br>- Report progress and obstacles<br>- Complete actions by target dates<br>- Provide evidence of completion |
| **Management Team** | - Review Major/Critical CARs<br>- Approve resource allocation for corrective actions<br>- Remove organizational barriers<br>- Review CAR trends and effectiveness in management review |
| **Department Heads** | - Support CAR owners in their areas<br>- Allocate resources for corrective actions<br>- Ensure staff compliance with corrective actions<br>- Report nonconformities in their areas |
| **Quality Lead** | - Provide expertise for quality-related CARs<br>- Support root cause analysis<br>- Verify effectiveness of quality CARs |
| **CISO** | - Provide expertise for security-related CARs<br>- Lead root cause analysis for security incidents<br>- Verify effectiveness of security CARs |
| **Environmental Lead** | - Provide expertise for environmental CARs<br>- Support root cause analysis for environmental incidents<br>- Verify effectiveness of environmental CARs |
| **All Employees** | - Report nonconformities<br>- Participate in root cause analysis when asked<br>- Implement corrective actions in their work<br>- Provide feedback on effectiveness |

## 8. Monitoring and Measurement

CAR process effectiveness is monitored through:

| Metric | Target | Frequency |
|--------|--------|-----------|
| CARs closed on time | >85% | Monthly |
| CAR effectiveness rate (closed as effective) | >90% | Quarterly |
| Average CAR closure time (Minor) | <30 days | Monthly |
| Average CAR closure time (Major) | <60 days | Monthly |
| CAR recurrence rate (same issue recurring) | <5% | Quarterly |
| CARs resulting from audit findings closed before next audit | 100% | Per audit cycle |
| Time to containment (Critical CARs) | <24 hours | Per CAR |
| Overdue CARs | <3 at any time | Weekly |

Results reported in Management Review and used to improve this procedure.

## 9. Records to Maintain

| Record | Retention Period | Location | Owner |
|--------|-----------------|----------|-------|
| Corrective Action Requests (CARs) | 5 years | CAR Register | IMS Owner |
| CAR Register (SW-IMS-REG-003) | Current + 5 years | IMS Repository | IMS Owner |
| Root cause analysis reports | 5 years | Attached to CAR | CAR Owner |
| Action plans | Until CAR closed + 3 years | Attached to CAR | CAR Owner |
| Verification evidence | 3 years | Attached to CAR | CAR Owner |
| Lessons learned documentation | 5 years | IMS Repository | IMS Owner |
| CAR trend reports | 3 years | Management Review records | IMS Owner |

## 10. Related Documents

- **SW-IMS-POL-001** - Integrated Management System Policy
- **SW-IMS-PRO-001** - Document Control Procedure
- **SW-IMS-PRO-002** - Risk Assessment Procedure
- **SW-IMS-PRO-010 - Continual Improvement Procedure
- **SW-IMS-PRO-XXX** - Incident Management Procedure (when created)
- **SW-IMS-PRO-XXX** - Internal Audit Procedure (when created)
- **SW-IMS-FRM-003** - Corrective Action Request (CAR) Form
- **SW-IMS-REG-003** - Corrective Action Register

## 11. Continuous Improvement

This procedure is subject to continuous improvement:

- Root cause analysis methods refined based on experience
- CAR closure timeframes adjusted based on actual performance
- Training provided to improve CAR quality
- Benchmarking against industry best practices
- Integration with incident management optimized

**Suggestions for improvement** should be submitted using the Improvement Suggestion Form (SW-IMS-FRM-002).

---

## Appendix A: CAR Process Flowchart

```
┌─────────────────────────────────────────────────────────────────┐
│                    CORRECTIVE ACTION PROCESS                     │
└─────────────────────────────────────────────────────────────────┘

    D0: IDENTIFY
    ┌──────────────┐
    │ Nonconformity│
    │  Identified  │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Submit CAR   │
    │ to IMS Owner │
    └──────┬───────┘
           │
           ▼
    D1: TEAM
    ┌──────────────┐
    │ Assign CAR   │
    │    Owner     │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │  Form Team   │
    │ (if needed)  │
    └──────┬───────┘
           │
           ▼
    D2: DESCRIBE
    ┌──────────────┐
    │ Gather Facts │
    │ (5W2H)       │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │Define Problem│
    │  Statement   │
    └──────┬───────┘
           │
           ▼
    D3: CONTAIN
    ┌──────────────┐
    │ Implement    │
    │ Containment  │
    └──────┬───────┘
           │
           ▼
    D4: ROOT CAUSE
    ┌──────────────┐
    │  5 Whys /    │
    │  Fishbone /  │
    │   Barrier    │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │   Identify   │
    │  Root Cause  │
    └──────┬───────┘
           │
           ▼
    D5: PLAN
    ┌──────────────┐
    │  Brainstorm  │
    │  Solutions   │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │    Select    │
    │   Actions    │
    └──────┬───────┘
           │
           ▼
    D6: IMPLEMENT
    ┌──────────────┐
    │   Execute    │
    │Action Plan   │
    └──────┬───────┘
           │
           ▼
    D7: PREVENT
    ┌──────────────┐
    │Apply Broadly │
    │Share Lessons │
    └──────┬───────┘
           │
           ▼
    D8: VERIFY & CLOSE
    ┌──────────────┐
    │Wait for      │
    │Evidence      │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐     Effective?
    │   Verify     ├─────────────► YES ──┐
    │ Effectiveness│                      │
    └──────┬───────┘                      │
           │                              │
           │ NO                           │
           ▼                              ▼
    ┌──────────────┐              ┌──────────────┐
    │   Re-Open    │              │  Close CAR   │
    │  Return to   │              │   Success!   │
    │  D4 or D5    │              └──────────────┘
    └──────────────┘
```

---

## Appendix B: Root Cause Analysis Example

**Problem**: Customer data was accessed by unauthorized user

### 5 Whys Analysis:

| Why # | Question | Answer |
|-------|----------|--------|
| Problem | Customer data accessed by unauthorized user | |
| Why 1 | Why was data accessed? | User account credentials were compromised |
| Why 2 | Why were credentials compromised? | Weak password was easily guessed |
| Why 3 | Why was the password weak? | No password complexity requirements enforced |
| Why 4 | Why were complexity requirements not enforced? | System configuration left at default settings |
| Why 5 | Why were defaults not changed? | Configuration checklist didn't include password policy step |

**Root Cause**: Configuration checklist incomplete (missing password policy verification step)

### Corrective Actions:

1. **Immediate** (Containment):
   - Reset all user passwords
   - Force password complexity on all accounts
   - Review access logs for further unauthorized access

2. **Root Cause** (Corrective Action):
   - Update configuration checklist to include password policy verification
   - Create automated configuration script with password policy included
   - Conduct peer review of checklist completeness

3. **Prevention**:
   - Apply updated checklist to all systems
   - Schedule quarterly configuration audits
   - Add password policy monitoring to security monitoring procedure
   - Train system administrators on secure configuration

### Verification (3 months later):

- No further unauthorized access incidents: ✓
- All systems have password complexity enforced: ✓
- Configuration audits completed: ✓
- Updated checklist used successfully on 5 new system deployments: ✓

**Result**: CAR closed as effective

---

## Appendix C: CAR Form Template

See **SW-IMS-FRM-003** - Corrective Action Request (CAR) Form

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
