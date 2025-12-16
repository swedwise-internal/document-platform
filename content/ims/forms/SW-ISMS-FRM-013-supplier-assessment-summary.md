---
document_id: SW-ISMS-FRM-013
title: Supplier Assessment Summary
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
  - SW-ISMS-FRM-012
  - SW-ISMS-FRM-014
---

# Supplier Assessment Summary

## Purpose

This form summarizes the security assessment of a supplier, vendor, or service provider based on the security questionnaire (SW-ISMS-FRM-012), documentation review, and any additional due diligence. It determines the supplier's risk tier and approval status.

## Instructions

1. **Receive** completed supplier security questionnaire (SW-ISMS-FRM-012)
2. **Review** questionnaire responses for completeness and adequacy
3. **Request** supporting documentation or clarifications as needed
4. **Score** the assessment using the evaluation criteria below
5. **Determine** risk tier based on data access and security posture
6. **Provide recommendation** for approval, conditions, or rejection
7. **Obtain approvals** per risk tier requirements
8. **Retain** with supplier contract and security documentation

---

## Section 1: Assessment Information

| Field | Information |
|-------|-------------|
| **Assessment ID** | |
| **Assessment Date** | |
| **Assessor Name** | |
| **Assessor Title** | |
| **Assessment Type** | ☐ Initial (New Supplier) ☐ Renewal ☐ Re-Assessment ☐ Post-Incident |

---

## Section 2: Supplier Information

| Field | Information |
|-------|-------------|
| **Supplier Name** | |
| **Supplier Contact** | |
| **Service/Product** | |
| **Contract Value** | SEK __________ (annually) |
| **Contract Duration** | From: __________ To: __________ |
| **Business Owner** | (Swedwise department/person) |

---

### Swedwise Data Access

**What Swedwise data will the supplier access, process, or store?**

- ☐ **No access** to Swedwise data (hardware only, etc.)
- ☐ **Public data** only
- ☐ **Internal data** (business operations, non-sensitive)
- ☐ **Customer/personal data** (GDPR applicable)
- ☐ **Confidential data** (contracts, financial, IP)
- ☐ **Restricted data** (highly sensitive, credentials)

**Data Classification:** ☐ Public ☐ Internal ☐ Confidential ☐ Restricted

**Data Volume:** ☐ Minimal ☐ Moderate ☐ Large ☐ Very Large

**Number of data subjects (if personal data):** ___________

---

### System Access

**Will supplier have access to Swedwise systems?**

- ☐ No system access
- ☐ Read-only access
- ☐ Standard user access
- ☐ Privileged/administrative access
- ☐ Production environment access
- ☐ Development/test environment only

**Access Method:**

- ☐ No access
- ☐ Web portal/application
- ☐ VPN/remote access
- ☐ Direct network connection
- ☐ API integration
- ☐ Physical access to premises

---

## Section 3: Questionnaire Review

### Questionnaire Completeness

| Aspect | Status | Notes |
|--------|--------|-------|
| **Completeness** | ☐ Complete ☐ Mostly Complete ☐ Incomplete | |
| **Clarity** | ☐ Clear ☐ Adequate ☐ Unclear | |
| **Evidence Provided** | ☐ Yes ☐ Partial ☐ No | |
| **Follow-up Required** | ☐ Yes ☐ No | |

**Follow-up items requested:**

```
[List any additional information or clarifications needed]





```

**Follow-up received and satisfactory?** ☐ Yes ☐ No ☐ Pending

---

## Section 4: Security Assessment Scoring

### Scoring Methodology

Score each category from 0-10 based on questionnaire responses and documentation:
- **0-3:** Poor/Inadequate - Significant concerns
- **4-6:** Fair/Basic - Minimal acceptable security
- **7-8:** Good - Solid security practices
- **9-10:** Excellent - Best-in-class security

---

### Category Scores

#### 1. Certifications and Compliance (Weight: 15%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| Security certifications (ISO 27001, SOC 2, etc.) | | |
| Compliance with relevant regulations (GDPR, etc.) | | |
| Third-party audit results | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.15)

---

#### 2. Information Security Management (Weight: 10%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| Dedicated security function/CISO | | |
| Documented security policies and procedures | | |
| Risk management process | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.10)

---

#### 3. Access Control (Weight: 15%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| User access management and provisioning | | |
| Authentication methods (MFA, strong passwords) | | |
| Privileged access management | | |
| Access review processes | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.15)

---

#### 4. Data Protection (Weight: 20%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| Data classification and handling | | |
| Encryption (at rest and in transit) | | |
| Data retention and disposal | | |
| Backup and recovery | | |
| Data location and transfer controls | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.20)

---

#### 5. Security Operations (Weight: 15%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| Vulnerability management and patching | | |
| Malware protection | | |
| Logging and monitoring | | |
| Security Operations Center (SOC) | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.15)

---

#### 6. Incident Management (Weight: 10%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| Incident response plan and team | | |
| Customer notification process | | |
| Incident history (no recent breaches) | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.10)

---

#### 7. Business Continuity (Weight: 10%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| Business continuity planning and testing | | |
| Disaster recovery capabilities | | |
| RTO/RPO commitments | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.10)

---

#### 8. Physical and HR Security (Weight: 5%)

| Criterion | Score (0-10) | Notes |
|-----------|-------------|-------|
| Physical access controls | | |
| Employee screening and training | | |
| Confidentiality agreements | | |

**Category Average:** _____ **Weighted Score:** _____ (avg × 0.05)

---

### Total Assessment Score

**Total Weighted Score:** _____ / 100

**Overall Rating:**

- ☐ **Excellent** (90-100) - Best-in-class security, minimal risk
- ☐ **Good** (75-89) - Solid security practices, low risk
- ☐ **Adequate** (60-74) - Acceptable security, moderate risk
- ☐ **Poor** (40-59) - Weak security, high risk
- ☐ **Unacceptable** (0-39) - Inadequate security, very high risk

---

## Section 5: Risk Assessment

### Inherent Risk Factors

| Risk Factor | Level | Notes |
|-------------|-------|-------|
| **Data Sensitivity** | ☐ Low ☐ Medium ☐ High ☐ Critical | |
| **Data Volume** | ☐ Low ☐ Medium ☐ High ☐ Critical | |
| **System Criticality** | ☐ Low ☐ Medium ☐ High ☐ Critical | |
| **Access Level** | ☐ Low ☐ Medium ☐ High ☐ Critical | |
| **Service Criticality** | ☐ Low ☐ Medium ☐ High ☐ Critical | |

---

### Inherent Risk Level

Based on data access and business criticality (before considering supplier security):

- ☐ **Critical** - Access to restricted data or critical systems
- ☐ **High** - Access to confidential data or important systems
- ☐ **Medium** - Access to internal data or standard systems
- ☐ **Low** - No significant data access or minimal business impact

---

### Residual Risk Level

After considering supplier's security posture:

- ☐ **High** - Significant concerns despite controls
- ☐ **Medium** - Some concerns, monitoring required
- ☐ **Low** - Well-managed, minimal concerns
- ☐ **Very Low** - Excellent security, negligible risk

---

### Risk Tier Determination

Based on both inherent risk and supplier security assessment:

| Tier | Criteria | Requirements |
|------|---------|--------------|
| **Tier 1 - Critical Risk** | Critical inherent risk OR Poor security score | Annual audit, enhanced controls, CISO approval |
| **Tier 2 - High Risk** | High inherent risk OR Adequate security score | Annual assessment, contract security terms, Manager approval |
| **Tier 3 - Medium Risk** | Medium inherent risk AND Good security score | Biennial assessment, standard security terms |
| **Tier 4 - Low Risk** | Low inherent risk AND Good+ security score | Triennial assessment, minimal security requirements |

**Assigned Risk Tier:** ☐ Tier 1 ☐ Tier 2 ☐ Tier 3 ☐ Tier 4

---

## Section 6: Security Concerns and Gaps

### Significant Concerns Identified

| # | Concern/Gap | Severity | Mitigation/Requirement |
|---|-------------|----------|------------------------|
| 1 | | ☐ Critical ☐ High ☐ Medium | |
| 2 | | ☐ Critical ☐ High ☐ Medium | |
| 3 | | ☐ Critical ☐ High ☐ Medium | |
| 4 | | ☐ Critical ☐ High ☐ Medium | |

**Are there any critical concerns that would prevent approval?**

- ☐ No
- ☐ Yes (describe): _______________________

---

### Required Improvements or Conditions

**What improvements or conditions are required before or during engagement?**

| Requirement | Priority | Due Date | Responsible |
|-------------|----------|----------|-------------|
| | ☐ Critical ☐ High ☐ Medium | | |
| | ☐ Critical ☐ High ☐ Medium | | |
| | ☐ Critical ☐ High ☐ Medium | | |

---

## Section 7: Contract and Legal Requirements

### Required Contract Clauses

**Based on risk tier and data access, the following must be in the contract:**

- ☐ **Information security requirements** - Specific security standards
- ☐ **Data Processing Agreement (DPA)** - GDPR-compliant DPA for personal data
- ☐ **Confidentiality/NDA** - Non-disclosure obligations
- ☐ **Data location restrictions** - Data must remain in EU/EEA
- ☐ **Subcontractor approval** - Swedwise approval required for subcontractors
- ☐ **Incident notification** - Notification within 24 hours of security incidents
- ☐ **Audit rights** - Swedwise right to audit security controls
- ☐ **Data return/deletion** - Data return and secure deletion at contract end
- ☐ **Insurance requirements** - Cyber liability insurance required
- ☐ **SLA commitments** - Availability, RTO, RPO guarantees
- ☐ **Termination rights** - Termination for security breach or non-compliance
- ☐ **Liability and indemnification** - Liability for security breaches

**Contract review required by:** ☐ Legal ☐ CISO ☐ Both

---

## Section 8: Ongoing Management Requirements

### Monitoring and Review

**Based on risk tier:**

| Requirement | Frequency | Next Due | Responsible |
|-------------|-----------|----------|-------------|
| **Security reassessment** | | | |
| **Security questionnaire update** | | | |
| **Performance review** | | | |
| **Access review** | | | |
| **Incident review** | | | |

**Special monitoring requirements:**

```
[Any specific monitoring or reporting requirements]




```

---

## Section 9: Recommendation and Approval

### Assessor Recommendation

**Recommendation:**

- ☐ **Approve** - Security posture acceptable, proceed with engagement
- ☐ **Approve with Conditions** - Acceptable with specified improvements/controls
- ☐ **Request Additional Information** - Cannot complete assessment
- ☐ **Reject** - Security posture unacceptable for data/system access

**If Approved with Conditions, summarize conditions:**

```
[List all conditions that must be met]





```

---

### Assessor Justification

```
[Provide detailed justification for recommendation including:
- Summary of security strengths
- Key security weaknesses or concerns
- How conditions/controls mitigate risks
- Why supplier is/isn't acceptable for intended purpose]










```

---

### Assessor Sign-Off

| **Assessor Name** | |
| **Assessor Title** | |
| **Signature** | |
| **Date** | |

---

### Required Approvals

**Tier 1 (Critical Risk):**

| Role | Name | Signature | Date | Decision |
|------|------|-----------|------|----------|
| **Business Owner** | | | | ☐ Approve ☐ Reject |
| **CISO** | | | | ☐ Approve ☐ Reject |
| **CFO or CEO** | | | | ☐ Approve ☐ Reject |

**Tier 2 (High Risk):**

| Role | Name | Signature | Date | Decision |
|------|------|-----------|------|----------|
| **Business Owner** | | | | ☐ Approve ☐ Reject |
| **CISO or IT Manager** | | | | ☐ Approve ☐ Reject |

**Tier 3 (Medium Risk):**

| Role | Name | Signature | Date | Decision |
|------|------|-----------|------|----------|
| **Business Owner** | | | | ☐ Approve ☐ Reject |
| **IT Manager** | | | | ☐ Approve ☐ Reject |

**Tier 4 (Low Risk):**

| Role | Name | Signature | Date | Decision |
|------|------|-----------|------|----------|
| **Business Owner** | | | | ☐ Approve ☐ Reject |

---

## Section 10: Post-Approval Actions

### Implementation Checklist

- ☐ Contract includes required security clauses
- ☐ Data Processing Agreement signed (if applicable)
- ☐ Supplier added to supplier register
- ☐ Access provisioned per least privilege principle
- ☐ Monitoring/reporting schedule established
- ☐ Business owner notified of approval and conditions
- ☐ Next review date scheduled
- ☐ Supplier informed of security requirements and expectations

**Implementation completed by:** _________________ **Date:** _______

---

## Section 11: Review and Reassessment Log

### Ongoing Reviews

| Review Date | Reviewer | Type | Outcome | Next Review |
|-------------|----------|------|---------|-------------|
| | | ☐ Annual ☐ Incident ☐ Change | ☐ Satisfactory ☐ Issues Found | |
| | | ☐ Annual ☐ Incident ☐ Change | ☐ Satisfactory ☐ Issues Found | |
| | | ☐ Annual ☐ Incident ☐ Change | ☐ Satisfactory ☐ Issues Found | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial assessment |

---

## Quick Reference - Risk Tier Requirements

| Tier | Inherent Risk | Security Score | Assessment Frequency | Approval Required |
|------|--------------|---------------|---------------------|-------------------|
| **Tier 1** | Critical | Any OR <60 (Poor) | Annual | Business Owner + CISO + CFO/CEO |
| **Tier 2** | High | <75 (Adequate) | Annual | Business Owner + CISO/IT Manager |
| **Tier 3** | Medium | ≥75 (Good) | Biennial | Business Owner + IT Manager |
| **Tier 4** | Low | ≥75 (Good) | Triennial | Business Owner |

---

## Quick Reference - Data Access Risk Levels

| Data Type | Inherent Risk | Requires DPA | Minimum Security Score |
|-----------|--------------|--------------|----------------------|
| **Restricted** (credentials, highly sensitive) | Critical | Yes | 75 (Good) |
| **Confidential** (customer data, contracts) | High | Yes | 70 (Adequate) |
| **Internal** (business operations) | Medium | Maybe | 60 (Adequate) |
| **Public** (marketing materials) | Low | No | 50 (Fair) |

---

## Notes

```
[Additional notes or observations]






```

---

## Attachments

**Supporting documentation:**

- ☐ Completed supplier security questionnaire (SW-ISMS-FRM-012)
- ☐ Security certifications (ISO 27001, SOC 2, etc.)
- ☐ Audit reports
- ☐ Data Processing Agreement
- ☐ Insurance certificates
- ☐ Corrective action plans (if conditions applied)

**Attachment location:** ___________________________________________________________

---

## Contact Information

**For supplier assessment questions:**
- **CISO:** [Contact details]
- **Supplier Management:** supplier-security@swedwise.se
- **Procurement:** [Contact details]
