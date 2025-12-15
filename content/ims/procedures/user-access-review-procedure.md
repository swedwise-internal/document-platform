---
document_id: SW-ISMS-PRO-010
title: User Access Review Procedure
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
  - SW-IMS-POL-001
  - SW-ISMS-PRO-002
---

# User Access Review Procedure

## 1. Purpose

This procedure establishes a systematic process for periodic review and recertification of user access rights to Swedwise AB's information systems, applications, and data. It ensures that access remains appropriate, follows the principle of least privilege, and prevents accumulation of unnecessary access rights over time.

## 2. Scope

This procedure applies to:

- All user accounts (employees, contractors, third parties)
- All information systems and applications
- All access levels (standard and privileged)
- Cloud services (Azure, Microsoft 365)
- SaaS platform infrastructure
- Customer systems where Swedwise has access
- Physical access to facilities (where relevant to information security)

**Access types in scope:**
- Application and system access
- Privileged and administrative access
- Customer data access
- Cloud resource access (Azure subscriptions, resource groups)
- Network access (VPN, remote access)
- Service accounts and system-to-system access
- Shared mailboxes and distribution lists
- SharePoint sites and Teams access

## 3. Definitions

| Term | Definition |
|------|------------|
| **Access Review** | Periodic verification that user access rights remain appropriate and necessary |
| **Recertification** | Formal approval by manager or system owner that access should continue |
| **Access Creep** | Gradual accumulation of unnecessary access rights over time |
| **Least Privilege** | Users have minimum access rights needed to perform their job duties |
| **Orphaned Account** | Account belonging to former employee or no longer-needed service account |
| **Dormant Account** | Active account with no recent usage |
| **Reviewer** | Person responsible for reviewing and certifying access (typically line manager) |
| **Attestation** | Formal confirmation that access has been reviewed and is appropriate |

## 4. Responsibilities

| Role | Responsibility |
|------|---------------|
| **CISO** | Overall access review framework, oversight, compliance verification, escalation handling |
| **IT Operations** | Generating access reports, executing access changes, tool administration, tracking completion |
| **Line Managers** | Reviewing and recertifying access for their team members, identifying unnecessary access |
| **System Owners** | Reviewing access to their systems/applications, approving or revoking access |
| **HR** | Providing organizational data (reporting structure, departures), supporting manager transitions |
| **Access Reviewer** | Completing assigned reviews thoroughly and on time, documenting decisions |

## 5. Access Review Types and Frequency

### 5.1 Review Schedule

| Review Type | Frequency | Scope | Primary Reviewer |
|-------------|-----------|-------|------------------|
| **Standard User Access** | Annually (Q1) | All employees: systems, applications, data access | Line Manager |
| **Privileged Access** | Quarterly | Administrative accounts, elevated privileges | CISO + Line Manager |
| **Customer Data Access** | Quarterly | Access to customer systems and data | Engagement Manager + Line Manager |
| **SaaS Platform Access** | Quarterly | Production SaaS infrastructure and customer tenant access | CISO + SaaS Service Manager |
| **Cloud Resource Access** | Quarterly | Azure subscriptions, resource groups, admin roles | Cloud Administrator + CISO |
| **Service Accounts** | Quarterly | Non-human accounts and system access | System Owner + IT Operations |
| **External/Third-Party Access** | Quarterly | Vendor and partner access to Swedwise systems | Supplier Owner + CISO |
| **Physical Access** | Annually | Office access cards, key assignments | Facilities + HR |

### 5.2 Review Triggers

**In Addition to Scheduled Reviews:**
- Role change or internal transfer
- Project or engagement completion
- Contract renewal for contractors
- Organizational restructuring
- System or application changes
- Security incident involving user account
- Audit findings or compliance requirements

## 6. Standard Annual Access Review

### 6.1 Preparation Phase

**Timeline:** Begin 4 weeks before review deadline (e.g., mid-February for Q1)

**IT Operations Prepares:**

1. **Generate Access Reports**
   - Extract user access data from all systems:
     - Active Directory / Azure AD
     - Microsoft 365 (licenses, groups, mailboxes)
     - Azure subscriptions and resources
     - SaaS platform systems
     - Business applications (CRM, ERP, etc.)
     - Network access (VPN, firewall rules)
   - Format: Organized by manager and user
   - Include: User name, systems accessed, access level, last login date, access grant date

2. **Enrich Data**
   - Add organizational information (department, role, location)
   - Flag potentially problematic access:
     - Dormant accounts (no login >90 days)
     - High-privilege accounts
     - Access to Restricted data
     - Multiple conflicting roles (segregation of duties)
     - Recently departed employees (potential orphaned accounts)

3. **Distribute Review Packages**
   - Send reports to each line manager
   - Include:
     - List of team members and their access
     - Review instructions and guidance
     - Recertification form or online portal link
     - Deadline (typically 2 weeks to complete)
     - FAQ and support contact

**Communication:**
- CISO sends announcement to all managers
- Explain purpose, process, deadline
- Emphasize importance for security and compliance
- Provide training or Q&A session if needed

### 6.2 Review Phase

**Timeline:** 2 weeks for manager review

**Line Manager Actions:**

1. **Review Each Team Member's Access**
   - For each user, verify:
     - Still employed and in this team
     - Current role and responsibilities
     - Access listed is appropriate for their role
     - No unnecessary or excessive access
     - Last login dates reasonable (if inactive, why?)

2. **Decision for Each Access Item**

   **Options:**
   - **Retain:** Access is appropriate and should continue
   - **Revoke:** Access no longer needed or inappropriate
   - **Modify:** Access level should change (increase or decrease)
   - **Investigate:** Unclear or need more information

3. **Special Attention To:**
   - **Privileged/Administrative Access:** Is it still needed? Can it be reduced?
   - **Restricted Data Access:** Is business justification still valid?
   - **Customer Data Access:** Is engagement still active?
   - **Shared Accounts or Mailboxes:** Who should have access?
   - **Inactive Accounts:** Why no recent login? Should it be disabled?
   - **Generic or Role Accounts:** Are they still needed?

4. **Document Decisions**
   - Complete recertification form or online portal
   - Provide comments for revocations or changes
   - Escalate unclear situations to CISO or System Owner

5. **Submit Recertification**
   - Electronic signature or online attestation
   - Confirms that review was completed and decisions are accurate
   - Statement: "I have reviewed the access for my team and confirm the access listed is appropriate for each individual's role and responsibilities."

**Manager Support:**
- IT Operations provides clarification on systems or access levels
- CISO available for questions on policy or risk
- HR clarifies organizational changes or departures

### 6.3 Remediation Phase

**Timeline:** 1 week for IT Operations to execute changes

**IT Operations Actions:**

1. **Process Recertification Results**
   - Consolidate manager decisions
   - Identify access to revoke or modify
   - Prioritize high-risk revocations (privileged, Restricted data)

2. **Execute Access Changes**
   - Revoke access per manager instructions
   - Modify access levels as directed
   - Disable inactive accounts (after verification)
   - Follow Change Management Procedure for system changes

3. **Verify Changes**
   - Confirm access actually removed/changed
   - Rescan systems to verify
   - Document completion

4. **Notify Users and Managers**
   - Inform users of access changes (if significant)
   - Provide manager summary of actions taken
   - Users can request re-approval if access needed

### 6.4 Reporting and Closure

**IT Operations Reports:**
- Access review completion report to CISO:
  - Completion rate (managers who completed review)
  - Total users reviewed
  - Access items reviewed
  - Revocations and modifications made
  - Dormant accounts disabled
  - Issues identified and resolved
  - Non-compliant managers

**CISO Actions:**
- Review completion and effectiveness
- Follow up on non-compliant managers
- Report to management on access review outcomes
- Archive records for audit evidence

**Timeline:** Complete all phases within 4 weeks of start

## 7. Privileged Access Review

### 7.1 Quarterly Privileged Access Review

**Frequency:** Quarterly (January, April, July, October)

**Scope:** All accounts with elevated privileges:
- System administrators
- Database administrators
- Security administrators
- Cloud global administrators
- Application administrators (with access to all data)
- Accounts with password reset capabilities
- Service desk with privileged access

**Enhanced Review Requirements:**

**CISO Personally Reviews:**
- List of all privileged accounts
- Justification for each privilege
- Recent activity logs (summary)
- Any suspicious or unusual activity
- Compliance with privileged access requirements (separate accounts, MFA, etc.)

**Review Criteria:**
- Is privilege still needed for current role?
- Has privilege been used recently? (If not, why retain?)
- Are separate privileged accounts used correctly? (Not for email, browsing)
- Is MFA enforced?
- Are activity logs reviewed regularly?
- Any policy violations?

**Actions:**
- Immediately revoke unnecessary privileges
- Require justification for continued privilege
- Enforce additional controls if concerns
- Escalate violations for disciplinary action

**Manager Recertification:**
- Manager confirms employee still needs privilege
- Manager attests to employee trustworthiness and need
- CISO has final authority to revoke

**Documentation:**
- Privileged access register updated
- Quarterly review report
- Justifications documented
- Archive for audit

## 8. Customer Data Access Review

### 8.1 Quarterly Customer Access Review

**Frequency:** Quarterly or upon engagement completion (whichever is sooner)

**Scope:**
- Swedwise employees with access to customer systems
- Access to customer data on Swedwise systems
- Customer tenant access in SaaS platform

**Engagement Manager Responsibilities:**

1. **Review Active Engagements**
   - List all active customer engagements
   - Identify staff assigned to each
   - Verify access still required

2. **Verify Access Appropriateness**
   - Staff member still working on engagement?
   - Access level appropriate for current work?
   - Customer aware and approves continued access?

3. **Identify Concluded Engagements**
   - Projects or contracts ended
   - Staff reassigned to other work
   - Access should be revoked

**Process:**
- Engagement Manager completes review per engagement
- Line Manager verifies for their team members
- IT Operations revokes access for concluded engagements
- Customer notified of access changes (if contractual requirement)

**Customer SaaS Tenant Access:**
- Review which Swedwise staff have access to each customer tenant
- Verify business need and customer approval
- Revoke access for staff no longer supporting customer
- Document customer approval for continued access

## 9. SaaS Platform Access Review

### 9.1 Quarterly SaaS Platform Review

**Scope:**
- Production SaaS infrastructure (Entiros-hosted)
- SaaS platform administrative access
- Customer tenant access
- Monitoring and management tools
- Database access (production)

**Enhanced Requirements:**
- All SaaS platform access classified as Restricted
- Minimum necessary staff with access
- Strong justification for all access
- Immediate revocation when not needed

**Review Process:**

**CISO and SaaS Service Manager:**
1. Review list of all staff with SaaS platform access
2. Verify each person's continued need and justification
3. Review activity logs for unusual access patterns
4. Confirm all access follows least privilege
5. Ensure segregation of duties (no single person with all access)

**Specific Reviews:**
- Database access: Do DBAs still need production access?
- Administrative access: Is it used regularly?
- Customer tenant access: Per engagement review
- Monitoring tools: Who should have access?

**Actions:**
- Revoke unnecessary access immediately
- Reduce access levels where possible
- Document justifications for retained access
- Report to management on SaaS access posture

## 10. Service Account Review

### 10.1 Quarterly Service Account Review

**Scope:** All non-human accounts:
- Application service accounts
- System-to-system integration accounts
- Automation and script accounts
- API keys and credentials
- Shared mailboxes (functional accounts)

**System Owner Responsibilities:**

1. **Review Service Accounts**
   - List all service accounts for their systems
   - Verify each is still needed
   - Confirm purpose and usage
   - Check last usage date

2. **Verify Configuration**
   - Credentials still secure (not exposed)
   - Access level still appropriate
   - No unused permissions
   - Monitoring in place

3. **Document and Certify**
   - Update service account register
   - Certify accounts are necessary and secure
   - Flag any concerns to CISO

**IT Operations Actions:**
- Disable unused service accounts
- Rotate credentials for active accounts
- Remove orphaned accounts (application decommissioned)
- Update service account documentation

## 11. Access Review for Special Cases

### 11.1 Shared Accounts and Generic Accounts

**Policy:** Shared accounts discouraged; use individual accounts with role-based access

**If Shared Accounts Exist:**
- Document business justification
- List authorized users
- Enhanced logging and monitoring
- Quarterly review of authorized users
- Plan to eliminate shared accounts

**Review Process:**
- System Owner justifies continued need for shared account
- IT Operations reviews who has shared credentials
- Verify authorized users are current
- Rotate credentials quarterly
- Plan migration to individual accounts

### 11.2 Break-Glass and Emergency Accounts

**Special Handling:**
- Emergency administrative accounts reviewed quarterly
- Verify stored securely (privileged access vault or physical safe)
- Confirm credentials valid and documented
- Test access quarterly (controlled test)
- Usage triggers immediate review (should be rare)

**Review Checklist:**
- Credentials accessible to authorized personnel only
- Documentation up-to-date
- Passwords complex and rotated annually
- Usage monitored and logged
- Post-use password change required

### 11.3 Guest and External User Access

**Microsoft 365 and SharePoint Guest Access:**
- Quarterly review of external users
- IT Operations generates list of guest accounts
- System Owners verify business need for guests
- Remove guests for concluded projects or collaborations
- Verify guests have appropriate access level (not excessive)

**External B2B Access:**
- Partner or vendor access to Swedwise systems
- Supplier Owner certifies continued need
- Review per Supplier Security Assessment Procedure
- Revoke access for concluded contracts

### 11.4 Inactive and Dormant Accounts

**Definition:**
- Dormant: No login for 90+ days
- Inactive: No login for 120+ days

**Review Process:**
- IT Operations flags dormant accounts monthly
- Line Manager verifies status:
  - On extended leave (approve retention)
  - No longer needed (approve disable)
  - Should be active (investigate why not used)
- Disable inactive accounts (120+ days) automatically after manager notification
- Delete disabled accounts after 90 days (unless legal hold)

**Exceptions:**
- Approved leave of absence
- Service accounts (reviewed separately)
- Legal hold or compliance retention

## 12. Non-Compliance and Escalation

### 12.1 Manager Non-Completion

**If Manager Does Not Complete Review by Deadline:**

**Week 1 After Deadline:**
- Automated reminder email
- CC: Department head

**Week 2:**
- IT Operations escalates to CISO
- CISO contacts manager and department head
- Explain compliance requirement and risk

**Week 3:**
- Escalate to CEO
- Access reviews are mandatory compliance requirement
- Persistent non-compliance may result in:
  - Access suspension for non-reviewed team members (until review complete)
  - Performance management action

**Week 4+:**
- CISO may revoke unclear access per risk-based decision
- Document non-compliance for audit and management
- Disciplinary action per HR policy

### 12.2 Disputed Access Decisions

**If User Disputes Access Revocation:**
- User contacts manager to explain business need
- Manager reviews and may reverse decision
- Manager submits updated recertification
- IT Operations restores access if approved
- Document resolution

**Escalation:**
- If manager and user disagree, escalate to CISO
- CISO reviews policy and risk
- CISO makes final decision
- Document justification

### 12.3 System Owner Concerns

**If System Owner Identifies Inappropriate Access:**
- System Owner flags concern to CISO
- CISO investigates
- If valid concern, immediate access revocation
- Manager notified and asked to explain
- Document as potential security incident if malicious

## 13. Access Review Tools and Automation

### 13.1 Access Review Tools

**Desired Capabilities:**
- Automated access data collection from systems
- Manager dashboard for review and attestation
- Workflow and approval tracking
- Automated reminders and escalations
- Reporting and audit trails
- Integration with HR and identity systems

**Potential Tools:**
- Identity Governance and Administration (IGA) tools
- Azure AD Access Reviews
- Microsoft Entra Identity Governance
- Custom tools or scripts (if budget-constrained)

**Current Approach:** [TBD - Document current tool or manual process]

### 13.2 Automation Opportunities

**Automate Where Possible:**
- Access data collection and report generation
- Dormant account detection and flagging
- Manager reminder emails
- Escalation workflows
- Access revocation execution (after approval)
- Reporting and dashboard updates

**Manual Steps:**
- Manager review and decision-making (cannot be fully automated)
- Judgment calls on appropriateness
- Investigation of unclear cases

### 13.3 Data Sources

**Systems to Include in Access Reviews:**
- Azure Active Directory / Microsoft 365
- Azure subscriptions and resources
- SaaS platform systems (application-specific)
- Business applications (CRM, ERP, etc.)
- VPN and network access systems
- Physical access control system
- Customer systems (if access tracked centrally)

**Challenges:**
- Fragmented data across systems
- Different access models and terminologies
- Manual access in some systems

**Approach:**
- Prioritize critical and high-risk systems
- Incremental expansion of coverage
- Document known gaps and plan to address

## 14. Metrics and Reporting

### 14.1 Key Performance Indicators

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Access review completion rate** | 100% | Managers completing reviews on time / Total managers |
| **Access items reviewed** | 100% | All user access reviewed per schedule |
| **Revocation rate** | 5-15% | Access items revoked / Total reviewed |
| **Dormant accounts disabled** | 100% | Dormant accounts disabled / Total dormant |
| **Privileged access review completion** | 100% quarterly | Privileged accounts reviewed / Total privileged |
| **Average time to complete review** | < 14 days | Days from distribution to manager submission |

### 14.2 Reporting Frequency

**Monthly (IT Operations Internal):**
- Dormant account report
- Review schedule adherence
- Upcoming reviews

**Quarterly (to CISO):**
- Privileged access review summary
- Customer access review summary
- SaaS platform access review summary
- Service account review summary
- Metrics and trends

**Annual (to Management):**
- Annual access review summary
- Total users and access reviewed
- Revocations and modifications
- Compliance rate
- Issues and improvements
- Comparison to prior year

### 14.3 Audit Evidence

**Maintain for Audit:**
- Access review schedules and plans
- Access reports provided to managers
- Manager attestations and decisions
- IT Operations execution records
- Completion reports and metrics
- Non-compliance and escalation documentation

**Retention:** 7 years (per audit requirements)

## 15. Continuous Improvement

### 15.1 Annual Review of Procedure

**Each year after annual access review:**
- CISO reviews procedure effectiveness
- Gather feedback from managers and IT Operations
- Identify pain points and inefficiencies
- Assess tool and automation opportunities
- Update procedure based on lessons learned

**Considerations:**
- Were reviews completed on time?
- Was guidance clear and sufficient?
- Were tools adequate?
- What can be improved for next cycle?

### 15.2 Process Improvements

**Opportunities:**
- Automate more steps (reduce manual effort)
- Improve access data quality and presentation
- Manager training on access review
- Role-based access templates (reduce review burden)
- Integration with HR systems (auto-updates for departures, transfers)

### 15.3 Risk-Based Approach

**Focus Effort on Higher Risk:**
- Privileged access: Most thorough review
- Restricted data access: Enhanced scrutiny
- Customer access: Frequent review
- Standard internal access: Streamlined review (focus on exceptions)

**Optimize Resources:**
- Automate low-risk reviews where possible
- Manager effort focused on high-risk decisions
- CISO attention on privileged and critical access

## 16. Integration with Access Management

**Access Reviews Complement Access Management Procedure (SW-ISMS-PRO-002):**

- **Access Management:** Controls how access is granted, modified, and revoked (day-to-day)
- **Access Review:** Periodic verification that access remains appropriate (oversight)

**Feedback Loop:**
- Access review findings inform access management improvements
- Patterns of unnecessary access → Tighten approval process
- Dormant accounts → Improve leaver process
- Privilege creep → Review role templates and default access

**Coordination:**
- IT Operations manages both procedures
- Access review may trigger access management actions (revocations)
- Access management changes reflected in next access review

## 17. Inputs and Outputs

**Inputs:**
- User access data from all systems
- Organizational data (reporting structure, departures)
- Role and responsibility information
- Previous access review results
- Audit and compliance requirements

**Outputs:**
- Manager attestations (recertifications)
- Access revocations and modifications
- Updated access rights (in systems)
- Access review reports and metrics
- Compliance evidence for audits
- Recommendations for access management improvements

## 18. Records

| Record | Retention Period | Location |
|--------|------------------|----------|
| Access reports (provided to managers) | 7 years | [TBD - Document repository or access review system] |
| Manager attestations and decisions | 7 years | [TBD - Access review system] |
| Access review completion reports | 7 years | [TBD - Document repository] |
| Privileged access review records | 7 years | [TBD - Privileged access register] |
| Service account review records | 3 years | [TBD - Service account register] |
| Non-compliance and escalation documentation | 7 years | [TBD - Document repository] |

## 19. Related Documents

**Policies:**
- SW-ISMS-POL-001: Information Security Policy
- SW-IMS-POL-001: Integrated Management System Policy

**Procedures:**
- SW-IMS-PRO-001: Document Control Procedure
- SW-ISMS-PRO-002: Access Management Procedure
- [TBD - SW-ISMS-PRO-005: Change Management Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-001: Information Classification Guideline]
- [TBD - SW-ISMS-GUI-003: Password and Authentication Guideline]

**Forms:**
- [TBD - SW-ISMS-FRM-015: Access Review Attestation Form]
- [TBD - SW-ISMS-FRM-016: Privileged Access Review Checklist]

**Registers:**
- [TBD - User Access Register]
- [TBD - Privileged Account Register]
- [TBD - Service Account Register]

**External:**
- ISO 27001:2022 - Clause 5.18 (Access rights)
- ISO 27001:2022 - Clause 8.2 (Privileged access rights)

## 20. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO] | Initial procedure creation | [TBD - CEO] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This procedure is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this procedure.*
