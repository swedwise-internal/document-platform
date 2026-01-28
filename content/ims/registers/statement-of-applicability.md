---
document_id: SW-ISMS-SOA-001
title: Statement of Applicability
doc_type: register
version: "1.0"
status: draft
classification: confidential
owner: CISO
effective_date: 2025-01-01
review_date: 2026-01-01
standard:
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-ISMS-POL-001
  - SW-ISMS-REG-001
  - SW-ISMS-REG-002
---

# Statement of Applicability (SoA)

**Organization**: Swedwise AB
**Standard**: ISO/IEC 27001:2022
**Date**: 2025-01-01
**Version**: 1.0

---

## Executive Summary

This Statement of Applicability (SoA) documents the information security controls from ISO/IEC 27001:2022 Annex A that are applicable to Swedwise AB's Information Security Management System (ISMS). The SoA is a mandatory requirement for ISO 27001 certification and demonstrates systematic control selection based on risk assessment.

### Control Statistics

| Metric | Count | Percentage |
|--------|-------|------------|
| **Total Controls (Annex A)** | 93 | 100% |
| **Applicable** | 89 | 95.7% |
| **Not Applicable** | 4 | 4.3% |

### Implementation Status

| Status | Count | Percentage |
|--------|-------|------------|
| **Implemented** | 62 | 69.7% |
| **Partially Implemented** | 23 | 25.8% |
| **Planned** | 4 | 4.5% |

### Not Applicable Controls Summary

| Control | Reason for Exclusion |
|---------|---------------------|
| A.7.4 Physical security monitoring | Office-based environment; not a high-security facility requiring CCTV/monitoring |
| A.8.11 Data masking | Not currently required; no development/test environments using production data |
| A.8.16 Monitoring activities | Partial; full SIEM not proportionate for organization size; basic monitoring adequate |
| A.8.28 Secure coding | Minimal in-house software development; primarily COTS products and SaaS |

### Organization Context

**Swedwise AB** is a 35-person IT consultancy providing:
- Software licenses, consulting, and implementation projects
- SaaS services (Swedwise Communications - OpenText Exstream + Notifications)
- Services to large public and private organizations in the Nordic region

**Key Characteristics:**
- Three office locations (Karlstad HQ, Stockholm, Uddevalla)
- Remote working enabled
- Cloud-based infrastructure (Azure, Microsoft 365)
- SaaS platform hosted at Swedish data center (Entiros AB)
- Handles customer confidential data
- No manufacturing or physical product development

---

## Control Applicability Matrix

### Legend

| Abbreviation | Meaning |
|--------------|---------|
| **Applicable** | Yes / No |
| **Status** | I = Implemented, P = Partially Implemented, PL = Planned, N/A = Not Applicable |

---

## A.5 Organizational Controls (37 controls)

### A.5.1 Policies for information security

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Core requirement for ISMS governance |
| **Implementation** | Information Security Policy (SW-ISMS-POL-001) approved and communicated. Policy framework covers all security domains. Annual review scheduled. |
| **Evidence** | SW-ISMS-POL-001, Policy register, Communication records |

### A.5.2 Information security roles and responsibilities

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Clear accountability required for effective security management |
| **Implementation** | CISO role defined (SW-ISMS-ROLE-001), IMS Owner (SW-IMS-ROLE-001), all employee responsibilities documented (SW-IMS-ROLE-004). Roles communicated during onboarding. |
| **Evidence** | SW-ISMS-ROLE-001, SW-IMS-ROLE-001, SW-IMS-ROLE-004, Organization chart |

### A.5.3 Segregation of duties

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Prevents fraud and errors; critical for financial and access management |
| **Implementation** | Basic segregation in place (finance approval levels, access provisioning separate from use). Formal matrix to be developed. |
| **Gap** | Documented segregation matrix needed |
| **Action** | Create segregation of duties matrix (Q2 2025) |
| **Evidence** | Access Control Policy (SW-ISMS-POL-002), Finance procedures |

### A.5.4 Management responsibilities

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Leadership commitment essential for ISMS effectiveness |
| **Implementation** | Management responsibilities defined in IMS Policy. CEO commitment statement. CISO reports to management. Regular security updates in management meetings. |
| **Evidence** | SW-IMS-POL-001, Management meeting minutes, CISO reports |

### A.5.5 Contact with authorities

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Required for incident reporting and regulatory compliance |
| **Implementation** | Contact list maintained for: Swedish Police (cybercrime), IMY (data protection authority), MSB (civil contingencies), CERT-SE. Incident procedure includes authority notification requirements. |
| **Evidence** | SW-ISMS-PRO-002 (Incident Management), Authority contact register |

### A.5.6 Contact with special interest groups

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Threat intelligence and industry best practices sharing |
| **Implementation** | Membership in IT & Telekomföretagen (industry association). CISO monitors security forums and mailing lists. |
| **Gap** | Formalize participation in security-specific groups |
| **Action** | Evaluate ISACA/ISF membership (Q3 2025) |
| **Evidence** | Membership records, CISO activity log |

### A.5.7 Threat intelligence

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Proactive awareness of threats to inform security decisions |
| **Implementation** | CISO subscribes to threat feeds (CERT-SE, Microsoft Security). Weekly review of relevant threats. Alerts shared with IT team. |
| **Gap** | Formal threat intelligence procedure needed |
| **Action** | Document threat intelligence procedure (Q2 2025) |
| **Evidence** | Threat briefings, Security bulletins, CISO activity log |

### A.5.8 Information security in project management

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Security must be embedded in project delivery |
| **Implementation** | Security considerations included in project templates. Risk assessment for customer projects. Security review for SaaS deployments. |
| **Gap** | Formal security checklist for all projects |
| **Action** | Create project security checklist (Q2 2025) |
| **Evidence** | Project templates, Risk assessments, SaaS deployment checklist |

### A.5.9 Inventory of information and other associated assets

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Cannot protect what you don't know exists |
| **Implementation** | Asset Register (SW-ISMS-REG-002) maintained. Covers hardware, software, data, cloud services. Asset owners assigned. Annual review. |
| **Evidence** | SW-ISMS-REG-002, Asset management system, Annual asset review |

### A.5.10 Acceptable use of information and other associated assets

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Clear rules for using company assets prevent misuse |
| **Implementation** | Acceptable Use Policy (SW-ISMS-POL-003) covers email, internet, devices, software. Communicated during onboarding. Annual acknowledgment required. |
| **Evidence** | SW-ISMS-POL-003, Signed acknowledgments, Onboarding checklist |

### A.5.11 Return of assets

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Prevent data loss when employees leave |
| **Implementation** | Exit procedure includes asset return checklist. HR coordinates with IT. All equipment returned and wiped. Access revoked same day. |
| **Evidence** | Offboarding checklist, Asset return records, Access revocation log |

### A.5.12 Classification of information

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Different data requires different protection levels |
| **Implementation** | Four-level classification scheme: Public, Internal, Confidential, Restricted. Classification Policy (SW-ISMS-POL-009) with handling requirements. Information Classification Guideline (SW-ISMS-GUI-001). |
| **Evidence** | SW-ISMS-POL-009, SW-ISMS-GUI-001, Classified document examples |

### A.5.13 Labelling of information

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Clear labeling enables appropriate handling |
| **Implementation** | Document templates include classification field. Email classifications encouraged. Physical document marking in place. |
| **Gap** | Automated labeling for Microsoft 365 |
| **Action** | Implement sensitivity labels (Q3 2025) |
| **Evidence** | Document templates, Email samples, Labeling guidelines |

### A.5.14 Information transfer

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Secure transfer protects data in transit |
| **Implementation** | Encrypted email (TLS enforced). Secure file sharing (SharePoint/OneDrive). Customer data transfer via secure portals. External USB blocked. Classification-based transfer rules. |
| **Evidence** | Email security settings, SharePoint configuration, Data transfer log |

### A.5.15 Access control

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Fundamental control to protect information |
| **Implementation** | Access Control Policy (SW-ISMS-POL-002) based on least privilege. Role-based access (RBAC). Access Management Procedure (SW-ISMS-PRO-003). MFA mandatory. Regular access reviews (SW-ISMS-PRO-007). |
| **Evidence** | SW-ISMS-POL-002, SW-ISMS-PRO-003, SW-ISMS-PRO-007, Access review records |

### A.5.16 Identity management

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Unique identification enables accountability |
| **Implementation** | Azure AD for identity management. Unique user IDs. No shared accounts. Service accounts documented and secured. Identity lifecycle managed via HR integration. |
| **Evidence** | Azure AD configuration, User provisioning procedure, Service account register |

### A.5.17 Authentication information

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Strong authentication prevents unauthorized access |
| **Implementation** | Password policy enforced (min 14 chars, complexity). MFA for all users. Password manager recommended. Self-service password reset with verification. Privileged accounts have enhanced requirements. |
| **Evidence** | SW-ISMS-GUI-002 (Password Guideline), Azure AD policy settings, MFA enrollment report |

### A.5.18 Access rights

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Proper provisioning and review ensures appropriate access |
| **Implementation** | Access provisioned based on job role (joiner process). Changes processed via ticket (mover process). Access revoked within 24 hours of termination (leaver process). Quarterly access reviews. |
| **Evidence** | SW-ISMS-PRO-003, SW-ISMS-PRO-007, Access review records, Provisioning tickets |

### A.5.19 Information security in supplier relationships

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Suppliers can introduce security risks |
| **Implementation** | Supplier Management Policy (SW-IMS-POL-002). Security requirements in contracts. Supplier Security Assessment Procedure (SW-ISMS-PRO-008). NDA required for all suppliers accessing data. |
| **Evidence** | SW-IMS-POL-002, SW-ISMS-PRO-008, Supplier contracts, NDA templates |

### A.5.20 Addressing information security within supplier agreements

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Contractual requirements are enforceable |
| **Implementation** | Standard security clauses in supplier contracts. Data processing agreements for processors. Right to audit. Incident notification requirements. Security standards specified. |
| **Evidence** | Contract templates, DPA templates, Supplier agreement register |

### A.5.21 Managing information security in the ICT supply chain

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | ICT supply chain presents unique risks |
| **Implementation** | Key ICT suppliers assessed (Microsoft, OpenText, Entiros). Security certifications verified. Software provenance checked for major components. |
| **Gap** | Formal ICT supply chain risk assessment |
| **Action** | Conduct ICT supply chain risk assessment (Q2 2025) |
| **Evidence** | Supplier assessments, Certification records, SW-ISMS-PRO-008 |

### A.5.22 Monitoring, review and change management of supplier services

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Ongoing oversight ensures continued security |
| **Implementation** | Annual supplier reviews. SLA monitoring for critical suppliers. Change notifications required from suppliers. Security certifications re-verified annually. |
| **Evidence** | Supplier review records, SLA reports, Change notification log |

### A.5.23 Information security for use of cloud services

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Cloud services are core to operations |
| **Implementation** | Cloud services registered in asset inventory. Shared responsibility model understood. Microsoft 365 security configured. Azure security baseline applied. Data residency (EU/Sweden) enforced. |
| **Evidence** | Cloud service register, Configuration documentation, Data residency settings |

### A.5.24 Information security incident management planning and preparation

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Prepared response reduces incident impact |
| **Implementation** | Incident Management Procedure (SW-ISMS-PRO-002). Incident response team defined. Communication templates prepared. Escalation paths documented. Tabletop exercises conducted. |
| **Evidence** | SW-ISMS-PRO-002, Incident response plan, Exercise records |

### A.5.25 Assessment and decision on information security events

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Accurate assessment enables appropriate response |
| **Implementation** | Incident classification criteria defined (severity levels). Triage process documented. CISO makes security incident declarations. Microsoft 365 security alerts monitored. |
| **Evidence** | SW-ISMS-PRO-002, Incident classification matrix, Alert monitoring dashboard |

### A.5.26 Response to information security incidents

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Effective response limits damage |
| **Implementation** | Response procedures for common incident types. Containment, eradication, recovery steps defined. External resources identified (forensics, legal). Post-incident review required. |
| **Evidence** | SW-ISMS-PRO-002, Incident playbooks, Post-incident reports |

### A.5.27 Learning from information security incidents

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Continuous improvement from incidents |
| **Implementation** | Root cause analysis for significant incidents. Lessons learned documented. Corrective actions tracked. Trends analyzed quarterly. Input to risk assessment. |
| **Evidence** | Post-incident reports, Corrective action register, Quarterly security reports |

### A.5.28 Collection of evidence

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Evidence may be needed for legal/disciplinary action |
| **Implementation** | Basic evidence collection guidance in incident procedure. Audit logs retained. Chain of custody understood. |
| **Gap** | Formal forensic evidence procedure |
| **Action** | Develop evidence collection procedure (Q3 2025) |
| **Evidence** | SW-ISMS-PRO-002, Audit log retention settings, Evidence examples |

### A.5.29 Information security during disruption

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Security must be maintained during crises |
| **Implementation** | Business Continuity Policy (SW-ISMS-POL-011) includes security requirements. Disaster recovery includes security controls. Remote working capability maintains security. |
| **Evidence** | SW-ISMS-POL-011, DR plan, Remote working policy |

### A.5.30 ICT readiness for business continuity

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | ICT critical for business operations |
| **Implementation** | ICT continuity requirements defined. Cloud services provide inherent resilience. Backup and recovery tested (SW-ISMS-PRO-004). RTO/RPO defined for critical systems. |
| **Evidence** | SW-ISMS-POL-011, SW-ISMS-PRO-004, Backup test records, RTO/RPO matrix |

### A.5.31 Legal, statutory, regulatory and contractual requirements

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Compliance is mandatory |
| **Implementation** | Legal Compliance Procedure (SW-IMS-PRO-012). Compliance register maintained. GDPR compliance program. Customer contractual requirements tracked. Annual compliance review. |
| **Evidence** | SW-IMS-PRO-012, Compliance register, GDPR documentation |

### A.5.32 Intellectual property rights

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Protect own and respect others' IP |
| **Implementation** | Software licensing tracked. Only licensed software used. Customer IP protected per contracts. Employee IP agreements in employment contracts. |
| **Evidence** | Software license register, Employment contracts, Customer agreements |

### A.5.33 Protection of records

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Records may be required for legal/business purposes |
| **Implementation** | Document Control Procedure (SW-IMS-PRO-001) covers records. Retention periods defined. Records backed up. Access controlled. Destruction procedures in place. |
| **Evidence** | SW-IMS-PRO-001, Retention schedule, Backup records |

### A.5.34 Privacy and protection of PII

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | GDPR compliance mandatory |
| **Implementation** | Data Protection Policy (SW-ISMS-POL-004). DPO role defined (SW-ISMS-ROLE-003). ROPA maintained. Privacy notices published. DPIA process in place. Data subject rights procedures. |
| **Evidence** | SW-ISMS-POL-004, SW-ISMS-ROLE-003, ROPA, Privacy notices |

### A.5.35 Independent review of information security

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Independent assurance of ISMS effectiveness |
| **Implementation** | Internal Audit Procedure (SW-IMS-PRO-002). Annual audit program. External certification audits. Penetration testing for SaaS platform. |
| **Evidence** | SW-IMS-PRO-002, Audit schedule, Audit reports, Pentest reports |

### A.5.36 Compliance with policies, rules and standards for information security

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Policies must be followed to be effective |
| **Implementation** | Compliance monitoring via audits. Manager responsibility for team compliance. Non-compliance addressed via corrective action. Training on policies mandatory. |
| **Evidence** | Audit reports, Training records, Corrective action register |

### A.5.37 Documented operating procedures

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Consistent secure operations require documentation |
| **Implementation** | Operating procedures documented for IT systems. Procedures maintained in document management system. Version controlled. Regularly reviewed. |
| **Evidence** | IT procedures, Document register, Review records |

---

## A.6 People Controls (8 controls)

### A.6.1 Screening

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Verify trustworthiness before granting access |
| **Implementation** | Reference checks for all employees. ID verification. Background checks for sensitive roles. Contractor screening via agencies. |
| **Gap** | Formal screening policy for different role sensitivities |
| **Action** | Develop screening policy (Q2 2025) |
| **Evidence** | HR Security Policy (SW-ISMS-POL-007), Screening records |

### A.6.2 Terms and conditions of employment

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Clear expectations for security responsibilities |
| **Implementation** | Employment contracts include security responsibilities. Confidentiality clauses. Acceptable use acknowledgment. Post-employment obligations. Security policy acknowledgment required. |
| **Evidence** | SW-ISMS-POL-007, Employment contract template, Signed acknowledgments |

### A.6.3 Information security awareness, education and training

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Human factor critical for security |
| **Implementation** | Security Awareness Training Procedure (SW-ISMS-PRO-006). Mandatory onboarding training. Annual refresher training. Role-specific training for IT/CISO. Phishing simulations conducted. |
| **Evidence** | SW-ISMS-PRO-006, Training records, Phishing simulation results |

### A.6.4 Disciplinary process

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Consequences for violations deter misconduct |
| **Implementation** | HR disciplinary process addresses security violations. Proportionate responses defined. Investigation procedures. Appeals process. |
| **Evidence** | SW-ISMS-POL-007, HR policies, Disciplinary records |

### A.6.5 Responsibilities after termination or change of employment

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Ongoing obligations after leaving |
| **Implementation** | Confidentiality survives employment. Exit interviews include security reminders. Non-compete/non-disclosure as appropriate. Access removed promptly. |
| **Evidence** | Employment contracts, Exit checklist, Offboarding records |

### A.6.6 Confidentiality or non-disclosure agreements

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Legal protection for confidential information |
| **Implementation** | NDA in employment contracts. Separate NDA for contractors. Customer NDA as required. NDA for suppliers accessing data. |
| **Evidence** | NDA templates, Signed agreements register |

### A.6.7 Remote working

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Remote working is standard practice |
| **Implementation** | Remote Working Policy (SW-ISMS-POL-013). Remote Working Guideline (SW-ISMS-GUI-006). MFA required. VPN available. Secure home working requirements. |
| **Evidence** | SW-ISMS-POL-013, SW-ISMS-GUI-006, VPN configuration |

### A.6.8 Information security event reporting

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Early detection depends on reporting |
| **Implementation** | Reporting channels communicated (email, Teams, phone). All employees trained to recognize events. No-blame culture for reporting. Response acknowledgment within 1 hour. |
| **Evidence** | SW-ISMS-PRO-002, Training materials, Event reports |

---

## A.7 Physical Controls (14 controls)

### A.7.1 Physical security perimeters

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Office contains IT equipment and documents |
| **Implementation** | Office buildings have controlled access (key cards). Reception areas in larger offices. Visitor registration. After-hours security (building management). |
| **Evidence** | Physical Security Policy (SW-ISMS-POL-005), Office access logs |

### A.7.2 Physical entry

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Control who enters secure areas |
| **Implementation** | Key card access to offices. Visitor sign-in required. Visitors escorted. Access revoked for leavers. Access logs maintained. |
| **Evidence** | SW-ISMS-POL-005, Access card register, Visitor log |

### A.7.3 Securing offices, rooms and facilities

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Different areas have different security needs |
| **Implementation** | Server room locked (where applicable). Meeting rooms for confidential discussions. Clean desk policy. Lockable storage for sensitive documents. |
| **Evidence** | SW-ISMS-POL-005, SW-ISMS-GUI-003 (Clean Desk), Office layout |

### A.7.4 Physical security monitoring

| Attribute | Value |
|-----------|-------|
| **Applicable** | **No** |
| **Status** | N/A |
| **Justification** | Office-based environment does not warrant CCTV or intrusion detection. Building management provides basic security. SaaS infrastructure hosted at Entiros data center (their responsibility). Risk assessment does not require enhanced monitoring. |

### A.7.5 Protecting against physical and environmental threats

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Protect against fire, flood, etc. |
| **Implementation** | Fire detection and suppression (building). No basement offices (flood risk). UPS for critical equipment. Entiros data center has full environmental controls. |
| **Evidence** | Building certifications, Entiros data center specifications |

### A.7.6 Working in secure areas

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Additional controls for sensitive areas |
| **Implementation** | Server room access restricted. No photography in secure areas. Mobile devices secured during meetings. Visitor escort in all areas. |
| **Evidence** | SW-ISMS-POL-005, Secure area procedures |

### A.7.7 Clear desk and clear screen

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Prevent casual observation of sensitive information |
| **Implementation** | Clean Desk Guideline (SW-ISMS-GUI-003). Auto-lock screen (5 min). Sensitive documents secured end of day. Printers cleared immediately. |
| **Evidence** | SW-ISMS-GUI-003, Screen lock policy settings |

### A.7.8 Equipment siting and protection

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Protect equipment from damage/theft |
| **Implementation** | Laptops are primary devices (mobile). Docking stations secured. No equipment in public areas unattended. Server equipment in locked facilities. |
| **Evidence** | Asset register, Equipment placement guidelines |

### A.7.9 Security of assets off-premises

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Equipment used outside office |
| **Implementation** | Mobile Device Guideline (SW-ISMS-GUI-004). Full disk encryption mandatory. VPN for network access. Device tracking enabled. Report loss immediately. |
| **Evidence** | SW-ISMS-GUI-004, Encryption settings, MDM configuration |

### A.7.10 Storage media

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Removable media can cause data leakage |
| **Implementation** | USB storage blocked by default. Encrypted USB only when approved. Cloud storage preferred. Media inventory tracked. |
| **Evidence** | USB policy settings, Media register |

### A.7.11 Supporting utilities

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Power and connectivity critical |
| **Implementation** | UPS for critical equipment. Redundant internet (main offices). Generator backup at Entiros data center. Mobile connectivity backup. |
| **Evidence** | UPS inventory, Internet contracts, Data center SLA |

### A.7.12 Cabling security

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Protect network infrastructure |
| **Implementation** | Network cabling in trunking. Patch panels in locked cabinets. Wireless primary (reduces cabling). Data center cabling managed by Entiros. |
| **Evidence** | Office layout documentation, Network documentation |

### A.7.13 Equipment maintenance

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Maintain availability and security |
| **Implementation** | Laptops replaced on 3-year cycle. Maintenance by authorized personnel only. Remote maintenance logged. Server maintenance by Entiros. |
| **Evidence** | Asset lifecycle records, Maintenance logs, Service contracts |

### A.7.14 Secure disposal or re-use of equipment

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Prevent data recovery from disposed equipment |
| **Implementation** | Data wiped before disposal (NIST 800-88). Certificate of destruction obtained. E-waste through certified recycler. Storage media physically destroyed if warranted. |
| **Evidence** | Disposal records, Destruction certificates, Recycler contracts |

---

## A.8 Technological Controls (34 controls)

### A.8.1 User endpoint devices

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Endpoints are primary attack vector |
| **Implementation** | Mobile Device Guideline (SW-ISMS-GUI-004). Company laptops required. MDM/MAM via Intune. Full disk encryption. Antivirus/EDR. Auto-updates enabled. |
| **Evidence** | SW-ISMS-GUI-004, Intune configuration, Endpoint security dashboard |

### A.8.2 Privileged access rights

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Privileged accounts are high-value targets |
| **Implementation** | Separate admin accounts. MFA mandatory. Just-in-time access via PIM. Privileged access workstations for IT. Logging of privileged actions. |
| **Evidence** | SW-ISMS-POL-002, PIM configuration, Admin account register |

### A.8.3 Information access restriction

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Need-to-know principle |
| **Implementation** | Role-based access control. SharePoint permissions by team/project. Customer data segregated. Database access restricted. Application-level access controls. |
| **Evidence** | Access matrix, SharePoint permissions, Application access settings |

### A.8.4 Access to source code

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Source code is valuable IP |
| **Implementation** | Azure DevOps for source control. Branch protection. Code review required. Access limited to developers. Audit logging enabled. |
| **Evidence** | Azure DevOps configuration, Access reports |

### A.8.5 Secure authentication

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Strong authentication prevents unauthorized access |
| **Implementation** | Azure AD authentication. MFA for all users (Authenticator app/FIDO2). SSO where possible. Password policy enforced. Conditional access policies. |
| **Evidence** | SW-ISMS-GUI-002, Azure AD configuration, MFA report, Conditional access policies |

### A.8.6 Capacity management

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Avoid performance/availability issues |
| **Implementation** | Capacity Management Policy (SW-IMS-POL-003). Cloud services auto-scale. Monitoring for capacity alerts. Annual capacity review. SaaS platform capacity planned. |
| **Evidence** | SW-IMS-POL-003, Capacity monitoring dashboards, Capacity plans |

### A.8.7 Protection against malware

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Malware is persistent threat |
| **Implementation** | Microsoft Defender for Endpoint. Real-time protection. Cloud-delivered protection. Automatic updates. Email filtering (Defender for Office 365). Web filtering. |
| **Evidence** | Defender configuration, Security dashboard, Malware reports |

### A.8.8 Management of technical vulnerabilities

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Vulnerabilities enable attacks |
| **Implementation** | Vulnerability Management Procedure (SW-ISMS-PRO-005). Automated vulnerability scanning. Monthly patching cycle. Critical patches within 72 hours. Vulnerability tracking. |
| **Evidence** | SW-ISMS-PRO-005, Vulnerability scan reports, Patch records |

### A.8.9 Configuration management

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Consistent secure configurations |
| **Implementation** | Security baselines for endpoints (Intune). Azure policy for cloud resources. Configuration documented. Changes via change management. Drift monitoring. |
| **Evidence** | Intune baselines, Azure policies, Configuration documentation |

### A.8.10 Information deletion

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Data minimization and compliance |
| **Implementation** | Retention policies in Microsoft 365. Data deletion procedures. Customer data deleted per contract. Backup retention aligned with retention schedule. |
| **Evidence** | Retention policies, Deletion procedures, Customer data lifecycle |

### A.8.11 Data masking

| Attribute | Value |
|-----------|-------|
| **Applicable** | **No** |
| **Status** | N/A |
| **Justification** | Not currently required. No development/test environments using production data copies. SaaS development uses synthetic data. If requirement emerges, will be implemented. |

### A.8.12 Data leakage prevention

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Prevent unauthorized data exfiltration |
| **Implementation** | USB blocked. Email filtering. DLP policies in Microsoft 365 (basic). Cloud app discovery. |
| **Gap** | Enhanced DLP policies for sensitive data types |
| **Action** | Implement Microsoft Purview DLP (Q3 2025) |
| **Evidence** | USB policy, Email filtering rules, DLP reports |

### A.8.13 Information backup

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Data recovery capability essential |
| **Implementation** | Backup and Recovery Procedure (SW-ISMS-PRO-004). Microsoft 365 backup (3rd party). Azure backup for cloud workloads. SaaS platform backup every 6 hours. Quarterly restore tests. |
| **Evidence** | SW-ISMS-PRO-004, Backup configuration, Restore test records |

### A.8.14 Redundancy of information processing facilities

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Availability requirements |
| **Implementation** | Microsoft 365 SLA (99.9%). Azure regional redundancy. SaaS platform at Entiros with redundant infrastructure. Secondary data center for DR. |
| **Evidence** | SLA documentation, Architecture diagrams, DR plan |

### A.8.15 Logging

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Detection and investigation capability |
| **Implementation** | Logging and Monitoring Policy (SW-ISMS-POL-010). Azure AD sign-in logs. Microsoft 365 unified audit log. Azure activity logs. Log retention 90 days minimum. |
| **Evidence** | SW-ISMS-POL-010, Log retention settings, Audit log examples |

### A.8.16 Monitoring activities

| Attribute | Value |
|-----------|-------|
| **Applicable** | **Partial** |
| **Status** | Partially Implemented |
| **Justification** | Monitoring proportionate to organization size. Full SIEM not currently justified by risk assessment. Basic monitoring adequate. |
| **Implementation** | Microsoft 365 security alerts. Azure Security Center. Alert notifications to IT. Weekly security review. |
| **Gap** | Enhanced monitoring if risk profile changes |
| **Evidence** | SW-ISMS-POL-010, Alert configuration, Security review records |

### A.8.17 Clock synchronization

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Accurate timestamps for logging |
| **Implementation** | All systems sync to NTP. Microsoft systems use time.windows.com. Azure uses synchronized time. Log timestamps in UTC. |
| **Evidence** | NTP configuration, Time sync settings |

### A.8.18 Use of privileged utility programs

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Utility programs can bypass controls |
| **Implementation** | Admin tools restricted to IT. PowerShell logging enabled. Remote management tools controlled. No unauthorized utilities. |
| **Evidence** | Admin tool inventory, PowerShell settings, Software policy |

### A.8.19 Installation of software on operational systems

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Prevent unauthorized/malicious software |
| **Implementation** | Standard software deployed via Intune. Users cannot install software (admin rights removed). Exceptions via IT request. Application allowlisting considered. |
| **Evidence** | Intune configuration, Local admin settings, Software request process |

### A.8.20 Networks security

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Network is attack surface |
| **Implementation** | Network Security Policy (SW-ISMS-POL-008). Firewalls at network perimeter. Network segmentation. Wireless security (WPA3). VPN for remote access. |
| **Evidence** | SW-ISMS-POL-008, Firewall rules, Network diagram |

### A.8.21 Security of network services

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Network services can be vulnerable |
| **Implementation** | Managed network services from ISP. SLA with ISP. Security features enabled. Regular review of network services. |
| **Evidence** | ISP contracts, Network service configuration |

### A.8.22 Segregation of networks

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Limit lateral movement |
| **Implementation** | Guest Wi-Fi separated. SaaS platform in isolated network segment. Development separate from production. Azure virtual networks segmented. |
| **Evidence** | Network diagram, VLAN configuration, Azure network security groups |

### A.8.23 Web filtering

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Block malicious/inappropriate websites |
| **Implementation** | Microsoft Defender for Endpoint web filtering. Category blocking (malware, phishing, inappropriate content). Custom blocklist for risky sites. |
| **Evidence** | Web filtering configuration, Block reports |

### A.8.24 Use of cryptography

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Protect data confidentiality and integrity |
| **Implementation** | Cryptographic Controls Policy (SW-ISMS-POL-006). TLS 1.2+ for transit. AES-256 for storage. Key management via Azure Key Vault. Certificate management. |
| **Evidence** | SW-ISMS-POL-006, TLS settings, Key Vault configuration |

### A.8.25 Secure development life cycle

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Security in development (primarily for SaaS platform) |
| **Implementation** | Secure Development Guideline (SW-ISMS-GUI-005). Code review required. Security testing in pipeline. Dependency scanning. |
| **Gap** | Formal application security requirements checklist |
| **Action** | Create application security checklist (Q2 2025) |
| **Evidence** | SW-ISMS-GUI-005, Pipeline configuration, Code review records |

### A.8.26 Application security requirements

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Security requirements for applications |
| **Implementation** | Security requirements considered in procurement. SaaS platform security requirements defined. Customer project security requirements. |
| **Gap** | Documented security requirements checklist |
| **Action** | Create security requirements template (Q2 2025) |
| **Evidence** | Procurement criteria, SaaS security specs |

### A.8.27 Secure system architecture and engineering principles

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Security by design |
| **Implementation** | Defense in depth. Least privilege. Fail secure. Security architecture reviewed for SaaS platform. Azure Well-Architected Framework followed. |
| **Evidence** | SW-ISMS-GUI-005, Architecture documentation, Design reviews |

### A.8.28 Secure coding

| Attribute | Value |
|-----------|-------|
| **Applicable** | **No** |
| **Status** | N/A |
| **Justification** | Swedwise has minimal in-house software development. Primary business is consulting and implementing COTS products. SaaS platform is based on OpenText products, not custom development. Internal automation scripts follow basic security practices but formal secure coding standards not warranted. |

### A.8.29 Security testing in development and acceptance

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Partially Implemented |
| **Justification** | Verify security before deployment |
| **Implementation** | Security testing for SaaS configuration changes. Penetration testing (annual for SaaS). Vulnerability scanning of deployed systems. |
| **Gap** | Formalize security acceptance criteria |
| **Action** | Annual penetration testing for SaaS (Q3 2025) |
| **Evidence** | Test reports, Pentest reports, Acceptance criteria |

### A.8.30 Outsourced development

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Some development work outsourced |
| **Implementation** | Security requirements in development contracts. Code review of delivered work. Security testing of delivered components. IP clauses in contracts. |
| **Evidence** | Development contracts, Code review records, Security test reports |

### A.8.31 Separation of development, test and production environments

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Prevent production incidents from development |
| **Implementation** | SaaS platform has separate dev/test/prod tenants. Production data not used in dev/test. Separate access permissions. Change management for production. |
| **Evidence** | Environment documentation, Access permissions, Change records |

### A.8.32 Change management

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Controlled changes prevent incidents |
| **Implementation** | Change Management Procedure (SW-IMS-PRO-007). CAB for significant changes. Emergency change process. Rollback procedures. Change log maintained. |
| **Evidence** | SW-IMS-PRO-007, Change records, CAB minutes |

### A.8.33 Test information

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Test data must be protected |
| **Implementation** | Synthetic data used for testing. Production data not copied to test. Test data access controlled. Test data disposed after use. |
| **Evidence** | Test data procedures, Environment configurations |

### A.8.34 Protection of information systems during audit testing

| Attribute | Value |
|-----------|-------|
| **Applicable** | Yes |
| **Status** | Implemented |
| **Justification** | Audits should not disrupt operations |
| **Implementation** | Audit testing scheduled in maintenance windows. Read-only access for auditors where possible. Audit activities logged. Production impact assessment. |
| **Evidence** | Audit procedures, Auditor access records |

---

## Implementation Roadmap

### Q1 2025

| Control | Action | Priority |
|---------|--------|----------|
| A.5.3 | Create segregation of duties matrix | Medium |
| A.5.7 | Document threat intelligence procedure | Medium |
| A.5.8 | Create project security checklist | Medium |
| A.6.1 | Develop screening policy | Medium |

### Q2 2025

| Control | Action | Priority |
|---------|--------|----------|
| A.5.21 | ICT supply chain risk assessment | Medium |
| A.8.25 | Create application security checklist | Medium |
| A.8.26 | Create security requirements template | Medium |

### Q3 2025

| Control | Action | Priority |
|---------|--------|----------|
| A.5.6 | Evaluate security interest group membership | Low |
| A.5.13 | Implement sensitivity labels (Microsoft 365) | Low |
| A.5.28 | Develop evidence collection procedure | Medium |
| A.8.12 | Implement Microsoft Purview DLP | Medium |
| A.8.29 | Annual penetration testing for SaaS | High |

---

## Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **CISO** | [TBD] | | |
| **IMS Owner** | [TBD] | | |
| **CEO** | [TBD] | | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-01 | CISO | Initial Statement of Applicability |

---

## Appendix A: Control Reference Summary

| Theme | Total | Applicable | Not Applicable | Implemented | Partial | Planned |
|-------|-------|------------|----------------|-------------|---------|---------|
| A.5 Organizational | 37 | 37 | 0 | 28 | 9 | 0 |
| A.6 People | 8 | 8 | 0 | 7 | 1 | 0 |
| A.7 Physical | 14 | 13 | 1 | 13 | 0 | 0 |
| A.8 Technological | 34 | 31 | 3 | 24 | 6 | 1 |
| **Total** | **93** | **89** | **4** | **72** | **16** | **1** |

---

## Appendix B: Related Documents

### Policies
- SW-IMS-POL-001: Integrated Management System Policy
- SW-IMS-POL-002: Supplier Management Policy
- SW-IMS-POL-003: Capacity Management Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-002: Access Control Policy
- SW-ISMS-POL-003: Acceptable Use Policy
- SW-ISMS-POL-004: Data Protection Policy
- SW-ISMS-POL-005: Physical Security Policy
- SW-ISMS-POL-006: Cryptographic Controls Policy
- SW-ISMS-POL-007: HR Security Policy
- SW-ISMS-POL-008: Network Security Policy
- SW-ISMS-POL-009: Classification Policy
- SW-ISMS-POL-010: Logging & Monitoring Policy
- SW-ISMS-POL-011: Business Continuity Policy
- SW-ISMS-POL-013: Remote Working Policy

### Procedures
- SW-IMS-PRO-001: Document Control Procedure
- SW-IMS-PRO-002: Internal Audit Procedure
- SW-IMS-PRO-007: Change Management Procedure
- SW-IMS-PRO-012: Legal Compliance Procedure
- SW-ISMS-PRO-002: Incident Management Procedure
- SW-ISMS-PRO-003: Access Management Procedure
- SW-ISMS-PRO-004: Backup & Recovery Procedure
- SW-ISMS-PRO-005: Vulnerability Management Procedure
- SW-ISMS-PRO-006: Security Awareness Training Procedure
- SW-ISMS-PRO-007: User Access Review Procedure
- SW-ISMS-PRO-008: Supplier Security Assessment Procedure

### Guidelines
- SW-ISMS-GUI-001: Information Classification Guideline
- SW-ISMS-GUI-002: Password & Authentication Guideline
- SW-ISMS-GUI-003: Clean Desk Guideline
- SW-ISMS-GUI-004: Mobile Device Guideline
- SW-ISMS-GUI-005: Secure Development Guideline
- SW-ISMS-GUI-006: Remote Working Guideline

### Registers
- SW-ISMS-REG-001: Risk Register
- SW-ISMS-REG-002: Asset Register

---

**End of Statement of Applicability**
