---
document_id: SW-ISMS-FRM-004
title: Access Review Certification Form
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
  - SW-ISMS-PRO-005
  - SW-ISMS-FRM-003
---

# Access Review Certification Form

## Purpose

This form is used by managers to review and certify that user access rights for their team members are appropriate and still required. Regular access reviews ensure the principle of least privilege is maintained.

## Instructions

1. **IT/CISO** generates access report and sends to department managers
2. **Manager** reviews each user's access and completes certification
3. **Manager** identifies access to be retained, modified, or removed
4. **Manager** signs and returns completed form to IT/CISO
5. **IT** implements approved changes and updates access records
6. **Retain** completed certification in access management records

**Review Frequency:**
- Standard access: Quarterly
- Privileged access: Monthly
- Temporary access: At expiry date

---

## Review Information

| Field | Information |
|-------|-------------|
| **Review Period** | From: __________ To: __________ |
| **Review Type** | ☐ Quarterly Standard Review ☐ Monthly Privileged Review ☐ Ad-hoc Review |
| **Department/Team** | |
| **Manager Name** | |
| **Manager Title** | |
| **Review Date** | |

---

## Access Review Certification

For each user listed below, confirm whether access is still appropriate:

### User Access Review Table

| User Name | System/App | Current Access Level | Still Required? | Action | Justification (if changes) |
|-----------|------------|---------------------|-----------------|--------|---------------------------|
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |
| | | | ☐ Yes ☐ No | ☐ Retain ☐ Modify ☐ Remove | |

**Continue on additional pages if needed**

---

## Review Summary

| Metric | Count |
|--------|-------|
| **Total Users Reviewed** | |
| **Total Access Rights Reviewed** | |
| **Access Retained (No Change)** | |
| **Access Modified (Changed)** | |
| **Access Removed (Revoked)** | |
| **New Access Requests Identified** | |

---

## Access Modifications Required

### Detail Changes Needed

For each "Modify" or "Remove" action, provide details:

#### Modification 1

| Field | Information |
|-------|-------------|
| **User Name** | |
| **System** | |
| **Current Access** | |
| **New Access (if modify)** | |
| **Reason for Change** | |
| **Effective Date** | |

---

#### Modification 2

| Field | Information |
|-------|-------------|
| **User Name** | |
| **System** | |
| **Current Access** | |
| **New Access (if modify)** | |
| **Reason for Change** | |
| **Effective Date** | |

---

#### Modification 3

| Field | Information |
|-------|-------------|
| **User Name** | |
| **System** | |
| **Current Access** | |
| **New Access (if modify)** | |
| **Reason for Change** | |
| **Effective Date** | |

---

*Add additional modification sections as needed*

---

## Exceptions and Issues

### Access Issues Identified

Document any concerns or anomalies discovered during the review:

| User/System | Issue Description | Severity | Action Required |
|-------------|------------------|----------|-----------------|
| | | ☐ Low ☐ Medium ☐ High | |
| | | ☐ Low ☐ Medium ☐ High | |
| | | ☐ Low ☐ Medium ☐ High | |

---

## Inactive Accounts

List any accounts that appear inactive (no recent login activity):

| User Name | System | Last Login | Recommendation |
|-----------|--------|------------|----------------|
| | | | ☐ Disable ☐ Remove ☐ Retain |
| | | | ☐ Disable ☐ Remove ☐ Retain |
| | | | ☐ Disable ☐ Remove ☐ Retain |

---

## Manager Certification

### Attestation Statement

I certify that:

- ☐ I have reviewed all access rights for team members under my responsibility
- ☐ All access marked "Retain" is required for legitimate business purposes
- ☐ All modifications and removals have been identified and documented
- ☐ I am not aware of any unauthorized or inappropriate access
- ☐ All inactive accounts have been addressed
- ☐ Access rights follow the principle of least privilege

### Additional Comments

```
[Any additional observations, concerns, or recommendations]








```

---

### Manager Sign-Off

| Field | Information |
|-------|-------------|
| **Manager Name** | |
| **Manager Signature** | |
| **Certification Date** | |

---

## For IT/CISO Use Only

### Implementation

| Field | Information |
|-------|-------------|
| **Received Date** | |
| **Processed By** | |
| **Implementation Date** | |
| **Verification Date** | |

**Implementation Status:**

| User/Change | Implementation Date | Verified By | Notes |
|-------------|-------------------|-------------|-------|
| | | | |
| | | | |
| | | | |

**Completion Checklist:**

- ☐ All access retentions confirmed in system
- ☐ All access modifications completed
- ☐ All access removals completed
- ☐ Inactive accounts disabled/removed
- ☐ Users notified of changes (if applicable)
- ☐ Audit trail updated
- ☐ Exceptions escalated to CISO (if applicable)
- ☐ Certification archived

**Issues Requiring Escalation:**

```
[Document any issues that need CISO or management attention]




```

---

## Document Control

| Version | Date | Reviewer | Changes |
|---------|------|----------|---------|
| 1.0 | | | Initial review |

---

## Quick Reference - Review Guidelines

### What to Look For

**Check if access is:**
1. **Still needed** - User still in same role/project?
2. **Appropriate** - Access level matches current job duties?
3. **Being used** - Recent login/activity recorded?
4. **Not duplicated** - User doesn't have redundant access?
5. **Not conflicting** - No segregation of duties issues?

### Common Actions

| Scenario | Recommended Action |
|----------|-------------------|
| **User changed roles** | Remove old role access, verify new role access via new request |
| **Project ended** | Remove temporary project access |
| **No login in 90 days** | Review with user, consider disabling |
| **Excessive privileges** | Reduce to minimum required |
| **Segregation conflict** | Remove conflicting access, escalate to CISO |
| **Left company** | Immediate removal (HR should have initiated) |

### Review Frequency by Access Type

| Access Type | Review Frequency | Additional Requirements |
|-------------|------------------|-------------------------|
| **Standard User** | Quarterly | Manager certification |
| **Power User** | Quarterly | Manager certification |
| **Privileged/Admin** | Monthly | Manager + CISO review |
| **Production Access** | Monthly | Manager + CISO review |
| **Temporary Access** | At expiry | Auto-revoke if possible |
| **Service Accounts** | Quarterly | Technical owner review |

---

## Appendix: Sample Access Report

The IT/CISO team will provide a report similar to this format:

### Department: [Department Name]
**Review Period:** [Date Range]

| User | System | Access Level | Granted Date | Last Login | Last Activity | Type |
|------|--------|--------------|--------------|------------|---------------|------|
| John Doe | Salesforce | Power User | 2023-05-15 | 2024-01-10 | 2024-01-10 | Permanent |
| Jane Smith | Azure Portal | Contributor | 2023-08-20 | 2024-01-12 | 2024-01-09 | Permanent |
| Bob Johnson | Production DB | Read-Only | 2023-11-01 | 2023-12-15 | 2023-12-15 | Temporary |

*Red flags to watch for:*
- Last login > 90 days ago (possible inactive account)
- Granted recently but no activity (may not be needed)
- Multiple high-privilege access (may violate least privilege)

---

## Notes

```
[Additional notes or observations]






```
