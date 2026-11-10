---
document_id: SW-ISMS-SOA-001
title: Statement of Applicability
doc_type: register
version: "2.2"
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

**Organisation:** Swedwise AB · **Standard:** ISO/IEC 27001:2022, Annex A · **Version:** 2.2 (2026-11-10)

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

## 2. Summary of the worklist (2026-11-10)

| Implementation | Rows |
|---|---|
| Verified implemented | 0 |
| Partial | 52 |
| Planned | 6 |
| Not assessed | 35 |
| **Total** | **93** |

0 rows verified implemented means no row has shown evidence in this review — not that nothing is in place.

## 3. Controls

Assessed by: Claude Code for the IMS Owner, 2026-11-07 and 2026-11-10 (proposal); to be confirmed row by row by the CISO.

Sources of the 2026-11-10 assessment: Swedwise's own document inventory (the content prepared for the move to xECM: contracts, staff handbook, leases, accounting records; employee files cited by folder and date only), the CompanyIT declarations, and GitHub measured read-only. Rows where nothing was found keep *Not assessed* and say where we looked: an empty search is not proof that the measure is missing. An in-force document (signed, adopted or part of the employment contract) gives *Partial*; a draft or an undated template does not.

| Control | Title | Applicable (reason) | Implementation | What exists (source, date) | Gap | Owner |
|---|---|---|---|---|---|---|
| A.5.1 | Policies for information security | Yes | Partial | Storskogen group IT, information security and IT continuity policies 2024-11-06 apply to Swedwise | Swedwise policies (SW-ISMS-POL-001 and others) are drafts; annual read-and-confirm not shown (CIT `policies-read`) | CEO |
| A.5.2 | Information security roles and responsibilities | Yes | Partial | Role descriptions 2026-04-21; IMS roles mapped to jobs (SW-IMS-MAN-005 4.1.2) | CISO proposed, not decided | CEO |
| A.5.3 | Segregation of duties | Yes | Partial | Finance: attest instruction 2023-04-11 (owner CEO, set by the board; nobody approves their own expense, payments need two people) and the CEO instruction reissued every year, latest 2026-01-28 (inventory `dropbox:Bokslut/…/1 Företagshandlingar/`, `mail:ma-and-owners/`); group finance handbook 1.0 2021-08-11 | Two-person payment not shown in the payment lists (2026-10-19 list shows no approvers); IT: the COO is IMS Owner, IT Manager, owner of most IT systems and runs the yearly user review, with no compensating control | CFO, CISO |
| A.5.4 | Management responsibilities | Yes | Not assessed | Draft: SW-IMS-MAN-005; leadership flow proposed 2026-11-06 | Drafts and a proposal only | CEO |
| A.5.5 | Contact with authorities | Yes | Partial | Incident management plan 1.0 (October 2021, file share `Procedurer Och Principer/It/`) names the IR Commander as contact with police and regulators; draft SW-ISMS-PRO-001 7.2 (IMY for personal data breaches) | The 2021 plan is generic and its contact table empty; no contact list for IMY, the Police, CERT-SE or MSB; no security contact with an authority on record | Privacy Lead |
| A.5.6 | Contact with special interest groups | Yes | Not assessed | Searched 2026-11-10: only business networks found (OpenText partner agreement 2015, Storskogen network meetings) | No membership in a security forum or feed found | CISO |
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
| A.5.17 | Authentication information | Yes | Partial | CIT-BL01 (MFA at every sign-in for everyone) enforced since 2026-11-08 14:14; exceptions: the two break-glass accounts and csp@ (Content Server SMTP). Measured by CompanyIT 2026-11-09 (control `mfa-everyone`) | Members without registered MFA: 3 subcontractors (deadline 2026-12-31), 5 test persons, demo@, spo.service; csp@ to move to OAuth | COO |
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
| A.5.32 | Intellectual property rights | Yes | Partial | Employment contract appendix 1 (company policy) §2 assigns work results and IP to Swedwise; signed by DocuSign, versions 2015-03-01, 2022-11-14, 2023-10-01 (inventory `dropbox:Ekonomi/Anställningsavtal/`); staff handbook bans copyright infringement; Microsoft 365 assigned by `sw-lic-*` groups (CompanyIT guide, 2026-11-05) | No register of third-party software licences beyond Microsoft 365 and no compliance check; resale licences under partner agreements not shown | CFO |
| A.5.33 | Protection of records | Yes | Not assessed | SW-IMS-MAN-007 7.5.3: the xECM management system workspace is planned | Not in use yet | CEO |
| A.5.34 | Privacy and protection of PII | Yes | Partial | ROPA 1.2, three privacy notices, privacy@swedwise.se | CIT `breach-register-kept` needs action | Privacy Lead |
| A.5.35 | Independent review of information security | Yes | Planned | Internal audit programme 2027 (SW-IMS-REG-007, draft); penetration test (SW-ISMS-PRO-015) by 2027-03-31 | No review done yet | CEO |
| A.5.36 | Compliance with policies, rules and standards for information security | Yes | Partial | CompanyIT controls page (in production since 0.67.0, 2026-11-04) | Most controls need action | CISO |
| A.5.37 | Documented operating procedures | Yes | Not assessed | Procedures exist as drafts | Drafts only | CISO |
| A.6.1 | Screening | Yes | Not assessed | Reference-check template, undated (PMO `D1 …/Dokumentmallar/`) | A template only; no record of a check done, no rule on extent, no decision on criminal-record checks | HR |
| A.6.2 | Terms and conditions of employment | Yes | Partial | Signed employment contracts with appendices 1–5 (company policy, personal data, pay, pension, role), newest seen signed 2026-09-02; the staff handbook is part of the contract; Storskogen code of conduct signed per employee (DocuSign 2023-05-09) | Not reconciled against current staff (42 contract folders vs CompanyIT's employees); security duties limited to confidentiality, IP and return of property, no reference to the information security policies | HR |
| A.6.3 | Information security awareness, education and training | Yes | Planned | SW-ISMS-TRN-001 1.1 and SW-ISMS-PRO-009 written; quiz ready | First session by 2026-11-22 (Salesforce commitment); CIT `awareness-training` | CISO |
| A.6.4 | Disciplinary process | Yes | Partial | Storskogen code of conduct 2024-11-06 (breaches can lead to disciplinary action incl. dismissal); staff handbook (repeated breaches lead to disciplinary action); contract penalty of 5 months' salary per confidentiality breach | No process with steps, no route for information security breaches, no sign of use | HR |
| A.6.5 | Responsibilities after termination or change of employment | Yes | Partial | CompanyIT leaver handling; leavers' mailboxes deleted (decision 2026-10-20) | Half-yearly check (CIT `joiner-leaver-routine-check`) needs action | COO |
| A.6.6 | Confidentiality or non-disclosure agreements | Yes | Partial | Employees: company policy §1 in the signed contract, confidentiality without time limit, with penalty; external: signed NDAs with suppliers and customers (inventory `mail:agreements-and-signing/`, `csp-export:Sälj/`); separation agreements repeat the duty (2026-04-03) | No NDA register and no review; subcontractor terms not checked | HR |
| A.6.7 | Remote working | Yes | Not assessed | Staff handbook: internet and remote connection for work purposes only; draft SW-IMS-POL-004. Searched 2026-11-10 (distansarbete, hemarbete): no policy or agreement found | Draft only | COO |
| A.6.8 | Information security event reporting | Yes | Not assessed | Draft: SW-ISMS-PRO-001 7.2 (to the CISO by Slack or phone) | Draft only | CISO |
| A.7.1 | Physical security perimeters | Yes | Partial | Karlstad: lease Björnen 7, Järnvägsgatan 7, floor 2, 456 m², 2024-01-01–2028-12-31; Stockholm: sublease Saint Eriksgatan 46 from 2021-01-01, rolling (inventory `dropbox:…/1 Företagshandlingar/`, `dropbox:Ekonomi/Saint_Eriksgatan_46/`) | No defined perimeter or zones; Stockholm's current use unknown; to be assessed on site | COO |
| A.7.2 | Physical entry | Yes | Partial | Staff handbook: induction to the entry system, lost keys reported at once; separation agreements require the access card back (2026-04-03) | No key or card register, no visitor log, no access review | COO |
| A.7.3 | Securing offices, rooms and facilities | Yes | Partial | Staff handbook (text from 2017), general security rules: doors and windows locked, last person sets the alarm, confidential material locked away, visitors never alone | Rules from 2017 with no evidence they are followed | COO |
| A.7.4 | Physical security monitoring | Yes, pending assessment | Partial | Securitas alarm for Järnvägsgatan 7 connected to the alarm centre (offer 2023-10-23); subscription accrued 2026-02-01–2028-01-31 and paid 2026-10 (accounting records), so it is running | Signed contract and alarm log not in the inventory; alarm coverage unconfirmed; Stockholm not assessed; landlord's part to be assessed on site | COO |
| A.7.5 | Protecting against physical and environmental threats | Yes | Partial | Lease §29 and appendix 4 (fire protection duties of landlord and tenant); staff handbook fire section (walkthrough, assembly point) | No fire-safety records or drills; flood and other threats not assessed | COO |
| A.7.6 | Working in secure areas | Yes | Not assessed | Searched 2026-11-10: no secure area or server room found; IT is cloud (CompanyIT) | If none exists, the owner decides and justifies an exclusion | COO |
| A.7.7 | Clear desk and clear screen | Yes | Partial | Screen lock after 15 minutes assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06); matches SW-ISMS-PRO-012 6.2 (owner 2026-11-07) | Device coverage not shown; clear desk not assessed | COO |
| A.7.8 | Equipment siting and protection | Yes | Partial | BitLocker assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06) | Device coverage not shown | COO |
| A.7.9 | Security of assets off-premises | Yes | Partial | BitLocker assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06) | Device coverage not shown | COO |
| A.7.10 | Storage media | Yes | Partial | USB write block assigned in Intune (CompanyIT guide v0.69.0, 2026-11-06) | Exception handling (SW-ISMS-PRO-012 6.4) not in use; coverage not shown | COO |
| A.7.11 | Supporting utilities | Yes | Partial | Lease §13: electricity, water, heating and ventilation from the landlord; alarm on internet and GSM | Utility failure not assessed; no UPS or monitoring for the office network | COO |
| A.7.12 | Cabling security | Yes | Not assessed | Searched 2026-11-10: nothing on cabling; UniFi office network declared in CompanyIT `systems.toml` (owner Office manager) | Not assessed | COO |
| A.7.13 | Equipment maintenance | Yes | Not assessed | Searched 2026-11-10: only the handbook's 3-year laptop replacement (a purchasing rule) | Not assessed | COO |
| A.7.14 | Secure disposal or re-use of equipment | Yes | Not assessed | Draft SW-ISMS-PRO-012 6.7; leave step 'equipment returned and recorded' declared in CompanyIT, not shown. Searched 2026-11-10 (Inrego, kassering, dataradering): no wiping or certificates found | A 2026-04-03 separation agreement lets the leaver keep computer and phone, with no wipe record | COO |
| A.8.1 | User endpoint devices | Yes | Partial | Intune enrolment and compliance profile assigned to everyone with Business Premium (CompanyIT guide v0.69.0, 2026-11-06) | Enrolled and compliant devices against the devices in scope not shown; the CEO's Fedora computer is outside | COO |
| A.8.2 | Privileged access rights | Yes | Partial | Two break-glass accounts since 2026-11-08 (CompanyIT read 2026-11-09, control `break-glass-accounts`) | 5 admin roles on everyday accounts (finding); the CEO's separate admin account parked; spo.service | COO |
| A.8.3 | Information access restriction | Yes | Partial | Rule-kept groups (CompanyIT); xECM permissions through ABIM | Coverage not assessed | COO |
| A.8.4 | Access to source code | Yes | Partial | Four GitHub organisations, measured 2026-11-10: `swedwise-internal` requires 2FA (7 members, 0 outside); base permission none in three; joiners and leavers through the CompanyIT GitHub App | 2FA not required in `swedwise` (421 repos, 27 members, 11 without 2FA, all current staff), `swedwise-ext` and `swedwise-boliden` (CIT `github-two-factor`; owner 2026-11-10: turn it on in `swedwise`, members told first); members may create public repos in three orgs; `swedwise-boliden` gives every member write; customer Azure DevOps and Bitbucket not measured | COO |
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
| A.8.16 | Monitoring activities | Yes (earlier excluded; now included: Salesforce commitment, Business Premium) | Planned | Defender connected, alerts to it@swedwise.se (CompanyIT guide v0.69.0, 2026-11-06); rhythm decided 2026-11-07 (SW-ISMS-PRO-014); no review recorded (CompanyIT 2026-11-09) | Alerts must also reach the CISO; reviews to be recorded; Sentinel by 2027-03-31 | CISO |
| A.8.17 | Clock synchronization | Yes | Not assessed | — | Not assessed | COO |
| A.8.18 | Use of privileged utility programs | Yes | Not assessed | — | Not assessed | COO |
| A.8.19 | Installation of software on operational systems | Yes | Partial | Update profile assigned (CompanyIT guide v0.69.0, 2026-11-06) | Installation restriction not shown | COO |
| A.8.20 | Networks security | Yes | Not assessed | — | Office networks (UniFi) not assessed; SW-ISMS-POL-010 is a draft | COO |
| A.8.21 | Security of network services | Yes | Not assessed | — | Not assessed | COO |
| A.8.22 | Segregation of networks | Yes | Not assessed | — | Not assessed | COO |
| A.8.23 | Web filtering | Yes | Not assessed | — | Not assessed | COO |
| A.8.24 | Use of cryptography | Yes | Partial | BitLocker assigned (CompanyIT guide v0.69.0, 2026-11-06) | SW-ISMS-POL-009 is a draft; coverage not shown | COO |
| A.8.25 | Secure development life cycle | Yes | Partial | Merge guard (review gate) on since 2026-10-01 in the nine Matrix repositories, followed (retro review files up to 2026-11-09); on GitHub only Archive Suite protects main (1 review, measured 2026-11-10) | The guard is a local hook, not enforced on the server; not in Pages, Signing, ModelKit, CompanyIT, Contracts, Archive Suite, ABIM; `swedwise` org not measured | CSO |
| A.8.26 | Application security requirements | Yes | Partial | Matrix principles 2026-07-05 (secrets only in Key Vault, no customer data in the platform, fail-closed gates, EU residency); Signing ADR-0006–0008 | Matrix and Signing only; no requirements template for customer or integration code; no threat models; SW-ISMS-GUI-005 is a draft | CSO |
| A.8.27 | Secure system architecture and engineering principles | Yes | Partial | Matrix principles and ADRs; Signing ADR-0001–0009 | No company-wide principles for all development | CSO |
| A.8.28 | Secure coding | Yes (earlier excluded; now included: Swedwise develops its own software) | Partial | Matrix review battery runs ruff, mypy and bandit; pip-audit on a timer; Dependabot in Platform and Archive Suite, Skillet (measured 2026-11-10); training drafts SW-ISMS-TRN-003, SW-ISMS-TRN-005 | Secret scanning and push protection off in all 14 repositories measured and for new repositories in all four orgs; no CodeQL or other SAST; .NET and TypeScript products and the `swedwise` org not covered | CSO |
| A.8.29 | Security testing in development and acceptance | Yes | Planned | Penetration test procedure SW-ISMS-PRO-015 (draft), RFQ 2026-11-09, first test by 2027-03-31; bandit and pip-audit in the Matrix review pass | No DAST, no test done | CISO |
| A.8.30 | Outsourced development | Yes | Partial | Subcontractor profile in CompanyIT (`ext.swedwise.se`, GitHub and Azure DevOps on request); 6 outside collaborators across three GitHub orgs (2026-11-10) | No rule for subcontracted code (contract clauses, review, acceptance); whether the outside collaborators write code not determined | CSO |
| A.8.31 | Separation of development, test and production environments | Yes | Partial | Local development cluster without customer data, the Matrix test cluster, Matrix production parked (2026-08-05); explicit cluster context required by rule | Separation by rule, not technically enforced; the test cluster runs real workloads (Nexta Hub with Swedwise data, the Creator); other products not assessed | COO |
| A.8.32 | Change management | Yes | Partial | Merge guard for code | SW-IMS-PRO-008 is a draft | COO |
| A.8.33 | Test information | Yes, pending assessment | Not assessed | — | Known 2026-11-10: nexta-hub-test holds Swedwise's real management and voucher data, and matrix-test xECM holds a customer's registers (owner 2026-11-09: to be removed); no approval or protection recorded | CSO |
| A.8.34 | Protection of information systems during audit testing | Yes | Planned | Rules of engagement for the penetration test (SW-ISMS-PRO-015) | First test by 2027-03-31 | CISO |

## 4. Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | 2025-01-01 | [TBD] | Generic first version | [TBD] |
| 1.1 | 2026-11-02 | IMS Owner | Note that the SaaS parts are out of scope | [TBD] |
| 2.0 | 2026-11-07 | Claude for the IMS Owner | Rewritten under the owner's principles of 2026-11-07: applicability and implementation separated, four implementation values, one row per control with source, gap and owner role; the unverified figures of 1.1 removed; A.8.16 and A.8.28 included; A.7.4, A.8.11, A.8.33 applicable pending assessment; principles and draft reviewed by Codex (mailbox Ledningssystem 2026-11-07), not an approval of the row statuses | [TBD – CEO] |
| 2.1 | 2026-11-09 | Claude for the IMS Owner | A.5.17, A.8.2 and A.8.16 updated from CompanyIT's measurement of 2026-11-09 (MFA for everyone enforced since 2026-11-08; two break-glass accounts; no Defender review recorded) | [TBD – CEO] |
| 2.2 | 2026-11-10 | Claude for the IMS Owner | 18 rows assessed from the document inventory, CompanyIT and GitHub (people, legal, premises, development): 17 to Partial, A.8.29 to Planned; A.8.4 with the GitHub 2FA measurement (owner 2026-11-10: turn 2FA on in `swedwise` after a clean-up); searched-but-empty rows say where we looked | [TBD – CEO] |
