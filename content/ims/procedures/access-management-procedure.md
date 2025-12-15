---
document_id: SW-ISMS-PRO-002
title: Access Management Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001
  - SW-IMS-PRO-001
---

# Access Management Procedure

## 1. Purpose

This procedure defines the process for managing user access to Swedwise AB's information systems and data throughout the user lifecycle (joiners, movers, leavers). It ensures that access rights are granted based on legitimate business need, properly authorized, regularly reviewed, and promptly revoked when no longer required.

## 2. Scope

This procedure applies to:

- All Swedwise employees, contractors, consultants, and temporary staff
- All information systems and applications (internal and external)
- Access to customer environments and data
- Physical access to facilities (where relevant to information security)
- Remote access (VPN, remote desktop, cloud services)
- Privileged and administrative access
- Service accounts and system-to-system access
- Third-party access to Swedwise systems

**Systems in scope include but not limited to:**
- Microsoft 365 (Email, SharePoint, Teams, OneDrive)
- Azure cloud resources
- SaaS platform infrastructure (hosted at Entiros)
- Customer relationship management (CRM) systems
- Financial and HR systems
- Development and testing environments
- Customer systems (where Swedwise staff have access)

## 3. Definitions

| Term | Definition |
|------|------------|
| **User** | Any person requiring access to Swedwise information systems |
| **Privileged Access** | Access rights that allow control over system configurations, security settings, or sensitive data (e.g., administrators, DBAs, security staff) |
| **Standard Access** | Regular business user access without elevated privileges |
| **Role-Based Access** | Access rights assigned based on job role and responsibilities |
| **Least Privilege** | Granting minimum access rights necessary to perform job duties |
| **Need-to-Know** | Access limited to information required for specific business purposes |
| **Service Account** | Non-human account used for system processes or application-to-application communication |
| **Joiner** | New employee or contractor starting at Swedwise |
| **Mover** | Employee changing roles or responsibilities within Swedwise |
| **Leaver** | Employee or contractor ending their relationship with Swedwise |

## 4. Responsibilities

| Role | Responsibility |
|------|---------------|
| **CISO** | Overall accountability for access control framework, approval authority for privileged access |
| **IT Operations** | Day-to-day access provisioning and de-provisioning, technical implementation |
| **Line Managers** | Requesting access for team members, approving access requests, conducting access reviews for their teams |
| **HR** | Initiating joiner/mover/leaver processes, coordinating with IT and managers |
| **System Owners** | Defining access requirements for their systems, approving access to their applications/data |
| **Users** | Requesting access only when needed, using access responsibly, protecting credentials |
| **Internal Audit** | Reviewing access control compliance, testing access reviews |

## 5. Access Control Principles

All access management decisions follow these principles:

1. **Least Privilege**: Users receive minimum access needed for their role
2. **Need-to-Know**: Access to sensitive information only when business requires it
3. **Segregation of Duties**: Critical functions split between multiple people where feasible
4. **Role-Based Access Control (RBAC)**: Access based on job function, not individual requests
5. **Formal Authorization**: All access formally requested and approved
6. **Regular Review**: Periodic verification that access remains appropriate
7. **Prompt Revocation**: Access removed immediately when no longer needed

## 6. Access Levels and Classification

### 6.1 User Access Types

| Access Type | Description | Approval Required | Review Frequency |
|-------------|-------------|-------------------|------------------|
| **Standard User** | Basic office productivity tools (email, file sharing, intranet) | Line Manager | Annual |
| **Application User** | Access to specific business applications (CRM, ERP, etc.) | Line Manager + System Owner | Annual |
| **Customer Data Access** | Access to customer systems or data (consulting engagements) | Customer + Line Manager | Per engagement |
| **Privileged/Admin** | Elevated system privileges or security-sensitive access | CISO + Line Manager | Quarterly |
| **Developer** | Access to development tools, code repositories, test environments | Line Manager + System Owner | Quarterly |
| **Remote Access** | VPN or remote access to Swedwise internal network | IT Operations + Line Manager | Annual |

### 6.2 Data Classification Access

Access decisions consider information classification levels:

| Classification | Access Requirement |
|----------------|-------------------|
| **Public** | No specific access control; generally available |
| **Internal** | Swedwise staff with business need; standard access controls |
| **Confidential** | Named individuals with documented business need; manager approval |
| **Restricted** | Strictly limited access; CISO approval required; enhanced logging |

Reference: [TBD - SW-ISMS-GUI-001: Information Classification Guideline]

## 7. User Lifecycle Management

### 7.1 Joiners (New Starters)

#### Pre-Start (Before First Day)

**HR initiates:**
1. Create access request ticket [TBD - via IT service desk system]
2. Include:
   - New starter name and personal details
   - Start date
   - Job title and department
   - Line manager name
   - Access template or specific requirements
   - Office location (Karlstad, Stockholm, Uddevalla, remote)
   - Equipment needs (laptop, mobile phone, access cards)

**Line Manager provides:**
1. Confirm access requirements
   - Select role-based access template (if available)
   - Specify any additional application access needed
   - Identify customer systems access (if applicable)
2. Approve access request in service desk system

**IT Operations provisions (1-2 days before start):**
1. Create user accounts:
   - Microsoft 365 account (email, Teams, SharePoint)
   - Azure AD identity
   - VPN access (if remote worker)
   - Other core systems based on role template
2. Configure standard security settings:
   - Multi-factor authentication (MFA) enabled
   - Conditional access policies applied
   - Password policy enforced
   - Device compliance requirements
3. Prepare equipment:
   - Laptop/device configured with standard security baseline
   - Antivirus and endpoint protection installed
   - Encryption enabled (BitLocker/FileVault)
   - Company policies applied
4. Physical access:
   - Office access card issued (if applicable)
   - Assigned workspace prepared

**Credentials:**
- Initial password communicated securely (separate from username)
- User required to change password on first login
- MFA enrollment mandatory during first login

#### Day One Orientation

**IT induction includes:**
- User account activation and first login
- MFA enrollment and verification
- Security awareness briefing (short version)
- Acceptable use policy acknowledgment
- Password and security best practices
- How to request additional access
- Who to contact for IT support
- Incident reporting process

**Documentation:**
- User signs acceptable use policy
- Records stored in HR file and IT systems
- Access granted documented in user access register

#### Access Verification

**Line Manager verifies (within first week):**
- User has appropriate access
- No unnecessary access granted
- User can perform job duties
- Additional access requests submitted if needed

### 7.2 Access Requests (After Onboarding)

#### Standard Access Request Process

**User initiates request:**
1. Submit request via [TBD - IT service desk/access request form]
2. Provide:
   - System or application name
   - Access level required
   - Business justification
   - Duration (if temporary)
   - Manager name

**Approval workflow:**
1. **Line Manager approval** (required for all requests)
   - Verify business need
   - Confirm user requires access to perform duties
   - Approve or reject with comments

2. **System Owner approval** (if application-specific)
   - Verify access level is appropriate
   - Ensure compliance with data handling requirements
   - Approve or reject

3. **CISO approval** (for privileged or restricted access)
   - Assess security implications
   - Review justification for elevated privileges
   - Approve or reject

**Approval timeframes:**
- Standard access: 1 business day
- Privileged access: 2 business days
- Customer data access: 3 business days (may require customer approval)
- Emergency access: [See Section 7.6]

**IT Operations provisions:**
1. Receive approved request
2. Grant access according to approved level
3. Document access granted in user access register
4. Notify user and manager that access is active
5. Set review/expiry date (if temporary)

**Access request rejection:**
- Approver documents reason for rejection
- User and manager notified
- User may submit revised request if circumstances change

### 7.3 Movers (Role Changes)

**Triggers:**
- Promotion or role change
- Department transfer
- Changed responsibilities
- Project assignment ending/starting

**Process:**

**HR notifies IT Operations:**
1. Submit role change request via [TBD - service desk]
2. Include:
   - User name
   - Current role and new role
   - Effective date
   - New line manager (if changed)
   - Access changes required

**Access review and adjustment:**

1. **Old Manager confirms:**
   - Access no longer needed for previous role
   - Customer systems access to be revoked
   - Project-specific access to be removed

2. **New Manager specifies:**
   - New role access requirements
   - Additional systems or data needed
   - Customer access for new responsibilities

3. **IT Operations updates:**
   - Revoke previous role access (within 1 business day)
   - Grant new role access (per approval workflow)
   - Update user access register
   - Verify no inappropriate accumulated privileges

**Privilege creep prevention:**
- Review complete access profile during role changes
- Remove all access not needed for new role
- Avoid "just in case" access retention
- Document any exceptions with time limits

### 7.4 Leavers (Termination or Departure)

**Critical timing:** Access must be revoked on or before last day of employment.

#### Planned Departures

**HR notifies IT Operations (minimum 3 days before departure):**
1. Submit leaver request via [TBD - service desk]
2. Include:
   - User name
   - Last working day
   - Reason for departure (resignation, contract end, retirement)
   - Manager name
   - Knowledge transfer requirements (if data access needed briefly)

**Pre-departure (1-2 days before):**

**Line Manager:**
- Arrange knowledge transfer
- Retrieve company equipment (laptop, phone, access cards, keys)
- Collect any physical documents (especially confidential)
- Confirm all customer projects transitioned

**IT Operations prepares:**
- Schedule access revocation for end of last working day
- Identify all systems with user access
- Plan email forwarding (if needed)
- Prepare data backup/transfer (if required)

**On last working day (after end of business):**

**IT Operations executes:**

1. **Disable all accounts** (do not delete immediately):
   - Microsoft 365 account disabled
   - Azure AD account disabled
   - VPN access revoked
   - All application access disabled
   - MFA registrations removed

2. **Revoke physical access:**
   - Deactivate office access cards
   - Update physical access logs
   - Disable any assigned parking access

3. **Email management:**
   - Configure email forwarding to manager or designated person (if approved)
   - Set auto-reply message
   - Convert mailbox to shared mailbox (if retention required)

4. **Data handling:**
   - Back up user data (OneDrive, local files) to manager's access
   - Transfer ownership of important files/documents
   - Retain data per retention policy

5. **Sessions and devices:**
   - Revoke all active sessions and tokens
   - Wipe company data from mobile devices (if MDM enrolled)
   - Ensure laptop/devices returned and wiped

6. **Documentation:**
   - Update user access register (status: disabled)
   - Log all actions taken
   - Notify manager and HR of completion

**Post-departure (30 days after):**
- Review for any missed access
- Delete accounts per retention policy (after backup/archival)
- Remove from all distribution lists and shared resources
- Final documentation and closure

#### Unplanned or Immediate Terminations

**For disciplinary dismissals or security concerns:**

**HR/Manager contacts IT Operations immediately:**
1. Access revocation required NOW
2. Provide user name and urgency reason
3. Manager supervises collection of equipment

**IT Operations executes immediately:**
1. Disable all user accounts (within 15 minutes)
2. Revoke physical access
3. Terminate all active sessions
4. Contact reception/security to escort from building (if necessary)
5. Follow standard leaver process for data handling
6. Enhanced monitoring for suspicious activity

**Security incident assessment:**
- CISO reviews circumstances
- Determine if incident investigation needed
- Preserve evidence if required (logs, emails, files)
- Follow SW-ISMS-PRO-001 if security incident suspected

### 7.5 Privileged Access Management

Privileged access requires enhanced controls due to higher risk.

#### Types of Privileged Access

- System administrators (Windows, Linux, Azure)
- Database administrators (production databases)
- Security administrators (firewall, SIEM, security tools)
- Network administrators (routers, switches, infrastructure)
- Application administrators (with access to all user data)
- Cloud administrators (Azure Global Admin, AWS root)
- Service desk with password reset capabilities

#### Additional Requirements

**Approval:**
- CISO approval mandatory
- Documented business justification
- Time-limited where possible (maximum 12 months)

**Separation:**
- Separate privileged account from standard user account
- Naming convention: [username]-admin
- Privileged accounts used ONLY for administrative tasks
- Standard account used for daily work (email, documents)

**Authentication:**
- Enhanced MFA for privileged access (hardware token preferred)
- Longer, complex passwords
- No password sharing under any circumstances
- Password manager use required

**Monitoring:**
- All privileged account actions logged
- Logs reviewed monthly by CISO
- Automated alerting on suspicious activity
- Quarterly access reviews (not annual)

**Restrictions:**
- Privileged accounts cannot be used for:
  - Email and web browsing
  - Personal activities
  - Accessing untrusted systems
- Internet access limited for privileged accounts where feasible

**Emergency Break-Glass Accounts:**
- Limited number of emergency admin accounts (maximum 3)
- Stored in secure physical safe or privileged access management system
- Passwords changed immediately after use
- Usage triggers immediate notification to CISO and CEO
- Comprehensive audit and justification required post-use

### 7.6 Emergency Access

For urgent business needs outside normal working hours or approval unavailable.

**Criteria for emergency access:**
- Critical business or customer impact without access
- Normal approval workflow not feasible in timeframe
- Specific incident or operational need

**Process:**

1. **User contacts:**
   - IT Operations on-call [TBD - emergency contact]
   - Explain urgent business need
   - Provide manager contact for verification

2. **IT Operations:**
   - Verify identity of requester
   - Attempt to contact manager for verbal approval
   - Contact CISO if privileged access requested
   - Grant temporary access if verified urgent need
   - Document justification thoroughly

3. **Time-limited:**
   - Emergency access granted for maximum [TBD - e.g., 24-48 hours]
   - Clearly documented expiry

4. **Post-emergency:**
   - User submits formal access request within 1 business day
   - Manager provides retrospective approval
   - Access made permanent if approved, or revoked if denied
   - CISO reviews all emergency access grants weekly

**Emergency access is NOT for:**
- Routine access requests that weren't planned ahead
- Convenience when approver is unavailable
- Circumventing normal approval process

### 7.7 Service Accounts

Non-human accounts for applications, scripts, and automated processes.

**Requirements:**

1. **Naming convention:**
   - Format: svc-[purpose]-[system]
   - Example: svc-backup-azure, svc-monitoring-splunk

2. **Documentation:**
   - Service account register maintained by IT Operations
   - Document purpose, owner, systems accessed, privilege level
   - No generic or shared accounts (each purpose = separate account)

3. **Credentials:**
   - Strong, randomly generated passwords
   - Stored in privileged access management system or secure vault
   - Rotated annually (minimum)
   - Never hardcoded in scripts or configuration files

4. **Access control:**
   - Minimum privileges required for function
   - No interactive login allowed (where technically feasible)
   - Specific to single application or service

5. **Approval:**
   - System Owner approval required
   - CISO approval if privileged access
   - Regular review as part of access reviews

6. **Monitoring:**
   - Activity logged and reviewed
   - Alerts for unexpected usage patterns
   - Quarterly review of service accounts

## 8. Access Reviews

Regular verification that user access remains appropriate and necessary.

### 8.1 Standard Access Review

**Frequency:** Annually (Q1 of each year)

**Process:**

1. **IT Operations generates reports:**
   - List of all users by department
   - Systems and applications accessed
   - Access level/permissions
   - Last login dates
   - Inactive accounts (no login > 90 days)

2. **Line Managers review:**
   - Receive report for their team members
   - Verify each user requires listed access
   - Identify access to revoke (no longer needed)
   - Confirm team members still employed
   - Flag inactive accounts for investigation
   - **Deadline: 2 weeks to complete review**

3. **Managers certify:**
   - Sign off that access is appropriate
   - Submit list of changes needed
   - Escalate any concerns to CISO

4. **IT Operations remediates:**
   - Remove access per manager instructions
   - Disable inactive accounts (after verification)
   - Document all changes
   - Report completion to CISO

5. **CISO oversight:**
   - Review completion rates
   - Follow up with non-compliant managers
   - Analyze trends (privilege creep, orphaned accounts)
   - Report to management

**Non-compliance:**
- Managers who don't complete reviews: Escalate to their manager and CEO
- Second failure: Access for their team suspended until review complete

### 8.2 Privileged Access Review

**Frequency:** Quarterly

**Process:** Same as standard but:
- CISO reviews all privileged accounts personally
- Enhanced scrutiny of justifications
- Verification that separate admin accounts are used properly
- Review of privileged account activity logs
- Immediate revocation if concerns identified

### 8.3 Customer Data Access Review

**Frequency:** Per engagement or quarterly (whichever more frequent)

**Trigger:**
- End of consulting engagement
- Quarterly for long-term engagements

**Process:**
1. Customer Success or engagement manager confirms:
   - Which staff still require customer access
   - Access level still appropriate
   - Customer approval for continued access
2. IT Operations revokes access for concluded engagements
3. Customer notified of access removals

### 8.4 Inactive Account Management

**Inactive thresholds:**
- No login for 90 days: Flagged for review
- No login for 120 days: Automatically disabled
- Disabled for 90 days: Account deleted

**Exceptions:**
- Service accounts (reviewed separately)
- Approved leave of absence (documented)
- Legal hold or compliance retention

**Process:**
- Automated monthly scan for inactive accounts
- IT Operations contacts manager to verify status
- Disable if confirmed no longer needed
- Delete per retention schedule

## 9. Special Access Scenarios

### 9.1 Contractor and Temporary Staff Access

**Additional requirements:**
- Time-limited access with documented end date
- Sponsor within Swedwise (line manager equivalent)
- Acceptable use agreement signed
- Review at contract renewal
- Access revoked on last day (no exceptions)

**Types:**
- **Short-term (<3 months):** Guest account with limited access
- **Long-term (3+ months):** Full user account with expiry date
- **External auditors:** Read-only, time-limited, supervised where possible

### 9.2 Third-Party/Vendor Access

**For vendors needing access to Swedwise systems:**

**Requirements:**
- Documented business need (contractual or support)
- Non-disclosure agreement (NDA) signed
- Security assessment of vendor
- Specific systems and duration documented
- Separate account (not shared with internal users)
- Multi-factor authentication mandatory
- Monitoring of vendor actions
- Review quarterly or at contract renewal

**Preferred approach:**
- Remote support with supervision
- Session recording where possible
- Just-in-time access (activated only when needed)

### 9.3 Remote Access

All remote access to Swedwise network and systems:

**Requirements:**
- Corporate VPN mandatory for network access
- MFA required for VPN authentication
- Endpoint compliance verification (antivirus, OS patches, encryption)
- Use of company-provided devices (BYOD with restrictions)
- Acceptable use policy compliance

**Approval:**
- IT Operations for standard remote workers
- CISO for remote privileged access

### 9.4 External Collaboration

**Microsoft 365 external sharing:**
- Guest access to specific SharePoint sites/Teams channels allowed with approval
- Sharing links with expiry dates preferred
- "Anyone with link" sharing DISABLED by default
- External user access reviewed quarterly
- Sensitive data sharing requires documented approval

## 10. Access Request Forms and Documentation

### 10.1 Required Information

All access requests must include:

**User Information:**
- Full name
- Email address
- Employee/contractor ID
- Department and role
- Line manager name

**Access Details:**
- System or application name
- Access level/permissions required (specific)
- Business justification
- Duration (permanent or time-limited)
- Customer name (if customer data access)

**Approvals:**
- Line manager approval (signature/email)
- System owner approval (if applicable)
- CISO approval (for privileged/restricted access)
- Customer approval (for customer systems)

### 10.2 Access Request Tracking

**IT Operations maintains:**
- Access request register (all requests and outcomes)
- User access register (current state of all user access)
- Privileged account register (all privileged accounts)
- Service account register (all non-human accounts)

**Attributes tracked:**
- User name and ID
- System/application
- Access level
- Date granted
- Approved by
- Review date
- Date revoked (if applicable)
- Reason for revocation

## 11. Audit and Compliance

### 11.1 Audit Trail Requirements

All access management actions logged:
- Access requests and approvals
- Access grants and revocations
- Access review outcomes
- Privileged account usage
- Failed access attempts
- Password resets

**Log retention:** Minimum 12 months, preferably 24 months

### 11.2 Internal Audit Testing

Annual internal audit includes:
- Sample testing of access requests (proper approvals)
- Verification that leavers' access was revoked
- Review of privileged access usage
- Access review completion verification
- Inactive account management
- Segregation of duties compliance

## 12. Exceptions

Exceptions to this procedure require:
- Documented business justification
- Compensating controls identified
- CISO approval
- Time-limited (maximum 12 months)
- Quarterly review of all exceptions

**Examples of potential exceptions:**
- Vendor requiring shared account (if technically unavoidable)
- Emergency administrative access needs
- Customer contractual requirements differing from policy

## 13. Inputs and Outputs

**Inputs:**
- HR joiner/mover/leaver notifications
- User access requests
- Manager access approvals
- Organizational changes
- Audit findings

**Outputs:**
- Active user accounts with appropriate access
- User access register
- Access review reports and certifications
- Audit trails and access logs
- Compliance evidence

## 14. Records

| Record | Retention Period | Location |
|--------|------------------|----------|
| Access request forms and approvals | 3 years after access revoked | [TBD - Service desk system] |
| User access register | Current + 7 years | [TBD - Access management system] |
| Access review certifications | 7 years | [TBD - Document repository] |
| Privileged account logs | 24 months | [TBD - SIEM/log management] |
| Leaver documentation | Per HR retention policy | [TBD - HR system] |
| Service account register | Current + 3 years | [TBD - IT documentation system] |

## 15. Related Documents

**Policies:**
- SW-ISMS-POL-001: Information Security Policy
- SW-IMS-POL-001: Integrated Management System Policy
- [TBD - SW-ISMS-POL-002: Acceptable Use Policy]

**Procedures:**
- SW-IMS-PRO-001: Document Control Procedure
- SW-ISMS-PRO-001: Incident Management Procedure
- [TBD - SW-HR-PRO-001: Onboarding and Offboarding Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-001: Information Classification Guideline]
- [TBD - SW-ISMS-GUI-003: Password and Authentication Guideline]

**Forms:**
- [TBD - SW-ISMS-FRM-003: Access Request Form]
- [TBD - SW-ISMS-FRM-004: Access Review Certification Form]
- [TBD - SW-ISMS-FRM-005: Privileged Access Justification Form]

**External:**
- ISO 27001:2022 - Clause 5.15, 5.16, 5.17, 5.18 (Access control controls)

## 16. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO] | Initial procedure creation | [TBD - CEO] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This procedure is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this procedure.*
