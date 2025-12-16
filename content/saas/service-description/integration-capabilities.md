---
document_id: SW-SAAS-INT-001
title: Swedwise SaaS Platform - Integration Capabilities
doc_type: guideline
version: "1.0"
status: draft
classification: internal
owner: Technical Lead
component: general
effective_date: 2025-01-15
review_date: 2026-01-15
related_documents:
  - SW-SAAS-SVC-001
---

# Swedwise SaaS Platform - Integration Capabilities

**Date:** 2025-01-15
**Version:** 1.0
**Service:** Swedwise SaaS Platform (SaaS)

---

## 1. Integration Overview

### 1.1. Purpose

This document describes the integration capabilities of Swedwise SaaS Platform, enabling customers to connect the service with their existing systems, automate workflows, and deliver personalized customer communications at scale.

### 1.2. Integration Philosophy

Swedwise SaaS Platform is built on the **OpenText Experience Cloud platform**, which provides:

- **API-first architecture**: All functionality accessible through modern REST APIs
- **Flexible integration patterns**: Support for batch, real-time, and event-driven integrations
- **Security by design**: Enterprise-grade authentication and authorization
- **Scalability**: Handle high-volume integrations with rate limiting and throttling controls
- **Developer-friendly**: Comprehensive documentation, SDKs, and sandbox environments

### 1.3. Integration Scenarios

| Scenario | Use Case | Integration Type |
|----------|----------|------------------|
| **Data Input** | Customer data, product catalogs, transaction data | Batch upload, Real-time API, Database sync |
| **Document Generation** | Invoices, statements, letters, reports | REST API trigger, Scheduled batch |
| **Notification Delivery** | Email, SMS, push notifications | REST API, Event webhooks |
| **User Provisioning** | Employee access, SSO integration | Azure AD, LDAP, SAML 2.0 |
| **System Integration** | CRM, ERP, billing systems | Pre-built connectors, Custom APIs |
| **Monitoring & Analytics** | Delivery status, performance metrics | Event webhooks, Analytics API |

---

## 2. Authentication and Authorization

### 2.1. Supported Authentication Methods

| Method | Use Case | Security Level |
|--------|----------|---------------|
| **OAuth 2.0** | API access, third-party integrations | High |
| **API Keys** | Server-to-server, batch processes | Medium-High |
| **SAML 2.0 SSO** | User authentication, web portal access | High |
| **Azure AD / Microsoft Entra ID** | Enterprise SSO, user provisioning | High |
| **Basic Auth (Legacy)** | Limited support for legacy systems | Low (deprecated) |

### 2.2. OAuth 2.0 Implementation

Swedwise SaaS Platform supports the following OAuth 2.0 flows:

#### Client Credentials Flow (Recommended for Server-to-Server)

```http
POST https://api.swedwise.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id={CLIENT_ID}
&client_secret={CLIENT_SECRET}
&scope=communications.read communications.write
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "communications.read communications.write"
}
```

#### Authorization Code Flow (For User-Context Applications)

1. **Authorization Request:**
```http
GET https://api.swedwise.com/oauth/authorize?
  response_type=code
  &client_id={CLIENT_ID}
  &redirect_uri={REDIRECT_URI}
  &scope=communications.read
  &state={RANDOM_STATE}
```

2. **Token Exchange:**
```http
POST https://api.swedwise.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code={AUTHORIZATION_CODE}
&client_id={CLIENT_ID}
&client_secret={CLIENT_SECRET}
&redirect_uri={REDIRECT_URI}
```

### 2.3. API Key Management

API keys provide a simpler authentication method for server-to-server integrations:

- **Generation**: Created through the Swedwise SaaS Platform admin portal
- **Rotation**: Keys should be rotated every 90 days (enforced via expiration)
- **Scope**: Keys can be scoped to specific tenants and operations
- **Usage**: Pass as `X-API-Key` header in requests

**Example:**
```http
GET https://api.swedwise.com/v1/documents
X-API-Key: sw_live_abc123def456ghi789
```

### 2.4. Single Sign-On (SSO)

#### Supported Identity Providers

| Provider | Protocol | Configuration Complexity |
|----------|----------|--------------------------|
| **Azure AD / Microsoft Entra ID** | SAML 2.0, OpenID Connect | Low |
| **Okta** | SAML 2.0, OpenID Connect | Low |
| **Google Workspace** | SAML 2.0 | Low |
| **Active Directory Federation Services (ADFS)** | SAML 2.0 | Medium |
| **Generic SAML 2.0** | SAML 2.0 | Medium |
| **Generic LDAP** | LDAP | Medium |

#### Azure AD Integration (Recommended)

1. **Azure AD Configuration:**
   - Register Swedwise SaaS Platform as Enterprise Application
   - Configure SAML-based sign-on
   - Assign users and groups

2. **Swedwise Configuration:**
   - Provide tenant ID and application ID
   - Configure attribute mapping
   - Enable Just-in-Time (JIT) provisioning

3. **Attribute Mapping:**

| Azure AD Attribute | Swedwise Attribute | Required |
|-------------------|-------------------|----------|
| `user.mail` | `email` | Yes |
| `user.givenname` | `first_name` | Yes |
| `user.surname` | `last_name` | Yes |
| `user.userprincipalname` | `username` | Yes |
| `user.department` | `department` | No |
| `user.jobtitle` | `role` | No |

---

## 3. REST APIs

### 3.1. API Base URL

| Environment | Base URL |
|-------------|----------|
| **Production** | `https://api.swedwise.com/v1` |
| **Sandbox** | `https://sandbox-api.swedwise.com/v1` |

### 3.2. API Versioning

- **Current Version**: v1
- **Versioning Strategy**: URL-based versioning (`/v1`, `/v2`, etc.)
- **Deprecation Policy**: 12 months notice before API version retirement
- **Backward Compatibility**: Minor updates maintain backward compatibility

### 3.3. Common Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | Yes | Bearer token or API key |
| `Content-Type` | Yes | `application/json` for request body |
| `Accept` | Recommended | `application/json` (default) or `application/xml` |
| `X-Tenant-ID` | Conditional | Required for multi-tenant operations |
| `X-Idempotency-Key` | Recommended | Prevent duplicate operations (POST/PUT) |
| `X-Request-ID` | Optional | Client-provided request tracking ID |

### 3.4. Document Generation API

#### Create Document Job

Generate documents from templates with dynamic data.

**Endpoint:** `POST /documents/jobs`

**Request:**
```json
{
  "template_id": "invoice_template_v2",
  "data_source": {
    "type": "inline",
    "records": [
      {
        "customer_id": "CUST-12345",
        "invoice_number": "INV-2025-001",
        "invoice_date": "2025-01-15",
        "amount": 15000.00,
        "currency": "SEK",
        "items": [
          {
            "description": "Professional Services",
            "quantity": 40,
            "unit_price": 375.00
          }
        ]
      }
    ]
  },
  "output_format": "pdf",
  "delivery": {
    "method": "api",
    "notifications": {
      "email": "admin@customer.com",
      "on_complete": true,
      "on_error": true
    }
  },
  "metadata": {
    "job_name": "Monthly Invoicing - January 2025",
    "reference_id": "BATCH-2025-01"
  }
}
```

**Response:**
```json
{
  "job_id": "job_7f8a9b2c3d4e5f6g",
  "status": "queued",
  "created_at": "2025-01-15T10:30:00Z",
  "estimated_completion": "2025-01-15T10:35:00Z",
  "document_count": 1,
  "_links": {
    "self": "/documents/jobs/job_7f8a9b2c3d4e5f6g",
    "status": "/documents/jobs/job_7f8a9b2c3d4e5f6g/status",
    "cancel": "/documents/jobs/job_7f8a9b2c3d4e5f6g/cancel"
  }
}
```

#### Get Job Status

**Endpoint:** `GET /documents/jobs/{job_id}`

**Response:**
```json
{
  "job_id": "job_7f8a9b2c3d4e5f6g",
  "status": "completed",
  "created_at": "2025-01-15T10:30:00Z",
  "completed_at": "2025-01-15T10:34:23Z",
  "progress": {
    "total": 1,
    "completed": 1,
    "failed": 0
  },
  "output": {
    "documents": [
      {
        "document_id": "doc_abc123",
        "format": "pdf",
        "size_bytes": 245678,
        "download_url": "https://api.swedwise.com/v1/documents/doc_abc123/download",
        "expires_at": "2025-01-22T10:34:23Z"
      }
    ]
  }
}
```

#### Batch Document Generation

For high-volume document generation, use the batch API endpoint.

**Endpoint:** `POST /documents/batch`

**Request:**
```json
{
  "template_id": "monthly_statement",
  "data_source": {
    "type": "sftp",
    "connection": {
      "host": "sftp.customer.com",
      "path": "/data/statements/2025-01.csv",
      "credentials_ref": "sftp_cred_001"
    }
  },
  "output_format": "pdf",
  "delivery": {
    "method": "sftp",
    "destination": {
      "host": "sftp.customer.com",
      "path": "/output/statements/",
      "credentials_ref": "sftp_cred_001"
    }
  },
  "options": {
    "parallel_processing": true,
    "max_workers": 10,
    "error_handling": "continue"
  }
}
```

### 3.5. Notifications API

#### Send Notification

**Endpoint:** `POST /notifications/send`

**Request (Email):**
```json
{
  "channel": "email",
  "recipients": [
    {
      "email": "customer@example.com",
      "name": "John Doe",
      "metadata": {
        "customer_id": "CUST-12345"
      }
    }
  ],
  "template_id": "payment_confirmation",
  "data": {
    "transaction_id": "TXN-789",
    "amount": "1,500 SEK",
    "date": "2025-01-15"
  },
  "options": {
    "priority": "normal",
    "tracking": true,
    "reply_to": "noreply@customer.com"
  }
}
```

**Request (SMS):**
```json
{
  "channel": "sms",
  "recipients": [
    {
      "phone": "+46701234567",
      "name": "John Doe"
    }
  ],
  "message": "Your payment of 1,500 SEK has been received. Transaction ID: TXN-789",
  "options": {
    "priority": "high",
    "delivery_receipt": true
  }
}
```

**Response:**
```json
{
  "notification_id": "notif_xyz789",
  "status": "accepted",
  "recipients": [
    {
      "recipient_id": "rcpt_001",
      "email": "customer@example.com",
      "status": "queued"
    }
  ],
  "created_at": "2025-01-15T10:30:00Z",
  "_links": {
    "status": "/notifications/notif_xyz789/status"
  }
}
```

#### Get Notification Status

**Endpoint:** `GET /notifications/{notification_id}/status`

**Response:**
```json
{
  "notification_id": "notif_xyz789",
  "status": "delivered",
  "channel": "email",
  "recipients": [
    {
      "recipient_id": "rcpt_001",
      "email": "customer@example.com",
      "status": "delivered",
      "delivered_at": "2025-01-15T10:30:45Z",
      "opened_at": "2025-01-15T10:42:13Z",
      "clicked": false
    }
  ],
  "tracking": {
    "sent": 1,
    "delivered": 1,
    "opened": 1,
    "clicked": 0,
    "bounced": 0,
    "failed": 0
  }
}
```

### 3.6. Template Management API

#### List Templates

**Endpoint:** `GET /templates`

**Response:**
```json
{
  "templates": [
    {
      "template_id": "invoice_template_v2",
      "name": "Monthly Invoice",
      "description": "Standard invoice template with line items",
      "type": "document",
      "format": ["pdf", "html"],
      "version": "2.1",
      "status": "active",
      "created_at": "2024-11-01T08:00:00Z",
      "updated_at": "2025-01-10T14:22:00Z"
    }
  ],
  "pagination": {
    "total": 45,
    "page": 1,
    "per_page": 20
  }
}
```

#### Get Template Details

**Endpoint:** `GET /templates/{template_id}`

#### Create/Update Template

**Endpoint:** `POST /templates` or `PUT /templates/{template_id}`

---

## 4. Data Integration Patterns

### 4.1. Batch Data Upload

#### SFTP/FTPS Integration

For high-volume batch processing, SFTP is the recommended method.

**Setup Requirements:**
- Customer provides SFTP credentials or Swedwise provides managed SFTP
- Agreed folder structure and file naming convention
- Data format specification (CSV, XML, JSON)

**Example Folder Structure:**
```
/inbound/
  /documents/
    invoice_data_2025-01-15.csv
    statement_data_2025-01-15.csv
  /notifications/
    email_batch_2025-01-15.csv

/outbound/
  /documents/
    /2025-01-15/
      invoice_001.pdf
      invoice_002.pdf
  /status/
    processing_status_2025-01-15.json
```

**CSV Format Example:**
```csv
customer_id,email,invoice_number,amount,currency,due_date
CUST-001,customer1@example.com,INV-2025-001,15000.00,SEK,2025-02-15
CUST-002,customer2@example.com,INV-2025-002,8500.00,SEK,2025-02-15
```

#### API-Based Batch Upload

**Endpoint:** `POST /data/batch-upload`

**Request:**
```json
{
  "dataset_id": "monthly_invoices",
  "format": "json",
  "data": [
    {
      "customer_id": "CUST-001",
      "email": "customer1@example.com",
      "invoice_number": "INV-2025-001",
      "amount": 15000.00,
      "currency": "SEK"
    }
  ],
  "validation": {
    "strict_mode": true,
    "error_threshold": 0.05
  }
}
```

### 4.2. Real-Time Data Integration

#### REST API Push

Customer systems push data to Swedwise SaaS Platform in real-time.

**Use Cases:**
- Immediate document generation (e.g., contract signing)
- Real-time notifications (e.g., transaction alerts)
- Event-driven workflows

**Example: Generate Invoice on Order Completion**

```http
POST https://api.swedwise.com/v1/documents/generate
Authorization: Bearer {ACCESS_TOKEN}
Content-Type: application/json

{
  "template_id": "invoice_template_v2",
  "trigger": "immediate",
  "data": { ... },
  "delivery": {
    "method": "email",
    "recipient": "customer@example.com"
  }
}
```

#### Webhook Consumption

Swedwise SaaS Platform can consume webhooks from customer systems.

**Configuration:**
1. Customer provides webhook endpoint URL
2. Swedwise registers webhook handler
3. Swedwise sends test event
4. Customer acknowledges receipt

**Webhook Security:**
- HTTPS required
- HMAC signature validation
- IP whitelist (optional)

### 4.3. Database Integration (Optional Add-On)

For customers requiring direct database connectivity:

**Supported Databases:**
- Microsoft SQL Server
- PostgreSQL
- Oracle Database
- MySQL / MariaDB

**Integration Methods:**
- **JDBC/ODBC**: Direct database queries
- **Change Data Capture (CDC)**: Real-time data synchronization
- **Database Views**: Read-only access to specific data

**Security Requirements:**
- VPN or private network connectivity
- Read-only database credentials
- IP whitelisting

---

## 5. Pre-Built Connectors and Adapters

### 5.1. CRM Systems

| System | Integration Type | Capabilities |
|--------|------------------|--------------|
| **Salesforce** | Native connector | Contact sync, campaign integration, document generation |
| **Microsoft Dynamics 365** | Native connector | Customer data sync, document templates, email integration |
| **HubSpot** | REST API | Contact lists, email notifications, campaign tracking |

### 5.2. ERP Systems

| System | Integration Type | Capabilities |
|--------|------------------|--------------|
| **SAP S/4HANA** | IDoc / REST API | Invoice generation, customer data, financial documents |
| **Microsoft Dynamics 365 F&O** | OData / REST API | Order documents, invoices, customer communications |
| **NetSuite** | SuiteTalk API | Transaction documents, customer records |

### 5.3. Identity Providers

| Provider | Protocol | User Provisioning | SSO |
|----------|----------|------------------|-----|
| **Azure AD / Microsoft Entra ID** | SAML 2.0, OIDC | SCIM 2.0 | Yes |
| **Okta** | SAML 2.0, OIDC | SCIM 2.0 | Yes |
| **Google Workspace** | SAML 2.0 | API | Yes |

### 5.4. File Storage Systems

| System | Integration Type | Use Case |
|--------|------------------|----------|
| **Azure Blob Storage** | Native SDK | Document storage, batch input/output |
| **AWS S3** | Native SDK | Document archive, data lake integration |
| **SharePoint Online** | Microsoft Graph API | Document library integration |
| **OneDrive for Business** | Microsoft Graph API | Personal document storage |

---

## 6. Event-Driven Integration (Webhooks)

### 6.1. Webhook Overview

Swedwise SaaS Platform can send real-time event notifications to customer systems via webhooks.

**Supported Events:**
- Document generation completed
- Notification delivered
- Notification opened/clicked
- Template updated
- Job failed
- User provisioned

### 6.2. Webhook Configuration

**Setup via API:**
```http
POST https://api.swedwise.com/v1/webhooks
Authorization: Bearer {ACCESS_TOKEN}
Content-Type: application/json

{
  "url": "https://customer.com/webhooks/swedwise",
  "events": [
    "document.generated",
    "notification.delivered",
    "notification.opened"
  ],
  "secret": "your_webhook_secret",
  "active": true
}
```

**Response:**
```json
{
  "webhook_id": "webhook_123abc",
  "url": "https://customer.com/webhooks/swedwise",
  "events": ["document.generated", "notification.delivered", "notification.opened"],
  "status": "active",
  "created_at": "2025-01-15T10:00:00Z"
}
```

### 6.3. Webhook Payload Examples

#### Document Generated Event

```json
{
  "event_id": "evt_abc123",
  "event_type": "document.generated",
  "timestamp": "2025-01-15T10:34:23Z",
  "data": {
    "job_id": "job_7f8a9b2c3d4e5f6g",
    "document_id": "doc_abc123",
    "template_id": "invoice_template_v2",
    "status": "completed",
    "format": "pdf",
    "size_bytes": 245678,
    "download_url": "https://api.swedwise.com/v1/documents/doc_abc123/download",
    "metadata": {
      "customer_id": "CUST-12345",
      "invoice_number": "INV-2025-001"
    }
  }
}
```

#### Notification Delivered Event

```json
{
  "event_id": "evt_def456",
  "event_type": "notification.delivered",
  "timestamp": "2025-01-15T10:30:45Z",
  "data": {
    "notification_id": "notif_xyz789",
    "channel": "email",
    "recipient": {
      "email": "customer@example.com",
      "name": "John Doe"
    },
    "status": "delivered",
    "delivered_at": "2025-01-15T10:30:45Z"
  }
}
```

### 6.4. Webhook Security

#### HMAC Signature Verification

All webhook payloads include an HMAC signature for verification.

**Header:** `X-Swedwise-Signature`

**Verification Example (Python):**
```python
import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(expected_signature, signature)
```

**Verification Example (Node.js):**
```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(signature)
    );
}
```

#### Retry Policy

- **Initial Attempt**: Immediate
- **Retry 1**: After 1 minute
- **Retry 2**: After 5 minutes
- **Retry 3**: After 30 minutes
- **Retry 4**: After 2 hours
- **Retry 5**: After 6 hours

**Failure Conditions:**
- HTTP status code not 2xx
- Connection timeout (30 seconds)
- No response

After 5 failed attempts, the webhook is marked as failed and notifications are sent to the customer admin.

---

## 7. Rate Limits and Throttling

### 7.1. Rate Limit Tiers

| Tier | Requests/Minute | Requests/Hour | Requests/Day |
|------|-----------------|---------------|--------------|
| **Standard** | 100 | 5,000 | 100,000 |
| **Professional** | 300 | 15,000 | 300,000 |
| **Enterprise** | 1,000 | 50,000 | 1,000,000 |
| **Custom** | Negotiable | Negotiable | Negotiable |

### 7.2. Rate Limit Headers

All API responses include rate limit information:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1705318200
X-RateLimit-Tier: Standard
```

### 7.3. Rate Limit Exceeded Response

**Status Code:** `429 Too Many Requests`

**Response:**
```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "API rate limit exceeded. Please retry after 2025-01-15T10:30:00Z",
    "retry_after": 45,
    "documentation_url": "https://docs.swedwise.com/api/rate-limits"
  }
}
```

### 7.4. Best Practices

- **Implement exponential backoff** for retries
- **Use batch endpoints** for bulk operations
- **Cache responses** where appropriate
- **Monitor rate limit headers** to avoid hitting limits
- **Request tier upgrade** if consistently hitting limits

---

## 8. Integration Security Requirements

### 8.1. Network Security

| Requirement | Implementation |
|-------------|---------------|
| **TLS/HTTPS** | Mandatory (TLS 1.2 or higher) |
| **IP Whitelisting** | Optional for customer on-premise integrations |
| **VPN** | Required for database integrations |
| **Firewall Rules** | Customer must allow outbound HTTPS to Swedwise APIs |

### 8.2. Credential Management

- **Credential Rotation**: Required every 90 days for API keys
- **Secure Storage**: Credentials must be stored in secure vaults (Azure Key Vault, AWS Secrets Manager, etc.)
- **No Hardcoding**: Credentials must not be hardcoded in source code
- **Least Privilege**: API keys and OAuth clients should have minimum required permissions

### 8.3. Data Security

| Requirement | Description |
|-------------|-------------|
| **Encryption in Transit** | TLS 1.2+ for all API communications |
| **Encryption at Rest** | AES-256 encryption for stored documents and data |
| **Data Classification** | Customers must classify data per Swedwise guidelines |
| **PII Handling** | Personal data must comply with GDPR requirements |
| **Data Retention** | Configurable per customer policy (default 7 days for documents) |

### 8.4. Audit and Logging

All API requests are logged for security and compliance purposes:

- **Request ID**: Unique identifier for each request
- **Timestamp**: ISO 8601 format with timezone
- **User/Client**: Authenticated identity
- **Action**: API endpoint and method
- **Result**: Success or failure
- **IP Address**: Originating IP (anonymized per GDPR)

**Log Retention**: 12 months (configurable for Enterprise customers)

---

## 9. Sample Integration Scenarios

### 9.1. Public Sector: Municipal Invoicing

**Customer:** Municipality with 50,000 citizens
**Use Case:** Monthly utility billing with multi-channel delivery

**Architecture:**

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│   Municipal     │         │    Swedwise      │         │   Citizen       │
│   Billing       │────────▶│  Communications  │────────▶│   (Email/Mail)  │
│   System (SAP)  │  Batch  │                  │ Multi-  │                 │
└─────────────────┘  Upload │                  │ Channel └─────────────────┘
                             └──────────────────┘
```

**Integration Steps:**

1. **Nightly Batch Extract** (00:00 CET)
   - SAP exports invoice data to CSV
   - Data includes customer info, usage, amounts
   - File uploaded to SFTP: `/inbound/invoices/YYYY-MM-DD.csv`

2. **Document Generation** (01:00 - 03:00 CET)
   - Swedwise reads CSV from SFTP
   - Generates PDF invoices using template
   - Stores documents temporarily

3. **Multi-Channel Delivery** (06:00 CET)
   - Email delivery for opt-in customers (70%)
   - SFTP export for print vendor (30%)
   - SMS reminders for overdue accounts

4. **Status Reporting** (07:00 CET)
   - Delivery status exported to SFTP
   - Webhook notifications for failures
   - Dashboard updated with metrics

**Technical Implementation:**

```json
{
  "integration_type": "batch_sftp",
  "schedule": {
    "extract": "0 0 * * *",
    "process": "0 1 * * *",
    "deliver": "0 6 * * *"
  },
  "data_format": "csv",
  "template": "municipal_invoice_template",
  "delivery_channels": ["email", "print", "sms"]
}
```

### 9.2. Financial Services: Real-Time Transaction Notifications

**Customer:** Digital bank with 200,000 customers
**Use Case:** Instant notifications for card transactions

**Architecture:**

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│   Core Banking  │  REST   │    Swedwise      │  Push   │   Mobile App    │
│   System        │────────▶│  Notifications   │────────▶│   + Email       │
└─────────────────┘  API    └──────────────────┘         └─────────────────┘
       │                              │
       │                              │
       └──────────── Webhook ─────────┘
         (Delivery Status)
```

**Integration Steps:**

1. **Transaction Event** (Real-time)
   - Core banking system processes card transaction
   - Triggers webhook to internal API gateway
   - API gateway validates and enriches data

2. **Notification Request** (< 1 second)
   ```http
   POST https://api.swedwise.com/v1/notifications/send
   Authorization: Bearer {TOKEN}

   {
     "channel": "push",
     "fallback": "sms",
     "recipient": {
       "customer_id": "CUST-12345",
       "push_token": "device_token_abc123",
       "phone": "+46701234567"
     },
     "template_id": "transaction_alert",
     "data": {
       "amount": "125.50 SEK",
       "merchant": "ICA Supermarket",
       "timestamp": "2025-01-15T14:23:00Z",
       "balance": "8,542.30 SEK"
     },
     "priority": "high"
   }
   ```

3. **Delivery** (< 2 seconds)
   - Push notification sent to mobile app
   - If push fails, SMS sent as fallback
   - Email summary sent end-of-day

4. **Status Callback** (Real-time)
   ```http
   POST https://bank.example.com/webhooks/swedwise
   X-Swedwise-Signature: {HMAC_SIGNATURE}

   {
     "event_type": "notification.delivered",
     "notification_id": "notif_xyz789",
     "status": "delivered",
     "channel": "push",
     "timestamp": "2025-01-15T14:23:02Z"
   }
   ```

**Technical Implementation:**

```javascript
// Bank's API Gateway (Node.js example)
app.post('/api/transactions', async (req, res) => {
    const transaction = req.body;

    // Send to Swedwise asynchronously
    await swedwiseClient.notifications.send({
        channel: 'push',
        fallback: 'sms',
        recipient: {
            customer_id: transaction.customer_id,
            push_token: await getPushToken(transaction.customer_id),
            phone: await getPhone(transaction.customer_id)
        },
        template_id: 'transaction_alert',
        data: {
            amount: `${transaction.amount} ${transaction.currency}`,
            merchant: transaction.merchant_name,
            timestamp: transaction.timestamp,
            balance: await getBalance(transaction.customer_id)
        },
        priority: 'high'
    });

    res.status(202).send({ status: 'accepted' });
});
```

### 9.3. Utilities: Monthly Statement Generation with Analytics

**Customer:** Energy provider with 150,000 customers
**Use Case:** Monthly energy statements with usage analytics

**Architecture:**

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│   Billing       │  SFTP   │    Swedwise      │  Email  │   Customer      │
│   System        │────────▶│  Communications  │────────▶│   Portal        │
└─────────────────┘  Batch  │                  │         └─────────────────┘
                             │                  │
                             │  ┌────────────┐  │
                             └─▶│ Analytics  │◀─┘
                                │ Dashboard  │
                                └────────────┘
```

**Integration Steps:**

1. **Data Preparation** (Day 1 of month)
   - Extract meter readings, usage data, rates
   - Calculate invoices and usage analytics
   - Export to XML format

2. **Document Generation** (Day 2-3)
   - Generate personalized statements with charts
   - Include usage comparison (YoY, MoM)
   - Add energy-saving recommendations

3. **Delivery** (Day 5)
   - Email with PDF attachment
   - SMS with payment link
   - Upload to customer portal

4. **Analytics** (Ongoing)
   - Track email open rates
   - Monitor payment conversion
   - Analyze customer engagement

**Data Format (XML Sample):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<statements>
  <statement>
    <customer_id>CUST-12345</customer_id>
    <email>customer@example.com</email>
    <phone>+46701234567</phone>
    <period>2025-01</period>
    <usage>
      <current_month>450</current_month>
      <previous_month>520</previous_month>
      <same_month_last_year>480</same_month_last_year>
      <unit>kWh</unit>
    </usage>
    <charges>
      <energy_cost>675.00</energy_cost>
      <distribution_cost>220.00</distribution_cost>
      <taxes>223.75</taxes>
      <total>1118.75</total>
      <currency>SEK</currency>
    </charges>
    <payment>
      <due_date>2025-02-15</due_date>
      <payment_link>https://portal.energyco.se/pay/123456</payment_link>
    </payment>
  </statement>
</statements>
```

---

## 10. Developer Resources

### 10.1. Documentation and Support

| Resource | URL | Description |
|----------|-----|-------------|
| **API Reference** | docs.swedwise.com/api | Complete API documentation |
| **Developer Portal** | developers.swedwise.com | Sandbox, API keys, tutorials |
| **Integration Guides** | docs.swedwise.com/guides | Step-by-step integration tutorials |
| **SDK Downloads** | github.com/swedwise/sdk | Client libraries and SDKs |
| **Status Page** | status.swedwise.com | Real-time service status |
| **Community Forum** | community.swedwise.com | Developer discussions |

### 10.2. SDKs and Libraries

| Language | Repository | Package Manager |
|----------|-----------|----------------|
| **Python** | github.com/swedwise/python-sdk | `pip install swedwise-sdk` |
| **Node.js** | github.com/swedwise/node-sdk | `npm install @swedwise/sdk` |
| **C# / .NET** | github.com/swedwise/dotnet-sdk | `Install-Package Swedwise.SDK` |
| **Java** | github.com/swedwise/java-sdk | Maven / Gradle |
| **PHP** | github.com/swedwise/php-sdk | Composer |

### 10.3. Sandbox Environment

- **Access**: Free for all customers
- **Data**: Isolated test environment
- **Reset**: Self-service data reset available
- **Rate Limits**: Same as production tier
- **Support**: Community forum support

**Getting Started:**
1. Register at developers.swedwise.com
2. Create sandbox API keys
3. Review API documentation
4. Test integration in sandbox
5. Request production credentials

### 10.4. Testing Tools

- **Postman Collection**: Import pre-configured API requests
- **Webhook Testing**: Webhook.site integration for testing callbacks
- **Mock Data Generator**: Generate test data for document templates
- **Validation Tools**: Schema validators for data formats

### 10.5. Support Channels

| Channel | Response Time | Availability |
|---------|--------------|--------------|
| **Technical Support Email** | 8 business hours | 24/7 |
| **Developer Forum** | Community-driven | 24/7 |
| **Dedicated Support (Enterprise)** | 1 business hour | Business hours |
| **Emergency Hotline (Enterprise)** | 15 minutes | 24/7 |

---

## 11. Compliance and Governance

### 11.1. GDPR Compliance

| Requirement | Implementation |
|-------------|---------------|
| **Data Processing Agreement** | Required for all customers |
| **Data Subject Rights** | API endpoints for access, deletion, portability |
| **Consent Management** | Customer responsibility for obtaining consent |
| **Data Retention** | Configurable retention policies |
| **Data Residency** | Swedish data center (EU/EEA) |

### 11.2. ISO 27001 Alignment

All integrations must comply with Swedwise's Information Security Management System:

- **Access Control**: Least privilege principle
- **Encryption**: TLS 1.2+ for transit, AES-256 for rest
- **Audit Logging**: All API calls logged
- **Incident Response**: 15-minute response for critical security incidents

### 11.3. API Deprecation Policy

- **Notice Period**: 12 months minimum
- **Migration Support**: Documentation and support provided
- **Versioning**: Parallel version support during migration
- **Breaking Changes**: Only in major version updates

---

## 12. Troubleshooting and FAQ

### 12.1. Common Integration Issues

| Issue | Cause | Resolution |
|-------|-------|------------|
| **401 Unauthorized** | Invalid or expired token | Refresh OAuth token or regenerate API key |
| **429 Rate Limit** | Too many requests | Implement exponential backoff, upgrade tier |
| **500 Server Error** | Service unavailable | Check status.swedwise.com, retry with backoff |
| **Webhook not received** | Firewall blocking | Whitelist Swedwise IP ranges |
| **Document generation timeout** | Large batch size | Split into smaller batches, use async processing |

### 12.2. Frequently Asked Questions

**Q: Can I use Swedwise SaaS Platform APIs from mobile apps?**
A: Yes, but we recommend using a backend proxy to protect API credentials. Mobile apps should authenticate users via OAuth and call your backend, which then calls Swedwise APIs.

**Q: What is the maximum file size for document attachments?**
A: 50 MB per document. For larger documents, contact support for alternatives.

**Q: How long are generated documents stored?**
A: 7 days by default. Enterprise customers can configure longer retention periods.

**Q: Can I test integrations without affecting production?**
A: Yes, use the sandbox environment at sandbox-api.swedwise.com with separate credentials.

**Q: Do you support SOAP APIs?**
A: Legacy SOAP endpoints are available for specific use cases (e.g., SAP integration) but REST APIs are recommended for new integrations.

**Q: How do I handle webhook delivery failures?**
A: Implement idempotent webhook handlers and use the event ID to prevent duplicate processing. Check webhook logs in the admin portal for failed deliveries.

**Q: Can I integrate with on-premise systems?**
A: Yes, we support VPN connectivity and on-premise integration components (optional add-on service).

---

## 13. Roadmap and Future Capabilities

### 13.1. Planned Enhancements (Q1-Q2 2025)

- **GraphQL API**: Alternative to REST for flexible data queries
- **Server-Sent Events (SSE)**: Real-time updates without webhooks
- **Expanded Connectors**: Salesforce Marketing Cloud, Adobe Experience Manager
- **Advanced Analytics API**: Custom reporting and business intelligence
- **AI-Powered Personalization**: Dynamic content optimization

### 13.2. Customer Requests

We actively incorporate customer feedback into our roadmap. Submit feature requests at developers.swedwise.com/feedback.

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Technical Lead | Initial version |

---

## Related Documents

- **SW-SAAS-SVC-001**: Swedwise SaaS Platform Service Description
- **SW-ISMS-POL-001**: Information Security Policy
- **SW-ISMS-PRO-003**: Access Control Procedure
- **SW-QMS-PRO-005**: Supplier Management Procedure

---

## Contact Information

| Department | Contact |
|------------|---------|
| **Integration Support** | integration-support@swedwise.com |
| **Technical Support** | support@swedwise.com |
| **Sales** | sales@swedwise.com |
| **Developer Relations** | developers@swedwise.com |

**Phone:** +46 54 17 11 10
**Address:** Swedwise AB, Karlstad, Sweden
**Web:** www.swedwise.com

---

*This document is confidential and intended for use by Swedwise AB customers and partners. Unauthorized distribution is prohibited.*
