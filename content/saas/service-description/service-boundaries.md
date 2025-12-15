---
document_id: SW-SAAS-BND-001
title: Swedwise Communications Service Boundaries
doc_type: guideline
version: "1.0"
status: draft
classification: internal
owner: SaaS Service Manager
effective_date: 2025-01-15
review_date: 2026-01-15
related_documents:
  - SW-SAAS-SVC-001
---

# Swedwise Communications Service Boundaries

**Version:** 1.0
**Date:** 2025-01-15
**Owner:** SaaS Service Manager

---

## Purpose

This document defines the clear boundaries of the Swedwise Communications SaaS service, specifying what is included in the service offering, what remains customer responsibility, and the limits and constraints that apply. It serves as a reference for:

- Customer expectations and responsibilities
- Support escalation decisions
- Change request classification
- Service scope discussions
- Contract negotiations

---

## 1. Service Scope: What IS Included

### 1.1. Standard Components

The following components are included in the base Swedwise Communications SaaS subscription:

| Component | Description | Included in Base |
|-----------|-------------|------------------|
| **OpenText Communications (Exstream) Production Tenant** | Document generation and management environment | Yes |
| **OpenText Communications (Exstream) Development Tenant** | Development and testing environment | Yes |
| **OpenText Notifications** | Email and SMS delivery service | Yes |
| **Infrastructure** | Swedish data center, Kubernetes cluster, high availability setup | Yes |
| **Platform Services** | Multi-tenant architecture, security framework, integration APIs | Yes |
| **Database Services** | PostgreSQL database, backup, and recovery | Yes |
| **Network Security** | Firewall, IDS/IPS, VPN access | Yes |
| **Single Sign-On (SSO)** | Integration with customer IDP (supported IDPs only) | Yes (one-time setup fee may apply) |

### 1.2. Support Coverage

**Included Support Services:**

- **Service Desk**: Access to support via phone, email, and web portal during business hours (extended hours for critical incidents)
- **Incident Management**: Response to service-affecting incidents per SLA
- **Problem Management**: Root cause analysis for recurring incidents
- **Service Monitoring**: 24x7 platform and infrastructure monitoring
- **Quarterly Meetings**: Status reviews covering operational status, SLA performance, releases, and roadmap
- **Strategy Meetings**: On-demand meetings to discuss service evolution

**Support Scope:**

| Area | Coverage |
|------|----------|
| **Platform Issues** | Service unavailability, performance degradation, authentication failures |
| **Infrastructure Issues** | Server failures, network connectivity, database problems |
| **Application Bugs** | Defects in OpenText Communications/Notifications software |
| **Integration Issues** | API failures, webhook problems, connectivity issues (platform side) |
| **Security Incidents** | Unauthorized access attempts, security alerts, vulnerability management |

**NOT Included in Support:**

- End-user support (customer's employees or end customers)
- Training on how to use the platform (available as professional services)
- Custom development or configuration work (available as professional services)
- Third-party software issues (customer's on-premise systems)
- Customer data quality or content issues

### 1.3. Maintenance and Updates

**Included Maintenance Activities:**

- **Regular Upgrades**: Quarterly platform upgrades with new features and improvements
- **Security Patches**: Applied based on OpenText recommendations and vulnerability assessments
- **Hotfixes**: Critical bug fixes deployed as needed
- **Infrastructure Updates**: Kubernetes, database, and OS patching
- **Testing**: All updates tested on test cluster before production deployment
- **Communication**: Advance notification of all maintenance activities

**Maintenance Windows:**

| Type | Schedule | Duration | Usage |
|------|----------|----------|-------|
| Weekly | Saturday 18:00-20:00 CET | 2 hours | Only when needed |
| Monthly | Saturday 18:00 - Sunday 02:00 CET | 8 hours | Only when needed |

### 1.4. Security Responsibilities (Swedwise)

**Swedwise is responsible for:**

- **Infrastructure Security**: Physical data center security, network security, firewall management
- **Platform Security**: Multi-tenant isolation, access controls, encryption at rest and in transit
- **Vulnerability Management**: Regular security scanning, penetration testing, patch management
- **Compliance**: ISO 27001 certified operations, GDPR compliance for data processing
- **Incident Response**: Security incident detection, response, and remediation
- **Audit and Logging**: Security event logging, audit trail maintenance
- **Backup and Recovery**: Regular backups (every 6 hours), disaster recovery capabilities

### 1.5. Data Management

**Included Data Services:**

- **Backup**: Automated backups every 6 hours
- **Retention**: 7-day backup retention period
- **Disaster Recovery**: Automatic backup replication to secondary data center
- **Data Residency**: All data stored in Swedish data centers
- **Tenant Isolation**: Logical separation of customer data per tenant

**Data Ownership:**

- Customer retains ownership of all customer data
- Swedwise does not access, modify, or analyze customer data without explicit permission
- Customer is responsible for data quality, accuracy, and content

---

## 2. Service Scope: What is NOT Included

### 2.1. Customer Responsibilities

The following areas remain the customer's responsibility:

| Area | Customer Responsibility |
|------|------------------------|
| **Tenant Configuration** | Design templates, configure workflows, set up integrations |
| **Content Management** | Create, maintain, and quality-assure all document templates and content |
| **User Management** | Create users, assign roles, manage permissions within tenant |
| **Data Management** | Upload data, maintain data quality, ensure data compliance |
| **Integration Development** | Develop and maintain integrations with customer's internal systems |
| **End-User Support** | Support customer's employees and end customers using the service |
| **Training** | Train internal staff on how to use the platform (professional services available) |
| **Testing** | Test custom templates, configurations, and integrations |
| **Business Continuity** | Customer-side continuity planning for user access and data preparation |

### 2.2. On-Premise Components

**Customer-Managed On-Premise Components:**

- **Integration Servers**: Any on-premise middleware or integration platforms
- **SMTP Gateways**: Customer-operated email gateways (unless optional hosted service is purchased)
- **Data Sources**: Customer's databases, CRM, ERP, and other source systems
- **Network Infrastructure**: Customer's internal network, firewalls, and routing
- **Workstations**: End-user devices, browsers, and local software

**Important Note:** Swedwise does NOT provide support for customer on-premise components. Integration issues must be triaged to determine whether the root cause is platform-side or customer-side.

### 2.3. End-User Support

Swedwise support covers **platform and infrastructure issues only**. The following are explicitly excluded:

- Training customer employees on how to use the platform
- Troubleshooting user errors or "how-to" questions
- Supporting end customers (customer's customers) receiving communications
- Content creation assistance or template design
- Data preparation or data quality issues

**Alternative:** Customers may purchase a Service Maintenance Agreement that includes consulting time for user support and configuration assistance.

### 2.4. Custom Development

Standard SaaS support does NOT include:

- Custom software development
- Bespoke integrations or connectors
- Custom reporting or analytics beyond standard platform capabilities
- Automation scripts or batch processes specific to customer needs
- Template design or branding work

**Alternative:** Custom development is available as professional services with separate statement of work (SOW) and pricing.

### 2.5. Third-Party Software

Swedwise is NOT responsible for:

- Issues with customer's third-party software or services
- Integration problems caused by third-party API changes
- Third-party vendor support or licensing
- Performance issues caused by third-party systems

**Example Third-Party Systems:**
- Customer's CRM (Salesforce, Dynamics, etc.)
- Customer's ERP systems
- Customer's identity providers (beyond standard SSO setup)
- Customer's data warehouses or analytics platforms

---

## 3. Service Limits and Constraints

### 3.1. Tenant and User Limits

| Limit Type | Standard Service | Notes |
|------------|------------------|-------|
| **Production Tenants** | 1 per subscription | Additional tenants available as add-on |
| **Development Tenants** | 1 per subscription | Additional tenants available as add-on |
| **Named Users** | Per license agreement | Additional licenses can be added anytime |
| **Concurrent Users** | Per license agreement | Based on license model selected |
| **Administrator Roles** | Unlimited | Managed within tenant by customer |

### 3.2. Storage Limits

| Resource | Limit | Overage Policy |
|----------|-------|----------------|
| **Document Templates** | 10 GB per tenant | Additional storage available on request |
| **Output Documents** | 50 GB per tenant | Retention policy: 90 days, then archived or deleted |
| **Assets (images, fonts, etc.)** | 5 GB per tenant | Additional storage available on request |
| **Database Storage** | 25 GB per tenant | Additional storage available on request |

**Storage Monitoring:**

- Swedwise monitors storage usage and alerts customer at 80% capacity
- Customers can request storage increase with 5 business days notice
- Additional storage incurs additional monthly fees

### 3.3. Transaction Volume Limits

| Transaction Type | Included Volume | Overage Pricing |
|------------------|-----------------|-----------------|
| **Document Generation** | Per contract | Defined in pricing schedule |
| **Email Notifications** | Per contract | Defined in pricing schedule |
| **SMS Notifications** | Per contract | Defined in pricing schedule |
| **API Calls** | Per contract | Rate limiting applies |

**Fair Use Policy:**

Customers must use the service within reasonable and intended scope. Excessive or abusive usage may result in:
- Service throttling
- Additional fees
- Service suspension (with prior notice)

### 3.4. API Rate Limits

| API Type | Rate Limit | Burst Allowance |
|----------|------------|-----------------|
| **REST API** | 1,000 requests/minute | 2,000 requests/minute for 5 minutes |
| **Webhook Endpoints** | 500 requests/minute | 1,000 requests/minute for 5 minutes |
| **Batch Processing** | 10 jobs/hour | 20 jobs/hour for 1 hour |

**Rate Limit Exceeded:**

- HTTP 429 (Too Many Requests) response
- Retry-After header indicates when to retry
- Persistent violations may trigger review and service restrictions

### 3.5. Document Volume Limits

| Document Type | Limit | Notes |
|---------------|-------|-------|
| **Single Document Size** | 50 MB | Larger documents require review |
| **Batch Job Size** | 100,000 documents | Larger batches require scheduling |
| **Concurrent Jobs** | 10 per tenant | Additional jobs queued |
| **Template Complexity** | No hard limit | Performance impact reviewed case-by-case |

### 3.6. Performance Expectations

| Metric | Target | Measured |
|--------|--------|----------|
| **Simple Document Generation** | < 2 seconds | Average per document |
| **Complex Document Generation** | < 10 seconds | Average per document |
| **API Response Time** | < 500 ms | 95th percentile |
| **Email Delivery Initiation** | < 5 seconds | After submission |
| **SMS Delivery Initiation** | < 10 seconds | After submission |

**Note:** Actual performance depends on document complexity, data volume, and concurrent usage.

---

## 4. Shared Responsibility Model

The following table clarifies responsibility for each layer of the service:

| Layer | Component | Swedwise Responsibility | Customer Responsibility |
|-------|-----------|------------------------|-------------------------|
| **Infrastructure** | Physical Data Center | Full (via Entiros AB) | None |
| | Network Infrastructure | Firewall, VPN, routing | Internal network, internet connectivity |
| | Servers & Compute | Provisioning, patching, monitoring | None |
| | Storage | Provisioning, backup, disaster recovery | Data content, data quality |
| **Platform** | Kubernetes Cluster | Installation, upgrade, management | None |
| | Database | Installation, patching, backup | Data content, schema design (within tenant) |
| | Operating System | Patching, hardening, monitoring | None |
| | Security Controls | Platform security, monitoring, incident response | Tenant-level access controls |
| **Application** | OpenText Communications | Installation, upgrade, licensing | Tenant configuration, template design |
| | OpenText Notifications | Installation, configuration, delivery | Content, recipient lists |
| | APIs & Integrations | API availability, documentation | Integration development, testing |
| | User Interface | Availability, performance | User training, browser compatibility |
| **Data** | Data at Rest | Encryption, backup | Data content, classification, quality |
| | Data in Transit | Encryption (TLS) | Data preparation, transmission to platform |
| | Data Lifecycle | Retention per backup policy | Archival, deletion per business needs |
| | Data Privacy | GDPR compliance (processor role) | GDPR compliance (controller role) |
| **Access Management** | Platform Access | SSO integration, MFA support | User provisioning, role assignment |
| | Administrative Access | Swedwise admin accounts | Customer admin accounts |
| | Privileged Access | Swedwise personnel access controls | Customer administrator access controls |
| | Audit Logging | Platform access logs | Review of user activity within tenant |
| **Operations** | Service Monitoring | 24x7 platform monitoring | Application-level monitoring (customer systems) |
| | Incident Management | Platform incidents | Customer-side incidents |
| | Change Management | Platform changes, maintenance | Tenant configuration changes |
| | Backup & Recovery | Platform backup, disaster recovery | Data validation after recovery |

### 4.1. Shared Responsibility Examples

**Example 1: Security Incident**

| Responsibility | Swedwise | Customer |
|----------------|----------|----------|
| Detect platform intrusion attempt | ✓ | |
| Respond to platform security incident | ✓ | |
| Notify customer of potential data breach | ✓ | |
| Notify end customers of data breach | | ✓ |
| Investigate customer-side data leak | | ✓ |

**Example 2: Integration Failure**

| Responsibility | Swedwise | Customer |
|----------------|----------|----------|
| Ensure API availability | ✓ | |
| Troubleshoot API authentication issues | Shared | Shared |
| Fix customer-side integration code | | ✓ |
| Provide API documentation and examples | ✓ | |
| Test integration after changes | | ✓ |

**Example 3: Performance Issue**

| Responsibility | Swedwise | Customer |
|----------------|----------|----------|
| Monitor platform performance | ✓ | |
| Optimize infrastructure and database | ✓ | |
| Optimize document templates | | ✓ |
| Review data volume and job scheduling | Shared | Shared |
| Scale platform resources | ✓ | |

---

## 5. Escalation Boundaries

### 5.1. What CAN Be Escalated to Swedwise

The following issues are appropriate for escalation to Swedwise support:

| Category | Examples |
|----------|----------|
| **Service Unavailability** | Cannot access platform, login failures, complete outage |
| **Platform Errors** | Application crashes, database errors, internal server errors (500) |
| **Performance Degradation** | Slow response times, timeouts, job processing delays |
| **Security Concerns** | Suspected unauthorized access, security vulnerabilities, compliance concerns |
| **API Failures** | API endpoints returning errors, authentication failures, rate limit issues |
| **Data Loss** | Missing data, backup restore requests, corruption |
| **Integration Problems** | Webhook failures, SSO issues, notification delivery failures (platform side) |

### 5.2. What CANNOT Be Escalated to Swedwise

The following issues should NOT be escalated to Swedwise support:

| Category | Reason | Alternative |
|----------|--------|-------------|
| **End-User Training** | Out of scope | Customer trains own users, or purchase professional services |
| **Template Design** | Customer responsibility | Use OpenText documentation, or purchase consulting |
| **Data Quality Issues** | Customer-owned data | Customer resolves internally |
| **Customer Integration Code** | Not Swedwise-developed | Customer develops and maintains |
| **Third-Party Software** | Not Swedwise-supported | Contact third-party vendor |
| **Feature Requests** | Not support issue | Submit via product feedback portal |
| **How-To Questions** | Not incident/problem | Refer to documentation, or purchase training |

### 5.3. Triage Process for Shared Issues

Some issues require triage to determine responsibility:

**Integration Issues:**

1. Swedwise verifies API availability and logs
2. Customer verifies their integration code and logs
3. Joint troubleshooting call if needed
4. Responsibility determined based on root cause

**Performance Issues:**

1. Swedwise reviews platform metrics (CPU, memory, database)
2. Customer reviews template complexity and data volume
3. Joint analysis to identify optimization opportunities
4. Responsibility determined based on bottleneck location

**Authentication Issues:**

1. Swedwise verifies SSO configuration and platform logs
2. Customer verifies IDP configuration and SAML/OIDC settings
3. Joint troubleshooting to identify misconfiguration
4. Responsibility determined based on root cause

---

## 6. Change Request Boundaries

### 6.1. Standard Changes

Standard changes are pre-approved, low-risk changes that Swedwise performs without customer-specific approval:

| Change Type | Examples | Notification |
|-------------|----------|--------------|
| **Maintenance** | OS patching, database tuning, certificate renewal | Advance notice via portal |
| **Platform Upgrades** | Quarterly OpenText Communications upgrades | 2 weeks advance notice |
| **Security Patches** | Critical vulnerability fixes | 48 hours advance notice (or less for critical) |
| **Configuration Updates** | Firewall rule updates, monitoring configuration | No advance notice required |

**Customer Action Required:** None, except to plan for potential maintenance window impact.

### 6.2. Normal Changes

Normal changes require planning, testing, and customer notification:

| Change Type | Examples | Process |
|-------------|----------|---------|
| **Feature Enablement** | Enabling new platform features for customer tenant | Request via portal, scheduled during maintenance window |
| **Tenant Configuration** | Adding new tenant, storage expansion, license increase | Request via portal, 5 business days lead time |
| **SSO Configuration** | New IDP integration, SSO reconfiguration | Request via portal, joint configuration session |
| **Infrastructure Scaling** | Adding compute resources, storage expansion | Swedwise-initiated based on monitoring, customer notified |

**Customer Action Required:** Submit request via portal, participate in scheduling, test after change.

### 6.3. Customer-Specific Customizations

Customizations are outside the scope of standard SaaS service and require separate agreements:

| Customization Type | Scope | Delivery Model |
|--------------------|-------|----------------|
| **Custom Templates** | Designed by Swedwise consultants | Professional services (SOW) |
| **Custom Integrations** | Bespoke connectors or middleware | Professional services (SOW) |
| **Custom Reports** | Analytics beyond standard platform | Professional services (SOW) |
| **Automation Scripts** | Customer-specific batch jobs or workflows | Professional services (SOW) |
| **Tenant-Specific Features** | Features not available in standard platform | Requires OpenText engagement, may not be feasible |

**Customer Action Required:**

1. Submit request via portal
2. Swedwise provides estimate and SOW
3. Customer approves SOW and budget
4. Swedwise delivers per SOW terms
5. Customer accepts deliverable

**Important:** Custom work does NOT become part of standard platform maintenance. Ongoing maintenance of custom components requires Service Maintenance Agreement.

### 6.4. Feature Requests

Requests for new platform features or enhancements:

| Request Type | Process | Timeline |
|--------------|---------|----------|
| **Platform Enhancement** | Submit via product feedback portal | Evaluated quarterly, no commitment |
| **OpenText Product Feature** | Swedwise can advocate to OpenText | No timeline commitment |
| **Urgent Business Need** | Evaluate custom development alternative | Per SOW terms |

**Customer Expectation:** Feature requests are inputs to product roadmap but do not guarantee implementation.

---

## 7. Boundary Decision Tree

Use this decision tree to determine whether an issue or request falls within service boundaries:

```
Is it a service outage or critical incident?
├─ YES → Escalate to Swedwise immediately (Level A)
└─ NO  → Continue

Is it a platform error or performance issue?
├─ YES → Escalate to Swedwise support (Level B/C)
└─ NO  → Continue

Is it related to customer tenant configuration or templates?
├─ YES → Customer responsibility (documentation or professional services)
└─ NO  → Continue

Is it related to customer integration code?
├─ YES → Customer responsibility (may require joint troubleshooting)
└─ NO  → Continue

Is it related to customer data quality or content?
├─ YES → Customer responsibility
└─ NO  → Continue

Is it a "how-to" or training question?
├─ YES → Customer responsibility (documentation or training services)
└─ NO  → Continue

Is it a feature request or enhancement?
├─ YES → Submit via product feedback portal
└─ NO  → Contact Swedwise support for triage
```

---

## 8. Service Boundary Violations

### 8.1. Exceeding Service Limits

If a customer exceeds service limits (storage, transactions, API rate), Swedwise will:

1. **Alert Customer**: Notify via portal and email when approaching limit (80%)
2. **Grace Period**: Allow temporary overage (up to 120% for 7 days)
3. **Mitigation Options**:
   - Upgrade to higher service tier
   - Purchase additional capacity
   - Reduce usage to within limits
4. **Service Restriction**: If no action taken, service may be throttled or restricted

### 8.2. Inappropriate Support Requests

If a customer repeatedly submits inappropriate support requests (end-user training, how-to questions), Swedwise will:

1. **Educate**: Clarify service boundaries and appropriate escalation
2. **Redirect**: Provide documentation or suggest professional services
3. **Escalate**: If pattern continues, escalate to Customer Success Manager
4. **Review**: May trigger service usage review and potential contract amendment

### 8.3. Unauthorized Access or Misuse

If Swedwise detects unauthorized access, service misuse, or security violations, Swedwise reserves the right to:

1. **Suspend Access**: Immediately suspend service to protect platform and other customers
2. **Investigate**: Conduct security investigation with customer cooperation
3. **Remediate**: Require customer to implement remediation before restoring service
4. **Terminate**: In severe cases, terminate service per contract terms

---

## 9. Boundary Clarification Process

If a customer is unsure whether an issue or request falls within service boundaries:

1. **Contact Support**: Submit question via support portal
2. **Triage**: Swedwise support triages and provides initial assessment
3. **Escalate if Needed**: Complex cases escalated to Customer Success Manager
4. **Document Decision**: Swedwise documents decision and rationale
5. **Update Knowledge Base**: Common boundary questions added to customer portal FAQ

---

## 10. Related Documents

- **SW-SAAS-SVC-001**: Swedwise Communications Service Description
- **SW-IMS-POL-009**: Information Security Policy
- **SW-IMS-PRO-010**: Incident Management Procedure
- **SW-IMS-PRO-011**: Change Management Procedure
- **SW-SAAS-SLA-001**: Service Level Agreement (when published)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | SaaS Service Manager | Initial version |

---

**Document Classification:** Internal
**Review Date:** 2026-01-15

---

*This document is for internal use by Swedwise AB staff and authorized partners. It may be shared with customers during service boundary discussions or support escalations.*
