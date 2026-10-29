---
document_id: SW-QMS-PRO-003
title: Customer Support Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: Customer Success Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-QMS-POL-002
  - SW-QMS-PRO-001
  - SW-QMS-PRO-002
  - SW-ISMS-PRO-001
  - SW-ISMS-PRO-011
  - SW-IMS-PRO-005
  - SW-IMS-PRO-008
  - SW-IMS-PRO-014
  - SW-ISMS-POL-004
---

# Customer Support Procedure

**Document ID**: SW-QMS-PRO-003-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: Customer Success Lead (held by the CSO)
**Approved by**: [TBD]

## 1. Purpose

This procedure describes how Swedwise gives its customers technical support: how a case comes in, which
support agreement it falls under, who handles it, how fast, and how it is closed and followed up. It is the
procedure of the process *Support and incident management* (process owner: CSO).

Customer support is not the same thing as information security incident management. A customer case that
turns out to be, or may be, an information security incident is reported at once to the CISO and handled
under SW-ISMS-PRO-001 Incident Management Procedure; the support case stays open as the customer's
channel (section 6, step 6).

## 2. Scope

This procedure applies to:

- Every support case from a customer with a support agreement, a maintenance agreement or an ongoing delivery
- Cases about the solutions Swedwise delivers and operates, and about Swedwise's SaaS services
- The consultants who take first and second line, the case owners, and the CSO
- The work Matrix, Swedwise's operations platform, does on the technical side of a case

**Out of scope**:

- Information security incidents (SW-ISMS-PRO-001, owner CISO)
- Root-cause work on recurring problems (SW-ISMS-PRO-011 Problem Management Procedure)
- Complaints about Swedwise as a supplier (SW-QMS-PRO-002 Customer Feedback and Complaint Handling Procedure)
- Changes to a customer's production environment (SW-IMS-PRO-008 Change Management Procedure)
- Support for Swedwise's own internal IT (IT infrastructure process, owner COO)

## 3. Where the work runs

Support runs in **Nexta Hub**, Swedwise's own instance of its business hub. The hub's helpdesk (hub function
*Support*) is the system of record; there is no separate support form. The relevant hub parts are:

| Hub part | What it holds |
|----------|---------------|
| Tickets (`support.tickets`) | The case, its messages, status, fields and assignment |
| Channels (`support.channels`) | E-mail, the customer portal, the website widget and live chat; a chat can become a ticket |
| SLA and routing (`support.sla`) | Response and resolution times and routing rules; a ticket under a support agreement takes its priorities and times from that agreement |
| Ticket on project and agreement (`support.case-links`) | The link from a ticket to the customer's project and to the contract that is their support agreement |
| Product on support cases (`support.products`) | The product the case concerns, proposed from the agreement |
| First and second line on rotation (`support.rotation`) | The week's first and second line, their backups and each ticket's case owner |
| Matrix integration (`support.lookup`, `support.references`, `support.progress-notes`, `support.kb-articles`, `support.change-events`) | How Matrix reads a ticket, names the solution and environment, writes progress the customer sees, and publishes knowledge-base answers |
| Support time to billing (`support.billing`) | Time on a ticket counted against the agreement's included hours |

The support agreement itself, with its SLA appendix, is a contract in the hub's contract register and is
filed in the contract's xECM workspace. Tickets have no workspace of their own.

## 4. Definitions

| Term | Definition |
|------|------------|
| **Support case / ticket** | A customer's request for help, recorded as a ticket in the hub's helpdesk |
| **Support agreement** | The customer contract that states what support the customer has: hours, priorities, response and resolution times, products |
| **Case owner** | The person who owns a ticket from start to closure; stays the owner when the case is escalated |
| **First line** | The week's primary support person, chosen among the members of the directory group `sw-team-support` |
| **Second line** | The week's primary escalation person, chosen among the members of `sw-team-standby` |
| **Backup** | For each line, the person who was primary the week before |
| **SLA breach** | A ticket that has passed its response or resolution time; the hub flags it |

## 5. Roles and Responsibilities

| Role (job) | Responsibilities |
|------------|------------------|
| **Customer Success Lead (CSO)** | Owns this procedure and the process; sets the support rotation rules; follows SLA performance and support time per product; decides escalations that need more people or a change of priority between customers |
| **Group manager (consultants)** | Sets the week's rotation for their people; makes sure the people in `sw-team-support` and `sw-team-standby` have the competence for the products under support |
| **First line (consultant)** | Takes new tickets, is case owner, answers within the SLA, resolves what can be resolved, escalates to second line |
| **Second line (consultant)** | Takes escalated tickets, works the technical problem with Matrix, hands back to the case owner |
| **Account manager** | Is told about cases that affect the customer relationship; owns commercial questions that come in as support (extra hours, new products) |
| **CISO (COO, proposed)** | Takes over any case that is or may be an information security incident (SW-ISMS-PRO-001) |
| **Customer** | Reports cases through the agreed channels, gives the information asked for, confirms the resolution |

## 6. Procedure

### Step 1: Take the case in

1. A case comes in by e-mail, the customer portal, the website widget or live chat and becomes a ticket in
   the hub. A case reported by phone is entered as a ticket by the person who took the call.
2. The routing rules assign the ticket and set its priority.
3. The ticket gets a **case owner**: by default the week's first line (`support.rotation`).

### Step 2: Tie the ticket to the customer's agreement

1. The case owner checks that the ticket is linked to the right customer, to the contract that is the
   customer's support agreement and, where relevant, to the customer's project (`support.case-links`).
   When the customer has an active support agreement, the hub proposes it first.
2. The ticket takes its priority levels and its response and resolution times from that agreement. A ticket
   without an agreement gets the company's default SLA policy `[to confirm: the default policy's times]`.
3. The case owner sets the product the case concerns, proposed from the agreement (`support.products`).
4. A customer without a valid agreement is told so politely; the account manager is told, and the case is
   handled as the account manager and the CSO decide.

### Step 3: Respond and diagnose

1. The case owner gives the customer a first response within the agreement's response time.
2. The case owner searches the hub's knowledge base, including answers Matrix has published, and earlier
   tickets on the same solution.
3. The case owner records what has been done on the ticket, so anyone can take over.

### Step 4: Escalate to second line when needed

1. If first line cannot resolve the case, or the SLA is at risk, the case owner escalates it. The ticket then
   names the week's second line; the case owner stays the owner and keeps the customer informed.
2. If neither primary is available, the backup (last week's primary) takes it.
3. A case that needs more than the rotation can give — several people, a specialist from a delivery team, a
   supplier's support — is raised to the group manager and, if it competes with other work, the CSO.
   Vendor support cases (for example OpenText) are opened through the partner support channel recorded for
   that vendor (SW-QMS-PRO-007).

### Step 5: Matrix works the technical side

For cases on solutions Matrix operates:

1. Matrix reads the ticket by its exact number through its own API token, which has only the hub's support
   permissions (`support.lookup`), and is told when a ticket changes (`support.change-events`).
2. The ticket names the customer's solution and environment the case concerns, as Matrix's ids
   (`support.references`).
3. Matrix writes technical progress, hand-overs and the resolution on the ticket as public notes the customer
   sees (`support.progress-notes`).
4. When Matrix has solved a problem, it publishes the answer as a knowledge-base article that first line
   finds in the hub (`support.kb-articles`).
5. A change to a customer's production environment needed to resolve the case goes through
   SW-IMS-PRO-008 Change Management Procedure.

### Step 6: Escalate outside support when the case is something else

| The case is, or may be… | Do this | Procedure |
|-------------------------|---------|-----------|
| An information security incident (unauthorised access, data leak, malware, loss of availability caused by an attack) | Report to the CISO at once; do not investigate on your own; keep the ticket as the customer's channel | SW-ISMS-PRO-001 |
| A personal data breach | As above; the CISO decides on notification | SW-ISMS-PRO-001, SW-ISMS-POL-004 |
| A request from a data subject (see or erase their data) | Record on the ticket and pass to the person responsible for data protection `[to confirm: who]` | SW-ISMS-POL-004 |
| A recurring problem (same cause in several tickets) | Raise a problem record | SW-ISMS-PRO-011 |
| A complaint about Swedwise's service | Record as a complaint | SW-QMS-PRO-002 |
| A nonconformity in Swedwise's own work | Raise a nonconformity | SW-IMS-PRO-005 |
| A request for more hours, products or changes in scope | Hand to the account manager | SW-QMS-PRO-005 |

### Step 7: Resolve and close

1. The case owner confirms the resolution with the customer, or closes the ticket after the customer has not
   answered within `[to confirm: the waiting time before closing]`.
2. Time spent on the ticket is reported on the ticket. Time on a ticket under a support agreement counts
   against the agreement's included hours for the period; hours beyond are billable as the agreement says
   and appear on the contract's invoice basis with the ticket they came from (`support.billing`, see
   SW-IMS-PRO-014).
3. Where the hub's satisfaction survey is in use (`support.satisfaction`, planned in the hub), the customer is
   asked to rate the case; until then customer satisfaction is followed under SW-QMS-PRO-002.

### Step 8: Set the week's rotation

Every week, before Monday, the group manager sets the week's primary first line and primary second line in
the hub (`support.rotation`). Each line's backup is the person who was primary the week before. Only members
of `sw-team-support` (first line) and `sw-team-standby` (second line) can be chosen; someone who leaves the
group is not chosen from the next week on. `[to confirm: out-of-hours cover and which agreements include it]`

## 7. Records

All records are kept in the hub; no paper or separate form is used.

| Record | Where | Retention | Owner |
|--------|-------|-----------|-------|
| Ticket with messages, status, case owner, line, product, agreement and time | Hub helpdesk | `[to confirm]` | Case owner |
| Public progress notes and resolution | Ticket (written by people or Matrix) | As the ticket | Case owner |
| Knowledge-base articles | Hub knowledge base | While valid | CSO |
| Weekly rotation | Hub support settings | `[to confirm]` | Group manager |
| Support agreement and SLA appendix | Hub contract register; contract's xECM workspace | Contract term + `[to confirm]` | Account manager |
| Support time against included hours | Hub time and billing | As accounting records (SW-IMS-PRO-014) | CFO |

## 8. Key Performance Indicators

| KPI | Definition | Source of the number | Target |
|-----|------------|----------------------|--------|
| SLA response met | Share of tickets answered within the agreement's response time, per month | Hub SLA flags (`support.sla`) | `[to confirm]` |
| SLA resolution met | Share of tickets resolved within the agreement's resolution time, per month | Hub SLA flags (`support.sla`) | `[to confirm]` |
| Ticket volume per product and customer | Number of new tickets per month | Hub tickets with product (`support.products`) | Trend only |
| Support hours against included hours | Hours reported on tickets per agreement and period against included hours | Hub support billing (`support.billing`) | Trend only |
| Escalation rate | Share of tickets escalated to second line | Hub tickets (line on the ticket) | Trend only |
| Customer satisfaction with support | Average rating after closed cases | Hub survey (`support.satisfaction`, planned) or SW-QMS-PRO-002 | `[to confirm]` |

The CSO reviews the KPIs monthly and reports them to the management review (SW-IMS-PRO-004).

## 9. Related Documents

- SW-QMS-POL-002 Customer Communication Policy
- SW-QMS-PRO-001 Service Delivery Procedure
- SW-QMS-PRO-002 Customer Feedback and Complaint Handling Procedure
- SW-QMS-PRO-005 Account Management Procedure
- SW-QMS-PRO-007 Partner and Vendor Management Procedure
- SW-ISMS-PRO-001 Incident Management Procedure
- SW-ISMS-PRO-011 Problem Management Procedure
- SW-IMS-PRO-005 Nonconformity and Corrective Action Procedure
- SW-IMS-PRO-008 Change Management Procedure
- SW-IMS-PRO-014 Invoicing and Finance Procedure
- SW-ISMS-POL-004 Data Protection Policy
- ISO 9001:2015 clause 8.2.1 (Customer communication), 8.5.5 (Post-delivery activities)
- ISO/IEC 27001:2022 Annex A 5.24–5.26 (incident management controls), referenced only for the escalation

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-10-29 | Customer Success Lead (draft) | First version, written from how support runs in the hub |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Customer Success Lead (CSO) | | | |
| IMS Owner (COO) | | | |
