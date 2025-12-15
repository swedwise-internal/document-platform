---
document_id: SW-ISMS-ROLE-002
title: Asset Owner
doc_type: role
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001
  - SW-ISMS-POL-003
  - SW-IMS-PRO-007
  - SW-ISMS-REGISTER-001
---

# Role: Asset Owner

**Document ID**: SW-ISMS-ROLE-002-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Reports to**: Line Manager (with matrix reporting to CISO on security matters)
**Current Assignment**: [Multiple - Generic role assigned based on asset responsibility]

## Role Summary

The Asset Owner is responsible for the protection, appropriate use, and lifecycle management of specific information assets within their area of responsibility. Asset Owners ensure that information assets are properly classified, secured, and used in accordance with Swedwise's information security policies and procedures.

**This is a generic role** - multiple individuals across Swedwise are Asset Owners for different information assets (e.g., customer data, HR records, financial information, intellectual property, technical documentation, SaaS service data).

## Role Type and Assignment

### Generic Role
- **Multiple Asset Owners exist across the organization**
- Asset ownership is assigned based on business responsibility for the information
- Each Asset Owner is responsible for specific assets within their domain
- Asset Owner designation is documented in the Asset Register

### Typical Asset Owner Assignments

| Asset Category | Typical Asset Owner |
|----------------|---------------------|
| **Customer Data** | Customer Success Manager or Account Manager |
| **HR/Personnel Records** | HR Manager |
| **Financial Information** | CFO or Finance Manager |
| **Intellectual Property** | CTO or Development Lead |
| **Sales/CRM Data** | Sales Manager |
| **SaaS Service Data** | Service Delivery Manager |
| **Technical Documentation** | Technical Lead or Architect |
| **Marketing Materials** | Marketing Manager |
| **Contracts and Legal** | CEO or Legal Counsel |
| **Source Code Repositories** | Development Lead |

## Time Allocation

- **Asset Classification and Review**: 2-5% of working time
- **Access Authorization**: Variable (as requests arise)
- **Incident Response**: Variable (when assets are affected)
- **Annual Asset Review**: 3-5 hours per year

Asset ownership responsibilities are **integrated into the individual's primary role** and do not constitute a separate position.

## Key Responsibilities

### 1. Asset Identification and Registration

- Identify information assets within area of responsibility
- Ensure assets are registered in the Asset Register
- Provide accurate asset descriptions and metadata
- Update asset information when changes occur
- Notify CISO of new assets requiring registration
- Identify assets approaching end-of-life
- Document asset dependencies and relationships

### 2. Information Classification

- Classify information assets according to classification policy
- Assign appropriate classification labels:
  - **Public**: Information intended for public disclosure
  - **Internal**: Information for internal use only
  - **Confidential**: Sensitive information requiring protection
  - **Restricted**: Highly sensitive information with strict controls
- Review and update classifications when circumstances change
- Ensure classification is clearly marked on assets
- Provide guidance to users on classification decisions
- Escalate classification questions to CISO when unclear

### 3. Access Control Authorization

- Approve or deny access requests for owned assets
- Ensure access is granted based on business need-to-know
- Verify user identity and authorization before granting access
- Define access levels (read-only, read-write, admin) appropriately
- Review and approve access exceptions
- Ensure segregation of duties where applicable
- Document access authorization decisions
- Coordinate with IT/CISO on technical access provisioning

### 4. Access Review and Recertification

- Participate in periodic access reviews (at least annually)
- Review list of users with access to owned assets
- Confirm continued business need for each user's access
- Request removal of access that is no longer needed
- Approve or revoke access within defined timescales
- Ensure departed employees' access is revoked
- Document access review outcomes

### 5. Risk Acceptance for Assets

- Accept residual risks related to owned assets (within authority level)
- Participate in risk assessments affecting owned assets
- Provide input on asset value and criticality
- Evaluate proposed security controls for adequacy
- Escalate unacceptable risks to management
- Balance security requirements with business needs
- Document risk acceptance decisions

### 6. Asset Lifecycle Management

- Oversee the complete lifecycle of owned assets:
  - **Creation**: Ensure proper classification and protection from creation
  - **Storage**: Approve storage locations and methods
  - **Sharing**: Authorize sharing with internal and external parties
  - **Modification**: Control who can modify assets
  - **Archival**: Determine retention requirements
  - **Disposal**: Approve secure disposal when no longer needed
- Ensure lifecycle stages comply with legal and regulatory requirements
- Coordinate with CISO on technical lifecycle controls
- Monitor asset usage and identify anomalies

### 7. Incident Response (Asset-Specific)

- Act as subject matter expert for incidents affecting owned assets
- Assess business impact of security incidents on assets
- Support incident investigation with asset context
- Determine notification requirements (customers, authorities)
- Approve recovery actions and asset restoration
- Participate in post-incident reviews
- Recommend preventive measures based on incidents

### 8. Asset Protection and Handling

- Ensure appropriate security controls are applied to assets
- Define handling requirements based on classification
- Communicate handling requirements to authorized users
- Monitor compliance with handling procedures
- Enforce security policies for owned assets
- Report security violations or concerns to CISO
- Ensure backup and recovery procedures are adequate

### 9. Third-Party Sharing Authorization

- Approve sharing of assets with external parties
- Ensure appropriate confidentiality agreements are in place (NDAs)
- Define restrictions on external use of assets
- Monitor external access to assets
- Review third-party compliance with security requirements
- Revoke external access when no longer needed
- Escalate external security concerns to CISO

### 10. Compliance and Legal Requirements

- Ensure assets are managed in compliance with legal obligations:
  - GDPR (for personal data assets)
  - Copyright and intellectual property laws
  - Contractual obligations to customers/suppliers
  - Industry-specific regulations
- Define and enforce retention requirements
- Ensure proper consent or legal basis for personal data processing
- Coordinate with DPO on privacy requirements
- Support audits and compliance reviews

### 11. Asset Documentation

- Maintain documentation about owned assets
- Document asset purpose and business criticality
- Record asset location and storage details
- Document authorized users and access levels
- Maintain asset-related procedures and guidelines
- Keep asset information in Asset Register current
- Provide asset documentation to CISO and auditors

### 12. User Awareness and Guidance

- Communicate security requirements to users of owned assets
- Provide guidance on proper asset handling
- Clarify classification and usage restrictions
- Address user questions about asset security
- Report training needs to CISO or IMS Owner
- Promote security awareness for specific assets

## Authority

The Asset Owner has authority to:

### Access and Usage Authority

- **Approve or deny** access requests for owned assets
- **Revoke access** when no longer needed or when policy is violated
- **Define access levels** appropriate to business need
- **Authorize sharing** of assets with internal and external parties
- **Approve exceptions** to standard access procedures (with documentation)
- **Restrict usage** of assets when security concerns exist

### Classification and Protection Authority

- **Classify** information assets within their domain
- **Reclassify** assets when circumstances change
- **Define handling requirements** based on classification
- **Require additional controls** when risk is unacceptable
- **Request security assessments** for assets from CISO

### Asset Lifecycle Authority

- **Approve asset creation** (in context of business processes)
- **Authorize archival** or retention of assets
- **Approve secure disposal** when retention period expires
- **Decommission** assets that are no longer needed

### Escalation and Incident Authority

- **Escalate security concerns** to CISO
- **Declare incidents** affecting owned assets
- **Request incident investigations** when asset is compromised
- **Approve recovery actions** for affected assets

### Limitations

- Cannot override CISO on security requirements or controls
- Cannot approve access that violates policy or law (e.g., segregation of duties)
- High-value or critical assets may require CISO co-approval for certain decisions
- Risk acceptance beyond defined threshold requires management approval
- Cannot authorize processing of personal data without legal basis (DPO involvement)

## Required Competencies

### Knowledge Requirements

- **Business Context**: Understanding of business use and value of owned assets
- **Information Security**: Basic understanding of security principles and threats
- **Classification**: Understanding of classification scheme and criteria
- **Access Control**: Knowledge of access control principles and least privilege
- **Legal/Regulatory**: Awareness of applicable compliance requirements
- **Asset Lifecycle**: Understanding of asset management practices

### Skills Requirements

- **Risk Assessment**: Ability to assess risk and make risk-based decisions
- **Decision-Making**: Sound judgment in access authorization and classification
- **Communication**: Clear communication of security requirements to users
- **Documentation**: Ability to document decisions and maintain records
- **Collaboration**: Work effectively with CISO, IT, and business teams
- **Problem-Solving**: Address access and security issues pragmatically

### Training Requirements

**Mandatory**:
- Information Security Awareness training (annual)
- Asset Classification training
- Access Control and Authorization training
- Data Protection training (if handling personal data)

**Recommended**:
- ISO 27001 Asset Management training
- Risk Management fundamentals
- Incident Response basics

## Key Relationships

| Stakeholder | Nature of Interaction | Frequency |
|-------------|----------------------|-----------|
| **CISO** | Receives guidance; escalates security issues; coordinates on classification | As needed |
| **IT/Technical Teams** | Coordinates technical access provisioning; implements controls | As needed |
| **DPO** | Coordinates on personal data assets; GDPR compliance | As needed (for personal data) |
| **Users** | Authorizes access; provides guidance on asset use | As needed |
| **Line Manager** | Reports to; escalates business issues | Regular |
| **Internal Auditors** | Provides evidence of asset management | During audits |
| **Risk Manager** | Participates in risk assessments for assets | Annually/as needed |
| **Department Managers** | Coordinates cross-departmental access needs | As needed |

## Relationship with Other IMS Roles

### CISO

- **Collaboration Model**: Asset Owner implements asset security; CISO defines security policies and controls
- **Division of Responsibility**: Asset Owner makes business decisions about assets; CISO ensures adequate security
- **Interaction**: Asset Owner seeks CISO guidance on complex security questions; CISO may override on security grounds
- **Escalation**: Asset Owner escalates security concerns and high-risk decisions to CISO

### DPO (for Personal Data Assets)

- **Collaboration Model**: Asset Owner manages personal data assets; DPO ensures GDPR compliance
- **Division of Responsibility**: Asset Owner authorizes access and use; DPO ensures legal basis and compliance
- **Interaction**: Close coordination on personal data assets; DPO advises on privacy requirements
- **Note**: Asset Owners of personal data must involve DPO in processing decisions

### Risk Manager

- **Collaboration Model**: Asset Owner provides asset context; Risk Manager facilitates risk assessment
- **Division of Responsibility**: Asset Owner assesses asset-specific risks; Risk Manager coordinates enterprise risk view
- **Interaction**: Asset Owner participates in risk assessments; provides input on asset value and impact

## Performance Indicators

| KPI | Target | Measurement Method |
|-----|--------|-------------------|
| **Asset Register Accuracy** | 100% of owned assets registered and current | Asset Register audit |
| **Classification Accuracy** | 100% of assets have current classification | Asset classification review |
| **Access Review Completion** | 100% of access reviews completed within timescale | Access review tracking |
| **Access Request Response Time** | 90% of requests processed within 2 business days | Access request system |
| **Unauthorized Access Incidents** | Zero incidents due to Asset Owner approval errors | Incident register analysis |
| **Asset Security Incidents** | <2 incidents per asset per year | Incident register |
| **Compliance Violations** | Zero compliance violations for owned assets | Audit findings |
| **Training Completion** | 100% completion of mandatory training | Training records |

## Delegation and Backup

### During Planned Absence

- Designate a deputy Asset Owner from the same department
- Deputy should be briefed on critical assets and pending access requests
- CISO should be notified of deputy designation
- Urgent access decisions can be escalated to line manager or CISO

### Deputy Asset Owner

- Should understand the assets and business context
- Should complete Asset Owner training
- Should have appropriate business authority
- Should be documented in Asset Register

## Success Factors

The Asset Owner will be successful when:

1. **Asset Protection**: Assets are appropriately protected based on their value and sensitivity
2. **Appropriate Access**: Users have necessary access without over-provisioning
3. **Compliance**: Assets are managed in compliance with policies and regulations
4. **Incident-Free**: Minimal security incidents involving owned assets
5. **Current Information**: Asset Register information is accurate and up-to-date
6. **Timely Decisions**: Access requests are processed promptly
7. **Risk Management**: Risks to assets are identified and appropriately managed
8. **User Awareness**: Users understand how to properly handle assets
9. **Audit Readiness**: Asset documentation is audit-ready and complete
10. **Business Enablement**: Security measures enable business while protecting assets

## Common Asset Owner Scenarios

### Scenario 1: Access Request

**Situation**: Employee requests access to confidential customer data
**Asset Owner Action**:
1. Verify requestor identity and business need
2. Confirm appropriate authorization from requestor's manager
3. Determine appropriate access level (read-only vs. read-write)
4. Approve access via access management system
5. Document decision and business justification
6. Notify CISO if access is unusual or high-risk

### Scenario 2: Classification Question

**Situation**: Unsure whether a new dataset should be classified as Confidential or Restricted
**Asset Owner Action**:
1. Review classification criteria in classification policy
2. Assess sensitivity and impact of disclosure
3. Consider legal/regulatory requirements (consult DPO if personal data)
4. Escalate to CISO if unclear
5. Document classification decision and rationale
6. Ensure classification is applied consistently

### Scenario 3: Security Incident

**Situation**: Asset Owner learns that a confidential document was shared with unauthorized party
**Asset Owner Action**:
1. Immediately report incident to CISO
2. Assess business impact and sensitivity of exposed information
3. Determine if customers or authorities must be notified
4. Support incident investigation with asset context
5. Review access controls and identify gaps
6. Participate in post-incident review
7. Implement preventive measures

### Scenario 4: Access Review

**Situation**: Annual access review for CRM system containing customer data
**Asset Owner Action**:
1. Review list of all users with access
2. Confirm business need for each user (consult managers if needed)
3. Identify departed employees, role changes, or no-longer-needed access
4. Request removal of inappropriate access
5. Document review completion and decisions
6. Escalate any concerns to CISO or line manager

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| CISO | | | |
| IMS Owner | | | |
