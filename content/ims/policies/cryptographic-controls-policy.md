---
document_id: SW-ISMS-POL-009
title: Cryptographic Controls Policy
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

# Cryptographic Controls Policy

## 1. Purpose

This policy establishes requirements for the use of cryptographic controls to protect the confidentiality, integrity, and authenticity of Swedwise AB's information assets. It defines when and how encryption must be used, approved cryptographic algorithms and protocols, and key management principles to ensure consistent and effective protection.

The policy supports ISO 27001:2022 controls (Annex A 8.24) and ensures cryptographic controls meet business, legal, and regulatory requirements including GDPR.

## 2. Scope

This policy applies to:

- All Swedwise employees, contractors, consultants, and third parties handling Swedwise information
- All information systems, applications, and devices owned, managed, or used by Swedwise
- All sensitive data at rest, in transit, and in processing
- Cryptographic functions including encryption, hashing, digital signatures, and authentication
- Key management throughout the cryptographic key lifecycle
- SaaS platform infrastructure and customer data protection
- Cloud services and third-party systems handling Swedwise or customer data

This policy covers cryptographic controls for:
- Data protection (confidentiality)
- Data integrity verification
- Authentication and identity verification
- Non-repudiation where required

## 3. Cryptographic Control Principles

### 3.1 Risk-Based Application

Cryptographic controls are applied based on:
- Data classification and sensitivity
- Legal and regulatory requirements
- Contractual obligations
- Business risk assessment
- Performance and operational considerations

### 3.2 Defense in Depth

Cryptography is one layer of security:
- Used in combination with access controls, logging, and monitoring
- Does not replace other security controls
- Applied at multiple layers (application, storage, network, transport)

### 3.3 Standards-Based Approach

Swedwise uses:
- Industry-standard, well-reviewed cryptographic algorithms
- Current cryptographic protocols and implementations
- Vendor-supported encryption solutions where practical
- Open standards rather than proprietary encryption where possible

Swedwise does not develop custom cryptographic algorithms.

### 3.4 Future-Proofing

Cryptographic controls are:
- Reviewed regularly for continued effectiveness
- Updated as algorithms are deprecated or vulnerabilities discovered
- Designed with crypto-agility to allow algorithm replacement
- Monitored for emerging threats (e.g., quantum computing impacts)

## 4. Encryption Requirements

### 4.1 Data at Rest

**Mandatory Encryption:**

The following data must be encrypted at rest:

- **Customer data**: All customer information, regardless of classification
- **Personal data (GDPR)**: All personal information about identifiable individuals
- **Restricted data**: Passwords, API keys, secrets, cryptographic keys
- **Confidential business data**: Financial records, contracts, strategic documents, source code
- **Backup data**: All backups containing sensitive information
- **Portable devices**: All laptops, tablets, smartphones, USB drives, external storage
- **Database containing sensitive data**: Customer databases, HR databases, financial systems
- **SaaS platform storage**: All customer data in the SaaS environment

**Encryption Methods:**

- **Full disk encryption (FDE)**: For laptops and mobile devices
  - Windows: BitLocker
  - macOS: FileVault
  - Linux: LUKS or dm-crypt

- **File-level or folder encryption**: For specific sensitive files
  - Operating system encryption features
  - Encrypted archives (7-Zip with AES-256)

- **Database encryption**: Transparent Data Encryption (TDE) or application-level encryption

- **Cloud storage encryption**: Platform-native encryption or customer-managed keys
  - Customer-managed encryption keys (CMEK) for sensitive data where supported

**Minimum Algorithm Requirements:**
- Symmetric encryption: AES-256 (AES-128 acceptable for lower-sensitivity data)
- Avoid: DES, 3DES, RC4, or any deprecated algorithms

**Exceptions:**
- Public information requiring no confidentiality protection
- Data with compensating controls providing equivalent protection
- Legacy systems pending migration (documented with risk acceptance and timeline)

### 4.2 Data in Transit

**Mandatory Encryption:**

Data in transit must be encrypted when:

- Transmitted over untrusted networks (Internet, public WiFi, customer networks)
- Containing sensitive or confidential information
- Crossing network security boundaries
- Transmitted to/from cloud services
- Accessed remotely by users or administrators

**Encryption Protocols:**

- **HTTPS/TLS**: For web applications and APIs
  - Minimum TLS 1.2 (TLS 1.3 preferred)
  - Strong cipher suites only (see Section 4.5)
  - Valid certificates from trusted CA

- **SSH**: For remote server access and file transfer
  - SSH version 2 only
  - Strong key exchange and encryption algorithms

- **VPN**: For remote access to internal networks
  - IPsec, OpenVPN, WireGuard, or equivalent
  - Strong encryption and authentication

- **Email encryption**: For sensitive information via email
  - TLS for transport security (opportunistic TLS minimum)
  - S/MIME or PGP for end-to-end encryption of highly sensitive emails

- **Secure file transfer**: For large files or batch transfers
  - SFTP, FTPS, or HTTPS
  - No unencrypted FTP

**Prohibited Protocols:**
- Unencrypted HTTP for sensitive data
- Telnet, FTP, or other cleartext protocols
- SSL 2.0, SSL 3.0, TLS 1.0, TLS 1.1
- Weak or deprecated VPN protocols (PPTP)

**SaaS Platform:**
- All customer API connections use TLS 1.2+
- Internal service-to-service communication encrypted where crossing trust boundaries
- Database connections encrypted
- Backup transmissions encrypted

### 4.3 Data in Use

**Encryption in Processing:**

Where technically feasible:
- Sensitive data decrypted only when required for processing
- In-memory encryption for highly sensitive operations
- Encrypted processing environments for sensitive workloads
- Secure enclaves or trusted execution environments for critical functions

**Application Security:**
- Applications handle encryption keys securely (not hardcoded)
- Decrypted data in memory cleared after use where practical
- Secure coding practices prevent key/data leakage
- Application logs do not contain unencrypted sensitive data

### 4.4 Email and Communication Encryption

**Standard Email:**
- Email servers configured for opportunistic TLS
- SPF, DKIM, and DMARC implemented for email integrity
- Sensitive information not sent via standard email where possible

**Sensitive Email Content:**
- Highly confidential information sent via:
  - End-to-end encrypted email (S/MIME, PGP)
  - Secure file sharing with access controls
  - Encrypted messaging platforms
- Passwords and credentials never sent via unencrypted email

**Instant Messaging:**
- Business instant messaging platforms with end-to-end encryption preferred
- Sensitive discussions not conducted over unencrypted consumer messaging apps

### 4.5 Approved Algorithms and Protocols

**Symmetric Encryption:**
- **Approved**: AES-256, AES-128, ChaCha20
- **Deprecated**: DES, 3DES, RC4, Blowfish

**Asymmetric Encryption:**
- **Approved**: RSA (4096-bit or 2048-bit), ECC (P-256 or higher)
- **Deprecated**: RSA < 2048 bits

**Hashing:**
- **Approved**: SHA-256, SHA-384, SHA-512, SHA-3, bcrypt, scrypt, Argon2
- **Deprecated**: MD5, SHA-1 (except for non-security purposes like checksums)

**TLS/SSL:**
- **Approved**: TLS 1.3 (preferred), TLS 1.2
- **Deprecated**: SSL 2.0, SSL 3.0, TLS 1.0, TLS 1.1

**TLS Cipher Suites (Examples of strong suites):**
- TLS_AES_256_GCM_SHA384 (TLS 1.3)
- TLS_CHACHA20_POLY1305_SHA256 (TLS 1.3)
- TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (TLS 1.2)
- Avoid: Cipher suites with NULL, EXPORT, RC4, DES, 3DES, MD5

**Digital Signatures:**
- **Approved**: RSA-PSS (2048-bit+), ECDSA (P-256+), EdDSA
- **Deprecated**: RSA-PSS < 2048 bits, DSA

This list is reviewed annually and updated as cryptographic standards evolve.

## 5. Key Management

### 5.1 Key Lifecycle

Cryptographic keys are managed throughout their lifecycle:

1. **Generation**: Keys generated using cryptographically secure random number generators
2. **Storage**: Keys stored securely (see Section 5.2)
3. **Distribution**: Keys distributed using secure channels
4. **Usage**: Keys used only for intended purpose
5. **Rotation**: Keys rotated periodically (see Section 5.3)
6. **Backup**: Keys backed up securely for recovery
7. **Destruction**: Keys securely destroyed when no longer needed

### 5.2 Key Storage and Protection

**Key Storage Requirements:**

- **Secrets management system**: Centralized vault for secrets and keys
  - Examples: HashiCorp Vault, Azure Key Vault, AWS KMS
  - Access controlled and logged
  - Keys never stored in plain text

- **Hardware Security Modules (HSM)**: For high-value keys
  - Considered for SaaS platform encryption keys
  - Used for certificate authority private keys

- **Operating system key stores**: For device encryption keys
  - Windows: TPM, Credential Manager
  - macOS: Keychain
  - Linux: kernel keyring

- **Application key stores**: Secure key storage within applications
  - Not embedded in source code
  - Environment variables or secure configuration for application secrets

**Prohibited Key Storage:**
- Plain text files in file systems
- Source code repositories
- Email or chat messages
- Documentation or wikis
- Unencrypted configuration files
- Shared drives without encryption and access control

**Key Protection:**
- Keys encrypted when stored (key encryption keys)
- Access to keys limited to authorized systems and personnel
- Key access logged and monitored
- Keys backed up securely separate from encrypted data

### 5.3 Key Rotation

Keys are rotated periodically to limit exposure:

**Rotation Frequency:**
- **High-risk keys** (production encryption, administrative access): Annually or more frequently
- **Certificates**: Before expiration (typically 1-2 years)
- **API keys**: Annually or when access patterns change
- **Service account credentials**: Annually or when personnel changes
- **User authentication keys**: When user leaves or role changes
- **Compromise**: Immediately when compromise suspected

**Rotation Process:**
1. Generate new key
2. Distribute new key to authorized systems/users
3. Switch to new key for new operations
4. Maintain old key for decryption of existing data as needed
5. Re-encrypt data with new key (if practical)
6. Securely destroy old key after retention period

### 5.4 Key Access and Authorization

Access to cryptographic keys:

- Limited to authorized personnel and systems
- Granted based on job role and business need
- Approved by [TBD - CISO or system owner]
- Documented and reviewed quarterly
- Logged with all access attempts
- Removed promptly when no longer needed

**Separation of Duties:**
- Key management functions separated where practical
- No single person has complete control of high-value keys
- Key escrow or split knowledge for critical keys

### 5.5 Key Recovery and Escrow

**Key Backup:**
- Critical encryption keys backed up securely
- Backups encrypted and stored separately from primary keys
- Recovery procedures tested periodically
- Recovery authorization requires [TBD - multiple approvals for high-value keys]

**Key Escrow:**
- Considered for keys protecting business-critical data
- Escrow key holders independent of key users
- Escrow access requires documented emergency and authorization
- Escrow keys rotated and audited

**Data Recovery:**
- Recovery procedures documented for encrypted data
- Regular testing of recovery procedures
- Recovery keys maintained for required retention periods
- Legacy encryption keys retained for decrypting archived data

### 5.6 Key Destruction

Keys are securely destroyed when:
- No longer needed for any purpose
- Encryption algorithm deprecated and data re-encrypted
- Retention period expired for associated data
- System or application decommissioned

**Destruction Methods:**
- Cryptographic erasure (destroying key encryption key)
- Secure deletion (overwriting) from storage
- HSM secure deletion functions
- Physical destruction of hardware containing keys
- Destruction logged with date, method, and responsible person

## 6. Certificates and Public Key Infrastructure (PKI)

### 6.1 Digital Certificates

**Certificate Usage:**
- TLS/SSL certificates for web services and APIs
- Code signing certificates for software distribution
- Email certificates (S/MIME) for encrypted/signed email
- VPN certificates for authentication
- Client certificates for mutual TLS authentication

**Certificate Sources:**
- Public certificates from trusted Certificate Authorities (CA)
- Internal PKI for internal services where appropriate
- Free certificates (Let's Encrypt) acceptable for non-critical services
- Extended Validation (EV) certificates considered for customer-facing services

**Certificate Management:**
- Certificate inventory maintained with expiration dates
- Automated renewal where possible
- Alerts for upcoming expirations (90, 60, 30, 7 days)
- Certificate revocation process defined
- Private keys for certificates protected per Section 5.2

**Certificate Requirements:**
- Minimum 2048-bit RSA or 256-bit ECC
- Valid from trusted CA in browser/OS trust stores
- Correct domain name and validity period
- Not expired, revoked, or self-signed for production services

### 6.2 Certificate Lifecycle

**Certificate Request:**
- Business justification and intended use documented
- Approved by system owner and CISO
- Private key generated securely (not by CA)
- Certificate Signing Request (CSR) submitted to approved CA

**Certificate Deployment:**
- Certificate installed with appropriate private key protection
- Certificate chain (intermediate certificates) included
- Certificate validation tested
- Monitoring configured for expiration

**Certificate Renewal:**
- Renewal initiated 30+ days before expiration
- New key pair generated for renewal (not reusing old keys)
- Old certificate revoked after successful renewal

**Certificate Revocation:**
- Certificates revoked when:
  - Private key compromised or suspected compromise
  - Service decommissioned
  - Organizational change requiring re-issuance
- Revocation requested from CA immediately
- Systems updated to trust revocation lists

## 7. Cryptography for SaaS Platform

### 7.1 Customer Data Encryption

**Encryption at Rest:**
- All customer data encrypted in databases
- Database encryption using TDE or application-level encryption
- Customer-managed keys offered where feasible
- Encryption enabled for all storage volumes
- Backups encrypted separately

**Encryption in Transit:**
- All customer API traffic uses TLS 1.2+
- Perfect Forward Secrecy (PFS) enabled
- Strong cipher suites configured
- Certificate pinning considered for critical services

**Multi-Tenancy Isolation:**
- Logical separation enforced through access controls
- Cryptographic isolation considered for high-sensitivity customers
- Customer data encrypted with customer-specific keys where practical

### 7.2 Infrastructure Encryption

**Kubernetes/Container Platform:**
- Secrets encrypted at rest in etcd
- Network policies and encryption for inter-pod communication
- Container image signing and verification

**Database Connections:**
- All database connections encrypted
- Database credentials rotated regularly
- Connection strings do not contain plain-text credentials

**Backup Encryption:**
- All backups encrypted before transmission
- Backup encryption keys managed separately from operational keys
- Backup restoration tested regularly

### 7.3 Key Management for SaaS

**Cloud Key Management:**
- Cloud provider KMS used for platform encryption
  - Azure Key Vault, AWS KMS, or Google Cloud KMS
- Hardware-backed key protection where available
- Keys do not leave secure boundaries

**Customer-Managed Keys (CMEK):**
- Offered for customers requiring key control
- Customer retains control of master encryption key
- Swedwise cannot access customer data without customer-provided key
- Key revocation = data access revocation

**Separation of Keys:**
- Customer data encrypted with customer-specific keys
- Swedwise internal data encrypted with separate keys
- Key separation enforced at infrastructure level

## 8. Compliance and Legal Considerations

### 8.1 Regulatory Compliance

Cryptographic controls support compliance with:

- **GDPR**: Data protection by design and default, breach notification
- **eIDAS**: Qualified electronic signatures and seals (if applicable)
- **Swedish Data Protection Act**: Appropriate security measures
- **Industry standards**: PCI DSS (if processing payment data), ISO 27001
- **Contractual requirements**: Customer-specific encryption requirements

### 8.2 Export Controls

Cryptographic software and technology may be subject to export controls:

- Review export regulations when deploying encryption internationally
- Ensure compliance with Swedish and EU export control laws
- Document use of encryption in products/services for export declarations

### 8.3 Legal Access to Encrypted Data

**Key Escrow and Law Enforcement:**
- Legal obligations to provide data in response to lawful requests
- Key escrow or recovery mechanisms to comply with legal obligations
- Legal counsel consulted for requests to access encrypted data
- Transparency reports considered for disclosure of data requests

**Data Retention:**
- Encryption keys retained as long as data must remain accessible
- Keys for archived/retained data not destroyed prematurely
- Decryption capability maintained throughout retention period

## 9. Roles and Responsibilities

### Chief Information Security Officer (CISO)

- Overall accountability for cryptographic controls policy
- Approval of cryptographic standards and algorithms
- Oversight of key management practices
- Exception approval for cryptographic requirements
- Review of cryptographic control effectiveness

### IT Operations / System Administrators [TBD]

- Implementation of encryption for systems and data
- Key generation, storage, and rotation
- Certificate management and renewal
- Monitoring encryption status and alerts
- Secure key destruction

### Application Developers

- Implementing encryption in applications following secure coding practices
- Using approved cryptographic libraries and APIs
- Not developing custom cryptographic algorithms
- Securely handling keys in application code
- Encrypting sensitive data at application level where required

### System Owners / Data Owners

- Determining encryption requirements for their systems/data
- Approving key access for their systems
- Ensuring data classification drives encryption decisions
- Participating in key recovery procedures

### Cloud/Infrastructure Engineers

- Configuring cloud encryption services
- Managing infrastructure encryption keys
- Implementing encryption for SaaS platform
- Ensuring encryption enabled for storage and transit

### All Staff

- Using encryption features on devices (BitLocker, FileVault)
- Protecting encryption passwords and keys
- Reporting lost devices with encrypted data
- Following email encryption guidelines for sensitive information
- Not attempting to bypass encryption controls

## 10. Monitoring and Compliance

### 10.1 Encryption Monitoring

Monitoring includes:
- Certificate expiration monitoring and alerting
- Encryption status verification for devices and systems
- TLS/SSL configuration scanning (e.g., SSL Labs, testssl.sh)
- Weak cipher detection and remediation
- Key access logging and review
- Encryption status dashboards for SaaS platform

### 10.2 Compliance Verification

Cryptographic controls verified through:
- Quarterly certificate inventory and expiration review
- Annual cryptographic algorithm review
- Key rotation compliance checks
- Vulnerability scanning for weak encryption
- Internal audits of encryption implementation
- Penetration testing including cryptographic controls
- SaaS platform encryption audits

**Metrics:**
- Percentage of devices with encryption enabled
- Certificate expiration incidents
- Weak cipher usage
- Encryption-related security events
- Key rotation compliance

### 10.3 Vulnerability Management

Cryptographic vulnerabilities addressed through:
- Monitoring security advisories for cryptographic vulnerabilities
- Patch management for cryptographic libraries and implementations
- Disabling deprecated algorithms and protocols
- Replacing weak encryption configurations
- Incident response for cryptographic compromise

## 11. Exceptions

Temporary exceptions to cryptographic requirements may be granted when:

- Technical limitations prevent encryption implementation
- Business justification and risk assessment documented
- Compensating controls implemented
- Exception approved by CISO
- Exception time-limited with remediation plan

Common exception scenarios:
- Legacy systems pending migration
- Third-party systems with limited cryptographic support
- Performance constraints requiring alternative controls
- Interoperability with customer systems requiring specific protocols

Exceptions are documented, reviewed quarterly, and tracked for remediation.

## 12. Consequences of Non-Compliance

Violations of cryptographic controls policy may result in:

- Immediate remediation required
- Security incident investigation
- Disciplinary action for negligent or willful violations
- Data breach notification if encryption failure leads to exposure
- Regulatory penalties for compliance violations

Non-compliance with encryption requirements for customer data is treated as a critical security incident.

## 13. Related Documents

**Policies:**
- SW-IMS-POL-001: Integrated Management System Policy
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-002: Access Control Policy
- SW-ISMS-POL-004: Data Protection Policy
- SW-ISMS-POL-008: Physical Security Policy
- SW-ISMS-POL-010: Network Security Policy

**Procedures:**
- [TBD - SW-ISMS-PRO-002: Incident Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Key Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Certificate Management Procedure]
- [TBD - SW-ISMS-PRO-XXX: Secure Disposal Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-XXX: Encryption Implementation Guideline]
- [TBD - SW-ISMS-GUI-XXX: TLS Configuration Guideline]
- [TBD - SW-DEV-GUI-XXX: Secure Coding Guideline]

**Supporting Documents:**
- [TBD - Approved Cryptographic Algorithms and Protocols]
- [TBD - Certificate Inventory]
- [TBD - Key Management Plan]

## 14. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial policy creation | [TBD - CEO name] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This policy is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this policy.*
