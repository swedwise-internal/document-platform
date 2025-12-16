---
document_id: SW-SAAS-COMP-001
title: Service Component - Communications
doc_type: service-component
version: "1.0"
status: draft
classification: confidential
owner: SaaS Service Manager
component: communications
effective_date: 2025-01-15
review_date: 2026-01-15
parent_document: SW-SAAS-SVC-001
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-SAAS-SVC-001
  - SW-SAAS-ARCH-001
  - SW-SAAS-ARCH-COMP-001
---

# Service Component - Communications

**Document ID:** SW-SAAS-COMP-001
**Parent Service Description:** SW-SAAS-SVC-001
**Date:** 2025-01-15
**Version:** 1.0
**Classification:** Confidential

---

## 1. Component Overview

### 1.1. Purpose

This Service Component document provides detailed specifications for the **Swedwise Communications** component of the Swedwise SaaS Platform. Communications enables high-volume, personalized document generation powered by OpenText Communications (Exstream).

### 1.2. Document Hierarchy

```
SW-SAAS-SVC-001 (Platform Service Description)
    └── Service Components
         ├── SW-SAAS-COMP-001 (This Document - Communications)
         ├── SW-SAAS-COMP-002 (Notifications)
         └── [Future Components]

SW-SAAS-ARCH-001 (Platform Architecture)
    └── Architecture Addendums
         ├── SW-SAAS-ARCH-COMP-001 (Communications Architecture)
         └── SW-SAAS-ARCH-COMP-002 (Notifications Architecture)
```

### 1.3. Component Summary

| Attribute | Value |
|-----------|-------|
| **Component Name** | Swedwise Communications |
| **Technology** | OpenText Communications (Exstream) v24.x |
| **Category** | Customer Communications Management (CCM) |
| **Purpose** | High-volume document generation and personalization |
| **Related Architecture** | SW-SAAS-ARCH-COMP-001 |

---

## 2. Component Description

### 2.1. What is Swedwise Communications?

**Swedwise Communications** is an enterprise-grade document generation service that enables organizations to create, manage, and deliver personalized, data-driven documents at scale. Built on OpenText Communications (Exstream), it provides:

- **High-Volume Processing**: Generate thousands of documents per hour
- **Template-Based Design**: Visual designer for business users
- **Data-Driven Personalization**: Dynamic content based on customer data
- **Multi-Format Output**: PDF, HTML, print formats, and more

### 2.2. Core Capabilities

| Capability | Description |
|------------|-------------|
| **Document Generation** | High-volume, batch and real-time document creation |
| **Template Designer** | Web-based visual template design tool |
| **Data Integration** | Connect to customer data sources via API |
| **Business Rules** | Conditional content based on data values |
| **Multi-Format Output** | PDF, PDF/A, HTML, RTF, PostScript, PCL, AFP |
| **Version Control** | Template versioning and rollback |
| **Brand Management** | Centralized brand assets and styles |

### 2.3. Target Use Cases

**Transactional Documents:**
- Invoices and billing statements
- Account statements
- Payment confirmations
- Policy documents
- Contracts and agreements

**Regulatory Communications:**
- Compliance notices
- Disclosure documents
- Annual reports
- Legal correspondence

**Customer Service:**
- Welcome letters
- Confirmation letters
- Acknowledgments
- Status updates

---

## 3. Service Features

### 3.1. Document Generation

#### Real-Time Generation (API)
- Generate documents on-demand via REST API
- Response times: < 5 seconds (p95)
- Synchronous response with document URL
- Suitable for: transactional, on-demand documents

#### Batch Generation
- Process large volumes efficiently
- Asynchronous processing with status callbacks
- Throughput: 500+ documents/hour
- Suitable for: statements, bulk mailings, periodic reports

### 3.2. Template Designer

**OpenText Designer** is a professional template design tool:

| Feature | Description |
|---------|-------------|
| **Visual Editor** | Drag-and-drop interface |
| **Data Mapping** | Connect template fields to data sources |
| **Preview** | Real-time preview with sample data |
| **Testing** | Test generation before deployment |
| **Publishing** | Deploy to production with version control |

**System Requirements:**
- Windows 10/11 or Windows Server 2016+
- 8 GB RAM (16 GB recommended)
- 10 GB free disk space
- .NET Framework 4.8+

### 3.3. Output Formats

| Format | Extension | Use Case |
|--------|-----------|----------|
| **PDF** | .pdf | Digital delivery, email attachment |
| **PDF/A** | .pdf | Long-term archival, compliance |
| **HTML** | .html | Web display, email body |
| **RTF** | .rtf | Editable documents |
| **PostScript** | .ps | Professional printing |
| **PCL** | .pcl | Office printing |
| **AFP** | .afp | High-volume production printing |

### 3.4. Data Integration

**Supported Data Formats:**
- JSON (recommended)
- XML
- CSV (batch processing)
- Database queries (via Integration Broker)

**Data Source Integration:**
- REST API data submission
- SFTP file upload
- Scheduled data pulls (Enterprise tier)

---

## 4. Service Levels

### 4.1. Availability

| Metric | Target |
|--------|--------|
| **Service Availability** | 99.9% (excludes planned maintenance) |
| **Planned Maintenance** | Weekly window: Wed 22:00-02:00 CET |

### 4.2. Performance

| Metric | Target |
|--------|--------|
| **API Response Time (Single Doc)** | < 5 seconds (p95) |
| **Batch Throughput** | >= 500 documents/hour |
| **Template Load Time** | < 2 seconds |
| **Job Queue Wait Time** | < 60 seconds |

### 4.3. Success Rates

| Metric | Target |
|--------|--------|
| **Document Generation Success** | >= 99.9% |
| **Template Deployment Success** | >= 99.5% |

---

## 5. Quotas and Limits

### 5.1. Document Limits

| Limit | Standard | Enterprise |
|-------|----------|------------|
| **Documents per Month** | 100,000 | 1,000,000+ |
| **Max Document Size** | 50 MB | 100 MB |
| **Max Pages per Document** | 500 | 1,000 |
| **Max Batch Size** | 1,000 | 5,000 |

### 5.2. Template Limits

| Limit | Standard | Enterprise |
|-------|----------|------------|
| **Active Templates** | 50 | 500 |
| **Template Storage** | 5 GB | 50 GB |
| **Template Versions** | 10 per template | 50 per template |

### 5.3. API Limits

| Limit | Standard | Enterprise |
|-------|----------|------------|
| **API Rate Limit** | 100 req/min | 1,000 req/min |
| **Concurrent Batch Jobs** | 5 | 20 |

---

## 6. Pricing

### 6.1. Pricing Model

Communications is priced based on:
1. **Base Subscription**: Monthly platform fee
2. **Document Volume**: Per-document charges for generation
3. **Storage**: Template and output storage

### 6.2. Pricing Tiers

| Tier | Monthly Fee | Included Documents | Additional Docs |
|------|-------------|-------------------|-----------------|
| **Starter** | 15,000 SEK | 10,000 | 1.00 SEK/doc |
| **Standard** | 35,000 SEK | 50,000 | 0.50 SEK/doc |
| **Enterprise** | Custom | Custom | Custom |

### 6.3. Add-On Services

| Service | Price |
|---------|-------|
| **Designer License** | 5,000 SEK/user/month |
| **Additional Storage (10 GB)** | 500 SEK/month |
| **Premium Support** | +25% of base |

*For detailed pricing, see SW-SAAS-PRC-001 and SW-SAAS-PRC-COMP-001.*

---

## 7. Onboarding

### 7.1. Onboarding Steps

1. **Tenant Setup** (Week 1)
   - Production and development tenants created
   - Access credentials provisioned
   - Initial configuration completed

2. **Designer Setup** (Week 1-2)
   - Designer software installed
   - Connection to tenant configured
   - Sample templates provided

3. **Template Development** (Week 2-8)
   - Templates designed and developed
   - Testing with sample data
   - Review and approval

4. **Integration** (Week 4-8)
   - API integration developed
   - Batch processing configured
   - End-to-end testing

5. **Go-Live** (Week 8-10)
   - Production deployment
   - Hypercare monitoring
   - Handover to BAU support

*For detailed onboarding, see SW-SAAS-ONB-001 and SW-SAAS-ONB-COMP-001.*

---

## 8. Support

### 8.1. Support Scope

**Included in Support:**
- Document generation issues
- API connectivity and errors
- Template deployment issues
- Performance troubleshooting
- Configuration assistance

**Not Included:**
- Template design and development (Professional Services)
- Custom integration development (Professional Services)
- Training beyond standard courses (Training Services)

### 8.2. Response Times

| Severity | Initial Response | Target Resolution |
|----------|------------------|-------------------|
| **Critical** | 15 minutes | 4 hours |
| **High** | 1 hour | 8 hours |
| **Medium** | 4 hours | 24 hours |
| **Low** | 8 hours | 5 business days |

---

## 9. Security

### 9.1. Data Security

- **Encryption at Rest**: AES-256
- **Encryption in Transit**: TLS 1.3
- **Data Residency**: Sweden
- **Tenant Isolation**: Logical separation with encryption keys per tenant

### 9.2. Access Control

- **Authentication**: SSO/SAML 2.0, MFA supported
- **Authorization**: Role-based access control (RBAC)
- **API Security**: API keys, OAuth 2.0

### 9.3. Compliance

- ISO 27001 certified infrastructure
- GDPR compliant
- Audit logging for all operations

*For detailed security, see SW-SAAS-SVC-001 Section 9.*

---

## 10. Related Documents

| Document ID | Title |
|-------------|-------|
| SW-SAAS-SVC-001 | Platform Service Description |
| SW-SAAS-ARCH-001 | Platform Technical Architecture |
| SW-SAAS-ARCH-COMP-001 | Communications Technical Architecture |
| SW-SAAS-ONB-001 | Platform Onboarding Guide |
| SW-SAAS-ONB-COMP-001 | Communications Onboarding Addendum |
| SW-SAAS-PRC-001 | Platform Pricing Framework |
| SW-SAAS-PRC-COMP-001 | Communications Pricing Addendum |
| SW-SAAS-OPS-001 | Platform Operations Guide |
| SW-SAAS-OPS-COMP-001 | Communications Operations Addendum |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | SaaS Service Manager | Initial Communications component document |

---

**Classification:** Confidential
**Distribution:** Customers under NDA
**Review Date:** 2026-01-15

*This document is confidential and intended for Swedwise AB customers. Unauthorized distribution is prohibited.*
