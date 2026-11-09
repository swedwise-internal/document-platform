---
document_id: SW-ISMS-PRO-015
title: Penetration Testing Procedure
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
  - SW-ISMS-POL-001
  - SW-IMS-POL-002
  - SW-ISMS-PRO-007
  - SW-ISMS-PRO-008
  - SW-ISMS-PRO-012
  - SW-ISMS-PRO-013
---

# Penetration Testing Procedure

## 1. Purpose

This procedure sets out how Swedwise has its own IT tested by an outside party every year, within what limits, and
how findings are fixed and proven. It meets:

- ISO/IEC 27001:2022 Annex A 8.8 (management of technical vulnerabilities) and 5.36 (compliance with policies and
  standards);
- the commitment to Salesforce (TPSD-3520, remediation plan item 4): a provider engaged by 2026-12-15, the first test
  completed by 2027-03-31, then every year.

## 2. Scope

**In scope each year:**

- **External:** Swedwise's internet-facing services: the public domains and addresses Swedwise owns, and the
  Microsoft 365 / Entra ID sign-in surface.
- **Internal, assumed breach:** starting from a standard user account and a standard enrolled work computer provided
  for the test, how far an attacker gets in the tenant (privilege escalation, lateral movement, data access).
- **Control verification:** that the controls of SW-ISMS-PRO-012 (compliance, USB write block) and SW-ISMS-PRO-013
  (DLP) work as described.

**Out of scope, always:**

- Salesforce's systems and every customer's systems and environments;
- the company production platform (`swedwise-prod-swe-platform-rg-cluster` and its Azure resources), unless its system
  owner decides otherwise in writing for that test;
- denial-of-service and load testing;
- social engineering of employees, unless the CEO agrees in writing for that test;
- third-party services (Microsoft, GitHub, Slack and others) beyond Swedwise's own configuration, and only as their
  own testing rules allow.

## 3. Roles

| Role | Responsibility |
|---|---|
| **CISO** (the COO, proposed) | Owns the test: scope, provider, rules of engagement, follow-up and the attestation. |
| **CEO** | Signs the written authorisation. |
| **IT Manager** (the COO) | Provides the test account and computer, watches the test window, removes test access afterwards. |
| **System owners** | Agree before anything they own is in scope; fix findings in their systems. |

## 4. When

| Step | When |
|---|---|
| Request for quotation sent | November each year (first: by 2026-11-30) |
| Provider engaged (signed order) | By **15 December** (first: 2026-12-15) |
| Test carried out | January–March (first: completed by **2027-03-31**) |
| Report received | Within 2 weeks of the test |
| Remediation | Within the times of SW-ISMS-PRO-007 section 5 |
| Retest of critical and high findings | Within 90 days of the report |

## 5. How

### 5.1 Choosing the provider

Through the Procurement Policy (SW-IMS-POL-002) and the supplier assessment (SW-ISMS-PRO-008). The provider must
have testers with a recognised certification (for example CREST, OSCP or OSCE), carry professional liability
insurance, sign a confidentiality agreement, and keep test data in the EU/EEA. The request for quotation is written
and kept in CompanyIT (`docs/security/penetration-test-rfq.md`), and points to this procedure for the scope.

### 5.2 Rules of engagement

Before any testing, a written **rules of engagement** document is signed by the CEO and the provider. It states:

- the scope and the exclusions of section 2, with the exact domains and addresses;
- the test window (dates and hours) and the source addresses the provider tests from;
- contacts on both sides, reachable during the window, and the **emergency stop**: either side can halt the test at
  once by phone; the provider stops and reports what it was doing;
- how test accounts, data and tools are created and removed;
- that a critical finding is reported at once, not only in the report.

Testing of our own Microsoft 365 tenant follows the Microsoft Cloud Penetration Testing Rules of Engagement (no prior
notice to Microsoft is needed); the rules of engagement document binds the provider to them.

### 5.3 After the test

1. Each finding is entered in the vulnerability register and handled under SW-ISMS-PRO-007 with its severity.
2. Critical and high findings are retested by the provider; the retest result is kept with the report.
3. A finding not fixed in time needs a risk acceptance (SW-ISMS-FRM-010) or an exception (SW-ISMS-FRM-011).
4. The IT Manager removes all test accounts and access.

### 5.4 Attestation to customers

Customers do not get the report. On request, and under a confidentiality agreement, the CISO gives them an
**attestation letter** from the provider: the date, the scope, the method, a count of findings by severity, and the
retest status.

## 6. Evidence

| Evidence | Where | Kept |
|---|---|---|
| Signed order and rules of engagement | Management System area | 5 years |
| Report and retest result | Management System area, Restricted | 5 years |
| Attestation letter | Management System area | 5 years |
| Measured state | CompanyIT controls page, control `penetration-test-annual` (evidence: the report date) | Snapshot history in CompanyIT |

## 7. Measures

| Measure | Target |
|---|---|
| A test completed in the last 12 months | Yes |
| Critical and high findings fixed and retested within 90 days | 100 % |

## 8. State on 2026-11-05 (claims check)

- No penetration test has been done and no provider is engaged.
- The first request for quotation is written (CompanyIT `docs/security/penetration-test-rfq.md`, 2026-11-09, answer by
  2026-11-18). It is sent by the CEO; whether it has been sent is not recorded here.
- The CompanyIT control `penetration-test-annual` is being added by the CompanyIT session.
- Committed to Salesforce: provider by 2026-12-15, first test by 2027-03-31.

## 9. Related documents

- SW-ISMS-POL-001 Information Security Policy; SW-IMS-POL-002 Procurement Policy
- SW-ISMS-PRO-007 Vulnerability Management; SW-ISMS-PRO-008 Supplier Security Assessment; SW-ISMS-PRO-012 Endpoint
  Management; SW-ISMS-PRO-013 Data Loss Prevention
- SW-ISMS-FRM-010 Vulnerability Risk Acceptance; SW-ISMS-FRM-011 Vulnerability Exception Request

## 10. Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | 2026-11-05 | Claude for the IMS Owner | New: annual external and assumed-breach test, exclusions, provider choice, rules of engagement, remediation, retest and attestation; for the commitment to Salesforce (TPSD-3520) | [TBD – CEO] |
| 1.1 | 2026-11-09 | Claude for the IMS Owner | The first request for quotation linked (CompanyIT `docs/security/penetration-test-rfq.md`, 2026-11-09) | [TBD – CEO] |
