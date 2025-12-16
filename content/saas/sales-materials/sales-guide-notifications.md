---
document_id: SW-SAAS-SAL-COMP-002
title: Sales Guide - Notifications
doc_type: sales-material
version: "1.0"
status: draft
classification: internal
owner: Sales Director
component: notifications
parent_document: SW-SAAS-SAL-001
effective_date: 2025-01-15
review_date: 2025-07-15
related_documents:
  - SW-SAAS-SAL-001
  - SW-SAAS-COMP-002
  - SW-SAAS-SVC-001
---

# Sales Guide - Notifications

**Version:** 1.0
**Last Updated:** 2025-01-15
**Component Status:** Generally Available (GA)
**Audience:** Sales Team, Account Managers, Solution Architects

---

## 1. Component Overview

### 1.1. What is Notifications?

Swedwise Notifications is a cloud-based multi-channel notification platform built on **OpenText Notifications**, enabling organizations to deliver timely, personalized messages to customers through their preferred channels.

**In Simple Terms:**
> "Send the right message to the right customer at the right time through the right channel - email, SMS, or push notifications."

### 1.2. Value Proposition

| Capability | Business Value |
|------------|----------------|
| **Multi-Channel Delivery** | Email, SMS, push notifications from single platform |
| **Event-Driven Notifications** | Triggered automatically by business events |
| **Channel Orchestration** | Intelligent fallback and customer preference management |
| **Real-Time Tracking** | Know exactly what was sent, delivered, and opened |
| **Personalization** | Customer-specific content, timing, and channel |
| **High Deliverability** | 98%+ delivery rates with carrier-grade infrastructure |

### 1.3. Technology Foundation

**OpenText Notifications:**
- Modern notification delivery platform
- Multi-channel orchestration
- Real-time delivery tracking
- Template-based message management

**Swedwise SaaS Layer:**
- Cloud infrastructure and operations
- Swedish data residency
- 24/7 monitoring and support
- Automatic updates and patches

---

## 2. Use Cases

### 2.1. Customer Notifications (Transactional)

#### **Business Challenge**
Organizations need to send timely, personalized notifications triggered by business events (account changes, payment due, service updates, etc.) across preferred customer channels.

#### **Solution Capabilities**
- **Event-driven** - triggered by system events, workflows, schedules
- **Multi-channel orchestration** - email, SMS, push, in-app
- **Personalization** - customer preferences, language, channel choice
- **Template library** - pre-built templates for common scenarios
- **Delivery tracking** - real-time status, open rates, click-through
- **Fallback logic** - if email fails, send SMS automatically

#### **Customer Benefits**
- **Improved customer experience** - timely, relevant communications
- **Higher engagement** - 5x higher open rates for SMS vs email
- **Reduced support calls** - proactive notifications prevent issues
- **Channel flexibility** - customers choose how they want to be contacted
- **Real-time delivery** - instant notifications for time-sensitive events
- **Complete visibility** - know what was sent, when, and if delivered

#### **Typical Customers**
- **Banks:** Transaction alerts, fraud notifications, payment reminders
- **Utilities:** Outage notifications, payment reminders, service appointments
- **Healthcare:** Appointment reminders, test results, prescription notifications
- **E-commerce:** Order confirmations, shipping updates, delivery notifications

#### **Engagement Metrics**
```
Typical Improvement with Multi-Channel:
- Email only: 20% open rate
- Email + SMS fallback: 65% open rate
- SMS only: 98% open rate (time-sensitive)
- Push notification: 90% open rate (mobile app users)
```

### 2.2. Payment and Billing Reminders

#### **Business Challenge**
Organizations need to remind customers of upcoming or overdue payments through channels that drive action while maintaining positive customer relationships.

#### **Solution Capabilities**
- **Automated reminders** - scheduled before and after due dates
- **Escalation logic** - friendly reminder → urgent notice → final notice
- **Payment links** - direct links to payment portals
- **Channel preference** - respect customer communication preferences
- **Time zone awareness** - send at optimal local time
- **Suppression rules** - don't remind if already paid

#### **Customer Benefits**
- **Improved collection rates** - 30-40% reduction in overdue payments
- **Lower DSO** (Days Sales Outstanding) - faster payment cycles
- **Reduced collection costs** - fewer manual calls needed
- **Better customer relations** - automated, not aggressive
- **Payment convenience** - direct links to pay
- **Compliance** - audit trail of all reminders sent

#### **Typical Customers**
- **Subscription Services:** SaaS, memberships, utilities
- **Financial Services:** Credit cards, loans, insurance premiums
- **Telecom:** Monthly bills, service fees
- **Municipalities:** Taxes, fees, service charges

### 2.3. Service and Status Updates

#### **Business Challenge**
Keep customers informed about service status, outages, maintenance, and updates through timely notifications that reduce support burden.

#### **Solution Capabilities**
- **Real-time alerts** - instant notification of service events
- **Targeted delivery** - only affected customers notified
- **Multi-language** - automatic language selection
- **Update tracking** - series of updates as situation evolves
- **Customer portal integration** - link to detailed status page
- **Acknowledgment tracking** - know who received and read notice

#### **Customer Benefits**
- **Reduced support calls** - proactive information prevents inquiries
- **Customer satisfaction** - transparency builds trust
- **Faster resolution** - customers know what's happening
- **Compliance** - required notifications sent automatically
- **Operational efficiency** - automated instead of manual

#### **Typical Customers**
- **Utilities:** Power outages, water service interruptions
- **Telecom:** Network maintenance, service changes
- **SaaS Providers:** Planned maintenance, incident notifications
- **Transportation:** Schedule changes, delays, cancellations

### 2.4. Marketing and Promotional Notifications

#### **Business Challenge**
Deliver targeted marketing messages through high-engagement channels while respecting customer preferences and compliance requirements.

#### **Solution Capabilities**
- **Segmentation** - target specific customer groups
- **Personalization** - individual offers, content, messaging
- **A/B testing** - test different versions, optimize results
- **Campaign scheduling** - optimal send times
- **Opt-out management** - respect customer preferences
- **Analytics** - track opens, clicks, conversions, ROI

#### **Customer Benefits**
- **Higher conversion rates** - SMS converts 6x better than email
- **Better targeting** - reach right customer with right message
- **Measurable results** - track every interaction, optimize continuously
- **Compliance** - GDPR-compliant opt-out management
- **Cost-effective** - targeted delivery reduces waste
- **Multi-channel reach** - combine email, SMS, push for maximum impact

#### **Typical Customers**
- **Retail:** Flash sales, limited-time offers, store events
- **Financial Services:** Product offers, account upgrades
- **Travel:** Booking reminders, promotional fares
- **Entertainment:** Event announcements, ticket sales

#### **Campaign Performance**
```
Retail Bank - Product Cross-Sell Campaign:
- Audience: 50,000 customers
- Channels: Email + SMS for high-value segments
- Personalization: Product recommendations based on transaction history
- Results:
  - Open Rate: 42% (vs 15% industry average)
  - Click Rate: 8.5% (vs 2% industry average)
  - Conversion Rate: 3.2% (1,600 new accounts)
  - Revenue: 8,000,000 SEK
  - Campaign Cost: 75,000 SEK (notifications only)
  - ROI: 10,567%
```

### 2.5. Appointment and Event Reminders

#### **Business Challenge**
Reduce no-shows and improve attendance through timely, multi-channel reminders with confirmation capabilities.

#### **Solution Capabilities**
- **Multi-stage reminders** - 1 week before, 1 day before, 1 hour before
- **Confirmation requests** - customers can confirm or reschedule
- **Calendar integration** - add to calendar links
- **Rescheduling links** - easy self-service rescheduling
- **Multi-channel delivery** - email for advance notice, SMS for day-of
- **Attendance tracking** - confirmed vs no-show analytics

#### **Customer Benefits**
- **Reduced no-shows** - 40-60% reduction typical
- **Better resource utilization** - fill cancelled slots
- **Customer convenience** - easy confirmation and rescheduling
- **Staff efficiency** - fewer manual reminder calls
- **Revenue protection** - fewer missed appointments = more revenue

#### **Typical Customers**
- **Healthcare:** Doctor appointments, procedures, tests
- **Professional Services:** Consultations, meetings, site visits
- **Education:** Parent-teacher conferences, student appointments
- **Service Businesses:** Hair salons, auto repair, home services

---

## 3. Key Features

### 3.1. Notification Delivery Features

| Feature | Description | Business Value |
|---------|-------------|----------------|
| **Email Delivery** | High-volume email with personalization | Reliable delivery with tracking |
| **SMS Delivery** | Text messages via Swedish carriers | High open rates for urgent communications |
| **Push Notifications** | Mobile app and web push notifications | Immediate delivery to engaged users |
| **Delivery Orchestration** | Multi-channel campaigns, fallback logic | Ensure message is delivered via customer's preferred channel |
| **Template Management** | Centralized template library | Consistent messaging, easy updates |
| **Delivery Tracking** | Real-time status, open rates, click-through | Know if message was delivered and read |

### 3.2. Personalization and Targeting

| Feature | Description | Business Value |
|---------|-------------|----------------|
| **Dynamic Content** | Personalize based on customer data | Relevant, engaging messages |
| **Channel Preference** | Customer-selected preferred channel | Respect customer choice, higher engagement |
| **Language Selection** | Automatic language based on profile | Personalized communication |
| **Time Zone Handling** | Send at optimal local time | Better engagement, respectful timing |
| **Segmentation** | Target specific customer groups | Relevant messaging, reduced noise |
| **A/B Testing** | Test message variations | Optimize for best performance |

### 3.3. Scheduling and Automation

| Feature | Description | Business Value |
|---------|-------------|----------------|
| **Immediate Send** | Real-time notification delivery | Instant customer communication |
| **Scheduled Send** | Send at specific future time | Plan campaigns, optimal timing |
| **Recurring Notifications** | Repeat on schedule (daily, weekly, monthly) | Automated regular communications |
| **Event Triggers** | Trigger from system events | Automated transactional notifications |
| **Workflow Integration** | Notifications as part of business workflows | Seamless process integration |
| **Throttling** | Control send rate to avoid overwhelming | Manage deliverability, carrier limits |

### 3.4. Tracking and Analytics

| Feature | Description | Business Value |
|---------|-------------|----------------|
| **Delivery Status** | Sent, delivered, failed tracking | Know what happened to every message |
| **Open Tracking** | Email open rates (pixel-based) | Measure engagement |
| **Click Tracking** | Link click-through rates | Measure action taken |
| **Bounce Management** | Hard/soft bounce detection | Maintain clean lists, improve deliverability |
| **Unsubscribe Tracking** | Opt-out management | Compliance, preference management |
| **Reporting Dashboard** | Analytics and insights | Optimize campaigns, demonstrate ROI |

### 3.5. Compliance and Management

| Feature | Description | Business Value |
|---------|-------------|----------------|
| **Opt-Out Management** | Unsubscribe lists, preference centers | GDPR compliance, respect customer wishes |
| **Suppression Lists** | Block sends to specific addresses | Prevent unwanted communications |
| **Audit Logging** | Complete activity tracking | Compliance, troubleshooting |
| **Rate Limiting** | Control send volume | Prevent spam flags, carrier throttling |
| **Approval Workflows** | Review before send (optional) | Quality control, compliance review |
| **Template Approval** | Version control, approved templates only | Prevent unauthorized messages |

---

## 4. Benefits

### 4.1. Improved Customer Engagement

| Benefit | Impact | Measurement |
|---------|--------|-------------|
| **Higher Open Rates** | 5x higher for SMS vs email | Open rate tracking |
| **Faster Response** | 90% of SMS read within 3 minutes | Response time analytics |
| **Better Click-Through** | 6x higher for SMS vs email | Click tracking |
| **Channel Preference** | 2x satisfaction improvement | Customer satisfaction scores |
| **Timely Delivery** | Real-time event notifications | Delivery latency tracking |

### 4.2. Operational Efficiency

| Benefit | Impact | Cost Savings |
|---------|--------|--------------|
| **Reduced Support Calls** | 30-50% reduction | Support cost tracking |
| **Automated Reminders** | 90% time reduction | Staff time saved |
| **Lower No-Show Rates** | 40-60% reduction | Revenue protection |
| **Faster Collections** | 30-40% fewer overdue | DSO improvement |
| **Self-Service** | 50% fewer manual tasks | Staff efficiency |

### 4.3. Cost Effectiveness

| Benefit | Typical Savings | How Achieved |
|---------|----------------|--------------|
| **Eliminate Manual Notifications** | 70-90% | Automation replaces manual calls/emails |
| **Reduce Postage Costs** | 80-95% | Email/SMS instead of postal mail |
| **Lower Support Costs** | 30-50% | Proactive notifications reduce inquiries |
| **Better Resource Utilization** | 40-60% | Fewer no-shows, better scheduling |

**Example Cost Comparison:**
```
Healthcare Clinic - Appointment Reminders:
Current Approach (Manual Calls):
- 500 appointments/month
- 10 minutes per call
- 83 hours staff time @ 400 SEK/hour = 33,200 SEK/month

With Automated Notifications:
- 500 appointments/month
- Automated SMS reminders @ 0.40 SEK = 200 SEK/month
- 2 hours monitoring/management = 800 SEK/month
- Total: 1,000 SEK/month

Monthly Savings: 32,200 SEK (97% reduction)
Annual Savings: 386,400 SEK
```

---

## 5. Typical Customer Profile

### 5.1. Volume Thresholds

**Good Fit:**
- 50,000+ notifications per month
- Multiple notification types
- Need for multi-channel delivery

**Great Fit:**
- 500,000+ notifications per month
- Event-driven notifications
- High customer engagement requirements
- Need for real-time tracking

**Perfect Fit:**
- 5,000,000+ notifications per month
- Mission-critical notifications
- Complex orchestration requirements
- Multiple systems integration

### 5.2. Current Pain Points

| Pain Point | Indicator | Discovery Question |
|------------|-----------|-------------------|
| **Low Engagement** | Poor open/read rates | "What percentage of customers read your emails/notifications?" |
| **Manual Processes** | Staff making calls/sending individual emails | "How do you currently notify customers about [event]?" |
| **No Visibility** | Don't know if customer received message | "How do you know if a customer received your notification?" |
| **Single Channel** | Email only or SMS only | "Do customers have channel choice for notifications?" |
| **Poor Timing** | Notifications sent at wrong times | "Can you control when notifications are sent?" |
| **No Automation** | Triggered manually | "Are your notifications sent automatically or manually?" |

---

## 6. Competitive Positioning

### 6.1. vs. Generic Email Services (Mailchimp, SendGrid)

| Factor | Generic Email Service | Swedwise Notifications |
|--------|---------------------|----------------------|
| **Channels** | Email only | Email, SMS, push notifications |
| **Integration** | Basic API | Deep integration with OpenText platform |
| **Orchestration** | Manual channel management | Automated multi-channel orchestration |
| **Enterprise Features** | Limited | Approval workflows, compliance, audit |
| **Support** | Self-service/offshore | Swedish-speaking, dedicated support |
| **Compliance** | Basic | Full audit trail, GDPR compliance built-in |

**Positioning:**
> "Email services are great for email, but customers expect more. Get true multi-channel delivery with intelligent orchestration."

### 6.2. vs. SMS-Only Providers

| Factor | SMS-Only Provider | Swedwise Notifications |
|--------|-----------------|----------------------|
| **Channels** | SMS only | Email, SMS, push (unified) |
| **Integration** | Standalone service | Integrated with document generation |
| **Pricing** | Pay-per-SMS only | Bundled pricing, volume discounts |
| **Management** | Separate platform | Single platform for all communications |
| **Reporting** | SMS-only metrics | Unified cross-channel analytics |
| **Enterprise Support** | Limited | Full enterprise support and SLA |

**Positioning:**
> "Stop managing multiple vendors for each channel. Get unified multi-channel delivery from one platform."

### 6.3. vs. In-House Solutions

| Factor | In-House Solution | Swedwise Notifications |
|--------|------------------|----------------------|
| **Development** | Build and maintain | Ready to use |
| **Carrier Relations** | Manage yourself | Managed for you |
| **Deliverability** | Your responsibility | Guaranteed high deliverability |
| **Compliance** | Build yourself | Built-in compliance features |
| **Scalability** | Limited by infrastructure | Unlimited elastic scaling |
| **Time to Market** | 6-12 months | 2-4 weeks |

**Positioning:**
> "Don't build what you can buy. Focus your development resources on your core business, not infrastructure."

---

## 7. Pricing Guide

### 7.1. Component Subscription

**Notifications Component:**
- Typically included in Communications subscription
- Or standalone: 10,000 - 25,000 SEK/month base fee

### 7.2. Transaction Pricing

**Email Notifications:**

| Monthly Volume | Price per Email | Notes |
|----------------|----------------|-------|
| **0 - 10,000** | 0.10 SEK | Included in many plans |
| **10,001 - 100,000** | 0.08 SEK | Volume discount |
| **100,001 - 500,000** | 0.05 SEK | High volume |
| **500,001+** | 0.03 SEK | Enterprise volume |

**SMS Notifications:**

| Monthly Volume | Price per SMS | Notes |
|----------------|--------------|-------|
| **0 - 5,000** | 0.50 SEK | Standard rate |
| **5,001 - 50,000** | 0.40 SEK | Volume discount |
| **50,001 - 200,000** | 0.35 SEK | High volume |
| **200,001+** | 0.30 SEK | Enterprise volume |

**Push Notifications:**

| Monthly Volume | Price per Push | Notes |
|----------------|---------------|-------|
| **0 - 100,000** | 0.02 SEK | Low cost, high engagement |
| **100,001 - 1,000,000** | 0.01 SEK | Volume discount |
| **1,000,000+** | 0.005 SEK | Massive scale |

### 7.3. Example Pricing Scenarios

#### **Scenario 1: Healthcare Clinic - Appointment Reminders**

**Profile:**
- 2,000 appointments/month
- 3 reminders per appointment (1 week, 1 day, 1 hour before)
- Email for advance reminders, SMS for day-of

**Pricing:**
```
Notifications Component:              10,000 SEK/month
Email (4,000 @ 0.10 SEK):                 400 SEK/month
SMS (2,000 @ 0.50 SEK):                 1,000 SEK/month
────────────────────────────────────────────────
Total Monthly:                          11,400 SEK
Annual:                                136,800 SEK
```

**vs. Manual Calls:** 33,200 SEK/month saved
**Annual Savings:** 398,400 SEK (minus solution cost) = **261,600 SEK net savings**

#### **Scenario 2: Utility Company - Customer Notifications**

**Profile:**
- 100,000 customers
- 200,000 emails/month (billing, service updates)
- 15,000 SMS/month (urgent notices, payment reminders)

**Pricing:**
```
Notifications Component:              15,000 SEK/month
Email (200K @ 0.05 SEK):              10,000 SEK/month
SMS (15K @ 0.40 SEK):                  6,000 SEK/month
────────────────────────────────────────────────
Total Monthly:                         31,000 SEK
Annual:                               372,000 SEK
```

**Onboarding:** 75,000 SEK (one-time)
**First Year Total:** 447,000 SEK

#### **Scenario 3: E-Commerce - Transactional Notifications**

**Profile:**
- 50,000 orders/month
- 4 notifications per order (confirmation, shipped, out for delivery, delivered)
- Email primary, SMS for delivery notifications

**Pricing:**
```
Notifications Component:              15,000 SEK/month
Email (150K @ 0.08 SEK):              12,000 SEK/month
SMS (50K @ 0.40 SEK):                 20,000 SEK/month
────────────────────────────────────────────────
Total Monthly:                         47,000 SEK
Annual:                               564,000 SEK
```

---

## 8. Demo Scenarios

### 8.1. Multi-Channel Notification Demo

**Duration:** 10 minutes

**Objectives:**
- Show event-triggered notifications
- Demonstrate channel orchestration
- Highlight personalization
- Show delivery tracking

**Script:**

1. **Introduction (1 min)**
   - "Customer notifications need to be timely, personalized, and delivered through the right channel"
   - Context: "Let's look at payment reminder notifications"

2. **Notification Template (3 min)**
   - Open notification template designer
   - Show email template with personalization tokens
   - Show SMS version (shorter, urgent tone)
   - Show personalization: name, amount, due date, payment link

3. **Channel Orchestration (3 min)**
   - Set rules: Email first, SMS if not opened in 24 hours
   - Show customer channel preferences
   - Demonstrate time zone handling

4. **Trigger and Send (2 min)**
   - Trigger notification from demo event
   - Show real-time delivery: Email sent, SMS queued
   - Track delivery status

5. **Analytics (1 min)**
   - Show dashboard: delivery rates, open rates, click-through
   - Compare email vs SMS effectiveness

**Key Talking Points:**
- "Deliver through customer's preferred channel"
- "Automatic fallback ensures message is delivered"
- "Real-time tracking - know exactly what happened"
- "98% open rate for SMS vs 20% for email"

### 8.2. Appointment Reminder Demo

**Duration:** 8 minutes

**Objectives:**
- Show multi-stage reminder series
- Demonstrate confirmation capability
- Show no-show reduction impact

**Script:**

1. **Introduction (1 min)**
   - "No-shows cost businesses millions. Let's see how to reduce them."

2. **Configure Reminder Series (3 min)**
   - Set up 3-stage reminder: 1 week, 1 day, 1 hour
   - Email for advance, SMS for day-of
   - Add confirmation button to email
   - Add "add to calendar" link

3. **Customer Experience (2 min)**
   - Show customer receiving email reminder
   - Click to confirm appointment
   - Receive confirmation acknowledgment
   - Add to calendar

4. **Analytics (2 min)**
   - Show confirmation rates
   - Show no-show reduction metrics
   - Calculate revenue impact

**Key Talking Points:**
- "Multi-stage reminders catch customers at the right time"
- "Confirmation buttons reduce no-shows by 40-60%"
- "SMS for day-of has 98% read rate"
- "Easy calendar integration improves attendance"

---

## 9. Common Objections

### 9.1. "We already use [email provider] - why do we need this?"

**Response:**
- "That's great that you have email covered. Do you also send SMS notifications?"
- **Discovery questions:**
  - Do your customers prefer email or do some want SMS?
  - Can you automatically fall back to SMS if email isn't opened?
  - Do you have unified tracking across email and SMS?
  - How do you manage customer channel preferences?
- "Our solution provides unified multi-channel orchestration that most email providers don't offer."

**Differentiation:**
- Single platform for all channels
- Intelligent orchestration and fallback
- Unified analytics and tracking
- Enterprise compliance features

### 9.2. "SMS is too expensive."

**Response:**
- "I understand SMS costs more than email. Let's look at the value per message."
- **Cost vs. Value:**
  - Email: 0.08 SEK, 20% open rate = 0.40 SEK per opened message
  - SMS: 0.40 SEK, 98% open rate = 0.41 SEK per opened message
  - Cost per engaged customer is virtually the same!
- "Plus, higher engagement drives real business results - more payments, fewer no-shows, better customer satisfaction."

**ROI Focus:**
- Show payment reminder example: 30% reduction in overdue = massive savings
- Show appointment reminder: 50% fewer no-shows = revenue protection
- Show urgent alert: Customer satisfaction improvement = retention

### 9.3. "How do you ensure deliverability?"

**Response:**
- "Great question - deliverability is critical. We ensure high deliverability through:"
- **Email deliverability:**
  - Dedicated IP addresses for enterprise customers
  - SPF, DKIM, DMARC authentication
  - Reputation monitoring and management
  - Bounce and complaint handling
  - 99%+ inbox delivery rate
- **SMS deliverability:**
  - Direct carrier connections (Telia, Tele2, Telenor)
  - Redundant routing for failover
  - Delivery receipt tracking
  - 98%+ delivery rate

**Evidence:**
- Show current deliverability metrics
- Provide SLA commitments
- Offer trial to prove deliverability

### 9.4. "What about GDPR compliance?"

**Response:**
- "GDPR compliance is built into our platform. Here's how we ensure compliance:"
- **Compliance features:**
  - Customer consent tracking
  - Easy opt-out/unsubscribe management
  - Preference centers (customers control channels)
  - Data retention policies
  - Audit logging of all communications
  - Swedish data residency
- "We help you comply with GDPR notification requirements while respecting customer preferences."

---

## 10. Success Metrics

### 10.1. Delivery Metrics

| Metric | Target | Industry Benchmark |
|--------|--------|-------------------|
| **Email Delivery Rate** | >99% | 95-98% |
| **SMS Delivery Rate** | >98% | 95-97% |
| **Email Open Rate** | 20-40% | 15-25% |
| **SMS Open Rate** | 95-98% | 90-95% |
| **Click-Through Rate** | 2-8% | 1-3% |

### 10.2. Business Impact Metrics

| Metric | Target Improvement | Measurement |
|--------|-------------------|-------------|
| **No-Show Reduction** | 40-60% | Appointment systems |
| **Payment Collection** | 30-40% fewer overdue | AR aging reports |
| **Support Call Reduction** | 30-50% | Call volume tracking |
| **Customer Satisfaction** | +15-25% | CSAT surveys |

### 10.3. Customer Success Metrics

| Metric | Target | How to Track |
|--------|--------|--------------|
| **Time to First Notification** | <7 days | Days from contract to first send |
| **Monthly Active Use** | >90% of months | Usage tracking |
| **Volume Growth** | 25% YoY | Year-over-year volume increase |
| **Channel Adoption** | 80% use 2+ channels | Multi-channel usage |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Sales Director | Initial version - split from combined guide |

---

**Questions or Feedback?**
Contact: sales-enablement@swedwise.com

---

*This document is for internal use by Swedwise AB sales team only. Do not distribute externally.*
