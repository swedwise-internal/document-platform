---
document_id: SW-QMS-PRO-005
title: Account Management Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: Customer Development Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
related_documents:
  - SW-QMS-POL-002
  - SW-QMS-PRO-001
  - SW-QMS-PRO-002
  - SW-QMS-PRO-003
  - SW-QMS-PRO-004
  - SW-IMS-PRO-014
---

# Account Management Procedure

**Document ID**: SW-QMS-PRO-005-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: Customer Development Lead (held by the CCO)
**Approved by**: [TBD]

## 1. Purpose

This procedure describes how Swedwise looks after and grows its relationship with existing customers: every
customer has an owner, its contracts are known and renewed in time, its satisfaction is followed, and new
needs become new deals. It is the procedure of the process *Account management* (process owner: CCO).

## 2. Scope

This procedure applies to every customer with an active contract or an ongoing delivery, and to the account
managers who own them.

**Out of scope**: the sale itself (SW-QMS-PRO-004), delivery (SW-QMS-PRO-001), support cases
(SW-QMS-PRO-003), complaints (SW-QMS-PRO-002), invoicing and price indexation decisions (SW-IMS-PRO-014).

## 3. Where the work runs

| System / hub part | Used for |
|-------------------|----------|
| HubSpot | Swedwise's CRM: companies, contacts and activities `[to confirm: which customer activities are logged in HubSpot]` |
| Hub customer and deal owners (`sales.owners`) | Each customer's **customer owner** — the account manager — in the hub, and in the xECM customer workspace's team; pushed to HubSpot when the company's switch is on |
| Hub contract register (`contracts.register`, `contracts.forecast`) | All of a customer's contracts with lines, kind, invoices and forecast, whatever system invoices them (use case: a customer's contracts in one view) |
| Renewals (`contracts.renewals`) | The account manager is told before a contract's notice deadline, and again if nothing is done |
| Change orders (`contracts.change`) | A change after signing as a new quote version on the same deal |
| Index from the contract (`contracts.indexation`) | Index adjustments proposed from the contract's index clause |
| Wrap-up and next deal (`delivery.wrap-up`) | A finished project shows planned, used and invoiced, and makes a follow-up deal |
| Profitability (`profitability.report`) | Revenue and margin per customer |
| Customer register (`crm.customers`, planned in the hub) | One page with a customer's projects, tickets, contracts, invoices and contacts; until it is in use, the customer page and HubSpot together |

## 4. Roles and Responsibilities

| Role (job) | Responsibilities |
|------------|------------------|
| **Customer Development Lead (CCO)** | Owns this procedure; gives every customer a customer owner; reviews the customer portfolio quarterly |
| **Account manager** | Customer owner: knows the customer's contracts, people and plans; holds the regular customer meetings; acts on renewals; brings new opportunities into sales |
| **CSO / delivery manager** | Reports delivery status and risks per customer; joins service reviews |
| **CFO** | Approves index adjustments and price changes; follows overdue receivables per customer |
| **Customer** | Takes part in reviews and gives feedback |

## 5. Procedure

### Step 1: Give every customer an owner

1. Each customer has exactly one customer owner, an account manager who is a user of the hub
   (`sales.owners`). The CCO assigns the owner when a customer is created or an owner leaves.
2. The customer owner reaches the xECM customer workspace's team, and — when the company's switch is on —
   becomes the owner of the customer's company in HubSpot.
3. Monthly, the CCO checks that no active customer is without an owner.

### Step 2: Know the customer's agreements

1. The account manager keeps the customer's picture current from the hub's contract register: every contract,
   its kind (licence, consulting, support or mixed), period, invoices and forecast.
2. Missing information on an active contract (product, index terms, support terms, DPA) is completed with the
   CFO `[the hub's contract completion worklist, contracts.completion, is planned]`.

### Step 3: Meet the customer regularly

1. The account manager holds customer meetings at an agreed frequency
   `[to confirm: frequency per customer tier]`; for customers with a service or support agreement this
   includes a service review (SW-QMS-FRM-004 Service Review Meeting Template, with SW-QMS-PRO-001).
2. Before the meeting the account manager reads the customer's open tickets, project status and invoices in
   the hub.
3. Agreed actions, feedback and new needs are recorded `[to confirm: in HubSpot or in the customer's xECM
   workspace]`. Complaints are passed on under SW-QMS-PRO-002.

### Step 4: Act on renewals and price adjustments

1. When the hub tells the account manager that a contract's notice deadline is within the warning period
   (`contracts.renewals`), the account manager decides with the customer whether to renew, change or end it,
   before the deadline.
2. Index adjustments are proposed from the contract's index clause (`contracts.indexation`); the CFO reviews
   and approves them (SW-IMS-PRO-014), and the account manager informs the customer as the contract says.

### Step 5: Change a signed contract

1. A change the customer asks for — more licences, more hours, a new product — is a change order: a new
   quote version on the same deal (`contracts.change`), built and accepted as in SW-QMS-PRO-004 steps 3–6.
2. When it is accepted, the contract and its recurring billing in Fortnox are updated to match.

### Step 6: Turn new needs into deals

1. A new need that is not a change to an existing contract becomes a new deal, handed to sales
   (SW-QMS-PRO-004).
2. When a project ends, its wrap-up shows what was planned, used and invoiced, and a follow-up deal is created
   where the company's setting says (`delivery.wrap-up.follow-up`).

### Step 7: Review the customer portfolio

Quarterly, the CCO and the account managers review per customer: revenue and margin (`profitability.report`),
contracts up for renewal, open tickets and complaints, satisfaction results and opportunities. Customers at
risk get an action owned by their account manager.

## 6. Records

| Record | Where | Owner |
|--------|-------|-------|
| Customer owner per customer | Hub (`sales.owners`); xECM workspace team; HubSpot owner | CCO |
| Contracts, change orders and renewals | Hub contract register; contract's xECM workspace | Account manager |
| Customer meeting notes and agreed actions | `[to confirm]` | Account manager |
| Service review minutes | Customer's xECM workspace `[to confirm]` | Account manager |
| Portfolio review | `[to confirm]` | CCO |

## 7. Key Performance Indicators

| KPI | Definition | Source of the number | Target |
|-----|------------|----------------------|--------|
| Customers with an owner | Share of active customers with a customer owner | Hub (`sales.owners`) | 100 % |
| Renewals acted on in time | Share of contracts reaching their notice deadline with a recorded decision before it | Hub (`contracts.renewals`, contract register) | 100 % |
| Revenue from existing customers | Revenue per customer and year, and its change | Hub profitability (`profitability.report`) | `[to confirm]` |
| Follow-up deals | Number of deals created from wrap-ups and account work per quarter | Hub deals | `[to confirm]` |
| Customer satisfaction | Result per customer | SW-QMS-PRO-002 | `[to confirm]` |

## 8. Related Documents

- SW-QMS-POL-002 Customer Communication Policy
- SW-QMS-PRO-001 Service Delivery Procedure
- SW-QMS-PRO-002 Customer Feedback and Complaint Handling Procedure
- SW-QMS-PRO-003 Customer Support Procedure
- SW-QMS-PRO-004 Sales Procedure
- SW-IMS-PRO-014 Invoicing and Finance Procedure
- SW-QMS-FRM-004 Service Review Meeting Template
- ISO 9001:2015 clause 8.2.1 (Customer communication), 9.1.2 (Customer satisfaction)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-10-29 | Customer Development Lead (draft) | First version, written from how customers and contracts are kept in the hub |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Customer Development Lead (CCO) | | | |
| IMS Owner (COO) | | | |
