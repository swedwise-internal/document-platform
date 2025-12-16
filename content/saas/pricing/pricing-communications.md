---
document_id: SW-SAAS-PRC-COMP-001
title: Pricing Addendum - Communications
doc_type: pricing
parent_document: SW-SAAS-PRC-001
version: "1.0"
status: draft
classification: confidential
owner: Commercial Director
component: communications
effective_date: 2026-01-01
review_date: 2026-12-31
related_documents:
  - SW-SAAS-PRC-001
  - SW-SAAS-COMP-001
---

# Pricing Addendum - Communications

## 1. Document Purpose and Scope

This pricing addendum provides detailed pricing for the **Swedwise SaaS Communications** component, built on OpenText Communications (Exstream) technology.

### 1.1 Relationship to Platform Pricing

This document is an addendum to **SW-SAAS-PRC-001: Swedwise SaaS Platform - Pricing Framework**. Customers must have:

1. **Base Platform Subscription** (per SW-SAAS-PRC-001) - Mandatory
2. **Component Subscription** (this document) - For Communications functionality
3. **Transaction Volumes** (this document) - Usage-based charges for document generation

All general terms, payment terms, and discount structures from SW-SAAS-PRC-001 apply unless specifically overridden in this document.

### 1.2 What's Included

The Communications component provides:

**OpenText Communications (Exstream):**
- Multi-channel document generation and composition
- Template designer tools (web-based interface)
- Data-driven personalization and variable content
- Output formats: PDF, HTML, XML, print streams
- Production and development tenant environments
- Integration APIs (REST/SOAP)

## 2. Component Subscription Fees

### 2.1 Communications Production Environment

The production environment includes:

- One (1) OpenText Communications (Exstream) production tenant
- Multi-channel document generation capabilities
- Template designer access
- Standard API access
- Included in platform SLA (99.9% uptime)
- Quarterly platform upgrades
- Production support (per base platform support SLA)

**Monthly Subscription Fee:**

| Tier | Suitable For | Monthly Fee | Annual Fee (10% discount) |
|------|--------------|-------------|---------------------------|
| Starter | Up to 10,000 docs/month | [TBD] SEK | [TBD] SEK |
| Professional | 10,001 - 50,000 docs/month | [TBD] SEK | [TBD] SEK |
| Enterprise | 50,001+ docs/month | [TBD] SEK | [TBD] SEK |

*Volume tiers include baseline document generation capacity. Overage charges apply per section 4.*

### 2.2 Development Environment

**Included:**
- One (1) development/test tenant included with production subscription
- Full feature parity with production
- Separate data isolation from production
- No transaction volume limits in development
- Not covered by production SLA (best-effort availability)

**Additional Development Environments:**
- Additional dev/UAT environments: [TBD] SEK/month per environment
- Suitable for: Multi-team development, dedicated UAT, training environments

## 3. User Licensing

### 3.1 License Types

**Designer License (Named User):**
- Full access to Communications template designer
- Create and modify templates
- Test and preview functionality
- Access to development and production environments
- 1 unit = 1 named designer user

**User License (Named User):**
- Read-only access to view templates and reports
- Cannot modify templates
- Suitable for business reviewers, approvers
- 1 unit = 1 named user

**Concurrent License:**
- Shared access for occasional users
- Full designer capabilities when logged in
- Suitable for distributed teams with shift work
- 2 units = 1 concurrent session

### 3.2 License Pricing

| License Type | Monthly Price per Unit | Annual Price per Unit (10% discount) | Notes |
|--------------|------------------------|--------------------------------------|-------|
| Designer License (Named) | [TBD] SEK | [TBD] SEK | Full template design access |
| User License (Named) | [TBD] SEK | [TBD] SEK | Read-only, reporting access |
| Concurrent License | [TBD] SEK | [TBD] SEK | Per concurrent session (2 units) |

**Minimum License Requirements:**
- Starter tier: Minimum 2 designer licenses
- Professional tier: Minimum 5 designer licenses
- Enterprise tier: Minimum 10 designer licenses

### 3.3 License Flexibility

Customers can convert license units:
- 1 named designer = 1 unit
- 1 named user = 0.5 units
- 1 concurrent session = 2 units

Changes allowed quarterly with 30-day notice. Conversion requests must maintain minimum license requirements.

### 3.4 License Tiers and Included Users

Component subscription tiers include baseline user licenses:

| Subscription Tier | Included Designer Licenses | Included User Licenses | Additional License Pricing |
|-------------------|----------------------------|------------------------|----------------------------|
| Starter | 2 designers | 3 users | Per pricing table (section 3.2) |
| Professional | 5 designers | 10 users | Per pricing table (section 3.2) |
| Enterprise | 10 designers | 25 users | Per pricing table (section 3.2) |

## 4. Transaction Pricing

### 4.1 Document Generation Volumes

Transaction pricing applies to document generation beyond included volumes in component subscription.

**Volume Tiers:**

| Monthly Document Volume | Price per Document | Notes |
|------------------------|-------------------|--------|
| Included in subscription | Included | Per section 2.1 tier limits |
| Tier 1: 0 - 10,000 overage | [TBD] SEK | First 10k beyond subscription |
| Tier 2: 10,001 - 50,000 overage | [TBD] SEK | Next 40k documents |
| Tier 3: 50,001+ overage | [TBD] SEK | Volume pricing for high usage |

**What Counts as a Document:**
- One (1) generated document = one (1) transaction
- Multi-page documents count as single transaction
- Failed generations do not count (HTTP 500 errors)
- Test/development generations do not count

**Example Calculation:**

*Customer with Professional subscription (includes 50,000 docs/month) generates 75,000 documents in a month:*

- Included: 50,000 documents (no charge)
- Overage Tier 1: 10,000 documents @ [TBD] SEK = [TBD] SEK
- Overage Tier 2: 15,000 documents @ [TBD] SEK = [TBD] SEK
- **Total overage charge: [TBD] SEK**

### 4.2 Committed Volume Pricing

Customers expecting consistent high volumes can pre-purchase transaction volumes at discounted rates.

**Committed Monthly Document Volume:**

| Committed Volume/Month | Price per Document | Discount vs. Pay-As-You-Go | Annual Commitment |
|------------------------|-------------------|----------------------------|-------------------|
| 100,000 documents | [TBD] SEK | 15% | [TBD] SEK |
| 250,000 documents | [TBD] SEK | 20% | [TBD] SEK |
| 500,000+ documents | Contact Sales | 25%+ | Custom |

**Terms:**
- Committed volumes billed annually in advance
- Unused committed volume does not roll over
- Overage beyond committed volume charged at Tier 3 rates
- Committed volume can be increased quarterly (no decreases mid-term)

## 5. Storage Pricing

### 5.1 Included Storage

Each tenant includes baseline storage:

| Storage Type | Included per Tenant | Usage |
|--------------|---------------------|-------|
| Template Storage | 5 GB | Communication templates, assets, fonts |
| Output Archive | 10 GB | Generated document archive (optional) |
| **Total Included** | **15 GB** | Per production tenant |

**Development tenants:** 10 GB total included (not covered by storage SLA)

### 5.2 Additional Storage Pricing

Beyond included storage:

| Storage Tier | Monthly Price | Notes |
|--------------|---------------|-------|
| Additional 10 GB | [TBD] SEK | Per 10 GB increment |
| Additional 50 GB | [TBD] SEK | Volume pricing (per 50 GB) |
| Additional 100 GB+ | [TBD] SEK | Per 100 GB block |

**Archive Storage (Optional):**
- Long-term archive for compliance: [TBD] SEK per 100 GB/month
- Reduced-cost storage for documents older than 12 months
- Retrieval time: Up to 24 hours

### 5.3 Storage Management

- Storage usage reported monthly in service portal
- Automatic notification at 80% and 95% capacity
- Automatic provisioning of additional storage if 100% reached (billed next invoice)
- Customers can reduce storage allocation at renewal (data migration required)

## 6. Add-On Services Pricing

### 6.1 Integration Server

Hosted integration server for secure connectivity between SaaS platform and customer on-premise systems.

**What's Included:**
- Dedicated virtual server in Swedwise data center
- OpenText Integration module pre-configured
- VPN or secure tunnel to customer network
- Monitoring and basic maintenance included
- Integration development support (5 hours/month included)

**Use Cases:**
- Integration with on-premise ERP, CRM, or databases
- Batch file processing from customer file servers
- Legacy system connectivity

**Monthly Subscription:** [TBD] SEK

**One-Time Setup Fee:** [TBD] SEK (includes VPN setup, integration module configuration)

### 6.2 Advanced Analytics

Enhanced reporting and analytics beyond standard platform reporting.

**What's Included:**
- Custom dashboards in Power BI or similar
- Document generation analytics (volumes, performance, errors)
- API usage analytics
- Monthly executive summary reports
- 10 hours/month analyst time for custom reports

**Monthly Subscription:** [TBD] SEK

**Setup Fee:** [TBD] SEK (includes dashboard development)

### 6.3 Service Maintenance Agreement

Premium support with guaranteed access to consultant resources.

**What's Included:**
- Dedicated Customer Success Manager (CSM)
- Guaranteed consultant availability (20 hours/month included)
- Priority support response times (50% faster than standard SLA)
- Monthly health-check and optimization review
- Proactive monitoring and recommendations
- Template development assistance
- Annual platform training refresher

**Monthly Subscription:** [TBD] SEK

**Minimum Term:** 12 months

### 6.4 Single Sign-On (SSO) Setup

Integration with customer Identity Provider (IdP) for seamless authentication.

**Supported IdPs:**
- Microsoft Azure AD / Entra ID
- Okta
- ADFS
- Generic SAML 2.0 providers

**One-Time Setup Fee:** [TBD] SEK

**Ongoing Maintenance:** Included in component subscription (no additional cost)

**Note:** SSO maintenance and support included in component subscription once configured.

## 7. Professional Services Pricing

### 7.1 Standard Onboarding Package

Included with every new Communications subscription.

**What's Included:**
- Initial platform setup and configuration
- Tenant provisioning (production + development)
- Basic integration setup (REST API configuration)
- Template designer training (4 hours, up to 6 participants)
- Administrator training (2 hours)
- Documentation handover
- 30 days post-go-live support

**Value:** [TBD] SEK (included in component subscription)

### 7.2 Custom Integration Services

Professional services for complex integrations beyond standard API usage.

**Services Include:**
- Integration design and architecture
- Custom API development
- Data mapping and transformation logic
- Integration testing and validation
- Documentation and handover

**Pricing:** [TBD] SEK per day

**Typical Projects:**
- ERP integration (5-10 days)
- Legacy system connectivity (10-15 days)
- Multi-system data aggregation (15-20 days)

### 7.3 Template Development Services

Professional template design and development by Swedwise experts.

**Services Include:**
- Requirements analysis and design
- Template development (Communications Designer)
- Dynamic content and variable data logic
- Multi-channel output formatting (PDF, HTML, print)
- Testing and validation
- Template documentation

**Pricing:**

| Template Complexity | Estimated Effort | Price per Template |
|---------------------|------------------|-------------------|
| Simple (static, single page) | 4 hours | [TBD] SEK |
| Moderate (dynamic, multi-page) | 8-16 hours | [TBD] SEK |
| Complex (conditional logic, multi-channel) | 20-40 hours | [TBD] SEK |
| Custom quote | Variable | [TBD] SEK per day |

### 7.4 Additional Training Services

Beyond standard onboarding training.

**Training Topics:**

| Training Topic | Duration | Audience | Price per Session |
|----------------|----------|----------|-------------------|
| Advanced Template Design | 4 hours | Designers | [TBD] SEK |
| API Integration Workshop | 4 hours | Developers | [TBD] SEK |
| Administrator Deep Dive | 4 hours | Admins | [TBD] SEK |
| Best Practices Review | 2 hours | All users | [TBD] SEK |

**Custom Training:** [TBD] SEK per day for tailored training programs

**Training Delivery:**
- On-site or remote (Teams/Zoom)
- Up to 10 participants per session
- Training materials included
- Recording provided (remote sessions only)

### 7.5 Consulting and Advisory Services

Expert consultation for optimization, best practices, and strategic guidance.

**Services Include:**
- Platform health assessment
- Performance optimization
- Template library review and optimization
- Integration architecture review
- Capacity planning
- Upgrade planning and testing

**Pricing:** [TBD] SEK per day

**Retainer Option:** Pre-purchase consulting days at discounted rates
- 5-day pack: [TBD] SEK (5% discount)
- 10-day pack: [TBD] SEK (10% discount)
- Valid for 12 months from purchase

## 8. Pricing Scenarios and Examples

### 8.1 Small Customer Scenario

**Customer Profile:**
- Small municipality (15,000 residents)
- Monthly document needs: 3,000 citizen communications (bills, notifications)
- Users: 3 designers, 5 viewers

**Pricing Breakdown:**

| Item | Quantity | Monthly Cost | Annual Cost |
|------|----------|--------------|-------------|
| Base Platform Fee (Starter) | 1 | [TBD] SEK | [TBD] SEK |
| Communications Component (Starter) | 1 | [TBD] SEK | [TBD] SEK |
| Additional Designer License | 1 | [TBD] SEK | [TBD] SEK |
| Additional User License | 2 | [TBD] SEK | [TBD] SEK |
| Document Generation | 3,000/month | Included | Included |
| **Total Monthly** | | **[TBD] SEK** | |
| **Total Annual (with 10% prepay discount)** | | | **[TBD] SEK** |

**One-Time Costs:**
- Standard Onboarding: Included
- **Total Implementation:** [TBD] SEK

**Total First Year Cost:** [TBD] SEK

### 8.2 Medium Customer Scenario

**Customer Profile:**
- Regional insurance company
- Monthly documents: 35,000 (policies, claims, statements)
- Users: 10 designers, 20 viewers, 5 concurrent users
- Integration with policy admin system (custom)

**Pricing Breakdown:**

| Item | Quantity | Monthly Cost | Annual Cost |
|------|----------|--------------|-------------|
| Base Platform Fee (Professional) | 1 | [TBD] SEK | [TBD] SEK |
| Communications Component (Professional) | 1 | [TBD] SEK | [TBD] SEK |
| Additional Designer Licenses | 5 | [TBD] SEK | [TBD] SEK |
| Additional User Licenses | 10 | [TBD] SEK | [TBD] SEK |
| Concurrent Licenses | 5 sessions | [TBD] SEK | [TBD] SEK |
| Document Generation | 35,000/month | Included | Included |
| **Total Monthly** | | **[TBD] SEK** | |
| **Total Annual (with 10% prepay discount)** | | | **[TBD] SEK** |

**One-Time Costs:**
- Standard Onboarding: Included
- Custom Integration (8 days): [TBD] SEK
- Template Development (3 complex templates): [TBD] SEK
- **Total Implementation:** [TBD] SEK

**Total First Year Cost:** [TBD] SEK

### 8.3 Large Enterprise Scenario

**Customer Profile:**
- National telecom provider
- Monthly documents: 150,000 (invoices, contracts, service docs)
- Users: 25 designers, 50 viewers, 15 concurrent
- Multiple integrations (CRM, billing, inventory)
- Service Maintenance Agreement required
- 36-month commitment

**Pricing Breakdown:**

| Item | Quantity | Monthly Cost | Annual Cost |
|------|----------|--------------|-------------|
| Base Platform Fee (Enterprise) | 1 | [TBD] SEK | [TBD] SEK |
| Communications Component (Enterprise) | 1 | [TBD] SEK | [TBD] SEK |
| Additional Designer Licenses | 15 | [TBD] SEK | [TBD] SEK |
| Additional User Licenses | 25 | [TBD] SEK | [TBD] SEK |
| Concurrent Licenses | 15 sessions | [TBD] SEK | [TBD] SEK |
| Integration Server | 1 | [TBD] SEK | [TBD] SEK |
| Advanced Analytics | 1 | [TBD] SEK | [TBD] SEK |
| Service Maintenance Agreement | 1 | [TBD] SEK | [TBD] SEK |
| Committed Document Volume (150k/month) | 1 | [TBD] SEK | [TBD] SEK |
| Additional Storage (50 GB) | 1 | [TBD] SEK | [TBD] SEK |
| **Total Monthly** | | **[TBD] SEK** | |
| **Total Annual** | | | **[TBD] SEK** |
| **Multi-Year Discount (36 months)** | | | **-10%** |
| **Volume Discount (>2M SEK ARR)** | | | **-10%** |
| **Net Annual Cost** | | | **[TBD] SEK** |

**One-Time Costs:**
- Standard Onboarding: Included
- Integration Server Setup: [TBD] SEK
- Custom Integrations (30 days): [TBD] SEK
- Template Development (10 complex templates): [TBD] SEK
- Advanced Training (5 sessions): [TBD] SEK
- **Total Implementation:** [TBD] SEK

**Total 36-Month Cost:** [TBD] SEK

**Average Annual Cost:** [TBD] SEK

## 9. Onboarding Project Pricing

### 9.1 Standard Onboarding Package

Included with every Communications subscription (as detailed in section 7.1).

**Timeline:** 2-4 weeks from contract signing to go-live

**Customer Responsibilities:**
- Provide access to integration endpoints (if required)
- Assign users for training
- Review and approve configuration
- Participate in user acceptance testing

### 9.2 Custom Onboarding Packages

For customers requiring more extensive implementation support:

| Package | Suitable For | Included Services | Price |
|---------|--------------|------------------|-------|
| **Enhanced Onboarding** | Medium complexity, 1-2 integrations | Standard + 5 days custom integration + 2 templates | [TBD] SEK |
| **Enterprise Onboarding** | High complexity, 3+ integrations | Standard + 15 days integration + 5 templates + advanced training | [TBD] SEK |
| **Fully Managed** | Turnkey deployment | Full project management + all integrations + template library + 3-month hypercare | [TBD] SEK |

### 9.3 Onboarding Timeline and Milestones

**Typical Standard Onboarding Timeline:**

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 1 | Kickoff & Planning | Project plan, tenant provisioning |
| 2 | Configuration & Training | Platform configured, training completed |
| 3 | Integration & Testing | API integration, UAT |
| 4 | Go-Live & Handover | Production cutover, documentation |

**Payment Terms:**
- Standard onboarding: Included in first month subscription
- Custom onboarding: 50% at kickoff, 50% at go-live
- Professional services: Invoiced monthly based on time sheets

## 10. Terms and Conditions Specific to This Component

### 10.1 Component-Specific Terms

In addition to terms in SW-SAAS-PRC-001, the following apply:

**License Minimums:**
- Minimum 2 designer licenses required (per tier requirements)
- Reducing below minimums requires tier downgrade
- Tier downgrades allowed at renewal only (90-day notice)

**Volume Overages:**
- Overage billing occurs monthly in arrears
- Customers notified at 80% of included volume
- Automatic tier upgrade recommended at 3 consecutive months >150% of tier limit

**SLA:**
- 99.9% uptime SLA applies to production environment only
- Development/test environments: best-effort (no SLA)
- Maintenance windows: Weekly 2-hour window (Saturday 18:00-20:00 CET), monthly 8-hour window (Saturday 18:00 - Sunday 02:00 CET)
- Scheduled downtime does not count against SLA

**Data Retention:**
- Generated documents stored in output archive per customer configuration (optional)
- Default retention: 90 days
- Extended retention available (requires additional storage, section 5.2)

### 10.2 OpenText Licensing Terms

Swedwise licenses OpenText Communications from OpenText. Customer usage must comply with:

- OpenText acceptable use policy
- Prohibited: Reselling generated documents, using platform for third-party service bureau operations
- License audits: OpenText reserves right to audit usage (coordinated through Swedwise)

Full OpenText terms available in master subscription agreement.

## 11. Frequently Asked Questions (FAQ)

### 11.1 Pricing Questions

**Q: Can I start with a small tier and upgrade later?**
A: Yes. You can upgrade tier at any time. Upgraded pricing applies immediately (pro-rated if mid-month). Downgrades allowed at renewal only.

**Q: What happens if I exceed my tier volume limits?**
A: Overage charges apply per the transaction pricing table (section 4). You'll receive notification at 80% usage. We recommend tier upgrade if consistently exceeding limits.

**Q: Do failed document generations count toward my volume?**
A: No. Only successful document generations count. System errors (HTTP 500) do not count as transactions.

**Q: Are there any hidden fees?**
A: No. All fees are clearly defined in this document. Only charges are: subscription fees, user licenses, overage usage, and optional add-on services.

### 11.2 Licensing Questions

**Q: What's the difference between named and concurrent licenses?**
A: Named licenses are assigned to specific individuals (always available). Concurrent licenses are shared (first-come, first-served). Concurrent is cost-effective for occasional users.

**Q: Can I mix named and concurrent licenses?**
A: Yes. Most customers use named licenses for core team and concurrent for occasional users.

**Q: What happens if I hit concurrent license limit?**
A: Additional users are queued until a session frees up. We recommend monitoring concurrent usage and adding licenses if queuing occurs frequently.

### 11.3 Technical Questions

**Q: What document formats are supported?**
A: Communications supports: PDF, HTML, XML, AFP, PostScript, and other print streams.

**Q: Can I integrate with my existing systems?**
A: Yes. Communications provides REST and SOAP APIs. Common integrations: ERP, CRM, document management, billing systems. Custom integration services available (section 7.2).

**Q: Is training included?**
A: Yes. Standard onboarding includes 6 hours of training (template designer + administrator). Additional training available (section 7.4).

**Q: How long does implementation take?**
A: Standard onboarding: 2-4 weeks. Custom implementations vary based on complexity (see section 9.3).

### 11.4 Compliance and Data Questions

**Q: Where is my data stored?**
A: All data stored in Swedish data center (Entiros AB, Stockholm region). ISO 27001, ISO 9001, ISO 14001 certified facility.

**Q: Is the service GDPR compliant?**
A: Yes. Swedwise is GDPR compliant. Data Processing Agreement (DPA) included in subscription agreement. Data residency in Sweden ensures EU GDPR compliance.

**Q: Can I export my data?**
A: Yes. Data export available at any time via API or scheduled exports. Upon cancellation, 30-day window for data export before permanent deletion.

**Q: What's the backup policy?**
A: Backups every 6 hours, 7-day retention. Disaster recovery copy in secondary data center. Backup covered by platform SLA.

## 12. Contact and Next Steps

### 12.1 Get a Custom Quote

For a detailed quotation tailored to your specific needs:

1. **Contact Sales:**
   - Email: sales@swedwise.se
   - Phone: +46 [phone number]
   - Web: www.swedwise.se/saas-communications

2. **Discovery Call:**
   - 30-minute needs assessment
   - Review of use cases and volume requirements
   - Discussion of integration needs

3. **Receive Quote:**
   - Detailed quotation within 5 business days
   - Valid for 30 days
   - Includes implementation timeline and plan

### 12.2 Request a Demo

See Communications in action:

- Live platform demonstration
- Walk-through of template designer
- Sample document generation
- Q&A with product specialists

**Schedule demo:** [demo request URL]

### 12.3 Proof of Concept (POC)

For enterprise customers, POC programs available:

- 30-day trial environment
- Limited-scope implementation with your data
- Technical support during POC
- Success criteria defined upfront
- POC cost credited toward subscription if you proceed

**Discuss POC:** Contact sales to discuss POC scope and terms.

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Commercial Director | Initial Communications component pricing addendum (split from combined document) |

**Next Review Date:** 2026-12-31

**Approval:**
- Commercial Director: _________________ Date: _______
- Product Manager (Communications): _________________ Date: _______
- CFO: _________________ Date: _______

---

*This pricing addendum is subject to change. Customers under contract are protected by pricing lock for their contract term. All prices exclude VAT (moms). Swedish VAT applies per current tax regulations.*
