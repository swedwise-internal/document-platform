---
document_id: SW-SAAS-ONB-001
title: Swedwise SaaS Platform - Customer Onboarding Guide
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: Customer Success Manager
component: general
effective_date: 2025-01-15
review_date: 2026-01-15
related_documents:
  - SW-SAAS-SVC-001
  - SW-SAAS-ONB-COMP-001
  - SW-SAAS-ONB-COMP-002
---

# Swedwise SaaS Platform - Customer Onboarding Guide

**Document ID:** SW-SAAS-ONB-001
**Version:** 1.0
**Effective Date:** 2025-01-15

---

## 1. Introduction

### 1.1. Welcome

Welcome to **Swedwise Communications on SaaS**! This guide will help you successfully onboard to our platform and ensure a smooth transition to cloud-based customer communications management.

### 1.2. Onboarding Objectives

The onboarding process is designed to:

- Establish clear communication channels and responsibilities
- Provision and configure your platform access
- Ensure security requirements are met
- Integrate the platform with your existing systems
- Train your team on platform capabilities
- Prepare for a successful go-live

### 1.3. Timeline Overview

| Phase | Duration | Key Activities |
|-------|----------|----------------|
| **Phase 1: Contract and Planning** | 1-2 weeks | Kickoff meeting, contact setup, requirements gathering |
| **Phase 2: Technical Setup** | 2-4 weeks | Account provisioning, security configuration, network access |
| **Phase 3: Configuration and Integration** | Varies (4-12 weeks) | Component setup, template development, API integration |
| **Phase 4: Training and Go-Live** | 1-2 weeks | User training, final testing, go-live preparation |

**Total Estimated Timeline:** 8-18 weeks (depending on complexity)

### 1.4. Success Criteria

Your onboarding is considered successful when:

- [ ] All technical infrastructure is configured and tested
- [ ] Security requirements are met and verified
- [ ] Integrations are operational in production
- [ ] Key users are trained and certified
- [ ] Go-live checklist is complete
- [ ] Production workloads are running successfully
- [ ] Support channels are established and tested

---

## 2. Onboarding Phases

### 2.1. Phase 1: Contract and Planning (Week 1-2)

#### 2.1.1. Kickoff Meeting

**Participants:**
- Customer: Project sponsor, system owner, technical lead
- Swedwise: Customer Success Manager, Technical Architect, Support Lead

**Agenda:**
1. Service overview and capabilities review
2. Contract scope confirmation
3. Key contacts and roles assignment
4. Timeline and milestone agreement
5. Communication channels setup
6. Requirements gathering session
7. Risk and dependency identification

**Deliverables:**
- [ ] Kickoff meeting minutes
- [ ] Project plan with milestones
- [ ] Contact list (both parties)
- [ ] Requirements document
- [ ] Risk register (initial)

#### 2.1.2. Key Contacts Assignment

**Customer Side (Required):**

| Role | Responsibilities | Name | Contact |
|------|-----------------|------|---------|
| **System Owner** | Overall accountability, decision authority | | |
| **Technical Lead** | Integration, architecture decisions | | |
| **Administrator** | Platform configuration, user management | | |
| **Security Contact** | Security requirements, approvals | | |

**Swedwise Side (Assigned):**

| Role | Responsibilities | Contact |
|------|-----------------|---------|
| **Customer Success Manager** | Overall coordination, escalation point | [Name] |
| **Technical Architect** | Solution design, integration support | [Name] |
| **Support Engineer** | Technical implementation, troubleshooting | [Name] |
| **Account Manager** | Commercial matters, upsell opportunities | [Name] |

#### 2.1.3. Requirements Gathering

Complete the following requirements documentation:

- [ ] **Technical Requirements Checklist**
  - Current infrastructure overview
  - Integration points identified
  - Data volume estimates
  - Performance requirements
  - Browser and device requirements

- [ ] **Security Requirements Checklist**
  - Authentication method (SSO, local, hybrid)
  - IP allowlisting requirements
  - VPN requirements
  - Data residency requirements
  - Compliance requirements (GDPR, etc.)

- [ ] **Business Requirements**
  - Use cases and workflows
  - User roles and permissions
  - Document types and volumes
  - Notification channels needed
  - SLA expectations

**Template:** Download *Technical Requirements Checklist* from customer portal

---

### 2.2. Phase 2: Technical Setup (Week 2-6)

#### 2.2.1. Account Provisioning

**Swedwise Actions:**

1. **Tenant Creation**
   - [ ] Production tenant provisioned
   - [ ] Development/test tenant provisioned (if included)
   - [ ] Tenant isolation verified
   - [ ] Initial configuration applied

2. **Administrator Account Setup**
   - [ ] Primary administrator account created
   - [ ] Temporary password issued (secure channel)
   - [ ] Administrator access verified

3. **Environment URLs Communicated**
   ```
   Production:   https://[customer]-prod.swedwise-saas.com
   Development:  https://[customer]-dev.swedwise-saas.com
   Support Portal: https://support.swedwise.com
   ```

**Customer Actions:**

1. **Initial Login**
   - [ ] Administrator logs in using temporary credentials
   - [ ] Password changed to strong, compliant password
   - [ ] Contact information verified
   - [ ] Email notifications configured

2. **Password Policy Configuration**
   - [ ] Password complexity requirements set
   - [ ] Password expiration policy defined
   - [ ] Account lockout policy configured

**Timeline:** 2-3 business days after contract signature

#### 2.2.2. Single Sign-On Configuration (If Applicable)

**Prerequisites:**
- Customer has compatible Identity Provider (IdP)
- IdP metadata available
- SSO technical contact assigned

**Process:**

1. **Requirements Exchange** (Week 2)
   - [ ] Customer provides IdP type and version
   - [ ] Customer provides IdP metadata (XML or URL)
   - [ ] Swedwise provides Service Provider metadata
   - [ ] Attribute mapping requirements confirmed

2. **Configuration** (Week 3)
   - [ ] Swedwise configures SAML/OIDC connection
   - [ ] Customer configures application in IdP
   - [ ] Test accounts created

3. **Testing** (Week 4)
   - [ ] Test user authentication successful
   - [ ] Attribute mapping verified
   - [ ] Logout behavior verified
   - [ ] Fallback authentication tested (if applicable)

4. **Production Enablement** (Week 5)
   - [ ] SSO enabled for production tenant
   - [ ] Administrator access verified
   - [ ] User provisioning process confirmed

**Note:** SSO setup may incur a one-time configuration fee. See service agreement.

#### 2.2.3. Network and Security Configuration

**IP Allowlisting (Optional but Recommended)**

If you require IP-based access restrictions:

1. **Provide IP Ranges**
   - [ ] Customer provides egress IP ranges
   - [ ] Swedwise configures firewall rules
   - [ ] Access tested from customer network

2. **VPN Setup (If Required)**
   - [ ] VPN requirements documented
   - [ ] VPN connection established
   - [ ] Access verified through VPN

**Firewall Rules**

Customer must allow outbound connections to:

```
Domain: *.swedwise-saas.com
Ports: 443 (HTTPS)
      25, 587 (SMTP - if using email integration)
```

**Security Questionnaire**

- [ ] Customer completes security questionnaire
- [ ] Swedwise Security Team reviews responses
- [ ] Any gaps or concerns addressed
- [ ] Security sign-off obtained

**Template:** Download *Security Questionnaire* from customer portal

---

### 2.3. Phase 3: Configuration and Integration (Week 6-14)

This phase is component-specific and varies based on your subscription. Refer to the appropriate **Component Onboarding Addendum** for detailed steps:

- **SW-SAAS-ONB-COMP-001:** Communications Onboarding Addendum
- **SW-SAAS-ONB-COMP-002:** Notifications Onboarding Addendum
- **SW-SAAS-ONB-COMP-003:** E-Shop Onboarding Addendum (future)
- **SW-SAAS-ONB-COMP-004:** E-Archive Onboarding Addendum (future)

#### 2.3.1. Platform-Level Configuration

**User Management**

1. **Define User Roles**
   - [ ] Administrator roles defined
   - [ ] Power user roles defined
   - [ ] Standard user roles defined
   - [ ] Read-only user roles defined

2. **Create User Accounts**
   - [ ] User list provided by customer
   - [ ] Accounts created (manual or via SSO sync)
   - [ ] Permissions assigned per role
   - [ ] Welcome emails sent

3. **User Access Verification**
   - [ ] Sample users test login
   - [ ] Permissions verified
   - [ ] Any issues resolved

**Audit Logging Configuration**

- [ ] Audit log retention period confirmed
- [ ] Audit log access permissions set
- [ ] Log export procedure tested (if required)

**Notification Preferences**

- [ ] System notification recipients defined
- [ ] Maintenance window notifications configured
- [ ] Incident notification distribution list set

#### 2.3.2. Integration Planning and Execution

**Integration Assessment**

Complete for each integration point:

| System | Integration Type | Data Flow | Volume | Priority |
|--------|------------------|-----------|--------|----------|
| [CRM] | API | Bidirectional | [volume] | High |
| [ERP] | Batch File | Inbound | [volume] | Medium |
| [HR] | Database | Outbound | [volume] | Low |

**API Credentials Provisioning**

For each API integration:

1. **Generate API Keys**
   - [ ] API credentials created in portal
   - [ ] Credentials securely shared with customer
   - [ ] Credential storage verified (password manager, vault)

2. **API Access Configuration**
   - [ ] Rate limits configured per customer needs
   - [ ] IP allowlisting applied (if required)
   - [ ] Webhook endpoints configured (if applicable)

3. **API Documentation Provided**
   - [ ] API documentation URL shared
   - [ ] Sample code provided
   - [ ] Postman collection shared (if available)

**Integration Testing**

- [ ] Development environment access granted
- [ ] Test data prepared
- [ ] Integration test cases defined
- [ ] Test execution completed
- [ ] Issues logged and resolved
- [ ] Performance testing completed

**Timeline:** Varies (typically 4-8 weeks depending on complexity)

---

### 2.4. Phase 4: Training and Go-Live (Week 14-18)

#### 2.4.1. User Training

**Administrator Training** (4 hours)

**Audience:** System administrators, tenant administrators

**Topics:**
- Platform overview and navigation
- User management and permissions
- Configuration management
- Monitoring and reporting
- Troubleshooting common issues
- Support escalation procedures

**Delivery:**
- [ ] Online session scheduled
- [ ] Training materials provided
- [ ] Hands-on exercises completed
- [ ] Q&A session conducted
- [ ] Training recorded for future reference

**End User Training** (2 hours per role)

**Audience:** Business users who will use the platform

**Topics:**
- Platform access and login
- Role-specific workflows
- Document creation/review (if applicable)
- Notification management (if applicable)
- Reporting and analytics
- Best practices

**Delivery:**
- [ ] Training sessions scheduled per user group
- [ ] Quick reference guides provided
- [ ] Video tutorials shared
- [ ] Training completion tracked

**Train-the-Trainer (Optional)**

For large deployments:
- [ ] Customer identifies internal trainers
- [ ] Extended training session for trainers
- [ ] Training materials package provided
- [ ] Certification issued (if applicable)

#### 2.4.2. Documentation Package

The following documentation is provided:

- [ ] **Service Description** (SW-SAAS-SVC-001)
- [ ] **Component Addendum(s)** (based on subscription)
- [ ] **User Guide** (role-specific)
- [ ] **Administrator Guide**
- [ ] **API Documentation** (if applicable)
- [ ] **Integration Guides** (system-specific)
- [ ] **Troubleshooting Guide**
- [ ] **FAQ Document**

**Documentation Access:** Available via customer portal at https://support.swedwise.com

#### 2.4.3. Go-Live Preparation

**Go-Live Checklist (Platform Level)**

**Technical Readiness**
- [ ] All infrastructure components operational
- [ ] Security configuration verified
- [ ] Backup and recovery tested
- [ ] Monitoring alerts configured
- [ ] Performance baselines established

**User Readiness**
- [ ] All users provisioned
- [ ] All users trained
- [ ] User acceptance testing completed
- [ ] User sign-off obtained

**Integration Readiness**
- [ ] All integrations tested in production
- [ ] Data migration completed (if applicable)
- [ ] Rollback plan documented
- [ ] Integration monitoring configured

**Support Readiness**
- [ ] Support portal access verified
- [ ] Authorized contacts registered
- [ ] Escalation procedures reviewed
- [ ] Emergency contact list confirmed

**Organizational Readiness**
- [ ] Go-live communication sent to all stakeholders
- [ ] Business continuity plan reviewed
- [ ] Fallback procedures documented
- [ ] Success criteria defined

**Go/No-Go Decision**

**Date:** [2 business days before go-live]

**Participants:**
- Customer: System Owner, Technical Lead
- Swedwise: Customer Success Manager, Technical Architect

**Decision Criteria:**
- All critical items on go-live checklist complete
- No critical open issues
- Rollback plan approved
- Support team ready

**Outcome:** [ ] GO  [ ] NO-GO (with reason and revised date)

#### 2.4.4. Go-Live Execution

**Go-Live Timeline:**

| Time | Activity | Responsible |
|------|----------|-------------|
| T-48h | Final production verification | Swedwise |
| T-24h | Communication to end users | Customer |
| T-4h | Pre-production checks | Swedwise |
| T-0 | Production cutover | Joint |
| T+1h | Smoke testing | Customer |
| T+4h | Initial usage monitoring | Swedwise |
| T+24h | Day 1 review meeting | Joint |

**Communication Plan:**

- [ ] Go-live announcement to all users
- [ ] Support channel reminders
- [ ] Known issues communicated (if any)
- [ ] Success contact information shared

---

## 3. Support Onboarding

### 3.1. Support Portal Access

**Portal URL:** https://support.swedwise.com

**Initial Setup:**

1. **Administrator Registration**
   - [ ] Primary contact receives portal invitation
   - [ ] Account activated
   - [ ] Portal navigation training provided

2. **Authorized Contacts Registration**
   - [ ] Customer provides list of authorized contacts
   - [ ] Contacts added to customer profile
   - [ ] Portal invitations sent
   - [ ] Access verified

**Authorized Contact Requirements:**
- Minimum 2, maximum 10 per customer
- Must be employees or authorized contractors
- Contact list reviewed quarterly

### 3.2. Support Channels

| Channel | Use For | Availability |
|---------|---------|--------------|
| **Web Portal** | All requests (preferred) | 24/7 submission |
| **Email** | support@swedwise.com | 24/7 submission |
| **Phone** | +46 54 17 11 10 | Critical incidents (24/7) |

**Response Times:** See Service Description (SW-SAAS-SVC-001), Section 3.1

### 3.3. Incident Management

**Severity Levels:**

| Level | Description | Examples |
|-------|-------------|----------|
| **A - Critical** | Service down, data loss risk | Complete service outage, security breach |
| **B - Serious** | Major impact, workaround available | Performance degradation, feature not working |
| **C - Minor** | Low impact, easy workaround | UI issues, minor bugs |

**Escalation Procedures:**

1. **Submit ticket** via portal or phone
2. **Initial response** within 15 minutes (all levels)
3. **Technical response** per SLA (see Service Description)
4. **Customer escalation** (if not satisfied):
   - Level 1: Assigned Support Engineer
   - Level 2: Support Manager (support-manager@swedwise.com)
   - Level 3: Customer Success Manager (your assigned CSM)
   - Level 4: Service Delivery Manager (service-manager@swedwise.com)

### 3.4. Change Management

**Requesting Changes:**

- [ ] Configuration changes: Submit via portal (standard request)
- [ ] Integration changes: Submit via portal (include testing requirements)
- [ ] Infrastructure changes: Contact Customer Success Manager

**Change Approval:**
- Customer approval required for changes affecting service behavior
- Swedwise approval required for changes affecting platform stability

**Planned Maintenance:**
- Communicated minimum 5 business days in advance
- Scheduled during maintenance windows (see Service Description 2.6.1)
- Emergency maintenance: 24-hour notice when possible

---

## 4. Post-Go-Live Support

### 4.1. Hypercare Period (First 30 Days)

During the first 30 days after go-live, enhanced support is provided:

**Enhanced Monitoring:**
- [ ] Daily usage monitoring
- [ ] Performance trending
- [ ] Error rate tracking
- [ ] User adoption metrics

**Regular Check-ins:**
- [ ] Week 1: Daily status calls
- [ ] Week 2-4: Bi-weekly status calls
- [ ] Day 30: Formal hypercare review meeting

**Proactive Support:**
- [ ] Swedwise monitors for unusual patterns
- [ ] Proactive outreach for potential issues
- [ ] Usage optimization recommendations

### 4.2. Quarterly Business Reviews

**Frequency:** Every 3 months

**Participants:**
- Customer: System Owner, Technical Lead
- Swedwise: Customer Success Manager, Account Manager

**Agenda:**
1. Service performance review (SLA compliance)
2. Usage statistics and trends
3. Upcoming features and roadmap
4. Customer feedback and improvement suggestions
5. Training needs assessment
6. Expansion opportunities

**Deliverables:**
- [ ] QBR presentation deck
- [ ] SLA uptime report
- [ ] Action item log
- [ ] Next quarter planning

### 4.3. Continuous Improvement

**Feedback Channels:**
- Submit feature requests via portal
- Participate in customer advisory board (if invited)
- Annual customer satisfaction survey

**Platform Updates:**
- Quarterly release notes communicated
- New features training offered
- Breaking changes highlighted in advance

---

## 5. Component-Specific Onboarding

For detailed onboarding steps specific to your subscribed components, refer to:

### 5.1. Communications
**Document:** SW-SAAS-ONB-COMP-001 - Onboarding Addendum: Communications

**Applies if you have:**
- OpenText Communications (Exstream) tenant

**Additional Timeline:** 4-8 weeks for template development and integration

### 5.2. Notifications
**Document:** SW-SAAS-ONB-COMP-002 - Onboarding Addendum: Notifications

**Applies if you have:**
- OpenText Notifications service

**Additional Timeline:** 2-4 weeks for channel configuration and integration

### 5.3. Future Components

Additional onboarding addendums will be provided as components are added to your subscription:

- E-Shop Onboarding Addendum (planned)
- E-Archive Onboarding Addendum (planned)
- Asset Management Onboarding Addendum (planned)
- eSign Integration Onboarding Addendum (planned)

---

## 6. Appendices

### Appendix A: Roles and Responsibilities Matrix

| Activity | Customer System Owner | Customer Technical Lead | Customer Admin | Swedwise CSM | Swedwise Technical |
|----------|---------------------|------------------------|----------------|--------------|-------------------|
| Project approval | A | C | I | R | I |
| Requirements gathering | A | R | C | R | C |
| Tenant provisioning | I | I | I | A | R |
| Security configuration | A | R | C | C | R |
| Integration development | A | R | R | C | C |
| User training | A | C | R | R | A |
| Go-live approval | A | C | I | R | C |
| Support escalation | A | I | R | R | R |

**Legend:** A = Accountable, R = Responsible, C = Consulted, I = Informed

### Appendix B: Contact Templates

**Weekly Status Report Template**

```
Date: [Date]
Week: [Week number of onboarding]

Progress This Week:
- [Key accomplishment 1]
- [Key accomplishment 2]

Planned for Next Week:
- [Activity 1]
- [Activity 2]

Blockers/Risks:
- [Issue 1] - Mitigation: [Plan]

Decisions Needed:
- [Decision required]

Overall Status: [Green/Yellow/Red]
```

**Escalation Email Template**

```
To: [Escalation contact]
Subject: ESCALATION - [Customer Name] - [Issue Summary]

Customer: [Name]
Ticket #: [Number]
Severity: [A/B/C]
Original Report Date: [Date]

Issue Summary:
[Brief description]

Business Impact:
[Impact on customer operations]

Actions Taken So Far:
1. [Action 1]
2. [Action 2]

Reason for Escalation:
[Why escalating - time elapsed, lack of progress, etc.]

Expected Resolution:
[What customer expects as resolution]
```

### Appendix C: Useful Links

| Resource | URL |
|----------|-----|
| Customer Portal | https://support.swedwise.com |
| API Documentation | https://developers.swedwise.com |
| Training Videos | https://training.swedwise.com |
| Service Status Page | https://status.swedwise.com |
| Knowledge Base | https://kb.swedwise.com |

### Appendix D: Glossary

| Term | Definition |
|------|------------|
| **Tenant** | An isolated customer instance within the multi-tenant SaaS platform |
| **SSO** | Single Sign-On - Authentication via customer's identity provider |
| **API** | Application Programming Interface - Programmatic access to platform features |
| **Hypercare** | Enhanced support period immediately following go-live |
| **SLA** | Service Level Agreement - Committed performance metrics |
| **QBR** | Quarterly Business Review - Regular strategic meeting |
| **UAT** | User Acceptance Testing - Customer validation of functionality |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Customer Success Team | Initial version |

---

**Questions or Feedback?**

Contact your Customer Success Manager or email: onboarding@swedwise.com

---

*This document is confidential and intended for use by Swedwise AB customers. Unauthorized distribution is prohibited.*
