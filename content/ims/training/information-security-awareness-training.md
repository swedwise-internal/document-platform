---
document_id: SW-ISMS-TRN-001
title: Information Security Awareness Training
doc_type: training
version: "1.1"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "2027-10-01"
standard:
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-ISMS-POL-001
  - SW-ISMS-POL-003
  - SW-IMS-POL-007
  - SW-ISMS-PRO-001
  - SW-ISMS-PRO-009
training:
  course_id: security-awareness-annual
  duration: 60
  target_audience: [all_staff, contractors, new_hires]
  required_for: [new_hire, annual_refresh]
  assessment:
    enabled: true
    tool: Microsoft Forms
    passing_score: 80
    attempts_allowed: unlimited
    question_count: 10
  validity_period: 12
---

# Information Security Awareness Training

This is the course that the Security Awareness Training Procedure (SW-ISMS-PRO-009) runs: at onboarding, every
November for everyone, and as the base for the quarterly updates. It is held as a slide deck of 12 slides, with
speaker notes, in the Swedwise PowerPoint template 2026 v.1. The text below is the deck's content, under document
control here; the deck file itself is kept in the Management System area in SharePoint with the session recording
(it is not stored in this repository).

The content rests on the Storskogen group policies adopted 2024-11-06, the Information Security Policy
(SW-ISMS-POL-001), the IT Policy, the Acceptable Use Policy (SW-ISMS-POL-003), the classification scheme, the AI and
Generative AI Policy (SW-IMS-POL-007) and the Password and Authentication Guideline.

**Length:** 60 minutes live (45 minutes at onboarding). **Pass:** 8 of 10 in the quiz, any number of retakes, plus
the acknowledgement.

## Slides

### 1. Security awareness 2026

*Speaker notes:* 60 minutes: why it matters, our rules, the threats we actually see, customer data, and what to do
when something goes wrong. A quiz and an acknowledgement in Microsoft Forms follow.

### 2. Why this matters

- We work inside our customers' systems and hold their data: a mistake on our side is their incident.
- Customers require it: Salesforce, public buyers and others assess our security before we start.
- The Storskogen group's Information Security Policy requires training for everyone, every year.
- Swedwise is working towards ISO/IEC 27001 certification during 2027.
- Most attacks start with a person: a click, a reused password, an approved MFA prompt.

*Speaker notes:* Make it concrete: name the customer assessments we answered this year.

### 3. Our rules in short

- **Personal accounts:** your own account, never shared. MFA on everything reachable from the internet.
- **Work computer:** company work only on your Swedwise computer, never on a private device.
- **Store centrally:** SharePoint, OneDrive, Teams and approved systems; not on the desktop, not in private clouds.
- **Approved software:** install only what is approved; ask your manager first.

*Speaker notes:* These come from the Information Security Policy, the IT Policy and the Acceptable Use Policy; read
all three.

### 4. Phishing: the number one way in

Signs: urgency, threats or a too-good offer; a sender or link that is almost right (`swedvvise.se`); unexpected
invoices, shared files or password resets; a request to pay, change bank details or send data.

What to do: do not click, open or reply; check with the sender another way (phone, Slack); report it to the CISO,
then delete it. Clicked already? Report at once: speed matters more than blame.

*Speaker notes:* Show a real example from our own inboxes (anonymised).

### 5. MFA prompts and passwords

- Never approve an MFA prompt you did not start yourself; report it: someone has your password.
- Use a password manager; one unique password per service.
- Never share a password or a one-time code, not even with colleagues or "IT support".
- New or reset credentials are sent securely, and changed at first sign-in.
- Shared or system accounts only by exception, approved by the IT Manager.

*Speaker notes:* MFA fatigue attacks: repeated prompts until someone taps "approve".

### 6. Your work computer

- **Encrypted and updated:** disk encryption on, updates installed, antimalware running. Restart when asked.
- **Lock it:** Windows+L every time you leave it. Never leave it in a car.
- **USB and loss:** no company data on USB storage; blocked on engagement devices. Lost or stolen? Report it at once.

*Speaker notes:* Devices on engagements with customer requirements are enrolled in Intune: USB writing is blocked
and compliance is checked.

### 7. Customer data and personal data

Classification: **Public** (only what is approved for release), **Internal** (the default for our documents),
**Confidential** (customer data and personal data, always), **Restricted** (the most sensitive; named people only).

Rules: customer data stays in the customer's or our approved systems; send confidential information encrypted, to
named recipients; AI: ChatGPT Business only, with data minimisation, and no customer or personal data in non-approved
tools; personal data: only what the task needs, deleted when done.

*Speaker notes:* Classification policy and AI policy. When in doubt: Confidential.

### 8. Engagements with customer security requirements

- Some customers, Salesforce among them, require extra controls before we may touch their data.
- Your computer must be enrolled in Intune and compliant before you get access.
- Writing to USB storage is blocked; DLP checks e-mail, SharePoint, OneDrive and Teams.
- Follow the customer's own security rules as well as ours.
- The engagement lead gives you a short briefing before you start.

*Speaker notes:* The engagement briefing is recorded in the training register.

### 9. Working remotely and travelling

- Use a trusted network; on public Wi-Fi use the phone's hotspot.
- Sit so nobody can read your screen; no customer names in public conversations.
- Keep the computer with you: never in checked luggage or a parked car.
- Print as little as possible; shred what you print.
- The same rules apply at a customer's site, plus the customer's.

*Speaker notes:* Remote working guideline.

### 10. Incidents: report at once

What to report: a click on a suspicious link or attachment; an MFA prompt you did not start; a lost or stolen device;
data sent to the wrong person, or anything that feels wrong.

How: tell the CISO at once, by Slack or phone; personal data involved: tell the Privacy Lead too. Personal data
breaches go to IMY within 72 hours; customers are told without delay. Honest mistakes have no consequences; hiding
them does.

*Speaker notes:* Incident Management Procedure SW-ISMS-PRO-001.

### 11. What happens now

- **Quiz:** ten questions in Microsoft Forms; eight to pass. Retake as often as you need.
- **Acknowledgement:** confirm you have read the Information Security, IT and Acceptable Use policies.
- **By 30 November:** HR records it in the training register. Quarterly updates follow in February, May and
  September.

*Speaker notes:* Share the Forms link in the Teams chat now.

### 12. Report it at once

Questions? When something feels wrong: report it at once.

*Speaker notes:* Close. Remind: the recording and the slides are in the IMS.

## Quiz and acknowledgement (Microsoft Forms)

Set up as a Microsoft Forms quiz: one correct answer per question, 8 of 10 to pass, retakes allowed, sign-in
required so that names are recorded. The correct answer is marked ✔.

1. You get an MFA prompt on your phone that you did not start. What do you do?
   Approve it, it is probably a delay · ✔ Deny it and report it to the CISO at once: someone has your password ·
   Ignore it
2. An e-mail from "swedvvise.se" asks you to open a shared invoice. What is the safest step?
   Open it to see if it is real · Reply and ask if it is real · ✔ Do not open it; check with the sender another way
   and report it
3. You clicked a link that turned out to be suspicious. What now?
   Wait and see if anything happens · ✔ Report it to the CISO at once · Run a virus scan and say nothing
4. Where may you store customer documents?
   On your desktop for quick access · In your private Dropbox · ✔ In SharePoint, OneDrive, Teams or the customer's
   approved system
5. What is the classification of customer data by default?
   Internal · Public · ✔ Confidential
6. May you paste a customer's contract into a free AI tool to summarise it?
   Yes, if you delete the chat afterwards · ✔ No: only ChatGPT Business, with data minimisation, and never customer or
   personal data in non-approved tools · Yes, if the customer's name is removed
7. Your work computer is stolen from your car. What do you do first?
   Buy a new one · ✔ Report it to the CISO at once, so that it can be locked and wiped · Report it at the next staff
   meeting
8. You join an engagement whose customer has security requirements. What must be in place before you get access to
   the customer's data?
   Nothing, the customer handles it · ✔ Your computer is enrolled in Intune and compliant, and you have had the
   engagement briefing · A private USB stick for backups
9. A personal data breach has happened. Within how long must the supervisory authority (IMY) be notified?
   7 days · ✔ 72 hours · 30 days
10. A colleague asks for your password to finish a task while you are away. What do you do?
    Give it and change it afterwards · ✔ Never share it; the colleague asks for their own access · Write it on a note

**Acknowledgement** (last question, required): ✔ I have read and understood the Information Security Policy, the IT
Policy and the Acceptable Use Policy, and I will report incidents at once.

## Before the first session: what the deck claims and what is in place

The training teaches rules; it must not tell people that a control exists when it does not. Measured in CompanyIT
2026-11-04 (controls page, read 13:26) and in the IMS:

| Slide | Claim in the deck | State 2026-11-05 | Change before the session |
|---|---|---|---|
| 5 | "Use the password manager" | No company password manager; the Password Guideline names 1Password Business as "TBD" | Text above says "a password manager"; decide one, or keep the general wording in the deck |
| 6 | "BitLocker on, Defender running" | Not measurable: no Intune or Defender for Business on the current licences | Text above states the rule (encryption, antimalware); the deck should do the same until the controls are measured |
| 6, 8, quiz 8 | Intune enrolment, USB block and DLP on engagement devices | Committed to Salesforce for 2026-11-22 (remediation plan items 1–3), not yet built | Hold the session after these are in place, or say "from 22 November" in the deck |
| 9 | "the VPN" | No Swedwise VPN exists | Text above drops the VPN; the deck should too |
| 3 | "MFA on everything reachable from the internet" | A rule, and correct as a rule; MFA is not yet required at every sign-in (only at medium or high sign-in risk) | None for the deck; the gap is planned in CompanyIT |

## Document control

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | [TBD] | [TBD] | Initial generic course (LMS, 9 modules, 15 questions) | [TBD] |
| 1.1 | 2026-11-05 | Claude for the IMS Owner | Replaced by the Swedwise deck of November 2026 (12 slides), the Microsoft Forms quiz (10 questions, 8 to pass) and the acknowledgement; the claims that do not match the measured state are listed for correction | [TBD – CEO] |
