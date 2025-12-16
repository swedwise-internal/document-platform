---
document_id: SW-ISMS-FRM-015
title: Access Review Attestation Form
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
  - SW-ISMS-FRM-004
---

# Access Review Attestation Form

## Purpose

This form provides a summary attestation from managers that they have completed a thorough access review for their team members. It serves as a certification that access rights are appropriate and follow the principle of least privilege.

## Instructions

1. **IT/CISO** sends access report to department/team managers quarterly
2. **Manager** reviews all team members' access using SW-ISMS-FRM-004 (detailed review form)
3. **Manager** completes this attestation form summarizing the review
4. **Manager** returns signed attestation to IT/CISO within 10 business days
5. **IT** implements approved changes
6. **Retain** attestation as evidence of access governance

**This form is the summary attestation; detailed access reviews should be documented using SW-ISMS-FRM-004.**

---

## Section 1: Review Information

| Field | Information |
|-------|-------------|
| **Review Period** | Q: ☐ Q1 ☐ Q2 ☐ Q3 ☐ Q4  Year: __________ |
| **Review Date Range** | From: __________ To: __________ |
| **Attestation Date** | |
| **Department/Team** | |
| **Manager Name** | |
| **Manager Title** | |
| **Manager Email** | |

---

## Section 2: Review Scope

### Users and Access Reviewed

| Metric | Count |
|--------|-------|
| **Total Users Reviewed** | |
| **Total Access Rights Reviewed** | (individual system/app access instances) |
| **Direct Reports** | |
| **Extended Team Members** | (if responsible for wider team) |
| **Contractors/Temporary Staff** | |

---

### Systems and Applications Covered

**Primary systems/applications reviewed:**

| System/Application | Number of Users | Access Types Reviewed |
|-------------------|----------------|----------------------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Additional systems:** ☐ All systems reviewed ☐ Limited to primary systems

---

## Section 3: Review Outcomes

### Access Decisions Summary

| Decision | Count | Percentage |
|----------|-------|------------|
| **Access Retained (No Change)** | | % |
| **Access Modified (Changed Level)** | | % |
| **Access Removed (Revoked)** | | % |
| **New Access Identified as Needed** | | % |

---

### Access Modifications Detail

**Access to be modified or removed:**

| User Name | System | Current Access | New Access / Remove | Reason | Priority |
|-----------|--------|----------------|-------------------|--------|----------|
| | | | ☐ Modify ☐ Remove | | ☐ Immediate ☐ Standard |
| | | | ☐ Modify ☐ Remove | | ☐ Immediate ☐ Standard |
| | | | ☐ Modify ☐ Remove | | ☐ Immediate ☐ Standard |
| | | | ☐ Modify ☐ Remove | | ☐ Immediate ☐ Standard |
| | | | ☐ Modify ☐ Remove | | ☐ Immediate ☐ Standard |

**If more than 5 changes, attach detailed list:** ☐ Yes ☐ N/A

---

## Section 4: Issues and Findings

### Access Issues Identified

**Were any access issues or anomalies discovered?**

- ☐ No issues identified
- ☐ Yes, issues identified (detail below)

**If Yes, describe issues:**

| Issue Type | Count | Severity | Action Taken |
|------------|-------|----------|--------------|
| Excessive access (more than needed) | | ☐ High ☐ Medium ☐ Low | |
| Inappropriate access (role mismatch) | | ☐ High ☐ Medium ☐ Low | |
| Inactive accounts (no recent login) | | ☐ High ☐ Medium ☐ Low | |
| Segregation of duties conflicts | | ☐ High ☐ Medium ☐ Low | |
| Orphaned accounts (user left company) | | ☐ High ☐ Medium ☐ Low | |
| Shared accounts | | ☐ High ☐ Medium ☐ Low | |
| Privileged access without justification | | ☐ High ☐ Medium ☐ Low | |
| Missing access (needed but not granted) | | ☐ High ☐ Medium ☐ Low | |
| Other: | | ☐ High ☐ Medium ☐ Low | |

---

### Critical Findings

**Were any critical security issues identified?**

- ☐ No
- ☐ Yes (describe below and notify CISO immediately)

**Critical findings:**

```
[Describe any critical security concerns requiring immediate attention]






```

---

### Inactive or Orphaned Accounts

**Accounts with no login activity in the past 90 days:**

| User Name | System | Last Login | Recommendation | Reason |
|-----------|--------|------------|----------------|--------|
| | | | ☐ Disable ☐ Remove ☐ Retain | |
| | | | ☐ Disable ☐ Remove ☐ Retain | |
| | | | ☐ Disable ☐ Remove ☐ Retain | |

**Total inactive accounts recommended for removal:** _____

---

## Section 5: Privileged Access Review

### Privileged Users in Team

**Team members with privileged/administrative access:**

| User Name | System | Privilege Type | Still Required? | Justification (if retained) |
|-----------|--------|----------------|-----------------|---------------------------|
| | | | ☐ Yes ☐ No | |
| | | | ☐ Yes ☐ No | |
| | | | ☐ Yes ☐ No | |

**Privileged access review completed separately?** ☐ Yes (SW-ISMS-FRM-016) ☐ No ☐ N/A

---

## Section 6: Temporary and Project Access

### Temporary Access Expiring Soon

**Temporary access grants ending in next 30 days:**

| User Name | System | Access Granted | Expiry Date | Extend or Remove? |
|-----------|--------|----------------|-------------|-------------------|
| | | | | ☐ Extend ☐ Remove |
| | | | | ☐ Extend ☐ Remove |
| | | | | ☐ Extend ☐ Remove |

---

## Section 7: Contractor and External Access

### Third-Party Access

**Contractors, consultants, or external parties with access:**

| Name | Company | System | Access Level | Contract End | Retain? |
|------|---------|--------|--------------|--------------|---------|
| | | | | | ☐ Yes ☐ No |
| | | | | | ☐ Yes ☐ No |
| | | | | | ☐ Yes ☐ No |

**Any contractors whose engagement has ended but still have access?**

- ☐ No
- ☐ Yes (immediate revocation requested for): _______________________

---

## Section 8: New Access Requests

### Access Gaps Identified

**Team members who need new access not currently granted:**

| User Name | System/Application | Access Level Needed | Business Justification | Priority |
|-----------|-------------------|-------------------|----------------------|----------|
| | | | | ☐ Urgent ☐ Normal |
| | | | | ☐ Urgent ☐ Normal |
| | | | | ☐ Urgent ☐ Normal |

**Note:** New access requests should be submitted via SW-ISMS-FRM-003 (Access Request Form)

---

## Section 9: Manager Attestation

### Certification Statement

**I certify that:**

- ☐ I have personally reviewed the access rights for all users in my team
- ☐ I have verified that each person's access is appropriate for their current role
- ☐ I have identified and requested removal of unnecessary or excessive access
- ☐ I have checked for inactive accounts and recommended appropriate action
- ☐ All privileged access has been reviewed and justified
- ☐ All temporary and contractor access has been verified as still needed
- ☐ I am not aware of any unauthorized or inappropriate access
- ☐ All access decisions follow the principle of least privilege
- ☐ I have identified any segregation of duties conflicts
- ☐ I accept accountability for access granted to my team members

---

### Review Quality Attestation

**I attest that this review was:**

- ☐ **Comprehensive** - Every user and access right thoroughly reviewed
- ☐ **Adequate** - Key systems and users reviewed, spot-checked others
- ☐ **Limited** - Time constraints limited review depth (explain below)

**If Limited, explain:**

```
[Explain any constraints that limited the review]



```

---

### Manager Comments

**Additional observations, concerns, or recommendations:**

```
[Any additional comments about access management, systemic issues, or process improvements]








```

---

### Manager Sign-Off

I certify that the information provided in this attestation is true and accurate to the best of my knowledge, and that I have fulfilled my responsibility to review and approve access for my team members.

| **Manager Name** | |
| **Manager Title** | |
| **Department** | |
| **Signature** | |
| **Date** | |

---

## Section 10: For IT/CISO Use Only

### Attestation Review

| Field | Information |
|-------|-------------|
| **Received Date** | |
| **Reviewed By** | |
| **Review Date** | |

**Attestation completeness:**

- ☐ Complete and satisfactory
- ☐ Acceptable with minor issues
- ☐ Incomplete or concerning (follow-up required)

**Follow-up required?** ☐ Yes ☐ No

**If Yes, follow-up details:**

```
[Describe follow-up needed]



```

---

### Implementation

**Access changes implementation:**

| Change Type | Requested | Completed | Completion Date |
|-------------|-----------|-----------|----------------|
| **Access modifications** | | | |
| **Access removals** | | | |
| **Inactive account disables** | | | |

**Implementation completed by:** _________________ **Date:** _______

**Implementation verified by:** _________________ **Date:** _______

---

### Issues Escalation

**Any issues requiring escalation to CISO or management?**

- ☐ No
- ☐ Yes (describe below)

**Escalation details:**

```
[Describe issues requiring escalation]



```

**Escalated to:** _________________ **Date:** _______

---

## Section 11: Metrics and Trends

### Review Completion Metrics

| Metric | Current Quarter | Previous Quarter | Trend |
|--------|----------------|------------------|-------|
| **Review completion %** | % | % | ☐ Better ☐ Same ☐ Worse |
| **On-time submission** | ☐ Yes ☐ No (late by ___ days) | | |
| **Changes requested %** | % | % | ☐ Up ☐ Same ☐ Down |
| **Issues identified** | | | ☐ More ☐ Same ☐ Fewer |

---

### Department Trends

**Overall access governance health for this department:**

- ☐ **Excellent** - Minimal changes needed, strong governance
- ☐ **Good** - Reasonable governance, normal changes
- ☐ **Needs Improvement** - Notable issues, many changes needed
- ☐ **Poor** - Significant governance gaps, action required

**Trend compared to previous reviews:**

- ☐ Improving
- ☐ Stable
- ☐ Declining

---

## Document Control

| Version | Date | Manager | Changes |
|---------|------|---------|---------|
| 1.0 | | | Initial attestation |

---

## Quick Reference - Review Checklist for Managers

**Before signing attestation, verify you have:**

- ☐ Received and reviewed the access report from IT/CISO
- ☐ Checked each user's current role and responsibilities
- ☐ Verified access matches job duties (principle of least privilege)
- ☐ Reviewed privileged/admin access with extra scrutiny
- ☐ Checked for inactive users (>90 days no login)
- ☐ Reviewed temporary and project access for expiry
- ☐ Verified contractor access is still needed
- ☐ Checked for segregation of duties conflicts
- ☐ Identified any missing access users need
- ☐ Documented all changes needed
- ☐ Discussed concerning access patterns with CISO
- ☐ Retained detailed review notes for your records

---

## Quick Reference - Common Access Issues

| Issue | What to Look For | Action |
|-------|-----------------|--------|
| **Excessive Access** | User has access beyond current role needs | Reduce to minimum required |
| **Role Changed** | User changed roles but kept old access | Remove old access, verify new access |
| **Inactive Account** | No login in 90+ days | Disable or remove unless valid reason |
| **Shared Account** | Multiple users using same credentials | Create individual accounts |
| **Privileged Access** | Admin rights without clear need | Revoke or justify with CISO approval |
| **Contractor End** | Contractor engagement ended | Immediate revocation |
| **Segregation Conflict** | User has conflicting access (e.g., developer + production admin) | Remove conflicting access, escalate to CISO |

---

## Notes

```
[Additional notes or observations]






```

---

## Contact Information

**For access review questions:**
- **IT Support:** support@swedwise.se
- **CISO:** [Contact details]
- **Access Management:** [Contact details]

**Access review schedule:**
- **Q1 Review:** January (due February 15)
- **Q2 Review:** April (due May 15)
- **Q3 Review:** July (due August 15)
- **Q4 Review:** October (due November 15)
