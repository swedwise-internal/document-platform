---
document_id: SW-ISMS-PRO-009
title: Security Awareness Training Procedure
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
  - SW-ISMS-POL-003
  - SW-ISMS-POL-006
  - SW-ISMS-PRO-001
  - SW-IMS-PRO-012
  - SW-ISMS-TRN-001
---

# Security Awareness Training Procedure

## 1. Purpose

This procedure sets out when, where and how Swedwise trains everyone who works for it in information security, and how
completion is proven. It meets:

- the Storskogen Information Security Policy (2024-11-06), 4.6: security awareness and personal data training is held
  regularly for all employees, and 1.1: everyone reads the policy every year;
- ISO/IEC 27001:2022, clause 7.3 and Annex A 6.3;
- customer requirements for a periodic security awareness program, for example Salesforce's supplier assessment
  (TPSD-3520, 2026).

## 2. Scope

This procedure covers everyone with a Swedwise account: employees, temporary staff and subcontractors. Board members
are invited to the annual session.

## 3. Roles

The CISO role is held by the COO (proposed, SW-IMS-MAN-005 4.1.2).

| Role | Responsibility |
|---|---|
| **CISO** | Owns the program. Updates the material every year, holds the annual session, sets the topic of each quarterly update and reports completion to the management team. |
| **HR / People & Culture** | Books the onboarding training for each new employee and subcontractor, keeps the training register, and sends reminders. |
| **Group managers and unit heads** | Make sure their people complete the training, and follow up anyone who has not. |
| **Engagement lead** (for engagements with customer security requirements) | Gives the engagement briefing (6.4) before a person gets access to the customer's data. |
| **Everyone** | Completes the training on time, applies it, and reports incidents and weaknesses at once. |

## 4. The training

The course is **SW-ISMS-TRN-001 Information Security Awareness Training**, a slide deck kept in the IMS. It covers the
following:

1. Why security matters at Swedwise: customers' data, customers' requirements and the group's policies.
2. Our rules in short: personal accounts, MFA, work computers only, central storage, approved software, classification.
3. Phishing and social engineering, including MFA prompts you did not start.
4. Passwords and the password manager.
5. The work computer: encryption, updates, screen lock, no USB storage where it is blocked, and what to do with a lost
   device.
6. Customer data and personal data: where it may be stored, what may not go into AI tools, and GDPR in brief.
7. Engagements with customer security requirements.
8. Working remotely and travelling.
9. Incidents: what to report, to whom and how fast.

The **quiz** has ten questions; eight correct answers pass, and a person may retake it as often as needed. The
**acknowledgement** confirms that the person has read the Information Security Policy, the IT Policy and the
Acceptable Use Policy. Both are a Microsoft Form, owned by the CISO.

## 5. When

| What | Who | When | Length |
|---|---|---|---|
| **Onboarding training** | Every new employee and subcontractor | In the first week, **before access to any customer's data** | 45 min |
| **Annual training** | Everyone | One live session in **November** every year (after the group's policies are adopted in November); everyone completes it by **30 November** | 60 min |
| **Quarterly update** | Everyone | At the staff meeting in **February, May and September**, plus a Slack post the same day | 10 min |
| **Engagement briefing** | Everyone joining an engagement with customer security requirements | Before access to the customer's data, and again every year at the annual training | 15 min |
| **Extra update** | Everyone, or the people affected | Within **two weeks** of a significant incident, a new threat or a change in policy | 10–15 min |

The topics of the quarterly updates rotate: phishing and MFA (February), customer and personal data (May), working
remotely and travelling (September). The CISO chooses another topic when an incident or threat calls for it.

**First run:** the first annual session is held before 2026-11-22, the date of the commitment to Salesforce.

## 6. Where and how

### 6.1 Onboarding

1. HR books the onboarding training in the new person's first week and tells the group manager.
2. The person goes through SW-ISMS-TRN-001 with the CISO or their group manager, in person or on Teams.
3. The person takes the quiz and gives the acknowledgement in Microsoft Forms.
4. HR records the completion in the training register (6.5).
5. Only then is the person added to an engagement group (`sw-eng-*`) or given access to a customer's data.

### 6.2 Annual training

1. By **1 October**, the CISO updates SW-ISMS-TRN-001 with the year's policy changes, incidents (anonymised) and
   current threats, and versions it under document control.
2. By **1 November**, the CISO books the session for everyone (`sw-all`): at the office and on Teams at the same time,
   recorded.
3. The session is held, and attendance is taken from the Teams attendance report and a list in the room.
4. Everyone takes the quiz and gives the acknowledgement in Microsoft Forms by 30 November. Anyone who missed the
   session watches the recording first.
5. HR records completion in the register.

### 6.3 Quarterly update

The CISO, or someone the CISO asks, presents the topic at the staff meeting and posts a short summary in Slack the
same day. HR notes the date and topic in the register; individual attendance is not recorded.

### 6.4 Engagement briefing

For an engagement whose customer has security requirements (Salesforce among them), the engagement lead goes through
the following:

- the customer's requirements;
- that the person's computer must be enrolled in Intune and compliant;
- that writing to USB storage is blocked;
- that DLP applies to e-mail, SharePoint and OneDrive, including files shared in Teams (not to Teams chat
  messages);
- that the customer's data stays in the systems the customer and Swedwise have approved.

The person confirms in Microsoft Forms, and HR records it.

### 6.5 The training register

The register records the person, the training (onboarding, annual, engagement), the date, the quiz result and the
acknowledgement. It lives in the Management System area, in a list only HR, the CISO and management can edit; when
Swedwise's xECM is in production, it moves to each person's employee workspace. Records are kept for **three years**.
The register is the evidence for audits and for customers who ask.

### 6.6 Not completed

- **14 days after the deadline:** HR reminds the person and tells the group manager.
- **30 days after the deadline:** the person is removed from engagement groups (`sw-eng-*`) and loses access to
  customers' data until the training is complete. The group manager tells the unit head.
- Long leave: the training is completed within two weeks of returning.

## 7. Reporting incidents (what the training teaches)

Report a suspected incident, a lost device or a mistake **at once** to the CISO, by Slack or phone. Report anything
involving personal data to the Privacy Lead as well. Reporting an honest mistake has no consequences; hiding one does.
The rest is handled under the Incident Management Procedure (SW-ISMS-PRO-001).

## 8. Measures

| Measure | Target |
|---|---|
| Onboarding training completed before access to customer data | 100 % |
| Annual training completed by 30 November | 100 % |
| Quiz passed on the first attempt | ≥ 85 % |
| Engagement briefing completed before access | 100 % |

The CISO reports the measures to the management team after each annual training and in the management review.

## 9. Not yet in place

- **Phishing simulation:** Swedwise has no simulation tool today. Microsoft Defender for Office 365 Plan 2 or an
  external service are the options; the CISO proposes one in the 2027 budget.
- **A security mailbox:** the Incident Management Procedure names security@swedwise.se, which does not exist yet. Until
  it does, incidents go to the CISO directly (section 7).

## 10. Related documents

- SW-ISMS-POL-001 Information Security Policy
- SW-ISMS-POL-003 Acceptable Use Policy
- SW-ISMS-POL-006 HR Security Policy
- SW-ISMS-PRO-001 Incident Management Procedure
- SW-IMS-PRO-012 Competence and Training Procedure
- SW-ISMS-TRN-001 Information Security Awareness Training
- Storskogen Information Security Policy and IT Policy, 2024-11-06

## 11. Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | [TBD] | [TBD] | Initial procedure (generic) | [TBD] |
| 1.1 | 2026-11-05 | Claude for the IMS Owner | Rewritten for Swedwise: when, where and how; Microsoft Forms and the training register in place of an LMS; engagement briefing; phishing simulation and the security mailbox listed as not yet in place | [TBD – CEO] |
