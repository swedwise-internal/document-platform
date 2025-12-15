---
document_id: SW-ISMS-PRO-011
title: Problem Management Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
  - ISO 9001
related_documents:
  - SW-ISMS-POL-001
  - SW-IMS-PRO-001
  - SW-ISMS-PRO-001
  - SW-IMS-PRO-005
  - SW-IMS-PRO-008
---

# Problem Management Procedure

## 1. Purpose

This procedure establishes how Swedwise AB identifies, analyzes, and resolves the root causes of incidents to prevent recurrence and minimize business impact. The purpose is to:

- Identify problems from patterns of incidents and other sources
- Conduct root cause analysis to understand underlying issues
- Develop and implement solutions to prevent recurrence
- Maintain a known error database for rapid incident resolution
- Proactively identify and address potential problems before incidents occur
- Improve service quality and stability over time
- Support continuous improvement of IT and business services
- Complement incident management (SW-ISMS-PRO-001) by focusing on prevention

This procedure aligns with ISO 27001 (information security), ISO 9001 (quality management), and ITIL best practices.

## 2. Scope

This procedure applies to:

**Problem Types**:
- **Reactive Problems**: Identified from recurring incidents or major incidents
- **Proactive Problems**: Identified through trend analysis, monitoring, or risk assessment
- **Technical Problems**: IT systems, infrastructure, applications, networks, security
- **Process Problems**: Service delivery processes, operational procedures
- **Third-Party Problems**: Issues originating from suppliers or partners (Azure, Entiros, OpenText)

**Services and Systems**:
- SaaS services (Swedwise Communications platform)
- Internal IT systems (Microsoft 365, Azure services, collaboration tools)
- Infrastructure (servers, networks, databases, Kubernetes)
- Third-party services (Entiros data center, Microsoft cloud services, OpenText software)
- Business processes affecting service delivery

**Locations**: All Swedwise offices and operational environments

**Out of Scope**:
- Individual incidents (handled by SW-ISMS-PRO-001 - Incident Management)
- Minor isolated issues with no recurrence risk (resolved and closed as incidents)
- Customer-specific configuration issues (unless systemic or affecting multiple customers)

**Integration**: This procedure works alongside Incident Management (SW-ISMS-PRO-001), Change Management (SW-IMS-PRO-008), and Nonconformity/Corrective Action (SW-IMS-PRO-005).

## 3. Definitions

| Term | Definition |
|------|------------|
| **Problem** | Unknown underlying cause of one or more incidents, or a situation that could lead to incidents. |
| **Problem Management** | Process of identifying, analyzing, and resolving the root causes of problems to prevent incidents. |
| **Problem Record** | Documented record of a problem, including analysis, solutions, and status. |
| **Known Error** | Problem with a documented root cause and workaround or fix (but not yet fully resolved). |
| **Known Error Database (KEDB)** | Repository of known errors with workarounds and solutions to speed incident resolution. |
| **Root Cause** | Fundamental reason a problem occurs; removing the root cause prevents recurrence. |
| **Root Cause Analysis (RCA)** | Systematic investigation to identify the underlying cause of a problem. |
| **Workaround** | Temporary solution to restore service or reduce impact while permanent fix is developed. |
| **Permanent Fix** | Long-term solution that eliminates the root cause of a problem. |
| **Problem Owner** | Person responsible for managing a problem through resolution and closure. |
| **Major Problem Review** | Formal analysis of major incidents to prevent recurrence. |
| **Proactive Problem Management** | Activities to identify and address potential problems before they cause incidents. |
| **Trend Analysis** | Examination of incident patterns to identify underlying problems. |
| **Post-Implementation Review (PIR)** | Evaluation after problem resolution to confirm effectiveness and capture lessons. |

## 4. Problem Management Principles

**Prevention Over Firefighting**:
- Focus on preventing incidents, not just reacting to them
- Invest time in root cause analysis to avoid repeat issues
- Build knowledge and resilience over time

**Data-Driven Analysis**:
- Use incident data, logs, and metrics to identify problems
- Conduct thorough investigations with evidence
- Avoid assumptions; validate findings

**Collaboration and Expertise**:
- Engage subject matter experts (IT, security, developers, vendors)
- Cross-functional teams for complex problems
- Learn from others (internal and external knowledge)

**Balance Speed and Quality**:
- Quick workarounds to restore service (incident management focus)
- Thoughtful analysis and permanent fixes (problem management focus)
- Don't rush to solutions without understanding root cause

**Knowledge Management**:
- Document problems and solutions in Known Error Database
- Share learnings across organization
- Build organizational knowledge and capability

**Continuous Improvement**:
- Learn from every problem
- Reduce incident recurrence over time
- Improve service quality and stability

## 5. Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **CISO** | - Overall accountability for problem management process<br>- Maintain this procedure<br>- Review problem trends and metrics<br>- Prioritize problem resolution resources<br>- Escalate systemic issues to management<br>- Coordinate major problem reviews |
| **Problem Owner** (assigned per problem) | - Manage problem from identification to closure<br>- Conduct or coordinate root cause analysis<br>- Develop workarounds and permanent fixes<br>- Coordinate with Change Management for fixes<br>- Update problem record and KEDB<br>- Verify effectiveness of solutions<br>- Typical Problem Owners:<br>&nbsp;&nbsp;- IT Operations Lead (infrastructure problems)<br>&nbsp;&nbsp;- Application specialists (application problems)<br>&nbsp;&nbsp;- CISO (security problems)<br>&nbsp;&nbsp;- Service Owner (service delivery problems) |
| **IT Operations Team** | - Identify potential problems from monitoring and incidents<br>- Support root cause analysis (logs, system data)<br>- Implement technical workarounds and fixes<br>- Test solutions before deployment<br>- Monitor systems post-fix to verify effectiveness |
| **Incident Manager** (from SW-ISMS-PRO-001) | - Escalate recurring incidents to Problem Management<br>- Provide incident data for problem analysis<br>- Apply workarounds from KEDB during incident resolution<br>- Link incidents to problem records |
| **Service Owners** | - Prioritize problems affecting their services<br>- Provide business context and impact assessment<br>- Allocate resources for problem resolution<br>- Approve changes to resolve problems |
| **Development/Engineering Team** | - Investigate code or configuration issues<br>- Develop permanent fixes (code patches, configuration changes)<br>- Support root cause analysis for application problems |
| **Vendors/Third Parties** (Microsoft, Entiros, OpenText) | - Investigate problems originating in their services<br>- Provide technical support and analysis<br>- Develop and deploy fixes for vendor issues<br>- Share knowledge and advisories |
| **Management Team** | - Review major problem reports<br>- Approve significant investments in problem resolution<br>- Support cultural focus on prevention and learning<br>- Remove obstacles to problem resolution |
| **All Staff** | - Report potential problems or patterns noticed<br>- Cooperate with problem investigations<br>- Apply workarounds as documented<br>- Provide feedback on effectiveness of solutions |

## 6. Problem Identification

### 6.1 Sources of Problem Identification

Problems can be identified from multiple sources:

#### Source 1: Recurring Incidents

**Trigger**: Multiple incidents with similar characteristics

**Process**:
- Incident Manager or CISO reviews incident log regularly (weekly)
- Identify patterns:
  - Same error message or symptom across multiple incidents
  - Same system or component failing repeatedly
  - Incidents affecting same customer or service
- Criteria for raising problem:
  - ≥3 similar incidents in 30 days, OR
  - ≥2 High or Critical incidents with same root cause, OR
  - Pattern suggests underlying systemic issue

**Example**:
- 5 incidents in 2 weeks: "SaaS platform slow performance during peak hours"
- Problem raised: "Investigate root cause of performance degradation"

#### Source 2: Major Incidents

**Trigger**: Critical or High severity incident

**Process**:
- After major incident resolution, conduct **Major Problem Review** (mandatory)
- Even if incident appears isolated, investigate root cause to ensure no recurrence
- Major Problem Review process: See Section 7.2

**Criteria**: All Critical incidents + High incidents at discretion of CISO

#### Source 3: Trend Analysis

**Trigger**: Analysis of incident trends reveals patterns

**Process**:
- CISO or IT Operations Lead conducts monthly trend analysis:
  - Review incident counts by category, system, cause
  - Identify upward trends or clusters
  - Compare to historical baselines
- If trend suggests underlying problem, raise problem record

**Example**:
- Trend: 20% increase in authentication failures over past 3 months
- Problem raised: "Investigate cause of increasing authentication failures"

#### Source 4: Proactive Monitoring and Alerts

**Trigger**: Monitoring detects anomalies or degradation before incidents occur

**Process**:
- IT Operations monitors systems continuously (Azure Monitor, logs, performance metrics)
- Alerts configured for:
  - Performance degradation (response time, throughput)
  - Resource exhaustion (CPU, memory, disk approaching limits)
  - Error rates increasing
  - Security anomalies
- If alert suggests potential future incidents, raise problem record

**Example**:
- Alert: Database transaction log growth rate abnormally high
- Problem raised: "Investigate transaction log growth; predict future disk space exhaustion"

#### Source 5: Risk Assessments and Audits

**Trigger**: Risk assessment or audit identifies vulnerabilities or weaknesses

**Process**:
- Risk assessments (SW-IMS-PRO-002) identify potential risks
- Internal or external audits identify control weaknesses
- If risk or weakness could lead to incidents, raise problem record proactively

**Example**:
- Audit finding: No automated patch management process
- Problem raised: "Implement automated patch management to reduce vulnerability risk"

#### Source 6: Staff Observations and Reports

**Trigger**: Staff notice issues or inefficiencies that could cause problems

**Process**:
- Staff report potential problems to IT Operations, CISO, or management
- Evaluate whether issue warrants problem investigation

**Example**:
- Developer reports: "Frequent timeouts when calling external API; impacting user experience"
- Problem raised: "Investigate root cause of API timeouts"

#### Source 7: Third-Party Notifications

**Trigger**: Vendor or partner reports issue affecting multiple customers

**Process**:
- Vendors (Microsoft, Entiros, OpenText) notify Swedwise of issues or advisories
- Assess impact on Swedwise services
- Raise problem if Swedwise is or could be affected

**Example**:
- Microsoft advisory: Known issue in Azure SQL causing connection drops
- Problem raised: "Monitor and mitigate Azure SQL connection issue; plan workaround"

### 6.2 Problem Record Creation

When problem identified, create **Problem Record**:

**Information to Capture**:

| Field | Description |
|-------|-------------|
| **Problem ID** | Unique identifier (format: PROB-YYYY-###, e.g., PROB-2025-042) |
| **Problem Title** | Brief descriptive title |
| **Date Raised** | Date problem identified |
| **Raised By** | Person or system identifying problem |
| **Priority** | Critical / High / Medium / Low (see Section 6.3) |
| **Status** | New / Investigating / Known Error / Resolved / Closed (see Section 8) |
| **Problem Owner** | Person assigned to manage the problem |
| **Description** | Detailed description of the problem (symptoms, evidence, context) |
| **Impact** | Services, systems, customers, or users affected |
| **Related Incidents** | List of incident IDs linked to this problem |
| **Root Cause** | Underlying cause (filled in after RCA) |
| **Workaround** | Temporary solution (if developed) |
| **Permanent Fix** | Long-term solution (if developed) |
| **Change ID** | Change request ID for implementing fix (if applicable) |
| **Resolution Date** | Date problem resolved |
| **Closure Date** | Date problem closed (after effectiveness verification) |
| **Lessons Learned** | Key takeaways and improvements identified |

**Tool**: [TBD - Problem tracking system (ServiceNow, Jira Service Management, SharePoint, or dedicated tool)]

**Responsibility**: CISO or Incident Manager (initiate), Problem Owner (complete)

### 6.3 Problem Prioritization

Prioritize problems based on **Impact** and **Urgency**:

| Priority | Definition | Criteria | Response Time |
|----------|------------|----------|---------------|
| **Critical** | Severe impact; multiple critical incidents; service at risk | - Caused ≥1 Critical incident<br>- High probability of causing Critical incident soon<br>- Affects critical service or many customers | Assign Problem Owner: Immediate<br>RCA start: 4 hours<br>Workaround target: 24 hours<br>Permanent fix target: 7 days |
| **High** | Significant impact; recurring incidents; customer dissatisfaction | - Caused ≥3 High incidents<br>- Pattern of recurring incidents<br>- Customer complaints<br>- SLA at risk | Assign Problem Owner: 1 day<br>RCA start: 3 days<br>Workaround target: 1 week<br>Permanent fix target: 30 days |
| **Medium** | Moderate impact; some incidents; quality concern | - Caused ≥5 Medium incidents<br>- Operational inefficiency<br>- Proactive risk mitigation | Assign Problem Owner: 1 week<br>RCA start: 2 weeks<br>Permanent fix target: 90 days |
| **Low** | Minor impact; infrequent incidents; improvement opportunity | - Isolated or rare incidents<br>- Nice-to-have improvement<br>- Low probability of recurrence | Assign Problem Owner: 2 weeks<br>RCA as resources allow<br>Permanent fix target: Next planning cycle |

**Factors to Consider**:
- **Impact**: Number of users/customers affected; service criticality; SLA impact
- **Frequency**: How often incidents occur
- **Trend**: Increasing or stable
- **Customer Visibility**: Are customers experiencing this directly?
- **Risk**: Potential for escalation or broader impact

**Responsibility**: CISO (prioritize), with input from Service Owners and Incident Manager

## 7. Problem Analysis

### 7.1 Root Cause Analysis (RCA)

**Objective**: Identify the fundamental cause of the problem, not just symptoms.

**Process**:

**Step 1: Gather Evidence**
- Collect all relevant data:
  - Related incident records (descriptions, timelines, resolutions)
  - System logs (application logs, server logs, database logs, network logs)
  - Monitoring data (performance metrics, alerts, dashboards)
  - Configuration files and recent changes
  - User or customer reports
  - Vendor advisories or known issues
- Interview staff involved in incidents or operations
- Reproduce the issue in test environment if possible

**Step 2: Construct Timeline**
- Create chronological timeline of events leading to problem
- Identify when problem first appeared
- Identify any changes or events preceding problem (deployments, configuration changes, external events)

**Step 3: Analyze Data**
- Review evidence systematically
- Look for common factors across incidents:
  - Same error codes or messages
  - Same component or system involved
  - Same environmental conditions (time of day, load level, user actions)
- Compare working state vs. problem state (what changed?)

**Step 4: Apply RCA Techniques**

**Technique A: 5 Whys**
- Ask "Why did this happen?" repeatedly (typically 5 times) to drill down to root cause
- Example:
  - Problem: SaaS platform intermittently slow
  - Why? Database queries taking long time
  - Why? Database lacks index on frequently queried column
  - Why? Index was not created during schema design
  - Why? Database design review process not followed
  - Why? No documented database design standards
  - **Root Cause**: Lack of database design standards and review process

**Technique B: Fishbone Diagram (Ishikawa)**
- Categorize potential causes (6 Ms: Man, Method, Machine, Material, Measurement, Management)
- Brainstorm potential causes in each category
- Identify most likely root cause(s)
- (See SW-IMS-PRO-005 Appendix B for detailed guidance)

**Technique C: Fault Tree Analysis**
- Work backward from problem symptom
- Map possible causes as logical tree
- Identify contributing factors and root cause

**Technique D: Vendor Analysis**
- For third-party issues: Engage vendor support
- Request root cause analysis from vendor
- Review vendor post-mortem or incident report

**Step 5: Validate Root Cause**
- Test hypothesis: If we address this root cause, will the problem be prevented?
- Verify with evidence (don't rely on assumptions)
- Involve subject matter experts to validate

**Step 6: Document RCA**
- Record root cause in Problem Record
- Summarize analysis process and findings
- Attach supporting evidence (logs, screenshots, timelines)

**RCA Report Contents**:
1. Problem description and impact
2. Timeline of events
3. Evidence collected
4. Analysis method(s) used
5. Root cause identified
6. Validation of root cause
7. Recommendations (workaround and permanent fix)

**Responsibility**: Problem Owner (lead), with support from IT Operations, developers, and subject matter experts

**Timeframe**: Per priority (4 hours to 2 weeks to start RCA; complete within reasonable timeframe based on complexity)

### 7.2 Major Problem Review

**Trigger**: After Critical incident or High incident with significant impact

**Objective**: Conduct thorough post-incident analysis to prevent recurrence

**Timing**: Within 5 business days of incident closure

**Participants**:
- Problem Owner
- Incident Manager (person who handled the incident)
- IT Operations staff involved
- CISO
- Service Owner (if service affected)
- Relevant subject matter experts
- Management (for Critical incidents)

**Agenda**:
1. **Incident Summary** (10 minutes):
   - What happened? When? How was it detected?
   - Impact (customers, services, duration)
   - Resolution actions taken
2. **Root Cause Analysis** (30 minutes):
   - Present RCA findings
   - Discuss root cause and contributing factors
   - Validate or challenge findings
3. **Prevention and Mitigation** (20 minutes):
   - What can be done to prevent recurrence? (permanent fix)
   - What can be done to detect earlier? (monitoring, alerting)
   - What can be done to reduce impact if it recurs? (workaround, resilience)
4. **Lessons Learned** (10 minutes):
   - What went well in incident response?
   - What could be improved?
   - Process or procedure changes needed?
5. **Action Planning** (10 minutes):
   - Assign actions (workaround, permanent fix, improvements)
   - Set deadlines and owners
   - Agree on follow-up and verification

**Outputs**:
- Major Problem Review report
- Action items (tracked to completion)
- Known error entry (if workaround developed)
- Change request (if permanent fix requires change)
- Lessons learned (shared with organization)

**Distribution**: CISO, Management Team, relevant staff

**Responsibility**: CISO (organize and facilitate), Problem Owner (present RCA)

## 8. Problem Resolution

### 8.1 Develop Workaround

**Workaround**: Temporary solution to reduce impact or restore service while permanent fix is developed.

**When to Develop Workaround**:
- Root cause identified but permanent fix will take time (weeks or months)
- Incidents are occurring and causing impact
- Workaround can significantly reduce incident frequency or severity

**Process**:
1. **Design Workaround**:
   - Based on root cause understanding
   - Must be practical and sustainable
   - Balance effectiveness vs. effort
2. **Test Workaround**:
   - Verify workaround reduces incidents or impact
   - Test in non-production environment if possible
   - Document any side effects or limitations
3. **Document Workaround**:
   - Write clear step-by-step instructions
   - Include when to apply, how to apply, expected results
   - Document limitations or risks
4. **Add to Known Error Database (KEDB)**:
   - Create KEDB entry (see Section 9)
   - Link to problem record
5. **Communicate Workaround**:
   - Notify Incident Management team
   - Train support staff on workaround
   - Notify customers if customer-facing workaround
6. **Monitor Effectiveness**:
   - Track incident frequency and severity after workaround deployed
   - Assess whether workaround is effective
   - Adjust if needed

**Approval**:
- High/Critical problems: CISO approval
- Medium/Low problems: Problem Owner approval

**Responsibility**: Problem Owner (develop and document), IT Operations (implement)

**Example**:
- **Problem**: Database query timeout causing SaaS platform errors
- **Root Cause**: Missing index on large table
- **Permanent Fix**: Add index (requires change and testing)
- **Workaround**: Reduce query scope (filter by date range) to avoid full table scan; implement temporary caching

### 8.2 Develop Permanent Fix

**Permanent Fix**: Long-term solution that eliminates the root cause.

**Process**:

**Step 1: Design Permanent Fix**
- Based on root cause, design solution that eliminates the cause
- Consider multiple solution options:
  - Technical fix (code patch, configuration change, infrastructure upgrade)
  - Process fix (procedure update, training, automation)
  - Architectural fix (redesign, refactoring)
- Evaluate options (effectiveness, cost, complexity, risk)
- Select best solution

**Step 2: Plan Implementation**
- Determine implementation approach:
  - Code development and testing
  - Configuration or infrastructure changes
  - Vendor patch or upgrade
  - Process or procedure changes
- Estimate effort, timeline, and resources
- Identify dependencies and risks
- Obtain approvals:
  - High/Critical problems: Management approval
  - Medium problems: Service Owner approval
  - Low problems: Problem Owner approval

**Step 3: Implement via Change Management**
- Raise Change Request (SW-IMS-PRO-008)
- Follow Change Management procedure:
  - Impact assessment
  - CAB approval (if required)
  - Testing (in non-production environment)
  - Implementation planning (rollout, rollback)
  - Communication (to customers and staff)
  - Implementation and verification
- Link Change Request to Problem Record

**Step 4: Verify Fix Effectiveness**
- After change implemented, monitor for recurrence:
  - Watch for related incidents (should decrease or stop)
  - Monitor system behavior and metrics
  - Verify root cause eliminated
- Duration of monitoring: 30-90 days (based on problem frequency)
- If incidents recur: Re-open problem; RCA was insufficient or fix incomplete

**Step 5: Update Problem Record**
- Mark problem status as "Resolved" when fix implemented
- Document permanent fix in problem record
- Update KEDB (mark workaround obsolete if permanent fix deployed)

**Responsibility**: Problem Owner (coordinate), IT Operations or Development (implement), Change Management (manage change)

**Timeframe**: Per priority (7 days to 90 days for permanent fix implementation)

### 8.3 Problem Status Workflow

**Problem progresses through statuses**:

```
New → Investigating → Known Error → Resolved → Closed
                           ↓
                     (Workaround Available)
```

**Status Definitions**:

| Status | Definition | Criteria |
|--------|------------|----------|
| **New** | Problem identified; not yet analyzed | Problem record created; Problem Owner assigned |
| **Investigating** | Root cause analysis in progress | RCA started; evidence being collected and analyzed |
| **Known Error** | Root cause identified; workaround available; permanent fix pending | RCA complete; root cause documented; workaround in KEDB; permanent fix planned or in progress |
| **Resolved** | Permanent fix implemented; monitoring effectiveness | Change implemented; fix deployed; monitoring for recurrence |
| **Closed** | Permanent fix verified effective; no recurrence | No recurrence after 30-90 days; problem owner confirms closure |

**Status Transitions**:
- New → Investigating: RCA started
- Investigating → Known Error: Root cause found; workaround created
- Investigating → Resolved: Root cause found and permanent fix immediately implemented (skip Known Error if no interim workaround needed)
- Known Error → Resolved: Permanent fix implemented
- Resolved → Closed: Effectiveness verified; no recurrence
- Any status → New (Reopened): Problem recurred; RCA or fix was insufficient

### 8.4 Problem Closure

**Criteria for Closure**:
- Permanent fix implemented and deployed
- Monitoring period complete (30-90 days)
- No recurrence of related incidents
- Problem Owner confirms effectiveness
- Lessons learned documented

**Closure Actions**:
1. **Verify Effectiveness**:
   - Review incident log: No recurrence?
   - Monitor system metrics: Stable and improved?
   - Consult with operations and support: Any concerns?
2. **Document Lessons Learned**:
   - What caused the problem?
   - How was it resolved?
   - What can be improved in the future? (processes, tools, skills, monitoring)
3. **Update KEDB**:
   - Mark problem as "Resolved/Closed"
   - Document permanent fix
   - Archive workaround (retain for reference but mark obsolete)
4. **Communicate Closure**:
   - Notify stakeholders (IT Operations, Incident Management, Service Owners, customers if affected)
   - Share lessons learned with organization
5. **Update Problem Record**:
   - Mark status as "Closed"
   - Record closure date and approver
   - Attach lessons learned and final report

**Approval**:
- High/Critical problems: CISO approval
- Medium/Low problems: Problem Owner approval

**Responsibility**: Problem Owner (verify and document), CISO (approve closure for High/Critical)

**If Problem Recurs After Closure**:
- Re-open problem record (change status back to "Investigating")
- Conduct deeper RCA (previous analysis was insufficient)
- Identify why permanent fix did not work
- Develop revised solution

## 9. Known Error Database (KEDB)

### 9.1 Purpose of KEDB

The **Known Error Database** is a repository of problems with documented root causes and workarounds. It serves to:

- **Speed Incident Resolution**: Incident teams can quickly find workarounds for known issues
- **Share Knowledge**: Capture and share problem-solving knowledge across organization
- **Reduce Duplicate Effort**: Avoid re-investigating same problems
- **Support Customers**: Provide customers with known issue advisories and workarounds

### 9.2 KEDB Entry Contents

Each KEDB entry includes:

| Field | Description |
|-------|-------------|
| **KEDB ID** | Unique identifier (can be same as Problem ID) |
| **Problem Title** | Descriptive title (user-friendly) |
| **Symptoms** | How the problem manifests (what users or systems experience) |
| **Root Cause** | Underlying cause (technical details) |
| **Affected Systems/Services** | What is impacted |
| **Workaround** | Step-by-step temporary solution (if available) |
| **Permanent Fix** | Long-term solution (if implemented) |
| **Status** | Active (workaround only) / Resolved (permanent fix deployed) / Archived |
| **Related Incidents** | List of incidents linked to this problem |
| **Problem Record** | Link to full problem record (for detailed info) |
| **Date Added** | Date KEDB entry created |
| **Last Updated** | Date of last update |

**Example KEDB Entry**:

**KEDB ID**: KEDB-2025-042
**Problem Title**: SaaS Platform Slow Performance During Peak Hours
**Symptoms**: Users experience slow page load times (>10 seconds) between 09:00-11:00 CET weekdays. Database queries timeout.
**Root Cause**: Database missing index on `customer_transactions` table; full table scans cause performance degradation under high load.
**Affected Systems**: SaaS platform (all tenants)
**Workaround**: Temporarily reduce query scope (filter by date range: last 30 days only); implement application-level caching for frequently accessed data. Performance improves to <3 seconds.
**Permanent Fix**: Added composite index on `customer_transactions` table (customer_id, transaction_date). Deployed 2025-02-15. Performance now <2 seconds consistently.
**Status**: Resolved (permanent fix deployed)
**Related Incidents**: INC-2025-101, INC-2025-108, INC-2025-115
**Problem Record**: PROB-2025-042
**Date Added**: 2025-01-20
**Last Updated**: 2025-02-15

### 9.3 Maintain KEDB

**Adding Entries**:
- When problem reaches "Known Error" status (root cause identified, workaround available)
- Problem Owner creates KEDB entry
- Approval: CISO (for High/Critical problems), Problem Owner (for Medium/Low)

**Updating Entries**:
- When permanent fix implemented: Update KEDB with fix details, change status to "Resolved"
- When workaround improved or changed: Update workaround section
- When additional incidents linked: Update related incidents list

**Archiving Entries**:
- When problem closed and permanent fix verified effective (no recurrence for 90+ days)
- Mark status as "Archived"
- Retain for historical reference and learning (do not delete)

**KEDB Tool**: [TBD - Same tool as problem tracking, or dedicated knowledge base (Confluence, SharePoint, ServiceNow Knowledge Base)]

**Access**:
- Read: All IT staff, support staff, incident managers
- Write: Problem Owners, CISO
- Customer-facing KEDB (optional): Subset of KEDB entries published to customer portal (sanitized, non-sensitive info)

**Responsibility**: Problem Owner (create and update entries), CISO (maintain KEDB system)

### 9.4 Using KEDB During Incident Management

**Integration with Incident Management**:
- When incident reported, Incident Manager searches KEDB for matching symptoms
- If match found:
  - Apply documented workaround immediately (faster resolution)
  - Link incident to problem record
  - Communicate to customer (known issue, workaround applied, permanent fix ETA)
- If no match found:
  - Resolve incident as usual
  - If incident recurs or pattern emerges, raise problem

**Benefits**:
- Faster incident resolution (minutes vs. hours)
- Consistent responses (same workaround applied every time)
- Reduced escalations (workaround often sufficient until permanent fix)
- Better customer communication (proactive updates on known issues)

## 10. Proactive Problem Management

### 10.1 Purpose

**Proactive Problem Management** focuses on identifying and resolving potential problems before they cause incidents.

**Activities**:
- Trend analysis and pattern recognition
- Risk assessments and vulnerability scanning
- Capacity planning and performance monitoring
- Reviewing vendor advisories and security bulletins
- Learning from industry incidents and best practices

### 10.2 Proactive Activities

#### Activity 1: Monthly Trend Analysis

**Process**:
- CISO or IT Operations Lead reviews incident data monthly
- Analyze trends:
  - Increasing incident counts in specific categories
  - Emerging patterns (new types of incidents)
  - Systems or components with declining reliability
- Identify underlying risks or weaknesses
- Raise proactive problem records for investigation

**Example**:
- Trend: Authentication failures increasing 5% month-over-month for 3 months
- Proactive problem: "Investigate authentication system capacity; predict when threshold will be exceeded"

**Responsibility**: CISO, IT Operations Lead

**Frequency**: Monthly

#### Activity 2: Performance and Capacity Monitoring

**Process**:
- Continuously monitor system performance and capacity (CPU, memory, disk, network, database)
- Identify trends approaching limits:
  - Disk space utilization growing; predict exhaustion
  - Database transaction log size increasing
  - API response times degrading over time
- Raise proactive problems to address before incidents occur

**Example**:
- Monitoring: Database storage 70% utilized; growing 5% per month
- Proactive problem: "Plan database storage expansion before 90% threshold (2 months)"

**Responsibility**: IT Operations

**Frequency**: Continuous monitoring, weekly review

#### Activity 3: Vulnerability and Security Assessments

**Process**:
- Regular vulnerability scans (quarterly or monthly)
- Security audits and penetration testing (annually)
- Review security advisories from vendors (Microsoft, OpenText, etc.)
- Identify vulnerabilities that could lead to security incidents
- Raise proactive problems to patch or mitigate vulnerabilities

**Example**:
- Vulnerability scan: Unpatched server with high-severity CVE
- Proactive problem: "Patch server [X] to address CVE-YYYY-####"

**Responsibility**: CISO, IT Operations

**Frequency**: Quarterly vulnerability scans, annual penetration testing, ongoing advisory monitoring

#### Activity 4: Vendor Advisory Monitoring

**Process**:
- Subscribe to vendor security bulletins and advisories (Microsoft, Azure, OpenText, Entiros)
- Review advisories for impact on Swedwise services
- If advisory reports issue affecting Swedwise:
  - Assess impact and risk
  - Raise proactive problem to apply vendor patch or workaround
  - Monitor for vendor fix deployment

**Example**:
- Microsoft advisory: Azure SQL Database known issue causing connection drops (fixed in upcoming release)
- Proactive problem: "Monitor Azure SQL; prepare to upgrade to patched version when released"

**Responsibility**: CISO, IT Operations

**Frequency**: Continuous monitoring, weekly review

#### Activity 5: Post-Implementation Reviews and Lessons Learned

**Process**:
- Review major changes and projects after deployment (SW-IMS-PRO-008)
- Identify risks or issues that emerged
- Raise proactive problems to address before they cause incidents

**Example**:
- PIR finding: New deployment process skipped security checks in 2 instances
- Proactive problem: "Improve deployment checklist and automation to enforce security checks"

**Responsibility**: Change Manager, CISO

**Frequency**: After major changes or projects

#### Activity 6: Industry Learning and Benchmarking

**Process**:
- Monitor industry incidents and outages (public post-mortems, security breaches)
- Learn from others' mistakes
- Assess whether Swedwise has similar risks
- Raise proactive problems to strengthen defenses

**Example**:
- Industry incident: Major cloud provider outage due to expired SSL certificate (automation failure)
- Proactive problem: "Review Swedwise SSL certificate renewal process; implement monitoring and alerting"

**Responsibility**: CISO, IT Operations Lead

**Frequency**: Ongoing awareness, quarterly review

### 10.3 Proactive Problem Workflow

**Proactive problems follow same workflow as reactive problems**:
1. **Identify Potential Problem**: From proactive activities above
2. **Create Problem Record**: Document potential issue and risk
3. **Assess Risk**: Likelihood and impact (per SW-IMS-PRO-002)
4. **Prioritize**: Based on risk level
5. **Analyze**: Investigate potential causes and scenarios
6. **Develop Solution**: Preventive measures or mitigations
7. **Implement**: Via Change Management if needed
8. **Monitor**: Verify issue prevented
9. **Close**: Confirm effectiveness

**Difference from Reactive**:
- No incidents have occurred yet (preventing future incidents)
- Triggered by analysis, monitoring, or advisories (not incident patterns)
- May be lower priority if risk is low or distant future

## 11. Problem Management Metrics

### 11.1 Key Performance Indicators (KPIs)

| Metric | Target | Purpose |
|--------|--------|---------|
| **Number of Active Problems** | Decreasing trend | Measure problem backlog; ensure timely resolution |
| **Number of Problems Closed** | Increasing trend | Measure problem resolution productivity |
| **Mean Time to Identify Problem (MTTIP)** | <7 days from first incident | Measure how quickly problems are recognized |
| **Mean Time to Resolve Problem (MTTRP)** | Critical: <30 days<br>High: <60 days<br>Medium: <120 days | Measure problem resolution efficiency |
| **Recurrence Rate** | <5% of closed problems | Measure effectiveness of permanent fixes |
| **Incident Reduction** | 10% reduction year-over-year | Measure impact of problem management on incident frequency |
| **KEDB Utilization** | ≥30% of incidents resolved using KEDB | Measure knowledge base effectiveness |
| **Proactive vs. Reactive Ratio** | ≥20% of problems identified proactively | Measure proactive problem management effectiveness |
| **Problem Backlog Age** | 80% of problems <90 days old | Measure timeliness of problem management |

### 11.2 Problem Management Reporting

**Monthly Problem Report** (for management):
- Number of problems raised, resolved, closed (by priority)
- Problem backlog (total active problems, age distribution)
- Mean time to resolve (by priority)
- Top problems by impact (affecting most incidents or customers)
- Proactive problems identified
- KEDB entries added or updated

**Quarterly Problem Review** (in IMS Management Review, SW-IMS-PRO-004):
- Problem management metrics and trends
- Impact on incident reduction
- Major problems reviewed and lessons learned
- Process improvements implemented
- Resource adequacy for problem management

**Audience**: CISO (monthly), Management Team (quarterly)

**Responsibility**: CISO (prepare reports)

## 12. Integration with Other Processes

### 12.1 Incident Management (SW-ISMS-PRO-001)

**Relationship**:
- Incident Management focuses on restoring service quickly (reactive)
- Problem Management focuses on preventing recurrence (proactive)

**Integration Points**:
- Incident Manager escalates recurring incidents to Problem Management
- Problem Owner provides workarounds to Incident Management (via KEDB)
- Incidents linked to problem records for traceability
- Post-incident reviews feed into problem analysis

**Workflow**:
1. Incident occurs → Resolved by Incident Management
2. Incident recurs (pattern emerges) → Problem Management raises problem
3. Problem Owner develops workaround → Added to KEDB
4. Next incident occurs → Incident Manager applies workaround from KEDB (faster resolution)
5. Problem Owner implements permanent fix → Incidents stop recurring

### 12.2 Change Management (SW-IMS-PRO-008)

**Relationship**:
- Problem Management identifies what needs to change (permanent fix)
- Change Management controls how change is implemented

**Integration Points**:
- Problem Owner raises Change Request for permanent fix
- Change Request linked to Problem Record
- Change failure or rollback triggers problem review (why did change fail?)

**Workflow**:
1. Problem analyzed; permanent fix designed
2. Problem Owner raises Change Request (RF CR)
3. Change assessed, approved, and implemented (per SW-IMS-PRO-008)
4. Problem Owner monitors post-change (verify fix effective)
5. Problem closed if fix successful

### 12.3 Nonconformity and Corrective Action (SW-IMS-PRO-005)

**Relationship**:
- Problem Management focuses on IT and service delivery issues
- Nonconformity/Corrective Action covers broader IMS issues (quality, environmental, security)
- Both use root cause analysis and corrective actions

**Integration Points**:
- Significant problems (especially security or quality issues) may trigger Corrective Action Request (CAR)
- CAR process can be used for complex or cross-functional problems
- Problem Management metrics feed into IMS performance evaluation

**When to Use Which**:
- **Problem Management**: IT and service delivery issues; recurring incidents; technical root causes
- **CAR Process**: IMS policy/procedure violations; quality or environmental nonconformities; broader organizational issues

## 13. Inputs and Outputs

**Inputs**:
- Incident records and logs (from SW-ISMS-PRO-001)
- Monitoring data and alerts (Azure Monitor, logs, metrics)
- Trend analysis and reports
- Risk assessments (SW-IMS-PRO-002)
- Audit findings (internal and external)
- Vendor advisories and bulletins
- Staff observations and reports
- Customer complaints (from SW-QMS-PRO-002)

**Outputs**:
- Problem records (full documentation of problems)
- Known Error Database entries (workarounds and solutions)
- Root cause analysis reports
- Change requests (for permanent fixes, to SW-IMS-PRO-008)
- Major problem review reports
- Problem management metrics and trends
- Lessons learned and process improvements
- Input to management review (SW-IMS-PRO-004)
- Input to risk assessment (SW-IMS-PRO-002)

## 14. Records

| Record | Retention Period | Location | Owner |
|--------|-----------------|----------|-------|
| Problem Records | 5 years | [TBD - Problem tracking system] | CISO |
| Known Error Database | Permanent (active + archived) | [TBD - Knowledge base] | CISO |
| Root Cause Analysis Reports | 5 years | [TBD - Problem tracking system or document repository] | Problem Owner |
| Major Problem Review Reports | 7 years | [TBD - Document repository] | CISO |
| Problem Management Metrics Reports | 5 years | [TBD - Document repository] | CISO |
| Lessons Learned | 5 years | [TBD - Knowledge base] | CISO |

## 15. Related Documents

**Policies**:
- SW-ISMS-POL-001: Information Security Policy
- SW-IMS-POL-001: Integrated Management System Policy
- SW-QMS-POL-001: Quality Management Policy

**Procedures**:
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-IMS-PRO-002: Risk Assessment Procedure
- SW-IMS-PRO-004: Management Review Procedure
- SW-IMS-PRO-005: Nonconformity and Corrective Action Procedure
- SW-IMS-PRO-008: Change Management Procedure
- SW-QMS-PRO-001: Service Delivery Procedure
- SW-QMS-PRO-002: Customer Feedback Procedure

**Forms and Templates**:
- [TBD - SW-ISMS-FRM-011: Problem Record Template]
- [TBD - SW-ISMS-FRM-012: Root Cause Analysis Template]
- [TBD - SW-ISMS-FRM-013: Known Error Database Entry Template]
- [TBD - SW-ISMS-FRM-014: Major Problem Review Report Template]

**External**:
- ISO 27001:2022 - Clause 5.24, 5.25, 5.26 (Incident management controls)
- ISO 9001:2015 - Clause 10.1, 10.2 (Nonconformity and corrective action)
- ITIL Problem Management best practices

## 16. Continuous Improvement

This procedure is reviewed and improved based on:
- Problem management metrics and effectiveness
- Feedback from Problem Owners on process usability
- Lessons learned from major problems
- Audit findings and recommendations
- Industry best practices (ITIL, ISO)
- Technology and tool improvements

**Review Frequency**: Annually, or after major problems

**Improvement suggestions** should be submitted to the CISO.

---

## Appendix A: Problem Management Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│  PROBLEM IDENTIFICATION                                     │
│  Sources: Recurring incidents, major incidents, trends,     │
│  monitoring, risk assessments, proactive scanning           │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  CREATE PROBLEM RECORD                                      │
│  - Assign Problem ID                                        │
│  - Assign Problem Owner                                     │
│  - Set priority (Critical/High/Medium/Low)                  │
│  - Status: New                                              │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  ROOT CAUSE ANALYSIS (RCA)                                  │
│  - Gather evidence (logs, incidents, timelines)             │
│  - Apply RCA techniques (5 Whys, Fishbone, Fault Tree)      │
│  - Identify root cause                                      │
│  - Validate with evidence                                   │
│  - Status: Investigating                                    │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  DEVELOP WORKAROUND (if needed)                             │
│  - Design temporary solution                                │
│  - Test workaround                                          │
│  - Document in KEDB                                         │
│  - Communicate to Incident Management                       │
│  - Status: Known Error                                      │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  DEVELOP PERMANENT FIX                                      │
│  - Design solution to eliminate root cause                  │
│  - Plan implementation                                      │
│  - Raise Change Request (SW-IMS-PRO-008)                    │
│  - Implement via Change Management                          │
│  - Status: Resolved (after implementation)                  │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  VERIFY EFFECTIVENESS                                       │
│  - Monitor for recurrence (30-90 days)                      │
│  - Review incident trends (should decrease)                 │
│  - Confirm root cause eliminated                            │
│  - If recurs: Reopen problem; deeper RCA needed             │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  CLOSE PROBLEM                                              │
│  - Document lessons learned                                 │
│  - Update KEDB (mark resolved/archived)                     │
│  - Communicate closure                                      │
│  - Status: Closed                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Appendix B: Root Cause Analysis Template

**Problem ID**: PROB-YYYY-###
**Problem Title**: [Title]
**Problem Owner**: [Name]
**Analysis Date**: [Date]

---

### 1. Problem Description

**Symptoms**:
[Describe how the problem manifests; what users or systems experience]

**Impact**:
[Affected services, customers, users; frequency; severity]

**Related Incidents**:
[List incident IDs]

---

### 2. Timeline of Events

| Date/Time | Event | Source |
|-----------|-------|--------|
| [Date/Time] | [Event description] | [Logs, reports, etc.] |
| [Date/Time] | [Event description] | [Logs, reports, etc.] |

---

### 3. Evidence Collected

- System logs: [Path, date range]
- Monitoring data: [Metrics, dashboards]
- Configuration files: [Versions, changes]
- Interview notes: [Staff interviewed]
- Other evidence: [Screenshots, reports]

---

### 4. Analysis Method

**Method Used**: [ ] 5 Whys  [ ] Fishbone Diagram  [ ] Fault Tree  [ ] Other: _______

**Analysis Steps**:

[If using 5 Whys:]
- Problem: [Statement]
- Why? [Answer 1]
- Why? [Answer 2]
- Why? [Answer 3]
- Why? [Answer 4]
- Why? [Answer 5 - Root Cause]

[If using Fishbone:]
[Describe categories and potential causes brainstormed]

---

### 5. Root Cause Identified

**Root Cause**: [Statement of fundamental cause]

**Supporting Evidence**:
[Evidence that validates this is the root cause]

**Validation**: If we address this root cause, will the problem be prevented?
- [ ] Yes  [ ] No (if No, further analysis needed)

---

### 6. Contributing Factors

[Other factors that contributed but are not the root cause]

---

### 7. Recommendations

**Workaround** (temporary solution):
[Describe workaround, if applicable]

**Permanent Fix** (long-term solution):
[Describe solution to eliminate root cause]

**Prevention** (how to prevent similar problems in future):
[Process improvements, monitoring, training, etc.]

---

**Analyzed By**: [Name] **Date**: [Date]
**Reviewed By**: [Name] **Date**: [Date]

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| CISO | | | |
| Management Team Representative | | | |
