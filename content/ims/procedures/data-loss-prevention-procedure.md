---
document_id: SW-ISMS-PRO-013
title: Data Loss Prevention Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001
  - SW-ISMS-POL-004
  - SW-ISMS-POL-007
  - SW-ISMS-PRO-001
  - SW-ISMS-PRO-014
  - SW-IMS-PRO-008
---

# Data Loss Prevention Procedure

## 1. Purpose

This procedure sets out how Swedwise detects and stops customer data and personal data from leaving the organisation
through Microsoft 365, who handles what the rules catch, and how it is proven. It meets:

- ISO/IEC 27001:2022 Annex A 8.12 (data leakage prevention) and 5.14 (information transfer);
- the Classification Policy (SW-ISMS-POL-007) and the Data Protection Policy (SW-ISMS-POL-004);
- the commitment to Salesforce (TPSD-3520, remediation plan item 1): DLP for Exchange Online, SharePoint and OneDrive
  by 2026-11-22.

## 2. Scope

**In scope:** Exchange Online (e-mail), SharePoint Online and OneDrive for Business, which includes files shared in
Teams (they are stored in SharePoint and OneDrive). Every user with a Swedwise account.

**Out of scope (licence):** Teams chat and channel messages, and Endpoint DLP on the computers. Neither is part of
Microsoft 365 Business Premium; both need the Purview Suite add-on. The CISO reconsiders this at the annual review.
On the computers, the USB write block (SW-ISMS-PRO-012 6.4) covers the main endpoint path.

## 3. Roles

| Role | Responsibility |
|---|---|
| **CISO** (the COO, proposed) | Owns the policies; handles alerts and override reviews; runs the monthly review. |
| **IT Manager** (the COO) | Configures the policies in Microsoft Purview; changes them through change management. |
| **Privacy Lead** | Is told of every alert that involves personal data and judges whether it is a personal data breach. |
| **Everyone** | Reads the policy tip; overrides only with a true business reason; reports a mistake at once. |

## 4. What the policies look for

| Information | How it is detected |
|---|---|
| Swedish personal identity numbers (personnummer) | Microsoft sensitive information type *Sweden National ID* |
| Payment card numbers | *Credit Card Number* |
| Bank accounts | *International Banking Account Number (IBAN)* and *Sweden bank account number* where available |
| Customer data | Documents and e-mails that carry the **Confidential** or **Restricted** sensitivity label (Classification Policy); until labels are published, a keyword dictionary of active customer names maintained by the CISO |

Thresholds: one card number or IBAN, or five or more personal identity numbers in one item, or any item labelled
Restricted, triggers the rule. The CISO tunes these at the monthly review.

## 5. The policies

One Purview DLP policy, **SW-DLP-M365**, with these rules for Exchange, SharePoint and OneDrive:

| Rule | Condition | Action |
|---|---|---|
| External sharing of sensitive data | Section 4 content shared with or sent to people outside the organisation | Block, with a **policy tip**; the user may **override with a business justification** (except Restricted) |
| Restricted content outside | Restricted label shared outside | Block, no override |
| Internal use | Section 4 content shared inside | Allowed, no tip |

Every match raises an alert to the CISO and is logged in the Purview activity explorer.

### 5.1 Rollout

1. **Simulation with policy tips** from the day the policy is created: nothing is blocked, users see the tips, the
   CISO reads the matches daily.
2. **Turn on blocking on 2026-11-22**, the date committed to Salesforce, after the CISO has gone through the
   simulation matches and tuned false positives. If the simulation ran for fewer than 7 days, that is recorded as a
   decision in CompanyIT.

## 6. Handling alerts and overrides

| What | Who | When |
|---|---|---|
| Alert of high severity (Restricted, or many personal identity numbers) | CISO | Same working day |
| Other alerts and overrides | CISO | Weekly, every Monday |
| Personal data involved | CISO tells the Privacy Lead | Same day; the Privacy Lead judges under SW-ISMS-PRO-001 9.1 |
| Misuse of override | CISO with the group manager | Within a week; repeated misuse is an incident |

A **false positive** is noted in the alert with the reason; when the same pattern recurs, the CISO proposes a rule
change. A **true leak** is an incident under SW-ISMS-PRO-001.

## 7. Changes

Every change to SW-DLP-M365 (rules, thresholds, exceptions, mode) goes through the Change Management Procedure
(SW-IMS-PRO-008) as a standard change, with the reason, and is recorded in CompanyIT. An exception for a person or a
site is time-limited (at most 90 days) and recorded as a decision.

## 8. Monthly review

In the first working week of each month the CISO reviews: number of matches by rule, overrides and their reasons,
false positives, incidents, and changes made. The result is a short note in the Management System area and the DLP
line in the management review.

## 9. Evidence

| Evidence | Where | Kept |
|---|---|---|
| The policy configuration (export) | Management System area, on each change | 3 years |
| Monthly review notes | Management System area | 3 years |
| Alerts and overrides | Microsoft Purview (activity explorer and alerts) | As Microsoft retains them; summaries in the review notes |
| Measured state | CompanyIT controls page, control `dlp-m365` | Snapshot history in CompanyIT |

## 10. Measures

| Measure | Target |
|---|---|
| Policy in blocking mode for Exchange, SharePoint and OneDrive | Yes, from 2026-11-22 |
| High-severity alerts handled the same working day | 100 % |
| Monthly review held | 12 of 12 |

## 11. State on 2026-11-05 (claims check)

- No DLP policy exists; Business Premium is decided (2026-11-05) but not yet bought.
- Sensitivity labels are not yet published; until they are, customer data is detected by the keyword dictionary.
- Teams chat DLP and Endpoint DLP are not licensed (measured by the CompanyIT session 2026-11-05).
- The CompanyIT control `dlp-m365` is being added by the CompanyIT session.

## 12. Related documents

- SW-ISMS-POL-004 Data Protection Policy; SW-ISMS-POL-007 Classification Policy
- SW-ISMS-PRO-001 Incident Management; SW-ISMS-PRO-012 Endpoint Management; SW-ISMS-PRO-014 Security Monitoring;
  SW-IMS-PRO-008 Change Management

## 13. Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | 2026-11-05 | Claude for the IMS Owner | New: Purview DLP for Exchange, SharePoint and OneDrive, rollout, alerts, overrides, monthly review; for the commitment to Salesforce (TPSD-3520) | [TBD – CEO] |
