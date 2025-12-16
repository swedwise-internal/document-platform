---
document_id: SW-SAAS-PRC-COMP-002
title: Pricing Addendum - Notifications
doc_type: pricing
parent_document: SW-SAAS-PRC-001
version: "1.0"
status: draft
classification: confidential
owner: Commercial Director
component: notifications
effective_date: 2026-01-01
review_date: 2026-12-31
related_documents:
  - SW-SAAS-PRC-001
  - SW-SAAS-COMP-002
---

# Pricing Addendum - Notifications

## 1. Document Purpose and Scope

This pricing addendum provides detailed pricing for the **Swedwise SaaS Notifications** component, built on OpenText Notifications technology.

### 1.1 Relationship to Platform Pricing

This document is an addendum to **SW-SAAS-PRC-001: Swedwise SaaS Platform - Pricing Framework**. Customers must have:

1. **Base Platform Subscription** (per SW-SAAS-PRC-001) - Mandatory
2. **Component Subscription** (this document) - For Notifications functionality
3. **Transaction Volumes** (this document) - Usage-based charges for email and SMS delivery

All general terms, payment terms, and discount structures from SW-SAAS-PRC-001 apply unless specifically overridden in this document.

### 1.2 What's Included

The Notifications component provides:

**OpenText Notifications:**
- Multi-channel notification delivery (email, SMS)
- Template management for notifications
- Delivery tracking and status reporting
- Integration APIs (REST/SOAP)
- Bounce handling and delivery analytics
- Production and development tenant environments

## 2. Component Subscription Fees

### 2.1 Notifications Service

The Notifications service includes:

- Multi-channel notification delivery (email and SMS)
- Notification template management
- Delivery tracking and reporting
- Integration APIs
- Bounce and failure handling

**Monthly Subscription Fee:**

| Tier | Included Volume | Monthly Fee | Annual Fee (10% discount) |
|------|-----------------|-------------|---------------------------|
| Starter | Up to 25,000 emails + 1,000 SMS/month | [TBD] SEK | [TBD] SEK |
| Professional | Up to 100,000 emails + 5,000 SMS/month | [TBD] SEK | [TBD] SEK |
| Enterprise | Up to 500,000 emails + 25,000 SMS/month | [TBD] SEK | [TBD] SEK |

*Overage charges apply beyond included volumes (see section 3).*

### 2.2 Development Environment

**Included:**
- One (1) development/test tenant included with production subscription
- Full feature parity with production
- Separate data isolation from production
- Limited transaction volume in development (1,000 emails + 100 SMS/month)
- Not covered by production SLA (best-effort availability)

**Additional Development Environments:**
- Additional dev/UAT environments: [TBD] SEK/month per environment
- Suitable for: Multi-team development, dedicated UAT, training environments

## 3. Transaction Pricing

### 3.1 Email Notification Volumes

Transaction pricing applies to email delivery beyond included volumes in component subscription.

**Email Notifications:**

| Monthly Email Volume | Price per Email | Notes |
|---------------------|----------------|--------|
| Included in subscription | Included | Per section 2.1 tier limits |
| Tier 1: 0 - 25,000 overage | [TBD] SEK | Standard delivery |
| Tier 2: 25,001 - 100,000 overage | [TBD] SEK | Volume discount |
| Tier 3: 100,001+ overage | [TBD] SEK | High-volume pricing |

**What Counts as an Email Notification:**
- One (1) email sent = one (1) transaction (regardless of attachments or size)
- Bounced emails count as transactions (delivery attempted)
- Failed notifications (system errors) do not count
- Test/development emails do not count toward production volume

**Example Calculation:**

*Customer with Professional subscription (includes 100,000 emails/month) sends 135,000 emails in a month:*

- Included: 100,000 emails (no charge)
- Overage Tier 1: 25,000 emails @ [TBD] SEK = [TBD] SEK
- Overage Tier 2: 10,000 emails @ [TBD] SEK = [TBD] SEK
- **Total overage charge: [TBD] SEK**

### 3.2 SMS Notification Volumes

Transaction pricing applies to SMS delivery beyond included volumes in component subscription.

**SMS Notifications:**

| Monthly SMS Volume | Price per SMS | Notes |
|-------------------|--------------|--------|
| Included in subscription | Included | Per section 2.1 tier limits |
| Tier 1: 0 - 1,000 overage | [TBD] SEK | Standard SMS delivery |
| Tier 2: 1,001 - 10,000 overage | [TBD] SEK | Volume discount |
| Tier 3: 10,001+ overage | [TBD] SEK | High-volume pricing |

**What Counts as an SMS Notification:**
- One (1) SMS sent = one (1) transaction
- Multi-part SMS counted per segment (160 characters per segment)
- Failed delivery (invalid number) does not count
- Test/development SMS do not count toward production volume

**SMS Pricing by Region:**

SMS costs vary by destination country:

| Region | Price per SMS | Notes |
|--------|--------------|-------|
| Sweden | Base price | Standard Nordic rate |
| Nordic (NO, DK, FI) | Base price + 10% | Nordic countries |
| EU | Base price + 25% | European Union |
| International | Contact Sales | Custom pricing per destination |

### 3.3 Committed Volume Pricing

Customers expecting consistent high volumes can pre-purchase notification volumes at discounted rates.

**Committed Monthly Email Volume:**

| Committed Volume/Month | Price per Email | Discount vs. Pay-As-You-Go | Annual Commitment |
|------------------------|-----------------|----------------------------|-------------------|
| 250,000 emails | [TBD] SEK | 15% | [TBD] SEK |
| 500,000 emails | [TBD] SEK | 20% | [TBD] SEK |
| 1,000,000+ emails | Contact Sales | 25%+ | Custom |

**Committed Monthly SMS Volume:**

| Committed Volume/Month | Price per SMS | Discount vs. Pay-As-You-Go | Annual Commitment |
|------------------------|---------------|----------------------------|-------------------|
| 10,000 SMS | [TBD] SEK | 15% | [TBD] SEK |
| 25,000 SMS | [TBD] SEK | 20% | [TBD] SEK |
| 50,000+ SMS | Contact Sales | 25%+ | Custom |

**Terms:**
- Committed volumes billed annually in advance
- Unused committed volume does not roll over
- Overage beyond committed volume charged at Tier 3 rates
- Committed volume can be increased quarterly (no decreases mid-term)

## 4. Storage Pricing

### 4.1 Included Storage

Each tenant includes baseline storage:

| Storage Type | Included per Tenant | Usage |
|--------------|---------------------|-------|
| Notification Templates | 2 GB | Email/SMS templates, assets |
| Notification Archive | 5 GB | Notification logs and audit trail |
| **Total Included** | **7 GB** | Per production tenant |

**Development tenants:** 3 GB total included (not covered by storage SLA)

### 4.2 Additional Storage Pricing

Beyond included storage:

| Storage Tier | Monthly Price | Notes |
|--------------|---------------|-------|
| Additional 10 GB | [TBD] SEK | Per 10 GB increment |
| Additional 50 GB | [TBD] SEK | Volume pricing (per 50 GB) |
| Additional 100 GB+ | [TBD] SEK | Per 100 GB block |

**Archive Storage (Optional):**
- Long-term archive for compliance: [TBD] SEK per 100 GB/month
- Reduced-cost storage for notification logs older than 12 months
- Retrieval time: Up to 24 hours

### 4.3 Storage Management

- Storage usage reported monthly in service portal
- Automatic notification at 80% and 95% capacity
- Automatic provisioning of additional storage if 100% reached (billed next invoice)
- Customers can reduce storage allocation at renewal (data migration required)

## 5. Add-On Services Pricing

### 5.1 SMTP Gateway Service

Dedicated SMTP gateway for outbound email delivery.

**What's Included:**
- Hosted SMTP server in Swedwise data center
- Configured in customer's email domain (e.g., notifications.customer.se)
- Email deliverability monitoring and optimization
- Bounce handling and feedback loops
- SPF, DKIM, DMARC configuration support

**Why Use This Service:**
- Avoids Office 365/Gmail sending limits
- Improved email deliverability and reputation management
- Removes need for on-premise email infrastructure
- Included in platform SLA

**Monthly Subscription:** [TBD] SEK

**One-Time Setup Fee:** [TBD] SEK (includes DNS configuration support)

### 5.2 Advanced Analytics

Enhanced reporting and analytics beyond standard platform reporting.

**What's Included:**
- Custom dashboards in Power BI or similar
- Notification delivery analytics (open rates, click-through, bounces)
- Email engagement metrics (opens, clicks, conversions)
- SMS delivery tracking and analytics
- Monthly executive summary reports
- 10 hours/month analyst time for custom reports

**Monthly Subscription:** [TBD] SEK

**Setup Fee:** [TBD] SEK (includes dashboard development)

### 5.3 Service Maintenance Agreement

Premium support with guaranteed access to consultant resources.

**What's Included:**
- Dedicated Customer Success Manager (CSM)
- Guaranteed consultant availability (10 hours/month included)
- Priority support response times (50% faster than standard SLA)
- Monthly health-check and optimization review
- Proactive monitoring and recommendations
- Template development assistance
- Annual platform training refresher

**Monthly Subscription:** [TBD] SEK

**Minimum Term:** 12 months

### 5.4 Single Sign-On (SSO) Setup

Integration with customer Identity Provider (IdP) for seamless authentication.

**Supported IdPs:**
- Microsoft Azure AD / Entra ID
- Okta
- ADFS
- Generic SAML 2.0 providers

**One-Time Setup Fee:** [TBD] SEK

**Ongoing Maintenance:** Included in component subscription (no additional cost)

**Note:** SSO maintenance and support included in component subscription once configured.

## 6. Professional Services Pricing

### 6.1 Standard Onboarding Package

Included with every new Notifications subscription.

**What's Included:**
- Initial platform setup and configuration
- Tenant provisioning (production + development)
- Basic integration setup (REST API configuration)
- Template designer training (2 hours, up to 6 participants)
- Administrator training (2 hours)
- Documentation handover
- 30 days post-go-live support

**Value:** [TBD] SEK (included in component subscription)

### 6.2 Custom Integration Services

Professional services for complex integrations beyond standard API usage.

**Services Include:**
- Integration design and architecture
- Custom API development
- Data mapping and transformation logic
- Integration testing and validation
- Documentation and handover

**Pricing:** [TBD] SEK per day

**Typical Projects:**
- CRM integration (3-5 days)
- Marketing automation integration (5-8 days)
- Multi-channel notification orchestration (10-15 days)

### 6.3 Template Development Services

Professional notification template design and development by Swedwise experts.

**Services Include:**
- Requirements analysis and design
- Email template development (HTML/responsive)
- SMS template development
- Dynamic content and personalization
- Testing across email clients and devices
- Template documentation

**Pricing:**

| Template Complexity | Estimated Effort | Price per Template |
|---------------------|------------------|-------------------|
| Simple (plain text email/SMS) | 2 hours | [TBD] SEK |
| Moderate (responsive HTML email) | 4-8 hours | [TBD] SEK |
| Complex (multi-part email with personalization) | 10-20 hours | [TBD] SEK |
| Custom quote | Variable | [TBD] SEK per day |

### 6.4 Additional Training Services

Beyond standard onboarding training.

**Training Topics:**

| Training Topic | Duration | Audience | Price per Session |
|----------------|----------|----------|-------------------|
| Advanced Template Design | 2 hours | Designers | [TBD] SEK |
| API Integration Workshop | 4 hours | Developers | [TBD] SEK |
| Notifications Management | 2 hours | Operations | [TBD] SEK |
| Deliverability Best Practices | 2 hours | Admins | [TBD] SEK |

**Custom Training:** [TBD] SEK per day for tailored training programs

**Training Delivery:**
- On-site or remote (Teams/Zoom)
- Up to 10 participants per session
- Training materials included
- Recording provided (remote sessions only)

### 6.5 Consulting and Advisory Services

Expert consultation for optimization, best practices, and strategic guidance.

**Services Include:**
- Platform health assessment
- Deliverability optimization
- Template library review and optimization
- Integration architecture review
- Capacity planning
- Email reputation management

**Pricing:** [TBD] SEK per day

**Retainer Option:** Pre-purchase consulting days at discounted rates
- 5-day pack: [TBD] SEK (5% discount)
- 10-day pack: [TBD] SEK (10% discount)
- Valid for 12 months from purchase

## 7. Pricing Scenarios and Examples

### 7.1 Small Customer Scenario

**Customer Profile:**
- Small municipality (15,000 residents)
- Email notifications: 8,000/month
- SMS notifications: 500/month
- Basic template needs

**Pricing Breakdown:**

| Item | Quantity | Monthly Cost | Annual Cost |
|------|----------|--------------|-------------|
| Base Platform Fee (Starter) | 1 | [TBD] SEK | [TBD] SEK |
| Notifications Component (Starter) | 1 | [TBD] SEK | [TBD] SEK |
| Email Notifications | 8,000/month | Included | Included |
| SMS Notifications | 500/month | Included | Included |
| **Total Monthly** | | **[TBD] SEK** | |
| **Total Annual (with 10% prepay discount)** | | | **[TBD] SEK** |

**One-Time Costs:**
- Standard Onboarding: Included
- **Total Implementation:** [TBD] SEK

**Total First Year Cost:** [TBD] SEK

### 7.2 Medium Customer Scenario

**Customer Profile:**
- Regional insurance company
- Email notifications: 60,000/month
- SMS notifications: 3,000/month
- Custom template development needed
- SMTP gateway required

**Pricing Breakdown:**

| Item | Quantity | Monthly Cost | Annual Cost |
|------|----------|--------------|-------------|
| Base Platform Fee (Professional) | 1 | [TBD] SEK | [TBD] SEK |
| Notifications Component (Professional) | 1 | [TBD] SEK | [TBD] SEK |
| SMTP Gateway Service | 1 | [TBD] SEK | [TBD] SEK |
| Email Notifications | 60,000/month | Included | Included |
| SMS Notifications | 3,000/month | Included | Included |
| **Total Monthly** | | **[TBD] SEK** | |
| **Total Annual (with 10% prepay discount)** | | | **[TBD] SEK** |

**One-Time Costs:**
- Standard Onboarding: Included
- SMTP Gateway Setup: [TBD] SEK
- Template Development (5 templates): [TBD] SEK
- **Total Implementation:** [TBD] SEK

**Total First Year Cost:** [TBD] SEK

### 7.3 Large Enterprise Scenario

**Customer Profile:**
- National telecom provider
- Email notifications: 400,000/month
- SMS notifications: 20,000/month
- Service Maintenance Agreement required
- Advanced analytics needed
- 36-month commitment

**Pricing Breakdown:**

| Item | Quantity | Monthly Cost | Annual Cost |
|------|----------|--------------|-------------|
| Base Platform Fee (Enterprise) | 1 | [TBD] SEK | [TBD] SEK |
| Notifications Component (Enterprise) | 1 | [TBD] SEK | [TBD] SEK |
| SMTP Gateway Service | 1 | [TBD] SEK | [TBD] SEK |
| Advanced Analytics | 1 | [TBD] SEK | [TBD] SEK |
| Service Maintenance Agreement | 1 | [TBD] SEK | [TBD] SEK |
| Email Notifications | 400,000/month | Included | Included |
| SMS Notifications | 20,000/month | Included | Included |
| Additional Storage (20 GB) | 2 | [TBD] SEK | [TBD] SEK |
| **Total Monthly** | | **[TBD] SEK** | |
| **Total Annual** | | | **[TBD] SEK** |
| **Multi-Year Discount (36 months)** | | | **-10%** |
| **Net Annual Cost** | | | **[TBD] SEK** |

**One-Time Costs:**
- Standard Onboarding: Included
- SMTP Gateway Setup: [TBD] SEK
- Template Development (10 templates): [TBD] SEK
- Advanced Training (3 sessions): [TBD] SEK
- **Total Implementation:** [TBD] SEK

**Total 36-Month Cost:** [TBD] SEK

**Average Annual Cost:** [TBD] SEK

## 8. Onboarding Project Pricing

### 8.1 Standard Onboarding Package

Included with every Notifications subscription (as detailed in section 6.1).

**Timeline:** 1-2 weeks from contract signing to go-live

**Customer Responsibilities:**
- Provide email domain access (DNS configuration)
- Assign users for training
- Review and approve configuration
- Participate in user acceptance testing

### 8.2 Custom Onboarding Packages

For customers requiring more extensive implementation support:

| Package | Suitable For | Included Services | Price |
|---------|--------------|------------------|-------|
| **Enhanced Onboarding** | Medium complexity, custom templates | Standard + SMTP gateway + 3 templates | [TBD] SEK |
| **Enterprise Onboarding** | High complexity, integrations | Standard + SMTP gateway + 8 templates + advanced training | [TBD] SEK |
| **Fully Managed** | Turnkey deployment | Full project management + all integrations + template library + 2-month hypercare | [TBD] SEK |

### 8.3 Onboarding Timeline and Milestones

**Typical Standard Onboarding Timeline:**

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 1 | Kickoff & Configuration | Project plan, tenant provisioning, training completed |
| 2 | Testing & Go-Live | Template testing, production cutover, documentation |

**Payment Terms:**
- Standard onboarding: Included in first month subscription
- Custom onboarding: 50% at kickoff, 50% at go-live
- Professional services: Invoiced monthly based on time sheets

## 9. Terms and Conditions Specific to This Component

### 9.1 Component-Specific Terms

In addition to terms in SW-SAAS-PRC-001, the following apply:

**Volume Overages:**
- Overage billing occurs monthly in arrears
- Customers notified at 80% of included volume
- Automatic tier upgrade recommended at 3 consecutive months >150% of tier limit

**Email Deliverability:**
- Customer responsible for maintaining email domain reputation
- Swedwise provides guidance but cannot guarantee inbox placement
- Bulk email best practices must be followed (unsubscribe links, valid sender addresses)

**SMS Delivery:**
- SMS delivery subject to carrier availability
- International SMS requires advance approval and may incur additional fees
- Swedwise not responsible for SMS delivery delays by carriers

**SLA:**
- 99.9% uptime SLA applies to production environment only
- Development/test environments: best-effort (no SLA)
- Maintenance windows: Weekly 2-hour window (Saturday 18:00-20:00 CET), monthly 8-hour window (Saturday 18:00 - Sunday 02:00 CET)
- Scheduled downtime does not count against SLA

**Data Retention:**
- Notification logs retained for 12 months (compliance requirement)
- Extended retention available (requires additional storage, section 4.2)

### 9.2 OpenText Licensing Terms

Swedwise licenses OpenText Notifications from OpenText. Customer usage must comply with:

- OpenText acceptable use policy
- Prohibited: Spam, unsolicited communications, illegal content
- License audits: OpenText reserves right to audit usage (coordinated through Swedwise)

Full OpenText terms available in master subscription agreement.

## 10. Frequently Asked Questions (FAQ)

### 10.1 Pricing Questions

**Q: Can I start with a small tier and upgrade later?**
A: Yes. You can upgrade tier at any time. Upgraded pricing applies immediately (pro-rated if mid-month). Downgrades allowed at renewal only.

**Q: What happens if I exceed my tier volume limits?**
A: Overage charges apply per the transaction pricing table (section 3). You'll receive notification at 80% usage. We recommend tier upgrade if consistently exceeding limits.

**Q: Do bounced emails count toward my volume?**
A: Yes. Bounced emails count as attempted deliveries. We recommend maintaining clean email lists to minimize bounces.

**Q: Are there any hidden fees?**
A: No. All fees are clearly defined in this document. Only charges are: subscription fees, overage usage, and optional add-on services.

### 10.2 Technical Questions

**Q: What notification channels are supported?**
A: Email (HTML and plain text) and SMS. Future channels may include push notifications and messaging apps.

**Q: Can I integrate with my existing systems?**
A: Yes. Notifications provides REST and SOAP APIs. Common integrations: CRM, marketing automation, customer portals. Custom integration services available (section 6.2).

**Q: Is training included?**
A: Yes. Standard onboarding includes 4 hours of training (template designer + administrator). Additional training available (section 6.4).

**Q: How long does implementation take?**
A: Standard onboarding: 1-2 weeks. Custom implementations vary based on complexity (see section 8.3).

### 10.3 Deliverability Questions

**Q: How do you ensure email deliverability?**
A: We provide dedicated SMTP gateway, SPF/DKIM/DMARC configuration, bounce handling, and deliverability monitoring. Customer must follow best practices (valid opt-ins, unsubscribe links, quality content).

**Q: What if my emails go to spam?**
A: We provide deliverability consulting and monitoring. Most spam issues are related to content, sender reputation, or recipient list quality. We'll help diagnose and resolve.

**Q: Can I send marketing emails?**
A: Yes, if recipients have opted in. You must comply with GDPR and anti-spam regulations. We recommend using our deliverability best practices.

### 10.4 Compliance and Data Questions

**Q: Where is my data stored?**
A: All data stored in Swedish data center (Entiros AB, Stockholm region). ISO 27001, ISO 9001, ISO 14001 certified facility.

**Q: Is the service GDPR compliant?**
A: Yes. Swedwise is GDPR compliant. Data Processing Agreement (DPA) included in subscription agreement. Data residency in Sweden ensures EU GDPR compliance.

**Q: Can I export my data?**
A: Yes. Data export available at any time via API or scheduled exports. Upon cancellation, 30-day window for data export before permanent deletion.

**Q: What's the backup policy?**
A: Backups every 6 hours, 7-day retention. Disaster recovery copy in secondary data center. Backup covered by platform SLA.

## 11. Contact and Next Steps

### 11.1 Get a Custom Quote

For a detailed quotation tailored to your specific needs:

1. **Contact Sales:**
   - Email: sales@swedwise.se
   - Phone: +46 [phone number]
   - Web: www.swedwise.se/saas-notifications

2. **Discovery Call:**
   - 30-minute needs assessment
   - Review of use cases and volume requirements
   - Discussion of integration needs

3. **Receive Quote:**
   - Detailed quotation within 5 business days
   - Valid for 30 days
   - Includes implementation timeline and plan

### 11.2 Request a Demo

See Notifications in action:

- Live platform demonstration
- Walk-through of template designer
- Sample notification delivery
- Delivery tracking examples
- Q&A with product specialists

**Schedule demo:** [demo request URL]

### 11.3 Proof of Concept (POC)

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
| 1.0 | 2025-01-15 | Commercial Director | Initial Notifications component pricing addendum (split from combined document) |

**Next Review Date:** 2026-12-31

**Approval:**
- Commercial Director: _________________ Date: _______
- Product Manager (Notifications): _________________ Date: _______
- CFO: _________________ Date: _______

---

*This pricing addendum is subject to change. Customers under contract are protected by pricing lock for their contract term. All prices exclude VAT (moms). Swedish VAT applies per current tax regulations.*
