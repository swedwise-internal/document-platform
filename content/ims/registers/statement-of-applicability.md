---
document_id: SW-ISMS-SOA-001
title: Statement of Applicability
doc_type: register
version: "2.0"
status: draft
classification: confidential
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-ISMS-POL-001
  - SW-IMS-REG-001
  - SW-IMS-MAN-007
---

# Statement of Applicability (SoA)

**Organisation:** Swedwise AB · **Standard:** ISO/IEC 27001:2022, Annex A · **Version:** 2.0 (2026-11-07)

This is Swedwise's one Statement of Applicability. It replaces version 1.1, whose implementation figures (62 implemented,
23 partial, 4 planned) had no recorded support and could not be verified. The template SW-ISMS-FRM-001 is obsolete and
points here. Only the control numbers and titles are used; no standard text.

> **This table is a preliminary worklist, not a settled SoA.** Each row is to be assessed on its own, with CompanyIT's
> measured status for the IT rows (asked for on 2026-11-07). The principles below were decided by the owner on
> 2026-11-07.

## 1. Principles (owner 2026-11-07)

1. **Applicability and implementation are assessed separately.** Applicability is *Yes* or *Excluded*, always with a
   reason tied to scope, risk, contract or other requirement.
2. **Implementation** has four values:
   - *Verified implemented* — evidence that covers the right measure, scope and time and shows it is followed. An
     approved document shows what is decided, not on its own that it is followed.
   - *Partial* — with support for the part said to exist, and the gap written out. A draft with a plan is not partial.
   - *Planned* — with a date and an owner role.
   - *Not assessed* — nobody has assessed the row; this does not mean the measure is missing.
3. **Each row** names what exists (source, date, scope), the gap, the owner role and who assessed it. Measures that the
   risk treatment adds beyond Annex A are added as own rows.
4. **Scope:** a consultancy that develops its own software, two offices (Karlstad, Stockholm), Microsoft 365;
   no SaaS service of its own (owner 2026-11-02).
5. A.8.16 Monitoring activities and A.8.28 Secure coding, excluded in version 1.1, are applicable. A.7.4, A.8.11 and
   A.8.33 are applicable pending assessment.

## 2. Summary of the worklist (2026-11-07)

| Implementation | Rows |
|---|---|
| Verified implemented | 0 |
| Partial | 36 |
| Planned | 4 |
| Not assessed | 53 |
| **Total** | **93** |

0 rows verified implemented means no row has shown evidence in this review — not that nothing is in place.

## 3. Controls

Assessed by: Claude Code for the IMS Owner, 2026-11-07 (proposal); to be confirmed row by row by the CISO.

| Control | Title | Applicable (reason) | Implementation | What exists (source, date) | Gap | Owner |
|---|---|---|---|---|---|---|
| A.5.1 | Policies for information security | Yes | Partial | Storskogen group IT, information security and IT continuity policies 2024-11-06 apply to Swedwise | Swedwise policies (SW-ISMS-POL-001 and others) are drafts; annual read-and-confirm not shown (CIT `policies-read`) | CEO |
| A.5.2 | Information security roles and responsibilities | Yes | Partial | Role descriptions 2026-04-21; IMS roles mapped to jobs (SW-IMS-MAN-005 4.1.2) | CISO proposed, not decided | CEO |
| A.5.3 | Segregation of duties | Yes | Not assessed | — | Not assessed | CFO, CISO |
| A.5.4 | Management responsibilities | Yes | Not assessed | Draft: SW-IMS-MAN-005; leadership flow proposed 2026-11-06 | Drafts and a proposal only | CEO |
| A.5.5 | Contact with authorities | Yes | Not assessed | Draft: SW-ISMS-PRO-001 7.2 (IMY for personal data breaches) | Draft only | Privacy Lead |
| A.5.6 | Contact with special interest groups | Yes | Not assessed | — | Not assessed | CISO |
| A.5.7 | Threat intelligence | Yes | Planned | Defender for Business connected (CompanyIT guide v0.69.0, 2026-11-06) | Use of threat information not shown | CISO |
| A.5.8 | Information security in project management | Yes | Not assessed | Draft: delivery method 00–11 (September 2026) | No security checkpoint in the draft method | CSO |
| A.5.9 | Inventory of information and other associated assets | Yes | Partial | CompanyIT `systems.toml` (35 systems); Intune enrolment configured (CompanyIT guide v0.69.0, 2026-11-06) | Device inventory coverage not shown | COO |
| A.5.10 | Acceptable use of information and other associated assets | Yes | Partial | Storskogen IT policy 2024-11-06 applies | SW-ISMS-POL-003 is a draft | CISO |
| A.5.11 | Return of assets | Yes | Not assessed | Draft: SW-ISMS-PRO-012 6.7 | Draft only; CIT `joiner-leaver-routine-check` needs action | COO |
| A.5.12 | Classification of information | Yes | Not assessed | Draft: SW-ISMS-POL-007 | Sensitivity labels not measured | CISO |
| A.5.13 | Labelling of information | Yes | Not assessed | — | Purview labels not measured | CISO |
| A.5.14 | Information transfer | Yes | Partial | DLP for mail, SharePoint and OneDrive in test mode since 2026-11-06 (CompanyIT guide v0.69.0, 2026-11-06) | Blocking before 2026-11-22 | CISO |
| A.5.15 | Access control | Yes | Partial | CompanyIT rule-kept access groups | SW-ISMS-POL-002 is a draft | COO |
| A.5.16 | Identity management | Yes | Partial | CompanyIT organisation and accounts; organisation export schema 2 (2026-11-07) | Source of role holdings to be made unambiguous (Codex review 2026-11-07) | COO |
| A.5.17 | Authentication information | Yes | Partial | MFA at risky sign-ins for everyone; CIT-BL01a enforced for the CEO (CompanyIT guide v0.69.0, 2026-11-06) | MFA at every sign-in: in-scope users by 2026-11-22, everyone by 2026-12-31 | COO |
| A.5.18 | Access rights | Yes | Not assessed | — | CIT `business-critical-user-review` needs action | COO |
| A.5.19 | Information security in supplier relationships | Yes | Partial | ROPA 1.2 lists processors | SW-ISMS-PRO-008 is a draft | CFO |
| A.5.20 | Addressing information security within supplier agreements | Yes | Partial | Processor agreements with customers (ROPA 1.1) | Swedwise's own supplier agreements not reviewed | CFO |
| A.5.21 | Managing information security in the ICT supply chain | Yes | Not assessed | — | Not assessed | CISO |
| A.5.22 | Monitoring, review and change management of supplier services | Yes | Not assessed | — | Not assessed | CFO |
| A.5.23 | Information security for use of cloud services | Yes | Partial | CompanyIT reads the tenant daily; Azure only through the Swedwise profile | Cloud service list and review not shown | COO |
| A.5.24 | Information security incident management planning and preparation | Yes | Not assessed | Draft: SW-ISMS-PRO-001 1.2 | Draft only | CISO |
| A.5.25 | Assessment and decision on information security events | Yes | Not assessed | Drafts: SW-ISMS-PRO-001, SW-ISMS-PRO-014 | Drafts only | CISO |
| A.5.26 | Response to information security incidents | Yes | Not assessed | Draft: SW-ISMS-PRO-001 | Draft only | CISO |
| A.5.27 | Learning from information security incidents | Yes | Not assessed | Draft: SW-ISMS-PRO-001 | Draft only | CISO |
| A.5.28 | Collection of evidence | Yes | Not assessed | Draft: SW-ISMS-PRO-001 | Draft only | CISO |
| A.5.29 | Information security during disruption | Yes | Not assessed | Drafts: SW-IMS-POL-005, SW-IMS-POL-006 | CIT `continuity-plan-test` needs action | COO |
| A.5.30 | ICT readiness for business continuity | Yes | Partial | Storskogen IT continuity policy 2024-11-06 applies | CIT `continuity-plan-test` needs action | COO |
| A.5.31 | Legal, statutory, regulatory and contractual requirements | Yes | Partial | Compliance Obligations Register SW-IMS-REG-010 1.1 | Register is a draft | CEO |
| A.5.32 | Intellectual property rights | Yes | Not assessed | — | Licence register not measured | CFO |
| A.5.33 | Protection of records | Yes | Not assessed | SW-IMS-MAN-007 7.5.3: the xECM management system workspace is planned | Not in use yet | CEO |
| A.5.34 | Privacy and protection of PII | Yes | Partial | ROPA 1.2, three privacy notices, privacy@swedwise.se | CIT `breach-register-kept` needs action | Privacy Lead |
| A.5.35 | Independent review of information security | Yes | Planned | Internal audit programme 2027 (SW-IMS-REG-007, draft); penetration test (SW-ISMS-PRO-015) by 2027-03-31 | No review done yet | CEO |
| A.5.36 | Compliance with policies, rules and standards for information security | Yes | Partial | CompanyIT controls page (in production since 0.67.0, 2026-11-04) | Most controls need action | CISO |
| A.5.37 | Documented operating procedures | Yes | Not assessed | Procedures exist as drafts | Drafts only | CISO |
| A.6.1 | Screening | Yes | Not assessed | — | Not assessed | HR |
| A.6.2 | Terms and conditions of employment | Yes | Not assessed | — | Employment contracts not reviewed | HR |
| A.6.3 | Information security awareness, education and training | Yes | Planned | SW-ISMS-TRN-001 1.1 and SW-ISMS-PRO-009 written; quiz ready | First session by 2026-11-22 (Salesforce commitment); CIT `awareness-training` | CISO |
| A.6.4 | Disciplinary process | Yes | Not assessed | — | Not assessed | HR |
| A.6.5 | Responsibilities after termination or change of employment | Yes | Partial | CompanyIT leaver handling; leavers' mailboxes deleted (decision 2026-10-20) | Half-yearly check (CIT `joiner-leaver-routine-check`) needs action | COO |
| A.6.6 | Confidentiality or non-disclosure agreements | Yes | Not assessed | — | Not assessed | HR |
| A.6.7 | Remote working | Yes | Not assessed | Draft: SW-IMS-POL-004 | Draft only | COO |
| A.6.8 | Information security event reporting | Yes | Not assessed | Draft: SW-ISMS-PRO-001 7.2 (to the CISO by Slack or phone) | Draft only | CISO |
| A.7.1 | Physical security perimeters | Yes | Not assessed | — | Offices in Karlstad and Stockholm not assessed | COO |
| A.7.2 | Physical entry | Yes | Not assessed | — | Not assessed | COO |
| A.7.3 | Securing offices, rooms and facilities | Yes | Not assessed | — | Not assessed | COO |
| A.7.4 | Physical security monitoring | Yes, pending assessment | Not assessed | — | Protection need and responsibilities (incl. the landlord's) to be assessed on site; rented premises alone are no reason to exclude | COO |
| A.7.5 | Protecting against physical and environmental threats | Yes | Not assessed | — | Not assessed | COO |
| A.7.6 | Working in secure areas | Yes | Not assessed | — | Not assessed | COO |
| A.7.7 | Clear desk and clear screen | Yes | Partial | Screen lock after 15 minutes assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06); matches SW-ISMS-PRO-012 6.2 (owner 2026-11-07) | Device coverage not shown; clear desk not assessed | COO |
| A.7.8 | Equipment siting and protection | Yes | Partial | BitLocker assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06) | Device coverage not shown | COO |
| A.7.9 | Security of assets off-premises | Yes | Partial | BitLocker assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06) | Device coverage not shown | COO |
| A.7.10 | Storage media | Yes | Partial | USB write block assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06) | Exception handling (SW-ISMS-PRO-012 6.4) not in use; coverage not shown | COO |
| A.7.11 | Supporting utilities | Yes | Not assessed | — | Rented offices not assessed | COO |
| A.7.12 | Cabling security | Yes | Not assessed | — | Rented offices not assessed | COO |
| A.7.13 | Equipment maintenance | Yes | Not assessed | — | Not assessed | COO |
| A.7.14 | Secure disposal or re-use of equipment | Yes | Not assessed | Draft: SW-ISMS-PRO-012 6.7 | Draft only | COO |
| A.8.1 | User endpoint devices | Yes | Partial | Intune enrolment and compliance profile assigned to everyone with Business Premium (CompanyIT guide v0.69.0, 2026-11-06) | Enrolled and compliant devices against the devices in scope not shown; the CEO's Fedora computer is outside | COO |
| A.8.2 | Privileged access rights | Yes | Not assessed | — | Separate admin accounts and phishing-resistant MFA are planned (CIT controls need action) | COO |
| A.8.3 | Information access restriction | Yes | Partial | Rule-kept groups (CompanyIT); xECM permissions through ABIM | Coverage not assessed | COO |
| A.8.4 | Access to source code | Yes | Partial | Source code in GitHub organisations | CIT `github-two-factor` needs action | COO |
| A.8.5 | Secure authentication | Yes | Partial | As A.5.17 | Legacy authentication block (CIT) needs action | COO |
| A.8.6 | Capacity management | Yes | Not assessed | Draft: SW-ISMS-POL-012 | Draft only | COO |
| A.8.7 | Protection against malware | Yes | Partial | Defender real-time protection in the compliance profile (CompanyIT guide v0.69.0, 2026-11-06) | Device coverage not shown | COO |
| A.8.8 | Management of technical vulnerabilities | Yes | Partial | Defender connected to Intune; update profile (quality 7 days, feature 30 days); monthly review (CompanyIT guide v0.69.0, 2026-11-06) | Vulnerability list and exposure not shown | COO |
| A.8.9 | Configuration management | Yes | Partial | CompanyIT declares the tenant as configuration; Matrix deployed by Helmfile | Coverage not assessed | COO |
| A.8.10 | Information deletion | Yes | Partial | Retention rules applied in the move to xECM; leavers' mailboxes deleted | Not assessed beyond these | COO |
| A.8.11 | Data masking | Yes, pending assessment | Not assessed | — | Which protected information is in which test and development environments (also Swedwise's own management data in nexta-hub-test) | CSO |
| A.8.12 | Data leakage prevention | Yes | Partial | DLP policy in test mode with notices since 2026-11-06 (CompanyIT guide v0.69.0, 2026-11-06) | Blocking before 2026-11-22; Teams chat and endpoints out of scope (Purview Suite deferred 2026-11-05) | CISO |
| A.8.13 | Information backup | Yes | Not assessed | — | CIT `backup-restore-test` and `backup-offline-copy` need action | COO |
| A.8.14 | Redundancy of information processing facilities | Yes | Not assessed | — | Not assessed | COO |
| A.8.15 | Logging | Yes | Partial | Entra sign-in and audit logs exist | No scheduled review shown | CISO |
| A.8.16 | Monitoring activities | Yes (earlier excluded; now included: Salesforce commitment, Business Premium) | Partial | Defender connected, alerts to it@swedwise.se (CompanyIT guide v0.69.0, 2026-11-06); rhythm decided 2026-11-07 (SW-ISMS-PRO-014) | Alerts must also reach the CISO; Sentinel by 2027-03-31 | CISO |
| A.8.17 | Clock synchronization | Yes | Not assessed | — | Not assessed | COO |
| A.8.18 | Use of privileged utility programs | Yes | Not assessed | — | Not assessed | COO |
| A.8.19 | Installation of software on operational systems | Yes | Partial | Update profile assigned (CompanyIT guide v0.69.0, 2026-11-06) | Installation restriction not shown | COO |
| A.8.20 | Networks security | Yes | Not assessed | — | Office networks (UniFi) not assessed; SW-ISMS-POL-010 is a draft | COO |
| A.8.21 | Security of network services | Yes | Not assessed | — | Not assessed | COO |
| A.8.22 | Segregation of networks | Yes | Not assessed | — | Not assessed | COO |
| A.8.23 | Web filtering | Yes | Not assessed | — | Not assessed | COO |
| A.8.24 | Use of cryptography | Yes | Partial | BitLocker assigned (CompanyIT guide v0.69.0, 2026-11-06) | SW-ISMS-POL-009 is a draft; coverage not shown | COO |
| A.8.25 | Secure development life cycle | Yes | Partial | Own development with a review gate before merge (merge guard in the Matrix repositories) | Not assessed for every product | CSO |
| A.8.26 | Application security requirements | Yes | Not assessed | — | Not assessed | CSO |
| A.8.27 | Secure system architecture and engineering principles | Yes | Not assessed | — | Not assessed | CSO |
| A.8.28 | Secure coding | Yes (earlier excluded; now included: Swedwise develops its own software) | Not assessed | Training drafts (SW-ISMS-TRN-003, SW-ISMS-TRN-005) | Practice not assessed | CSO |
| A.8.29 | Security testing in development and acceptance | Yes | Not assessed | — | Not assessed | CSO |
| A.8.30 | Outsourced development | Yes | Not assessed | — | Subcontractors not assessed | CSO |
| A.8.31 | Separation of development, test and production environments | Yes | Partial | Matrix test and production are separate clusters; production parked | Not assessed for every product | COO |
| A.8.32 | Change management | Yes | Partial | Merge guard for code | SW-IMS-PRO-008 is a draft | COO |
| A.8.33 | Test information | Yes, pending assessment | Not assessed | — | As A.8.11 | CSO |
| A.8.34 | Protection of information systems during audit testing | Yes | Planned | Rules of engagement for the penetration test (SW-ISMS-PRO-015) | First test by 2027-03-31 | CISO |

## 4. Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | 2025-01-01 | [TBD] | Generic first version | [TBD] |
| 1.1 | 2026-11-02 | IMS Owner | Note that the SaaS parts are out of scope | [TBD] |
| 2.0 | 2026-11-07 | Claude for the IMS Owner | Rewritten under the owner's principles of 2026-11-07: applicability and implementation separated, four implementation values, one row per control with source, gap and owner role; the unverified figures of 1.1 removed; A.8.16 and A.8.28 included; A.7.4, A.8.11, A.8.33 applicable pending assessment; reviewed by Codex (mailbox Ledningssystem 2026-11-07) | [TBD – CEO] |
