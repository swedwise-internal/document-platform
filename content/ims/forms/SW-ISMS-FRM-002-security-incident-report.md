---
document_id: SW-ISMS-FRM-002
title: Security Incident Report Form
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: 2024-01-15
review_date: 2025-01-15
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-PRO-004
  - SW-ISMS-POL-001
---

# Security Incident Report Form

## Purpose

This form is used to document information security incidents, ensuring consistent reporting, appropriate response, and effective learning from security events.

## Instructions

1. **Complete immediately** when a security incident is identified
2. **Report to** your line manager and security@swedwise.se
3. **Update the form** as new information becomes available
4. **Preserve evidence** - do not delete logs or files
5. **Confidential** - share only with authorized personnel
6. **Follow-up** - CISO will coordinate response and communicate updates

---

## Incident Information

### Basic Details

| Field | Information |
|-------|-------------|
| **Incident ID** | (Auto-assigned by CISO) |
| **Report Date/Time** | |
| **Reporter Name** | |
| **Reporter Contact** | |
| **Reporter Department** | |

---

### Incident Classification

| Field | Selection |
|-------|-----------|
| **Date/Time Detected** | |
| **Date/Time Occurred (if known)** | |
| **Current Status** | ☐ Ongoing ☐ Contained ☐ Resolved |

**Severity Level:**

- ☐ **P1 - Critical**: Severe impact, immediate action required (e.g., data breach, major system outage, ransomware)
- ☐ **P2 - High**: Significant impact, urgent response needed (e.g., malware infection, unauthorized access attempt)
- ☐ **P3 - Medium**: Moderate impact, response within 24 hours (e.g., policy violation, suspicious activity)
- ☐ **P4 - Low**: Minor impact, routine handling (e.g., lost device with encryption, phishing email reported)

**Incident Type** (check all that apply):

- ☐ Unauthorized access
- ☐ Malware/virus infection
- ☐ Data breach/data loss
- ☐ Denial of Service (DoS)
- ☐ Phishing/social engineering
- ☐ Physical security breach
- ☐ Lost/stolen device or media
- ☐ Accidental disclosure
- ☐ System/service outage
- ☐ Policy violation
- ☐ Supplier/third-party incident
- ☐ Other: _______________________

---

## Incident Description

### What Happened?

Provide a clear description of the incident, including what was observed and how it was discovered:

```
[Describe the incident here]







```

---

### Systems and Assets Affected

List all systems, applications, devices, or locations affected:

| System/Asset | Description | Classification |
|--------------|-------------|----------------|
| | | |
| | | |
| | | |

---

### Data Affected

**Was personal data or sensitive business data affected?**

- ☐ Yes
- ☐ No
- ☐ Unknown

If Yes, provide details:

| Data Type | Number of Records | Classification | Individuals Affected |
|-----------|-------------------|----------------|----------------------|
| | | | |
| | | | |

**GDPR/Privacy Implications:**

- ☐ Possible personal data breach (notify CISO immediately)
- ☐ Customer data involved (notify Customer Success)
- ☐ No personal data affected

---

## Initial Response

### Immediate Actions Taken

What actions have been taken so far?

```
[List all actions taken]








```

**Escalation:**

- ☐ Line manager notified
- ☐ CISO notified
- ☐ IT Operations notified
- ☐ Customer Success notified (if customer impact)
- ☐ External authorities notified (specify): _______________________

---

## Impact Assessment

### Business Impact

| Impact Area | Severity | Description |
|-------------|----------|-------------|
| **Confidentiality** | ☐ None ☐ Low ☐ Medium ☐ High | |
| **Integrity** | ☐ None ☐ Low ☐ Medium ☐ High | |
| **Availability** | ☐ None ☐ Low ☐ Medium ☐ High | |

**Business Services Affected:**

- ☐ Customer-facing services
- ☐ Internal operations
- ☐ Development environments
- ☐ Administrative systems
- ☐ No services affected

**Estimated Financial Impact:** SEK _______________ (if applicable)

**Customer Impact:**

- ☐ No customer impact
- ☐ Minor customer impact (performance degradation)
- ☐ Moderate customer impact (service disruption)
- ☐ Major customer impact (data breach, extended outage)

Number of customers affected: ___________

---

## Evidence Collection

### Evidence Preserved

List all evidence collected or preserved (DO NOT delete):

| Evidence Type | Location/Reference | Collected By | Date/Time |
|---------------|-------------------|--------------|-----------|
| ☐ Log files | | | |
| ☐ Screenshots | | | |
| ☐ Email messages | | | |
| ☐ System snapshots | | | |
| ☐ Network captures | | | |
| ☐ Physical evidence | | | |
| ☐ Witness statements | | | |
| ☐ Other: | | | |

**Evidence Storage Location:** ___________________________________________

---

## Root Cause (If Known)

**Suspected Cause:**

- ☐ Human error
- ☐ Technical failure
- ☐ Process gap
- ☐ External attack
- ☐ Insider threat
- ☐ Supplier/third-party issue
- ☐ Unknown
- ☐ Other: _______________________

**Description:**

```
[Describe suspected root cause]






```

---

## For CISO Use Only

### Incident Response

| Field | Information |
|-------|-------------|
| **Incident Manager Assigned** | |
| **Response Team Members** | |
| **Investigation Status** | ☐ Open ☐ In Progress ☐ Closed |
| **Root Cause Confirmed** | ☐ Yes ☐ No ☐ Under Investigation |

---

### Resolution and Closure

| Field | Information |
|-------|-------------|
| **Resolution Date/Time** | |
| **Total Duration** | |
| **Final Classification** | |
| **Actual RTO (if outage)** | |

**Resolution Summary:**

```
[Summary of how incident was resolved]






```

**Corrective Actions:**

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| | | | |
| | | | |
| | | | |

**Preventive Actions:**

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| | | | |
| | | | |

---

### Lessons Learned

**What went well:**

```
[Describe effective aspects of response]




```

**What could be improved:**

```
[Describe areas for improvement]




```

**Recommendations:**

```
[Specific recommendations for preventing recurrence]




```

---

### Notification Requirements

**Regulatory Notifications Required:**

- ☐ GDPR Data Protection Authority (within 72 hours)
- ☐ Affected data subjects
- ☐ Other regulatory bodies: _______________________
- ☐ No regulatory notification required

**Internal/External Communications:**

- ☐ Management team briefed
- ☐ Affected customers notified
- ☐ All staff notification
- ☐ Insurance company notified
- ☐ Law enforcement contacted
- ☐ No external communication required

---

### Metrics

| Metric | Value |
|--------|-------|
| **Time to Detection** | |
| **Time to Response** | |
| **Time to Containment** | |
| **Time to Resolution** | |
| **Recovery Point (if data loss)** | |

---

## Approval and Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Reported By** | | | |
| **Incident Manager** | | | |
| **CISO Review** | | | |
| **Closure Approved By** | | | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial report |

---

## Attachments

List any attachments (screenshots, logs, reports, etc.):

1. _______________________________________
2. _______________________________________
3. _______________________________________

---

## Notes

**Additional Information:**

```
[Any additional relevant information]








```

---

## Quick Reference - Severity Guidelines

| Severity | Response Time | Examples |
|----------|---------------|----------|
| **P1 - Critical** | Immediate (24/7) | Active data breach, ransomware, complete system outage, major security compromise |
| **P2 - High** | Within 2 hours | Confirmed malware, unauthorized access, significant data loss, attempted breach |
| **P3 - Medium** | Within 24 hours | Policy violation, suspicious activity, minor malware, configuration error |
| **P4 - Low** | Within 48 hours | Reported phishing, lost encrypted device, minor policy breach, awareness issue |

---

## Contact Information

**For incident reporting:**
- **Email:** security@swedwise.se
- **CISO:** [Contact details]
- **IT Operations:** [Contact details]
- **After hours:** [Emergency contact]
