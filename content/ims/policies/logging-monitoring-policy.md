---
document_id: SW-ISMS-POL-011
title: Logging and Monitoring Policy
doc_type: policy
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
  - SW-ISMS-POL-002
  - SW-ISMS-POL-010
---

# Logging and Monitoring Policy

## 1. Purpose

This policy establishes requirements for logging security events, system activities, and monitoring Swedwise AB's information systems. It ensures that appropriate logs are collected, protected, retained, and reviewed to detect security incidents, support investigations, demonstrate compliance, and enable continuous improvement.

The policy supports ISO 27001:2022 controls (Annex A 8.15-8.16) and provides evidence for audit, incident response, and forensic analysis.

## 2. Scope

This policy applies to:

- All Swedwise information systems, applications, and infrastructure
- All network devices (firewalls, routers, switches, wireless access points)
- All servers (physical, virtual, cloud-based)
- All workstations and mobile devices where logging is feasible
- Security systems (VPN, access control, authentication)
- Database systems containing sensitive data
- Cloud platforms and SaaS services used by Swedwise
- SaaS platform infrastructure and customer-facing services
- All offices (Karlstad HQ, Stockholm, Uddevalla) and data center facilities

This policy covers:
- Security event logging
- System activity logging
- Audit logging
- Performance monitoring
- Availability monitoring

## 3. Logging and Monitoring Principles

### 3.1 Comprehensive Coverage

Logging covers:
- All systems handling sensitive or customer data
- Security-relevant events (authentication, authorization, configuration changes)
- System health and performance indicators
- Compliance-relevant activities

### 3.2 Integrity and Protection

Logs are:
- Protected from unauthorized modification or deletion
- Transmitted securely to centralized logging system
- Backed up regularly
- Retained according to retention requirements
- Available for investigation and audit

### 3.3 Actionable Monitoring

Monitoring is:
- Real-time or near-real-time for critical events
- Alert-driven for security incidents
- Correlated across systems for comprehensive visibility
- Regularly reviewed and tuned to reduce false positives
- Integrated with incident response procedures

### 3.4 Privacy Considerations

Logging balances security needs with privacy:
- No logging of sensitive personal data beyond what's necessary
- Passwords and credentials not logged in plain text
- Personal data in logs protected according to GDPR
- Log access restricted to authorized personnel
- Privacy impact assessed for logging changes

## 4. What Must Be Logged

### 4.1 Authentication and Access Events

**User Authentication:**
- Successful login attempts (user, time, source)
- Failed login attempts (user, time, source, reason)
- Account lockouts
- Password changes and resets
- Multi-factor authentication events
- Privilege escalation (e.g., sudo, admin rights)

**System and Service Access:**
- Access to sensitive data or systems
- Remote access (VPN, RDP, SSH) connections
- Privileged account usage
- Access from unusual locations or devices
- After-hours access to critical systems

**Authorization and Access Control:**
- Permission changes and access grants
- Role changes
- Access denials and authorization failures
- Access to confidential or restricted data
- File and data access for sensitive systems

### 4.2 System and Application Events

**Security-Related Events:**
- Security software alerts (antivirus, EDR, IDS/IPS)
- Firewall blocks and permits (for sensitive systems)
- Security configuration changes
- Certificate events (issuance, renewal, expiration, revocation)
- Encryption/decryption operations for critical systems
- Security policy violations

**System Changes:**
- Operating system changes (patches, updates, configuration)
- Application installations, updates, and removals
- Service starts, stops, and failures
- System reboots and shutdowns
- Driver and kernel module changes

**Administrative Actions:**
- User account creation, modification, deletion
- Group and role changes
- System configuration changes
- Database schema changes
- Backup and restore operations
- Scheduled job creation and modification

**Application Events:**
- Application errors and exceptions
- Transaction failures for critical business functions
- Data exports and bulk data access
- API calls and responses (for sensitive operations)
- Integration and data exchange events

### 4.3 Network Events

**Network Device Logs:**
- Firewall rule matches (blocked and permitted traffic for critical systems)
- VPN connections and disconnections
- Intrusion detection/prevention alerts
- Network device configuration changes
- Network authentication (802.1X, RADIUS)

**Network Traffic:**
- Connection attempts to/from critical systems
- Anomalous traffic patterns
- Large data transfers or unusual volumes
- Access to restricted network segments
- DNS queries to suspicious domains (if filtering enabled)

**Wireless Network:**
- Wireless authentication events
- Rogue access point detections
- Wireless client associations
- Guest network usage

### 4.4 Data Events

**Data Access:**
- Access to customer data
- Access to personal data (GDPR-relevant)
- Access to confidential business data
- Data downloads or exports
- Backup access and restoration

**Data Modification:**
- Creation, modification, deletion of sensitive records
- Database changes (insert, update, delete) for critical tables
- Document modifications in document management systems
- Email sent to external recipients with attachments

**Data Disposal:**
- Secure deletion or sanitization of data
- Media disposal and destruction
- Account deactivation and data removal

### 4.5 Physical Security Events (if systems available)

- Building and secure area access
- Visitor logs
- Security system alerts (alarms, tamper alerts)
- Video surveillance events (motion detection, tampering)
- Environmental monitoring (temperature, humidity, water leak)

### 4.6 SaaS Platform Logging

**Infrastructure:**
- Kubernetes control plane events
- Container lifecycle events (create, start, stop, delete)
- Pod security policy violations
- Node events and health
- Secret and ConfigMap access

**Application:**
- Customer API requests and responses
- Authentication and authorization for customer access
- Data access and modifications per tenant
- Service-to-service communications
- Job and batch processing logs

**Security:**
- Web Application Firewall (WAF) events
- DDoS mitigation events
- Security group and network policy changes
- Vulnerability scan results
- Intrusion detection alerts

**Operational:**
- Service health and availability
- Performance metrics and SLA compliance
- Backup and disaster recovery events
- Incident and change management activities

## 5. Log Content Requirements

### 5.1 Minimum Log Information

Each log entry should include (where available):

- **Timestamp**: Accurate date and time (synchronized via NTP)
- **Event Type**: Description of the event
- **Severity**: Critical, High, Medium, Low, or Informational
- **Source**: System, application, or device generating the event
- **User**: Username or system account associated with event
- **Source IP/Location**: IP address or geographic location where applicable
- **Outcome**: Success or failure of the action
- **Additional Context**: Relevant details for understanding the event

### 5.2 Prohibited Log Content

Logs must not contain:

- Passwords or credentials in plain text
- Full credit card numbers or payment details
- Sensitive personal identifiers (SSN, national ID) in plain text
- Encryption keys or secrets
- Protected health information (if applicable)
- Excessive personal data beyond what's necessary

If sensitive data must be logged for operational reasons:
- Redact or mask sensitive portions (e.g., last 4 digits of credit card)
- Encrypt logs containing sensitive data
- Apply stricter access controls and shorter retention

### 5.3 Time Synchronization

Accurate timestamps essential for correlation and investigation:

- All systems synchronized to authoritative time source (NTP)
- Time zone consistently applied (UTC preferred for centralized logging)
- Time drift monitored and corrected
- Time synchronization issues generate alerts
- Leap second handling configured appropriately

## 6. Log Collection and Centralization

### 6.1 Centralized Log Management

Logs from distributed systems collected in centralized system:

**Benefits:**
- Unified view of events across systems
- Correlation of events for detection
- Centralized protection and retention
- Efficient search and analysis
- Redundant storage for availability

**Log Collection Methods:**
- Syslog or syslog-ng for system logs
- Agent-based collection (e.g., Filebeat, Fluentd)
- API-based collection from cloud services
- SIEM platform integration
- Log forwarding from network devices

**Central Logging System:**
- [TBD - specific solution: ELK Stack, Splunk, Azure Sentinel, AWS CloudWatch, etc.]
- Scalable to handle log volume
- High availability and redundancy
- Searchable and indexed logs
- Dashboards and visualization
- Alerting and notification capabilities

### 6.2 Log Transmission Security

Logs transmitted securely to prevent tampering:

- Encrypted transmission (TLS, VPN)
- Authentication between log source and collector
- Log integrity verification (checksums, signatures)
- Secure protocols (syslog over TLS, HTTPS)
- Network segmentation for log traffic

### 6.3 Real-Time vs. Batch Collection

**Real-Time Collection:**
- Security events and alerts
- Authentication events
- Critical system failures
- SaaS platform security events

**Batch/Periodic Collection:**
- Performance metrics
- Application logs (non-security)
- Historical compliance data
- Large volume operational logs

Balance real-time needs with performance and cost.

## 7. Log Retention

### 7.1 Retention Requirements

Logs retained based on:
- Legal and regulatory requirements (GDPR, financial regulations)
- Contractual obligations (customer SLAs)
- Business needs (incident investigation, audit)
- Storage capacity and cost

**Retention Periods:**

| Log Type | Retention Period | Rationale |
|----------|------------------|-----------|
| Security events | 12 months minimum | Incident investigation, compliance |
| Authentication logs | 12 months minimum | Access audit, compliance |
| Privileged access | 24 months | High-risk activity tracking |
| System logs | 6-12 months | Troubleshooting, performance |
| Application logs | 3-12 months | Debugging, performance |
| Network device logs | 6-12 months | Security investigation |
| SaaS platform logs | 12 months minimum | Customer SLA, compliance |
| Audit logs | [TBD - per legal requirements, e.g., 7 years for financial] | Compliance, legal hold |

**Active vs. Archived Storage:**
- Recent logs (e.g., 90 days) in active, searchable storage
- Older logs in cheaper archived storage with longer retrieval time
- Archived logs remain searchable but with performance trade-off

### 7.2 Log Deletion

Logs deleted or anonymized after retention period:

- Secure deletion process (overwriting, not just deleting pointers)
- Deletion logged and auditable
- Legal holds prevent deletion during investigations or litigation
- Personal data anonymized or deleted per GDPR right to erasure (where applicable)

Exceptions:
- Logs under legal hold retained until hold lifted
- Logs relevant to ongoing investigations retained until closure
- Logs required for long-term compliance retained per regulation

## 8. Log Protection and Access Control

### 8.1 Log Integrity

Logs protected from unauthorized modification:

- Write-once or append-only storage where feasible
- Access controls limiting who can modify or delete logs
- Log file permissions set appropriately
- Digital signatures or checksums for critical logs
- Audit trail of any log modifications

**Tampering Detection:**
- Integrity checks (hashes, signatures) verified periodically
- Unauthorized changes detected and alerted
- Gap detection (missing log entries)

### 8.2 Access Control

Log access restricted to:

**Authorized Personnel:**
- IT operations for troubleshooting and performance
- Security team for incident detection and response
- Auditors for compliance verification
- Specific system owners for their systems
- Legal/HR for investigations (with approval)

**Access Controls:**
- Role-based access control (RBAC)
- Least privilege (access only to logs needed for job function)
- Multi-factor authentication for log system access
- No shared accounts for log access
- Access logging (logs of log access)

**Access Requests:**
- Business justification required
- Approved by CISO or delegate
- Time-limited access for specific investigations
- Access reviewed and removed when no longer needed

### 8.3 Secure Storage

Log storage secured:

- Encryption at rest for logs containing sensitive data
- Secure backup of logs
- Redundant storage for critical logs
- Geographically separate backup storage
- Logs on separate systems from source systems (avoid single point of failure)

## 9. Monitoring and Alerting

### 9.1 Security Monitoring

Security events monitored in real-time or near-real-time:

**Monitored Events:**
- Multiple failed authentication attempts (potential brute force)
- Authentication from unusual locations or devices
- Privileged access outside normal hours
- Changes to security configurations
- Malware or intrusion detection alerts
- Large data transfers or unusual network traffic
- Access to sensitive data by unauthorized users
- System failures or crashes of critical systems

**Alert Thresholds:**
- Defined based on baseline behavior and risk
- Tuned to reduce false positives
- Reviewed and adjusted regularly
- Documented with rationale

### 9.2 Alert Response

Alerts triaged and responded to:

**Alert Severity Levels:**

| Severity | Definition | Response Time |
|----------|------------|---------------|
| Critical | Active attack, data breach, major system failure | Immediate (< 15 minutes) |
| High | Serious security event, potential breach, system compromise | < 1 hour |
| Medium | Policy violation, suspicious activity, minor security event | < 4 hours |
| Low | Informational, baseline deviation, potential issue | < 24 hours |

**Response Process:**
1. Alert received and acknowledged
2. Initial triage to assess severity and authenticity
3. Investigation to determine scope and impact
4. Response according to incident management procedure
5. Documentation of findings and actions
6. Escalation if criteria met
7. Post-incident review and lessons learned

**On-Call and Escalation:**
- On-call rotation for 24/7 critical alerts (SaaS platform)
- Escalation procedures for unacknowledged or unresolved alerts
- Management notification for high-severity incidents
- Customer notification per SLA and incident severity

### 9.3 Automated Monitoring

Automated tools used for:

**Security Information and Event Management (SIEM):**
- Correlation of events across systems
- Behavioral analytics and anomaly detection
- Threat intelligence integration
- Automated alerting and workflow

**Intrusion Detection/Prevention (IDS/IPS):**
- Network traffic analysis
- Signature-based detection
- Anomaly detection
- Automated blocking or alerting

**Endpoint Detection and Response (EDR):**
- Endpoint behavior monitoring
- Malware detection beyond signatures
- Automated response and isolation

**Cloud Security Posture Management (CSPM):**
- Cloud configuration monitoring
- Compliance checks
- Misconfiguration detection

### 9.4 Manual Log Review

Periodic manual review complements automated monitoring:

**Review Frequency:**
- Daily: Critical system logs, security alerts summary
- Weekly: Privileged access logs, authentication anomalies
- Monthly: Comprehensive log review, trend analysis
- Quarterly: Log policy compliance, retention verification

**Review Responsibilities:**
- IT operations: System health and performance logs
- Security team: Security event logs
- System owners: Application-specific logs
- Internal audit: Compliance and policy adherence

**Review Documentation:**
- Date and time of review
- Reviewer name
- Systems and logs reviewed
- Findings and anomalies identified
- Actions taken or recommended
- Sign-off by reviewer

## 10. Performance and Availability Monitoring

### 10.1 System Health Monitoring

System performance and availability monitored:

**Metrics:**
- CPU, memory, disk utilization
- Network bandwidth and latency
- Application response times
- Database query performance
- Service uptime and availability

**Monitoring Tools:**
- Infrastructure monitoring (e.g., Nagios, Zabbix, Prometheus)
- Application Performance Monitoring (APM)
- Synthetic monitoring (health checks, probe tests)
- User experience monitoring (real user monitoring)

**Alerts:**
- Threshold-based alerts (e.g., >80% CPU, <10% disk space)
- Availability alerts (service down, unresponsive)
- Performance degradation alerts

### 10.2 SaaS Platform Monitoring

SaaS service monitored for:

**Service Availability:**
- API endpoint availability and response time
- Service uptime per SLA (99.9% target)
- Customer-facing service health
- Background job and batch processing status

**Performance:**
- Request latency (p50, p95, p99)
- Throughput (requests per second)
- Error rates
- Queue depths and processing times

**Resource Utilization:**
- Container and pod resource usage
- Database performance and query times
- Storage consumption and growth
- Network bandwidth utilization

**Customer Experience:**
- Customer-specific performance metrics
- Customer error rates
- Customer API usage patterns
- Customer support ticket trends

**Dashboards:**
- Real-time service health dashboard
- SLA compliance dashboard
- Customer-specific dashboards (if offered)
- Security monitoring dashboard

## 11. Incident Detection and Investigation

### 11.1 Security Incident Detection

Logs are primary source for detecting security incidents:

**Detection Methods:**
- Real-time alerts from monitoring systems
- Anomaly detection and behavioral analysis
- Correlation of events across systems
- Threat intelligence matching
- Manual log review during investigations

**Indicators of Compromise (IoC):**
- Unusual authentication patterns
- Access to unauthorized systems or data
- Malware signatures or behaviors
- Communication with known malicious IPs/domains
- Data exfiltration patterns
- Privilege escalation attempts

### 11.2 Log Analysis for Investigations

Logs used for incident investigation and forensics:

**Investigation Process:**
1. Identify relevant time frame and systems
2. Collect and preserve logs (chain of custody for legal cases)
3. Search and filter for events of interest
4. Correlate events to reconstruct timeline
5. Identify root cause and attack vector
6. Document findings and evidence
7. Support remediation and recovery

**Search Capabilities:**
- Full-text search across logs
- Filtering by time, user, source, event type
- Regular expression and pattern matching
- Cross-system correlation
- Visualization and timeline reconstruction

**Forensic Preservation:**
- Logs copied and stored securely for legal cases
- Chain of custody documented
- Integrity verification (hashes)
- Access restricted to authorized investigators
- Logs not modified during investigation

## 12. Compliance and Audit

### 12.1 Audit Logging

Audit trails for compliance:

**Audit Events:**
- Changes to user accounts and permissions
- Configuration changes to systems
- Data access and modifications
- Policy changes
- Security control changes
- Backup and recovery operations

**Audit Log Requirements:**
- Immutable (cannot be modified or deleted by users)
- Comprehensive (all relevant events captured)
- Attributable (who, what, when, where)
- Protected from unauthorized access
- Retained per compliance requirements

### 12.2 Compliance Reporting

Logs support compliance reporting for:

**ISO 27001:**
- Evidence of security control implementation
- Incident detection and response
- Access control effectiveness
- Change management

**GDPR:**
- Data access and processing logs
- Data subject access requests
- Breach detection and notification
- Data deletion and anonymization

**Contractual SLAs:**
- Service availability and performance
- Incident response times
- Security event reporting to customers

**Reporting:**
- Automated compliance reports from log data
- Audit evidence packages
- Incident reports and notifications
- SLA compliance reports for customers

## 13. Logging Infrastructure

### 13.1 Log System Capacity Planning

Log infrastructure sized appropriately:

**Capacity Considerations:**
- Log volume (events per second, GB per day)
- Retention requirements (storage needed)
- Search and query performance
- Peak load handling
- Growth projections

**Scalability:**
- Horizontal scaling (add nodes/capacity)
- Storage tiering (hot/warm/cold storage)
- Archival to cheaper storage for long-term retention

### 13.2 Log System Security

Log infrastructure secured:

- Hardened logging servers and infrastructure
- Network segmentation for log traffic
- Access controls (see Section 8.2)
- Encryption at rest and in transit
- Regular security updates and patching
- Backup and disaster recovery

### 13.3 Log System Availability

Logging system highly available:

- Redundant log collectors and storage
- No single point of failure
- Buffer logs locally if central system unavailable
- Automated failover
- Regular testing of availability

## 14. Roles and Responsibilities

### Chief Information Security Officer (CISO)

- Overall accountability for logging and monitoring policy
- Approval of log retention periods and exceptions
- Oversight of security monitoring program
- Review of security incidents and trends
- Reporting to management on security posture

### IT Operations / System Administrators [TBD]

- Implementation and maintenance of logging infrastructure
- Log collection configuration and troubleshooting
- System health and performance monitoring
- Responding to operational alerts
- Log system backup and maintenance

### Security Operations / Security Analyst [TBD - if separate role]

- Security event monitoring and alerting
- Alert triage and investigation
- Security incident detection and response
- Threat intelligence integration
- Security monitoring tool tuning and optimization

### System Owners / Application Owners

- Defining logging requirements for their systems
- Ensuring their systems generate appropriate logs
- Reviewing logs for their systems periodically
- Investigating application-specific security events
- Coordinating with security team for incidents

### Developers

- Implementing logging in applications following standards
- Avoiding logging sensitive data (passwords, keys)
- Providing meaningful log messages for troubleshooting
- Supporting log analysis during incident investigations

### Internal Audit / Compliance

- Verifying logging and monitoring compliance
- Reviewing audit logs for compliance evidence
- Testing log controls during audits
- Reporting on control effectiveness

### All Staff

- Reporting security incidents and suspicious events
- Cooperating with log-based investigations
- Not attempting to tamper with or disable logging
- Understanding that activity is logged and monitored

## 15. Training and Awareness

Staff awareness of logging and monitoring:

- New hire orientation includes logging policy
- Security awareness training covers monitoring
- Acceptable use policy states monitoring practices
- Privacy notices for employees regarding monitoring
- Technical training for staff responsible for logging systems

## 16. Monitoring and Compliance

### 16.1 Policy Compliance

Logging policy compliance verified through:

- Quarterly log review process audits
- Annual comprehensive log policy review
- Internal audits of logging controls
- External assessments (ISO 27001 audits)
- Log retention compliance checks
- Alerting coverage verification

**Metrics:**
- Percentage of systems with compliant logging
- Log retention compliance rate
- Mean time to detect (MTTD) security incidents
- Mean time to respond (MTTR) to alerts
- Alert false positive rate
- Log review completion rate

### 16.2 Continuous Improvement

Logging and monitoring continuously improved:

- Post-incident reviews identify logging gaps
- New systems onboarded with logging requirements
- Log sources expanded as needed
- Alert tuning based on feedback
- Monitoring tools evaluated and upgraded
- Lessons learned incorporated into policy

## 17. Exceptions

Temporary exceptions to logging requirements may be granted when:

- Technical limitations prevent logging
- Business justification and risk assessment documented
- Compensating controls or alternative monitoring implemented
- Exception approved by CISO
- Exception time-limited with remediation plan

Common exception scenarios:
- Legacy systems without logging capabilities
- Third-party systems with limited logging
- Short-term pilots or proof-of-concepts
- Performance issues requiring temporary logging reduction

Exceptions are documented, reviewed quarterly, and tracked for closure.

## 18. Consequences of Non-Compliance

Violations of logging and monitoring policy may result in:

- Remediation required for non-compliant systems
- Security incident investigation if logs unavailable
- Disciplinary action for tampering with logs
- Legal action for obstruction of investigations
- Audit findings and compliance violations

Tampering with logs or disabling monitoring is a serious violation and may result in termination.

## 19. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-002: Access Control Policy
- SW-ISMS-POL-004: Data Protection Policy
- SW-ISMS-POL-010: Network Security Policy
- SW-ISMS-POL-003: Acceptable Use Policy

**Procedures:**
- [TBD - SW-ISMS-PRO-002: Incident Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Log Review Procedure]
- [TBD - SW-ISMS-PRO-XXX: Security Monitoring Procedure]
- [TBD - SW-ISMS-PRO-XXX: Backup and Recovery Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-XXX: Application Logging Guideline]
- [TBD - SW-ISMS-GUI-XXX: Log Analysis Guideline]
- [TBD - SW-DEV-GUI-XXX: Secure Coding Guideline (logging section)]

**Supporting Documents:**
- [TBD - Log Retention Schedule]
- [TBD - Alert Response Playbooks]
- [TBD - Log Source Inventory]
- [TBD - Monitoring Coverage Matrix]

## 20. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*
