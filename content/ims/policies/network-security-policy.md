---
document_id: SW-ISMS-POL-010
title: Network Security Policy
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
  - SW-ISMS-POL-009
---

# Network Security Policy

## 1. Purpose

This policy establishes requirements for securing Swedwise AB's network infrastructure, connections, and communications. It defines controls to protect networks from unauthorized access, misuse, and security threats while enabling business operations and maintaining appropriate levels of availability and performance.

The policy supports ISO 27001:2022 controls (Annex A 8.20-8.23) and ensures network security aligns with business requirements, risk tolerance, and regulatory obligations.

## 2. Scope

This policy applies to:

- All Swedwise networks including corporate offices, remote access, and SaaS platform infrastructure
- All network devices including routers, switches, firewalls, wireless access points, and network appliances
- All network connections including Internet, VPN, partner connections, and customer site connections
- All Swedwise employees, contractors, consultants, and third parties accessing Swedwise networks
- Office networks (Karlstad HQ, Stockholm, Uddevalla)
- Remote access from home offices, customer sites, and public locations
- SaaS platform network architecture and security controls
- Cloud infrastructure networking (Kubernetes, virtual networks, security groups)

This policy covers both physical networks and virtualized/cloud network infrastructure.

## 3. Network Security Principles

### 3.1 Defense in Depth

Network security uses multiple layers:
- Perimeter security (firewalls, Internet gateways)
- Network segmentation (VLANs, subnets, security zones)
- Access controls (authentication, authorization)
- Monitoring and detection (IDS/IPS, logging)
- Encryption (VPN, TLS)

### 3.2 Least Privilege Network Access

- Default deny approach: Traffic blocked unless explicitly permitted
- Minimum necessary network access granted
- Network access based on business need and risk assessment
- Unnecessary services and ports disabled

### 3.3 Network Segmentation

Networks are segmented to:
- Isolate sensitive systems and data
- Contain security incidents
- Enforce different security policies for different zones
- Limit lateral movement by attackers
- Support compliance requirements

### 3.4 Secure by Default

- Network devices configured securely from deployment
- Unnecessary features and services disabled
- Default passwords changed immediately
- Security updates applied promptly
- Secure protocols used (SSH not Telnet, HTTPS not HTTP)

## 4. Network Architecture

### 4.1 Network Segmentation and Zones

**Corporate Office Networks:**

Segmented into security zones with different trust levels:

1. **External/Internet Zone**: Untrusted public Internet
   - All traffic inspected at perimeter
   - Incoming traffic restricted to required services
   - Outgoing traffic filtered for data loss prevention

2. **DMZ (Demilitarized Zone)**: Public-facing services
   - Web servers, email gateways, VPN endpoints
   - Restricted access to internal networks
   - Enhanced monitoring and logging
   - [TBD - if DMZ hosts are needed]

3. **Corporate Network**: General business operations
   - User workstations and productivity applications
   - Access to general business systems
   - Standard security controls

4. **Secure Network**: Sensitive systems and data
   - HR systems, financial systems, development environments
   - Administrative access to infrastructure
   - Restricted access based on role and need
   - Enhanced logging and monitoring

5. **Guest Network**: Visitor and guest access
   - Isolated from corporate networks
   - Internet access only (no internal resources)
   - Bandwidth and usage limitations

**Segmentation Controls:**
- VLANs for logical network separation
- Firewalls or Access Control Lists (ACLs) between zones
- Routing policies enforcing zone boundaries
- No direct routing from guest to corporate networks

### 4.2 SaaS Platform Network Architecture

**Multi-Tenant Isolation:**
- Logical network segmentation between customer environments
- Network policies preventing cross-tenant communication
- Kubernetes network policies for pod-to-pod isolation
- Encrypted traffic between services

**SaaS Network Zones:**

1. **Internet-Facing Zone**: API gateways, load balancers
   - TLS termination
   - DDoS protection
   - Web application firewall (WAF)

2. **Application Zone**: Application services
   - Application servers and containers
   - Restricted inbound access from Internet-facing zone only
   - Outbound access to database and external services

3. **Data Zone**: Databases and persistent storage
   - No direct Internet access
   - Access only from application zone
   - Encrypted connections
   - Backup network separation

4. **Management Zone**: Administrative access
   - Infrastructure management tools
   - Monitoring and logging systems
   - Jump hosts for administrative access
   - Multi-factor authentication required

**Traffic Flow Controls:**
- North-south traffic (client to platform) through API gateway
- East-west traffic (service to service) controlled by network policies
- Database access restricted to authorized application services
- Egress filtering for outbound connections

## 5. Firewall Management

### 5.1 Firewall Requirements

All networks protected by firewalls:

**Perimeter Firewalls:**
- Deployed at Internet connection points
- Stateful inspection of traffic
- Intrusion prevention capabilities (IPS) where practical
- Logging all blocked and permitted connections
- Redundant/high-availability configuration for critical connections

**Internal Firewalls:**
- Between security zones
- Enforcing segmentation policies
- Preventing lateral movement

**Host-Based Firewalls:**
- Enabled on servers and workstations
- Configured to allow only necessary services
- Centrally managed where possible

### 5.2 Firewall Rules and Change Management

**Firewall Rule Requirements:**
- Business justification documented
- Source, destination, port, and protocol specified
- Default deny policy (explicit allow rules only)
- Rules reviewed and approved before implementation
- Temporary rules have expiration dates

**Rule Review:**
- Firewall rules reviewed [TBD - e.g., quarterly]
- Unused or outdated rules removed
- Rule cleanup performed regularly
- Review documented with date and reviewer

**Change Management:**
- Firewall changes follow change management process [TBD - SW-ISMS-PRO-004]
- Emergency changes permitted with post-implementation review
- All changes logged with date, requester, approver, and purpose
- Configuration backups before changes
- Rollback plan for significant changes

**Prohibited Rules:**
- "Any-any" rules (allow all traffic)
- Overly broad rules without business justification
- Rules allowing access to unused services
- Rules bypassing security controls

### 5.3 Firewall Monitoring

Firewalls generate logs for:
- All blocked connection attempts
- All permitted connections (for critical systems)
- Configuration changes
- Authentication events
- System health and performance

Logs are:
- Sent to central log management system
- Retained per logging policy (SW-ISMS-POL-011)
- Reviewed for security incidents and anomalies
- Available for incident investigation

## 6. Remote Access Security

### 6.1 VPN Access

Remote access to internal networks requires VPN:

**VPN Requirements:**
- Strong encryption (see SW-ISMS-POL-009: Cryptographic Controls Policy)
- Multi-factor authentication (MFA) mandatory
- Per-user VPN accounts (no shared credentials)
- VPN client from approved vendor
- Company-managed device required
- VPN session logging and monitoring

**VPN Protocols:**
- Approved: IPsec, OpenVPN, WireGuard, or equivalent
- Minimum encryption: AES-256
- Deprecated: PPTP, L2TP without IPsec

**VPN Access Control:**
- VPN access granted per access control policy (SW-ISMS-POL-002)
- VPN users see only resources required for their role
- Split tunneling permitted only with risk assessment and approval
- Full tunneling (all traffic through VPN) preferred for sensitive access

**VPN Monitoring:**
- Active VPN connections monitored
- Connection anomalies investigated (unusual times, locations, volume)
- Failed authentication attempts tracked
- VPN access logs reviewed periodically

### 6.2 Remote Desktop and Administrative Access

Remote administrative access to systems:

- VPN connection required before accessing internal systems
- Jump host/bastion host for administrative access to critical systems
- Multi-factor authentication for privileged remote access
- Session recording for critical administrative sessions
- Time-based access restrictions where practical
- No direct RDP/SSH exposure to Internet

**Prohibited Remote Access:**
- Direct exposure of RDP, SSH, or administrative ports to Internet without VPN
- Unencrypted remote access protocols (Telnet, VNC without encryption)
- Remote access from untrusted devices
- Use of consumer remote access tools for business systems (TeamViewer, AnyDesk, etc. without approval)

### 6.3 Cloud and SaaS Access

Access to cloud platforms and SaaS applications:

- HTTPS/TLS for all connections
- Multi-factor authentication required
- Conditional access policies based on device, location, risk
- Approved devices and browsers
- Session timeouts configured
- Privileged access separate from standard access

## 7. Wireless Network Security

### 7.1 Corporate Wireless Networks

Corporate WiFi secured with:

**Encryption:**
- WPA3-Enterprise (preferred) or WPA2-Enterprise minimum
- WPA3/WPA2-Personal acceptable for small offices with strong passphrase
- WEP and WPA-Personal deprecated for corporate use

**Authentication:**
- 802.1X authentication with RADIUS for corporate WiFi
- Individual user credentials or certificate-based authentication
- No shared WiFi passwords for corporate network access
- Guest WiFi uses separate authentication (see Section 7.3)

**Access Control:**
- Corporate WiFi access follows access control policy
- WiFi access requests documented and approved
- WiFi credentials removed when user leaves or no longer requires access

**Configuration:**
- SSID broadcast enabled or disabled based on office policy
- Default SSID and passwords changed
- WiFi management interface not accessible from WiFi network
- Strong encryption keys and regular rotation [TBD - frequency]

### 7.2 Wireless Network Segmentation

**Corporate WiFi:**
- Access to corporate network resources
- Same security controls as wired network
- VLAN separation from guest WiFi

**Guest WiFi:**
- Internet-only access (no corporate resources)
- Isolated from corporate network
- Bandwidth and usage limitations
- Acceptable Use Policy displayed and acknowledged
- Optional: captive portal with registration

**IoT/Device WiFi (if applicable):**
- Separate network for IoT devices (printers, smart devices)
- Restricted access and monitoring
- Regular security assessment of IoT devices

### 7.3 Rogue Access Point Detection

Measures to detect unauthorized wireless networks:

- Periodic wireless network scans
- Rogue access point detection tools where available
- Staff awareness to report unauthorized devices
- Physical inspection of offices for unauthorized equipment
- Investigation and removal of unauthorized wireless devices

### 7.4 Employee Personal WiFi Hotspots

Personal mobile hotspots on Swedwise devices:

- Permitted for legitimate business needs when corporate network unavailable
- Strong password required
- Hotspot name should not identify Swedwise
- Hotspot disabled when not in use
- Company devices connecting must use VPN for sensitive access

## 8. Network Monitoring and Logging

### 8.1 Network Monitoring

Network traffic monitored for:

- Unauthorized access attempts
- Anomalous traffic patterns or volumes
- Malware and command-and-control communications
- Data exfiltration attempts
- Performance and availability issues
- Policy violations

**Monitoring Tools:**
- Firewall logs and alerts
- Intrusion Detection/Prevention Systems (IDS/IPS) where deployed
- Network flow analysis (NetFlow, sFlow)
- Security Information and Event Management (SIEM)
- Cloud platform security monitoring tools

**Alerts:**
- Critical security events generate immediate alerts
- Alerts triaged and investigated per incident management procedure
- Alert tuning to minimize false positives
- Escalation procedures for confirmed incidents

### 8.2 Network Logging

Network devices log events including:

**Firewall and Router Logs:**
- All blocked connection attempts
- Permitted connections (for sensitive zones)
- Configuration changes
- Authentication events
- System errors and warnings

**VPN Logs:**
- Connection attempts (successful and failed)
- User authentication events
- Session start/end times
- Data transferred per session

**WiFi Logs:**
- User authentication events
- Connected devices
- Rogue access point detections

**Logs are:**
- Sent to centralized log management system
- Protected from unauthorized modification
- Retained per logging policy (SW-ISMS-POL-011)
- Backed up regularly
- Reviewed for security events and anomalies

## 9. Network Device Management

### 9.1 Network Device Hardening

All network devices (routers, switches, firewalls, access points) must be:

**Securely Configured:**
- Default passwords changed immediately
- Unnecessary services and protocols disabled
- Secure management protocols only (SSH not Telnet, HTTPS not HTTP)
- SNMP secured (SNMPv3 with authentication, or disabled)
- Management interfaces not accessible from untrusted networks
- Banner warnings displayed on login

**Authentication and Access:**
- Strong passwords or certificate-based authentication
- Multi-factor authentication for administrative access where supported
- Role-based access control for administrative functions
- Shared administrative accounts avoided (individual accounts preferred)

**Updates and Patching:**
- Security updates applied per patch management procedure
- Critical vulnerabilities patched within [TBD - e.g., 30 days]
- Firmware and software versions tracked
- End-of-life devices replaced or isolated

### 9.2 Configuration Management

Network device configurations:

- Documented and maintained in configuration management system
- Backed up before and after changes
- Version controlled
- Changes follow change management process
- Configuration baselines defined and enforced
- Regular audits to detect configuration drift

**Configuration Backups:**
- Automated daily backups
- Stored securely with encryption
- Tested for restoration periodically
- Retained per retention policy

### 9.3 Physical Security of Network Devices

Network infrastructure physically secured:

- Routers, switches, and firewalls in locked server rooms or network closets
- Physical access limited to authorized personnel
- Console access secured (passwords, locked console)
- Cabling protected from tampering
- Unauthorized devices detected and removed

See SW-ISMS-POL-008: Physical Security Policy for detailed requirements.

## 10. Network Services and Protocols

### 10.1 Approved Network Services

**Permitted Services:**
- HTTPS (TCP 443) for web applications
- SSH (TCP 22) for secure remote access
- DNS (UDP/TCP 53) for name resolution
- NTP (UDP 123) for time synchronization
- Email protocols (SMTP, IMAP, POP3 with TLS)
- VPN protocols (IPsec, OpenVPN, WireGuard)
- Cloud service APIs (with authentication and encryption)

**Restricted Services (require approval):**
- RDP (TCP 3389) – VPN required, not exposed to Internet
- SMB/CIFS (TCP 445) – internal networks only, not Internet-exposed
- FTP/SFTP – SFTP preferred, FTP only with justification
- Database ports (MySQL, PostgreSQL, SQL Server) – access controlled, not Internet-exposed

**Prohibited Services:**
- Telnet (TCP 23) – unencrypted remote access
- FTP (TCP 20/21) – unencrypted file transfer (use SFTP or FTPS)
- TFTP (UDP 69) – insecure file transfer
- HTTP (TCP 80) for administrative interfaces
- SNMP v1/v2c (UDP 161) – insecure monitoring protocol

### 10.2 Network Time Synchronization

Accurate time essential for logging and security:

- All systems synchronized to authoritative time source
- Internal NTP servers for corporate networks
- NTP traffic permitted through firewalls
- Time drift monitored and corrected
- Time zone consistently configured

## 11. DNS Security

### 11.1 DNS Configuration

**Internal DNS:**
- Authoritative DNS servers for internal domains
- Recursive DNS servers for client resolution
- DNS zone transfers restricted to authorized servers
- DNSSEC implementation considered

**External DNS:**
- Authoritative DNS hosted with reputable provider
- DDoS protection for DNS infrastructure
- DNS records reviewed for accuracy
- SPF, DKIM, DMARC records for email security
- DNS monitoring for unauthorized changes

### 11.2 DNS Filtering

DNS filtering implemented to block:
- Known malicious domains
- Phishing sites
- Malware distribution sites
- Command-and-control servers
- Inappropriate content per acceptable use policy

DNS filtering logs reviewed for security events.

## 12. SaaS Platform Network Security

### 12.1 Cloud Network Architecture

**Virtual Private Cloud (VPC) / Virtual Network:**
- Private IP address space for SaaS platform
- Subnets for different tiers (web, application, database)
- Internet gateway for public-facing services only
- NAT gateway for outbound connections from private subnets

**Security Groups / Network Security Groups:**
- Stateful firewall rules per resource
- Default deny with explicit allow rules
- Least privilege access
- Regular review and cleanup

**Network Policies (Kubernetes):**
- Pod-to-pod communication controls
- Namespace isolation
- Ingress and egress policies
- Zero-trust network model

### 12.2 DDoS Protection

Protection against Distributed Denial of Service attacks:

- Cloud provider DDoS protection services enabled
- Rate limiting on API endpoints
- Traffic filtering for malicious patterns
- Incident response plan for DDoS attacks
- Redundancy and scalability to absorb attacks

### 12.3 Web Application Firewall (WAF)

WAF deployed for customer-facing services:

- Protection against OWASP Top 10 vulnerabilities
- SQL injection and cross-site scripting prevention
- Rate limiting and bot protection
- Custom rules for known attack patterns
- Logging and alerting on attacks

### 12.4 API Security

APIs secured with:

- Authentication (API keys, OAuth, JWT)
- Authorization (scope and permission verification)
- Rate limiting per customer/tenant
- Input validation and sanitization
- TLS encryption for all API traffic
- API gateway for centralized control

## 13. Partner and Third-Party Network Connections

### 13.1 Third-Party Network Access

Third parties requiring network access:

- Business justification and approval required
- Security assessment before granting access
- Access limited to specific systems/data
- Separate VPN or dedicated connection
- Activity monitored and logged
- Access removed promptly when no longer needed

**Agreements:**
- Security requirements in contracts
- Confidentiality and acceptable use terms
- Incident notification obligations
- Right to audit network access

### 13.2 Customer Site Connections

Consultants connecting from customer sites:

- Follow customer network security policies
- Use Swedwise VPN to access Swedwise resources
- Separate Swedwise and customer credentials
- No bridging of Swedwise and customer networks
- Report customer network security concerns

## 14. Network Security Incident Response

Network security incidents include:

- Unauthorized network access attempts
- Network intrusion or compromise
- Denial of service attacks
- Malware propagation across network
- Data exfiltration via network
- Rogue devices on network
- Firewall or IDS/IPS alerts

**Response:**
- Incidents reported and handled per SW-ISMS-PRO-002: Incident Management Procedure [TBD]
- Network forensics (logs, traffic captures) preserved
- Affected systems isolated from network if necessary
- Vulnerabilities remediated
- Lessons learned incorporated into policy updates

## 15. Roles and Responsibilities

### Chief Information Security Officer (CISO)

- Overall accountability for network security policy
- Approval of network architecture changes affecting security
- Oversight of network security monitoring
- Exception approval for network security requirements
- Review of network security incidents and trends

### IT Operations / Network Administrators [TBD - if separate role]

- Implementation and maintenance of network security controls
- Firewall and network device management
- Network monitoring and incident detection
- Configuration management and backups
- Vendor coordination for network services
- Network security documentation

### Cloud/Infrastructure Engineers

- SaaS platform network architecture and security
- Cloud network configuration (VPC, security groups)
- Kubernetes network policies
- Cloud security monitoring and logging
- Infrastructure as Code for network configurations

### System Owners / Application Owners

- Defining network access requirements for their systems
- Approving network access requests
- Monitoring for security events affecting their systems
- Coordinating with network team for changes

### All Users

- Using approved VPN for remote access
- Not connecting unauthorized devices to corporate networks
- Reporting suspicious network activity
- Following wireless network security requirements
- Not bypassing network security controls

## 16. Monitoring and Compliance

### 16.1 Network Security Assessment

Network security assessed through:

- Quarterly firewall rule reviews
- Annual network architecture review
- Vulnerability scanning of network devices
- Penetration testing including network layer
- Wireless network security assessments
- Network configuration audits
- Third-party security assessments

**Metrics:**
- Firewall rule count and complexity
- Failed VPN authentication attempts
- Network security incidents
- Patch compliance for network devices
- Rogue access point detections

### 16.2 Compliance Verification

Network security compliance verified through:
- Internal audits
- Log review for policy violations
- Configuration compliance scanning
- External assessments for ISO 27001 compliance
- Customer security questionnaires and audits

## 17. Exceptions

Temporary exceptions to network security requirements may be granted when:

- Technical limitations prevent implementation
- Business justification and risk assessment documented
- Compensating controls implemented
- Exception approved by CISO
- Exception time-limited with remediation plan

Common exception scenarios:
- Legacy systems requiring outdated protocols
- Third-party connections with specific requirements
- Emergency access during incident response
- Pilot projects requiring temporary network changes

Exceptions are documented, reviewed quarterly, and tracked for closure.

## 18. Consequences of Non-Compliance

Violations of network security policy may result in:

- Network access suspended or revoked
- Security incident investigation
- Disciplinary action for negligent or willful violations
- Legal action if malicious activity involved
- Termination of employment or contract

Non-compliance creating security risks is treated as a security incident and investigated immediately.

## 19. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-002: Access Control Policy
- SW-ISMS-POL-009: Cryptographic Controls Policy
- SW-ISMS-POL-008: Physical Security Policy
- SW-ISMS-POL-011: Logging and Monitoring Policy
- SW-ISMS-POL-003: Acceptable Use Policy

**Procedures:**
- [TBD - SW-ISMS-PRO-002: Incident Management Procedure]
- [TBD - SW-ISMS-PRO-004: Change Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Patch Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Network Device Configuration Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-XXX: VPN Configuration Guideline]
- [TBD - SW-ISMS-GUI-XXX: Firewall Rule Request Guideline]
- [TBD - SW-ISMS-GUI-002: Remote Working Security Guideline]

**Supporting Documents:**
- [TBD - Network Architecture Diagram]
- [TBD - Firewall Rule Matrix]
- [TBD - Approved Network Protocols and Services]
- [TBD - Network Device Inventory]

## 20. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*
