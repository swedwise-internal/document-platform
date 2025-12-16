---
document_id: SW-SAAS-OPS-COMP-002
title: Operations Addendum - Notifications
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: SaaS Operations Manager
component: notifications
parent_document: SW-SAAS-OPS-001
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-SAAS-OPS-001
  - SW-SAAS-COMP-002
  - SW-SAAS-ARCH-001
  - SW-ISMS-PRO-001
---

# Operations Addendum - Notifications

## 1. Addendum Overview

### 1.1. Purpose

This operations addendum provides **component-specific operational procedures** for the **Notifications (Email and SMS delivery)** service component within the Swedwise SaaS platform.

**This document supplements SW-SAAS-OPS-001 (SaaS Platform Operations Guide).** When conflicts exist, the main Operations Guide takes precedence.

### 1.2. Service Component Overview

| Component | Technology | Purpose |
|-----------|------------|---------|
| **OpenText Notifications** | OpenText Notifications | Multi-channel delivery orchestration |
| **Email Gateway** | SendGrid / AWS SES | Email delivery infrastructure |
| **SMS Gateway** | Twilio / 46elks | SMS delivery infrastructure |

### 1.3. Service Boundaries

**In Scope:**
- Email and SMS notification delivery
- Notification queue management
- Delivery tracking and bounce handling
- Gateway integration and monitoring

**Out of Scope:**
- End-user devices (email clients, SMS recipients)
- Third-party email/SMS gateways (monitored but not managed)

### 1.4. Key Operational Characteristics

- **Multi-Channel**: Email and SMS delivery with unified API
- **Asynchronous**: All notifications queued and processed asynchronously
- **Integration-Heavy**: Relies on external gateways (email/SMS providers)
- **Delivery Tracking**: Comprehensive tracking of delivery status and failures

## 2. Component Architecture

### 2.1. Notifications Architecture

```
┌────────────────────────────────────────────────────────────┐
│           OPENTEXT NOTIFICATIONS PODS                      │
│                                                            │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │  Notifications   │  │  Delivery        │              │
│  │  API             │  │  Engine          │              │
│  │  (3+ replicas)   │  │  (3+ replicas)   │              │
│  │                  │  │                  │              │
│  │  - Submit API    │  │  - Email Send    │              │
│  │  - Status API    │  │  - SMS Send      │              │
│  │  - Queue Mgmt    │  │  - Retry Logic   │              │
│  └────────┬─────────┘  └────────┬─────────┘              │
│           │                     │                         │
└───────────┼─────────────────────┼─────────────────────────┘
            │                     │
            ▼                     ▼
┌────────────────────────────────────────────────────────────┐
│               EXTERNAL GATEWAYS                            │
│                                                            │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │  Email Gateway   │  │  SMS Gateway     │              │
│  │  (SendGrid/SES)  │  │  (Twilio/46elks) │              │
│  └──────────────────┘  └──────────────────┘              │
└────────────────────────────────────────────────────────────┘
```

### 2.2. Component Dependencies

| Component | Depends On | Impact if Unavailable |
|-----------|------------|-----------------------|
| **Notifications API** | PostgreSQL, Message Queue | Cannot accept new notification requests |
| **Delivery Engine** | Email Gateway, SMS Gateway | Notifications queued but not delivered |

## 3. Component Monitoring

### 3.1. Key Metrics

| Metric | Normal Range | Warning | Critical | Alert Target |
|--------|--------------|---------|----------|--------------|
| **Email Delivery Rate** | >99% | <99% | <95% | SOC + On-Call |
| **SMS Delivery Rate** | >98% | <98% | <90% | SOC + On-Call |
| **Notification Queue Depth** | <500 | >2000 | >5000 | SOC |
| **Email Bounce Rate** | <2% | >5% | >10% | Operations Manager |
| **SMS Failure Rate** | <5% | >10% | >20% | SOC + On-Call |
| **Gateway Response Time** | <2 seconds | >5 seconds | >10 seconds | SOC |
| **Retry Queue Depth** | <100 | >500 | >1000 | SOC |

### 3.2. Health Checks

**Notifications API Health Check** (`/health`):
```json
{
  "status": "healthy",
  "timestamp": "2025-01-15T10:30:45Z",
  "checks": {
    "database": "healthy",
    "message_queue": "healthy",
    "email_gateway": "healthy",
    "sms_gateway": "healthy"
  },
  "metrics": {
    "queued_notifications": 234,
    "delivery_rate_last_hour": 99.2,
    "avg_delivery_time_seconds": 1.5
  }
}
```

### 3.3. Prometheus Metrics

**Custom Metrics Exported:**
- `notifications_sent_total` (counter, by type: email/SMS, by tenant)
- `notifications_delivered_total` (counter, by type)
- `notifications_failed_total` (counter, by type, by reason)
- `notification_delivery_duration_seconds` (histogram)
- `notification_queue_depth` (gauge, by type)
- `notification_bounce_rate` (gauge, by type)

**Grafana Dashboard Panels:**
- Notifications sent per hour (email vs. SMS)
- Delivery success rate (%)
- Bounce/failure rate trend
- Queue depth over time
- Gateway performance (response time, error rate)
- Cost tracking (email + SMS usage by tenant)

## 4. Incident Handling - Component-Specific

### 4.1. Notification Delivery Failures

**Symptoms:**
- Notifications not delivered to recipients
- High bounce rate or delivery failures
- Notifications stuck in queue

**Triage Steps:**
1. Check Notifications pod status
2. Check delivery engine logs for gateway errors
3. Verify email/SMS gateway status (check vendor status pages)
4. Check gateway credentials and authentication
5. Review bounce logs for patterns (specific domains, invalid addresses)

**Common Causes and Solutions:**

| Cause | Symptoms | Solution |
|-------|----------|----------|
| **Gateway Outage** | All notifications failing | Check vendor status page, wait for recovery, consider failover gateway if available |
| **Authentication Failure** | 401/403 errors in logs | Verify API keys/credentials valid, rotate if expired, update secret in Kubernetes |
| **Rate Limiting** | 429 errors, throttling messages | Implement backoff/retry, contact gateway to increase quota, distribute load across multiple gateways |
| **Invalid Recipient** | High bounce rate for specific tenant | Validate recipient list with customer, clean up invalid addresses |
| **Blocked IP/Domain** | Emails rejected by recipient servers | Check sender reputation, contact recipient IT to whitelist, investigate spam reports |
| **Queue Backup** | Slow delivery, increasing queue depth | Scale up delivery engine pods, increase gateway concurrency limits, investigate slow gateway response |

**Escalation:**
- If gateway issue: Escalate to L3 to contact gateway vendor support
- If deliverability issue: Escalate to Customer Success + Email Deliverability Expert
- If infrastructure issue: Follow standard infrastructure incident procedures

## 5. Notification Delivery

### 5.1. Email Delivery Monitoring

**Delivery Pipeline:**
```
Notification API → Queue → Delivery Engine → Email Gateway →
Recipient Mail Server → Recipient Inbox
```

**Monitoring Points:**

| Stage | Metric | Target | Alert |
|-------|--------|--------|-------|
| **Queue Entry** | Acceptance rate | 100% | Alert if <99% |
| **Gateway Submission** | Gateway acceptance rate | >99% | Alert if <99% |
| **Gateway Delivery** | Gateway delivery rate | >98% | Alert if <95% |
| **Bounce Rate** | Hard + soft bounces | <5% | Alert if >10% |
| **Spam Rate** | Spam complaints | <0.1% | Alert if >0.5% |

**Email Deliverability Tracking:**
- **Delivered**: Gateway confirms delivery to recipient mail server
- **Bounced**: Recipient mail server rejects (invalid address, mailbox full)
- **Spam**: Recipient marks as spam
- **Opened**: Recipient opens email (tracking pixel, optional)
- **Clicked**: Recipient clicks link in email (link tracking, optional)

### 5.2. SMS Delivery Monitoring

**Delivery Pipeline:**
```
Notification API → Queue → Delivery Engine → SMS Gateway →
Mobile Carrier → Recipient Phone
```

**Monitoring Points:**

| Stage | Metric | Target | Alert |
|-------|--------|--------|-------|
| **Queue Entry** | Acceptance rate | 100% | Alert if <99% |
| **Gateway Submission** | Gateway acceptance rate | >99% | Alert if <98% |
| **Gateway Delivery** | Gateway delivery rate | >95% | Alert if <90% |
| **Delivery Confirmation** | Carrier confirmation (DLR) | >90% | Alert if <85% |

**SMS Delivery Status:**
- **Accepted**: Gateway accepts message for delivery
- **Sent**: Gateway submits to carrier
- **Delivered**: Carrier confirms delivery (Delivery Receipt)
- **Failed**: Carrier rejects (invalid number, blocked, out of credit)
- **Unknown**: No delivery receipt received (carrier doesn't support DLR)

### 5.3. Bounce Handling

**Email Bounce Types:**

| Bounce Type | Description | Action |
|-------------|-------------|--------|
| **Hard Bounce** | Permanent failure (invalid address, domain doesn't exist) | Add to suppression list, notify customer |
| **Soft Bounce** | Temporary failure (mailbox full, server down) | Retry up to 3 times over 24 hours |
| **Block Bounce** | Recipient server blocks sender | Investigate sender reputation, escalate to deliverability team |
| **Spam Complaint** | Recipient marks as spam | Add to suppression list immediately, investigate content |

**SMS Failure Handling:**

| Failure Type | Description | Action |
|--------------|-------------|--------|
| **Invalid Number** | Number format invalid or doesn't exist | Add to suppression list, notify customer |
| **Blocked** | Number blocked by carrier or recipient | Add to suppression list, notify customer |
| **Carrier Rejection** | Carrier rejects message (content filtering) | Review message content, adjust if necessary |
| **Out of Credit** | Gateway account out of credit | Alert Operations Manager immediately, top up credits |

**Suppression List Management:**
- Maintain per-tenant suppression lists
- Hard bounces: Add immediately, retain indefinitely (until customer requests removal)
- Spam complaints: Add immediately, retain indefinitely
- Soft bounces: Add after 3 consecutive failures, review monthly
- Suppression list export: Available to customers on request

### 5.4. Retry Logic

**Email Retry Strategy:**
```
Attempt 1: Immediate
Attempt 2: +5 minutes (if soft bounce)
Attempt 3: +30 minutes (if soft bounce)
Attempt 4: +6 hours (if soft bounce)
Final: Mark as failed, move to dead letter queue
```

**SMS Retry Strategy:**
```
Attempt 1: Immediate
Attempt 2: +1 minute (if gateway timeout)
Attempt 3: +5 minutes (if gateway timeout)
Final: Mark as failed, move to dead letter queue
```

**Dead Letter Queue:**
- Notifications that failed all retries
- Reviewed daily by Operations team
- Manual retry if issue was transient (e.g., gateway outage)
- Customer notified of persistent delivery failures

## 6. Performance Optimization

### 6.1. Notification Delivery Performance

**Optimization Techniques:**

**Queue Management:**
- Separate queues for email and SMS (different SLAs)
- Priority queue for urgent notifications
- Dead letter queue for failed notifications

**Gateway Connection Pooling:**
- Maintain persistent connections to gateways
- Connection pool size: 10 connections per gateway per pod
- Retry failed connections with exponential backoff

**Batch Sending:**
- Batch emails where gateway supports (e.g., SendGrid batch API)
- SMS sent individually (most gateways don't support batching)

**Performance Benchmarks:**

| Notification Type | Target Delivery Time | Actual (Median) | Notes |
|-------------------|----------------------|-----------------|-------|
| **Email (single)** | <5 seconds | 2 seconds | Time from API call to gateway acceptance |
| **Email (batch 100)** | <30 seconds | 15 seconds | Using batch API |
| **SMS (single)** | <3 seconds | 1.5 seconds | Time from API call to gateway acceptance |
| **SMS (batch 100)** | <5 minutes | 2.5 minutes | Sequential sending |

**Note:** Delivery time to recipient's inbox/phone is additional and depends on external factors.

### 6.2. Scaling Strategies

**Horizontal Scaling Triggers:**

| Metric | Scale Up Threshold | Scale Down Threshold | Action |
|--------|-------------------|----------------------|--------|
| **CPU Utilization** | >70% for 5 min | <40% for 15 min | Add/remove pod |
| **Queue Depth** | >2000 notifications | <500 notifications | Add/remove pod |
| **API Response Time** | p95 >2 seconds | p95 <0.5 seconds | Add/remove pod |

**Auto-Scaling Configuration:**
```yaml
# Notifications API HPA
minReplicas: 3
maxReplicas: 15
targetCPUUtilization: 70
targetMemoryUtilization: 75
scaleUpStabilization: 60s
scaleDownStabilization: 300s
```

## 7. Gateway Management

### 7.1. Gateway Configuration

**Email Gateway Configuration:**
- **Primary Gateway**: SendGrid (or AWS SES)
- **Failover Gateway**: AWS SES (or SendGrid)
- **Authentication**: API key (stored in Kubernetes Secret)
- **Rate Limits**: Per vendor (typically 10,000+/hour)
- **Quota Monitoring**: Alert at 80% usage

**SMS Gateway Configuration:**
- **Primary Gateway**: Twilio (or 46elks for Sweden)
- **Authentication**: API key + account SID
- **Rate Limits**: Per vendor (typically 100-1000/second)
- **Cost Monitoring**: Alert at 80% of monthly budget

### 7.2. Gateway Monitoring

**Health Checks:**
- **Email Gateway**: Health check every 5 minutes
- **SMS Gateway**: Health check every 5 minutes
- **Response Time**: Alert if p95 >5 seconds
- **Error Rate**: Alert if >1%

**Gateway Alerts:**
- Gateway API down (3 consecutive failed health checks)
- Authentication failure (invalid credentials)
- Rate limit approaching (>80% quota)
- Quota exhaustion (100% quota, cannot send)
- Cost threshold exceeded (>90% monthly budget)

## 8. Runbooks - Common Operational Procedures

### 8.1. Rotate SMS Gateway API Key

**When to Use:**
- Scheduled key rotation (quarterly)
- Key compromise suspected
- Gateway vendor recommends rotation

**Procedure:**
1. Generate new API key in gateway vendor portal
2. Test new key in staging environment:
   ```bash
   curl -X POST https://sms-gateway.com/send \
     -H "Authorization: Bearer <new-key>" \
     -d '{"to": "+46701234567", "message": "Test"}'
   ```
3. Prepare Kubernetes secret update:
   ```bash
   kubectl create secret generic sms-gateway-credentials \
     --from-literal=api-key=<new-key> \
     --dry-run=client -o yaml | kubectl apply -f -
   ```
4. Schedule maintenance window (brief, <5 min)
5. During window: Apply secret update
6. Restart Notifications pods to pick up new secret:
   ```bash
   kubectl rollout restart deployment notifications-api
   ```
7. Verify notifications sending with new key: Send test SMS
8. Monitor for authentication errors (15 minutes)
9. Revoke old key in gateway vendor portal (after successful verification)
10. Document key rotation in operations log

**Expected Downtime:** <5 minutes (during pod restart)

### 8.2. Failover to Secondary Email Gateway

**When to Use:**
- Primary email gateway outage (confirmed via vendor status page)
- Primary gateway performance degradation
- Gateway rate limit reached, overflow to secondary

**Procedure:**
1. Verify primary gateway status (check vendor status page, test API)
2. Update Notifications configuration to use secondary gateway:
   ```yaml
   # Update ConfigMap or environment variable
   EMAIL_GATEWAY_PRIMARY: "sendgrid"
   EMAIL_GATEWAY_SECONDARY: "ses"
   EMAIL_GATEWAY_MODE: "failover"  # Change to "secondary"
   ```
3. Apply configuration change:
   ```bash
   kubectl apply -f notifications-config.yaml
   ```
4. Restart Notifications pods (rolling restart for zero downtime):
   ```bash
   kubectl rollout restart deployment notifications-api
   kubectl rollout restart deployment delivery-engine
   ```
5. Verify emails sending via secondary gateway:
   - Send test email
   - Check delivery engine logs for gateway selection
   - Monitor delivery success rate
6. Notify Customer Success of gateway failover (if customer-visible)
7. Monitor primary gateway status for recovery
8. When primary recovered: Failback using reverse procedure
9. Document failover and root cause in incident report

**Expected Downtime:** None (rolling restart) or <2 minutes if concurrent restart

### 8.3. Investigate High Queue Depth

**When to Use:**
- Queue depth alert triggered (>5000 notifications)
- Customer reports delayed notification delivery
- Dashboard shows increasing queue trend

**Procedure:**
1. Identify affected queue(s): Email or SMS
2. Check queue metrics:
   ```bash
   # RabbitMQ example
   rabbitmqctl list_queues name messages consumers
   ```
3. Investigate root cause:
   - **Low processing rate**: Check worker pod count, CPU/memory utilization
   - **High ingress rate**: Check API call volume, identify source
   - **Worker failures**: Check pod logs for errors, restart failed pods
   - **External dependency**: Check gateway status (for notifications)
4. Take corrective action:
   - **Scale up workers**: Increase pod replicas temporarily
     ```bash
     kubectl scale deployment delivery-engine --replicas=10
     ```
   - **Throttle ingress**: Apply rate limiting to offending tenant (if abuse)
   - **Fix worker issues**: Restart failed pods, increase resources
   - **Wait for gateway**: If gateway issue, queue will drain when recovered
5. Monitor queue drain rate: Calculate estimated time to clear
6. Communicate to customers if significant delay expected
7. Post-incident: Analyze root cause, adjust auto-scaling thresholds if needed

**Expected Resolution Time:** 15 minutes (diagnosis) + variable (queue drain time)

### 8.4. Clear Suppression List Entry

**When to Use:**
- Customer requests removal of address from suppression list
- Temporary email issue resolved, recipient wants to re-subscribe
- Accidental suppression list addition

**Procedure:**
1. Verify customer request (confirm tenant ID, recipient address)
2. Check suppression list reason:
   ```sql
   SELECT * FROM suppression_list
   WHERE tenant_id = 'tenant-abc-123'
   AND email = 'user@example.com';
   ```
3. Review suppression history (why was it added?)
4. If safe to remove (not spam complaint):
   ```sql
   DELETE FROM suppression_list
   WHERE tenant_id = 'tenant-abc-123'
   AND email = 'user@example.com';
   ```
5. Log removal in operations log
6. Notify customer suppression entry removed
7. Monitor next notification to that recipient (verify delivery)

**Expected Time:** 5-10 minutes

**Caution:** Do NOT remove spam complaint entries without customer confirmation and investigation.

### 8.5. Investigate Email Deliverability Issues

**When to Use:**
- High bounce rate reported
- Customer reports emails going to spam
- Delivery rate drops below 95%

**Procedure:**
1. Identify affected tenant and email domain
2. Check bounce logs for patterns:
   ```bash
   kubectl logs -n saas-platform deployment/delivery-engine | grep "bounce"
   ```
3. Analyze bounce reasons:
   - Hard bounces (invalid addresses) → Customer data quality issue
   - Soft bounces (temporary) → Monitor, may resolve automatically
   - Block bounces (sender reputation) → Escalate to deliverability team
4. Check sender reputation:
   - Use tools: MXToolbox, Sender Score, Google Postmaster Tools
   - Verify SPF, DKIM, DMARC records configured correctly
5. If spam reports:
   - Review email content with customer (avoid spam triggers)
   - Check complaint rate (<0.1% acceptable)
   - Consider adjusting sending patterns
6. Take corrective action:
   - **Data quality**: Work with customer to clean recipient list
   - **Reputation issue**: Warm up new IP, reduce send volume temporarily
   - **Technical issue**: Fix SPF/DKIM/DMARC records
7. Document findings and actions
8. Follow up with customer on improvement

**Expected Time:** 1-2 hours (investigation), ongoing (remediation)

## 9. Continuous Improvement

### 9.1. Component-Specific Metrics

**Notifications Component:**
- Email delivery rate: Target >99%
- SMS delivery rate: Target >98%
- Bounce rate: Target <5%
- Average delivery time: Target <5 seconds

### 9.2. Improvement Initiatives

**Current Improvement Areas:**
- Improve email deliverability (reduce spam rate)
- Optimize queue management for peak loads
- Enhance bounce handling and suppression list management
- Automate gateway failover procedures

### 9.3. Lessons Learned

**Post-Incident Reviews:**
- Conducted after every High or Critical incident
- Focus on component-specific root causes
- Identify preventive measures
- Update runbooks with new procedures

**Monthly Retrospectives:**
- Operations team reviews component performance
- Discusses challenges and improvement opportunities
- Prioritizes automation and optimization tasks

## 10. Related Documents

**Main Operations Guide:**
- SW-SAAS-OPS-001: Swedwise SaaS Platform - Operations Guide (parent document)

**Component Documentation:**
- SW-SAAS-COMP-002: Swedwise Notifications - Component Description

**Architecture and Design:**
- SW-SAAS-ARCH-001: Swedwise Communications Technical Architecture

**IMS Procedures:**
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-IMS-PRO-008: Change Management Procedure

**Vendor Documentation:**
- OpenText Notifications Administration Guide
- Email Gateway (SendGrid/SES) Documentation
- SMS Gateway (Twilio/46elks) Documentation

## 11. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | SaaS Operations Manager | Initial Notifications operations addendum | Operations Manager |

**Next Review Date**: [TBD - 6 months from effective date, then annually]

**Document Classification**: Internal

**Document Owner**: SaaS Operations Manager

**Parent Document**: SW-SAAS-OPS-001 (Swedwise SaaS Platform - Operations Guide)

---

*This operations addendum is supplementary to SW-SAAS-OPS-001. All general SaaS operations procedures from the main guide apply unless specifically overridden in this addendum. Operations staff must read and understand both documents.*
