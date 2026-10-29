---
document_id: SW-IMS-PRO-014
title: Invoicing and Finance Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CFO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-QMS-PRO-003
  - SW-QMS-PRO-004
  - SW-QMS-PRO-005
  - SW-IMS-PRO-015
  - SW-IMS-PRO-004
---

# Invoicing and Finance Procedure

**Document ID**: SW-IMS-PRO-014-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: CFO
**Approved by**: [TBD]

## 1. Purpose

This procedure describes how Swedwise invoices what it has delivered — correctly, completely and on time,
according to each contract — and how it keeps its finances: the monthly close, results against budget and
cash ahead. It is the procedure of the process *Invoicing and finance* (process owner: CFO).

## 2. Scope

This procedure applies to all customer invoicing of Swedwise AB (licences, subscriptions, support and
maintenance agreements, consulting time and fixed instalments, expenses passed on, invoicing between the
group's companies) and to the monthly financial follow-up.

**Out of scope**: what may be sold and at what price (SW-QMS-PRO-004); purchasing and paying suppliers
(SW-IMS-PRO-015); payroll `[to confirm: whether payroll gets its own procedure]`; statutory annual accounts and
tax returns, which follow the law and the auditor's process.

## 3. Where the work runs

| System / hub part | Used for |
|-------------------|----------|
| **Fortnox** | Swedwise's accounting system: the books, customer invoices, recurring billing, supplier invoices, payroll |
| Hub contract register (`contracts.register`) | Every customer contract with lines, kind, period and attached files, whatever system invoices it |
| Billing models (`billing.models`) | Per-company templates of billing rules — charges on triggers, time over an allowance, pots of hours, caps — chosen per deal |
| What to invoice (`billing.engine`, `billing.time-pricing`, `billing.invoice-period`) | The amounts per period from the contract's rules, approved time and finished deliverables; each hour priced at the person's rate on the day worked. Swedwise invoices per calendar month, time and fixed instalments alike |
| Recurring billing (`sales.contract-from-deal`, `billing.invoice-mode`, `billing.recurring-invoices`) | An active licence contract becomes its recurring billing in Fortnox; the company setting says whether Fortnox makes the invoices itself or the hub creates them on a person's request (MANUAL) |
| Invoice drafts in Fortnox (`billing.drafts`) | A consulting contract's invoice lines as a draft in Fortnox to check and send; **switched off until the owner switches it on** |
| The customer's terms (`billing.invoice-terms`) | The customer's reference person and purchase-order number carried to the invoice |
| Support time to billing (`support.billing`) | Ticket time against the support agreement's included hours |
| Time and expenses (`time.approval`, `time.expenses`) | Approved time is what billing invoices; approved billable expenses pass on to the invoice |
| Invoicing within the group (`billing.group`) | Work for another company of the group as a sale in one and a purchase in the other |
| Fortnox and HubSpot in step (`sync`) | Sync from Fortnox on each connection's interval, nightly at 02:00 Swedish time by default; invoices tied to their contracts; a failed run is reported to the admins. Every write to Fortnox passes the hub's write guard |
| Finance (`finance.overview`, `finance.results`, `finance.budget`, `finance.cash-flow`, `finance.period-close`, `finance.budget-outlook`) | Key figures, overdue receivables and days sales outstanding, results per month and account group, budget follow-up, cash flow, closed months, outlook against budget |
| Price indexation (`contracts.indexation`) | Index adjustments proposed from each contract's index clause and approved by the finance owner |

**TimeLog**: until Swedwise switches its time reporting to the hub (`time.cutover`, planned), TimeLog is the
master for time, and consulting time is invoiced from TimeLog `[to confirm: the invoicing road for consulting
time until the switch]`. The hub reads TimeLog every night, read-only.

**Fortnox is the real books.** Nothing is ever created in Fortnox for testing or trying something out; every
invoice, customer or voucher made there is a real accounting record.

## 4. Roles and Responsibilities

| Role (job) | Responsibilities |
|------------|------------------|
| **CFO** | Owns this procedure; owns invoicing, the books, the budget and the monthly close; approves index adjustments and the billing models; decides the recurring billings' invoice handling |
| **Finance (Finance unit)** | Prepares and sends invoices; follows payments and reminders; reconciles the sync; closes the month `[to confirm: split of tasks between the two people in Finance]` |
| **Project manager / group manager** | Approves the team's time on time; marks deliverables done; confirms the invoice basis of their projects |
| **Consultant** | Reports time and expenses by the deadline `[to confirm: monthly deadline]` |
| **Account manager** | Makes sure each contract carries the customer's reference and purchase order; answers customer questions on invoices with Finance |
| **CEO / management** | Read the monthly results against budget and outlook |

## 5. Procedure

### Step 1: Set up the contract for billing

1. When a contract becomes active (SW-QMS-PRO-004 step 7), Finance checks that it has: billing model, period,
   prices from a date, the customer's reference person and purchase-order number (`billing.invoice-terms`),
   index terms where agreed, and — for a support agreement — its included hours.
2. A licence contract's recurring billing is created in Fortnox from the hub (`sales.contract-from-deal`);
   each recurring billing's Fortnox project carries the line naming its billing and its terms
   (`sync.project-terms`).

### Step 2: Get the time and deliverables in

1. Consultants report time and expenses; managers approve them by the deadline (`time.approval`,
   `time.expenses`). Approved time is locked.
2. Project managers mark delivered deliverables done (`delivery.deliverables.mark-done`), which is what a
   deliverable-based contract invoices.

### Step 3: Compute what to invoice

For each contract and calendar month the hub computes the invoice basis from the contract's billing model,
the approved time priced per person and day, finished deliverables, fixed instalments, support hours beyond
the agreement's included hours, and approved billable expenses (`billing.engine`). An invoiced period is never
invoiced again.

### Step 4: Invoice

1. **Recurring billing** (licences, subscriptions, fixed instalments): Fortnox makes the invoices itself, or —
   for those with MANUAL handling — Finance creates the due invoices from the hub on invoicing day
   (`billing.recurring-invoices`); the hub records at once which invoices belong to which contract.
2. **Consulting time and other variable amounts**: invoiced from the invoice basis
   `[to confirm: from TimeLog until the switch; through hub drafts once switched on]`, dated as the company's
   setting says (`billing.invoice-period`).
3. **Within the group**: invoiced between the companies (`billing.group`).
4. Finance checks each invoice against its basis before sending.

### Step 5: Tie invoices to contracts and follow payment

1. The nightly sync fetches new invoices from Fortnox and ties each to its contract; an invoice not tied
   automatically is linked by hand (`sync.invoice-links`). A failed sync run is reported to the admins and
   followed up the same day.
2. Finance follows overdue receivables in the finance overview and sends reminders `[to confirm: reminder
   steps and who is told]`; the account manager is told about long-overdue customers.

### Step 6: Close the month

1. When the month's books are done in Fortnox, Finance closes the month in the hub (`finance.period-close`);
   its figures no longer change.
2. The CFO reviews results against budget, cash flow ahead and key figures (`finance.results`,
   `finance.budget`, `finance.cash-flow`, `finance.overview`) and the year's outlook against budget per
   business area (`finance.budget-outlook`), and reports to management.

### Step 7: Adjust prices yearly

When contracts are due for index adjustment, the hub proposes the new prices from each contract's index
clause; the CFO reviews and approves them and they apply from the adjustment date (`contracts.indexation`).
The account manager informs the customer as the contract says (SW-QMS-PRO-005).

## 6. Records

| Record | Where | Retention | Owner |
|--------|-------|-----------|-------|
| Customer invoices, vouchers, books | Fortnox | 7 years, as the Swedish Accounting Act (bokföringslagen) requires | CFO |
| Contract with billing model and terms | Hub contract register; contract's xECM workspace | Contract term + `[to confirm]` | CFO |
| Approved time and expenses | TimeLog until the switch; hub | As accounting records | CFO |
| Invoice-to-contract links | Hub | As accounting records | Finance |
| Sync runs and failures | Hub | `[to confirm]` | Finance |
| Closed months, budget and outlook | Hub | `[to confirm]` | CFO |
| Approved index adjustments | Hub (contract) | Contract term + `[to confirm]` | CFO |

## 7. Key Performance Indicators

| KPI | Definition | Source of the number | Target |
|-----|------------|----------------------|--------|
| Days sales outstanding | Average days from invoice to payment | Hub finance overview (`finance.overview`) | `[to confirm]` |
| Overdue receivables | Amount overdue more than 30 days | Hub finance overview | `[to confirm]` |
| Invoiced on time | Share of contracts invoiced for the month by the company's invoice date | Hub contract register and invoice links | `[to confirm]` |
| Unbilled approved time | Approved billable hours older than the last invoiced month | Hub time reports ("finished work not yet invoiced") | 0 |
| Invoices tied to contracts | Share of customer invoices tied to a contract | Hub (`sync.invoice-links`) | 100 % |
| Month closed | Working day of the following month on which the month is closed | Hub (`finance.period-close`) | `[to confirm]` |
| Result against budget | Result per month and year to date against budget | Hub (`finance.results`, `finance.budget`) | Budget |

## 8. Related Documents

- SW-QMS-PRO-003 Customer Support Procedure
- SW-QMS-PRO-004 Sales Procedure
- SW-QMS-PRO-005 Account Management Procedure
- SW-IMS-PRO-015 Purchasing Procedure
- SW-IMS-PRO-004 Management Review Procedure
- ISO 9001:2015 clause 8.2.3 (Review of the requirements for products and services), 7.1 (Resources)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-10-29 | CFO (draft) | First version, written from how billing and finance run in the hub and Fortnox |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| CFO | | | |
| IMS Owner (COO) | | | |
