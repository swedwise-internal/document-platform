---
document_id: SW-ISMS-POL-002
title: Access Control Policy
doc_type: policy
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
---

# Access Control Policy

## 1. Purpose

This policy establishes requirements for controlling access to Swedwise AB's information systems, applications, and data. It ensures that access is granted based on business need, properly managed throughout the access lifecycle, and regularly reviewed to maintain security and compliance.

The policy supports ISO 27001:2022 controls (Annex A 5.15-5.18) and helps protect information assets through the principle of least privilege and defense in depth.

## 2. Scope

This policy applies to:

- All Swedwise employees, contractors, consultants, and temporary staff
- All third parties requiring access to Swedwise systems or data
- All information systems, applications, and data repositories owned or managed by Swedwise
- Remote access from any location (home, customer sites, public networks)
- Access to customer systems under Swedwise control or management
- SaaS platform infrastructure and administrative functions
- Physical access to IT infrastructure and secure areas

This policy covers both logical access (systems, applications, data) and physical access (server rooms, network equipment, secure storage).

## 3. Access Control Principles

### 3.1 Need-to-Know

Access is granted only when required for legitimate business purposes. Users receive access to information and systems necessary to perform their job duties, but no more.

### 3.2 Least Privilege

Users are granted the minimum level of access rights required to perform their assigned tasks. Elevated privileges are restricted and monitored.

### 3.3 Segregation of Duties

For critical functions, no single individual has complete control. Key processes require multiple authorized parties to prevent fraud and error.

Examples:
- Code development and production deployment separated
- Financial approvals require independent verification
- System administration separated from security monitoring

### 3.4 User Accountability

All users are accountable for actions performed under their credentials. Sharing of credentials or use of generic accounts is prohibited except where specifically documented and approved.

### 3.5 Default Deny

Systems are configured to deny access by default. Access is explicitly granted rather than implicitly allowed.

## 4. Access Lifecycle Management

### 4.1 Access Request

All access requests must be:

- Submitted through the designated process [TBD - ticketing system/form]
- Justified with business need and role requirement
- Approved by appropriate authority before provisioning
- Documented with request date, approver, and justification

**Approval Authority:**
- **Standard access**: Direct manager
- **Elevated access**: Manager + IT/Security lead
- **Administrative access**: Manager + CISO
- **Customer system access**: Customer authorization + Swedwise manager
- **Production environment access**: Change control process

### 4.2 Access Provisioning

Access is provisioned:

- Only after appropriate approval is documented
- Based on job role and established access templates where available
- With appropriate authentication mechanisms (see Section 5)
- Within [TBD - e.g., 24 hours for standard access, 4 hours for urgent requests]
- With notification to user and manager when activated

New employees receive access as part of onboarding, coordinated by [TBD - HR/IT/Resource Management].

### 4.3 Access Modification

Access changes are processed when:

- Job role changes (promotion, transfer, new responsibilities)
- Project assignments begin or end
- Business needs change
- Access reviews identify excessive privileges

Process:
- Submit change request with business justification
- Obtain approval from appropriate authority
- Remove old access before or concurrent with granting new access
- Document all changes with date and approver

### 4.4 Access Removal

Access is removed:

- **Immediately** upon termination (voluntary or involuntary)
- **Within 24 hours** when employee moves to role not requiring access
- **Within 48 hours** when consultant/contractor engagement ends
- **Same day** when security incident involves the account
- **Immediately** when requested by user or manager

**Termination Process:**
1. HR/Manager notifies IT/Security of last working day
2. All access disabled on last working day or earlier if risk warrants
3. Physical access cards, keys, and equipment returned
4. Accounts disabled (not deleted) for audit retention period [TBD - e.g., 90 days]
5. Manager confirms all access removed

**Extended Leave:**
- Accounts disabled after [TBD - e.g., 30 days] of inactivity
- Re-enabled upon return with manager approval

### 4.5 Access Review

Access rights are reviewed periodically to ensure continued appropriateness:

**Frequency:**
- **Quarterly**: Privileged and administrative access
- **Annually**: All user access
- **Ad-hoc**: Following organizational changes, incidents, or audit findings

**Review Process:**
1. System owners/managers receive list of users with access to their systems
2. Reviewers verify each user still requires access and appropriate privilege level
3. Reviewers document review completion and any required changes
4. Identified issues are remediated within [TBD - e.g., 30 days]
5. CISO receives summary of review results and outstanding items

**Review Documentation:**
- User name and account
- System/application
- Access level
- Reviewer name and decision (confirm/remove/modify)
- Date of review
- Follow-up actions

Failure to complete access reviews may result in automatic access suspension until review is performed.

## 5. Authentication Requirements

### 5.1 General Authentication

All system access requires authentication. Users must:

- Use strong, unique passwords meeting complexity requirements (see Password Guideline [TBD - SW-ISMS-GUI-003])
- Not share credentials or allow others to use their accounts
- Not store passwords in unprotected locations
- Change passwords if compromise is suspected
- Lock screens when leaving workstation unattended

**Password Standards:**
- Minimum length: [TBD - e.g., 12 characters]
- Complexity: Mix of uppercase, lowercase, numbers, special characters
- Not based on dictionary words or personal information
- Changed if compromised or required by security event
- Stored only in approved password managers

### 5.2 Multi-Factor Authentication (MFA)

MFA is required for:

- All remote access (VPN, remote desktop, cloud applications)
- Administrative and privileged accounts
- Access to production systems and customer data
- Email and collaboration platforms
- Financial systems and sensitive applications
- SaaS platform administrative access

MFA exemptions require CISO approval with documented compensating controls.

**Acceptable MFA Methods:**
- Authenticator app (e.g., Microsoft Authenticator, Google Authenticator)
- Hardware security tokens
- Biometric authentication combined with password
- SMS as backup only (not primary method due to vulnerabilities)

### 5.3 Privileged Access

Privileged accounts (system administrators, root/admin access, database administrators) require additional controls:

- Separate privileged account distinct from standard user account
- Use of privileged account only when elevated access is needed
- All privileged actions logged and monitored
- Privileged sessions time-limited where possible
- Privileged passwords stored in secure password vault
- Additional approval required for privileged access grants
- Quarterly access review (vs. annual for standard users)

**Privileged Account Naming:**
- Must be identifiable as privileged (e.g., firstname.lastname-admin)
- No generic "admin" or "root" accounts with shared credentials
- Service accounts documented with owner and purpose

### 5.4 Service and System Accounts

Non-human accounts (application service accounts, API keys, system accounts):

- Documented with purpose, owner, and systems accessed
- Use strong authentication (long complex passwords or certificate-based)
- Credentials stored in secure vault, not embedded in code
- Access reviewed quarterly
- Disabled when no longer needed
- Monitored for unusual activity

Passwords for service accounts are:
- Known only to authorized administrators
- Changed when administrators with knowledge leave or change roles
- Rotated at least annually or per vendor recommendation

## 6. Remote Access

All remote access to Swedwise systems requires:

- Approved remote access request
- Use of corporate VPN or approved secure remote access solution
- Multi-factor authentication
- Company-managed device with current security controls (antivirus, encryption, patching)
- Compliance with SW-ISMS-GUI-002: Remote Working Security Guideline [TBD]

**Prohibited Remote Access Methods:**
- Direct RDP/SSH exposed to internet without VPN
- Unencrypted protocols (Telnet, FTP, HTTP for administrative access)
- Personal VPN services that bypass security controls
- Remote access from public computers or unmanaged devices

**Customer Site Access:**
Consultants accessing customer systems must:
- Follow customer access control policies and procedures
- Use customer-provided credentials only for customer systems
- Not mix customer credentials with Swedwise credentials
- Report access issues or security concerns to Swedwise management
- Return or deactivate customer access when assignment ends

## 7. Role-Based Access Control (RBAC)

Access is assigned based on job roles where practical:

**Standard Role Profiles:** [TBD - define based on organizational roles]

- **Consultant**: Standard productivity tools, project-specific access
- **Sales**: CRM, sales collateral, customer prospect data
- **Manager**: Team management tools, approval workflows, reporting
- **Developer**: Development environments, code repositories, testing systems
- **SaaS Operations**: Monitoring tools, incident management, limited production access
- **Finance**: Financial systems, reporting, invoice processing
- **HR**: HR systems, personnel data, recruitment tools

Role profiles:
- Documented with included access rights
- Reviewed annually or when role responsibilities change
- Approved by department head and CISO
- Updated to reflect evolving business needs

Users requiring access beyond their standard role profile submit exception requests with business justification.

## 8. Special Access Scenarios

### 8.1 Emergency Access

Emergency access ("break glass") procedures for critical incidents:

- Emergency access accounts maintained for critical systems
- Credentials stored in sealed envelope or secure vault
- Use only when normal access channels are unavailable
- All emergency access use logged and reported to CISO
- Incident documented with justification and actions taken
- Access reviewed and rotated after use

### 8.2 Temporary Access

Temporary access for short-term needs (auditors, temporary staff, vendors):

- Maximum duration specified at time of grant
- Access automatically expires or requires reauthorization
- Higher scrutiny and monitoring during access period
- Access removed immediately when purpose is fulfilled
- Sponsor remains accountable for temporary user's actions

### 8.3 Guest Access

Limited guest access to non-sensitive systems (e.g., guest WiFi):

- Isolated from corporate networks and systems
- No access to internal resources
- Logged and monitored
- Terms of use displayed and acknowledged
- Bandwidth and usage limitations applied

### 8.4 Vendor/Partner Access

Third parties requiring access to Swedwise systems:

- Formal agreement including security and confidentiality terms
- Access limited to specific systems and data required
- Defined access period with regular reauthorization
- Unique credentials (no shared accounts)
- Activity monitored and logged
- Access removed immediately when contract/engagement ends
- Vendor personnel changes notified and access updated

## 9. Physical Access Control

Physical access to IT infrastructure and secure areas:

**Server Rooms and Data Centers:**
- Access limited to authorized IT personnel
- Access controlled via badge/key with logging
- Visitor access requires escort by authorized personnel
- Entry/exit logged and reviewed periodically

**Office Access:**
- Controlled building access during non-business hours
- Visitor sign-in and badge required
- Clear desk policy for sensitive information
- Secure storage for confidential documents and media

**Equipment:**
- IT equipment logged in asset inventory
- Equipment disposal follows secure disposal procedure
- Lost/stolen equipment reported immediately
- Remote wipe capability for mobile devices

## 10. Monitoring and Compliance

### 10.1 Access Logging

Systems log access events including:
- Successful and failed authentication attempts
- Privileged access and administrative actions
- Access to sensitive data
- Access from unusual locations or devices
- Configuration changes

Logs are:
- Protected from unauthorized modification
- Retained for [TBD - e.g., 12 months minimum]
- Reviewed regularly for suspicious activity
- Available for incident investigation and audits

### 10.2 Monitoring and Alerting

Security monitoring detects and alerts on:
- Multiple failed login attempts
- Unusual access patterns or times
- Privileged access use
- Access from unexpected locations
- Large data downloads or transfers
- Disabled security controls

Alerts are triaged and investigated according to incident response procedure [TBD - SW-ISMS-PRO-002].

### 10.3 Compliance Verification

Access control compliance is verified through:
- Quarterly privileged access reviews
- Annual access rights reviews
- Internal audits
- Automated compliance scanning where available
- External assessments and penetration testing

Non-compliance is reported to CISO and remediated according to severity and risk.

## 11. Roles and Responsibilities

### Chief Information Security Officer (CISO)

- Overall accountability for access control policy and compliance
- Approval of privileged access and exceptions
- Review of access control monitoring and incidents
- Access review oversight and compliance tracking

### IT Operations / System Administrators [TBD - if separate role]

- Provisioning and deprovisioning access based on approved requests
- Maintaining access control systems and directories
- Implementing technical access controls
- Monitoring and investigating access alerts
- Documenting access configurations

### System Owners / Application Owners

- Defining access requirements for their systems
- Approving access requests to their systems
- Conducting periodic access reviews
- Reporting access-related incidents
- Maintaining documentation of authorized users

### Managers

- Approving access requests for direct reports
- Ensuring timely removal of access when staff leave or change roles
- Participating in access reviews
- Promoting access control awareness in their teams

### All Users

- Protecting their credentials and access privileges
- Using access only for authorized business purposes
- Reporting lost/stolen credentials or access devices immediately
- Reporting suspicious access activity
- Complying with authentication requirements

### HR / Resource Management

- Notifying IT/Security of new hires, terminations, and role changes
- Coordinating onboarding and offboarding access processes
- Ensuring access removal during offboarding

## 12. Exceptions

Temporary exceptions to this policy may be granted when:

- Business justification documented and approved
- Risk assessed and accepted by CISO or delegate
- Compensating controls implemented
- Exception time-limited with review date
- Exception formally documented and tracked

Common exception scenarios:
- Emergency access during incident response
- Temporary elevated access for specific projects
- Legacy system limitations requiring workarounds

Exceptions are reviewed quarterly and do not create permanent precedent.

## 13. Consequences of Non-Compliance

Violations of access control policy may result in:

- Immediate suspension of access privileges
- Mandatory security retraining
- Disciplinary action up to and including termination
- Legal action if criminal activity is involved
- Notification to affected parties or authorities as required

Severity of consequences depends on:
- Intent (unintentional, negligent, malicious)
- Impact (data exposed, systems compromised, compliance violations)
- Pattern (isolated incident vs. repeated violations)

## 14. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-003: Acceptable Use Policy
- SW-ISMS-POL-004: Data Protection Policy

**Procedures:**
- [TBD - SW-ISMS-PRO-001: User Access Management Procedure]
- [TBD - SW-ISMS-PRO-002: Incident Management Procedure]
- [TBD - SW-ISMS-PRO-006: Offboarding Procedure]
- [TBD - SW-HR-PRO-001: Employee Onboarding Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-003: Password and Authentication Guideline]
- [TBD - SW-ISMS-GUI-002: Remote Working Security Guideline]
- [TBD - SW-ISMS-GUI-004: Clear Desk and Clear Screen Guideline]

**Supporting Documents:**
- [TBD - Role-Based Access Matrix]
- [TBD - Privileged Access Register]
- [TBD - Access Review Schedule and Templates]

## 15. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*
