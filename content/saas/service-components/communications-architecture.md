---
document_id: SW-SAAS-ARCH-COMP-001
title: Communications Technical Architecture Addendum
doc_type: guideline
version: "1.0"
status: draft
classification: confidential
owner: Technical Lead
component: communications
parent_document: SW-SAAS-ARCH-001
effective_date: 2025-01-15
review_date: 2026-01-15
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-SAAS-ARCH-001
  - SW-SAAS-SVC-001
  - SW-SAAS-COMP-001
---

# Communications Technical Architecture Addendum

**Document ID:** SW-SAAS-ARCH-COMP-001
**Version:** 1.0
**Effective Date:** 2025-01-15
**Parent Document:** SW-SAAS-ARCH-001 (Platform Technical Architecture)

---

## 1. Addendum Overview

### 1.1. Purpose

This addendum provides **component-specific technical architecture** for the **Swedwise Communications** service component, powered by OpenText Communications (Exstream). It supplements the main platform architecture document (SW-SAAS-ARCH-001) with:

- Communications-specific pod configurations
- Document generation pipeline architecture
- Template management and storage
- Component-specific APIs and integration patterns
- Performance tuning and optimization
- Monitoring, metrics, and alerting

### 1.2. Service Component Overview

| Attribute | Value |
|-----------|-------|
| **Component Name** | Swedwise Communications |
| **Technology** | OpenText Communications (Exstream) v24.x |
| **Purpose** | High-volume document composition and generation |
| **Output Formats** | PDF, HTML, RTF, PostScript, PCL, AFP |
| **Integration** | REST API, Batch processing, SFTP |

### 1.3. Relationship to Platform Architecture

This component operates within the Swedwise SaaS Platform as defined in SW-SAAS-ARCH-001:

- Uses platform authentication and authorization
- Leverages platform database (PostgreSQL) for tenant data
- Uses platform object storage for templates and output
- Monitored via platform monitoring stack (Prometheus/Grafana)
- Follows platform multi-tenancy isolation model

---

## 2. Component Architecture

### 2.1. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    COMMUNICATIONS SERVICE COMPONENT                      │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      API LAYER                                    │  │
│  │                                                                   │  │
│  │  ┌─────────────────┐    ┌─────────────────┐                     │  │
│  │  │  Communications │    │  Designer       │                     │  │
│  │  │  REST API       │    │  Web Interface  │                     │  │
│  │  │  (Kong/NGINX)   │    │                 │                     │  │
│  │  └────────┬────────┘    └────────┬────────┘                     │  │
│  └───────────┼──────────────────────┼────────────────────────────────┘  │
│              │                      │                                    │
│  ┌───────────▼──────────────────────▼────────────────────────────────┐  │
│  │                   APPLICATION LAYER                                │  │
│  │                                                                   │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │  │
│  │  │  Exstream       │  │  Exstream       │  │  Batch          │  │  │
│  │  │  Generation     │  │  Designer       │  │  Processor      │  │  │
│  │  │  Engine         │  │  Service        │  │  Workers        │  │  │
│  │  │                 │  │                 │  │                 │  │  │
│  │  │  (3+ pods)      │  │  (2+ pods)      │  │  (2+ pods)      │  │  │
│  │  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘  │  │
│  └───────────┼──────────────────────┼──────────────────┼─────────────┘  │
│              │                      │                  │                 │
│  ┌───────────▼──────────────────────▼──────────────────▼─────────────┐  │
│  │                    DATA LAYER                                      │  │
│  │                                                                   │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │  │
│  │  │ PostgreSQL  │  │ Object      │  │ Message     │              │  │
│  │  │ (Tenant DB) │  │ Storage     │  │ Queue       │              │  │
│  │  │             │  │             │  │ (RabbitMQ)  │              │  │
│  │  │ - Templates │  │ - Assets    │  │             │              │  │
│  │  │ - Jobs      │  │ - Output    │  │ - Job Queue │              │  │
│  │  │ - Audit     │  │ - Archive   │  │ - Batch Q   │              │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘              │  │
│  └────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.2. Pod Configuration

| Pod Type | Replicas | Resources | Purpose |
|----------|----------|-----------|---------|
| **Exstream API** | 3+ | 4 CPU, 16 GB RAM | Document generation REST API |
| **Exstream Designer** | 2+ | 2 CPU, 8 GB RAM | Template designer web interface |
| **Batch Processor** | 2+ | 4 CPU, 16 GB RAM | Batch document generation |
| **Template Cache** | 2+ | 2 CPU, 4 GB RAM | Template caching service |

**Resource Scaling:**

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: exstream-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: exstream-api
  minReplicas: 3
  maxReplicas: 20
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
        name: exstream_job_queue_depth
      target:
        type: AverageValue
        averageValue: "50"
```

### 2.3. Document Generation Pipeline

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    DOCUMENT GENERATION PIPELINE                          │
│                                                                          │
│  1. Request          2. Validation       3. Queue                       │
│  ┌──────────┐       ┌──────────┐        ┌──────────┐                   │
│  │  API     │──────▶│  Schema  │───────▶│  Job     │                   │
│  │  Request │       │  Valid.  │        │  Queue   │                   │
│  └──────────┘       └──────────┘        └────┬─────┘                   │
│                                               │                          │
│  4. Processing                                ▼                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      WORKER POOL                                  │  │
│  │                                                                   │  │
│  │  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐         │  │
│  │  │ Worker  │   │ Worker  │   │ Worker  │   │ Worker  │         │  │
│  │  │    1    │   │    2    │   │    3    │   │   ...   │         │  │
│  │  └────┬────┘   └────┬────┘   └────┬────┘   └────┬────┘         │  │
│  │       │             │             │             │                │  │
│  │       └─────────────┴─────────────┴─────────────┘                │  │
│  │                           │                                      │  │
│  └───────────────────────────┼──────────────────────────────────────┘  │
│                              │                                          │
│  5. Template Load     6. Data Merge      7. Render                     │
│  ┌──────────┐        ┌──────────┐       ┌──────────┐                  │
│  │ Template │───────▶│  Data    │──────▶│  Output  │                  │
│  │  Cache   │        │  Merge   │       │  Render  │                  │
│  └──────────┘        └──────────┘       └────┬─────┘                  │
│                                               │                          │
│  8. Output Storage    9. Notification                                   │
│  ┌──────────┐        ┌──────────┐                                      │
│  │  S3      │───────▶│  Webhook │                                      │
│  │  Upload  │        │  /Status │                                      │
│  └──────────┘        └──────────┘                                      │
└─────────────────────────────────────────────────────────────────────────┘
```

**Pipeline Stages:**

| Stage | Description | Typical Duration |
|-------|-------------|------------------|
| **1. Request** | API receives generation request | < 10 ms |
| **2. Validation** | Schema validation, tenant verification | < 50 ms |
| **3. Queue** | Job queued in RabbitMQ | < 10 ms |
| **4. Processing** | Worker picks up job | 0-60 sec (queue wait) |
| **5. Template Load** | Load template from cache or storage | < 500 ms |
| **6. Data Merge** | Merge customer data with template | 100 ms - 2 sec |
| **7. Render** | Generate output format (PDF, etc.) | 500 ms - 10 sec |
| **8. Storage** | Upload to S3 | 100 ms - 1 sec |
| **9. Notification** | Webhook/status update | < 50 ms |

**Total p95 latency target:** < 5 seconds (single document)

---

## 3. Template Management

### 3.1. Template Storage Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TEMPLATE STORAGE                                      │
│                                                                          │
│  Object Storage (S3-compatible)                                         │
│  └── /tenants/                                                          │
│       └── {tenant-id}/                                                  │
│            └── templates/                                               │
│                 ├── production/                                         │
│                 │    ├── invoice_v1.ptx         (template package)     │
│                 │    ├── invoice_v2.ptx                                │
│                 │    ├── statement_v1.ptx                              │
│                 │    └── ...                                           │
│                 ├── staging/                                           │
│                 │    └── ...                                           │
│                 └── assets/                                            │
│                      ├── logos/                                        │
│                      ├── fonts/                                        │
│                      └── images/                                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.2. Template Package Structure

Each template is packaged as a `.ptx` file containing:

```
template_v1.ptx/
├── template.xml           # Main template definition
├── data_schema.xsd        # Expected data format
├── resources/
│   ├── fonts/            # Embedded fonts
│   ├── images/           # Embedded images
│   └── styles.css        # Style definitions
├── outputs/
│   ├── pdf_settings.xml  # PDF output configuration
│   ├── html_settings.xml # HTML output configuration
│   └── ...
└── metadata.json          # Version, author, dependencies
```

### 3.3. Template Caching

**Cache Architecture:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TEMPLATE CACHE LAYER                                  │
│                                                                          │
│  Layer 1: In-Memory (per pod)                                           │
│  ├── Hot templates (LRU, 1 GB)                                         │
│  ├── TTL: 5 minutes                                                    │
│  └── Eviction: LRU when full                                           │
│                                                                          │
│  Layer 2: Redis Cluster                                                 │
│  ├── Compiled templates (shared)                                       │
│  ├── TTL: 1 hour                                                       │
│  └── Invalidation: On template update                                  │
│                                                                          │
│  Layer 3: Object Storage (S3)                                          │
│  ├── Source templates (permanent)                                      │
│  ├── Versioned storage                                                 │
│  └── Cross-region replication                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cache Metrics:**

| Metric | Target |
|--------|--------|
| L1 Cache Hit Rate | > 80% |
| L2 Cache Hit Rate | > 95% |
| Template Load Time (cache hit) | < 100 ms |
| Template Load Time (cache miss) | < 2 sec |

---

## 4. API Specifications

### 4.1. Document Generation API

**Endpoint:** `POST /api/v1/communications/documents/generate`

**Request:**
```json
{
  "template_id": "invoice_v2",
  "output_format": "pdf",
  "data": {
    "invoice": {
      "number": "INV-2024-001",
      "date": "2024-01-15",
      "customer": {
        "name": "Acme Corp",
        "address": "123 Main St"
      },
      "items": [
        {
          "description": "Service A",
          "quantity": 10,
          "unit_price": 100.00
        }
      ],
      "total": 1000.00
    }
  },
  "options": {
    "return_type": "url",
    "expire_hours": 24,
    "pdf_options": {
      "pdf_a": true,
      "compress": true
    }
  }
}
```

**Response:**
```json
{
  "job_id": "job_abc123xyz",
  "status": "completed",
  "document": {
    "id": "doc_456def",
    "url": "https://api.swedwise.com/v1/documents/doc_456def/download",
    "expires_at": "2024-01-16T10:00:00Z",
    "format": "pdf",
    "pages": 3,
    "size_bytes": 45678
  },
  "processing_time_ms": 1234,
  "template_version": "2.1.0"
}
```

### 4.2. Batch Generation API

**Endpoint:** `POST /api/v1/communications/documents/batch`

**Request:**
```json
{
  "template_id": "statement_v1",
  "output_format": "pdf",
  "batch_data": [
    { "customer_id": "CUST001", "period": "2024-01" },
    { "customer_id": "CUST002", "period": "2024-01" },
    ...
  ],
  "options": {
    "priority": "normal",
    "notify_webhook": "https://customer.com/webhooks/batch-complete",
    "output_naming": "{customer_id}_{period}.pdf"
  }
}
```

**Response:**
```json
{
  "batch_id": "batch_xyz789",
  "status": "processing",
  "total_documents": 1500,
  "completed": 0,
  "failed": 0,
  "estimated_completion": "2024-01-15T14:30:00Z"
}
```

### 4.3. Template Management API

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/communications/templates` | GET | List templates |
| `/api/v1/communications/templates/{id}` | GET | Get template details |
| `/api/v1/communications/templates/{id}/versions` | GET | List template versions |
| `/api/v1/communications/templates/{id}/deploy` | POST | Deploy template |
| `/api/v1/communications/templates/{id}/rollback` | POST | Rollback to previous version |

---

## 5. Performance Tuning

### 5.1. Document Generation Optimization

**Template Optimization:**
- Pre-compile templates at deployment
- Minimize embedded fonts (use web fonts where possible)
- Optimize image resolution and compression
- Use template fragments for reusable content
- Avoid complex nested calculations

**Runtime Optimization:**
- Enable template caching (Redis)
- Use connection pooling for database
- Enable HTTP/2 for API calls
- Implement request batching for bulk operations

### 5.2. Batch Processing Optimization

**Queue Configuration:**
```yaml
# RabbitMQ queue settings
queue:
  name: exstream.batch
  durable: true
  prefetch_count: 10
  message_ttl: 86400000  # 24 hours
  dead_letter_exchange: exstream.dlx
```

**Worker Pool Configuration:**
```yaml
worker_pool:
  min_workers: 2
  max_workers: 10
  scale_up_threshold: 50  # queue depth
  scale_down_threshold: 10
  idle_timeout: 300  # seconds
```

### 5.3. Resource Limits

| Resource | Minimum | Recommended | Maximum |
|----------|---------|-------------|---------|
| CPU per pod | 2 cores | 4 cores | 8 cores |
| Memory per pod | 8 GB | 16 GB | 32 GB |
| Max concurrent jobs | 10 | 50 | 100 |
| Max document size | - | 50 MB | 100 MB |
| Max batch size | - | 1000 docs | 5000 docs |

---

## 6. Monitoring and Alerting

### 6.1. Key Metrics

**Document Generation Metrics:**

```yaml
# Prometheus metrics
exstream_documents_generated_total{status, tenant, template}
exstream_document_generation_duration_seconds{tenant, template}
exstream_document_pages_total{tenant, template}
exstream_document_size_bytes{tenant, template}
exstream_generation_errors_total{tenant, template, error_type}
```

**Batch Processing Metrics:**

```yaml
exstream_batch_jobs_total{status, tenant}
exstream_batch_job_duration_seconds{tenant}
exstream_batch_documents_per_job{tenant}
exstream_batch_queue_depth{tenant}
exstream_batch_queue_wait_seconds{tenant}
```

**Template Metrics:**

```yaml
exstream_template_load_duration_seconds{template}
exstream_template_cache_hits_total{template}
exstream_template_cache_misses_total{template}
exstream_template_compile_duration_seconds{template}
```

### 6.2. Service Level Objectives

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Generation Success Rate | >= 99.9% | < 99.5% |
| Single Doc Generation (p95) | < 5 sec | > 5 sec for 5 min |
| Batch Throughput | >= 500 docs/hour | < 400 docs/hour |
| Template Load Time | < 2 sec | > 3 sec |
| Queue Wait Time | < 60 sec | > 120 sec |

### 6.3. Alert Rules

```yaml
# Critical Alerts
- alert: ExstreamServiceDown
  expr: up{job="exstream"} == 0
  for: 1m
  severity: critical

- alert: ExstreamHighFailureRate
  expr: rate(exstream_generation_errors_total[5m]) / rate(exstream_documents_generated_total[5m]) > 0.05
  for: 5m
  severity: critical

- alert: ExstreamBatchQueueBacklog
  expr: exstream_batch_queue_depth > 1000
  for: 10m
  severity: critical

# High Alerts
- alert: ExstreamSlowGeneration
  expr: histogram_quantile(0.95, rate(exstream_document_generation_duration_seconds_bucket[5m])) > 5
  for: 5m
  severity: high

- alert: ExstreamTemplateErrors
  expr: rate(exstream_template_errors_total[5m]) > 5
  for: 5m
  severity: high
```

### 6.4. Grafana Dashboard

**Communications Dashboard Panels:**

1. **Generation Overview**
   - Documents generated per minute (by tenant)
   - Success/failure rate
   - Average generation time

2. **Performance**
   - Generation time distribution (p50, p95, p99)
   - Template load time
   - Queue wait time

3. **Batch Processing**
   - Active batch jobs
   - Queue depth
   - Throughput (docs/hour)

4. **Resources**
   - CPU utilization by pod
   - Memory utilization by pod
   - Active workers

---

## 7. Backup and Recovery

### 7.1. What is Backed Up

| Item | Method | Frequency | Retention |
|------|--------|-----------|-----------|
| Templates | Git + S3 versioning | On change | Indefinite |
| Template metadata | PostgreSQL backup | Daily | 30 days |
| Generation job history | PostgreSQL backup | Daily | 90 days |
| Generated documents | S3 lifecycle | - | Per policy |
| Configuration | Git repository | On change | Indefinite |

### 7.2. Recovery Procedures

**Template Recovery:**
```bash
# Restore template from S3 versioning
aws s3api get-object \
  --bucket templates \
  --key tenants/{tenant}/templates/invoice_v2.ptx \
  --version-id {version-id} \
  restored-template.ptx

# Deploy restored template
curl -X POST /api/v1/communications/templates/invoice/deploy \
  -F "template=@restored-template.ptx"
```

**Service Recovery:**
```bash
# Restart Exstream pods
kubectl rollout restart deployment/exstream-api -n saas-production

# Scale up workers for backlog processing
kubectl scale deployment/exstream-batch --replicas=10 -n saas-production
```

---

## 8. Security Considerations

### 8.1. Data Security

- **Tenant Isolation**: Each template and output is stored in tenant-specific paths
- **Encryption at Rest**: All templates and documents encrypted (AES-256)
- **Encryption in Transit**: TLS 1.3 for all API communication
- **Data Classification**: Documents inherit tenant data classification

### 8.2. Access Control

- **Template Management**: Requires `templates:write` permission
- **Document Generation**: Requires `documents:generate` permission
- **Batch Processing**: Requires `batch:submit` permission
- **Designer Access**: Requires `designer:access` permission

### 8.3. Audit Logging

All operations are logged:
- Template deployments and rollbacks
- Document generation requests
- Batch job submissions
- Configuration changes
- Access to generated documents

---

## 9. Capacity Planning

### 9.1. Current Capacity

| Metric | Current Capacity |
|--------|------------------|
| Documents per minute | 100 |
| Documents per hour (batch) | 500 |
| Concurrent generation jobs | 50 |
| Template storage per tenant | 5 GB |
| Document storage per tenant | 50 GB |

### 9.2. Scaling Triggers

| Trigger | Action |
|---------|--------|
| Queue depth > 50 sustained | Add worker pods |
| CPU > 70% sustained | Add API pods |
| Template cache miss > 20% | Increase cache size |
| Generation time > 5s p95 | Investigate/optimize |

---

## 10. Appendices

### 10.1. Supported Output Formats

| Format | Extension | Use Case |
|--------|-----------|----------|
| PDF | .pdf | Print, archive, email |
| PDF/A | .pdf | Long-term archive |
| HTML | .html | Web display, email |
| RTF | .rtf | Editable documents |
| PostScript | .ps | Print |
| PCL | .pcl | Print |
| AFP | .afp | High-volume print |

### 10.2. OpenText Exstream Version

| Component | Version | Support Status |
|-----------|---------|----------------|
| Exstream Server | 24.1 | Current |
| Designer | 24.1 | Current |
| SDK | 24.1 | Current |

### 10.3. Contact Information

| Role | Contact |
|------|---------|
| Technical Lead | tech-lead@swedwise.com |
| Communications Engineer | exstream@swedwise.com |
| OpenText Support | support.opentext.com |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Technical Lead | Initial Communications architecture addendum |

---

**Classification:** Confidential
**Distribution:** Internal use only
**Review Date:** 2026-01-15

*This document contains confidential technical information about the Swedwise Communications service component. Unauthorized distribution is prohibited.*
