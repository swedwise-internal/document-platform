---
document_id: SW-ISMS-FRM-008
title: Asset Registration Form
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
  - SW-ISMS-PRO-003
  - SW-ISMS-POL-001
  - SW-ISMS-REG-001
---

# Asset Registration Form

## Purpose

This form is used to register new information assets in Swedwise's asset inventory, ensuring all assets are properly identified, classified, owned, and protected throughout their lifecycle.

## Instructions

1. **Complete this form** when acquiring or creating a new information asset
2. **Submit to** IT Operations or CISO for review
3. **Asset Owner** confirms accuracy and accepts responsibility
4. **IT/CISO** assigns Asset ID and adds to central register
5. **Review annually** or when asset status changes
6. **Update** classification or ownership as needed

---

## Section 1: Asset Identification

| Field | Information |
|-------|-------------|
| **Asset ID** | (Auto-assigned by IT/CISO) |
| **Registration Date** | |
| **Registered By** | |

---

### Asset Basic Information

| Field | Information |
|-------|-------------|
| **Asset Name** | |
| **Asset Type** | ☐ Hardware ☐ Software ☐ Data ☐ Service ☐ Document ☐ Other |
| **Description** | |
| | |
| **Version/Model** | |
| **Serial Number** (if applicable) | |
| **License Key/ID** (if applicable) | |

---

### Asset Type Details

**For Hardware Assets:**
- ☐ Server (physical/virtual)
- ☐ Network device (router, switch, firewall)
- ☐ Workstation/laptop
- ☐ Mobile device (phone, tablet)
- ☐ Storage device (NAS, SAN)
- ☐ Backup device
- ☐ Other hardware: _______________________

**For Software Assets:**
- ☐ Operating system
- ☐ Business application
- ☐ Database system
- ☐ Security software
- ☐ Development tool
- ☐ Cloud service/SaaS
- ☐ Other software: _______________________

**For Data Assets:**
- ☐ Database
- ☐ File share/repository
- ☐ Customer data set
- ☐ Employee data
- ☐ Financial data
- ☐ Intellectual property
- ☐ Other data: _______________________

**For Service Assets:**
- ☐ Cloud service (IaaS, PaaS, SaaS)
- ☐ Managed service
- ☐ Support service
- ☐ Professional service
- ☐ Other service: _______________________

---

## Section 2: Asset Classification

### Information Classification

**Classification Level:** (based on confidentiality, integrity, availability)

- ☐ **Public** - No impact if disclosed, freely available
- ☐ **Internal** - Minor impact if disclosed, internal use only
- ☐ **Confidential** - Significant impact if disclosed, restricted access
- ☐ **Restricted** - Severe impact if disclosed, highly restricted access

**Classification Justification:**

```
[Why is this classification appropriate? What type of information does it contain?]





```

**Contains Personal Data (GDPR)?**

- ☐ Yes
- ☐ No

If Yes, specify:
- ☐ Personal data (names, addresses, etc.)
- ☐ Sensitive personal data (health, financial, etc.)
- ☐ Special category data (requires DPO review)

---

### Business Criticality

**Criticality Level:**

- ☐ **Critical** - Essential for business operations, immediate impact if unavailable
- ☐ **High** - Important for business, significant impact within hours
- ☐ **Medium** - Needed for normal operations, impact within days
- ☐ **Low** - Useful but not critical, minimal immediate impact

**Business Impact if Unavailable:**

| Impact Type | None | Low | Medium | High | Critical |
|-------------|------|-----|--------|------|----------|
| **Revenue/Financial** | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Customer Service** | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Operations** | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Reputation** | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Legal/Compliance** | ☐ | ☐ | ☐ | ☐ | ☐ |

**Maximum Acceptable Downtime:**
- ☐ < 1 hour
- ☐ < 4 hours
- ☐ < 24 hours
- ☐ < 1 week
- ☐ > 1 week

---

## Section 3: Ownership and Responsibility

### Asset Owner

| Field | Information |
|-------|-------------|
| **Asset Owner Name** | |
| **Owner Department** | |
| **Owner Title** | |
| **Owner Contact** | Email: __________ Phone: __________ |

**Asset Owner Responsibilities:**
- ☐ Determine appropriate asset classification
- ☐ Define access requirements
- ☐ Approve access requests
- ☐ Review asset annually
- ☐ Approve changes or disposal
- ☐ Report security incidents involving this asset

---

### Asset Custodian (Technical Responsibility)

| Field | Information |
|-------|-------------|
| **Custodian Name** | |
| **Custodian Department** | |
| **Custodian Contact** | Email: __________ Phone: __________ |

**Custodian Responsibilities:**
- ☐ Implement and maintain technical controls
- ☐ Perform backups and maintenance
- ☐ Monitor asset health and security
- ☐ Apply patches and updates
- ☐ Implement access controls per owner requirements

---

## Section 4: Asset Location and Environment

### Physical/Logical Location

| Field | Information |
|-------|-------------|
| **Primary Location** | ☐ Karlstad Office ☐ Stockholm Office ☐ Uddevalla Office ☐ Cloud ☐ Customer Site ☐ Other |
| **Specific Location** | (Room/rack/datacenter/cloud region) |
| **Backup Location** | (If applicable) |

**Environment:**

- ☐ Production
- ☐ Development
- ☐ Test/QA
- ☐ Staging
- ☐ Training/Demo

**Hosting:**

- ☐ On-premises (Swedwise-owned)
- ☐ Colocation/datacenter
- ☐ Cloud (Azure/AWS/GCP)
- ☐ SaaS vendor
- ☐ Managed service provider
- ☐ Customer premises

---

## Section 5: Asset Dependencies

### Depends On (What this asset needs to function)

| Dependent Asset | Type | Criticality | Impact if Unavailable |
|-----------------|------|-------------|----------------------|
| | | | |
| | | | |
| | | | |

---

### Supports (What depends on this asset)

| Supported Asset/Service | Type | Criticality | Impact if This Asset Unavailable |
|------------------------|------|-------------|----------------------------------|
| | | | |
| | | | |
| | | | |

---

## Section 6: Acquisition and Lifecycle

### Acquisition Information

| Field | Information |
|-------|-------------|
| **Acquisition Date** | |
| **Acquisition Method** | ☐ Purchase ☐ Lease ☐ Subscription ☐ Donation ☐ Developed In-House |
| **Supplier/Vendor** | |
| **Purchase Order #** | |
| **Asset Value** | SEK ___________ |

**License/Subscription Details** (if applicable):

| Field | Information |
|-------|-------------|
| **License Type** | ☐ Perpetual ☐ Subscription ☐ Open Source ☐ Trial |
| **Number of Licenses** | |
| **License Expiry Date** | |
| **Renewal Date** | |
| **Annual Cost** | SEK ___________ |

---

### Lifecycle Dates

| Lifecycle Stage | Date |
|----------------|------|
| **Planned Deployment** | |
| **Actual Deployment** | |
| **Planned Review Date** | |
| **Planned Retirement Date** | |
| **End of Support Date** (vendor) | |
| **End of Life Date** (vendor) | |

---

## Section 7: Security Controls

### Required Security Controls

Based on classification and criticality, check applicable controls:

**Access Controls:**
- ☐ Authentication required
- ☐ Multi-factor authentication (MFA)
- ☐ Role-based access control (RBAC)
- ☐ Privileged access management (PAM)
- ☐ Access logging and monitoring

**Data Protection:**
- ☐ Encryption at rest
- ☐ Encryption in transit
- ☐ Data backup required
- ☐ Data loss prevention (DLP)
- ☐ Data retention policy applied

**Network Security:**
- ☐ Firewall protection
- ☐ Network segmentation
- ☐ Intrusion detection/prevention
- ☐ VPN access only
- ☐ IP whitelisting

**Monitoring and Logging:**
- ☐ Security monitoring
- ☐ Audit logging enabled
- ☐ Log retention (specify period): _______
- ☐ Alerting configured
- ☐ SIEM integration

**Physical Security:**
- ☐ Physical access controls
- ☐ Environmental controls (cooling, power)
- ☐ Surveillance/monitoring
- ☐ Secure disposal required

**Other Controls:**
- ☐ Anti-malware protection
- ☐ Patch management
- ☐ Vulnerability scanning
- ☐ Configuration management
- ☐ Change control required

---

### Backup and Recovery

| Field | Information |
|-------|-------------|
| **Backup Required?** | ☐ Yes ☐ No |
| **Backup Frequency** | ☐ Real-time ☐ Hourly ☐ Daily ☐ Weekly ☐ Monthly |
| **Backup Retention** | |
| **Backup Location** | ☐ Local ☐ Cloud ☐ Offsite |
| **Recovery Time Objective (RTO)** | |
| **Recovery Point Objective (RPO)** | |
| **Last Backup Test Date** | |

---

## Section 8: Compliance and Standards

### Regulatory and Compliance Requirements

**Applicable regulations/standards:**

- ☐ GDPR (data protection)
- ☐ ISO 27001 (information security)
- ☐ ISO 9001 (quality management)
- ☐ Financial regulations (specify): _______
- ☐ Industry standards (specify): _______
- ☐ Customer contractual requirements
- ☐ Other: _______________________

**Compliance Controls Required:**

```
[Specify any specific compliance controls or requirements]




```

---

## Section 9: Integration and Connections

### Network Connections

| Connected System | Connection Type | Protocol | Security Controls |
|-----------------|----------------|----------|-------------------|
| | ☐ Internal ☐ External | | |
| | ☐ Internal ☐ External | | |
| | ☐ Internal ☐ External | | |

---

### Data Flows

**Inbound Data:**

| Data Source | Data Type | Classification | Volume |
|-------------|-----------|----------------|--------|
| | | | |
| | | | |

**Outbound Data:**

| Data Destination | Data Type | Classification | Volume |
|-----------------|-----------|----------------|--------|
| | | | |
| | | | |

---

## Section 10: Change History and Review

### Annual Review

| Review Date | Reviewed By | Changes Made | Next Review Date |
|-------------|-------------|--------------|------------------|
| | | | |
| | | | |
| | | | |

---

### Change Log

| Date | Change Type | Description | Authorized By |
|------|-------------|-------------|---------------|
| | ☐ Updated ☐ Moved ☐ Upgraded ☐ Other | | |
| | ☐ Updated ☐ Moved ☐ Upgraded ☐ Other | | |
| | ☐ Updated ☐ Moved ☐ Upgraded ☐ Other | | |

---

## Section 11: Approval and Sign-Off

### Asset Owner Acknowledgment

I acknowledge that I am the Asset Owner and accept responsibility for:
- Determining and maintaining appropriate asset classification
- Approving access to this asset
- Ensuring security controls are appropriate
- Reviewing this asset annually
- Reporting security incidents involving this asset

| **Asset Owner Signature** | | **Date** | |

---

### CISO/IT Approval

Asset registration reviewed and approved:

| Field | Information |
|-------|-------------|
| **Reviewed By** | |
| **Review Date** | |
| **Asset ID Assigned** | |
| **Added to Register** | ☐ Yes (Date: _______) |

**CISO/IT Comments:**

```
[Any security recommendations or concerns]



```

| **Approver Signature** | | **Date** | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial registration |

---

## Quick Reference - Classification Guidelines

| Classification | Examples | Access | Handling |
|---------------|----------|--------|----------|
| **Public** | Marketing materials, public website | Anyone | No special handling |
| **Internal** | Internal memos, meeting notes | Swedwise employees | Standard controls |
| **Confidential** | Customer contracts, salary data | Need-to-know | Encryption, access controls |
| **Restricted** | Authentication credentials, trade secrets | Explicitly authorized | Enhanced encryption, monitoring, DLP |

---

## Quick Reference - Criticality Guidelines

| Criticality | RTO Target | Backup Frequency | Example Assets |
|-------------|------------|------------------|----------------|
| **Critical** | < 1 hour | Real-time/hourly | SaaS production, customer database |
| **High** | < 4 hours | Daily | Email system, CRM, ERP |
| **Medium** | < 24 hours | Daily/weekly | File shares, intranet |
| **Low** | < 1 week | Weekly/monthly | Archive data, development environments |

---

## Notes

```
[Additional notes or special considerations for this asset]






```

---

## Contact Information

**For asset registration questions:**
- **IT Operations:** support@swedwise.se
- **CISO:** [Contact details]
- **Asset Management:** [Contact details]
