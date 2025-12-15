---
document_id: SW-ISMS-PRO-001
title: Incident Management Procedure
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
  - SW-IMS-PRO-001
---

# Incident Management Procedure

## 1. Purpose

This procedure establishes a systematic approach for detecting, reporting, responding to, and learning from information security incidents at Swedwise AB. It ensures that security incidents are handled consistently, efficiently, and in compliance with ISO 27001 requirements and legal obligations.

## 2. Scope

This procedure applies to:

- All information security incidents and events affecting Swedwise systems, data, or services
- All Swedwise employees, contractors, and third-party service providers
- All locations (offices, remote work, customer sites)
- Both internal systems and SaaS services operated by Swedwise
- Customer data processed on behalf of clients
- Third-party services (Azure, Microsoft 365, Entiros hosting)

## 3. Definitions

| Term | Definition |
|------|------------|
| **Security Event** | Identified occurrence of a system, service, or network state indicating a possible breach or security policy violation |
| **Security Incident** | Single or series of unwanted or unexpected security events that have a significant probability of compromising business operations or threatening information security |
| **Severity Level** | Classification of incident impact and urgency (Critical, High, Medium, Low) |
| **Incident Owner** | Person responsible for coordinating the response to a specific incident |
| **Containment** | Actions to limit the scope and magnitude of an incident |
| **Eradication** | Removal of the root cause of an incident |
| **Recovery** | Restoration of affected systems and services to normal operation |

## 4. Responsibilities

| Role | Responsibility |
|------|---------------|
| **CISO** | Overall incident management framework, coordination of major incidents, reporting to management and authorities |
| **Incident Owner** | Day-to-day management of assigned incidents, coordination of response activities |
| **IT Operations** | Technical investigation, containment, eradication, recovery actions |
| **Management Team** | Decision-making for business impact issues, resource allocation, customer communication approval |
| **All Staff** | Reporting suspected incidents immediately, cooperating with investigations, following response instructions |
| **Customer Success** | Customer communication and liaison during incidents affecting SaaS services |
| **Legal/Privacy Officer** | Advice on legal obligations, GDPR breach notifications, external reporting |

## 5. Incident Categories

### 5.1 Category Definitions

| Category | Examples | Typical Severity |
|----------|----------|------------------|
| **Unauthorized Access** | Compromised accounts, unauthorized system access, privilege escalation | High to Critical |
| **Malware** | Virus, ransomware, trojan, spyware detection | Medium to Critical |
| **Data Breach** | Unauthorized disclosure, loss, or theft of confidential information | High to Critical |
| **Denial of Service** | Service unavailability due to attack or system failure | Medium to Critical |
| **Policy Violation** | Misuse of systems, acceptable use policy breaches | Low to Medium |
| **Physical Security** | Unauthorized physical access, theft of equipment, facility breach | Medium to High |
| **Third-Party Incident** | Security issues originating from suppliers or partners (e.g., Azure, Entiros) | Varies |
| **Social Engineering** | Phishing, pretexting, vishing attempts | Low to High |

## 6. Severity Levels

### 6.1 Severity Classification

| Level | Definition | Response Time | Examples |
|-------|------------|---------------|----------|
| **Critical** | Widespread impact on business operations, customer data breach, SaaS service outage | Immediate (15 min) | Ransomware attack, customer data exfiltration, complete SaaS platform outage |
| **High** | Significant impact on operations or data, potential for escalation | 1 hour | Compromised privileged account, malware on multiple systems, partial SaaS service degradation |
| **Medium** | Limited impact, contained to specific system or user | 4 hours | Single user account compromise, isolated malware detection, minor policy violation |
| **Low** | Minimal or no business impact, informational | 1 business day | Failed login attempts, spam emails, minor configuration issues |

### 6.2 Severity Assessment Criteria

Consider when determining severity:

**Impact Dimensions:**
- Number of affected users or systems
- Type and sensitivity of affected data (use information classification)
- Business function criticality
- Customer impact (especially for SaaS services)
- Regulatory or contractual implications
- Reputational damage potential

**Urgency Factors:**
- Speed of spread or escalation
- Active exploitation in progress
- Time-sensitive regulatory reporting requirements
- Customer SLA commitments

## 7. Incident Management Process

### 7.1 Process Overview

```
Detection → Reporting → Triage → Containment → Eradication → Recovery → Review
     ↓           ↓         ↓           ↓              ↓            ↓         ↓
  Logging   Severity  Assign    Stop spread    Fix cause    Restore   Learn
```

### 7.2 Detection and Reporting

#### Detection Channels

Incidents may be detected through:
- Automated monitoring and alerts (Azure Monitor, SIEM tools)
- User reports (employees, customers, partners)
- Third-party notifications (Microsoft, Entiros, security researchers)
- Audit findings or security assessments
- Media or public disclosure

#### Reporting Mechanisms

**Internal Reporting:**
- Email: security@swedwise.se
- Phone: [TBD - Security hotline number]
- Microsoft Teams: #security-incidents channel
- Direct contact to CISO or IT Operations

**External Reporting (Customers/Partners):**
- Support portal: [TBD - Support system]
- Email: support@swedwise.se (flagged for security keywords)
- Emergency contact: [TBD - On-call number]

#### What to Report

Encourage reporting if ANY of these apply:
- Suspected unauthorized access or data breach
- System behaving unexpectedly
- Suspicious emails or communications
- Lost or stolen devices containing company data
- Accidental data disclosure or misconfiguration
- Customer reporting a security concern
- Third-party service security notification

**Better to over-report than under-report.**

#### Information to Collect

When reporting, provide:
1. Your name and contact information
2. Date and time incident observed
3. Description of what happened
4. Systems, accounts, or data affected
5. Any actions already taken
6. Evidence (screenshots, logs, emails) - DO NOT DELETE

### 7.3 Initial Response and Triage

**Within 15 minutes of report:**

1. **Acknowledge Receipt**
   - Confirm incident report received
   - Assign incident tracking number (format: INC-YYYY-MM-####)
   - Log in incident tracking system [TBD - tool]

2. **Initial Assessment**
   - Review available information
   - Conduct preliminary investigation
   - Determine severity level (use Section 6)
   - Identify affected systems and data

3. **Assign Incident Owner**
   - CISO for Critical incidents
   - IT Operations Lead for High/Medium incidents
   - Service Desk for Low incidents

4. **Activate Response Team**
   - For Critical/High incidents, assemble:
     - Incident Owner
     - IT Operations technical staff
     - CISO (if not already Incident Owner)
     - Customer Success (if customers affected)
     - Legal/Privacy Officer (for data breaches)
     - Management representative (Critical incidents)

5. **Initiate Communication**
   - Brief response team
   - Notify management (Critical/High incidents)
   - Set up dedicated communication channel (Teams channel/war room)

### 7.4 Escalation Matrix

| Incident Severity | Notification | Timeframe | Escalation Path |
|-------------------|-------------|-----------|-----------------|
| **Critical** | - CISO<br>- CEO<br>- Management Team<br>- Customer Success (if SaaS affected) | Immediate | CISO → CEO → Board (if major breach) |
| **High** | - CISO<br>- Relevant Department Head<br>- Customer Success (if customer impact) | 1 hour | IT Ops → CISO → CEO |
| **Medium** | - IT Operations Lead<br>- CISO (informed) | 4 hours | Service Desk → IT Ops → CISO |
| **Low** | - Service Desk<br>- IT Operations (logged) | Next business day | Service Desk → IT Ops |

### 7.5 Containment

**Objective:** Stop the incident from spreading or worsening while preserving evidence.

#### Immediate Containment Actions (Critical/High incidents)

**For Compromised Accounts:**
- Disable affected user accounts
- Reset passwords for affected and related accounts
- Revoke active sessions and tokens
- Review account activity logs

**For Malware:**
- Isolate affected systems from network
- Block malicious domains/IPs at firewall
- Disable affected user accounts
- Scan other systems for indicators of compromise

**For Data Breach:**
- Identify the data exposure vector and close it
- Revoke unauthorized access
- Preserve evidence (logs, system snapshots)
- Document what data was accessed/exfiltrated

**For SaaS Service Issues:**
- Assess if service degradation or outage is needed
- Implement temporary access restrictions if necessary
- Activate failover or redundancy if available
- Consider temporary service suspension if customer data at risk

**For Third-Party Incidents (Azure, Entiros):**
- Contact vendor immediately
- Follow vendor incident response procedures
- Assess impact on Swedwise services
- Implement compensating controls if needed

#### Evidence Preservation

- **DO NOT** delete or modify logs
- Create forensic copies of affected systems if possible
- Document all actions taken with timestamps
- Preserve emails, screenshots, and other evidence
- Maintain chain of custody for potential legal proceedings

### 7.6 Investigation and Analysis

1. **Gather Evidence**
   - Collect and analyze logs (system, application, network, authentication)
   - Interview affected users or witnesses
   - Review system configurations and changes
   - Analyze malware samples (in safe environment)

2. **Determine Root Cause**
   - How did the incident occur?
   - What vulnerabilities were exploited?
   - Were existing controls ineffective? Why?

3. **Assess Impact**
   - What systems/data were affected?
   - Duration of unauthorized access or exposure
   - Number of affected users or customers
   - Data confidentiality, integrity, or availability impact
   - Financial impact estimate

4. **Document Findings**
   - Timeline of events
   - Attack vectors and techniques used
   - Systems and data compromised
   - Evidence collected
   - Actions taken

### 7.7 Eradication

**Objective:** Remove the root cause and ensure the threat is eliminated.

**Actions:**
- Remove malware and malicious tools
- Close exploited vulnerabilities (patch, reconfigure)
- Address compromised credentials (force password resets)
- Remove unauthorized access methods (backdoors, rogue accounts)
- Verify all traces of incident are removed
- Confirm no lateral movement or persistence mechanisms remain

**Validation:**
- Scan systems to confirm malware removal
- Review configurations against security baselines
- Test that vulnerabilities are closed
- Monitor for signs of recurring issues

### 7.8 Recovery

**Objective:** Restore affected systems and services to normal operation.

1. **Restore from Clean State**
   - Rebuild systems from known-good backups or images
   - Restore data from clean backups (after validating backup integrity)
   - Apply all security patches before reconnecting to network
   - Verify system hardening and security controls

2. **Service Restoration**
   - Restore services in phases if possible
   - Monitor closely during initial recovery period
   - Verify functionality and security before full restoration
   - Update SaaS service status page

3. **Verification**
   - Confirm systems are functioning normally
   - Validate security controls are operational
   - Test monitoring and detection capabilities
   - Verify no signs of persistent compromise

4. **Return to Production**
   - Document lessons learned before closing
   - Obtain approval from CISO for Critical/High incidents
   - Communicate restoration to stakeholders
   - Continue enhanced monitoring for [TBD - e.g., 7 days]

### 7.9 Communication

#### Internal Communication

**During Incident:**
- Regular updates to response team
- Status updates to management (Critical/High: every 2 hours initially)
- Inform affected departments and users
- Use dedicated communication channel to avoid information leaks

**After Resolution:**
- Notify all stakeholders of resolution
- Provide summary of incident and remediation
- Share lessons learned with relevant teams

#### Customer Communication (SaaS Services)

**When to Notify:**
- Service outage or degradation affecting SLAs
- Potential or confirmed data breach
- Security incident visible to customers
- Regulatory reporting requires customer notification

**Communication Approach:**
- Coordinate through Customer Success team
- Obtain management approval for Critical incidents
- Be transparent but measured (avoid speculation)
- Provide timeline, impact, and resolution steps
- Update service status page
- Follow up with detailed post-incident report

**Template Messages:** [TBD - Create customer communication templates]

#### External Communication

**Regulatory Authorities:**
- GDPR personal data breach: Report to Swedish Authority for Privacy Protection (IMY) within 72 hours if risk to data subjects
- Notify affected individuals if high risk to rights and freedoms
- Coordinate with Legal/Privacy Officer

**Third Parties:**
- Notify suppliers/partners if their systems affected
- Report to security researchers if responsible disclosure
- Law enforcement if criminal activity suspected

**Media:**
- All media inquiries directed to CEO
- No staff should comment to media without authorization
- Prepare holding statement for significant incidents

### 7.10 Post-Incident Review

**Timeline:** Within 5 business days of incident closure (Critical/High), 10 days (Medium)

**Participants:**
- Incident Owner
- Response team members
- CISO
- Affected department representatives
- Management (for Critical incidents)

**Review Agenda:**

1. **Incident Summary**
   - What happened?
   - When was it detected and how?
   - What was the impact?
   - How long to resolve?

2. **Response Effectiveness**
   - What went well?
   - What could be improved?
   - Were procedures followed?
   - Were resources adequate?

3. **Root Cause Analysis**
   - Why did the incident occur?
   - Were controls in place?
   - Why did controls fail or not detect?

4. **Lessons Learned**
   - What should we do differently?
   - Are procedure updates needed?
   - Should controls be added or improved?

5. **Action Items**
   - Assign corrective and preventive actions
   - Set deadlines and owners
   - Track to completion

**Outputs:**
- Post-Incident Review Report
- Updated risk assessment (if needed)
- Corrective action requests
- Procedure updates (if needed)

**Distribution:**
- Management Team (Critical/High incidents)
- Relevant department heads
- Security awareness training updates (sanitized)

## 8. Evidence Preservation

### 8.1 Types of Evidence

- System and application logs
- Network traffic captures
- Disk images and memory dumps
- Email messages and attachments
- Screenshots and photographs
- Documentation and notes
- Physical evidence (devices, media)

### 8.2 Chain of Custody

**For incidents with legal or regulatory implications:**

1. Document evidence collection:
   - What was collected
   - When it was collected
   - Who collected it
   - Where it was collected from
   - Hash values for digital evidence

2. Secure storage:
   - Restrict access to authorized personnel
   - Store in secure location
   - Maintain access logs

3. Transfer protocol:
   - Document all transfers
   - Verify integrity (checksums)
   - Obtain signatures for physical transfers

### 8.3 Retention

- Critical incidents: Retain evidence for [TBD - e.g., 7 years]
- High incidents: Retain for [TBD - e.g., 5 years]
- Medium incidents: Retain for [TBD - e.g., 3 years]
- Low incidents: Retain for [TBD - e.g., 1 year]
- Legal/regulatory incidents: Retain per legal counsel advice

## 9. Special Incident Types

### 9.1 Personal Data Breach (GDPR)

**Additional Steps:**

1. **Initial Assessment (within 4 hours)**
   - Determine if personal data is involved
   - Assess risk to data subjects
   - Notify CISO and Legal/Privacy Officer immediately

2. **Regulatory Notification (within 72 hours if required)**
   - Notify IMY if breach likely to result in risk to rights/freedoms
   - Document reason if notification not required
   - Use GDPR breach notification form

3. **Individual Notification (if high risk)**
   - Direct notification to affected individuals
   - Clear and plain language
   - Describe nature of breach and likely consequences
   - Measures taken and recommended actions

4. **Documentation**
   - Document all personal data breaches (even if not notified)
   - Maintain breach register
   - Include facts, effects, and remedial actions

### 9.2 Ransomware

**DO NOT pay ransom without executive approval and legal consultation.**

**Specific Actions:**

1. **Immediate containment:**
   - Isolate affected systems (disconnect network)
   - Identify and isolate source
   - Shut down lateral movement paths

2. **Assessment:**
   - Identify encryption extent
   - Determine data exfiltration (modern ransomware often exfiltrates before encrypting)
   - Assess backup availability and integrity

3. **Recovery options:**
   - Restore from backups (preferred)
   - Evaluate decryption tools availability
   - Consider ransom payment only as absolute last resort

4. **External assistance:**
   - Contact law enforcement
   - Consider forensic investigation firm
   - Notify cyber insurance provider

### 9.3 Third-Party Service Incidents

**For Azure, Microsoft 365, Entiros, or other critical services:**

1. **Verify incident:**
   - Check service health dashboards
   - Contact vendor support
   - Monitor vendor status pages

2. **Assess Swedwise impact:**
   - Identify affected Swedwise services
   - Determine customer impact
   - Evaluate data exposure risk

3. **Response actions:**
   - Follow vendor guidance
   - Implement compensating controls
   - Communicate to affected customers
   - Document vendor response and actions

4. **Follow-up:**
   - Obtain vendor post-incident report
   - Review vendor security and SLA compliance
   - Consider whether vendor relationship needs reassessment

### 9.4 Insider Threat

**Suspected intentional malicious activity by employee or contractor:**

**Considerations:**
- Involve HR early
- Consult legal counsel
- Preserve evidence carefully
- Control information disclosure
- Consider law enforcement involvement
- Handle with discretion and sensitivity

**Actions:**
- Disable accounts and access immediately
- Monitor user activity (if legal)
- Review audit logs for full activity history
- Secure physical access
- Conduct confidential investigation
- Follow employment law and company HR policies

## 10. Continuous Improvement

### 10.1 Metrics and Reporting

**Track and report monthly:**

| Metric | Target |
|--------|--------|
| Number of incidents by severity | Trend down over time |
| Mean time to detect (MTTD) | [TBD - e.g., < 1 hour for Critical] |
| Mean time to contain (MTTC) | [TBD - e.g., < 4 hours for Critical] |
| Mean time to resolve (MTTR) | [TBD - e.g., < 24 hours for Critical] |
| Percentage of incidents resolved within SLA | > 95% |
| Number of recurring incidents | Trend down |
| Post-incident actions completed on time | > 90% |

### 10.2 Procedure Updates

Review and update this procedure:
- Annually as part of IMS review
- After major incidents (Critical)
- When organizational or technical changes occur
- Based on post-incident review findings
- When threat landscape changes significantly

### 10.3 Training and Awareness

- All staff: Annual security awareness training includes incident reporting
- IT Operations: Quarterly incident response tabletop exercises
- Response team: Annual simulated incident drill (Critical scenario)
- New hires: Incident reporting as part of onboarding
- Management: Annual briefing on incident trends and response capabilities

## 11. Inputs and Outputs

**Inputs:**
- Security event detections and alerts
- User and customer reports
- Third-party notifications
- Audit findings

**Outputs:**
- Incident reports and documentation
- Post-incident review reports
- Corrective action requests
- Lessons learned and awareness materials
- Management reports and metrics
- Regulatory notifications (when required)

## 12. Records

| Record | Retention Period | Location |
|--------|------------------|----------|
| Incident Reports | Per severity (see 8.3) | [TBD - Incident tracking system] |
| Investigation Evidence | Per severity (see 8.3) | [TBD - Secure evidence storage] |
| Post-Incident Reviews | 5 years | [TBD - Document repository] |
| Communication Records | 3 years | [TBD - Email/Teams] |
| GDPR Breach Register | Permanent | [TBD - Privacy management system] |
| Incident Metrics Reports | 7 years | [TBD - Document repository] |

## 13. Related Documents

**Policies:**
- SW-ISMS-POL-001: Information Security Policy
- SW-IMS-POL-001: Integrated Management System Policy
- [TBD - SW-ISMS-POL-003: Data Protection and Privacy Policy]

**Procedures:**
- SW-IMS-PRO-001: Document Control Procedure
- [TBD - SW-ISMS-PRO-002: Access Management Procedure]
- [TBD - SW-ISMS-PRO-003: Backup and Recovery Procedure]
- [TBD - SW-ISMS-PRO-004: Business Continuity Procedure]
- [TBD - SW-ISMS-PRO-005: Vulnerability Management Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-001: Information Classification Guideline]
- [TBD - SW-ISMS-GUI-002: Incident Reporting Quick Guide]

**Forms:**
- [TBD - SW-ISMS-FRM-001: Incident Report Form]
- [TBD - SW-ISMS-FRM-002: Post-Incident Review Template]
- [TBD - GDPR Personal Data Breach Notification Form]

**External:**
- ISO 27001:2022 - Clause 5.24, 5.25, 5.26, 5.28 (Controls)
- GDPR Articles 33-34 (Breach notification requirements)

## 14. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO] | Initial procedure creation | [TBD - CEO] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This procedure is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this procedure.*
