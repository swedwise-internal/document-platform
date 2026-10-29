---
document_id: SW-IMS-REG-007
title: Internal Audit Programme 2027
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: IMS Owner
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-PRO-003
  - SW-IMS-PRO-004
  - SW-IMS-PRO-005
  - SW-IMS-TRN-005
  - SW-IMS-ROLE-002
  - SW-IMS-MAN-009
  - SW-IMS-REG-008
  - SW-IMS-REC-001
---

# Internal Audit Programme 2027

**Document ID**: SW-IMS-REG-007-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner (COO)
**Approved by**: [TBD — Management Team, per SW-IMS-PRO-003 section 6.3]

## 1. Purpose

This is the audit programme that SW-IMS-PRO-003 (Internal Audit Procedure) section 6 asks the IMS Owner to
prepare each year. It covers the 2027 audit cycle, the first one Swedwise runs. It plans every one of the 26
processes in the process register at least once, sets how often each is audited from its risk, and says
which units may audit which processes so that no auditor audits their own unit's work.

No audit has been held yet and no internal auditor has been trained. Until the Management Team approves
this programme, it is a draft proposal.

## 2. Basis

| Input | Source | State on 2026-10-29 |
|---|---|---|
| Process register (26 processes, owners as jobs) | Nexta `docs/management-system/processes.json` | Measured 2026-10-28; owners settled 2026-10-29 (CISO and communication owner still proposed) |
| Clause coverage | Nexta `docs/management-system/coverage-iso-harmonized-structure.json` | 15 of 26 Harmonized Structure clauses described, 11 partly, 0 met |
| Units and headcount | CompanyIT `declarations/organisation.toml`, `jobs.toml`; Entra 2026-10-19 | Professional Services 50, Sales 6, Operations 3, Finance 2; CEO, business developer and HR sit outside the units |
| Risk register | SW-IMS-REG-001 | Template only; no assessed risks. The risk ratings below are this programme's own judgement and must be re-checked once the register is filled |
| Previous audits and nonconformities | — | None (first cycle) |
| Auditor pool | SW-IMS-TRN-005, SW-IMS-ROLE-002 | No trained internal auditor yet |

Clause references are numbers of the ISO Harmonized Structure (clauses 4–10, shared by ISO 9001, 14001 and
27001). The standards' own sub-clauses, such as ISO 9001 8.2–8.7 and ISO 27001 Annex A, are not in the
Harmonized Structure file yet. Each audit plan adds them from the SIS-subscribed text when it is written.
No requirement text is copied here.

## 3. How the risk-based frequency works

| Risk level | Audits in 2027 | When a process gets this level |
|---|---|---|
| **High** | Twice (a first audit and a follow-up audit in the second half of the year) | A certification auditor looks at it first, a failure reaches customers or their information directly, or the process has a known structural gap (no procedure of its own, two competing procedures) |
| **Medium** | Once | Important to the management system, but no known structural gap and limited direct customer exposure |
| **Low** | Once (first cycle). From 2028, every 18 months if the 2027 audit is clean | Stable, low exposure, few records |

Every process is audited at least once in 2027, whatever its level, because this is the first cycle and
SW-IMS-PRO-003 section 6.1 requires all processes to be audited in each cycle.

## 4. Independence: who may audit what

### 4.1 Rules

1. **An auditor never audits a process owned by their own unit.** The process owner's unit is set by the
   owner's job in `jobs.toml`.
2. **An auditor never audits a process they perform steps in**, even when another unit owns it. Examples:
   project managers (Operations) run project delivery, which the CSO owns, so they do not audit project
   delivery or customer onboarding. A consultant who did presale on a deal does not audit sales records that
   include that deal.
3. **The COO does not audit.** The COO is the IMS Owner, owns 8 of the 26 processes (and is proposed as CISO),
   and manages this programme. SW-IMS-PRO-003 section 5.2 already bars the IMS Owner from auditing document
   control and the overall IMS.
4. **The CEO does not audit.** The CEO chairs the management review and owns the top-management processes.
5. **Only trained auditors lead an audit.** A lead auditor has passed SW-IMS-TRN-005 (passing score 85%,
   valid 24 months). A trainee may join an audit team as a second auditor.
6. **External auditor where no internal one can be independent.** This applies to audits of the
   top-management processes and of the IMS Owner's own management of the system (section 6, audits
   A-2027-12 and A-2027-13). The programme proposes an external auditor for these; the Management Team
   decides.

### 4.2 Process owners by unit

| Owner's unit | Owner job(s) | Processes | Count |
|---|---|---|---|
| Top management (no unit) | CEO | strategic-planning, management-review, communication (owner proposed) | 3 |
| Operations | COO | risk-management, context-and-interested-parties, compliance-obligations, monitoring-and-measurement, internal-audit, nonconformity-and-corrective-action, document-control, it-infrastructure | 8 |
| Operations | Head of PMO & Continuous Improvement | continual-improvement, customer-feedback | 2 |
| Professional Services | CSO | customer-onboarding, project-delivery, saas-service-delivery, support-and-incidents, competence-and-training, resource-allocation | 6 |
| Sales & Marketing | CCO | sales, account-management, partners-and-vendors | 3 |
| Finance | CFO | invoicing-and-finance, procurement-and-suppliers, emergency-preparedness | 3 |
| HR / People & Culture (no unit, reports to the CEO) | HR / People & Culture | hr-management | 1 |
| | | **Total** | **26** |

### 4.3 Which units may audit which

Read across: may an auditor from the row's unit audit processes owned by the column's unit?

| Auditor's unit ↓ / Owner's unit → | Top management (3) | Operations (10) | Professional Services (6) | Sales & Marketing (3) | Finance (3) | HR (1) |
|---|---|---|---|---|---|---|
| **Professional Services** (50 people) | Second auditor only, beside an external lead | Yes | **No** | Yes, except a presale consultant on sampled deals | Yes | Yes |
| **Sales & Marketing** (6) | Second auditor only, beside an external lead | Yes | Yes, except account managers on hand-overs they took part in | **No** | Yes | Yes |
| **Operations** (3; not the COO) | No | **No** | Not project delivery or customer onboarding (project managers and the Head of PMO perform them); not support-and-incidents (its incident procedure is the CISO's, proposed COO); yes for competence-and-training and resource-allocation | Yes | Yes | Yes |
| **Finance** (2) | No | Yes | Yes | Yes | **No** | Yes |
| **HR / People & Culture** | No | Yes | Yes, except competence-and-training (HR takes part in the training record) | Yes | Yes | **No** |
| **Business developer** (reports to the CEO) | No | Yes | Yes | Yes, except deals they worked on | Yes | Yes |
| **External auditor** | Yes | Yes | Yes | Yes | Yes | Yes |

**Professional Services is the main source of auditors.** It has 50 people and owns only 6 processes, so
trained consultants can take part in audits of 20 of the 26 processes (all but its own six), and lead
17 of them (the three top-management processes need an external lead). The six Professional Services
processes need auditors from Sales & Marketing, Finance, HR, the business developer or, for two of them,
Operations.

### 4.4 Proposed auditor pool for 2027

| Pool member (job) | Unit | Number | Trained by | Can lead |
|---|---|---|---|---|
| Consultant or group manager | Professional Services | [to confirm: 3–4 proposed] | SW-IMS-TRN-005, January 2027 | Audits of Operations, Sales, Finance and HR processes |
| Account manager or marketing lead | Sales & Marketing | [to confirm: 1 proposed] | SW-IMS-TRN-005, January 2027 | Audits of Professional Services processes, except hand-overs they took part in |
| Finance employee, HR / People & Culture or business developer | Finance / CEO's office | [to confirm: 1 proposed] | SW-IMS-TRN-005, January 2027 | Audits of Professional Services processes |
| External auditor | — | [to confirm: engagement and budget] | Qualified lead auditor | A-2027-12, A-2027-13 |

SW-IMS-TRN-005 is written for a pool of 3–5 people. At least two pool members must come from outside
Professional Services, or the six Professional Services processes cannot be audited twice where they are
rated High. Each auditor does at least one audit a year (SW-IMS-PRO-003 section 5.4), and no auditor should
lead more than four [to confirm: limit] so that consulting work is not crowded out.

## 5. Process risk ratings

| # | Process | Owner (job) | Risk | Why this level | Audits in 2027 |
|---|---|---|---|---|---|
| 1 | strategic-planning | CEO | Medium | Sets the objectives everything else is measured against. It has no procedure of its own, but its outputs are few and easy to sample | A-2027-13 (Q4) |
| 2 | management-review | CEO | Medium | Has never been held. The audit can only find records after the first reviews (Q1 and Q3) | A-2027-13 (Q4) |
| 3 | communication | CEO (proposed) | Low | Owner only proposed. Little direct customer or security exposure | A-2027-13 (Q4) |
| 4 | risk-management | COO | Medium | The risk register is a template with no assessed risks, and certification Stage 1 looks for it early. Rated Medium rather than High because the readiness audit already checks that it has started | A-2027-02 (Q1) |
| 5 | context-and-interested-parties | COO | Medium | The scope still names one SaaS service hosted at Entiros and the 2015 editions. The interested parties register SW-IMS-REG-006 is a new draft (2026-10-29) with no review behind it | A-2027-02 (Q1) |
| 6 | compliance-obligations | COO | Medium | GDPR and customer contract obligations are material. The compliance obligations register SW-IMS-REG-002 does not exist yet | A-2027-02 (Q1) |
| 7 | monitoring-and-measurement | COO | Medium | No KPI is measured today (see SW-IMS-REG-008). Audited late so a year of figures exists | A-2027-12 (Q4) |
| 8 | internal-audit | COO | Medium | Can only be audited once this programme has run | A-2027-12 (Q4) |
| 9 | nonconformity-and-corrective-action | COO | **High** | Two procedures described the same process; merged into SW-IMS-PRO-005 as a proposal on 2026-10-29, not yet confirmed. Every other audit's findings depend on it working | A-2027-01 (Q1, choice of procedure), A-2027-12 (Q4) |
| 10 | document-control | COO | **High** | All 128 IMS documents are drafts with `[TBD]` dates, so nothing is controlled yet. A certification auditor looks here first | A-2027-01 (Q1 readiness), A-2027-09 (Q3) |
| 11 | it-infrastructure | COO | **High** | Customer and employee information. ISO 27001 controls sit here. The owner is also the proposed CISO, so there is no second line inside Operations | A-2027-03 (Q2), A-2027-14 (Q4) |
| 12 | continual-improvement | Head of PMO | Low | Depends on records the other processes produce. The improvement register SW-IMS-REG-005 does not exist | A-2027-10 (Q3) |
| 13 | customer-feedback | Head of PMO | Medium | No survey is run and the complaint register is a form only. It faces the customer | A-2027-10 (Q3) |
| 14 | sales | CCO | Medium | No procedure, but the work runs in the hub (deal, quote, locked quote versions, contract), which gives good records | A-2027-06 (Q2) |
| 15 | account-management | CCO | Low | No procedure. Records in HubSpot and the hub's customer register | A-2027-06 (Q2) |
| 16 | partners-and-vendors | CCO | Medium | No procedure. Partners and vendors (OpenText, Salesforce and others) shape what we sell and how customer information is handled. The policies do not yet separate partners from ordinary suppliers | A-2027-06 (Q2) |
| 17 | customer-onboarding | CSO | Medium | Steps exist in SW-QMS-PRO-001 section 6.3. Audited together with project delivery | A-2027-04 (Q2), A-2027-15 (Q4) |
| 18 | project-delivery | CSO | **High** | The core of the business: 50 consultants and most of the revenue. The manual says `[TBD]`, and SW-QMS-PRO-001 covers the consulting lifecycle only in part | A-2027-04 (Q2), A-2027-15 (Q4) |
| 19 | saas-service-delivery | CSO | Medium | Which SaaS services Swedwise runs today is not confirmed. The manual names one. Upgrade to High if the scope confirms live customer services | A-2027-05 (Q2) |
| 20 | support-and-incidents | CSO | **High** | Customer-facing, with no procedure of its own. It points to a security incident procedure that another owner (CISO) holds | A-2027-05 (Q2), A-2027-16 (Q4) |
| 21 | competence-and-training | CSO | Medium | Training records are the evidence for clause 7.2 and 7.3 across the whole company | A-2027-08 (Q3) |
| 22 | resource-allocation | CSO | Low | No procedure, but the hub's workload and resource plan hold the records | A-2027-08 (Q3) |
| 23 | invoicing-and-finance | CFO | Medium | No procedure. Run in the hub and Fortnox. Errors reach customers directly | A-2027-07 (Q2) |
| 24 | procurement-and-suppliers | CFO | Medium | Only the supplier security assessment has a procedure | A-2027-07 (Q2) |
| 25 | emergency-preparedness | CFO | Low | Office-based company, few records. The environmental part is audited with it | A-2027-11 (Q3) |
| 26 | hr-management | HR | Medium | A policy and no procedure. Joiners and leavers drive access rights (ISO 27001) | A-2027-08 (Q3) |

Count: 5 High, 16 Medium, 5 Low. That makes 16 audits, with the 5 High processes covered twice.

## 6. Programme 2027

An audit covers one process or several processes owned by the same unit, so that one independent auditor can
take the whole audit. "Lead auditor" names the job the lead is drawn from, never a person.

| Audit | Quarter | Processes | Risk | HS clauses | Standards | Lead auditor drawn from | Not eligible to audit |
|---|---|---|---|---|---|---|---|
| **A-2027-01 Readiness audit** | Q1 (Feb) | document-control; roles and responsibilities across the IMS; the merged nonconformity procedure SW-IMS-PRO-005 in use | High | 4.4, 5.3, 7.5.1, 7.5.2, 7.5.3 | 9001, 14001, 27001 | Trained consultant, Professional Services; or external [to confirm] | Anyone in Operations; CEO |
| A-2027-02 | Q1 (Mar) | risk-management, context-and-interested-parties, compliance-obligations | Medium | 4.1, 4.2, 4.3, 6.1 | 9001, 14001, 27001 | Trained consultant, Professional Services | Anyone in Operations; CEO |
| A-2027-03 | Q2 | it-infrastructure (first) | High | 6.3, 7.1, 7.5.3, 8.1 (+ ISO 27001 Annex A sample) | 27001, 9001 | Trained consultant with IT security background, Professional Services | Anyone in Operations; CEO |
| A-2027-04 | Q2 | project-delivery, customer-onboarding (first) | High / Medium | 7.1, 7.2, 8.1, 9.1 | 9001, 27001 | Trained auditor from Sales & Marketing, Finance, HR or the business developer | Professional Services; project managers and Head of PMO (Operations); account managers who made the sampled hand-overs |
| A-2027-05 | Q2 | support-and-incidents (first), saas-service-delivery | High / Medium | 7.4, 8.1, 9.1, 10.2 | 9001, 27001 | Trained auditor from Sales & Marketing, Finance or HR | Professional Services; Operations (incident procedure owner) |
| A-2027-06 | Q2 | sales, account-management, partners-and-vendors | Medium / Low | 6.1, 8.1, 9.1 | 9001, 27001 | Trained consultant, Professional Services (not presale on sampled deals) | Sales & Marketing; business developer for deals they worked on |
| A-2027-07 | Q2 | invoicing-and-finance, procurement-and-suppliers | Medium | 7.1, 8.1, 9.1 | 9001, 14001, 27001 | Trained consultant, Professional Services; or Sales & Marketing auditor | Finance |
| A-2027-08 | Q3 | competence-and-training, resource-allocation, hr-management | Medium / Low | 7.1, 7.2, 7.3 | 9001, 14001, 27001 | Trained auditor from Sales & Marketing or Finance | Professional Services; HR (owns hr-management) |
| A-2027-09 | Q3 | document-control (follow-up) | High | 7.5.1, 7.5.2, 7.5.3 | 9001, 14001, 27001 | Trained consultant, Professional Services (a different one from A-2027-01 where possible) | Operations; CEO |
| A-2027-10 | Q3 | customer-feedback, continual-improvement | Medium / Low | 9.1, 10.1 | 9001 | Trained consultant, Professional Services | Operations |
| A-2027-11 | Q3 | emergency-preparedness and environmental performance (aspects, travel, equipment) | Low | 6.1, 8.1, 9.1 | 14001, 27001 | Trained consultant, Professional Services | Finance (CFO is owner and Environmental Lead) |
| A-2027-12 | Q4 | internal-audit, monitoring-and-measurement, nonconformity-and-corrective-action (follow-up) | Medium / High | 9.1, 9.2.1, 9.2.2, 10.2 | 9001, 14001, 27001 | External auditor proposed (audits the IMS Owner's own management of the system); otherwise a trained consultant who has not led a 2027 audit | Operations; anyone who led a 2027 audit being sampled |
| A-2027-13 | Q4 | strategic-planning, management-review, communication | Medium / Low | 5.1, 5.2, 6.2, 7.4, 9.3.1, 9.3.2, 9.3.3 | 9001, 14001, 27001 | External auditor proposed, with a trained Professional Services or Sales auditor as second auditor | Operations (COO prepares the review); CEO |
| A-2027-14 | Q4 | it-infrastructure (follow-up) | High | 6.3, 7.1, 8.1 (+ Annex A sample) | 27001 | Trained consultant, Professional Services (a different one from A-2027-03 where possible) | Operations |
| A-2027-15 | Q4 | project-delivery, customer-onboarding (follow-up) | High | 8.1, 9.1, 10.2 | 9001 | Trained auditor from Sales & Marketing, Finance, HR or the business developer | As A-2027-04 |
| A-2027-16 | Q4 | support-and-incidents (follow-up) | High | 8.1, 9.1, 10.2 | 9001, 27001 | Trained auditor from Sales & Marketing, Finance or HR | As A-2027-05 |

**Coverage check.** All 26 processes appear at least once. All 26 assessable Harmonized Structure clauses
are covered at least once: 4.1–4.4, 5.1–5.3, 6.1–6.3, 7.1–7.4, 7.5.1–7.5.3, 8.1, 9.1, 9.2.1, 9.2.2,
9.3.1–9.3.3, 10.1, 10.2.

**Locations.** SW-IMS-PRO-003 and SW-IMS-MAN-004 name Karlstad, Stockholm and Uddevalla.
[to confirm: the offices Swedwise has today]. Each audit plan samples at least one office other than the
head office during the year, as well as remote work and work at customer sites.

## 7. The readiness audit (A-2027-01)

The first audit of the cycle, in Q1 2027 before the first management review (SW-IMS-REC-001). It asks one
question: can the management system be run as written? The answer is input to the review.

| Check | Evidence the auditor looks for | State on 2026-10-29 |
|---|---|---|
| Documents are approved and in force | Approval record, version, effective and review dates on each IMS document | 0 of 128 approved; dates `[TBD]` |
| One document ID per document | No two documents share an ID; references resolve | Collisions found (examples: SW-IMS-PRO-003 is both the audit procedure and, in SW-IMS-PRO-006, the root-cause reference; SW-IMS-FRM-005 is both the risk register form and, in SW-IMS-PRO-003, the corrective action request; SW-IMS-REG-003 is both the objectives register and the corrective action register; the KPI register is SW-IMS-REG-004 in SW-IMS-PRO-006 but SW-IMS-REG-008 here; SW-ISMS-REG-001 is the asset register's ID but the Statement of Applicability's in SW-IMS-MAN-006, while SW-IMS-MAN-009 gives the asset register SW-ISMS-REG-002) |
| Obsolete documents withdrawn | Document review log SW-IMS-FRM-001 | No log entries |
| Every IMS role has a job and a named person | Appointment record, role descriptions, SW-IMS-MAN-005 | Jobs settled 2026-10-29 for all roles except CISO and communication owner (proposed). No role has a named person |
| The manual names the IMS Owner | SW-IMS-MAN-005 section 4.2.3 | Says `[TBD]` and "may be the Quality Lead"; the organisation chart shows the 2025 units |
| One nonconformity procedure | Decision record | SW-IMS-PRO-005 merged (draft); SW-IMS-PRO-009 a superseded stub awaiting the decision |
| Records have a home | Location column in each procedure's records table | `[TBD]` in every procedure checked |
| Staff know where the documents are | Interviews with 3–5 people across units | Not yet checked |

**Readiness audit outcome:** findings are raised as for any audit (SW-IMS-PRO-003 section 8.4). A
"Major" here means the IMS cannot yet be shown to a certification body. It does not trigger the
30-day clock until the Management Team has chosen the nonconformity procedure.

## 8. Before the first audit

| # | Action | Owner (job) | By |
|---|---|---|---|
| 1 | Management Team approves this programme | IMS Owner (COO) presents; Management Team approves | January 2027 [to confirm] |
| 2 | Select the auditor pool (section 4.4) and confirm independence per member | IMS Owner (COO), with CSO and CCO releasing time | January 2027 |
| 3 | Run SW-IMS-TRN-005 for the pool | IMS Owner (COO) | January 2027 |
| 4 | Decide external auditor for A-2027-12 and A-2027-13, and budget | Management Team | Q1 2027 management review |
| 5 | Decide where audit records live (audit plans, reports, findings). The hub's `management.audits` is proposed for release 1.3 and not built | IMS Owner (COO) | Before A-2027-01 |
| 6 | Notify auditees at least two weeks before each audit (SW-IMS-PRO-003 section 6.3) | Lead auditor | Per audit |

## 9. Programme review

The IMS Owner reviews this programme every quarter (SW-IMS-PRO-003 section 6.2) and after each management
review. A process moves up a level after a major nonconformity, a significant incident or complaint, or a
change of scope. The programme's own results are measured in SW-IMS-REG-008 (KPI-IMS-01 and KPI-IMS-02).

## Document Control

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-10-29 | IMS Owner (drafted in session) | First audit programme: 26 processes, 16 audits, independence rules, readiness audit |

---

**Approval**

| Role | Name | Signature | Date |
|---|---|---|---|
| IMS Owner | | | |
| Management Team Representative | | | |
