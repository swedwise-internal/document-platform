---
document_id: SW-ISMS-PRO-008
title: Supplier Security Assessment Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
  - ISO 9001
related_documents:
  - SW-ISMS-POL-001
  - SW-IMS-POL-001
  - SW-ISMS-PRO-001
---

# Supplier Security Assessment Procedure

## 1. Purpose

This procedure establishes a systematic approach for assessing, selecting, and monitoring suppliers and service providers to ensure they meet Swedwise AB's security, quality, and compliance requirements. It ensures that third-party risks are identified and managed throughout the supplier relationship lifecycle.

## 2. Scope

This procedure applies to:

- All suppliers and service providers engaged by Swedwise
- Suppliers who process, store, or transmit Swedwise or customer data
- Suppliers who provide IT services, software, or infrastructure
- Cloud service providers and SaaS vendors
- Critical business suppliers (hosting, telecommunications, etc.)
- Consulting and professional services suppliers
- Suppliers with access to Swedwise systems or facilities

**Supplier categories in scope:**
- Technology suppliers (software, hardware, cloud services)
- IT service providers (managed services, hosting, support)
- Infrastructure providers (Entiros datacenter hosting)
- SaaS and cloud platform providers (Microsoft, Azure, etc.)
- Development and integration partners
- Security services (penetration testing, SOC, etc.)
- Professional services (consulting, audit, legal)

**Out of scope:**
- Low-risk suppliers (office supplies, catering, etc.)
- One-time purchases below [TBD - e.g., 20,000 SEK]
- Suppliers with no data or system access

## 3. Definitions

| Term | Definition |
|------|------------|
| **Supplier** | External organization providing goods or services to Swedwise |
| **Critical Supplier** | Supplier whose failure or security incident would significantly impact Swedwise operations or customers |
| **Supplier Risk** | Potential negative impact from supplier relationship (security, operational, compliance) |
| **Due Diligence** | Process of investigating and evaluating a supplier before engagement |
| **SLA** | Service Level Agreement; contractual commitment for service performance |
| **NDA** | Non-Disclosure Agreement; confidentiality agreement |
| **DPA** | Data Processing Agreement; GDPR-required contract for data processors |
| **Subprocessor** | Supplier's own suppliers who may process Swedwise/customer data |

## 4. Responsibilities

| Role | Responsibility |
|------|---------------|
| **CISO** | Supplier security assessment framework, approval of high-risk suppliers, security review oversight |
| **Procurement** | Supplier selection process, contract negotiation, vendor management, payment and invoicing |
| **Legal** | Contract review, NDA and DPA templates, compliance verification, dispute resolution |
| **Finance** | Financial stability assessment, budget approval, payment processing |
| **Supplier Owner** | Day-to-day supplier relationship, performance monitoring, contract renewals, escalation |
| **IT Operations** | Technical assessment, integration and access management, operational monitoring |
| **Privacy Officer** | GDPR compliance review, DPA approval, data processor assessments |

## 5. Supplier Categorization

### 5.1 Risk-Based Categorization

**Categorize suppliers based on risk to determine assessment depth:**

| Category | Criteria | Assessment Level | Examples |
|----------|----------|-----------------|----------|
| **Critical** | - Customer data processing<br>- Business-critical service<br>- System/infrastructure access<br>- High financial value<br>- Regulatory significance | Comprehensive | Entiros (hosting), Microsoft (M365), OpenText, payment processors |
| **High** | - Swedwise confidential data access<br>- IT services or software<br>- Moderate business impact<br>- Integration with systems | Detailed | Software vendors, managed services, development partners |
| **Medium** | - Internal data only<br>- Limited access<br>- Moderate business impact<br>- Standard services | Standard | Professional services, consulting, non-critical tools |
| **Low** | - No data access<br>- Minimal business impact<br>- Commodity services | Light | Office supplies, low-value services |

### 5.2 Assessment Requirements by Category

| Requirement | Critical | High | Medium | Low |
|-------------|----------|------|--------|-----|
| **Security questionnaire** | Yes (comprehensive) | Yes (standard) | Yes (basic) | No |
| **Security certifications review** | Required | Recommended | Optional | No |
| **Financial stability check** | Yes | Yes | No | No |
| **References check** | Yes (2+) | Yes (1) | No | No |
| **On-site assessment** | If feasible | If needed | No | No |
| **Contract security clauses** | Comprehensive | Standard | Standard | Minimal |
| **NDA** | Yes | Yes | If data access | No |
| **DPA (GDPR)** | Yes (if personal data) | Yes (if personal data) | If applicable | No |
| **Annual reassessment** | Yes | Yes | Every 2 years | No |
| **Security monitoring** | Continuous | Quarterly | Annually | No |

## 6. Supplier Selection and Assessment

### 6.1 Pre-Engagement Process

**Step 1: Identify Need**
- Business unit identifies supplier need
- Document business justification
- Estimate budget and timeline
- Identify data/system access requirements

**Step 2: Initial Risk Assessment**
- Supplier Owner completes preliminary risk assessment
- Determine supplier category (Section 5.1)
- Identify required assessments and approvals
- Coordinate with Procurement, CISO, Legal as needed

**Step 3: Supplier Identification**
- Identify potential suppliers (market research, RFI, recommendations)
- Compile short list (3-5 candidates if feasible)
- Request initial information from candidates

### 6.2 Security Assessment

**Security Questionnaire:**

**Critical and High suppliers:**
- Comprehensive security questionnaire [TBD - SW-ISMS-FRM-012]
- Covers: Information security program, access controls, data protection, incident response, business continuity, compliance

**Medium suppliers:**
- Standard security questionnaire (abbreviated)
- Focus on data handling and basic security practices

**Questionnaire Review:**
- CISO reviews responses
- Identify gaps or concerns
- Request clarification or evidence
- Score responses (risk-based)

**Security Certifications and Attestations:**

**Preferred certifications:**
- ISO 27001 (information security management)
- SOC 2 Type II (service organization controls)
- ISO 9001 (quality management)
- Industry-specific certifications (e.g., PCI-DSS for payment processing)

**Verification:**
- Request copy of current certificates
- Verify with certification body if high-value engagement
- Review scope of certification (ensure covers services provided to Swedwise)

**Additional Security Evidence:**
- Penetration test reports (summary or findings)
- Security audit reports
- Privacy/GDPR compliance documentation
- Incident history and response capabilities
- Security policies and procedures (high-level overview)

### 6.3 Technical Assessment

**For IT and infrastructure suppliers:**

**Review:**
- Architecture and security controls
- Data encryption (in-transit and at-rest)
- Access control mechanisms
- Logging and monitoring capabilities
- Patch management processes
- Backup and disaster recovery
- Network security and segmentation

**Integration Assessment:**
- Authentication and authorization mechanisms
- API security
- Data exchange security
- Monitoring and logging integration
- Incident coordination procedures

**Testing (if applicable):**
- Proof of concept in test environment
- Security testing (vulnerability assessment, code review)
- Performance and reliability testing

### 6.4 Privacy and GDPR Assessment

**For suppliers processing personal data:**

**Requirements:**
- Data Processing Agreement (DPA) mandatory
- GDPR compliance demonstration:
  - Data protection policies
  - Breach notification process (within 72 hours)
  - Data subject rights support
  - Subprocessor management
  - International data transfers (if applicable)

**Assessment:**
- Privacy Officer reviews supplier privacy practices
- Verify GDPR compliance documentation
- Assess data residency and transfer mechanisms
- Review subprocessor list
- Evaluate data retention and disposal practices

**DPA Contents:**
- Processing instructions and limitations
- Security measures
- Subprocessor authorization
- Data subject rights assistance
- Breach notification obligations
- Audit rights
- Data return/deletion upon termination

### 6.5 Financial and Operational Assessment

**Financial Stability:**
- Credit check or financial report review (Critical/High suppliers)
- Assess financial viability for long-term relationship
- Review payment terms and conditions

**Operational Capability:**
- Service delivery track record
- Customer references (contact and verify)
- Support and maintenance capabilities
- Geographic presence (if relevant)
- Disaster recovery and business continuity plans

**Compliance and Legal:**
- Verify licenses and registrations
- Check for legal disputes or compliance violations
- Ensure insurance coverage (if applicable)
- Review standard terms and conditions

### 6.6 Supplier Approval

**Approval Authority:**

| Supplier Category | Approvers | Requirements |
|-------------------|-----------|--------------|
| **Critical** | CISO + Procurement + Supplier Owner + Finance + CEO (if high-value) | All assessments complete, acceptable risk |
| **High** | CISO + Procurement + Supplier Owner + Finance | Security and operational assessments passed |
| **Medium** | Procurement + Supplier Owner | Basic checks completed |
| **Low** | Supplier Owner | Business justification sufficient |

**Approval Documentation:**
- Supplier assessment summary
- Risk rating and justification
- Security questionnaire results
- Reference checks
- Approval signatures
- Conditions or requirements for engagement

**Approval Criteria:**
- Acceptable risk level
- Adequate security controls
- GDPR compliance (if applicable)
- Financial stability
- Competitive pricing
- References satisfactory

**Rejection:**
- Document reason for rejection
- Notify requester
- Consider alternative suppliers or additional risk mitigations

## 7. Contracting

### 7.1 Security and Compliance Clauses

**Standard Contract Clauses (all categories):**
- Confidentiality and data protection obligations
- Right to audit or review security controls
- Incident notification requirements
- Compliance with applicable laws and regulations
- Liability and indemnification
- Termination conditions

**Enhanced Clauses (Critical/High):**
- Specific security controls and standards
- Service Level Agreements (SLAs) with penalties
- Detailed breach notification timeline (e.g., 24 hours)
- Subcontractor approval requirements
- Security assessment and monitoring rights
- Data return/deletion upon termination
- Escrow for critical software (if applicable)

**GDPR Clauses (if personal data processed):**
- Data Processing Agreement (separate or integrated)
- Processing instructions and limitations
- Security measures (technical and organizational)
- Subprocessor management
- Data subject rights support
- Breach notification
- Cross-border transfer mechanisms (if applicable)

### 7.2 Non-Disclosure Agreement (NDA)

**When Required:**
- Supplier will access Confidential or Restricted information
- Pre-engagement discussions involve sensitive information
- Standard for all Critical/High suppliers

**NDA Contents:**
- Definition of confidential information
- Permitted uses
- Non-disclosure obligations
- Return/destruction upon termination
- Duration (typically 3-5 years)

**Execution:**
- NDA signed before sharing confidential information
- Store signed NDA in supplier file
- Track expiration and renewal

### 7.3 Service Level Agreement (SLA)

**For Critical/High suppliers (especially IT services):**

**Key SLA Metrics:**
- Availability/uptime targets (e.g., 99.9%)
- Response times (e.g., 15 min for critical incidents)
- Resolution times
- Performance metrics
- Security incident response timeframes

**SLA Monitoring:**
- Supplier provides regular reports
- Swedwise monitors independently if possible
- Quarterly SLA review meetings
- Penalties or credits for SLA breaches

### 7.4 Contract Management

**Contract Repository:**
- All supplier contracts stored centrally [TBD - Contract management system]
- Access controlled (Procurement, Legal, Supplier Owner, CISO)
- Metadata: Supplier name, category, start/end dates, value, owner

**Contract Review:**
- Legal reviews all contracts before signing
- CISO reviews security clauses (Critical/High)
- Privacy Officer reviews DPA
- Finance approves budget/pricing
- Authorized signatory executes

**Renewal Management:**
- Calendar reminders 90 days before expiration
- Supplier Owner initiates renewal or termination decision
- Reassessment if renewing (per Section 8)
- Renegotiate terms if needed

## 8. Ongoing Supplier Management

### 8.1 Supplier Monitoring

**Continuous Monitoring (Critical suppliers):**
- Security incident notifications
- Service availability monitoring
- News monitoring (security breaches, financial issues)
- Compliance status (certifications, audits)
- Threat intelligence for supply chain risks

**Periodic Monitoring:**

| Supplier Category | Monitoring Frequency | Activities |
|-------------------|---------------------|------------|
| **Critical** | Quarterly | Performance reviews, SLA compliance, security updates, incident review |
| **High** | Semi-annually | Performance review, compliance check, security status |
| **Medium** | Annually | Basic performance review, contract compliance |
| **Low** | As needed | Reactive monitoring only |

**Monitoring Responsibilities:**
- Supplier Owner: Overall relationship and performance
- IT Operations: Technical performance and integration
- CISO: Security posture and incidents
- Finance: Financial performance and invoicing

### 8.2 Supplier Performance Reviews

**Review Meetings:**
- Scheduled per monitoring frequency
- Participants: Supplier Owner, supplier representative, CISO (if Critical/High)

**Review Agenda:**
1. Service delivery performance vs. SLA
2. Security incidents or concerns
3. Compliance status (certifications, audits)
4. Issues and escalations
5. Continuous improvement opportunities
6. Upcoming changes or projects
7. Contract status and renewal planning

**Review Documentation:**
- Meeting minutes and action items
- Performance scorecard [TBD - template]
- Issues and resolutions
- Recommendations

**Escalation:**
- Performance issues not resolved → Escalate to supplier management
- Persistent issues → Formal corrective action request
- Critical failures → Consider contract termination or transition plan

### 8.3 Supplier Reassessment

**Reassessment Triggers:**
- Annual review (Critical/High suppliers)
- Contract renewal
- Major changes to services or scope
- Security incident or breach
- Certification lapse
- Financial instability or business changes
- Audit findings or compliance issues

**Reassessment Process:**
1. Update security questionnaire responses
2. Verify current certifications and compliance status
3. Review incident history
4. Assess any changes in risk
5. Update supplier risk rating
6. Document reassessment results
7. Approve continuation, require improvements, or plan exit

**Reassessment Approval:**
- Same approval authority as initial assessment (Section 6.6)
- CISO approval for continued use of Critical/High suppliers

### 8.4 Supplier Change Management

**Supplier Notifications:**
- Require supplier to notify Swedwise of significant changes:
  - Security incidents or breaches
  - Subcontractor changes
  - Ownership or business model changes
  - Service architecture changes
  - Data location changes
  - Compliance or certification status changes

**Swedwise Assessment:**
- Evaluate impact of supplier change
- Conduct additional security review if needed
- Update risk assessment
- Approve or require mitigation actions

## 9. Critical Supplier Management

### 9.1 Identification of Critical Suppliers

**Criteria for Critical Classification:**
- Single point of failure (no viable alternative)
- Process customer data or Restricted data
- SaaS platform infrastructure or dependencies
- Business-critical services (>24 hour outage unacceptable)
- High financial value (>500,000 SEK annually)
- Regulatory significance

**Current Critical Suppliers:**
- Entiros AB (SaaS platform hosting)
- Microsoft (Azure, Microsoft 365)
- OpenText (Communications/Exstream software)
- [TBD - Add others as identified]

### 9.2 Enhanced Controls

**For Critical Suppliers:**
- Executive sponsor assigned (management team member)
- Quarterly business reviews (senior level)
- Continuous security monitoring
- Redundancy or contingency planning where feasible
- Financial health monitoring
- Annual on-site visits or audits (if feasible)
- Disaster recovery and business continuity coordination

**Criticality Documentation:**
- Dependency analysis (what relies on this supplier)
- Business impact assessment (if supplier fails)
- Alternative suppliers identified (if available)
- Exit or transition strategy

### 9.3 Entiros (SaaS Hosting) Management

**Enhanced Requirements:**
- Quarterly security and performance reviews
- Direct access to Entiros security team
- Advance notification of maintenance windows
- Coordinated incident response procedures
- Annual disaster recovery testing
- Right to audit security controls
- Subprocessor notification and approval

**SLA Monitoring:**
- 99.9% availability target
- 15-minute response for critical incidents
- Monthly SLA reports
- Quarterly trend analysis

**Compliance Verification:**
- ISO 27001 certification verified annually
- SOC 2 report reviewed (if available)
- GDPR compliance assessment annually
- Physical security audit (if feasible)

### 9.4 Microsoft and OpenText Management

**Microsoft (Azure, Microsoft 365):**
- Monitor Microsoft Trust Center and compliance reports
- Review SOC 2, ISO 27001 annually
- Track security incident notifications
- Leverage Azure Security Center recommendations
- Participate in Microsoft customer briefings
- Monitor Microsoft security bulletins

**OpenText (Communications/Exstream):**
- Annual security questionnaire update
- Verify support and maintenance coverage
- Monitor for security advisories
- Coordinate patching and updates
- Review licensing compliance
- Evaluate product roadmap and support lifecycle

## 10. Subprocessor Management

### 10.1 Subprocessor Approval

**Requirements:**
- Supplier must disclose all subprocessors who may access Swedwise/customer data
- Contractual requirement for supplier to manage subprocessors per GDPR
- Swedwise right to approve or object to subprocessors

**Approval Process:**
1. Supplier provides subprocessor list
2. Swedwise Privacy Officer reviews
3. Assess subprocessor risk (data access, location, purpose)
4. Approve, request additional information, or object
5. Document approval in supplier file

**New Subprocessor:**
- Supplier notifies Swedwise before engaging new subprocessor
- 30-day review period
- Swedwise may object with valid reason
- Supplier provides alternative or Swedwise may terminate

### 10.2 Subprocessor Assessment

**For high-risk subprocessors:**
- Request subprocessor security information
- Verify subprocessor compliance (certifications)
- Ensure supplier has appropriate contract with subprocessor
- Document in supplier file

### 10.3 Monitoring

- Annual review of subprocessor list
- Supplier notifies of changes
- Reassess if subprocessor involved in security incident

## 11. Supplier Access Management

### 11.1 Access Provisioning

**When Supplier Requires System Access:**
- Follow Access Management Procedure (SW-ISMS-PRO-002)
- Supplier personnel treated as third-party users
- NDA required before access granted
- Time-limited access (project duration or contract period)
- Minimum necessary access (least privilege)

**Access Request:**
- Supplier Owner requests access on behalf of supplier
- Document business justification and access scope
- CISO approval for privileged or Restricted data access
- Individual accounts (no shared accounts)
- Multi-factor authentication mandatory

**Access Review:**
- Quarterly review of supplier access
- Remove access when no longer needed
- Revoke immediately upon contract termination

### 11.2 Remote Access

**For Suppliers Accessing Swedwise Network:**
- VPN access with MFA required
- Dedicated supplier VPN profile (isolated)
- Session logging and monitoring
- Time-limited (expire after project or annually)
- Coordinate with IT Operations

**Monitoring:**
- Log all supplier access activity
- Review logs monthly (Critical suppliers) or quarterly (High)
- Automated alerts for unusual activity

### 11.3 Physical Access

**If Supplier Requires Office Access:**
- Visitor badge system
- Escort required for non-regular visitors
- Access log maintained
- NDA signed before site visit

## 12. Supplier Incident Management

### 12.1 Supplier Incident Notification

**Contractual Requirement:**
- Supplier must notify Swedwise of security incidents affecting Swedwise data or services
- Notification timeline: 24 hours for Critical suppliers, 72 hours for others
- Notification to: security@swedwise.se and Supplier Owner

**Notification Information:**
- Nature of incident
- Systems/data affected
- Impact to Swedwise or customers
- Actions taken
- Estimated resolution timeline

### 12.2 Swedwise Response

**Upon Supplier Incident Notification:**
1. Activate Incident Management Procedure (SW-ISMS-PRO-001)
2. Assess impact to Swedwise and customers
3. Coordinate with supplier on response
4. Implement compensating controls if needed
5. Customer notification if required
6. Document incident and response
7. Post-incident review

**Post-Incident Actions:**
- Request supplier incident report
- Review supplier's remediation actions
- Assess if additional controls needed
- Determine if reassessment required
- Consider contract implications

### 12.3 Supplier-Caused Incidents

**If Supplier Actions Cause Incident:**
- Document incident and supplier responsibility
- Request root cause analysis
- Corrective and preventive actions required
- May trigger contract review or penalties
- Escalate to supplier management
- Consider alternative suppliers if pattern

## 13. Supplier Offboarding

### 13.1 Contract Termination

**Termination Triggers:**
- Contract expiration (not renewed)
- Poor performance or SLA breaches
- Security incidents or compliance failures
- Business need eliminated
- Cost optimization
- Supplier business closure

**Termination Process:**
1. Provide contractual notice period
2. Plan transition to alternative supplier or in-house
3. Data retrieval and migration
4. Access revocation
5. Return of Swedwise property
6. Final invoicing and payments
7. Termination documentation

### 13.2 Data Return and Deletion

**Data Handling Upon Termination:**
1. Supplier returns all Swedwise data:
   - Secure transfer method
   - Verify completeness
   - Validate data integrity
2. Supplier deletes all Swedwise data from systems:
   - Certified deletion per contract
   - Certificate of destruction provided
   - Includes backups and archives
3. Verify subprocessor data deletion

**Timeline:**
- Data return: Within 30 days of termination
- Data deletion: Within 60 days (or per contract)
- Certification: Within 90 days

### 13.3 Access Revocation

**Immediately Upon Termination:**
- Revoke all system access for supplier personnel
- Disable VPN and remote access
- Deactivate accounts
- Revoke physical access (badges, keys)
- Remove from distribution lists and shared resources

**Verification:**
- Review access logs for remaining access
- Confirm all access removed
- Document in offboarding checklist

### 13.4 Knowledge Transfer

**If Supplier Provided Critical Services:**
- Document knowledge transfer plan
- Supplier provides runbooks and documentation
- Training for Swedwise or new supplier
- Transition period with overlap if feasible

### 13.5 Offboarding Documentation

- Offboarding checklist completed
- Data return and deletion certificates
- Access revocation confirmation
- Final performance review
- Lessons learned
- Update supplier register (status: Inactive/Terminated)

## 14. Supplier Register

### 14.1 Supplier Inventory

**Maintain Central Supplier Register:**

**Required Attributes:**
- Supplier name and contact information
- Supplier Owner (Swedwise)
- Supplier category (Critical/High/Medium/Low)
- Services provided
- Contract start and end dates
- Contract value
- Data access (Yes/No, type of data)
- System access (Yes/No)
- Security assessment status
- Certifications (ISO 27001, SOC 2, etc.)
- Last assessment date
- Next review date
- Status (Active/Inactive/Terminated)
- Issues or concerns

**Register Tool:** [TBD - Supplier management system or database]

### 14.2 Supplier Register Maintenance

**Responsibilities:**
- Procurement maintains register
- Supplier Owners update status and performance info
- CISO reviews security assessment data

**Updates:**
- New supplier added upon contract signing
- Changes updated within 1 week
- Regular verification (quarterly for Critical, annually for others)

## 15. Metrics and Reporting

### 15.1 Key Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Suppliers with current security assessment** | 100% (Critical/High) | Assessed suppliers / Total Critical+High suppliers |
| **Supplier SLA compliance** | > 95% | SLA compliance rate for Critical suppliers |
| **Supplier security incidents** | Track trend | Number and severity of supplier-related incidents |
| **Contract compliance** | 100% | Suppliers with required security clauses |
| **Overdue assessments** | 0 | Suppliers with assessments overdue for renewal |

### 15.2 Reporting

**Quarterly (to CISO and Management):**
- Supplier register summary
- Critical supplier status
- Security assessments completed
- Supplier incidents and issues
- Contract expirations and renewals

**Annual (to Management):**
- Comprehensive supplier risk report
- Critical supplier dependencies
- Supplier security posture trends
- Recommendations and improvements

## 16. Inputs and Outputs

**Inputs:**
- Supplier proposals and information
- Security questionnaires and certifications
- Contract terms and conditions
- Performance data and SLA reports
- Incident notifications
- Audit findings

**Outputs:**
- Supplier assessment reports
- Approved supplier list
- Contracts with security clauses
- Supplier register
- Performance reviews
- Compliance evidence

## 17. Records

| Record | Retention Period | Location |
|--------|------------------|----------|
| Supplier assessment documentation | Contract duration + 7 years | [TBD - Supplier management system] |
| Contracts and amendments | Contract end + 10 years | [TBD - Contract repository] |
| NDAs and DPAs | Agreement end + 7 years | [TBD - Legal repository] |
| Supplier register | Current + 7 years | [TBD - Supplier management system] |
| Performance reviews | 3 years | [TBD - Supplier files] |
| Incident reports (supplier-related) | 5 years | [TBD - Incident tracking system] |

## 18. Related Documents

**Policies:**
- SW-ISMS-POL-001: Information Security Policy
- SW-IMS-POL-001: Integrated Management System Policy

**Procedures:**
- SW-IMS-PRO-001: Document Control Procedure
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-ISMS-PRO-002: Access Management Procedure
- SW-ISMS-PRO-006: Asset Management Procedure

**Guidelines:**
- [TBD - SW-ISMS-GUI-001: Information Classification Guideline]

**Forms:**
- [TBD - SW-ISMS-FRM-012: Supplier Security Questionnaire]
- [TBD - SW-ISMS-FRM-013: Supplier Assessment Summary]
- [TBD - SW-ISMS-FRM-014: Supplier Performance Review Template]

**Templates:**
- [TBD - NDA Template]
- [TBD - DPA Template]
- [TBD - Supplier Security Contract Clauses]

**External:**
- ISO 27001:2022 - Clause 5.19, 5.20, 5.21, 5.22 (Supplier relationships controls)
- ISO 9001:2015 - Clause 8.4 (Control of externally provided processes, products and services)
- GDPR Article 28 (Processor requirements)

## 19. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO] | Initial procedure creation | [TBD - CEO] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This procedure is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this procedure.*
