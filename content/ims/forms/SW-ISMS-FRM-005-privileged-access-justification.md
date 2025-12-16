---
document_id: SW-ISMS-FRM-005
title: Privileged Access Justification Form
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
  - SW-ISMS-POL-002
---

# Privileged Access Justification Form

## Purpose

This form is used to request and justify privileged (administrative or elevated) access to systems, applications, or data. Privileged access carries significant security risk and requires enhanced scrutiny, approval, and monitoring.

## Instructions

1. **Requester** completes Sections 1-4 with detailed justification
2. **Submit** to line manager AND CISO (both approvals required)
3. **CISO** conducts risk assessment and approves/rejects
4. **IT** provisions access with enhanced security controls
5. **Monthly review** of all privileged access by CISO
6. **Immediate revocation** when no longer needed

**Important:** Privileged access is granted on a need-to-use basis, not need-to-have. Just-in-time access should be used where possible.

---

## Section 1: Requester Information

| Field | Information |
|-------|-------------|
| **Request Date** | |
| **User Name** | |
| **Employee ID** | |
| **Department/Team** | |
| **Job Title** | |
| **Current Role** | |
| **Email** | |
| **Phone** | |

---

## Section 2: Privileged Access Details

### System/Application

| Field | Information |
|-------|-------------|
| **System/Application Name** | |
| **System Owner** | |
| **System Classification** | ☐ Public ☐ Internal ☐ Confidential ☐ Restricted |
| **Environment** | ☐ Production ☐ Test ☐ Development ☐ All |

---

### Privileged Access Type

**Select the type of privileged access required** (check all that apply):

- ☐ **Domain Administrator** (Active Directory/Entra ID admin rights)
- ☐ **Local Administrator** (server/workstation admin rights)
- ☐ **Database Administrator** (database admin/DBA privileges)
- ☐ **Cloud Administrator** (Azure/AWS/GCP admin console)
- ☐ **Application Administrator** (application admin panel)
- ☐ **Network Administrator** (firewall, router, switch configuration)
- ☐ **Security Administrator** (security tools, SIEM, EDR admin)
- ☐ **Backup Administrator** (backup system admin rights)
- ☐ **Root/Superuser Access** (Unix/Linux root, sudo access)
- ☐ **Production Data Access** (direct production database/file access)
- ☐ **Source Code Repository Admin** (Git admin, branch protection override)
- ☐ **CI/CD Pipeline Admin** (build/deployment pipeline admin)
- ☐ **Other Privileged Access** (specify): _______________________

**Specific Privileges Required:**

```
[List exact administrative functions, commands, or operations required]








```

---

## Section 3: Business Justification

### Primary Business Need

**Why is privileged access required?** (select primary reason):

- ☐ System administration duties (core job responsibility)
- ☐ Application support and maintenance
- ☐ Security operations and incident response
- ☐ Database administration and tuning
- ☐ Development/deployment operations (DevOps)
- ☐ Infrastructure management
- ☐ Troubleshooting and problem resolution
- ☐ Compliance audit requirements
- ☐ Emergency/incident response capability
- ☐ Temporary project requirement
- ☐ Vendor/consultant engagement
- ☐ Other (explain): _______________________

**Detailed Business Justification:**

```
[Provide comprehensive explanation of why this privileged access is necessary
Include specific tasks, responsibilities, and business processes that require it]












```

---

### Duration and Frequency

**How long is this access needed?**

- ☐ **Permanent** (ongoing job responsibility)
- ☐ **Temporary** (project-based or time-limited)
  - **Start Date:** _______________
  - **End Date:** _______________
  - **Auto-Revoke:** ☐ Yes ☐ No

**Expected frequency of use:**

- ☐ Daily
- ☐ Weekly
- ☐ Monthly
- ☐ As-needed (infrequent)
- ☐ Emergency use only

**Estimated percentage of time using privileged access:** _______%

---

## Section 4: Risk Assessment and Alternatives

### Alternative Solutions Considered

**Can the business need be met with any of the following instead?**

| Alternative | Considered | Why Not Suitable? |
|-------------|------------|-------------------|
| **Non-privileged access** | ☐ Yes ☐ No | |
| **Read-only access** | ☐ Yes ☐ No | |
| **Delegated permissions** | ☐ Yes ☐ No | |
| **Just-in-time (JIT) access** | ☐ Yes ☐ No | |
| **Break-glass procedure** | ☐ Yes ☐ No | |
| **Automation/scripting** | ☐ Yes ☐ No | |
| **Request via IT team** | ☐ Yes ☐ No | |

**Explanation of why privileged access is the only viable option:**

```
[Explain why less privileged alternatives cannot meet the business need]








```

---

### Segregation of Duties

**Does this user have any conflicting access or roles?**

- ☐ No conflicts identified
- ☐ Potential conflicts exist (detail below)

**Current access and roles:**

| System/Application | Current Access Level | Potential Conflict? |
|-------------------|---------------------|-------------------|
| | | ☐ Yes ☐ No |
| | | ☐ Yes ☐ No |
| | | ☐ Yes ☐ No |

**If conflicts exist, how will they be mitigated?**

```
[Describe compensating controls, monitoring, or approval workflows]





```

---

## Section 5: Manager Approval

### Line Manager Review

| Field | Information |
|-------|-------------|
| **Manager Name** | |
| **Manager Title** | |
| **Review Date** | |

**Manager Assessment:**

I confirm that:
- ☐ This privileged access is required for the user's job duties
- ☐ The user has appropriate technical competence
- ☐ The user has completed required security training
- ☐ Less privileged alternatives have been considered
- ☐ I will ensure monthly review of this access

**Approval Decision:**

- ☐ **Approved** - Recommend granting privileged access
- ☐ **Approved with Conditions** (specify): _______________________
- ☐ **Not Approved** (reason): _______________________

**Manager Comments:**

```
[Additional comments or conditions]




```

| **Manager Signature** | | **Date** | |

---

## Section 6: CISO Review and Approval

### Risk Assessment

| Risk Factor | Assessment | Notes |
|-------------|------------|-------|
| **Business Criticality** | ☐ Low ☐ Medium ☐ High ☐ Critical | |
| **Data Sensitivity** | ☐ Low ☐ Medium ☐ High ☐ Critical | |
| **Customer Impact Potential** | ☐ Low ☐ Medium ☐ High | |
| **Compliance Impact** | ☐ None ☐ GDPR ☐ Other | |
| **User's Security Awareness** | ☐ Excellent ☐ Good ☐ Needs Improvement | |
| **Overall Risk Level** | ☐ Low ☐ Medium ☐ High ☐ Very High | |

**Data Access:**

- ☐ Access to customer/personal data: Yes / No
- ☐ Access to financial data: Yes / No
- ☐ Access to intellectual property: Yes / No
- ☐ Access to security credentials: Yes / No

**CISO Assessment:**

```
[CISO's evaluation of the risk and appropriateness of privileged access]








```

---

### Approval Decision

- ☐ **Approved** - Privileged access granted with standard controls
- ☐ **Approved with Enhanced Controls** (see below)
- ☐ **Approved - Temporary Only** (review date: _______)
- ☐ **Not Approved** (provide detailed reason below)

**If approved with enhanced controls, specify:**

```
[Detail additional security measures required]




```

---

### Required Security Controls

**Standard controls** (always required):

- ☐ Multi-factor authentication (MFA) mandatory
- ☐ Privileged Access Workstation (PAW) or hardened device
- ☐ Enhanced logging and monitoring
- ☐ Monthly access review
- ☐ Annual security awareness training
- ☐ Acceptable Use Policy signed

**Additional controls** (if required):

- ☐ Just-in-time (JIT) access only - request per use
- ☐ Session recording for audit trail
- ☐ Dual-person authorization for sensitive operations
- ☐ IP/location restrictions
- ☐ Time-of-day restrictions
- ☐ Explicit command logging
- ☐ Approval workflow for critical actions
- ☐ Dedicated privileged account (no shared use)
- ☐ Change advisory board approval for production changes
- ☐ Other: _______________________

---

### Review and Monitoring

| Field | Information |
|-------|-------------|
| **Access Review Frequency** | ☐ Weekly ☐ Monthly ☐ Quarterly |
| **Next Review Date** | |
| **Monitoring Level** | ☐ Standard ☐ Enhanced ☐ Continuous |
| **Automated Alerts** | ☐ Enabled ☐ Not Required |

**Specific monitoring requirements:**

```
[Detail any specific activities or patterns to monitor]




```

| **CISO Signature** | | **Date** | |

---

## Section 7: IT Implementation

### Provisioning Details

| Field | Information |
|-------|-------------|
| **Implemented By** | |
| **Implementation Date** | |
| **Privileged Account Created** | |
| **Account Username** | |
| **Account Type** | ☐ Named Admin ☐ Shared Admin ☐ Service Account |

**Access Granted:**

| System | Privilege Level | Groups/Roles | MFA Configured |
|--------|----------------|--------------|----------------|
| | | | ☐ Yes ☐ No |
| | | | ☐ Yes ☐ No |
| | | | ☐ Yes ☐ No |

**Security Controls Implemented:**

- ☐ MFA configured and tested
- ☐ PAW/hardened device assigned
- ☐ Enhanced logging enabled
- ☐ Monitoring alerts configured
- ☐ Session recording enabled (if required)
- ☐ Access restrictions applied (IP, time, etc.)
- ☐ User notified of responsibilities
- ☐ Acceptable use policy re-acknowledged
- ☐ Usage guidance provided

**Implementation Notes:**

```
[Any special configuration or issues]




```

---

### User Acknowledgment

**I acknowledge and agree to:**

- ☐ Use privileged access only for authorized business purposes
- ☐ Follow the principle of least privilege
- ☐ Not share privileged credentials with anyone
- ☐ Use MFA for all privileged sessions
- ☐ Log out immediately after completing administrative tasks
- ☐ Report any suspicious activity or security concerns
- ☐ Comply with all security policies and procedures
- ☐ Understand that privileged activity is logged and monitored
- ☐ Accept that violations may result in immediate access revocation and disciplinary action

| **User Signature** | | **Date** | |

---

## Section 8: Ongoing Review and Modification

### Monthly Review Log

| Review Date | Reviewed By | Still Required? | Changes Made | Next Review |
|-------------|-------------|-----------------|--------------|-------------|
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |

---

### Access Modification/Revocation

| Date | Action | Reason | Approved By |
|------|--------|--------|-------------|
| | ☐ Modified ☐ Suspended ☐ Revoked | | |
| | ☐ Modified ☐ Suspended ☐ Revoked | | |

**Revocation Checklist:**

- ☐ Privileged account disabled/deleted
- ☐ Group memberships removed
- ☐ MFA tokens revoked
- ☐ PAW/device access removed
- ☐ Session recordings archived
- ☐ Final activity audit completed
- ☐ User notified

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial request |

---

## Quick Reference - Privileged Access Types

| Access Type | Examples | Typical Users | Risk Level |
|-------------|----------|---------------|------------|
| **Domain Admin** | Active Directory, Entra ID admin | IT Admin, Senior SysAdmin | Very High |
| **Cloud Admin** | Azure Owner, AWS Root | Cloud Architect, IT Manager | Very High |
| **Database Admin** | SA, postgres superuser | DBA, Senior Developer | High |
| **Production Access** | Prod server login, prod DB query | DevOps, Support Engineer | High |
| **Application Admin** | App admin console, config changes | App Owner, Senior Developer | Medium-High |
| **Security Admin** | SIEM, EDR, firewall admin | CISO, Security Analyst | Very High |

---

## Notes

```
[Additional notes or special circumstances]






```

---

## Contact Information

**For privileged access questions:**
- **CISO:** [Contact details]
- **IT Security:** security@swedwise.se
- **IT Operations:** support@swedwise.se
