---
document_id: SW-IMS-MAN-008
title: "IMS Manual - Clause 8: Operation"
doc_type: ims-manual
version: "1.0"
status: draft
classification: internal
owner: IMS Owner
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-POL-001
  - SW-QMS-PRO-001
  - SW-IMS-PRO-007
  - SW-IMS-PRO-002
  - SW-ISMS-SOA-001
---

# IMS Manual - Clause 8: Operation

**Document ID**: SW-IMS-MAN-008-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner
**Approved by**: [TBD]

---

## Purpose

This section of the IMS Manual describes how Swedwise AB plans and controls operational processes to deliver products and services, meet customer requirements, and achieve quality, environmental, and information security objectives. It addresses Clause 8 (Operation) requirements for ISO 9001, ISO 14001, and ISO 27001.

---

## 8.1 Operational Planning and Control

### 8.1.1 General Approach

Swedwise plans, implements, and controls processes needed to meet requirements for products and services, implement actions determined by risk assessment, and achieve IMS objectives. Operational planning is integrated across quality, environmental, and information security disciplines.

**Planning methodology**:
- Process-based approach: Identify and define key operational processes
- Risk-based thinking: Consider risks and opportunities at each process step
- Performance orientation: Establish process criteria and controls
- Continuous improvement: Monitor and improve process performance

### 8.1.2 Process Identification and Control

**Key operational processes**:

| Process | Owner | Description | Critical Control Points |
|---------|-------|-------------|------------------------|
| **Customer Acquisition** | Sales Lead | Prospecting, qualification, proposal, contracting | Requirements capture, contract review |
| **Service Delivery** | Service Owner | Delivering consulting, SaaS, and support services | SLA management, customer satisfaction |
| **Project Management** | Delivery Manager | Implementation projects for customers | Scope control, resource management, quality gates |
| **SaaS Operations** | SaaS Service Owner | Operating Swedwise Communications platform | Uptime, security, capacity, change management |
| **Supplier Management** | Procurement Lead | Selecting and managing suppliers | Supplier assessment, contract management |
| **Resource Management** | Resource Manager | Allocating consultants to projects and services | Utilization, competence matching, availability |

**Process controls documented in**:
- SW-QMS-PRO-001: Service Delivery Procedure
- SW-IMS-PRO-007: Change Management Procedure
- SW-IMS-POL-002: Supplier Management Policy
- Specific operational procedures for each process

### 8.1.3 Outsourced Processes

Swedwise outsources certain processes while maintaining accountability:

**Outsourced processes**:

| Process | Supplier | Control Mechanism |
|---------|----------|-------------------|
| **SaaS Infrastructure Hosting** | Entiros AB (Swedish data center) | Service Level Agreement, annual audits, certification review (ISO 27001) |
| **Cloud Services (Microsoft 365, Azure)** | Microsoft | Shared responsibility model, configuration management, SLA monitoring |
| **Payroll and Finance** | External accounting firm | Monthly reports, reconciliation, audit |
| **IT Support (Tier 1)** | [TBD if applicable] | Support SLA, ticket metrics, quality reviews |

**Control requirements** (per ISO standards):
- Control type and extent determined based on risk assessment
- Supplier agreements specify requirements (quality, environmental, security)
- Regular monitoring and review of supplier performance
- Verification that outsourced processes meet requirements
- See SW-IMS-POL-002 (Supplier Management Policy) and SW-ISMS-PRO-008 (Supplier Security Assessment Procedure)

### 8.1.4 Operational Criteria and Control

**Criteria established for**:
- Process performance (KPIs, targets)
- Product and service acceptance (quality standards, SLAs)
- Environmental performance (energy, travel, waste metrics)
- Information security performance (incident response time, vulnerability remediation)

**Control mechanisms**:
- Documented procedures and work instructions
- Approval authorities and segregation of duties
- Automated controls (access controls, monitoring, alerts)
- Regular reviews and audits

**Documented information maintained**:
- Process documentation (procedures, guidelines)
- Operational records (service delivery, project reports, incident logs)
- Evidence of conformity (test results, approvals, certifications)

---

## 8.2 Requirements for Products and Services (ISO 9001)

### 8.2.1 Customer Communication

Swedwise establishes effective communication with customers regarding:

**Information provided to customers**:
- Service descriptions and capabilities
- Pricing and terms
- SLA commitments and performance
- Incident and change notifications
- Compliance information (certifications, data protection)

**Communication channels**:
- Pre-sales: Website, sales presentations, proposals, meetings
- During service delivery: CSM (Customer Success Manager) as primary contact, service reports, review meetings
- Support: Support portal, email, phone, ticketing system

**Customer feedback mechanisms**:
- Customer satisfaction surveys (annual or per project)
- Service review meetings (quarterly for SaaS)
- Complaint handling (see SW-QMS-PRO-002 - Customer Feedback Procedure)
- Net Promoter Score (NPS) measurement

**Customer property and confidential information**:
- Handled per contractual agreements and NDA
- Customer data protected according to classification
- Customer intellectual property respected and safeguarded

### 8.2.2 Determining Requirements

Before committing to deliver products and services, Swedwise determines:

**Customer requirements**:
- Stated requirements (specifications, SLA, deliverables)
- Implied requirements (not stated but necessary for intended use)
- Statutory and regulatory requirements (GDPR, e-Archive law, sector regulations)
- Organizational requirements (Swedwise standards, policies)

**Requirements determination activities**:
- Pre-sales discovery: Understand customer context, needs, constraints
- Requirements documentation: Capture in proposals, statements of work, contracts
- Feasibility assessment: Can we deliver this with available resources and capabilities?

### 8.2.3 Review of Requirements

Swedwise reviews requirements before committing to supply products/services:

**Review includes**:
- Product/service requirements are defined and documented
- Contract or order requirements differing from proposal are resolved
- Swedwise has the capability to meet requirements (resources, competence, capacity)
- Risks are identified and acceptable
- Legal and compliance requirements are understood

**Review timing**:
- For consulting projects: During proposal phase; formal contract review before signing
- For SaaS services: Standard service offering reviewed annually; customer-specific requirements reviewed during onboarding

**Review participants**:
- Sales (requirements capture)
- Delivery/Technical (feasibility, resourcing)
- CISO (security requirements)
- Management (approval for significant commitments)

**Documented evidence**:
- Signed contracts or statements of work
- Proposal approval records
- Contract review checklist (for major projects)

**Handling changes**: See Section 8.2.4 below

### 8.2.4 Changes to Requirements

When requirements for products/services change, Swedwise ensures:

**Change control process**:
1. **Capture change**: Customer requests documented (email, change request form)
2. **Impact assessment**: Evaluate impact on scope, timeline, cost, resources, risk
3. **Approval**: Customer approval for scope/cost changes; internal approval for resource allocation
4. **Update documentation**: Amend contracts, project plans, specifications
5. **Communicate changes**: Inform relevant personnel (delivery team, support, operations)

**Change management**:
- For projects: Change request process per project methodology
- For SaaS services: SW-IMS-PRO-007 (Change Management Procedure)

**Document updates**:
- Relevant documented information updated to reflect changes
- Personnel retrained if significant process changes

---

## 8.3 Design and Development of Products and Services

### 8.3.1 Applicability

Swedwise's primary business is consulting and service delivery, not manufacturing physical products. Design and development applies to:

**Applicable areas**:
- **SaaS service design**: Architecting Swedwise Communications platform (infrastructure, security, integrations)
- **Customer solution design**: Designing implementations of OpenText, Salesforce, or other products for customer environments
- **Internal service offerings**: Developing new service packages or delivery models

**Not applicable**:
- Manufacturing or product development (Swedwise does not manufacture physical products)
- Extensive custom software development (minimal; primarily configuration of COTS products)

### 8.3.2 Design and Development Planning (where applicable)

For SaaS service and customer solution design, Swedwise considers:

**Planning elements**:
- **Nature, duration, complexity**: Scope and timeline of design effort
- **Process stages and controls**: Architecture review, security review, customer approval, testing
- **Verification and validation**: Testing against requirements, UAT with customer
- **Responsibilities and authorities**: Architect, project manager, customer, technical lead
- **Resources**: Staff skills, tools, environment
- **Customer involvement**: Requirements sign-off, design reviews, testing
- **Control of interfaces**: Integration points with customer systems, third-party services

### 8.3.3 Design and Development Inputs

For SaaS service design or customer project design, inputs include:

- **Functional requirements**: What the service/solution must do
- **Performance requirements**: SLA, capacity, response time
- **Statutory and regulatory requirements**: GDPR, security standards, customer compliance needs
- **Standards and codes of practice**: Industry best practices, vendor guidelines
- **Potential consequences of failure**: Risk assessment results
- **Customer environment constraints**: Existing systems, infrastructure, policies

**Inputs are documented** in:
- Requirements specifications
- Design briefs
- Risk assessments
- Customer contracts

### 8.3.4 Design and Development Controls

**Controls applied**:
- **Design reviews**: Architecture review, security review, peer review
- **Verification**: Testing that design meets requirements
- **Validation**: Confirming the solution works in customer environment (UAT)
- **Change control**: Managing design changes during implementation

**Documented evidence**:
- Design documentation (architecture diagrams, technical specs)
- Review records
- Test plans and results
- Customer acceptance sign-off

### 8.3.5 Design and Development Outputs

**Outputs include**:
- System architecture documentation
- Configuration specifications
- Integration specifications
- Security controls documentation
- Deployment runbooks
- User documentation and training materials

**Outputs ensure**:
- Meet input requirements
- Adequate for production/delivery
- Include acceptance criteria
- Specify characteristics essential for safe and proper use
- Reference monitoring and measurement requirements

### 8.3.6 Design and Development Changes

Changes to design are:
- Identified, reviewed, and controlled
- Impact assessed (scope, cost, timeline, risk)
- Approved before implementation
- Documented and communicated
- Verified and validated as appropriate

---

## 8.4 Control of Externally Provided Processes, Products and Services

### 8.4.1 General

Swedwise ensures that externally provided processes, products, and services conform to requirements. External providers include:

**Types of external provision**:
1. **Suppliers providing products/services for incorporation into Swedwise's services** (e.g., OpenText licenses, cloud infrastructure, software components)
2. **Suppliers providing products/services directly to customers on Swedwise's behalf** (e.g., data center hosting for SaaS)
3. **Outsourced processes** (e.g., payroll, infrastructure operations)

**Control requirements detailed in**:
- SW-IMS-POL-002: Supplier Management Policy
- SW-ISMS-PRO-008: Supplier Security Assessment Procedure

### 8.4.2 Type and Extent of Control

Control of external providers determined by:
- **Impact on consistent delivery**: Critical suppliers (cloud hosting, core software vendors) receive more scrutiny
- **Risk level**: High-risk suppliers (those handling customer data, security-critical) subject to rigorous assessment
- **Effectiveness of controls**: Verified through audits, certifications, performance monitoring

**Control types**:
- **Evaluation and selection**: Supplier assessment based on capability, certifications (ISO 27001), references
- **Performance monitoring**: SLA tracking, quality reviews, incident tracking
- **Re-evaluation**: Annual review of critical suppliers

### 8.4.3 Information to External Providers

Swedwise communicates to external providers:

**Requirements specified in contracts/agreements**:
- Products/services to be provided (specifications, SLAs)
- Approval and release procedures (acceptance criteria)
- Competence requirements (certifications, qualifications)
- Interaction and communication (points of contact, escalation)
- Performance monitoring and measurement (KPIs, reporting)
- Verification activities (audits, site visits, certifications)
- Quality, environmental, and security requirements
- Management system requirements (if supplier is part of IMS scope)

**Example requirements for SaaS infrastructure provider (Entiros)**:
- 99.9% uptime SLA
- ISO 27001 certified data center
- Swedish data residency
- Advance notification of changes (5 days)
- Quarterly performance reports
- Right to audit

---

## 8.5 Production and Service Provision

### 8.5.1 Control of Production and Service Provision

Swedwise implements production and service provision under controlled conditions:

**Controlled conditions include**:

| Control | Implementation |
|---------|----------------|
| **Documented information** | Service delivery procedures (SW-QMS-PRO-001), operational procedures, work instructions |
| **Suitable equipment and environment** | Offices, IT infrastructure, collaboration tools (Microsoft 365), SaaS platform infrastructure |
| **Competent personnel** | Role-based competence requirements, training programs (see Clause 7.2) |
| **Monitoring and measurement** | Service performance dashboards, SLA tracking, customer satisfaction surveys |
| **Infrastructure and process environment** | Cloud infrastructure (Azure), data center (Entiros), office facilities |
| **Appointment of competent persons** | Certified consultants, qualified IT staff, CISO, Quality Lead |
| **Validation and revalidation** | Testing for SaaS changes, UAT for customer projects |
| **Prevention of human error** | Standard operating procedures, checklists, peer review, automation |
| **Release, delivery, post-delivery** | Go-live procedures, handover to support, ongoing support and maintenance |

### 8.5.2 Identification and Traceability

**Service delivery traceability**:
- **Projects**: Project IDs, deliverable versioning, change log
- **SaaS services**: Customer tenant IDs, service tickets, change records, incident reports
- **Support requests**: Ticket numbers, customer reference, audit trail

**Traceability enables**:
- Linking customer requests to delivered outcomes
- Root cause analysis for issues
- Audit trail for compliance and quality

**Traceability maintained through**:
- Project management tools
- Support ticketing system
- Document version control (SW-IMS-PRO-001)

### 8.5.3 Property Belonging to Customers or External Providers

Swedwise exercises care with customer property including:

**Types of customer property**:
- **Customer data**: Confidential business information, personal data (GDPR), customer intellectual property
- **Customer equipment**: Provided for integration or testing (rare)
- **Customer systems**: Access credentials, system environments

**Protection measures**:
- Data classification and handling per SW-ISMS-POL-009 (Classification Policy)
- Access controls and authentication (least privilege)
- Data processing agreements (DPA) for personal data
- Backup and recovery procedures
- Secure deletion upon service termination

**Loss, damage, or unsuitability**:
- Customer notified immediately
- Incident documented and investigated
- Remediation actions taken
- Reported per SW-ISMS-PRO-002 (Incident Management Procedure) if data breach

### 8.5.4 Preservation

Swedwise preserves outputs during service provision to ensure conformity to requirements:

**Preservation activities**:
- **Identification**: Unique IDs for deliverables, versions for documents
- **Handling**: Secure transmission (encrypted email, secure file sharing)
- **Packaging**: N/A (services, not physical products)
- **Storage**: Secure document repositories (SharePoint), backup systems
- **Transmission**: TLS-encrypted communication, VPN for network access
- **Protection**: Access controls, malware protection, physical security for media

**Examples**:
- Project deliverables stored in SharePoint with version control
- Customer data stored in geo-redundant cloud storage (Azure)
- Backups retained per retention schedule
- Sensitive documents encrypted at rest

### 8.5.5 Post-Delivery Activities

Swedwise considers post-delivery activities to meet requirements:

**Activities include**:
- **Warranty and support**: SLA-based support for SaaS; warranty period for project deliverables
- **Contractual obligations**: Service reviews, reporting, maintenance
- **Customer feedback**: Surveys, feedback sessions, complaint handling
- **Statutory and regulatory requirements**: GDPR (data retention, right to erasure), e-Archive compliance
- **Potential consequences of products/services**: Risk of data loss, service disruption (mitigated by backup, DR, SLA)

**Support and maintenance**:
- SaaS services: Continuous monitoring, incident response, change management
- Consulting projects: Warranty support (e.g., 30-90 days), followed by optional maintenance contract
- Customer Success Manager maintains ongoing customer relationship

### 8.5.6 Control of Changes

Changes to production or service provision are:
- **Reviewed and controlled**: SW-IMS-PRO-007 (Change Management Procedure)
- **Impact assessed**: Technical, customer, security, environmental impact
- **Approved**: Based on risk and criticality
- **Documented**: Change records, approvals, implementation evidence

**Change types**:
- **Standard changes**: Pre-approved, low-risk (e.g., routine patching)
- **Normal changes**: Require CAB (Change Advisory Board) approval
- **Emergency changes**: Expedited for urgent issues; retrospective approval

**Documentation retained**:
- Change requests and approvals
- Implementation evidence
- Verification of change effectiveness

---

## 8.6 Release of Products and Services

Swedwise implements planned arrangements to verify that products/services meet requirements before release:

**Verification activities**:

| Service Type | Verification Method | Acceptance Criteria | Release Authority |
|--------------|---------------------|---------------------|-------------------|
| **SaaS Service** | Testing in staging environment, security testing, performance testing | No critical defects, SLA capability verified | SaaS Service Owner |
| **Consulting Projects** | UAT with customer, deliverable review, acceptance testing | Customer sign-off, acceptance criteria met | Delivery Manager + Customer |
| **Support Services** | Ticket resolution verification, customer confirmation | Issue resolved to customer satisfaction | Support Manager |

**Release is not permitted** until planned arrangements are satisfactorily completed, unless:
- Approved by relevant authority (e.g., emergency patch approved by CISO)
- Accepted by customer (customer waives testing requirement)

**Documented information**:
- Test results and verification records
- Customer acceptance sign-off
- Release approvals and authorizations
- Traceability to person(s) authorizing release

---

## 8.7 Control of Nonconforming Outputs

### 8.7.1 General

Swedwise ensures that outputs not conforming to requirements are identified and controlled to prevent unintended use or delivery.

**Nonconformity examples**:
- Service delivery not meeting SLA
- Project deliverable not meeting customer requirements
- SaaS platform incident causing downtime
- Incomplete or incorrect documentation

**Procedure**: SW-IMS-PRO-005 (Nonconformity and Corrective Action Procedure)

### 8.7.2 Handling Nonconforming Outputs

Actions taken for nonconforming outputs:

**Correction**:
- Fix the immediate issue (restore service, complete deliverable, correct error)
- Contain impact (prevent further customer impact)

**Segregation/hold**:
- Quarantine affected service or deliverable until corrected
- Example: Hold project deliverable pending rework; isolate affected SaaS tenant

**Customer notification**:
- Inform customer of nonconformity and corrective actions
- SLA breach notification and service credits (if applicable)

**Authorization for acceptance under concession**:
- Customer may accept nonconforming output with deviation (waiver)
- Documented and approved

**Rework**:
- Correct and re-verify
- Re-release per Section 8.6

**When detected after delivery**:
- Corrective action per SW-IMS-PRO-005
- Customer notification and remediation
- Incident investigation and root cause analysis

### 8.7.3 Documentation

Documented information retained:
- Nature of nonconformity
- Actions taken (correction, concession, rework)
- Approvals and authorizations
- Customer acceptance of concession (if applicable)

---

## 8.8 Information Security Operational Controls (ISO 27001 Clause 8)

### 8.8.1 Operational Planning and Control (ISO 27001)

Information security controls are implemented according to the risk treatment plan and Statement of Applicability (SoA).

**Reference documents**:
- SW-ISMS-SOA-001: Statement of Applicability (complete control mapping)
- SW-IMS-PRO-002: Risk Assessment Procedure (risk treatment plans)

**Implementation approach**:
- Annex A controls selected based on risk assessment
- Control implementation documented in SoA
- Control effectiveness verified through audits and testing

### 8.8.2 Information Security Controls Summary

**Control categories** (ISO 27001 Annex A):

| Category | Example Controls | Implementation Status |
|----------|------------------|-----------------------|
| **A.5 Organizational** (37 controls) | Policies, roles, supplier management, incident management | 95% applicable; 76% fully implemented |
| **A.6 People** (8 controls) | Screening, training, awareness, disciplinary | 100% applicable; 88% fully implemented |
| **A.7 Physical** (14 controls) | Access control, secure areas, clear desk, disposal | 93% applicable; 100% fully implemented (of applicable) |
| **A.8 Technological** (34 controls) | Access control, MFA, encryption, logging, patching | 91% applicable; 77% fully implemented |

**See SW-ISMS-SOA-001** for complete control mapping and implementation details.

### 8.8.3 Key Operational Security Controls

**Access management**:
- Azure AD identity and access management
- MFA mandatory for all users
- Least privilege access; role-based access control (RBAC)
- Quarterly access reviews (SW-ISMS-PRO-007)

**Vulnerability and patch management**:
- Automated vulnerability scanning
- Critical patches within 72 hours
- Monthly patch cycle for non-critical updates
- SW-ISMS-PRO-005 (Vulnerability Management Procedure)

**Security monitoring**:
- Microsoft 365 security alerts
- Azure Security Center
- Log retention 90 days minimum
- SW-ISMS-POL-010 (Logging and Monitoring Policy)

**Incident management**:
- Incident classification and response
- Incident response team defined
- Post-incident review and lessons learned
- SW-ISMS-PRO-002 (Incident Management Procedure)

**Cryptography**:
- TLS 1.2+ for data in transit
- AES-256 for data at rest
- Key management via Azure Key Vault
- SW-ISMS-POL-006 (Cryptographic Controls Policy)

**Backup and recovery**:
- Microsoft 365 backup (3rd party solution)
- SaaS platform backup every 6 hours
- Quarterly restore testing
- SW-ISMS-PRO-004 (Backup and Recovery Procedure)

---

## 8.9 Environmental Operational Controls (ISO 14001 Clause 8)

### 8.9.1 Operational Planning and Control (ISO 14001)

Swedwise establishes, implements, and maintains processes to meet environmental requirements and implement actions to address risks and opportunities.

**Operational controls for significant environmental aspects**:

| Environmental Aspect | Operational Control | Procedure/Guideline |
|---------------------|---------------------|---------------------|
| **Energy consumption** (offices) | Energy-efficient equipment, auto-shutdown policies, LED lighting | Office guidelines, procurement criteria |
| **Business travel** (carbon emissions) | Virtual meetings encouraged, travel approval, carbon offset program | Travel policy, remote working policy |
| **E-waste** (IT equipment disposal) | Certified recycler, data wiping before disposal, lifecycle replacement | Asset disposal procedure |
| **Paper consumption** | Digital-first policy, double-sided printing, recycled paper | Document management policy |
| **Cloud infrastructure** (SaaS platform energy) | Green data center selection (Entiros - renewable energy), efficient architecture | Data center SLA, architecture standards |

**See SW-EMS-REG-001** (Environmental Aspects Register) for complete environmental aspect evaluation.

### 8.9.2 Emergency Preparedness and Response (ISO 14001)

Swedwise prepares for and responds to environmental emergencies:

**Potential environmental emergencies**:
- Hazardous material spill (rare; primarily office supplies)
- Fire in office or data center
- Major power outage affecting operations
- Natural disaster affecting office or data center

**Emergency preparedness**:
- Emergency contact lists maintained (SW-EMS-FRM-002)
- Building evacuation procedures (building management)
- Fire suppression systems (building and data center)
- Business continuity and disaster recovery plans (SW-ISMS-POL-011)

**Emergency response**:
- Immediate response: Contain, evacuate, notify authorities
- Incident reporting: SW-IMS-PRO-002 (if environmental impact)
- Investigation: Root cause analysis, corrective action
- Testing: Annual emergency drill (fire evacuation)

**See SW-IMS-PRO-011** (Emergency Preparedness Procedure) for detailed emergency response procedures.

### 8.9.3 Environmental Compliance

Swedwise ensures compliance with environmental legal and regulatory requirements:

**Applicable environmental requirements**:
- EU/Swedish environmental regulations
- Waste electrical and electronic equipment (WEEE) directive
- Energy efficiency regulations
- Customer environmental requirements (e.g., green procurement criteria)

**Compliance monitoring**:
- Legal register maintained (SW-IMS-PRO-012)
- Compliance evaluations conducted annually
- Certification of e-waste recycler verified
- Data center environmental certifications reviewed

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| IMS Owner | | | |
| CEO | | | |
