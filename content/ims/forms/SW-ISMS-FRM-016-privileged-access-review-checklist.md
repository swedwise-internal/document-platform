---
document_id: SW-ISMS-FRM-016
title: Privileged Access Review Checklist
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
  - SW-ISMS-FRM-005
---

# Privileged Access Review Checklist

## Purpose

This form provides a detailed checklist for monthly review of privileged and administrative access rights. Privileged access requires enhanced scrutiny due to the elevated security risk and potential for significant business impact if compromised or misused.

## Instructions

1. **CISO or IT Manager** conducts monthly privileged access review
2. **Generate report** of all users with privileged access from each system
3. **Review each privileged account** using this checklist
4. **Verify** business justification, activity, and security controls
5. **Document** findings and required actions
6. **Follow up** on any issues or access to be revoked
7. **Retain** as evidence of privileged access governance

**Review Frequency:** Monthly (Critical systems), Quarterly (Non-critical systems)

---

## Section 1: Review Information

| Field | Information |
|-------|-------------|
| **Review ID** | |
| **Review Period** | Month/Year: __________ |
| **Review Date** | |
| **Reviewer Name** | |
| **Reviewer Title** | |
| **Review Type** | ☐ Monthly Routine ☐ Quarterly ☐ Post-Incident ☐ Ad-hoc |

---

## Section 2: Scope of Review

### Systems Reviewed

**Systems/applications included in this review:**

| System/Application | Environment | Privileged Account Types | Number of Accounts |
|-------------------|-------------|-------------------------|-------------------|
| | ☐ Production ☐ Test ☐ Dev | ☐ Admin ☐ Root ☐ DBA ☐ Other | |
| | ☐ Production ☐ Test ☐ Dev | ☐ Admin ☐ Root ☐ DBA ☐ Other | |
| | ☐ Production ☐ Test ☐ Dev | ☐ Admin ☐ Root ☐ DBA ☐ Other | |
| | ☐ Production ☐ Test ☐ Dev | ☐ Admin ☐ Root ☐ DBA ☐ Other | |
| | ☐ Production ☐ Test ☐ Dev | ☐ Admin ☐ Root ☐ DBA ☐ Other | |

**Total privileged accounts reviewed:** _____

---

## Section 3: Privileged Account Inventory

### Individual Privileged Accounts

For each user with privileged access, complete the following:

---

#### Account 1

| Field | Information |
|-------|-------------|
| **User Name** | |
| **User Email** | |
| **Department** | |
| **Job Title** | |
| **Account Username** | (privileged account ID) |
| **System** | |
| **Privilege Type** | ☐ Domain Admin ☐ Local Admin ☐ DBA ☐ Root/Sudo ☐ Cloud Admin ☐ Security Admin ☐ Network Admin ☐ Other: _____ |
| **Environment** | ☐ Production ☐ Test ☐ Development ☐ All |

**Access Details:**

- **Granted Date:** __________
- **Granted By:** __________
- **Last Review Date:** __________
- **Expiry Date (if temporary):** __________

**Activity:**

- **Last Login:** __________
- **Last Privileged Action:** __________
- **Login Frequency:** ☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

**Review Checks:**

| Check | Pass | Fail | N/A | Notes |
|-------|------|------|-----|-------|
| **Business justification still valid?** | ☐ | ☐ | ☐ | |
| **User still in same role?** | ☐ | ☐ | ☐ | |
| **MFA enabled and working?** | ☐ | ☐ | ☐ | |
| **Account actively used?** | ☐ | ☐ | ☐ | |
| **No suspicious activity?** | ☐ | ☐ | ☐ | |
| **Appropriate for job duties?** | ☐ | ☐ | ☐ | |
| **No segregation conflicts?** | ☐ | ☐ | ☐ | |
| **Manager approval current (<12 months)?** | ☐ | ☐ | ☐ | |
| **CISO approval current (<12 months)?** | ☐ | ☐ | ☐ | |
| **Security training completed?** | ☐ | ☐ | ☐ | |

**Decision:**

- ☐ **Retain** - Access still required, all checks passed
- ☐ **Retain with Re-approval** - Require new approval from manager/CISO
- ☐ **Modify** - Reduce privilege level or scope
- ☐ **Revoke** - Access no longer required
- ☐ **Investigate** - Suspicious activity or concerns

**Action Required:**

```
[Specify any action needed]



```

---

#### Account 2

| Field | Information |
|-------|-------------|
| **User Name** | |
| **User Email** | |
| **Department** | |
| **Job Title** | |
| **Account Username** | (privileged account ID) |
| **System** | |
| **Privilege Type** | ☐ Domain Admin ☐ Local Admin ☐ DBA ☐ Root/Sudo ☐ Cloud Admin ☐ Security Admin ☐ Network Admin ☐ Other: _____ |
| **Environment** | ☐ Production ☐ Test ☐ Development ☐ All |

**Access Details:**

- **Granted Date:** __________
- **Granted By:** __________
- **Last Review Date:** __________
- **Expiry Date (if temporary):** __________

**Activity:**

- **Last Login:** __________
- **Last Privileged Action:** __________
- **Login Frequency:** ☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

**Review Checks:**

| Check | Pass | Fail | N/A | Notes |
|-------|------|------|-----|-------|
| **Business justification still valid?** | ☐ | ☐ | ☐ | |
| **User still in same role?** | ☐ | ☐ | ☐ | |
| **MFA enabled and working?** | ☐ | ☐ | ☐ | |
| **Account actively used?** | ☐ | ☐ | ☐ | |
| **No suspicious activity?** | ☐ | ☐ | ☐ | |
| **Appropriate for job duties?** | ☐ | ☐ | ☐ | |
| **No segregation conflicts?** | ☐ | ☐ | ☐ | |
| **Manager approval current (<12 months)?** | ☐ | ☐ | ☐ | |
| **CISO approval current (<12 months)?** | ☐ | ☐ | ☐ | |
| **Security training completed?** | ☐ | ☐ | ☐ | |

**Decision:**

- ☐ **Retain** - Access still required, all checks passed
- ☐ **Retain with Re-approval** - Require new approval from manager/CISO
- ☐ **Modify** - Reduce privilege level or scope
- ☐ **Revoke** - Access no longer required
- ☐ **Investigate** - Suspicious activity or concerns

**Action Required:**

```
[Specify any action needed]



```

---

*Continue for all privileged accounts. Attach additional sheets if necessary.*

---

## Section 4: Shared and Service Accounts

### Shared Administrative Accounts

**Shared accounts with privileged access (should be minimal):**

| Account Name | System | Purpose | Users with Access | Last Review | Still Required? |
|--------------|--------|---------|------------------|-------------|-----------------|
| | | | | | ☐ Yes ☐ No |
| | | | | | ☐ Yes ☐ No |
| | | | | | ☐ Yes ☐ No |

**Action for shared accounts:**

- ☐ No shared administrative accounts (ideal)
- ☐ Shared accounts justified and documented
- ☐ Plan to eliminate shared accounts: _______________________

---

### Service Accounts

**Service accounts with privileged access:**

| Account Name | System | Service/Application | Privilege Level | Owner | Last Review |
|--------------|--------|-------------------|----------------|-------|-------------|
| | | | | | |
| | | | | | |
| | | | | | |

**Service account review:**

| Check | Count/Status |
|-------|--------------|
| **Service accounts with valid business purpose** | |
| **Service accounts with documented owner** | |
| **Service accounts with complex passwords** | |
| **Service accounts with password rotation** | |
| **Service accounts with activity monitoring** | |
| **Orphaned service accounts (no owner)** | |

---

## Section 5: Review Summary

### Summary Statistics

| Metric | Count | Notes |
|--------|-------|-------|
| **Total privileged accounts** | | |
| **Accounts reviewed** | | |
| **Accounts retained (no change)** | | |
| **Accounts requiring re-approval** | | |
| **Accounts to be modified** | | |
| **Accounts to be revoked** | | |
| **Accounts flagged for investigation** | | |
| **Shared admin accounts** | | |
| **Service accounts** | | |

---

### Issues Identified

| Issue Type | Count | Severity | Action Plan |
|------------|-------|----------|-------------|
| Inactive accounts (no recent login) | | ☐ High ☐ Med ☐ Low | |
| Missing MFA | | ☐ High ☐ Med ☐ Low | |
| Expired approvals (>12 months) | | ☐ High ☐ Med ☐ Low | |
| Role changes not reflected | | ☐ High ☐ Med ☐ Low | |
| Segregation of duties conflicts | | ☐ High ☐ Med ☐ Low | |
| Suspicious activity patterns | | ☐ High ☐ Med ☐ Low | |
| Excessive privileges | | ☐ High ☐ Med ☐ Low | |
| Temporary access not expired | | ☐ High ☐ Med ☐ Low | |
| Missing security training | | ☐ High ☐ Med ☐ Low | |
| Other: | | ☐ High ☐ Med ☐ Low | |

**Total issues identified:** _____

**Critical/High severity issues:** _____

---

### Critical Findings

**Any critical security concerns requiring immediate action?**

- ☐ No critical findings
- ☐ Yes (detail below)

**Critical findings:**

```
[Describe critical findings and immediate actions taken]






```

---

## Section 6: Activity Analysis

### Login and Usage Patterns

**Accounts with no login in past 30 days:**

| User | System | Last Login | Justification (if retained) | Action |
|------|--------|------------|---------------------------|--------|
| | | | | ☐ Retain ☐ Disable ☐ Revoke |
| | | | | ☐ Retain ☐ Disable ☐ Revoke |
| | | | | ☐ Retain ☐ Disable ☐ Revoke |

---

### Anomalous Activity

**Unusual or suspicious privileged activity detected:**

| User | System | Activity | Date/Time | Investigated? | Legitimate? |
|------|--------|----------|-----------|---------------|-------------|
| | | | | ☐ Yes ☐ No | ☐ Yes ☐ No ☐ Under Review |
| | | | | ☐ Yes ☐ No | ☐ Yes ☐ No ☐ Under Review |

**Follow-up actions for anomalous activity:**

```
[Describe investigation or follow-up actions]




```

---

## Section 7: Compliance Checks

### Security Control Verification

| Control | Compliance Status | Notes |
|---------|------------------|-------|
| **All privileged accounts have MFA** | ☐ 100% ☐ Most ☐ Some ☐ None | |
| **All privileged access approved (Manager + CISO)** | ☐ 100% ☐ Most ☐ Some ☐ None | |
| **Approvals renewed within 12 months** | ☐ 100% ☐ Most ☐ Some ☐ None | |
| **Privileged access logging enabled** | ☐ 100% ☐ Most ☐ Some ☐ None | |
| **Session recording (where applicable)** | ☐ 100% ☐ Most ☐ Some ☐ None | |
| **Strong password policy enforced** | ☐ 100% ☐ Most ☐ Some ☐ None | |
| **Security awareness training completed** | ☐ 100% ☐ Most ☐ Some ☐ None | |
| **No shared administrative credentials** | ☐ Yes ☐ No (exceptions documented) | |

**Overall compliance level:**

- ☐ **Excellent** (>95% compliant)
- ☐ **Good** (90-95% compliant)
- ☐ **Needs Improvement** (80-89% compliant)
- ☐ **Poor** (<80% compliant)

---

## Section 8: Actions Required

### Immediate Actions (Within 24 Hours)

| User/Account | System | Action | Reason | Assigned To |
|--------------|--------|--------|--------|-------------|
| | | ☐ Revoke ☐ Disable ☐ Investigate | | |
| | | ☐ Revoke ☐ Disable ☐ Investigate | | |
| | | ☐ Revoke ☐ Disable ☐ Investigate | | |

---

### Short-Term Actions (Within 7 Days)

| User/Account | System | Action | Reason | Assigned To |
|--------------|--------|--------|--------|-------------|
| | | ☐ Modify ☐ Re-approve ☐ Enable MFA ☐ Training | | |
| | | ☐ Modify ☐ Re-approve ☐ Enable MFA ☐ Training | | |
| | | ☐ Modify ☐ Re-approve ☐ Enable MFA ☐ Training | | |

---

### Follow-Up Actions (Within 30 Days)

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| | | | ☐ Open ☐ In Progress ☐ Complete |
| | | | ☐ Open ☐ In Progress ☐ Complete |
| | | | ☐ Open ☐ In Progress ☐ Complete |

---

## Section 9: Recommendations

### Process Improvements

**Recommendations to improve privileged access management:**

```
[Suggest improvements to processes, tools, or controls]








```

---

### Policy or Procedure Updates

**Suggested updates to policies or procedures:**

```
[Recommend policy or procedure changes based on review findings]




```

---

## Section 10: Reviewer Certification

### Reviewer Attestation

I certify that:

- ☐ I have reviewed all privileged accounts in scope
- ☐ Business justifications have been verified
- ☐ Account activity has been analyzed
- ☐ Security controls have been checked
- ☐ All issues have been documented
- ☐ Required actions have been assigned
- ☐ Critical issues have been escalated
- ☐ This review is complete and accurate

**Reviewer comments:**

```
[Additional observations or concerns]




```

---

### Reviewer Sign-Off

| **Reviewer Name** | |
| **Reviewer Title** | |
| **Signature** | |
| **Date** | |

---

### CISO Acknowledgment

| **CISO Name** | |
| **Review Date** | |
| **Signature** | |
| **Date** | |

---

## Section 11: Follow-Up and Next Review

### Implementation Tracking

**Action implementation status:**

| Action Type | Assigned | Completed | Completion % |
|-------------|----------|-----------|--------------|
| **Immediate (24h)** | | | % |
| **Short-term (7d)** | | | % |
| **Long-term (30d)** | | | % |

**All actions completed?** ☐ Yes ☐ No (follow-up required)

---

### Next Review

| Field | Information |
|-------|-------------|
| **Next Review Type** | ☐ Monthly ☐ Quarterly ☐ Post-Incident |
| **Next Review Due** | |
| **Responsible Reviewer** | |

---

## Document Control

| Version | Date | Reviewer | Changes |
|---------|------|----------|---------|
| 1.0 | | | Initial review |

---

## Quick Reference - Privileged Access Red Flags

**Immediate attention required if:**

- ☐ Privileged access without CISO approval
- ☐ MFA not enabled on privileged account
- ☐ User left company but privileged access still active
- ☐ Suspicious login patterns (unusual times, locations, frequency)
- ☐ Failed privileged operations (repeated failed attempts)
- ☐ Segregation of duties violation (e.g., developer + production DBA)
- ☐ Shared administrative passwords
- ☐ Privileged account inactive >90 days
- ☐ Production access for non-operations staff without justification
- ☐ External/contractor with privileged access beyond engagement end date

---

## Quick Reference - Review Checklist Summary

| System | Total Privileged Accounts | Reviewed | Retained | Modified | Revoked | Issues |
|--------|-------------------------|----------|----------|----------|---------|--------|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| **TOTALS** | | | | | | |

---

## Notes

```
[Additional notes or observations]






```

---

## Contact Information

**For privileged access review questions:**
- **CISO:** [Contact details]
- **IT Security:** security@swedwise.se
- **IT Operations:** support@swedwise.se
