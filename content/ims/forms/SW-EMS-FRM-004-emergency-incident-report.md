---
document_id: SW-EMS-FRM-004
title: Emergency Incident Report Template
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: Environmental Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 14001
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-EMS-PRO-001
  - SW-IMS-PRO-005
  - SW-ISMS-PRO-001
---

# Emergency Incident Report Template

## Instructions for Use

**Purpose**: Document actual emergency incidents to capture facts, analyze root causes, implement corrective actions, and fulfill regulatory reporting requirements.

**How to Complete**:
1. **Immediate Reporting**: Complete Section 1 (Incident Details) and Section 2 (Immediate Actions) as soon as the incident is under control
2. **Initial Report**: Submit to Environmental Lead and Management within 24 hours of incident
3. **Full Investigation**: Complete remaining sections within 7 days (or as appropriate to incident severity)
4. **Root Cause Analysis**: Use appropriate methodology (5 Whys, Fishbone, etc.) to determine root cause
5. **Corrective Actions**: Define specific, measurable actions with responsible parties and deadlines
6. **Regulatory Reporting**: Identify if external reporting required and ensure compliance with deadlines
7. **Follow-Up**: Track corrective actions to completion; review effectiveness
8. **Closure**: Close incident only when all actions completed and verified effective

**When to Use**:
- Actual emergency incidents (fire, spill, injury, environmental release, facility damage, etc.)
- Near-miss incidents with potential for serious consequences
- Incidents requiring regulatory notification
- Any incident triggering emergency response procedures

**Severity Classification**:
- **Critical**: Fatality, serious injury requiring hospitalization, major environmental damage, significant property loss, major service disruption
- **Major**: Injury requiring medical treatment, moderate environmental impact, significant property damage, extended service disruption
- **Moderate**: Minor injury (first aid), minor environmental impact, limited property damage, brief service disruption
- **Minor**: No injury, negligible environmental impact, minimal property damage, no service disruption

**Confidentiality**: This report may contain sensitive information. Distribute only to authorized personnel. Follow data protection requirements.

**Owner**: Environmental Lead (environmental/safety incidents), CISO (information security incidents - see SW-ISMS-PRO-001)

---

## Emergency Incident Report

### 1. Incident Identification

| Field | Information |
|-------|-------------|
| **Incident ID** | [Auto-generate: INC-YYYY-MM-NNN] |
| **Report Date** | [YYYY-MM-DD] |
| **Incident Date** | [YYYY-MM-DD] |
| **Incident Time** | [HH:MM] (24-hour format) |
| **Reported By** | [Name and role of person filing this report] |
| **Contact Information** | Phone: [Number] | Email: [Email] |
| **Discovery Date/Time** (if different) | [YYYY-MM-DD HH:MM] |
| **Discovered By** | [Name and role of person who discovered incident] |

---

### 2. Incident Classification

**Incident Type** (select all that apply):

[ ] Fire
[ ] Medical Emergency / Injury
[ ] Environmental Spill or Release
[ ] Hazardous Substance Exposure
[ ] Flood / Water Damage
[ ] Power Outage
[ ] Severe Weather / Natural Disaster
[ ] Facility Damage (structural, equipment)
[ ] Workplace Violence / Security Threat
[ ] IT / Cybersecurity Incident (if environmental/physical impact - otherwise use SW-ISMS-PRO-001)
[ ] Data Center Incident
[ ] Other: _______________________________

**Incident Severity**:
[ ] Critical
[ ] Major
[ ] Moderate
[ ] Minor
[ ] Near-Miss (no actual impact but potential for serious consequences)

**Incident Category**:
[ ] Environmental
[ ] Occupational Health & Safety
[ ] Quality / Customer Impact
[ ] Security / Safety
[ ] Business Continuity
[ ] Multiple categories (specify): _______________

---

### 3. Location and Context

**Incident Location**:
[ ] Karlstad Office
[ ] Stockholm Office
[ ] Uddevalla Office
[ ] Customer Site (specify): _________________
[ ] Remote/Home Office (specify): ___________
[ ] Data Center (Entiros AB)
[ ] Other: ______________________________

**Specific Location Details**:
- Building/Floor: [Details]
- Room/Area: [Details]
- Coordinates (if outdoor): [Coordinates]

**Environmental Conditions** (if relevant):
- Weather: [Conditions at time of incident]
- Temperature: [If relevant]
- Lighting: [If relevant]
- Other: [Noise, visibility, etc.]

**Operational Context**:
- Normal operations: [ ] Yes [ ] No
- If No, describe: [Maintenance, startup, shutdown, abnormal conditions, etc.]
- Time of day: [ ] Working hours [ ] After hours [ ] Weekend/Holiday

---

### 4. Incident Description

**What Happened** (factual description - who, what, when, where, how):

[Provide detailed, factual account of the incident. Include:
- Sequence of events leading to incident
- What happened during the incident
- How the incident was discovered
- Who was involved or affected
- Equipment or materials involved
- Approximate timeline of events]

**Immediate Impact**:

| Impact Type | Yes/No | Description |
|-------------|--------|-------------|
| **Injury/Illness** | [ ] Yes [ ] No | [Number of people affected, nature of injuries] |
| **Environmental Impact** | [ ] Yes [ ] No | [Type and extent of environmental damage or release] |
| **Property Damage** | [ ] Yes [ ] No | [Equipment, facilities, vehicles damaged; estimated value] |
| **Service Disruption** | [ ] Yes [ ] No | [Services affected, duration of disruption, customers impacted] |
| **Data Loss/Breach** | [ ] Yes [ ] No | [Data affected, systems impacted] |
| **Business Interruption** | [ ] Yes [ ] No | [Operations halted, duration, financial impact] |

---

### 5. Persons Involved

#### 5.1 Injured or Affected Persons

| Name | Role | Nature of Injury/Illness | Medical Treatment Required | Status |
|------|------|-------------------------|---------------------------|--------|
| [Name] | [Employee, Contractor, Visitor, etc.] | [Description] | [ ] None [ ] First Aid [ ] Medical Center [ ] Hospital | [Returned to work, on sick leave, hospitalized, etc.] |
| [Name] |  |  |  |  |

**Next of Kin Notified**: [ ] Yes [ ] No [ ] N/A
**Occupational Safety Authority Notified** (if serious work injury): [ ] Yes [ ] No [ ] N/A

---

#### 5.2 Witnesses

| Name | Role | Contact | Statement Taken |
|------|------|---------|----------------|
| [Name] | [Role] | [Phone/Email] | [ ] Yes [ ] No |
| [Name] |  |  |  |

**Witness Statements**: [ ] Attached [ ] On file [ ] N/A

---

#### 5.3 Responders

| Name | Role | Actions Taken |
|------|------|--------------|
| [Name] | [First Aider, Fire Warden, Incident Commander, etc.] | [Summary of response actions] |
| [Name] |  |  |

---

### 6. Immediate Actions Taken

**Initial Response** (within first minutes):

1. [Action taken - e.g., "Called 112 for ambulance"]
2. [Action taken - e.g., "Evacuated building"]
3. [Action taken - e.g., "Contained spill using spill kit"]
4. [Action taken]

**Emergency Services Response** (if applicable):

| Service | Arrival Time | Actions Taken | Clearance/Departure Time |
|---------|-------------|---------------|-------------------------|
| Fire Brigade | [HH:MM] | [Summary] | [HH:MM] |
| Ambulance | [HH:MM] | [Summary] | [HH:MM] |
| Police | [HH:MM] | [Summary] | [HH:MM] |
| Other: _____ | [HH:MM] | [Summary] | [HH:MM] |

**Incident Commander**: [Name and role]
**Incident Declared Controlled**: [Date and time]
**All Clear Given**: [Date and time]

---

### 7. Environmental Impact Assessment

**Environmental Aspect Affected** (if applicable):

[ ] Air emissions (smoke, fumes, odor)
[ ] Water pollution (spill to drain, watercourse, groundwater)
[ ] Soil contamination
[ ] Noise pollution
[ ] Waste generation (hazardous or non-hazardous)
[ ] Resource consumption (water, energy)
[ ] Other: _______________________
[ ] None (no environmental impact)

**Environmental Impact Details**:

| Aspect | Substance/Material Involved | Quantity Released | Area Affected | Extent of Impact |
|--------|---------------------------|------------------|---------------|------------------|
| [e.g., Water pollution] | [e.g., Cleaning chemical] | [e.g., 2 liters] | [e.g., Sink drain] | [e.g., Contained, did not reach watercourse] |
|  |  |  |  |  |

**Containment and Cleanup**:
- Actions taken: [Describe containment and cleanup measures]
- Materials used: [Absorbents, barriers, equipment]
- Waste generated: [Type and quantity of contaminated materials]
- Disposal method: [How waste was disposed - e.g., hazardous waste contractor]
- Effectiveness: [ ] Fully contained [ ] Partially contained [ ] Not contained

**Long-Term Environmental Impact**: [ ] Yes [ ] No [ ] Unknown
If Yes, describe: [Ongoing monitoring, remediation required, etc.]

---

### 8. Regulatory and External Reporting

**Regulatory Reporting Required**:

| Authority/Regulation | Required? | Deadline | Reported By | Report Date | Confirmation # |
|---------------------|-----------|----------|-------------|-------------|----------------|
| **Swedish Work Environment Authority (Arbetsmiljöverket)** - Serious work injury | [ ] Yes [ ] No | Within 24 hours | [Name] | [Date] | [Reference] |
| **Environmental Authority** (municipality or Naturvårdsverket) - Environmental incident | [ ] Yes [ ] No | Immediate or ASAP | [Name] | [Date] | [Reference] |
| **Swedish Authority for Privacy Protection (IMY)** - Data breach (GDPR) | [ ] Yes [ ] No | Within 72 hours | [Name] | [Date] | [Reference] |
| **Building/Fire Authority** - Fire incident | [ ] Yes [ ] No | [Per local requirement] | [Name] | [Date] | [Reference] |
| **Insurance Company** | [ ] Yes [ ] No | Per policy | [Name] | [Date] | [Reference] |
| **Other: ___________** | [ ] Yes [ ] No |  |  |  |  |

**Regulatory Reporting Responsibility**: Environmental Lead (environmental/safety), CISO (data protection/security), HR (occupational safety)

---

### 9. Customer and Stakeholder Communication

**Were Customers Affected**: [ ] Yes [ ] No

**If Yes**:
- Number of customers affected: [Number]
- Nature of impact: [Service disruption, data concern, etc.]
- Customers notified: [ ] Yes [ ] No
- Notification date/time: [Date/Time]
- Notification method: [ ] Email [ ] Phone [ ] Portal notification [ ] Other: _______
- Customer Success Manager informed: [ ] Yes [ ] No

**Other Stakeholders Notified**:

| Stakeholder | Notified? | Date | Method |
|-------------|-----------|------|--------|
| Management Team | [ ] Yes [ ] No | [Date] | [Email, phone, meeting] |
| All Staff | [ ] Yes [ ] No | [Date] | [Teams, email] |
| Building Management | [ ] Yes [ ] No | [Date] |  |
| Data Center (Entiros AB) | [ ] Yes [ ] No | [Date] |  |
| Supplier: ________ | [ ] Yes [ ] No | [Date] |  |
| Media | [ ] Yes [ ] No | [Date] | [Via CEO only] |

---

### 10. Root Cause Analysis

**Analysis Method Used**:
[ ] 5 Whys
[ ] Fishbone Diagram (Cause and Effect)
[ ] Fault Tree Analysis
[ ] Timeline Analysis
[ ] Other: __________________

**Root Cause Determination**:

**Immediate Cause(s)** (direct trigger of incident):
[What directly caused the incident to occur - e.g., "Electrical fault in equipment"]

**Underlying Cause(s)** (contributing factors):
[What allowed the immediate cause to occur - e.g., "Lack of preventive maintenance"]

**Root Cause(s)** (systemic or organizational factors):
[Fundamental reason why incident occurred - e.g., "No preventive maintenance schedule for electrical equipment"]

**Contributing Factors**:
- [ ] Equipment failure
- [ ] Human error
- [ ] Inadequate procedure
- [ ] Lack of training
- [ ] Poor communication
- [ ] Inadequate supervision
- [ ] Environmental factors
- [ ] Design flaw
- [ ] Lack of resources
- [ ] Other: _________________

**5 Whys Analysis** (if used):
1. Why did the incident occur? [Answer]
   - Why? [Answer]
     - Why? [Answer]
       - Why? [Answer]
         - Why? [Answer] ← Root Cause

**Fishbone Diagram**: [ ] Attached [ ] Not used

---

### 11. Risk Assessment

**Likelihood of Recurrence** (without corrective action):
[ ] Very Likely (will occur again soon)
[ ] Likely (will probably occur again)
[ ] Possible (might occur again)
[ ] Unlikely (probably won't occur again)
[ ] Rare (very unlikely to occur again)

**Potential Consequence if Recurs**:
[ ] Catastrophic (fatality, major environmental disaster, business closure)
[ ] Major (serious injury, significant environmental damage, major financial loss)
[ ] Moderate (injury, moderate environmental impact, significant cost)
[ ] Minor (minor injury, minor environmental impact, low cost)
[ ] Negligible (no real impact)

**Risk Level**: [Likelihood × Consequence = Risk rating per SW-IMS-PRO-002]

**Is this incident related to a previously identified risk?**
[ ] Yes - Risk ID: [Reference]
[ ] No - New risk identified

**Should this risk be added to Risk Register?**
[ ] Yes [ ] No
If Yes, Risk Owner: [Name/Role]

---

### 12. Corrective Actions

**Immediate Corrective Actions** (already taken to prevent recurrence):

| Action | Responsible | Completion Date | Status |
|--------|-------------|----------------|--------|
| [Action description] | [Name/Role] | [YYYY-MM-DD] | [ ] Completed [ ] In Progress |
| [Action description] | [Name/Role] | [YYYY-MM-DD] | [ ] Completed [ ] In Progress |

**Planned Corrective Actions** (to address root cause and prevent recurrence):

| Action # | Corrective Action | Responsible Person | Target Date | Priority | Status | Verification Method |
|----------|------------------|-------------------|-------------|----------|--------|---------------------|
| CA-1 | [Specific action to address root cause] | [Name/Role] | [YYYY-MM-DD] | [ ] High [ ] Medium [ ] Low | [ ] Open [ ] In Progress [ ] Completed | [How will effectiveness be verified] |
| CA-2 |  |  |  |  |  |  |
| CA-3 |  |  |  |  |  |  |
| CA-4 |  |  |  |  |  |  |

**Corrective Action Tracking**: Actions tracked per SW-IMS-PRO-005 (Nonconformity and Corrective Action Procedure)

---

### 13. Preventive Actions

**Preventive Actions** (proactive measures to prevent similar incidents in other areas):

| Action | Scope/Application | Responsible | Target Date | Status |
|--------|------------------|-------------|-------------|--------|
| [Action - e.g., "Inspect all similar equipment"] | [Where to apply - all offices, specific area] | [Name/Role] | [YYYY-MM-DD] | [ ] Open [ ] Completed |
|  |  |  |  |  |

---

### 14. Procedure and Document Updates

**Do procedures or documents need updating based on this incident?**
[ ] Yes [ ] No

**If Yes, identify updates required**:

| Document | Update Required | Responsible | Target Date | Status |
|----------|----------------|-------------|-------------|--------|
| [Document ID and name] | [Description of change] | [Name/Role] | [YYYY-MM-DD] | [ ] Open [ ] Completed |
|  |  |  |  |  |

---

### 15. Lessons Learned

**Key Lessons**:
1. [What did we learn from this incident?]
2.
3.
4.

**What Worked Well**:
[Positive aspects of the response - procedures, training, equipment, team coordination that were effective]

**What Could Be Improved**:
[Aspects of response or preparedness that could be enhanced]

**Best Practices Identified**:
[Practices to document and share across organization]

**Training Needs Identified**:
[Gaps in knowledge or skills revealed by incident]

---

### 16. Cost and Impact Summary

**Financial Impact**:

| Cost Category | Estimated Cost (SEK) | Actual Cost (SEK) |
|--------------|---------------------|------------------|
| Medical/Injury costs | | |
| Property damage/repair | | |
| Equipment replacement | | |
| Environmental cleanup | | |
| Service disruption/lost revenue | | |
| Regulatory fines/penalties | | |
| Legal costs | | |
| Overtime/contractor costs | | |
| Other: ____________ | | |
| **TOTAL** | | |

**Insurance Claim**: [ ] Yes [ ] No
If Yes, Claim #: [Reference] | Status: [Pending, Approved, Paid]

**Downtime**:
- Service interruption duration: [Hours/days]
- Staff time lost: [Person-hours]
- Customer accounts affected: [Number]

---

### 17. Post-Incident Review Meeting

**Review Meeting Held**: [ ] Yes [ ] No [ ] Scheduled for: [Date]

**Attendees**:
- [Name - Role]
- [Name - Role]
- [Name - Role]

**Review Outcomes**:
[Summary of discussion, decisions made, additional actions identified]

**Meeting Minutes**: [ ] Attached [ ] On file

---

### 18. Incident Closure

**All Corrective Actions Completed**: [ ] Yes [ ] No

**Corrective Actions Verified Effective**: [ ] Yes [ ] No

**Risk Level After Corrective Actions**: [Reassess risk with controls in place]

**Incident Closure Approved**: [ ] Yes [ ] No

**Closed By**: [Name/Role]
**Closure Date**: [YYYY-MM-DD]

**Closure Comments**:
[Summary of incident resolution, confirmation of effectiveness, any ongoing monitoring required]

---

### 19. Signatures and Approvals

**Report Prepared By**:

| Name | Role | Signature | Date |
|------|------|-----------|------|
| [Name] | [Investigator/Reporter] | | [YYYY-MM-DD] |

**Reviewed By**:

| Name | Role | Signature | Date |
|------|------|-----------|------|
| [Name] | Environmental Lead / CISO / HR (as applicable) | | [YYYY-MM-DD] |
| [Name] | Incident Commander | | [YYYY-MM-DD] |

**Approved By**:

| Name | Role | Signature | Date |
|------|------|-----------|------|
| [Name] | Management Team Representative | | [YYYY-MM-DD] |

---

### 20. Distribution and Filing

**Report Distribution**:
- [ ] Environmental Lead
- [ ] CISO (if IT/security related)
- [ ] HR (if injury/occupational safety)
- [ ] Office Manager (relevant location)
- [ ] Management Team
- [ ] Legal Counsel (if required)
- [ ] Insurance Company (if claim)
- [ ] Affected parties (as appropriate)

**Confidentiality Level**: [ ] Internal [ ] Confidential [ ] Restricted

**Filed in**: [Document management system location/folder]
**Related Records**: [Link to witness statements, photos, external reports, etc.]

**Retention**: 7 years (or per legal requirements for specific incident types)

---

## Attachments

**Attach supporting documentation**:
- [ ] Photographs (incident scene, damage, equipment)
- [ ] Witness statements
- [ ] External agency reports (fire brigade, ambulance, police)
- [ ] Medical reports (if applicable and permitted)
- [ ] Environmental test results (soil, water samples if taken)
- [ ] Equipment inspection/failure analysis reports
- [ ] Correspondence (regulatory authorities, customers, insurance)
- [ ] Corrective action tracking records
- [ ] Other: _______________________________

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Environmental Lead | | | |
| Management Team Representative | | | |
