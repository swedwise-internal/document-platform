---
document_id: SW-SAAS-COMP-002
title: Service Component - Notifications
doc_type: service-component
version: "1.0"
status: draft
classification: confidential
owner: SaaS Service Manager
component: notifications
effective_date: 2025-01-15
review_date: 2026-01-15
parent_document: SW-SAAS-SVC-001
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-SAAS-SVC-001
  - SW-SAAS-ARCH-001
  - SW-SAAS-ARCH-COMP-002
---

# Service Component - Notifications

**Document ID:** SW-SAAS-COMP-002
**Parent Service Description:** SW-SAAS-SVC-001
**Date:** 2025-01-15
**Version:** 1.0
**Classification:** Confidential

---

## 1. Component Overview

### 1.1. Purpose

This Service Component document provides detailed specifications for the **Swedwise Notifications** component of the Swedwise SaaS Platform. Notifications enables multi-channel message delivery including email and SMS.

### 1.2. Document Hierarchy

```
SW-SAAS-SVC-001 (Platform Service Description)
    └── Service Components
         ├── SW-SAAS-COMP-001 (Communications)
         ├── SW-SAAS-COMP-002 (This Document - Notifications)
         └── [Future Components]

SW-SAAS-ARCH-001 (Platform Architecture)
    └── Architecture Addendums
         ├── SW-SAAS-ARCH-COMP-001 (Communications Architecture)
         └── SW-SAAS-ARCH-COMP-002 (Notifications Architecture)
```

### 1.3. Component Summary

| Attribute | Value |
|-----------|-------|
| **Component Name** | Swedwise Notifications |
| **Technology** | OpenText Notifications + Email/SMS Gateways |
| **Category** | Multi-Channel Notification Delivery |
| **Purpose** | Email and SMS notification delivery with tracking |
| **Related Architecture** | SW-SAAS-ARCH-COMP-002 |

---

## 2. Component Description

### 2.1. What is Swedwise Notifications?

**Swedwise Notifications** is a multi-channel notification delivery service that enables organizations to send transactional and event-driven messages to customers via email and SMS. Key capabilities include:

- **Multi-Channel Delivery**: Email and SMS through unified API
- **High-Volume Processing**: Millions of notifications per month
- **Delivery Tracking**: Real-time status updates and analytics
- **Template Management**: Pre-built and customizable templates

### 2.2. Core Capabilities

| Capability | Description |
|------------|-------------|
| **Email Delivery** | Transactional and batch email with attachments |
| **SMS Delivery** | Text messages to Swedish and international numbers |
| **Delivery Tracking** | Status: sent, delivered, opened, clicked, bounced |
| **Templates** | Reusable notification templates with variables |
| **Personalization** | Dynamic content based on recipient data |
| **Analytics** | Open rates, click rates, delivery metrics |
| **Bounce Handling** | Automatic suppression and retry logic |

### 2.3. Supported Channels

| Channel | Technology | Features |
|---------|------------|----------|
| **Email** | SMTP Gateway | HTML/text, attachments, tracking pixel, link tracking |
| **SMS** | Swedish SMS Provider | Unicode support, delivery reports, sender ID |
| **[Future] Push** | Mobile push | iOS, Android notifications |

### 2.4. Target Use Cases

**Transactional Notifications:**
- Payment confirmations
- Order updates
- Account changes
- Security alerts
- Verification codes (OTP)

**Document Delivery:**
- Invoice delivery (with attachment)
- Statement notifications
- Document ready alerts

**System Notifications:**
- Password resets
- Login alerts
- Service updates

---

## 3. Service Features

### 3.1. Email Notifications

#### Features
| Feature | Description |
|---------|-------------|
| **HTML & Plain Text** | Both formats for compatibility |
| **Attachments** | PDF, documents up to 10 MB |
| **Personalization** | Merge fields from recipient data |
| **Open Tracking** | Know when emails are opened |
| **Click Tracking** | Track link clicks |
| **Unsubscribe** | One-click unsubscribe support |

#### Email Authentication
- **SPF**: Sender Policy Framework records
- **DKIM**: DomainKeys Identified Mail signing
- **DMARC**: Domain-based Message Authentication

Swedwise provides DNS records; customer adds to their domain.

#### Sender Configuration
- Custom sender addresses (from@customer.com)
- Custom reply-to addresses
- Sender name personalization

### 3.2. SMS Notifications

#### Features
| Feature | Description |
|---------|-------------|
| **Text Messages** | Standard and Unicode messages |
| **Delivery Reports** | Confirmation of delivery to handset |
| **Sender ID** | Alphanumeric sender (e.g., "CustomerCo") |
| **Character Encoding** | GSM-7 (160 chars) or UCS-2 (70 chars) |

#### SMS Limitations
| Limit | Value |
|-------|-------|
| **Message Length (GSM-7)** | 160 characters |
| **Message Length (Unicode)** | 70 characters |
| **Sender ID Length** | 11 alphanumeric characters |
| **Long Messages** | Concatenated (multipart SMS) |

#### Geographic Coverage
- **Sweden**: Full coverage, all carriers
- **Nordics**: Denmark, Norway, Finland
- **International**: Available (additional charges)

### 3.3. Delivery Tracking

#### Event Types

| Event | Channel | Description |
|-------|---------|-------------|
| **queued** | Both | Notification accepted and queued |
| **sent** | Both | Sent to provider |
| **delivered** | Both | Confirmed delivery |
| **opened** | Email | Recipient opened email |
| **clicked** | Email | Recipient clicked link |
| **bounced** | Email | Delivery failed |
| **failed** | Both | Permanent delivery failure |
| **unsubscribed** | Email | Recipient unsubscribed |

#### Webhooks
- Real-time event delivery to customer endpoint
- Signed payloads for security
- Retry on failure

### 3.4. Templates

#### Template Features
- HTML email templates
- SMS message templates
- Variable substitution ({{variable}})
- Conditional content
- Reusable across notifications

#### Template Management
- Create/edit via API or admin portal
- Version control
- Preview before sending
- Template categories

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
| **Email Send Latency (p95)** | < 30 seconds |
| **SMS Send Latency (p95)** | < 10 seconds |
| **Queue Wait Time** | < 60 seconds |

### 4.3. Delivery Rates

| Metric | Target |
|--------|--------|
| **Email Delivery Rate** | >= 99% (excluding hard bounces) |
| **SMS Delivery Rate** | >= 98% |

*Delivery rates depend on recipient validity and network availability.*

---

## 5. Quotas and Limits

### 5.1. Volume Limits

| Limit | Standard | Enterprise |
|-------|----------|------------|
| **Emails per Month** | 100,000 | 1,000,000+ |
| **SMS per Month** | 10,000 | 100,000+ |
| **Batch Size** | 1,000 recipients | 10,000 recipients |

### 5.2. Rate Limits

| Limit | Standard | Enterprise |
|-------|----------|------------|
| **Email Rate** | 1,000/hour | 10,000/hour |
| **SMS Rate** | 500/hour | 5,000/hour |
| **API Requests** | 100/min | 1,000/min |

### 5.3. Content Limits

| Limit | Value |
|-------|-------|
| **Email Attachment Size** | 10 MB total |
| **Email Body Size** | 1 MB |
| **SMS Message Parts** | 10 (concatenated) |
| **Recipients per Email** | 50 (To), 50 (CC), 50 (BCC) |

---

## 6. Pricing

### 6.1. Pricing Model

Notifications is priced based on:
1. **Base Subscription**: Monthly platform fee
2. **Email Volume**: Per-email charges
3. **SMS Volume**: Per-SMS charges (by region)

### 6.2. Email Pricing

| Volume | Price per Email |
|--------|-----------------|
| **0 - 10,000** | Included in base |
| **10,001 - 100,000** | 0.05 SEK |
| **100,001 - 500,000** | 0.03 SEK |
| **500,001+** | Custom pricing |

### 6.3. SMS Pricing

| Region | Price per SMS |
|--------|---------------|
| **Sweden** | 0.30 SEK |
| **Nordics** | 0.50 SEK |
| **International** | 1.00 SEK+ (varies) |

### 6.4. Pricing Tiers

| Tier | Monthly Fee | Included Emails | Included SMS |
|------|-------------|-----------------|--------------|
| **Starter** | 5,000 SEK | 10,000 | 1,000 |
| **Standard** | 15,000 SEK | 100,000 | 10,000 |
| **Enterprise** | Custom | Custom | Custom |

*For detailed pricing, see SW-SAAS-PRC-001 and SW-SAAS-PRC-COMP-002.*

---

## 7. Integration

### 7.1. API Integration

**Base URL:** `https://api.swedwise.com/v1/notifications`

**Authentication:** API Key or OAuth 2.0

#### Key Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/email` | POST | Send email |
| `/email/batch` | POST | Send batch emails |
| `/sms` | POST | Send SMS |
| `/sms/batch` | POST | Send batch SMS |
| `/{id}/status` | GET | Get delivery status |
| `/templates` | GET/POST | Manage templates |

### 7.2. Integration with Communications

Notifications integrates with the Communications component:

```
Document Generated → Notification Triggered → Email Sent with Attachment
```

- Attach generated documents to emails
- Trigger notifications on document completion
- Unified delivery tracking

### 7.3. Webhooks

Configure webhooks to receive delivery events:

```json
{
  "url": "https://your-system.com/webhooks/notifications",
  "events": ["delivered", "bounced", "opened", "clicked"],
  "secret": "your-webhook-secret"
}
```

---

## 8. Onboarding

### 8.1. Onboarding Steps

1. **Domain Setup** (Week 1)
   - Email sending domain verified
   - DNS records added (SPF, DKIM, DMARC)
   - Sender addresses configured

2. **SMS Setup** (Week 1-2)
   - SMS sender ID registered
   - Test messages sent
   - Delivery reports verified

3. **Integration** (Week 2-4)
   - API credentials provisioned
   - Integration developed
   - Test notifications sent

4. **Go-Live** (Week 4)
   - Production enabled
   - Monitoring configured
   - Handover to support

*For detailed onboarding, see SW-SAAS-ONB-001 and SW-SAAS-ONB-COMP-002.*

---

## 9. Support

### 9.1. Support Scope

**Included in Support:**
- Notification delivery issues
- API connectivity and errors
- Bounce investigation
- Configuration assistance
- Provider issues

**Not Included:**
- Email content design (Professional Services)
- Deliverability consulting (Professional Services)
- Custom integration development

### 9.2. Response Times

| Severity | Initial Response | Target Resolution |
|----------|------------------|-------------------|
| **Critical** | 15 minutes | 4 hours |
| **High** | 1 hour | 8 hours |
| **Medium** | 4 hours | 24 hours |
| **Low** | 8 hours | 5 business days |

---

## 10. Security

### 10.1. Data Security

- **Encryption at Rest**: AES-256
- **Encryption in Transit**: TLS 1.3
- **Data Residency**: Sweden
- **Retention**: Configurable (default 90 days)

### 10.2. Email Security

- **DKIM Signing**: All outbound emails signed
- **SPF Records**: Prevent spoofing
- **DMARC Compliance**: Domain authentication

### 10.3. Privacy

- **Recipient Data**: Treated as PII
- **Tracking Options**: Can be disabled per message
- **Unsubscribe**: Automatic suppression

*For detailed security, see SW-SAAS-SVC-001 Section 9.*

---

## 11. Best Practices

### 11.1. Email Deliverability

- Keep email lists clean (remove bounces)
- Use consistent sender addresses
- Avoid spam trigger words
- Include unsubscribe option
- Monitor bounce rates

### 11.2. SMS Best Practices

- Keep messages concise
- Include clear sender identification
- Respect time-of-day preferences
- Use Unicode only when necessary
- Include opt-out instructions where required

### 11.3. Rate Management

- Spread batch sends over time
- Implement retry with backoff
- Monitor rate limit usage
- Request quota increases in advance

---

## 12. Related Documents

| Document ID | Title |
|-------------|-------|
| SW-SAAS-SVC-001 | Platform Service Description |
| SW-SAAS-ARCH-001 | Platform Technical Architecture |
| SW-SAAS-ARCH-COMP-002 | Notifications Technical Architecture |
| SW-SAAS-ONB-001 | Platform Onboarding Guide |
| SW-SAAS-ONB-COMP-002 | Notifications Onboarding Addendum |
| SW-SAAS-PRC-001 | Platform Pricing Framework |
| SW-SAAS-PRC-COMP-002 | Notifications Pricing Addendum |
| SW-SAAS-OPS-001 | Platform Operations Guide |
| SW-SAAS-OPS-COMP-002 | Notifications Operations Addendum |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | SaaS Service Manager | Initial Notifications component document |

---

**Classification:** Confidential
**Distribution:** Customers under NDA
**Review Date:** 2026-01-15

*This document is confidential and intended for Swedwise AB customers. Unauthorized distribution is prohibited.*
