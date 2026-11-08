---
document_id: SW-ISMS-PRO-014
title: Security Monitoring Procedure
doc_type: procedure
version: "1.1"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-011
  - SW-ISMS-PRO-001
  - SW-ISMS-PRO-007
  - SW-ISMS-PRO-012
  - SW-ISMS-PRO-013
---

# Security Monitoring Procedure

## 1. Purpose

This procedure turns the Logging and Monitoring Policy (SW-ISMS-POL-011, section 9) into practice for Swedwise's
own IT: who watches the security alerts, how often, how fast they act, and how it is proven. It meets:

- ISO/IEC 27001:2022 Annex A 8.15 (logging) and 8.16 (monitoring activities);
- the commitment to Salesforce (TPSD-3520, remediation plan item 1): Microsoft Defender XDR monitoring by 2026-11-22
  and Microsoft Sentinel by 2027-03-31.

## 2. Scope

Swedwise's Microsoft 365 tenant: identities (Entra ID), e-mail and collaboration (Exchange, SharePoint, OneDrive,
Teams) and the enrolled work computers. Systems run for customers are monitored under each engagement's own
arrangement, not here.

Swedwise has **no 24/7 security operations centre**. Monitoring happens on working days; outside them, high-severity
alerts reach the CISO by e-mail and phone notification and are handled on a best-effort basis.

## 3. Roles

| Role | Responsibility |
|---|---|
| **CISO** (the COO, proposed) | Watches the incident queue, triages, acts or escalates, runs the monthly review. |
| **Deputy** (named by the CEO) | Covers the queue when the CISO is away; the absence is announced in Slack. |
| **IT Manager** (the COO) | Configures the sources, notifications and, from 2027, Sentinel. |
| **Privacy Lead** | Is told of every incident that may involve personal data. |

## 4. Sources

| Source | What it gives |
|---|---|
| Microsoft Defender XDR (in Business Premium: Defender for Business, Defender for Office 365 Plan 1) | Endpoint alerts, malicious e-mail, correlated incidents |
| Entra ID sign-in and audit logs; risky sign-ins | Suspicious sign-ins, admin changes |
| Microsoft Purview | DLP alerts (SW-ISMS-PRO-013) |
| CompanyIT | The daily read of the tenant's base against the controls |
| Microsoft Sentinel (from 2027-03-31) | Central collection and analytics over Entra ID, Microsoft 365 and Defender |

## 5. When and how fast

| Severity (as Defender XDR rates it) | Notified | Triage started | Contained or closed |
|---|---|---|---|
| High | E-mail to it@swedwise.se and notification to the CISO at once | Within 1 working day | Within 2 working days, or escalated as an incident |
| Medium | E-mail to it@swedwise.se | At the weekly pass | Within 10 working days |
| Low / informational | Queue only | At the weekly pass | At the weekly pass |

- **When a high-severity alert arrives:** the CISO (or the deputy) takes it the same or the next working day.
- **Weekly** (Monday): the Defender XDR incident queue, medium, low and informational items, risky sign-ins, DLP
  overrides.
- **Monthly** (first working week): vulnerabilities (SW-ISMS-PRO-007) and the review in section 7.

The rhythm is the owner's decision of 2026-11-07 on Claude Code's recommendation: no SOC, so high-severity alerts are
acted on when they arrive and the queue is gone through weekly, not daily.

## 6. How

1. Open the incident in Defender XDR; assign it to yourself.
2. Classify: true positive, benign true positive, or false positive; write a one-line reason in the incident.
3. True positive: contain (isolate device, revoke sessions, reset password, block sender) and handle it as an
   incident under **SW-ISMS-PRO-001**; personal data involved, tell the Privacy Lead.
4. False positive: close it with the reason; a recurring one leads to a tuning proposal through change management.
5. Close the incident in Defender XDR with the classification.

## 7. Monthly review

The CISO reviews the month: incidents by severity and classification, times against section 5, open items, recurring
false positives, and gaps in the sources. A short note goes to the Management System area, and the figures to the
management review.

## 8. Sentinel (from 2027-03-31)

By 2027-03-31 a Microsoft Sentinel workspace in Swedwise's own Azure subscription collects Entra ID, Microsoft 365
and Defender XDR data. Retention, analytics rules and cost are decided in a plan the owner approves; this procedure
is then updated (version 1.1) so that Sentinel is the queue.

## 9. Evidence

| Evidence | Where | Kept |
|---|---|---|
| Incidents with classification and handling | Defender XDR (180 days, Microsoft's documented retention; advanced hunting keeps 30 days); summaries in the monthly note | Monthly notes 3 years |
| Monthly review notes | Management System area | 3 years |
| Incident records | SW-ISMS-PRO-001 | As incident records |
| Measured state | CompanyIT controls page, control `security-monitoring` | Snapshot history in CompanyIT |

## 10. Measures

| Measure | Target |
|---|---|
| High-severity incidents triaged within 1 working day | 100 % |
| Weekly queue reviews held | ≥ 95 % of weeks |
| Monthly review held | 12 of 12 |

## 11. State on 2026-11-07 (claims check)

Source: CompanyIT guide `docs/guides/how-swedwise-it-works.md` v0.69.0, dated 2026-11-06 (CompanyIT's description of the configuration; device coverage not measured here).

- **Configured (per CompanyIT):** Defender for Business connected to Intune; Defender's alerts go to it@swedwise.se.
- **To align with CompanyIT:** high-severity alerts must also notify the CISO (they go to it@swedwise.se today), and
  the incident queue is gone through weekly (CompanyIT reviews incidents and vulnerabilities monthly).
- Entra sign-in and audit logs exist; a scheduled review is not shown. No deputy is named. Sentinel does not exist;
  committed to Salesforce for 2027-03-31.

## 12. Related documents

- SW-ISMS-POL-011 Logging and Monitoring Policy
- SW-ISMS-PRO-001 Incident Management; SW-ISMS-PRO-007 Vulnerability Management; SW-ISMS-PRO-012 Endpoint
  Management; SW-ISMS-PRO-013 Data Loss Prevention

## 13. Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | 2026-11-05 | Claude for the IMS Owner | New: Defender XDR incident queue, response times by severity, monthly review, Sentinel from 2027-03-31; for the commitment to Salesforce (TPSD-3520) | [TBD – CEO] |
| 1.1 | 2026-11-07 | Claude for the IMS Owner | Rhythm: high-severity alerts on arrival (triage within 1 working day), queue weekly, vulnerabilities monthly (owner 2026-11-07); state section brought to CompanyIT 2026-11-06 | [TBD – CEO] |
