---
document_id: SW-IMS-REG-001
title: Integrated Risk Register
doc_type: form
version: "1.0"
status: draft
classification: confidential
owner: IMS Owner
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-PRO-002
---

# Integrated Risk Register

## Register Control Information

| Field | Value |
|-------|-------|
| **Last Review Date** | [TBD - initial review] |
| **Next Review Date** | [TBD - typically quarterly] |
| **Approved By** | [TBD - CEO/Management Team] |
| **Register Owner** | IMS Owner |
| **Review Frequency** | Quarterly (minimum) |

## Risk Assessment Scales

### Likelihood Scale (1-5)

| Score | Level | Description |
|-------|-------|-------------|
| 1 | Rare | May occur only in exceptional circumstances (< 5% annual probability) |
| 2 | Unlikely | Could occur but not expected (5-25% annual probability) |
| 3 | Possible | Might occur at some time (25-50% annual probability) |
| 4 | Likely | Will probably occur (50-75% annual probability) |
| 5 | Almost Certain | Expected to occur in most circumstances (> 75% annual probability) |

### Impact Scale (1-5)

| Score | Level | Description | Financial | Reputational | Operational |
|-------|-------|-------------|-----------|--------------|-------------|
| 1 | Negligible | Minimal impact, easily absorbed | < 50k SEK | No external impact | < 1 day disruption |
| 2 | Minor | Some impact, manageable | 50-200k SEK | Local/limited impact | 1-3 days disruption |
| 3 | Moderate | Significant impact requiring response | 200-500k SEK | Regional concern | 3-7 days disruption |
| 4 | Major | Serious impact affecting operations | 500k-2M SEK | National concern | 1-4 weeks disruption |
| 5 | Critical | Severe impact, potential business failure | > 2M SEK | Industry-wide impact | > 4 weeks disruption |

### Risk Level Matrix

**Risk Score = Likelihood × Impact**

| Risk Score | Risk Level | Action Required |
|------------|------------|-----------------|
| 1-4 | **Low** | Accept with monitoring |
| 5-9 | **Medium** | Monitor and consider risk reduction |
| 10-14 | **High** | Active risk reduction required |
| 15-25 | **Critical** | Immediate action and escalation required |

## Risk Treatment Options

- **Avoid**: Eliminate the risk source or decide not to proceed with the activity
- **Reduce**: Implement controls to reduce likelihood or impact
- **Transfer**: Share or transfer risk (insurance, contracts, outsourcing)
- **Accept**: Accept the risk with monitoring (document rationale for acceptance)

---

## Risk Register

| Risk ID | Category | Risk Description | Risk Source/Cause | Potential Consequence | Affected Assets/Processes | L | I | Inherent Score | Risk Level | Existing Controls | Treatment | Planned Controls/Actions | Target Score | Risk Owner | Action Owner | Due Date | Status | Last Updated | Notes |
|---------|----------|------------------|-------------------|----------------------|---------------------------|---|---|----------------|------------|-------------------|-----------|--------------------------|--------------|------------|--------------|----------|--------|--------------|-------|
| R-001 | Security | Unauthorized access to customer data during consulting engagements | Weak access controls, consultant devices, remote work | Data breach, GDPR violation, customer trust loss, fines | Customer systems, consultant laptops, VPN access | 3 | 5 | 15 | Critical | [TBD - document existing controls] | Reduce | [TBD - MFA, device encryption, access review process] | 6 | CISO | IT Manager | [TBD] | Open | [TBD] | Priority for SaaS services |
| R-002 | Security | Phishing attack compromising employee credentials | Social engineering, lack of awareness, targeted attacks | Account compromise, data access, ransomware deployment | Email system, business systems, customer data | 4 | 4 | 16 | Critical | [TBD - email filtering, basic training] | Reduce | [TBD - security awareness training, phishing simulations, incident response plan] | 8 | CISO | HR Manager | [TBD] | Open | [TBD] | Regular training needed |
| R-003 | Security | Loss or theft of company devices containing customer data | Mobile work, travel, inadequate physical security | Data exposure, confidentiality breach, regulatory violation | Laptops, mobile phones, tablets, backup media | 3 | 4 | 12 | High | [TBD - passwords, some encryption] | Reduce | [TBD - full disk encryption, remote wipe capability, asset tracking] | 6 | CISO | IT Manager | [TBD] | Open | [TBD] | Essential for consultants |
| R-004 | Security | Cloud service provider outage or security incident | Third-party dependency, provider vulnerability | Service unavailability, data loss, customer impact | SaaS platform, cloud infrastructure, customer services | 2 | 4 | 8 | Medium | [TBD - SLA with provider] | Transfer/Reduce | [TBD - multi-region redundancy, backup strategy, incident communication plan] | 4 | CISO | Technical Lead | [TBD] | Open | [TBD] | Critical for SaaS initiative |
| R-005 | Security | Inadequate access control for former employees or contractors | Incomplete offboarding, access review gaps | Unauthorized system access, data theft, sabotage | All IT systems, customer data, business systems | 3 | 4 | 12 | High | [TBD - manual offboarding] | Reduce | [TBD - automated offboarding procedure, regular access reviews, role-based access control] | 4 | CISO | HR Manager | [TBD] | Open | [TBD] | High staff turnover risk |
| R-006 | Security | Supplier security incident affecting Swedwise operations | Third-party vulnerabilities, supply chain attack | Service disruption, data breach, reputational damage | OpenText, Salesforce, Microsoft 365, other vendor systems | 2 | 4 | 8 | Medium | [TBD - vendor SLAs] | Transfer/Reduce | [TBD - vendor security assessment process, contractual security requirements] | 4 | CISO | Procurement Lead | [TBD] | Open | [TBD] | Multiple critical suppliers |
| R-007 | Quality | Service delivery failure at customer site | Insufficient competence, resource shortage, poor planning | Customer dissatisfaction, contract termination, revenue loss | Consulting services, project delivery, customer relationships | 3 | 4 | 12 | High | [TBD - project methodology] | Reduce | [TBD - competence matrix, project quality reviews, customer feedback process] | 6 | Quality Lead | Customer Success Manager | [TBD] | Open | [TBD] | Core business risk |
| R-008 | Quality | Customer complaint not resolved effectively | Unclear process, lack of ownership, communication gaps | Escalation, lost customer, reputational damage | Customer Success process, complaint handling | 3 | 3 | 9 | Medium | [TBD - ad-hoc handling] | Reduce | [TBD - complaint handling procedure, tracking system, root cause analysis] | 4 | Quality Lead | Customer Success Manager | [TBD] | Open | [TBD] | ISO 9001 requirement |
| R-009 | Quality | Competence gaps in critical technical areas | Staff turnover, technology evolution, insufficient training | Project delays, quality issues, customer dissatisfaction | Discipline forums, consulting services, technical delivery | 4 | 3 | 12 | High | [TBD - discipline forums] | Reduce | [TBD - competence assessment process, training plan, knowledge management] | 6 | Quality Lead | Resource Manager | [TBD] | Open | [TBD] | Learning organization focus |
| R-010 | Quality | Non-conformity in project delivery process | Process not followed, lack of awareness, resource pressure | Quality issues, rework, customer complaints, certification risk | Project management process, delivery methodology | 3 | 3 | 9 | Medium | [TBD - basic PM process] | Reduce | [TBD - documented procedures, training, internal audits, management review] | 4 | Quality Lead | PMO Lead | [TBD] | Open | [TBD] | IMS implementation needed |
| R-011 | Environmental | Significant carbon emissions from business travel | Consultant travel, customer meetings, office commutes | Climate impact, regulatory pressure, stakeholder concern | Business travel, carbon footprint, environmental performance | 5 | 2 | 10 | High | [TBD - some remote work] | Reduce | [TBD - travel policy, remote-first approach, emissions tracking, offsetting program] | 6 | Environmental Lead | Operations Manager | [TBD] | Open | [TBD] | Material aspect for IT consulting |
| R-012 | Environmental | Improper disposal of electronic waste | Equipment upgrades, lack of process, unclear responsibility | Environmental harm, legal non-compliance, reputational risk | IT equipment, laptops, servers, mobile devices | 2 | 2 | 4 | Low | [TBD - some recycling] | Reduce | [TBD - e-waste disposal procedure, certified recycling partner, tracking system] | 2 | Environmental Lead | IT Manager | [TBD] | Open | [TBD] | ISO 14001 requirement |
| R-013 | Environmental | Excessive energy consumption in offices | Inefficient equipment, lack of monitoring, staff behavior | Increased costs, carbon footprint, resource waste | Office facilities (Karlstad, Stockholm, Uddevalla) | 3 | 2 | 6 | Medium | [TBD - standard practices] | Reduce | [TBD - energy monitoring, efficient equipment policy, staff awareness] | 3 | Environmental Lead | Operations Manager | [TBD] | Open | [TBD] | Lower priority vs travel |
| R-014 | Environmental | Supplier environmental practices not aligned with Swedwise values | Lack of supplier assessment, no environmental criteria | Indirect environmental impact, reputational risk, value misalignment | Supply chain, procurement, vendor relationships | 2 | 2 | 4 | Low | [TBD - no formal process] | Reduce | [TBD - supplier environmental assessment, procurement criteria] | 2 | Environmental Lead | Procurement Lead | [TBD] | Open | [TBD] | Life-cycle perspective |
| R-015 | Business | Key person dependency in critical roles | Small organization, specialized knowledge, single points of failure | Knowledge loss, service disruption, delivery failure | Technical specialists, key account managers, discipline leads | 4 | 4 | 16 | Critical | [TBD - informal knowledge sharing] | Reduce | [TBD - succession planning, documentation, knowledge transfer process, cross-training] | 8 | CEO | Resource Manager | [TBD] | Open | [TBD] | Strategic business risk |
| R-016 | Business | Major supplier failure or partnership termination | Vendor business issues, contract disputes, market changes | Service delivery impact, revenue loss, customer relationships | OpenText, Salesforce, Microsoft partnerships | 2 | 5 | 10 | High | [TBD - existing contracts] | Transfer/Reduce | [TBD - diversification strategy, alternative suppliers, contingency plans] | 6 | CEO | Business Development Manager | [TBD] | Open | [TBD] | Core business model risk |
| R-017 | Business | Failure to meet public procurement requirements | Lack of certifications, insufficient processes, compliance gaps | Lost opportunities, revenue impact, growth limitation | Certification status, documented processes, compliance evidence | 4 | 3 | 12 | High | [TBD - working towards certification] | Reduce | [TBD - ISO certification project, IMS implementation, procurement readiness] | 4 | CEO | IMS Owner | [TBD] | In Progress | [TBD] | Primary driver for IMS |
| R-018 | Security | Inadequate backup and recovery capabilities | Insufficient backup frequency, untested recovery, incomplete scope | Data loss, extended downtime, business continuity failure | Business systems, customer data, SaaS services | 3 | 4 | 12 | High | [TBD - some backups in place] | Reduce | [TBD - backup policy, tested recovery procedures, RPO/RTO definition] | 6 | CISO | IT Manager | [TBD] | Open | [TBD] | ISO 27001 A.12.3 |
| R-019 | Quality | Internal routines not followed due to external focus | Consultant-heavy culture, weak internal processes, competing priorities | Process breakdown, non-conformities, certification failure | Internal support, maintenance activities, IMS processes | 4 | 3 | 12 | High | [TBD - recognized weakness] | Reduce | [TBD - clear accountability, simplified processes, cultural change, leadership emphasis] | 6 | Quality Lead | Management Team | [TBD] | Open | [TBD] | Cultural challenge identified |
| R-020 | Business | Customer concentration risk | Limited customer base, large customer dependency | Revenue volatility, business impact from single customer loss | Customer portfolio, revenue streams | [TBD] | [TBD] | [TBD] | [TBD] | [TBD - requires analysis] | [TBD] | [TBD - requires risk workshop] | [TBD] | CEO | Customer Development Manager | [TBD] | Open | [TBD] | Requires data analysis |

---

## Risk Register Summary

### Total Risks by Category

| Category | Count | Percentage |
|----------|-------|------------|
| Security | 6 | 30% |
| Quality | 4 | 20% |
| Environmental | 4 | 20% |
| Business | 6 | 30% |
| **Total** | **20** | **100%** |

### Risk Distribution by Level

| Risk Level | Count | Percentage | Risk IDs |
|------------|-------|------------|----------|
| **Critical** | 3 | 15% | R-001, R-002, R-015 |
| **High** | 8 | 40% | R-003, R-005, R-007, R-009, R-011, R-016, R-017, R-018, R-019 |
| **Medium** | 6 | 30% | R-004, R-006, R-008, R-010, R-013 |
| **Low** | 2 | 10% | R-012, R-014 |
| **TBD** | 1 | 5% | R-020 |

### Overdue Actions

[TBD - to be populated after due dates are set]

### Priority Actions Required

Based on current risk assessment, the following critical and high risks require immediate attention:

1. **R-001** (Critical): Unauthorized access to customer data - Essential for SaaS services
2. **R-002** (Critical): Phishing attacks - High likelihood requires immediate training
3. **R-015** (Critical): Key person dependency - Strategic business continuity issue
4. **R-017** (High): Procurement requirements - Primary driver for ISO certification project
5. **R-019** (High): Internal routines not followed - Cultural change needed for IMS success

---

## Risk Register Usage Instructions

### Risk Identification
- Conduct risk workshops with department heads and key stakeholders
- Review risks quarterly as part of management review
- Update register when significant changes occur (new services, market changes, incidents)
- Encourage all staff to report new risks through designated channels

### Risk Assessment
- Use the likelihood and impact scales defined above
- Consider both inherent risk (before controls) and residual risk (after controls)
- Target risk score represents the acceptable level after planned controls are implemented
- Document assumptions and data sources used in risk assessment

### Risk Treatment
- All critical and high risks require documented treatment plans
- Medium risks should be reviewed for cost-effective treatment options
- Low risks may be accepted but should be monitored
- Risk acceptance for high or critical risks requires CEO approval

### Risk Ownership
- **Risk Owner**: Accountable for monitoring the risk and ensuring treatment effectiveness
- **Action Owner**: Responsible for implementing specific treatment actions
- Owners should be at appropriate management level with authority to act

### Review and Monitoring
- Review critical and high risks monthly
- Review medium and low risks quarterly
- Update risk register after incidents or near-misses
- Track treatment action completion and effectiveness
- Report risk status in management review meetings

### Documentation Requirements
- Document rationale for risk acceptance decisions (especially high risks)
- Maintain evidence of risk assessments and reviews
- Link risks to audit findings, incidents, and improvement actions
- Archive superseded risk assessments for audit trail

---

## Related Documents

- **SW-IMS-PRO-002**: Risk Management Procedure
- **SW-IMS-POL-001**: Integrated Management System Policy
- **SW-ISMS-PRO-XXX**: Information Security Risk Assessment Procedure
- **SW-EMS-PRO-XXX**: Environmental Aspects Assessment Procedure
- **SW-QMS-PRO-XXX**: Quality Risk Management Procedure

---

## Revision History

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | IMS Owner | Initial template creation | [TBD] |

---

## Notes for Implementation

### Next Steps for Swedwise:

1. **Risk Workshop Planning** (Priority: Immediate)
   - Schedule risk identification workshop with management team
   - Invite representatives from all departments and discipline forums
   - Prepare context information (organizational context, SWOT analysis)
   - Duration: Half-day workshop recommended

2. **Complete Risk Assessments** (Priority: High)
   - Validate and complete the [TBD] fields in pre-populated risks
   - Add additional risks identified in workshop
   - Document existing controls and their effectiveness
   - Define specific treatment actions with realistic timelines

3. **Assign Risk Owners** (Priority: High)
   - Confirm risk owners for each identified risk
   - Ensure owners understand their responsibilities
   - Assign action owners for planned controls
   - Set review schedules for each risk

4. **Establish Monitoring Process** (Priority: Medium)
   - Define risk reporting format for management review
   - Create monitoring schedule (monthly for critical/high, quarterly for others)
   - Set up risk register maintenance responsibilities
   - Integrate with incident reporting and improvement processes

5. **Integration with IMS** (Priority: Medium)
   - Link risk register to internal audit program (audit high-risk areas more frequently)
   - Connect to management review agenda (standing item)
   - Align with continual improvement process (use risks to prioritize improvements)
   - Reference in relevant procedures (backup, access control, training, etc.)

### Considerations for Swedwise Context:

- **Small Organization**: Keep the process lightweight and practical
- **Learning Organization**: Use risk discussions as learning opportunities, not blame exercises
- **External Focus**: Ensure risk owners can actually monitor despite external work commitments
- **SaaS Initiative**: Prioritize information security risks related to service delivery
- **Certification Goal**: Ensure risk management demonstrates compliance with ISO 31000 principles

### Critical Risks Requiring Immediate Attention:

The pre-populated register identifies **3 critical risks** that require immediate action:
- Unauthorized access to customer data (R-001)
- Phishing attacks (R-002)
- Key person dependency (R-015)

These should be addressed before or during early stages of ISO certification implementation.

---

**Template Status**: Draft - requires completion through risk workshop and management approval
**Completion Target**: [TBD - recommend completion within first month of IMS implementation]
