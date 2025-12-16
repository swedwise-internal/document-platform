---
document_id: SW-SAAS-ARCH-001
title: Swedwise SaaS Platform - Technical Architecture
doc_type: guideline
version: "1.0"
status: draft
classification: confidential
owner: Technical Lead
component: general
effective_date: 2025-01-15
review_date: 2026-01-15
related_documents:
  - SW-SAAS-SVC-001
  - SW-SAAS-ARCH-COMP-001
  - SW-SAAS-ARCH-COMP-002
---

# Swedwise SaaS Platform - Technical Architecture

**Platform:** Swedwise SaaS Platform
**Date:** 2025-01-15
**Version:** 1.0
**Classification:** Confidential

---

## Executive Summary

This document describes the technical architecture of the **Swedwise SaaS Platform**, deployed on a Kubernetes-based infrastructure in a Swedish data center. The architecture is designed for multi-tenancy, high availability, security, and scalability to support enterprise-grade SaaS service components.

**Platform Characteristics:**
- Multi-tenant SaaS architecture with strict data isolation
- Kubernetes orchestration for automatic scaling and resilience
- 99.9% availability SLA with redundant components
- Swedish data residency for GDPR compliance
- ISO 27001 certified security controls

**Service Components:**
The platform hosts multiple service components, each documented in separate technical architecture addendums:

| Component | Document ID | Description |
|-----------|-------------|-------------|
| **Communications** | SW-SAAS-ARCH-COMP-001 | OpenText Exstream document generation |
| **Notifications** | SW-SAAS-ARCH-COMP-002 | Multi-channel notification delivery (Email, SMS) |
| **[Future]** | - | Additional service components |

---

## 1. High-Level Architecture

### 1.1. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CUSTOMER LAYER                                 │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │
│  │   Customer   │  │   Customer   │  │   Customer   │                 │
│  │   Tenant A   │  │   Tenant B   │  │   Tenant C   │                 │
│  │              │  │              │  │              │                 │
│  │  Users/Apps  │  │  Users/Apps  │  │  Users/Apps  │                 │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                 │
└─────────┼──────────────────┼──────────────────┼────────────────────────┘
          │                  │                  │
          └──────────────────┴──────────────────┘
                             │
                   ┌─────────▼─────────┐
                   │   Internet/VPN    │
                   └─────────┬─────────┘
                             │
┌────────────────────────────▼──────────────────────────────────────────┐
│                     NETWORK SECURITY LAYER                             │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Fortinet Next-Gen Firewall (IDS/IPS)                        │   │
│  │  - DDoS Protection                                            │   │
│  │  - Threat Intelligence                                        │   │
│  │  - SSL/TLS Inspection                                         │   │
│  └──────────────────────┬────────────────────────────────────────┘   │
└─────────────────────────┼──────────────────────────────────────────────┘
                          │
┌─────────────────────────▼──────────────────────────────────────────────┐
│                   LOAD BALANCING & INGRESS LAYER                       │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  Kubernetes Ingress Controllers (Redundant)                    │  │
│  │  - TLS Termination                                             │  │
│  │  - Layer 7 Routing                                             │  │
│  │  - Rate Limiting                                               │  │
│  └────────────────────────┬───────────────────────────────────────┘  │
└─────────────────────────┼──────────────────────────────────────────────┘
                          │
┌─────────────────────────▼──────────────────────────────────────────────┐
│                     KUBERNETES CLUSTER LAYER                           │
│                      (OpenText Experience Cloud)                       │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                     CONTROL PLANE                              │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐                     │  │
│  │  │   etcd   │  │   API    │  │Scheduler │                     │  │
│  │  │  (HA)    │  │  Server  │  │Controller│                     │  │
│  │  └──────────┘  └──────────┘  └──────────┘                     │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                     WORKER NODES (Redundant)                   │  │
│  │                                                                │  │
│  │  ┌─────────────────────────────────────────────────────────┐  │  │
│  │  │  APPLICATION POD LAYER                                  │  │  │
│  │  │                                                         │  │  │
│  │  │  ┌───────────────┐  ┌───────────────┐  ┌─────────────┐│  │  │
│  │  │  │  Service      │  │  Service      │  │  Tenant     ││  │  │
│  │  │  │  Component A  │  │  Component B  │  │  Management ││  │  │
│  │  │  │  (Pods)       │  │  (Pods)       │  │  Services   ││  │  │
│  │  │  │               │  │               │  │             ││  │  │
│  │  │  │  Multi-tenant │  │  Multi-tenant │  │             ││  │  │
│  │  │  └───────┬───────┘  └───────┬───────┘  └──────┬──────┘│  │  │
│  │  └──────────┼──────────────────┼─────────────────┼───────┘  │  │
│  │             │                  │                 │          │  │
│  │  ┌──────────▼──────────────────▼─────────────────▼───────┐  │  │
│  │  │  SHARED SERVICES LAYER                                │  │  │
│  │  │                                                        │  │  │
│  │  │  ┌────────────┐  ┌────────────┐  ┌────────────────┐  │  │  │
│  │  │  │ Identity & │  │   API      │  │   Integration  │  │  │  │
│  │  │  │   Auth     │  │  Gateway   │  │     Broker     │  │  │  │
│  │  │  │  (SSO/MFA) │  │            │  │                │  │  │  │
│  │  │  └────────────┘  └────────────┘  └────────────────┘  │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────▼──────────────────────────────────────────────┐
│                       DATA PERSISTENCE LAYER                           │
│                                                                        │
│  ┌────────────────┐  ┌────────────────┐  ┌─────────────────────┐    │
│  │  PostgreSQL    │  │   Document     │  │   Object Storage    │    │
│  │  Cluster (HA)  │  │   Database     │  │   (S3-compatible)   │    │
│  │                │  │   (Per-Tenant) │  │                     │    │
│  │  - Tenant Meta │  │                │  │  - Generated Docs   │    │
│  │  - Config DB   │  │  - Templates   │  │  - Assets/Media     │    │
│  │  - User Data   │  │  - Job History │  │  - Archived Output  │    │
│  └────────────────┘  └────────────────┘  └─────────────────────┘    │
└────────────────────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────▼──────────────────────────────────────────────┐
│                   MONITORING & OBSERVABILITY LAYER                     │
│                                                                        │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────────┐   │
│  │ Prometheus │  │  Grafana   │  │    ELK     │  │  Alerting    │   │
│  │  Metrics   │  │ Dashboards │  │   Logs     │  │   Manager    │   │
│  └────────────┘  └────────────┘  └────────────┘  └──────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────▼──────────────────────────────────────────────┐
│                     BACKUP & DISASTER RECOVERY                         │
│                                                                        │
│  Primary DC (Sweden)  ───────────────────▶  Secondary DC (Sweden)     │
│  - Every 6 hours                             - Async Replication       │
│  - 7 days retention                          - DR Site                 │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.2. Platform Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Orchestration** | Kubernetes | Container orchestration, auto-scaling, self-healing |
| **Container Runtime** | Docker | Application containerization |
| **Database** | PostgreSQL (HA cluster) | Relational data storage |
| **Object Storage** | S3-compatible storage | Document, template, and asset storage |
| **Cache** | Redis Cluster | Session management, caching |
| **Message Queue** | RabbitMQ/Kafka | Asynchronous job processing |
| **Load Balancing** | Kubernetes Ingress / NGINX | Traffic distribution, SSL/TLS termination |
| **Firewall** | Fortinet Next-Gen Firewall | Network security, IDS/IPS |
| **Monitoring** | Prometheus + Grafana | Metrics collection and visualization |
| **Logging** | ELK Stack (Elasticsearch, Logstash, Kibana) | Centralized logging and analysis |
| **Secrets Management** | Kubernetes Secrets / HashiCorp Vault | Secure credential storage |

**Service Component Technologies** (see component addendums for details):
- Communications: OpenText Communications (Exstream)
- Notifications: OpenText Notifications + Email/SMS Gateways

---

## 2. Platform Component Overview

### 2.1. Kubernetes Cluster Architecture

The platform runs on a **dedicated Kubernetes cluster** with the following characteristics:

#### Control Plane (High Availability)
- **3x Master Nodes**: Redundant control plane for fault tolerance
- **etcd Cluster**: Distributed key-value store for cluster state (3+ nodes)
- **API Server**: RESTful API for cluster management
- **Scheduler**: Pod placement and resource allocation
- **Controller Manager**: Cluster-level functions (replication, endpoints, service accounts)

#### Worker Nodes
- **Minimum 6 Worker Nodes**: Distributed across multiple physical hosts
- **Auto-scaling**: Dynamic node provisioning based on workload
- **Taints and Tolerations**: Dedicated nodes for sensitive workloads
- **Node Affinity**: Pod placement rules for tenant isolation

#### Pod Architecture
Each application component runs as a **microservice in a pod**:

**Platform Services:**

| Pod Type | Replicas | Resources | Purpose |
|----------|----------|-----------|---------|
| **Tenant Management** | 2+ | 2 CPU, 4 GB RAM | Multi-tenant orchestration |
| **API Gateway** | 3+ | 2 CPU, 4 GB RAM | API routing and rate limiting |
| **Auth Service** | 3+ | 2 CPU, 4 GB RAM | Authentication and SSO |
| **Integration Broker** | 2+ | 2 CPU, 8 GB RAM | External system integration |

**Service Component Pods** (see component addendums for detailed specifications):

| Service Component | Document | Pod Types |
|-------------------|----------|-----------|
| **Communications** | SW-SAAS-ARCH-COMP-001 | Exstream API, Designer |
| **Notifications** | SW-SAAS-ARCH-COMP-002 | Notification Engine, Queue Workers |

### 2.2. Database Layer

#### PostgreSQL High-Availability Cluster

```
┌─────────────────────────────────────────────────────────┐
│         PostgreSQL HA Cluster (Patroni)                 │
│                                                         │
│  ┌─────────────┐     ┌─────────────┐     ┌──────────┐ │
│  │   Primary   │────▶│  Replica 1  │────▶│Replica 2 │ │
│  │   (Write)   │     │   (Read)    │     │  (Read)  │ │
│  └─────────────┘     └─────────────┘     └──────────┘ │
│         │                                               │
│         ▼                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │  WAL Archiving & Point-in-Time Recovery        │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Key Features:**
- **Automatic Failover**: Patroni manages leader election (< 30 seconds RTO)
- **Streaming Replication**: Synchronous replication to primary replica
- **Read Replicas**: Scale read operations across multiple replicas
- **Connection Pooling**: PgBouncer for efficient connection management

**Database Separation:**
- **Platform Database**: Tenant metadata, user accounts, subscriptions
- **Tenant Databases**: Per-tenant data isolation (dedicated schemas or databases)
- **Audit Database**: Security events, access logs, change tracking

#### Object Storage (S3-Compatible)

**Storage Classes:**
- **Hot Storage**: Frequently accessed documents (generated output, active templates)
- **Warm Storage**: Archived documents (30-90 days)
- **Cold Storage**: Long-term archival (compliance retention)

**Storage Structure per Tenant:**
```
/tenants/{tenant-id}/
  ├── templates/          # Document templates
  ├── assets/             # Images, fonts, branding
  ├── output/             # Generated documents
  │   ├── active/         # Last 30 days
  │   └── archive/        # Older documents
  └── uploads/            # Customer-uploaded content
```

### 2.3. Platform Services

The Swedwise SaaS Platform provides foundational multi-tenant capabilities:

#### Core Platform Services
- **Tenant Provisioning**: Automated tenant creation and configuration
- **Identity Management**: Centralized authentication with SSO/SAML support
- **API Management**: Rate limiting, throttling, API versioning
- **Usage Metering**: Transaction tracking for billing
- **Analytics Engine**: Usage analytics and reporting

#### Integration Framework
- **REST API**: Standard RESTful APIs for all services
- **Webhooks**: Event-driven integrations
- **File Transfer**: SFTP/FTPS for batch processing
- **Message Queue**: Asynchronous job processing (Kafka/RabbitMQ)

#### Service Component Integration
Each service component integrates with the platform through:
- Shared authentication and authorization
- Common API gateway routing
- Unified monitoring and logging
- Centralized configuration management

For component-specific integration details, see the respective architecture addendums.

---

## 3. Multi-Tenant Architecture

### 3.1. Tenant Isolation Model

The platform implements a **hybrid multi-tenant architecture** with multiple layers of isolation:

```
┌─────────────────────────────────────────────────────────────┐
│                    ISOLATION LAYERS                         │
│                                                             │
│  Layer 1: Application Logic (Shared Pods)                  │
│  ├── Shared application code                               │
│  ├── Per-tenant configuration injection                    │
│  └── Context-based data filtering                          │
│                                                             │
│  Layer 2: Database Isolation                               │
│  ├── Separate database schemas per tenant                  │
│  ├── Row-level security policies                           │
│  └── Encrypted tenant keys                                 │
│                                                             │
│  Layer 3: Storage Isolation                                │
│  ├── Tenant-specific object storage paths                  │
│  ├── Access control policies (IAM)                         │
│  └── Encryption with tenant-specific keys                  │
│                                                             │
│  Layer 4: Network Isolation (Optional for Sensitive)       │
│  ├── Dedicated namespaces                                  │
│  ├── Network policies                                      │
│  └── Private networking                                    │
└─────────────────────────────────────────────────────────────┘
```

### 3.2. Tenant Configuration

Each tenant has a dedicated configuration profile:

```yaml
tenant:
  id: "tenant-abc-123"
  name: "Acme Corporation"
  status: active
  tier: enterprise

  resources:
    database_schema: "tenant_abc_123"
    storage_bucket: "tenants/tenant-abc-123/"
    namespace: "default"  # or dedicated namespace

  quotas:
    max_users: 100
    max_storage_gb: 500
    max_monthly_documents: 100000
    max_monthly_notifications: 500000
    api_rate_limit: 1000/min

  features:
    sso_enabled: true
    api_access: true
    custom_branding: true
    advanced_analytics: false

  security:
    encryption_key_id: "key-abc-123"
    data_classification: "confidential"
    ip_whitelist: ["203.0.113.0/24"]
    mfa_required: true
```

### 3.3. Data Isolation Strategy

#### Database-Level Isolation

**Option 1: Schema-per-Tenant (Current Implementation)**
- Each tenant has a dedicated PostgreSQL schema
- Shared database instance for operational efficiency
- Schema-level access control
- Suitable for standard tier customers

**Option 2: Database-per-Tenant (Enterprise Tier)**
- Dedicated PostgreSQL database for enterprise customers
- Complete logical separation
- Independent backup/restore capabilities
- Higher isolation for regulatory requirements

#### Application-Level Isolation
- **Tenant Context Injection**: Every request carries tenant ID
- **Query Filtering**: All database queries filtered by tenant ID
- **Data Validation**: Cross-tenant access attempts blocked at application layer
- **Audit Logging**: All data access logged with tenant context

### 3.4. Resource Allocation

#### Pod Resource Limits (Per Tenant Workload)
```yaml
resources:
  requests:
    memory: "2Gi"
    cpu: "1000m"
  limits:
    memory: "4Gi"
    cpu: "2000m"
```

#### Storage Quotas
- **Per-Tenant Storage Quota**: Enforced at object storage level
- **Database Size Monitoring**: Alerts when tenant exceeds 80% of quota
- **Automatic Scaling**: Option to automatically increase quota (with billing)

---

## 4. Network Architecture and Security

### 4.1. Network Topology

```
┌─────────────────────────────────────────────────────────────┐
│                       INTERNET                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                   ┌─────▼─────┐
                   │    DNS    │
                   │ (CloudFlare/Route53)
                   └─────┬─────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    DMZ ZONE                                 │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Fortinet Next-Gen Firewall (Active/Passive HA)    │   │
│  │  - Public IP: External interface                   │   │
│  │  - Private IP: Internal interface                  │   │
│  │  - Management IP: Admin interface                  │   │
│  └─────────────────────┬───────────────────────────────┘   │
└────────────────────────┼─────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────┐
│                  APPLICATION ZONE                            │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Kubernetes Cluster Network (Calico CNI)            │   │
│  │                                                      │   │
│  │  Pod Network: 10.244.0.0/16                         │   │
│  │  Service Network: 10.96.0.0/12                      │   │
│  │  Node Network: 192.168.1.0/24                       │   │
│  │                                                      │   │
│  │  ┌────────────────────────────────────────────────┐ │   │
│  │  │  Network Policies (Microsegmentation)         │ │   │
│  │  │  - Pod-to-Pod rules                           │ │   │
│  │  │  - Namespace isolation                        │ │   │
│  │  │  - Egress filtering                           │ │   │
│  │  └────────────────────────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────┐
│                    DATA ZONE                                 │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐   │
│  │ PostgreSQL   │  │  Object      │  │  Backup         │   │
│  │ Private IP   │  │  Storage     │  │  Storage        │   │
│  │ 192.168.2.x  │  │  Private Net │  │  Air-gapped     │   │
│  └──────────────┘  └──────────────┘  └─────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

### 4.2. Security Layers

#### Layer 1: Perimeter Security
- **DDoS Protection**: CloudFlare or equivalent CDN with DDoS mitigation
- **Web Application Firewall (WAF)**: OWASP Top 10 protection
- **Rate Limiting**: API and HTTP rate limiting at edge
- **GeoIP Filtering**: Optional geographic access restrictions

#### Layer 2: Network Security
- **Next-Gen Firewall**: Fortinet FortiGate (or equivalent)
  - Intrusion Detection System (IDS)
  - Intrusion Prevention System (IPS)
  - SSL/TLS Inspection
  - Application-layer filtering
  - Threat intelligence feeds

- **VPN Access**: Secure administrative access
  - IPsec VPN for site-to-site connectivity
  - SSL VPN for remote administration
  - Multi-factor authentication required

#### Layer 3: Kubernetes Network Security
- **Calico Network Policies**: Pod-level microsegmentation
  ```yaml
  # Example: Restrict database access
  apiVersion: networking.k8s.io/v1
  kind: NetworkPolicy
  metadata:
    name: postgres-access-policy
  spec:
    podSelector:
      matchLabels:
        app: postgresql
    ingress:
    - from:
      - podSelector:
          matchLabels:
            tier: application
      ports:
      - protocol: TCP
        port: 5432
  ```

- **Service Mesh (Optional)**: Istio/Linkerd for mTLS between services
- **Pod Security Policies**: Restrict privileged containers, host networking
- **Secrets Management**: Kubernetes Secrets or HashiCorp Vault

#### Layer 4: Application Security
- **Authentication**: OpenID Connect (OIDC) / SAML 2.0
- **Authorization**: Role-Based Access Control (RBAC)
- **API Security**:
  - OAuth 2.0 for API access
  - API keys with rotation policy
  - JWT tokens with short expiration
- **Input Validation**: OWASP validation at API gateway
- **CORS Policies**: Strict cross-origin resource sharing

#### Layer 5: Data Security
- **Encryption at Rest**:
  - AES-256 encryption for databases
  - S3 server-side encryption (SSE)
  - Tenant-specific encryption keys (optional)

- **Encryption in Transit**:
  - TLS 1.3 for all external connections
  - mTLS for internal service communication
  - Certificate rotation (Let's Encrypt or enterprise CA)

- **Data Loss Prevention (DLP)**:
  - Sensitive data detection in documents
  - PII/GDPR compliance scanning
  - Automated data classification

### 4.3. Security Monitoring

```
┌─────────────────────────────────────────────────────────────┐
│               SECURITY MONITORING STACK                     │
│                                                             │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐ │
│  │  Firewall      │  │  Kubernetes    │  │ Application  │ │
│  │  Logs          │──│  Audit Logs    │──│ Logs         │ │
│  └────────┬───────┘  └────────┬───────┘  └──────┬───────┘ │
│           │                   │                  │         │
│           └───────────────────┴──────────────────┘         │
│                               │                            │
│                     ┌─────────▼─────────┐                  │
│                     │  Log Aggregation  │                  │
│                     │  (Logstash/Fluentd)│                 │
│                     └─────────┬─────────┘                  │
│                               │                            │
│                     ┌─────────▼─────────┐                  │
│                     │  SIEM Platform    │                  │
│                     │  (ELK/Splunk)     │                  │
│                     │                   │                  │
│                     │  - Correlation    │                  │
│                     │  - Alerting       │                  │
│                     │  - Dashboards     │                  │
│                     └─────────┬─────────┘                  │
│                               │                            │
│                     ┌─────────▼─────────┐                  │
│                     │  Incident Response│                  │
│                     │  (PagerDuty/Ops)  │                  │
│                     └───────────────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

**Security Events Monitored:**
- Failed authentication attempts
- Privilege escalation attempts
- Unusual API access patterns
- Cross-tenant access attempts
- Database query anomalies
- Network traffic anomalies
- Configuration changes
- Certificate expiration warnings

---

## 5. Scalability and High Availability

### 5.1. Horizontal Scaling

#### Automatic Pod Scaling (HPA)
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: opentext-comms-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: opentext-comms-api
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  - type: Pods
    pods:
      metric:
        name: document_generation_queue_depth
      target:
        type: AverageValue
        averageValue: "100"
```

**Scaling Triggers:**
- **CPU utilization** > 70%
- **Memory utilization** > 80%
- **Request queue depth** > 100 jobs
- **Response time** > 2 seconds (p95)
- **Custom metrics**: Documents/minute, notifications/minute

#### Cluster Autoscaling
- **Kubernetes Cluster Autoscaler**: Adds worker nodes when pods can't be scheduled
- **Node Pools**: Different node types for different workloads
  - **Compute-optimized**: Document generation
  - **Memory-optimized**: Template caching
  - **General-purpose**: Application services

### 5.2. High Availability Design

#### Service-Level HA

| Component | HA Configuration | RPO | RTO |
|-----------|-----------------|-----|-----|
| **Control Plane** | 3 master nodes, etcd quorum | N/A | < 1 min |
| **Application Pods** | Min 3 replicas, anti-affinity | N/A | < 30 sec |
| **PostgreSQL** | Primary + 2 replicas, Patroni | < 1 min | < 30 sec |
| **Object Storage** | 3x replication | 0 | Immediate |
| **Load Balancers** | Active/Active | N/A | < 5 sec |
| **Firewall** | Active/Passive HA | N/A | < 10 sec |

#### Availability Zones
- **Multi-AZ Deployment**: Worker nodes distributed across 3 availability zones
- **Pod Anti-Affinity**: Replicas scheduled on different physical hosts
  ```yaml
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchExpressions:
          - key: app
            operator: In
            values:
            - opentext-comms
        topologyKey: "kubernetes.io/hostname"
  ```

#### Health Checks
```yaml
# Liveness probe: Restart unhealthy containers
livenessProbe:
  httpGet:
    path: /health/live
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 3

# Readiness probe: Remove unhealthy pods from load balancer
readinessProbe:
  httpGet:
    path: /health/ready
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 5
  timeoutSeconds: 3
  failureThreshold: 2
```

### 5.3. Load Balancing Strategy

#### External Load Balancing
- **Layer 4 (TCP/UDP)**: Firewall load balancing to Kubernetes ingress
- **Layer 7 (HTTP/HTTPS)**: Kubernetes Ingress Controllers
  - Session affinity (sticky sessions) for stateful operations
  - Weighted routing for blue/green deployments
  - Geographic routing (future: multi-region)

#### Internal Load Balancing
- **Kubernetes Services**: ClusterIP services for internal communication
- **Service Mesh**: Istio for advanced traffic management (optional)
  - Circuit breaking
  - Retry policies
  - Timeout configuration
  - A/B testing

---

## 6. Disaster Recovery Architecture

### 6.1. DR Strategy

**DR Objectives:**
- **RTO (Recovery Time Objective)**: 4 hours
- **RPO (Recovery Point Objective)**: 6 hours (backup frequency)
- **SLA Impact**: DR events excluded from availability SLA calculation

### 6.2. Backup Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  PRIMARY DATA CENTER                        │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │  PostgreSQL  │  │    Object    │  │  Kubernetes     │  │
│  │  Continuous  │  │    Storage   │  │  Config         │  │
│  │  Archiving   │  │  Replication │  │  Backups        │  │
│  └──────┬───────┘  └──────┬───────┘  └────────┬────────┘  │
│         │                 │                    │           │
│         └─────────────────┴────────────────────┘           │
│                           │                                │
│                  Every 6 hours                             │
│                           │                                │
└───────────────────────────┼────────────────────────────────┘
                            │
                  ┌─────────▼─────────┐
                  │  Secure Transfer  │
                  │  (TLS/VPN)        │
                  └─────────┬─────────┘
                            │
┌───────────────────────────▼────────────────────────────────┐
│              SECONDARY DATA CENTER (DR SITE)               │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐ │
│  │  PostgreSQL  │  │    Object    │  │  Kubernetes     │ │
│  │  Standby     │  │    Storage   │  │  Standby        │ │
│  │  (Read-only) │  │  Replica     │  │  Cluster        │ │
│  └──────────────┘  └──────────────┘  └─────────────────┘ │
│                                                            │
│  - 7-day backup retention                                 │
│  - Point-in-time recovery capability                      │
│  - Quarterly DR testing                                   │
└────────────────────────────────────────────────────────────┘
```

### 6.3. Backup Components

#### Database Backups
- **Continuous WAL Archiving**: PostgreSQL Write-Ahead Logs streamed to DR site
- **Daily Full Backups**: Automated via pg_basebackup
- **Incremental Backups**: Every 6 hours using WAL archiving
- **Point-in-Time Recovery**: Restore to any point within 7-day window
- **Backup Encryption**: AES-256 encryption of backup files

#### Object Storage Backups
- **Cross-Region Replication**: Async replication to DR site (near real-time)
- **Versioning**: Last 30 versions of each object retained
- **Lifecycle Policies**:
  - Active: 30 days
  - Archive: 90 days
  - Compliance: 7 years (if required)

#### Configuration Backups
- **Kubernetes Manifests**: Git repository with all configurations
- **Secrets**: Encrypted backup of secrets (separate from configs)
- **Infrastructure as Code**: Terraform/Ansible scripts for cluster rebuild

### 6.4. DR Procedures

#### Failover Scenarios

**Scenario 1: Single Component Failure**
- **Detection**: Automatic via health checks
- **Action**: Kubernetes automatically restarts failed pods
- **Impact**: No customer impact (< 30 seconds)
- **Escalation**: None (automatic recovery)

**Scenario 2: Database Failure**
- **Detection**: Patroni detects primary failure
- **Action**: Automatic promotion of replica to primary
- **Impact**: 30-60 seconds of database unavailability
- **Escalation**: Operations team notified

**Scenario 3: Availability Zone Failure**
- **Detection**: Multiple pod/node failures
- **Action**: Pods rescheduled to healthy zones
- **Impact**: 2-5 minutes (pod startup time)
- **Escalation**: Incident declared, management notified

**Scenario 4: Complete Data Center Failure**
- **Detection**: All health checks fail, ops team declares disaster
- **Action**: Manual DR failover procedure
- **Steps**:
  1. Activate DR site (T+0)
  2. Promote standby database to primary (T+15 min)
  3. Update DNS to point to DR site (T+30 min)
  4. Verify all services operational (T+60 min)
  5. Customer notification (T+90 min)
- **Impact**: Up to 4 hours RTO
- **Escalation**: Executive team, all customers notified

### 6.5. DR Testing

| Test Type | Frequency | Scope |
|-----------|-----------|-------|
| **Component Failover** | Monthly | Single pod/database replica failover |
| **Backup Restore** | Monthly | Restore sample tenant from backup |
| **Partial Failover** | Quarterly | Failover non-critical services to DR |
| **Full DR Exercise** | Annually | Complete failover, customer notification simulation |

---

## 7. Monitoring and Observability Stack

### 7.1. Monitoring Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    DATA COLLECTION LAYER                    │
│                                                             │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │ Prometheus │  │  Node      │  │  cAdvisor  │           │
│  │ Exporters  │  │  Exporter  │  │ (Container)│           │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘           │
│        │               │               │                   │
│        └───────────────┴───────────────┘                   │
│                        │                                   │
│              ┌─────────▼─────────┐                         │
│              │   Prometheus      │                         │
│              │   (HA Pair)       │                         │
│              │   - Time-series   │                         │
│              │   - Alerting      │                         │
│              │   - 30-day retention                        │
│              └─────────┬─────────┘                         │
└────────────────────────┼─────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────┐
│                  VISUALIZATION LAYER                         │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Grafana Dashboards                     │    │
│  │                                                     │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │    │
│  │  │ Infrastructure│  │ Application │  │  Tenant  │ │    │
│  │  │   Dashboard  │  │  Dashboard  │  │Dashboard │ │    │
│  │  └──────────────┘  └──────────────┘  └──────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────┐
│                    LOGGING LAYER                             │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │  Fluentd/  │  │ Logstash   │  │Elasticsearch│            │
│  │  Fluent Bit│──│ (Parse)    │──│   Cluster   │            │
│  │ (Collect)  │  │            │  │  (7-day)    │            │
│  └────────────┘  └────────────┘  └──────┬──────┘            │
│                                          │                   │
│                                  ┌───────▼──────┐            │
│                                  │    Kibana    │            │
│                                  │  (Visualize) │            │
│                                  └──────────────┘            │
└──────────────────────────────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────┐
│                   TRACING LAYER                              │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │  Jaeger    │  │  Zipkin    │  │  OpenTelemetry          │
│  │  Collector │──│  (Storage) │  │  (Optional) │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└──────────────────────────────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────┐
│                 ALERTING & INCIDENT LAYER                    │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │           Alert Manager (Prometheus)                │    │
│  │  - Alert aggregation and deduplication             │    │
│  │  - Routing rules (team, severity, time)            │    │
│  │  - Silencing and inhibition                        │    │
│  └────────────────────┬────────────────────────────────┘    │
│                       │                                     │
│            ┌──────────┴──────────┐                          │
│            │                     │                          │
│   ┌────────▼────────┐   ┌────────▼────────┐                │
│   │   PagerDuty     │   │   Email/Slack   │                │
│   │  (On-call)      │   │  (Notifications)│                │
│   └─────────────────┘   └─────────────────┘                │
└──────────────────────────────────────────────────────────────┘
```

### 7.2. Key Metrics

#### Infrastructure Metrics
| Metric | Threshold | Alert |
|--------|-----------|-------|
| Node CPU utilization | > 80% for 5 min | Warning |
| Node memory utilization | > 85% for 5 min | Warning |
| Disk utilization | > 80% | Warning, > 90% Critical |
| Network errors | > 0.1% packet loss | Warning |
| Pod restart count | > 3 in 10 min | Critical |

#### Application Metrics
| Metric | Threshold | Alert |
|--------|-----------|-------|
| API response time (p95) | > 2 seconds | Warning |
| API response time (p99) | > 5 seconds | Critical |
| Error rate | > 1% | Warning, > 5% Critical |
| Queue depth | > 1000 jobs | Warning |
| Authentication failures | > 10/min | Warning |

**Service Component Metrics** (see component addendums):
- Communications: Document generation success rate, template load time
- Notifications: Delivery rate, bounce rate, queue depth

#### Business Metrics
| Metric | Purpose |
|--------|---------|
| Documents generated/hour | Capacity planning |
| Notifications sent/hour | Capacity planning |
| Active users per tenant | Usage tracking |
| API calls per tenant | Billing verification |
| Storage consumed per tenant | Quota management |

### 7.3. Dashboard Structure

#### Operations Dashboard
- **Cluster Health**: Node status, pod status, resource utilization
- **Service Health**: Service availability, response times, error rates
- **Capacity**: CPU/memory/storage trends, forecasting
- **Alerts**: Active alerts, alert history

#### Tenant Dashboard (Per Customer)
- **Usage Metrics**: Documents generated, notifications sent
- **Performance**: Response times, success rates
- **Quota Status**: Storage used, API calls, user licenses
- **SLA Status**: Uptime percentage, incident history

#### Security Dashboard
- **Authentication Events**: Login attempts, failures, MFA usage
- **API Security**: Rate limiting triggers, blocked requests
- **Network Security**: Firewall blocks, IDS/IPS events
- **Compliance**: Audit log entries, policy violations

### 7.4. Log Management

#### Log Sources
- **Application Logs**: Structured JSON logs from all services
- **Access Logs**: HTTP access logs (ingress, API gateway)
- **Audit Logs**: Security events, configuration changes
- **System Logs**: OS, Kubernetes, database logs

#### Log Retention
| Log Type | Retention | Storage |
|----------|-----------|---------|
| Application logs | 7 days (hot) | Elasticsearch |
| Application logs | 90 days (warm) | S3/archive |
| Audit logs | 7 years | S3/compliance tier |
| Access logs | 30 days | Elasticsearch |

#### Log Analysis Use Cases
- **Debugging**: Trace requests across microservices
- **Security**: Detect suspicious patterns, intrusion attempts
- **Compliance**: Audit trail for data access
- **Performance**: Identify slow queries, bottlenecks

### 7.5. Distributed Tracing

**OpenTelemetry Implementation:**
- **Trace Context Propagation**: Trace ID passed through all services
- **Span Collection**: Each service records timing and metadata
- **Sampling**: 100% of errors, 10% of successful requests
- **Retention**: 7 days of trace data

**Trace Analysis:**
- Identify slow services in request chain
- Detect cascading failures
- Optimize inter-service communication
- Troubleshoot timeout issues

---

## 8. Performance Optimization

### 8.1. Caching Strategy

#### Application-Level Caching
```
┌─────────────────────────────────────────────────────────────┐
│                      CACHING LAYERS                         │
│                                                             │
│  Layer 1: CDN Cache (CloudFlare)                           │
│  ├── Static assets (images, CSS, JS)                       │
│  ├── TTL: 1 hour to 1 day                                  │
│  └── Purge on deployment                                   │
│                                                             │
│  Layer 2: Application Cache (Redis)                        │
│  ├── Session data (TTL: 24 hours)                          │
│  ├── User profiles (TTL: 1 hour)                           │
│  ├── Tenant configuration (TTL: 5 minutes)                 │
│  └── API responses (TTL: varies by endpoint)               │
│                                                             │
│  Layer 3: Database Query Cache                             │
│  ├── PostgreSQL shared_buffers (4 GB)                      │
│  ├── PgBouncer connection pooling                          │
│  └── Read replicas for read-heavy queries                  │
│                                                             │
│  Layer 4: Template Cache                                   │
│  ├── Compiled document templates                           │
│  ├── TTL: Until template version changes                   │
│  └── Pre-warming on deployment                             │
└─────────────────────────────────────────────────────────────┘
```

#### Redis Cluster Configuration
- **Topology**: 3-node cluster with replication
- **Persistence**: RDB snapshots every 15 minutes + AOF
- **Eviction Policy**: LRU (Least Recently Used)
- **Max Memory**: 16 GB per node

### 8.2. Database Optimization

#### Connection Pooling
```
Application Pods (50 pods × 10 connections) = 500 connections
                    │
                    ▼
        ┌───────────────────────┐
        │   PgBouncer Pool      │
        │   (Transaction Mode)  │
        │   Max: 100 connections│
        └───────────┬───────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │  PostgreSQL Primary   │
        │  Max: 200 connections │
        └───────────────────────┘
```

#### Query Optimization
- **Indexes**: Covering indexes on frequently queried columns
- **Partitioning**: Time-based partitioning for large tables (job history, audit logs)
- **Materialized Views**: Pre-aggregated data for dashboards
- **Query Plan Analysis**: Regular EXPLAIN ANALYZE on slow queries

### 8.3. Content Delivery Optimization

#### Document Generation Pipeline
```
Request → Queue → Worker Pool → Template Cache → Generate → S3 Upload
   │         │          │              │             │           │
   │         │          │              │             │           └─ Async
   │         │          │              │             └─ Parallel processing
   │         │          │              └─ In-memory cache
   │         │          └─ Auto-scaling (3-20 workers)
   │         └─ RabbitMQ/Kafka (persistent)
   └─ Immediate response with job ID
```

**Optimization Techniques:**
- **Batch Processing**: Group similar documents for efficiency
- **Template Pre-compilation**: Cache compiled templates
- **Parallel Rendering**: Multi-threaded document generation
- **Output Streaming**: Stream large documents to storage

### 8.4. Network Optimization

- **HTTP/2**: Multiplexing for reduced latency
- **Compression**: Gzip/Brotli compression for API responses
- **Keep-Alive**: Persistent connections to reduce overhead
- **DNS Caching**: Aggressive DNS caching (5 min TTL)

---

## 9. Compliance and Audit

### 9.1. Compliance Requirements

| Regulation | Scope | Implementation |
|------------|-------|----------------|
| **GDPR** | EU data protection | Swedish data residency, data processing agreements, right to erasure |
| **ISO 27001** | Information security | Full ISMS implementation, regular audits |
| **PCI DSS** | Payment data (if applicable) | Tokenization, network segmentation (future) |
| **Swedish Data Protection** | National regulations | Data residency, DPA compliance |

### 9.2. Audit Logging

#### Audit Events
- **Authentication**: Login, logout, failed attempts, MFA events
- **Authorization**: Permission changes, role assignments
- **Data Access**: Document views, downloads, exports
- **Configuration Changes**: Tenant settings, user management
- **Administrative Actions**: Database access, system configuration

#### Audit Log Format
```json
{
  "timestamp": "2025-01-15T10:30:45.123Z",
  "event_type": "document.view",
  "actor": {
    "user_id": "user-123",
    "email": "john.doe@example.com",
    "ip_address": "203.0.113.45",
    "user_agent": "Mozilla/5.0..."
  },
  "tenant_id": "tenant-abc-123",
  "resource": {
    "type": "document",
    "id": "doc-456",
    "path": "/templates/invoice.docx"
  },
  "action": "view",
  "result": "success",
  "metadata": {
    "session_id": "sess-789",
    "request_id": "req-012"
  }
}
```

### 9.3. Data Residency

**Commitment**: All customer data stored within Sweden
- **Primary DC**: Sweden (Entiros AB)
- **DR DC**: Sweden (separate facility)
- **No Cross-Border Transfer**: Data never leaves Swedish jurisdiction
- **Subprocessor Control**: All subprocessors bound by DPA

---

## 10. Deployment and Release Management

### 10.1. CI/CD Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│                    CI/CD PIPELINE                           │
│                                                             │
│  1. Code Commit (Git)                                       │
│     └─▶ 2. CI Build (GitHub Actions/GitLab CI)            │
│            ├─ Unit Tests                                   │
│            ├─ Integration Tests                            │
│            ├─ Security Scanning (SAST)                     │
│            ├─ Dependency Check                             │
│            └─ Build Docker Image                           │
│                 └─▶ 3. Push to Container Registry         │
│                        └─▶ 4. Deploy to Test Cluster      │
│                               ├─ Automated E2E Tests       │
│                               └─ Performance Tests         │
│                                   └─▶ 5. Manual Approval   │
│                                          └─▶ 6. Deploy to Production
│                                                 ├─ Canary (10%)
│                                                 ├─ Monitor (15 min)
│                                                 └─ Full Rollout
└─────────────────────────────────────────────────────────────┘
```

### 10.2. Deployment Strategies

#### Blue/Green Deployment
- **Two Environments**: Blue (current), Green (new)
- **Traffic Switch**: Instant cutover via DNS/load balancer
- **Rollback**: Switch back to Blue if issues detected
- **Use Case**: Major version upgrades

#### Canary Deployment
- **Gradual Rollout**: 10% → 25% → 50% → 100%
- **Monitoring**: Watch error rates, performance during rollout
- **Automated Rollback**: If metrics exceed thresholds
- **Use Case**: Standard releases

#### Rolling Update
- **Default Strategy**: Kubernetes rolling update
- **Max Unavailable**: 25% of pods
- **Max Surge**: 25% additional pods
- **Use Case**: Minor updates, patches

### 10.3. Release Cadence

| Release Type | Frequency | Scope | Customer Impact |
|--------------|-----------|-------|-----------------|
| **Hotfix** | As needed | Critical bug fix | Immediate, minimal downtime |
| **Patch** | Monthly | Bug fixes, minor features | Scheduled maintenance window |
| **Minor** | Quarterly | New features, improvements | Scheduled, tested in advance |
| **Major** | Annually | Breaking changes, major features | Advanced notice, migration support |

---

## 11. Future Architecture Enhancements

### 11.1. Planned Improvements (6-12 months)

| Enhancement | Benefit | Timeline |
|-------------|---------|----------|
| **Service Mesh (Istio)** | mTLS, advanced traffic management | Q2 2025 |
| **Multi-Region Deployment** | Lower latency, geographic redundancy | Q3 2025 |
| **AI/ML Integration** | Document intelligence, predictive analytics | Q4 2025 |
| **GraphQL API** | Flexible querying, reduced overfetching | Q3 2025 |
| **Event-Driven Architecture** | Improved scalability, decoupling | Q2 2025 |

### 11.2. Capacity Planning

**Current Platform Capacity (Launch):**
- **Tenants**: Up to 50 active tenants
- **Users**: Up to 5,000 concurrent users
- **API Requests**: 10,000 requests/minute

**12-Month Projection:**
- **Tenants**: 100-150 active tenants
- **Users**: 10,000-15,000 concurrent users
- **API Requests**: 50,000 requests/minute

**Scaling Path:**
- **Compute**: Add 3-5 worker nodes per quarter
- **Database**: Upgrade to larger instance, add read replicas
- **Storage**: Linear scaling with object storage (no limits)
- **Network**: Upgrade bandwidth as needed (10 Gbps → 40 Gbps)

**Service Component Capacity** (see component addendums):
- Communications: Document generation throughput
- Notifications: Delivery throughput by channel

---

## 12. Service Component Architecture Addendums

This platform architecture document is supplemented by component-specific technical architecture addendums:

| Document ID | Title | Description |
|-------------|-------|-------------|
| **SW-SAAS-ARCH-COMP-001** | Communications Technical Architecture | OpenText Exstream document generation architecture |
| **SW-SAAS-ARCH-COMP-002** | Notifications Technical Architecture | Multi-channel notification delivery architecture |

Each addendum provides:
- Component-specific pod configurations and resource requirements
- Component-specific APIs and integration patterns
- Component-specific monitoring, metrics, and alerting
- Component-specific performance tuning and optimization
- Component-specific backup and recovery procedures

---

## 13. Appendices

### 13.1. Technology Version Matrix

| Component | Version | EOL Date |
|-----------|---------|----------|
| Kubernetes | 1.28.x | Oct 2024 (upgrade to 1.29 planned) |
| Docker | 24.0.x | Ongoing support |
| PostgreSQL | 15.x | Nov 2027 |
| Redis | 7.2.x | Ongoing support |
| Prometheus | 2.48.x | Ongoing support |
| Grafana | 10.2.x | Ongoing support |
| OpenText Comms | [Version TBD] | Per OpenText support policy |

### 13.2. Network Ports and Protocols

| Port | Protocol | Purpose | Access |
|------|----------|---------|--------|
| 443 | HTTPS | Web application, API | Public |
| 80 | HTTP | Redirect to HTTPS | Public |
| 22 | SSH | Server administration | VPN only |
| 5432 | PostgreSQL | Database | Internal only |
| 6379 | Redis | Cache | Internal only |
| 9090 | Prometheus | Metrics | Internal only |
| 3000 | Grafana | Monitoring dashboards | VPN only |
| 5601 | Kibana | Log visualization | VPN only |

### 13.3. DNS Configuration

| Record Type | Name | Value | TTL |
|-------------|------|-------|-----|
| A | app.swedwise.com | [Load Balancer IP] | 300 |
| CNAME | api.swedwise.com | app.swedwise.com | 300 |
| CNAME | www.swedwise.com | app.swedwise.com | 300 |
| MX | swedwise.com | [Mail server] | 3600 |
| TXT | _dmarc.swedwise.com | [DMARC policy] | 3600 |
| TXT | swedwise.com | [SPF record] | 3600 |

### 13.4. SSL/TLS Configuration

- **Certificate Authority**: Let's Encrypt (automated renewal)
- **Certificate Type**: Wildcard (*.swedwise.com)
- **TLS Version**: TLS 1.2+ (TLS 1.3 preferred)
- **Cipher Suites**: Modern, secure ciphers only (no RC4, 3DES)
- **HSTS**: Enabled with 1-year max-age
- **OCSP Stapling**: Enabled

### 13.5. Contact Information

| Role | Responsibility | Contact |
|------|----------------|---------|
| **Technical Lead** | Architecture decisions | tech-lead@swedwise.com |
| **Operations Manager** | 24/7 operations | ops@swedwise.com |
| **Security Officer** | Security incidents | security@swedwise.com |
| **Data Center Partner** | Infrastructure | Entiros AB - support@entiros.se |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Technical Lead | Initial platform architecture document |
| 1.1 | 2025-01-15 | Technical Lead | Refactored to platform-level; Communications and Notifications moved to addendums |

---

**Classification:** Confidential
**Distribution:** Internal use and customer NDAs only
**Review Date:** 2026-01-15

**Related Documents:**
- SW-SAAS-ARCH-COMP-001: Communications Technical Architecture Addendum
- SW-SAAS-ARCH-COMP-002: Notifications Technical Architecture Addendum

*This document contains confidential technical information about the Swedwise SaaS Platform architecture. Unauthorized distribution or disclosure is prohibited.*
