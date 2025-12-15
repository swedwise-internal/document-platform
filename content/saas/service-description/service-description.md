---
document_id: SW-SAAS-SVC-001
title: Swedwise Communications (SaaS) Service Description
doc_type: service-description
version: "1.0"
status: draft
classification: confidential
owner: SaaS Service Manager
effective_date: 2025-01-01
review_date: 2026-01-01
---

# Swedwise Communications (SaaS) - Service Description

**Date:** 2025-01-01
**Version:** 1.0
**Service Provider:** Swedwise AB ("The Company")

---

## 1. Introduction

**Swedwise Communications** is delivered as a multi-tenant SaaS service, built on OpenText Communications (Exstream) and OpenText Notifications, with a "common" software installation for multiple customers, but with separation of data repositories and configuration per tenant. Each customer may have one or more tenants.

This document describes the operational setup and services that are included to facilitate Swedwise Communications SaaS delivery, and is subject to the Terms in the accompanying Service Delivery agreement for Swedwise Communications as a SaaS service. In addition, there are underlying software licensing terms from OpenText and other subcontractors that must be adhered to. A list of these software components and licensing terms are available on request from The Company.

### 1.1. Service Overview

Swedwise Communications enables organizations to:

- **Generate high-volume documents** with dynamic content, personalization, and consistent branding
- **Deliver multi-channel notifications** via email, SMS, and push notifications
- **Manage customer communications** through a centralized, cloud-based platform
- **Integrate with existing systems** through comprehensive APIs and connectors

### 1.2. Target Customers

The service is designed for organizations with high-volume communication needs:

- Public sector (municipalities, regions, government agencies)
- Financial services (banks, insurance companies)
- Utilities (energy, water, telecommunications)
- Large enterprises with significant customer communication volumes

---

## 2. SaaS Standard Service

### 2.1. SaaS Components

The following components and services are included in the standard service:

- **One OpenText Communications (Exstream) production tenant**
- **One OpenText Communications (Exstream) development tenant**
- **OpenText Notifications service** (email and SMS delivery)
- **Product Support**
- **Management meetings**
  - Quarterly status meetings (Operational status, SLA, Release information and future plans)
  - Strategy meetings – On request from the customer

### 2.2. Infrastructure Components

The Company's **Swedwise Communications** as a Service offering is built on the **OpenText Experience Cloud platform**, provided from a data center in Sweden through our subcontractor Entiros AB. The Experience Cloud provides the foundational infrastructure including multi-tenant architecture, security framework, and integration capabilities that enable our SaaS delivery.

The setup consists of a dedicated Kubernetes cluster. All functions in the cluster (pods, virtual servers, database and physical servers) are duplicated to provide high availability and increased resilience.

**Data Center Location:** Sweden (Entiros AB)

### 2.3. Platform Capabilities

The service is built on **OpenText Experience Cloud**, which provides:

| Capability | Description |
|------------|-------------|
| **Multi-tenant SaaS Architecture** | Secure isolation of customer data and configurations with enterprise-grade tenant management |
| **Enterprise Security Framework** | Built-in security, compliance, and governance capabilities with ISO 27001 certification |
| **Integration Platform** | Comprehensive APIs and connectors for seamless system integration |
| **Scalability Infrastructure** | Automatic scaling and performance optimization |
| **Analytics Foundation** | Built-in monitoring, reporting, and customer journey analytics |
| **Omnichannel Delivery** | Consistent experiences across multiple communication channels |

### 2.4. On-Premise Components

In order to facilitate integration with systems at the customer's site in a secure way, it may be necessary to implement additional on-premise components for data synchronization and secure communication between Swedwise Communications and local customer applications and systems.

Any on-premise software/hardware components used by the customer that integrates with the Swedwise Communications service – irrespective of vendor or supplier – is the customer's responsibility unless explicitly covered in a contract with The Company.

### 2.5. SaaS Operations

The list below shows typical operating tasks that are executed for the SaaS components:

| Operation | Description |
|-----------|-------------|
| **Installation and upgrade** | Data Center hardware and software |
| **Software management** | OpenText Communications (Exstream), Notifications, and related software |
| **Service availability** | Incident, Problem and Change Management |
| **Capacity management** | Performance monitoring and capacity planning |
| **Backup and Restore** | Data and applications backup processes |
| **Information Security** | Ensuring Confidentiality, Integrity and Availability (CIA) |

### 2.6. Upgrade and Patching

**Swedwise Communications** is installed, upgraded and patched by The Company personnel. The micro-services architecture, running on a Docker and Kubernetes based platform, permits upgrades to be performed without affecting customer configurations, and with minimum disruptions.

- **Regular upgrades**: Occur once every quarter
- **Patches**: Installed based on error reports and/or OpenText recommendations
- **Testing**: New upgrades or patches first installed on a test cluster
- **Production deployment**: Only after successful testing

All customers are informed in advance about date and time of planned version upgrades and patching. The Company will make every effort to utilize defined maintenance windows.

#### 2.6.1. Maintenance Windows

| Window Type | Schedule | Duration |
|-------------|----------|----------|
| Weekly | Saturday 18:00-20:00 CET | 2 hours |
| Monthly | Saturday 18:00 - Sunday 02:00 CET | 8 hours |

These service windows will only be used if needed. Use of a specific maintenance window will be communicated in advance to all customers.

### 2.7. Backup

| Parameter | Value |
|-----------|-------|
| **Data Backup Frequency** | Every 6 hours |
| **Includes** | All customer data on all tenants |
| **Data Retention Time** | Seven (7) days |
| **Disaster Recovery** | Backup copied automatically to secondary data center |

The SaaS solution provided to the customer does not include any customer specific data added by The Company. All customer specific data is added and maintained by the customer users or integrations with the access rights set by the customer's administrator (tenant administrator).

### 2.8. SaaS Service Monitoring and Error Correction

The availability of the **Swedwise Communications** SaaS solution and its components is monitored **24x7** by The Company. This monitoring covers:

- Physical infrastructure
- Virtual servers
- Database
- Applications
- Access security
- Notification delivery status

All Events and Incidents are routed to The Company's operations organization 24/7. The Company has overall responsibility for service performance and availability as seen from the end customer, no matter at what level or in which component the error originated.

The error correction process is partially automated through the Kubernetes orchestration platform, by launching new pods when a pod fails, or by moving a pod from a failing server to another server.

### 2.9. Availability and Capacity Monitoring

**Swedwise Communications** availability is dependent on three main factors:

1. **Internet accessibility** from the customer to the SaaS Datacenter
2. **Availability within the Datacenter** (from firewall to the application)
3. **The application environment itself**, with supporting infrastructure

The architecture allows for capacity to be increased at all levels, including application, cluster, database, and storage.

---

## 3. Support

All inquiries regarding the **Swedwise Communications** services delivery shall be directed to The Company Support:

| Channel | Details |
|---------|---------|
| **Telephone** | +46 54 17 11 10 |
| **Email** | support@swedwise.com |
| **Web Service Portal** | [TBD - Customer Portal URL] |

The preferred channel for all service and support requests is the web portal. Sales requests from existing customers may also be submitted through this web portal.

A list of authorized users who may contact The Company is maintained for every customer. The list of users is maintained by the customer, with changes communicated to The Company through the portal.

**Note:** End-user support is not included in the standard SaaS service. Such support services may be agreed separately.

### 3.1. Service Level Objectives

The **Swedwise Communications** SaaS service is available **24/7**, with a potential exception in the agreed maintenance periods.

#### Response Time for Support Requests:

| Level | Category | Initial Response | Technical Response | Target Resolution |
|-------|----------|-----------------|-------------------|-------------------|
| A | Critical error | 15 min | 30 min | 2 hours |
| B | Serious error | 15 min | 1 hour | N/A |
| C | Minor error | 15 min | 8 hours | N/A |
| General | RFI | 15 min | 3 business days | N/A |

#### Definitions:

| Term | Definition |
|------|------------|
| **Initial Response** | Acknowledgment of receipt with case number assignment |
| **Technical Response** | Time for support team to review, assess, and respond with action plan |
| **Target Resolution** | Service restoration with full functionality (service-affecting incidents only) |

#### Category Level Descriptions:

| Level | Category | Description |
|-------|----------|-------------|
| A | Critical error | Service interruption, potential data loss, or critical deviation |
| B | Serious error | Major operational impact with time/resource-consuming workaround |
| C | Minor error | Individual functions not working, easy workaround available |

---

## 4. SaaS Solution Availability SLA

The Company has defined the following Service Level Agreement regarding service availability:

| Parameter | Target |
|-----------|--------|
| **Service Uptime** | >= 99.9% |
| **Measurement Period** | Quarterly (3 months) |
| **Service Hours** | 24 hours per day |
| **Exclusions** | Scheduled maintenance windows |

**Definitions:**

- **Service time**: Total minutes in the relevant quarter
- **Outages**: Time where the solution is not available
- **Planned downtime**: Agreed maintenance activities

### 4.1. Method of Measurement

The SaaS Service Uptime is calculated based on reported/logged incidents. The SaaS Service Uptime Metric will be calculated on a quarterly basis. Customer reported service unavailability will be part of the compound calculation.

### 4.2. Reporting

The Company will make available a SaaS Service Uptime Metric report (Uptime Report) for the Customer on quarterly basis. If the customer does not agree with the report content, a written notice must be sent to The Company within fifteen (15) days after the report is published.

### 4.3. Compensation

If The Company does not comply with the specified service uptime, the customer may request compensation:

| Service Uptime | Compensation |
|----------------|--------------|
| Less than 98% | 30% of one (1) month cost in reduction |
| 98.0% to 98.9% | 20% of one (1) month cost in reduction |
| 99.0% to 99.8% | 10% of one (1) month cost in reduction |

The customer must claim compensation in writing within thirty (30) days after the end of the quarter where the availability SLA was not fulfilled.

---

## 5. SaaS Security

The Company's SaaS operations are certified in accordance with **ISO 27001**, and all employees, subcontractors and hired resources work in accordance with the routines and processes defined in our Information Security Management System (ISMS).

### 5.1. Security Measures

| Area | Implementation |
|------|----------------|
| **Access Control** | Dedicated VPN with 2-factor authentication for privileged access |
| **Network Security** | Next Generation Firewall (Fortinet) with IDS/IPS |
| **Penetration Testing** | Regular testing by security specialist company |
| **Patch Management** | Regular patching of OS, database, and Kubernetes |
| **Data Encryption** | Encryption at rest and in transit |

### 5.2. Compliance and Certifications

| Certification | Scope |
|---------------|-------|
| **ISO 27001** | The Company's SaaS operations |
| **ISO 9001** | Data center partner |
| **ISO 14001** | Data center partner |
| **GDPR** | Swedish data residency, EU data protection compliance |

### 5.3. Data Center Security

Operation of the data center including physical security, access control, power supply and cooling are performed by our Swedish data center partner (Entiros AB).

A detailed data sheet describing the data center and security measures is available upon request.

---

## 6. Service Subscription Fees

**Swedwise Communications** on SaaS is based upon OpenText Communications (Exstream) Premium licenses from OpenText.

### 6.1. Pricing Model

| Component | Description |
|-----------|-------------|
| **Base Platform** | Monthly platform fee including infrastructure, support, and maintenance |
| **User Licenses** | Per-user licensing (named or concurrent) |
| **Transaction Volume** | Document generation and notification delivery volumes |
| **Add-on Services** | Optional services with separate subscription fees |

### 6.2. License Management

- Customers may add more units to their subscription at any time
- License additions are automatically renewed annually
- License reductions require ninety (90) days written notice prior to renewal date

---

## 7. Service Decommissioning

The **Swedwise Communications** service may be cancelled by the customer with ninety (90) days written notice prior to the end of the SaaS term.

### 7.1. Cancellation Process

| Step | Timeline | Action |
|------|----------|--------|
| 1 | T-90 days | Written cancellation notice |
| 2 | End of term | Service access terminated |
| 3 | +30 days | Customer data available for download |
| 4 | +30 days | Data deletion |

### 7.2. Data Return

The Company will make Customer data available upon written request. Data is available for download, in the format generally provided by The Company, for 30 days following the last day of the SaaS term. After such time, The Company shall have no obligation to maintain or provide any such data.

---

## 8. SaaS Service Requirements and Responsibilities

### 8.1. Customer Responsibilities

| Role | Responsibility |
|------|----------------|
| **Principal SaaS Contact** | System owner interface with The Company |
| **Administrator** | Tenant configuration, customization, and integration management |
| **End Users** | Proper use of the service within permitted scope |

### 8.2. The Company Responsibilities

| Role | Responsibility |
|------|----------------|
| **Success Manager** | Customer success, coordination, quarterly meetings |
| **SaaS Operations Center** | Service and support requests handling |
| **Technical Support** | Problem resolution and escalation |

### 8.3. Customer Requirements

To consume Swedwise Communications as a service, the customer must ensure:

- **Internet Access**: Unrestricted access to the SaaS data center
- **Browser Compatibility**: Compatible browsers per OpenText documentation
- **Password Management**: Strong password policies (direct or via SSO)
- **Data Responsibility**: Sole responsibility for customer data
- **Permitted Use**: Usage within permitted and intended scope

---

## 9. Development and Customization

Development and customization (configuration) of tenants is performed by the customer's personnel or consultants on behalf of the customer.

Requests for consulting services from The Company shall be registered through the Service Portal.

### 9.1. Service Maintenance Agreement (Optional)

The subscription can be extended with a Service Maintenance agreement:

- **Guaranteed access** to consultants
- **Pre-defined access** to specific consultant profiles
- **Backup** for customer's administrator role
- **Overall responsibility** for customization scope
- **Operations** of SMTP gateway, integration server, or other services

---

## 10. Add-On Services

### 10.1. OpenText Notifications (Included in Standard)

**OpenText Notifications** provides multi-channel notification delivery:

| Feature | Description |
|---------|-------------|
| **Email Delivery** | High-volume email delivery with tracking |
| **SMS Delivery** | SMS notifications via Swedish carriers |
| **Delivery Tracking** | Real-time status and analytics |
| **Template Management** | Pre-built and customizable templates |

### 10.2. Single Sign-On (Included)

Single Sign-On with the customer's Identity Provider (for supported IDPs). A one-time setup fee may apply.

### 10.3. SMTP Gateway Service (Optional)

The Company can host an SMTP gateway for outgoing email:

- **Simplified Integration**: Avoid on-premise components
- **Volume Management**: No email service limits
- **Annual subscription** required

### 10.4. Integration Server (Optional)

Hosted Integration Server for SaaS-to-SaaS integrations:

- Azure AD user synchronization
- Third-party system integrations
- **Annual subscription** required

### 10.5. Advanced Analytics (Optional)

Extended analytics and business intelligence:

- Custom dashboards
- Customer journey analytics
- Predictive analytics
- Compliance reporting
- **Annual subscription** required

### 10.6. Content Management Integration (Optional)

Integration with enterprise content management systems:

- Document repository integration
- Content lifecycle management
- Version control
- **Annual subscription** required

---

## 11. Contact Information

| Contact | Details |
|---------|---------|
| **Sales** | sales@swedwise.com |
| **Support** | support@swedwise.com |
| **Phone** | +46 54 17 11 10 |
| **Address** | Swedwise AB, [TBD Address], Karlstad, Sweden |
| **Web** | www.swedwise.com |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-01 | SaaS Service Manager | Initial version |

---

*This document is confidential and intended for use by Swedwise AB and its customers. Unauthorized distribution is prohibited.*
