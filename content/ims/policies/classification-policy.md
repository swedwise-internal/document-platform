---
document_id: SW-ISMS-POL-007
title: Information Classification Policy
doc_type: policy
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 27001
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
  - SW-ISMS-POL-003
  - SW-ISMS-POL-006
---

# Information Classification Policy

## 1. Purpose

This policy establishes a framework for classifying Swedwise AB's information assets based on their sensitivity, value, and criticality. Proper classification ensures that information receives appropriate protection throughout its lifecycle and that staff understand their responsibilities for handling different types of information.

This policy supports ISO 27001:2022 controls for information classification and handling, and enables consistent, risk-based protection of Swedwise and customer information.

## 2. Scope

This policy applies to:

### Information Scope
- All information created, received, processed, stored, or transmitted by Swedwise
- Information in all formats:
  - Electronic (documents, emails, databases, files, backups, logs)
  - Paper (printed documents, forms, notes, contracts)
  - Verbal (conversations, meetings, phone calls)
  - Visual (whiteboards, presentations, screens)
- Information at all locations:
  - Swedwise offices (Karlstad, Stockholm, Uddevalla)
  - Remote work locations
  - Customer sites
  - Third-party locations (cloud providers, partners)
  - In transit (email, file transfer, physical mail)

### Personnel Scope
- All Swedwise employees, contractors, and temporary staff
- Third-party service providers with access to Swedwise information
- Anyone handling Swedwise or customer information on our behalf

## 3. Classification Levels

Swedwise uses four information classification levels, from lowest to highest sensitivity:

### PUBLIC
Information that can be freely disclosed to anyone without restriction.

**Characteristics:**
- No harm to Swedwise, customers, or individuals if disclosed
- Intended for public consumption
- May be published externally without approval

**Examples:**
- Published marketing materials and press releases
- Public website content
- Job advertisements
- General company information (office locations, contact details)
- Published product documentation and user guides
- Social media posts approved by marketing

**Default Classification:** Information is NOT Public unless explicitly approved for public release.

---

### INTERNAL
Information intended for use within Swedwise but not harmful if accidentally disclosed externally.

**Characteristics:**
- General business information for internal use
- Low risk if disclosed, but not intended for external distribution
- May cause minor inconvenience or embarrassment if disclosed, but no significant business harm

**Examples:**
- Internal announcements and newsletters
- General policies and procedures (e.g., this document)
- Non-sensitive meeting minutes
- Office procedures and guidelines
- Training materials (non-confidential content)
- Internal directory and organizational charts
- Published environmental or quality reports

**Default Classification:** Most internal business documents default to Internal unless they contain sensitive information.

---

### CONFIDENTIAL
Sensitive information that must be protected from unauthorized disclosure.

**Characteristics:**
- Contains sensitive business, personal, or technical information
- Unauthorized disclosure could cause:
  - Financial loss
  - Competitive disadvantage
  - Reputational damage
  - Legal or regulatory violations
  - Harm to individuals or customers
- Requires access controls and careful handling

**Examples:**
- Customer contracts and agreements
- Customer data and personal information (GDPR-protected)
- Employee personal data (salaries, performance reviews, personal details)
- Financial information (budgets, pricing, financial reports)
- Business plans and strategies
- Unpublished product roadmaps
- Security assessments and vulnerability reports
- Non-public customer configurations or integrations
- Intellectual property and trade secrets
- Legal documents and advice
- M&A discussions and due diligence materials

**Default Classification:**
- **Customer data is Confidential by default** unless customer specifies otherwise
- **Personal data (GDPR) is Confidential minimum**
- When in doubt, classify as Confidential

---

### RESTRICTED
Highly sensitive information with severe consequences if disclosed.

**Characteristics:**
- Highest level of protection required
- Unauthorized disclosure could cause:
  - Severe financial loss
  - Critical business disruption
  - Serious legal or regulatory violations
  - Significant harm to national security, individuals, or customers
  - Irreparable reputational damage
- Limited to specific named individuals on need-to-know basis
- Requires explicit approval for access

**Examples:**
- Encryption keys and cryptographic materials
- Administrative credentials and privileged access secrets
- Customer data explicitly classified as highly sensitive by customer
- Highly sensitive personal data (health, biometric, political opinions - GDPR special categories)
- Critical security incident details before remediation
- Trade secrets with significant competitive value
- Board-level confidential discussions (e.g., significant M&A, restructuring)
- Law enforcement investigations
- Sensitive customer security configurations for critical infrastructure

**Default Classification:** Only explicitly designated information is Restricted. Requires CISO or senior management approval.

## 4. Classification Responsibilities

### 4.1 Information Owner

Every information asset has an owner responsible for:

- **Initial Classification**: Determine appropriate classification level when information is created or received
- **Classification Review**: Periodically review classification (minimum annually or when circumstances change)
- **Access Decisions**: Approve access requests to information they own
- **Declassification**: Approve downgrading classification when appropriate
- **Retention**: Define retention requirements and approve destruction

**Ownership Assignment:**
- **Customer data**: Customer Success/Account Manager for the customer relationship
- **HR data**: HR Manager
- **Financial data**: CFO or Finance Manager
- **Technical data**: Relevant technical lead or architect
- **Business documents**: Document author or department head

### 4.2 Information Users

All personnel handling classified information must:

- **Understand Classification**: Know the classification of information they access
- **Follow Handling Requirements**: Comply with handling rules for each classification level
- **Maintain Classification**: Preserve classification when copying, forwarding, or deriving new information
- **Report Issues**: Report suspected misclassification or handling violations
- **Ask When Uncertain**: Consult information owner or CISO if classification unclear

### 4.3 CISO

The CISO is responsible for:

- Maintaining this classification policy
- Providing guidance on classification decisions
- Resolving classification disputes
- Monitoring compliance with classification requirements
- Approving Restricted classification designations
- Reporting classification compliance to management

## 5. Handling Requirements by Classification Level

### 5.1 PUBLIC

**Storage:**
- No special requirements
- May be stored on public-facing systems

**Transmission:**
- No restrictions on transmission method
- May be sent via any channel (email, public file sharing, etc.)

**Access Control:**
- No access restrictions required
- May be shared freely

**Labeling:**
- Optional: May label as "Public" for clarity
- Not required

**Disposal:**
- Standard recycling or deletion acceptable
- No special destruction required

**Lifecycle:**
- Retention per business need or legal requirement
- No special backup or recovery requirements

---

### 5.2 INTERNAL

**Storage:**
- Stored on Swedwise-approved systems (corporate file shares, approved cloud services)
- Password-protected devices if stored on laptops/mobile devices
- Not stored on personal cloud services (consumer Dropbox, personal OneDrive, etc.)

**Transmission:**
- Within Swedwise: Email, Teams, approved collaboration platforms
- To external parties: Only when business need exists; avoid sending unnecessarily
- Encrypted transmission preferred but not mandatory

**Access Control:**
- Available to all Swedwise staff unless specific restrictions apply
- Not shared with external parties without business justification
- Access through authenticated systems (login required)

**Labeling:**
- Footer/header with "Internal" designation recommended but not mandatory for all documents
- Slide presentations should include "Internal" on title slide

**Disposal:**
- Electronic: Secure deletion (file deletion, not just recycle bin)
- Paper: Secure shredding or confidential waste bins
- Media (USB drives): Secure wipe before reuse or disposal

**Lifecycle:**
- Backed up per standard business continuity procedures
- Retained per document retention policy

---

### 5.3 CONFIDENTIAL

**Storage:**
- **Electronic**:
  - Stored only on Swedwise-approved, access-controlled systems
  - Encrypted at rest (full disk encryption minimum; file-level encryption for highly sensitive)
  - Not stored on personal devices unless MDM-managed with encryption
  - Cloud storage only on enterprise-approved platforms (no consumer services)
  - Databases with access controls and audit logging
- **Paper**:
  - Locked storage when not in use (locked drawers, cabinets, or rooms)
  - Not left unattended in unsecured areas
  - Clean desk policy applies

**Transmission:**
- **Electronic**:
  - Encrypted transmission required (TLS/SSL for email, encrypted file transfer)
  - Password-protected if sent via email attachment (password shared separately)
  - Use Swedwise-approved secure file sharing for large files
  - Avoid sending via personal email accounts
- **Physical**:
  - Sealed envelopes marked "Confidential"
  - Tracked/registered mail for critical items
  - Hand-delivery for highest sensitivity
- **Verbal**:
  - Discussed only in private settings
  - Not discussed in public areas (cafeterias, public transport, etc.)

**Access Control:**
- Access granted on need-to-know basis only
- Access requests approved by information owner
- Access logged and auditable
- Least privilege principle applied
- Multi-factor authentication required for remote access to confidential systems

**Labeling:**
- **REQUIRED** for documents, emails, and files
- **Electronic**: Header and/or footer with "CONFIDENTIAL" marking
- **Email**: Subject line or body should indicate confidential content; consider email classification tools
- **Paper**: "CONFIDENTIAL" watermark, stamp, or header/footer
- **Presentations**: Classification marking on each slide
- **Media**: Physical label on media (USB drives, backup tapes, disks)

**Disposal:**
- **Electronic**:
  - Secure deletion with overwrite (not just file deletion)
  - Sanitization tools for media (USB drives, hard drives)
  - Certified destruction for highly sensitive media
- **Paper**:
  - Cross-cut shredding (minimum P-4 level)
  - Locked shredding bins
  - Certified destruction service for high volumes
- **Media**:
  - Physical destruction or certified erasure before disposal/reuse

**Lifecycle:**
- Encrypted backups with access controls
- Audit logging of access and modifications
- Retention per legal/regulatory requirements or customer contracts
- Secure destruction at end of retention period

**Special Requirements:**
- **Customer Confidential Data**:
  - Follow customer-specific handling requirements if more stringent
  - Isolate from other customer data (logical or physical separation)
  - Return or destroy per customer contract terms
- **Personal Data (GDPR)**:
  - Data minimization: collect and retain only what's necessary
  - Purpose limitation: use only for stated purpose
  - Data subject rights: enable access, rectification, deletion, portability
  - Cross-border transfer restrictions: comply with GDPR transfer rules

---

### 5.4 RESTRICTED

**Storage:**
- **Electronic**:
  - Encrypted at rest (file-level or volume encryption, strong algorithms)
  - Stored on hardened, access-controlled systems with audit logging
  - Air-gapped or network-isolated storage for highest sensitivity (e.g., encryption keys)
  - Not stored on mobile devices or laptops unless specifically approved and encrypted
  - Limited backup copies, also encrypted and access-controlled
- **Paper**:
  - Locked safe or secured room with access control and logging
  - Numbered copies with distribution list
  - Never left unattended

**Transmission:**
- **Electronic**:
  - Strongly encrypted (AES-256 or equivalent)
  - Encrypted email with recipient verification
  - Secure file transfer with access controls
  - Avoid email when possible; use secure collaboration platforms
  - Pre-approved recipients only
- **Physical**:
  - Hand-delivery by authorized courier only
  - Sealed tamper-evident packaging
  - Recipient identity verification required
  - Signed acknowledgment of receipt
- **Verbal**:
  - Private, secured locations only
  - Verify identity of all participants
  - No recording unless explicitly approved

**Access Control:**
- Named individuals only (explicit access list maintained by information owner)
- Need-to-know strictly enforced
- Multi-factor authentication mandatory
- Privileged access management (PAM) for systems with Restricted data
- Access logged with regular audit reviews
- Approval by CISO or senior management for new access grants
- Background checks required for personnel with Restricted access

**Labeling:**
- **MANDATORY** for all instances
- **Electronic**:
  - Header and footer with "RESTRICTED" marking
  - Watermarks on documents
  - Email subject line prefix: [RESTRICTED]
- **Paper**:
  - "RESTRICTED" watermark on every page
  - Cover sheet indicating classification
  - Page numbering (e.g., "Page 1 of 5")
- **Presentations**:
  - Classification marking on every slide
  - Watermarks
- **Media**:
  - Physical label with classification and unique identifier
  - Tamper-evident seals

**Disposal:**
- **Electronic**:
  - Cryptographic erasure (destroy encryption keys)
  - Multi-pass overwrite (DoD 5220.22-M or equivalent)
  - Physical destruction of media (shredding, degaussing)
  - Certified destruction with certificate of destruction
- **Paper**:
  - Witnessed shredding or incineration
  - Certified destruction service
  - Certificate of destruction retained
- **Media**:
  - Physical destruction (shredding, crushing)
  - Certified destruction

**Lifecycle:**
- Encrypted backups with strict access controls
- Comprehensive audit logging (access, modification, transmission, destruction)
- Minimum retention period per legal/regulatory requirements
- Secure destruction immediately upon retention expiration or when no longer needed
- Periodic access reviews (at least quarterly)

**Special Requirements:**
- **Distribution Tracking**: Maintain register of all copies and recipients
- **Incident Reporting**: Any suspected unauthorized access reported immediately to CISO
- **Regular Reviews**: Classification and access reviewed at least quarterly
- **Declassification Authority**: Only information owner and CISO can declassify Restricted information

## 6. Marking and Labeling Standards

### 6.1 Electronic Documents

**Header/Footer Format:**
```
Classification: CONFIDENTIAL
Document ID: [if applicable]
Owner: [Department/Role]
```

**Email Subject Line:**
- `[CONFIDENTIAL] Subject of email`
- `[RESTRICTED] Subject of email`

**File Naming:**
- No specific requirement to include classification in filename
- Avoid including sensitive content in filenames (filenames may be logged or indexed)

### 6.2 Paper Documents

**Watermark or Stamp:**
- Classification level in capital letters
- Centered on page or diagonal watermark
- Each page marked (not just cover sheet)

**Cover Sheet (for Restricted):**
- Classification level prominently displayed
- Distribution list
- Handling instructions

### 6.3 Presentations

- Classification marking on title slide (minimum)
- Classification marking on all slides (recommended for Confidential, required for Restricted)
- Footer or watermark format

### 6.4 Removable Media

- Physical label affixed to media (USB drive, external hard drive, backup tape, disc)
- Classification level clearly marked
- Owner and date if Restricted
- Unique identifier for tracking if Restricted

### 6.5 Exceptions

- Public information does not require marking
- Internal information marking recommended but not mandatory for all instances

## 7. Classification Decision Process

### 7.1 Initial Classification

When creating or receiving new information:

1. **Identify Information Owner**: Determine who owns the information
2. **Assess Sensitivity**: Consider impact of unauthorized disclosure:
   - Who could be harmed?
   - What business impact could result?
   - Are there legal/regulatory requirements?
   - What are customer expectations?
3. **Select Classification Level**: Apply the lowest classification that provides adequate protection
4. **Mark Information**: Apply appropriate labeling
5. **Document Decision**: For Confidential and Restricted, document rationale (may be brief note in metadata or email)

### 7.2 Classification Uncertainty

If classification level is unclear:

- **Start Higher**: When in doubt, classify at higher level initially
- **Consult Owner**: Contact information owner for guidance
- **Consult CISO**: CISO provides authoritative guidance on classification decisions
- **Review Later**: Can downgrade classification once clarity achieved (with owner approval)

### 7.3 Derived Information

When creating new information from existing classified information:

- **Inherit Classification**: New information inherits highest classification of source material
- **Aggregation**: Combining multiple Internal documents may create Confidential information
- **Excerpts**: Excerpts or summaries retain classification of source (unless specifically declassified by owner)
- **Customer Data Derivatives**: Analytics or reports derived from customer data are Confidential minimum

## 8. Declassification and Reclassification

### 8.1 Declassification (Lowering Classification)

Information may be declassified when:

- Information becomes publicly available through authorized channels
- Sensitivity diminishes over time (e.g., historical data, expired contracts)
- Business circumstances change (e.g., product publicly launched)

**Process:**
- Information owner approves declassification
- CISO approval required for Restricted to Confidential downgrade
- Declassification documented (who, when, why)
- All copies updated or destroyed

### 8.2 Reclassification (Raising Classification)

Information may be reclassified to higher level when:

- Sensitivity increases (e.g., aggregation, new regulations)
- Initial classification was incorrect
- Business circumstances change (e.g., information becomes competitively sensitive)

**Process:**
- Information owner or CISO initiates reclassification
- All known copies identified and remarked
- Access restrictions adjusted
- Users notified of classification change
- Reclassification documented

## 9. Special Handling Scenarios

### 9.1 Remote Work

When working remotely with classified information:

- **Confidential and Restricted**: Work only in private spaces (not public Wi-Fi in cafes, trains, etc.)
- **Screen Privacy**: Use privacy screens; ensure screens not visible to others
- **Secure Networks**: Use VPN for Swedwise network access
- **Physical Security**: Lock devices when unattended; secure documents when not in use
- **Clean Workspace**: Remove/secure all materials at end of work session

### 9.2 Customer Sites

When working at customer locations:

- **Customer Requirements**: Follow customer classification and handling requirements for their data
- **Swedwise Data**: Maintain Swedwise classification requirements for our information
- **Separation**: Keep Swedwise confidential data separate from customer data
- **Access**: Do not access Swedwise Restricted information from customer networks without CISO approval

### 9.3 Bring Your Own Device (BYOD)

- **Public/Internal**: May be accessed on personal devices with reasonable security (passcode, updated OS)
- **Confidential**: Only if device enrolled in MDM with encryption, remote wipe, and access controls
- **Restricted**: Not permitted on BYOD devices without explicit CISO approval

### 9.4 Printing and Physical Handling

- **Confidential/Restricted**: Retrieve print jobs immediately; do not leave in printer tray
- **Clean Desk**: Confidential/Restricted documents secured when workspace unattended
- **Meetings**: Collect all copies of Confidential/Restricted handouts at end of meeting, or track distribution
- **Disposal**: Use designated secure disposal (shred bins) for Confidential/Restricted materials

### 9.5 Verbal Discussions

- **Confidential**: Discuss only in private settings; close doors, check for listeners
- **Restricted**: Pre-arrange secure location; verify participant identities; no eavesdropping risk
- **Phone/Video Calls**: Use encrypted channels for Restricted; avoid speaker phone in open areas

### 9.6 Third-Party Sharing

Before sharing Confidential or Restricted information with third parties:

- **Business Need**: Verify legitimate business need exists
- **NDA Required**: Ensure Non-Disclosure Agreement (NDA) in place
- **Minimum Necessary**: Share only minimum information required
- **Approval**: Obtain information owner approval (and CISO approval for Restricted)
- **Contractual Terms**: Include data handling and return/destruction terms in contracts
- **Monitor Compliance**: Verify third party follows handling requirements

## 10. Training and Awareness

All personnel must:

- Complete information classification training during onboarding
- Receive annual refresher training on classification and handling requirements
- Understand classification levels and handling requirements for information they access
- Know how to mark and label information appropriately
- Know who to contact with classification questions (information owner or CISO)

Role-specific training:

- **Information Owners**: Additional training on classification decision-making and review processes
- **System Administrators**: Technical controls for protecting classified information
- **Customer-Facing Staff**: Customer data classification and GDPR requirements

## 11. Compliance and Monitoring

### 11.1 Compliance Verification

Compliance with this policy is verified through:

- **Internal Audits**: Regular audits of information handling practices
- **Access Reviews**: Periodic reviews of access to Confidential and Restricted information
- **Spot Checks**: Random checks of document labeling and storage practices
- **Incident Analysis**: Review of security incidents involving classification violations

### 11.2 Violations

Violations of this policy may result in:

- **Unintentional/First-Time**: Retraining and coaching
- **Negligent/Repeated**: Disciplinary action per HR Security Policy
- **Intentional**: Serious disciplinary action up to termination; possible legal action

All violations are investigated and addressed per SW-ISMS-POL-006 HR Security Policy.

## 12. Roles and Responsibilities

### CISO

**Assigned to**: [TBD - name]

Responsibilities:
- Maintain and communicate this classification policy
- Provide guidance on classification decisions
- Approve Restricted classifications
- Resolve classification disputes
- Monitor compliance with classification requirements
- Report classification metrics to management
- Coordinate classification training

### Information Owners

Responsibilities:
- Classify information they create or own
- Review classification periodically
- Approve access to information they own
- Approve declassification or reclassification
- Ensure users understand handling requirements

### All Personnel

Responsibilities:
- Understand classification of information they access
- Mark and label information appropriately
- Follow handling requirements for each classification level
- Report suspected misclassification or violations
- Complete required classification training

### IT Department [TBD - if separate from CISO]

Responsibilities:
- Implement technical controls to support classification requirements
- Configure systems for access control, encryption, logging per classification
- Provide secure disposal/sanitization services
- Monitor system access to Confidential/Restricted information

## 13. Review and Update

This policy is:

- Reviewed annually by CISO
- Updated when significant changes occur in:
  - Business operations or information assets
  - Legal or regulatory requirements (e.g., GDPR updates)
  - Threat landscape or security incidents
  - Organizational structure
  - ISO 27001 requirements
- Approved by [TBD - CEO/Management Team]
- Communicated to all staff following updates

## 14. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-002: Acceptable Use Policy
- SW-ISMS-POL-003: Data Protection and Privacy Policy
- SW-ISMS-POL-004: Access Control Policy
- SW-ISMS-POL-006: HR Security Policy

**Procedures:**
- [TBD - SW-ISMS-PRO-001: Access Control Procedure]
- [TBD - SW-ISMS-PRO-007: Data Handling and Disposal Procedure]
- [TBD - SW-IMS-PRO-001: Document Control Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-001: Classification Decision Tree]
- [TBD - SW-ISMS-GUI-002: Remote Working Security Guideline]
- [TBD - SW-ISMS-GUI-003: Secure Disposal Guideline]

**Forms:**
- [TBD - Information Classification Label Template]
- [TBD - Declassification Request Form]

## 15. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*
