---
document_id: SW-ISMS-GUI-001
title: Information Classification Guideline
doc_type: guideline
version: "1.0"
status: draft
classification: internal
owner: TBD (CISO)
effective_date: TBD
review_date: TBD
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001  # Information Security Policy
  - SW-ISMS-PRO-001  # Information Security Management Procedure
  - SW-QMS-PRO-001   # Document Control Procedure
---

# Information Classification Guideline

## Purpose

This guideline provides practical guidance for classifying information assets according to their sensitivity and business value. It helps Swedwise staff make consistent classification decisions and understand the handling requirements for different classification levels.

## Scope

This guideline applies to all information assets created, processed, stored, or transmitted by Swedwise, including:
- Documents and files
- Emails and communications
- Customer data
- Code and technical documentation
- Business information
- SaaS platform data

## Classification Levels Overview

Swedwise uses four classification levels:

| Level | Definition | Example Impact if Disclosed |
|-------|------------|----------------------------|
| **Public** | Information intended for public disclosure | None - publicly available |
| **Internal** | General business information for staff | Minor - no business impact |
| **Confidential** | Sensitive business or customer information | Significant - competitive harm, breach of trust |
| **Restricted** | Highly sensitive, regulated, or critical information | Severe - legal liability, major financial loss |

## Classification Decision Tree

Use this decision tree to determine classification:

```
START: Does the information contain...

├─ Personal data of customers/staff?
│  ├─ YES → Is it sensitive personal data (health, financial, etc.)?
│  │  ├─ YES → RESTRICTED
│  │  └─ NO → CONFIDENTIAL
│  └─ NO → Continue...
│
├─ Customer business information or contract terms?
│  ├─ YES → CONFIDENTIAL (minimum)
│  └─ NO → Continue...
│
├─ Authentication credentials or security controls?
│  ├─ YES → RESTRICTED
│  └─ NO → Continue...
│
├─ Proprietary business information, pricing, or strategy?
│  ├─ YES → CONFIDENTIAL
│  └─ NO → Continue...
│
├─ Already published or intended for public release?
│  ├─ YES → PUBLIC
│  └─ NO → INTERNAL (default)
```

## Classification Examples

### Public

**Examples:**
- Marketing materials and brochures
- Published blog posts and articles
- Public website content
- Press releases
- Product datasheets (non-confidential)
- Job postings
- General company information

**When to Use:**
- Content already published on public channels
- Information intended for public marketing
- No competitive or privacy concerns

### Internal

**Examples:**
- General internal communications
- Meeting agendas (non-sensitive)
- Office procedures and guidelines
- Internal newsletters
- Training schedules
- Non-sensitive project documentation
- Public holiday announcements

**When to Use:**
- General business information
- No customer or competitive sensitivity
- Suitable for all Swedwise staff
- No regulatory or privacy concerns

### Confidential

**Examples:**
- Customer contracts and agreements
- Customer business information and requirements
- Pricing models and quotes
- Business plans and strategies
- Financial reports (internal)
- Salary information
- Customer contact details
- Project documentation containing customer information
- Internal security assessments
- Supplier agreements
- Marketing plans and campaigns
- Employee records (general)
- SaaS platform customer data

**When to Use:**
- Customer-related information (default)
- Competitive business information
- Information subject to NDA
- Information that could harm business if disclosed
- Personal data (non-sensitive)

**Key Rule:** *When in doubt about customer data, classify as Confidential.*

### Restricted

**Examples:**
- Authentication credentials (passwords, API keys, certificates)
- Sensitive personal data (health, financial, ethnic origin)
- Payment card information (PCI data)
- Source code for security-critical systems
- Cryptographic keys
- Security incident details
- Vulnerability reports (unpatched)
- Legal case materials
- M&A information
- Board meeting materials
- SaaS platform infrastructure credentials
- Database connection strings
- Customer encryption keys

**When to Use:**
- Legal or regulatory requirements (GDPR, PCI-DSS)
- Credentials and secrets
- High business impact if disclosed
- Information requiring explicit authorization to access

## Common Data Types and Classification

### Customer Data

| Data Type | Default Classification | Notes |
|-----------|----------------------|-------|
| Customer name, contact details | Confidential | Standard customer data |
| Contract terms, pricing | Confidential | Business sensitive |
| Customer business processes | Confidential | Shared in confidence |
| Customer health/financial data | Restricted | Sensitive personal data |
| Customer user credentials | Restricted | Security-critical |

**Rule:** Customer data is **Confidential by default**. Only downgrade if customer has explicitly made it public.

### SaaS Platform Data

| Data Type | Default Classification | Notes |
|-----------|----------------------|-------|
| Customer documents generated | Confidential | Customer owns the data |
| Platform configuration | Confidential | Customer-specific settings |
| System credentials | Restricted | Infrastructure access |
| Application logs (with customer data) | Confidential | May contain sensitive info |
| Application logs (system only) | Internal | No customer data |
| Monitoring metrics (aggregated) | Internal | No customer identification |
| Source code (application) | Confidential | Business proprietary |
| Security vulnerability details | Restricted | Until patched |

### Employee Data

| Data Type | Default Classification | Notes |
|-----------|----------------------|-------|
| Employee name, work email | Internal | General directory info |
| Personal contact details | Confidential | Privacy protection |
| Salary, benefits | Confidential | Personal sensitive data |
| Performance reviews | Confidential | HR records |
| Health information | Restricted | Sensitive personal data |

### Business Information

| Data Type | Default Classification | Notes |
|-----------|----------------------|-------|
| Published pricing | Public | On website |
| Customer-specific pricing | Confidential | Negotiated terms |
| Financial results (published) | Public | Annual reports |
| Financial results (internal) | Confidential | Pre-publication |
| Strategic plans | Confidential | Competitive sensitive |
| Office procedures | Internal | General guidance |

### Technical Information

| Data Type | Default Classification | Notes |
|-----------|----------------------|-------|
| Public API documentation | Public | Intended for customers |
| Internal API documentation | Internal | Development reference |
| Source code (general) | Confidential | Business proprietary |
| Source code (security-critical) | Restricted | High impact |
| System architecture | Confidential | Security-relevant |
| Infrastructure credentials | Restricted | Security-critical |
| Configuration files (no secrets) | Internal | Development reference |
| Configuration files (with secrets) | Restricted | Contains credentials |

## Handling Requirements by Classification Level

### Public

**Storage:**
- No restrictions
- May be stored on public systems

**Transmission:**
- No encryption required
- May use unencrypted email

**Access Control:**
- No access controls required
- Available to anyone

**Disposal:**
- No secure disposal required
- Standard deletion or recycling

**Labeling:**
- Optional: "Public" marking

### Internal

**Storage:**
- Store on approved Swedwise systems
- Not on personal devices (unless encrypted)
- Not on unauthorized cloud services

**Transmission:**
- Email within Swedwise domain (no encryption required)
- External transmission requires encryption (HTTPS, encrypted email)

**Access Control:**
- Available to all Swedwise staff
- Not shared externally without approval

**Disposal:**
- Standard deletion
- Paper documents may be recycled

**Labeling:**
- Optional: "Internal" marking
- Email footer: "This email is intended for Swedwise staff"

### Confidential

**Storage:**
- Store on approved Swedwise systems with access controls
- Encrypt on portable devices (laptops, USB drives)
- Use approved cloud storage with encryption
- Lock paper documents when unattended

**Transmission:**
- Must use encryption (HTTPS, TLS, encrypted email)
- Verify recipient before sending
- Do not send to personal email addresses
- Use secure file sharing for large files

**Access Control:**
- Restrict to authorized individuals (need-to-know basis)
- Customer data: Only project team and authorized support staff
- Password-protect documents if needed
- Review access rights regularly

**Disposal:**
- Secure deletion (shred digital files)
- Paper: Cross-cut shredding
- Do not leave in regular trash or recycling

**Labeling:**
- Mark documents: "Confidential"
- Email subject: "[Confidential]" prefix
- Email footer: "This email contains confidential information"

### Restricted

**Storage:**
- Store only on approved systems with strong access controls
- Encrypt at rest and in transit (mandatory)
- Use credential vaults for passwords/keys
- Store paper documents in locked cabinets
- Minimum access rights (explicit authorization required)

**Transmission:**
- Must use strong encryption (TLS 1.2+, encrypted email)
- Verify recipient identity before sending
- Avoid email if possible - use secure file sharing
- Never send credentials via email (use credential vault)
- Use out-of-band verification for sensitive transmissions

**Access Control:**
- Explicit authorization required
- Log all access
- Multi-factor authentication (MFA) where possible
- Regular access reviews (quarterly)
- Segregation of duties

**Disposal:**
- Cryptographic erasure or physical destruction
- Paper: Cross-cut shredding, witnessed disposal
- Hard drives: Degaussing or physical destruction
- Document disposal with certificate if required

**Labeling:**
- Mark documents: "Restricted - Authorized Personnel Only"
- Email subject: "[Restricted]" prefix
- Email footer: "This email contains restricted information - unauthorized access prohibited"
- Watermark documents where appropriate

## Special Handling Scenarios

### Working at Customer Sites

**Guideline:**
- Assume customer networks are untrusted
- Use VPN for Swedwise resource access
- Follow customer's classification and handling rules for their data
- Do not mix customer data with Swedwise internal data
- Lock screen when leaving workstation
- Do not discuss confidential matters in public areas

### Remote Working (Home, Public Places)

**Guideline:**
- Use privacy screens in public places
- Avoid sensitive work on public WiFi (use VPN)
- Ensure no unauthorized persons can view your screen
- Lock screen when stepping away
- Do not print confidential documents on home printers unless secure
- Shred confidential printouts at home

### Sharing with Third Parties

**Guideline:**
- Verify NDA is in place before sharing Confidential/Restricted information
- Use secure file sharing (not consumer services like personal Dropbox)
- Set expiry dates on shared links
- Mark documents clearly with classification
- Track what was shared and with whom

### SaaS Platform Operations

**Guideline:**
- Customer data is **Confidential by default** - handle accordingly
- Use role-based access control (RBAC) for platform access
- Store all credentials in approved vault (e.g., Azure Key Vault)
- Encrypt customer data at rest and in transit
- Log all access to customer data
- Minimize data access to necessary personnel only
- Follow data residency requirements (Swedish data center)

### Email Communications

**Guideline:**
- Use classification prefix in subject line for Confidential/Restricted
- Add appropriate email footer (see templates below)
- Verify recipient before sending sensitive information
- Use encrypted email for Restricted information
- Be cautious with Reply All - check recipients
- Do not forward customer emails externally without permission

**Email Footer Templates:**

*Internal:*
```
This email is intended for Swedwise staff. Please do not forward externally.
```

*Confidential:*
```
CONFIDENTIAL: This email contains confidential information intended only for the named recipient(s).
If you received this in error, please delete it and notify the sender.
```

*Restricted:*
```
RESTRICTED: This email contains restricted information. Unauthorized access, use, or disclosure is prohibited.
If you received this in error, delete immediately and notify the sender.
```

### Classification Changes

**When to Upgrade Classification:**
- New regulations apply (e.g., GDPR)
- Customer requests higher protection
- Business impact increases
- Aggregation creates sensitivity (multiple Internal items → Confidential)

**When to Downgrade Classification:**
- Information becomes public (e.g., published contract)
- Retention period expires
- Business impact decreases
- Legal/regulatory requirements change

**Process:**
- Document the reason for classification change
- Update metadata and labels
- Apply new handling requirements going forward
- Notify relevant stakeholders

## Classification Responsibilities

### Information Owner (Creator/Custodian)
- Classify information when created
- Mark documents clearly
- Apply appropriate handling requirements
- Review classification periodically
- Update classification if circumstances change

### All Staff
- Respect classification markings
- Follow handling requirements
- Ask if unsure about classification
- Report misclassification or handling violations
- Protect information according to its classification

### CISO
- Maintain classification scheme
- Provide guidance and training
- Audit compliance with classification requirements
- Update guideline as needed

## Practical Tips

**Tip 1: When in Doubt, Classify Higher**
- It's easier to downgrade later than to recover from a leak
- Customer data? → Confidential (minimum)
- Contains passwords? → Restricted

**Tip 2: Mark Clearly**
- Use classification prefix in filenames: `[CONF] Customer Proposal.docx`
- Add classification to document headers/footers
- Use email subject prefixes: `[Confidential] Q4 Pricing`

**Tip 3: Aggregate Carefully**
- Multiple Internal items together may create Confidential information
- Example: List of customer names (Internal) + contract values (Confidential) = Confidential

**Tip 4: Think About Context**
- A piece of data may be Internal alone, but Confidential in context
- Example: "Server IP address" (Internal) vs "Customer X production server IP" (Confidential)

**Tip 5: Customer Data Default**
- Always classify customer data as **Confidential** unless explicitly public
- Applies to: names, contact details, business information, contracts, data they provide

**Tip 6: SaaS Platform Data**
- Customer data in the platform is **Confidential**
- Platform credentials are **Restricted**
- Aggregate metrics (no customer identification) can be **Internal**

## Frequently Asked Questions

**Q: Do I need to classify every email I send?**
A: Only if it contains Confidential or Restricted information. Internal emails don't require explicit marking, but using the email footer is good practice.

**Q: I'm working on a customer project. What classification should I use?**
A: Customer-related information defaults to **Confidential**. Use the decision tree if unsure.

**Q: Can I store customer data in my personal Dropbox/Google Drive?**
A: No. Use Swedwise-approved storage only (e.g., SharePoint, OneDrive for Business, project collaboration tools approved by IT).

**Q: What if the customer classifies their data differently?**
A: Follow the customer's classification scheme for their data when working on their systems. For Swedwise copies, use Swedwise classification (at least as restrictive as customer's).

**Q: Can I discuss customer projects in our internal Slack?**
A: Yes, if it's a closed channel with only authorized project team members. Mark confidential discussions clearly. Avoid sensitive details in public channels.

**Q: How do I share Confidential information with a supplier?**
A: Ensure NDA is in place, use secure file sharing (SharePoint, secure file transfer), mark documents clearly, and notify them of confidentiality requirements.

**Q: What should I do if I accidentally send Confidential information to the wrong person?**
A: Report immediately to your manager and CISO. Follow the incident response procedure. Do not try to recall or delete without guidance.

**Q: How long do I keep classified information?**
A: Follow the retention schedule in the Document Control Procedure. Classification level doesn't change retention period, but affects how it's stored and disposed of.

## Related Documents

- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-PRO-001: Information Security Management Procedure
- SW-QMS-PRO-001: Document Control Procedure
- SW-ISMS-GUI-003: Clean Desk and Clear Screen Guideline
- SW-ISMS-PRO-003: Data Protection and Privacy Procedure

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | TBD | TBD | Initial draft |

**Review Frequency:** Annual or when significant changes to business operations occur

**Approval:** TBD (CISO)

**Next Review Date:** TBD
