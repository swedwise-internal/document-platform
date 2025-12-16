---
document_id: SW-IMS-FRM-005
title: Integrated Risk Register Template
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: Risk Manager
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
related_documents:
  - SW-IMS-PRO-005
  - SW-IMS-FRM-004
---

# Integrated Risk Register Template

## Purpose

This register provides a centralized, integrated view of all significant risks across quality, environmental, and information security domains. It enables systematic risk identification, assessment, treatment, and monitoring as part of Swedwise's Integrated Management System.

## Instructions

1. **Maintain centrally**: IMS Coordinator/Risk Manager maintains this register
2. **Update regularly**: Review and update at least quarterly and after significant changes
3. **Risk IDs**: Assign unique identifiers (R-YYYY-NNN) to each risk
4. **Treatment Plans**: Create detailed treatment plans (SW-IMS-FRM-004) for high-priority risks
5. **Report**: Include risk register summary in Management Reviews

---

## Risk Assessment Criteria

### Likelihood Ratings

| Rating | Level | Description | Frequency |
|--------|-------|-------------|-----------|
| 1 | Very Unlikely | Rare; may occur only in exceptional circumstances | < 5% probability annually |
| 2 | Unlikely | Could occur at some time | 5-25% probability annually |
| 3 | Possible | Might occur occasionally | 25-50% probability annually |
| 4 | Likely | Will probably occur in most circumstances | 50-75% probability annually |
| 5 | Very Likely | Expected to occur frequently | > 75% probability annually |

### Impact Ratings

| Rating | Level | Description | Example Impacts |
|--------|-------|-------------|-----------------|
| 1 | Negligible | Minimal impact; easily managed | Minor inconvenience; < 10k SEK cost |
| 2 | Minor | Limited impact; manageable with existing resources | Temporary customer dissatisfaction; 10-50k SEK cost |
| 3 | Moderate | Noticeable impact; requires management attention | Customer complaint; regulatory warning; 50-250k SEK cost |
| 4 | Major | Serious impact; significant disruption | Loss of major customer; regulatory fine; 250k-1M SEK cost |
| 5 | Critical | Severe impact; potential business failure | Multiple customer losses; certification loss; > 1M SEK cost |

### Risk Score Matrix

**Risk Score = Likelihood × Impact**

| Risk Score | Risk Level | Action Required |
|------------|-----------|-----------------|
| 1-4 | **Low** | Monitor; accept risk; no formal treatment required |
| 5-9 | **Medium** | Active management; implement cost-effective controls |
| 10-14 | **High** | Develop treatment plan; allocate resources; senior management awareness |
| 15-25 | **Critical** | Immediate action; formal treatment plan; CEO/Board awareness |

### Risk Treatment Options

- **Avoid**: Eliminate the risk by not undertaking the activity
- **Reduce**: Implement controls to reduce likelihood or impact
- **Transfer**: Share risk with third party (insurance, contracts, outsourcing)
- **Accept**: Acknowledge and accept the risk (with documented justification)

---

## Integrated Risk Register

**Register Owner:** [Risk Manager / IMS Coordinator]

**Last Updated:** [YYYY-MM-DD]

**Review Frequency:** Quarterly (minimum)

**Next Review Date:** [YYYY-MM-DD]

---

### Risk Entry Template

Complete the following for each identified risk:

| Field | Details |
|-------|---------|
| **Risk ID** | _[R-YYYY-NNN]_ |
| **Date Identified** | [YYYY-MM-DD] |
| **Identified By** | |
| **Risk Owner** | _[Person accountable for managing this risk]_ |

#### Risk Details

| Field | Details |
|-------|---------|
| **Risk Category** | [ ] Quality  [ ] Environmental  [ ] Information Security  [ ] Strategic  [ ] Operational  [ ] Financial  [ ] Compliance |
| **ISO Standard(s)** | [ ] ISO 9001  [ ] ISO 14001  [ ] ISO 27001  [ ] All  [ ] N/A |
| **Related Process/Area** | _[e.g., SaaS Operations, Customer Support, Data Management]_ |

#### Risk Description

**Risk Statement:**

_[Use format: "If [event/condition], then [consequence], resulting in [impact]"]_

**Example**: "If primary data center fails, then SaaS service becomes unavailable, resulting in SLA breach and customer compensation."

#### Inherent Risk Assessment (Before Controls)

| Factor | Rating | Notes |
|--------|--------|-------|
| **Likelihood** | [ ] 1 [ ] 2 [ ] 3 [ ] 4 [ ] 5 | |
| **Impact** | [ ] 1 [ ] 2 [ ] 3 [ ] 4 [ ] 5 | |
| **Inherent Risk Score** | _[Likelihood × Impact]_ | |

#### Existing Controls

| Control Description | Type | Effectiveness | Owner |
|---------------------|------|---------------|-------|
| | [ ] Preventive<br>[ ] Detective<br>[ ] Corrective | [ ] Effective<br>[ ] Partially Effective<br>[ ] Ineffective | |
| | [ ] Preventive<br>[ ] Detective<br>[ ] Corrective | [ ] Effective<br>[ ] Partially Effective<br>[ ] Ineffective | |
| | [ ] Preventive<br>[ ] Detective<br>[ ] Corrective | [ ] Effective<br>[ ] Partially Effective<br>[ ] Ineffective | |

#### Residual Risk Assessment (With Current Controls)

| Factor | Rating | Notes |
|--------|--------|-------|
| **Likelihood** | [ ] 1 [ ] 2 [ ] 3 [ ] 4 [ ] 5 | |
| **Impact** | [ ] 1 [ ] 2 [ ] 3 [ ] 4 [ ] 5 | |
| **Residual Risk Score** | _[Likelihood × Impact]_ | |
| **Risk Level** | [ ] Low  [ ] Medium  [ ] High  [ ] Critical | |

#### Risk Treatment

| Field | Details |
|-------|---------|
| **Treatment Option** | [ ] Avoid  [ ] Reduce  [ ] Transfer  [ ] Accept |
| **Treatment Status** | [ ] No treatment required (accepted)<br>[ ] Treatment planned<br>[ ] Treatment in progress<br>[ ] Treatment complete<br>[ ] Under review |
| **Treatment Plan Reference** | _[Link to SW-IMS-FRM-004 if applicable]_ |
| **Planned Actions Summary** | _[Brief description of treatment actions]_ |
| **Treatment Responsible** | |
| **Treatment Target Date** | |

#### Monitoring and Review

| Field | Details |
|-------|---------|
| **Monitoring Method** | _[How is this risk tracked? KPIs, audits, reports?]_ |
| **Monitoring Frequency** | [ ] Daily  [ ] Weekly  [ ] Monthly  [ ] Quarterly  [ ] Annually |
| **Last Review Date** | |
| **Next Review Date** | |
| **Review Trigger Events** | _[Events that would require immediate reassessment]_ |

#### Status and Notes

| Field | Details |
|-------|---------|
| **Current Status** | [ ] Active  [ ] Under Control  [ ] Escalated  [ ] Closed |
| **Trend** | [ ] Increasing  [ ] Stable  [ ] Decreasing |
| **Incidents/Near Misses** | _[Has this risk materialized? References to incidents.]_ |
| **Additional Notes** | |

---

## Risk Register Summary

**Completion Date:** [YYYY-MM-DD]

**Summary Statistics:**

| Risk Level | Count | Percentage |
|------------|-------|------------|
| Critical (15-25) | | |
| High (10-14) | | |
| Medium (5-9) | | |
| Low (1-4) | | |
| **Total Risks** | | **100%** |

**Breakdown by Category:**

| Category | Count |
|----------|-------|
| Quality | |
| Environmental | |
| Information Security | |
| Strategic | |
| Operational | |
| Financial | |
| Compliance | |
| **Total** | |

**Breakdown by ISO Standard:**

| Standard | Count |
|----------|-------|
| ISO 9001 (Quality) | |
| ISO 14001 (Environmental) | |
| ISO 27001 (Information Security) | |
| Multiple/Integrated | |
| **Total** | |

**Treatment Status:**

| Status | Count |
|--------|-------|
| No treatment required (accepted) | |
| Treatment planned | |
| Treatment in progress | |
| Treatment complete | |
| Under review | |
| **Total** | |

---

## Top Risks Requiring Attention

**List the highest-priority risks requiring management focus:**

| Risk ID | Risk Description (Brief) | Risk Score | Treatment Status | Owner |
|---------|--------------------------|------------|------------------|-------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

## Risk Register Approval

**Reviewed and Approved By:**

| Name | Role | Date | Signature |
|------|------|------|-----------|
| | Risk Manager / IMS Coordinator | | |
| | CEO / Management Team | | |

**Next Scheduled Review:** [YYYY-MM-DD]

---

## Change Log

**Record significant changes to the risk register:**

| Date | Change Description | Changed By | Approved By |
|------|-------------------|------------|-------------|
| | Risk register created | | |
| | | | |
| | | | |

---

## Notes for Users

### When to Update the Risk Register

Update the register when:

- **New risks identified**: Risk assessments, audits, incidents, strategic changes
- **Risk levels change**: Circumstances change affecting likelihood or impact
- **Controls change**: New controls implemented or existing controls fail
- **Treatment completed**: Treatment plans are finished and effectiveness verified
- **Risks materialize**: Risk events occur (cross-reference incidents)
- **Periodic reviews**: At least quarterly and before management reviews
- **Organizational changes**: Mergers, new services, regulatory changes

### Risk Identification Sources

- **Internal audits**: Audit findings, process observations
- **External audits**: Certification body findings
- **Incident reports**: Security incidents, quality issues, environmental events
- **Context analysis**: PESTLE, SWOT, stakeholder analysis
- **Process reviews**: Process owners identify risks in their areas
- **Staff input**: Frontline staff often see risks management misses
- **Customer feedback**: Complaints, surveys, contract reviews
- **Supplier issues**: Supply chain disruptions, vendor performance
- **Regulatory changes**: New laws, industry standards, contractual obligations
- **Technology changes**: System upgrades, new tools, infrastructure changes

### Risk Ownership

**Risk Owners are responsible for:**

- Monitoring the risk and existing controls
- Ensuring controls remain effective
- Initiating treatment actions when needed
- Reporting changes in risk level
- Providing updates for management reviews

**Risk Owners should:**

- Have authority over the affected process/area
- Have resources to manage the risk
- Understand the risk and its potential impacts
- Be accountable for risk treatment

### Integration Across Standards

Many risks span multiple management system domains:

**Example: Data Breach**

- **Quality (ISO 9001)**: Customer dissatisfaction, loss of trust
- **Environmental (ISO 14001)**: Potentially N/A unless environmental data involved
- **Information Security (ISO 27001)**: Confidentiality breach, compliance failure

**Capture these as integrated risks** rather than separate entries to avoid duplication and ensure holistic treatment.

### Risk Appetite

Swedwise's general risk appetite:

- **Low tolerance**: Risks affecting customer data security, regulatory compliance, business continuity
- **Moderate tolerance**: Risks affecting operational efficiency, reputation, moderate financial impact
- **Higher tolerance**: Risks related to innovation, market expansion, efficiency improvements (calculated risks)

Specific risk appetites should be defined in the Risk Management Procedure (SW-IMS-PRO-005).

### Escalation

**Escalate risks to management when:**

- Risk score is Critical (15-25) or High (10-14)
- Risk trend is increasing despite treatment
- Risk materializes (incident occurs)
- Treatment requires significant resources or strategic decisions
- External factors significantly change the risk landscape

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | Risk Manager | Initial template creation | [TBD] |

**Next Review Date**: [TBD]

**Document Classification**: Internal

**Document Owner**: Risk Manager
