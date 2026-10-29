---
document_id: SW-QMS-PRO-007
title: Partner and Vendor Management Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CCO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 27001
  - ISO 14001
related_documents:
  - SW-IMS-POL-002
  - SW-IMS-POL-003
  - SW-ISMS-PRO-008
  - SW-QMS-PRO-004
  - SW-QMS-PRO-006
  - SW-IMS-PRO-012
  - SW-IMS-PRO-015
---

# Partner and Vendor Management Procedure

**Document ID**: SW-QMS-PRO-007-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: CCO
**Approved by**: [TBD]

## 1. Purpose

This procedure describes how Swedwise keeps the partnerships whose products it sells and builds on — for
example OpenText and Salesforce — and the subcontracting firms it delivers with: partner agreements, partner
programmes and their certification requirements, product terms and prices, and the regular follow-up. It is
the procedure of the process *Partners and product vendors* (process owner: CCO).

Swedwise separates **partners and product vendors** (Sales & Marketing, CCO, this procedure) from
**ordinary suppliers** — what the company buys for its own use (Finance, CFO, SW-IMS-PRO-015 Purchasing
Procedure). Both follow SW-IMS-POL-003 Supplier Management Policy and SW-IMS-POL-002 Procurement Policy.

## 2. Scope

This procedure applies to:

- **Product vendors**: vendors whose software or services Swedwise resells, implements or builds on (licences,
  subscriptions, support and maintenance)
- **Partner programmes**: the vendors' partner programmes Swedwise belongs to, with their tiers, requirements
  and certifications
- **Subcontracting firms** whose people deliver in Swedwise's customer projects `[to confirm: that
  subcontractors belong here rather than with ordinary suppliers]`
- **Other partners** Swedwise sells or delivers together with

**Out of scope**: ordinary purchasing (SW-IMS-PRO-015); the deal-by-deal sale (SW-QMS-PRO-004); the security
assessment itself, which is done under SW-ISMS-PRO-008 Supplier Security Assessment Procedure.

## 3. Where the work runs

| Hub part / system | Used for |
|-------------------|----------|
| External parties (`parties.register`) | One register per company of every external party by kind — subcontractor, licence vendor, partner, other — with organisation number and supplier number; switched off, never deleted |
| A party's people (`parties.people`) | A subcontractor's people invited to the hub with their purchase price and role, seeing only their own time and plan |
| Party workspace in xECM (`sync.xecm`) | The partner agreement, programme documents, price lists and assessments, filed in the party's xECM workspace |
| Product catalog (`sales.catalog`) | The products that can be sold, each with its revenue account; switched off, never deleted |
| Licence prices and costs (`sales.licences`) | Licence templates: subscription or perpetual, billing and purchase interval, maintenance, purchase discount, and the resulting cost |
| Supplier quotes (`purchasing.supplier-quotes`) | A vendor's quote or a subcontractor's statement of work linked to a deal |
| Supplier invoices matched (`purchasing.supplier-invoices`) | Vendors' and subcontractors' invoices from Fortnox matched to their purchase order and quote |
| Competence and CVs (`delivery.competence`) | Consultants' certifications against what the partner programmes require |

## 4. Roles and Responsibilities

| Role (job) | Responsibilities |
|------------|------------------|
| **CCO** | Owns this procedure and the partner portfolio; decides on entering and leaving partner programmes; signs or proposes partner agreements for signature `[to confirm: signing authority]`; runs the yearly partner review |
| **Account manager** | Works with the partners to create business ("collaborate with partners to optimise business opportunities"); keeps the partner contacts and deal registrations `[to confirm: whether deal registration is used]` |
| **Business developer** | Proposes new partners and offerings |
| **CSO / group managers** | Plan and follow the certifications the programmes require (SW-IMS-PRO-012); select subcontractor people with delivery |
| **CFO** | Checks payment terms and financial standing; pays vendor invoices; owns the supplier number in Fortnox |
| **CISO (COO, proposed)** | Assesses vendors and subcontractors that handle Swedwise's or customers' information (SW-ISMS-PRO-008) |
| **Environmental Lead (CFO)** | Advises on environmental criteria for vendors with significant aspects (e.g. data centres) |

## 5. Procedure

### Step 1: Decide to enter a partnership

1. A new partner or vendor is proposed by the CCO, an account manager or the business developer, with the
   reason: the offering, customer demand, the programme's cost and requirements.
2. The CCO decides, with the CEO for partnerships of strategic weight `[to confirm: which need the CEO]`.

### Step 2: Register the party and assess it

1. The partner is registered as an external party in the hub with its kind, organisation number and — when
   we will buy from it — its supplier number from Fortnox (`parties.register`).
2. If the partner will handle Swedwise's or customers' information, or its product will run in a customer's
   or Swedwise's environment as a service, its security is assessed under SW-ISMS-PRO-008 before the
   agreement is signed; the result is filed in the party's xECM workspace.
3. The supplier category (Strategic, Important, Standard) is set as SW-IMS-POL-003 defines.

### Step 3: Sign the partner agreement

1. The partner agreement and programme terms are reviewed for: what we may resell and where, prices and
   discounts, support and escalation paths, certification requirements, data protection terms (DPA where
   needed), liability, termination.
2. The signed agreement is filed in the party's xECM workspace. Its renewal or notice date is recorded
   `[to confirm: where partner agreement dates are tracked — the hub's contract register covers customer
   contracts]`.

### Step 4: Bring products and prices into sales

1. Products we may sell are added to the hub's product catalog with their revenue account
   (`sales.catalog`).
2. Licence terms — subscription or perpetual, billing and purchase interval, maintenance, purchase discount —
   are kept as licence templates (`sales.licences`), so a quote's cost and margin are right.
3. Price list changes from a vendor are entered from the date they apply; products no longer offered are
   switched off, never deleted.
4. The account managers are told what changed (hand-over to SW-QMS-PRO-004).

### Step 5: Keep the certifications the programmes require

1. The CCO tells the CSO what each programme requires: number of certified people per product, levels,
   deadlines.
2. The CSO and the group managers plan the certifications under SW-IMS-PRO-012; each consultant's
   certifications are kept in the hub (`delivery.competence`).
3. The CCO checks status against the programme's requirements before each programme renewal.

### Step 6: Buy through the partner in a deal

When a sale needs a vendor's licences or a subcontractor's hours, the vendor's quote or the subcontractor's
statement of work is registered on the deal (`purchasing.supplier-quotes`), the purchase order is made when we
win (`purchasing.orders`), and the vendor's invoice is matched to it before payment
(`purchasing.supplier-invoices`). Subcontractor people are invited to the hub and booked like our own
(`parties.people`, SW-QMS-PRO-006).

### Step 7: Review the partnership yearly

Once a year, and before a programme or agreement renewal, the CCO reviews each Strategic and Important
partner: revenue and margin on its products, programme status and certifications, support quality, security
and environmental follow-up, issues raised. The result — continue, change or leave — is recorded with the
party (SW-ISMS-FRM-014 Supplier Performance Review Template may be used).

### Step 8: End a partnership

Ending follows SW-IMS-POL-003 section 4.9 (offboarding): customers with the partner's products are handled
first, access is removed, information returned or destroyed, the party switched off in the hub.

## 6. Records

| Record | Where | Owner |
|--------|-------|-------|
| External party with kind and numbers | Hub (`parties.register`) | CCO |
| Partner agreement, programme terms, price lists | Party's xECM workspace | CCO |
| Security assessment | Party's xECM workspace; SW-ISMS-FRM-013 | CISO |
| Products and licence templates | Hub (`sales.catalog`, `sales.licences`) | CCO |
| Certifications per consultant | Hub (`delivery.competence`) | CSO |
| Supplier quotes, purchase orders, matched invoices | Hub (purchasing); Fortnox | Deal owner / CFO |
| Yearly partner review | Party's xECM workspace | CCO |

## 7. Key Performance Indicators

| KPI | Definition | Source of the number | Target |
|-----|------------|----------------------|--------|
| Programme requirements met | Share of partner programmes where the certification requirements are met | Hub competence against programme requirements | 100 % |
| Strategic and Important partners reviewed | Share reviewed in the last 12 months | Party workspace review records | 100 % |
| Partners assessed for security where required | Share of partners handling information with a current assessment | SW-ISMS-PRO-008 records | 100 % |
| Revenue and margin per vendor's products | Per year | Hub profitability per product (`profitability.dimensions`) | Trend only |
| Supplier invoices matched before payment | Share of vendor and subcontractor invoices matched to an order | Hub (`purchasing.supplier-invoices`) | `[to confirm]` |

## 8. Related Documents

- SW-IMS-POL-002 Procurement and Asset Acquisition Policy
- SW-IMS-POL-003 Supplier Management Policy
- SW-ISMS-PRO-008 Supplier Security Assessment Procedure
- SW-QMS-PRO-004 Sales Procedure
- SW-QMS-PRO-006 Resource Allocation Procedure
- SW-IMS-PRO-012 Competence and Training Procedure
- SW-IMS-PRO-015 Purchasing Procedure
- SW-ISMS-FRM-013 Supplier Assessment Summary; SW-ISMS-FRM-014 Supplier Performance Review Template
- ISO 9001:2015 clause 8.4 (Control of externally provided processes, products and services)
- ISO/IEC 27001:2022 Annex A 5.19–5.22 (supplier relationship controls)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-10-29 | CCO (draft) | First version; partners and product vendors separated from ordinary suppliers |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| CCO | | | |
| IMS Owner (COO) | | | |
