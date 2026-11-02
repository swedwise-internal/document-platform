---
document_id: SW-IMS-REG-010
title: Compliance Obligations Register
doc_type: register
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
  - ISO 42001
required_for_certification: true
related_documents:
  - SW-IMS-PRO-013
  - SW-IMS-MAN-006
  - SW-IMS-REG-006
  - SW-IMS-REG-009
  - SW-EMS-REG-001
  - SW-IMS-PRO-005
---

# Compliance Obligations Register

## 1. Purpose

This register lists the compliance obligations Swedwise AB has today: the laws, regulations, contracts and schemes
that bind it, each written as the duty it creates, not as a category. For each one it says why it applies, which job
owns it, how and how often compliance is evaluated, and where the evidence is.

It serves ISO 14001 6.1.3 and 9.1.2, ISO/IEC 27001 Annex A 5.31, 5.32 and 5.34, ISO 9001 4.2 and ISO/IEC 42001 4.1.
The process that keeps it is the Legal and Compliance Monitoring Procedure (SW-IMS-PRO-013). The interested parties
register (SW-IMS-REG-006) says which needs of interested parties Swedwise has adopted as compliance obligations; they
are carried in here.

Until this register existed the IMS listed only categories (MAN-006 6.1.6, PRO-013 6.2). Those sections now point here.

## 2. How to read it

- **Source** cites the act by SFS number or the EU act by number. Swedish acts: svenskforfattningssamling.se;
  EU acts: EUR-Lex.
- **Owner** is the job that holds the obligation (Swedwise.CompanyIT `declarations/jobs.toml`; IMS roles per
  SW-IMS-MAN-005 4.1.2).
- **Evaluation** is how compliance is checked (ISO 14001 9.1.2) and how often. Every result is written in the
  evaluation log (section 6).
- **Status** is *not evaluated* for every row until the first evaluation is held. Nothing here is a claim of compliance.
- `[to confirm]` marks a fact the owner must confirm before the row is relied on.

## 3. Law and regulation

### 3.1 Personal data and privacy

| ID | Obligation (the duty) | Source | Applies because | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-----------------|-------|--------------------------|-------------------|
| CO-001 | Process personal data lawfully, for stated purposes, minimised, secured, kept no longer than needed; keep records of processing; inform data subjects; answer their requests within one month | Regulation (EU) 2016/679 (GDPR) Art. 5, 6, 12–22, 30, 32 | Swedwise is controller for 15 and processor for 4 activities (ROPA) | CEO (Privacy Lead), CFO stand-in | Review of the ROPA and notices against actual processing; annually and at each new system | SW-IMS-REG-009, SW-ISMS-NOT-001–003, request log |
| CO-002 | Notify a personal data breach to IMY within 72 hours unless unlikely to result in risk; tell data subjects when high risk; document every breach | GDPR Art. 33, 34 | Same | CEO (Privacy Lead); COO (CISO) runs the incident | Check of the breach log against incidents; annually and after every incident | Breach log (SW-ISMS-PRO-001 incident records) |
| CO-003 | As processor: act only on documented instructions, use sub-processors only as agreed, assist the controller, delete or return data at the end | GDPR Art. 28 | Four processing activities for customers | CEO (Privacy Lead); CSO for delivery | Sample of customer DPAs against how delivery works; annually | DPAs per customer (SW-IMS-REG-009 section on processors) |
| CO-004 | Have a data processing agreement with every processor that handles our personal data | GDPR Art. 28(3) | 27 processors have no known DPA (ROPA finding) | CFO (purchasing) | Count of processors with and without DPA; quarterly until zero, then annually | SW-IMS-REG-009 |
| CO-005 | Supplementary Swedish rules: personal identity numbers only when clearly justified; age of consent rules | Dataskyddslagen (SFS 2018:218), ch. 3 § 10 | Personal identity numbers held in HR and payroll | HR | Check of where personal identity numbers are stored; annually | HR system configuration |
| CO-006 | Obtain consent before storing or reading non-essential cookies on visitors' devices | Lag (2022:482) om elektronisk kommunikation, ch. 9 § 28 [to confirm chapter and section] | swedwise.se uses analytics [to confirm] | Marketing Lead | Scan of the website's cookies against the banner; twice a year | Scan report |

### 3.2 Information security and cyber security

| ID | Obligation (the duty) | Source | Applies because | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-----------------|-------|--------------------------|-------------------|
| CO-010 | Determine whether Swedwise is an essential or important entity; if it is, register with the supervisory authority, take risk-management measures, report significant incidents (early warning within 24 h) and train management | Cybersäkerhetslag implementing Directive (EU) 2022/2555 (NIS2) [to confirm SFS number and date in force] | Managed ICT services (B2B) are an Annex I sector; Swedwise is near the medium-size threshold (50 staff or EUR 10 m turnover and balance) [to confirm headcount and figures] | COO (CISO) | Applicability decision recorded, then re-checked at each annual report; if in scope, the measures are evaluated annually | Applicability memo [to write] |
| CO-011 | Pass on the security requirements customers in NIS2 sectors put on their suppliers (supply-chain security) | Customer contracts under NIS2 Art. 21(2)(d) | Customers in energy, mining and public sector [to confirm list] | CSO | Contract review at signing; annual sample | Contract register (hub `contracts`) |
| CO-012 | Protect trade secrets with reasonable measures, or lose the legal protection | Lag (SFS 2018:558) om företagshemligheter, § 2 | Customer and own know-how | COO (CISO) | Check that NDAs, classification and access control cover what is claimed as trade secret; annually | NDAs, SW-ISMS classification policy |
| CO-013 | Handle security-sensitive activity only under a security protection agreement, with vetted staff and approved systems | Säkerhetsskyddslag (SFS 2018:585) | Only if a customer requires a säkerhetsskyddsavtal [to confirm whether any exists] | COO (CISO) | Check of the contract register for security protection agreements; annually | Contract register |

### 3.3 AI

| ID | Obligation (the duty) | Source | Applies because | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-----------------|-------|--------------------------|-------------------|
| CO-020 | As deployer: ensure staff who use AI systems have sufficient AI literacy; do not use prohibited practices | Regulation (EU) 2024/1689 (AI Act) Art. 4, 5 (apply from 2 Feb 2025) | Staff use AI assistants and coding agents daily | COO | Training records against the list of AI users; annually | AI inventory [to write], training records |
| CO-021 | As provider of AI systems Swedwise builds (Swedwise Certify, Matrix agents): classify each system's risk; meet transparency duties (tell people they interact with AI; mark generated content) | AI Act Art. 6, 50 (Art. 50 from 2 Aug 2026) | Products in development use AI | COO; product owner per product | Classification per product before release; re-checked at each release | Product model (risk class per product) [to write] |
| CO-022 | Use AI providers only on terms that forbid training on our or customers' data and keep processing in the EU where the contract requires it | Provider terms (Anthropic commercial terms, Azure AI Foundry) [to confirm the terms in force] | Customer data may reach AI tools | COO (CISO) | Review of each provider's terms against customer contracts; annually and at each new provider | Supplier register |

### 3.4 Work environment and employment

| ID | Obligation (the duty) | Source | Applies because | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-----------------|-------|--------------------------|-------------------|
| CO-030 | Run systematic work environment management: investigate, assess risks, act and follow up, in writing; annual follow-up | Arbetsmiljölagen (SFS 1977:1160) ch. 3 § 2a; AFS 2023:1 | Employer | CEO (as employer); HR runs it | Annual follow-up of the work environment management | Risk assessments, annual follow-up record |
| CO-031 | Prevent organisational and social risks: workload, working hours, victimisation | AFS 2023:2 [to confirm the provisions after the 2025 restructuring] | Consultants work at customer sites and remotely | HR | Annual employee survey and follow-up | Survey results [no survey today] |
| CO-032 | Survey and analyse pay for unjustified gender differences every year and document it (10 or more employees) | Diskrimineringslagen (SFS 2008:567) ch. 3 § 8–12 | About 35 employees | HR | Annual pay survey | Pay survey record |
| CO-033 | Keep records of overtime and on-call time | Arbetstidslagen (SFS 1982:673) § 11 | Employer | HR | Check of time records; annually | Time records (TimeLog until the hub takes over) |
| CO-034 | Provide an internal whistleblowing channel (50 or more employees) | Lag (SFS 2021:890) om skydd för personer som rapporterar om missförhållanden | Applies at 50 employees: Swedwise is below [to confirm how staff are counted] | HR | Headcount check; annually | — |

### 3.5 Accounting and corporate

| ID | Obligation (the duty) | Source | Applies because | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-----------------|-------|--------------------------|-------------------|
| CO-040 | Keep accounting records and supporting documents for seven years, in Sweden or the EU, readable | Bokföringslagen (SFS 1999:1078) ch. 7 | Company | CFO | Check of where vouchers are archived (Fortnox) and for how long; annually | Fortnox archive |
| CO-041 | Prepare and file the annual report | Årsredovisningslagen (SFS 1995:1554); Aktiebolagslagen (SFS 2005:551) | Limited company | CFO | Filed on time; annually | Bolagsverket receipt |
| CO-042 | Deliver the sustainability data the group needs for its sustainability reporting | Storskogen group requirement, which follows from Directive (EU) 2022/2464 (CSRD) and Årsredovisningslagen ch. 6 [to confirm what Storskogen asks of subsidiaries] | Swedwise is part of Storskogen | CFO (Environmental Lead) | Data delivered on time and checked against the aspects register; annually | Group reporting submission |

### 3.6 Environment

| ID | Obligation (the duty) | Source | Applies because | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-----------------|-------|--------------------------|-------------------|
| CO-050 | Follow the general rules of consideration: knowledge, precaution, resource management (energy, materials), choice of products | Miljöbalken (SFS 1998:808) ch. 2 | Every activity; offices need no permit or notification | CFO (Environmental Lead) | Check against the significant aspects (SW-EMS-REG-001); annually | SW-EMS-REG-001 |
| CO-051 | Sort waste at source and hand electrical and electronic waste only to an authorised collector; keep records of hazardous waste handed over | Avfallsförordningen (SFS 2020:614) [to confirm sections] | Swedwise is a holder of IT equipment at end of life, not a producer: it does not place electrical equipment on the Swedish market [to confirm that no hardware is resold] | COO (IT Manager) | Check of disposal records against retired assets; annually | Asset register (SW-ISMS-REG-001), recycler certificates |
| CO-052 | Erase data from equipment before disposal | GDPR Art. 32; Annex A 7.14 | Laptops and phones hold personal and customer data | COO (IT Manager) | Disposal records show erasure for every unit; annually | Disposal records with erasure certificates |

### 3.7 Accessibility and other

| ID | Obligation (the duty) | Source | Applies because | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-----------------|-------|--------------------------|-------------------|
| CO-060 | Deliver digital services to public-sector customers that meet the accessibility requirements (EN 301 549 level) | Lag (SFS 2018:1937) om tillgänglighet till digital offentlig service — binds the public body; reaches Swedwise through the contract | Public-sector customers [to confirm list] | CSO | Contract review; accessibility check in delivery acceptance | Delivery acceptance records |
| CO-061 | Export control on dual-use items | Regulation (EU) 2021/821 | Not applicable: Swedwise exports no dual-use items or controlled software. Re-checked yearly. | CFO | Applicability re-check; annually | This row |

## 4. Contracts

| ID | Obligation (the duty) | Source | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-------|--------------------------|-------------------|
| CO-070 | Meet each customer's security appendix, data processing agreement, service levels and confidentiality | Customer agreements (one row per customer agreement in the hub's contract register) | CSO (delivery); CCO (the agreement) | Annual sample of agreements against delivery practice; at every renewal | Hub `contracts`, SW-IMS-REG-009 |
| CO-071 | Keep the OpenText partner obligations: certified staff, confidentiality, use of OpenText software and marks within the partner terms | OpenText partner agreement [to confirm the agreement and its current obligations] | CCO | Annual check against the partner portal requirements | Partner portal status |
| CO-072 | Use Microsoft 365 and Azure within the licence and product terms; licences match users | Microsoft Product Terms, Microsoft Customer Agreement | COO (IT Manager) | Licence count against users (CompanyIT); quarterly | CompanyIT licence view |
| CO-073 | Use bought standards only as the licence allows: internal use, no upload to AI tools, no access for anyone outside the licensee | SIS General Terms and Conditions 2024/006, section 4 | COO (IMS Owner) | Check that no standard text sits in AI tools or shared indexes; annually | This row; the SIS licence (when signed) |
| CO-074 | Keep software licences for every tool used in delivery | Upphovsrättslagen (SFS 1960:729); each vendor's licence | COO (IT Manager) | Software inventory against licences; annually | Software inventory [to write] |
| CO-075 | Follow the owner's group policies (code of conduct, sustainability, information security) | Storskogen group policies [to confirm which apply] | CEO | Annual confirmation to the group | Group confirmation |
| CO-076 | Meet the conditions of the company's insurance (for example security measures for the liability and cyber cover) | Insurance policies [to confirm] | CFO | Annual check at renewal | Policy documents |

## 5. Certification schemes and voluntary commitments

| ID | Obligation (the duty) | Source | Owner | Evaluation and frequency | Evidence / record |
|----|-----------------------|--------|-------|--------------------------|-------------------|
| CO-080 | Meet the requirements of the management system standards Swedwise certifies to | ISO 9001:2026, ISO 14001:2026, ISO/IEC 27001:2022 + Amd 1:2024, ISO/IEC 42001:2023 | COO (IMS Owner) | Internal audit programme (SW-IMS-REG-007); management review | Audit reports, SW-IMS-REC-001 |
| CO-081 | Follow the certification body's rules: surveillance audits, use of the certification mark, notify significant changes | Certification agreement [no body chosen yet] | COO (IMS Owner) | At each surveillance audit | Certification agreement |

## 6. Evaluation of compliance

- **When.** Once a year, in the quarter before the management review, and after any change the legal watch
  (SW-IMS-PRO-013 section 7) reports. A row with a shorter frequency is evaluated on its own schedule.
- **How.** The owner checks the evidence named in the row and records the result below: compliant, not compliant,
  not applicable, or not evaluated, with the date and what was looked at.
- **Not compliant** becomes a nonconformity under SW-IMS-PRO-005. A breach that must be reported to an authority
  (CO-002, CO-010) is reported first.
- **Reported** in the management review (SW-IMS-MAN-009 9.3) as one line per row.
- **Kept** for the life of the IMS plus three years (retention per the Document Control Procedure, SW-IMS-PRO-001).

### 6.1 Evaluation log

| Date | ID | Result | What was looked at | By (job) |
|------|----|--------|--------------------|----------|
| — | — | No evaluation held yet | — | — |

## 7. Open points for the owner

All points are marked `[to confirm]` in the tables above:
- whether NIS2 applies (headcount and figures);
- the cookie rules and whether the website uses analytics;
- whether any security protection agreement exists;
- which public-sector and NIS2-sector customers there are;
- what Storskogen asks of its subsidiaries;
- the OpenText partner terms;
- the insurance conditions;
- the Avfallsförordningen sections and AFS 2023:2 provisions;
- whether any hardware is resold.

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | 2026-11-02 | IMS Owner (draft prepared for review) | First register: actual obligations with owner, evaluation and evidence; replaces the categories in MAN-006 6.1.6 and PRO-013 6.2. Takes the id SW-IMS-REG-010, because SW-IMS-REG-002 is the document register | [TBD] |
