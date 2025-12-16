---
document_id: SW-ISMS-TRN-004
title: Incident Response Team Training
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-PRO-001
  - SW-ISMS-POL-001
training:
  course_id: incident-response-team
  duration: 120
  target_audience: [ir_team, it_operations, ciso]
  required_for: [ir_team_member, it_operations]
  assessment:
    enabled: true
    passing_score: 85
    attempts_allowed: 2
  validity_period: 12
---

# Incident Response Team Training

**Duration**: 2 hours
**Target Audience**: Incident Response Team Members, IT Operations, CISO
**Passing Score**: 85%
**Recertification**: Annual

## Why This Matters

**Picture this scenario**: It's 2 PM on a Tuesday. A customer reports they can't access the Communications platform. Minutes later, IT notices unusual database activity. Your phone rings - you're being activated as part of the incident response team. What do you do first?

In the next 30 minutes, your team's actions will determine:
- Whether this becomes a minor hiccup or a major crisis
- If customer data remains secure
- Whether Swedwise faces regulatory penalties
- How quickly we restore service
- What our customers think of us after

**The stakes are high**: A single data breach can cost an organization millions in fines, lost business, and reputation damage. For a SaaS provider like Swedwise, incidents can directly impact customer trust and our ability to compete.

**Your role matters**: As an incident response team member, you're part of Swedwise's front-line defense. This training prepares you to respond confidently, effectively, and in compliance with ISO 27001 and GDPR requirements.

---

## 1. Incident Response Overview

### 1.1 What is Incident Response?

**Incident Response (IR)** is a structured approach to handling security events that threaten our systems, data, or services. It's not just about fixing problems - it's about:

- **Containing damage** before it spreads
- **Preserving evidence** for investigation
- **Restoring services** as quickly as safely possible
- **Learning and improving** from each incident

### 1.2 Security Events vs. Security Incidents

Not everything that looks suspicious is an incident:

| Security Event | Security Incident |
|----------------|-------------------|
| Failed login attempt | Multiple failed logins + unauthorized access achieved |
| Spam email received | Phishing email clicked + credentials entered |
| Virus detected and blocked | Malware executed and spreading across network |
| System alert triggered | Confirmed unauthorized data access |

**Key difference**: An incident has actual or likely impact on confidentiality, integrity, or availability of our systems or data.

**Our approach**: Better to treat an event as a potential incident and investigate than to dismiss something that escalates.

### 1.3 IR Team Structure at Swedwise

Our incident response capability is built on three levels:

**Level 1: All Staff**
- Everyone can detect and report incidents
- First line of defense
- Required training: Annual security awareness

**Level 2: Service Desk / IT Operations**
- Triage and handle Low/Medium incidents
- Escalate to Level 3 when needed
- Required training: This course + technical IR skills

**Level 3: Core IR Team**
- Handle High/Critical incidents
- Lead investigations and coordination
- Make critical decisions

**Core IR Team Composition:**

| Role | Primary Responsibility | Who |
|------|----------------------|-----|
| **CISO** | Overall IR coordination, management liaison, regulatory compliance | [CISO Name] |
| **IR Lead** | Day-to-day incident ownership, team coordination | Assigned per incident |
| **IT Operations Lead** | Technical investigation and remediation | [IT Ops Lead] |
| **Customer Success Lead** | Customer communication, impact assessment | [CS Lead] |
| **Legal/Privacy Officer** | GDPR compliance, legal obligations | [Legal contact] |
| **Management Rep** | Business decisions, resource allocation (Critical incidents) | CEO or delegate |

### 1.4 When the IR Team is Activated

The full IR team is assembled for:

**Automatic Activation (Critical incidents):**
- Customer data breach or suspected breach
- SaaS platform outage affecting multiple customers
- Ransomware or widespread malware
- Suspected unauthorized access to production systems
- Any incident requiring regulatory notification

**Escalated Activation (High incidents):**
- Compromised privileged accounts
- Significant service degradation
- Malware on multiple systems
- Potential data exposure requiring investigation
- Supplier/third-party security incidents affecting us

**Your Role**: When activated, you must:
1. Acknowledge activation within 15 minutes
2. Join the incident communication channel (Teams)
3. Follow incident owner's coordination
4. Document your actions with timestamps
5. Escalate issues or blockers immediately

---

## 2. Incident Classification

### 2.1 Severity Levels

We use four severity levels to prioritize response:

| Level | Impact | Response Time | Team Activation |
|-------|--------|---------------|-----------------|
| **Critical** | Major business/customer impact | 15 minutes | Full IR team |
| **High** | Significant impact, escalation potential | 1 hour | Core IR team |
| **Medium** | Limited, contained impact | 4 hours | IT Ops + CISO informed |
| **Low** | Minimal impact, informational | 1 business day | Service Desk |

### 2.2 Classification Criteria

When assessing severity, consider these dimensions:

**Impact Factors:**
- **Data sensitivity**: What classification? Customer data? Personal data?
- **Number affected**: One user? Department? All customers?
- **Business function**: Is this a critical service?
- **Customer impact**: SLA breach? Data exposure? Service outage?
- **Regulatory implications**: GDPR breach? Contractual violation?
- **Reputation risk**: Media attention? Customer trust impact?

**Urgency Factors:**
- **Speed of spread**: Is it contained or spreading?
- **Active exploitation**: Is an attacker currently active?
- **Time sensitivity**: Regulatory deadlines (GDPR 72 hours)?
- **SLA commitments**: Customer contractual obligations?

### 2.3 Severity Examples

**Critical Incidents:**
- Ransomware encrypting production systems
- Confirmed customer data exfiltration
- Complete SaaS platform outage (all customers)
- Widespread malware outbreak
- Successful SQL injection accessing customer database

**High Incidents:**
- Privileged account compromised (admin, database access)
- Malware on 5+ systems
- Partial SaaS service degradation affecting SLAs
- Suspected (unconfirmed) data breach requiring urgent investigation
- Critical vulnerability discovered in production with active exploits

**Medium Incidents:**
- Single user account compromised
- Malware isolated to 1-2 systems, contained
- Minor policy violation with data exposure risk
- Attempted but unsuccessful unauthorized access
- Phishing email clicked but credentials not entered

**Low Incidents:**
- Multiple failed login attempts (no access gained)
- Spam/phishing emails reported but not clicked
- Minor configuration issues without security impact
- Scanning activity from internet (normal background noise)
- Lost device with no sensitive data

### 2.4 Classification Exercise

**Scenario 1**: A consultant reports receiving an email claiming to be from IT, asking them to verify their Microsoft 365 password. They clicked the link but didn't enter credentials.

<details>
<summary>Click for classification</summary>

**Severity**: Low to Medium
- No credentials compromised (yet)
- Potential phishing attempt
- Limited immediate impact
- Action: Verify if legitimate, block sender, check for similar emails to other staff
</details>

**Scenario 2**: Azure monitoring alerts show unusual database queries at 3 AM. Initial investigation reveals an unknown IP address accessing the Communications platform customer database.

<details>
<summary>Click for classification</summary>

**Severity**: Critical
- Potential customer data breach
- Unauthorized access to production
- GDPR implications (customer personal data)
- SaaS service security compromised
- Action: Immediate IR team activation, containment, evidence preservation
</details>

**Scenario 3**: A developer's laptop antivirus detects and quarantines a trojan. The laptop has not been connected to the corporate network or customer systems.

<details>
<summary>Click for classification</summary>

**Severity**: Low to Medium
- Malware detected and blocked
- Isolated system (not on network)
- No evidence of spread or data access
- Action: Remove malware, scan system, investigate source, check for similar infections
</details>

---

## 3. Incident Response Phases

All incident response follows a structured lifecycle:

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌─────────────┐
│ Preparation │───▶│ Detection &  │───▶│ Containment │───▶│ Eradication │
│             │    │   Analysis   │    │             │    │             │
└─────────────┘    └──────────────┘    └─────────────┘    └─────────────┘
                                                                   │
     ▲                                                             ▼
     │                                                      ┌─────────────┐
     │                                                      │  Recovery   │
     │                                                      └─────────────┘
     │                                                             │
     │                                                             ▼
     │                                                      ┌─────────────┐
     └──────────────────────────────────────────────────────│ Post-Incident│
                                                            │   Review    │
                                                            └─────────────┘
```

### 3.1 Preparation (Before Incidents Occur)

**Objective**: Be ready before incidents happen.

**Key Activities:**
- Maintain incident response procedures (SW-ISMS-PRO-001)
- Train IR team members (this training!)
- Test response capabilities (tabletop exercises, simulations)
- Ensure tools and access are ready (monitoring, forensics, communication channels)
- Keep contact lists updated
- Maintain backup and recovery capabilities
- Document system baselines and architectures

**Your Preparation Checklist:**
- [ ] Complete this training and pass assessment
- [ ] Have CISO and IT Ops Lead contact details saved
- [ ] Know how to access incident communication channel (Teams #security-incidents)
- [ ] Have access to necessary tools and systems for your role
- [ ] Understand your specific IR role and responsibilities
- [ ] Know where to find IR procedures and templates

### 3.2 Detection and Analysis

**Objective**: Identify security incidents as early as possible and understand what's happening.

**Detection Sources:**
- Automated monitoring alerts (Azure Monitor, antivirus, SIEM)
- User reports (staff, customers, partners)
- Third-party notifications (Microsoft, Entiros, security researchers)
- Audit findings
- Media or public disclosure

**Initial Analysis Steps:**
1. **Gather initial information**
   - What was observed?
   - When did it occur?
   - What systems are affected?
   - What evidence exists?

2. **Validate it's an incident**
   - Is this a false positive?
   - Is there actual or likely impact?
   - What type of incident is this?

3. **Assess severity**
   - Use classification criteria (Section 2.2)
   - Determine severity level
   - Consider potential for escalation

4. **Document everything**
   - Create incident ticket (INC-YYYY-MM-####)
   - Log initial findings with timestamps
   - Preserve evidence immediately

**Critical: Do NOT modify or delete evidence during investigation!**

### 3.3 Containment

**Objective**: Stop the incident from spreading while preserving evidence for investigation.

**Two Types:**

**Short-term Containment (Immediate actions):**
- Isolate affected systems
- Disable compromised accounts
- Block malicious IPs/domains
- Disconnect infected systems from network
- Prevent data exfiltration

**Long-term Containment (Sustainable approach):**
- Apply temporary fixes
- Implement monitoring for affected areas
- Prepare for eradication and recovery
- Maintain business continuity

**Containment Priority Matrix:**

| Scenario | Immediate Action | Why |
|----------|------------------|-----|
| Compromised account | Disable account, reset password, revoke sessions | Prevent further unauthorized access |
| Malware spreading | Isolate infected systems from network | Stop lateral movement |
| Data exfiltration in progress | Block external connections, isolate system | Prevent data loss |
| DDoS attack | Enable DDoS protection, rate limiting | Maintain service availability |
| SQL injection | Take affected service offline if necessary | Prevent data breach |

**Key Principle**: Containment should stop the threat without destroying evidence. If possible, preserve the compromised state for forensics while preventing further damage.

### 3.4 Eradication

**Objective**: Remove the root cause of the incident.

**Actions:**
- Remove malware and malicious tools
- Close exploited vulnerabilities (patch, reconfigure)
- Delete unauthorized access methods (backdoors, rogue accounts)
- Address compromised credentials (force resets)
- Remove attacker persistence mechanisms

**Validation:**
- Scan systems to confirm threat removal
- Review configurations against security baselines
- Test that vulnerabilities are closed
- Verify no hidden backdoors remain
- Check for lateral movement to other systems

**Don't Rush**: Eradication must be thorough. Incomplete eradication means the attacker can return.

### 3.5 Recovery

**Objective**: Restore systems and services to secure, normal operation.

**Recovery Steps:**

1. **Restore from Clean State**
   - Rebuild systems from known-good sources
   - Restore data from clean, verified backups
   - Apply all security patches before reconnecting
   - Verify security controls are operational

2. **Phased Return to Production**
   - Restore in stages when possible
   - Monitor closely during initial recovery
   - Test functionality and security
   - Verify no signs of re-compromise

3. **Enhanced Monitoring**
   - Increase monitoring of recovered systems
   - Watch for signs of recurrence
   - Typical enhanced monitoring period: 7 days minimum

4. **Verification and Sign-off**
   - CISO approval required for Critical/High incidents
   - Document recovery completion
   - Communicate restoration to stakeholders

### 3.6 Post-Incident Review

**Objective**: Learn from the incident and improve our defenses.

**Timeline**: Within 5 business days (Critical/High), 10 days (Medium)

**Review Questions:**

**What Happened?**
- Incident timeline
- Root cause
- How it was detected
- Impact assessment

**Response Effectiveness:**
- What went well?
- What could be improved?
- Were procedures followed?
- Were resources adequate?
- Response time metrics

**Lessons Learned:**
- Why did this happen?
- Were controls in place? Did they work?
- What should change?
- Preventive measures needed?

**Action Items:**
- Assign corrective actions
- Set deadlines and owners
- Update procedures if needed
- Address identified gaps

**Outputs:**
- Post-Incident Review Report
- Corrective action tasks
- Updated risk assessment
- Training material updates
- Procedure revisions

---

## 4. Detection and Initial Response

### 4.1 How Incidents are Detected

**Automated Detection:**
- Azure Monitor alerts (resource health, security)
- Antivirus/anti-malware alerts
- SIEM correlation rules (future capability)
- Backup failure notifications
- SaaS platform monitoring (uptime, performance, errors)
- Microsoft Defender alerts

**Human Detection:**
- User reports of suspicious activity
- Customer complaints about service issues
- Consultant notices unusual behavior at client site
- Security team proactive hunting
- Audit findings

**Third-Party Notifications:**
- Microsoft security notifications
- Entiros infrastructure alerts
- Security researcher responsible disclosure
- Law enforcement notification

### 4.2 Initial Triage Steps (First 15 Minutes)

**When you receive an incident report:**

**Step 1: Acknowledge (Immediately)**
- Confirm receipt to reporter
- Assign incident tracking number: INC-YYYY-MM-####
- Log in incident tracking system

**Step 2: Gather Information**
Ask the reporter:
- What did you observe?
- When did it happen?
- What systems/accounts are affected?
- What actions have you already taken?
- Do you have evidence? (screenshots, logs, emails)

**Step 3: Initial Assessment**
- Review available information
- Conduct quick preliminary check
- Determine if this is truly an incident
- Identify incident category (Section 2.1)

**Step 4: Classify Severity**
- Apply classification criteria
- Determine severity level
- Consider escalation potential

**Step 5: Assign Ownership**
- Critical: CISO
- High/Medium: IT Operations Lead
- Low: Service Desk

**Step 6: Activate Response**
- Notify incident owner
- Assemble response team (for Critical/High)
- Create dedicated communication channel
- Begin documentation

### 4.3 Escalation Triggers

**Immediately escalate to CISO if ANY of these apply:**

- Customer or personal data potentially breached
- Multiple systems or users affected
- Privileged accounts compromised
- SaaS platform security compromise
- Active exploitation in progress
- Regulatory notification may be required
- Media or customer attention likely
- Cannot contain with available resources

**Escalation Path:**

```
Service Desk ──▶ IT Operations Lead ──▶ CISO ──▶ CEO ──▶ Board
                       ▲                    ▲        ▲
                       │                    │        │
                  Medium/High          Critical  Major breach
```

### 4.4 Communication Protocols

**Internal Communication Channels:**

**During Incidents:**
- **Microsoft Teams**: #security-incidents channel
- **Email**: security@swedwise.se (monitored 24/7 for Critical)
- **Phone**: [IR hotline - TBD]
- **War Room**: Dedicated Teams channel for Critical incidents

**Status Updates:**
- Critical: Every 2 hours initially, then every 4 hours
- High: Every 4 hours
- Medium: Daily
- Low: On closure

**Communication Security:**
- Use internal channels only
- Don't discuss sensitive incidents in public areas
- Mark communications as "Incident Response - Confidential"
- No screenshots to personal devices

**Who Needs to Know:**

| Severity | Immediate Notification | Regular Updates |
|----------|----------------------|-----------------|
| Critical | CISO, CEO, IR Team, affected dept heads | Management team, all staff (sanitized) |
| High | CISO, IR Team, affected dept head | CISO, management (relevant) |
| Medium | IT Ops Lead, CISO (informed) | CISO |
| Low | Service Desk, IT Ops | IT Ops |

---

## 5. Containment Strategies

### 5.1 Containment Decision Framework

**Before you act, ask:**

1. **Will this stop the threat?**
2. **Will this preserve evidence?**
3. **What's the business impact?**
4. **Can we maintain service?**
5. **Is this temporary or permanent?**

**Remember**: Containment is about stopping damage while you investigate. Don't rush to "fix" things if it will destroy evidence or cause worse problems.

### 5.2 Containment by Incident Type

**Compromised User Account:**

**Short-term:**
- Disable the account immediately
- Revoke all active sessions and tokens
- Force password reset on related accounts

**Long-term:**
- Review account activity logs (last 30 days)
- Identify what the account accessed
- Implement additional MFA if not present
- Monitor for attempts to re-access

**Evidence to Preserve:**
- Authentication logs
- Account activity audit logs
- Email access logs if email account
- File access history

**Compromised Privileged Account (Admin, Database, etc.):**

**Short-term:**
- **CRITICAL**: Disable immediately - these accounts have keys to the kingdom
- Revoke all sessions and tokens
- Alert CISO immediately
- Assume worst case: attacker has full access

**Long-term:**
- Review ALL systems the account could access
- Check for backdoors, rogue accounts, configuration changes
- Audit database access and queries (especially for customer data)
- Reset passwords for all privileged accounts (assume lateral movement)
- Implement privileged access management (PAM)

**Evidence to Preserve:**
- Complete audit trail of privileged account activity
- Database query logs
- System configuration changes
- User creation/modification logs

**Malware Detection:**

**Short-term:**
- Isolate infected system from network (disconnect or VLAN isolation)
- DO NOT shut down - you'll lose memory evidence
- Block command & control (C2) domains/IPs at firewall
- Disable affected user accounts

**Long-term:**
- Scan all systems for indicators of compromise (IOCs)
- Monitor network for lateral movement attempts
- Create forensic image before cleanup
- Prepare clean rebuild

**Evidence to Preserve:**
- Memory dump (before shutdown!)
- Disk image
- Network traffic captures
- Malware samples (safely contained)
- Process listings and scheduled tasks

**Ransomware:**

**Short-term:**
- **IMMEDIATELY** isolate affected systems (every second counts)
- Identify patient zero and containment perimeter
- Shut down lateral movement paths (network segments, VPN, remote access)
- Assess backup integrity (attackers often target backups first)

**Long-term:**
- Determine encryption scope
- Assess if data was exfiltrated (modern ransomware = data theft + encryption)
- Prepare recovery from backups
- Consider forensic investigation firm for major events

**DO NOT pay ransom without CEO approval and legal consultation**

**Evidence to Preserve:**
- Ransom note and communications
- Encrypted file samples
- Network traffic (may show exfiltration)
- Entry point and propagation vectors

**Data Breach / Unauthorized Access:**

**Short-term:**
- Identify and close the exposure vector
- Revoke unauthorized access immediately
- Block external data transfer if in progress
- Isolate affected systems

**Long-term:**
- Determine what data was accessed/exfiltrated
- Assess data sensitivity (use information classification)
- Prepare for potential regulatory notification (GDPR 72 hours)
- Document data breach details

**Evidence to Preserve:**
- Access logs showing WHO accessed WHAT and WHEN
- Network logs (data transfer volumes, destinations)
- Database query logs
- File access audit logs
- Email or file sharing logs

**SaaS Platform Service Disruption:**

**Short-term:**
- Assess if security incident or operational issue
- Activate incident communication to customers if needed
- Implement failover if available
- Consider temporary service restrictions to protect data

**Long-term:**
- Determine if customer data is at risk
- Assess SLA impact
- Coordinate with Customer Success for customer communication
- Plan recovery timeline

**Evidence to Preserve:**
- Service logs and metrics
- Error messages and stack traces
- Infrastructure monitoring data
- Customer impact assessment

### 5.3 Preventing Spread

**Network Segmentation:**
- Isolate affected network segments
- Restrict lateral movement between VLANs
- Monitor east-west traffic (between internal systems)

**Access Control:**
- Implement least privilege immediately
- Review and restrict remote access
- Disable unnecessary services and protocols
- Enforce MFA for all access during incident

**Monitoring:**
- Increase logging and monitoring
- Set up alerts for similar activity
- Watch for attacker regrouping

### 5.4 Maintaining Business Continuity During Containment

**Balance Security and Operations:**

Sometimes containment requires tough choices:

**Scenario**: Database server may be compromised. Taking it offline means SaaS platform goes down.

**Decision Framework:**
1. **Assess risk**: Is customer data actively being exfiltrated?
2. **Evaluate alternatives**: Can we restrict access without full shutdown?
3. **Consider impact**: SLA breach vs. potential data breach?
4. **Escalate decision**: This is a CISO/CEO decision for SaaS Critical systems
5. **Communicate**: Whatever you decide, tell customers proactively

**Rule of Thumb**: If customer data is at risk of breach, protect the data even if it means service disruption. SLAs can be fixed; data breaches cannot be undone.

---

## 6. Evidence Preservation

### 6.1 Why Evidence Matters

**You might need evidence for:**
- Understanding what happened (root cause analysis)
- Regulatory reporting (GDPR, ISO 27001)
- Law enforcement investigation
- Legal proceedings (criminal or civil)
- Insurance claims
- Post-incident review and improvement

**Key Principle**: Assume every incident might end up in court. Handle evidence accordingly.

### 6.2 Chain of Custody

**Chain of custody** = documented trail showing:
- What evidence was collected
- When it was collected
- Who collected it
- Where it came from
- How it was stored
- Who accessed it

**For Critical incidents with potential legal implications:**

**Documentation Requirements:**
1. **Collection Record:**
   - Evidence description
   - Source system/location
   - Collection date/time
   - Collector name
   - Collection method
   - Hash values (MD5/SHA-256 for digital evidence)

2. **Storage Record:**
   - Storage location (physical and logical)
   - Access controls
   - Security measures
   - Access log

3. **Transfer Record:**
   - Transfer date/time
   - From whom to whom
   - Reason for transfer
   - Signatures/confirmations
   - Verification of integrity (hash comparison)

### 6.3 Types of Evidence to Preserve

**System Logs:**
- Windows Event Logs
- Linux/Unix syslog
- Application logs
- Web server logs
- Database logs (especially query logs)

**Authentication Logs:**
- Login/logout events
- Failed authentication attempts
- Privileged access usage
- MFA events

**Network Evidence:**
- Firewall logs
- Network flow data (NetFlow)
- Packet captures (for targeted investigation)
- DNS query logs
- Proxy/web filter logs

**Endpoint Evidence:**
- Running processes
- Scheduled tasks
- Registry changes (Windows)
- File system changes
- Memory dumps
- Disk images

**Email and Communications:**
- Suspicious emails (headers + body)
- Phishing attempts
- Ransom communications
- Incident-related communications

**Screenshots and Documentation:**
- Error messages
- System states
- Ransom notes
- Configuration screens

### 6.4 Evidence Collection Best Practices

**DO:**
- ✓ Collect evidence as soon as incident is detected
- ✓ Document everything with timestamps
- ✓ Use forensically sound methods (write-blockers for disk imaging)
- ✓ Create copies, work on copies, preserve originals
- ✓ Calculate and verify hash values
- ✓ Store securely with restricted access
- ✓ Maintain detailed chain of custody

**DON'T:**
- ✗ Modify or delete logs
- ✗ Shut down systems before capturing volatile data (memory)
- ✗ Work directly on original evidence
- ✗ Use suspect systems for investigation tools
- ✗ Discuss evidence publicly or in insecure channels
- ✗ Allow unauthorized access to evidence

### 6.5 Volatile Evidence Priority (Order of Volatility)

**Collect in this order** (most volatile first):

1. **Memory (RAM)** - Lost on shutdown
2. **Network connections** - Active connections lost quickly
3. **Running processes** - Change constantly
4. **System state** - Can change
5. **File system** - Relatively stable
6. **Logs** - Stable but may rotate
7. **Backups and archives** - Most stable

### 6.6 Evidence Storage and Retention

**Storage Requirements:**
- **Secure location**: Restricted physical and logical access
- **Access logging**: Track who accessed evidence and when
- **Integrity protection**: Prevent tampering
- **Encryption**: For sensitive evidence
- **Backup**: Evidence must be backed up

**Retention Periods:**
- Critical incidents: 7 years
- High incidents: 5 years
- Medium incidents: 3 years
- Low incidents: 1 year
- GDPR breach incidents: Per legal counsel (typically 7+ years)

### 6.7 Working with Legal and Law Enforcement

**When to Involve Legal:**
- Personal data breach (GDPR)
- Customer data compromised
- Suspected criminal activity
- Potential litigation
- Regulatory reporting required

**When to Involve Law Enforcement:**
- Suspected criminal activity (hacking, theft, fraud)
- Organized cybercrime
- Nation-state actors
- Threats of violence
- CISO decision, in consultation with CEO and legal

**Working with Law Enforcement:**
- Preserve evidence in forensically sound manner
- Don't compromise investigation by premature disclosure
- Follow legal counsel guidance
- Document all interactions
- Be prepared to provide evidence in legal formats

---

## 7. Communication During Incidents

### 7.1 Internal Communication Channels

**Primary Channel**: Microsoft Teams #security-incidents

**War Room for Critical Incidents:**
- Dedicated Teams channel: "INC-YYYY-MM-#### War Room"
- Voice/video calls for real-time coordination
- Screen sharing for collaborative analysis

**Backup Channels:**
- Email: security@swedwise.se
- Phone: [IR hotline - TBD]
- SMS/WhatsApp: For Critical incidents if Teams unavailable

### 7.2 Status Update Frequency

| Severity | Initial Update | Regular Updates | Final Update |
|----------|---------------|-----------------|--------------|
| Critical | Within 15 min | Every 2 hrs (initially), then 4 hrs | On closure + PIR |
| High | Within 1 hour | Every 4 hrs | On closure + PIR |
| Medium | Within 4 hours | Daily | On closure |
| Low | Within 1 day | On closure | On closure |

**Status Update Contents:**
- Current situation summary
- Actions taken since last update
- Current status of containment/eradication/recovery
- Next steps
- Estimated time to resolution (if known)
- Blockers or needed resources

### 7.3 Customer Notification

**When to Notify Customers:**

**MUST notify:**
- Service outage or degradation affecting SLAs
- Confirmed or likely customer data breach
- Security incident that affects customer operations
- GDPR requires customer notification (high risk to rights/freedoms)

**Consider notifying:**
- Potential security issue under investigation
- Third-party incident affecting our service
- Preventive maintenance related to security

**When NOT to notify (yet):**
- Incident contained with no customer impact
- Investigation ongoing, no confirmed customer impact
- Internal incident with no customer data or service impact

**Notification Timing:**
- SLA breach: Per SLA terms (typically immediately)
- Data breach: GDPR = notify individuals without undue delay if high risk
- Service issue: As soon as impact is confirmed
- Resolved incident: Summary after resolution

### 7.4 Customer Communication Process

**Step 1: Assess Need for Communication**
- Is customer data affected?
- Is service availability affected?
- Is there regulatory requirement?
- What's the potential customer impact?

**Step 2: Coordinate Approval**
- Critical incidents: CISO + CEO approval required
- High incidents: CISO + Customer Success approval
- Coordinate with Legal for data breaches

**Step 3: Draft Communication**
- Use customer communication templates
- Be transparent but measured
- Avoid speculation or technical jargon
- Include: What happened, impact, what we're doing, timeline, next steps
- Provide contact for questions

**Step 4: Delivery Channels**
- Email to customer primary contacts
- Service status page update
- Support portal notification
- Phone call for Critical incidents

**Step 5: Follow-up**
- Regular updates as situation evolves
- Detailed post-incident report after resolution
- Customer calls to discuss lessons learned

**Communication Template Example:**

```
Subject: [INCIDENT NOTIFICATION] Swedwise Communications Service Status

Dear [Customer Name],

We are writing to inform you of a security/service incident affecting
the Swedwise Communications platform.

WHAT HAPPENED:
[Brief, clear description]

IMPACT TO YOUR SERVICE:
[Specific impact on this customer]

WHAT WE'RE DOING:
[Actions taken and in progress]

TIMELINE:
[When detected, current status, estimated resolution]

WHAT YOU SHOULD DO:
[Any customer actions needed, or "No action required"]

We sincerely apologize for any inconvenience. If you have questions,
please contact [name] at [email/phone].

We will provide updates [frequency] until this is resolved.

Best regards,
[CISO / Customer Success Lead]
Swedwise AB
```

### 7.5 Regulatory Notification (GDPR)

**GDPR Personal Data Breach = 72-Hour Clock**

If a personal data breach occurs:

**Within 4 hours:**
- Assess if personal data is involved
- Determine risk to data subjects (rights and freedoms)
- Notify CISO and Legal/Privacy Officer

**Within 72 hours:**
- Notify Swedish Authority for Privacy Protection (IMY) if breach likely results in risk
- Submit GDPR breach notification form
- If notification not required, document reason in breach register

**Notification Must Include:**
- Nature of breach
- Categories and approximate number of data subjects affected
- Categories and approximate number of records affected
- Contact point for more information (CISO/Privacy Officer)
- Likely consequences
- Measures taken or proposed to address breach

**Notify Data Subjects (Individuals):**
- Required if breach likely results in HIGH risk to rights and freedoms
- Direct notification in clear, plain language
- Describe nature of breach and likely consequences
- Measures taken and recommended actions for individuals

**Documentation:**
- ALL personal data breaches must be documented in breach register
- Even if not notified to IMY
- Include: facts, effects, remedial actions taken

### 7.6 Media and Public Communication

**Golden Rule**: Only CEO and authorized spokespersons communicate with media.

**If Approached by Media:**

1. **Do not comment** - "I'm not authorized to speak to media"
2. **Be polite** - Take reporter's contact information
3. **Escalate immediately** - Notify CISO and CEO
4. **Document** - What they asked, which outlet, deadline

**Media Statement (If Required):**
- Prepared by CEO/management with legal review
- Factual and measured
- Acknowledge concern
- Describe response actions
- Demonstrate competence and control
- Avoid technical details or speculation

**Social Media Monitoring:**
- Monitor for public discussion of incident
- Track customer sentiment
- Identify misinformation
- Inform communication strategy

---

## 8. Post-Incident Activities

### 8.1 Post-Incident Review (PIR) Overview

**Purpose**: Learn from the incident to prevent recurrence and improve response.

**Timeline**:
- Critical/High incidents: Within 5 business days of closure
- Medium incidents: Within 10 business days

**Participants:**
- Incident Owner
- Response team members
- CISO
- Affected department representatives
- Management (for Critical incidents)

**Duration**: 1-2 hours

### 8.2 Post-Incident Review Agenda

**1. Incident Summary (10 minutes)**
- Timeline of events
- How incident was detected
- Severity and classification
- Systems and data affected
- Business impact
- Time to detect, contain, resolve

**2. Response Effectiveness (20 minutes)**

**What Went Well:**
- Quick detection
- Effective communication
- Good teamwork
- Procedures followed
- Minimal impact due to response

**What Could Be Improved:**
- Response delays
- Communication gaps
- Resource constraints
- Procedure ambiguities
- Skill gaps

**3. Root Cause Analysis (20 minutes)**

Use "5 Whys" technique:

**Example:**
- **Problem**: Ransomware encrypted file server
- **Why?** Malware executed on system
- **Why?** User clicked phishing link
- **Why?** Email filter didn't catch it
- **Why?** Email filter rules not updated for new technique
- **Why?** No process for regular threat intelligence updates
- **Root Cause**: Lack of systematic threat intelligence integration

**4. Lessons Learned (15 minutes)**
- What did we learn about our systems?
- What did we learn about our processes?
- What did we learn about our team?
- What did we learn about threats/attackers?

**5. Corrective and Preventive Actions (20 minutes)**

**Categories:**
- **Immediate**: Fix this specific vulnerability/issue
- **Short-term**: Address similar risks across environment
- **Long-term**: Systemic improvements

**For Each Action:**
- What needs to change?
- Who is responsible?
- When must it be completed?
- How will we verify it's done?

**6. Documentation and Follow-up (5 minutes)**
- Assign PIR report author
- Set action item tracking
- Schedule follow-up review

### 8.3 Root Cause Analysis Techniques

**5 Whys** (shown above)

**Fishbone Diagram (Ishikawa):**

```
                                    Incident
                                       │
          ┌────────────────────────────┼────────────────────────────┐
          │                            │                            │
       People                     Technology                   Process
          │                            │                            │
    Skill gaps?                  Tool failures?              Missing procedures?
    Training needed?             Configuration errors?       Outdated procedures?
          │                            │                            │
          └────────────────────────────┴────────────────────────────┘
                                 Root Causes
```

**Timeline Analysis:**
- Plot all events chronologically
- Identify decision points
- Find where things went right or wrong
- Determine critical moments

### 8.4 Updating Procedures

**When to Update Procedures:**
- PIR identifies procedure gaps or ambiguities
- New threats or attack techniques encountered
- Response revealed tool or capability gaps
- Regulatory or compliance requirements changed

**Procedure Update Process:**
1. Document what needs to change
2. Draft updates (CISO or procedure owner)
3. Review with IR team
4. Obtain management approval
5. Communicate changes to all staff
6. Update training materials
7. Train team on changes

### 8.5 Preventive Measures

**Technical Preventive Measures:**
- Patch vulnerabilities exploited
- Improve detection capabilities
- Implement additional security controls
- Harden system configurations
- Improve monitoring and alerting

**Process Preventive Measures:**
- Update procedures
- Improve communication protocols
- Clarify roles and responsibilities
- Enhance escalation processes

**People Preventive Measures:**
- Additional training
- Awareness campaigns targeting specific threats
- Team drills on scenarios
- Knowledge sharing sessions

### 8.6 Tracking Actions to Completion

**Action Tracking Requirements:**
- Unique action ID
- Description and justification
- Owner (person responsible)
- Due date
- Status (Not Started, In Progress, Complete, Blocked)
- Verification method
- Actual completion date

**Follow-up:**
- Review action status weekly
- Escalate overdue items to management
- Verify completion before closing
- Report to management on action completion rates

**Metric**: Target >90% of post-incident actions completed on time

---

## 9. Tabletop Exercise

### 9.1 Exercise Scenario: The Tuesday Afternoon Incident

**Date**: Tuesday, March 15, 2:00 PM
**Your Role**: You are the on-call IR team member today

**Initial Report:**

You receive a Teams message from Anna, a Customer Success Manager:

> "Hey, I just got a weird call from one of our customers (Nordea Bank). They say they're getting error messages when trying to generate customer communications. The error says 'Database connection timeout.' I checked the status page and it shows all systems green. Can you look into this?"

**2:05 PM - Your Initial Investigation:**

You check Azure Monitor and see:
- Communications platform database server CPU at 98%
- Unusual spike in database queries started at 1:45 PM
- Queries are coming from the web application service account
- Most queries are SELECT statements accessing customer data tables

**2:10 PM - Additional Information:**

You pull database query logs and notice:
- Queries have unusual patterns (e.g., `SELECT * FROM customers WHERE customer_id > 0`)
- IP address of the web server showing these queries: 10.20.30.45 (correct internal IP)
- Recent application deployment this morning at 9:00 AM
- Similar query patterns started after deployment

**2:15 PM - Customer Impact:**

Customer Success reports:
- 3 customers now reporting issues
- Service is slow but not completely down
- SLA allows 99.9% uptime (currently at 98.5% today)

---

### 9.2 Exercise Questions

**Decision Point 1: Is This an Incident?**

Analyze the situation:
- Is this a security incident or an operational issue?
- What indicators suggest security concern?
- What indicators suggest operational issue?
- What severity would you assign if it's an incident?

<details>
<summary>Suggested Analysis</summary>

**Security Indicators:**
- Unusual database query patterns
- SELECT * queries accessing customer data
- Queries started after a deployment (potential backdoor?)

**Operational Indicators:**
- Recent application deployment (code bug?)
- Queries from legitimate application service account
- Pattern suggests inefficient queries, not malicious

**Decision**: Treat as potential security incident (Medium severity) while investigating. Better safe than sorry with customer data access.

**Reasoning**:
- Customer data being accessed
- Unusual pattern
- Cannot rule out compromise yet
- Could escalate to High/Critical if breach confirmed
</details>

**Decision Point 2: Immediate Actions**

What are your next three actions? (Prioritize)

<details>
<summary>Suggested Actions</summary>

1. **Create incident ticket** (INC-2025-03-015) and notify IT Ops Lead + CISO
2. **Investigate deployment**: Review code changes from this morning
3. **Monitor data exfiltration**: Check network logs for unusual outbound traffic

**Why this priority:**
- Document and escalate (CYA and get help)
- Most likely explanation (code bug) should be checked first
- Verify if data is leaving the environment (critical for breach determination)
</details>

**Decision Point 3: Containment Options**

Given what you know, what containment options do you have?

Consider:
- Taking web application offline (stops service to ALL customers)
- Rolling back deployment (may take 30 minutes)
- Blocking specific queries at database level (complex, may miss some)
- Monitoring and investigating (no immediate containment)

What do you recommend?

<details>
<summary>Suggested Approach</summary>

**Recommended**: Rollback deployment + enhanced monitoring

**Reasoning:**
1. **Deploy rollback** (30 min):
   - Most likely cause is code bug
   - Returns to known-good state
   - Minimal additional customer impact
   - Preserves current state for investigation

2. **While rollback in progress**:
   - Continue monitoring for data exfiltration
   - Review deployment code changes
   - Check network logs for outbound transfers

3. **Don't take offline** unless:
   - Rollback fails
   - Evidence of data exfiltration confirmed
   - Situation escalates

**Balance**: Containment vs. business continuity
</details>

**Decision Point 4: Investigation Findings**

After deploying rollback at 2:45 PM:
- Service returns to normal
- You review the deployment code changes
- Junior developer accidentally introduced N+1 query problem
- For each customer communication request, app was loading all customer records
- No evidence of data exfiltration in network logs
- No evidence of malicious activity

**What do you do now?**

<details>
<summary>Suggested Actions</summary>

1. **Reclassify incident**: This is a Low severity operational issue, NOT a security incident
   - Code bug, not compromise
   - No data breach
   - Performance impact only

2. **Document findings**: Update incident ticket with investigation results

3. **Customer communication**: Work with Customer Success
   - Brief service degradation due to code issue
   - Issue identified and resolved
   - No customer data compromised

4. **Follow-up actions**:
   - Code review process improvement
   - Testing procedures for deployments
   - Database query performance monitoring

5. **Post-incident review**: Quick PIR focusing on:
   - Deployment process gaps
   - Detection capabilities (good - we caught it quickly)
   - Response effectiveness

**Key Learning**: Not every investigation concludes with a security breach. Good incident response means thorough investigation AND correct classification.
</details>

---

### 9.3 Alternative Scenario: What If It WAS an Attack?

**Plot Twist**: Imagine instead, your investigation revealed:

- The queries are NOT from the deployment
- An unknown database user account "db_maint" is executing the queries
- This account was created yesterday at 11:00 PM
- Network logs show data being exfiltrated to external IP 185.220.101.45 (Tor exit node)
- This external connection started at 1:45 PM

**Now what?**

<details>
<summary>Critical Response Actions</summary>

**This is now a CRITICAL incident**

**Immediate Actions (next 5 minutes):**
1. **Activate full IR team** - This is a data breach
2. **Contain exfiltration**: Block 185.220.101.45 at firewall NOW
3. **Disable "db_maint" account**
4. **Isolate database server** (if safe to do so)
5. **Notify CISO immediately**

**Next 30 minutes:**
1. **Evidence preservation**:
   - Capture database query logs
   - Capture network traffic logs
   - Don't modify database server
   - Preserve "db_maint" account for forensics

2. **Assess impact**:
   - What data was exfiltrated? (Review query logs)
   - Which customers affected?
   - How much data transferred? (Network logs)

3. **Investigation**:
   - How was "db_maint" account created?
   - Compromised admin account?
   - Application vulnerability?
   - Review all account creation logs

4. **Communication preparation**:
   - Notify management (CEO)
   - Prepare customer notification
   - Prepare GDPR breach notification (72-hour clock starts)
   - Involve Legal/Privacy Officer

**This scenario = Major data breach**
- Customer data exfiltrated
- GDPR notification required
- Customer notification required
- Potential regulatory penalties
- Significant reputation damage

**Key Learning**: The first few decisions determine if a minor issue becomes a major crisis. Rapid, correct assessment and containment are critical.
</details>

---

## 10. Knowledge Assessment

### Section A: Multiple Choice (15 questions)

**Question 1**: You receive a report that a consultant's laptop was stolen from their car. The laptop had BitLocker encryption enabled and required password + MFA to access Microsoft 365. What severity is this incident?

A) Critical - Stolen device always critical
B) High - Physical security incident
C) Medium - Device encrypted but physical loss
D) Low - Device encrypted and protected, minimal data risk

<details>
<summary>Answer</summary>
D) Low - The encryption and MFA protections significantly reduce the risk of data exposure. This should still be reported and investigated, but severity is low due to effective controls.
</details>

---

**Question 2**: During an incident, you discover logs that might show how the attacker gained access, but the logs are on a system that's still running and in production. What should you do?

A) Immediately copy the logs to your laptop for analysis
B) Shut down the system to preserve evidence
C) Create a forensic copy of the system, then work on the copy
D) Delete the attacker's access before saving logs

<details>
<summary>Answer</summary>
C) Create a forensic copy of the system, then work on the copy. This preserves the original evidence in a forensically sound manner while allowing you to investigate. Never work directly on original evidence.
</details>

---

**Question 3**: It's 3:00 PM Friday. You've been investigating a Medium severity incident (single compromised user account) for 2 hours. You've contained it by disabling the account. What's your next priority?

A) Go home - it's Friday and it's contained
B) Complete full eradication and recovery before weekend
C) Document findings and hand off to Monday team
D) Escalate to Critical because it's Friday

<details>
<summary>Answer</summary>
B) Complete full eradication and recovery before weekend. A contained incident can still reactivate. Don't leave a half-resolved incident over the weekend. If you can't complete it, escalate to ensure someone monitors it.
</details>

---

**Question 4**: A customer calls to report they received an email claiming to be from Swedwise asking them to verify their login credentials. The email has a link to a site that looks like Swedwise's login page. What severity is this?

A) Low - Just a phishing email
B) Medium - Potential credential theft
C) High - Customer-targeted attack
D) Critical - Immediate customer data breach

<details>
<summary>Answer</summary>
C) High - This is a targeted attack against our customers (not just random phishing). It could be a precursor to compromise of customer accounts or data. Requires immediate investigation and customer notification. Severity could escalate to Critical if credentials were actually entered.
</details>

---

**Question 5**: You're responding to a ransomware incident. You've isolated the infected systems. The attacker left a ransom note offering a "decryption key" for 5 Bitcoin. What should you do?

A) Pay immediately to get systems back quickly
B) Negotiate down the ransom amount
C) DO NOT pay; restore from backups and involve CISO/CEO
D) Ignore the ransom and rebuild without telling anyone

<details>
<summary>Answer</summary>
C) DO NOT pay; restore from backups and involve CISO/CEO. Paying ransoms funds criminal activity and doesn't guarantee data recovery. This decision requires executive approval. Focus on recovery from backups and investigation.
</details>

---

**Question 6**: During a Critical incident at 2:00 AM, you need to communicate status to the IR team. What's the appropriate channel?

A) Post in general company Teams channel so everyone knows
B) Send email to security@swedwise.se and wait for responses
C) Use the dedicated incident war room Teams channel
D) Wait until morning to update - people need sleep

<details>
<summary>Answer</summary>
C) Use the dedicated incident war room Teams channel. Critical incidents require dedicated, secure communication channels. Never use public/general channels for sensitive incident information.
</details>

---

**Question 7**: You've classified an incident as Medium severity. 4 hours later, you discover it's affecting multiple systems and customer data may be exposed. What should you do?

A) Continue with Medium severity response - classification is final
B) Re-classify to High or Critical and escalate immediately
C) Finish the current response phase before re-classifying
D) Document the discovery but keep current classification

<details>
<summary>Answer</summary>
B) Re-classify to High or Critical and escalate immediately. Severity classification is not static. As you learn more, re-assess and escalate if needed. Customer data exposure = High or Critical.
</details>

---

**Question 8**: Which of the following should you do FIRST when responding to a suspected data breach?

A) Notify customers that their data may be breached
B) Contain the breach to stop ongoing data exposure
C) Begin root cause analysis to understand how it happened
D) Create a post-incident review report

<details>
<summary>Answer</summary>
B) Contain the breach to stop ongoing data exposure. First priority is always containment - stop the bleeding. Investigation, notification, and review come after you've stopped the active breach.
</details>

---

**Question 9**: What is the GDPR timeline for reporting a personal data breach to the Swedish Authority for Privacy Protection (IMY)?

A) 24 hours
B) 48 hours
C) 72 hours
D) 7 days

<details>
<summary>Answer</summary>
C) 72 hours - GDPR requires notification to the supervisory authority within 72 hours of becoming aware of the breach (if the breach is likely to result in risk to data subjects' rights and freedoms).
</details>

---

**Question 10**: You're investigating a compromised privileged account. You notice the attacker created a new admin account called "support_admin" before you disabled the original compromised account. What type of threat is this?

A) Privilege escalation
B) Backdoor/persistence mechanism
C) Lateral movement
D) Data exfiltration

<details>
<summary>Answer</summary>
B) Backdoor/persistence mechanism - The attacker created an alternative way to maintain access even if their original entry point is closed. You must find and remove ALL attacker accounts and access methods, not just the original compromised account.
</details>

---

**Question 11**: During containment of a malware infection, should you shut down the infected computer?

A) Yes, immediately to stop the malware
B) No, never shut down during incident response
C) No, capture volatile evidence (memory) first, then shut down
D) Yes, but only after removing the malware

<details>
<summary>Answer</summary>
C) No, capture volatile evidence (memory) first, then shut down. Memory contains valuable evidence (running processes, network connections, encryption keys) that's lost when you shut down. Capture it first, THEN shut down or isolate.
</details>

---

**Question 12**: A reporter from a technology news site calls you directly asking about "rumors of a data breach at Swedwise." What should you do?

A) Tell them it's under investigation and you'll call back
B) Answer their questions to prevent speculation
C) Say "no comment" and hang up
D) Politely decline to comment, take their info, escalate to CISO/CEO immediately

<details>
<summary>Answer</summary>
D) Politely decline to comment, take their info, escalate to CISO/CEO immediately. Only authorized spokespersons (CEO) should communicate with media. Be polite, don't confirm or deny, get their contact info, and escalate immediately.
</details>

---

**Question 13**: What is the primary purpose of a Post-Incident Review (PIR)?

A) Assign blame for the incident
B) Create documentation for auditors
C) Learn from the incident and prevent recurrence
D) Justify IR team budget

<details>
<summary>Answer</summary>
C) Learn from the incident and prevent recurrence. PIRs are about learning and improvement, not blame. Focus is on what we can do better, not who made mistakes.
</details>

---

**Question 14**: You notice during an incident that our response procedure doesn't address this specific type of attack. What should you do?

A) Abandon the procedure and improvise
B) Follow the general incident response process and document the gap for later
C) Stop the response until the procedure is updated
D) Escalate that the procedure is inadequate

<details>
<summary>Answer</summary>
B) Follow the general incident response process and document the gap for later. The core IR process (detect, contain, eradicate, recover, review) applies to all incidents. Document the procedural gap during PIR for future updates.
</details>

---

**Question 15**: Which incident response phase focuses on ensuring the threat cannot return?

A) Containment
B) Eradication
C) Recovery
D) Post-Incident Review

<details>
<summary>Answer</summary>
B) Eradication - This phase removes the root cause and ensures all traces of the threat are eliminated. Containment stops spread, eradication removes the threat, recovery restores normal operations.
</details>

---

### Section B: Scenario-Based Questions (Tabletop)

**Scenario 1: The Midnight Alert**

It's 11:30 PM on a Wednesday. You receive an automated alert from Azure Monitor:

> "ALERT: Unusual database activity detected. 500+ database queries from IP 192.168.10.50 accessing customer_data table in the last 5 minutes. Pattern matches data exfiltration signatures."

You're the on-call IR team member. It's just you right now.

**Question 1a**: List your first 5 actions in order. (Be specific)

<details>
<summary>Suggested Response</summary>

1. **Acknowledge alert and create incident ticket** (INC-YYYY-MM-###) - Start documentation
2. **Immediately investigate source IP** - Is this a legitimate application server or unknown?
3. **Check network logs for outbound data transfer** - Is data leaving the network?
4. **If data exfiltration confirmed: Block external connections from source IP at firewall** - Stop the bleeding
5. **Notify CISO immediately** (phone call, not just Teams message) - This is likely Critical

**Reasoning**: Quick assessment, immediate containment if confirmed, rapid escalation. You can't handle this alone at midnight.
</details>

**Question 1b**: Under what conditions would you wait until morning to escalate vs. calling the CISO now?

<details>
<summary>Suggested Response</summary>

**Call CISO NOW if:**
- Data exfiltration is confirmed or likely
- Source IP is unknown/unauthorized
- Customer data is being accessed
- Cannot immediately contain
- This could be a data breach

**Could wait until morning if:**
- Source IP is confirmed legitimate application server
- Identified as performance issue/bug, not malicious
- No evidence of data leaving network
- Successfully contained
- Clearly Low severity

**But**: Given "pattern matches data exfiltration signatures" - you should call CISO. Better to wake them for a false alarm than delay reporting a real breach.
</details>

---

**Scenario 2: The Customer Call**

Tuesday, 10:00 AM. Customer Success forwards you a call from a major customer (TeliaCompany, one of our largest SaaS customers):

> "We just received a notification from our security team that one of your IP addresses (185.90.45.12) has been flagged for port scanning activity targeting our network. This occurred yesterday between 14:00-16:00. Can you explain what's happening? We're evaluating whether to suspend our contract until this is resolved."

You check: 185.90.45.12 is one of Swedwise's Communications platform web servers.

**Question 2a**: How do you respond to the customer (your immediate verbal response)?

<details>
<summary>Suggested Response</summary>

**Immediate Response:**

"Thank you for bringing this to our attention immediately. This is concerning and we take it very seriously. Let me confirm what we know:

1. That IP address is one of our Communications platform web servers
2. Port scanning activity from our infrastructure is NOT normal or authorized
3. We're treating this as a potential security incident

Here's what I'm doing right now:
- Opening a Critical security incident investigation
- Involving our CISO and IR team immediately
- Isolating the server for investigation
- We'll determine if this system was compromised

I'll have our CISO contact you within the next hour with initial findings. We'll be completely transparent about what we find.

Can I get the contact details for your security team so we can coordinate?"

**Reasoning**: Acknowledge, take seriously, commit to action, be transparent, escalate immediately.
</details>

**Question 2b**: What are your next technical investigation steps?

<details>
<summary>Suggested Response</summary>

1. **Isolate 185.90.45.12 from network** - Prevent further scanning/damage
2. **Review server logs**:
   - Web server access logs
   - System authentication logs
   - Process execution logs
   - Network connection logs

3. **Check for compromise indicators**:
   - Unauthorized accounts
   - Suspicious processes
   - Web shell or backdoors
   - Modified system files
   - Scheduled tasks

4. **Assess blast radius**:
   - Are other servers affected?
   - Is customer data on this server?
   - What access did this server have?

5. **Evidence preservation**:
   - Create disk image before cleanup
   - Preserve all logs
   - Document findings with timestamps

6. **Root cause investigation**:
   - How was server compromised?
   - When did compromise occur?
   - What was exfiltrated/accessed?
</details>

**Question 2c**: Draft a follow-up email to the customer (2 hours later, after initial investigation).

<details>
<summary>Suggested Response</summary>

```
Subject: Security Incident Update - Port Scanning Activity

Dear [Customer Security Contact],

Thank you for your patience. Here's our initial investigation update regarding
the port scanning activity from 185.90.45.12:

FINDINGS:
Our investigation has confirmed that web server 185.90.45.12 was compromised
on [date] at approximately [time]. The attacker installed scanning tools and
used our server to conduct reconnaissance against external networks, including
yours.

CUSTOMER DATA IMPACT:
[Either: "This server did not store or process any customer data. The incident
is isolated to our infrastructure and your data was not affected."

OR: "This server processed communications data. We are conducting a thorough
audit to determine if any customer data was accessed. We will have a complete
assessment within 24 hours."]

ACTIONS TAKEN:
- Server immediately isolated and removed from production
- Attacker access terminated
- Forensic investigation underway
- All similar servers scanned for compromise (none found)
- Enhanced monitoring implemented

NEXT STEPS:
- Complete forensic analysis by [date]
- Full post-incident report delivered by [date]
- Security review and remediation plan by [date]

We deeply apologize for this incident. We're treating this with the utmost
seriousness and will implement additional security measures to prevent
recurrence.

Our CISO [name] is available to discuss this with your security team at your
convenience.

Sincerely,
[CISO Name]
Swedwise AB
[Contact details]
```
</details>

---

## Completion and Next Steps

Congratulations on completing the Incident Response Team Training!

### What You've Learned

You should now be able to:
- ✓ Explain incident response roles and team structure
- ✓ Classify incident severity correctly
- ✓ Follow the incident response lifecycle
- ✓ Conduct initial triage and escalation
- ✓ Apply appropriate containment strategies
- ✓ Preserve evidence properly
- ✓ Communicate during incidents (internal, customer, regulatory)
- ✓ Conduct post-incident reviews
- ✓ Apply learnings to prevent recurrence

### Assessment

You must pass the knowledge assessment with 85% or higher to complete this training.

**Assessment Format:**
- 15 multiple choice questions (Section A)
- 2 scenario-based questions (Section B)
- 85% passing score
- 2 attempts allowed

### After Certification

**Annual Recertification**: This training must be refreshed annually

**Ongoing Development:**
- Participate in quarterly tabletop exercises
- Attend post-incident reviews (even if not involved)
- Review incident summaries monthly
- Stay updated on threat intelligence
- Practice IR skills through simulations

### Additional Resources

**Documents to Bookmark:**
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-ISMS-POL-001: Information Security Policy
- [TBD] Incident Response Quick Reference Guide
- [TBD] Incident Communication Templates

**Contact Information:**
- CISO: [Name, email, phone]
- IT Operations Lead: [Name, email, phone]
- Security Hotline: [TBD]
- Email: security@swedwise.se

### Need Help?

**Questions about this training:**
Contact: [Training coordinator]

**Questions about incident response:**
Contact: CISO

**Report a security incident:**
- Email: security@swedwise.se
- Teams: #security-incidents
- Phone: [TBD - Security hotline]

**Remember**: When in doubt, report it. Better to investigate a false alarm than miss a real incident.

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO/Training Lead] | Initial training creation | [TBD - CISO] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This training is part of Swedwise AB's Information Security Management System (ISMS) and compliance with ISO 27001:2022. All designated IR team members must complete this training and pass the assessment.*
