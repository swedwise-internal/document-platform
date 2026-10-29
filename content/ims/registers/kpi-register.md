---
document_id: SW-IMS-REG-008
title: KPI Register
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
  - SW-IMS-MAN-006
  - SW-IMS-MAN-009
  - SW-IMS-PRO-003
  - SW-IMS-PRO-004
  - SW-IMS-PRO-006
  - SW-IMS-REG-007
  - SW-IMS-REC-001
---

# KPI Register

**Document ID**: SW-IMS-REG-008-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner (COO)
**Approved by**: [TBD — Management Team]

## 1. Purpose

This register lists the key performance indicators of Swedwise's management system. For each KPI it gives
the objective the KPI serves, the formula, where the number comes from, the owner's job, how often it is
measured, the target and the baseline. It turns the objectives in SW-IMS-MAN-006 section 6.2.2 and the KPIs
in the procedures (mainly SW-IMS-PRO-006 section 5) into one list that the management review can read.

**No KPI is measured today.** Every baseline is `[to measure]`. The register says honestly which numbers
can be produced now, which need a hub function that is not built yet, and which have no source at all.

> **ID note.** SW-IMS-PRO-006 and SW-IMS-MAN-006 pointed to a KPI register "SW-IMS-REG-004" and an objectives
> register "SW-IMS-REG-003", neither of which existed; both now point here (corrected 2026-10-29). Section 3 of
> this register is the objectives list.

## 2. Where numbers can come from

The rule is to prefer a number Swedwise's own hub (Nexta Hub, our instance) already produces, then a number
from a system of record, and to type numbers in by hand only as a last resort.

| Source | What it holds | State (2026-10-29) |
|---|---|---|
| Hub `profitability` (release 1.0) | Utilisation, project budget against actual, profitability per customer and project | Built. Time comes from TimeLog through the hub's TimeLog connector (`time.external`) until the switch (`time.cutover`, 1.1) |
| Hub `delivery` (1.0/1.1) | Projects, deliverables and their week plan, phases and gates, status, portfolio, workload, competence | 1.0 parts built. Phases, gates, portfolio and governance are 1.1. Projects created before the hub, and those still in TimeLog, lack deliverable dates |
| Hub `time` (1.0) | Time entries, submission and approval, reminders, reports | Built. TimeLog remains master for time until the switch |
| Hub `sales`, `contracts`, `crm`, `sync` (1.0) | Deals, quotes, contracts, customers; HubSpot and Fortnox kept in step | Built |
| Hub `finance` (1.0) | Results, budget, cash flow, overdue receivables, days sales outstanding | Built, read from Fortnox |
| Hub `support` (1.0/1.1) | Tickets, SLA and routing (1.1) | Built. [to confirm: whether Swedwise's own customer support runs in the hub or still in Zendesk] |
| Hub `support.satisfaction`, `reporting.*`, `management.*`, `leadership.*` | Satisfaction surveys, KPI definitions and dashboards, audits, deviations, decisions, reviews | **Proposed for release 1.3, not built** |
| Hub `parties`, `purchasing` (1.0/1.1) | Supplier and partner register, supplier quotes, purchase orders, matched supplier invoices | Register built. It has no field for environmental or security certification |
| Fortnox | Books, invoices, credit notes, supplier invoices | Master for accounting |
| TimeLog | Time and invoicing basis | Master for time until the switch |
| HubSpot | CRM, deals | Master for deals started there |
| Entra ID | Users, groups, MFA registration, sign-ins, access reviews | Live. [to confirm: licence level for access reviews and sign-in logs] |
| Matrix | Observation of the solutions Swedwise runs on its platform (test cluster) | Matrix's production environment is parked. Not a source for customer-facing availability today |
| Document platform (this repository) | IMS documents with status, version, review date; training modules with progress tracking | Document status is readable now. [to confirm: whether training progress tracking is deployed and used] |

## 3. Objectives (from SW-IMS-MAN-006 section 6.2.2)

| ID | Objective | MAN-006 metric and target | Measurable today? |
|---|---|---|---|
| O-Q1 | Customer satisfaction | Survey rating ≥ 4.0 / 5.0, quarterly | **No.** No survey is run; `support.satisfaction` is not built |
| O-Q2 | Service delivery quality | On-time project delivery ≥ 90%, quarterly | Partly. Hub deliverables have dates only for projects made from hub quotes |
| O-Q3 | SaaS service reliability | Platform uptime ≥ 99.9%, monthly | **No.** No uptime source; which SaaS services are in scope is unconfirmed |
| O-Q4 | Competence development | Required training completed 100%, quarterly | **No.** No training record exists. [to confirm: document platform tracking] |
| O-E1 | Carbon footprint reduction | Business travel CO2 −10% year on year, annually | **No.** Only travel cost is in Fortnox; no distances or emission factors |
| O-E2 | Waste management | E-waste recycling ≥ 95%, annually | **No.** No disposal records kept |
| O-E3 | Energy efficiency | Office energy per employee −5% year on year, quarterly | **No.** [to confirm: whether Swedwise receives its own electricity bills or pays energy in the rent] |
| O-E4 | Sustainable procurement | ≥ 70% of critical suppliers environmentally certified, annually | **No.** "Critical supplier" is not defined; the parties register has no certification field |
| O-S1 | Security incident prevention | Zero material breaches, quarterly | **No.** No incident register is kept (SW-ISMS-FRM-002 is a form) |
| O-S2 | Security awareness | 100% staff trained annually, quarterly | **No.** As O-Q4 |
| O-S3 | Vulnerability management | High-risk vulnerabilities remediated within 30 days, monthly | **No.** [to confirm: whether a vulnerability scanner or endpoint management (e.g. Intune/Defender) is in use] |
| O-S4 | Phishing resistance | Simulation click rate < 5%, quarterly | **No.** No phishing simulation is run |
| O-C1 | IMS improvement | ≥ 20 documented improvements per year, quarterly | **No.** The improvement register SW-IMS-REG-005 does not exist |
| O-C2 | Corrective action timeliness | ≥ 90% closed on time, quarterly | **No.** No corrective action register; two competing procedures |

**13 of the 14 objectives cannot be measured today.** Only O-Q2 can, and only in part. The targets in
MAN-006 were written before anything was measured. They should be set as targets only after a baseline
exists (decision proposed for the Q1 2027 management review, SW-IMS-REC-001).

**The documents disagree on targets.** These must be settled when the objectives are approved:

| Topic | SW-IMS-MAN-006 | SW-IMS-PRO-006 | SW-IMS-PRO-004 (example) |
|---|---|---|---|
| Customer satisfaction | ≥ 4.0 / 5 survey | NPS ≥ 50; service quality ≥ 8/10 | ≥ 90% |
| On-time delivery | ≥ 90% | ≥ 90% | 95% on time and on budget |
| Travel emissions | −10% / year | −5% / year | −10% / year |
| Office energy | −5% per employee / year | −3% / year | — |
| Security incidents | Zero material breaches | < 2 major per year | Zero major |
| E-waste recycling | ≥ 95% | 100% | — |

## 4. KPI register

Columns: **Objective** is the MAN-006 objective served (or "process" when the KPI follows a process with no
objective). **Today** is Yes (can be produced now from an existing source), Partly, or No.

### 4.1 Quality and delivery

| ID | KPI | Objective | Formula | Where the number comes from | Owner (job) | Frequency | Target | Baseline | Today |
|---|---|---|---|---|---|---|---|---|---|
| KPI-Q-01 | Customer satisfaction score | O-Q1 | Mean rating (1–5) of answers in the period | Survey SW-QMS-FRM-005; later hub `support.satisfaction` (1.3) for support cases | Head of PMO & CI (Quality Lead) | Quarterly | ≥ 4.0 [to confirm after baseline] | [to measure] | No |
| KPI-Q-02 | On-time deliverables | O-Q2 | Deliverables marked done on or before their planned week ÷ deliverables due in the period | Hub `delivery.deliverables`, `delivery.gates` (1.1) | CSO (Customer Success Lead) | Quarterly | ≥ 90% | [to measure] | Partly (hub-made projects only) |
| KPI-Q-03 | Project budget variance | Process: project-delivery | (Forecast at completion − budget) ÷ budget, per project; share within ±10% | Hub `profitability.budget` (time from TimeLog via `time.external`) | CSO | Monthly | ≥ 80% of projects within ±10% [to confirm] | [to measure] | Yes |
| KPI-Q-04 | Consultant utilisation | Process: resource-allocation | Billable hours ÷ capacity hours (capacity less holidays and absence) | Hub `profitability.utilisation`, `delivery.capacity` | CSO (Resource Management Lead) | Monthly | 70–85% (SW-IMS-PRO-006) [to confirm] | [to measure] | Yes |
| KPI-Q-05 | Projects in red status | Process: project-delivery | Active projects with status red ÷ active projects | Hub `delivery.governance`, `delivery.portfolio` (1.1) | CSO | Monthly | [to set after baseline] | [to measure] | Partly (1.1) |
| KPI-Q-06 | Customer complaints | O-Q1 | Complaints logged in the period | Complaint register SW-QMS-FRM-006; proposal: a complaint field or form on hub `support.tickets` | Head of PMO & CI (Quality Lead) | Monthly, reported quarterly | < 5 per quarter (SW-IMS-PRO-006) | [to measure] | No |
| KPI-Q-07 | Complaints closed within target | O-Q1 | Complaints closed within the response time in SW-QMS-PRO-002 ÷ complaints closed | As KPI-Q-06 | Head of PMO & CI | Quarterly | [to confirm] | [to measure] | No |
| KPI-Q-08 | Customer retention | Process: account-management | Customers with an active contract at the start of the year that still have one at the end ÷ customers at the start | Hub `contracts.register`, `crm` (HubSpot via `sync`) | CCO (Customer Development Lead) | Quarterly | ≥ 95% (SW-IMS-PRO-006) | [to measure] | Yes |
| KPI-Q-09 | Support response within SLA | Process: support-and-incidents | Tickets with first response within the SLA ÷ tickets | Hub `support.sla` (1.1); [to confirm: helpdesk in use today] | CSO (Service Delivery Manager) | Monthly | ≥ 95% [to confirm] | [to measure] | Partly |
| KPI-Q-10 | Support resolution within SLA | Process: support-and-incidents | Tickets resolved within the SLA ÷ tickets resolved | As KPI-Q-09 | CSO (Service Delivery Manager) | Monthly | [to set after baseline] | [to measure] | Partly |
| KPI-Q-11 | SaaS service availability | O-Q3 | (Minutes in period − unplanned downtime) ÷ minutes in period, per service | No source. Later hub `assets.watch` (later release) or Matrix observation once Matrix production runs | CSO (Service Delivery Manager) | Monthly | ≥ 99.9% | [to measure] | No |
| KPI-Q-12 | Invoice accuracy | Process: invoicing-and-finance | Credit notes caused by invoicing errors ÷ invoices issued | Fortnox (invoices and credit notes; the cause must be recorded on the credit note) | CFO | Quarterly | [to set after baseline] | [to measure] | Partly (cause not recorded) |
| KPI-Q-13 | Time reported on time | Process: invoicing-and-finance, resource-allocation | People with the week's time submitted by the deadline ÷ people expected to report | TimeLog today; hub `time.approval`, `time.settings` after the switch | CSO | Weekly, reported monthly | ≥ 95% [to confirm] | [to measure] | Yes |
| KPI-Q-14 | Quote win rate | Process: sales | Deals won ÷ deals closed (won + lost) in the period | Hub `sales.deals` and HubSpot | CCO (Customer Acquisition Lead) | Quarterly | [to set after baseline] | [to measure] | Yes |
| KPI-Q-15 | Overdue receivables | Process: invoicing-and-finance | Amount overdue more than 30 days ÷ total receivables | Hub `finance.overview` (Fortnox) | CFO | Monthly | [to set after baseline] | [to measure] | Yes |

### 4.2 Competence and people

| ID | KPI | Objective | Formula | Where the number comes from | Owner (job) | Frequency | Target | Baseline | Today |
|---|---|---|---|---|---|---|---|---|---|
| KPI-P-01 | Required training completed | O-Q4 | People who completed every training required for their job ÷ people | Document platform training modules (progress tracking) [to confirm: in use]; induction SW-IMS-TRN-006 | CSO (Resource Management Lead) for consultants; HR / People & Culture for induction | Quarterly | 100% | [to measure] | No |
| KPI-P-02 | Consultants with a current competence record | Process: competence-and-training | Consultants with skills and certifications recorded in the last 12 months ÷ consultants | Hub `delivery.competence` (1.3) | CSO | Semi-annual | 100% [to confirm] | [to measure] | No |
| KPI-P-03 | Employee engagement | Process: hr-management | Engagement survey score | No survey tool known [to confirm] | HR / People & Culture | Annual | ≥ 75% (SW-IMS-PRO-006) | [to measure] | No |
| KPI-P-04 | Leavers with access removed on the last day | Process: hr-management, it-infrastructure | Leavers whose Entra account was disabled by their last working day ÷ leavers | Entra (account disabled date) against HR's leaver list; hub `access.scim` | HR / People & Culture with COO (IT Manager) | Quarterly | 100% | [to measure] | Yes |

### 4.3 Environment

| ID | KPI | Objective | Formula | Where the number comes from | Owner (job) | Frequency | Target | Baseline | Today |
|---|---|---|---|---|---|---|---|---|---|
| KPI-E-01 | Business travel CO2e | O-E1 | Σ (distance per mode × emission factor) | No source. Fortnox has the cost only. Needs the travel agency's report or hub `time.expenses` (1.2) with distance and mode | CFO (Environmental Lead) | Annual (quarterly tracking) | −10% vs. baseline year (MAN-006) | [to measure] | No |
| KPI-E-02 | Business travel cost (proxy) | O-E1 | Travel cost booked in the period | Fortnox travel cost accounts [to confirm: accounts used] via hub `finance.results` | CFO (Environmental Lead) | Quarterly | Trend only | [to measure] | Yes |
| KPI-E-03 | Office energy per employee | O-E3 | kWh in the period ÷ average headcount | Energy bills [to confirm: available]; headcount from Entra | CFO (Environmental Lead) | Quarterly | −5% per year (MAN-006) | [to measure] | No |
| KPI-E-04 | E-waste recycled | O-E2 | Units disposed with a recycling certificate ÷ units disposed | Disposal certificates (SW-ISMS-FRM-009); later hub `assets.equipment` (later release) | CFO (Environmental Lead) with COO (IT Manager) | Annual | ≥ 95% (MAN-006) | [to measure] | No |
| KPI-E-05 | Critical suppliers with environmental certification | O-E4 | Critical suppliers with valid ISO 14001 or equivalent ÷ critical suppliers | Hub `parties.register` (needs a certification field and a "critical" mark) | CFO (Environmental Lead) | Annual | ≥ 70% (MAN-006) | [to measure] | No |
| KPI-E-06 | Environmental incidents | Process: emergency-preparedness | Incidents logged in the period | SW-EMS-FRM-004 | CFO (Environmental Lead) | Quarterly | Zero | [to measure] | No (no log kept) |

### 4.4 Information security

| ID | KPI | Objective | Formula | Where the number comes from | Owner (job) | Frequency | Target | Baseline | Today |
|---|---|---|---|---|---|---|---|---|---|
| KPI-S-01 | Material security incidents | O-S1 | Incidents rated High or Critical in the period | Incident register (SW-ISMS-FRM-002 records); later hub `management.deviations` (1.3) | COO (CISO, proposed) | Monthly, reported quarterly | Zero | [to measure] | No |
| KPI-S-02 | Security training completed | O-S2 | Staff who completed SW-ISMS training in the last 12 months ÷ staff | As KPI-P-01 | COO (CISO, proposed) | Quarterly | 100% | [to measure] | No |
| KPI-S-03 | High-risk vulnerabilities fixed within 30 days | O-S3 | High and critical findings closed within 30 days ÷ findings raised | [to confirm: scanner or endpoint management in use] | COO (IT Manager) | Monthly | 100% (critical < 7 days per SW-IMS-PRO-006) | [to measure] | No |
| KPI-S-04 | Phishing simulation click rate | O-S4 | Recipients who clicked ÷ recipients | No tool [to confirm] | COO (CISO, proposed) | Quarterly | < 5% | [to measure] | No |
| KPI-S-05 | MFA coverage | O-S1 | Enabled user accounts with MFA registered ÷ enabled user accounts | Entra (authentication methods registration report) | COO (CISO, proposed) | Monthly | 100% | [to measure] | Yes |
| KPI-S-06 | Access reviews completed | O-S1 | Access reviews done on time ÷ reviews due (SW-ISMS user access review procedure) | Entra access reviews [to confirm: licence], SW-ISMS-FRM-004/-015 | COO (CISO, proposed) | Quarterly | 100% | [to measure] | Partly |
| KPI-S-07 | Backup success | O-S1 | Successful backup jobs ÷ scheduled jobs | [to confirm: which backups Swedwise runs for its own systems] | COO (IT Manager) | Monthly | 100% | [to measure] | No |

### 4.5 The management system itself

| ID | KPI | Objective | Formula | Where the number comes from | Owner (job) | Frequency | Target | Baseline | Today |
|---|---|---|---|---|---|---|---|---|---|
| KPI-IMS-01 | Audit programme on schedule | Process: internal-audit | Audits held in their planned quarter ÷ audits planned (SW-IMS-REG-007) | SW-IMS-REG-007; later hub `management.audits` (1.3) | COO (IMS Owner) | Quarterly | 100% | 0 of 16 (no audit due yet) | Yes (by hand) |
| KPI-IMS-02 | Major nonconformities from audits | Process: internal-audit | Major nonconformities raised in the period | Audit reports; later hub `management.audits` (1.3) | COO (IMS Owner) | Per audit, reported quarterly | Zero at certification | [to measure] | No (no audits yet) |
| KPI-IMS-03 | Corrective actions closed on time | O-C2 | Corrective actions closed by their due date ÷ actions due | Corrective action register (none); later hub `management.deviations` (1.3) | COO (IMS Owner) | Quarterly | ≥ 90% (MAN-006) | [to measure] | No |
| KPI-IMS-04 | Improvements implemented | O-C1 | Improvement suggestions implemented in the period | Improvement register SW-IMS-REG-005 (does not exist); SW-IMS-FRM-002 | Head of PMO & CI | Quarterly | ≥ 20 per year (MAN-006) | [to measure] | No |
| KPI-IMS-05 | IMS documents approved and in date | Process: document-control | Documents with status approved and review date not passed ÷ IMS documents | Document platform (`content/ims/` frontmatter `status`, `review_date`) | COO (IMS Owner) | Monthly | 100% before certification | 0 of 128 approved (measured 2026-10-28) | Yes |
| KPI-IMS-06 | IMS roles held by a named person | Process: document-control, management-review | IMS roles with a named, appointed person ÷ IMS roles | Appointment records; Nexta `processes.json` `organisation.ims_roles` | COO (IMS Owner) | Quarterly | 100% | 0 of 12 (2026-10-29) | Yes (by hand) |
| KPI-IMS-07 | Management review actions closed on time | Process: management-review | Actions closed by their due date ÷ actions due | SW-IMS-FRM-006; later hub `leadership.reviews`, `leadership.decisions` (1.3) | COO (IMS Owner) | Quarterly | ≥ 90% [to confirm] | [to measure] | No (no review held) |
| KPI-IMS-08 | Management reviews held as planned | Process: management-review | Reviews held ÷ reviews planned | Review minutes | CEO | Annual | 100% | 0 held | Yes (by hand) |

## 5. Gaps

1. **No objective in MAN-006 is fully measurable today.** Only O-Q2 is measurable, and only in part. 13 of
   14 objectives have no source.
2. **The KPIs the hub can produce today serve processes, not objectives.** These are utilisation, budget
   variance, retention, win rate, time reported on time, overdue receivables and MFA coverage (Entra). The
   objectives were written from a template and do not use them. The management review should consider
   objectives that the existing data can follow (decision proposed in SW-IMS-REC-001).
3. **The hub's own management functions are not built.** KPI definitions and dashboards (`reporting`),
   audits and deviations (`management`), decisions and reviews (`leadership`) and support satisfaction are
   all proposed for release 1.3. Until then, IMS records are kept by hand.
4. **No source at all** for travel CO2e, office energy, e-waste, phishing, vulnerabilities, backups,
   engagement, SaaS availability or customer satisfaction. Each needs a decision: buy or build a source, or
   change the objective.
5. **Undefined terms:** "critical supplier", "material breach", "complaint" (as distinct from a support
   ticket), "SaaS service in scope".
6. **ID collisions (corrected 2026-10-29):** SW-IMS-REG-003 and SW-IMS-REG-004 were referenced but never
   issued; MAN-006 and PRO-006 now point to this register.
7. **Roles in PRO-006 that no job holds:** "SaaS Operations Lead", "Training Coordinator", "Office Manager",
   "Support Lead", "PMO". In this register they map to the CSO (service delivery), the CSO or HR (training),
   the CFO (environment) and the Head of PMO & CI.

## 6. Review

The IMS Owner reviews this register before each management review. KPI owners report their values to the
IMS Owner by the tenth working day after the period ends [to confirm]. KPIs with a baseline get a confirmed
target at the first management review after twelve months of data.

## Document Control

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-10-29 | IMS Owner (drafted in session) | First KPI register: 14 objectives, 40 KPIs, data sources and gaps |

---

**Approval**

| Role | Name | Signature | Date |
|---|---|---|---|
| IMS Owner | | | |
| Management Team Representative | | | |
