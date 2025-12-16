---
document_id: SW-SAAS-ARCH-COMP-002
title: Notifications Technical Architecture Addendum
doc_type: guideline
version: "1.0"
status: draft
classification: confidential
owner: Technical Lead
component: notifications
parent_document: SW-SAAS-ARCH-001
effective_date: 2025-01-15
review_date: 2026-01-15
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-SAAS-ARCH-001
  - SW-SAAS-SVC-001
  - SW-SAAS-COMP-002
---

# Notifications Technical Architecture Addendum

**Document ID:** SW-SAAS-ARCH-COMP-002
**Version:** 1.0
**Effective Date:** 2025-01-15
**Parent Document:** SW-SAAS-ARCH-001 (Platform Technical Architecture)

---

## 1. Addendum Overview

### 1.1. Purpose

This addendum provides **component-specific technical architecture** for the **Swedwise Notifications** service component. It supplements the main platform architecture document (SW-SAAS-ARCH-001) with:

- Notifications-specific pod configurations
- Multi-channel delivery architecture (Email, SMS)
- Provider integration patterns
- Delivery tracking and analytics
- Performance tuning and optimization
- Monitoring, metrics, and alerting

### 1.2. Service Component Overview

| Attribute | Value |
|-----------|-------|
| **Component Name** | Swedwise Notifications |
| **Technology** | OpenText Notifications + External Providers |
| **Purpose** | Multi-channel notification delivery |
| **Channels** | Email (SMTP), SMS |
| **Integration** | REST API, Webhooks |

### 1.3. Supported Notification Channels

| Channel | Provider | Capabilities |
|---------|----------|--------------|
| **Email** | SMTP Gateway (configurable) | HTML/Plain text, attachments, tracking |
| **SMS** | Swedish SMS Provider | Unicode, delivery reports |
| **[Future]** | Push Notifications | Mobile app push |
| **[Future]** | In-App | Web application notifications |

### 1.4. Relationship to Platform Architecture

This component operates within the Swedwise SaaS Platform as defined in SW-SAAS-ARCH-001:

- Uses platform authentication and authorization
- Leverages platform database (PostgreSQL) for delivery tracking
- Uses platform message queue for async processing
- Monitored via platform monitoring stack (Prometheus/Grafana)
- Follows platform multi-tenancy isolation model

---

## 2. Component Architecture

### 2.1. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    NOTIFICATIONS SERVICE COMPONENT                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      API LAYER                                    │  │
│  │                                                                   │  │
│  │  ┌─────────────────┐    ┌─────────────────┐                     │  │
│  │  │  Notifications  │    │  Webhooks       │                     │  │
│  │  │  REST API       │    │  Receiver       │                     │  │
│  │  │  (Kong/NGINX)   │    │  (Callbacks)    │                     │  │
│  │  └────────┬────────┘    └────────┬────────┘                     │  │
│  └───────────┼──────────────────────┼────────────────────────────────┘  │
│              │                      │                                    │
│  ┌───────────▼──────────────────────▼────────────────────────────────┐  │
│  │                   PROCESSING LAYER                                 │  │
│  │                                                                   │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │  │
│  │  │  Notification   │  │  Email          │  │  SMS            │  │  │
│  │  │  Router         │  │  Workers        │  │  Workers        │  │  │
│  │  │                 │  │                 │  │                 │  │  │
│  │  │  (3+ pods)      │  │  (3+ pods)      │  │  (2+ pods)      │  │  │
│  │  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘  │  │
│  └───────────┼──────────────────────┼──────────────────┼─────────────┘  │
│              │                      │                  │                 │
│  ┌───────────▼──────────────────────▼──────────────────▼─────────────┐  │
│  │                    QUEUE LAYER                                     │  │
│  │                                                                   │  │
│  │  ┌─────────────────────────────────────────────────────────────┐ │  │
│  │  │                      RabbitMQ                               │ │  │
│  │  │                                                             │ │  │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │ │  │
│  │  │  │  Email Queue │  │  SMS Queue   │  │  Retry Queue │     │ │  │
│  │  │  │  (High/Low)  │  │  (Priority)  │  │  (DLX)       │     │ │  │
│  │  │  └──────────────┘  └──────────────┘  └──────────────┘     │ │  │
│  │  └─────────────────────────────────────────────────────────────┘ │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                              │                                           │
│  ┌───────────────────────────▼───────────────────────────────────────┐  │
│  │                    EXTERNAL PROVIDERS                              │  │
│  │                                                                   │  │
│  │  ┌─────────────────┐              ┌─────────────────┐            │  │
│  │  │  SMTP Gateway   │              │  SMS Provider   │            │  │
│  │  │                 │              │                 │            │  │
│  │  │  - Primary      │              │  - Primary      │            │  │
│  │  │  - Backup       │              │  - Backup       │            │  │
│  │  └─────────────────┘              └─────────────────┘            │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                              │                                           │
│  ┌───────────────────────────▼───────────────────────────────────────┐  │
│  │                    DATA LAYER                                      │  │
│  │                                                                   │  │
│  │  ┌─────────────────┐  ┌─────────────────┐                        │  │
│  │  │  PostgreSQL     │  │  Redis          │                        │  │
│  │  │                 │  │                 │                        │  │
│  │  │  - Delivery Log │  │  - Rate Limits  │                        │  │
│  │  │  - Templates    │  │  - Dedup Cache  │                        │  │
│  │  │  - Suppression  │  │  - Session      │                        │  │
│  │  └─────────────────┘  └─────────────────┘                        │  │
│  └────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.2. Pod Configuration

| Pod Type | Replicas | Resources | Purpose |
|----------|----------|-----------|---------|
| **Notification API** | 3+ | 2 CPU, 4 GB RAM | REST API for notification submission |
| **Email Worker** | 3+ | 2 CPU, 4 GB RAM | Email delivery processing |
| **SMS Worker** | 2+ | 1 CPU, 2 GB RAM | SMS delivery processing |
| **Webhook Handler** | 2+ | 1 CPU, 2 GB RAM | Process provider callbacks |
| **Scheduler** | 2 | 1 CPU, 2 GB RAM | Scheduled notification processing |

**Resource Scaling:**

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: email-worker-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: notification-email-worker
  minReplicas: 3
  maxReplicas: 15
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Pods
    pods:
      metric:
        name: notifications_email_queue_depth
      target:
        type: AverageValue
        averageValue: "100"
```

---

## 3. Email Architecture

### 3.1. Email Delivery Pipeline

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    EMAIL DELIVERY PIPELINE                               │
│                                                                          │
│  1. Submit          2. Validate        3. Queue                         │
│  ┌──────────┐      ┌──────────┐       ┌──────────┐                     │
│  │  API     │─────▶│  Address │──────▶│  Email   │                     │
│  │  Request │      │  Valid.  │       │  Queue   │                     │
│  └──────────┘      └──────────┘       └────┬─────┘                     │
│                                             │                            │
│  4. Process                                 ▼                            │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      EMAIL WORKERS                                │  │
│  │                                                                   │  │
│  │  ┌─────────────────────────────────────────────────────────────┐│  │
│  │  │  Template Render → Personalize → SMTP Connect → Send       ││  │
│  │  └─────────────────────────────────────────────────────────────┘│  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                             │                            │
│  5. SMTP Handoff    6. Provider Delivery   7. Tracking                  │
│  ┌──────────┐       ┌──────────┐          ┌──────────┐                 │
│  │  SMTP    │──────▶│  Email   │─────────▶│  Webhook │                 │
│  │  Gateway │       │  Provider│          │  Events  │                 │
│  └──────────┘       └──────────┘          └──────────┘                 │
│                                                                          │
│  Events: sent → delivered → opened → clicked → bounced/complained       │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.2. Email Provider Configuration

**Primary SMTP Provider:**

```yaml
smtp:
  primary:
    host: smtp.provider.com
    port: 587
    security: STARTTLS
    auth:
      type: plain
      username: ${SMTP_USERNAME}
      password: ${SMTP_PASSWORD}
    pool:
      max_connections: 50
      idle_timeout: 60s
    rate_limit: 10000/hour

  backup:
    host: smtp.backup-provider.com
    port: 587
    # ... similar config
```

**Provider Failover:**

| Condition | Action |
|-----------|--------|
| Primary connection failure | Switch to backup |
| Primary rate limit hit | Overflow to backup |
| Primary bounce rate > 5% | Alert, investigate |
| Both providers down | Queue with retry |

### 3.3. Email Authentication (SPF/DKIM/DMARC)

**DNS Records Required per Tenant:**

```dns
# SPF Record
v=spf1 include:_spf.swedwise-saas.com ~all

# DKIM Record
selector1._domainkey.customer.com IN TXT "v=DKIM1; k=rsa; p=[public-key]"

# DMARC Record
_dmarc.customer.com IN TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@customer.com"
```

**DKIM Key Management:**
- Per-tenant DKIM keys generated on setup
- Key rotation: Annual (or on request)
- Key size: 2048-bit RSA

### 3.4. Email Templates

**Template Storage:**
```
/tenants/{tenant-id}/
  └── notification-templates/
       ├── email/
       │    ├── transactional/
       │    │    ├── invoice_ready.html
       │    │    ├── payment_confirmation.html
       │    │    └── ...
       │    └── system/
       │         ├── password_reset.html
       │         └── welcome.html
       └── assets/
            ├── logo.png
            └── footer.html
```

**Template Variables:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>{{subject}}</title>
</head>
<body>
  <p>Dear {{recipient.name}},</p>
  <p>{{content}}</p>
  <p>Best regards,<br>{{sender.name}}</p>

  <!-- Tracking pixel -->
  <img src="{{tracking_pixel_url}}" width="1" height="1" />
</body>
</html>
```

---

## 4. SMS Architecture

### 4.1. SMS Delivery Pipeline

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SMS DELIVERY PIPELINE                                 │
│                                                                          │
│  1. Submit          2. Validate        3. Queue                         │
│  ┌──────────┐      ┌──────────┐       ┌──────────┐                     │
│  │  API     │─────▶│  Phone   │──────▶│  SMS     │                     │
│  │  Request │      │  Format  │       │  Queue   │                     │
│  └──────────┘      └──────────┘       └────┬─────┘                     │
│                     (E.164)                 │                            │
│                                             ▼                            │
│  4. Process                                                             │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      SMS WORKERS                                  │  │
│  │                                                                   │  │
│  │  ┌─────────────────────────────────────────────────────────────┐│  │
│  │  │  Template Render → Character Encode → Provider API → Send  ││  │
│  │  └─────────────────────────────────────────────────────────────┘│  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                             │                            │
│  5. Provider API    6. Delivery            7. DLR (Delivery Report)     │
│  ┌──────────┐       ┌──────────┐          ┌──────────┐                 │
│  │  SMS     │──────▶│  Mobile  │─────────▶│  Status  │                 │
│  │  Gateway │       │  Network │          │  Webhook │                 │
│  └──────────┘       └──────────┘          └──────────┘                 │
│                                                                          │
│  Status: submitted → sent → delivered → failed                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.2. SMS Provider Configuration

**Provider Integration:**

```yaml
sms:
  provider: swedish-sms-provider
  api_url: https://api.smsprovider.se/v1
  auth:
    type: api_key
    key: ${SMS_API_KEY}

  defaults:
    sender_id: "Swedwise"    # Max 11 alphanumeric
    encoding: GSM7           # or UCS2 for Unicode
    delivery_report: true
    validity_period: 48h

  rate_limits:
    per_second: 10
    per_day: 100000

  backup_provider:
    enabled: true
    provider: backup-sms-provider
    # ... config
```

### 4.3. SMS Character Encoding

| Encoding | Characters | Max Length | Use Case |
|----------|------------|------------|----------|
| **GSM-7** | A-Z, 0-9, basic symbols | 160 chars | Standard messages |
| **UCS-2** | Full Unicode (ÅÄÖ, emojis) | 70 chars | International/special chars |

**Character Handling:**
```javascript
// Automatic encoding selection
if (containsUnicodeOnly(message)) {
  encoding = 'GSM7';
  max_length = 160;
} else {
  encoding = 'UCS2';
  max_length = 70;
}

// Message splitting for long messages
if (message.length > max_length) {
  segments = splitMessage(message, max_length - 7); // Reserve for concat header
}
```

### 4.4. Sender ID Management

| Type | Format | Example | Use Case |
|------|--------|---------|----------|
| **Alphanumeric** | 1-11 chars | "Swedwise" | Branded sending |
| **Numeric** | Phone number | "+46701234567" | Reply-enabled |
| **Short Code** | 5-6 digits | "12345" | High-volume campaigns |

**Registration Requirements:**
- Alphanumeric sender IDs registered with carrier
- Approval required in some countries
- Per-tenant sender ID configuration

---

## 5. Delivery Tracking

### 5.1. Event Tracking Model

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    NOTIFICATION LIFECYCLE                                │
│                                                                          │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐             │
│  │ PENDING │───▶│  SENT   │───▶│DELIVERED│───▶│ OPENED  │             │
│  └─────────┘    └─────────┘    └─────────┘    └────┬────┘             │
│       │              │              │               │                   │
│       │              │              │               ▼                   │
│       │              │              │         ┌─────────┐              │
│       │              │              │         │ CLICKED │              │
│       │              │              │         └─────────┘              │
│       │              │              │                                   │
│       ▼              ▼              ▼                                   │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                            │
│  │ FAILED  │    │ BOUNCED │    │COMPLAINT│                            │
│  └─────────┘    └─────────┘    └─────────┘                            │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.2. Event Storage

**Database Schema:**

```sql
CREATE TABLE notification_events (
    id UUID PRIMARY KEY,
    notification_id UUID NOT NULL,
    tenant_id UUID NOT NULL,
    channel VARCHAR(20) NOT NULL,  -- 'email', 'sms'
    event_type VARCHAR(50) NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    metadata JSONB,

    -- Indexes
    INDEX idx_notification_id (notification_id),
    INDEX idx_tenant_timestamp (tenant_id, timestamp)
);

-- Partitioned by month for retention management
PARTITION BY RANGE (timestamp);
```

### 5.3. Webhook Events

**Outbound Webhooks (to customers):**

```json
{
  "event_type": "notification.delivered",
  "timestamp": "2024-01-15T10:30:45Z",
  "notification": {
    "id": "notif_abc123",
    "channel": "email",
    "recipient": "user@example.com",
    "subject": "Your invoice is ready"
  },
  "delivery": {
    "status": "delivered",
    "provider_id": "msg_xyz789",
    "delivered_at": "2024-01-15T10:30:44Z"
  }
}
```

**Webhook Signature:**
```
X-Swedwise-Signature: sha256=<hmac-sha256(payload, webhook_secret)>
X-Swedwise-Timestamp: 1705314645
```

---

## 6. API Specifications

### 6.1. Send Email API

**Endpoint:** `POST /api/v1/notifications/email`

**Request:**
```json
{
  "to": [
    {
      "email": "user@example.com",
      "name": "John Doe"
    }
  ],
  "from": {
    "email": "noreply@customer.com",
    "name": "Customer Service"
  },
  "subject": "Your invoice is ready",
  "body": {
    "html": "<p>Dear John, your invoice is attached.</p>",
    "text": "Dear John, your invoice is attached."
  },
  "attachments": [
    {
      "filename": "invoice.pdf",
      "content_base64": "...",
      "content_type": "application/pdf"
    }
  ],
  "tracking": {
    "opens": true,
    "clicks": true
  },
  "metadata": {
    "invoice_id": "INV-2024-001"
  }
}
```

**Response:**
```json
{
  "notification_id": "notif_abc123",
  "status": "queued",
  "channel": "email",
  "recipient_count": 1,
  "estimated_delivery": "2024-01-15T10:31:00Z"
}
```

### 6.2. Send SMS API

**Endpoint:** `POST /api/v1/notifications/sms`

**Request:**
```json
{
  "to": "+46701234567",
  "message": "Your verification code is 123456",
  "sender_id": "CustomerCo",
  "options": {
    "delivery_report": true,
    "validity_period": "24h"
  },
  "metadata": {
    "verification_id": "ver_789"
  }
}
```

**Response:**
```json
{
  "notification_id": "notif_xyz789",
  "status": "queued",
  "channel": "sms",
  "segments": 1,
  "encoding": "GSM7"
}
```

### 6.3. Batch Send API

**Endpoint:** `POST /api/v1/notifications/batch`

**Request:**
```json
{
  "channel": "email",
  "template_id": "monthly_statement",
  "recipients": [
    {
      "to": "user1@example.com",
      "variables": { "name": "User 1", "balance": 100 }
    },
    {
      "to": "user2@example.com",
      "variables": { "name": "User 2", "balance": 200 }
    }
  ],
  "options": {
    "schedule": "2024-01-15T09:00:00Z",
    "batch_size": 100,
    "rate_limit": 1000
  }
}
```

### 6.4. Status API

**Endpoint:** `GET /api/v1/notifications/{id}/status`

**Response:**
```json
{
  "notification_id": "notif_abc123",
  "channel": "email",
  "status": "delivered",
  "recipient": "user@example.com",
  "events": [
    { "type": "queued", "timestamp": "2024-01-15T10:30:00Z" },
    { "type": "sent", "timestamp": "2024-01-15T10:30:05Z" },
    { "type": "delivered", "timestamp": "2024-01-15T10:30:10Z" },
    { "type": "opened", "timestamp": "2024-01-15T10:45:00Z" }
  ]
}
```

---

## 7. Performance Tuning

### 7.1. Queue Configuration

**RabbitMQ Queue Settings:**

```yaml
queues:
  email:
    high_priority:
      name: notifications.email.high
      durable: true
      prefetch_count: 20
      message_ttl: 3600000  # 1 hour
      max_priority: 10

    normal:
      name: notifications.email.normal
      durable: true
      prefetch_count: 50
      message_ttl: 86400000  # 24 hours

  sms:
    name: notifications.sms
    durable: true
    prefetch_count: 20
    message_ttl: 3600000  # 1 hour

  retry:
    name: notifications.retry
    message_ttl: 300000  # 5 min delay
    dead_letter_exchange: notifications.dlx
```

### 7.2. Rate Limiting

**Per-Tenant Rate Limits:**

| Channel | Default Limit | Enterprise Limit |
|---------|---------------|------------------|
| Email | 1,000/hour | 10,000/hour |
| SMS | 500/hour | 5,000/hour |
| Batch | 10,000/day | 100,000/day |

**Implementation:**
```yaml
rate_limiting:
  backend: redis
  key_pattern: "ratelimit:{tenant_id}:{channel}:{window}"
  windows:
    - duration: 1h
      limit: ${HOURLY_LIMIT}
    - duration: 24h
      limit: ${DAILY_LIMIT}
```

### 7.3. Retry Strategy

**Exponential Backoff:**

```yaml
retry:
  max_attempts: 5
  initial_delay: 30s
  max_delay: 1h
  multiplier: 2

  # Retryable errors
  retryable:
    - connection_timeout
    - rate_limited
    - temporary_failure

  # Non-retryable (immediate fail)
  non_retryable:
    - invalid_recipient
    - hard_bounce
    - authentication_error
```

---

## 8. Monitoring and Alerting

### 8.1. Key Metrics

**Delivery Metrics:**

```yaml
# Prometheus metrics
notifications_sent_total{channel, tenant, status}
notifications_delivered_total{channel, tenant}
notifications_failed_total{channel, tenant, error_type}
notifications_bounced_total{channel, tenant, bounce_type}

notifications_delivery_latency_seconds{channel, tenant}
notifications_queue_depth{channel, priority}
notifications_retry_count{channel, tenant}
```

**Provider Metrics:**

```yaml
notifications_provider_requests_total{provider, status}
notifications_provider_latency_seconds{provider}
notifications_provider_errors_total{provider, error_type}
notifications_provider_rate_limit_hits{provider}
```

### 8.2. Service Level Objectives

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Email Delivery Rate | >= 99% | < 98% |
| SMS Delivery Rate | >= 98% | < 96% |
| Email Send Latency (p95) | < 30 sec | > 60 sec |
| SMS Send Latency (p95) | < 10 sec | > 20 sec |
| Queue Processing Time | < 60 sec | > 120 sec |

### 8.3. Alert Rules

```yaml
# Critical Alerts
- alert: NotificationServiceDown
  expr: up{job="notifications"} == 0
  for: 1m
  severity: critical

- alert: EmailProviderDown
  expr: notifications_provider_status{provider="smtp"} == 0
  for: 5m
  severity: critical

- alert: SMSProviderDown
  expr: notifications_provider_status{provider="sms"} == 0
  for: 5m
  severity: critical

# High Alerts
- alert: EmailDeliveryRateLow
  expr: rate(notifications_delivered_total{channel="email"}[1h]) / rate(notifications_sent_total{channel="email"}[1h]) < 0.98
  for: 15m
  severity: high

- alert: NotificationQueueBacklog
  expr: notifications_queue_depth > 5000
  for: 10m
  severity: high

- alert: HighBounceRate
  expr: rate(notifications_bounced_total{bounce_type="hard"}[1h]) / rate(notifications_sent_total{channel="email"}[1h]) > 0.02
  for: 15m
  severity: high
```

### 8.4. Grafana Dashboard

**Notifications Dashboard Panels:**

1. **Delivery Overview**
   - Notifications sent per minute (by channel)
   - Delivery rate (delivered/sent)
   - Bounce/failure breakdown

2. **Performance**
   - Send latency distribution (p50, p95, p99)
   - Queue depth over time
   - Processing throughput

3. **Provider Health**
   - Provider status
   - Provider latency
   - Rate limit utilization

4. **Engagement (Email)**
   - Open rate
   - Click rate
   - Unsubscribe rate

---

## 9. Bounce and Complaint Handling

### 9.1. Bounce Types

| Type | Description | Action |
|------|-------------|--------|
| **Hard Bounce** | Permanent failure (invalid address) | Add to suppression list |
| **Soft Bounce** | Temporary failure (mailbox full) | Retry with backoff |
| **Block** | Provider/ISP block | Investigate, request delisting |

### 9.2. Suppression List

**Suppression List Management:**

```sql
CREATE TABLE suppression_list (
    tenant_id UUID NOT NULL,
    channel VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    reason VARCHAR(50) NOT NULL,
    added_at TIMESTAMPTZ NOT NULL,
    expires_at TIMESTAMPTZ,

    PRIMARY KEY (tenant_id, channel, address)
);
```

**Auto-suppression Rules:**
- Hard bounce → Permanent suppression
- 3 soft bounces in 7 days → 30-day suppression
- Complaint → Permanent suppression
- Unsubscribe → Permanent suppression

### 9.3. Complaint Handling (Feedback Loops)

**FBL Integration:**
- Register with major ISPs (Gmail, Outlook, Yahoo)
- Process complaint webhooks
- Auto-suppress complainers
- Report to compliance team

---

## 10. Security Considerations

### 10.1. Data Security

- **Tenant Isolation**: Each tenant's notifications isolated
- **Encryption at Rest**: All stored content encrypted
- **Encryption in Transit**: TLS 1.3 for all connections
- **PII Handling**: Recipient data treated as PII

### 10.2. Access Control

- **Send Notifications**: Requires `notifications:send` permission
- **View History**: Requires `notifications:read` permission
- **Manage Templates**: Requires `notifications:templates` permission
- **View Analytics**: Requires `notifications:analytics` permission

### 10.3. Audit Logging

All operations logged:
- Notification submissions
- Delivery events
- Template changes
- Configuration changes
- Suppression list modifications

---

## 11. Capacity Planning

### 11.1. Current Capacity

| Metric | Current Capacity |
|--------|------------------|
| Emails per hour | 10,000 |
| SMS per hour | 5,000 |
| Concurrent connections | 100 (SMTP) |
| Queue depth | 50,000 |

### 11.2. Scaling Triggers

| Trigger | Action |
|---------|--------|
| Queue depth > 1000 sustained | Add workers |
| Provider latency > 5s | Investigate/switch provider |
| Delivery rate < 95% | Alert, investigate |
| Rate limit > 80% | Request quota increase |

---

## 12. Appendices

### 12.1. Supported Email Providers

| Provider | Type | Features |
|----------|------|----------|
| SendGrid | API | Webhooks, analytics |
| Amazon SES | SMTP/API | High volume, low cost |
| Mailgun | API | Validation, analytics |
| Custom SMTP | SMTP | Flexible |

### 12.2. Supported SMS Providers

| Provider | Coverage | Features |
|----------|----------|----------|
| Swedish Provider | Sweden, Nordics | Local regulations |
| Twilio | Global | Wide coverage |
| MessageBird | Global | Multi-channel |

### 12.3. Contact Information

| Role | Contact |
|------|---------|
| Technical Lead | tech-lead@swedwise.com |
| Notifications Engineer | notifications@swedwise.com |
| Provider Support | Per provider |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Technical Lead | Initial Notifications architecture addendum |

---

**Classification:** Confidential
**Distribution:** Internal use only
**Review Date:** 2026-01-15

*This document contains confidential technical information about the Swedwise Notifications service component. Unauthorized distribution is prohibited.*
