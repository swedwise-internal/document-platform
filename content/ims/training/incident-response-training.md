---
document_id: SW-ISMS-TRN-004
title: Incident Response Training
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
  - ISO 9001
related_documents:
  - SW-ISMS-PRO-001
  - SW-ISMS-POL-001
  - SW-IMS-TRN-004
  - SW-ISMS-TRN-001
training:
  course_id: incident-response
  duration: 45
  target_audience: [it_staff, security_team, incident_responders, sre, support_team]
  required_for: [new_hire_technical, annual_refresh_technical]
  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
    question_count: 10
  validity_period: 12
---

# Incident Response Training

**Duration**: 45 minutes
**Target Audience**: IT staff, security team, incident responders, SRE, support personnel
**Document ID**: SW-ISMS-TRN-004
**Passing Score**: 80%

---

## Why This Matters

**30-Second Version:**

When a security incident hits, every minute counts. The difference between a minor incident and a company-ending disaster often comes down to one thing: how quickly and effectively you respond. As Swedwise operates SaaS services with 99.9% SLA commitments and handles sensitive customer data, incident response isn't just about fixing problems - it's about protecting our business, our customers, and our reputation.

**The Stakes:**
- Our SaaS platform serves critical business communications for customers
- Security incidents can trigger GDPR breach notifications (72-hour deadline)
- SLA penalties kick in if we don't meet recovery time objectives
- Customers trust us with their sensitive data - one incident can end relationships
- Regulatory requirements (NIS2, GDPR) mandate proper incident handling
- Average cost of a data breach: 4.45 million USD

**Your Role:**

As part of the technical team, you're on the front lines. You're often the first to detect anomalies, and your initial actions can make or break the response. This training ensures you know what to do when seconds count.

---

## Module 1: Incident Types and Severity Classification

### What is a Security Incident?

**Definition:** Any event that could compromise the confidentiality, integrity, or availability of information or systems.

**Not every problem is a security incident:**
- Routine system maintenance → Not an incident
- Planned downtime → Not an incident
- User error without security impact → Not an incident
- Performance degradation from legitimate load → Not an incident (unless attack)

**Security incidents include:**
- Unauthorized access to systems or data
- Malware infections
- Data breaches or leaks
- DDoS attacks
- Service disruptions from security events
- Insider threats
- Physical security breaches
- Social engineering attacks
- System compromises

### Incident Categories

#### 1. Confidentiality Incidents
**Definition:** Unauthorized disclosure or access to data

**Examples:**
- Data breach (customer data exposed)
- Email sent to wrong recipient containing sensitive data
- Lost/stolen laptop or device with unencrypted data
- Misconfigured cloud storage exposing data
- Unauthorized employee access to restricted data
- Ransomware with data exfiltration
- API vulnerability exposing customer data
- Database dump leaked publicly

**Immediate Impact:** Privacy violations, GDPR breach notification requirements, customer trust loss

#### 2. Integrity Incidents
**Definition:** Unauthorized modification of data or systems

**Examples:**
- Database tampering or unauthorized changes
- Website defacement
- Code repository compromise
- Configuration changes by unauthorized parties
- Malware modifying system files
- Supply chain attack (compromised dependencies)
- Man-in-the-middle attack altering data
- Backup corruption or tampering

**Immediate Impact:** Data accuracy concerns, system reliability questions, potential service errors

#### 3. Availability Incidents
**Definition:** Service disruption or system unavailability

**Examples:**
- DDoS attacks
- Ransomware encryption
- System crashes from security exploits
- Resource exhaustion attacks
- Critical service outages from security events
- Infrastructure compromise requiring shutdown
- DNS hijacking or cache poisoning
- CDN/hosting provider issues

**Immediate Impact:** SLA violations, revenue loss, customer dissatisfaction, potential penalties

#### 4. Compliance/Regulatory Incidents
**Definition:** Events triggering regulatory notification or compliance concerns

**Examples:**
- GDPR data breach (personal data compromised)
- NIS2 reportable incidents (essential services disruption)
- ISO 27001 non-conformance
- PCI-DSS violations (if handling payment data)
- Privacy violations
- Audit findings requiring immediate action

**Immediate Impact:** Regulatory fines, certification risks, legal liability, mandatory disclosures

### Severity Classification Matrix

Swedwise uses a four-level severity classification system:

#### Critical (P1) - Maximum Response

**Criteria:**
- Active data breach with customer/personal data exposure
- Complete SaaS platform outage (all customers affected)
- Ransomware encryption of production systems
- Active ongoing attack with significant impact
- Customer-facing security compromise
- Critical vulnerability being actively exploited
- Regulatory incident requiring immediate notification

**Response Time:** Immediate (within 15 minutes)
**Escalation:** CISO, CEO, affected customers immediately
**Team:** Full incident response team activated 24/7
**Customer Notification:** Required (timing depends on situation)

**SLA Impact:** Major - immediate penalties, reputation damage
**Example:** "Database containing 50,000 customer records exposed publicly"

---

#### High (P2) - Urgent Response

**Criteria:**
- Internal system compromise (non-production)
- Limited data exposure (small number of affected individuals)
- Partial service degradation from security event
- Malware detected but contained
- Significant vulnerability discovered
- Attempted breach that was partially successful
- Security control failure requiring immediate fix

**Response Time:** Within 1 hour (business hours), 2 hours (after hours)
**Escalation:** CISO, relevant managers
**Team:** Core incident response team
**Customer Notification:** May be required depending on impact

**SLA Impact:** Moderate - monitoring required
**Example:** "Phishing attack compromised 3 employee accounts"

---

#### Medium (P3) - Standard Response

**Criteria:**
- Suspicious activity detected but no confirmed compromise
- Low-impact security events
- Policy violations without data exposure
- Minor malware on isolated system
- Failed attack attempts (blocked)
- Security misconfigurations discovered (no exploitation)
- Non-critical vulnerabilities found

**Response Time:** Within 4 hours (business hours), next business day (after hours)
**Escalation:** Security team, system owners
**Team:** Assigned security personnel
**Customer Notification:** Typically not required

**SLA Impact:** Minimal or none
**Example:** "Port scan detected from external IP, all attempts blocked"

---

#### Low (P4) - Informational

**Criteria:**
- Security alerts requiring investigation
- Potential false positives
- Minor policy violations
- Informational security events
- Routine security log reviews
- Awareness/training incidents (phishing simulation clicks)

**Response Time:** Within 1 business day
**Escalation:** Security team (informational)
**Team:** Individual analyst or administrator
**Customer Notification:** Not required

**SLA Impact:** None
**Example:** "User reported suspicious email (verified as false positive)"

---

### Severity Decision Factors

When classifying an incident, consider:

1. **Data Sensitivity**
   - Personal data (GDPR-protected)?
   - Customer confidential data?
   - Restricted classification?
   - Special category data (health, financial)?

2. **Scope of Impact**
   - How many systems affected?
   - How many users/customers impacted?
   - Geographic spread?
   - Duration of impact?

3. **Business Impact**
   - Revenue loss?
   - SLA violations?
   - Reputation damage?
   - Regulatory implications?

4. **Regulatory Triggers**
   - GDPR breach notification required?
   - NIS2 reporting threshold met?
   - Other compliance obligations?

5. **Ongoing vs. Contained**
   - Is the attack still active?
   - Is it spreading?
   - Have we regained control?

**When in Doubt:** Escalate to the higher severity level. It's better to over-react than under-respond.

---

## Module 2: Incident Detection and Initial Response

### How Incidents Are Detected

#### Automated Detection
- **SIEM alerts** (Security Information and Event Management)
- **IDS/IPS signatures** (Intrusion Detection/Prevention)
- **Antivirus/EDR alerts** (Endpoint Detection and Response)
- **Log analysis and anomaly detection**
- **Monitoring system thresholds** (unusual traffic, failed logins)
- **Cloud security posture alerts** (misconfigurations)
- **Vulnerability scan findings** (active exploitation)

#### Manual Detection
- **User reports** (suspicious emails, system behavior)
- **Customer complaints** (service issues, strange behavior)
- **Support tickets** (unusual patterns, repeated issues)
- **Security team investigations**
- **Audit findings**
- **External notifications** (vendor alerts, researcher disclosure)
- **Threat intelligence feeds**

#### Common Indicators of Compromise (IOCs)

**Network Indicators:**
- Unusual outbound traffic (large data transfers, odd destinations)
- Communications with known malicious IPs
- DNS queries to suspicious domains
- Port scans or unusual port activity
- Spike in failed login attempts
- Unusual protocol usage

**System Indicators:**
- Unauthorized processes or services
- Registry or configuration changes
- New user accounts or privilege escalations
- Disabled security tools (antivirus, logging)
- Scheduled tasks or cron jobs added
- Files in unusual locations

**Application Indicators:**
- Unusual API calls or access patterns
- Failed authentication spikes
- Unexpected error rates
- Database queries to sensitive tables
- File uploads/downloads outside normal patterns
- Admin actions by non-admin users

**User Behavior Indicators:**
- Login from unusual locations/times
- Access to systems not normally used
- Bulk data downloads
- Privilege escalation attempts
- Bypassing normal workflows

### Initial Response Actions (First 5 Minutes)

When you detect or suspect an incident:

#### 1. Don't Panic - Think Clearly
- Take a breath
- Document what you're seeing
- Don't make impulsive decisions

#### 2. Initial Assessment (60 seconds)
- What am I seeing?
- Is this definitely suspicious or could it be normal?
- Is this still happening or is it historical?
- Quick severity estimate (Critical/High/Medium/Low)?

#### 3. Immediate Containment (if safe)
**Only if you're confident it won't make things worse:**
- Block malicious IP at firewall (if clear attack)
- Disable compromised user account
- Isolate infected endpoint (disconnect network)
- Take screenshot/preserve evidence

**Don't:**
- Shut down systems (may destroy evidence or trigger ransomware)
- Delete files (evidence loss)
- Attempt to "fix" without authorization
- Alert the attacker (if insider or sophisticated threat)

#### 4. Document Everything
**Start an incident log immediately:**
- Time detected: [timestamp]
- Detected by: [your name]
- What I observed: [specific details]
- Initial actions taken: [what you did]
- Systems affected: [hostnames, IPs]

**Use template:**
```
INCIDENT DETECTION LOG
======================
Time: 2024-12-16 14:23:15 CET
Detected by: [Your Name]
Detection method: [SIEM alert / User report / etc]

WHAT I SEE:
-----------
[Specific observations - be factual, not speculative]

AFFECTED SYSTEMS:
-----------------
- System: [hostname/IP]
- Service: [what's impacted]
- Users: [estimated count]

INITIAL ACTIONS:
----------------
[What you've done so far]

SEVERITY ESTIMATE: [Critical/High/Medium/Low]
CONFIDENCE: [High/Medium/Low]
```

#### 5. Notify Immediately
**Critical (P1) Incidents:**
- Call CISO immediately: [Phone TBD]
- Email: security-incidents@swedwise.se
- Teams: Post in #security-critical
- Use escalation hotline: [TBD]

**High (P2) Incidents:**
- Email: security-incidents@swedwise.se
- Teams: #security-incidents
- Phone CISO if after hours

**Medium/Low (P3/P4):**
- Email: security-incidents@swedwise.se
- Teams: #security-incidents

**Never:**
- Send incident details via unencrypted email to external parties
- Discuss publicly (social media, public Slack)
- Speculate about root cause without evidence
- Notify customers (that's escalation team's job)

---

## Module 3: Escalation Procedures and Communication

### Incident Response Team Structure

#### Incident Commander (IC)
**Who:** CISO or designated deputy
**Role:** Overall incident coordination, decision authority, external communications
**When activated:** All P1 incidents, most P2 incidents

#### Technical Lead
**Who:** Senior SRE or Security Engineer
**Role:** Technical investigation, containment, remediation planning
**When activated:** P1 and P2 incidents

#### Communications Lead
**Who:** Marketing/Communications Manager
**Role:** Customer communications, media relations, internal updates
**When activated:** P1 incidents with customer impact

#### Legal/Compliance
**Who:** External legal counsel or DPO
**Role:** Regulatory notifications, legal implications, breach notification coordination
**When activated:** P1 incidents involving data breaches

#### Customer Success
**Who:** Customer Success Manager
**Role:** Customer liaison, impact assessment, customer-specific communications
**When activated:** P1 and P2 incidents affecting customers

#### Support
**Who:** On-call support personnel
**Role:** Manage support tickets, customer inquiries, status page updates
**When activated:** All incidents affecting service availability

### Escalation Matrix

| Severity | Initial Notification | Who to Call | When | Communication Channel |
|----------|---------------------|-------------|------|---------------------|
| **Critical (P1)** | Immediate | CISO (direct call) + Security Team + On-Call SRE + CEO + Customer Success Lead | Within 15 min | Phone call + Teams #security-critical |
| **High (P2)** | Urgent | CISO + Security Team + On-Call SRE | Within 1 hour | Teams #security-incidents + Email |
| **Medium (P3)** | Standard | Security Team + System Owner | Within 4 hours | Teams #security-incidents |
| **Low (P4)** | Informational | Security Team | Next business day | Email security-incidents@ |

### Communication Protocols

#### Internal Communications

**War Room:**
- P1 incidents: Dedicated Teams channel created immediately
- Standing video call link activated
- All updates posted to war room channel
- No side conversations - everything in the channel

**Status Updates:**
- P1: Every 30 minutes minimum
- P2: Every 2-4 hours
- P3: Daily
- Include: Current status, actions taken, next steps, ETA for updates

**Internal Stakeholders:**
- Management: High-level status, business impact, estimated resolution
- Engineering teams: Technical details, assistance needed
- Support: Customer-facing talking points, expected resolution
- Sales: Customer impact, what to communicate

#### External Communications

**Never communicate externally without approval from Incident Commander and Communications Lead.**

**Customer Notifications:**

**P1 Incidents (SaaS outage or data breach):**
1. **Initial notification** (within 1 hour of declaring P1)
   - We're aware of an issue
   - Investigating
   - Next update timing
   - Status page link

2. **Regular updates** (every 1-2 hours)
   - What we know
   - What we're doing
   - Estimated resolution
   - Next update timing

3. **Resolution notification**
   - Issue resolved
   - Root cause (high level)
   - Preventive measures
   - Apology (if appropriate)

4. **Post-incident report** (within 5 business days)
   - Timeline
   - Root cause analysis
   - Impact details
   - Remediation actions
   - Prevention measures

**P2 Incidents:**
- Notify if customer-impacting
- Status page updates
- Email to affected customers
- Resolution notification

**Template - Initial Customer Notification (P1):**
```
Subject: [URGENT] Service Issue - Swedwise Communications Platform

Dear Valued Customer,

We are currently experiencing technical difficulties with the Swedwise
Communications platform. We are aware that [brief description of impact]
and our engineering team is actively investigating and working to resolve
this issue.

Current Status:
- Issue detected: [time]
- Services affected: [specific services]
- Current impact: [describe impact]
- Estimated resolution: [if known, otherwise "investigating"]

We understand the critical nature of your communications and sincerely
apologize for any disruption. Our team is treating this with the highest
priority.

We will provide updates every [frequency] until this is resolved.
Current status is available at: [status page URL]

If you have urgent questions, please contact: [emergency contact]

Next update: [specific time]

Swedwise Incident Response Team
[Date/Time]
```

**Regulatory Notifications:**

**GDPR Breach (Personal Data):**
- **Timeline:** Within 72 hours to supervisory authority (IMY in Sweden)
- **Who handles:** DPO with Legal
- **Incident team provides:** Technical details, scope, containment actions
- **Notification to data subjects:** If high risk, without undue delay

**NIS2 Reporting (Significant Incidents):**
- **Early warning:** Within 24 hours (if significant incident)
- **Incident notification:** Within 72 hours
- **Final report:** Within 1 month
- **Who handles:** CISO with Legal
- **Threshold:** Severe operational disruption or significant security impact

### Communication Best Practices

**DO:**
- Be factual and specific
- Use timestamps (include timezone)
- Acknowledge uncertainty ("We're still investigating...")
- Provide next update timing
- Use consistent terminology
- Document all communications
- Empathize with affected parties

**DON'T:**
- Speculate about root cause without evidence
- Make promises you can't keep ("Resolved in 30 minutes")
- Blame individuals or teams publicly
- Use jargon with customers
- Provide conflicting information
- Go silent (even "no new updates" is an update)
- Share sensitive technical details publicly

---

## Module 4: Evidence Preservation and Documentation

### Why Evidence Matters

**Legal Implications:**
- Potential lawsuits (customers, regulators, individuals)
- Criminal prosecution (if applicable)
- Contractual disputes
- Insurance claims

**Investigation Needs:**
- Root cause analysis
- Scope determination
- Attribution (who did it)
- Timeline reconstruction

**Regulatory Requirements:**
- GDPR Article 33 (breach documentation)
- ISO 27001 records
- NIS2 incident reporting
- Audit trail requirements

**Lessons Learned:**
- Prevent recurrence
- Improve detection
- Refine response procedures

### Chain of Custody

**Definition:** Documented trail showing who handled evidence, when, and what they did with it.

**Why It Matters:** Evidence without proper chain of custody may be inadmissible in legal proceedings.

**What to Document:**
- Who collected the evidence
- When it was collected (exact timestamp)
- Where it came from (system, location)
- How it was collected (method, tools)
- Who has had access to it
- Any actions performed on it
- Storage location and security

**Evidence Log Template:**
```
EVIDENCE LOG
============
Evidence ID: INC-2024-001-EV-001
Collected by: [Name]
Date/Time: 2024-12-16 15:45:00 CET
Source: db-prod-01.swedwise.internal
Type: Disk image
Method: dd command, SHA-256 verified
Storage: Secure evidence locker, encrypted volume /evidence/INC-2024-001/
Access log: [Date/Time - Person - Action]
```

### What to Preserve

#### System Artifacts
- **Memory dumps** (RAM - capture before reboot!)
- **Disk images** (full or partial)
- **Log files** (system, application, security)
- **Configuration files**
- **Database snapshots** (before cleanup)
- **Network traffic captures** (PCAP files)
- **Process lists and open connections**

#### Application/Service Artifacts
- **Application logs** (web server, application server)
- **Database transaction logs**
- **API access logs**
- **Authentication logs**
- **Audit trails**
- **Error logs and stack traces**

#### Network Artifacts
- **Firewall logs**
- **IDS/IPS alerts and logs**
- **NetFlow/traffic metadata**
- **DNS query logs**
- **Proxy logs**
- **Load balancer logs**

#### Cloud/Container Artifacts
- **Cloud audit logs** (Azure Activity Log, AWS CloudTrail)
- **Container logs** (Kubernetes, Docker)
- **Cloud access logs** (S3 buckets, Blob storage)
- **Snapshot of cloud configurations**
- **IAM/access management logs**

#### Other Important Artifacts
- **Email communications** (phishing emails, attacker emails)
- **Screenshots** (of suspicious activity, error messages)
- **File metadata** (creation dates, modification times)
- **User activity logs**
- **Physical evidence** (if applicable - USB drives, devices)

### Evidence Collection Best Practices

#### 1. Minimize Impact
- **Don't:** Reboot systems (loses RAM, running processes)
- **Don't:** Log into compromised systems with normal credentials
- **Don't:** Run extensive scans that alter timestamps
- **Do:** Work on copies when possible
- **Do:** Use write-blockers for disk imaging
- **Do:** Document every action you take

#### 2. Prioritize Volatile Data
**Order of Volatility** (capture most volatile first):
1. CPU registers, cache
2. RAM (memory dump)
3. Network connections, running processes
4. Disk
5. Logs
6. Backups, archives

**Why:** RAM is lost on reboot, connections close, logs rotate.

#### 3. Use Trusted Tools
- **Vetted forensic tools** (not tools on potentially compromised system)
- **Known-good binaries** (brought from external media)
- **Hashing tools** (MD5, SHA-256 for integrity verification)
- **Forensic boot media** (USB with forensic utilities)

**Example tools:**
- `dd` for disk imaging (Linux)
- FTK Imager (Windows)
- Volatility (memory analysis)
- Wireshark/tcpdump (network capture)

#### 4. Hash Everything
- Calculate cryptographic hash (SHA-256) of all evidence
- Document the hash in evidence log
- Verify hash before analysis
- Ensures evidence hasn't been tampered with

```bash
# Example: Hash a log file
sha256sum /var/log/auth.log > auth.log.sha256

# Later, verify
sha256sum -c auth.log.sha256
```

#### 5. Secure Storage
- **Encrypted storage** for all evidence
- **Access controls** (only authorized personnel)
- **Audit logging** (who accessed what, when)
- **Offsite/offline backup** (protect against ransomware)
- **Retention policy** (per legal and regulatory requirements)

### Documentation Standards

#### Incident Timeline
**Maintain a detailed timeline:**
```
2024-12-16 14:23:15 CET - User reports unusual email activity
2024-12-16 14:25:00 CET - SOC analyst begins investigation
2024-12-16 14:30:12 CET - Confirmed: 15 compromised accounts
2024-12-16 14:32:00 CET - CISO notified, P2 declared
2024-12-16 14:35:00 CET - Accounts disabled, password reset initiated
2024-12-16 14:45:00 CET - MFA enforced on all accounts
2024-12-16 15:00:00 CET - Forensic image of mailbox server created
...
```

**Include:**
- Exact timestamps (with timezone)
- What happened
- Who did it
- Evidence reference (if applicable)

#### Incident Report
**Comprehensive report covering:**
1. **Executive Summary**
   - What happened (1 paragraph)
   - Impact (customers, data, systems)
   - Current status

2. **Timeline**
   - Detection to resolution
   - All significant events

3. **Technical Details**
   - How the incident occurred
   - Attack vector
   - Systems affected
   - Data involved

4. **Response Actions**
   - Containment steps
   - Eradication measures
   - Recovery process

5. **Impact Assessment**
   - Business impact
   - Data impact (if breach)
   - Financial impact
   - Regulatory implications

6. **Evidence**
   - List of preserved evidence
   - Storage locations
   - Chain of custody

7. **Lessons Learned**
   - What went well
   - What could improve
   - Action items

### Legal Hold Considerations

**What is Legal Hold?**
Preservation of evidence when litigation is anticipated or ongoing.

**When It Applies:**
- Lawsuits filed or threatened
- Regulatory investigation
- Criminal investigation
- Customer contract disputes

**What to Do:**
- Preserve ALL related evidence (don't delete anything)
- Suspend normal retention/deletion policies
- Document the hold
- Notify Legal immediately
- Get written authorization before destroying anything

**Who Decides:** Legal counsel, not technical team

---

## Module 5: Containment and Eradication Strategies

### Containment Principles

**Goal:** Stop the incident from spreading or worsening while preserving evidence.

**Balancing Act:**
- **Short-term containment:** Immediate actions to limit damage
- **Evidence preservation:** Don't destroy forensic value
- **Business continuity:** Minimize service disruption
- **Complete eradication:** Ensure threat is fully removed

### Short-Term Containment (First Hour)

#### Network-Level Containment

**Isolate Affected Systems:**
```
Actions:
- Block at firewall (specific IPs, ports)
- VLAN isolation (move compromised systems)
- Disconnect from network (physical or virtual)
- DNS blackholing (redirect malicious domains)
```

**When to use:**
- Active data exfiltration
- Malware spreading laterally
- DDoS attack source
- Command and control (C2) communications

**Don't:**
- Block all traffic (may be needed for investigation)
- Assume one system is the only victim
- Forget to document what you blocked

#### Account-Level Containment

**Disable Compromised Accounts:**
```
Actions:
- Disable AD/Azure AD account
- Revoke active sessions (force sign-out)
- Reset passwords
- Revoke API tokens
- Disable service accounts (if compromised)
```

**When to use:**
- Credential compromise
- Account takeover
- Insider threat
- Privilege escalation

**Caution:**
- May alert sophisticated attacker
- Service accounts: Check dependencies first
- Document account state before changes

#### Application-Level Containment

**Restrict Access:**
```
Actions:
- Enable maintenance mode
- Restrict to whitelist IPs
- Disable specific features/endpoints
- Rate limiting (DDoS)
- WAF rules (block attack patterns)
```

**When to use:**
- Application vulnerability exploitation
- Web-based attacks
- API abuse
- SQL injection attempts

#### Data-Level Containment

**Protect Sensitive Data:**
```
Actions:
- Revoke sharing links
- Change encryption keys (if key compromise)
- Restrict database access
- Enable additional access logging
- Quarantine affected datasets
```

**When to use:**
- Data breach in progress
- Unauthorized data access
- Misconfigured permissions
- Data exfiltration attempts

### Long-Term Containment (Next 24-48 Hours)

**Segment the Environment:**
- Separate affected from clean systems
- Rebuild segmentation if necessary
- Implement stricter controls
- Enhanced monitoring

**Patch and Harden:**
- Apply security patches
- Remove unnecessary services
- Strengthen configurations
- Update security policies

**Enhance Detection:**
- Deploy additional monitoring
- Lower alert thresholds
- Threat hunting activities
- IOC deployment

### Eradication Strategies

**Goal:** Completely remove the threat and close the attack vector.

#### Malware Eradication

**For Workstations/Servers:**
1. **Isolate** completely (offline)
2. **Image disk** (for forensics)
3. **Identify malware** (hash, family, behavior)
4. **Remove** (antivirus, manual removal, or rebuild)
5. **Verify removal** (scan, process check)
6. **Patch vulnerability** (how it got in)
7. **Restore from clean backup** (if necessary)
8. **Re-image preferred** (most thorough)

**Best Practice:** Re-imaging is more reliable than cleaning.

#### Account Compromise Eradication

1. **Reset ALL passwords** (compromised user)
2. **Revoke all sessions** (everywhere)
3. **Review account history** (what was accessed?)
4. **Check for persistence** (new accounts, scheduled tasks, SSH keys)
5. **Enable MFA** (if not already)
6. **Monitor for re-compromise** (watch for re-entry)

#### Vulnerability Exploitation Eradication

1. **Patch the vulnerability** (apply vendor patch)
2. **Review exploitation logs** (what was accessed?)
3. **Check for backdoors** (did attacker create persistence?)
4. **Update WAF/IPS rules** (block exploit attempts)
5. **Scan for other vulnerable systems** (lateral movement?)

#### Web Shell / Backdoor Eradication

1. **Identify all web shells** (file scans, anomaly detection)
2. **Document locations** (evidence)
3. **Delete web shells**
4. **Check for re-deployment** (automated re-creation?)
5. **Review user uploads** (how did it get there?)
6. **Restrict upload functionality** (validation, execution prevention)
7. **Change application credentials** (may be compromised)

#### Persistence Mechanism Eradication

**Check for:**
- **New user accounts** (especially with admin rights)
- **Scheduled tasks / cron jobs** (malicious scripts)
- **Startup items / services** (autorun malware)
- **SSH authorized_keys** (backdoor access)
- **Firewall rules** (allowing C2 traffic)
- **Registry modifications** (Windows)
- **Browser extensions** (credential theft)

**Remove:**
- Delete unauthorized accounts
- Remove malicious scheduled tasks
- Disable/remove malicious services
- Clean authorized_keys files
- Revert firewall rules
- Clean registry entries
- Remove malicious extensions

### SaaS-Specific Containment

#### Tenant Isolation
```
Actions:
- Isolate affected customer tenant
- Prevent cross-tenant access
- Review tenant separation controls
- Enable enhanced logging
```

#### API Rate Limiting
```
Actions:
- Implement aggressive rate limits
- Block abusive API keys
- Require re-authentication
- Geolocation restrictions
```

#### Database Isolation
```
Actions:
- Read-only mode (prevent further changes)
- Snapshot database state
- Isolate affected tables
- Enable query auditing
```

#### Feature Flags
```
Actions:
- Disable affected features
- Rollback recent deployments
- Enable maintenance mode
- Selective feature access
```

### Validation and Testing

**Before Declaring Eradication Complete:**

1. **Scan all systems** (malware, vulnerabilities)
2. **Review logs** (no suspicious activity)
3. **Threat hunting** (look for related IOCs)
4. **Verify patches applied**
5. **Test security controls** (are they working?)
6. **Check for persistence** (accounts, tasks, backdoors)
7. **Monitor for recurrence** (24-48 hour observation)

**Don't Rush:** Better to take an extra day to ensure complete eradication than to have the attacker return.

---

## Module 6: Recovery Procedures

### Recovery Objectives

**RTO (Recovery Time Objective):** Maximum acceptable downtime
**RPO (Recovery Point Objective):** Maximum acceptable data loss

**Swedwise SaaS Targets:**
- **RTO:** 4 hours (Critical services)
- **RPO:** 15 minutes (Database backups)
- **SLA Commitment:** 99.9% uptime (43 minutes/month)

### Recovery Planning

**Before Starting Recovery:**

1. **Eradication confirmed** (threat fully removed)
2. **Root cause understood** (won't reoccur immediately)
3. **Recovery plan approved** (Incident Commander sign-off)
4. **Rollback plan ready** (if recovery fails)
5. **Stakeholders notified** (expected timeline)
6. **Evidence preserved** (forensics complete or paused safely)

### Recovery Phases

#### Phase 1: Restore from Clean State

**Option A: Restore from Backup**
```
1. Identify last known clean backup
   - Verify backup is before compromise
   - Check backup integrity
   - Confirm backup completeness

2. Prepare restore environment
   - Isolated network (prevent re-infection)
   - Clean system images
   - Patched and hardened

3. Restore data
   - Database: Point-in-time restore
   - Files: From verified clean backup
   - Configuration: From version control

4. Verify restoration
   - Data integrity checks
   - Functionality testing
   - No signs of compromise
```

**Option B: Rebuild from Scratch**
```
1. Deploy fresh infrastructure
   - Clean OS images
   - Latest patches applied
   - Hardened configurations

2. Redeploy application
   - From version control
   - Code review (ensure no backdoors)
   - Clean dependencies

3. Restore data only
   - From verified clean backup
   - Scan for malware before restore
   - Incremental data verification

4. Reconfigure integrations
   - New credentials/API keys
   - Update DNS/routing
   - Test connectivity
```

**When to use each:**
- **Restore from backup:** Quick recovery, high confidence in backup cleanliness
- **Rebuild from scratch:** Persistent compromise, rootkit suspected, audit requirement

#### Phase 2: Harden and Secure

**Before Returning to Production:**

1. **Apply all patches** (OS, applications, dependencies)
2. **Harden configurations** (CIS benchmarks, security baselines)
3. **Rotate credentials** (passwords, API keys, certificates)
4. **Update firewall rules** (block known malicious IPs)
5. **Deploy detection rules** (SIEM, IDS signatures)
6. **Enable enhanced logging** (audit trails)
7. **Implement additional controls** (based on incident lessons)

**Security Checklist:**
```
□ All systems fully patched
□ Unnecessary services disabled
□ Strong passwords set
□ MFA enabled everywhere possible
□ Firewall rules reviewed and updated
□ Network segmentation verified
□ Logging and monitoring active
□ Backups tested and verified
□ Incident-specific controls deployed
□ Vulnerability scan clean
□ Penetration test (if high severity)
```

#### Phase 3: Phased Return to Service

**Don't rush to full production:**

1. **Internal testing** (staff only, controlled environment)
   - Functionality verification
   - Performance testing
   - Security validation
   - No signs of compromise

2. **Limited production** (subset of users/customers)
   - Pilot group
   - Enhanced monitoring
   - Quick rollback capability
   - Feedback collection

3. **Full production** (all users/customers)
   - Gradual ramp-up
   - Continued enhanced monitoring
   - Support team prepared
   - Communication plan executed

**Monitoring During Recovery:**
- Real-time log analysis
- Anomaly detection (behavior baselines)
- User feedback monitoring
- Performance metrics
- Security event monitoring
- Customer sentiment tracking

#### Phase 4: Validation and Acceptance

**Recovery Acceptance Criteria:**

**Technical Validation:**
- All systems operational
- Performance metrics normal
- No security alerts
- Logs show normal activity
- Backups running successfully

**Business Validation:**
- Customer workflows functioning
- SLA metrics being met
- Support ticket volume normal
- No customer escalations
- Financial transactions processing correctly

**Security Validation:**
- No IOCs detected (48-hour clear period)
- Vulnerability scans clean
- Access controls verified
- Audit logging operational
- Incident-specific monitoring rules effective

**Sign-off Required:**
- Technical Lead (systems operational)
- CISO (security controls verified)
- Customer Success (customer acceptance)
- Incident Commander (overall recovery complete)

### Data Recovery Considerations

#### Database Recovery

**Scenario 1: Data Corruption (Integrity Incident)**
```
1. Identify corruption scope
   - Which tables/records affected?
   - Time range of corruption?
   - Source of corruption?

2. Point-in-time recovery
   - Restore to just before corruption
   - Apply transaction logs if available
   - Validate data integrity

3. Merge clean data
   - Identify legitimate changes after corruption
   - Manually merge if necessary
   - Validate business logic

4. Verify consistency
   - Run integrity checks
   - Business process validation
   - User acceptance testing
```

**Scenario 2: Data Deletion (Ransomware, Malicious Deletion)**
```
1. Assess deletion scope
   - What was deleted?
   - When did deletion occur?
   - Are backups available?

2. Restore from backup
   - Most recent clean backup
   - Verify backup integrity
   - Check for completeness

3. Recreate missing data (if gap between backup and deletion)
   - Transaction logs
   - Application logs
   - Customer-provided data
   - Manual re-entry (last resort)

4. Validate restoration
   - Record counts
   - Referential integrity
   - Business process testing
```

**Scenario 3: Data Breach (Exfiltration)**
```
No data recovery needed (data still intact)

Focus on:
1. Scope determination (what data was accessed?)
2. Customer notification
3. Regulatory reporting
4. Access prevention (closing the gap)
5. Monitoring for misuse
```

#### Configuration Recovery

**From Version Control:**
```
1. Identify compromised configurations
2. Review git history for malicious changes
3. Revert to known good state
4. Apply approved changes since then
5. Audit configuration changes
```

**From Backup:**
```
1. Restore configuration files from backup
2. Verify configurations are clean
3. Update with current legitimate changes
4. Test before applying to production
```

### Customer Communication During Recovery

**Status Updates:**
- **Every 1-2 hours** (P1 incidents)
- What we're doing
- Progress made
- Next steps
- Estimated completion time

**Template:**
```
Subject: Update #3 - Service Recovery in Progress

Dear Valued Customer,

Update as of [timestamp]:

CURRENT STATUS: We are actively restoring service to the Communications
platform. Recovery is progressing as planned.

PROGRESS:
- Database restored from backup (100% complete)
- Services redeployed to hardened infrastructure (100% complete)
- Internal testing successful (100% complete)
- Limited production pilot launched (50 pilot customers) - IN PROGRESS

NEXT STEPS:
- Expand to all customers over next 2 hours
- Enhanced monitoring during ramp-up
- Full resolution expected by [time]

IMPACT: Limited availability continues for most customers. Pilot group
now has full service access.

Next update: [time] or sooner if significant change

We appreciate your patience.

Swedwise Incident Response Team
```

**Post-Recovery Communication:**
```
Subject: Service Restored - Post-Incident Report

Dear Valued Customer,

We are pleased to confirm that the Swedwise Communications platform
has been fully restored to normal operations as of [timestamp].

INCIDENT SUMMARY:
- Duration: [X hours]
- Cause: [high-level root cause]
- Impact: [describe impact]
- Resolution: [what we did]

PREVENTIVE MEASURES:
- [Action 1]
- [Action 2]
- [Action 3]

DETAILED REPORT:
A comprehensive post-incident report will be available within 5 business
days at [URL] or via email request.

We sincerely apologize for the disruption and thank you for your patience.

If you have any questions or concerns, please contact your Customer
Success Manager or support@swedwise.se.

Regards,
Swedwise Leadership Team
```

---

## Module 7: Post-Incident Review and Lessons Learned

### The Post-Incident Review (PIR)

**Purpose:** Learn from the incident to prevent recurrence and improve response.

**NOT a blame session:** Focus on process and system improvements, not individual mistakes.

**When:** Within 5-7 business days after incident closure

**Who Attends:**
- Incident response team members
- CISO
- Affected system owners
- Customer Success (if customer-impacting)
- Management (for significant incidents)
- Optional: External experts, auditors

**Duration:** 1-2 hours (P1/P2), 30-60 minutes (P3)

### PIR Agenda

**1. Incident Overview (10 min)**
- What happened (factual summary)
- Timeline (key events)
- Impact (systems, customers, business)

**2. Response Effectiveness (20-30 min)**
- What went well?
- What didn't go well?
- What surprised us?
- What would we do differently?

**3. Root Cause Analysis (20-30 min)**
- How did this happen?
- Why wasn't it prevented?
- Why wasn't it detected sooner?
- What controls failed or were missing?

**4. Action Items (20-30 min)**
- Preventive measures
- Detection improvements
- Response improvements
- Documentation updates
- Training needs
- Tool/process gaps

**5. Regulatory/Compliance (10 min)**
- Notification requirements met?
- Documentation complete?
- Audit findings or concerns?

### Root Cause Analysis (RCA)

**Use the "5 Whys" Method:**

**Example:**
```
Incident: Ransomware encrypted production database

1. Why did ransomware encrypt the database?
   → Database server was infected with ransomware

2. Why was the server infected?
   → An admin downloaded and executed a malicious file

3. Why did they download the malicious file?
   → It came in a phishing email that appeared legitimate

4. Why did the phishing email reach them?
   → Email security didn't block it (new phishing technique)

5. Why didn't they recognize it as phishing?
   → Insufficient security awareness training on this technique

ROOT CAUSES:
- Email security gap (technical)
- Insufficient security awareness training (people)
- Admin had unnecessary internet access (process)
- No application whitelisting on critical servers (technical)
```

**Also Consider:**
- **Contributing factors** (made it worse)
- **Detection gaps** (why we didn't see it sooner)
- **Response gaps** (what slowed us down)

### Generating Action Items

**Action Item Template:**
```
ACTION ITEM #1
--------------
Issue: Email security didn't block sophisticated phishing
Action: Implement advanced threat protection (ATP) for email
Owner: IT Security Manager
Priority: High
Due Date: 2025-01-15
Success Criteria: 90% reduction in phishing emails reaching users
Resources Needed: Budget approval for ATP license, 2 weeks implementation

Status: In Progress
```

**Categories of Actions:**

**Prevent:**
- Patch vulnerabilities
- Harden configurations
- Implement missing controls
- Improve change management
- Enhance access controls

**Detect:**
- Deploy new detection rules
- Improve log collection
- Enhance monitoring
- Threat hunting procedures
- Anomaly detection tuning

**Respond:**
- Update runbooks
- Improve escalation procedures
- Tool acquisition
- Training
- Communication templates

**Recover:**
- Backup improvements
- Disaster recovery testing
- Documentation updates
- Automation of recovery steps

### Tracking Action Items

**Don't let action items die:**
- Assign clear owners
- Set realistic deadlines
- Track in project management system
- Report status in security meetings
- Verify completion (not just "done" but "effective")

**Follow-up:**
- 30 days: Review progress
- 60 days: Most items should be complete
- 90 days: All items complete or re-scoped

### Updating Documentation

**After Every Incident, Update:**

1. **Incident Response Plan** (if gaps found)
2. **Runbooks** (new procedures, lessons learned)
3. **Contact Lists** (if contacts changed)
4. **Communication Templates** (improve wording based on experience)
5. **Detection Rules** (SIEM, IDS)
6. **Training Materials** (incorporate new threats/techniques)
7. **Risk Register** (update risk assessments)

### Knowledge Sharing

**Share Lessons Learned:**
- **Internal:** Security team, all technical staff
- **Executive:** High-level summary, business impact, prevention measures
- **Customers:** Post-incident report (appropriate detail level)
- **Industry:** Anonymized sharing (if beneficial to community)

**Formats:**
- Written PIR report
- Team presentation / lunch-and-learn
- Updated training materials
- Blog post (external, sanitized)
- Conference talk (sanitized)

### Measuring Improvement

**Metrics to Track Over Time:**
- **Mean Time to Detect (MTTD):** How fast do we find incidents?
- **Mean Time to Respond (MTTR):** How fast do we start responding?
- **Mean Time to Contain (MTTC):** How fast do we stop the spread?
- **Mean Time to Recover (MTTR):** How fast do we restore service?
- **Incident recurrence:** Do the same types of incidents keep happening?
- **Action item completion rate:** Are we actually fixing problems?

**Goal:** Continuous improvement in these metrics over quarters/years.

---

## Module 8: Customer Notification Requirements (SaaS Context)

### When to Notify Customers

**Always Notify:**
- Service outage (SLA-impacting)
- Data breach involving their data
- Security incident affecting their tenant
- Compliance incident requiring their disclosure
- Feature/functionality impacted

**Consider Notifying:**
- Significant incident resolved before customer impact
- Attempted breach that was blocked (builds trust)
- Changes to security posture affecting them

**Don't Notify:**
- Internal-only incidents with no customer impact
- Low-severity security events (noise)
- Speculative or unconfirmed incidents

### Notification Timing

**Immediate (within 1 hour):**
- P1 incidents (critical outage, active breach)
- SLA-violating incidents
- Data breach with high risk

**Within 24 hours:**
- P2 incidents with customer impact
- Data breach (after initial assessment)
- Resolved incidents with minimal impact

**Within 72 hours:**
- GDPR-required notifications (regulatory deadline)
- Post-incident reports (within 5 business days preferred)

### What to Include in Customer Notifications

**Initial Notification:**
- We're aware of an issue
- What services/data are affected
- What we're doing
- Next update timing
- Where to get status (status page)
- Emergency contact (if critical)

**What NOT to Include:**
- Detailed technical root cause (premature)
- Blame or finger-pointing
- Speculation
- Sensitive security details that could aid attackers
- Conflicting information

**Update Notifications:**
- Current status
- Progress made
- Actions taken
- Remaining work
- Revised timeline (if changed)
- Next update timing

**Resolution Notification:**
- Issue resolved
- Final timeline
- High-level root cause
- Impact summary
- Preventive measures taken
- Apology (if appropriate)
- How to get more details (PIR report)

**Post-Incident Report (PIR):**
- Detailed timeline
- Root cause analysis
- Full impact assessment
- Response actions taken
- Lessons learned
- Preventive measures implemented
- Commitments for improvement

### GDPR Breach Notification to Customers

**When Required:** Data breach likely to result in HIGH risk to individuals' rights and freedoms

**Timeline:** Without undue delay (as soon as high risk is confirmed)

**Must Include (Article 34):**
1. Description of the breach (what happened)
2. Name and contact of DPO
3. Likely consequences of the breach
4. Measures taken or proposed to address the breach
5. Recommendations to mitigate potential adverse effects

**Example:**
```
Subject: Important Security Notice - Data Breach Notification

Dear [Customer Name],

We are writing to inform you of a security incident affecting your
personal data processed by Swedwise AB.

WHAT HAPPENED:
On [date], we discovered that [description of breach]. This incident
affected [describe data types and number of individuals].

WHAT DATA WAS INVOLVED:
The following personal data was [accessed/disclosed]:
- [Data category 1]
- [Data category 2]
(Note: [Data category X] was NOT affected)

LIKELY CONSEQUENCES:
Based on our assessment, this breach may result in [describe risks:
identity theft risk, financial loss potential, etc.].

WHAT WE'RE DOING:
We have taken immediate action to address this incident:
- [Action 1]
- [Action 2]
- [Action 3]

We have notified the Swedish supervisory authority (Integritetsskyddsmyndigheten)
as required by law.

WHAT YOU SHOULD DO:
We recommend you take the following precautions:
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

CONTACT:
If you have questions or concerns, please contact our Data Protection Officer:
Email: dpo@swedwise.se
Phone: [DPO phone]

We sincerely apologize for this incident and any concern it may cause.

Swedwise AB
[Date]
```

### Contractual Notification Obligations

**Review Customer Contracts for:**
- Specific notification timelines (may be stricter than GDPR)
- Required notification methods (email, phone, portal)
- Required information to include
- Escalation contacts
- SLA credits or penalties triggered

**Example Contract Clauses:**
- "Notify within 4 hours of security incident affecting Customer data"
- "Provide root cause analysis within 48 hours"
- "Immediate phone call to Customer CISO for Critical incidents"

**Track in CRM:** Customer-specific notification requirements

### Communication Channels

**Status Page (Primary):**
- Real-time incident status
- Historical incident log
- Subscribe for updates
- RSS/Atom feed
- API integration

**Email (Notifications):**
- Automated from status page
- Targeted to affected customers only
- Subscription-based

**In-App Notification:**
- Banner in SaaS platform
- Dismissable
- Link to status page

**Support Portal:**
- Incident ticket updates
- Self-service status check

**Phone (Critical Incidents Only):**
- Direct call to customer primary contact
- For P1 incidents with data breach

**Social Media (Limited Use):**
- High-level status only
- Link to status page for details
- Minimal information (avoid specifics)

### Tone and Messaging

**Be Transparent:**
- Acknowledge the issue honestly
- Don't minimize or sugarcoat
- Admit when you don't have answers yet

**Be Empathetic:**
- Acknowledge impact on customer
- Apologize appropriately
- Show understanding of their concerns

**Be Professional:**
- Stick to facts
- Avoid jargon
- Clear, concise language
- Proofread carefully

**Build Trust:**
- Regular updates (even if no change)
- Keep commitments (if you say next update in 2 hours, do it)
- Follow through on action items
- Be available for questions

**Example - Good Tone:**
```
We understand this disruption impacts your critical business communications,
and we sincerely apologize. Our team is working around the clock to restore
full service. We will keep you updated every 2 hours until resolution.
```

**Example - Poor Tone:**
```
We experienced a minor technical glitch that should be fixed soon.
Everything is under control.
```
(Minimizes impact, vague timeline, doesn't acknowledge customer concern)

---

## Module 9: Regulatory Notification Requirements

### GDPR Personal Data Breach Notification

#### To Supervisory Authority (Article 33)

**When Required:** Breach likely to result in a risk to rights and freedoms of individuals

**Timeline:** Within 72 hours of becoming aware of the breach

**Where:** To the lead supervisory authority
- For Swedwise: Integritetsskyddsmyndigheten (IMY) - Swedish Authority for Privacy Protection
- Portal: [https://www.imy.se/]

**What to Include:**
1. Nature of the breach
   - Categories of data concerned
   - Approximate number of data subjects affected
   - Approximate number of personal data records concerned

2. Name and contact details of DPO (or other contact point)

3. Likely consequences of the breach

4. Measures taken or proposed to address the breach
   - Including measures to mitigate adverse effects

**If Information Not Available Immediately:**
- Notify within 72 hours with available information
- Provide remaining information without undue delay (phased notification)

**When NOT Required:**
- Breach unlikely to result in risk to individuals
  - Example: Encrypted data lost, encryption key not compromised
  - Example: Data already public
- Must document decision and rationale (accountability)

**Process at Swedwise:**
1. CISO and DPO assess breach (within 24 hours of detection)
2. Determine if notification required
3. DPO prepares notification (coordinate with Legal if needed)
4. Submit to IMY within 72 hours
5. Document notification in breach register

#### To Data Subjects (Article 34)

**When Required:** Breach likely to result in HIGH risk to individuals

**What is "High Risk"?**
- Special category data (health, biometric, etc.)
- Financial loss likely
- Identity theft risk
- Significant social disadvantage
- Large-scale breach
- Vulnerable individuals affected

**Timeline:** Without undue delay

**Exemptions (don't need to notify individuals if):**
- Appropriate technical and organizational measures applied (e.g., encryption)
- Subsequent measures taken to ensure high risk no longer likely
- Would involve disproportionate effort (can use public communication instead)

**What to Include:** (Same as customer notification section above)

**Method:**
- Direct communication (email, letter, phone)
- If disproportionate effort: Public communication (press release, website, advertisement)

### NIS2 Directive (Network and Information Security)

**Applicable to:** Essential and important entities providing essential services

**Swedwise Status:** Potentially covered as digital service provider (SaaS communications)

**When Required:** Significant incident with:
- Severe operational disruption of services
- Financial loss
- Significant material or non-material damage to natural/legal persons

**Thresholds for Reporting:**
- Service unavailability affecting significant number of users
- Data breach with significant impact
- Major security compromise affecting service integrity

**Timeline:**
1. **Early Warning:** Within 24 hours of becoming aware
   - Basic information: incident detection, preliminary assessment

2. **Incident Notification:** Within 72 hours
   - Updated information: severity, impact, indicators of compromise

3. **Intermediate Report:** Upon request (updates during incident)

4. **Final Report:** Within 1 month of notification
   - Detailed description
   - Type and root cause
   - Impact and severity
   - Remediation measures

**Where:** To national CSIRT (Computer Security Incident Response Team)
- Sweden: CERT-SE (part of MSB - Swedish Civil Contingencies Agency)
- Portal: [https://www.cert.se/]

**Process at Swedwise:**
1. CISO assesses if incident meets NIS2 threshold
2. If yes, prepare early warning within 24 hours
3. Legal reviews (coordinate with external counsel if needed)
4. Submit notifications per timeline
5. Document in compliance register

### Sector-Specific Regulations

**If Applicable to Customers We Serve:**

**Financial Sector (Customer in banking/finance):**
- May require notification to Finansinspektionen (Swedish FSA)
- Customer's obligation, but we must notify customer immediately

**Healthcare Sector (Customer in healthcare):**
- May require notification to IVO (Inspektionen för vård och omsorg)
- Customer's obligation, we support their notification

**Public Sector (Customer is government agency):**
- May have specific incident reporting requirements
- Follow customer's directive

**Our Responsibility:**
- Notify customer immediately (within contractual timeline)
- Provide information needed for their regulatory reporting
- Coordinate and support their compliance efforts

### ISO 27001 Incident Reporting

**Not a legal requirement, but certification requirement:**

**Internal Reporting:**
- All security incidents logged in incident register
- Reviewed in management review meetings
- Non-conformances raised if policy violations
- Corrective actions tracked

**External Reporting:**
- Inform certification body of significant incidents if requested
- During surveillance audits, provide incident statistics
- Demonstrate effectiveness of incident management

**Documentation:**
- Incident register (all incidents)
- Incident reports (significant incidents)
- PIR reports (lessons learned)
- Action item tracking
- Management review records

### Notification Decision Tree

```
INCIDENT DETECTED
       ↓
Does it involve personal data?
   ├─ NO → Check NIS2 applicability
   └─ YES → Assess risk level
              ├─ Unlikely to risk individuals → Document only
              ├─ Likely to risk individuals → Notify IMY (72 hrs)
              └─ High risk to individuals → Notify IMY + Data Subjects

Does it meet NIS2 threshold?
   ├─ NO → Document only
   └─ YES → Early warning (24 hrs) → Full report (72 hrs) → Final (1 month)

Does customer contract require notification?
   ├─ NO → Internal documentation
   └─ YES → Follow contract terms (often stricter than legal)

Are customers impacted?
   ├─ NO → Internal communication only
   └─ YES → Customer notification per SaaS section

Does it affect ISO certification?
   └─ Log in register, management review, corrective actions if needed
```

### Documentation Requirements

**For All Incidents (Accountability):**
- Date/time of detection
- Nature of breach/incident
- Effects
- Remedial action taken

**For Reported Incidents:**
- Copy of notification sent
- To whom (authority, contact person)
- When sent (timestamp)
- Response received (if any)
- Follow-up actions

**For Non-Reported Incidents:**
- Assessment and rationale for not reporting
- Who made the decision
- Date of assessment
- Supporting evidence

**Retention:** Minimum 3 years, longer if litigation risk

---

## Module 10: Role-Specific Responsibilities

### Security Operations Center (SOC) Analyst

**Primary Responsibilities:**
- Monitor security alerts and logs
- Triage incidents (initial severity classification)
- Perform initial investigation
- Escalate appropriately

**During an Incident:**
1. **Detection Phase:**
   - Acknowledge alert
   - Validate it's not a false positive
   - Gather initial evidence
   - Classify severity
   - Escalate per matrix

2. **Investigation Phase:**
   - Collect logs and artifacts
   - Identify scope (affected systems, data)
   - Timeline reconstruction
   - IOC identification
   - Document findings

3. **Support Phase:**
   - Provide technical data to incident team
   - Monitor for spread or recurrence
   - Execute containment actions (as directed)
   - Update incident documentation

**Key Skills:**
- Log analysis
- SIEM proficiency
- Threat intelligence interpretation
- Communication (technical → non-technical)

**Escalation Criteria:**
- Any P1/P2 incident: Immediately escalate
- Uncertain severity: Escalate up
- Beyond your expertise: Request assistance
- After-hours: Use on-call escalation

### Site Reliability Engineer (SRE) / DevOps

**Primary Responsibilities:**
- Maintain system availability and performance
- Deploy and manage infrastructure
- Respond to service disruptions
- Implement recovery procedures

**During an Incident:**
1. **Initial Response:**
   - Assess system health and availability
   - Identify affected services
   - Estimate impact (users, customers)
   - Coordinate with Security team

2. **Containment:**
   - Execute isolation procedures (as directed)
   - Implement network-level controls
   - Deploy emergency patches or rollbacks
   - Prepare recovery environment

3. **Recovery:**
   - Execute recovery plan
   - Restore from backups
   - Rebuild compromised systems
   - Validate system integrity
   - Gradual return to service

**Key Skills:**
- Infrastructure automation
- Backup/restore procedures
- Performance monitoring
- Incident coordination

**Security Interface:**
- **Don't:** Make security decisions alone
- **Do:** Collaborate with Security on containment/recovery
- **Do:** Provide system expertise to incident team
- **Do:** Execute approved recovery procedures

### Database Administrator (DBA)

**Primary Responsibilities:**
- Database security and integrity
- Backup and recovery
- Access control management
- Performance optimization

**During an Incident:**
1. **Assessment:**
   - Check database integrity
   - Review access logs
   - Identify unauthorized queries
   - Assess data exposure

2. **Containment:**
   - Restrict database access (if directed)
   - Enable enhanced logging
   - Snapshot database state
   - Isolate affected databases

3. **Recovery:**
   - Point-in-time recovery
   - Data integrity validation
   - Transaction log analysis
   - Restore from backup if necessary

**Special Considerations:**
- **Data breach:** DBA expertise critical for scope assessment
- **Ransomware:** Database encryption risk - prioritize backups
- **SQL injection:** Review query logs, identify exploitation

**Evidence Preservation:**
- Don't truncate logs during incident
- Preserve transaction logs
- Snapshot before making changes
- Document all database actions

### Application Developer

**Primary Responsibilities:**
- Secure code development
- Vulnerability remediation
- Application-level incident analysis
- Emergency patches

**During an Incident:**
1. **Analysis:**
   - Review application logs
   - Analyze exploit attempts
   - Identify vulnerable code
   - Assess attack vector

2. **Support:**
   - Explain application behavior
   - Identify data exposure risk
   - Propose code fixes
   - Develop workarounds

3. **Remediation:**
   - Develop and test patches
   - Code review for backdoors
   - Deploy fixes (via approved process)
   - Validate fix effectiveness

**Key Incident Types:**
- Application vulnerability exploitation
- API abuse
- Authentication bypass
- Code injection attacks

**Best Practices:**
- Don't deploy unreviewed code during incident
- Use version control for all changes
- Test in non-production first (if time permits)
- Document code changes thoroughly

### Support Team / Customer Success

**Primary Responsibilities:**
- Customer communication
- Support ticket management
- Escalation to technical teams
- Customer sentiment monitoring

**During an Incident:**
1. **Communication:**
   - Use approved messaging (from Communications Lead)
   - Update customers via appropriate channels
   - Log customer concerns and questions
   - Escalate urgent customer issues

2. **Coordination:**
   - Manage support ticket volume
   - Identify patterns in customer reports
   - Feed customer impact data to incident team
   - Track customer-specific issues

3. **Post-Incident:**
   - Follow up with affected customers
   - Coordinate PIR sharing
   - Gather customer feedback
   - Monitor for recurring issues

**Do's:**
- Stick to approved messages
- Empathize with customer frustration
- Escalate technical questions
- Document customer interactions

**Don'ts:**
- Speculate about root cause
- Make promises (timelines, SLA credits) without authorization
- Provide technical details beyond approved messaging
- Contradict incident team communications

### Network Administrator

**Primary Responsibilities:**
- Network security and segmentation
- Firewall and IPS management
- Traffic analysis
- Network-level containment

**During an Incident:**
1. **Detection:**
   - Review firewall logs
   - Analyze traffic patterns
   - Identify suspicious connections
   - Check IPS alerts

2. **Containment:**
   - Block malicious IPs/domains
   - Implement network isolation
   - Deploy emergency firewall rules
   - Traffic redirection (if needed)

3. **Evidence Collection:**
   - Packet captures (PCAPs)
   - NetFlow data
   - Firewall logs
   - IPS event data

**Key Actions:**
- Rapid deployment of blocks
- Network segmentation enforcement
- Traffic monitoring and analysis
- Coordination with ISP/upstream (DDoS)

### CISO / Incident Commander

**Primary Responsibilities:**
- Overall incident command
- Escalation decisions
- Regulatory compliance
- External communications approval

**During an Incident:**
1. **Command:**
   - Activate incident response team
   - Assign roles and responsibilities
   - Make strategic decisions
   - Approve major actions (shutdown, notifications, etc.)

2. **Communication:**
   - Brief executive leadership
   - Approve customer notifications
   - Coordinate regulatory reporting
   - Interface with Legal

3. **Oversight:**
   - Ensure procedures are followed
   - Allocate resources
   - Remove blockers
   - Decide when to declare incident closed

**Key Decisions:**
- Severity classification (final authority)
- Regulatory notification (go/no-go)
- Customer notification content and timing
- Recovery plan approval
- Public statement approval

### Management / Business Owner

**Primary Responsibilities:**
- Business impact assessment
- Resource allocation
- Business continuity
- Stakeholder communication

**During an Incident:**
1. **Support:**
   - Provide resources (staff, budget)
   - Business impact context
   - Customer relationship management
   - Remove organizational barriers

2. **Decision-Making:**
   - Business continuity tradeoffs
   - SLA credit decisions
   - Customer compensation (if applicable)
   - Long-term investment decisions

3. **Communication:**
   - Internal staff communication
   - Board/investor updates (if needed)
   - Customer executive relationships

**Interface with Incident Team:**
- Receive regular briefings
- Provide business context
- Approve major business decisions
- Empower incident team to act

---

## Module 11: Quick Reference Guide

### Incident Response Cheat Sheet

**I Just Detected an Incident - What Do I Do?**

```
1. DON'T PANIC
   ↓
2. ASSESS (30 seconds)
   - What am I seeing?
   - Is it still happening?
   - Severity estimate?
   ↓
3. CONTAIN (if safe - 1 minute)
   - Block IP / Disable account / Isolate system
   - Only if you're confident!
   ↓
4. DOCUMENT (1 minute)
   - Screenshot
   - Note time, systems, what you see
   ↓
5. NOTIFY (immediately)
   - P1: Call CISO [phone TBD]
   - P2: Email security-incidents@swedwise.se + Teams
   - P3/P4: Email security-incidents@swedwise.se
   ↓
6. PRESERVE EVIDENCE
   - Don't delete anything
   - Don't shut down systems
   - Follow instructions from incident team
```

### Severity Quick Reference

| Severity | Examples | Response Time | Who to Notify |
|----------|----------|---------------|---------------|
| **P1 Critical** | Active data breach, complete SaaS outage, ransomware | 15 min | CISO (call), CEO, customers |
| **P2 High** | Partial breach, limited outage, malware contained | 1 hour | CISO, security team |
| **P3 Medium** | Suspicious activity, minor incidents, failed attacks | 4 hours | Security team |
| **P4 Low** | Alerts, possible false positives, informational | 1 day | Security team |

### Contact Information

**Security Incident Hotline:** [TBD]
**CISO Phone:** [TBD]
**Email:** security-incidents@swedwise.se
**Teams:** #security-incidents (P3/P4), #security-critical (P1/P2)

**After Hours:**
- On-call CISO: [TBD]
- On-call SRE: [TBD]
- Escalation phone tree: [TBD]

### Regulatory Notification Deadlines

| Regulation | Deadline | Where | Who |
|------------|----------|-------|-----|
| GDPR (to IMY) | 72 hours | imy.se | DPO |
| GDPR (to data subjects) | Without undue delay | Direct | DPO |
| NIS2 Early Warning | 24 hours | cert.se | CISO |
| NIS2 Incident Notification | 72 hours | cert.se | CISO |
| NIS2 Final Report | 1 month | cert.se | CISO |

### Common IOCs (Indicators of Compromise)

**Check for:**
- Unusual outbound traffic (large transfers, odd destinations)
- Failed login spikes (brute force)
- New user accounts (especially with admin)
- Scheduled tasks added (persistence)
- Processes with unusual names or locations
- Registry/config changes (Windows/Linux)
- Communications with known bad IPs
- DNS queries to suspicious domains
- Disabled security tools (antivirus, logging)
- Files in unusual locations (/tmp, AppData)

### Evidence Collection Priority

**Collect in this order (most volatile first):**
1. RAM (memory dump) - **before rebooting!**
2. Network connections and running processes
3. Logs (system, application, security)
4. Disk image
5. Backups and archives

### Common Mistakes to Avoid

**DON'T:**
- ❌ Shut down systems (destroys RAM, may trigger ransomware)
- ❌ Delete files or logs
- ❌ Wait to report (every minute counts)
- ❌ Attempt to "fix" without coordination
- ❌ Alert the attacker (if sophisticated threat)
- ❌ Forget to document your actions
- ❌ Make promises to customers without authorization

**DO:**
- ✅ Document everything
- ✅ Preserve evidence
- ✅ Escalate appropriately
- ✅ Follow the plan
- ✅ Ask for help if unsure
- ✅ Communicate regularly
- ✅ Think before acting

---

## Module 12: Assessment

**Instructions:** Answer the following 10 questions. You need 80% (8/10 correct) to pass. You have 3 attempts. These are scenario-based questions testing your practical incident response knowledge.

---

### Question 1 (Scenario)

You're monitoring the SIEM and notice an alert: "50 failed login attempts to production database from external IP in the last 5 minutes." What should you do FIRST?

A) Block the IP at the firewall
B) Shut down the database server
C) Verify this is not a false positive and assess if any logins succeeded
D) Email the security team and wait for instructions

**Correct Answer:** C

**Explanation:** Before taking containment action, verify the alert is legitimate and assess the full scope. Check if any attempts succeeded (actual compromise vs. failed attempt). Then you can take appropriate containment action (likely A - blocking the IP). Don't shut down production without understanding the situation, but also don't just wait without investigating.

---

### Question 2

What is the GDPR deadline for notifying the supervisory authority (IMY) of a personal data breach?

A) 24 hours
B) 48 hours
C) 72 hours
D) 1 week

**Correct Answer:** C

**Explanation:** Article 33 of GDPR requires notification to the supervisory authority within 72 hours of becoming aware of a breach (if it's likely to risk individuals' rights and freedoms). This is different from NIS2's 24-hour early warning.

---

### Question 3 (Scenario)

You discover that ransomware has encrypted a file server. The system is still running and encrypting more files. What should you do FIRST?

A) Immediately reboot the server to stop the encryption
B) Disconnect the server from the network to stop the spread
C) Take a memory dump for forensics
D) Attempt to kill the ransomware process

**Correct Answer:** B

**Explanation:** Isolate immediately to stop lateral spread to other systems and stop further encryption. Don't reboot (destroys RAM/evidence and may complete encryption). Memory dump is valuable but secondary to stopping the spread. Killing the process might work but isolation is more reliable.

---

### Question 4

Which severity level would you assign to this incident: "Phishing email successfully compromised 3 employee accounts, but no data exfiltration detected yet"?

A) P1 - Critical
B) P2 - High
C) P3 - Medium
D) P4 - Low

**Correct Answer:** B

**Explanation:** Compromised accounts are confirmed (not just suspicious), affecting internal systems, with potential for data access. This is High (P2) severity. Not Critical because limited scope and no confirmed data breach. Requires urgent response (1 hour) but not immediate all-hands mobilization.

---

### Question 5 (Scenario)

During incident response, you're about to take a disk image of a potentially compromised server for forensics. What should you do FIRST?

A) Take the disk image immediately
B) Calculate and record a cryptographic hash of the disk
C) Take a memory dump (RAM)
D) Shut down the server to prevent tampering

**Correct Answer:** C

**Explanation:** Follow the order of volatility. RAM is more volatile than disk - it's lost on shutdown or over time. Capture RAM first, then disk. You'll hash the disk image after creating it (not before - you need the image file to hash). Don't shut down until after RAM capture.

---

### Question 6

Who has the authority to approve communications to customers about a P1 security incident?

A) The person who discovered the incident
B) The SOC analyst investigating it
C) The Incident Commander (CISO) and Communications Lead
D) Any member of the security team

**Correct Answer:** C

**Explanation:** Customer communications during incidents must be coordinated and approved by Incident Commander (CISO) and Communications Lead to ensure accuracy, consistency, and appropriate messaging. Never communicate to customers without this approval.

---

### Question 7 (Scenario)

You accidentally email a spreadsheet containing 200 customer email addresses to the wrong recipient (external). What should you do?

A) Email the recipient asking them to delete it and hope they do
B) Immediately report this as a data breach to CISO and DPO
C) Don't report it since it's just email addresses (not very sensitive)
D) Ask your manager first

**Correct Answer:** B

**Explanation:** This is a data breach (unauthorized disclosure of personal data). Email addresses are personal data under GDPR. Report immediately to CISO and DPO so they can assess GDPR notification requirements (72-hour clock has started). Also ask recipient to delete (but still report). Don't minimize or delay.

---

### Question 8

During incident recovery, you've restored systems from backup. Before returning to full production, what is the MINIMUM you should do?

A) Just bring it back online - the backup is clean
B) Verify the backup is clean, apply patches, and monitor for 24-48 hours
C) Wait exactly 1 week to be safe
D) Rebuild everything from scratch (never use backups)

**Correct Answer:** B

**Explanation:** Even with backups, you must: verify the backup predates the compromise, apply patches/hardening (fix the vulnerability that was exploited), and monitor for recurrence before declaring victory. Don't rush back to production without validation. Rebuilding from scratch is sometimes warranted but not always necessary.

---

### Question 9 (Scenario)

You're the on-call SRE. At 2 AM, you receive an alert: "Production database 90% full, unusual data write pattern detected." You check and see large amounts of data being written to a new table you don't recognize. What severity is this?

A) P4 - Low (just a disk space issue)
B) P3 - Medium (operational issue)
C) P2 - High (suspicious activity requiring investigation)
D) P1 - Critical (active attack)

**Correct Answer:** C

**Explanation:** "Unusual pattern" + "unrecognized table" + "large data writes" are indicators of compromise (possible data exfiltration, staging, or malware). This requires urgent investigation (P2) but isn't immediately confirmed as active breach (P1). Escalate to security team immediately. Don't dismiss as just operational issue.

---

### Question 10 (Scenario)

A customer emails you directly asking, "I heard you had a security breach last week. Was my data affected?" You're not the Incident Commander and don't have full details. What do you do?

A) Tell them you can't discuss security matters
B) Say "We had a minor issue but your data is fine" to reassure them
C) Forward the inquiry to the Incident Commander and Customer Success, and acknowledge receipt to the customer
D) Ignore the email

**Correct Answer:** C

**Explanation:** Never provide security incident information to customers without authorization, but don't ignore them either. Acknowledge their inquiry professionally, and immediately forward to those responsible for customer communications (Incident Commander, Customer Success). They will provide accurate, approved responses. Don't speculate, minimize, or go silent.

---

## Assessment Answers

1. C - Verify and assess
2. C - 72 hours
3. B - Disconnect from network
4. B - P2 High
5. C - Take memory dump first
6. C - Incident Commander and Communications Lead
7. B - Report immediately as data breach
8. B - Verify, patch, monitor
9. C - P2 High (suspicious requires investigation)
10. C - Forward to authorized personnel

**Passing Score:** 8/10 (80%)

---

## Course Completion

**Congratulations on completing the Incident Response Training!**

### Key Takeaways

1. **Speed Matters:** The faster you detect, report, and respond, the less damage occurs
2. **Severity Classification:** Understand P1/P2/P3/P4 and escalate appropriately
3. **Preserve Evidence:** Don't destroy forensic value in your rush to fix
4. **Communication is Critical:** Internal and external stakeholders need timely, accurate updates
5. **GDPR Deadlines:** 72 hours to notify IMY, immediate customer notification if high risk
6. **SaaS Responsibility:** Customer data protection is paramount; notify per contracts
7. **Learn from Incidents:** Post-incident review prevents recurrence
8. **Follow the Plan:** Stick to procedures even under pressure
9. **Ask for Help:** Escalate when unsure; don't hero solo
10. **Document Everything:** If it's not documented, it didn't happen

### Your Responsibilities

**As a technical team member, you are expected to:**
- Recognize indicators of compromise
- Report incidents immediately per escalation matrix
- Preserve evidence during response
- Follow incident commander instructions
- Document your actions thoroughly
- Participate in post-incident reviews
- Apply lessons learned to prevent recurrence

### Next Steps

1. **Review your score** - You need 80% (8/10) to pass
2. **Retake if needed** - Up to 3 attempts allowed
3. **Bookmark quick reference** - Module 11 is your cheat sheet
4. **Review related documents:**
   - SW-ISMS-PRO-001: Incident Management Procedure
   - SW-ISMS-POL-001: Information Security Policy
   - SW-IMS-TRN-004: GDPR Training

### Resources

**Incident Response:**
- Incident reporting: security-incidents@swedwise.se
- Emergency hotline: [TBD]
- CISO: [TBD contact]
- Status page: [TBD URL]

**Training:**
- Information Security Awareness: SW-ISMS-TRN-001
- GDPR Data Protection: SW-IMS-TRN-004

**Documentation:**
- Incident Response Plan: SW-ISMS-PRO-001
- Runbooks: [Internal wiki/SharePoint]

### Questions?

Contact:
- **CISO:** [Email/Phone TBD]
- **Security Team:** security@swedwise.se
- **Training Coordinator:** [TBD]

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | CISO / Training Team | Initial release | CEO, CISO |

**Next Review Date:** [12 months from effective date]

**Document Classification:** Internal

**Document Owner:** CISO

---

**This training is mandatory for all technical staff (IT, SRE, developers, security team, support) and must be completed annually. Completion is tracked and reported to management.**

---

*Remember: In an incident, every second counts. Know your role, follow the plan, communicate effectively, and don't panic. You've been trained for this.*
