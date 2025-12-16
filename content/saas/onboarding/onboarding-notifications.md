---
document_id: SW-SAAS-ONB-COMP-002
title: Onboarding Addendum - Notifications
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: Technical Architect
component: notifications
parent_document: SW-SAAS-ONB-001
effective_date: 2025-01-15
review_date: 2026-01-15
related_documents:
  - SW-SAAS-ONB-001
  - SW-SAAS-COMP-002
  - SW-SAAS-SVC-001
---

# Onboarding Addendum: Notifications

**Document ID:** SW-SAAS-ONB-COMP-002
**Version:** 1.0
**Effective Date:** 2025-01-15
**Parent Document:** SW-SAAS-ONB-001 (Main Onboarding Guide)

---

## 1. Addendum Overview

### 1.1. Purpose

This addendum provides **component-specific onboarding steps** for customers subscribing to **Swedwise Notifications** service. It supplements the main onboarding guide (SW-SAAS-ONB-001) with detailed procedures for:

- Email notification configuration
- SMS notification setup
- Notification delivery integration
- Delivery tracking and monitoring

### 1.2. Relationship to Main Onboarding Guide

This addendum should be used **in conjunction with** the main onboarding guide:

| Main Guide Phase | Addendum Section | Timeline Overlap |
|------------------|------------------|------------------|
| Phase 2: Technical Setup | Section 3: Email Configuration | Week 2-4 |
| Phase 3: Configuration | Section 4-5: SMS & Integration | Week 4-8 |
| Phase 4: Training & Go-Live | Section 6-7: Testing & Training | Week 8-10 |

### 1.3. Timeline Overview

**Total Component Onboarding:** 2-4 weeks (in parallel with main onboarding)

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| **Email Setup** | Week 1-2 | Domain verified, sender addresses configured |
| **SMS Setup** | Week 2-3 | Provider configured, sender ID approved |
| **Integration Implementation** | Week 2-4 | APIs integrated, webhooks configured |
| **Testing Phase** | Week 3-4 | Delivery verified, tracking confirmed |

### 1.4. Roles Specific to This Component

| Role | Responsibilities | Required Skills |
|------|------------------|-----------------|
| **Notification Administrator** | Configure channels, manage delivery | Email systems, DNS, SMS providers |
| **Integration Developer** | Build API integrations | API development, webhooks, authentication |
| **Content Owner** | Define notification templates and content | Business knowledge, communication design |

---

## 2. Prerequisites

### 2.1. Technical Requirements

**Infrastructure:**
- [ ] Internet connectivity to Swedwise data center
- [ ] Firewall rules configured for API access (ports 443)
- [ ] SMTP relay configured (if using customer email server)
- [ ] DNS access for domain verification

**Software:**
- [ ] Compatible web browser (Chrome 110+, Edge 110+, Firefox 110+)
- [ ] API development tools (Postman, cURL, or similar)
- [ ] DNS management access (for SPF, DKIM, DMARC records)

### 2.2. Email Configuration Prerequisites

**Domain Requirements:**
- [ ] Dedicated sending domain identified (e.g., notifications.customer.com)
- [ ] DNS management access available
- [ ] Email addresses to use as senders defined
- [ ] Reply-to addresses identified

**Brand Assets:**
- [ ] Company logo (for email templates)
- [ ] Email signature/footer content
- [ ] Brand colors for email styling
- [ ] Legal disclaimers (if required)

### 2.3. SMS Configuration Prerequisites

**SMS Requirements:**
- [ ] Target markets identified (Sweden, Nordics, Global)
- [ ] Sender ID chosen (11 characters max, alphanumeric)
- [ ] Business verification documents ready (if required by provider)
- [ ] Monthly volume estimate
- [ ] Budget approval for SMS costs

**Compliance:**
- [ ] GDPR consent requirements reviewed
- [ ] Opt-out mechanisms planned
- [ ] Data retention policies defined

---

## 3. Email Configuration

### 3.1. Domain Verification

**Step 1: Identify Sending Domain** (Week 1)

Choose a dedicated subdomain for notifications:
- Recommended: `notifications.yourcompany.com` or `no-reply.yourcompany.com`
- Avoid using your main domain (protects email reputation)

**Step 2: Add DNS Records** (Week 1-2)

Swedwise will provide DNS records to add:

**SPF Record:**
```
Type: TXT
Name: notifications.yourcompany.com
Value: v=spf1 include:_spf.swedwise-saas.com ~all
TTL: 3600
```

**DKIM Record:**
```
Type: TXT
Name: [unique-selector]._domainkey.notifications.yourcompany.com
Value: v=DKIM1; k=rsa; p=[public-key-provided-by-swedwise]
TTL: 3600
```

**DMARC Record (Recommended):**
```
Type: TXT
Name: _dmarc.notifications.yourcompany.com
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@yourcompany.com
TTL: 3600
```

**Step 3: Verification** (Week 2)

- [ ] DNS records added by customer IT team
- [ ] DNS propagation verified (24-48 hours)
- [ ] Swedwise confirms domain verification
- [ ] Test email sent to verify SPF/DKIM signatures

**Verification Tools:**
- MXToolbox: https://mxtoolbox.com/spf.aspx
- DKIM Validator: https://dkimvalidator.com/
- Mail-tester: https://www.mail-tester.com/

### 3.2. Sender Addresses Configuration

**Define Sender Addresses:**

| Purpose | Email Address | Display Name | Reply-To |
|---------|---------------|--------------|----------|
| Transactional | noreply@notifications.yourcompany.com | YourCompany Notifications | support@yourcompany.com |
| Billing | billing@notifications.yourcompany.com | YourCompany Billing | billing@yourcompany.com |
| Support | support@notifications.yourcompany.com | YourCompany Support | support@yourcompany.com |

**Configuration in Admin Portal:**

1. **Login to Admin Portal**
   - [ ] Navigate to Notifications > Senders
   - [ ] Click "Add Sender Address"

2. **Configure Each Sender**
   - [ ] Email address
   - [ ] Display name
   - [ ] Reply-to address (if different)
   - [ ] Default signature/footer
   - [ ] Save configuration

3. **Test Each Sender**
   - [ ] Send test email from each sender address
   - [ ] Verify delivery
   - [ ] Check spam score
   - [ ] Verify SPF/DKIM signatures pass

### 3.3. Email Templates

**Default Template Setup:**

1. **Create Base Template** (Week 2)
   - [ ] HTML email template with brand styling
   - [ ] Plain-text fallback version
   - [ ] Header with logo
   - [ ] Footer with contact info and legal text
   - [ ] Responsive design (mobile-friendly)

2. **Notification Templates**

Create templates for common notification types:

**Example: Transactional Notification Template**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{subject}}</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #f4f4f4; padding: 20px;">
    <img src="{{logo_url}}" alt="YourCompany" style="max-width: 200px;">
  </div>
  <div style="background: white; padding: 30px;">
    <h1 style="color: #333;">{{heading}}</h1>
    <p>{{salutation}},</p>
    <div>
      {{content}}
    </div>
    <p>Best regards,<br>{{sender_name}}</p>
  </div>
  <div style="background: #f4f4f4; padding: 20px; font-size: 12px; color: #666;">
    <p>{{footer_text}}</p>
    <p>{{unsubscribe_link}}</p>
  </div>
</body>
</html>
```

**Plain-Text Version:**
```
{{heading}}

{{salutation}},

{{content}}

Best regards,
{{sender_name}}

---
{{footer_text}}
{{unsubscribe_link}}
```

3. **Template Variables**

Define standard variables for personalization:
- `{{recipient_name}}` - Recipient's name
- `{{customer_id}}` - Customer ID
- `{{subject}}` - Email subject
- `{{content}}` - Main content
- `{{footer_text}}` - Footer/disclaimer
- `{{unsubscribe_link}}` - Unsubscribe link (if required)

### 3.4. Deliverability Testing

**Test Plan:**

1. **Major Email Providers** (Week 2)
   - [ ] Gmail (@gmail.com)
   - [ ] Outlook/Office 365 (@outlook.com, @hotmail.com)
   - [ ] Apple Mail (@icloud.com)
   - [ ] Yahoo Mail (@yahoo.com)
   - [ ] Corporate email (customer's own domain)

2. **Deliverability Checks**
   - [ ] Inbox placement (not spam folder)
   - [ ] Images display correctly
   - [ ] Links are clickable
   - [ ] Mobile rendering (iPhone, Android)
   - [ ] Desktop rendering (Outlook, Gmail web)

3. **Spam Score Testing**
   - [ ] Use mail-tester.com for each template
   - [ ] Target score: 8/10 or higher
   - [ ] Fix any identified issues (SPF, DKIM, content)

4. **Performance Testing**
   - [ ] Sending speed (single email)
   - [ ] Batch sending (100+ emails)
   - [ ] Delivery tracking accuracy
   - [ ] Bounce detection

**Deliverability Report:**
Document results and share with Swedwise for optimization.

---

## 4. SMS Configuration

### 4.1. SMS Provider Setup

**Provider Selection** (Week 2)

Swedwise partners with Swedish SMS providers. Choose based on your needs:

| Provider | Coverage | Features | Pricing Model |
|----------|----------|----------|---------------|
| **Provider A** | Sweden, Nordics | 2-way SMS, Unicode support | Per message |
| **Provider B** | Global | Delivery reports, URL shortening | Monthly base + per message |

**Swedwise Recommendation:**
- **Nordic-only customers:** Provider A (lower per-message cost)
- **Global customers:** Provider B (broader coverage)

**Configuration** (Week 2-3)

1. **Account Setup**
   - [ ] SMS provider account created by Swedwise
   - [ ] Customer cost center assigned
   - [ ] Monthly budget/cap configured (if requested)
   - [ ] Billing contact provided

2. **Initial Credits**
   - [ ] Initial credit balance loaded (minimum: 1000 SMS)
   - [ ] Auto-refill configured (optional)
   - [ ] Low-balance alerts configured

### 4.2. Sender ID Configuration

**Sender ID Requirements:**

- **Format:** Alphanumeric, up to 11 characters
- **Examples:** `YourCompany`, `YourBrand`, `CustomerSvc`
- **Restrictions:** No spaces, no special characters (except hyphen/underscore)

**Registration Process:**

1. **Choose Sender ID** (Week 2)
   - [ ] Primary sender ID chosen
   - [ ] Backup sender ID (optional)
   - [ ] Verify ID is not already in use

2. **Business Verification** (Week 2-3)
   - [ ] Company registration documents provided
   - [ ] Proof of domain ownership (website, email)
   - [ ] Submit to provider for approval
   - [ ] Wait for approval (3-7 business days)

3. **Approval and Testing**
   - [ ] Sender ID approved by provider
   - [ ] Test SMS sent with sender ID
   - [ ] Verify sender ID displays correctly on mobile devices
   - [ ] Confirm sender ID active for production

**Fallback Configuration:**
- If sender ID not supported (some countries): Use short code or phone number
- Configure in admin portal: Notifications > SMS > Sender Settings

### 4.3. Message Templates

**SMS Best Practices:**

- **Character Limits:**
  - Standard (GSM-7): 160 characters per segment
  - Unicode (ÅÄÖ, emojis): 70 characters per segment
  - Multi-segment: Reduce by 7 chars per segment for concatenation

- **Content Guidelines:**
  - Be concise and clear
  - Include sender identification (if not using sender ID)
  - Include opt-out instructions (if marketing)
  - Use URL shorteners for links
  - Avoid spam trigger words

**Example SMS Templates:**

**Transactional:**
```
YourCompany: Your payment of {{amount}} SEK was received. Thank you! Ref: {{reference_id}}
```

**Reminder:**
```
YourCompany: Reminder - Invoice {{invoice_number}} of {{amount}} SEK is due {{due_date}}. Pay now: {{payment_link}}
```

**Notification:**
```
YourCompany: Your order {{order_id}} has been shipped. Track: {{tracking_link}}
```

**Opt-out Template:**
```
YourCompany: {{message_content}}. Reply STOP to unsubscribe.
```

**Template Variables:**

Create templates in admin portal:
- [ ] Navigate to Notifications > SMS > Templates
- [ ] Create template for each notification type
- [ ] Define variables ({{variable_name}})
- [ ] Test with sample data
- [ ] Save and activate

### 4.4. SMS Testing

**Test Plan:**

1. **Swedish Mobile Numbers** (Week 3)
   - [ ] Telia (+46 70 xxx xxxx)
   - [ ] Telenor (+46 76 xxx xxxx)
   - [ ] Tele2 (+46 73 xxx xxxx)
   - [ ] Tre (+46 79 xxx xxxx)

2. **International Numbers (if applicable)**
   - [ ] Norway (+47)
   - [ ] Denmark (+45)
   - [ ] Finland (+358)
   - [ ] Other markets

3. **Delivery Testing**
   - [ ] Test SMS sent to each number
   - [ ] Delivery confirmed within 30 seconds
   - [ ] Sender ID displays correctly
   - [ ] Message content correct
   - [ ] Links are clickable (if included)

4. **Character Encoding**
   - [ ] Swedish characters (Å, Ä, Ö) display correctly
   - [ ] Emoji support (if used)
   - [ ] Special characters (€, &, etc.)
   - [ ] Long messages (multi-segment)

5. **Delivery Reports**
   - [ ] Delivery report received for each SMS
   - [ ] Failed delivery handled correctly
   - [ ] Invalid number detected
   - [ ] Reporting dashboard shows accurate data

**Test Report:**
Document all test results and delivery rates.

---

## 5. Integration Implementation

### 5.1. Notifications API Setup

**API Credentials** (Week 3)

1. **Generate API Keys**
   - [ ] Login to admin portal
   - [ ] Navigate to API Management > Notifications
   - [ ] Generate new API key pair
   - [ ] Download credentials securely
   - [ ] Store in password manager or vault

**API Key Format:**
```
API Key ID:     sw_notif_prod_[random-string]
API Secret:     [64-character-secret]
API Endpoint:   https://api.swedwise-saas.com/v1/[customer-prod]/notifications
```

2. **API Configuration**
   - [ ] Set rate limits (requests per minute)
   - [ ] Configure IP allowlist (if required)
   - [ ] Enable webhook notifications (for delivery status)
   - [ ] Set request timeout values

### 5.2. Email API Integration

**API Endpoint:**
```
POST /v1/[customer-prod]/notifications/email
```

**Single Email Example:**

```json
{
  "recipient": {
    "email": "customer@example.com",
    "name": "John Doe"
  },
  "sender": {
    "email": "noreply@notifications.yourcompany.com",
    "name": "YourCompany Notifications"
  },
  "subject": "Your invoice is ready",
  "body_html": "<p>Dear {{name}},</p><p>Your invoice is attached.</p>",
  "body_text": "Dear {{name}}, Your invoice is attached.",
  "attachments": [
    {
      "filename": "invoice.pdf",
      "content_base64": "[base64-encoded-content]",
      "content_type": "application/pdf"
    }
  ],
  "tags": ["invoice", "billing"],
  "metadata": {
    "invoice_id": "INV-2024-001",
    "customer_id": "CUST001"
  }
}
```

**Response:**

```json
{
  "notification_id": "notif_abc123",
  "status": "queued",
  "queued_at": "2024-01-15T10:00:00Z"
}
```

**Batch Email Example:**

```
POST /v1/[customer-prod]/notifications/email/batch
```

```json
{
  "sender": {
    "email": "noreply@notifications.yourcompany.com",
    "name": "YourCompany"
  },
  "subject": "Monthly statement",
  "template_id": "monthly_statement",
  "recipients": [
    {
      "email": "customer1@example.com",
      "name": "Customer 1",
      "variables": {
        "account_number": "123456",
        "statement_period": "January 2024"
      }
    },
    {
      "email": "customer2@example.com",
      "name": "Customer 2",
      "variables": {
        "account_number": "789012",
        "statement_period": "January 2024"
      }
    }
  ]
}
```

### 5.3. SMS API Integration

**API Endpoint:**
```
POST /v1/[customer-prod]/notifications/sms
```

**Single SMS Example:**

```json
{
  "recipient": {
    "phone": "+46701234567",
    "name": "John Doe"
  },
  "message": "Your payment of {{amount}} SEK was received. Thank you! Ref: {{reference}}",
  "sender_id": "YourCompany",
  "delivery_report": true,
  "metadata": {
    "payment_id": "PAY-2024-001",
    "customer_id": "CUST001"
  }
}
```

**Response:**

```json
{
  "notification_id": "notif_sms_xyz789",
  "status": "sent",
  "sent_at": "2024-01-15T10:00:00Z",
  "segments": 1,
  "cost": 0.50
}
```

**Batch SMS Example:**

```
POST /v1/[customer-prod]/notifications/sms/batch
```

```json
{
  "sender_id": "YourCompany",
  "template_id": "payment_reminder",
  "delivery_report": true,
  "recipients": [
    {
      "phone": "+46701234567",
      "variables": {
        "amount": "500",
        "due_date": "2024-01-31"
      }
    },
    {
      "phone": "+46709876543",
      "variables": {
        "amount": "1200",
        "due_date": "2024-01-31"
      }
    }
  ]
}
```

### 5.4. Delivery Status Tracking

**Webhook Configuration** (Week 3-4)

Configure webhooks to receive delivery status updates:

**Webhook Setup:**

```json
POST /v1/[customer-prod]/notifications/webhooks

{
  "webhook_url": "https://your-system.com/webhooks/notification-status",
  "events": ["delivered", "bounced", "opened", "clicked", "failed"],
  "secret": "[webhook-signing-secret]"
}
```

**Webhook Payload Example:**

```json
{
  "event": "delivered",
  "notification_id": "notif_abc123",
  "channel": "email",
  "recipient": "customer@example.com",
  "timestamp": "2024-01-15T10:05:00Z",
  "metadata": {
    "invoice_id": "INV-2024-001"
  }
}
```

**Event Types:**

| Event | Description | Channel |
|-------|-------------|---------|
| `queued` | Notification queued for sending | Email, SMS |
| `sent` | Notification sent to provider | Email, SMS |
| `delivered` | Delivered to recipient | Email, SMS |
| `bounced` | Delivery failed (hard bounce) | Email |
| `deferred` | Temporary failure (soft bounce) | Email |
| `opened` | Email opened by recipient | Email |
| `clicked` | Link clicked in email | Email |
| `failed` | Permanent failure | SMS |
| `unsubscribed` | Recipient unsubscribed | Email |

**Webhook Security:**

- [ ] Verify webhook signature using shared secret
- [ ] Use HTTPS endpoint
- [ ] Validate payload structure
- [ ] Handle replay attacks (check timestamp)

**Signature Verification Example (Python):**

```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected)
```

### 5.5. Delivery Preferences and Rules

**Configure Delivery Rules:**

1. **Channel Preferences** (Week 4)
   - [ ] Define preference order (e.g., Email primary, SMS fallback)
   - [ ] Configure retry logic (attempts, intervals)
   - [ ] Set delivery time windows (e.g., SMS only 8am-8pm)
   - [ ] Configure quiet hours (no notifications)

2. **Bounce Handling**
   - [ ] Hard bounce configuration (permanent failures)
   - [ ] Soft bounce configuration (temporary failures)
   - [ ] Suppression list management
   - [ ] Invalid address handling

3. **Rate Limiting**
   - [ ] Maximum emails per recipient per day
   - [ ] Maximum SMS per recipient per day
   - [ ] Burst prevention (max per hour)

**Configuration in Admin Portal:**
- Navigate to Notifications > Delivery Rules
- Set global defaults
- Allow per-customer overrides (if needed)

---

## 6. Testing Phase

### 6.1. Test Data Requirements

**Email Test Data:**

1. **Valid Email Addresses**
   - [ ] Test addresses at major providers (Gmail, Outlook, etc.)
   - [ ] Internal test addresses
   - [ ] Role-based addresses (support@, info@)

2. **Invalid Email Addresses (for bounce testing)**
   - [ ] Non-existent addresses (@example.com)
   - [ ] Malformed addresses (missing @, invalid domain)

**SMS Test Data:**

1. **Valid Phone Numbers**
   - [ ] Swedish mobile numbers (all major carriers)
   - [ ] International numbers (if applicable)
   - [ ] Properly formatted (E.164: +46701234567)

2. **Invalid Phone Numbers (for error testing)**
   - [ ] Invalid format
   - [ ] Non-mobile numbers (landlines)
   - [ ] Disconnected numbers

### 6.2. Integration Testing

**Email Integration Tests:**

| Test Case | Scenario | Expected Result | Status |
|-----------|----------|----------------|--------|
| EMAIL-001 | Send single email with attachment | Delivered, tracking works | [ ] |
| EMAIL-002 | Send to invalid address | Bounce detected and logged | [ ] |
| EMAIL-003 | Send batch (100 emails) | All queued, delivery reports received | [ ] |
| EMAIL-004 | Large attachment (5 MB) | Delivered successfully | [ ] |
| EMAIL-005 | HTML + plain text | Both versions sent correctly | [ ] |

**SMS Integration Tests:**

| Test Case | Scenario | Expected Result | Status |
|-----------|----------|----------------|--------|
| SMS-001 | Send single SMS | Delivered within 30 seconds | [ ] |
| SMS-002 | Send to invalid number | Error returned, not sent | [ ] |
| SMS-003 | Send batch (50 SMS) | All sent, delivery reports received | [ ] |
| SMS-004 | Long message (>160 chars) | Multi-segment sent correctly | [ ] |
| SMS-005 | Unicode characters (ÅÄÖ) | Characters display correctly | [ ] |

**Webhook Tests:**

| Test Case | Scenario | Expected Result | Status |
|-----------|----------|----------------|--------|
| HOOK-001 | Email delivered event | Webhook called with correct data | [ ] |
| HOOK-002 | Email bounced event | Webhook called, bounce recorded | [ ] |
| HOOK-003 | Email opened event | Webhook called, open tracked | [ ] |
| HOOK-004 | SMS delivered event | Webhook called with status | [ ] |
| HOOK-005 | Webhook signature | Signature verified successfully | [ ] |

### 6.3. User Acceptance Testing

**UAT Phase:** Week 4

1. **Functional Testing**
   - [ ] Send test notifications for each use case
   - [ ] Verify content accuracy
   - [ ] Confirm delivery to recipients
   - [ ] Check tracking and reporting

2. **Business Validation**
   - [ ] Business users review notification content
   - [ ] Verify brand compliance
   - [ ] Confirm legal disclaimers
   - [ ] Approve for production use

3. **UAT Sign-Off**
   - [ ] All test cases passed
   - [ ] No critical defects
   - [ ] Business approval obtained
   - [ ] UAT sign-off document signed

---

## 7. Training

### 7.1. Notification Administrator Training

**Duration:** 2 hours

**Audience:** Notification administrators, support staff

**Curriculum:**

**Module 1: Admin Portal Overview (0.5 hours)**
- Dashboard navigation
- Sender configuration
- Template management
- Delivery rules configuration

**Module 2: Monitoring and Reporting (1 hour)**
- Delivery monitoring dashboard
- Bounce management
- Suppression lists
- Performance metrics
- Delivery reports

**Module 3: Troubleshooting (0.5 hours)**
- Common delivery issues
- Reading delivery reports
- Investigating bounces
- Support ticket submission

**Deliverables:**
- [ ] Administrator guide
- [ ] Troubleshooting checklist
- [ ] Certificate of completion

### 7.2. API Developer Training

**Duration:** 2 hours

**Audience:** Integration developers

**Curriculum:**

**Module 1: API Overview (0.5 hours)**
- Authentication
- Rate limits
- Error handling
- Best practices

**Module 2: Email & SMS APIs (1 hour)**
- Single notification API
- Batch notification API
- Template usage
- Webhooks
- Hands-on: Send notifications

**Module 3: Troubleshooting (0.5 hours)**
- Reading error responses
- Webhook debugging
- Delivery status tracking
- Support escalation

**Deliverables:**
- [ ] API documentation
- [ ] Postman collection
- [ ] Code samples (Python, C#, JavaScript)
- [ ] Integration checklist

---

## 8. Go-Live Checklist

### 8.1. Pre-Go-Live Checklist

**Email Configuration:**
- [ ] Domain verified (SPF, DKIM, DMARC)
- [ ] Sender addresses configured and tested
- [ ] Email templates created and approved
- [ ] Deliverability testing passed (spam score 8+)
- [ ] Bounce handling configured

**SMS Configuration:**
- [ ] SMS provider account active
- [ ] Sender ID approved and tested
- [ ] SMS templates created and approved
- [ ] Delivery testing passed (all carriers)
- [ ] Sufficient credit balance loaded

**Integration:**
- [ ] API credentials generated (production)
- [ ] Integration tested in production environment
- [ ] Webhooks configured and tested
- [ ] Error handling verified
- [ ] Monitoring configured

**Training:**
- [ ] Administrators trained
- [ ] Developers trained
- [ ] Documentation accessible

**Testing:**
- [ ] All integration tests passed
- [ ] UAT completed and signed off
- [ ] Performance testing passed
- [ ] All critical defects resolved

### 8.2. Go-Live Day

**T-24 hours:**
- [ ] Final verification by Swedwise
- [ ] Customer go/no-go confirmation

**T-0 (Cutover):**
- [ ] Switch to production API credentials
- [ ] Send first production notifications
- [ ] Monitor delivery

**T+1 hour:**
- [ ] Verify delivery rates
- [ ] Check for errors
- [ ] Confirm tracking works

**T+24 hours:**
- [ ] Review delivery metrics
- [ ] Address any issues
- [ ] Customer satisfaction check

---

## 9. Appendices

### Appendix A: Common Issues and Solutions

| Issue | Possible Cause | Solution |
|-------|---------------|----------|
| Email bounces | Invalid address, SPF/DKIM issues | Verify email addresses, check DNS configuration |
| Emails in spam folder | Poor spam score, missing SPF/DKIM | Use mail-tester.com, fix DNS records, improve content |
| SMS not delivered | Invalid number format, disconnected number | Use E.164 format (+46701234567), verify number |
| Slow delivery | High volume, rate limiting | Use batch API, check rate limits |
| Webhook not called | Wrong URL, firewall blocking | Verify webhook URL, check firewall rules |
| API authentication fails | Expired or wrong credentials | Regenerate API key, verify secret |

### Appendix B: Contact Information

**Component-Specific Contacts:**

| Role | Contact | Use For |
|------|---------|---------|
| **Notifications Engineer** | [Name], [Email] | Email/SMS configuration, delivery issues |
| **Technical Architect** | [Name], [Email] | Integration design, API questions |

**Support Channels:**
- Portal: https://support.swedwise.com
- Email: support@swedwise.com
- Phone: +46 54 17 11 10

### Appendix C: Useful Resources

| Resource | URL | Description |
|----------|-----|-------------|
| **API Documentation** | https://developers.swedwise.com/notifications | Complete notifications API reference |
| **Email Best Practices** | https://kb.swedwise.com/email | Deliverability tips, templates |
| **SMS Guidelines** | https://kb.swedwise.com/sms | Character limits, sender ID rules |
| **Video Tutorials** | https://training.swedwise.com | Step-by-step guides |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Technical Architect | Initial version - split from combined addendum |

---

**Questions or Need Assistance?**

Contact your assigned Notifications Engineer or email: onboarding@swedwise.com

---

*This document is confidential and intended for use by Swedwise AB customers. Unauthorized distribution is prohibited.*
