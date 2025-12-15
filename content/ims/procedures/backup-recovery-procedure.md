---
document_id: SW-ISMS-PRO-003
title: Backup and Recovery Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001
  - SW-IMS-POL-001
  - SW-ISMS-PRO-001
---

# Backup and Recovery Procedure

## 1. Purpose

This procedure defines the approach for backing up critical information assets and recovering data and systems following data loss, system failure, or disaster. It ensures that Swedwise AB can restore operations within acceptable timeframes and with minimal data loss, supporting business continuity and compliance requirements.

## 2. Scope

This procedure applies to:

- All business-critical information systems and data
- Swedwise-managed infrastructure and applications
- SaaS platform infrastructure (hosted at Entiros)
- Cloud services (Azure, Microsoft 365)
- Development, testing, and production environments
- Customer data processed by Swedwise
- Configuration data and system documentation
- Physical and virtual systems

**In scope:**
- File servers and network shares
- Databases (production and business-critical)
- Email systems (Microsoft 365)
- SharePoint and collaboration platforms
- SaaS application data
- System configurations and infrastructure-as-code
- Source code repositories
- Virtual machine images
- Customer data (per contractual obligations)

**Out of scope:**
- End-user local device data (users responsible for storing in approved cloud locations)
- Personal or non-business data
- Temporary or cache data
- Systems explicitly documented as non-critical with no backup requirement

## 3. Definitions

| Term | Definition |
|------|------------|
| **Backup** | Copy of data or system state that can be used to restore original after data loss or corruption |
| **Recovery** | Process of restoring data or systems from backups |
| **RPO (Recovery Point Objective)** | Maximum acceptable age of data that can be lost (e.g., 24 hours = can lose up to 1 day of data) |
| **RTO (Recovery Time Objective)** | Maximum acceptable time to restore service after disruption |
| **Full Backup** | Complete copy of all selected data |
| **Incremental Backup** | Only data changed since last backup (full or incremental) |
| **Differential Backup** | Only data changed since last full backup |
| **Snapshot** | Point-in-time copy of data or system state (often storage-level) |
| **Hot Backup** | Backup while system is running and accessible |
| **Cold Backup** | Backup while system is offline |
| **Retention Period** | Duration backups are kept before deletion |
| **3-2-1 Rule** | 3 copies of data, 2 different media types, 1 off-site |

## 4. Responsibilities

| Role | Responsibility |
|------|---------------|
| **CISO** | Overall accountability for backup and recovery framework, defining RPO/RTO requirements |
| **IT Operations** | Day-to-day backup execution, monitoring, recovery testing, maintaining backup infrastructure |
| **System Owners** | Defining backup requirements for their systems, validating recovery procedures, approving restore requests |
| **Management Team** | Approving RPO/RTO targets, providing resources for backup infrastructure, approving disaster recovery plans |
| **Database Administrators** | Database-specific backup procedures, validating database recovery |
| **Application Owners** | Ensuring application data consistency in backups, testing application recovery |
| **Users** | Storing important data in approved locations (not local devices), reporting data loss promptly |

## 5. Backup Strategy Overview

Swedwise follows a layered backup approach:

**Layer 1: Cloud Service Provider Native Backups**
- Microsoft 365 retention policies
- Azure backup services
- Entiros platform backup (for SaaS infrastructure)

**Layer 2: Dedicated Backup Solution**
- Third-party backup software for critical systems
- Independent from primary storage
- Encrypted and immutable backups

**Layer 3: Off-Site and Disaster Recovery**
- Geographic separation from primary site
- Long-term retention storage
- Disaster recovery copies

**Guiding Principle:** Follow 3-2-1 rule:
- 3 copies of important data
- 2 different storage media/technologies
- 1 copy off-site (different geographic location)

## 6. Data Classification and Backup Requirements

Backup frequency and retention based on data criticality and classification.

### 6.1 System Criticality Levels

| Criticality | Definition | RPO | RTO | Backup Frequency |
|-------------|------------|-----|-----|------------------|
| **Critical** | Essential for business operations; revenue impact or regulatory requirement | 4 hours | 4 hours | Every 4-6 hours + daily |
| **High** | Important for operations; significant inconvenience if unavailable | 24 hours | 24 hours | Daily |
| **Medium** | Useful but not essential; limited business impact | 1 week | 3 days | Weekly |
| **Low** | Nice to have; minimal business impact | 1 month | 1 week | Monthly or not backed up |

### 6.2 Information Classification Backup

| Classification | Encryption | Off-Site | Retention | Access Control |
|----------------|-----------|----------|-----------|----------------|
| **Restricted** | Mandatory (in-transit and at-rest) | Mandatory | Per legal/regulatory requirements | CISO approval for access |
| **Confidential** | Mandatory (at-rest) | Mandatory | Minimum 7 years | System owner approval for restore |
| **Internal** | Mandatory (in-transit) | Recommended | Minimum 3 years | Manager approval for restore |
| **Public** | Recommended | Optional | 1 year | Standard access controls |

Reference: [TBD - SW-ISMS-GUI-001: Information Classification Guideline]

## 7. Backup Scope and Schedules

### 7.1 Microsoft 365

**Email (Exchange Online):**
- **Native retention:** Microsoft's built-in geo-redundant storage
- **Additional backup:** Third-party backup solution
- **Frequency:** Daily incremental
- **Retention:**
  - Daily backups: 30 days
  - Weekly backups: 12 weeks
  - Monthly backups: 7 years (or per legal hold)
- **RPO:** 24 hours
- **RTO:** 4 hours for critical mailboxes, 24 hours for standard

**SharePoint Online and OneDrive:**
- **Native retention:** Version history enabled (500 versions)
- **Native recycle bin:** 93 days
- **Additional backup:** Third-party backup solution
- **Frequency:** Daily incremental
- **Retention:**
  - Daily: 30 days
  - Weekly: 12 weeks
  - Monthly: 7 years
- **RPO:** 24 hours
- **RTO:** 4 hours for critical sites, 24 hours for standard

**Microsoft Teams:**
- **Native retention:** Included in SharePoint/Exchange backups
- **Additional backup:** Third-party solution
- **Frequency:** Daily
- **Retention:** Aligned with SharePoint/Exchange
- **RPO:** 24 hours
- **RTO:** 24 hours

### 7.2 Azure Infrastructure

**Virtual Machines:**
- **Criticality:** Per system (see system inventory)
- **Method:** Azure Backup service
- **Frequency:**
  - Critical VMs: Every 4-6 hours
  - High priority: Daily
  - Medium priority: Weekly
- **Retention:**
  - Daily: 30 days
  - Weekly: 12 weeks
  - Monthly: 12 months
  - Yearly: 7 years (selected systems)
- **Snapshot:** Application-consistent snapshots where supported

**Azure SQL Databases:**
- **Method:** Azure SQL automated backups + manual backups
- **Frequency:**
  - Full: Weekly
  - Differential: Every 12 hours
  - Transaction log: Every 5-10 minutes
- **Retention:**
  - Short-term: 7-35 days (configurable per database)
  - Long-term: Monthly for 7 years (critical databases)
- **RPO:** 10 minutes (point-in-time restore capability)
- **RTO:** 2-4 hours depending on database size

**Azure Storage Accounts:**
- **Method:** Azure Storage redundancy (GRS or GZRS)
- **Additional:** Snapshots and soft delete enabled
- **Frequency:** Continuous replication
- **Retention:** Soft delete 14-30 days
- **RPO:** Near-zero (geo-redundant replication)
- **RTO:** Varies by failover scenario

**Infrastructure-as-Code:**
- **Method:** Git repository with remote backups
- **Frequency:** Every commit (continuous)
- **Retention:** Indefinite (version history)
- **Location:** Azure DevOps and GitHub (geo-redundant)

### 7.3 SaaS Platform (Entiros Hosted)

**OpenText Communications/Exstream:**
- **Criticality:** Critical (revenue-generating service)
- **Method:**
  - Entiros platform backup (per service agreement)
  - Swedwise additional backup where accessible
- **Frequency:**
  - Production data: Every 4-6 hours
  - Configuration: Daily
  - Document templates: On change + weekly
- **Retention:**
  - Daily: 14 days
  - Weekly: 8 weeks
  - Monthly: 12 months
- **RPO:** 4 hours
- **RTO:** 4 hours for service restore, 8 hours for complete rebuild

**Customer Tenant Data:**
- **Responsibility:** Shared (Swedwise and customer per contract)
- **Method:** Per customer SLA requirements
- **Frequency:** Daily minimum, 4-6 hours for critical customers
- **Retention:** Per customer contract (minimum 30 days)
- **Segregation:** Customer data backups isolated per tenant

**SaaS Platform Configuration:**
- **Method:** Configuration-as-code + manual backups
- **Frequency:** On change + weekly full backup
- **Retention:** 12 months
- **Documentation:** Disaster recovery runbooks backed up separately

### 7.4 On-Premises and Office Systems

**File Servers (if applicable):**
- **Method:** [TBD - backup solution]
- **Frequency:** Daily incremental, weekly full
- **Retention:** 30 days daily, 12 weeks weekly, 12 months monthly
- **Off-site:** Weekly copies to cloud storage

**Physical Office Servers (if any):**
- **Method:** [TBD - local backup + cloud replication]
- **Frequency:** Daily
- **Retention:** 30 days local, 12 months cloud
- **RPO:** 24 hours
- **RTO:** 48 hours

**Note:** Swedwise is primarily cloud-based; on-premises systems minimal.

### 7.5 Development and Testing Environments

**Source Code Repositories:**
- **Method:** Git (Azure DevOps, GitHub)
- **Frequency:** Continuous (every commit)
- **Redundancy:** Multiple remote copies (Azure DevOps + GitHub mirror)
- **Retention:** Indefinite
- **RPO:** Near-zero
- **RTO:** 2 hours

**Development Databases:**
- **Method:** Periodic snapshots
- **Frequency:** Weekly or before major changes
- **Retention:** 4 weeks
- **RPO:** 1 week (acceptable for non-production)
- **RTO:** 24 hours

**CI/CD Configurations:**
- **Method:** Configuration-as-code in Git
- **Frequency:** On every change
- **Retention:** Indefinite (version control)

## 8. Backup Execution

### 8.1 Automated Backups

**Standard process:**
1. Backups run according to defined schedules (automated)
2. Backup software/service performs backup
3. Verification step (backup completion check)
4. Logs generated and stored
5. Monitoring alerts on failures

**Automation tools:**
- Azure Backup
- Microsoft 365 backup solution [TBD - vendor]
- [TBD - Other backup software]

### 8.2 Manual Backups

**When required:**
- Before major system changes or upgrades
- Before applying security patches to critical systems
- Before decommissioning systems
- On-demand for specific recovery needs
- During migrations or data transfers

**Process:**
1. Submit backup request to IT Operations [TBD - via service desk]
2. Include: System/data scope, reason, retention needed
3. IT Operations executes backup
4. Verifies completion
5. Documents backup location and retention
6. Notifies requester

### 8.3 Backup Monitoring

**Daily monitoring by IT Operations:**
- Review backup logs for failures or warnings
- Check backup completion status dashboard
- Verify backup storage capacity available
- Monitor backup window durations
- Investigate and resolve failures within 24 hours

**Weekly review:**
- Backup success rate metrics
- Storage utilization trends
- Backup duration trends
- Failed backup analysis and remediation status

**Monthly reporting:**
- Backup compliance report to CISO
- Failed backup summary and resolutions
- Capacity planning recommendations
- Recovery testing summary

**Automated alerts:**
- Backup job failure
- Backup job exceeded expected duration
- Storage capacity thresholds (80%, 90%, 95%)
- Backup encryption failures
- Off-site replication failures

### 8.4 Backup Storage Management

**Storage locations:**
- **Primary:** Azure Backup vaults, Microsoft datacenter storage
- **Secondary:** Entiros datacenter (for SaaS platform)
- **Off-site:** Geographic region separation (minimum 300km from primary)

**Capacity management:**
- Monitor storage utilization weekly
- Project growth based on trends
- Plan capacity increases proactively (before 80% full)
- Clean up expired backups per retention policy

**Access controls:**
- Backup storage access restricted to authorized IT Operations staff
- Multi-factor authentication required
- Privileged access logged and monitored
- Separate credentials from production systems

**Encryption:**
- All backups encrypted at rest
- Encryption keys managed securely (Azure Key Vault)
- In-transit encryption for backup data transfer
- Regular key rotation per [TBD - key management procedure]

## 9. Recovery Procedures

### 9.1 Recovery Request Process

**User-initiated recovery:**
1. User contacts IT Service Desk [TBD - service desk contact]
2. Provides:
   - Description of data loss or system failure
   - Approximate time of loss
   - Scope of data/system affected
   - Business impact and urgency
3. Service desk logs ticket and assigns to IT Operations
4. IT Operations assesses and executes recovery

**System-initiated recovery:**
- Critical system failure detected
- IT Operations immediately begins recovery
- Notifies management and system owner
- Follows disaster recovery procedures if major outage

### 9.2 Recovery Prioritization

**Priority levels:**

| Priority | Criteria | Response Time | Examples |
|----------|----------|---------------|----------|
| **P1 - Critical** | Critical system down, customer impact, SLA breach imminent | 15 minutes | SaaS platform failure, production database corruption |
| **P2 - High** | Important system unavailable, significant user impact | 1 hour | Email system issue, shared file server problem |
| **P3 - Medium** | Limited user impact, workaround available | 4 hours | Individual mailbox restore, small file recovery |
| **P4 - Low** | Minimal impact, informational | 1 business day | Historical data request, old email recovery |

### 9.3 File and Email Recovery

**Individual file recovery (OneDrive, SharePoint):**
1. Verify file deletion or corruption timeframe
2. Check version history (self-service if user has access)
3. Check recycle bin (93-day retention)
4. If beyond recycle bin, use backup:
   - IT Operations searches backup for requested file(s)
   - Identifies appropriate backup point
   - Restores file(s) to temporary location
   - User verifies restored files
   - Files moved to final location
5. Document recovery in ticket

**Email recovery (Exchange Online):**
1. Check user's Deleted Items (user can self-recover)
2. Check Recoverable Items folder (30-day retention)
3. If beyond retention, use backup:
   - IT Operations identifies backup point
   - Exports mailbox or specific emails
   - Restores to user mailbox or provides PST file
4. Document recovery

**Recovery time:**
- Single file/email: 1-4 hours
- Multiple files/mailbox: 4-24 hours depending on size

### 9.4 Database Recovery

**Point-in-time recovery (Azure SQL):**
1. Identify required restore point (as close as possible to before corruption/loss)
2. Calculate downtime impact
3. Obtain system owner approval for restore
4. Execute restore:
   - Option A: Restore to new database (test, then switch)
   - Option B: In-place restore (production down during restore)
5. Verify database integrity
6. Test application connectivity and functionality
7. Restore production service
8. Validate data consistency
9. Document recovery actions

**Database corruption recovery:**
1. Isolate affected database
2. Attempt database repair utilities first
3. If repair unsuccessful, restore from backup:
   - Identify last known-good backup
   - Restore to staging environment
   - Validate data integrity
   - Apply transaction logs if available (minimize data loss)
   - Switch to recovered database
4. Investigate root cause
5. Document recovery

**Recovery time:**
- Small database (<10GB): 1-2 hours
- Medium database (10-100GB): 2-6 hours
- Large database (>100GB): 6-24 hours

### 9.5 Virtual Machine Recovery

**Full VM recovery:**
1. Assess failure type (data corruption, hardware failure, ransomware)
2. Identify clean backup point
3. Restore VM from backup:
   - Azure Backup: Restore to new or existing VM
   - Verify VM boots successfully
   - Validate services start correctly
   - Check data integrity
4. Network and security configuration:
   - Verify firewall rules
   - Confirm correct VNet/subnet
   - Update DNS if needed
   - Validate security controls
5. Application testing:
   - Test application functionality
   - Verify database connections
   - Test user access
6. Production cutover:
   - Scheduled maintenance window if possible
   - Update load balancers or routing
   - Monitor closely after cutover
7. Document recovery

**Partial recovery (individual files from VM):**
1. Mount VM backup
2. Browse file system
3. Extract required files
4. Copy to production VM
5. Verify integrity
6. Unmount backup

**Recovery time:**
- Small VM (<100GB): 2-4 hours
- Medium VM (100-500GB): 4-8 hours
- Large VM (>500GB): 8-24 hours
- Plus application testing and validation time

### 9.6 System-Level Recovery

**Bare-metal recovery (complete system rebuild):**
1. Obtain or provision replacement hardware/VM
2. Install base operating system
3. Apply system hardening and security baseline
4. Install backup agent/tools
5. Restore system from backup
6. Restore data from backup
7. Verify all services and applications
8. Update DNS, monitoring, and documentation
9. Thorough testing before production
10. Document build and recovery steps

**Recovery time:** 1-3 days depending on complexity

## 10. Disaster Recovery

For major disasters affecting entire systems or sites, follow disaster recovery plan.

**Disaster scenarios:**
- Complete datacenter outage (Entiros facility)
- Azure region failure
- Ransomware affecting multiple systems
- Natural disaster affecting office or datacenter
- Major cyber attack

**High-level DR process:**
1. **Declare disaster:** CISO or CEO activates disaster recovery plan
2. **Assemble DR team:** IT Operations, management, key stakeholders
3. **Assess situation:** Determine extent of damage/outage, estimated recovery time
4. **Initiate recovery:** Follow disaster recovery runbooks
   - SaaS platform: Restore at alternate datacenter or Azure region
   - Azure services: Failover to secondary region
   - Microsoft 365: Coordinate with Microsoft support
5. **Communication:** Keep stakeholders and customers informed
6. **Recovery validation:** Test all critical services
7. **Return to normal:** Failback to primary systems when safe
8. **Post-disaster review:** Lessons learned, plan updates

**Reference:** [TBD - SW-ISMS-PRO-XXX: Business Continuity and Disaster Recovery Procedure]

## 11. Recovery Testing

**Objective:** Validate that backups are functional and recovery procedures work.

### 11.1 Testing Schedule

| Test Type | Frequency | Scope | Owner |
|-----------|-----------|-------|-------|
| **File restore test** | Monthly | Random file/email recovery from backup | IT Operations |
| **Database restore test** | Quarterly | Restore non-production database to test environment | DBA / IT Operations |
| **VM restore test** | Quarterly | Restore non-critical VM to test environment | IT Operations |
| **Application recovery test** | Semi-annually | Restore complete application stack, test functionality | Application Owner + IT |
| **Disaster recovery test** | Annually | Simulate major outage, test full DR procedures | CISO + IT Operations + Management |

### 11.2 Testing Process

**Plan:**
1. Select system or data for testing
2. Define success criteria
3. Schedule test during maintenance window (if production impact)
4. Notify stakeholders

**Execute:**
1. Perform recovery per documented procedures
2. Document each step and timing
3. Note any issues or deviations
4. Measure recovery time

**Validate:**
1. Verify data integrity
2. Test application functionality
3. Confirm security controls intact
4. Check no unintended impact to production

**Document:**
1. Test report with outcomes
2. Recovery time actual vs. RTO target
3. Issues encountered and resolutions
4. Lessons learned
5. Procedure updates needed

**Remediate:**
1. Address any issues found
2. Update recovery procedures
3. Improve backup processes if needed
4. Retest if major issues found

### 11.3 Test Reporting

**Monthly summary to CISO:**
- Tests completed
- Success rate
- Issues found and resolved
- RTO/RPO performance against targets

**Annual report to management:**
- All recovery testing summary
- DR test results
- Backup reliability metrics
- Recommendations for improvement

## 12. Backup Retention and Disposal

### 12.1 Retention Periods by Data Type

| Data Type | Daily | Weekly | Monthly | Yearly |
|-----------|-------|--------|---------|--------|
| **Email** | 30 days | 12 weeks | 7 years | - |
| **Documents (SharePoint, OneDrive)** | 30 days | 12 weeks | 7 years | - |
| **Databases (production)** | 30 days | 12 weeks | 12 months | 7 years (critical) |
| **Virtual Machines** | 30 days | 12 weeks | 12 months | 7 years (critical) |
| **System configurations** | - | 12 weeks | 12 months | 5 years |
| **Application logs** | 30 days | 12 weeks | 12 months | - |
| **Financial data** | - | - | - | 10 years |
| **Customer data (SaaS)** | Per customer contract | Per customer contract | Per customer contract | Per customer contract |

### 12.2 Legal Hold and Retention Extensions

**Process for legal hold:**
1. Legal or HR initiates hold request
2. CISO approves and documents justification
3. IT Operations:
   - Identifies all relevant backups
   - Prevents automated deletion
   - Tags or isolates held backups
   - Documents hold scope and duration
4. Regular review of holds (quarterly)
5. Release hold when authorized by legal
6. Resume normal retention after hold lifted

### 12.3 Secure Backup Disposal

**When retention period expires:**
1. Automated deletion where supported
2. Manual deletion for archived backups:
   - Verify retention period expired
   - Confirm no legal hold
   - Delete using secure deletion methods
   - Document disposal
3. For physical media (if any):
   - Degauss magnetic media
   - Shred or physically destroy
   - Certificate of destruction obtained
   - Document disposal in asset register

**Deletion verification:**
- Regular audits of backup inventory
- Confirm expired backups removed
- Storage capacity reclaimed

## 13. Backup Security

### 13.1 Encryption

**Requirements:**
- All backups encrypted at rest (AES-256 or equivalent)
- All backup data transfers encrypted in-transit (TLS 1.2+)
- Encryption keys managed in Azure Key Vault or equivalent
- Separate encryption keys for production and backups (where feasible)

### 13.2 Access Controls

**Principle of least privilege:**
- Backup storage access restricted to authorized IT Operations staff
- Read-only access for monitoring and reporting
- Separate accounts for backup vs. recovery operations
- Multi-factor authentication mandatory
- Privileged access manager for emergency access

**Access logging:**
- All access to backup systems logged
- Regular review of access logs (monthly)
- Automated alerts on suspicious access patterns

### 13.3 Immutable Backups

**For critical systems and ransomware protection:**
- Enable immutable backup features where supported
- Backups cannot be deleted or modified during retention period
- Protects against insider threats and ransomware
- Azure Backup: Soft delete and security features enabled
- Third-party backup: Immutability or WORM storage

### 13.4 Air-Gapped Backups

**For highest-risk data:**
- Consider offline, disconnected backup copies
- Physically isolated from network
- Stored in secure location
- Access only for disaster recovery testing or actual disaster

## 14. Cloud Service Provider Dependencies

### 14.1 Microsoft 365

**Native protection:**
- Geo-redundant storage (data replicated across Microsoft datacenters)
- 99.9% SLA for availability
- Retention policies and legal hold capabilities

**Limitations:**
- Native tools limited for granular restore
- Deleted data recoverable only within retention periods
- Need third-party backup for extended retention and flexible recovery

**Swedwise approach:**
- Rely on Microsoft for availability and redundancy
- Third-party backup for flexible recovery and extended retention
- Document Microsoft's responsibility vs. Swedwise responsibility

### 14.2 Azure

**Native capabilities:**
- Azure Backup service
- Geo-redundant storage (GRS)
- Azure Site Recovery for DR
- Point-in-time restore for databases

**Swedwise approach:**
- Use Azure native services as primary backup method
- Configure geo-redundancy (secondary Azure region)
- Regular testing of Azure recovery features
- Document recovery procedures using Azure tools

### 14.3 Entiros (SaaS Platform Hosting)

**Contractual obligations:**
- Entiros provides platform backup per service agreement
- Backup schedules and retention documented in contract
- Recovery SLAs defined
- Regularly test recovery with Entiros

**Swedwise responsibilities:**
- Verify Entiros backup compliance (quarterly review)
- Request recovery testing (annually)
- Maintain own backups where access permits (application-level)
- Disaster recovery plan includes Entiros coordination

**Escalation:**
- If Entiros backup/recovery fails to meet SLA, escalate to Entiros management
- Activate contract remediation procedures
- Consider alternate hosting if persistent issues

## 15. Incident Response Integration

Backup and recovery is critical component of incident response.

**Ransomware and malware:**
- Isolate affected systems immediately (prevent backup contamination)
- Identify last known-clean backup (before infection)
- Restore from clean backup
- Validate no malware in backup
- Enhanced monitoring post-recovery

**Data breach:**
- Preserve backups as evidence
- Potential forensic analysis of backup data
- Coordinate with legal and incident response team
- Follow retention requirements for investigation

**Reference:** SW-ISMS-PRO-001: Incident Management Procedure

## 16. Performance Metrics

### 16.1 Key Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Backup success rate** | > 98% | Successful backups / Total scheduled backups |
| **Mean Time to Recovery (MTTR)** | Within defined RTO | Average time to complete recovery |
| **Recovery Point Objective (RPO) compliance** | 100% | Backups completed within RPO target |
| **Recovery testing success rate** | 100% | Successful test recoveries / Total tests |
| **Backup storage utilization** | < 85% | Used capacity / Total capacity |
| **Off-site replication success** | > 99% | Successful replications / Total replications |

### 16.2 Reporting

**Weekly operational report (IT Operations internal):**
- Backup job success/failure summary
- Failed backups and resolution status
- Storage utilization
- Any alerts or issues

**Monthly report to CISO:**
- Backup compliance metrics
- Recovery testing summary
- Capacity trends
- Issues and improvements

**Quarterly report to management:**
- Overall backup and recovery health
- RTO/RPO compliance
- Major incidents and recoveries
- Continuous improvement initiatives

## 17. Continuous Improvement

### 17.1 Regular Reviews

**Quarterly:**
- Review backup scope (systems added/removed)
- Assess RPO/RTO targets still appropriate
- Update system criticality assessments
- Review backup success trends

**Annually:**
- Full procedure review and update
- Backup strategy effectiveness review
- Technology and vendor assessment
- Cost optimization opportunities

### 17.2 Technology Updates

- Monitor backup technology advancements
- Evaluate new features from Microsoft, Azure, vendors
- Consider emerging threats (e.g., ransomware) requiring backup evolution
- Plan for technology refresh cycles

### 17.3 Lessons Learned

**After every recovery (especially P1/P2):**
- Conduct post-recovery review
- Document what went well and issues
- Update procedures if needed
- Share lessons with team

**After disaster recovery tests:**
- Formal lessons learned session
- Document gaps and improvements
- Update DR plan and runbooks
- Assign action items with owners and deadlines

## 18. Inputs and Outputs

**Inputs:**
- System and data inventory
- Business impact analysis (criticality, RPO/RTO)
- Compliance and legal requirements
- Recovery requests
- Incident notifications

**Outputs:**
- Backup sets (stored securely)
- Backup logs and reports
- Recovered data and systems
- Recovery test reports
- Backup compliance evidence
- Lessons learned documentation

## 19. Records

| Record | Retention Period | Location |
|--------|------------------|----------|
| Backup logs | 12 months | [TBD - Backup system] |
| Recovery requests and outcomes | 3 years | [TBD - Service desk system] |
| Recovery test reports | 7 years | [TBD - Document repository] |
| Backup inventory and schedules | Current + 3 years | [TBD - IT documentation system] |
| Disaster recovery test reports | 10 years | [TBD - Document repository] |
| Legal hold documentation | Duration of hold + 3 years | [TBD - Legal records system] |

## 20. Related Documents

**Policies:**
- SW-ISMS-POL-001: Information Security Policy
- SW-IMS-POL-001: Integrated Management System Policy

**Procedures:**
- SW-IMS-PRO-001: Document Control Procedure
- SW-ISMS-PRO-001: Incident Management Procedure
- [TBD - SW-ISMS-PRO-004: Business Continuity and Disaster Recovery Procedure]
- [TBD - SW-ISMS-PRO-005: Change Management Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-001: Information Classification Guideline]
- [TBD - SW-ISMS-GUI-004: Disaster Recovery Runbooks]

**Forms:**
- [TBD - SW-ISMS-FRM-006: Recovery Request Form]
- [TBD - SW-ISMS-FRM-007: Recovery Test Report Template]

**External:**
- ISO 27001:2022 - Clause 5.29, 5.30 (Information backup, ICT redundancy)
- Microsoft 365 backup and retention documentation
- Azure Backup service documentation
- Entiros hosting service agreement

## 21. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO] | Initial procedure creation | [TBD - CEO] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This procedure is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this procedure.*
