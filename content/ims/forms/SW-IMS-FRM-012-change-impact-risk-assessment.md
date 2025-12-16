---
document_id: SW-IMS-FRM-012
title: Change Impact and Risk Assessment Template
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: Change Manager
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 27001
related_documents:
  - SW-IMS-PRO-008
  - SW-IMS-FRM-011
  - SW-IMS-PRO-005
---

# Change Impact and Risk Assessment Template

## Purpose

This template provides structured assessment of the impact and risks associated with proposed changes. It supports informed decision-making, appropriate approval routing, and effective risk mitigation planning for changes submitted via SW-IMS-FRM-011 (Change Request Form).

## Instructions

1. **Complete for all Normal changes**: Standard changes (pre-approved) may use simplified assessment
2. **Attach to Change Request**: This assessment should accompany SW-IMS-FRM-011
3. **Be thorough**: Consider all dimensions of impact and risk
4. **Involve stakeholders**: Consult with affected teams, system owners, and security
5. **Update if changes**: Reassess if change scope, timing, or approach changes

---

## Assessment Information

| Field | Details |
|-------|---------|
| **Change Request ID** | _[CHG-YYYY-NNN from SW-IMS-FRM-011]_ |
| **Change Title** | |
| **Assessment Date** | [YYYY-MM-DD] |
| **Assessed By** | |
| **Assessment Reviewed By** | _[Technical owner, Change Manager]_ |

---

## Section 1: Change Summary

**Brief Description of Change:**

_[What is being changed? Summarize from Change Request.]_

**Systems/Services Affected:**

**Proposed Implementation Date/Time:** [YYYY-MM-DD HH:MM]

---

## Section 2: Impact Assessment

### 2.1 Service Impact

**Will this change affect service availability?**

- [ ] **No Impact**: No service disruption expected
- [ ] **Degraded Performance**: Service available but performance reduced
- [ ] **Partial Outage**: Some functionality unavailable
- [ ] **Full Outage**: Complete service unavailable during change
- [ ] **Uncertain**: Potential impact cannot be determined

**Affected Services:**

| Service | Impact Level | Duration | User Impact |
|---------|--------------|----------|-------------|
| | [ ] None  [ ] Low  [ ] Medium  [ ] High  [ ] Critical | | _[Number of users, customer impact]_ |
| | [ ] None  [ ] Low  [ ] Medium  [ ] High  [ ] Critical | | |
| | [ ] None  [ ] Low  [ ] Medium  [ ] High  [ ] Critical | | |

**Planned Downtime:** _______ minutes/hours (if applicable)

**Service Level Agreement (SLA) Impact:**

- [ ] No SLA impact
- [ ] SLA at risk but should be met
- [ ] SLA breach likely - mitigation: _______________________
- [ ] SLA breach certain - customer notification required

### 2.2 Stakeholder Impact

**Who is affected by this change?**

| Stakeholder Group | Impact Description | Number Affected | Impact Level | Communication Required? |
|-------------------|-------------------|-----------------|--------------|-------------------------|
| **All Customers** | | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No |
| **Specific Customers** | _[Which customers?]_ | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No |
| **Internal Staff (All)** | | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No |
| **Specific Department(s)** | _[Which departments?]_ | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No |
| **Suppliers/Partners** | | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No |
| **Other** | | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No |

**Peak Usage Consideration:**

- [ ] Change scheduled during low-usage period (optimal)
- [ ] Change scheduled during moderate-usage period (acceptable)
- [ ] Change scheduled during high-usage period (not ideal - justification required)
- [ ] N/A

**User Experience Impact:**

_[How will users experience this change? Will they notice it? Will workflows change?]_

### 2.3 Business Process Impact

**Will this change affect business processes?**

| Business Process | Impact Description | Impact Level | Process Owner Consulted? |
|------------------|-------------------|--------------|--------------------------|
| | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No  [ ] N/A |
| | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No  [ ] N/A |
| | | [ ] None  [ ] Low  [ ] Medium  [ ] High | [ ] Yes  [ ] No  [ ] N/A |

**Process Changes Required:**

- [ ] No process changes needed
- [ ] Minor procedural adjustments
- [ ] Significant process changes - training required
- [ ] New processes required - documentation and training needed

**Process Documentation Updates Required?** [ ] Yes  [ ] No

### 2.4 Technical Impact

**Affected Technical Components:**

| Component | Current Version | New Version | Criticality | Dependencies |
|-----------|-----------------|-------------|-------------|--------------|
| | | | [ ] Critical  [ ] High  [ ] Medium  [ ] Low | |
| | | | [ ] Critical  [ ] High  [ ] Medium  [ ] Low | |
| | | | [ ] Critical  [ ] High  [ ] Medium  [ ] Low | |

**Integration Impact:**

- [ ] No integrations affected
- [ ] Integrations affected but tested and compatible
- [ ] Integration testing required before change
- [ ] Integration changes required (coordinate with integration owners)

**Data Impact:**

- [ ] No data changes
- [ ] Data structure changes (schema, fields)
- [ ] Data migration required
- [ ] Potential data loss (backups verified)

**Backup and Recovery:**

- [ ] Current backups verified and tested
- [ ] Special backup required before change
- [ ] Backup verification not possible (explain why): _______
- [ ] Not applicable

### 2.5 Security Impact

**Does this change affect security controls or posture?**

| Security Domain | Impact | Details |
|-----------------|--------|---------|
| **Access Controls** | [ ] None  [ ] Improves  [ ] Degrades  [ ] Changes | |
| **Authentication/Authorization** | [ ] None  [ ] Improves  [ ] Degrades  [ ] Changes | |
| **Encryption** | [ ] None  [ ] Improves  [ ] Degrades  [ ] Changes | |
| **Network Security** | [ ] None  [ ] Improves  [ ] Degrades  [ ] Changes | |
| **Logging/Monitoring** | [ ] None  [ ] Improves  [ ] Degrades  [ ] Changes | |
| **Data Protection** | [ ] None  [ ] Improves  [ ] Degrades  [ ] Changes | |

**Security Review Required?** [ ] Yes  [ ] No

**CISO Consulted?** [ ] Yes  [ ] No  [ ] N/A

**Security Controls Updated?** [ ] Yes  [ ] No  [ ] N/A

### 2.6 Compliance and Regulatory Impact

**Does this change affect compliance with standards or regulations?**

| Standard/Regulation | Impact | Details |
|---------------------|--------|---------|
| **ISO 9001 (Quality)** | [ ] None  [ ] Positive  [ ] Negative  [ ] Requires Assessment | |
| **ISO 14001 (Environmental)** | [ ] None  [ ] Positive  [ ] Negative  [ ] Requires Assessment | |
| **ISO 27001 (Information Security)** | [ ] None  [ ] Positive  [ ] Negative  [ ] Requires Assessment | |
| **GDPR (Data Protection)** | [ ] None  [ ] Positive  [ ] Negative  [ ] Requires Assessment | |
| **Contractual Obligations** | [ ] None  [ ] Positive  [ ] Negative  [ ] Requires Assessment | |
| **Other:** _______ | [ ] None  [ ] Positive  [ ] Negative  [ ] Requires Assessment | |

**Compliance Review Required?** [ ] Yes  [ ] No

**Documentation Updates Required?** [ ] Yes  [ ] No

### 2.7 Financial Impact

| Cost Category | Estimated Cost (SEK) | Notes |
|---------------|---------------------|-------|
| **Implementation Labor** | | |
| **Software/Licenses** | | |
| **Hardware** | | |
| **External Services** | | |
| **Downtime/Lost Productivity** | | |
| **Training** | | |
| **Other** | | |
| **Total Cost** | | |

**Cost Savings/Benefits:** _______ SEK (if applicable)

**Net Financial Impact:** _______ SEK

**Budget Available?** [ ] Yes  [ ] No  [ ] Pending Approval

---

## Section 3: Risk Assessment

### 3.1 Implementation Risks

**What could go wrong during implementation?**

| # | Risk Description | Likelihood | Impact | Risk Score | Mitigation |
|---|------------------|------------|--------|------------|------------|
| 1 | | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | _[L × I]_ | |
| 2 | | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | _[L × I]_ | |
| 3 | | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | _[L × I]_ | |

**Risk Score Matrix:**

- **1-4**: Low Risk
- **5-9**: Medium Risk
- **10-16**: High Risk
- **17-25**: Critical Risk

### 3.2 Post-Implementation Risks

**What risks exist after the change is implemented?**

| # | Risk Description | Likelihood | Impact | Risk Score | Mitigation |
|---|------------------|------------|--------|------------|------------|
| 1 | | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | _[L × I]_ | |
| 2 | | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | _[L × I]_ | |

### 3.3 Rollback Risks

**What risks are associated with rolling back this change if it fails?**

| # | Risk Description | Likelihood | Impact | Risk Score | Mitigation |
|---|------------------|------------|--------|------------|------------|
| 1 | | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | [ ] Very Low (1)<br>[ ] Low (2)<br>[ ] Medium (3)<br>[ ] High (4)<br>[ ] Very High (5) | _[L × I]_ | |

**Can the change be rolled back?**

- [ ] Yes - Full rollback possible with minimal impact
- [ ] Yes - Rollback possible but with some data loss/effort
- [ ] Partial - Some components can be rolled back
- [ ] No - Change is irreversible (explain mitigation): _______________________

**Rollback Tested?** [ ] Yes  [ ] No  [ ] N/A

### 3.4 Overall Risk Assessment

**Overall Change Risk Level:**

- [ ] **Low**: Routine change, well-understood, minimal impact, easily reversed
- [ ] **Medium**: Moderate complexity, some unknowns, noticeable impact, rollback available
- [ ] **High**: Complex change, significant unknowns, major impact, difficult to reverse
- [ ] **Critical**: Highly complex, high uncertainty, critical systems, irreversible

**Justification for Risk Rating:**

_[Explain why this risk level was assigned based on the assessments above]_

**Risk Acceptance:**

- [ ] Risk is acceptable given business benefits
- [ ] Risk is acceptable with mitigation measures in place
- [ ] Risk requires management approval to proceed
- [ ] Risk is unacceptable; change should not proceed

---

## Section 4: Testing and Validation

### 4.1 Testing Performed

| Test Type | Environment | Date | Result | Issues Found |
|-----------|-------------|------|--------|--------------|
| **Unit Testing** | | | [ ] Pass  [ ] Fail  [ ] N/A | |
| **Integration Testing** | | | [ ] Pass  [ ] Fail  [ ] N/A | |
| **System Testing** | | | [ ] Pass  [ ] Fail  [ ] N/A | |
| **User Acceptance Testing** | | | [ ] Pass  [ ] Fail  [ ] N/A | |
| **Performance Testing** | | | [ ] Pass  [ ] Fail  [ ] N/A | |
| **Security Testing** | | | [ ] Pass  [ ] Fail  [ ] N/A | |
| **Rollback Testing** | | | [ ] Pass  [ ] Fail  [ ] N/A | |

**Test Coverage Assessment:**

- [ ] Comprehensive - All scenarios tested
- [ ] Adequate - Key scenarios tested
- [ ] Limited - Basic testing only
- [ ] Insufficient - More testing required
- [ ] None - No testing performed (justify): _______________________

**Outstanding Test Issues:**

| Issue | Severity | Resolution Plan | Status |
|-------|----------|-----------------|--------|
| | [ ] Critical  [ ] High  [ ] Medium  [ ] Low | | [ ] Open  [ ] Resolved |
| | [ ] Critical  [ ] High  [ ] Medium  [ ] Low | | [ ] Open  [ ] Resolved |

### 4.2 Validation Plan

**Post-implementation validation criteria:**

| # | Validation Check | Expected Result | How to Verify |
|---|------------------|-----------------|---------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**Monitoring During/After Change:**

_[What will be monitored? Who is monitoring? For how long?]_

---

## Section 5: Dependencies and Constraints

### 5.1 Dependencies

**This change depends on:**

| Dependency | Status | Owner | Impact if Not Ready |
|------------|--------|-------|---------------------|
| | [ ] Ready  [ ] In Progress  [ ] Not Started | | |
| | [ ] Ready  [ ] In Progress  [ ] Not Started | | |

**Other changes depend on this change:**

| Dependent Change | Impact if This Change Fails |
|------------------|------------------------------|
| | |

### 5.2 Constraints

**Constraints affecting this change:**

- [ ] Budget constraints
- [ ] Resource availability
- [ ] Vendor availability/timelines
- [ ] Contractual obligations
- [ ] Regulatory deadlines
- [ ] Technical limitations
- [ ] Blackout periods
- [ ] Other: _______________________

**Constraint Details:**

---

## Section 6: Recommendations

### 6.1 Approval Recommendation

**Based on this impact and risk assessment, the recommendation is:**

- [ ] **Approve**: Proceed with change as planned
- [ ] **Approve with Conditions**: See conditions below
- [ ] **Defer**: Requires additional work before proceeding
- [ ] **Reject**: Risk/impact unacceptable; do not proceed

**Conditions/Requirements (if applicable):**

1.
2.
3.

**Rationale:**

_[Explain the recommendation based on impact and risk analysis]_

### 6.2 Mitigation Requirements

**Required risk mitigation actions before implementation:**

| # | Mitigation Action | Responsible | Due Date | Status |
|---|-------------------|-------------|----------|--------|
| 1 | | | | [ ] Complete  [ ] In Progress  [ ] Not Started |
| 2 | | | | [ ] Complete  [ ] In Progress  [ ] Not Started |
| 3 | | | | [ ] Complete  [ ] In Progress  [ ] Not Started |

### 6.3 Success Factors

**Critical success factors for this change:**

1.
2.
3.

**Warning signs that change is failing:**

1.
2.
3.

---

## Section 7: Approval

### 7.1 Assessment Review

**Assessment Reviewed By:**

| Name | Role | Date | Signature |
|------|------|------|-----------|
| | Technical Owner | | |
| | Security Lead (if security impact) | | |
| | Change Manager | | |

### 7.2 Risk Acceptance

**For High/Critical risk changes:**

**Risk Accepted By:**

| Name | Role | Date | Signature |
|------|------|------|-----------|
| | Manager / Department Head | | |
| | CEO (if Critical risk) | | |

---

## Notes for Users

### Impact vs. Risk

**Impact** = The effect of the change (good or bad, intended or not)

**Risk** = The likelihood and consequence of something going wrong

**Example:**

- **Impact**: "This change will improve performance by 50%" (positive impact)
- **Risk**: "There is a 20% chance the change fails, resulting in 2-hour outage" (risk)

### Assessing Likelihood

| Rating | Description | Probability |
|--------|-------------|-------------|
| Very Low (1) | Extremely unlikely; virtually never happens | < 5% |
| Low (2) | Unlikely but possible; rare occurrence | 5-25% |
| Medium (3) | Moderate chance; occasional occurrence | 25-50% |
| High (4) | Likely to occur; frequent occurrence | 50-75% |
| Very High (5) | Almost certain to occur; expected | > 75% |

### Assessing Impact

| Rating | Description | Examples |
|--------|-------------|----------|
| Very Low (1) | Negligible impact; easily managed | Minor inconvenience to few users |
| Low (2) | Minor impact; limited scope | Brief inconvenience to some users; no SLA impact |
| Medium (3) | Noticeable impact; requires attention | Temporary disruption; SLA at risk; customer complaints |
| High (4) | Major impact; significant disruption | Extended outage; SLA breach; revenue impact |
| Very High (5) | Critical impact; severe consequences | Business-threatening; data loss; major customer loss |

### Common Risk Mitigation Strategies

**Reduce Likelihood:**

- More thorough testing
- Better planning and preparation
- Training and rehearsal
- Gradual rollout (phased implementation)

**Reduce Impact:**

- Implement during low-usage periods
- Improve rollback capability
- Enhanced monitoring and alerting
- Standby resources for rapid response

**Transfer Risk:**

- Vendor support agreements
- Insurance
- Contractual protections

**Accept Risk:**

- Documented justification
- Management approval
- Contingency planning

### Integration with Risk Register

High-risk changes should be:

- Added to the Integrated Risk Register (SW-IMS-FRM-005) if ongoing risk
- Cross-referenced with existing risks in the register
- Used to validate effectiveness of risk treatments

### When Detailed Assessment Is Required

**Always required for:**

- Normal changes (non-standard)
- High/Critical risk changes
- Changes affecting SaaS platform
- Changes affecting customer-facing services
- Changes affecting security controls
- Changes affecting compliance

**May be simplified for:**

- Standard changes with documented procedures
- Low-risk routine changes
- Emergency changes (post-implementation assessment)

### Red Flags (Reasons to Defer or Reject)

- Critical risks with no mitigation
- Insufficient testing
- No rollback plan for high-risk change
- SLA breach certain with no customer approval
- Dependencies not ready
- Resources unavailable
- Timing conflicts with blackout periods
- Unacceptable financial impact

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | Change Manager | Initial template creation | [TBD] |

**Next Review Date**: [TBD]

**Document Classification**: Internal

**Document Owner**: Change Manager
