---
document_id: SW-IMS-POL-007
title: AI and Generative AI Policy
doc_type: policy
version: "1.0"
status: published
classification: internal
owner: "[TBD: the AI governance role, section 12]"
effective_date: "2026-04-21"
review_date: "2027-04-21"
standard:
  - ISO/IEC 42001
  - ISO 27001
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
  - SW-ISMS-POL-003
  - SW-IMS-REG-010
---

# AI and Generative AI Policy

This is Swedwise's AI policy, version 1.0 of 21 April 2026, as published in *Swedwise interndokumentation*,
`Dokument/AI in Swedwise/Swedwise Generative AI Policy` (PDF and Word). Sections 1–12 carry its text
unchanged. Its practical companion is *ChatGPT Business — Practical and Responsible Usage* (version 1.0,
2 March 2026, same folder). Section 13 places the policy in the IMS and lists what ISO/IEC 42001 asks of
an AI policy that version 1.0 does not yet say. Section 13 is not part of the published policy.

## 1. Purpose

The purpose of this policy is to establish clear principles and rules governing the use of Artificial
Intelligence (AI) and more specifically Generative AI (GenAI) technologies within Swedwise. The policy aims to
enable responsible innovation and increase productivity while safeguarding client confidentiality, company
information, personal data, and compliance with applicable laws and contractual obligations.

Swedwise recognises that AI technologies, including large language models and AI-assisted productivity tools,
can significantly enhance efficiency, quality, and competitiveness. At the same time, such technologies
introduce risks related to information security, data protection, intellectual property, regulatory
compliance, and professional accountability. This policy defines how these risks shall be managed.

## 2. Scope and Applicability

This policy applies to all employees, consultants, contractors, and other individuals acting on behalf of
Swedwise. It covers the use of AI and Generative AI tools in all work-related contexts, regardless of whether
such tools are accessed via web interfaces, integrated applications, APIs, or embedded functionality within
other software platforms.

The policy applies to, but is not limited to:

- ChatGPT Business accounts provided by Swedwise
- Microsoft Copilot and other AI features embedded in Microsoft products
- Publicly available AI services (e.g., free versions of ChatGPT, Gemini, Claude, Perplexity, etc.)
- AI-powered browser extensions
- AI functionality integrated into SaaS platforms
- AI tools used in client environments

The policy applies regardless of whether the AI tool is accessed from a company-managed or personal device,
provided it is used for work-related purposes.

## 3. Approved and Non-Approved AI Tools

Swedwise provides ChatGPT Business accounts as the primary approved Generative AI platform for professional
use and employees are expected to prioritise the use of ChatGPT Business for work-related GenAI usage where
possible.

Other AI tools that are not explicitly approved by Swedwise are considered non-sanctioned tools. Such tools may
only be used for work-related purposes if no confidential information, personal data, client data, proprietary
material, or sensitive business information is entered into the system.

Under no circumstances may non-approved AI tools be used to process client contracts, non-public financial
data, internal steering documents, technical architecture documentation, source code, access credentials, or
any form of personal data subject to GDPR or similar regulations.

If there is any uncertainty regarding whether a tool is approved or whether certain information may be
processed, employees must consult a member of the Leadership Team.

## 4. Information Security and Confidentiality

All employees remain fully responsible for protecting Swedwise and client information when using AI tools.
The use of AI does not reduce or transfer the employee's professional, contractual, or legal obligations.

Confidential information, including but not limited to client data, internal business strategies, financial
information, pricing models, intellectual property, and technical configurations, must be handled with the
same level of care as in any other digital system.

Even when using ChatGPT Business, employees shall apply the principle of data minimisation. Information
entered into AI tools must be limited to what is strictly necessary for the intended purpose. Wherever
possible, identifiable information shall be anonymised, pseudonymised or, as a minimum requirement, replaced
with generic placeholders. Full documents, contracts, or datasets should not be uploaded unless there is a
clear and legitimate business need and no reasonable alternative.

API keys, passwords, access tokens, and similar credentials must never be entered into any AI system.

## 5. Personal Data and GDPR Compliance

Swedwise is committed to complying with the General Data Protection Regulation (GDPR) and other applicable
data protection legislation. The use of AI tools must always be aligned with these obligations.

Employees must not enter personal data into non-approved AI systems under any circumstances. Even when using
approved systems such as ChatGPT Business, personal data processing must be limited, proportionate, and
lawful. Sensitive personal data, including health information, salary information, performance evaluations,
or similar data categories, must not be processed in AI systems without explicit authorisation from
management.

AI tools must not be used as the sole basis for decisions that significantly affect individuals, including
employment-related decisions or client-impacting determinations. Human oversight and accountability must
always be maintained.

## 6. Acceptable Use

AI tools may be used to support productivity, quality improvement, and innovation across Swedwise's
operations. Acceptable use cases include drafting and improving written communications, structuring
proposals, generating workshop materials, summarising information, brainstorming ideas, creating
documentation, assisting with research, explaining technical concepts, and supporting software development
activities.

However, AI tools must not be used to make binding commitments to clients, provide unreviewed legal or
regulatory advice, generate misleading or deceptive content, or replace professional expertise and judgment.

All AI-generated content must be reviewed, validated, and approved by the responsible employee before being
shared internally or externally. The employee remains fully accountable for the accuracy, legality, quality,
and appropriateness of the final output.

## 7. Software Development and Technical Use

When AI tools are used in connection with software development, special care must be taken to protect
proprietary source code and client intellectual property. The following rules apply:

- **Prohibition of Sensitive Data:** Client-specific code, confidential architecture designs, or
  security-sensitive configurations must not be entered into non-approved AI tools.
- **Credential Scrubbing:** When using approved tools, employees must remove secrets, credentials (such as
  API keys), and sensitive identifiers before submitting code or technical material.
- **Validation and Testing:** AI-generated code must always be reviewed, tested, and validated before being
  deployed in any internal or client-facing environment.
- **License Compliance:** Employees must ensure that AI-generated code does not infringe upon third-party
  intellectual property or introduce "copyleft" licenses (e.g., GPL) that could legally require Swedwise to
  disclose its own proprietary source code.
- **Reference Tracking:** Where available (e.g., in tools like GitHub Copilot), employees should enable
  "Suggestions matching public code" filters to avoid unintended replication of copyrighted code.
- **Security Scanning:** Any code produced with AI assistance should undergo the same security and
  vulnerability scanning as human-written code to prevent the introduction of common security flaws.

## 8. Financial Controls and Additional Costs

Employees may not independently purchase AI subscriptions, APIs, add-ons, or additional AI services using
company funds without prior approval from their direct manager.

AI services that incur usage-based costs, API consumption charges, or additional licensing fees must be
approved before being used in client engagements or internal systems. The integration of AI tools into
production environments, client systems, or automated workflows requires prior review and approval from the
Project Manager, Technical Project Lead and often also the Leadership Team within Swedwise.

## 9. Intellectual Property and Copyright

Employees must ensure that AI-generated content does not infringe upon third-party intellectual property
rights. AI tools must not be used to intentionally replicate copyrighted materials, proprietary frameworks,
or protected content.

All deliverables to clients must meet Swedwise's professional standards and contractual obligations,
regardless of whether AI has been used in their preparation.

## 10. Accountability and Human Oversight

AI systems are tools that support human work; they do not replace professional responsibility. Employees are
fully accountable for all outputs generated with AI assistance.

AI-generated material may contain factual inaccuracies, outdated information, fabricated references,
incomplete reasoning, or technical errors. It is the responsibility of the employee to verify the
correctness, relevance, and reliability of any AI-assisted output before use.

## 11. Incident Management and Violations

Any suspected or actual incident involving inappropriate data sharing, accidental disclosure, or misuse of AI
tools must be reported immediately.

- **Interim Reporting Channel:** Until the formal automated reporting process is finalised, all reports must
  be sent via email to a member of the Leadership Team or your direct manager.
- **Process Under Development:** Swedwise is currently developing a dedicated Incident Management Framework.
  This will include specialised reporting tools and standardised response procedures for AI Incidents to
  better support employees and safeguard company data.

## 12. Governance and Review

Swedwise shall designate a responsible role for AI governance. This role is responsible for maintaining this
policy, monitoring regulatory developments, evaluating new AI tools, and ensuring continued alignment with
legal and contractual requirements.

This policy shall be reviewed at least annually or whenever significant technological, regulatory, or
organisational changes occur.

## 13. Place in the IMS (not part of the published policy)

### 13.1 Links

| Policy section | IMS document |
|---|---|
| 3, 6 (approved tools, acceptable use) | Acceptable Use Policy SW-ISMS-POL-003, 7.3, which now points here |
| 4 (confidentiality, data minimisation) | Classification Policy and Information Classification Guideline |
| 5 (personal data) | Data Protection Policy; records of processing (an entry for ChatGPT Business is needed) |
| 7 (software development) | Secure Development Guideline |
| 8 (purchases) | Procurement Policy |
| 11 (incidents) | Incident management procedure: AI incidents are reported there, which replaces the interim e-mail channel |
| Obligations | Compliance obligations register SW-IMS-REG-010, CO-020 (AI literacy, deployer) and CO-021 (provider) |

### 13.2 What ISO/IEC 42001 asks of an AI policy that version 1.0 does not say yet

Swedwise has not yet decided to certify to ISO/IEC 42001 (SW-IMS-MAN-004, proposal in 4.1.5). If it does, the
next version needs these additions. The clause numbers and titles below are the standard's public headings;
the text of the standard is not reproduced.

| ISO/IEC 42001 | Gap in version 1.0 |
|---|---|
| 5.2 AI policy | No commitment to meet applicable requirements or to continually improve the AI management system; no framework for AI objectives |
| 5.3 Roles, responsibilities and authorities | The AI governance role (section 12) is not yet named |
| 6.1.2–6.1.4 AI risk and AI system impact assessment | Not covered. The policy governs use of tools, but not the AI systems Swedwise builds (Matrix agents, Swedwise Certify) |
| 6.2 AI objectives | None set |
| 7.2–7.3 Competence and awareness | No AI literacy training is named. The AI Act requires it of deployers from 2025-02-02 (CO-020) |
| 8.4 / Annex A.6 AI system life cycle | Not covered for systems Swedwise builds |
| Annex A.10 Third-party relationships | The approved-tool list holds one tool. The suppliers behind AI features (OpenAI, Microsoft, Anthropic, OpenText Aviator) are not assessed as AI suppliers |

## Revision history

| Version | Date | Author | Changes | Approved by |
|---|---|---|---|---|
| 1.0 | 2026-04-21 | Swedwise | First version, published in Swedwise interndokumentation | Not recorded in the sources read (2026-11-02) |
| 1.0 (IMS copy) | 2026-11-02 | IMS Owner (draft prepared for review) | Taken into the IMS unchanged; section 13 added | [TBD] |
