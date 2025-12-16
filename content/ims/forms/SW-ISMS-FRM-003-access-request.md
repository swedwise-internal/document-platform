---
document_id: SW-ISMS-FRM-003
title: Access Request Form
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
  - SW-ISMS-POL-002
---

# Access Request Form

## Purpose

This form is used to request access to Swedwise systems, applications, or data. All access requests must be justified, approved, and documented in accordance with the principle of least privilege.

## Instructions

1. **Requester** completes Sections 1-3
2. **Submit** to your line manager for approval
3. **Manager** reviews and approves/rejects in Section 4
4. **IT/CISO** provisions access and completes Section 5
5. **Retain** completed form in personnel/access management records

**Note:** Privileged access (admin rights, production access, database access) requires additional CISO approval.

---

## Section 1: Requester Information

| Field | Information |
|-------|-------------|
| **Request Date** | |
| **Requester Name** | |
| **Employee ID** | |
| **Department/Team** | |
| **Job Title** | |
| **Email** | |
| **Phone** | |

---

## Section 2: Access Details

### System/Application Access Requested

| Field | Information |
|-------|-------------|
| **System/Application Name** | |
| **System Owner** | |
| **Environment** | ☐ Production ☐ Test ☐ Development ☐ Other: ______ |

---

### Access Level Requested

**Standard Access Types:**

- ☐ **Read-Only**: View data/information only
- ☐ **Standard User**: Normal business user access
- ☐ **Power User**: Advanced features, reporting, configuration
- ☐ **Privileged/Admin**: Administrative or elevated privileges
- ☐ **System/Service Account**: Automated service or integration

**Specific Access Required:**

Please specify exactly what access is needed (modules, functions, data sets, etc.):

```
[Describe specific access requirements]







```

---

### Access Duration

**Duration of Access:**

- ☐ **Permanent** (standard role-based access)
- ☐ **Temporary** (project-based, time-limited)
  - **Start Date:** _______________
  - **End Date:** _______________
  - **Auto-Revoke on End Date:** ☐ Yes ☐ No

---

## Section 3: Justification

### Business Justification

**Why is this access required?**

- ☐ New hire - standard role access
- ☐ Job role change/promotion
- ☐ Project requirement (specify project): _______________________
- ☐ Customer support requirement
- ☐ System administration duties
- ☐ Development/testing purposes
- ☐ Temporary coverage for colleague
- ☐ Business need (explain below)

**Detailed Justification:**

```
[Explain the business need for this access and how it will be used]








```

**Alternative Access Considered:**

Can the business need be met with less privileged access? If not, why not?

```
[Explain why this level of access is necessary]





```

---

## Section 4: Manager Approval

### Line Manager Review

| Field | Information |
|-------|-------------|
| **Manager Name** | |
| **Manager Title** | |
| **Review Date** | |

**Approval Decision:**

- ☐ **Approved** - I confirm this access is required for business purposes
- ☐ **Approved with Conditions** (specify): _______________________
- ☐ **Rejected** (provide reason): _______________________

**Manager Comments:**

```
[Additional comments or conditions]




```

| **Manager Signature** | | **Date** | |

---

## Section 5: CISO Approval (Privileged Access Only)

**Required for:**
- Administrative/root access
- Production system access (for non-operations staff)
- Database administrator access
- Source code repository admin access
- Security system access
- Access to customer data outside normal job duties

| Field | Information |
|-------|-------------|
| **CISO Review Date** | |

**Risk Assessment:**

| Risk Factor | Assessment |
|-------------|------------|
| **Data Classification** | ☐ Public ☐ Internal ☐ Confidential ☐ Restricted |
| **Customer Data Access** | ☐ Yes ☐ No |
| **Regulatory Considerations** | ☐ None ☐ GDPR ☐ Other: ______ |
| **Segregation of Duties** | ☐ No conflicts ☐ Conflicts identified ☐ Mitigated |

**Approval Decision:**

- ☐ **Approved** - Privileged access justified and risk acceptable
- ☐ **Approved with Additional Controls** (specify): _______________________
- ☐ **Rejected** (provide reason): _______________________

**Additional Controls/Conditions:**

```
[Specify any additional security controls, monitoring, or time limits]




```

| **CISO Signature** | | **Date** | |

---

## Section 6: IT Implementation

### Access Provisioning

| Field | Information |
|-------|-------------|
| **Implemented By** | |
| **Implementation Date** | |
| **User Account Created/Modified** | |
| **Username** | |

**Access Granted:**

| System/Application | Access Level | Groups/Roles Assigned | Effective Date |
|-------------------|--------------|----------------------|----------------|
| | | | |
| | | | |
| | | | |

**Multi-Factor Authentication:**

- ☐ MFA enabled (required for privileged access)
- ☐ MFA not required for this access type
- ☐ MFA to be configured by user

**Security Measures Applied:**

- ☐ Strong password policy enforced
- ☐ Access logging enabled
- ☐ Session timeout configured
- ☐ IP/location restrictions applied
- ☐ Additional monitoring enabled
- ☐ None required

**User Notified:**

- ☐ User notified of access grant
- ☐ Login instructions provided
- ☐ Security awareness reminder sent
- ☐ Terms of use acknowledged

---

### Review Schedule

For ongoing access:

| Review Type | Frequency | Next Review Date |
|-------------|-----------|------------------|
| **User Access Review** | Quarterly | |
| **Privileged Access Review** | Monthly | |

For temporary access:

- **Auto-Revoke Date:** _______________
- **Reminder Sent to Manager:** ☐ Yes (Date: _____)

---

## Section 7: Access Modification/Revocation

**Access Changes:**

| Date | Change Type | Changed By | Reason | Approval |
|------|-------------|------------|--------|----------|
| | ☐ Modified ☐ Suspended ☐ Revoked | | | |
| | ☐ Modified ☐ Suspended ☐ Revoked | | | |

**Revocation Checklist** (when access is removed):

- ☐ User account disabled/deleted
- ☐ Group memberships removed
- ☐ Authentication credentials revoked
- ☐ Physical access cards updated (if applicable)
- ☐ VPN/remote access disabled
- ☐ Shared accounts updated
- ☐ Access removal confirmed

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial request |

---

## Quick Reference - Approval Requirements

| Access Type | Manager Approval | CISO Approval | Review Frequency |
|-------------|------------------|---------------|------------------|
| **Standard User** | Required | Not required | Quarterly |
| **Power User** | Required | Not required | Quarterly |
| **Production Access** | Required | Required | Monthly |
| **Administrator** | Required | Required | Monthly |
| **Database Access** | Required | Required | Monthly |
| **Customer Data** | Required | Case-by-case | Monthly |
| **Temporary (<30 days)** | Required | If privileged | At expiry |

---

## Common Access Scenarios

### New Employee
- Standard role-based access
- Manager approval required
- CISO approval only if privileged access needed
- Review at 90 days, then quarterly

### Role Change
- Request new access with this form
- Remove old access (separate revocation)
- Manager approval for new role
- CISO approval if privilege level increases

### Temporary Project Access
- Specify exact start and end dates
- Set auto-revoke if possible
- Document project justification
- Review at project completion

### System Administrator
- Detailed justification required
- CISO approval mandatory
- MFA required
- Monthly access review
- Activity logging and monitoring

---

## Notes

```
[Additional notes or special circumstances]






```

---

## Contact Information

**For access request questions:**
- **IT Support:** support@swedwise.se
- **CISO:** [Contact details]
- **HR (for new hires):** [Contact details]
