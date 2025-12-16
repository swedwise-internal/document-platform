---
document_id: SW-ISMS-FRM-006
title: Recovery Request Form
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
  - SW-ISMS-PRO-006
  - SW-ISMS-PRO-007
  - SW-IMS-POL-001
---

# Recovery Request Form

## Purpose

This form is used to request recovery of systems, applications, or data from backups. All recovery requests must be documented, approved, and verified to ensure data integrity and minimize business disruption.

## Instructions

1. **Requester** completes Sections 1-3
2. **Submit** to IT Operations and appropriate approver (see approval matrix)
3. **Approver** reviews business justification and approves/rejects
4. **IT Operations** executes recovery and completes verification
5. **Requester** confirms successful recovery
6. **Retain** completed form in backup/recovery records

**Emergency Recoveries:** For P1/P2 incidents, verbal approval may be given with form completed retrospectively within 24 hours.

---

## Section 1: Request Information

| Field | Information |
|-------|-------------|
| **Request ID** | (Auto-assigned by IT) |
| **Request Date/Time** | |
| **Requester Name** | |
| **Requester Department** | |
| **Requester Contact** | Phone: __________ Email: __________ |
| **Request Type** | ☐ Standard ☐ Emergency |

---

## Section 2: Recovery Details

### What Needs to be Recovered?

**Recovery Type:**

- ☐ **Full System Recovery** (entire server/VM)
- ☐ **Database Recovery** (full database restore)
- ☐ **File/Folder Recovery** (specific files or directories)
- ☐ **Application Recovery** (application and configuration)
- ☐ **Email/Mailbox Recovery** (individual emails or mailbox)
- ☐ **SharePoint/OneDrive Recovery** (documents or sites)
- ☐ **Configuration Recovery** (system or application config)
- ☐ **Other** (specify): _______________________

---

### System/Application Details

| Field | Information |
|-------|-------------|
| **System/Application Name** | |
| **System Owner** | |
| **Environment** | ☐ Production ☐ Test ☐ Development |
| **System Classification** | ☐ Public ☐ Internal ☐ Confidential ☐ Restricted |
| **Business Criticality** | ☐ Low ☐ Medium ☐ High ☐ Critical |

**Specific items to recover:**

```
[Provide exact details: server names, database names, file paths, etc.]








```

---

### Recovery Point

**When should data be recovered FROM?**

- ☐ **Latest backup** (most recent available)
- ☐ **Specific date/time** (exact point in time)
  - **Date:** _______________
  - **Time:** _______________
  - **Timezone:** _______________
- ☐ **Before specific event** (e.g., before deletion, corruption)
  - **Event date/time:** _______________
  - **Event description:** _______________________

**How far back can data loss be tolerated?** (Recovery Point Objective - RPO)

- ☐ No data loss acceptable (must be real-time/synchronized)
- ☐ Up to 1 hour of data loss acceptable
- ☐ Up to 24 hours of data loss acceptable
- ☐ Up to 1 week of data loss acceptable
- ☐ Other: _______________________

---

## Section 3: Business Justification

### Reason for Recovery

**Primary reason for recovery request:**

- ☐ **Accidental deletion** (user error, file/folder deleted)
- ☐ **Data corruption** (file corruption, database corruption)
- ☐ **System failure** (hardware failure, OS crash)
- ☐ **Malware/ransomware** (virus, ransomware attack)
- ☐ **Disaster recovery** (disaster event, site failure)
- ☐ **Compliance requirement** (audit, legal request)
- ☐ **Testing/validation** (DR test, verification)
- ☐ **Rollback required** (failed change, bad deployment)
- ☐ **Other** (specify): _______________________

**Detailed explanation:**

```
[Describe what happened, when it was discovered, and why recovery is needed]










```

---

### Business Impact

**Current impact of data/system unavailability:**

- ☐ **Critical** - Business operations stopped, revenue loss
- ☐ **High** - Major business process affected, multiple users impacted
- ☐ **Medium** - Moderate impact, workarounds available
- ☐ **Low** - Minor inconvenience, no immediate business impact

**Number of users/customers affected:** ___________

**Estimated financial impact:** SEK ___________ / hour (if applicable)

**Business processes affected:**

```
[List affected business processes or services]





```

---

### Priority and Timeline

**Recovery Priority:**

- ☐ **P1 - Emergency** (immediate recovery required, business stopped)
- ☐ **P2 - Urgent** (recovery within 4 hours, major impact)
- ☐ **P3 - High** (recovery within 24 hours, moderate impact)
- ☐ **P4 - Normal** (recovery within 72 hours, minor impact)

**Required Recovery Time:** _____________________ (Recovery Time Objective - RTO)

**Latest acceptable recovery completion time:** _____________________ (Date/Time)

---

## Section 4: Approval

### Approval Requirements

| Recovery Type | Approver Required |
|---------------|-------------------|
| **Non-production systems** | Line Manager |
| **Production systems (non-critical)** | Line Manager + IT Manager |
| **Production systems (critical)** | Line Manager + IT Manager + CISO |
| **Customer data** | Line Manager + Data Owner + CISO |
| **Emergency P1/P2** | IT Manager (minimum), retrospective CEO approval |

---

### Approver Review

| Field | Information |
|-------|-------------|
| **Approver Name** | |
| **Approver Title** | |
| **Review Date/Time** | |

**Approval Decision:**

- ☐ **Approved** - Proceed with recovery as specified
- ☐ **Approved with Modifications** (specify): _______________________
- ☐ **Not Approved** (provide reason): _______________________

**Approver Comments:**

```
[Additional comments, conditions, or concerns]




```

| **Approver Signature** | | **Date/Time** | |

---

### Additional Approval (if required)

| Field | Information |
|-------|-------------|
| **Additional Approver Name** | |
| **Additional Approver Title** | |
| **Review Date/Time** | |

**Approval Decision:**

- ☐ **Approved**
- ☐ **Approved with Modifications**
- ☐ **Not Approved**

| **Approver Signature** | | **Date/Time** | |

---

## Section 5: Recovery Execution

### Pre-Recovery Assessment

| Field | Information |
|-------|-------------|
| **Assigned To** | |
| **Assessment Date/Time** | |

**Backup Availability:**

- ☐ Backup verified and available
- ☐ Backup location: _______________________
- ☐ Backup size: ___________
- ☐ Backup integrity verified: ☐ Yes ☐ No

**Recovery Method:**

- ☐ Restore from local backup
- ☐ Restore from cloud backup
- ☐ Restore from tape
- ☐ Restore from snapshot
- ☐ Restore from replication
- ☐ Other: _______________________

**Estimated recovery time:** ___________

**Potential impact/risks:**

```
[Document any risks associated with the recovery]




```

---

### Recovery Execution

| Field | Information |
|-------|-------------|
| **Recovery Started** | Date: __________ Time: __________ |
| **Recovery Method Used** | |
| **Backup Source** | |
| **Backup Date/Time** | |
| **Recovery Completed** | Date: __________ Time: __________ |
| **Total Duration** | |

**Recovery Steps Performed:**

```
[Document the recovery procedure executed]










```

**Issues Encountered:**

```
[Document any problems or deviations from standard procedure]





```

---

## Section 6: Verification and Testing

### Technical Verification

**Performed by:** _____________________ **Date/Time:** _____________________

**Verification Checklist:**

- ☐ System/application starts successfully
- ☐ Data restored completely
- ☐ File/folder permissions correct
- ☐ Database integrity verified
- ☐ Configuration settings restored
- ☐ Network connectivity confirmed
- ☐ Dependent systems functioning
- ☐ No error messages or warnings
- ☐ Log files reviewed

**Verification Notes:**

```
[Document verification results]




```

---

### Business Verification

**Performed by:** _____________________ (Requester) **Date/Time:** _____________________

**Business Verification Checklist:**

- ☐ Required data is present and accessible
- ☐ Data is from the correct time period
- ☐ Business processes can resume
- ☐ Users can access system/data
- ☐ Data integrity appears correct
- ☐ No obvious data corruption

**Verification Status:**

- ☐ **Success** - Recovery meets requirements
- ☐ **Partial Success** - Some issues identified (detail below)
- ☐ **Failed** - Recovery does not meet requirements (detail below)

**Verification Comments:**

```
[Document business verification results and any issues]





```

| **Requester Signature** | | **Date/Time** | |

---

## Section 7: Post-Recovery Actions

### Incident Follow-Up

**If recovery was due to incident, complete the following:**

**Incident ID:** _______________ (link to SW-ISMS-FRM-002 if applicable)

**Root Cause Identified:**

- ☐ Yes (describe below)
- ☐ No (investigation ongoing)
- ☐ Not applicable

**Root Cause:**

```
[Describe root cause if identified]




```

**Corrective Actions:**

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| | | | ☐ Open ☐ Complete |
| | | | ☐ Open ☐ Complete |
| | | | ☐ Open ☐ Complete |

---

### Lessons Learned

**What went well:**

```
[Positive aspects of the recovery process]




```

**What could be improved:**

```
[Areas for improvement]




```

**Recommendations:**

```
[Specific recommendations for improving backup/recovery procedures]




```

---

## Section 8: Completion and Metrics

### Recovery Metrics

| Metric | Target | Actual | Met? |
|--------|--------|--------|------|
| **Recovery Time Objective (RTO)** | | | ☐ Yes ☐ No |
| **Recovery Point Objective (RPO)** | | | ☐ Yes ☐ No |
| **Time to Approval** | N/A | | N/A |
| **Time to Start Recovery** | N/A | | N/A |
| **Time to Complete Recovery** | N/A | | N/A |
| **Total Incident Duration** | N/A | | N/A |

---

### Final Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Recovery Performed By** | | | |
| **Verified By (IT)** | | | |
| **Verified By (Business)** | | | |
| **Closed By** | | | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial request |

---

## Quick Reference - Recovery Types and RTOs

| System/Data Type | Classification | Typical RTO | Typical RPO | Approval Required |
|------------------|----------------|-------------|-------------|-------------------|
| **SaaS Production** | Critical | < 1 hour | < 15 min | IT Mgr + CISO |
| **Customer Database** | Critical | < 2 hours | < 1 hour | IT Mgr + CISO |
| **Email System** | High | < 4 hours | < 1 hour | IT Mgr |
| **File Shares** | Medium | < 24 hours | < 24 hours | Line Mgr |
| **Individual Files** | Low-Medium | < 48 hours | < 24 hours | Line Mgr |
| **Development Systems** | Low | < 72 hours | < 1 week | Line Mgr |

---

## Notes

```
[Additional notes or special circumstances]






```

---

## Contact Information

**For recovery requests and support:**
- **IT Operations:** support@swedwise.se
- **After Hours Emergency:** [Emergency number]
- **CISO:** [Contact details]
