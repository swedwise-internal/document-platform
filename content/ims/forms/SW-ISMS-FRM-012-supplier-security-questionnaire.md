---
document_id: SW-ISMS-FRM-012
title: Supplier Security Questionnaire
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: 2024-01-15
review_date: 2025-01-15
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-PRO-009
  - SW-ISMS-FRM-013
  - SW-IMS-POL-004
---

# Supplier Security Questionnaire

## Purpose

This questionnaire assesses the information security posture of suppliers, vendors, and service providers who will process, store, or have access to Swedwise information or systems. The assessment determines the supplier's security risk tier and required controls.

## Instructions

**For Swedwise Staff:**
1. Send this questionnaire to prospective suppliers during vendor selection
2. Request completion within 10 business days
3. Review responses for completeness and clarity
4. Follow up on unclear or concerning responses
5. Use responses to complete SW-ISMS-FRM-013 (Supplier Assessment Summary)

**For Suppliers:**
1. Complete all applicable sections honestly and thoroughly
2. Provide evidence or documentation where requested
3. Mark "N/A" if a question does not apply with brief explanation
4. Return completed questionnaire with any supporting documents
5. Update Swedwise if your security posture changes significantly

---

## Section 1: Company Information

| Field | Information |
|-------|-------------|
| **Company Name** | |
| **Company Address** | |
| **Country** | |
| **Website** | |
| **Primary Contact Name** | |
| **Contact Title** | |
| **Contact Email** | |
| **Contact Phone** | |
| **Questionnaire Completed By** | |
| **Completion Date** | |

---

### Organizational Details

| Field | Information |
|-------|-------------|
| **Year Established** | |
| **Number of Employees** | |
| **Industry** | |
| **Public/Private** | |
| **Parent Company** (if applicable) | |

---

### Service Details

**Service/product you will provide to Swedwise:**

```
[Describe the service or product]




```

**What Swedwise data will you access, process, or store?**

- ☐ No Swedwise data
- ☐ Public information only
- ☐ Internal business data
- ☐ Customer/personal data (GDPR applicable)
- ☐ Confidential business data
- ☐ Restricted/highly sensitive data

**Where will Swedwise data be stored/processed?**

- ☐ European Union
- ☐ EEA (European Economic Area)
- ☐ United States
- ☐ Other (specify country): _______________________
- ☐ Multiple locations (list): _______________________

---

## Section 2: Security Certifications and Compliance

### Certifications

**Does your organization hold any of the following certifications?**

| Certification | Status | Certificate Date | Expiry Date | Cert. Body | Copy Attached? |
|--------------|--------|-----------------|-------------|------------|----------------|
| ISO/IEC 27001 (ISMS) | ☐ Yes ☐ No ☐ In Progress | | | | ☐ Yes ☐ No |
| ISO 9001 (QMS) | ☐ Yes ☐ No ☐ In Progress | | | | ☐ Yes ☐ No |
| SOC 2 Type II | ☐ Yes ☐ No ☐ In Progress | | | | ☐ Yes ☐ No |
| ISO/IEC 27017 (Cloud) | ☐ Yes ☐ No ☐ In Progress | | | | ☐ Yes ☐ No |
| ISO/IEC 27018 (PII in Cloud) | ☐ Yes ☐ No ☐ In Progress | | | | ☐ Yes ☐ No |
| PCI DSS | ☐ Yes ☐ No ☐ In Progress | | | | ☐ Yes ☐ No |
| CSA STAR | ☐ Yes ☐ No ☐ In Progress | | | | ☐ Yes ☐ No |

**Other relevant certifications:**

```
[List any other security, privacy, or quality certifications]



```

---

### Compliance and Regulations

**Which regulations/standards does your organization comply with?**

- ☐ GDPR (General Data Protection Regulation)
- ☐ NIS Directive (Network and Information Security)
- ☐ CCPA (California Consumer Privacy Act)
- ☐ HIPAA (Health Insurance Portability and Accountability Act)
- ☐ PCI DSS (Payment Card Industry Data Security Standard)
- ☐ Industry-specific regulations (specify): _______________________
- ☐ Other: _______________________

**Last third-party security audit/assessment date:** _______________

**Audit conducted by:** _______________________

---

## Section 3: Information Security Management

### Security Organization

**Do you have a dedicated security function/role?**

- ☐ Yes - CISO or equivalent
- ☐ Yes - Security team
- ☐ Yes - Security officer (part-time)
- ☐ No - Security handled by IT
- ☐ No dedicated security function

**Security policies and procedures:**

- ☐ Documented information security policy
- ☐ Acceptable use policy
- ☐ Incident response procedure
- ☐ Business continuity/disaster recovery plan
- ☐ Data protection/privacy policy

**How often are security policies reviewed?** _______________________

---

### Risk Management

**Do you conduct regular information security risk assessments?**

- ☐ Yes - Annually
- ☐ Yes - More frequently than annually
- ☐ No
- ☐ Ad-hoc basis

**How do you manage identified risks?**

```
[Describe risk management process]




```

---

## Section 4: Access Control

### User Access Management

**How are user accounts and access rights managed?**

- ☐ Formal access request and approval process
- ☐ Role-based access control (RBAC)
- ☐ Principle of least privilege enforced
- ☐ Regular access reviews conducted
- ☐ Automated provisioning/de-provisioning

**Access review frequency:** _______________________

---

### Authentication

**What authentication methods do you use?**

- ☐ Username and password (with complexity requirements)
- ☐ Multi-factor authentication (MFA)
- ☐ Single sign-on (SSO)
- ☐ Biometric authentication
- ☐ Hardware tokens
- ☐ Other: _______________________

**Is MFA required for:**

| Access Type | MFA Required? |
|-------------|---------------|
| Remote/VPN access | ☐ Yes ☐ No ☐ N/A |
| Administrative access | ☐ Yes ☐ No ☐ N/A |
| Customer data access | ☐ Yes ☐ No ☐ N/A |
| Cloud services | ☐ Yes ☐ No ☐ N/A |

---

### Privileged Access

**How do you manage privileged/administrative access?**

- ☐ Dedicated privileged accounts (no shared admin accounts)
- ☐ Privileged Access Management (PAM) solution
- ☐ Enhanced logging of privileged activity
- ☐ Regular review of privileged access
- ☐ Just-in-time (JIT) privileged access

**Privileged access review frequency:** _______________________

---

## Section 5: Data Protection

### Data Classification

**Do you classify data based on sensitivity?**

- ☐ Yes - Formal classification scheme
- ☐ Yes - Informal classification
- ☐ No

**If Yes, describe your classification levels:**

```
[e.g., Public, Internal, Confidential, Restricted]



```

---

### Encryption

**Do you encrypt data?**

| Data State | Encryption Used? | Algorithm/Standard |
|------------|-----------------|-------------------|
| Data at rest (storage) | ☐ Yes ☐ No ☐ Partial | |
| Data in transit (network) | ☐ Yes ☐ No ☐ Partial | |
| Backups | ☐ Yes ☐ No ☐ N/A | |
| Laptops/mobile devices | ☐ Yes ☐ No ☐ N/A | |

**Key management:**

- ☐ Formal key management process
- ☐ Keys stored separately from encrypted data
- ☐ Hardware Security Module (HSM) used
- ☐ Key rotation policy in place

---

### Data Handling

**Data retention:**

- ☐ Formal data retention policy
- ☐ Automated data deletion after retention period
- ☐ Legal hold capability

**Secure data disposal:**

- ☐ Secure deletion/wiping procedures
- ☐ Media destruction for physical devices
- ☐ Certificate of destruction provided

**Data backup:**

- ☐ Regular automated backups
- ☐ Backups encrypted
- ☐ Backups stored off-site or in separate location
- ☐ Backup restoration tested regularly

**Backup frequency:** _______________________

**Last successful backup test:** _______________

---

### Data Location and Transfers

**Where is customer data stored?**

- Primary location: _______________________
- Backup location: _______________________

**Is customer data transferred outside the EU/EEA?**

- ☐ No
- ☐ Yes (specify countries): _______________________

**If Yes, what safeguards are in place?**

- ☐ Standard Contractual Clauses (SCCs)
- ☐ Binding Corporate Rules (BCRs)
- ☐ Adequacy decision
- ☐ Other: _______________________

---

## Section 6: Security Operations

### Vulnerability Management

**Do you perform vulnerability assessments?**

- ☐ Yes - Continuous scanning
- ☐ Yes - Monthly
- ☐ Yes - Quarterly
- ☐ Yes - Annually
- ☐ No

**Do you perform penetration testing?**

- ☐ Yes - Annually
- ☐ Yes - More frequently
- ☐ Yes - On-demand
- ☐ No

**Patch management:**

- ☐ Formal patch management process
- ☐ Critical patches applied within: _____ days
- ☐ Non-critical patches applied within: _____ days
- ☐ Automated patching where possible

---

### Malware Protection

**Anti-malware/anti-virus protection:**

- ☐ Deployed on all endpoints
- ☐ Deployed on servers
- ☐ Regularly updated (daily)
- ☐ Centrally managed
- ☐ Real-time scanning enabled

**Additional malware protection:**

- ☐ Email filtering/scanning
- ☐ Web filtering
- ☐ Endpoint Detection and Response (EDR)
- ☐ Extended Detection and Response (XDR)

---

### Logging and Monitoring

**Security logging:**

- ☐ Security events logged
- ☐ Logs centralized (SIEM or log management)
- ☐ Logs retained for: _____ months/years
- ☐ Log integrity protected (tamper-proof)

**Security monitoring:**

- ☐ 24/7 security monitoring
- ☐ Business hours monitoring only
- ☐ Automated alerting
- ☐ Security Operations Center (SOC)
- ☐ Managed Security Service Provider (MSSP)

**Incident detection capability:** _______________________

---

## Section 7: Incident Management

### Incident Response

**Do you have a documented incident response plan?**

- ☐ Yes
- ☐ No
- ☐ In development

**Incident response includes:**

- ☐ Defined incident response team
- ☐ Incident classification/prioritization
- ☐ Escalation procedures
- ☐ Communication plan (internal and external)
- ☐ Forensic capabilities
- ☐ Regular testing/exercises

**Last incident response test/exercise:** _______________

---

### Customer Notification

**Will you notify Swedwise of security incidents affecting our data?**

- ☐ Yes

**Notification timeframe:**

- ☐ Within 4 hours of discovery
- ☐ Within 24 hours of discovery
- ☐ Within 72 hours of discovery
- ☐ Other: _______________________

**Notification method:**

- ☐ Dedicated security email
- ☐ Account manager
- ☐ Security portal
- ☐ Other: _______________________

---

### Security Incidents (Past 24 Months)

**Have you experienced any security incidents in the past 24 months?**

- ☐ No
- ☐ Yes (provide details below)

**If Yes, summarize:**

| Date | Incident Type | Impact | Resolution |
|------|--------------|--------|------------|
| | | | |
| | | | |

**Any incidents involving customer data?** ☐ Yes ☐ No

**Any breaches reported to regulators?** ☐ Yes ☐ No

---

## Section 8: Business Continuity and Disaster Recovery

### Business Continuity

**Do you have a Business Continuity Plan (BCP)?**

- ☐ Yes - Documented and tested
- ☐ Yes - Documented, not recently tested
- ☐ In development
- ☐ No

**Last BCP test date:** _______________

**BCP test frequency:** _______________________

---

### Disaster Recovery

**Do you have a Disaster Recovery Plan (DRP)?**

- ☐ Yes - Documented and tested
- ☐ Yes - Documented, not recently tested
- ☐ In development
- ☐ No

**Last DR test date:** _______________

**Recovery objectives for services provided to Swedwise:**

| Metric | Target |
|--------|--------|
| **Recovery Time Objective (RTO)** | |
| **Recovery Point Objective (RPO)** | |

**Backup site/redundancy:**

- ☐ Hot site (real-time failover)
- ☐ Warm site (rapid failover)
- ☐ Cold site (manual failover)
- ☐ Cloud-based redundancy
- ☐ No backup site

---

## Section 9: Physical and Environmental Security

### Physical Access Control

**Physical security measures at data center/office:**

- ☐ Controlled access (badges, biometrics)
- ☐ Visitor management system
- ☐ 24/7 security personnel
- ☐ Video surveillance (CCTV)
- ☐ Intrusion detection system
- ☐ Secure areas for sensitive equipment

---

### Environmental Controls

**Environmental protection:**

- ☐ Fire detection and suppression
- ☐ Temperature and humidity monitoring
- ☐ Uninterruptible Power Supply (UPS)
- ☐ Backup power generation
- ☐ Flood protection
- ☐ Redundant HVAC systems

---

## Section 10: Human Resources Security

### Employee Screening

**Pre-employment screening:**

- ☐ Background checks
- ☐ Criminal record checks
- ☐ Employment verification
- ☐ Education verification
- ☐ Credit checks (for financial roles)

**Screening applies to:**

- ☐ All employees
- ☐ Employees with access to customer data only
- ☐ Privileged users only

---

### Security Awareness

**Security training for employees:**

- ☐ Security awareness training required for all staff
- ☐ Training upon hire/onboarding
- ☐ Annual refresher training
- ☐ Role-specific security training
- ☐ Phishing simulation exercises

**Last security awareness training:** _______________

---

### Confidentiality

**Confidentiality agreements:**

- ☐ All employees sign confidentiality/NDA
- ☐ Confidentiality obligations continue post-employment
- ☐ Contractors/temps sign confidentiality agreements

---

## Section 11: Third-Party Management

### Subcontractors

**Will you use subcontractors to provide services to Swedwise?**

- ☐ Yes
- ☐ No

**If Yes:**

**Will subcontractors have access to Swedwise data?**

- ☐ Yes
- ☐ No

**How do you manage subcontractor security?**

- ☐ Security requirements in contracts
- ☐ Security assessments of subcontractors
- ☐ Regular audits of subcontractors
- ☐ Swedwise approval required for subcontractors

**List key subcontractors:**

| Subcontractor | Service Provided | Data Access? | Location |
|---------------|-----------------|--------------|----------|
| | | ☐ Yes ☐ No | |
| | | ☐ Yes ☐ No | |

---

## Section 12: Cloud and Hosting (if applicable)

**Do you use cloud services or hosting providers?**

- ☐ No
- ☐ Yes (provide details below)

**If Yes:**

| Provider | Service Type | Data Stored? | Certifications |
|----------|-------------|--------------|----------------|
| | ☐ IaaS ☐ PaaS ☐ SaaS | ☐ Yes ☐ No | |
| | ☐ IaaS ☐ PaaS ☐ SaaS | ☐ Yes ☐ No | |

**Cloud security:**

- ☐ Data encrypted in cloud
- ☐ Cloud provider is ISO 27001 certified
- ☐ Cloud provider is SOC 2 certified
- ☐ Dedicated/single-tenant environment
- ☐ Multi-tenant with logical separation

---

## Section 13: Application Security (if providing software/SaaS)

**If you are providing software or SaaS, answer the following:**

### Secure Development

**Secure development practices:**

- ☐ Secure coding standards/guidelines
- ☐ Code review process
- ☐ Static Application Security Testing (SAST)
- ☐ Dynamic Application Security Testing (DAST)
- ☐ Software Composition Analysis (SCA) for dependencies
- ☐ Security testing in CI/CD pipeline

---

### Application Controls

**Application security features:**

- ☐ Input validation
- ☐ Output encoding
- ☐ Session management
- ☐ Error handling (no sensitive data in errors)
- ☐ Protection against OWASP Top 10 vulnerabilities
- ☐ API security (authentication, rate limiting)

**Web Application Firewall (WAF)?** ☐ Yes ☐ No ☐ N/A

---

## Section 14: Right to Audit

**Do you allow customer security audits or assessments?**

- ☐ Yes - On-site audits permitted
- ☐ Yes - Remote/document review only
- ☐ Yes - Questionnaires only
- ☐ No - We provide audit reports instead (SOC 2, etc.)

**Audit notice period required:** _______________________

**Audit frequency permitted:** _______________________

---

## Section 15: Insurance

**Do you carry cyber insurance/cyber liability coverage?**

- ☐ Yes
- ☐ No

**If Yes, coverage amount:** _______________________

**Policy expiry date:** _______________

---

## Section 16: Additional Information

### Data Processing Agreement

**For suppliers processing personal data under GDPR:**

**Are you willing to sign a Data Processing Agreement (DPA)?**

- ☐ Yes
- ☐ Yes - We have a standard DPA
- ☐ No (explain): _______________________

---

### Security Improvements

**Planned security improvements in next 12 months:**

```
[Describe any significant security initiatives or improvements planned]






```

---

### Additional Comments

**Any additional information about your security practices?**

```
[Provide any additional relevant information]






```

---

## Section 17: Supporting Documentation

**Please attach the following documents (if available):**

- ☐ ISO 27001 certificate (or other security certifications)
- ☐ SOC 2 Type II report (or similar audit report)
- ☐ Security policy summary
- ☐ Data Processing Agreement template
- ☐ Incident response summary
- ☐ Business continuity plan summary
- ☐ Subcontractor list
- ☐ Insurance certificate (cyber liability)
- ☐ Penetration test summary (if comfortable sharing)

**Documents attached:** _______________________________________________________

---

## Supplier Attestation

I certify that the information provided in this questionnaire is true, accurate, and complete to the best of my knowledge. I understand that Swedwise will rely on this information in assessing the security risk of our business relationship. I commit to informing Swedwise of any material changes to our security posture, security incidents affecting Swedwise data, or changes in our ability to meet the commitments outlined in this questionnaire.

| **Name** | |
| **Title** | |
| **Company** | |
| **Signature** | |
| **Date** | |

---

## For Swedwise Use Only

| Field | Information |
|-------|-------------|
| **Received Date** | |
| **Reviewed By** | |
| **Risk Tier** | ☐ Tier 1 (Critical) ☐ Tier 2 (High) ☐ Tier 3 (Medium) ☐ Tier 4 (Low) |
| **Assessment Score** | _____ / 100 |
| **Recommendation** | ☐ Approve ☐ Approve with Conditions ☐ Request More Info ☐ Reject |
| **Follow-up Required** | |

---

## Document Control

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | | Initial questionnaire |

---

## Contact Information

**For questions about this questionnaire:**
- **Email:** supplier-security@swedwise.se
- **CISO:** [Contact details]
- **Procurement:** [Contact details]
