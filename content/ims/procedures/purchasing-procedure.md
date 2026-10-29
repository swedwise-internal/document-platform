---
document_id: SW-IMS-PRO-015
title: Purchasing Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CFO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
related_documents:
  - SW-IMS-POL-002
  - SW-IMS-POL-003
  - SW-ISMS-PRO-008
  - SW-ISMS-PRO-006
  - SW-QMS-PRO-007
  - SW-IMS-PRO-014
  - SW-EMS-POL-001
---

# Purchasing Procedure

**Document ID**: SW-IMS-PRO-015-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: CFO
**Approved by**: [TBD]

## 1. Purpose

This procedure describes how Swedwise buys what the company itself uses — equipment, software and cloud
services for its own work, office services, travel, professional services — and how it selects and follows
up those suppliers, so that purchases are needed, approved, secure, environmentally considered and paid
correctly. It is the procedure of the process *Purchasing and suppliers* (process owner: CFO).

Swedwise separates **ordinary suppliers** (Finance, CFO, this procedure) from **partners and product
vendors** — the vendors whose products we sell and the firms we deliver with (Sales & Marketing, CCO,
SW-QMS-PRO-007 Partner and Vendor Management Procedure). Licences and subcontractor hours bought for a
customer deal are bought under SW-QMS-PRO-007 and SW-QMS-PRO-004, not here.

## 2. Scope

This procedure applies to all ordinary purchases of Swedwise AB, by all staff, and to the suppliers of
those purchases. It implements SW-IMS-POL-002 Procurement and Asset Acquisition Policy and SW-IMS-POL-003
Supplier Management Policy for ordinary suppliers.

**Out of scope**: purchases for resale or customer delivery (SW-QMS-PRO-007); the security assessment
method itself (SW-ISMS-PRO-008); handling IT assets once received (SW-ISMS-PRO-006 Asset Management
Procedure).

## 3. Where the work runs

| System / hub part | Used for |
|-------------------|----------|
| **Fortnox** | Supplier register (supplier numbers), supplier invoices, attestation and payment |
| Hub external parties (`parties.register`) | The register of external parties with kind, organisation number and supplier number; switched off, never deleted |
| Hub supplier invoices (`purchasing.supplier-invoices`) | Supplier invoices fetched from Fortnox and, where there is an order, matched to it |
| Party workspace in xECM (`sync.xecm`) | Supplier agreements, assessments and reviews filed in the party's workspace |

The hub's purchasing function is built for purchases tied to a customer deal. For ordinary purchases there is
no purchase request form: the request and approval are recorded `[to confirm: where — e-mail, the hub, or
attestation in Fortnox]`.

## 4. Roles and Responsibilities

| Role (job) | Responsibilities |
|------------|------------------|
| **CFO** | Owns this procedure and the supplier register for ordinary suppliers; approves purchases within the authority SW-IMS-POL-002 section 5.1 gives; follows spend against budget |
| **Finance** | Registers suppliers in Fortnox; receives, attests and pays supplier invoices; keeps purchase records |
| **Requester (any employee)** | States the need, gets approval before ordering, confirms receipt |
| **Budget holder (unit manager: COO, CSO, CCO, HR)** | Approves purchases within their budget and authority level |
| **CEO** | Approves purchases above the management team's authority |
| **CISO (COO, proposed)** | Assesses suppliers that will handle Swedwise's information or provide IT and cloud services (SW-ISMS-PRO-008) |
| **IT Manager (COO)** | Sets the standards for IT equipment and software bought for internal use; receives IT assets into the asset register |
| **Environmental Lead (CFO)** | Sets the environmental criteria for purchases with significant environmental aspects (equipment, travel, data centres) |

## 5. Procedure

### Step 1: State the need

The requester states what is needed, why, the expected cost (one-off and yearly) and the budget it belongs
to. Before buying something new, the requester checks whether an existing supplier or agreement already
covers it.

### Step 2: Approve

1. The purchase is approved by the authority SW-IMS-POL-002 section 5.1 sets for its value (single purchase or
   committed contract value; subscriptions by their yearly value), and the approval is recorded.
2. Standard IT equipment to approved specifications, and renewals of existing agreements within their terms,
   follow the policy's exceptions.

### Step 3: Choose the supplier

1. Prefer an existing approved supplier.
2. For a new supplier, compare offers as the policy requires for the value (competitive quotes above the
   policy's thresholds) on cost over the lifetime, quality, security and environmental performance.
3. **Security**: if the supplier will handle Swedwise's or customers' information, provide a cloud or IT
   service, or get access to Swedwise's systems, the supplier is assessed under SW-ISMS-PRO-008 before the
   order (SW-ISMS-FRM-012 questionnaire, SW-ISMS-FRM-013 summary).
4. **Environment**: apply the environmental criteria in SW-IMS-POL-002 section 5.5 (for example energy
   class, take-back and repair for equipment; travel by the policy).
5. The supplier category (Strategic, Important, Standard) is set as SW-IMS-POL-003 defines.

### Step 4: Register the supplier

A new supplier is registered in Fortnox (supplier number) and as an external party in the hub, with its
organisation number and supplier number (`parties.register`). Its agreement, DPA where personal data is
processed, and assessment are filed in the party's xECM workspace.

### Step 5: Order and receive

1. The order is placed with the supplier `[to confirm: whether ordinary purchases get a purchase order
   number]`, with Swedwise's invoice address and the requester as reference.
2. The requester confirms receipt and that it matches the order. IT equipment and software are received into
   the asset register by the IT Manager (SW-ISMS-PRO-006).

### Step 6: Attest and pay the supplier invoice

1. The supplier invoice arrives in Fortnox and is attested by the requester or budget holder, then paid by
   Finance on its due date.
2. Where there is an order in the hub, the invoice fetched from Fortnox is matched to it so differences are
   seen before payment (`purchasing.supplier-invoices`).

### Step 7: Follow up suppliers

1. Strategic and Important ordinary suppliers are reviewed as SW-IMS-POL-003 section 4.5 sets out (Strategic at
   least yearly, quarterly for critical services; Important at least yearly; Standard when issues or a renewal
   call for it); SW-ISMS-FRM-014 Supplier Performance Review Template may be used.
   The review covers delivery, quality, security, environment and cost.
2. Problems with a supplier are raised with the supplier and, when they are a nonconformity, handled under
   SW-IMS-PRO-005.
3. Ending a supplier follows SW-IMS-POL-003 section 4.9 (offboarding); the party is switched off in the hub.

## 6. Records

| Record | Where | Retention | Owner |
|--------|-------|-----------|-------|
| Request and approval | `[to confirm]` | As accounting records | Requester / budget holder |
| Supplier register | Fortnox; hub external parties | While active + `[to confirm]` | Finance |
| Supplier agreement, DPA | Party's xECM workspace | Agreement term + `[to confirm]` | CFO |
| Security assessment | Party's xECM workspace; SW-ISMS-FRM-013 | `[to confirm]` | CISO |
| Supplier invoices and attestation | Fortnox | 7 years, as the Swedish Accounting Act requires | CFO |
| Supplier review | Party's xECM workspace | `[to confirm]` | CFO |

## 7. Key Performance Indicators

| KPI | Definition | Source of the number | Target |
|-----|------------|----------------------|--------|
| Purchases approved before ordering | Share of supplier invoices (sample per quarter) with a recorded approval dated before the order | Fortnox attestation and approval records | 100 % |
| Suppliers assessed where required | Share of ordinary suppliers handling information or providing IT/cloud services with a current assessment | SW-ISMS-PRO-008 records | 100 % |
| Strategic and Important suppliers reviewed | Share reviewed within their review interval | Party workspace review records | 100 % |
| Supplier invoices paid on time | Share paid by due date | Fortnox | `[to confirm]` |
| Spend against budget | Ordinary purchasing spend per budget holder against budget | Hub finance (`finance.results`, `finance.budget`) | Budget |

## 8. Related Documents

- SW-IMS-POL-002 Procurement and Asset Acquisition Policy
- SW-IMS-POL-003 Supplier Management Policy
- SW-EMS-POL-001 Environmental Policy
- SW-ISMS-PRO-008 Supplier Security Assessment Procedure
- SW-ISMS-PRO-006 Asset Management Procedure
- SW-QMS-PRO-007 Partner and Vendor Management Procedure
- SW-IMS-PRO-005 Nonconformity and Corrective Action Procedure
- SW-IMS-PRO-014 Invoicing and Finance Procedure
- ISO 9001:2015 clause 8.4 (Control of externally provided processes, products and services)
- ISO/IEC 27001:2022 Annex A 5.19–5.23 (supplier and cloud service controls)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-10-29 | CFO (draft) | First version; ordinary purchasing separated from partners and product vendors |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| CFO | | | |
| IMS Owner (COO) | | | |
