---
document_id: SW-SAAS-OPS-COMP-001
title: Operations Addendum - Communications
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: SaaS Operations Manager
component: communications
parent_document: SW-SAAS-OPS-001
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-SAAS-OPS-001
  - SW-SAAS-COMP-001
  - SW-SAAS-ARCH-001
  - SW-ISMS-PRO-001
---

# Operations Addendum - Communications

## 1. Addendum Overview

### 1.1. Purpose

This operations addendum provides **component-specific operational procedures** for the **Communications (OpenText Exstream)** service component within the Swedwise SaaS platform.

**This document supplements SW-SAAS-OPS-001 (SaaS Platform Operations Guide).** When conflicts exist, the main Operations Guide takes precedence.

### 1.2. Service Component Overview

| Component | Technology | Purpose |
|-----------|------------|---------|
| **OpenText Communications (Exstream)** | OpenText Exstream v24.x | High-volume document composition and generation |
| **Template Designer** | OpenText Designer | Document template creation and editing |
| **Batch Processing Engine** | Kubernetes Jobs + Message Queue | Scheduled and batch document generation |

### 1.3. Service Boundaries

**In Scope:**
- Document generation via API and batch processing
- Template management and version control
- Customer-specific configurations and branding
- Multi-tenant isolation and security

**Out of Scope:**
- Customer internal systems (integration endpoints)
- Integration broker operations (covered in parent document)

### 1.4. Key Operational Characteristics

- **Multi-Tenant**: Shared infrastructure, isolated data per tenant
- **High-Volume**: Designed for batch processing (thousands of documents per job)
- **Asynchronous**: Most operations queued and processed asynchronously
- **Template-Dependent**: Document generation quality depends on template design

## 2. Component Architecture

### 2.1. Communications (Exstream) Architecture

```
┌────────────────────────────────────────────────────────────┐
│              OPENTEXT COMMUNICATIONS PODS                  │
│                                                            │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │  Exstream API    │  │  Exstream        │              │
│  │  (3+ replicas)   │  │  Designer        │              │
│  │                  │  │  (2 replicas)    │              │
│  │  - REST API      │  │                  │              │
│  │  - Job Queue     │  │  - Template Edit │              │
│  │  - Rendering     │  │  - Preview       │              │
│  └────────┬─────────┘  └────────┬─────────┘              │
│           │                     │                         │
└───────────┼─────────────────────┼─────────────────────────┘
            │                     │
            ▼                     ▼
┌────────────────────────────────────────────────────────────┐
│                    DATA LAYER                              │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │ PostgreSQL   │  │  Object      │  │  Message Queue │  │
│  │ (Tenant DBs) │  │  Storage     │  │  (RabbitMQ)    │  │
│  │              │  │              │  │                │  │
│  │ - Templates  │  │ - Assets     │  │ - Job Queue    │  │
│  │ - Job Status │  │ - Output     │  │ - Batch Queue  │  │
│  │ - Metadata   │  │ - Archives   │  │ - Priority Q   │  │
│  └──────────────┘  └──────────────┘  └────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

### 2.2. Component Dependencies

| Component | Depends On | Impact if Unavailable |
|-----------|------------|-----------------------|
| **Exstream API** | PostgreSQL, Object Storage, Message Queue | Cannot accept new jobs; existing jobs may fail |
| **Exstream Designer** | PostgreSQL, Object Storage | Template editing unavailable |

## 3. Component Monitoring

### 3.1. Key Metrics

| Metric | Normal Range | Warning | Critical | Alert Target |
|--------|--------------|---------|----------|--------------|
| **API Response Time** (p95) | <1 second | >2 seconds | >5 seconds | SOC + On-Call |
| **Document Generation Success Rate** | >99% | <99% | <95% | SOC + On-Call |
| **Queue Depth** | <100 jobs | >500 jobs | >1000 jobs | SOC |
| **Template Compilation Time** | <30 seconds | >60 seconds | >120 seconds | Operations Manager |
| **Pod CPU Utilization** | <70% | >80% | >90% | SOC |
| **Pod Memory Utilization** | <75% | >85% | >95% | SOC + On-Call |
| **Storage Usage** (templates + assets) | - | >80% quota | >90% quota | SOC |

### 3.2. Health Checks

**Exstream API Health Check** (`/health`):
```json
{
  "status": "healthy",
  "timestamp": "2025-01-15T10:30:45Z",
  "version": "24.4.0",
  "checks": {
    "database": "healthy",
    "object_storage": "healthy",
    "message_queue": "healthy",
    "template_cache": "healthy",
    "license": "valid"
  },
  "metrics": {
    "active_jobs": 45,
    "queued_jobs": 12,
    "avg_generation_time_seconds": 0.75
  }
}
```

**Exstream Designer Health Check** (`/health`):
```json
{
  "status": "healthy",
  "timestamp": "2025-01-15T10:30:45Z",
  "checks": {
    "database": "healthy",
    "object_storage": "healthy",
    "template_compilation": "healthy"
  }
}
```

### 3.3. Prometheus Metrics

**Custom Metrics Exported:**
- `exstream_documents_generated_total` (counter, by tenant)
- `exstream_document_generation_duration_seconds` (histogram)
- `exstream_job_queue_depth` (gauge)
- `exstream_template_cache_hit_ratio` (gauge)
- `exstream_errors_total` (counter, by error_type)

**Grafana Dashboard Panels:**
- Documents generated per hour (trend)
- Generation success rate (%)
- Queue depth over time
- P50, P95, P99 generation times
- Error breakdown (by type and tenant)
- Resource utilization (CPU, memory, storage)

## 4. Incident Handling - Component-Specific

### 4.1. Document Generation Failures

**Symptoms:**
- Documents failing to generate (error response from API)
- Increased error rate in logs
- Customer reports missing documents

**Triage Steps:**
1. Check Exstream pod status: `kubectl get pods -n saas-platform -l app=exstream`
2. Check pod logs for errors: `kubectl logs -n saas-platform <pod-name> --tail=100`
3. Verify database connectivity (check health endpoint)
4. Check object storage access (templates, assets)
5. Review recent template changes (possible template corruption)

**Common Causes and Solutions:**

| Cause | Symptoms | Solution |
|-------|----------|----------|
| **Template Error** | Specific template fails consistently | Review template logs, validate template syntax, roll back to previous version |
| **Missing Asset** | Generation fails at specific point | Check object storage for missing images/fonts, restore from backup if needed |
| **Database Connection Pool Exhausted** | Intermittent failures, "too many connections" error | Restart pods (Kubernetes will recreate with fresh connections), investigate connection leak |
| **Out of Memory** | Pod restarts frequently, OOMKilled in logs | Increase pod memory limits, investigate memory leak in template processing |
| **Corrupted Template Cache** | Inconsistent results, works after cache clear | Clear template cache, restart affected pods |

**Escalation:**
- If template issue: Escalate to Customer Success + Template Designer
- If OpenText platform issue: Escalate to L3 + OpenText Support
- If infrastructure issue: Follow standard infrastructure incident procedures

### 4.2. Template Designer Issues

**Symptoms:**
- Cannot open template editor
- Template save failures
- Preview not working

**Triage Steps:**
1. Check Designer pod status
2. Check Designer logs for errors
3. Verify user authentication and permissions
4. Check database connectivity (template metadata)
5. Check object storage access (template files)

**Common Causes and Solutions:**

| Cause | Symptoms | Solution |
|-------|----------|----------|
| **Pod Crash** | 500 errors, cannot load designer | Check pod logs for crash reason, restart pod, escalate if persistent |
| **License Issue** | Designer won't start, license error in logs | Verify OpenText license valid and not expired, contact OpenText to renew |
| **Storage Full** | Cannot save templates | Check tenant storage quota, increase quota or clean up old templates |
| **Template Lock** | Cannot edit template, "locked by another user" | Check database for stale locks, clear lock if user session ended abnormally |

### 4.3. Batch Processing Failures

**Symptoms:**
- Scheduled batch jobs not running
- Batch job taking much longer than expected
- Partial batch completion (some documents generated, others failed)

**Triage Steps:**
1. Check Kubernetes Job status: `kubectl get jobs -n saas-platform`
2. Check Job pod logs: `kubectl logs -n saas-platform job/<job-name>`
3. Verify job trigger (cron schedule, API call)
4. Check message queue depth and processing rate
5. Review job input data validity

**Common Causes and Solutions:**

| Cause | Symptoms | Solution |
|-------|----------|----------|
| **Job Trigger Failure** | Job didn't start at scheduled time | Check CronJob configuration, verify scheduler running, check job history |
| **Input Data Error** | Job fails immediately or after processing few items | Validate input data format, check for null values or missing fields, review error logs |
| **Resource Limits** | Job killed (OOMKilled), job stuck at same progress | Increase job resource limits (CPU, memory), investigate data volume or template complexity |
| **Queue Congestion** | Job runs slowly, queue depth increasing | Scale up worker pods, increase queue concurrency, optimize slow templates |
| **Partial Failure** | Some documents succeed, others fail | Review error logs for failed items, may need to retry failed subset separately |

## 5. Upgrade Procedures

### 5.1. OpenText Communications Upgrade

**Frequency:** Quarterly (aligned with OpenText release cycle)

**Upgrade Types:**
- **Patch Release** (24.4.1 → 24.4.2): Bug fixes, security patches
- **Minor Release** (24.4 → 24.5): New features, enhancements
- **Major Release** (24.x → 25.x): Breaking changes, major features

**Upgrade Process:**

**Phase 1: Planning and Preparation (2 weeks before)**
1. Review OpenText release notes and known issues
2. Assess compatibility with current templates and integrations
3. Identify breaking changes requiring customer notification
4. Schedule maintenance window (typically Monthly Extended Window)
5. Notify customers (10 business days advance for major, 5 days for minor)

**Phase 2: Testing (1 week before)**
1. Deploy new version to staging environment
2. Run automated test suite (document generation, API tests)
3. Test representative templates from each tenant
4. Performance benchmarking (compare to current version)
5. Verify rollback procedure

**Phase 3: Backup (Day of upgrade, T-1 hour)**
1. Take full database backup
2. Snapshot template repository (object storage)
3. Backup Kubernetes configurations
4. Verify backup integrity

**Phase 4: Implementation (During maintenance window)**
1. Announce maintenance start (customer notification)
2. Drain existing requests (allow in-flight jobs to complete)
3. Scale down current Exstream pods to 0
4. Deploy new version pods
5. Run database migrations (if applicable)
6. Scale up new version pods
7. Verify health checks passing
8. Run smoke tests (generate test documents)

**Phase 5: Verification (T+15 min)**
1. Monitor error rates and performance metrics
2. Test each tenant with sample document generation
3. Verify template designer functionality
4. Check integration endpoints operational
5. Review logs for unexpected errors

**Phase 6: Monitoring and Rollback Decision (T+30 min)**
1. If issues detected: Execute rollback procedure
2. If stable: Announce maintenance completion
3. Continue enhanced monitoring for 24 hours
4. Post-Implementation Review within 7 days

**Rollback Procedure:**
1. Scale down new version pods to 0
2. Restore database from pre-upgrade backup (if schema changed)
3. Scale up previous version pods
4. Verify service restoration
5. Customer notification of rollback
6. Investigate issues before re-attempting upgrade

### 5.2. Template Migration Between Environments

**Purpose:** Deploy new or updated templates from staging to production

**Template Migration Workflow:**

```
Template Designer (Staging) → Review & Approval → Version Control (Git) →
Deploy to Production → Verification → Customer Notification
```

**Steps:**
1. **Template Development** (in staging environment)
   - Customer Success or customer creates/modifies template
   - Test with sample data
   - Preview output documents

2. **Review and Approval**
   - Customer Success reviews template output
   - Customer approves template (if customer-created)
   - Operations verifies template best practices

3. **Version Control**
   - Export template from staging
   - Commit to Git repository with version tag
   - Document changes in release notes

4. **Production Deployment** (during change window)
   - Import template to production environment
   - Verify template compiles successfully
   - Test generation with production-like data
   - Activate template (make available to customer)

5. **Verification**
   - Generate test document in production
   - Compare output to staging
   - Monitor error rates for template-related issues

6. **Customer Notification** (if significant change)
   - Notify customer template is live
   - Provide change summary if breaking changes

**Template Versioning:**
- Semantic versioning: `<major>.<minor>.<patch>`
- Previous versions retained for rollback (last 10 versions)
- Template changes logged in audit trail

## 6. Backup Specifics

### 6.1. Template Backup

**What is Backed Up:**
- Template definition files (.xsl, .xml, etc.)
- Template metadata (version, author, modification date)
- Template assets (images, fonts, logos)

**Backup Method:**
- **Primary**: Object storage versioning (automatic)
- **Secondary**: Cross-region replication (async)
- **Tertiary**: Daily snapshot to separate backup storage

**Retention:**
- **Active versions**: 30 versions per template
- **Deleted templates**: 90 days in backup
- **Compliance**: 7 years for templates used in regulatory documents

**Recovery Procedures:**
- **Single template recovery**: Restore from object storage version history (<5 min)
- **Tenant template recovery**: Restore all templates for tenant from daily backup (<30 min)
- **Complete template repository recovery**: Restore from DR site backup (<2 hours)

### 6.2. Generated Document Archival

**Document Archival Policy:**

| Document Type | Retention | Storage Tier | Purpose |
|---------------|-----------|--------------|---------|
| **Customer documents (active)** | 30 days | Hot (fast access) | Immediate customer retrieval |
| **Customer documents (archive)** | 90 days | Warm (slower access) | Occasional retrieval |
| **Compliance documents** | 7 years | Cold (archival) | Regulatory retention |
| **Test documents** | 7 days | Hot | Troubleshooting, verification |

**Archival Process:**
- **Automated**: Lifecycle policy moves documents between tiers
- **Customer-initiated**: Customer can request extended retention
- **Deletion**: Documents purged after retention period (logged for audit)

**Retrieval:**
- Hot storage: <1 second retrieval
- Warm storage: <10 seconds retrieval
- Cold storage: <1 hour retrieval (may require support ticket)

## 7. Performance Optimization

### 7.1. Document Generation Performance

**Optimization Techniques:**

**Template Caching:**
- Compiled templates cached in memory
- Cache hit ratio target: >90%
- Cache size: 2 GB per Exstream pod
- Cache invalidation: On template update

**Batch Processing Optimization:**
- Group similar documents (same template) in single batch
- Parallel processing: Up to 10 concurrent documents per pod
- Resource allocation: Dedicated worker pods for large batches

**Data Optimization:**
- Minimize database queries during generation (prefetch data)
- Use prepared statements for repeated queries
- Implement connection pooling (PgBouncer)

**Asset Optimization:**
- Compress images before template inclusion
- Use vector graphics (SVG) where possible
- Cache fonts and static assets in pod local storage

**Performance Benchmarks:**

| Document Type | Target Generation Time | Actual (Median) | Notes |
|---------------|------------------------|-----------------|-------|
| **Simple (text only)** | <0.5 seconds | 0.3 seconds | Invoices, statements |
| **Standard (with images)** | <1 second | 0.75 seconds | Marketing materials |
| **Complex (multi-page, charts)** | <3 seconds | 2.1 seconds | Reports, contracts |
| **Large batch (1000 docs)** | <10 minutes | 7 minutes | Parallel processing |

### 7.2. Scaling Strategies

**Horizontal Scaling Triggers:**

| Metric | Scale Up Threshold | Scale Down Threshold | Action |
|--------|-------------------|----------------------|--------|
| **CPU Utilization** | >70% for 5 min | <40% for 15 min | Add/remove pod |
| **Queue Depth** | >500 jobs | <100 jobs | Add/remove pod |
| **API Response Time** | p95 >2 seconds | p95 <0.5 seconds | Add/remove pod |

**Auto-Scaling Configuration:**
```yaml
# Exstream API HPA
minReplicas: 3
maxReplicas: 20
targetCPUUtilization: 70
targetMemoryUtilization: 80
scaleUpStabilization: 60s  # Wait 60s before scaling up
scaleDownStabilization: 300s  # Wait 5 min before scaling down
```

**Vertical Scaling (when horizontal insufficient):**
- Increase pod resource limits (CPU, memory)
- Requires Change Request and maintenance window
- Typical upgrade: 4 CPU / 16 GB → 8 CPU / 32 GB

## 8. Template Management

### 8.1. Template Lifecycle

```
Create → Test (Staging) → Review → Approve → Deploy (Production) →
Monitor → Update → Deprecate → Archive
```

**Lifecycle Stages:**

| Stage | Description | Access | Duration |
|-------|-------------|--------|----------|
| **Draft** | Initial creation, frequent changes | Designer only | Unlimited |
| **Testing** | Deployed to staging, under testing | Designer + Customer Success | 1-2 weeks |
| **Review** | Under approval process | Customer Success + Customer | 1 week |
| **Active** | Live in production, generating documents | All authorized users | Indefinite |
| **Deprecated** | Marked for replacement, still functional | All authorized users | 90 days |
| **Archived** | Removed from production, retained for compliance | Read-only | 7 years |

### 8.2. Template Version Control

**Versioning Strategy:**
- **Major version** (x.0.0): Breaking changes, incompatible with previous version
- **Minor version** (1.x.0): New features, backward compatible
- **Patch version** (1.0.x): Bug fixes, no functional changes

**Version Control Integration:**
- Templates stored in Git repository
- Each version tagged with semantic version
- Change log maintained in commit messages

**Version Rollback:**
- Can revert to any previous version within 30-version history
- Rollback requires Change Request (unless emergency)
- Customer notified of rollback if affects active documents

### 8.3. Template Best Practices

**Performance Best Practices:**
- Keep templates simple (avoid excessive nested loops)
- Optimize XSL/XSLT transformations
- Minimize external data calls within template
- Use cached assets where possible
- Avoid large images (compress to <500 KB)

**Maintainability Best Practices:**
- Use clear naming conventions
- Document complex logic with comments
- Use reusable template fragments (avoid duplication)
- Test with edge cases (null data, special characters, large datasets)

**Security Best Practices:**
- Sanitize input data (prevent XSS in generated documents)
- Validate data types and ranges
- Don't embed sensitive data in templates (fetch at generation time)
- Review templates for information disclosure risks

### 8.4. Template Troubleshooting

**Common Template Issues:**

| Issue | Symptoms | Resolution |
|-------|----------|------------|
| **Compilation Error** | Template fails to load, syntax error in logs | Review template XSL syntax, validate against schema, check for missing closing tags |
| **Generation Timeout** | Document generation exceeds timeout (default 60s) | Optimize template (simplify logic, reduce loops), increase timeout (with approval), investigate data volume |
| **Missing Data** | Generated document has blank fields | Check data source, verify data mapping in template, review conditional logic |
| **Formatting Issues** | Incorrect layout, overlapping elements | Review template positioning (absolute vs. relative), test with different data lengths |
| **Memory Exhaustion** | Pod OOMKilled during generation | Optimize template memory usage, increase pod memory limits, batch large documents differently |
| **Asset Not Found** | Images or fonts missing in output | Verify asset path in template, check object storage for asset file, verify asset permissions |

## 9. Runbooks - Common Operational Procedures

### 9.1. Restart Exstream Service

**When to Use:**
- Exstream pods unresponsive
- Memory leak suspected
- After configuration change requiring restart

**Procedure:**
1. Verify backup completed recently (check backup status)
2. Announce maintenance to customers if during business hours
3. Drain in-flight requests: `kubectl scale deployment exstream-api --replicas=0`
4. Wait 60 seconds for graceful shutdown
5. Scale up: `kubectl scale deployment exstream-api --replicas=3`
6. Monitor pod startup: `kubectl get pods -w -l app=exstream`
7. Verify health checks: `curl https://api.swedwise.com/health`
8. Test document generation with sample request
9. Monitor error rates for 15 minutes post-restart
10. Announce service restored (if maintenance was announced)

**Expected Downtime:** 2-3 minutes

### 9.2. Clear Template Cache

**When to Use:**
- Template rendering inconsistently
- Recent template update not taking effect
- Suspected template cache corruption

**Procedure:**
1. Identify affected tenant(s)
2. Connect to Exstream pod: `kubectl exec -it <pod-name> -- /bin/bash`
3. Clear cache: `rm -rf /opt/exstream/cache/*` (or vendor-specific command)
4. Exit pod
5. Verify cache cleared: Generate test document, check logs for cache miss
6. Monitor performance (cache rebuild may temporarily slow generation)

**Expected Impact:** Temporary performance degradation (<30 min)

### 9.3. Restore Deleted Template

**When to Use:**
- Customer accidentally deleted template
- Template corruption requiring restoration
- Regulatory requirement to restore historical template

**Procedure:**
1. Identify template to restore (tenant ID, template ID, version)
2. Check object storage version history:
   ```bash
   aws s3api list-object-versions \
     --bucket tenants \
     --prefix tenant-abc-123/templates/invoice-template.xsl
   ```
3. Identify correct version by timestamp and version ID
4. Restore object:
   ```bash
   aws s3api copy-object \
     --copy-source tenants/tenant-abc-123/templates/invoice-template.xsl?versionId=<version-id> \
     --bucket tenants \
     --key tenant-abc-123/templates/invoice-template.xsl
   ```
5. Verify template restored in Exstream Designer
6. Test template: Generate sample document
7. Notify customer of restoration
8. Document restoration in operations log

**Expected Time:** 15-30 minutes

### 9.4. Investigate High Queue Depth

**When to Use:**
- Queue depth alert triggered (>1000 jobs for documents)
- Customer reports delayed document generation
- Dashboard shows increasing queue trend

**Procedure:**
1. Identify affected queue: Document generation
2. Check queue metrics:
   ```bash
   # RabbitMQ example
   rabbitmqctl list_queues name messages consumers
   ```
3. Investigate root cause:
   - **Low processing rate**: Check worker pod count, CPU/memory utilization
   - **High ingress rate**: Check API call volume, identify source
   - **Worker failures**: Check pod logs for errors, restart failed pods
4. Take corrective action:
   - **Scale up workers**: Increase pod replicas temporarily
     ```bash
     kubectl scale deployment exstream-api --replicas=10
     ```
   - **Throttle ingress**: Apply rate limiting to offending tenant (if abuse)
   - **Fix worker issues**: Restart failed pods, increase resources
5. Monitor queue drain rate: Calculate estimated time to clear
6. Communicate to customers if significant delay expected
7. Post-incident: Analyze root cause, adjust auto-scaling thresholds if needed

**Expected Resolution Time:** 15 minutes (diagnosis) + variable (queue drain time)

## 10. Continuous Improvement

### 10.1. Component-Specific Metrics

**Communications Component:**
- Document generation success rate: Target >99%
- Average generation time: Trending down
- Template error rate: Target <1%
- Queue processing efficiency: Target >95%

### 10.2. Improvement Initiatives

**Current Improvement Areas:**
- Reduce document generation time for complex templates
- Optimize batch processing for large jobs
- Enhance monitoring and alerting granularity
- Automate common runbook procedures

### 10.3. Lessons Learned

**Post-Incident Reviews:**
- Conducted after every High or Critical incident
- Focus on component-specific root causes
- Identify preventive measures
- Update runbooks with new procedures

**Monthly Retrospectives:**
- Operations team reviews component performance
- Discusses challenges and improvement opportunities
- Prioritizes automation and optimization tasks

## 11. Related Documents

**Main Operations Guide:**
- SW-SAAS-OPS-001: Swedwise SaaS Platform - Operations Guide (parent document)

**Component Documentation:**
- SW-SAAS-COMP-001: Swedwise Communications - Component Description

**Architecture and Design:**
- SW-SAAS-ARCH-001: Swedwise Communications Technical Architecture

**IMS Procedures:**
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-IMS-PRO-008: Change Management Procedure

**Vendor Documentation:**
- OpenText Communications (Exstream) Administration Guide

## 12. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | SaaS Operations Manager | Initial Communications operations addendum | Operations Manager |

**Next Review Date**: [TBD - 6 months from effective date, then annually]

**Document Classification**: Internal

**Document Owner**: SaaS Operations Manager

**Parent Document**: SW-SAAS-OPS-001 (Swedwise SaaS Platform - Operations Guide)

---

*This operations addendum is supplementary to SW-SAAS-OPS-001. All general SaaS operations procedures from the main guide apply unless specifically overridden in this addendum. Operations staff must read and understand both documents.*
