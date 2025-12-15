---
document_id: SW-IMS-POL-005
title: Business Continuity Policy
doc_type: policy
version: "1.0"
status: draft
classification: internal
owner: CEO
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
---

# Business Continuity Policy

## 1. Purpose

This policy establishes Swedwise AB's commitment to maintaining critical business operations during disruptions and ensuring timely recovery of services. It provides the framework for business continuity planning aligned with ISO 9001 and ISO 27001 requirements, supporting our commitment to customers and stakeholders.

## 2. Scope

This policy applies to:

- All Swedwise business operations and services
- Critical business functions including:
  - Customer consulting and delivery services
  - SaaS platform operations (Swedwise Communications)
  - Customer support and service desk
  - Sales and customer acquisition
  - Core infrastructure and IT systems
- All locations (Karlstad HQ, Stockholm, Uddevalla offices, remote workers)
- All employees, contractors, and key suppliers
- All technology platforms supporting business operations

## 3. Business Continuity Objectives

Swedwise commits to:

1. **Service Continuity**: Minimize disruption to customer services and consulting engagements
2. **Rapid Response**: Detect and respond to incidents affecting business operations
3. **Timely Recovery**: Restore critical functions within acceptable timeframes
4. **Stakeholder Protection**: Protect interests of customers, employees, and partners
5. **Reputation Management**: Maintain customer confidence and brand integrity
6. **Regulatory Compliance**: Meet contractual obligations and SLA commitments during disruptions

### Recovery Objectives

| Service Level | Description | RTO Target | RPO Target |
|--------------|-------------|------------|------------|
| **Critical** | SaaS platform operations, customer-facing systems | ≤ 4 hours | ≤ 1 hour |
| **Essential** | Support systems, email, collaboration tools | ≤ 24 hours | ≤ 4 hours |
| **Important** | Internal business systems, finance, HR | ≤ 48 hours | ≤ 24 hours |
| **Standard** | Non-critical administrative functions | ≤ 5 days | ≤ 3 days |

**RTO** = Recovery Time Objective (how quickly we restore service)
**RPO** = Recovery Point Objective (maximum acceptable data loss)

*Note: Specific targets may be defined in customer contracts and service agreements. More stringent requirements always take precedence.*

## 4. Management Commitment

Swedwise management commits to:

- Provide adequate resources for business continuity planning and preparedness
- Support development and testing of business continuity arrangements
- Ensure business continuity is integrated into business planning and risk management
- Participate in business continuity exercises and reviews
- Lead by example during business continuity events
- Review business continuity capability in management reviews

## 5. Policy Statements

### 5.1 Critical Business Functions

The following business functions are designated as critical and require business continuity planning:

#### Customer Delivery Services
- **Description**: Consulting services at customer sites, project delivery
- **Impact of Disruption**: Customer dissatisfaction, contract penalties, revenue loss
- **Key Dependencies**: Consultant availability, customer system access, Microsoft 365
- **Recovery Priority**: Critical

#### SaaS Platform Operations
- **Description**: Swedwise Communications SaaS service (OpenText Exstream + Notifications)
- **Impact of Disruption**: Customer operations impacted, SLA breaches, financial penalties
- **Key Dependencies**: Data center (Entiros), Kubernetes infrastructure, OpenText licensing
- **Recovery Priority**: Critical

#### Customer Support Services
- **Description**: L1/L2/L3 support desk, incident management
- **Impact of Disruption**: Customer frustration, escalating issues, SLA breaches
- **Key Dependencies**: Support ticketing system, communication channels, knowledge base
- **Recovery Priority**: Critical

#### Business Operations
- **Description**: Sales, resource management, invoicing, payroll
- **Impact of Disruption**: Cash flow impact, employee dissatisfaction, missed opportunities
- **Key Dependencies**: ERP/finance systems, Microsoft 365, banking access
- **Recovery Priority**: Essential

### 5.2 Risk-Based Approach

Business continuity planning is based on systematic risk assessment considering:

- **Threat Scenarios**: IT outages, facility unavailability, supplier failure, pandemic, key person loss, cyber incidents
- **Impact Analysis**: Financial, operational, reputational, compliance consequences
- **Likelihood Assessment**: Probability of disruption scenarios
- **Dependencies**: Critical suppliers, infrastructure, key personnel
- **Existing Controls**: Redundancy, backups, remote work capability

Risk assessments are conducted:
- Annually as part of management review
- When significant changes occur (new services, infrastructure, locations)
- Following incidents or near-misses
- Before launching new services or major contracts

### 5.3 Business Continuity Planning

Business continuity plans are maintained for each critical function, including:

- **Activation Criteria**: When and how to invoke the plan
- **Response Team**: Roles, responsibilities, contact information
- **Recovery Procedures**: Step-by-step actions to restore operations
- **Alternative Arrangements**: Workarounds, backup locations, manual processes
- **Resource Requirements**: Equipment, tools, access credentials
- **Communication Protocols**: Internal and external stakeholder communication
- **Escalation Paths**: Decision-making authority, when to escalate

Plans are:
- Documented and maintained in accessible locations (digital and offline copies)
- Owned by responsible managers for each critical function
- Reviewed and updated at least annually
- Updated following organizational changes or incidents

### 5.4 Remote Work Capability

Swedwise leverages distributed workforce capabilities for business continuity:

- **Default Remote-Ready**: All staff equipped for remote work (laptops, VPN, cloud tools)
- **Flexible Locations**: Operations not dependent on single office location
- **Cloud-Based Tools**: Microsoft 365, cloud-based systems minimize facility dependency
- **Customer Sites**: Consultants already accustomed to working at various locations

This inherent flexibility provides resilience against facility-based disruptions.

### 5.5 Data Protection and Backup

Critical data and systems are protected through:

- **Regular Backups**: Automated daily backups of critical systems and data
- **Offsite Storage**: Backups stored in geographically separate locations
- **Backup Testing**: Regular verification of backup integrity and restorability
- **Retention Periods**: Aligned with business, legal, and contractual requirements
- **Cloud Resilience**: Leveraging Azure and Microsoft 365 redundancy features

Backup procedures are documented in [TBD - Backup and Recovery Procedure].

### 5.6 Incident Response Integration

Business continuity is integrated with incident management:

1. **Detection**: Monitoring and alerting for potential disruptions
2. **Assessment**: Determine if business continuity plan activation is required
3. **Activation**: Invoke appropriate plan and notify response team
4. **Response**: Execute recovery procedures, communicate with stakeholders
5. **Recovery**: Restore normal operations progressively
6. **Review**: Post-incident analysis and lessons learned

Incident response procedures are documented in [TBD - Incident Management Procedure].

### 5.7 Supplier Dependencies

Critical supplier relationships are managed for business continuity:

| Supplier | Service | Criticality | Contingency |
|----------|---------|-------------|-------------|
| **Entiros AB** | Data center hosting (SaaS infrastructure) | Critical | SLA with uptime guarantees, documented escalation |
| **OpenText** | Software licensing (Exstream, etc.) | Critical | Maintain licenses current, documented support channels |
| **Microsoft** | Microsoft 365, Azure services | Critical | Cloud provider redundancy, support agreements |
| **[TBD]** | Support ticketing system | Essential | Alternative communication channels documented |

Supplier arrangements include:
- Contractual SLA commitments
- Defined support and escalation procedures
- Regular review of supplier performance and resilience
- Alternative supplier options where feasible

Supplier management procedures are documented in [TBD - Supplier Management Policy and Procedure].

### 5.8 Communication Protocols

Clear communication is essential during disruptions:

#### Internal Communication
- **Primary Channel**: Microsoft Teams
- **Backup Channel**: Email, mobile phone
- **Emergency Contact List**: Maintained and accessible offline
- **Status Updates**: Regular updates to staff during incidents

#### Customer Communication
- **Notification Triggers**: When service disruption affects customers or exceeds [TBD - e.g., 1 hour]
- **Responsible Party**: [TBD - Customer Success, Support Lead]
- **Communication Channels**: Email, customer portal, phone for critical customers
- **Message Content**: Impact, estimated recovery time, interim arrangements, updates

#### External Stakeholders
- **Partners/Suppliers**: Notify key suppliers if their action or support is needed
- **Regulatory**: As required by law or contractual obligations
- **Public Relations**: [TBD - CEO/Management] approves any public statements

Communication templates and procedures are maintained in [TBD - Business Continuity Plan].

### 5.9 Testing and Exercising

Business continuity arrangements are tested to ensure effectiveness:

#### Testing Schedule
- **Desktop Exercises**: Annual review of plans with key personnel
- **Component Testing**: Backup restoration tests quarterly
- **Full Exercises**: Simulated disruption scenarios [TBD - annually or biennially]
- **Unannounced Tests**: Occasional surprise tests to verify preparedness

#### Testing Objectives
- Verify plans are current and accurate
- Confirm recovery time objectives are achievable
- Validate communication protocols
- Build staff familiarity and confidence
- Identify gaps and improvement opportunities

Test results are:
- Documented with lessons learned
- Reviewed by management
- Used to update plans and procedures
- Tracked for continuous improvement

### 5.10 Training and Awareness

Staff are prepared for business continuity events through:

- **Onboarding**: New staff briefed on business continuity expectations
- **Role-Specific Training**: Response team members trained on their responsibilities
- **General Awareness**: All staff aware of basic business continuity procedures (e.g., emergency contact information)
- **Annual Refresher**: Updates on plan changes and lessons from exercises
- **Just-in-Time Guidance**: Plans written to guide responders during events

## 6. Roles and Responsibilities

### Chief Executive Officer (CEO)

**Accountability**: Overall business continuity and crisis management

Responsibilities:
- Approve business continuity policy and plans
- Allocate resources for business continuity preparedness
- Lead crisis management for major incidents
- Make strategic decisions during disruptions
- Authorize external communications during crises
- Review business continuity capability in management reviews

### Business Continuity Lead

**Assigned to**: [TBD - name and role, e.g., Quality Lead, CISO, Operations Manager]

Responsibilities:
- Coordinate development and maintenance of business continuity plans
- Conduct business impact analyses and risk assessments
- Organize business continuity testing and exercises
- Maintain emergency contact lists and call trees
- Report on business continuity preparedness to management
- Facilitate post-incident reviews and improvement actions
- Coordinate with incident management and IT operations

### Management Team / Department Heads

Responsibilities:
- Develop and maintain business continuity plans for their functions
- Identify critical activities and dependencies
- Participate in risk assessments and business impact analyses
- Ensure staff are trained and aware of business continuity procedures
- Lead response for incidents affecting their areas
- Test plans and participate in exercises
- Report business continuity capability and issues

### IT Operations / Technical Lead

**Assigned to**: [TBD - name, or external partner]

Responsibilities:
- Implement and maintain technical backup and recovery solutions
- Monitor infrastructure and service availability
- Execute IT disaster recovery procedures
- Coordinate with data center and cloud service providers
- Test backup restoration and system recovery
- Maintain technical documentation for recovery procedures
- Support business continuity exercises

### All Staff

Responsibilities:
- Be aware of basic business continuity procedures
- Know how to report incidents
- Understand emergency contact procedures
- Follow business continuity plan instructions during events
- Participate in testing and exercises as required
- Report issues or improvement suggestions

## 7. Business Continuity Governance

### Management Review

Business continuity capability is reviewed by management at least annually, including:

- Results of business continuity tests and exercises
- Business continuity incidents and responses
- Changes in business context affecting continuity risks
- Resource adequacy for business continuity preparedness
- Opportunities for improvement
- Alignment with business objectives and risk appetite

### Continuous Improvement

Business continuity arrangements are improved through:

- Lessons learned from incidents and exercises
- Changes in business operations, technology, or risks
- Benchmarking against industry practices
- Feedback from staff, customers, and stakeholders
- Audit findings and recommendations
- Monitoring of emerging threats and vulnerabilities

### Integration with IMS

Business continuity is integrated into the Integrated Management System:

- Aligned with quality management (ISO 9001) risk-based thinking
- Integrated with information security incident management (ISO 27001)
- Coordinated with environmental emergency preparedness (ISO 14001)
- Shared governance, audit, and review processes
- Unified documentation and record management

## 8. Review and Update

This policy is:

- Reviewed at least annually by [TBD - Business Continuity Lead]
- Updated when significant changes occur in:
  - Business operations, services, or critical functions
  - Risk landscape or threat environment
  - Organizational structure or key personnel
  - Technology infrastructure or dependencies
  - Legal or contractual requirements
- Approved by CEO
- Communicated to all staff following updates

## 9. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- [TBD - SW-IMS-POL-003: Supplier Management Policy]
- [TBD - SW-IMS-POL-004: Remote Working Policy]

**Procedures:**
- [TBD - SW-IMS-PRO-001: Business Continuity Planning Procedure]
- [TBD - SW-IMS-PRO-002: Incident Management Procedure]
- [TBD - SW-ISMS-PRO-005: Backup and Recovery Procedure]
- [TBD - SW-IMS-PRO-003: Risk Assessment Procedure]

**Plans:**
- [TBD - Business Continuity Plan (overall)]
- [TBD - IT Disaster Recovery Plan]
- [TBD - SaaS Service Continuity Plan]
- [TBD - Crisis Communication Plan]

**Supporting Documents:**
- [TBD - Business Impact Analysis]
- [TBD - Emergency Contact List]
- [TBD - BC Testing and Exercise Schedule]

## 10. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CEO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*

**Swedwise AB | Make Time For The Good**
