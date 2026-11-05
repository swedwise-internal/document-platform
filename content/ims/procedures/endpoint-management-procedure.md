---
document_id: SW-ISMS-PRO-012
title: Endpoint Management Procedure
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
  - SW-ISMS-POL-003
  - SW-ISMS-POL-009
  - SW-ISMS-PRO-001
  - SW-ISMS-PRO-002
  - SW-ISMS-PRO-006
  - SW-ISMS-PRO-007
  - SW-IMS-PRO-008
---

# Endpoint Management Procedure

## 1. Purpose

This procedure sets out how every Swedwise work computer is enrolled, kept compliant, restricted and taken back, and
how that is proven. It meets:

- the Storskogen IT Policy and Information Security Policy (2024-11-06): antimalware on every device, company work
  only on company devices;
- ISO/IEC 27001:2022 Annex A 8.1 (user endpoint devices), 7.10 (storage media), 8.7 (protection against malware) and
  5.11 (return of assets);
- the commitment to Salesforce (TPSD-3520, remediation plan items 2 and 3): Intune enrolment, BitLocker and the USB
  write block on in-scope devices by 2026-11-22.

## 2. Scope

Every work computer used by an employee, temporary staff member or subcontractor for Swedwise or customer work,
Windows and macOS. The owner decided on 2026-11-05 that **every** work computer is enrolled, not only those on
engagements with customer security requirements. Mobile phones that reach Microsoft 365 are covered by section 6.6.

Private computers are out of scope because company work on them is not allowed (Acceptable Use Policy).

## 3. Roles

The CISO and the IT Manager roles are both held by the COO (SW-IMS-MAN-005 4.1.2; CISO proposed).

| Role | Responsibility |
|---|---|
| **CISO** | Owns this procedure, the compliance policy and the USB exception decisions; reviews the monthly report. |
| **IT Manager** | Runs Intune: enrolment, policies, the exception group, lock and wipe. |
| **HR / People & Culture** | Tells the IT Manager about joiners and leavers in time (SW-ISMS-PRO-002 7.1 and 7.4). |
| **Group managers** | Make sure their people enrol and fix non-compliance. |
| **Everyone** | Enrols their computer, keeps it compliant, reports loss at once, returns it when leaving. |

## 4. Tools

- **Microsoft Intune** (in Microsoft 365 Business Premium): enrolment, compliance policy, configuration (USB), lock
  and wipe.
- **Microsoft Defender for Business** (in Business Premium): antimalware, firewall state and vulnerability data
  (SW-ISMS-PRO-007).
- **Entra Conditional Access**: a compliant device is required for Microsoft 365.
- **CompanyIT**: the controls page shows the measured state; decisions (exceptions) are recorded there.

## 5. When

| What | When |
|---|---|
| Enrolment of a new computer | Before it is handed out, or on first sign-in; before access to any customer's data |
| Enrolment of the existing computers | Every computer by **2026-11-22** (first those of people on engagements with customer security requirements) |
| Compliance check | Continuously by Intune; non-compliant after a 7-day grace period |
| USB exception review | When it expires (at most 90 days), and at the monthly review |
| Monthly review | First working week of every month, by the CISO |
| Device return | On the last working day (SW-ISMS-PRO-002 7.4) |

## 6. How

### 6.1 Enrolment

1. **New Windows computers** are registered for Windows Autopilot by the supplier or the IT Manager and join Entra ID
   at first sign-in; automatic MDM enrolment puts them in Intune.
2. **Existing Windows computers** are joined to Entra ID (or, where a computer cannot be rejoined, enrolled through
   *Settings → Accounts → Access work or school*) by the user with the IT Manager's instructions.
3. **Mac computers** are enrolled through the Intune Company Portal.
4. The IT Manager checks in Intune that the device shows as enrolled and compliant, and only then does the person get
   access to an engagement group (`sw-eng-*`).

### 6.2 Compliance policy

A device is compliant when all of these hold:

| Setting | Requirement |
|---|---|
| Disk encryption | BitLocker (Windows) or FileVault (macOS) on, recovery key escrowed to Entra ID / Intune |
| Operating system | A version still supported by the vendor; security updates no older than 30 days |
| Antimalware | Microsoft Defender Antivirus on, real-time protection on, signatures current |
| Firewall | On |
| Screen lock | Password or Windows Hello; locks after at most 10 minutes of inactivity |
| Jailbreak / tamper | Defender tamper protection on |

A device that fails a requirement gets 7 days' grace, with a notification to the user, then turns non-compliant.

### 6.3 Conditional Access

A Conditional Access policy requires a compliant (or Entra-joined and compliant) device for Microsoft 365. It is
first run in report-only mode, then turned on once every computer is enrolled; the date is recorded in CompanyIT.
Break-glass accounts are excluded. Customer systems that do not sign in through our Entra ID (Salesforce among them)
are not covered by this policy; for those, access is granted only after 6.1 step 4.

### 6.4 USB write block

An Intune configuration policy (Settings catalog, *Removable Storage: deny write access*) applies to every enrolled
Windows computer; the macOS equivalent is applied where supported. Reading from USB storage is allowed.

**Exception:** a person asks the CISO with the reason and the period. The CISO decides; an approved exception is
recorded as a decision in CompanyIT (person, device, reason, end date at most 90 days ahead) and the device is added
to the exception group. The IT Manager removes it at the end date.

### 6.5 Lost or stolen devices

1. The person reports it to the CISO at once, by Slack or phone (SW-ISMS-PRO-001).
2. The IT Manager revokes the person's sessions and, if needed, resets their password and MFA methods.
3. The IT Manager issues a remote lock, then a remote wipe through Intune; BitLocker protects the data meanwhile.
4. The incident is recorded under SW-ISMS-PRO-001; a police report is made for theft.

### 6.6 Phones and tablets

Phones that reach Microsoft 365 use Intune app protection policies (no MDM enrolment of private phones): Outlook,
Teams and OneDrive require a PIN, and company data cannot be copied to unmanaged apps.

### 6.7 Device return

At offboarding the person hands the computer to the IT Manager, who wipes it (Autopilot reset or full wipe) before it
is reused, and removes it from Intune and Entra ID. The asset register (SW-ISMS-PRO-006) is updated.

## 7. Evidence

| Evidence | Where | Kept |
|---|---|---|
| Intune compliance report (enrolled devices, compliant / non-compliant) | Exported monthly to the Management System area | 3 years |
| USB exceptions | Decisions in CompanyIT | 3 years after the end date |
| Lost-device actions | Incident record (SW-ISMS-PRO-001) | As incident records |
| Measured state | CompanyIT controls page, control `endpoint-usb-write-block` (and an enrolment/compliance control, proposed) | Snapshot history in CompanyIT |

## 8. Measures

| Measure | Target |
|---|---|
| Work computers enrolled in Intune | 100 % |
| Enrolled computers compliant | ≥ 95 %, none non-compliant for more than 14 days |
| USB exceptions past their end date | 0 |
| Lost devices locked within 4 working hours of the report | 100 % |

## 9. State on 2026-11-05 (claims check)

This procedure describes the target. Measured today, none of it is in place yet:

- Business Premium (Intune, Defender for Business, Entra ID P1) is decided by the owner on 2026-11-05 but not yet
  bought; today's licences (Business Standard and Basic) include neither Intune nor Defender.
- No computer is enrolled in Intune; the device state cannot be read (Graph `managedDevices` refused).
- No compliance policy, no USB policy and no Conditional Access policy for devices exist.
- The CompanyIT control `endpoint-usb-write-block` is being added by the CompanyIT session; an enrolment and
  compliance control is proposed.
- Committed to Salesforce: enrolment, BitLocker and the USB block on in-scope devices by 2026-11-22.

## 10. Related documents

- SW-ISMS-POL-001 Information Security Policy; SW-ISMS-POL-003 Acceptable Use Policy; SW-ISMS-POL-009 Cryptographic
  Controls Policy
- SW-ISMS-PRO-001 Incident Management; SW-ISMS-PRO-002 Access Management; SW-ISMS-PRO-006 Asset Management;
  SW-ISMS-PRO-007 Vulnerability Management; SW-IMS-PRO-008 Change Management
- Storskogen IT Policy and Information Security Policy, 2024-11-06

## 11. Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | 2026-11-05 | Claude for the IMS Owner | New: enrolment, compliance, Conditional Access, USB block and exceptions, lost devices, return; for the commitment to Salesforce (TPSD-3520) and the owner's decision that every computer is enrolled | [TBD – CEO] |
