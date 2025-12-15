---
document_id: SW-ISMS-POL-008
title: Physical Security Policy
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
---

# Physical Security Policy

## 1. Purpose

This policy establishes requirements for protecting Swedwise AB's physical assets, facilities, and information from unauthorized physical access, damage, theft, and environmental threats. It ensures that appropriate physical security controls are implemented to support information security objectives and business continuity.

The policy supports ISO 27001:2022 controls (Annex A 7.1-7.14) and protects against physical threats to confidentiality, integrity, and availability of information assets.

## 2. Scope

This policy applies to:

- All Swedwise offices (Karlstad HQ, Stockholm, Uddevalla)
- All Swedwise employees, contractors, consultants, temporary staff, and visitors
- Third-party facilities housing Swedwise equipment or data (data centers, customer sites)
- All physical assets including IT equipment, storage media, documents, and facilities
- Home offices and remote working locations
- Equipment in transit or temporary storage
- Physical access to systems supporting the SaaS platform

This policy covers both permanent facilities and temporary work locations.

## 3. Physical Security Principles

### 3.1 Defense in Depth

Physical security uses multiple layers of controls:
- Perimeter security (building access)
- Internal zoning (secure areas within offices)
- Equipment protection (locks, cables, safes)
- Personnel controls (escorts, identification)
- Monitoring and detection (cameras, alarms, logging)

### 3.2 Proportionate Protection

Physical security measures are proportionate to:
- Value and sensitivity of assets protected
- Risk level of the location
- Business operational requirements
- Cost-effectiveness of controls

### 3.3 Environmental Awareness

Physical security addresses both intentional threats (theft, sabotage) and environmental threats (fire, flood, power failure).

## 4. Office and Facility Security

### 4.1 Perimeter Security

**Building Access:**
- Office buildings have controlled access during business hours
- After-hours access requires badge/key or building security approval
- External doors remain locked outside business hours
- Emergency exits are alarmed and monitored
- Reception or access control present during business hours

**Karlstad HQ (Primary Office):**
- Main entrance staffed or controlled during business hours
- Badge/key access for employees
- [TBD - specific controls based on building configuration]

**Stockholm and Uddevalla Offices:**
- Access control appropriate to office size and building type
- [TBD - specific controls based on office configuration]
- Coordination with building management for shared facilities

### 4.2 Visitor Management

All visitors to Swedwise offices must:

**Registration:**
- Sign in at reception or with host employee
- Provide name, company, purpose of visit, and time
- Display visitor badge while on premises
- Sign out when departing

**Escort Requirements:**
- Visitors escorted by authorized Swedwise employee at all times
- Visitors not left unattended in areas with access to sensitive information or systems
- Escort responsible for visitor's compliance with security requirements

**Exceptions:**
- Building maintenance and security personnel (escorted to secure areas only)
- Cleaning staff (after-hours access to general office areas, not secure areas)

**Visitor Log:**
- Maintained for [TBD - e.g., 12 months]
- Available for security incident investigation
- Reviewed periodically for unusual patterns

### 4.3 Secure Areas

**Definition:**
Areas containing critical or sensitive assets requiring additional protection:
- Server rooms and network equipment closets
- Secure storage for confidential documents and backup media
- Financial and HR records storage
- Areas containing customer confidential information
- [TBD - other secure areas based on office configuration]

**Access Controls:**
- Access limited to authorized personnel only
- Badge, key, or combination lock access with logging where practical
- Access list maintained and reviewed quarterly
- Visitor access requires prior authorization and escort
- Entry/exit logged manually or electronically

**Physical Protection:**
- Lockable doors with restricted key distribution
- No external windows or windows protected appropriately
- Environmental controls (temperature, humidity) for IT equipment
- Fire suppression and detection systems
- Water leak detection where relevant

**Authorization:**
- Access requests approved by [TBD - IT Manager/Facility Manager]
- Access granted based on job role and business need
- Temporary access for specific purposes time-limited
- Access reviewed quarterly and removed when no longer needed

### 4.4 Office Work Areas

**General Office Areas:**
- Clear desk policy enforced (see Section 5.1)
- No sensitive information left visible when unattended
- Lockable storage available for confidential materials
- Doors locked when last person leaves
- Windows closed and locked after hours on ground floor or accessible levels

**Meeting Rooms:**
- Whiteboards and flip charts cleaned after meetings involving sensitive topics
- No documents or materials left in rooms after meetings
- Confidential discussions held in rooms without external windows where practical
- Remote meeting security considerations (camera/microphone positioning)

### 4.5 Environmental Controls

**Fire Protection:**
- Smoke detectors, fire extinguishers, and alarms maintained per local regulations
- Fire suppression systems in server rooms and critical areas
- Emergency evacuation procedures posted and practiced
- Fire drills conducted [TBD - e.g., annually]

**Electrical and Power:**
- Critical systems protected by uninterruptible power supply (UPS)
- Electrical systems maintained and inspected per regulations
- Power capacity adequate for current and planned equipment
- Emergency power plans for extended outages

**Climate Control:**
- Server rooms and equipment areas maintain appropriate temperature and humidity
- Environmental monitoring with alerts for out-of-range conditions
- HVAC systems maintained regularly

**Water and Flood Protection:**
- Water leak detection in server rooms and storage areas
- Piping and plumbing routes avoid critical equipment where possible
- Emergency procedures for water intrusion
- Critical equipment and documents stored above floor level in flood-risk areas

## 5. Information and Asset Protection

### 5.1 Clear Desk and Clear Screen

**Clear Desk Policy:**

All staff must:
- Secure confidential documents when leaving desk unattended
- Lock documents in drawers, filing cabinets, or secure storage at end of day
- Not leave passwords, access codes, or keys visible
- Shred or securely dispose of sensitive papers no longer needed
- Store backup media, USB drives, and portable storage securely when not in use

**Clear Screen Policy:**

All staff must:
- Lock computer screen when leaving workstation (Windows+L, Ctrl+Cmd+Q)
- Configure automatic screen lock after [TBD - e.g., 5 minutes] of inactivity
- Position screens to prevent viewing by unauthorized persons (shoulder surfing)
- Use privacy filters on laptops in public spaces
- Log out of applications when finished, especially on shared computers

**Enforcement:**
- Managers promote clear desk/screen practices in their teams
- Periodic checks during security awareness campaigns
- Unlocked unattended computers may be locked by security personnel
- Repeated non-compliance addressed through performance management

### 5.2 Equipment Security

**Desktop Computers and Monitors:**
- Physically secured to desks where theft risk exists (cable locks)
- Asset tagged and recorded in inventory
- Positioned to prevent unauthorized viewing of screens
- Old equipment securely wiped before disposal or reuse

**Laptops and Mobile Devices:**
- Never left unattended in vehicles or public places
- Cable locks used in semi-public areas (customer sites, co-working spaces)
- Carrying cases avoid identifying company or device contents
- Full disk encryption required (see SW-ISMS-POL-009: Cryptographic Controls Policy)
- Lost or stolen devices reported immediately

**Servers and Network Equipment:**
- Located in secure areas with controlled access
- Physically secured in locked racks where practical
- Asset tagged with identification and ownership information
- Console access protected (passwords, locked when unattended)
- Removed from service securely (data wiped, documented)

**Portable Storage Media:**
- USB drives, external hard drives, backup tapes stored securely when not in use
- Encrypted when containing sensitive information
- Tracked in asset inventory if containing critical data
- Disposed of securely (physical destruction or certified wiping)

**Printers, Copiers, and Fax Machines:**
- Located in areas appropriate to sensitivity of materials printed
- Sensitive documents retrieved immediately from output trays
- Secure print features used for confidential documents
- Hard drives securely wiped before disposal or service
- Fax machines located in controlled areas (not public access)

### 5.3 Physical Media Handling

**Storage:**
- Confidential documents stored in lockable cabinets or secure rooms
- Backup media stored securely with access logging
- Off-site backup storage in secure facility with environmental controls
- Media encrypted or physically protected during storage

**Transportation:**
- Media containing sensitive data encrypted or physically secured during transport
- Hand-carried by trusted personnel or secure courier service
- Transportation logged with sender, recipient, date, and contents
- Recipient confirms receipt
- Media never shipped via untracked or insecure methods

**Disposal:**
- Paper documents with sensitive information cross-cut shredded or incinerated
- Hard drives and storage media physically destroyed or wiped using certified methods
- Disposal logged with asset ID, disposal method, date, and responsible person
- Third-party disposal services provide certificates of destruction
- No sensitive media placed in general waste or recycling

**Retention:**
- Media retained according to data retention requirements
- Media registers maintained showing location and contents
- Periodic verification that media is still readable and accessible

## 6. Working Outside Swedwise Offices

### 6.1 Remote Working and Home Offices

Staff working from home must:
- Follow SW-ISMS-GUI-002: Remote Working Security Guideline [TBD]
- Ensure family members or visitors cannot access Swedwise equipment or information
- Position screens away from windows and external view
- Lock equipment and documents when not present
- Use secure network connections (VPN, encrypted WiFi)
- Store equipment and documents securely

Home offices should have:
- Lockable room or storage for confidential materials
- Secure WiFi with strong password (see Network Security Policy)
- Separation of personal and work equipment where practical
- Family members educated not to access work equipment

### 6.2 Working at Customer Sites

Consultants working at customer sites must:

**Customer Policies:**
- Comply with customer physical security policies and procedures
- Wear customer-issued ID badges where required
- Follow customer visitor and access control procedures
- Report customer security incidents per customer procedures

**Swedwise Requirements:**
- Protect Swedwise information and assets while at customer sites
- Not leave Swedwise equipment unattended in customer areas
- Use cable locks for laptops in shared customer spaces
- Lock screens when away from workstation
- Secure Swedwise documents and materials
- Report any physical security concerns to Swedwise management

**Equipment:**
- Swedwise laptops and devices remain Swedwise property
- Full disk encryption protects data if equipment lost at customer site
- Equipment returned to Swedwise when assignment ends
- Customer data on Swedwise devices handled per data protection requirements

### 6.3 Public Spaces and Travel

When working in public spaces (airports, cafes, co-working spaces, hotels):

**Information Protection:**
- Privacy screens to prevent screen viewing
- Avoid discussing confidential information in public
- Do not leave equipment unattended even briefly
- Use VPN for all network connections
- Be aware of surroundings and potential surveillance

**Equipment Protection:**
- Keep laptops and devices with you at all times
- Use cable locks where available and appropriate
- Carry equipment in non-descript bags
- Do not check laptops in luggage when flying
- Backup important data before travel

**Travel Considerations:**
- Equipment may be subject to border searches (encrypt sensitive data)
- Use of public WiFi requires VPN
- Aware of heightened security risks in certain countries
- Report lost or stolen equipment immediately regardless of location

## 7. Equipment Lifecycle Security

### 7.1 Procurement and Deployment

New equipment:
- Sourced from approved vendors
- Inspected on receipt for tampering or damage
- Asset tagged and recorded in inventory
- Configured with security controls before deployment
- Assigned to responsible user or system owner

### 7.2 Maintenance and Repair

Equipment maintenance:
- Performed by authorized personnel or approved vendors
- Sensitive data backed up before maintenance
- Data removed or protected during repair by third parties
- Maintenance logged with date, person, and work performed
- Equipment inspected after maintenance for unauthorized changes

**On-Site Maintenance:**
- Third-party maintenance personnel escorted
- No unsupervised access to systems or data
- Maintenance work observed where practical

**Off-Site Repair:**
- Sensitive data removed before equipment leaves premises
- Equipment tracked during off-site repair
- Recipient and return confirmed
- Equipment inspected and verified on return

### 7.3 Decommissioning and Disposal

End-of-life equipment:
- Removed from production in controlled manner
- All data securely erased (see SW-ISMS-PRO-XXX: Secure Disposal Procedure [TBD])
- Removed from asset inventory
- Physically destroyed or disposed of through approved vendor
- Certificate of destruction obtained for sensitive systems
- Disposal logged and retained for audit

**Data Sanitization Methods:**
- Hard drives: Multi-pass overwrite or physical destruction
- SSDs and flash storage: Cryptographic erase or physical destruction
- Optical media: Shredded or incinerated
- Paper documents: Cross-cut shredded
- Printed circuit boards with storage: Physical destruction

## 8. SaaS Platform Physical Security

### 8.1 Data Center Security

The SaaS platform is hosted at [TBD - Entiros AB data center, Sweden]:

**Data Center Requirements:**
- SOC 2 or ISO 27001 certified facility
- 24/7 physical security and monitoring
- Multi-factor access control
- Environmental monitoring and controls
- Fire suppression and detection
- Redundant power and cooling
- Physical security audit rights in contract

**Swedwise Responsibilities:**
- Verify data center security controls annually
- Maintain list of authorized personnel with data center access
- Coordinate access requests through proper procedures
- Review data center access logs periodically
- Include physical security in vendor risk assessments

### 8.2 Equipment Location and Access

**Production Equipment:**
- Located in secure data center with controlled access
- Access limited to authorized Swedwise operations staff and data center personnel
- All access logged and reviewed
- Equipment clearly labeled as Swedwise property
- Decommissioned equipment data-wiped on-site before removal

**Development and Test Equipment:**
- May be located in Swedwise offices or cloud infrastructure
- Protected according to data sensitivity
- Not containing production customer data
- Access controls appropriate to risk level

## 9. Physical Security Incidents

### 9.1 Incident Reporting

Physical security incidents must be reported immediately:

**Incidents Include:**
- Unauthorized access to facilities or secure areas
- Lost or stolen equipment, keys, badges, or access cards
- Damaged or tampered equipment
- Environmental incidents (fire, flood, power failure)
- Security system malfunctions (alarms, locks, cameras)
- Suspicious persons or behavior
- Found documents or media in insecure locations

**Reporting:**
- Report to manager and CISO immediately
- For urgent incidents (break-in, theft), also contact local authorities
- Document incident details (time, location, description, witnesses)
- Preserve evidence where safe and practical

### 9.2 Incident Response

Physical security incidents are handled per SW-ISMS-PRO-002: Incident Management Procedure [TBD]:

1. **Immediate Response:** Contain incident, protect people and assets
2. **Assessment:** Determine scope and impact
3. **Investigation:** Gather facts, review logs, interview witnesses
4. **Remediation:** Address vulnerabilities, improve controls
5. **Documentation:** Record incident details, actions, and lessons learned
6. **Review:** Analyze for trends and improvement opportunities

**Lost/Stolen Equipment:**
- Remote wipe initiated for mobile devices if possible
- Passwords and access changed for affected systems
- Incident logged and investigated
- Data breach notification if sensitive data at risk
- Insurance claim if applicable

## 10. Monitoring and Compliance

### 10.1 Physical Security Monitoring

Where implemented, physical security systems include:
- Access control systems logging entry/exit to secure areas
- Video surveillance in sensitive areas (with privacy considerations)
- Intrusion detection and alarms
- Environmental monitoring (temperature, humidity, water)

**Monitoring Practices:**
- Logs reviewed periodically for anomalies
- Alerts responded to within [TBD - based on severity]
- Video footage retained for [TBD - e.g., 30 days] or longer if required for investigation
- Privacy considerations addressed (no surveillance of private areas)

### 10.2 Physical Security Assessments

Physical security is assessed through:
- Annual walkthrough inspections of all offices
- Periodic testing of access controls and alarms
- Review of security incident trends
- Internal audits
- Physical penetration testing if warranted by risk

**Assessment Checklist:**
- Access controls functioning properly
- Secure areas properly protected
- Clear desk/screen practices observed
- Visitor management followed
- Environmental controls operational
- Security equipment maintained
- Keys and access cards controlled
- Disposal practices secure

Findings are documented, prioritized, and remediated based on risk.

## 11. Roles and Responsibilities

### Chief Information Security Officer (CISO)

- Overall accountability for physical security policy
- Oversight of physical security controls
- Coordination with facility management
- Physical security incident response coordination
- Review of physical security assessments and improvements

### Facility Manager / Office Manager [TBD - if separate role exists]

- Day-to-day facility security management
- Coordination with building management and landlords
- Visitor management procedures
- Environmental control maintenance
- Physical security system maintenance
- Key and access card management

### IT Operations / System Administrators [TBD]

- Secure area access controls
- Equipment security and asset tracking
- Secure equipment disposal
- Data center coordination
- Physical security for IT infrastructure

### Managers

- Ensuring staff follow clear desk/screen policies
- Equipment security in their areas
- Visitor management when staff host visitors
- Reporting physical security concerns
- Promoting physical security awareness

### All Staff

- Following clear desk and clear screen practices
- Challenging unescorted visitors or unknown persons
- Protecting equipment and information
- Securing work areas when unattended
- Reporting physical security incidents
- Complying with visitor management procedures

### Reception / Front Desk [if applicable]

- Visitor registration and badge issuance
- Monitoring building access during business hours
- Directing visitors to appropriate areas
- Reporting suspicious persons or incidents

## 12. Exceptions

Temporary exceptions to physical security requirements may be granted when:

- Business justification documented and approved
- Risk assessed and accepted by CISO
- Compensating controls implemented
- Exception time-limited with review date
- Exception formally documented

Common exception scenarios:
- After-hours access for urgent business needs
- Temporary visitor access to normally restricted areas
- Equipment temporarily located in less secure areas
- Short-term workarounds during facility maintenance

Exceptions are reviewed and do not create permanent precedent.

## 13. Consequences of Non-Compliance

Violations of physical security policy may result in:

- Access privileges suspended or revoked
- Mandatory security retraining
- Disciplinary action up to and including termination
- Cost recovery for lost or stolen equipment due to negligence
- Legal action if criminal activity involved

Severity depends on:
- Intent (unintentional, negligent, malicious)
- Impact (data exposed, assets compromised, cost)
- Pattern (isolated incident vs. repeated violations)

## 14. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-002: Access Control Policy
- SW-ISMS-POL-009: Cryptographic Controls Policy
- SW-ISMS-POL-010: Network Security Policy

**Procedures:**
- [TBD - SW-ISMS-PRO-002: Incident Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Secure Disposal Procedure]
- [TBD - SW-ISMS-PRO-XXX: Asset Management Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-002: Remote Working Security Guideline]
- [TBD - SW-ISMS-GUI-004: Clear Desk and Clear Screen Guideline]

**Supporting Documents:**
- [TBD - Asset Inventory]
- [TBD - Secure Area Access List]
- [TBD - Visitor Log]
- [TBD - Physical Security Assessment Checklist]

## 15. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*
