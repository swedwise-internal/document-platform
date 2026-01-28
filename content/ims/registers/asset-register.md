---
document_id: SW-ISMS-REG-001
title: Information Asset Register
doc_type: form
version: "1.0"
status: draft
classification: confidential
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-ISMS-POL-001
  - SW-IMS-PRO-002
  - SW-IMS-REG-001
---

# Information Asset Register

## Purpose

This Information Asset Register provides a comprehensive inventory of all information assets within Swedwise AB. The register supports:

- Risk assessment and treatment (ISO 27001 Clause 6.1.2)
- Asset ownership and accountability (ISO 27001 A.5.9)
- Control implementation and monitoring (ISO 27001 Clause 8.1)
- Business impact analysis and continuity planning

## Scope

This register covers all information assets that support Swedwise AB's business operations across all three offices (Karlstad HQ, Stockholm, Uddevalla), including:

- Physical and digital information assets
- Software applications and systems
- Hardware and infrastructure
- Cloud services and external dependencies
- Personnel with privileged access

## Asset Classification Levels

| Level | Description | Examples |
|-------|-------------|----------|
| **Public** | Information intended for public disclosure | Marketing materials, public website content |
| **Internal** | Information for internal use only | Internal procedures, general company information |
| **Confidential** | Sensitive information requiring protection | Customer data, contracts, financial records |
| **Restricted** | Highly sensitive, limited access required | Trade secrets, security credentials, personal data |

## Criticality Ratings

| Rating | Impact of Loss/Unavailability | Recovery Time |
|--------|------------------------------|---------------|
| **Low** | Minor inconvenience, no business impact | > 7 days |
| **Medium** | Moderate impact on operations | 3-7 days |
| **High** | Significant impact, revenue/reputation at risk | 24-72 hours |
| **Critical** | Severe impact, business operations stopped | < 24 hours |

## CIA Requirements Scale

For each asset, rate Confidentiality, Integrity, and Availability needs:

- **1 (Low)**: Minimal impact if compromised
- **2 (Medium)**: Moderate impact if compromised
- **3 (High)**: Significant impact if compromised
- **4 (Critical)**: Severe impact, regulatory/legal consequences

---

## 1. Information Assets

| Asset ID | Asset Name | Description | Location | Owner | Custodian | Classification | Criticality | C | I | A | Related Risks | Last Reviewed |
|----------|------------|-------------|----------|-------|-----------|----------------|-------------|---|---|---|---------------|---------------|
| A-INFO-001 | Customer Database | CRM system containing customer contact information, contracts, and history | Salesforce Cloud | Customer Success Lead | IT Manager | Confidential | Critical | 4 | 3 | 4 | R-001, R-005 | [TBD] |
| A-INFO-002 | Employee Personal Data | HR records including employment contracts, salary data, personal information | [TBD - HR System] | HR Manager | HR Manager | Restricted | High | 4 | 3 | 2 | R-002 | [TBD] |
| A-INFO-003 | Financial Records | Accounting records, invoices, tax documents, bank statements | [TBD - Accounting System] | CFO | Finance Manager | Confidential | High | 3 | 4 | 2 | R-003 | [TBD] |
| A-INFO-004 | Customer Contracts | Signed agreements, NDAs, SLAs, procurement documents | SharePoint/OneDrive | Legal/CEO | Customer Success Lead | Confidential | High | 3 | 4 | 3 | R-004 | [TBD] |
| A-INFO-005 | Project Documentation | Project plans, technical specifications, delivery documentation | [TBD - Project System] | PMO Lead | Project Managers | Confidential | Medium | 3 | 3 | 2 | R-006 | [TBD] |
| A-INFO-006 | Source Code Repositories | Custom development code, scripts, configurations | [TBD - Git/Azure DevOps] | CTO | Development Lead | Confidential | High | 3 | 4 | 3 | R-007 | [TBD] |
| A-INFO-007 | System Credentials | Passwords, API keys, certificates, encryption keys | [TBD - Password Manager] | CISO | IT Manager | Restricted | Critical | 4 | 4 | 4 | R-008 | [TBD] |
| A-INFO-008 | IMS Documentation | Policies, procedures, guidelines | SharePoint | IMS Owner | CISO | Internal | Medium | 2 | 3 | 2 | R-010 | [TBD] |
| A-INFO-009 | Backup Data | System backups, data archives | [TBD - Backup Location] | IT Manager | IT Manager | Confidential | Critical | 3 | 4 | 4 | R-017, R-018 | [TBD] |
| A-INFO-010 | SaaS Customer Data | Data processed for SaaS service customers | [TBD - SaaS Platform] | Product Owner | CTO | Restricted | Critical | 4 | 4 | 4 | R-019, R-020 | [TBD] |

---

## 2. Software Assets

| Asset ID | Asset Name | Description | Location | Owner | Custodian | Classification | Criticality | C | I | A | Last Reviewed |
|----------|------------|-------------|----------|-------|-----------|----------------|-------------|---|---|---|---------------|
| A-SOFT-001 | Microsoft 365 Suite | Email, Office apps, OneDrive, SharePoint, Teams | Microsoft Cloud | IT Manager | IT Manager | Internal | Critical | 2 | 3 | 4 | [TBD] |
| A-SOFT-002 | Salesforce CRM | Customer relationship management system | Salesforce Cloud | Customer Success Lead | IT Manager | Confidential | Critical | 4 | 3 | 4 | [TBD] |
| A-SOFT-003 | Azure Cloud Platform | Cloud infrastructure for hosting and services | Microsoft Azure | CTO | IT Manager | Confidential | Critical | 3 | 4 | 4 | [TBD] |
| A-SOFT-004 | [TBD - HR System] | Human resources management system | [TBD] | HR Manager | IT Manager | Restricted | High | 4 | 3 | 2 | [TBD] |
| A-SOFT-005 | [TBD - Accounting System] | Financial management and accounting | [TBD] | CFO | Finance Manager | Confidential | High | 3 | 4 | 3 | [TBD] |
| A-SOFT-006 | [TBD - Password Manager] | Enterprise password management solution | [TBD] | CISO | IT Manager | Restricted | Critical | 4 | 4 | 4 | [TBD] |
| A-SOFT-007 | [TBD - Backup Solution] | Data backup and recovery system | [TBD] | IT Manager | IT Manager | Confidential | Critical | 3 | 4 | 4 | [TBD] |
| A-SOFT-008 | Active Directory / Entra ID | Identity and access management | Microsoft Cloud | IT Manager | IT Manager | Restricted | Critical | 4 | 4 | 4 | [TBD] |
| A-SOFT-009 | [TBD - SaaS Platform] | New SaaS service offering platform | [TBD] | Product Owner | CTO | Confidential | Critical | 4 | 4 | 4 | [TBD] |

---

## 3. Hardware Assets

| Asset ID | Asset Name | Description | Location | Owner | Custodian | Classification | Criticality | Quantity | Last Reviewed |
|----------|------------|-------------|----------|-------|-----------|----------------|-------------|----------|---------------|
| A-HARD-001 | Employee Laptops | Corporate workstations (Windows/Mac) | All offices + remote | IT Manager | Individual employees | Internal | High | ~35 | [TBD] |
| A-HARD-002 | Mobile Devices | Smartphones and tablets | All locations | IT Manager | Individual employees | Internal | Medium | [TBD] | [TBD] |
| A-HARD-003 | Network Equipment | Routers, switches, firewalls, WiFi access points | Karlstad, Stockholm, Uddevalla | IT Manager | IT Manager | Internal | High | [TBD] | [TBD] |
| A-HARD-004 | Office Printers/MFDs | Multifunction devices | All offices | Office Manager | Office staff | Internal | Low | [TBD] | [TBD] |

---

## 4. Services

| Asset ID | Asset Name | Description | Provider | Owner | Custodian | Classification | Criticality | Last Reviewed |
|----------|------------|-------------|----------|-------|-----------|----------------|-------------|---------------|
| A-SERV-001 | Microsoft Azure | Cloud infrastructure and platform services | Microsoft | CTO | IT Manager | Confidential | Critical | [TBD] |
| A-SERV-002 | Microsoft 365 Services | Cloud productivity and collaboration | Microsoft | IT Manager | IT Manager | Internal | Critical | [TBD] |
| A-SERV-003 | Salesforce Platform | CRM cloud service | Salesforce | Customer Success Lead | IT Manager | Confidential | Critical | [TBD] |
| A-SERV-004 | Internet Connectivity | Business internet access | [TBD - ISPs per office] | IT Manager | IT Manager | Internal | Critical | [TBD] |
| A-SERV-005 | [TBD - Backup Service] | Cloud backup and disaster recovery | [TBD] | IT Manager | IT Manager | Confidential | Critical | [TBD] |

---

## 5. People (Privileged Roles)

| Asset ID | Role Name | Description | Location | Owner | Competency Required | Classification | Last Reviewed |
|----------|-----------|-------------|----------|-------|---------------------|----------------|---------------|
| A-PEOPLE-001 | IT Administrators | Personnel with system administration rights | All offices | IT Manager | Technical skills, security training | Restricted | [TBD] |
| A-PEOPLE-002 | Development Team | Source code and system access | Karlstad/Remote | CTO | Development skills, secure coding | Confidential | [TBD] |
| A-PEOPLE-003 | HR Personnel | Access to employee personal data | [TBD] | HR Manager | HR competency, GDPR training | Restricted | [TBD] |
| A-PEOPLE-004 | Finance Personnel | Access to financial systems and data | [TBD] | CFO | Financial skills, fraud awareness | Confidential | [TBD] |
| A-PEOPLE-005 | Customer Success Team | Customer data access | All offices | Customer Success Lead | Customer handling, confidentiality | Confidential | [TBD] |
| A-PEOPLE-006 | CISO | Information security management authority | Karlstad | CEO | Security management, ISO 27001 | Restricted | [TBD] |

---

## Asset Register Maintenance

### Responsibilities

| Role | Responsibility |
|------|----------------|
| **CISO** | Overall register ownership, annual review, approval |
| **Asset Owners** | Define asset criticality, classification, review entries quarterly |
| **IT Manager** | Maintain technical asset details, update location and configuration |
| **Asset Custodians** | Report changes, incidents, or decommissioning |

### Review Cycle

- **Quarterly**: Asset owners review their assigned assets
- **Semi-Annual**: CISO reviews high/critical assets
- **Annual**: Complete register review and validation
- **Ad-hoc**: When new assets acquired, assets decommissioned, or significant changes occur

---

## Related Documents

- **SW-IMS-PRO-002**: Risk Management Procedure
- **SW-ISMS-POL-001**: Information Security Policy
- **SW-IMS-REG-001**: Integrated Risk Register

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | CISO | Initial template creation | [TBD] |

**Next Review Date**: [TBD - typically 12 months from effective date]
