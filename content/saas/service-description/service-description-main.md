---
document_id: SW-SAAS-SVC-001
title: Swedwise SaaS Platform - Service Description
doc_type: service-description
version: "1.0"
status: draft
classification: confidential
owner: SaaS Service Manager
component: general
effective_date: 2025-01-01
review_date: 2026-01-01
related_documents:
  - SW-SAAS-COMP-001
  - SW-SAAS-COMP-002
  - SW-SAAS-ARCH-001
  - SW-SAAS-ARCH-COMP-001
  - SW-SAAS-ARCH-COMP-002
---

# Swedwise SaaS Platform - Service Description

**Service Provider:** Swedwise AB
**Date:** 2025-01-01
**Version:** 1.0
**Classification:** Confidential

---

## 1. Introduction

### 1.1. Platform Overview

The **Swedwise SaaS Platform** is a multi-tenant, cloud-based infrastructure platform that provides the foundation for delivering enterprise-grade business applications as Software-as-a-Service. Built on modern Kubernetes orchestration and hosted in Swedish data centers, the platform enables secure, scalable, and compliant delivery of business-critical services.

This service description defines the platform-level services, infrastructure, and support that apply to **all customers** regardless of which specific service components they subscribe to. Component-specific details (such as OpenText Communications, WOPI Server, or other applications) are documented in separate Service Component Addendums.

### 1.2. Multi-Tenant SaaS Model

The platform employs a **multi-tenant architecture** where:

- A common software installation serves multiple customers
- Complete isolation of customer data and configurations
- Each customer may have one or more tenants (e.g., production, development, test)
- Dedicated resources allocated per tenant based on subscription tier
- Shared infrastructure optimized for efficiency and cost-effectiveness

### 1.3. Swedish Data Residency

All customer data is stored and processed exclusively within **Sweden**:

- **Primary Data Center:** Sweden (Entiros AB)
- **Disaster Recovery Site:** Sweden (separate facility)
- **No cross-border data transfer** outside Swedish jurisdiction
- Full compliance with Swedish and EU data protection regulations

### 1.4. Service Delivery Agreement

This document describes the operational setup and platform services included in the Swedwise SaaS delivery. It is subject to the Terms in the accompanying Service Delivery Agreement. Additional software licensing terms from third-party vendors (OpenText, Microsoft, etc.) apply and are available upon request.

---

## 2. Platform Infrastructure

### 2.1. Data Center and Hosting

The Swedwise SaaS Platform is hosted through our Swedish data center partner **Entiros AB**, providing enterprise-grade infrastructure with comprehensive certifications:

| Aspect | Details |
|--------|---------|
| **Location** | Sweden (Tier III data center) |
| **Physical Security** | 24/7 monitoring, biometric access control, video surveillance |
| **Power** | Redundant UPS systems, backup generators |
| **Cooling** | N+1 redundant cooling systems |
| **Network** | Multiple carrier connections, 99.99% uptime |
| **Certifications** | ISO 9001, ISO 14001, SOC 2 Type II |

A detailed data sheet describing the data center facilities and security measures is available upon request.

### 2.2. Kubernetes Cluster Architecture

The platform runs on a **dedicated Kubernetes cluster** with the following characteristics:

**Control Plane (High Availability):**
- 3 master nodes for redundant control plane
- Distributed etcd cluster for configuration state
- Automatic failover in case of node failure

**Worker Nodes:**
- Minimum 6 worker nodes distributed across availability zones
- Automatic scaling based on workload demand
- Pod anti-affinity rules ensure replicas run on separate physical hosts

**Container Orchestration:**
- Docker containerization for all applications
- Automatic pod restart on failure (self-healing)
- Rolling updates with zero downtime
- Resource quotas and limits per tenant

### 2.3. Network Architecture

```
Internet
   │
   ├─── DDoS Protection (CloudFlare/CDN)
   │
   └─── Fortinet Next-Gen Firewall (IDS/IPS)
        │
        └─── Kubernetes Ingress Controllers (Load Balancers)
             │
             ├─── Application Layer (Multi-tenant Pods)
             │
             ├─── Data Layer (PostgreSQL HA Cluster, Object Storage)
             │
             └─── Monitoring Layer (Prometheus, Grafana, ELK)
```

**Network Security Layers:**
- Web Application Firewall (WAF) for OWASP Top 10 protection
- Next-Generation Firewall with Intrusion Detection/Prevention (IDS/IPS)
- Network segmentation via Kubernetes network policies
- Encrypted VPN for administrative access (multi-factor authentication required)

### 2.4. Database Infrastructure

**PostgreSQL High-Availability Cluster:**

| Feature | Implementation |
|---------|---------------|
| **Topology** | Primary + 2 read replicas |
| **Replication** | Synchronous streaming replication |
| **Failover** | Automatic promotion (< 30 seconds RTO) |
| **Connection Pooling** | PgBouncer for efficient connection management |
| **Backup** | Continuous WAL archiving + daily full backups |

**Data Isolation:**
- Dedicated database schema per tenant (standard tier)
- Dedicated database instance option (enterprise tier)
- Row-level security policies enforced
- Encrypted at rest with AES-256

### 2.5. Object Storage

**S3-Compatible Object Storage** for documents, templates, and media:

- **Replication:** 3x redundancy within data center
- **Backup:** Cross-site replication to disaster recovery location
- **Versioning:** Last 30 versions retained per object
- **Encryption:** Server-side encryption (AES-256)
- **Lifecycle Policies:** Automatic archival of older content

**Storage Classes:**
- **Hot Storage:** Frequently accessed content (last 30 days)
- **Warm Storage:** Archived content (30-90 days)
- **Cold Storage:** Long-term compliance retention (7+ years)

---

## 3. Standard Platform Services

The following services are included in the platform subscription for all customers:

### 3.1. Authentication and Identity Management

**Single Sign-On (SSO) Support:**
- SAML 2.0 and OpenID Connect (OIDC) protocols
- Integration with Azure AD, Okta, Google Workspace, and other major identity providers
- Multi-Factor Authentication (MFA) enforcement option
- Role-Based Access Control (RBAC)

**User Management:**
- Self-service user provisioning (customer-managed)
- Administrator delegation per tenant
- Password policies and rotation enforcement
- Session management and timeout controls

### 3.2. API Gateway

**RESTful API Access:**
- Comprehensive APIs for all platform and service component operations
- OAuth 2.0 authentication for API access
- API key management with rotation policies
- Rate limiting and throttling per subscription tier

**API Documentation:**
- OpenAPI 3.0 specifications
- Interactive API explorer
- Code examples in multiple languages
- Webhooks for event-driven integrations

### 3.3. Monitoring and Analytics

**Platform Monitoring (24x7):**
- Application health monitoring
- Infrastructure performance monitoring
- Database availability and performance
- Network connectivity and latency
- Security event monitoring

**Customer Analytics Dashboard:**
- Service availability metrics
- Resource utilization (CPU, memory, storage)
- Transaction volumes and trends
- API usage statistics
- Performance metrics (response times, throughput)

### 3.4. Backup and Disaster Recovery

| Component | Backup Frequency | Retention | Recovery Objective |
|-----------|-----------------|-----------|-------------------|
| **Database** | Every 6 hours | 7 days | RPO: 6 hours, RTO: 4 hours |
| **Object Storage** | Continuous replication | 30 days (versioning) | RPO: Near real-time, RTO: 2 hours |
| **Configuration** | Daily | 30 days | RTO: 4 hours |

**Disaster Recovery:**
- Automated backup to secondary data center in Sweden
- Quarterly disaster recovery testing
- Documented DR procedures with defined RTO/RPO objectives
- Customer notification protocol for DR events

### 3.5. Maintenance and Patching

**Regular Maintenance Windows:**

| Window Type | Schedule | Duration | Use |
|-------------|----------|----------|-----|
| **Weekly** | Saturday 18:00-20:00 CET | 2 hours | Minor patches, configuration changes |
| **Monthly** | Saturday 18:00 - Sunday 02:00 CET | 8 hours | Major updates, infrastructure maintenance |

**Upgrade Policy:**
- Platform upgrades occur quarterly (minimum)
- Security patches installed within 48 hours of release (critical vulnerabilities)
- All updates tested on test cluster before production deployment
- Advance notification (minimum 7 days) for all scheduled maintenance
- Emergency maintenance communicated immediately

**Microservices Architecture Benefits:**
- Component-level upgrades without full system downtime
- Rolling updates preserve service availability
- Blue/green deployment for major version changes
- Automatic rollback on detected issues

---

## 4. Support Services

### 4.1. Support Channels

All service and support requests shall be directed through the following channels:

| Channel | Details | Hours |
|---------|---------|-------|
| **Web Portal** | portal.swedwise.com (preferred channel) | 24/7 |
| **Email** | support@swedwise.com | 24/7 |
| **Telephone** | +46 54 17 11 10 | Mon-Fri 08:00-17:00 CET |
| **Emergency Hotline** | +46 XX XXX XX XX | 24/7 (critical incidents only) |

**Authorized Support Contacts:**
- Customer maintains list of authorized support contacts via web portal
- Maximum 10 named contacts per tenant (additional contacts available)
- Changes to contact list effective immediately

### 4.2. Support Tiers and Response Times

| Priority | Category | Initial Response | Technical Response | Target Resolution |
|----------|----------|-----------------|-------------------|-------------------|
| **A - Critical** | Service down, data loss risk | 15 minutes | 30 minutes | 2 hours |
| **B - Serious** | Major functionality impaired | 15 minutes | 1 hour | 8 business hours |
| **C - Minor** | Minor issue with workaround | 15 minutes | 8 business hours | Best effort |
| **General - RFI** | Questions, how-to requests | 15 minutes | 3 business days | N/A |

**Definitions:**
- **Initial Response:** Acknowledgment with case number assignment
- **Technical Response:** Support team assessment and action plan
- **Target Resolution:** Service restored to full functionality

**Priority Level Criteria:**

**Priority A - Critical Error:**
- Complete service outage affecting all users
- Data loss or corruption
- Security breach or suspected compromise
- Critical business process blocked with no workaround

**Priority B - Serious Error:**
- Major functionality unavailable but workaround exists
- Significant performance degradation
- Issue affecting multiple users or key functionality
- Time-sensitive business impact

**Priority C - Minor Error:**
- Individual feature not working
- Cosmetic issues
- Easy workaround available
- Limited user impact

### 4.3. Support Scope

**Included in Platform Support:**
- Platform availability and performance issues
- Authentication and access problems
- API and integration support
- Infrastructure and hosting issues
- Security incident response
- Backup and restore requests

**Not Included (Available Separately):**
- End-user training and onboarding
- Custom development or configuration services
- Data migration services
- Third-party integration development
- On-site consulting services

### 4.4. Escalation Procedures

**Support Escalation Hierarchy:**

1. **L1 Support (Tier 1):** Initial triage, common issues, documentation
2. **L2 Support (Tier 2):** Technical specialists, advanced troubleshooting
3. **L3 Support (Tier 3):** Engineering team, code-level investigation
4. **Vendor Escalation:** Third-party vendor engagement (OpenText, Microsoft, etc.)

**Escalation Triggers:**
- Priority A incident not resolved within 2 hours
- Priority B incident not resolved within 8 business hours
- Customer request for management escalation
- Repeated incidents indicating systemic issue

### 4.5. Management Meetings

**Included in Standard Service:**

| Meeting Type | Frequency | Participants | Topics |
|--------------|-----------|--------------|--------|
| **Quarterly Business Review** | Quarterly | Customer Success Manager, Customer stakeholders | SLA performance, usage trends, roadmap updates |
| **Operational Status** | Quarterly | Technical Account Manager, Customer IT | Platform health, incidents, capacity planning |
| **Strategy Meeting** | On-request | Swedwise leadership, Customer leadership | Long-term planning, new capabilities, optimization |

---

## 5. Service Level Agreement (SLA)

### 5.1. Availability Commitment

The Swedwise SaaS Platform is operated 24/7 with the following availability commitment:

| Metric | Target | Measurement Period |
|--------|--------|-------------------|
| **Service Uptime** | >= 99.9% | Quarterly (calendar quarter) |
| **Service Hours** | 24 hours per day, 7 days per week | All days |
| **Planned Downtime** | Excluded from SLA calculation | Scheduled maintenance windows |

**Availability Calculation:**

```
Uptime % = ((Total Minutes in Quarter - Downtime Minutes) / Total Minutes in Quarter) × 100
```

**Exclusions from Downtime:**
- Scheduled maintenance windows (with 7+ days notice)
- Customer-initiated changes or maintenance
- Issues caused by customer configuration errors
- External factors (Internet connectivity, DNS, third-party services)
- Force majeure events (natural disasters, war, strikes)
- Distributed Denial of Service (DDoS) attacks

### 5.2. Measurement and Reporting

**Monitoring Method:**
- Automated health checks from multiple geographic locations (every 60 seconds)
- Synthetic transaction monitoring
- Application-level availability verification
- Customer-reported incidents included in calculation

**Reporting:**
- Quarterly SLA reports available via customer portal
- Monthly availability statistics provided proactively
- Real-time status dashboard accessible 24/7
- Incident postmortem reports (Priority A incidents)

**Dispute Resolution:**
- Customer may dispute SLA report within 15 days of publication
- Swedwise will investigate and respond within 7 business days
- Independent third-party audit available if dispute unresolved

### 5.3. Service Credits

If Swedwise fails to meet the 99.9% uptime commitment, customers may request service credits:

| Quarterly Uptime Achieved | Service Credit |
|---------------------------|----------------|
| **< 98.0%** | 30% of one month's platform fee |
| **98.0% to 98.9%** | 20% of one month's platform fee |
| **99.0% to 99.8%** | 10% of one month's platform fee |
| **>= 99.9%** | No service credit |

**Service Credit Process:**
1. Customer submits credit request within 30 days of quarter end
2. Swedwise validates claim against monitoring data
3. Credit applied to next monthly invoice (or final invoice if contract ending)
4. Service credits are the sole and exclusive remedy for SLA non-compliance

**Limitations:**
- Maximum aggregate service credits: 100% of one quarter's fees
- Service credits do not extend subscription term
- No cash refunds; credits applied to future invoices only

---

## 6. Security and Compliance

### 6.1. Information Security Management

Swedwise operates a comprehensive Information Security Management System (ISMS) certified to **ISO 27001:2022**:

- Regular internal and external security audits
- Documented security policies and procedures
- Security awareness training for all personnel
- Incident response and business continuity plans
- Annual penetration testing by independent security firm

### 6.2. Security Controls

| Security Layer | Implementation |
|---------------|----------------|
| **Perimeter Security** | Next-Gen Firewall (Fortinet), DDoS protection, WAF |
| **Network Security** | IDS/IPS, network segmentation, VPN access only for admin |
| **Access Control** | Multi-factor authentication, role-based access control, least privilege |
| **Encryption in Transit** | TLS 1.3 for all external connections, mTLS for internal services |
| **Encryption at Rest** | AES-256 for databases and object storage |
| **Application Security** | OWASP Top 10 protection, input validation, API security |
| **Data Loss Prevention** | Automated scanning for sensitive data, PII detection |
| **Vulnerability Management** | Regular scanning, patch management, security updates |

### 6.3. Data Protection and Privacy

**GDPR Compliance:**
- Data Processing Agreement (DPA) included with all contracts
- Customer is the Data Controller; Swedwise is the Data Processor
- Documented data processing activities and purposes
- Right to access, rectification, erasure, and portability supported
- Data breach notification within 72 hours
- Privacy by Design and by Default principles

**Data Residency:**
- All customer data stored in Sweden only
- No transfer to third countries outside EU/EEA
- Subprocessors located in Sweden or EU (list available)
- Customer consent required for new subprocessors

**Data Classification:**
- Public: No special handling
- Internal: Access controls, encryption in transit
- Confidential: Encryption at rest and in transit, audit logging
- Restricted: Additional controls as per customer agreement

### 6.4. Compliance Certifications

| Standard/Regulation | Status | Scope |
|--------------------|--------|-------|
| **ISO 27001:2022** | Certified | Swedwise SaaS operations |
| **ISO 9001:2015** | Certified | Quality management system |
| **ISO 14001:2015** | Certified | Environmental management |
| **GDPR** | Compliant | Data protection and privacy |
| **Swedish Data Protection Act** | Compliant | National data protection law |

Copies of current certificates available upon request.

### 6.5. Security Monitoring and Incident Response

**24/7 Security Monitoring:**
- Security Information and Event Management (SIEM) system
- Automated threat detection and alerting
- Log aggregation and correlation
- Anomaly detection and behavioral analysis

**Incident Response:**
- Dedicated security incident response team
- Documented incident response procedures
- Customer notification for incidents affecting customer data
- Post-incident analysis and remediation
- Quarterly incident response drills

**Penetration Testing:**
- Annual penetration testing by certified third-party firm
- Remediation of all critical and high-severity findings
- Retest of remediated issues
- Executive summary report available to customers (NDA required)

---

## 7. Pricing Framework

### 7.1. Subscription Model

The Swedwise SaaS Platform uses a **subscription-based pricing model** with monthly or annual billing:

**Base Platform Fee:**
- Covers infrastructure, monitoring, support, and standard platform services
- Tiered pricing based on expected usage and resource allocation
- Minimum commitment period: 12 months

**Component Services:**
- Separate subscriptions for each service component (Communications, WOPI, etc.)
- Pricing documented in Service Component Addendums
- Flexible scaling within subscription tier

**Billing Cycle:**
- Monthly invoicing (in advance)
- Annual prepayment discount available (typically 10-15%)
- Invoice payment terms: Net 30 days

### 7.2. Pricing Tiers

| Tier | Target Customer | Included Resources | Support Level |
|------|----------------|-------------------|---------------|
| **Starter** | Small organizations, pilot projects | 1 production + 1 dev tenant, 10 users, 100 GB storage | Business hours support |
| **Professional** | Growing businesses | 2 production + 2 dev tenants, 50 users, 500 GB storage | Extended hours support |
| **Enterprise** | Large organizations | Unlimited tenants, unlimited users, 2 TB storage | 24/7 premium support |
| **Custom** | Unique requirements | Tailored resources | Negotiated SLA |

**Included in All Tiers:**
- Platform infrastructure and hosting
- Database and object storage (within quota)
- Standard backup and disaster recovery
- SSO integration (one identity provider)
- API access
- Customer portal access
- Quarterly business reviews

### 7.3. Usage-Based Components

Certain platform services may incur additional usage-based charges:

| Billable Component | Measurement | Pricing Model |
|-------------------|-------------|---------------|
| **Storage Overage** | Per GB over quota | Monthly fee per GB |
| **Data Transfer** | Outbound traffic (egress) | Per GB transferred |
| **API Calls** | Requests exceeding tier allowance | Per 1,000 API calls |
| **Additional Tenants** | Beyond tier limit | Fixed monthly fee per tenant |
| **Premium Support Hours** | Beyond included hours | Hourly rate |

Usage tracked monthly and billed in arrears on following month's invoice.

### 7.4. License Management

**Adding Licenses:**
- Customers may add users, storage, or services at any time via customer portal
- New subscriptions prorated to current billing cycle
- Additions automatically renew at subscription anniversary

**Reducing Licenses:**
- Requires 90 days written notice prior to subscription renewal date
- No mid-contract reductions (except downgrade at renewal)
- Minimum commitment period applies

**Subscription Changes:**
- Tier upgrades take effect immediately (prorated billing)
- Tier downgrades effective at next renewal period
- Component additions/removals subject to separate terms

---

## 8. Service Management

### 8.1. Onboarding Process

**Standard Onboarding Timeline:** 2-4 weeks

| Phase | Duration | Activities |
|-------|----------|-----------|
| **Kickoff** | Week 1 | Contract execution, initial meeting, requirements gathering |
| **Setup** | Week 1-2 | Tenant provisioning, SSO configuration, user import |
| **Configuration** | Week 2-3 | Component-specific setup, integration setup, data migration (if needed) |
| **Training** | Week 3-4 | Administrator training, end-user training materials |
| **Go-Live** | Week 4 | Final testing, production cutover, hypercare support |

**Onboarding Deliverables:**
- Provisioned tenant(s) with admin access
- SSO integration configured and tested
- Administrator training session
- User guides and documentation
- Escalation contacts established

### 8.2. Change Management

**Customer-Initiated Changes:**
- Configuration changes managed via customer portal or support ticket
- Change requests processed within 3 business days (standard)
- Emergency changes (Priority A incidents) processed immediately
- All changes logged in audit trail

**Platform Changes:**
- Routine maintenance: Scheduled during maintenance windows
- Security patches: Emergency deployment with notification
- Feature updates: Communicated via release notes 14 days in advance
- Breaking changes: Minimum 90 days notice, migration support provided

**Change Advisory Board (CAB):**
- Monthly CAB review for major changes
- Customer representation available upon request
- Impact assessment and rollback planning required

### 8.3. Service Decommissioning

**Contract Termination:**
- Requires 90 days written notice prior to subscription anniversary
- All fees due through end of notice period
- Early termination fees may apply (per contract terms)

**Offboarding Timeline:**

| Timeline | Activity |
|----------|----------|
| **T-90 days** | Written termination notice submitted |
| **T-30 days** | Final invoice issued, data export process initiated |
| **T-0 (End of term)** | Service access terminated, read-only data access begins |
| **T+30 days** | Customer data available for download (self-service) |
| **T+30 days** | All customer data permanently deleted, certificate of destruction issued |

**Data Return:**
- Customer data provided in common formats (JSON, CSV, SQL dump, ZIP archives)
- Available via secure download link or SFTP
- One-time complimentary data export included
- Additional export requests billed at hourly rates

**Data Deletion:**
- Secure deletion per NIST 800-88 guidelines
- Database records purged and overwritten
- Object storage permanently deleted (all versions)
- Backup media rotation ensures complete removal within 60 days
- Certificate of Destruction provided upon request

---

## 9. Responsibilities

### 9.1. Swedwise Responsibilities

| Area | Responsibilities |
|------|-----------------|
| **Platform Operations** | Infrastructure management, database administration, application hosting, monitoring and alerting |
| **Security** | Network security, encryption, vulnerability management, security patching, incident response |
| **Availability** | 24/7 monitoring, SLA compliance, disaster recovery, backup management |
| **Maintenance** | Regular platform updates, security patches, performance optimization |
| **Support** | Incident response, problem resolution, technical guidance, escalation management |
| **Compliance** | ISO certifications maintenance, GDPR compliance, audit facilitation |
| **Capacity Planning** | Infrastructure scaling, performance monitoring, resource forecasting |

### 9.2. Customer Responsibilities

| Area | Responsibilities |
|------|-----------------|
| **User Management** | User provisioning/deprovisioning, role assignment, password management |
| **Data Management** | Data accuracy, content management, backup verification (testing restores) |
| **Configuration** | Tenant settings, application configuration, integration setup |
| **Access Control** | Authorized user list maintenance, access review, least privilege enforcement |
| **Compliance** | Regulatory compliance for customer data, data classification, retention policies |
| **End-User Support** | First-line support for application usage questions (if not contracted separately) |
| **Integration** | On-premise components (if any), third-party integrations, API usage |
| **Testing** | User acceptance testing of updates (test tenants provided) |

### 9.3. Required Customer Resources

**Principal SaaS Contact (Required):**
- Primary liaison between customer and Swedwise
- Decision authority for service-related matters
- Escalation point for critical issues

**Tenant Administrator (Required):**
- Technical point of contact
- Configuration and customization management
- User and access management
- Integration coordination

**Security Contact (Recommended):**
- Receives security advisories and incident notifications
- Coordinates security-related activities
- Reviews audit logs and security reports

**Executive Sponsor (Recommended):**
- Business ownership of the service
- Strategic alignment and roadmap input
- Budget and contract authority

### 9.4. Shared Responsibilities

| Area | Swedwise Role | Customer Role |
|------|--------------|---------------|
| **Disaster Recovery** | Execute DR procedures, restore infrastructure | Validate data integrity, test applications |
| **Security Incidents** | Detect, contain, and remediate platform-level incidents | Report suspicious activity, respond to user-level incidents |
| **Performance Optimization** | Monitor and tune infrastructure, optimize queries | Optimize application configurations, efficient data models |
| **Compliance Audits** | Provide evidence of platform controls | Provide evidence of customer-managed controls |
| **Integration Support** | Provide API documentation and support | Develop and maintain integration code |

---

## 10. Available Service Components

The Swedwise SaaS Platform currently supports the following service components. Each component has a dedicated Service Component Addendum document with detailed specifications, pricing, and features.

### 10.1. Active Service Components

| Component | Document ID | Status | Description |
|-----------|-------------|--------|-------------|
| **Communications** | SW-SAAS-COMP-001 | Generally Available | OpenText Communications (Exstream) for high-volume document generation |
| **Notifications** | SW-SAAS-COMP-002 | Generally Available | OpenText Notifications for multi-channel delivery (email, SMS) |

### 10.2. Planned Service Components

The following components are in development or planning stages:

| Component | Document ID | Expected Availability | Description |
|-----------|-------------|----------------------|-------------|
| **WOPI Server** | SW-SAAS-COMP-003 | Q2 2025 | Web Application Open Platform Interface server for online document editing and collaboration |
| **Service Management (SMAX)** | SW-SAAS-COMP-004 | Q3 2025 | OpenText Service Management Automation X for IT service management, ITSM, and ESM |
| **Content Platform** | SW-SAAS-COMP-005 | Q4 2025 | OpenText Extended ECM for enterprise content management and archival |

### 10.3. Component Subscription Model

**Independent Subscriptions:**
- Each service component has separate subscription and pricing
- Components can be added or removed independently
- All components share the base platform infrastructure

**Component Addendum Documents:**
- Detailed feature descriptions
- Component-specific quotas and limits
- Pricing and licensing models
- Integration capabilities
- Add-on services specific to the component

**Getting Started:**
Contact sales@swedwise.com or your Customer Success Manager to discuss specific component requirements and obtain the relevant Service Component Addendum documents.

---

## 11. Customer Requirements

To successfully consume services on the Swedwise SaaS Platform, customers must meet the following requirements:

### 11.1. Technical Requirements

**Internet Connectivity:**
- Reliable Internet access with sufficient bandwidth
- Minimum 10 Mbps per concurrent user (recommended 25 Mbps)
- Unrestricted access to Swedwise data center IP ranges
- Firewall exceptions for required ports (HTTPS 443, etc.)

**Browser Compatibility:**
- Modern web browsers (latest two versions):
  - Google Chrome
  - Microsoft Edge (Chromium-based)
  - Mozilla Firefox
  - Apple Safari
- JavaScript enabled
- Cookies enabled (session management)

**Client Devices:**
- Minimum screen resolution: 1280x720
- Operating systems: Windows 10+, macOS 10.15+, iOS 14+, Android 10+
- Sufficient local storage for cached data and downloads

### 11.2. Security Requirements

**Password Management:**
- Strong password policies enforced (minimum 12 characters, complexity requirements)
- Password rotation recommended (90 days)
- Single Sign-On (SSO) strongly recommended

**Multi-Factor Authentication (MFA):**
- Available for all accounts (recommended)
- Required for administrator and privileged accounts
- Supported methods: authenticator app, SMS, hardware tokens

**Data Classification:**
- Customer must classify data according to sensitivity
- Appropriate handling procedures for confidential data
- User training on data protection requirements

### 11.3. Organizational Requirements

**Authorized Contacts:**
- Maintain accurate list of authorized support contacts
- Define escalation hierarchy for incidents
- Provide out-of-office coverage arrangements

**Data Responsibility:**
- Customer has sole responsibility for customer data
- Customer warrants legal right to upload/process data
- Customer responsible for data backup verification

**Permitted Use:**
- Service used within permitted scope (per contract)
- No unlawful, harmful, or abusive content
- Compliance with Acceptable Use Policy
- No attempt to bypass security controls or access other tenants

**Capacity Planning:**
- Estimate expected usage volumes accurately
- Monitor quota consumption proactively
- Request quota increases before limits reached

---

## 12. Contact Information

### 12.1. Support and Service Contacts

| Contact Type | Email | Phone |
|-------------|-------|-------|
| **Sales Inquiries** | sales@swedwise.com | +46 54 17 11 10 |
| **Technical Support** | support@swedwise.com | +46 54 17 11 10 |
| **Customer Success** | success@swedwise.com | +46 54 17 11 10 |
| **Security Incidents** | security@swedwise.com | +46 XX XXX XX XX (24/7) |
| **Billing Questions** | billing@swedwise.com | +46 54 17 11 10 |

### 12.2. Company Information

**Swedwise AB**

**Corporate Headquarters:**
Karlstad, Sweden
[Full address to be provided]

**Office Locations:**
- Karlstad (Headquarters)
- Stockholm
- Uddevalla

**Web:**
- Corporate: www.swedwise.com
- Customer Portal: portal.swedwise.com
- Status Page: status.swedwise.com

**Business Information:**
- Organization Number: [To be provided]
- VAT Number: [To be provided]

### 12.3. Legal and Compliance

**Data Protection Officer (DPO):**
Email: dpo@swedwise.com

**Legal Inquiries:**
Email: legal@swedwise.com

**Compliance and Audit Requests:**
Email: compliance@swedwise.com

---

## 13. Document Control

### 13.1. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-01 | SaaS Service Manager | Initial version - Platform foundation document |

### 13.2. Review and Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Author** | SaaS Service Manager | | |
| **Technical Review** | Technical Lead | | |
| **Legal Review** | Legal Counsel | | |
| **Approved** | CEO | | |

### 13.3. Review Schedule

- **Next Review Date:** 2026-01-01
- **Review Frequency:** Annual (or upon significant service changes)
- **Owner:** SaaS Service Manager

### 13.4. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SW-SAAS-COMP-001 | Communications Service Component | Communications component details |
| SW-SAAS-COMP-002 | Notifications Service Component | Notifications component details |
| SW-SAAS-ARCH-001 | Platform Technical Architecture | Technical architecture reference |
| SW-SAAS-ARCH-COMP-001 | Communications Architecture Addendum | Communications-specific architecture |
| SW-SAAS-ARCH-COMP-002 | Notifications Architecture Addendum | Notifications-specific architecture |
| SW-SAAS-BND-001 | Service Boundaries and Integration Points | Integration guidance |
| SW-SAAS-INT-001 | Integration Capabilities Guide | API and integration documentation |
| SW-ISMS-POL-001 | Information Security Policy | Security governance |
| SW-QMS-POL-001 | Quality Policy | Quality commitment |
| SW-EMS-POL-001 | Environmental Policy | Environmental commitment |

---

## 14. Definitions and Acronyms

| Term | Definition |
|------|------------|
| **API** | Application Programming Interface |
| **DDoS** | Distributed Denial of Service |
| **DPA** | Data Processing Agreement |
| **GDPR** | General Data Protection Regulation |
| **HA** | High Availability |
| **IDS/IPS** | Intrusion Detection System / Intrusion Prevention System |
| **ISMS** | Information Security Management System |
| **MFA** | Multi-Factor Authentication |
| **OIDC** | OpenID Connect |
| **RBAC** | Role-Based Access Control |
| **RPO** | Recovery Point Objective (maximum acceptable data loss) |
| **RTO** | Recovery Time Objective (maximum acceptable downtime) |
| **SAML** | Security Assertion Markup Language |
| **SIEM** | Security Information and Event Management |
| **SLA** | Service Level Agreement |
| **SSO** | Single Sign-On |
| **TLS** | Transport Layer Security |
| **Tenant** | An isolated instance of the application for a customer organization |
| **WAF** | Web Application Firewall |

---

**Confidentiality Notice:**

This document is confidential and proprietary to Swedwise AB and intended for use by Swedwise and its customers under confidentiality obligations. This document contains sensitive information about Swedwise's SaaS platform architecture, security controls, and business operations.

Unauthorized distribution, copying, or disclosure of this document or its contents is strictly prohibited.

---

**End of Document**

*For questions about this service description, please contact your Swedwise Customer Success Manager or email sales@swedwise.com.*
