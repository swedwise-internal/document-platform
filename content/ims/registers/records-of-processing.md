---
document_id: SW-IMS-REG-009
title: Records of Processing Activities (ROPA)
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: Privacy Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
required_for_certification: false
related_documents:
  - SW-ISMS-POL-004
  - SW-IMS-ROLE-006
  - SW-ISMS-ROLE-001
  - SW-IMS-PRO-013
  - SW-ISMS-NOT-001
  - SW-ISMS-NOT-002
  - SW-ISMS-NOT-003
  - SW-IMS-REG-001
---

# Records of Processing Activities (ROPA)

**Document ID**: SW-IMS-REG-009-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: Privacy Lead (CEO; stand-in CFO)
**Approved by**: [TBD — Management Team]

## 1. Purpose

This register is Swedwise AB's record of processing activities under GDPR Article 30: what personal data Swedwise
processes as **controller** (section A) and as **processor** for customers (section B), which **processors** Swedwise
itself uses (section C), why Swedwise has no Data Protection Officer (section D), and what needs a decision (section E).

**Controller**: Swedwise AB, organisation number 556793-2354, Västra Torggatan 11, 652 25 Karlstad [to confirm: registered address; the address in signed contracts 2023–2025].
**Contact**: the Privacy Lead, privacy@swedwise.se (proposed shared mailbox, not created yet; members CEO and CFO).
**Data Protection Officer**: none; not required (section D).

**How this register was made.** It was drafted on 2026-10-29 from the CompanyIT systems catalogue
(`Swedwise.CompanyIT/declarations/systems.toml`, measured against Entra 2026-10-27), the organisation and job
declarations, and the process register (process owners as jobs). Nothing here was confirmed by the people who run the
processing. Every row is a proposal until its owner job has checked it. Where a fact is not known it says
`[to confirm: …]`. Retention periods are proposals; where a Swedish law sets a period, the law is named.

**Owner jobs** follow the process register: HR / People & Culture for recruitment and HR, CFO for invoicing, finance
and ordinary purchasing, CCO for sales, partners and marketing, CSO for delivery, COO for IT.

**Security measures** (Article 30(1)(g)) are not repeated per row. They are those of the Information Security Policy
(SW-ISMS-POL-001), the Access Control Policy (SW-ISMS-POL-002) and the Data Protection Policy (SW-ISMS-POL-004),
sections 5 and 10.

## A. Swedwise as controller

Lawful basis refers to GDPR Article 6(1): (a) consent, (b) contract, (c) legal obligation, (f) legitimate interests.
Article 9 conditions are given where health or trade union data occurs.

| ID | Activity | Purpose | Lawful basis | Data subjects | Data categories | Systems | Recipients and processors | Transfer outside EU/EEA and safeguard | Retention (proposal) | Owner job |
|---|---|---|---|---|---|---|---|---|---|---|
| ROPA-C-01 | Employment and HR administration | Manage the employment: contract, line, role, development, absence, rehabilitation, work environment, end of employment | 6(1)(b) employment contract; 6(1)(c) labour law, work environment law and social insurance law; Art 9(2)(b) with Dataskyddslagen (2018:218) 3 kap. 2 § for health data (sick leave, rehabilitation) and, if it occurs, trade union membership | Employees; former employees; next of kin (emergency contact) | Identity and contact details, personal identity number, employment terms, unit, manager, job, development plans, absence, sick leave and rehabilitation notes, next of kin [to confirm: whether union membership is recorded] | Swedwise xECM (employee workspace), Microsoft 365 and Entra (organisation data), Nexta Hub (people, line, roles, equipment) | Managers and HR internally; Försäkringskassan and occupational health service where required [to confirm: occupational health provider]; processors: Microsoft, Nexta (ROPA-PROC-01, ROPA-PROC-04) | Microsoft: see ROPA-PROC-01 | Employee file: the employment plus 2 years [to confirm]; rehabilitation records: [to confirm]; xECM retention starts when the employee workspace is closed at leave | HR / People & Culture |
| ROPA-C-02 | Payroll, expenses and benefits | Pay salaries and expenses, report tax and social fees, administer pension and insurance | 6(1)(b) employment contract; 6(1)(c) Skatteförfarandelagen (2011:1244) and Bokföringslagen (1999:1078); Art 9(2)(b) for sick pay (health data) and union fee deduction if any [to confirm] | Employees; former employees | Identity, personal identity number, bank account, salary, tax, absence and sick days, benefits, expenses | Fortnox (salaries, accounting) | Skatteverket, Försäkringskassan, bank; pension and insurance providers [to confirm: which]; processor: Fortnox (ROPA-PROC-05) | None known [to confirm: Fortnox hosting] | Accounting records, including payroll records: 7 years after the end of the calendar year (Bokföringslagen 7 kap. 2 §); other payroll data [to confirm] | CFO |
| ROPA-C-03 | Recruitment | Find, assess and hire employees and consultants | 6(1)(b) steps before a contract at the candidate's request; 6(1)(f) assessing candidates; 6(1)(a) consent for keeping an application for future roles | Candidates; referees | CV, contact details, education, experience, certifications, interview notes, references, test results [to confirm: whether tests or background checks are used] | [to confirm: recruitment tool — none is listed in the systems catalogue]; Microsoft 365 (mail, Teams, files) | Hiring managers and HR internally; recruitment agencies [to confirm: which] | Microsoft: see ROPA-PROC-01 | 2 years after the recruitment decision (time to bring a claim under Diskrimineringslagen (2008:567)) [to confirm]; with consent for future roles, as long as the consent states [to confirm] | HR / People & Culture |
| ROPA-C-04 | Time reporting, staffing and invoicing basis | Record time, plan staffing, invoice customers, follow profitability | 6(1)(b) employment contract and customer contracts; 6(1)(c) Bokföringslagen for the invoicing basis; 6(1)(f) planning and follow-up | Employees; subcontractors; customer contacts on projects | Name, time entries, projects, bookings, rates, approvals | TimeLog (master for time until the switch; being replaced by Nexta Hub); Nexta Hub (time, bookings, projects); Fortnox (invoices) | Customers (time specifications on invoices); processors: TimeLog, Nexta, Fortnox (ROPA-PROC-06, ROPA-PROC-04, ROPA-PROC-05) | None known [to confirm: TimeLog hosting] | Time used as invoicing basis: 7 years (Bokföringslagen 7 kap. 2 §); other time and staffing data [to confirm]; TimeLog data after the switch: [to confirm] | CFO (staffing: CSO) |
| ROPA-C-05 | Customer and partner contacts, CRM and sales | Manage customer and partner relationships, deals, quotes and contracts | 6(1)(f) business relationships with companies and organisations; 6(1)(b) where the person is the contracting party | Contact people at customers, prospects and partners | Name, title, employer, business contact details, communication history, deals, contract roles | HubSpot (leads, deals, contacts), Nexta Hub (customers, contracts), Microsoft 365 (mail, calendars), Slack, Salesbox (disabled in Entra) | Internal sales and delivery; processors: HubSpot, Nexta, Microsoft, Slack (ROPA-PROC-07, ROPA-PROC-04, ROPA-PROC-01, ROPA-PROC-11) | HubSpot and Slack: US vendors [to confirm: data location and safeguard (EU–US Data Privacy Framework or standard contractual clauses)] | Contacts: while the relationship is active plus 2 years without activity [to confirm]; contracts: 10 years after the end (general limitation period, Preskriptionslagen (1981:130)) [to confirm] | CCO |
| ROPA-C-06 | Marketing and the website | Run swedwise.se, answer contact forms, follow visits, advertise and post on social media | 6(1)(f) answering enquiries and B2B marketing; 6(1)(a) consent for non-necessary cookies (Lagen om elektronisk kommunikation (2022:482) 9 kap. 28 §) and for any newsletter [to confirm: whether a newsletter exists] | Website visitors; people using the contact form; followers and people reached by ads | Contact form content, name, e-mail, company; IP address, device and browsing data; company identified from the visit (Leadfeeder); ad and page statistics | swedwise.se (contact form at swedwise.se/kontakta to the sales mailbox) [to confirm: hosting and CMS]; Leadfeeder; Google Ads; LinkedIn company page; HubSpot | Sales mailbox internally; processors or joint controllers: Leadfeeder, Google, LinkedIn, website host (ROPA-PROC-14, ROPA-PROC-17, ROPA-PROC-18, ROPA-PROC-19) | Google and LinkedIn: US groups [to confirm: safeguard]; Leadfeeder [to confirm] | Form enquiries: as ROPA-C-05; analytics and visit data [to confirm: tool settings]; cookies: as the consent tool states [to confirm] | CCO (Marketing lead) |
| ROPA-C-07 | IT accounts, equipment and access | Give people accounts, licences, access and equipment, and close them when people leave | 6(1)(b) employment and consultancy contracts; 6(1)(f) running and protecting IT | Employees; consultants and subcontractors with accounts; guests | Name, user name, e-mail, phone, unit, job, group memberships, licences, equipment handed out, shared passwords vault membership, Wi-Fi access | Microsoft 365, Entra, Exchange, Azure, LastPass, GitHub, UniFi, Nexta Hub (asset management), CompanyIT | IT internally; processors: Microsoft, LastPass, GitHub, UniFi vendor (ROPA-PROC-01, ROPA-PROC-02, ROPA-PROC-08, ROPA-PROC-21) | Microsoft, GitHub, LastPass: US vendors [to confirm: safeguard] | Entra account deleted 90 days after the last day (systems catalogue); the mailbox is converted to a shared mailbox for the manager at leave [to confirm: how long it is kept]; equipment records [to confirm] | COO (IT Manager) |
| ROPA-C-08 | Sign-in and security logging | Detect and investigate security incidents and misuse; prove access controls work | 6(1)(f) information security | Everyone with an account; external guests | Sign-in events, IP address, device, application used, audit events | Entra sign-in and audit logs, Microsoft 365 audit, Azure logs, logs of Swedwise's own platform | CISO and IT internally; processor: Microsoft (ROPA-PROC-01) | Microsoft: see ROPA-PROC-01 | 12 months (Data Protection Policy 12.2 proposal) [to confirm: what the licences actually keep] | COO (CISO, proposed) |
| ROPA-C-09 | Employee surveys | Measure engagement and wellbeing and feed each person's development plan | 6(1)(f) developing the workplace [to confirm: lawful basis]; answers about wellbeing may reveal health — Art 9(2)(b) only if health data is processed [to confirm: whether answers are anonymous and the reporting threshold] | Employees | Survey answers, comments, team, scores | Winningtemp | HR and managers (aggregated); processor: Winningtemp (ROPA-PROC-09) | None known [to confirm: Winningtemp hosting] | [to confirm] | HR / People & Culture |
| ROPA-C-10 | Competence, certifications and training records | Keep consultants' CVs and competences, offer consultants to customers, record certifications and completed training | 6(1)(b) employment contract; 6(1)(f) offering consultants and proving competence | Employees; subcontractors | CV, skills, assignments, certifications and badges, training completed | Skillet (CVs, competences, certifications; Swedwise's own application), Credly (one user, last used 2023), partner portals (OpenText and others), the document platform's training records [to confirm: in use], Swedwise xECM | Customers and partners receive CVs in offers; vendors (OpenText and others) hold their own certification records; processors: Microsoft (ROPA-PROC-01), Credly (ROPA-PROC-13) | Credly: US [to confirm]; Microsoft: see ROPA-PROC-01 | During employment; CV after leaving [to confirm]; training records: the employment plus 2 years [to confirm] | CSO (training records: HR / People & Culture) |
| ROPA-C-11 | Meeting recordings and transcripts with AI tools | Record, transcribe and summarise meetings | **None decided** [to confirm: lawful basis; the systems catalogue says these tools need consent] | Employees; customers', partners' and candidates' participants in meetings | Voice, image, what people say, names, meeting content (which may contain anything, including customers' personal data) | Fireflies, Fathom, Klang (personal accounts by self-service consent, not company seats) | Processors: the three vendors (ROPA-PROC-12) [to confirm: whether there is any agreement at all] | Fireflies and Fathom: US vendors [to confirm]; Klang [to confirm] | [to confirm]; at leave the account and recordings are removed by the COO (systems catalogue) | COO |
| ROPA-C-12 | Use of generative AI (ChatGPT) | Help employees write, analyse and code | 6(1)(f) for the employee's account data; for personal data in prompts and uploads, the lawful basis of the activity the data comes from [to confirm: rules in the AI policy] | Employees; anyone named in prompts or uploaded documents | Account data; prompts and uploaded documents (may contain colleagues', customers' or candidates' data) | ChatGPT (SAML sign-in, assignment not required) | Processor: OpenAI (ROPA-PROC-10) | US vendor [to confirm: plan, data location, safeguard, whether prompts are used for training] | [to confirm: workspace retention setting] | COO |
| ROPA-C-13 | Internal communication and collaboration | Mail, chat, meetings, files and boards for daily work, also with customers and partners | 6(1)(b) and 6(1)(f) running the business | Employees; customer and partner contacts | Messages, files, calendars, boards, everything people share | Microsoft 365 (Exchange, Teams, SharePoint, OneDrive), Slack, whiteboards (diagrams.net in use; Miro, Mural, Lucid not used since 2024–2025), planning tools (Plandisc last used 2026-01; Wrike, Trello, Meister, iGlobe, Placker disabled or never used) | Processors: Microsoft, Slack, whiteboard and planning vendors (ROPA-PROC-01, ROPA-PROC-11, ROPA-PROC-22, ROPA-PROC-23) | Slack and several board vendors: US [to confirm] | Mail: [to confirm]; chat: [to confirm]; tools no longer used: [to confirm: export or delete] | COO |
| ROPA-C-14 | Supplier contacts and purchasing | Buy goods and services, pay suppliers, manage partner and vendor relationships | 6(1)(f) business relationships; 6(1)(c) Bokföringslagen for supplier invoices | Contact people at suppliers, partners and vendors; sole traders | Name, title, business contact details, invoices and payment details of sole traders | Fortnox (supplier invoices), Nexta Hub (supplier and partner register, purchasing), Microsoft 365, partner portals | Internal finance and purchasing; processors: Fortnox, Nexta, Microsoft | Microsoft: see ROPA-PROC-01 | Supplier invoices: 7 years (Bokföringslagen 7 kap. 2 §); contacts while the relationship is active plus 2 years [to confirm] | CFO (ordinary suppliers); CCO (partners and vendors whose products Swedwise sells) |
| ROPA-C-15 | Data subject requests and personal data breach records | Answer requests from data subjects; record and assess personal data breaches; notify IMY | 6(1)(c) GDPR Articles 12–22 and 33(5) | People who make requests; people affected by a breach | Request content, identity check, correspondence; breach facts, affected categories, decisions | privacy@swedwise.se (proposed shared mailbox, not created yet); [to confirm: where the request log and breach register are kept] | IMY; affected customers where Swedwise is processor; processor: Microsoft (ROPA-PROC-01) | Microsoft: see ROPA-PROC-01 | Requests: 2 years after closing [to confirm]; breach register: 5 years [to confirm] | Privacy Lead (CEO) |

**Rows in section A: 15.**

## B. Swedwise as processor

Here Swedwise processes personal data on behalf of customers. The customer is the controller and decides the
purpose. Swedwise follows the customer's documented instructions (Data Protection Policy 6.2).

| ID | Service | Controllers (customer categories) | Processing | Data categories | Sub-processors | Transfers | Retention and return | Governing agreement |
|---|---|---|---|---|---|---|---|---|
| ROPA-P-01 | Consulting and implementation assignments in customers' systems (OpenText xECM, Content Server, AppWorks, Exstream; Salesforce; integration; other platforms) | Customers in industry, services and the public sector [to confirm: customer categories] | Configuration, migration, testing, troubleshooting and support in the customer's environment; consultants may see and move personal data | Whatever the customer's systems hold: employees', customers' and citizens' data, documents, case files; special categories may occur [to confirm per assignment] | Subcontracted consultants and partners [to confirm: which]; tools in the customer's own tenant (Azure DevOps, Jira, Confluence, Bitbucket) are the customer's | None intended by Swedwise; data stays in the customer's environment [to confirm per assignment] | Nothing kept by Swedwise after the assignment unless the agreement says otherwise [to confirm: whether copies are made in Swedwise's own environments] | The customer's consulting agreement and its data processing agreement [to confirm: that every assignment with personal data has one] |
| ROPA-P-02 | Swedwise SaaS (Swedwise Communications: OpenText Exstream and Notifications, hosted at Entiros) [to confirm: still offered] | SaaS subscribers [to confirm: current customers, if any] | Generating and sending customers' communications (letters, notifications) | Recipients' names, addresses, contact details and message content | Entiros AB (hosting) (ROPA-PROC-20) [to confirm: further sub-processors] | None; Swedish data residency according to the SaaS service description | Return or deletion at the end of the subscription (SaaS service description) [to confirm] | Subscription agreement with a data processing agreement (the SaaS service description says one is included) [to confirm: template exists] |
| ROPA-P-03 | Support and incident handling for customers | Customers with support or maintenance agreements | Receiving, logging and solving support tickets; screenshots, logs and files attached to tickets may hold the customer's personal data | Customer contacts' names and contact details (Swedwise is controller for these, see ROPA-C-05) and personal data in attachments and logs (processor) | Zendesk (ROPA-PROC-15); Nexta Hub support module (ROPA-PROC-04) [to confirm: which helpdesk runs Swedwise's support today] | Zendesk: US vendor [to confirm: data location and safeguard] | Tickets: [to confirm]; attachments with customer data should be deleted when the ticket closes [to confirm] | Support or maintenance agreement and its data processing agreement [to confirm] |
| ROPA-P-04 | Managed operation and monitoring of customer solutions (services run on Swedwise's own platform, integration monitoring) | Customers with operations agreements [to confirm: which services with personal data run for customers today; Swedwise Matrix production is parked] | Running, monitoring and backing up solutions; monitoring integration messages | Message content and logs that may contain personal data | Microsoft Azure (ROPA-PROC-01); Nodinite (ROPA-PROC-24) [to confirm: who hosts the instances]; Starlify (ROPA-PROC-25) | Microsoft: see ROPA-PROC-01 | According to the operations agreement [to confirm] | Operations agreement and its data processing agreement [to confirm] |

**Rows in section B: 4.**

## C. Processors and sub-processors Swedwise uses

"Data processing agreement in place" is `[to confirm]` for every row: it is not known which agreements exist. Most
vendors offer standard terms that include one; whether Swedwise has accepted them, and on which account, must be
checked. A vendor that decides its own purposes (for example LinkedIn and Google for their own analytics) may be an
independent or joint controller rather than a processor; this is noted where likely.

| ID | Vendor | System | What it processes for Swedwise | Location and transfer | Data processing agreement in place | Owner job |
|---|---|---|---|---|---|---|
| ROPA-PROC-01 | Microsoft | Microsoft 365, Entra, Exchange Online, Teams, SharePoint, OneDrive, Azure (incl. the AKS clusters running Swedwise xECM, Nexta Hub, Skillet and Swedwise's own platform), Azure DevOps | Accounts, mail, files, calendars, chat, logs; HR and customer data in files and xECM; CVs in Skillet | [to confirm: tenant data location; Azure regions used] — US group, transfers [to confirm: EU Data Boundary and safeguard] | [to confirm] | CFO |
| ROPA-PROC-02 | LastPass | LastPass | Shared passwords; user accounts | US vendor [to confirm: data location and safeguard] | [to confirm] | CFO |
| ROPA-PROC-03 | OpenText | Partner portals, training and certification, OpenText tools (MediaManagement, IDOL/KD, CoreSignature) | Swedwise people's portal accounts and certification records; demo and delivery environments | [to confirm] — likely independent controller for its partner portal | [to confirm] | CCO |
| ROPA-PROC-04 | Nexta | Nexta Hub (Swedwise's own instance) | Customers, projects, time, contracts, equipment, people and roles, support tickets | Runs in Swedwise's own Azure (see ROPA-PROC-01) [to confirm: whether Nexta has access to the instance or its data] | [to confirm] | CFO |
| ROPA-PROC-05 | Fortnox | Fortnox | Accounting, salaries, invoices, supplier invoices | Sweden [to confirm] | [to confirm] | CFO |
| ROPA-PROC-06 | TimeLog | TimeLog — **being replaced by Nexta Hub** | Time reports, projects, invoicing basis | [to confirm: EU hosting] | [to confirm] | CFO |
| ROPA-PROC-07 | HubSpot | HubSpot | Leads, deals, contacts, communication history | US vendor [to confirm: EU data centre and safeguard] | [to confirm] | CFO |
| ROPA-PROC-08 | GitHub (Microsoft) | GitHub | Source code, commit authors, personal GitHub accounts as organisation members | US [to confirm: safeguard] | [to confirm] | CFO |
| ROPA-PROC-09 | Winningtemp | Winningtemp | Employee survey answers and comments | [to confirm: EU hosting] | [to confirm] | CFO |
| ROPA-PROC-10 | OpenAI | ChatGPT | Accounts, prompts and uploaded documents | US [to confirm: plan, data location, safeguard] | [to confirm] | CFO |
| ROPA-PROC-11 | Slack (Salesforce) | Slack | Company chat, also with customers and partners; files (admin consent gives Slack Files.ReadWrite.All on everyone's behalf) | US [to confirm: data location and safeguard] | [to confirm] | CCO (Salesforce is a vendor whose products Swedwise sells) [to confirm] |
| ROPA-PROC-12 | Fireflies, Fathom, Klang | Meeting AI | Meeting recordings and transcripts | Fireflies and Fathom: US [to confirm]; Klang [to confirm] — accounts are the employees' own, not company seats | [to confirm] | CFO |
| ROPA-PROC-13 | Credly | Credly — **disabled in Entra since 2023** | Badges and certifications (on the person's own Credly account) | US [to confirm] — likely not a processor for Swedwise | [to confirm] | CFO |
| ROPA-PROC-14 | Leadfeeder | Leadfeeder — **disabled in Entra**, while the systems catalogue says it reads the website's visitors [to confirm: still in use] | Website visits and the companies identified from them | [to confirm] | [to confirm] | CFO |
| ROPA-PROC-15 | Zendesk | Zendesk | Customer support tickets | US vendor [to confirm: data location and safeguard] | [to confirm] | CFO |
| ROPA-PROC-16 | Salesbox | Salesbox — **disabled in Entra** [to confirm: still in use] | Leads and contacts | [to confirm] | [to confirm] | CFO |
| ROPA-PROC-17 | LinkedIn | Company page, LinkedIn tools | Followers, page statistics; page administrators' personal accounts | US group [to confirm] — joint controller for page statistics | [to confirm] | CFO |
| ROPA-PROC-18 | Google | Google Ads | Ad campaigns, conversion and visitor data | US group [to confirm] — processor or controller depending on the product settings | [to confirm] | CFO |
| ROPA-PROC-19 | [to confirm: website host] | swedwise.se (WordPress [to confirm]) | Website, contact form, cookies | [to confirm] | [to confirm] | CFO |
| ROPA-PROC-20 | Entiros AB | SaaS hosting [to confirm: still offered]; Starlify belongs to Entiros, see ROPA-PROC-25 | Hosting of Swedwise SaaS (sub-processor in ROPA-P-02) | Sweden (SaaS service description) | [to confirm] | CCO |
| ROPA-PROC-21 | Ubiquiti (UniFi) | UniFi network and Wi-Fi | Wi-Fi access, devices on the office network | [to confirm: cloud or local controller] | [to confirm] | CFO |
| ROPA-PROC-22 | Miro, Mural, Lucid, diagrams.net | Whiteboards — **Miro and Mural disabled; Lucid not used since 2024–2025** | Boards and diagrams, also from customer workshops | US [to confirm] | [to confirm] | CFO |
| ROPA-PROC-23 | Wrike, Trello, Plandisc, Meister, iGlobe, Placker | Planning tools — **disabled or no longer used** (Plandisc last 2026-01) | Plans, tasks, names | [to confirm] | [to confirm] | CFO |
| ROPA-PROC-24 | Nodinite | Integration monitoring for customers (SRV.Nodinite disabled in Entra) | Integration messages and logs (sub-processor in ROPA-P-04) | [to confirm: who hosts the instances] | [to confirm] | CCO [to confirm: partner or ordinary supplier] |
| ROPA-PROC-25 | Entiros (Starlify) | Starlify (starlify-prod disabled in Entra) | Integration landscapes; user accounts | [to confirm] | [to confirm] | CCO |
| ROPA-PROC-26 | TeamViewer | TeamViewer — **disabled in Entra since 2024-11** | Remote access sessions, accounts | [to confirm] | [to confirm] | CFO |
| ROPA-PROC-27 | Atlassian | Jira, Confluence, Bitbucket (mostly customers' own instances) | Swedwise people's accounts; customer project content | US/AU group [to confirm] — in a customer's instance the customer is the controller | [to confirm] | CFO |

**Rows in section C: 27.**

Not listed as processors: Skillet, Swedwise xECM, Swedwise Matrix and CompanyIT are Swedwise's own applications and run
on Microsoft Azure (ROPA-PROC-01). Pension and insurance providers, banks, Skatteverket and Försäkringskassan receive data as
independent controllers (ROPA-C-02) [to confirm: which pension and insurance providers].

## D. Article 37 assessment — no Data Protection Officer

| Question | Answer |
|---|---|
| Is Swedwise a public authority or body? | No. Swedwise AB is a private company. |
| Do Swedwise's core activities consist of processing that requires regular and systematic monitoring of data subjects on a large scale? | No. The core activities are consulting, licence sales, support and services for business customers. Security logging (ROPA-C-08) and website analytics (ROPA-C-06) are ancillary, not core activities. |
| Do Swedwise's core activities consist of large-scale processing of special categories of data or of criminal convictions data? | No. Health data occurs only for Swedwise's own employees (ROPA-C-01, ROPA-C-02). Customers' special-category data may be seen in assignments (ROPA-P-01), on the customer's instruction and not as a core activity of Swedwise [to confirm per assignment]. |
| Does Swedish law require a DPO beyond Article 37(1)? | No such requirement for Swedwise is known [to confirm]. |
| **Conclusion** | **Swedwise is not required to designate a Data Protection Officer.** The Privacy Lead (CEO, SW-IMS-ROLE-006) is accountable for data protection and is not a DPO. |
| Decided by | The owner, 2026-10-29: «Vi måste inte ha ombud» (we do not have to have a DPO). |
| Re-assessment | Yearly by the Privacy Lead, and whenever a new service, customer assignment or system changes the processing (for example a service where Swedwise monitors individuals or processes special categories at scale as a core activity). If the answer changes, an external DPO is designated (SW-IMS-ROLE-006). The assessment is also recorded in the compliance obligation register (SW-IMS-PRO-013). |
| Next review | [to confirm: date] |

## E. Findings — need a decision

These were found while drafting the register. They are named here, not decided.

1. **Meeting AI records customers without a decided basis (ROPA-C-11).** Fireflies, Fathom and Klang record and
   transcribe meetings with customers, partners and colleagues. The accounts are employees' own, by self-service
   consent, not company seats; there is no known agreement, no decided lawful basis, no notice to participants, and US
   transfers. Customers' personal data said in meetings ends up there, which may also breach customers' contracts.
   Decision needed: allow (with company accounts, agreements, a consent and notice routine) or stop.
2. **ChatGPT may receive customer and colleague data (ROPA-C-12).** Anyone can sign in (assignment not required). It is
   not known which plan is used, where the data is stored, whether prompts are used for training, or whether the AI
   policy the systems catalogue refers to exists. Decision needed: rules for what may be entered, and the plan.
3. **Tools on their way out still hold personal data.** TimeLog (being replaced by Nexta Hub), Salesbox, Leadfeeder,
   Credly, TeamViewer, Miro, Mural, Lucid, Wrike, Trello, Plandisc, Meister, iGlobe. Nobody has decided whether their data
   is exported, kept or deleted, or whether the subscriptions and agreements are ended. Leadfeeder is disabled in Entra
   but is said to read the website's visitors; which is true is not known.
4. **Accounts outside Entra survive a leaver.** HubSpot, TimeLog, Fortnox, Atlassian, Slack, LinkedIn page administrators
   and the meeting AI tools use their own passwords or personal accounts. Closing the Entra account does not close them,
   so a leaver may keep access to customer contacts and other personal data until the system owner acts by hand.
5. **Slack has broad access to everyone's files.** Administrator consent gives Slack Files.ReadWrite.All on every user's
   behalf, and the chat is shared with customers and partners.
6. **A leaver's mailbox is handed to the manager.** Exchange converts the mailbox to a shared mailbox for the manager on
   the last day. Private mail may be exposed. Decision needed: how long the mailbox is kept and what the employee is told
   (see SW-ISMS-NOT-001).
7. **No data processing agreement is known to exist with any processor (section C).** Every row is `[to confirm]`,
   including Microsoft, HubSpot, Zendesk and the US vendors where the transfer safeguard is also unknown.
8. **The SaaS documents promise more than is known.** The SaaS service description says a data processing agreement is
   included with all contracts and that a sub-processor list is available. No such list or template was found, and it
   is not confirmed that the SaaS service is still offered (ROPA-P-02).
9. **Customers' data in Swedwise's hands is not mapped per assignment (ROPA-P-01).** It is not known which assignments
   handle special categories, whether consultants copy customer data into Swedwise's own environments (laptops, Swedwise
   xECM, Azure, ChatGPT, meeting AI), or whether every assignment has a data processing agreement. Personal access tokens
   to customers' Azure DevOps may outlive a leaver.
10. **No recruitment system is known (ROPA-C-03).** Applications presumably sit in mail and files, where retention is
    hard to enforce.
11. **Employee surveys may hold health data (ROPA-C-09).** Winningtemp asks about wellbeing; whether answers are
    anonymous and what managers see is not known.
12. **The contact address does not exist yet.** privacy@swedwise.se is proposed but not created; the notices point to it.

## F. Review

The Privacy Lead reviews this register at least yearly, before the management review, and whenever a system, service
or customer assignment changes the processing. Each owner job confirms its rows. The CompanyIT systems catalogue is the
source for the systems; a new system there should get a row here before people start using it.

## Document Control

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-10-29 | Privacy Lead (drafted in session) | First records of processing: 15 controller activities, 4 processor services, 27 processors, the Article 37 assessment and 12 findings |

---

**Approval**

| Role | Name | Signature | Date |
|---|---|---|---|
| Privacy Lead | | | |
| Management Team Representative | | | |
