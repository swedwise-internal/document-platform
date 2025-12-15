---
document_id: SW-QMS-PRO-001
title: Service Delivery Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: Quality Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
related_documents:
  - SW-QMS-POL-001
  - SW-IMS-PRO-001
  - SW-IMS-PRO-008
  - SW-QMS-PRO-002
---

# Service Delivery Procedure

## 1. Purpose

This procedure establishes a consistent approach to delivering services at Swedwise AB, ensuring that:

- Customer requirements are understood and met
- Services are delivered to agreed standards and timelines
- Service level agreements (SLAs) are monitored and maintained
- Service performance is measured and reported
- Consulting and SaaS services are delivered effectively
- Customer satisfaction is achieved
- Continuous improvement is embedded in service delivery

This procedure supports ISO 9001 requirements for operational planning, control of processes, and customer-focused service delivery.

## 2. Scope

This procedure applies to:

**Service Types**:
- **SaaS Services**: Swedwise Communications (OpenText Exstream + Notifications), hosted services
- **Consulting Services**: Software implementation, configuration, customization projects
- **Support Services**: Technical support, maintenance, helpdesk services
- **Professional Services**: Training, advisory, integration services

**Service Lifecycle Phases**:
- Service design and planning
- Customer onboarding
- Service provisioning and delivery
- Service level management
- Performance monitoring and reporting
- Service improvement

**Locations**: All Swedwise offices and remote service delivery

**Out of Scope**:
- Internal IT services (covered by separate IT operations procedures)
- Pre-sales activities (covered by sales procedures)
- Detailed technical implementation steps (covered by discipline-specific work instructions)

## 3. Definitions

| Term | Definition |
|------|------------|
| **Service** | Intangible deliverable provided to customers (SaaS platform, consulting, support). |
| **Service Level Agreement (SLA)** | Documented agreement between Swedwise and customer defining service targets, metrics, and responsibilities. |
| **Service Level Objective (SLO)** | Specific measurable target within an SLA (e.g., 99.9% uptime, 15-minute response time). |
| **Service Level Indicator (SLI)** | Actual measured performance against an SLO. |
| **Onboarding** | Process of integrating a new customer into service delivery, including setup, training, and go-live. |
| **Provisioning** | Process of preparing and configuring service infrastructure and resources for customer use. |
| **Service Catalog** | List of services offered by Swedwise with descriptions, features, and SLAs. |
| **Customer Success Manager (CSM)** | Swedwise role responsible for customer relationship, satisfaction, and service oversight. |
| **Service Owner** | Swedwise role accountable for end-to-end service delivery and performance (e.g., SaaS Service Owner). |
| **Incident** | Unplanned interruption or reduction in quality of service. |
| **Service Request** | Customer request for information, access, change, or standard service. |
| **Change** | Addition, modification, or removal of anything that could affect services (managed via SW-IMS-PRO-008). |

## 4. Service Delivery Principles

**Customer Focus**:
- Understand and meet customer requirements and expectations
- Proactive communication and transparency
- Build long-term partnerships, not just transactions

**Quality and Consistency**:
- Deliver services to documented standards
- Consistent experience across all customers
- Continuous improvement based on feedback and metrics

**Risk-Based Approach**:
- Identify and mitigate service delivery risks
- Plan for contingencies (backups, failover, escalation)
- Balance customer needs with operational capabilities

**Collaboration**:
- Cross-functional teams (Customer Success, IT, Delivery, Support)
- Clear roles and handoffs
- Knowledge sharing and learning organization culture

**Measurement and Improvement**:
- Monitor service performance against SLAs
- Regular reporting to customers and management
- Act on insights to improve service delivery

## 5. Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **Quality Lead** | - Maintain this procedure<br>- Oversee service delivery quality and consistency<br>- Monitor overall service performance metrics<br>- Report service trends to management<br>- Coordinate service improvement initiatives |
| **Service Owner** (e.g., SaaS Service Owner) | - Accountable for end-to-end service delivery and performance<br>- Define service standards and SLAs<br>- Monitor service health and SLA compliance<br>- Coordinate service improvements and changes<br>- Escalate service risks to management |
| **Customer Success Manager (CSM)** | - Primary customer contact for service matters<br>- Understand customer needs and expectations<br>- Coordinate onboarding and provisioning<br>- Monitor customer satisfaction and service usage<br>- Act as customer advocate internally<br>- Escalate customer issues<br>- Conduct service reviews with customers |
| **Delivery Manager** (Consulting) | - Manage consulting project delivery<br>- Ensure project meets scope, timeline, budget<br>- Coordinate project team and resources<br>- Communicate project status to customer and management<br>- Manage project risks and issues |
| **Technical Delivery Team** | - Provision and configure services<br>- Implement solutions per customer requirements<br>- Perform testing and validation<br>- Document configurations and customizations<br>- Transition services to operations/support |
| **Support Team** (L1/L2/L3) | - Respond to service requests and incidents<br>- Troubleshoot and resolve issues<br>- Escalate complex issues to specialists<br>- Maintain service continuity<br>- Log all interactions in support system |
| **IT Operations** (SaaS) | - Monitor SaaS platform health and performance<br>- Manage infrastructure (servers, databases, networking)<br>- Implement changes and patches<br>- Perform backups and disaster recovery<br>- Ensure SLA uptime targets |
| **Resource Manager** | - Allocate staff to customer projects and services<br>- Balance workload across teams<br>- Identify resource constraints and needs<br>- Coordinate staff availability and scheduling |
| **Customers** | - Provide clear requirements and expectations<br>- Participate in onboarding and testing<br>- Provide timely feedback and issue reports<br>- Fulfill customer responsibilities per SLA<br>- Attend service reviews and meetings |

## 6. Service Delivery Process

### 6.1 Process Overview

```
Service Planning → Onboarding → Provisioning → Ongoing Delivery → Monitoring → Review → Improvement
       ↓              ↓             ↓                ↓                ↓           ↓           ↓
 Define service   Prepare     Configure      Day-to-day        Track SLAs   Periodic   Act on
 requirements    customer    environment     operations       performance   review    insights
```

### 6.2 Service Planning and Design

**Objective**: Define service offering, standards, and SLAs before customer engagement.

**Activities**:
1. **Define Service Catalog**:
   - Document services offered (SaaS, consulting, support)
   - Describe features, capabilities, and limitations
   - Define standard service packages and tiers
   - Maintain service catalog (SW-QMS-DOC-001)

2. **Establish Service Level Agreements (SLAs)**:
   - Define SLOs for each service (availability, response time, resolution time)
   - Document customer and Swedwise responsibilities
   - Specify reporting frequency and metrics
   - Align with operational capabilities (realistic targets)
   - Example SaaS SLAs:
     - **Availability**: 99.9% uptime (monthly)
     - **Critical incident response**: 15 minutes
     - **High incident response**: 1 hour
     - **Planned maintenance window**: Weekly Wednesday 22:00-02:00 CET

3. **Resource Planning**:
   - Determine staffing needs (CSMs, delivery, support, operations)
   - Identify skill requirements and training needs
   - Plan infrastructure capacity (SaaS platform sizing)
   - Budget for service delivery costs

4. **Risk Assessment**:
   - Identify service delivery risks (using SW-IMS-PRO-002)
   - Plan mitigations (backup systems, escalation paths, contingency plans)
   - Document dependencies (third-party services: Azure, Entiros, OpenText)

**Outputs**:
- Service Catalog
- Standard SLA templates
- Resource allocation plan
- Service delivery risk register

**Responsibility**: Service Owner, Quality Lead, Management Team

**Frequency**: Annually, or when new services introduced

### 6.3 Customer Onboarding

**Objective**: Integrate new customers smoothly and set them up for success.

**Trigger**: Customer contract signed; sales handoff to delivery

**Process Steps**:

#### Step 1: Onboarding Kickoff (within 3 business days of contract signature)

**Actions**:
1. **Assign Customer Success Manager (CSM)**:
   - CSM introduced to customer
   - CSM becomes primary Swedwise contact
2. **Review Contract and Requirements**:
   - Confirm service scope, SLAs, timelines
   - Identify customer-specific requirements or customizations
   - Review any special terms or obligations
3. **Schedule Onboarding Kickoff Meeting**:
   - Participants: Customer stakeholders, CSM, Delivery Manager, Technical Lead
   - Agenda:
     - Introductions and roles
     - Review onboarding process and timeline
     - Confirm requirements and expectations
     - Set communication plan and cadence
     - Identify customer contacts and escalation paths

**Outputs**:
- Onboarding plan (timeline, milestones, responsibilities)
- Customer contact list
- Communication plan

**Responsibility**: CSM

#### Step 2: Service Provisioning (SaaS) or Project Initiation (Consulting)

**For SaaS Services**:
1. **Provision Customer Environment**:
   - Create customer tenant/instance in SaaS platform
   - Configure customer-specific settings (branding, users, integrations)
   - Set up monitoring and alerting for customer environment
   - Configure backup and disaster recovery
2. **Prepare Customer Data**:
   - Coordinate data migration (if applicable)
   - Validate data integrity and format
   - Perform test data loads
3. **Configure Integrations**:
   - Set up connections to customer systems (if required)
   - Test integrations end-to-end
   - Document integration architecture
4. **User Setup**:
   - Create user accounts and roles
   - Configure authentication (SSO if applicable)
   - Set up access controls per customer requirements

**Timeline**: 2-4 weeks (standard SaaS onboarding)

**For Consulting Services**:
1. **Project Planning**:
   - Develop detailed project plan (scope, timeline, milestones, resources)
   - Identify dependencies and risks
   - Define acceptance criteria and deliverables
2. **Kick Off Project**:
   - Hold project kickoff meeting
   - Set up project communication and collaboration tools
   - Assign project team roles
3. **Initiate Delivery**:
   - Begin implementation work per project plan
   - Hold regular status meetings (weekly or bi-weekly)
   - Track progress and risks

**Timeline**: Varies by project scope (typically 4-26 weeks)

**Responsibility**: Technical Delivery Team, Delivery Manager

#### Step 3: Testing and Validation

**Actions**:
1. **Internal Testing**:
   - Validate service functionality against requirements
   - Perform security testing (if applicable)
   - Load/performance testing (for SaaS)
   - Document test results
2. **User Acceptance Testing (UAT)**:
   - Customer tests service with real or representative data
   - Customer validates functionality meets requirements
   - Identify and resolve issues or gaps
3. **Training**:
   - Provide training to customer users and administrators
   - Deliver training materials and documentation
   - Conduct hands-on sessions (live or recorded)

**Timeline**: 1-2 weeks

**Responsibility**: Technical Delivery Team, CSM

#### Step 4: Go-Live and Transition

**Actions**:
1. **Go-Live Readiness Check**:
   - Confirm all testing complete and issues resolved
   - Verify customer readiness (training complete, data migrated)
   - Validate monitoring and support processes in place
   - Obtain customer sign-off for go-live
2. **Go-Live Execution**:
   - Activate service for customer production use
   - Monitor closely during initial hours/days
   - Provide hypercare support (enhanced support during transition)
3. **Transition to Operations/Support**:
   - Hand off from delivery team to support team
   - Transfer knowledge (configurations, customizations, customer specifics)
   - Update support system with customer details and SLA
   - Document "known issues" or special considerations

**Outputs**:
- Go-live sign-off
- Transition documentation (for support team)
- Customer environment configuration documentation

**Responsibility**: Delivery Manager, CSM, Support Team Lead

#### Step 5: Onboarding Review

**Timing**: Within 30 days of go-live

**Actions**:
1. **Conduct Onboarding Review Meeting**:
   - Participants: Customer, CSM, Delivery Manager
   - Agenda:
     - Review onboarding experience (what went well, what could improve)
     - Confirm customer satisfaction with service
     - Address any outstanding issues or questions
     - Review SLA and reporting cadence
     - Plan next steps (service review schedule, optimization opportunities)
2. **Capture Lessons Learned**:
   - Document feedback for continuous improvement
   - Share insights with team
   - Update onboarding process if needed

**Outputs**:
- Onboarding review meeting minutes
- Lessons learned document
- Action items (if any)

**Responsibility**: CSM

### 6.4 Ongoing Service Delivery

**Objective**: Deliver consistent, high-quality service day-to-day, meeting SLA commitments.

#### Day-to-Day Activities

**For SaaS Services**:
1. **Platform Monitoring**:
   - Continuous monitoring of system health (Azure Monitor, application logs)
   - Automated alerts for issues (downtime, performance degradation, errors)
   - Proactive identification and resolution of potential issues
2. **Incident Management**:
   - Respond to service incidents per SW-ISMS-PRO-001 (Incident Management)
   - Triage and prioritize incidents by severity and SLA
   - Communicate with affected customers (status updates, resolution ETA)
   - Escalate per defined escalation matrix
3. **Service Request Handling**:
   - Process customer service requests (access changes, configuration updates)
   - Respond per SLA (e.g., standard requests within 2 business days)
   - Document requests and resolutions in support system
4. **Change Management**:
   - Plan and implement changes per SW-IMS-PRO-008 (Change Management)
   - Communicate planned maintenance to customers (advance notice per SLA)
   - Execute changes during change windows
   - Verify changes successful; roll back if necessary
5. **Backup and Recovery**:
   - Perform regular backups per schedule (e.g., daily incremental, weekly full)
   - Test backup restoration periodically (quarterly)
   - Maintain disaster recovery capabilities
6. **Security Management**:
   - Apply security patches and updates
   - Monitor for security events
   - Conduct security assessments periodically
   - Follow information security procedures (SW-ISMS-POL-001)

**For Consulting Services**:
1. **Project Execution**:
   - Deliver project tasks per project plan
   - Hold regular status meetings with customer (weekly or bi-weekly)
   - Track progress against milestones
   - Manage project risks and issues
2. **Scope Management**:
   - Control scope changes (formal change requests)
   - Assess impact of scope changes on timeline and budget
   - Obtain customer approval for scope changes
3. **Quality Assurance**:
   - Review deliverables for quality before customer submission
   - Conduct peer reviews or technical reviews
   - Validate deliverables meet acceptance criteria
4. **Delivery Documentation**:
   - Maintain project documentation (design docs, configurations, test results)
   - Deliver final documentation to customer at project close

**For Support Services**:
1. **Ticket Management**:
   - Log all customer contacts in support system
   - Categorize and prioritize tickets per SLA
   - Assign tickets to appropriate support tier (L1, L2, L3)
   - Track ticket status and SLA compliance
2. **Issue Resolution**:
   - Troubleshoot and resolve customer issues
   - Escalate to higher support tiers or vendors if needed
   - Communicate resolution to customer
   - Document resolution in knowledge base
3. **Customer Communication**:
   - Respond to customer inquiries per SLA
   - Provide status updates for open tickets
   - Proactive communication for known issues or outages

**Responsibility**: IT Operations (SaaS), Delivery Manager (Consulting), Support Team (Support Services), CSM (overall customer coordination)

### 6.5 Service Level Management

**Objective**: Monitor and ensure SLA compliance; report performance to customers and management.

#### SLA Monitoring

**Actions**:
1. **Track Service Level Indicators (SLIs)**:
   - **SaaS Availability**: Uptime % (target: 99.9%)
   - **Incident Response Times**: Time from incident report to initial response (by severity)
   - **Incident Resolution Times**: Time from incident report to resolution (by severity)
   - **Change Success Rate**: % of changes implemented without rollback
   - **Customer Satisfaction**: Survey scores (target: ≥4.0/5.0)
   - Example metrics:
     - Critical incident response: <15 minutes
     - High incident response: <1 hour
     - Critical incident resolution: <4 hours
     - High incident resolution: <24 hours
2. **Automated Monitoring**:
   - Use monitoring tools to collect data (Azure Monitor, support ticketing system)
   - Generate SLA dashboards (real-time visibility)
   - Alert if SLA at risk (e.g., approaching response time deadline)
3. **Manual Data Collection**:
   - Collect qualitative data (customer feedback, satisfaction surveys)
   - Review records for completeness and accuracy

**Responsibility**: Service Owner, IT Operations (SaaS), Support Team (Support Services)

**Frequency**: Continuous (real-time monitoring), with monthly reporting

#### SLA Reporting

**Actions**:
1. **Prepare Monthly Service Reports**:
   - Report service performance against SLAs
   - Include:
     - SLA compliance % (per SLO)
     - Incidents and service requests summary (count, severity, resolution times)
     - Availability/uptime (for SaaS)
     - Planned maintenance activities
     - Trends and observations
     - Upcoming changes or improvements
   - Provide commentary on any SLA misses (root cause, corrective action)
2. **Distribute Reports**:
   - **To Customers**: Monthly service reports (email or customer portal)
   - **To Management**: Quarterly service performance summary (in management review)
3. **Service Review Meetings**:
   - Hold periodic service review meetings with key customers (quarterly or as agreed)
   - Discuss service performance, satisfaction, and improvement opportunities
   - Address customer concerns or requests
   - Plan future enhancements or expansions

**Responsibility**: CSM (prepares and distributes customer reports), Service Owner (prepares management reports)

**Frequency**:
- Customer reports: Monthly
- Management reports: Quarterly
- Customer service review meetings: Quarterly (or as contractually agreed)

#### SLA Non-Compliance Management

**If SLA is missed**:
1. **Identify Root Cause**:
   - Investigate why SLA was not met
   - Use root cause analysis techniques (SW-IMS-PRO-005)
2. **Implement Corrective Action**:
   - Address root cause to prevent recurrence
   - Document corrective action (CAR if significant)
3. **Communicate to Customer**:
   - Proactively notify customer of SLA miss
   - Explain root cause and corrective action taken
   - Apply service credits if contractually required
4. **Management Escalation**:
   - Escalate repeated SLA misses to Management Team
   - Review whether SLA targets are realistic or service capabilities need improvement

**Responsibility**: Service Owner, CSM

### 6.6 Performance Monitoring

**Objective**: Continuously monitor service health and performance to detect issues proactively.

#### Monitoring Categories

**For SaaS Services**:
1. **Infrastructure Monitoring**:
   - Server/VM health (CPU, memory, disk)
   - Network performance and connectivity
   - Database performance (query times, locks, replication lag)
   - Kubernetes cluster health (for containerized services)
2. **Application Monitoring**:
   - Application errors and exceptions
   - API response times and throughput
   - Job/batch processing success and duration
   - Integration health (external system connectivity)
3. **Security Monitoring**:
   - Authentication failures and suspicious login attempts
   - Unauthorized access attempts
   - Security alerts from SIEM or threat detection tools
4. **User Experience Monitoring**:
   - End-user transaction times (if monitoring available)
   - User session errors
   - Customer-reported issues

**For Consulting Services**:
1. **Project Health Monitoring**:
   - Schedule adherence (milestones on track?)
   - Budget tracking (actual vs. planned costs)
   - Scope changes (frequency and impact)
   - Risk and issue log status
   - Resource utilization
2. **Customer Satisfaction**:
   - Regular check-ins with customer
   - Feedback on deliverables and team performance

**Tools**:
- Azure Monitor (for Azure-hosted services)
- Application Insights or equivalent APM
- Support ticketing system (incident and request tracking)
- Project management tools (consulting project tracking)

**Alerting**:
- Configure alerts for critical metrics (e.g., downtime, high error rates, SLA breach risk)
- Define on-call rotation for after-hours alerts
- Escalation for unacknowledged or unresolved alerts

**Responsibility**: IT Operations (SaaS), Delivery Manager (Consulting), Service Owner

**Frequency**: Continuous (24/7 monitoring for SaaS critical services)

### 6.7 Service Reporting

**Objective**: Provide transparency on service delivery to customers and management.

#### Customer Reporting

**Monthly Service Report** (for SaaS and support services):
- **SLA Performance**: Compliance with uptime, response time, resolution time targets
- **Incidents**: Count, severity distribution, major incidents summary
- **Service Requests**: Count, types, resolution times
- **Changes**: Planned changes implemented, upcoming changes
- **Availability**: Uptime %, downtime incidents (if any)
- **Trends**: Month-over-month comparisons
- **Action Items**: Follow-ups from previous month, outstanding issues

**Project Status Report** (for consulting services):
- **Progress**: Milestones achieved, work completed
- **Schedule**: On track / ahead / behind; forecast completion date
- **Budget**: Actual vs. planned spend; forecast final cost
- **Risks and Issues**: Current open risks and issues; mitigation status
- **Upcoming**: Next milestones, planned activities
- **Decisions Needed**: Items requiring customer decision or approval

**Delivery Method**:
- Email (PDF attachment or link to web report)
- Customer portal (if available)
- Review in periodic customer meetings

**Responsibility**: CSM (prepares and delivers customer reports), Delivery Manager (project reports)

**Frequency**:
- SaaS/Support: Monthly
- Consulting Projects: Weekly or bi-weekly during active delivery

#### Management Reporting

**Quarterly Service Performance Report** (in Management Review, SW-IMS-PRO-004):
- **Overall SLA Compliance**: Across all customers and services
- **Service Trends**: Incident frequency, types, resolution times over time
- **Customer Satisfaction**: Survey results, NPS scores, feedback themes
- **Service Delivery Metrics**:
  - Onboarding lead time (contract to go-live)
  - Project delivery performance (on-time, on-budget %)
  - Support ticket volume and resolution times
- **Service Delivery Risks**: Current risks and mitigations
- **Service Improvement Initiatives**: Ongoing and planned improvements
- **Resource Utilization**: Staff allocation, capacity constraints

**Audience**: Management Team, Quality Lead, Service Owners

**Responsibility**: Quality Lead (consolidates input from Service Owners, CSMs, Delivery Managers)

**Frequency**: Quarterly (as part of IMS Management Review)

### 6.8 Service Improvement

**Objective**: Continuously improve service delivery based on feedback, metrics, and lessons learned.

#### Improvement Sources

1. **Customer Feedback** (SW-QMS-PRO-002 - Customer Feedback Procedure):
   - Satisfaction surveys
   - Complaints and issues
   - Service review meeting feedback
   - Informal feedback from CSMs

2. **Internal Feedback**:
   - Lessons learned from projects and incidents
   - Staff suggestions (support, delivery, operations teams)
   - Retrospectives after major changes or incidents

3. **Performance Data**:
   - SLA compliance trends
   - Incident and problem trends
   - Efficiency metrics (onboarding time, resolution time)

4. **Benchmarking and Best Practices**:
   - Industry standards (ITIL, ISO 20000)
   - Competitor or peer comparisons
   - Technology and process innovations

#### Improvement Process

1. **Identify Improvement Opportunity**:
   - Analyze feedback and data
   - Identify pain points, inefficiencies, or gaps
   - Prioritize based on impact and effort

2. **Plan Improvement**:
   - Define improvement goal (e.g., reduce onboarding time by 20%)
   - Develop improvement plan (actions, responsibilities, timeline)
   - Obtain approvals and resources

3. **Implement Improvement**:
   - Execute improvement plan
   - Update procedures, tools, or training
   - Communicate changes to staff and customers

4. **Measure Effectiveness**:
   - Track metrics post-improvement
   - Assess whether improvement goal achieved
   - Adjust if needed

5. **Standardize**:
   - Update procedures and documentation
   - Train staff on new methods
   - Share lessons learned with organization

**Responsibility**: Quality Lead (coordinates), Service Owners, CSMs, Delivery Managers

**Frequency**: Ongoing; formal review quarterly in Management Review

## 7. Service Delivery for SaaS Services (Specific Guidance)

### 7.1 SaaS Platform Operations

**Multi-Tenant Considerations**:
- Ensure customer data isolation (separate tenants/databases)
- Test changes in staging environment mirroring production
- Consider impact on all tenants when planning changes
- Monitor per-tenant resource usage and performance

**Change Management**:
- Follow SW-IMS-PRO-008 (Change Management Procedure)
- Planned changes during designated change windows (e.g., Wednesday 22:00-02:00 CET)
- Customer notification per SLA (5-10 business days for planned maintenance)
- Emergency changes: Immediate notification, followed by post-incident review

**Capacity Management**:
- Monitor infrastructure capacity (CPU, memory, storage, network)
- Plan for growth (customer onboarding, increased usage)
- Scale infrastructure proactively to avoid performance issues
- Review capacity quarterly; forecast 6-12 months ahead

**Disaster Recovery**:
- Maintain tested disaster recovery plan
- Perform DR tests annually (minimum)
- Document recovery time objectives (RTO) and recovery point objectives (RPO)
- Align DR capabilities with SLA commitments

### 7.2 SaaS Customer Communication

**Planned Maintenance Notification**:
- Advance notice per SLA (e.g., 5 business days for standard maintenance)
- Include: Date/time, duration, expected impact, actions required by customer
- Channels: Email, service status page (if available)

**Incident Communication**:
- Immediate notification when incident affects customer(s)
- Regular updates during extended incidents (every 2 hours)
- Resolution notification with summary
- Follow up with incident report (root cause, corrective action)

**Service Status Page** (recommended):
- Real-time service status (operational, degraded, outage)
- Planned maintenance calendar
- Incident history and updates

### 7.3 SaaS SLA Example

**Service Level Objectives**:

| SLO | Target | Measurement |
|-----|--------|-------------|
| **Service Availability** | 99.9% monthly uptime | Excludes planned maintenance during change windows |
| **Critical Incident Response** | 15 minutes | Time from incident logged to initial response |
| **High Incident Response** | 1 hour | Time from incident logged to initial response |
| **Critical Incident Resolution** | 4 hours | Time from incident logged to service restored |
| **High Incident Resolution** | 24 hours | Time from incident logged to issue resolved |
| **Standard Service Request** | 2 business days | Time from request to completion |

**Customer Responsibilities**:
- Provide accurate contact information for notifications
- Report incidents and service requests promptly
- Participate in testing during onboarding and changes
- Comply with acceptable use policy

**Swedwise Responsibilities**:
- Maintain service availability per SLA
- Respond to incidents per SLA
- Provide advance notice of planned maintenance
- Deliver monthly service reports

## 8. Service Delivery for Consulting Services (Specific Guidance)

### 8.1 Consulting Project Lifecycle

**Phases**:
1. **Initiation**: Contract signed, kickoff, requirements gathering
2. **Planning**: Detailed project plan, resource allocation
3. **Execution**: Delivery of project tasks, iterative customer feedback
4. **Testing**: UAT, defect resolution
5. **Deployment**: Go-live, hypercare support
6. **Closure**: Final acceptance, lessons learned, transition to support

**Key Success Factors**:
- Clear scope definition and change control
- Regular customer communication and status reporting
- Skilled and available resources
- Risk and issue management
- Quality assurance before customer delivery

### 8.2 Consulting Delivery Standards

**Documentation**:
- Project plan and schedule
- Requirements documentation
- Design and architecture documents
- Configuration and customization records
- Test plans and results
- User manuals and training materials
- Handover documentation (to customer or support team)

**Quality Gates**:
- Requirements review and sign-off
- Design review and approval
- Code/configuration peer review
- Testing completion and acceptance
- Go-live readiness review
- Customer acceptance sign-off

**Resource Management**:
- Allocate consultants based on skills and availability
- Monitor utilization and workload
- Plan for knowledge transfer and handoffs
- Address skill gaps through training or external support

## 9. Inputs and Outputs

**Inputs**:
- Customer contracts and requirements
- Service catalog and SLA templates
- Resource availability and skills
- Monitoring data and performance metrics
- Customer feedback and complaints
- Change requests and incident reports
- Risk assessments

**Outputs**:
- Onboarding plans and documentation
- Provisioned services and customer environments
- Monthly service reports (to customers)
- Quarterly service performance reports (to management)
- SLA compliance records
- Service improvement plans
- Lessons learned documentation

## 10. Records

| Record | Retention Period | Location | Owner |
|--------|-----------------|----------|-------|
| Service Catalog | Current + 3 years superseded | [TBD - Document repository] | Quality Lead |
| Customer SLAs | Duration of contract + 5 years | [TBD - Contract repository] | Legal/Customer Success |
| Onboarding Documentation | 5 years | [TBD - Document repository] | CSM |
| Monthly Service Reports | 3 years | [TBD - Document repository] | CSM |
| Service Review Meeting Minutes | 5 years | [TBD - Document repository] | CSM |
| SLA Performance Data | 5 years | [TBD - Monitoring system] | Service Owner |
| Project Documentation (Consulting) | 5 years after project close | [TBD - Project repository] | Delivery Manager |
| Lessons Learned | 5 years | [TBD - Knowledge base] | Quality Lead |

## 11. Related Documents

**Policies**:
- SW-QMS-POL-001: Quality Management Policy
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy

**Procedures**:
- SW-IMS-PRO-001: Document Control Procedure
- SW-IMS-PRO-002: Risk Assessment Procedure
- SW-IMS-PRO-004: Management Review Procedure
- SW-IMS-PRO-005: Nonconformity and Corrective Action Procedure
- SW-IMS-PRO-008: Change Management Procedure
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-QMS-PRO-002: Customer Feedback Procedure

**Forms and Templates**:
- [TBD - SW-QMS-FRM-001: Service Report Template]
- [TBD - SW-QMS-FRM-002: Onboarding Plan Template]
- [TBD - SW-QMS-FRM-003: Project Status Report Template]
- [TBD - SW-QMS-FRM-004: Service Review Meeting Template]

**External**:
- ISO 9001:2015 - Clause 8 (Operation)
- ITIL Service Delivery best practices

## 12. Continuous Improvement

This procedure is subject to continuous improvement based on:
- Service delivery metrics and SLA performance
- Customer feedback and satisfaction surveys
- Lessons learned from projects and incidents
- Internal audits and management reviews
- Industry best practices and standards
- Technology and process innovations

**Improvement suggestions** should be submitted to the Quality Lead.

---

## Appendix A: Service Delivery Metrics Dashboard (Example)

**Monthly Metrics**:

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| SaaS Availability (%) | 99.9% | [TBD] | 🟢 |
| Critical Incident Response Time (min) | <15 | [TBD] | 🟢 |
| Critical Incident Resolution Time (hours) | <4 | [TBD] | 🟢 |
| Customer Satisfaction Score (1-5) | ≥4.0 | [TBD] | 🟢 |
| SLA Compliance Rate (%) | 100% | [TBD] | 🟢 |
| Onboarding Lead Time (weeks) | <4 | [TBD] | 🟢 |
| Project On-Time Delivery (%) | ≥85% | [TBD] | 🟢 |

**Quarterly Trends**:
- Incident count and severity trend (should decrease over time)
- Customer satisfaction trend (should maintain or improve)
- Service request volume trend
- SLA compliance trend (should maintain near 100%)

---

## Appendix B: Customer Onboarding Checklist (SaaS)

**Pre-Onboarding** (before kickoff):
- [ ] Contract signed and received
- [ ] Customer Success Manager assigned
- [ ] Customer contacts identified (primary, technical, billing)
- [ ] Onboarding kickoff meeting scheduled

**Onboarding Kickoff**:
- [ ] Kickoff meeting held (requirements confirmed, timeline agreed)
- [ ] Onboarding plan created and shared
- [ ] Customer data and integration requirements documented

**Provisioning**:
- [ ] Customer tenant/environment created
- [ ] Customer branding and configuration applied
- [ ] User accounts and roles created
- [ ] Integrations configured (if applicable)
- [ ] Data migrated and validated (if applicable)

**Testing**:
- [ ] Internal testing completed and passed
- [ ] UAT scheduled with customer
- [ ] Customer UAT completed and passed
- [ ] Training delivered to customer users

**Go-Live**:
- [ ] Go-live readiness checklist complete
- [ ] Customer sign-off obtained
- [ ] Service activated for production use
- [ ] Support team transitioned and briefed
- [ ] Monitoring and alerting configured

**Post-Go-Live**:
- [ ] Hypercare support provided (first 7 days)
- [ ] Initial performance and usage reviewed
- [ ] Onboarding review meeting held (within 30 days)
- [ ] Lessons learned documented

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Quality Lead | | | |
| Management Team Representative | | | |
