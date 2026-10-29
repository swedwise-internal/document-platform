---
document_id: SW-QMS-PRO-004
title: Sales Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: Customer Acquisition Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-QMS-POL-002
  - SW-QMS-PRO-001
  - SW-QMS-PRO-005
  - SW-QMS-PRO-006
  - SW-QMS-PRO-007
  - SW-IMS-PRO-014
  - SW-ISMS-POL-004
---

# Sales Procedure

**Document ID**: SW-QMS-PRO-004-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: Customer Acquisition Lead (held by the CCO)
**Approved by**: [TBD]

## 1. Purpose

This procedure describes how Swedwise sells: from an opportunity to a signed contract, so that what is
promised to the customer is understood, priced correctly, agreed with delivery before it is offered, and
handed over complete to delivery and billing. It is the procedure of the process *Sales and business
development* (process owner: CCO).

## 2. Scope

This procedure applies to every sale Swedwise AB makes: consulting, licences of the products we sell, support
and maintenance agreements, and SaaS services, to new and existing customers. Opportunities with existing
customers are found under SW-QMS-PRO-005 Account Management Procedure and sold under this one.

**Out of scope**: delivery after signature (SW-QMS-PRO-001), billing (SW-IMS-PRO-014), the partner
relationships that give us products and prices (SW-QMS-PRO-007), marketing `[to confirm: whether marketing
gets its own procedure]`.

## 3. Where the work runs

A sale is one **deal**, one **quote** and one **contract**, and all three are records in **Nexta Hub** (hub
function *Sales*). Deals may also be started in **HubSpot**, Swedwise's CRM; a company setting says whether
new deals are made in the hub or in HubSpot (`sales.deal-target`), and HubSpot companies and deals are read
into the hub every night (`sync.hubspot`). A seller working in HubSpot opens the deal's quote in the hub from a
link on the HubSpot deal (`sales.hubspot-entry`).

| Hub part | Used for |
|----------|----------|
| Deals (`sales.deals`) | The opportunity in its pipeline: customer, stage, amount, probability; won or lost with the date |
| Customer and deal owners (`sales.owners`) | The customer owner, the deal owner and the presale person |
| Quote (`sales.quote`, `sales.quote-template`) | Licence lines or consulting lines, terms and attachments; sending makes a locked version with a validity date |
| Prices (`sales.catalog`, `sales.licences`, `sales.rates`, `sales.dated-prices`) | Products, licence prices and costs, consulting rates by role, all from a date |
| Sales and delivery agree (`sales.delivery-agreement`) | The seller and the consultant manager agree what is promised before a consulting quote goes out |
| Statement of work (`sales.sow`) | Generated from the quote's activities, filed in the deal's xECM workspace |
| Supplier quotes (`purchasing.supplier-quotes`) | A vendor's quote or a subcontractor's statement of work linked to the deal |
| Terms (`terms.documents`, `terms.agreements`, `terms.attachments`) | Standard terms, DPA, licence schedules and framework agreements attached to the quote with a signature policy |
| Acceptance (`sales.acceptance`) | The customer's yes, recorded with evidence, by click or by e-signature |
| Contract from a won deal (`sales.contract-from-deal`) | The contract made from the accepted quote version |
| Pipeline and delivery (`sales.pipeline-impact`) | The pipeline against delivery's free capacity |

## 4. Roles and Responsibilities

| Role (job) | Responsibilities |
|------------|------------------|
| **Customer Acquisition Lead (CCO)** | Owns this procedure; owns the pipelines, price lists and sales targets; approves quotes outside standard terms or prices `[to confirm: the approval limits]` |
| **Account manager** | Deal owner: qualifies, builds and sends the quote, gets it accepted, hands over |
| **Business developer** | Finds new business and new offerings; deal owner where assigned `[to confirm]` |
| **Presale (a consultant's assignment)** | Solution, estimates and the quote's activities; named as presale on the deal |
| **Group manager (consultant manager)** | Agrees with the seller what is promised (activities, estimates, staffing, dates) before a consulting quote is sent (SW-QMS-PRO-006) |
| **CSO** | Decides when delivery cannot staff a deal by its promised start |
| **CFO** | Sets the billing and payment terms the quote may offer; receives active licence contracts as recurring billing |
| **CEO** | Signs for the company where the signature policy or the value requires it `[to confirm: signing authority]` |

## 5. Procedure

### Step 1: Register the opportunity

1. The deal owner creates the deal in the hub or in HubSpot, as the company setting says, with customer,
   pipeline stage, amount, probability and expected start.
2. The deal owner sets the customer owner (if the customer has none), the deal owner and, when presale works on
   it, the presale person (`sales.owners`). These names also reach the customer's and the deal's xECM
   workspaces.
3. A new customer is checked against the existing customers to avoid duplicates.

### Step 2: Qualify and understand the requirements

1. The deal owner and presale find out what the customer needs, the requirements that apply (contractual,
   legal, security, data protection, the customer's procurement terms) and whether Swedwise can deliver it.
2. Requirements and the customer's documents (tender documents, requirement specifications) are filed in the
   deal's xECM workspace.
3. The deal owner decides with the CCO whether to bid `[to confirm: bid/no-bid criteria for public tenders]`.
4. When the deal includes personal data processing for the customer, a DPA is planned as an attachment
   (step 4).

### Step 3: Build the quote

1. The quote starts from the template that matches what is sold, with its activities, estimates and
   configuration packages (`sales.quote-template`), and is adjusted from there. A quote has licence lines or
   consulting lines, never both.
2. Prices come from the hub: products from the catalog, licence prices and costs from the licence templates,
   consulting rates by role from the project, the customer or the role's standard, each valid from a date.
3. What we must buy to deliver — a vendor's licence quote, a subcontractor's statement of work — is registered
   as a supplier quote on the deal (`purchasing.supplier-quotes`); products and partner terms come from
   SW-QMS-PRO-007.
4. Check the quote's lines (`sales.quote.check-lines`).

### Step 4: Agree with delivery and attach the terms

1. Before a quote with consulting goes to the customer, the deal owner and the consultant manager agree on
   what is promised — activities, estimates, staffing and dates — and the agreement is recorded on the deal
   (`sales.delivery-agreement`). The pipeline view shows whether delivery has the free capacity to start on
   time (`sales.pipeline-impact`). A change after that needs their agreement again.
2. The terms are attached as versioned documents with their signature policy — in force by reference,
   covered by the acceptance, or signed separately (`terms.attachments`): standard terms, licence schedule,
   DPA where personal data is processed, the framework agreement if one is in force.
3. The statement of work is generated from the quote's activities in the customer's document language and
   filed in the deal's xECM workspace (`sales.sow`).

### Step 5: Send the quote

1. Sending makes a locked quote version with a validity date and its document in the company's layout. The
   customer answers that version; a revision is a new version.
2. The deal is moved to the matching stage.

### Step 6: Win or lose

1. **Won**: the customer's acceptance is recorded on the quote version, by click, by e-signature, or as a
   recorded yes with its evidence (`sales.acceptance`). The deal is moved to won with the date.
2. **Lost**: the deal is moved to lost with the date; the reason is noted on the deal `[to confirm: whether a
   lost reason is required]`.

### Step 7: Create the contract and hand over

1. The accepted quote version becomes one contract in the hub (`sales.contract-from-deal`). It is pending
   until the attachments that must be signed separately (for example the DPA) are signed, then active.
2. A **consulting** contract activates the deal's project; delivery takes over at its first gate, handover
   from sales (SW-QMS-PRO-001; bookings become firm, SW-QMS-PRO-006).
3. A **licence** contract becomes its recurring billing in Fortnox (SW-IMS-PRO-014).
4. Purchase orders are made from the supplier quotes the sale needs and sent to the suppliers
   (`purchasing.orders`).
5. The agreement and its appendices are filed in the contract's xECM workspace; the contract keeps only the
   links (`contracts.documents-in-xecm`).

## 6. Records

| Record | Where | Owner |
|--------|-------|-------|
| Deal with stage history, owners, won/lost date | Hub (deals); HubSpot for deals made there | Deal owner |
| Customer requirements and tender documents | Deal's xECM workspace | Deal owner |
| Delivery agreement | Hub (deal) | Group manager |
| Quote versions, sent and accepted | Hub (quote) and deal's xECM workspace | Deal owner |
| Statement of work | Deal's xECM workspace | Presale |
| Acceptance with evidence | Hub (quote version) | Deal owner |
| Contract and signed attachments | Hub contract register; contract's xECM workspace | Account manager |
| Supplier quotes and purchase orders | Hub (purchasing) | Deal owner |

Retention: contracts and quotes for the contract term plus `[to confirm]`; accounting-related records as
SW-IMS-PRO-014 says.

## 7. Key Performance Indicators

| KPI | Definition | Source of the number | Target |
|-----|------------|----------------------|--------|
| Win rate | Deals won / (won + lost) per quarter, by value and count | Hub deals (`sales.deals`) | `[to confirm]` |
| Weighted pipeline | Sum of amount × probability of open deals, per business area | Hub deal list (`sales.deals.list-deals`) | Against budget |
| Consulting quotes agreed with delivery | Share of sent consulting quote versions with a recorded delivery agreement | Hub (`sales.delivery-agreement`) | 100 % |
| Deals staffable by promised start | Share of won consulting deals delivery could start on the promised date | Hub (`sales.pipeline-impact`) | `[to confirm]` |
| Contracts active within N days of acceptance | Accepted quote to active contract | Hub contract register | `[to confirm]` |

The CCO reviews the KPIs monthly with the sales team and reports them to the management review
(SW-IMS-PRO-004).

## 8. Related Documents

- SW-QMS-POL-002 Customer Communication Policy
- SW-QMS-PRO-001 Service Delivery Procedure
- SW-QMS-PRO-005 Account Management Procedure
- SW-QMS-PRO-006 Resource Allocation Procedure
- SW-QMS-PRO-007 Partner and Vendor Management Procedure
- SW-IMS-PRO-014 Invoicing and Finance Procedure
- SW-ISMS-POL-004 Data Protection Policy
- ISO 9001:2015 clause 8.2 (Requirements for products and services)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-10-29 | Customer Acquisition Lead (draft) | First version, written from how sales runs in the hub |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Customer Acquisition Lead (CCO) | | | |
| IMS Owner (COO) | | | |
