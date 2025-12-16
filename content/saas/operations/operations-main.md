---
document_id: SW-SAAS-OPS-001
title: Swedwise SaaS Platform - Operations Guide
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: SaaS Operations Manager
component: general
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 27001
  - ISO 14001
related_documents:
  - SW-ISMS-PRO-001
  - SW-IMS-PRO-008
  - SW-SAAS-ARCH-001
  - SW-SAAS-OPS-COMP-001
  - SW-SAAS-OPS-COMP-002
---

# Swedwise SaaS Platform - Operations Guide

## 1. Purpose

This procedure establishes comprehensive operational standards and procedures for the Swedwise SaaS platform, ensuring:

- Reliable 24x7 service delivery meeting SLA commitments (99.9% uptime)
- Consistent incident and problem management across all service components
- Effective change management minimizing service disruption
- Proactive monitoring and capacity management
- Security operations aligned with ISO 27001 requirements
- Continuous improvement and operational excellence

This document provides the **foundation for all SaaS operations**. Component-specific procedures are detailed in separate addendum documents (see Section 12).

## 2. Scope

This procedure applies to:

**In Scope:**
- All Swedwise SaaS platform services and infrastructure
- Swedwise Communications service (OpenText Communications + Notifications)
- Shared platform components (Kubernetes, databases, networking, security)
- 24x7 operations center and support organization
- All operational staff (operations engineers, support staff, on-call personnel)
- Customer-facing SaaS services and APIs

**Out of Scope:**
- Internal Swedwise IT systems (managed separately)
- Customer-specific project deliveries (unless affecting shared infrastructure)
- Professional services and consulting work
- Sales and marketing systems (unless integrated with SaaS platform)

## 3. Relationship to IMS Procedures

The SaaS Operations procedures **implement and extend** the Swedwise Integrated Management System:

| IMS Procedure | SaaS Operations Implementation |
|---------------|-------------------------------|
| **SW-ISMS-PRO-001: Incident Management** | Security incidents follow IMS procedure; SaaS-specific technical response detailed here |
| **SW-IMS-PRO-008: Change Management** | All SaaS changes follow IMS change process; technical implementation detailed here |
| **SW-ISMS-POL-001: Information Security Policy** | Security operations implement policy requirements |
| **SW-QMS-PRO-XXX: Service Level Management** | SLA monitoring and reporting procedures |

**Principle:** When conflict exists, IMS procedures take precedence. SaaS operations provide technical implementation details.

## 4. Operations Organization

### 4.1. Operations Roles and Responsibilities

| Role | Responsibility | Hours | Escalation |
|------|---------------|-------|------------|
| **SaaS Operations Manager** | Overall operational responsibility, SLA accountability, resource management, continuous improvement | Business hours + on-call | CEO |
| **SaaS Operations Center (SOC)** | 24x7 monitoring, incident response, first-level troubleshooting, customer communication | 24x7 shifts | Operations Manager |
| **Technical Support L2** | In-depth technical troubleshooting, problem analysis, escalation support | Extended hours + on-call | Operations Manager |
| **Technical Support L3** | Vendor liaison (OpenText), complex issues, architecture changes, performance optimization | On-call | CISO / CTO |
| **Customer Success Manager** | Customer liaison, SLA reporting, planned maintenance communication, escalation management | Business hours | Management Team |
| **On-Call Engineer (Primary)** | After-hours incident response, critical issue escalation | 24x7 rotation | On-Call Engineer (Secondary) |
| **On-Call Engineer (Secondary)** | Backup on-call, high-severity incidents, vendor escalation | 24x7 rotation | Operations Manager |

### 4.2. On-Call Schedule

**Rotation:**
- **Primary On-Call**: 1-week rotation among qualified operations engineers
- **Secondary On-Call**: Operations Manager or designated senior engineer
- **Schedule Published**: 4 weeks in advance, accessible via [TBD - on-call system]

**On-Call Requirements:**
- Response time: 15 minutes for Critical incidents
- Mobile phone availability
- Laptop with VPN access
- Access to password vault and runbooks
- Handover notes between shifts

**Escalation Path:**
```
Incident → SOC → On-Call Primary → On-Call Secondary → Operations Manager → CEO
```

### 4.3. Coverage Model

| Time Window | Coverage | Staffing |
|-------------|----------|----------|
| **Business Hours** (Mon-Fri 08:00-17:00 CET) | Full team | SOC + L2 + L3 + Management |
| **Extended Hours** (Mon-Fri 17:00-22:00 CET) | Remote monitoring + on-call | SOC (remote) + On-Call |
| **Night/Weekend** (22:00-08:00, Sat-Sun) | Monitoring + on-call | Automated monitoring + On-Call |

### 4.4. Handover Procedures

**Daily Operational Handover (at shift change):**
1. Review open incidents and status
2. Review planned maintenance activities
3. Check monitoring alerts and system health
4. Highlight customer issues or concerns
5. Update operational log and handover notes

**Weekly Operations Review:**
- Every Monday 09:00 CET
- Review previous week's incidents, changes, and performance
- Plan upcoming maintenance and changes
- Address operational issues and improvements

## 5. Service Monitoring

### 5.1. Monitoring Philosophy

**Proactive Monitoring:**
- Detect issues before customers are impacted
- Alert on trends before thresholds are breached
- Predict capacity issues and plan scaling

**Layered Monitoring:**
- **Infrastructure Layer**: Servers, networks, storage
- **Platform Layer**: Kubernetes, databases, message queues
- **Application Layer**: APIs, services, integrations
- **Business Layer**: SLA metrics, customer usage, billing

### 5.2. 24x7 Monitoring

#### Monitoring Tools

| Tool | Purpose | Access |
|------|---------|--------|
| **Prometheus + Grafana** | Metrics collection and visualization | https://metrics.swedwise.com |
| **ELK Stack** | Centralized logging and analysis | https://logs.swedwise.com |
| **AlertManager** | Alert routing and management | Integrated with PagerDuty |
| **PagerDuty** | On-call alerting and incident tracking | Mobile app + web |
| **Kubernetes Dashboard** | Container orchestration monitoring | VPN access only |
| **Fortinet FortiGate** | Firewall and network security monitoring | VPN access only |

#### Monitoring Dashboards

**1. Platform Health Dashboard** (primary operations view)
- Cluster health (node status, pod health, resource utilization)
- Database health (connections, replication lag, query performance)
- Network health (bandwidth, latency, errors)
- Storage health (disk usage, IOPS, backup status)

**2. Service Health Dashboard** (customer-facing services)
- API availability and response times
- Service uptime (per component)
- Error rates and types
- Queue depths and processing times

**3. SLA Dashboard** (for SLA reporting)
- Current month uptime percentage
- Incident history and downtime
- Customer-specific SLA status
- SLA breach risk indicators

**4. Capacity Dashboard** (for planning)
- Resource utilization trends (CPU, memory, storage)
- Growth projections
- Tenant usage patterns
- Capacity thresholds and forecasts

### 5.3. Alerting Strategy

#### Alert Severity Levels

| Severity | Definition | Response Time | Notification |
|----------|------------|---------------|--------------|
| **Critical** | Service outage or imminent failure, customer impact | 15 minutes | PagerDuty → Phone call |
| **High** | Service degradation, potential customer impact | 30 minutes | PagerDuty → SMS + Email |
| **Medium** | Performance issue, no immediate customer impact | 1 hour | Email + Slack |
| **Low** | Informational, trending toward issue | 4 hours | Slack notification |

#### Key Alerts (Platform Level)

**Critical Alerts:**
- API endpoint down (>3 consecutive failed health checks)
- Database primary failure
- Kubernetes node failure (>30% nodes unavailable)
- Storage >95% full
- Network outage (complete loss of connectivity)

**High Alerts:**
- API response time >5 seconds (p99) for >5 minutes
- Database replication lag >60 seconds
- Pod restart loop (>3 restarts in 10 minutes)
- Storage >85% full
- Error rate >5% for >5 minutes

**Medium Alerts:**
- API response time >2 seconds (p95) for >10 minutes
- Memory utilization >85% sustained
- Backup job failed
- Certificate expiration <30 days
- Queue depth >1000 jobs

**Low Alerts:**
- API response time >1 second (p95) trending up
- Disk utilization >70%
- Unusual traffic patterns
- Failed login attempts >10 per minute

#### Alert Routing

```yaml
# AlertManager routing rules example
routes:
  - match:
      severity: critical
    receiver: pagerduty-critical
    repeat_interval: 15m

  - match:
      severity: high
    receiver: pagerduty-high
    repeat_interval: 30m

  - match:
      severity: medium
    receiver: slack-ops
    repeat_interval: 2h

  - match:
      severity: low
    receiver: slack-info
    repeat_interval: 24h
```

### 5.4. Health Check Endpoints

All services must expose health check endpoints:

**Liveness Check** (`/health/live`):
- Purpose: Is the service process running?
- Response: 200 OK or 503 Service Unavailable
- Action on failure: Kubernetes restarts the pod

**Readiness Check** (`/health/ready`):
- Purpose: Is the service ready to accept traffic?
- Response: 200 OK (ready) or 503 (not ready)
- Action on failure: Remove from load balancer

**Health Check Format:**
```json
{
  "status": "healthy",
  "timestamp": "2025-01-15T10:30:45Z",
  "version": "1.2.3",
  "checks": {
    "database": "healthy",
    "cache": "healthy",
    "storage": "healthy",
    "dependencies": "healthy"
  }
}
```

## 6. Incident Management

### 6.1. Incident Management Process

**For SaaS platform incidents, follow SW-ISMS-PRO-001 (Incident Management Procedure) with these SaaS-specific additions:**

#### Incident Categories (SaaS-Specific)

| Category | Examples | Typical Severity |
|----------|----------|------------------|
| **Service Outage** | API unavailable, complete service down, authentication failure | Critical |
| **Service Degradation** | Slow response times, intermittent errors, partial functionality loss | High to Medium |
| **Data Issue** | Document generation failures, data corruption, missing data | High to Critical |
| **Integration Failure** | External API failures (email, SMS), customer integration errors | Medium to High |
| **Security Incident** | Unauthorized access, DDoS attack, data breach | Critical |
| **Infrastructure Failure** | Kubernetes node failure, database failure, network outage | Critical to High |
| **Capacity Issue** | Resource exhaustion, quota exceeded, performance degradation | Medium to High |

#### SaaS-Specific Severity Criteria

**Critical Incident:**
- Complete service outage affecting all customers
- Data breach or security compromise
- Data loss affecting multiple customers
- SLA breach imminent or occurring

**High Incident:**
- Service degradation affecting multiple customers
- Single customer complete outage
- Integration failure affecting customer workflows
- Security threat detected but contained

**Medium Incident:**
- Performance issues with workaround available
- Single customer functionality issue
- Non-critical integration failure
- Intermittent errors affecting small subset of users

**Low Incident:**
- Cosmetic issues
- Single user issues
- Informational security events

### 6.2. Incident Communication

#### Internal Communication

**Incident Channel:**
- Create dedicated Slack channel: `#incident-YYYYMMDD-NNN`
- Include: SOC, On-Call, Operations Manager, Customer Success
- Use channel for all incident-related communication

**Status Updates:**
- **Critical**: Every 30 minutes until resolved
- **High**: Every 1 hour until resolved
- **Medium**: Every 4 hours or at milestones
- **Low**: At resolution

#### Customer Communication

**When to Notify Customers:**
- Service outage or degradation visible to customers
- Potential data impact
- Extended downtime expected (>30 minutes)
- SLA breach occurring or likely

**Communication Channels:**
- Email to designated customer contacts (primary)
- Service status page update (if available)
- In-application banner (if applicable)

**Communication Templates:**
See SW-ISMS-PRO-001 Section 7.9 for customer communication templates.

**Customer Communication Approval:**
- **Critical Incidents**: Operations Manager approval required
- **Customer-Specific Issues**: Customer Success Manager coordinates
- **General Service Issues**: SOC can send pre-approved templates

### 6.3. SaaS-Specific Incident Procedures

#### API Service Outage
1. Verify outage scope (all endpoints or specific service?)
2. Check Kubernetes pod status and logs
3. Check database connectivity
4. Check external dependencies (OpenText, email/SMS gateways)
5. Attempt service restart if safe
6. Escalate to L2/L3 if restart doesn't resolve
7. Implement temporary failover if available

#### Database Failure
1. Check PostgreSQL cluster status (primary, replicas)
2. Verify Patroni automatic failover triggered
3. If failover failed, trigger manual promotion of replica
4. Verify application reconnects to new primary
5. Investigate root cause (storage, memory, corruption)
6. Plan re-syncing of old primary as new replica

#### Kubernetes Node Failure
1. Check node status: `kubectl get nodes`
2. Verify pods rescheduled to healthy nodes
3. Check if node can be cordoned and drained
4. If hardware failure, work with data center partner
5. Monitor pod scheduling and resource availability
6. Add temporary node capacity if needed

#### Document Generation Failures
1. Check OpenText Communications pod status
2. Review application logs for errors
3. Check template validity and accessibility
4. Verify database connectivity for job queue
5. Check object storage access for template/asset retrieval
6. Test with known-good document to isolate issue

#### Notification Delivery Failures
1. Check notification service pod status
2. Verify external gateway connectivity (email, SMS)
3. Check authentication credentials for gateways
4. Review bounce/failure logs
5. Check for rate limiting or quota issues
6. Test with single notification to isolate issue

## 7. Problem Management

### 7.1. Purpose of Problem Management

**Problem Management** focuses on identifying and addressing the **root causes** of incidents to prevent recurrence.

**Goals:**
- Reduce the number of incidents
- Minimize impact of incidents that cannot be prevented
- Improve overall service quality and stability

### 7.2. Problem Management Process

```
Incident(s) → Problem Identification → Root Cause Analysis →
Solution Development → Implementation → Verification → Closure
```

#### Problem Triggers

Problems are identified from:
- **Recurring Incidents**: Same issue occurring multiple times
- **Post-Incident Reviews**: Root cause identified but not yet addressed
- **Proactive Analysis**: Monitoring trends, vulnerability assessments
- **Customer Feedback**: Patterns in customer complaints

#### Problem Record

Create a Problem Record in [TBD - Problem tracking system] containing:
- Problem ID and title
- Related incidents (INC-YYYY-MM-####)
- Affected services and components
- Business impact and urgency
- Root cause analysis findings
- Proposed solution
- Implementation plan
- Verification criteria

### 7.3. Root Cause Analysis (RCA)

**Techniques:**
- **5 Whys**: Iteratively ask "why" to drill down to root cause
- **Fishbone Diagram**: Identify contributing factors across categories (people, process, technology, environment)
- **Timeline Analysis**: Reconstruct event sequence leading to incident
- **Change Analysis**: Identify recent changes that may have contributed

**RCA Report Contents:**
1. Problem summary and business impact
2. Timeline of events
3. Root cause(s) identified
4. Contributing factors
5. Lessons learned
6. Preventive actions recommended
7. Action plan with owners and deadlines

**RCA Timing:**
- **Critical Problems**: Within 5 business days
- **High Problems**: Within 10 business days
- **Medium Problems**: Within 30 days

### 7.4. Known Error Database

**Known Errors** are problems with documented workarounds but not yet permanent solutions.

**Known Error Record Contains:**
- Problem ID reference
- Symptoms and diagnosis
- Workaround procedure
- Status (temporary workaround, permanent fix planned, permanent fix implemented)
- Date permanent solution expected

**Access:**
- All operations staff have access to Known Error Database
- SOC uses during incident response to quickly apply workarounds
- Customer Success can share workarounds with customers (approved cases)

### 7.5. Problem Resolution

**Resolution Options:**
1. **Permanent Fix**: Address root cause, implement via Change Management
2. **Workaround**: Temporary mitigation, plan permanent fix for future
3. **Accept Risk**: If fix cost exceeds benefit, document and accept
4. **Vendor Fix**: Escalate to vendor (OpenText), track until resolution

**Change Management Integration:**
- All permanent fixes require Change Request (SW-IMS-PRO-008)
- Problem ID referenced in Change Request
- Post-implementation verification confirms problem resolved

## 8. Change Management

### 8.1. Change Management Process

**All SaaS platform changes follow SW-IMS-PRO-008 (Change Management Procedure).**

This section provides SaaS-specific implementation details.

### 8.2. SaaS Change Categories

#### Standard Changes (Pre-Approved)

| Standard Change | Procedure | Approval |
|-----------------|-----------|----------|
| Security patch deployment (non-critical systems) | Apply to test, verify 48h, deploy to production | Operations Manager |
| SSL certificate renewal | Automated via Let's Encrypt; manual verification | Automatic |
| User account provisioning/deprovisioning | Follow access control procedure | Customer Success Manager |
| Tenant configuration change (single tenant) | Documented procedure, testing in staging | Operations Engineer |
| Backup schedule adjustment | Modify backup job, verify next run | Operations Manager |
| Log retention policy update | Update Elasticsearch lifecycle policy | Operations Manager |

#### Normal Changes (Require CAB Approval)

- New service feature deployment
- OpenText Communications version upgrade
- Kubernetes cluster upgrade
- Database schema changes affecting multiple tenants
- Network configuration changes
- Security control changes
- New integration implementation
- Capacity expansion (adding nodes, storage)

#### Emergency Changes

- Security vulnerability patch (actively exploited)
- Service restoration after critical outage
- Data breach containment
- Critical bug fix (data loss risk)

### 8.3. SaaS Change Windows

**Standard Maintenance Windows:**

| Window | Schedule | Duration | Use Case |
|--------|----------|----------|----------|
| **Weekly Maintenance** | Wednesday 22:00-02:00 CET | 4 hours | Low-risk changes, patches, configuration updates |
| **Monthly Extended** | First Sunday 00:00-06:00 CET | 6 hours | Higher-risk changes, version upgrades, infrastructure changes |
| **Emergency** | Anytime | As needed | Critical security or service restoration |

**Customer Notification Requirements:**

| Change Impact | Advance Notice | Approval |
|---------------|----------------|----------|
| No service disruption | 3 business days | Operations Manager |
| Brief disruption (<15 min) | 5 business days | Operations Manager + Customer Success |
| Extended disruption (>15 min) | 10 business days | Management Team |
| Major functionality change | 10 business days | Management Team + Customer notification |

### 8.4. SaaS Change Procedures

#### Pre-Implementation Checklist
- [ ] Change Request approved by CAB
- [ ] Testing completed in staging environment
- [ ] Rollback plan documented and tested
- [ ] Customer notification sent (if required)
- [ ] On-call engineer briefed
- [ ] Backup completed and verified
- [ ] Monitoring alerts configured for change verification

#### During Implementation
- [ ] Create incident Slack channel: `#change-YYYYMMDD-NNN`
- [ ] Execute change steps per approved plan
- [ ] Document each step and timestamp
- [ ] Monitor metrics and logs for issues
- [ ] Decision point: Proceed or rollback?

#### Post-Implementation
- [ ] Verification tests passed
- [ ] Monitoring confirms stable operation
- [ ] Customer notification of completion (if applicable)
- [ ] Change record updated with outcome
- [ ] Post-Implementation Review scheduled
- [ ] Documentation updated

### 8.5. Change Freeze Periods

**Defined Change Freeze Periods:**
- **Christmas/New Year**: December 20 - January 5 (Hard freeze)
- **Summer Vacation**: July 1-31 (Soft freeze)
- **Major Customer Deliverables**: As announced (Soft freeze)

**During Change Freeze:**
- **Hard Freeze**: Emergency changes only
- **Soft Freeze**: Critical and high-risk changes require CEO approval

## 9. Backup and Recovery

### 9.1. Backup Strategy

**Objectives:**
- **RPO (Recovery Point Objective)**: 6 hours maximum data loss
- **RTO (Recovery Time Objective)**: 4 hours maximum recovery time

### 9.2. Platform-Level Backups

#### Database Backups (PostgreSQL)

| Backup Type | Frequency | Retention | Storage Location |
|-------------|-----------|-----------|------------------|
| **Full Backup** | Daily (02:00 CET) | 7 days local, 30 days offsite | Primary DC + DR DC |
| **Incremental (WAL)** | Continuous | 7 days | Primary DC + DR DC |
| **Point-in-Time Recovery** | Every 6 hours | 7-day window | DR DC |

**Backup Verification:**
- Automated restore test: Weekly (random database)
- Manual restore test: Monthly (full platform)
- DR failover test: Quarterly

#### Object Storage Backups

| Content Type | Backup Method | Retention |
|--------------|---------------|-----------|
| **Templates** | Cross-region replication + versioning | 30 versions |
| **Generated Documents** | Cross-region replication | 90 days hot, 7 years archive |
| **Assets** | Cross-region replication + versioning | 10 versions |
| **Configuration Files** | Git repository + encrypted backup | Indefinite |

#### Kubernetes Configuration Backups

- **Method**: GitOps - all manifests in Git repository
- **Frequency**: On every change (automated)
- **Retention**: Full Git history
- **Secrets**: Separate encrypted backup (Sealed Secrets or Vault)

### 9.3. Backup Monitoring

**Backup Success Alerts:**
- Alert on backup job failure
- Alert on backup size anomaly (>50% change)
- Alert on backup duration exceeding threshold
- Alert on replication lag >30 minutes

**Backup Reports:**
- Daily backup status report (automated email)
- Weekly backup verification summary
- Monthly DR readiness report

### 9.4. Recovery Procedures

#### Database Recovery Scenarios

**Scenario 1: Single Table Corruption**
1. Identify affected tenant and table
2. Restore from most recent backup to temporary database
3. Export affected table data
4. Verify data integrity
5. Import corrected data to production
6. Verify customer functionality

**Scenario 2: Database Primary Failure**
1. Patroni automatically promotes replica to primary (~30 seconds)
2. Verify applications reconnect to new primary
3. Investigate failed primary (hardware, corruption)
4. Rebuild failed primary as new replica
5. Re-sync data from new primary
6. Monitor replication lag until caught up

**Scenario 3: Complete Database Loss**
1. Declare disaster, activate DR plan
2. Promote DR site database to primary
3. Restore most recent backup (if DR site not sync'd)
4. Apply WAL archives to achieve minimal data loss
5. Update DNS to point to DR site
6. Verify application connectivity and functionality
7. Customer notification of recovery

#### Object Storage Recovery

**Scenario 1: Accidental Deletion**
1. Identify deleted object and timestamp
2. Use object versioning to restore previous version
3. Verify restoration with customer

**Scenario 2: Object Corruption**
1. Identify corrupted object
2. Restore from cross-region replica
3. If replica also corrupted, restore from backup

#### Full Platform Recovery (Disaster Recovery)

See **Section 10: Disaster Recovery** for complete procedures.

## 10. Disaster Recovery

### 10.1. DR Strategy

**Disaster Recovery Objectives:**
- **RTO**: 4 hours (maximum time to restore service)
- **RPO**: 6 hours (maximum data loss)
- **DR Site**: Secondary data center in Sweden

**DR Scenarios:**
- Complete data center failure (fire, flood, power loss)
- Multiple simultaneous infrastructure failures
- Prolonged network outage
- Ransomware or catastrophic security breach

### 10.2. DR Architecture

**Primary Site (Production):**
- Entiros DC - Karlstad, Sweden
- Full Kubernetes cluster
- PostgreSQL HA cluster
- Object storage (primary)

**Secondary Site (DR):**
- Entiros DC - Stockholm, Sweden
- Standby Kubernetes cluster (minimal)
- PostgreSQL standby (read-only, async replication)
- Object storage replica (async replication)

**Data Replication:**
- Database: WAL archiving every 6 hours
- Object Storage: Near real-time async replication
- Configuration: Git-based, always current

### 10.3. DR Activation Procedure

**Activation Criteria:**
- Primary data center completely unavailable
- Multiple critical infrastructure failures with no quick resolution
- Recovery time at primary site exceeds 4 hours
- Management decision to activate DR

**Activation Authority:**
- Operations Manager + CEO (or designated deputy)

**DR Activation Steps:**

**Phase 1: Assessment and Decision (T+0 to T+30 min)**
1. Confirm primary site unavailable
2. Assess scope and estimated recovery time
3. Management decision: Activate DR or wait
4. Declare DR activation
5. Notify all stakeholders (internal team, customers, vendors)

**Phase 2: DR Site Preparation (T+30 to T+90 min)**
1. Scale up DR Kubernetes cluster to production capacity
2. Promote PostgreSQL standby to primary (writable)
3. Verify database connectivity and data integrity
4. Update application configurations to use DR database
5. Deploy application pods to DR cluster
6. Verify internal service health checks

**Phase 3: DNS Cutover (T+90 to T+120 min)**
1. Update DNS records to point to DR site IP addresses
2. Wait for DNS propagation (5-15 minutes with low TTL)
3. Monitor traffic shift from primary to DR
4. Verify customer API calls reaching DR site

**Phase 4: Verification and Communication (T+120 to T+240 min)**
1. Test all critical customer workflows
2. Verify monitoring and alerting operational
3. Check SLA dashboards and metrics
4. Send customer notification: "Service restored, operating from DR site"
5. Begin post-incident review planning

**Phase 5: Stabilization (T+240+)**
1. Monitor DR site performance and stability
2. Address any issues discovered during failover
3. Plan return to primary site (when available)
4. Coordinate with data center partner on primary site recovery

### 10.4. Failback to Primary Site

**When to Failback:**
- Primary site fully recovered and tested
- DR site stable for at least 24 hours
- Planned maintenance window available
- Customer notification completed (10 days advance)

**Failback Procedure:**
1. Sync data from DR site to primary site
2. Verify primary site readiness (full testing)
3. Plan cutover during maintenance window
4. Execute reverse of DR activation procedure
5. Update DNS back to primary site
6. Monitor for 48 hours post-failback
7. Document lessons learned

### 10.5. DR Testing

| Test Type | Frequency | Scope |
|-----------|-----------|-------|
| **Backup Restore** | Monthly | Restore single tenant database, verify integrity |
| **Partial Failover** | Quarterly | Failover non-critical services to DR, verify functionality |
| **Full DR Exercise** | Annually | Complete failover simulation, all services, customer notification simulation (not actual) |
| **DR Plan Review** | Quarterly | Review and update DR procedures, contact lists |

## 11. Capacity Management

### 11.1. Capacity Management Goals

- Ensure adequate resources to meet current and future demand
- Avoid service degradation due to resource constraints
- Optimize resource utilization and cost
- Plan capacity expansion in advance of need

### 11.2. Capacity Monitoring

**Key Capacity Metrics:**

| Metric | Current Threshold | Warning | Critical |
|--------|-------------------|---------|----------|
| **CPU Utilization** (cluster average) | 70% | >80% sustained | >90% |
| **Memory Utilization** (cluster average) | 75% | >85% sustained | >95% |
| **Storage Usage** (total) | - | >80% | >90% |
| **Database Connections** | 200 max | >150 | >180 |
| **API Request Rate** | 1000 req/sec capacity | >700 req/sec | >900 req/sec |
| **Document Generation Queue** | - | >500 jobs queued | >1000 jobs |

### 11.3. Capacity Planning Process

**Monthly Capacity Review:**
1. Analyze usage trends (past 30 days)
2. Project growth (next 90 days)
3. Identify capacity bottlenecks
4. Plan scaling actions if thresholds will be exceeded
5. Document in monthly operations report

**Scaling Triggers:**
- Resource utilization trending toward warning threshold
- Sustained periods near capacity
- New customer onboarding with significant usage
- Seasonal peaks (if known)

**Scaling Actions:**

| Resource | Scaling Method | Timeline |
|----------|----------------|----------|
| **Compute (Kubernetes)** | Add worker nodes via cluster autoscaler | Automatic (15 min) or manual (4 hours) |
| **Database** | Vertical scaling (larger instance) or add read replicas | 4-8 hours planned downtime |
| **Storage** | Add storage capacity | No downtime (elastic) |
| **Network** | Upgrade bandwidth with ISP | 1-2 weeks coordination |

### 11.4. Capacity Forecasting

**Forecasting Model:**
- Historical growth rate (monthly)
- Known customer pipeline (new customers onboarding)
- Seasonal factors (if applicable)
- Planned feature releases increasing resource usage

**12-Month Capacity Plan:**
- Reviewed quarterly
- Aligned with budget planning
- Presented to management with cost projections

## 12. Security Operations

### 12.1. Security Operations Principles

**SaaS security operations implement SW-ISMS-POL-001 (Information Security Policy) with focus on:**
- 24x7 security monitoring and threat detection
- Rapid incident response to security threats
- Proactive vulnerability management
- Secure access controls and logging
- Compliance with ISO 27001 requirements

### 12.2. Security Monitoring

**Security Monitoring Tools:**
- **Fortinet FortiGate**: Network-level threat detection (IDS/IPS)
- **ELK Security**: SIEM capabilities, log correlation
- **Kubernetes Audit Logs**: API access and configuration changes
- **Falco**: Runtime security monitoring for containers
- **Database Audit Logs**: Sensitive data access tracking

**Security Dashboards:**
- Failed authentication attempts
- Privilege escalation attempts
- Cross-tenant access attempts (should be zero)
- Unusual API patterns (potential abuse)
- Security policy violations
- Certificate expiration warnings

### 12.3. Access Control

**Administrative Access:**
- **VPN Required**: All administrative access via VPN with MFA
- **Bastion Hosts**: Jump servers for SSH access to infrastructure
- **Just-In-Time (JIT) Access**: Temporary elevated privileges, logged and monitored
- **Principle of Least Privilege**: Users have minimum access needed

**Access Reviews:**
- Quarterly review of all administrative accounts
- Immediate revocation for departed staff
- Annual access recertification by managers

### 12.4. Vulnerability Management

**Vulnerability Scanning:**
- **Infrastructure Scanning**: Weekly automated scans (Nessus or equivalent)
- **Container Scanning**: On every build (integrated with CI/CD)
- **Dependency Scanning**: Daily scans for vulnerable libraries
- **Penetration Testing**: Annual third-party assessment

**Vulnerability Response:**
| Severity | Response Time | Action |
|----------|---------------|--------|
| **Critical** (CVSS 9-10) | 24 hours | Emergency patch, potential service disruption accepted |
| **High** (CVSS 7-8.9) | 7 days | Planned patch during maintenance window |
| **Medium** (CVSS 4-6.9) | 30 days | Include in next scheduled release |
| **Low** (CVSS 0-3.9) | 90 days | Backlog, address when convenient |

### 12.5. Logging and Audit Trails

**What is Logged:**
- All authentication attempts (success and failure)
- API access (with tenant context)
- Administrative actions (configuration changes, database access)
- Data access (document generation, template changes)
- Security events (firewall blocks, IDS alerts)

**Log Retention:**
- **Application Logs**: 7 days (hot in Elasticsearch), 90 days (archive)
- **Audit Logs**: 7 years (compliance requirement)
- **Security Logs**: 2 years

**Log Analysis:**
- Automated correlation for security events
- Daily review of security logs by SOC
- Weekly security summary report to CISO

### 12.6. Security Incident Response

**Security incidents follow SW-ISMS-PRO-001 with these SaaS-specific additions:**

**Security Incident Types:**
- Unauthorized access or data breach
- DDoS attack
- Malware detection
- Insider threat
- Third-party breach (OpenText, data center)

**Security Incident Response Team:**
- **CISO**: Incident command for security incidents
- **Operations Manager**: Technical coordination
- **Legal/Privacy Officer**: GDPR breach assessment and notification
- **Customer Success**: Customer communication
- **External**: Third-party forensics (if needed)

**Immediate Security Actions:**
- Isolate affected systems (network segmentation)
- Preserve evidence (logs, disk images)
- Assess scope and impact
- Containment actions (block IPs, disable accounts)
- Notify CISO and management immediately

## 13. Reporting

### 13.1. SLA Reporting

**Monthly SLA Report** (delivered by 5th business day of following month):

**Recipients:**
- Each customer (via Customer Success Manager)
- Management Team
- Operations Team

**Report Contents:**
- Service uptime percentage (current month)
- Planned vs. unplanned downtime breakdown
- Incident summary (count by severity, MTTR)
- Performance metrics (API response times)
- SLA status (met/not met)
- Credits applied (if SLA breach)

**SLA Calculation:**
```
Uptime % = ((Total Minutes in Month - Unplanned Downtime Minutes) / Total Minutes in Month) × 100

Target: ≥99.9% (allows ~43 minutes unplanned downtime per month)
```

**SLA Exclusions:**
- Planned maintenance (with required advance notice)
- Customer-caused issues (misconfiguration, quota exceeded)
- Force majeure events
- Third-party service outages beyond Swedwise control

### 13.2. Operational Metrics Reports

**Daily Operations Summary** (automated):
- Incidents opened/closed (past 24 hours)
- System health snapshot
- Backup status
- Capacity utilization

**Weekly Operations Report**:
- Incident summary (count, MTTR, trends)
- Change summary (completed, upcoming)
- Capacity trends
- Action items and follow-ups

**Monthly Operations Report** (to Management Team):
- SLA performance summary (all customers)
- Incident analysis and trends
- Problem management summary
- Change success rate
- Capacity planning updates
- Security summary
- Continuous improvement initiatives

### 13.3. Customer Usage Reports

**Quarterly Usage Report** (to each customer):
- Documents generated (count, trends)
- Notifications sent (email, SMS breakdown)
- Storage consumed
- API call volume
- User activity (active users, login frequency)
- Performance trends (response times)
- Recommendations (optimization opportunities)

## 14. Continuous Improvement

### 14.1. Improvement Sources

- Post-Incident Reviews (lessons learned)
- Problem Management findings
- Customer feedback and complaints
- Operations team suggestions
- Industry best practices
- Audit findings
- Monitoring and metrics analysis

### 14.2. Improvement Process

1. **Identify Improvement Opportunity**
   - Problem identified through various sources
   - Document current state and desired state

2. **Assess and Prioritize**
   - Impact: High, Medium, Low
   - Effort: High, Medium, Low
   - Priority: Impact vs. Effort matrix

3. **Plan Improvement**
   - Define solution
   - Resource requirements
   - Implementation timeline
   - Success criteria

4. **Implement**
   - Follow Change Management procedure
   - Communicate to team
   - Train staff if needed

5. **Verify and Close**
   - Measure against success criteria
   - Document lessons learned
   - Share with team

### 14.3. Continuous Improvement Metrics

| Metric | Target | Purpose |
|--------|--------|---------|
| **MTTR (Mean Time to Resolve)** | Trend downward | Measure incident response efficiency |
| **Incident Recurrence Rate** | <10% | Measure problem management effectiveness |
| **Change Success Rate** | ≥95% | Measure change quality |
| **Customer Satisfaction (CSAT)** | ≥4.0/5.0 | Measure overall service quality |
| **Unplanned Downtime** | <43 min/month | Measure reliability |

### 14.4. Regular Review Meetings

| Meeting | Frequency | Purpose |
|---------|-----------|---------|
| **Daily Standup** | Daily (09:00 CET) | Operational coordination, issue escalation |
| **Weekly Ops Review** | Monday (10:00 CET) | Review previous week, plan upcoming week |
| **Monthly Ops Meeting** | First Friday of month | Metrics review, continuous improvement, planning |
| **Quarterly Service Review** | Every quarter | Strategic review with management, capacity planning |

## 15. Component-Specific Operations

This document provides **platform-wide operations procedures**. For component-specific operational details, refer to:

| Addendum Document | Scope |
|-------------------|-------|
| **SW-SAAS-OPS-COMP-001** | Operations Addendum - Communications |
| **SW-SAAS-OPS-COMP-002** | Operations Addendum - Notifications |
| **[Future]** | Operations Addendum - E-Archive |
| **[Future]** | Operations Addendum - E-Sign Integration |

**Component addendums must reference and comply with this main Operations Guide.**

## 16. Inputs and Outputs

**Inputs:**
- Monitoring alerts and metrics
- Customer support tickets
- Change requests
- Vulnerability scan results
- Capacity planning data
- Audit findings

**Outputs:**
- Incident reports and post-incident reviews
- Problem records and RCA reports
- Change implementation records
- SLA reports (monthly)
- Operations metrics reports (daily, weekly, monthly)
- Capacity planning forecasts
- Security event summaries

## 17. Records

| Record | Retention Period | Location | Owner |
|--------|------------------|----------|-------|
| Incident Reports | 3 years | [TBD - Incident system] | Operations Manager |
| Problem Records | 5 years | [TBD - Problem system] | Operations Manager |
| Change Records | 3 years | [TBD - Change system] | Operations Manager |
| SLA Reports | 7 years | [TBD - Document repository] | Customer Success Manager |
| Operational Logs | 7 days (hot), 90 days (archive) | ELK Stack | Operations Manager |
| Security Audit Logs | 7 years | [TBD - SIEM] | CISO |
| Backup Verification Reports | 2 years | [TBD - Document repository] | Operations Manager |
| DR Test Reports | 5 years | [TBD - Document repository] | Operations Manager |

## 18. Related Documents

**IMS Procedures:**
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-IMS-PRO-008: Change Management Procedure
- SW-IMS-PRO-002: Risk Assessment Procedure
- SW-IMS-PRO-007: Communication Procedure

**SaaS Documentation:**
- SW-SAAS-ARCH-001: Swedwise Communications Technical Architecture
- SW-SAAS-SVC-001: Service Description
- SW-SAAS-OPS-COMP-001: Operations Addendum - Communications
- SW-SAAS-OPS-COMP-002: Operations Addendum - Notifications
- SW-SAAS-SUP-001: Support Procedures [TBD]

**External Standards:**
- ISO 9001:2015 - Clause 8.5 (Operations)
- ISO 27001:2022 - Clause 8.1 (Operational planning and control)
- ITIL 4 - Service Operation

## 19. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | SaaS Operations Manager | Initial operations guide creation | Management Team |

**Next Review Date**: [TBD - 6 months from effective date for initial version, then annually]

**Document Classification**: Internal

**Document Owner**: SaaS Operations Manager

---

*This procedure is approved by Swedwise AB management and is effective from the date specified above. All operations staff are required to read, understand, and comply with this procedure.*
