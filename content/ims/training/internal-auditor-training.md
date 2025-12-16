---
document_id: SW-IMS-TRN-005
title: Internal Auditor Training
doc_type: training
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
related_documents:
  - SW-IMS-PRO-003  # Internal Audit Procedure
  - SW-IMS-PRO-001  # Document Control Procedure
  - SW-IMS-PRO-002  # Risk Assessment Procedure
  - SW-IMS-PRO-005  # Nonconformity and Corrective Action Procedure
  - SW-IMS-POL-001  # Integrated Management System Policy
training:
  course_id: internal-auditor-training
  duration: 90
  target_audience: [designated_auditors, quality_team, management]
  required_for: [internal_auditors]
  assessment:
    enabled: true
    passing_score: 75
    attempts_allowed: 3
  validity_period: 24  # Re-certification every 2 years
---

# Internal Auditor Training

**Duration**: 90 minutes
**Target Audience**: Staff designated as internal auditors for ISO 9001, ISO 14001, and ISO 27001
**Prerequisites**: Basic understanding of Swedwise's IMS and ISO standards

---

## Why This Matters

**You've been selected to become an internal auditor. Why does this role matter?**

Internal audits are not about catching people doing things wrong. They're about:

✓ **Ensuring our IMS actually works** - not just exists on paper
✓ **Finding improvement opportunities** - before they become problems
✓ **Preparing for certification audits** - finding issues ourselves first
✓ **Building confidence** - with customers, partners, and certification bodies
✓ **Learning across the organization** - understanding how different teams work

**For Swedwise specifically**: As a consultancy with 35 people working remotely at client sites, our IMS needs to be practical and lightweight. Internal audits help us verify that our systems support - not burden - our work.

**Your time investment**: After this 90-minute training, you'll conduct 1-2 audits per year (typically 3-5 hours each). In return, you gain cross-functional knowledge and develop valuable skills transferable to client work.

---

## Learning Objectives

By the end of this training, you will be able to:

1. Explain the purpose and principles of internal audits
2. Plan an internal audit using risk-based approaches
3. Conduct audit interviews and gather objective evidence
4. Identify and classify nonconformities (major vs. minor)
5. Write clear, fact-based audit reports
6. Maintain auditor independence and objectivity
7. Support corrective action processes

---

## Part 1: Internal Audit Fundamentals

### What Is an Internal Audit?

**Definition**: A systematic, independent examination to determine whether activities and results conform to planned arrangements and are implemented effectively.

Let's break that down:
- **Systematic** = Follows a structured process (not random checks)
- **Independent** = You don't audit your own work
- **Examination** = You gather objective evidence
- **Conform to planned arrangements** = You check against documented requirements
- **Effectively implemented** = It actually works in practice, not just on paper

### Purpose of Internal Audits

Internal audits serve multiple purposes:

| Purpose | What It Means at Swedwise |
|---------|--------------------------|
| **Verify conformity** | Check we're meeting ISO 9001, 14001, and 27001 requirements |
| **Assess effectiveness** | Confirm processes actually achieve intended results |
| **Identify improvements** | Find opportunities to work smarter, not harder |
| **Prepare for certification** | Practice before external auditors arrive |
| **Risk management** | Detect issues before they impact customers or compliance |
| **Knowledge sharing** | Learn how different teams solve problems |

### Audit Principles (ISO 19011)

These six principles guide all audits:

#### 1. **Integrity**
- Be honest, ethical, and professional
- Don't compromise your findings under pressure
- Example: If you find a nonconformity in your friend's department, you still report it objectively

#### 2. **Fair Presentation**
- Report findings accurately and completely
- Balance: mention both conformities and nonconformities
- Example: "Three of four access reviews completed on time (one missing)" is better than "Access reviews not done"

#### 3. **Due Professional Care**
- Be thorough but proportionate
- Use your judgment and experience
- Example: For a 35-person company, sampling 5 records may be sufficient; you don't need 50

#### 4. **Independence**
- You cannot audit your own work or areas you're directly responsible for
- Declare any conflicts of interest
- Example: If you're a developer, you can audit sales processes but not development processes

#### 5. **Evidence-Based Approach**
- Findings must be supported by verifiable evidence
- Facts, not opinions or assumptions
- Example: "Training records show 12 of 15 staff completed security training" (evidence) vs. "Most people seem trained" (opinion)

#### 6. **Risk-Based Approach**
- Focus audit effort on higher-risk areas
- Deeper examination where consequences are greater
- Example: Spend more time auditing SaaS operations than office recycling (both important, but different risk levels)

### ISO 19011 Guidance

ISO 19011:2018 provides international guidelines for auditing management systems. Key takeaways:

- **Competence matters**: Auditors need knowledge of audit techniques AND the area being audited
- **Context is critical**: Understand what you're auditing before you audit it
- **Audit is a process**: It's not just the audit day; it includes planning, conducting, reporting, and follow-up
- **Continuous improvement**: Use lessons learned to improve your auditing skills

---

## Part 2: Audit Planning

### Understanding the Annual Audit Program

Swedwise maintains an annual audit program that schedules audits across the year. The program is risk-based:

**High-risk areas** (audited semi-annually or more):
- Information security controls (ISO 27001)
- SaaS operations and incident management
- Customer delivery and project management

**Medium-risk areas** (audited annually):
- Document control and records management
- Environmental aspects (travel, energy)
- Supplier management

**Low-risk areas** (audited annually or every 18 months):
- Office facilities and waste management
- Internal communication processes

**Your role**: You'll be assigned specific audits based on your availability and independence from the area being audited.

### Planning an Individual Audit

When you're assigned as lead auditor (or supporting auditor), follow these steps:

#### Step 1: Understand the Audit Scope

**Key questions**:
- What process or area am I auditing?
- Which ISO standard(s) apply? (QMS, EMS, ISMS, or multiple?)
- What location(s)? (Karlstad HQ, Stockholm, Uddevalla, remote workers, client sites?)
- What time period? (Usually the last 3-12 months of activities)

**Example scope**:
"Audit of information security access control processes (ISO 27001 Annex A.9) covering all three offices and remote workers, for the period January - June 2025."

#### Step 2: Review Audit Criteria

**Audit criteria** = The requirements you're checking against. This includes:

- ISO standard clauses (e.g., ISO 27001 Clause 6.2 on security objectives)
- Swedwise policies (e.g., SW-ISMS-POL-001 Information Security Policy)
- Procedures (e.g., SW-IMS-PRO-003 Internal Audit Procedure)
- Legal/regulatory requirements
- Customer contracts or SLAs (for SaaS services)

**Before the audit**: Read the relevant policies and procedures. You can't audit what you don't understand.

#### Step 3: Identify Key Auditees

Who do you need to talk to?

- **Process owner**: Person responsible for the process (strategic view)
- **Process operators**: People who do the work daily (operational view)
- **Support roles**: People who enable the process (IT, HR, etc.)

**At Swedwise (35 people)**: Keep it proportionate. Interviewing 3-5 people per process is usually sufficient.

#### Step 4: Prepare Your Audit Plan

Your audit plan should include:

| Element | Details |
|---------|---------|
| **Objective** | "Verify conformity of access control processes to ISO 27001 requirements" |
| **Scope** | Specific processes, locations, time period |
| **Criteria** | ISO 27001 clauses, policy/procedure references |
| **Schedule** | Date, time, duration (typically half-day to full-day) |
| **Audit team** | Lead auditor, supporting auditors (if any) |
| **Auditees** | Names and roles of people to interview |
| **Resources needed** | Meeting room, system access, sample records |

**Timing**: Share the audit plan with auditees **at least 2 weeks in advance** (unless an unannounced audit is justified, which is rare).

#### Step 5: Prepare Audit Checklists

Checklists help you stay organized and ensure you cover all requirements. Structure your checklist by:

- ISO clauses or requirement categories
- Process steps
- Risk areas

**Example checklist excerpt**:

| ISO Clause | Requirement | What to Check | Evidence Needed |
|------------|-------------|---------------|-----------------|
| A.9.2.1 | User registration and deregistration | Are user accounts created/removed following documented process? | User access request forms, approval records, account creation logs |
| A.9.2.2 | User access provisioning | Is access granted based on least privilege principle? | Access review records, role definitions, comparison of access vs. job role |
| A.9.2.5 | Review of user access rights | Are access rights reviewed at planned intervals? | Quarterly access review reports, evidence of actions taken |

**Pro tip**: Your checklist is a guide, not a script. Be ready to adapt based on what you discover during the audit.

---

## Part 3: Conducting Audits

### Opening Meeting (15-30 minutes)

**Purpose**: Set the tone, confirm scope, establish logistics.

**Attendees**: Audit team + auditees + relevant managers

**Agenda**:
1. **Introductions**: Introduce yourself and audit team
2. **Confirm objective and scope**: "We're auditing access control processes against ISO 27001 requirements"
3. **Review schedule**: "We'll interview these people at these times"
4. **Explain audit method**: "We'll ask questions, review documents, and look at records"
5. **Clarify expectations**: "This is collaborative; we're looking for improvement opportunities, not trying to catch mistakes"
6. **Logistics**: Confirm meeting room, access to systems, breaks
7. **Set closing meeting time**: "We'll meet again at 3:30 PM to discuss findings"
8. **Questions**: Address any concerns

**Tone tip**: Be professional but approachable. Smile. Say "we're here to help" not "we're here to check up on you."

### Interviewing Techniques

Interviews are your primary evidence-gathering tool. Here's how to do them well:

#### Ask Open-Ended Questions

**Good questions** (open-ended):
- "Can you walk me through how you handle a new user access request?"
- "What do you do if someone leaves the company?"
- "How do you know if access reviews are up to date?"
- "Where do you record access approvals?"

**Avoid closed questions** (yes/no answers):
- "Do you follow the access control procedure?" (They'll say "yes" even if they don't)

#### Use the "Show Me" Technique

Instead of just asking, ask them to demonstrate:
- "Can you show me the last access review you completed?"
- "Can you pull up an example of an access request form?"
- "Can you show me where you document this?"

**Why this works**: People may say they do something, but showing you reveals how it actually works.

#### Listen Actively

- Let them talk; don't interrupt
- Take notes while maintaining eye contact
- Paraphrase to confirm understanding: "So if I understand correctly, you review access quarterly using this spreadsheet?"
- Follow up on interesting points: "You mentioned sometimes approvals are verbal - tell me more about that"

#### Handle Nervousness

People may be nervous during audits. Help them relax:
- Explain you're looking at the process, not evaluating them personally
- Start with easy questions before diving into complex topics
- Acknowledge when they're doing things well
- If they don't know an answer, ask who would know

### Gathering Audit Evidence

Evidence must be:
- **Verifiable**: Can be independently confirmed
- **Relevant**: Directly related to audit criteria
- **Sufficient**: Enough to support your finding
- **Current**: Reflects the current situation

#### Types of Evidence

**1. Documents** (policies, procedures, work instructions)
- Check they exist, are current, and are approved
- Check they align with ISO requirements

**2. Records** (completed forms, logs, reports)
- Sample and review for completeness, accuracy, timeliness
- Example: Review 5 recent access request forms

**3. Observations** (watching activities, inspecting physical controls)
- Watch someone perform a process
- Check physical security controls (locked doors, badge access)

**4. Interviews** (asking staff about how things work)
- Verify people understand and follow procedures
- Check for consistency between different staff members

#### Sampling Approach

**For Swedwise (35 people)**: You don't need to check everything. Use representative sampling:

- **Process records**: Sample 5-10 recent records (if fewer exist, review all)
- **Staff interviews**: Interview 3-5 people per process
- **High-risk areas**: Increase sample size
- **Low-risk or mature processes**: Smaller sample acceptable

**Example**: To audit access control, you might:
- Interview 4 staff (CISO, IT admin, HR person, department head)
- Review 6 user access request forms from the last quarter
- Review the last 2 quarterly access review reports
- Observe one account creation/deactivation process

### Note-Taking During Audits

**What to document**:
- Who you interviewed (name, role, date/time)
- What documents you reviewed (document ID, version, date)
- What records you sampled (record numbers, dates)
- Observations (timestamp, location)
- Direct quotes (if relevant)
- Evidence of conformity or nonconformity

**Example good notes**:
```
2025-06-15, 10:30 AM - Interview with Anna Svensson (IT Administrator)
- Showed me user access request process in HRIS system
- Demonstrated account creation for new employee (Maria Andersson, hired 2025-06-01)
- Access request form SW-ISMS-FRM-003 completed, approved by dept head (signature dated 2025-05-28)
- Account created 2025-06-02 (1 day after start date - noted delay but within acceptable range)
- Anna explained access is based on role template (Consultant role = standard app access)
```

**Example poor notes**:
```
Talked to Anna about access. Seems okay. Some delays.
```

**Pro tip**: Write legibly or type notes. You'll need them when writing your report days later.

### Evaluating Findings

For each audit criterion, you'll determine one of these outcomes:

#### 1. **Conformity**
Requirement is met; evidence demonstrates effective implementation.

**Example**: "Training records confirm all 15 staff completed security awareness training in the last 12 months (requirement: annually). Completion dates range from 2024-07-01 to 2025-05-15. CONFORMITY."

#### 2. **Minor Nonconformity**
Isolated deviation; doesn't compromise overall system effectiveness.

**Characteristics**:
- One-off or occasional lapse
- Limited impact
- System is generally working but has a gap

**Examples**:
- "One employee's training record is missing completion date (14 of 15 complete)"
- "Backup log for March 2025 not filed in central location; other 11 months present"
- "One procedure (SW-QMS-PRO-006) shows version 1.0 on cover but version 1.1 in footer (inconsistency)"

#### 3. **Major Nonconformity**
Systemic failure or complete absence of a requirement.

**Characteristics**:
- Complete absence of a required system element
- Widespread breakdown
- Multiple related minor nonconformities indicating systemic issue
- Significant risk or impact

**Examples**:
- "No evidence of risk assessments conducted in past 18 months (requirement: annual)" - COMPLETE ABSENCE
- "Five of six sampled access reviews not performed" - SYSTEMIC FAILURE
- "Environmental aspects not identified for new SaaS service launched 6 months ago" - SIGNIFICANT GAP
- "Three backup failures in last quarter; no corrective actions taken" - PATTERN + NO ACTION

#### 4. **Observation**
Not a nonconformity, but indicates potential risk or improvement opportunity.

**When to use observations**:
- Process works but could be more efficient
- Emerging trend that might become a nonconformity later
- Good practice worth sharing
- Something outside audit scope but worth mentioning

**Examples**:
- "Backup logs are stored in multiple locations, making review time-consuming. Consider centralizing."
- "Staff expressed confusion about which version of form to use; better communication might help."
- "Customer Success team has implemented proactive check-ins exceeding minimum requirements - good practice."

### Audit Team Debrief

Before the closing meeting, the audit team meets privately (30-60 minutes) to:

1. **Review all findings**
2. **Classify findings** (conformity, minor NC, major NC, observation)
3. **Ensure findings are evidence-based**: Can you prove it?
4. **Identify patterns or themes**
5. **Prepare closing meeting presentation**

**Key question**: "If the auditee challenges this finding, do we have objective evidence to support it?"

If not, it's not a valid finding.

---

## Part 4: Nonconformity Identification and Classification

### Major vs. Minor: How to Decide

This is often the hardest part of auditing. Here's a decision framework:

#### Ask These Questions:

**1. Is the requirement completely absent?**
- Yes = Likely **Major**
- No = Continue to next question

**2. Is there a systemic breakdown (multiple failures, pattern)?**
- Yes = Likely **Major**
- No = Continue to next question

**3. Is there a significant risk or impact?**
- High risk/impact = Likely **Major**
- Low risk/impact = Likely **Minor**

**4. Is it an isolated incident?**
- Yes = Likely **Minor**
- No = Likely **Major**

#### Classification Examples

| Scenario | Classification | Rationale |
|----------|----------------|-----------|
| No security policy exists | **Major NC** | Complete absence of required document (ISO 27001 Clause 5.2) |
| Security policy exists but not reviewed in 3 years (requirement: annual) | **Minor NC** | Policy exists and is functional, but review schedule not followed (isolated process lapse) |
| No risk assessment conducted in past 2 years | **Major NC** | Systemic failure; risk assessment is foundational to ISMS |
| One high-risk item in risk register not reviewed in last quarter; other 15 reviewed | **Minor NC** | Isolated lapse; process generally working |
| 6 of 8 sampled access reviews not completed | **Major NC** | Systemic failure (75% non-completion) |
| 1 of 8 access reviews completed 5 days late | **Minor NC** | Isolated lapse; minor delay |
| Customer complaints not tracked or analyzed (ISO 9001 requirement) | **Major NC** | Complete absence of required process |
| One customer complaint from Q1 not recorded; other 12 recorded | **Minor NC** | Isolated error; system generally effective |
| Environmental aspects identified but not updated after launching new SaaS service 8 months ago | **Major NC** | Significant gap; failure to apply process to new major activity |
| One minor environmental aspect (office lighting) not included in register; other 20 present | **Minor NC** | Isolated omission of low-significance item |

### Gray Areas and Judgment Calls

Sometimes it's not clear-cut. Consider:

**Context matters**:
- At a 35-person company, one missing record out of 35 is 3% - likely minor
- But if that record is for the CISO's security training, it might be more significant

**Trend direction**:
- If this is the first occurrence, it might be minor
- If it's a repeat finding from last audit, escalate to major

**Root cause**:
- If the cause is "person forgot" = likely minor
- If the cause is "we don't have a process for this" = likely major

**When in doubt**: Classify as minor and note in your report that it should be monitored for recurrence.

---

## Part 5: Audit Reporting and Documentation

### Closing Meeting (30-45 minutes)

**Attendees**: Same as opening meeting

**Agenda**:
1. **Thank auditees** for cooperation and time
2. **Restate scope and criteria** to confirm shared understanding
3. **Present findings**:
   - Start with **positive findings and conformities** (what's working well)
   - Then **observations** (improvement opportunities)
   - Finally **nonconformities** (minor first, then major)
4. **For each nonconformity**:
   - State the requirement clearly
   - Present the evidence objectively
   - Explain the potential impact
   - Allow auditee to ask clarifying questions (but not debate the finding)
5. **Explain next steps**: Corrective action timeline, verification process
6. **Confirm report distribution**: Who gets the report and when
7. **Close professionally**: Thank them again

**Tone**: Balanced and constructive. The ratio should be roughly: "Here are 10 things working well, 3 things to improve, and 2 issues to fix."

**Handling challenges**:
- If auditee disagrees with a finding: Listen to their perspective, but don't negotiate facts. Note their view and include it in the report if relevant.
- If new evidence emerges: You can adjust your finding if the evidence is verifiable.
- If emotions run high: Stay calm, factual, and professional. Focus on the process, not the person.

### Writing the Audit Report

**Timeline**: Submit audit report within **5 working days** of audit completion.

#### Report Structure

Your report should include these sections:

**1. Audit Information**
- Audit ID, date, location
- Lead auditor and team
- Auditees

**2. Audit Objective and Scope**
- Purpose of the audit
- What was covered (and what wasn't)

**3. Audit Criteria**
- ISO clauses, policies, procedures used as benchmarks

**4. Executive Summary**
- 1-2 paragraph overview
- Overall conformity status
- Key highlights

**5. Conformities**
- List areas where requirements are fully met
- Acknowledge effective practices

**6. Positive Findings**
- Good practices worth recognizing
- Examples of excellence

**7. Observations**
- Improvement opportunities (not nonconformities)
- Include recommendation for each

**8. Nonconformities**
- Each nonconformity documented separately (see format below)

**9. Audit Conclusion**
- Overall assessment of system effectiveness
- Recommendation (e.g., "System is effective; minor improvements needed")

**10. Next Steps**
- Corrective action timeline
- Verification plan

#### Nonconformity Report Format

Each nonconformity should follow this structure:

**Nonconformity ID**: NC-[Audit ID]-[Number]
- Example: NC-A2025-03-001

**Classification**: Major or Minor

**Requirement**: Specific ISO clause, policy, or procedure violated
- Example: "ISO 27001 Annex A.9.2.5 requires periodic review of user access rights. SW-ISMS-PRO-005 Section 4.3 specifies quarterly reviews."

**Evidence**: Objective facts supporting the finding
- Example: "Review of access control records for Q1 2025 shows no documented access reviews. Interviewed CISO (John Andersson, 2025-06-15) confirmed reviews were not conducted due to resource constraints. Sampled 6 user accounts: 0 of 6 show evidence of quarterly review."

**Potential Impact**: Consequences if not corrected
- Example: "Risk of unauthorized access remaining undetected. Non-compliance with ISO 27001 control A.9.2.5 may be cited in certification audit."

**Required Action**: What needs to be corrected
- Example: "Conduct access reviews for all users. Implement process to ensure quarterly reviews are completed. Address root cause of resource constraint."

#### Writing Tips

**Do**:
- Use clear, simple language
- Be specific and factual
- Include dates, names, document IDs
- Balance positive and negative findings
- Proofread before submitting

**Don't**:
- Use accusatory language ("They failed to..." → "Evidence shows...")
- Make assumptions ("Probably because..." → stick to facts)
- Include hearsay ("Someone told me..." → use verifiable evidence only)
- Editorialize ("This is terrible..." → state impact objectively)

**Example - Poor Writing**:
"The IT department obviously doesn't care about security. They never do access reviews and probably haven't for years. This is a huge problem and could get us in serious trouble."

**Example - Good Writing**:
"Review of access control records for Q1 2025 shows no documented quarterly access reviews as required by ISO 27001 A.9.2.5 and SW-ISMS-PRO-005 Section 4.3. This represents a risk of unauthorized access remaining undetected and may result in a nonconformity during the certification audit."

### Report Distribution

Audit reports are distributed to:
- Auditee (department head or process owner)
- Management Team
- IMS Owner
- Relevant managers

**Classification**: Reports are **Internal** - don't share outside Swedwise without approval.

**Retention**: Reports kept for **7 years** (ISO requirement).

---

## Part 6: Follow-Up and Corrective Actions

### Corrective Action Process

After the audit report is issued, the auditee develops corrective action plans.

#### What's Required

For each **nonconformity**, the auditee must:

**1. Immediate Correction** (if applicable)
- Fix the specific instance right away
- Example: Complete the missing training record

**2. Root Cause Analysis**
- Determine WHY the nonconformity occurred
- Use techniques like 5 Whys or fishbone diagram
- Example: "Training completion wasn't tracked centrally; relied on individual memory; no reminder system in place"

**3. Corrective Action Plan**
- Address the root cause to prevent recurrence
- Define specific actions, responsibilities, deadlines
- Example: "Implement automated training tracking in HRIS (Owner: HR Manager, Due: 2025-08-30). Set up quarterly reminders (Owner: HR Admin, Due: 2025-09-15)."

**4. Verification of Effectiveness**
- Provide evidence that corrective action works
- Example: "Provide HRIS report showing all staff training status. Conduct spot-check in 3 months to verify reminders working."

#### Timeline Expectations

**Major nonconformities**:
- Corrective action plan: Within **2 weeks**
- Implementation: Within **30 days** (or as agreed)

**Minor nonconformities**:
- Corrective action plan: Within **4 weeks**
- Implementation: Within **60 days**

**Extensions**: IMS Owner may grant extensions if justified (resource constraints, complexity, etc.)

### Auditor's Role in Follow-Up

As the auditor, you may be asked to:

**1. Verify corrective action plans** (within days of submission)
- Review the plan: Does it address the root cause?
- Check feasibility: Is the timeline realistic?
- Provide feedback: Suggest improvements if needed

**2. Verify implementation** (after implementation deadline)
- Review evidence provided (documents, records, screenshots)
- Conduct follow-up audit if needed (especially for major NCs)
- Determine if corrective action is effective

**3. Close nonconformities** (after verification)
- Outcome: **Closed** (adequate and effective) or **Reopened** (inadequate or ineffective)

### When Corrective Actions Don't Work

Sometimes corrective actions fail or aren't completed on time:

**If timeline not met**: Auditee may request extension with justification
**If corrective action ineffective**: Nonconformity is reopened; new root cause analysis required
**If persistent issues**: IMS Owner escalates to Management Team

**Your role**: Be supportive but firm. The goal is effective resolution, not just closing the finding.

---

## Part 7: Independence and Objectivity

### Why Independence Matters

**Scenario**: Imagine you're auditing your own work. You find a nonconformity that you caused. Would you report it?

- Maybe you would (integrity!)
- But the *perception* is that you might not
- External auditors and certification bodies require demonstrable independence

**ISO requirement**: Auditors must be independent from the area being audited.

### Independence Rules at Swedwise

**✓ You CAN audit**:
- Processes outside your department or direct responsibility
- Areas where you provide occasional support but aren't the owner
- Processes you participate in as a normal staff member (e.g., you follow document control, but you don't own the document control process)

**✗ You CANNOT audit**:
- Your own work or outputs
- Processes you are directly responsible for managing
- Your immediate team or department (if you're the manager)
- Areas where you have a conflict of interest

#### Practical Examples for Swedwise

| Your Role | Can Audit | Cannot Audit |
|-----------|-----------|--------------|
| **Consultant** | Sales processes, HR processes, environmental aspects | Your own project deliverables, consultant performance metrics |
| **Customer Success Manager** | IT operations, information security, procurement | Customer delivery processes, customer satisfaction processes |
| **IT Administrator** | Quality processes, customer delivery, HR | IT security controls, system administration, backup processes |
| **Department Head** | Other departments | Your own department |
| **IMS Owner** | Most processes | Document control, overall IMS (use external auditor) |

### Cross-Functional Auditing

**Swedwise approach** (small company, 35 people):
- We use **cross-functional audits**: Staff audit areas outside their department
- Example: Customer Success staff audit IT operations; IT staff audit sales processes
- This builds knowledge sharing and avoids costly external auditors for most audits

**Benefits**:
- You learn how other parts of Swedwise work
- You bring fresh perspectives
- Knowledge transfers across teams

**If independence cannot be maintained**: Use an external auditor for that specific audit.

### Maintaining Objectivity

Independence is structural (who audits what). Objectivity is behavioral (how you audit).

**Be objective by**:
- Basing findings on evidence, not personal opinions
- Not letting relationships influence your judgment
- Reporting both good and bad findings equally
- Avoiding assumptions or bias
- Being fair and professional

**Scenarios to watch for**:

**Scenario 1: Your friend is the auditee**
- ✗ Don't: Ignore or downplay findings to avoid awkwardness
- ✓ Do: Report findings objectively; separate friendship from audit role

**Scenario 2: You have strong opinions about how the process should work**
- ✗ Don't: Audit against your personal preferences
- ✓ Do: Audit against documented requirements (ISO standards, policies, procedures)

**Scenario 3: The auditee is defensive or dismissive**
- ✗ Don't: Get emotional or argumentative
- ✓ Do: Stay calm, factual, and professional; document their perspective

**Scenario 4: Management pressures you to change a finding**
- ✗ Don't: Compromise your findings
- ✓ Do: Explain the evidence supporting your finding; escalate to IMS Owner if needed

**Remember**: Your reputation as an auditor depends on being trusted to report the truth.

---

## Part 8: Practical Exercises

### Exercise 1: Classify the Finding

For each scenario, determine if it's a **Major NC**, **Minor NC**, **Observation**, or **Conformity**.

**Scenario A**:
You're auditing document control. You review 10 procedures. Nine procedures display version number and approval date on every page. One procedure (SW-QMS-PRO-007) only shows version number on the cover page, not in the footer.

**Your answer**: _________________

**Scenario B**:
You're auditing environmental management. The company launched a new SaaS service 9 months ago. You ask to see the environmental aspects identified for the service. The Environmental Lead states they haven't conducted an environmental aspects review for the new service yet.

**Your answer**: _________________

**Scenario C**:
You're auditing information security incident management. You review incident logs for the past 6 months. All 8 incidents were logged, investigated, and resolved within SLA. Reports are well-documented and include root cause analysis.

**Your answer**: _________________

**Scenario D**:
You're auditing access control. The procedure requires quarterly access reviews. You sample 10 user accounts. Results:
- Q1 2025: 2 of 10 reviewed
- Q4 2024: 1 of 10 reviewed
- Q3 2024: 3 of 10 reviewed
- Q2 2024: 0 of 10 reviewed

**Your answer**: _________________

---

### Exercise 2: Audit Interview

**Scenario**: You're auditing the customer satisfaction process (ISO 9001 Clause 9.1.2). You're interviewing the Customer Success Manager.

**Which questions are effective?**

A. "Do you measure customer satisfaction?"
B. "Can you walk me through how you gather customer feedback?"
C. "Why don't you conduct more customer surveys?"
D. "Can you show me an example of a customer satisfaction report from the last quarter?"
E. "How do you use customer feedback to improve services?"

**Your answers** (select all that are effective): _________________

---

### Exercise 3: Evidence Evaluation

**Scenario**: You're auditing training records. The requirement is: "All staff must complete annual security awareness training."

**Which of the following is sufficient evidence of conformity?**

A. The IT Manager says, "Yes, everyone has done their training."
B. You review the training platform and see 32 of 35 staff completed training in the last 12 months. Three completions are from 13-14 months ago.
C. You see a policy document stating all staff must be trained annually.
D. You interview 5 random staff members and all 5 can describe key security practices from the training.

**Your answer**: _________________

---

### Exercise 4: Write a Nonconformity

**Scenario**: You're auditing backup and recovery processes (ISO 27001 A.12.3.1 - Information backup). The procedure states: "Backups are tested monthly by performing a restore test of at least one system. Test results are documented."

You review backup logs for the past 6 months:
- January 2025: Restore test documented, successful
- February 2025: Restore test documented, successful
- March 2025: No restore test documented
- April 2025: No restore test documented
- May 2025: Restore test documented, successful
- June 2025: No restore test documented (current month, not yet due)

You interview the IT Administrator (Marcus Holm, 2025-06-18). He explains: "We got busy with the SaaS launch in March and April and didn't have time for restore tests. We know backups are running because we check the logs."

**Your task**: Write a nonconformity statement following the format:

**Nonconformity ID**: NC-A2025-XX-XXX

**Classification**: (Major or Minor)

**Requirement**:

**Evidence**:

**Potential Impact**:

**Required Action**:

---

## Check Your Understanding - Assessment

**Instructions**: Answer all 12 questions. You need 9 or more correct (75%) to pass. You have 3 attempts.

---

### Question 1
What is the primary purpose of internal audits?

A. To catch people making mistakes
B. To verify conformity to requirements and identify improvement opportunities
C. To prepare documentation for external auditors
D. To satisfy ISO requirements

**Answer**: _________________

---

### Question 2
According to ISO 19011, which of the following is NOT one of the audit principles?

A. Integrity
B. Evidence-based approach
C. Perfection
D. Independence

**Answer**: _________________

---

### Question 3
You are a developer in the IT department. Which of the following audits can you conduct while maintaining independence?

A. Audit of software development processes
B. Audit of your own project deliverables
C. Audit of customer sales processes
D. Audit of IT security controls you administer

**Answer**: _________________

---

### Question 4
During an audit, the auditee tells you, "We always follow the access control procedure." What should you do next?

A. Accept their statement and move on
B. Ask them to show you an example or demonstrate the process
C. Record this as evidence of conformity
D. Thank them and conclude the audit

**Answer**: _________________

---

### Question 5
You're auditing document control and find that 1 out of 12 reviewed procedures doesn't show the version number in the footer (requirement: all pages must display version number). How should you classify this?

A. Major nonconformity
B. Minor nonconformity
C. Observation
D. Conformity

**Answer**: _________________

---

### Question 6
You're auditing environmental aspects. The company launched a new SaaS service 8 months ago, but no environmental aspects have been identified for it yet (requirement: identify environmental aspects for all activities). How should you classify this?

A. Major nonconformity
B. Minor nonconformity
C. Observation
D. Conformity

**Answer**: _________________

---

### Question 7
During the closing meeting, the auditee strongly disagrees with one of your nonconformity findings and presents a new document as evidence that the requirement was met. What should you do?

A. Immediately remove the nonconformity from your report
B. Refuse to consider new evidence since the audit is over
C. Review the new evidence; adjust your finding if it's verifiable and relevant
D. Escalate to management to decide

**Answer**: _________________

---

### Question 8
What are the three required components of a corrective action (in addition to immediate correction)?

A. Apology, timeline, verification
B. Root cause analysis, corrective action plan, effectiveness verification
C. Report, evidence, closure
D. Documentation, approval, training

**Answer**: _________________

---

### Question 9
You're auditing access control processes. You sample 10 user accounts and find that quarterly access reviews were completed for 2 accounts in Q1, 1 account in Q4, 3 accounts in Q3, and 0 accounts in Q2. The requirement is quarterly reviews for all accounts. How should you classify this?

A. Major nonconformity - systemic failure
B. Minor nonconformity - isolated lapse
C. Observation - improvement opportunity
D. Conformity - some reviews were done

**Answer**: _________________

---

### Question 10
Which of the following is the BEST evidence of conformity for a training requirement?

A. The manager says everyone is trained
B. A policy states training is required
C. Training records showing completion dates for all required staff
D. Staff seem knowledgeable when you talk to them

**Answer**: _________________

---

### Question 11
When should the audit report be submitted after the audit is completed?

A. Within 24 hours
B. Within 5 working days
C. Within 2 weeks
D. Within 30 days

**Answer**: _________________

---

### Question 12 (Scenario-Based)
You're auditing backup processes. The procedure requires monthly restore tests to verify backups are recoverable. You find that restore tests were documented in January, February, and May, but not in March and April. The IT Administrator explains they were very busy with a critical SaaS launch and didn't have time for restore tests those months, but they checked backup logs daily to ensure backups were running.

Which statement BEST describes how to handle this finding?

A. This is conformity - they monitored backups daily and only missed 2 months
B. This is a minor nonconformity - isolated lapse in following the procedure, system generally working
C. This is a major nonconformity - backup verification is critical and has systemic failures
D. This is an observation - suggest improving time management during busy periods

**Answer**: _________________

---

## Assessment Answer Key

(For LMS system - hidden from learners during assessment)

1. **B** - To verify conformity to requirements and identify improvement opportunities
2. **C** - Perfection (the six principles are: Integrity, Fair presentation, Due professional care, Independence, Evidence-based approach, Risk-based approach)
3. **C** - Audit of customer sales processes (maintains independence; you're not auditing your own work)
4. **B** - Ask them to show you an example or demonstrate the process (use "show me" technique)
5. **B** - Minor nonconformity (isolated lapse, 1 of 12 documents)
6. **A** - Major nonconformity (significant gap; failure to apply process to major new activity)
7. **C** - Review the new evidence; adjust your finding if it's verifiable and relevant
8. **B** - Root cause analysis, corrective action plan, effectiveness verification
9. **A** - Major nonconformity - systemic failure (only 6 of 40 expected reviews completed = 15% compliance)
10. **C** - Training records showing completion dates for all required staff
11. **B** - Within 5 working days
12. **B** - This is a minor nonconformity - isolated lapse in following the procedure, system generally working (while backups are critical, this is a 2-month gap with a reasonable explanation, not complete absence or systemic failure; however, it is still a nonconformity because the procedure wasn't followed)

---

## Quick Reference Guide

### Audit Process at a Glance

```
1. PREPARATION (2 weeks before)
   □ Review audit plan and scope
   □ Read relevant policies/procedures
   □ Prepare audit checklist
   □ Schedule interviews
   □ Confirm logistics with auditee

2. AUDIT DAY
   □ Opening meeting (15-30 min)
   □ Gather evidence (interviews, document review, observations)
   □ Take detailed notes
   □ Audit team debrief
   □ Closing meeting (30-45 min)

3. REPORTING (within 5 days)
   □ Write audit report
   □ Document findings clearly
   □ Submit to IMS Owner
   □ Distribute to auditees and management

4. FOLLOW-UP (weeks/months after)
   □ Review corrective action plans
   □ Verify implementation
   □ Close nonconformities
```

### Major vs. Minor NC Quick Guide

| Major NC | Minor NC |
|----------|----------|
| Complete absence of requirement | Isolated deviation |
| Systemic breakdown (multiple failures) | One-off lapse |
| High risk/impact | Low risk/impact |
| Multiple related minor NCs | Process generally working |

### Good Audit Questions

- "Can you walk me through...?"
- "Can you show me...?"
- "What do you do if...?"
- "How do you know...?"
- "Where do you record...?"
- "What training have you received on...?"

### Nonconformity Statement Template

**NC-[Audit ID]-[Number]**

**Classification**: Major / Minor

**Requirement**: [ISO clause + internal policy/procedure]

**Evidence**: [Objective facts: what you found, who you interviewed, what you reviewed]

**Potential Impact**: [Consequences if not corrected]

**Required Action**: [What needs to happen]

---

## Need Help?

### During Audit Planning or Execution
**Contact**: IMS Owner
**For**: Scope questions, resource access, auditee conflicts

### For ISO Requirements Interpretation
**Contact**: IMS Owner or Quality Lead
**Resources**: ISO standards (available in document management system), SW-IMS-PRO-003 Internal Audit Procedure

### For Corrective Action Verification
**Contact**: IMS Owner
**For**: Determining if corrective action is adequate

### For Technical/Process Questions
**Contact**: Process owners or subject matter experts
**Example**: IT security questions → CISO; Environmental questions → Environmental Lead

---

## Congratulations!

You've completed the Internal Auditor Training. You're now ready to:

✓ Plan and conduct internal audits
✓ Gather objective evidence
✓ Identify and classify nonconformities
✓ Write clear audit reports
✓ Support continuous improvement at Swedwise

**Next steps**:
1. Complete the assessment (75% required to pass)
2. Receive your Internal Auditor certification
3. Shadow an experienced auditor on your first audit
4. Be assigned your first audit as Lead Auditor

**Remember**: Auditing is a skill that improves with practice. Don't expect perfection on your first audit. Learn from each experience, ask questions, and focus on improvement.

**Thank you for investing your time to become an internal auditor. Your contribution helps Swedwise maintain our IMS and build customer confidence.**

---

## Additional Resources

- **SW-IMS-PRO-003**: Internal Audit Procedure (detailed process reference)
- **ISO 19011:2018**: Guidelines for Auditing Management Systems (international best practices)
- **Audit checklist templates**: Available in document management system
- **Audit report template**: Available in document management system (Appendix B of SW-IMS-PRO-003)
- **Shadowing opportunities**: Contact IMS Owner to observe experienced auditors

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | IMS Owner | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| IMS Owner | | | |
| Management Team Representative | | | |
