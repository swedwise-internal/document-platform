---
document_id: SW-IMS-POL-006
title: Service Continuity Policy
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
  - ISO 22301
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
  - SW-ISMS-POL-012
  - SW-QMS-POL-002
---

# Service Continuity Policy

## 1. Purpose

This policy establishes Swedwise AB's commitment to maintaining critical services during disruptions and ensuring timely recovery. It defines our approach to service continuity management, supporting ISO 9001 quality objectives, ISO 27001 information security availability requirements, and our contractual obligations to customers, particularly the 99.9% SLA commitment for Swedwise Communications SaaS services.

## 2. Scope

This policy applies to:

- All Swedwise services delivered to customers:
  - **Swedwise Communications SaaS** (OpenText Exstream, Notifications)
  - **Consulting and professional services** at customer sites
  - **Customer support services** (L1/L2/L3 support desk)
  - **Project delivery and implementation services**
- Supporting business operations:
  - IT infrastructure and systems
  - Business applications (Microsoft 365, ERP, CRM)
  - Communication systems
  - Data and information assets
- All locations (Karlstad HQ, Stockholm, Uddevalla offices, remote workers, data center)
- All employees, contractors, and critical suppliers
- All disruption scenarios (IT failures, facility issues, supplier outages, cyber incidents, pandemics, key person unavailability)

## 3. Service Continuity Objectives

Swedwise commits to:

1. **Service Availability**: Maintain critical customer services within SLA commitments (≥ 99.9% for SaaS)
2. **Rapid Detection and Response**: Identify and respond to service disruptions within defined timeframes
3. **Timely Recovery**: Restore services within Recovery Time Objectives (RTO)
4. **Data Protection**: Minimize data loss within Recovery Point Objectives (RPO)
5. **Stakeholder Communication**: Keep customers and stakeholders informed during disruptions
6. **Continuous Improvement**: Learn from disruptions to enhance resilience
7. **Preparedness**: Maintain tested and current service continuity plans

### Service Level Targets

| Service | Availability Target | RTO | RPO | Priority |
|---------|-------------------|-----|-----|----------|
| **Swedwise Communications SaaS** | 99.9% (SLA commitment) | 4 hours | 1 hour | Critical |
| **Customer Support Systems** | 99.0% | 8 hours | 4 hours | Critical |
| **Consulting Service Delivery** | Best effort | 24 hours | N/A | Critical |
| **Microsoft 365 / Email** | 99.5% (provider SLA) | 8 hours | 4 hours | Essential |
| **Business Systems** (ERP, CRM) | 95.0% | 24 hours | 24 hours | Important |
| **Internal Collaboration Tools** | 90.0% | 48 hours | 24 hours | Standard |

**Definitions:**
- **Availability**: Percentage of time service is operational (calculated monthly)
- **RTO (Recovery Time Objective)**: Maximum acceptable time to restore service after disruption
- **RPO (Recovery Point Objective)**: Maximum acceptable data loss (time)
- **Priority**: Criticality level for resource allocation and recovery sequencing

*Note: Customer-specific SLAs may define more stringent targets and take precedence.*

## 4. Management Commitment

Swedwise management commits to:

- Provide adequate resources for service continuity planning, testing, and improvement
- Support development and maintenance of service continuity capabilities
- Participate in service continuity exercises and reviews
- Make timely decisions during service disruptions
- Integrate service continuity into business planning and risk management
- Review service continuity performance in management reviews
- Foster a culture of resilience and preparedness

## 5. Policy Statements

### 5.1 Service Continuity Framework

Swedwise's service continuity framework includes:

**Business Impact Analysis (BIA):**
- Identify critical services and supporting resources
- Assess impact of service disruption over time
- Determine recovery priorities and objectives
- Identify dependencies (people, systems, suppliers, facilities)

**Risk Assessment:**
- Identify disruption scenarios and threats
- Assess likelihood and potential impact
- Evaluate existing controls and resilience
- Identify gaps and improvement opportunities

**Continuity Strategies:**
- Define recovery strategies for each critical service
- Identify alternative arrangements and workarounds
- Document procedures and decision criteria
- Allocate resources and responsibilities

**Testing and Exercises:**
- Regular testing to validate continuity arrangements
- Exercises to build competence and identify gaps
- Post-test reviews and improvement actions

**Review and Improvement:**
- Annual review of continuity plans and capabilities
- Updates following organizational or service changes
- Continuous improvement based on incidents and exercises

### 5.2 Critical Service Identification

The following services are designated as critical based on customer impact and business consequence:

#### Swedwise Communications SaaS Platform

**Description:**
- OpenText Exstream document generation
- Multi-channel notifications (email, SMS)
- Customer portal and APIs
- Hosted at Entiros AB data center (Kubernetes infrastructure)

**Criticality Justification:**
- Direct customer operational dependency
- Contractual SLA commitment (99.9% availability)
- Financial penalties for SLA breach
- Customer satisfaction and retention impact
- Revenue impact from service credits or customer churn

**Maximum Tolerable Downtime:** 4 hours before significant customer impact

**Recovery Strategy:**
- High availability architecture (Kubernetes cluster, load balancing)
- Redundant infrastructure components
- Automated failover capabilities
- Database replication and backup
- Data center SLA with Entiros (uptime, support, escalation)
- 24/7 monitoring and alerting
- Documented incident response and recovery procedures

**Key Dependencies:**
- Entiros AB data center (infrastructure, network, power, cooling)
- OpenText software licenses and support
- Database system (PostgreSQL or similar)
- Network connectivity (internet, VPN)
- Monitoring and management tools
- Support staff availability

#### Customer Support Services

**Description:**
- L1/L2/L3 support desk for SaaS customers and consulting clients
- Incident management and troubleshooting
- Support ticketing system
- Communication channels (email, phone, portal)

**Criticality Justification:**
- Customer SLA commitments (response times)
- Customer satisfaction and trust
- Revenue protection (renewal risk if poor support)
- Escalation and incident coordination

**Maximum Tolerable Downtime:** 8 hours before significant customer impact

**Recovery Strategy:**
- Cloud-based ticketing system (high availability)
- Multiple communication channels (email, phone, Teams)
- Remote work capability for support staff
- Knowledge base and documentation accessible online
- Escalation to management and technical experts
- Backup staff coverage during incidents

**Key Dependencies:**
- Support ticketing system (cloud SaaS)
- Communication tools (Microsoft 365, phone system)
- Access to customer systems and logs
- Support staff availability (primary and backup)
- Knowledge base and documentation

#### Consulting Service Delivery

**Description:**
- Consultant services at customer sites
- Project delivery and implementation
- Technical expertise and problem-solving

**Criticality Justification:**
- Customer dependency and project timelines
- Revenue generation (time and materials contracts)
- Customer satisfaction and relationship
- Contractual commitments and deadlines

**Maximum Tolerable Downtime:** 24 hours before customer escalation

**Recovery Strategy:**
- Distributed workforce (consultants at various customer sites)
- Remote work capability (laptop, VPN, Microsoft 365)
- Backup consultant availability for critical customers
- Project documentation and knowledge sharing
- Customer communication and expectation management
- Flexible resource allocation

**Key Dependencies:**
- Consultant availability (illness, travel issues)
- Laptop and remote access tools
- Customer site access
- Microsoft 365 (email, Teams, SharePoint)
- Project documentation and code repositories

#### Business Operations

**Description:**
- Finance and invoicing (critical for cash flow)
- Resource management and allocation
- Sales and customer acquisition
- HR and payroll

**Criticality Justification:**
- Cash flow and financial operations
- Employee satisfaction (payroll)
- Revenue pipeline and customer acquisition
- Operational coordination

**Maximum Tolerable Downtime:** 24-48 hours depending on function

**Recovery Strategy:**
- Cloud-based business systems (Microsoft 365, cloud ERP/CRM)
- Remote work capability for all office staff
- Distributed offices (Karlstad, Stockholm, Uddevalla) provide geographic resilience
- Key financial processes documented with backup personnel
- Banking access from multiple locations/devices

**Key Dependencies:**
- Microsoft 365 (email, collaboration, business apps)
- ERP/finance system
- CRM system
- Banking systems and access
- Key personnel availability

### 5.3 Disruption Scenarios and Response Strategies

Swedwise prepares for the following disruption scenarios:

#### IT System Failures

**Scenarios:**
- Server or infrastructure failure
- Network or internet connectivity loss
- Cloud service outage (Azure, Microsoft 365)
- Database corruption or failure
- Cyber incident (ransomware, DDoS)

**Response Strategies:**
- High availability architecture for SaaS platform
- Cloud service redundancy (Azure availability zones)
- Backup and restoration procedures
- Incident response and escalation
- Cybersecurity defenses and monitoring
- Alternative network paths or failover
- Data center provider SLA and support (Entiros)

#### Facility Unavailability

**Scenarios:**
- Office access loss (fire, flood, power outage, security incident)
- Data center disruption (Entiros facility issue)

**Response Strategies:**
- Remote work capability (standard for all staff)
- Multiple office locations (Karlstad, Stockholm, Uddevalla)
- Cloud-first IT strategy (minimal facility dependency)
- Data center SLA and geographic redundancy options (future consideration)
- Emergency communication and coordination via mobile/cloud tools

#### Supplier or Partner Disruption

**Scenarios:**
- Entiros data center outage or degradation
- OpenText licensing or support issue
- Microsoft cloud service disruption
- Critical subcontractor unavailability

**Response Strategies:**
- Supplier SLAs with uptime commitments
- Escalation contacts and procedures
- Alternative suppliers identified where feasible
- Contractual protections (SLA credits, termination rights)
- Regular supplier performance monitoring
- Diversification where practical (avoid single point of failure)

#### Key Personnel Unavailability

**Scenarios:**
- Illness or injury of critical staff
- Key person departure
- Team unavailability (pandemic, travel restrictions)

**Response Strategies:**
- Cross-training and knowledge sharing
- Documentation of critical processes and systems
- Backup coverage for key roles (SaaS operations, support, management)
- Remote work enables geographic distribution
- Resource management and flexible allocation
- Contractor or partner support for specialized skills

#### Pandemic or Health Crisis

**Scenarios:**
- Widespread staff illness
- Government restrictions on movement or office access
- Customer site access restrictions

**Response Strategies:**
- Remote work as standard operating model
- Cloud-based tools and collaboration
- Flexible working arrangements
- Health and safety protocols
- Communication and coordination via digital channels
- Reduced dependency on physical presence

### 5.4 Data Protection and Backup

Critical data is protected to meet RPO targets:

#### Backup Strategy

**SaaS Platform Data:**
- **Frequency**: Daily full backup, continuous transaction log backup (or equivalent)
- **Retention**: 30 days daily, 12 months weekly, [TBD] yearly archives
- **Storage**: Offsite/separate location from primary data center
- **Testing**: Monthly restoration test of sample data
- **RPO Target**: 1 hour (transaction logs or replication)

**Business Data (Microsoft 365, business systems):**
- **Frequency**: Continuous (cloud provider backups) + periodic exports
- **Retention**: Per provider SLA and business requirements
- **Storage**: Cloud provider redundancy + periodic exports to separate location
- **Testing**: Quarterly restoration test
- **RPO Target**: 4-24 hours depending on data type

**Configuration and Code:**
- **Frequency**: Version control (Git) with continuous commit/push
- **Retention**: Full history in Git repositories
- **Storage**: GitHub/Azure DevOps (cloud) + local copies
- **Testing**: Code restore as part of development workflow
- **RPO Target**: Near-zero (version control)

**Documentation and Knowledge:**
- **Frequency**: Continuous (SharePoint, cloud storage)
- **Retention**: Version history maintained
- **Storage**: Microsoft 365 cloud + periodic exports
- **Testing**: As needed
- **RPO Target**: 24 hours acceptable

#### Backup Procedures

Backup procedures documented in [TBD - SW-ISMS-PRO-XXX: Backup and Recovery Procedure] including:
- Backup schedule and automation
- Backup verification and monitoring
- Restoration procedures and testing
- Roles and responsibilities
- Escalation for backup failures

#### Data Recovery

Recovery procedures ensure:
- Clear recovery steps for each system
- Defined roles and authorization for recovery actions
- Validation of recovered data (integrity, completeness)
- Communication during recovery operations
- Post-recovery verification and testing
- Documentation of recovery actions

### 5.5 Service Monitoring and Incident Detection

Proactive monitoring enables rapid disruption detection:

#### SaaS Platform Monitoring

**Infrastructure Monitoring:**
- Server/node health and availability
- Network connectivity and performance
- Database performance and availability
- Application health and responsiveness
- Queue depths and processing rates

**Application Monitoring:**
- API availability and response times
- Document generation success rates
- Notification delivery success rates
- Error rates and exceptions
- User authentication and access

**Alerting:**
- Real-time alerts for critical issues
- Escalation for unacknowledged alerts
- 24/7 monitoring coverage (automated + on-call)
- Alert routing to appropriate personnel

Tools: [TBD - e.g., Azure Monitor, Prometheus/Grafana, PagerDuty]

#### Business Systems Monitoring

**Microsoft 365:**
- Service health dashboard monitoring
- User-reported issues
- Email flow and collaboration tool availability

**Business Applications:**
- Cloud provider status pages
- Scheduled health checks
- User-reported issues

**Internal Monitoring:**
- Regular checks of critical business processes
- Quarterly simulated disruption tests

### 5.6 Incident Response and Recovery

Structured approach to service disruptions:

#### Incident Classification

| Severity | Definition | Initial Response | Updates | Example |
|----------|-----------|-----------------|---------|---------|
| **Critical** | Complete service outage, SLA breach imminent | 15 minutes | Every 30 minutes | SaaS platform down |
| **High** | Significant degradation, partial outage | 1 hour | Every 2 hours | Database performance severely degraded |
| **Medium** | Limited impact, workaround available | 4 hours | Every 8 hours | Single feature unavailable |
| **Low** | Minimal impact, single user affected | 1 business day | As needed | Cosmetic issue, user error |

#### Incident Response Process

1. **Detection**: Monitoring alert, user report, or proactive check
2. **Triage**: Assess severity, impact, and urgency
3. **Initial Response**:
   - Acknowledge incident
   - Assign incident manager (for Critical/High)
   - Notify stakeholders (internal and customer if SLA-affecting)
   - Begin investigation
4. **Investigation**:
   - Gather facts (logs, monitoring data, user reports)
   - Identify root cause or contributing factors
   - Develop recovery plan
5. **Recovery**:
   - Implement recovery actions (restart, failover, restore from backup)
   - Validate service restoration
   - Monitor for stability
6. **Communication**:
   - Update stakeholders on progress
   - Notify customers when service is restored
   - Provide post-incident summary (for Critical/High)
7. **Closure**:
   - Confirm service is stable
   - Document incident and actions taken
   - Conduct post-incident review (for Critical/High)
8. **Improvement**:
   - Identify root cause and contributing factors
   - Implement corrective actions to prevent recurrence
   - Update procedures or monitoring as needed

Documented in [TBD - SW-ISMS-PRO-XXX: Incident Management Procedure]

#### Escalation

Escalation path for incidents:

- **L1**: On-call engineer / support staff
- **L2**: Technical lead / system owner
- **L3**: CISO / senior technical expert
- **Management**: CEO / Management team (for business decisions, customer escalation)
- **Suppliers**: Entiros (data center), OpenText (software), Microsoft (cloud services)

Escalation triggers:
- Incident exceeds initial estimated resolution time
- Customer escalation or SLA breach risk
- Requires business decision (trade-offs, costs)
- Requires supplier intervention
- Cross-functional coordination needed

### 5.7 Customer Communication During Disruptions

Clear communication maintains customer trust during service disruptions:

#### Notification Triggers

Notify customers when:
- Service disruption affects their operations
- SLA-defined availability threshold is at risk
- Incident duration exceeds [TBD - e.g., 30 minutes] for Critical services
- Planned maintenance impacts service availability

#### Communication Content

**Initial Notification:**
- Incident description and affected services
- Impact assessment (what is unavailable or degraded)
- Estimated time to resolution (if known)
- Interim workarounds (if available)
- Next update time
- Contact for questions

**Progress Updates:**
- Current status and actions taken
- Revised estimate if timeline changes
- Continued impact or any changes
- Workarounds or mitigation

**Resolution Notification:**
- Confirmation service is restored
- Brief explanation of cause
- Apology for inconvenience
- Contact for any remaining concerns

**Post-Incident Summary** (for significant incidents):
- Detailed timeline and root cause
- Impact summary (duration, users affected)
- Actions taken to resolve
- Preventive measures to avoid recurrence
- Provided within [TBD - e.g., 48-72 hours]

Aligned with **SW-QMS-POL-002: Customer Communication Policy**.

#### Communication Channels

- Email: Primary channel for service notifications
- Customer portal: Status page updates (if available)
- Phone: For critical customers or upon request
- Ticketing system: Updates on support tickets

### 5.8 Testing and Exercising

Service continuity arrangements are validated through testing:

#### Testing Types and Frequency

**Component Testing:**
- **Backup restoration**: Monthly (sample data), quarterly (full system)
- **Failover procedures**: Quarterly for critical systems
- **Monitoring and alerting**: Continuous validation, monthly review
- **Alternative work locations**: Semi-annual remote work day (if not already standard)

**Tabletop Exercises:**
- **Frequency**: Semi-annual
- **Participants**: Management, service owners, technical leads
- **Scenarios**: Walk through disruption scenarios and response
- **Outcome**: Validate plans, identify gaps, assign improvement actions

**Full Simulation Exercises:**
- **Frequency**: Annual
- **Participants**: Broader team participation
- **Scenarios**: Simulated disruption with real-time response
- **Outcome**: Test end-to-end continuity capabilities, validate RTOs, build muscle memory

**Unannounced Tests:**
- **Frequency**: Occasional (discretion of management)
- **Purpose**: Validate real-world preparedness
- **Scope**: Limited to avoid customer impact

#### Testing Objectives

- Validate continuity plans are accurate and executable
- Confirm RTOs and RPOs are achievable
- Verify staff know their roles and responsibilities
- Identify gaps, issues, or improvement opportunities
- Build confidence and competence in response procedures
- Assess communication effectiveness

#### Test Documentation

All tests documented with:
- Test scope, objectives, and scenario
- Participants and roles
- Results (success/failure against objectives)
- Issues identified
- Improvement actions
- Follow-up and closure of actions

Test results reviewed in management reviews.

### 5.9 Service Continuity Planning

Service continuity plans maintained for each critical service:

#### Plan Contents

**Service Description:**
- Service overview and criticality
- Customers and stakeholders
- Service level targets (availability, RTO, RPO)

**Dependencies:**
- IT systems and infrastructure
- Key personnel and roles
- Suppliers and partners
- Facilities and equipment
- Data and information

**Disruption Scenarios:**
- Identified threats and triggers
- Impact and consequences
- Activation criteria

**Response Procedures:**
- Immediate actions (first 15 minutes, first hour)
- Recovery steps (detailed procedures)
- Alternative arrangements (workarounds, manual processes)
- Roles and responsibilities
- Contact information and escalation

**Communication:**
- Internal communication and coordination
- Customer communication (templates, approval)
- Supplier communication and escalation

**Recovery Validation:**
- Tests to confirm service restoration
- Acceptance criteria
- Monitoring post-recovery

#### Plan Ownership and Maintenance

- Each critical service has assigned plan owner
- Plans reviewed and updated at least annually
- Updated following:
  - Organizational or service changes
  - Technology changes (infrastructure, suppliers)
  - Incidents or test findings
  - Changes in risk landscape

Plans stored in accessible location (digital and offline backup):
- SharePoint or document management system
- Offline copies (PDF) accessible without systems
- Key personnel have local copies

### 5.10 Continuous Improvement

Service continuity capabilities improve through:

**Learning from Incidents:**
- Post-incident reviews for all Critical/High incidents
- Root cause analysis and corrective actions
- Sharing lessons learned across teams
- Updating plans and procedures

**Learning from Tests:**
- Gaps identified in exercises addressed
- Procedures refined based on test experience
- Training and awareness updated

**Monitoring Trends:**
- Incident frequency and duration trends
- Service availability performance
- RTO/RPO achievement rates
- Customer impact and satisfaction

**External Input:**
- Industry best practices and benchmarking
- Supplier updates (technology, services)
- Regulatory or standard changes
- Customer feedback and requirements

**Management Review:**
- Service continuity performance reviewed quarterly
- Resource adequacy assessed
- Risks and opportunities identified
- Improvement initiatives prioritized and funded

## 6. Roles and Responsibilities

### Chief Executive Officer (CEO)

Responsibilities:
- Overall accountability for service continuity
- Approve service continuity policy and plans
- Allocate resources for continuity preparedness
- Lead crisis management for major disruptions
- Make strategic decisions during incidents (customer communication, financial, contractual)
- Review service continuity performance in management reviews

### Chief Information Security Officer (CISO)

**Assigned to**: [TBD]

Responsibilities:
- Coordinate service continuity planning and implementation
- Conduct business impact analyses and risk assessments
- Develop and maintain service continuity plans
- Organize continuity testing and exercises
- Lead incident response for IT and SaaS service disruptions
- Monitor service availability and performance
- Report on service continuity to management
- Coordinate with suppliers on continuity matters

### Service Owners / Product Owners

**Assigned to**: [TBD - e.g., SaaS Service Manager, Support Manager, Consulting Lead]

Responsibilities:
- Define service continuity requirements (RTO, RPO, availability)
- Participate in business impact analysis
- Develop and maintain continuity plans for their services
- Ensure staff are trained on continuity procedures
- Lead service recovery for their area
- Communicate with customers during disruptions
- Test and validate continuity arrangements
- Identify service continuity improvement needs

### Technical Lead / IT Operations

**Assigned to**: [TBD - internal or partner]

Responsibilities:
- Implement and maintain technical continuity controls (HA, backup, monitoring)
- Execute technical recovery procedures
- Monitor infrastructure and service health
- Respond to incidents and alerts
- Coordinate with data center and cloud providers
- Test backup and recovery procedures
- Maintain technical documentation
- Support service continuity exercises

### Support Team

Responsibilities:
- Monitor for service issues and customer reports
- Triage and respond to incidents
- Execute support continuity procedures
- Communicate with customers per procedures
- Escalate incidents as needed
- Document incidents and resolutions

### All Staff

Responsibilities:
- Understand basic continuity expectations and procedures
- Know how to report incidents or disruptions
- Follow continuity plan instructions during events
- Maintain remote work capability (laptop, VPN, credentials)
- Participate in tests and exercises as required
- Report continuity concerns or improvement ideas

## 7. Integration with IMS

Service continuity is integrated with the Integrated Management System:

- **Quality Management (ISO 9001)**: Service continuity ensures consistent service delivery and customer satisfaction
- **Information Security (ISO 27001)**: Continuity addresses availability objective, aligns with incident response
- **Environmental Management (ISO 14001)**: Environmental emergency preparedness integrated with continuity planning

Shared processes:
- Risk assessment methodology
- Incident management
- Management review
- Internal audit and continuous improvement
- Documentation and records

## 8. Review and Update

This policy is:

- Reviewed at least annually by [TBD - CISO, CEO]
- Updated when significant changes occur in:
  - Service offerings or customer commitments
  - Infrastructure, technology, or suppliers
  - Organizational structure or resources
  - Risk landscape or threat environment
  - Legal, regulatory, or contractual requirements
  - Lessons from incidents or exercises
- Approved by CEO
- Communicated to all staff following updates

## 9. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-012: Capacity Management Policy
- SW-QMS-POL-002: Customer Communication Policy
- [TBD - SW-IMS-POL-XXX: Supplier Management Policy]

**Procedures:**
- [TBD - SW-IMS-PRO-XXX: Service Continuity Planning Procedure]
- [TBD - SW-ISMS-PRO-XXX: Incident Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Backup and Recovery Procedure]
- [TBD - SW-IMS-PRO-XXX: Risk Assessment Procedure]
- [TBD - SW-QMS-PRO-XXX: Customer Communication Procedure]

**Plans:**
- [TBD - SaaS Platform Service Continuity Plan]
- [TBD - Customer Support Continuity Plan]
- [TBD - Consulting Services Continuity Plan]
- [TBD - IT Disaster Recovery Plan]
- [TBD - Crisis Communication Plan]

**Supporting Documents:**
- [TBD - Business Impact Analysis]
- [TBD - Service Continuity Test Schedule and Results]
- [TBD - Incident Log and Post-Incident Reviews]
- [TBD - Service Availability Reports]
- [TBD - Emergency Contact List]

## 10. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CEO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*

**Swedwise AB | Make Time For The Good**
