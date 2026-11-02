---
document_id: SW-EMS-REG-001
title: Environmental Aspects Register
doc_type: register
version: "2.1"
status: draft
classification: internal
owner: Environmental Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 14001
required_for_certification: true
related_documents:
  - SW-EMS-POL-001
  - SW-EMS-FRM-001
  - SW-IMS-MAN-006
  - SW-IMS-MAN-008
  - SW-IMS-REG-010
  - SW-IMS-REG-006
  - SW-IMS-REG-008
  - SW-IMS-PRO-007
  - SW-EMS-TRN-001
---

# Environmental Aspects Register

## 1. Purpose

This is Swedwise AB's one register of environmental aspects (ISO 14001 6.1.2). It lists the aspects of what Swedwise
does, buys and delivers, scores them with one method, says which are significant, who owns each and how significant
aspects are communicated.

Version 2.0 replaces the two earlier registers: this register's version 1.0, and the example rows in the form
SW-EMS-FRM-001. Those used three different scoring methods (here, in FRM-001 and in MAN-006 6.1.5) with clashing
aspect ids. The method below is now the only one: MAN-006 6.1.5 and FRM-001 point to it. FRM-001 is the form for
assessing a new or changed aspect before it is entered here.

## 2. Scope

The scope is the whole company as described in the IMS scope (SW-IMS-MAN-004):
- the offices: Karlstad (head office, Järnvägsgatan 7), Stockholm (Sankt Eriksgatan 46) and Uddevalla (Agnebergsgatan 2), the three premises in the annual report 2025 and the insurance letter 2025–2026; Malmö is not an office;
- business travel and commuting;
- the IT equipment Swedwise buys, uses and disposes of;
- Swedwise's own cloud platform (Matrix on Microsoft Azure, Sweden Central; older resources in West and North Europe) and its use of AI services;
- not today: a SaaS service of Swedwise's own. Swedwise offers none (owner, 2026-11-02); EA-12 is kept for a possible later service;
- the solutions Swedwise delivers, in their use phase at customers and at their end of life.

## 3. Method (the only one)

### 3.1 Identify

Each aspect is identified per activity, with:
- its **life-cycle stage**: purchase, own use, delivery, use at the customer, or end of life;
- its **condition**: normal, abnormal (for example a migration or an office move), or emergency;
- whether Swedwise **controls** it (C) or can only **influence** it (I). An aspect is controlled when Swedwise decides
  how it happens, for example its own travel or the size of its own cloud platform. It is influenced when someone
  else decides and Swedwise can only affect the choice, for example a landlord's heating, a cloud provider's energy
  mix, or how a customer runs a solution Swedwise designed.
- whether it is **beneficial**: an aspect that reduces impact elsewhere, such as a customer's paper process replaced
  by a digital one. Beneficial aspects are listed and not scored.

### 3.2 Score

**Score = Severity × Frequency**, each rated 1–5. Scores therefore run from 1 to 25.

| Rating | Severity: size of the impact | Frequency: how often it happens |
|--------|------------------------------|---------------------------------|
| 1 | Negligible | Rarely, or only in an emergency |
| 2 | Minor and local | A few times a year |
| 3 | Noticeable; a measurable share of Swedwise's footprint | Monthly |
| 4 | Large; among the biggest parts of the footprint | Weekly |
| 5 | Severe or irreversible | Continuously |

### 3.3 Decide significance

An aspect is **significant** when any one of these holds:
1. its score is **12 or more**;
2. a **compliance obligation** in SW-IMS-REG-010 applies to it (the CO id is given);
3. an **interested party** has a stated requirement about it in SW-IMS-REG-006.

Significant aspects get an operational control (SW-IMS-MAN-008 8.9.1). Each one is considered when objectives are
set (SW-IMS-MAN-006 6.2), and it is monitored (SW-IMS-REG-008).

The ratings are the Environmental Lead's judgement from what is known today. No aspect is measured yet. Where a data
source exists or is planned, it is named, and the first year's figures will be used to re-rate.

## 4. The register

### 4.1 Own operations

| ID | Activity | Aspect → impact | Stage | Cond. | C/I | Sev | Freq | Score | Significant (why) | Control today | Owner (job) | Data source |
|----|----------|-----------------|-------|-------|-----|-----|------|-------|-------------------|---------------|-------------|-------------|
| EA-01 | Office lighting and equipment | Electricity use → climate (Swedish grid, low carbon) | Own use | N | C | 2 | 5 | 10 | No | Equipment switched off; laptops, no desktops | CFO (Environmental Lead) | Energy bills: Karlstad has its own electricity bills (Karlstads Energi), Stockholm's electricity is billed by the landlord, Uddevalla's is in the rent (account 5020, SEK 20 k in 2025) |
| EA-02 | Office heating and cooling | Energy use → climate | Own use | N | I (landlord) | 2 | 5 | 10 | No | Landlord's systems | CFO | Landlord's figures [to request] |
| EA-03 | Business travel by air (customer sites, vendor events) | Fuel → greenhouse gases | Own use / delivery | N | C | 4 | 4 | 16 | **Yes** (score; CO-042 group sustainability reporting) | Remote delivery where possible; no written travel rule [to write: travel guideline] | CSO (Resource Management Lead) | Travel bookings and expense reports [to confirm: travel agency report]; today only cost (KPI-E-02) |
| EA-04 | Business travel by car (own and rental cars) | Fuel → greenhouse gases, air pollution | Own use / delivery | N | C | 3 | 4 | 12 | **Yes** (score) | None written [to write: travel guideline] | CSO | Mileage claims in expense reports |
| EA-05 | Business travel by rail | Electricity → climate (low) | Own use / delivery | N | C | 1 | 4 | 4 | No | Preferred mode where it is practical | CSO | Travel bookings |
| EA-06 | Commuting | Fuel → greenhouse gases | Own use | N | I | 2 | 5 | 10 | No | Remote work possible | HR | None (survey, if needed) |
| EA-07 | Buying laptops, phones and screens | Manufacturing (embodied) emissions, raw materials → climate, resources | Purchase | N | I (choice of product and lifetime) | 4 | 3 | 12 | **Yes** (score) | None written; lifetime not set [to decide: target lifetime] | COO (IT Manager) | Asset register SW-ISMS-REG-001 (units bought per year) |
| EA-08 | IT equipment at end of life | E-waste → pollution, lost materials | End of life | N | C | 3 | 2 | 6 | **Yes** (CO-051, CO-052) | Disposal through an authorised collector, data erased [to confirm: the recycler used] | COO (IT Manager) | Disposal authorisations SW-ISMS-FRM-009, recycler certificates |
| EA-09 | Swedwise's own cloud platform (Matrix on Azure, Kubernetes test cluster running continuously) | Data-centre electricity and cooling → climate | Own use | N | C (size, scheduling) / I (provider's energy) | 3 | 5 | 15 | **Yes** (score) | Autoscaled node pools; heavy workloads on their own tainted pool [to decide: scale test down outside working hours] | COO (IT Manager) | Microsoft's emissions reporting for the subscription [to confirm: Emissions Impact Dashboard or Azure carbon optimization]; Azure region [to confirm] |
| EA-10 | Development workstations and local test environments, including local AI model hosting | Electricity → climate | Own use | N | C | 2 | 5 | 10 | No | — | COO (IT Manager) | — |
| EA-11 | Use of AI services (assistants and coding agents, model inference in the cloud) | Data-centre electricity, water for cooling → climate, water | Own use / delivery | N | C (how much) / I (provider) | 3 | 5 | 15 | **Yes** (score) | None [to decide: what is reported per provider] | COO | Provider usage reports (tokens per month) [to confirm: providers report energy] |
| EA-12 | Out of scope today — SaaS service of Swedwise's own: none offered (owner, 2026-11-02); kept for a possible later service | Data-centre electricity → climate | Delivery | N | I | 2 | 5 | 10 | No | Hosting contract | CSO | Entiros's reporting [to request] |
| EA-13 | Paper and printing | Paper, toner → resources, waste | Own use | N | C | 1 | 2 | 2 | No | Digital-first work | COO | — |
| EA-14 | Office waste (general, packaging, food) | Waste → resources, pollution | Own use | N | C (sorting) / I (landlord's collection) | 2 | 4 | 8 | **Yes** (CO-051 sorting at source) | Sorting where the building offers it [to confirm per office] | CFO | Landlord's waste figures [to request] |
| EA-15 | Building cooling systems (landlord) | Refrigerant leak → climate | Own use | E | I (landlord) | 3 | 1 | 3 | No | Landlord's maintenance | CFO | — |
| EA-16 | Fire in an office | Smoke, burnt equipment → air, waste | Own use | E | C (prevention) | 3 | 1 | 3 | No | Building fire safety; SW-EMS-PRO-001 | CFO | Incident reports SW-EMS-FRM-004 |

### 4.2 What Swedwise delivers (life-cycle perspective)

| ID | Activity | Aspect → impact | Stage | Cond. | C/I | Sev | Freq | Score | Significant (why) | Control today | Owner (job) | Data source |
|----|----------|-----------------|-------|-------|-----|-----|------|-------|-------------------|---------------|-------------|-------------|
| EA-20 | Solutions Swedwise designs and delivers (Content Server/xECM, Exstream, AppWorks, integrations) running at the customer or in the customer's cloud | Server energy, storage, search indexing, batch runs → climate | Use at customer | N | I (design: sizing, retention, indexing, scheduling) | 3 | 5 | 15 | **Yes** (score) | None: design inputs carry no environmental requirement (SW-IMS-MAN-008 8.3) [to write: one design-input line for sizing and retention] | CSO (Service Delivery Manager) | Sizing documents per delivery |
| EA-21 | Data kept by delivered solutions without a retention rule | Storage growth → energy, hardware | Use at customer / end of life | N | I (records management design) | 2 | 5 | 10 | No | Retention rules where the customer decides them | CSO | — |
| EA-22 | Decommissioning and migration of delivered systems | Old servers, data disposal → e-waste | End of life | A | I | 2 | 2 | 4 | No | Customer's own disposal | CSO | — |
| EA-23 | Customers' paper processes replaced by digital ones (xECM, Exstream digital delivery) | Less paper, print and post → resources, climate | Use at customer | N | I | — | — | — | Beneficial (not scored) | — | CCO | Delivery cases [to collect] |

### 4.3 Suppliers

| ID | Activity | Aspect → impact | Stage | Cond. | C/I | Sev | Freq | Score | Significant (why) | Control today | Owner (job) | Data source |
|----|----------|-----------------|-------|-------|-----|-----|------|-------|-------------------|---------------|-------------|-------------|
| EA-30 | Purchased software, cloud and services | Suppliers' own footprint → climate | Purchase | N | I (choice of supplier) | 2 | 5 | 10 | No | Environmental criterion in purchasing (SW-IMS-PRO-015) | CFO | Supplier register |

## 5. Significant aspects

| ID | Aspect | Why significant | Objective (SW-IMS-REG-008) | Operational control (SW-IMS-MAN-008 8.9.1) |
|----|--------|-----------------|----------------------------|--------------------------------------------|
| EA-03 | Air travel | Score 16; group reporting | O-E1 travel CO2 −10% | Travel guideline [to write]; remote delivery first |
| EA-04 | Car travel | Score 12 | O-E1 | Travel guideline [to write] |
| EA-07 | Equipment purchase (embodied emissions) | Score 12 | None yet [to decide: target lifetime] | Lifetime rule in the asset procedure [to write] |
| EA-08 | E-waste | CO-051, CO-052 | O-E2 e-waste recycled ≥ 95% | Asset disposal: SW-ISMS-PRO-006 and SW-ISMS-FRM-009 |
| EA-09 | Own cloud platform | Score 15 | None yet [to decide] | Platform sizing and scheduling [to write] |
| EA-11 | AI services | Score 15 | None yet [to decide] | None yet [to decide] |
| EA-14 | Office waste | CO-051 | None | Sorting at source per office |
| EA-20 | Delivered solutions in use | Score 15 | None yet [to decide] | Design input for sizing and retention [to write] |

Three significant aspects (EA-09, EA-11 and EA-20) have no objective yet, and they score highest after air travel.
The objectives in SW-IMS-MAN-006 6.2 (O-E1 to O-E4) predate this register. The proposal for the next management
review (SW-IMS-REC-001) is to consider objectives for them.

## 6. Planned changes (ISO 14001 6.1.2 a)

These planned changes are already rated above, or will change the ratings when they happen:

| Planned change | Aspects it changes | Effect |
|----------------|--------------------|--------|
| A production environment for Swedwise's own platform (Matrix), planned after the test environment is complete | EA-09 | Roughly doubles the platform's continuous load |
| Growing use of AI agents in delivery and in Swedwise's own products | EA-11 | Frequency stays at 5; severity may rise to 4 once usage is reported |
| Swedwise's own products sold as services (Certify, Pages, the hub) | EA-09, EA-11, new aspects per product | Assess each with SW-EMS-FRM-001 before launch |
| Office changes | EA-01, EA-02, EA-14 | Re-assess when an office opens, moves or closes |

Every change that goes through change management (SW-IMS-PRO-008) is checked for new or changed
aspects. The form SW-EMS-FRM-001 is the record of that check.

## 7. Communication of significant aspects (6.1.2, 7.4)

| To whom | What | How | When | Owner |
|---------|------|-----|------|-------|
| All employees | The significant aspects and what each person can do (travel, equipment, AI use) | Environmental awareness training SW-EMS-TRN-001 and the induction programme SW-IMS-TRN-006; this register on the IMS document platform | At induction and yearly | CFO (Environmental Lead) with HR |
| Owners of significant aspects | Their aspect, its control and data source | Named in this register; reviewed with each owner | Yearly review | CFO |
| Management team | Significant aspects, ratings, missing objectives | Management review input (SW-IMS-MAN-009 9.3) | Yearly | CFO |
| Delivery teams | EA-20 and EA-21: sizing and retention as design inputs | Delivery method and design reviews | Per delivery | CSO |
| Suppliers | The environmental criterion in purchasing | Purchasing procedure SW-IMS-PRO-015 | At purchase | CFO |
| The owner (Storskogen) | The data behind EA-03, EA-04, EA-09 and others the group asks for | Group sustainability reporting (CO-042) | Yearly | CFO |
| Customers and the public | The environmental policy and, on request, the significant aspects | Communication procedure SW-IMS-PRO-007 [to decide: whether to publish on the website] | On request | CEO (communication) |

## 8. Review

The register is reviewed:
- yearly, before the management review;
- when an activity, product, office or supplier changes (section 6);
- after an environmental incident;
- when SW-IMS-REG-010 records a new or changed obligation.

The Environmental Lead re-rates with the measured figures once a year of data exists.

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | Environmental Lead | Initial draft | [TBD] |
| 2.0 | 2026-11-02 | Environmental Lead (draft prepared for review) | One method (severity × frequency, with significance also by obligation or interested party) replacing three; unique ids EA-01–EA-30; control vs influence; life-cycle stages including use at the customer and end of life; own cloud platform and AI services added; planned changes; communication of significant aspects; owners by job; Entiros-hosted SaaS marked to confirm; references to non-existent documents replaced or marked [to write]. From the ISO 14001 text pilot (2026-11-02) | [TBD] |
| 2.1 | 2026-11-02 | Environmental Lead (draft prepared for review) | Offices measured (three, from the annual report and the insurance letter; Malmö is not one), electricity bills per office, the Azure regions, and EA-12 out of scope: Swedwise offers no SaaS service of its own (owner, 2026-11-02) | [TBD] |
