---
document_id: SW-IMS-PRO-002
title: Risk Assessment Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: IMS Owner
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
related_documents:
  - SW-IMS-POL-001
  - SW-ISMS-POL-001
  - SW-EMS-POL-001
---

# Risk Assessment Procedure

**Document ID**: SW-IMS-PRO-002-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner
**Approved by**: [TBD]

## 1. Purpose

This procedure establishes a systematic, integrated approach to identifying, analyzing, evaluating, and treating risks and opportunities across Swedwise's quality, environmental, and information security management systems. It ensures:

- Risks and opportunities are identified in a structured manner
- Risk assessment is consistent across all management system domains
- Appropriate risk treatment decisions are made based on objective criteria
- Risk owners are clearly assigned and accountable
- Risk registers are maintained and regularly reviewed

## 2. Scope

This procedure applies to all risk assessment activities within Swedwise's Integrated Management System, including:

- **Quality risks** (ISO 9001): Service delivery failures, customer dissatisfaction, process non-conformities
- **Environmental aspects and impacts** (ISO 14001): Energy use, travel emissions, waste, resource consumption
- **Information security risks** (ISO 27001): Confidentiality breaches, integrity issues, availability disruptions
- **Strategic and operational risks**: Business continuity, supplier dependencies, competence gaps

The procedure covers all Swedwise locations (Karlstad, Stockholm, Uddevalla), all business activities (consulting, software licensing, SaaS services), and all organizational units.

## 3. Definitions

| Term | Definition |
|------|------------|
| **Risk** | Effect of uncertainty on objectives. Can be positive (opportunity) or negative (threat). |
| **Likelihood** | The chance of something happening, rated on a 5-point scale (Rare to Almost Certain). |
| **Impact** | The consequence or severity if a risk occurs, rated on a 5-point scale (Negligible to Critical). |
| **Risk Score** | Calculated value: Likelihood × Impact. Used to prioritize risks. |
| **Risk Level** | Category based on risk score: Low (1-4), Medium (5-9), High (10-14), Critical (15-25). |
| **Risk Owner** | Person accountable for monitoring and managing a specific risk. |
| **Risk Treatment** | Process to modify risk through: Avoid, Reduce, Transfer, or Accept. |
| **Inherent Risk** | Risk level before controls are applied. |
| **Residual Risk** | Risk level remaining after controls are implemented. |
| **Control** | Measure that modifies risk (preventive, detective, or corrective). |
| **Asset** | Anything of value to the organization (information, systems, processes, reputation). |
| **Threat** | Potential cause of an unwanted incident (for information security). |
| **Vulnerability** | Weakness that can be exploited by a threat. |
| **Environmental Aspect** | Element of activities, products, or services that interacts with the environment. |
| **Environmental Impact** | Change to the environment resulting from an environmental aspect. |
| **Statement of Applicability (SoA)** | Document defining which ISO 27001 Annex A controls apply to Swedwise. |

## 4. Risk Assessment Methodology

### 4.1 Risk Matrix (5×5)

Swedwise uses a 5×5 risk matrix to ensure consistent risk evaluation across all domains.

#### Likelihood Scale

| Score | Level | Description | Frequency Guide |
|-------|-------|-------------|-----------------|
| 1 | Rare | May occur only in exceptional circumstances | < Once per 5 years |
| 2 | Unlikely | Could occur but not expected | Once per 2-5 years |
| 3 | Possible | Might occur at some time | Once per year |
| 4 | Likely | Will probably occur | Multiple times per year |
| 5 | Almost Certain | Expected to occur in most circumstances | Monthly or more frequently |

#### Impact Scale

| Score | Level | Description | Impact Examples |
|-------|-------|-------------|-----------------|
| 1 | Negligible | Minimal impact, easily absorbed | Minor inconvenience, <10k SEK, no customer impact |
| 2 | Minor | Some impact, manageable with existing resources | Temporary disruption, 10-50k SEK, limited customer impact |
| 3 | Moderate | Significant impact requiring dedicated response | Service degradation, 50-250k SEK, customer complaints |
| 4 | Major | Serious impact affecting core operations | Service outage, 250k-1M SEK, contract breach, regulatory notice |
| 5 | Critical | Severe impact threatening business viability | Major data breach, >1M SEK, business closure risk, criminal liability |

#### Risk Score Calculation

**Risk Score = Likelihood × Impact**

#### Risk Level Matrix

|   | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Critical (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | 5 - Medium | 10 - High | 15 - Critical | 20 - Critical | 25 - Critical |
| **Likely (4)** | 4 - Low | 8 - Medium | 12 - High | 16 - Critical | 20 - Critical |
| **Possible (3)** | 3 - Low | 6 - Medium | 9 - Medium | 12 - High | 15 - Critical |
| **Unlikely (2)** | 2 - Low | 4 - Low | 6 - Medium | 8 - Medium | 10 - High |
| **Rare (1)** | 1 - Low | 2 - Low | 3 - Low | 4 - Low | 5 - Medium |

#### Risk Levels and Required Actions

| Risk Level | Score Range | Required Action | Treatment Timeline |
|------------|-------------|-----------------|-------------------|
| **Low** | 1-4 | Accept with monitoring. Document rationale. | Review annually |
| **Medium** | 5-9 | Monitor closely. Reduce where cost-effective. | Review quarterly, treat within 6 months |
| **High** | 10-14 | Implement risk treatment plan. Escalate to management. | Immediate action plan, treat within 3 months |
| **Critical** | 15-25 | Immediate action required. Senior management approval needed to accept. | Immediate escalation, treat within 1 month |

### 4.2 Risk Acceptance Criteria

- **Low risks**: May be accepted by Risk Owner with documentation
- **Medium risks**: Require Risk Owner approval and documented justification
- **High risks**: Require IMS Owner approval and formal treatment plan
- **Critical risks**: Require Management Team approval; acceptance only in exceptional circumstances with documented rationale and CEO sign-off

## 5. Risk Categories

Risks are classified into categories to ensure comprehensive coverage:

### 5.1 Quality Risks (ISO 9001)

Risks affecting ability to meet customer requirements and deliver quality services:

- Service delivery failures (consultant unavailability, project delays)
- Customer dissatisfaction (unmet expectations, communication failures)
- Process non-conformities (deviation from procedures)
- Competence gaps (insufficient skills for customer requirements)
- Supplier quality issues (third-party software/service failures)
- Scope creep and project overruns

### 5.2 Environmental Aspects and Impacts (ISO 14001)

Activities that interact with the environment and their potential impacts:

| Environmental Aspect | Potential Impact | Typical Likelihood | Typical Severity |
|---------------------|------------------|-------------------|------------------|
| Office energy consumption | Climate change, resource depletion | Almost Certain | Minor |
| Business travel (flights, car) | Air pollution, GHG emissions | Likely | Moderate |
| IT equipment procurement | Resource extraction, manufacturing impacts | Possible | Minor |
| E-waste disposal | Soil/water contamination, resource loss | Possible | Moderate |
| Paper consumption | Deforestation, waste generation | Likely | Minor |
| Cloud infrastructure energy use | Climate change (indirect) | Almost Certain | Minor |

**Note**: Environmental aspects are assessed for both normal operations and abnormal/emergency conditions.

### 5.3 Information Security Risks (ISO 27001)

Risks to confidentiality, integrity, and availability of information assets:

- **Confidentiality**: Unauthorized access to customer data, business secrets, or personal information
- **Integrity**: Unauthorized modification of data, systems, or configurations
- **Availability**: Service disruptions, system outages, denial of service
- **Access Control**: Weak authentication, excessive privileges, insider threats
- **Supplier/Third-Party**: Cloud provider security, software vulnerabilities, supply chain attacks
- **Physical Security**: Device theft, unauthorized office access
- **Compliance**: GDPR violations, contractual breaches, regulatory non-compliance

### 5.4 Strategic and Operational Risks

- Market risks (competition, changing customer needs)
- Supplier dependency (single-source dependencies, vendor lock-in)
- Customer concentration (over-reliance on key customers)
- Financial risks (cash flow, currency fluctuations)
- Resource availability (recruitment, retention, allocation conflicts)
- Regulatory changes (new compliance requirements)
- Reputational risks (negative publicity, social media)

## 6. Risk Assessment Process

The risk assessment process follows a structured approach adapted to the risk category:

### 6.1 Planning the Risk Assessment

**Frequency**:
- Annual comprehensive risk assessment (all categories)
- Quarterly review of high and critical risks
- Triggered assessments when:
  - New projects, services, or technologies are introduced
  - Significant organizational changes occur
  - Major incidents or near-misses happen
  - Customer requirements change
  - Regulatory environment changes
  - Audit findings or recommendations are issued

**Participants**:
- IMS Owner (facilitator)
- CISO (information security)
- Quality Lead (quality and customer risks)
- Environmental Lead (environmental aspects)
- Department Heads (operational risks)
- Subject matter experts as needed

**Preparation**:
1. Schedule risk assessment workshop (half-day minimum)
2. Gather previous risk registers and review outcomes
3. Collect incident reports, audit findings, customer feedback
4. Identify organizational changes since last assessment
5. Review external context (regulations, market, threats)

### 6.2 Step 1: Asset and Activity Identification

#### For Information Security Risks:

Identify and classify information assets:

| Asset Category | Examples |
|----------------|----------|
| Information assets | Customer databases, contracts, financial records, employee data, intellectual property |
| Software assets | SaaS platforms, development tools, CRM, ERP, productivity software |
| Hardware assets | Laptops, mobile devices, servers, network equipment, backup systems |
| Services | Cloud hosting (AWS/Azure/Google), email, collaboration tools, backup services |
| Personnel | Key roles, privileged access, knowledge holders |
| Intangible assets | Reputation, customer trust, brand, partnerships |

**Asset Owners** are assigned responsibility for each critical asset.

#### For Environmental Aspects:

Identify activities that interact with the environment:

- Office operations (heating, cooling, lighting, IT equipment)
- Business travel (air, rail, car)
- Procurement (hardware, software, office supplies)
- Waste management (e-waste, paper, general waste)
- Supplier activities (cloud infrastructure, SaaS providers)

#### For Quality and Operational Risks:

Identify key processes and activities:

- Customer acquisition and sales
- Service delivery and consulting
- Project management
- SaaS platform operations
- Customer support and success
- Resource management and training
- Supplier management

### 6.3 Step 2: Threat, Hazard, and Aspect Identification

#### Information Security Threats:

| Threat Category | Examples |
|-----------------|----------|
| Malicious external | Hacking, phishing, ransomware, DDoS attacks, social engineering |
| Malicious internal | Insider theft, sabotage, unauthorized access |
| Accidental | Human error, misconfiguration, accidental deletion, lost devices |
| Environmental | Fire, flood, power outage, natural disasters |
| Technical | Hardware failure, software bugs, network outages, capacity limits |
| Supplier/Third-party | Cloud provider breach, software vulnerabilities, vendor bankruptcy |

#### Environmental Aspects:

Identify aspects from Step 6.2 and assess their environmental impacts:
- Air emissions (CO2, pollutants)
- Resource consumption (energy, water, materials)
- Waste generation (e-waste, paper, general)
- Land use and biodiversity (minimal for Swedwise)

#### Quality and Operational Hazards:

- Process failures (missing steps, unclear procedures)
- Resource constraints (staff shortages, budget limits)
- External dependencies (supplier failures, market changes)
- Customer expectations (unclear requirements, scope changes)

### 6.4 Step 3: Vulnerability and Weakness Analysis

For each asset/activity, identify vulnerabilities that threats could exploit:

| Asset | Threat | Vulnerability | Example |
|-------|--------|--------------|---------|
| Laptops with customer data | Theft | Weak encryption, no remote wipe | Consultant laptop stolen from car |
| SaaS platform | Unauthorized access | Weak password policy, no MFA | Compromised user account |
| Email system | Phishing | Insufficient security awareness | Employee clicks malicious link |
| Project delivery | Scope creep | Weak change control process | Project overruns budget |

### 6.5 Step 4: Likelihood Assessment

Using the 5-point scale (Section 4.1), assess the likelihood of each risk scenario considering:

- **Historical data**: Has this occurred before at Swedwise or in similar organizations?
- **Current controls**: What preventive measures are already in place?
- **Threat landscape**: How active/sophisticated are threat actors in this area?
- **Exposure**: How often is the asset/activity exposed to the threat?
- **Complexity**: How easy is it for the risk to materialize?

**Example Likelihood Assessment**:

| Risk Scenario | Historical Frequency | Existing Controls | Threat Activity | Likelihood Score |
|---------------|---------------------|-------------------|-----------------|------------------|
| Consultant laptop stolen | 1 incident in 3 years | Disk encryption, remote wipe | Common (property crime) | 2 - Unlikely |
| Phishing email success | 2 incidents per year | Email filtering, some training | Very high | 4 - Likely |
| Customer data breach | No incidents | Access controls, encryption | High in industry | 3 - Possible |

### 6.6 Step 5: Impact Assessment

Using the 5-point scale (Section 4.1), assess the impact if the risk occurs considering:

#### Multiple Impact Dimensions:

| Dimension | Considerations |
|-----------|---------------|
| **Financial** | Direct costs, fines, legal fees, lost revenue, remediation costs |
| **Customer** | Service disruption, customer loss, contract penalties, satisfaction impact |
| **Operational** | Process disruption, productivity loss, recovery time |
| **Legal/Compliance** | Regulatory fines, legal liability, contractual breaches |
| **Reputational** | Media coverage, customer trust, brand damage, recruitment impact |
| **Environmental** | Magnitude of environmental impact, reversibility, stakeholder concern |

**Use the highest impact dimension** to determine the overall impact score.

**Example Impact Assessment**:

| Risk Scenario | Financial | Customer | Legal | Reputational | Impact Score |
|---------------|-----------|----------|-------|--------------|--------------|
| Laptop theft (encrypted) | 20k SEK | None | Low (GDPR breach notification) | Minimal | 2 - Minor |
| Customer data breach (100 records) | 200k SEK | Contract loss | GDPR fine | Significant negative publicity | 4 - Major |
| SaaS outage (4 hours) | 50k SEK | Service disruption | Contractual penalty | Moderate concern | 3 - Moderate |

### 6.7 Step 6: Risk Calculation

Calculate risk score for each identified risk:

**Risk Score = Likelihood × Impact**

**Example**:

| Risk ID | Risk Scenario | Likelihood | Impact | Risk Score | Risk Level |
|---------|---------------|------------|--------|------------|------------|
| R001 | Phishing email success leading to account compromise | 4 | 3 | 12 | High |
| R002 | Encrypted laptop theft | 2 | 2 | 4 | Low |
| R003 | Customer data breach (unauthorized access) | 3 | 4 | 12 | High |
| R004 | SaaS platform outage (4+ hours) | 3 | 3 | 9 | Medium |
| R005 | Business travel CO2 emissions | 5 | 2 | 10 | High |

### 6.8 Step 7: Risk Evaluation

For each risk, evaluate against acceptance criteria (Section 4.2):

1. **Compare risk score to risk levels**
2. **Consider risk velocity**: How quickly could this risk materialize?
3. **Assess risk interdependencies**: Does this risk trigger other risks?
4. **Evaluate existing controls**: Are current controls adequate and effective?
5. **Determine if risk is acceptable** based on criteria in Section 4.2

**Output**: Prioritized list of risks requiring treatment, ordered by risk score and strategic importance.

### 6.9 Step 8: Risk Treatment Selection

For each unacceptable risk, select appropriate treatment option(s):

#### Treatment Options:

| Treatment | Description | When to Use | Examples |
|-----------|-------------|-------------|----------|
| **Avoid** | Eliminate the risk source or change objectives to avoid risk | Risk too high, no cost-effective controls exist | Stop offering a high-risk service; don't enter a risky market; prohibit storage of sensitive data on laptops |
| **Reduce** | Implement controls to reduce likelihood and/or impact | Most common option; cost-effective controls available | Deploy MFA, conduct security awareness training, implement backup systems, establish change control |
| **Transfer** | Share the risk with another party | Financial or specialized risks | Purchase cyber insurance, use SLAs with cloud providers, outsource to specialist suppliers |
| **Accept** | Retain the risk without additional treatment | Low risks or treatment cost exceeds benefit | Accept minor environmental aspects, low-value asset risks |

#### Control Types:

- **Preventive**: Stop the risk from occurring (access controls, policies, training)
- **Detective**: Identify when risk materializes (monitoring, audits, alerts)
- **Corrective**: Reduce impact after occurrence (incident response, backups, insurance)

**Risk Treatment Plan Template**:

| Risk ID | Treatment Option | Controls to Implement | Owner | Target Date | Budget | Success Criteria |
|---------|-----------------|----------------------|-------|-------------|--------|------------------|
| R001 | Reduce | MFA deployment, quarterly phishing simulations | CISO | [Date] | 50k SEK | MFA 100% adoption, <5% phishing click rate |

## 7. Documentation Requirements

### 7.1 Integrated Risk Register

All identified risks are documented in the **Integrated Risk Register** (SW-IMS-FRM-003):

**Minimum fields**:

| Field | Description |
|-------|-------------|
| Risk ID | Unique identifier (R001, R002, etc.) |
| Risk Category | Quality, Environmental, Information Security, Strategic/Operational |
| Risk Description | Clear description of the risk scenario |
| Asset/Process | Asset or process affected |
| Threat/Aspect | Specific threat or environmental aspect |
| Risk Owner | Person accountable for the risk |
| Inherent Likelihood | Likelihood before controls (1-5) |
| Inherent Impact | Impact before controls (1-5) |
| Inherent Risk Score | Likelihood × Impact (before controls) |
| Existing Controls | Current controls in place |
| Control Effectiveness | How well do existing controls work? (Low/Medium/High) |
| Residual Likelihood | Likelihood after existing controls (1-5) |
| Residual Impact | Impact after existing controls (1-5) |
| Residual Risk Score | Likelihood × Impact (after controls) |
| Risk Level | Low, Medium, High, Critical |
| Treatment Decision | Avoid, Reduce, Transfer, Accept |
| Additional Controls Planned | New controls to implement |
| Treatment Owner | Person implementing treatment |
| Target Completion Date | When treatment should be complete |
| Status | Open, In Progress, Completed, Accepted |
| Review Date | When risk will be reviewed next |
| Last Review Date | When risk was last assessed |

**Location**: [TBD - SharePoint/Document Management System]

### 7.2 Environmental Aspects Register (ISO 14001)

A specialized register for environmental aspects derived from the Integrated Risk Register:

| Aspect | Activity | Impact | Significance (Risk Score) | Controls | Monitoring |
|--------|----------|--------|--------------------------|----------|------------|
| Energy consumption | Office operations | Climate change, resource depletion | 10 (High) | Energy-efficient equipment, remote work policy | Quarterly energy bill review |
| Business travel | Consulting, sales | GHG emissions, air pollution | 10 (High) | Virtual meeting preference, travel approval | Annual carbon footprint calculation |

**Location**: [TBD]

### 7.3 Statement of Applicability (SoA) - ISO 27001

The SoA documents which ISO 27001 Annex A controls are applicable to Swedwise and justification for inclusion/exclusion:

| Annex A Control | Control Name | Applicable? | Justification | Implementation Status | Reference |
|-----------------|--------------|-------------|---------------|----------------------|-----------|
| 5.1 | Policies for information security | Yes | Mandatory foundational control | Implemented | SW-ISMS-POL-001 |
| 5.7 | Threat intelligence | Partially | Limited resources for full threat intel; rely on vendor feeds | Implemented | Security monitoring procedure |
| 8.1 | User endpoint devices | Yes | Consultants use laptops with customer data | Implemented | Device management procedure |

**Location**: [TBD]
**Review Frequency**: Annual or when risk assessment changes significantly

### 7.4 Risk Treatment Plan

For risks requiring treatment, a detailed Risk Treatment Plan is created:

**Contents**:
- Risk ID and description
- Current risk score and target risk score
- Controls to be implemented (preventive, detective, corrective)
- Implementation timeline (milestones)
- Resource requirements (budget, personnel, tools)
- Responsibilities (treatment owner, contributors)
- Success criteria (how will we know treatment is effective?)
- Review and monitoring plan

**Approval**:
- Medium risks: IMS Owner
- High/Critical risks: Management Team

**Location**: [TBD]

### 7.5 Risk Assessment Report

After each comprehensive risk assessment, a summary report is produced:

**Contents**:
- Executive summary
- Assessment scope and participants
- Methodology used
- Key findings (top 10 risks)
- Changes since last assessment
- Risk treatment recommendations
- Resources required
- Next review date

**Audience**: Management Team, Department Heads, IMS Owner
**Location**: [TBD]

## 8. Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **Management Team** | - Approve risk acceptance criteria<br>- Review and approve treatment plans for high/critical risks<br>- Allocate resources for risk treatment<br>- Review risk assessment results in management review<br>- Approve Statement of Applicability |
| **IMS Owner** | - Coordinate and facilitate risk assessment process<br>- Maintain Integrated Risk Register<br>- Monitor risk treatment progress<br>- Escalate high/critical risks to management<br>- Ensure annual risk assessments are completed<br>- Produce risk assessment reports<br>- Maintain this procedure |
| **CISO** | - Lead information security risk assessments<br>- Identify information security threats and vulnerabilities<br>- Recommend information security controls<br>- Maintain Statement of Applicability<br>- Monitor threat landscape<br>- Report security risks to IMS Owner and Management |
| **Quality Lead** | - Identify quality and operational risks<br>- Assess customer satisfaction risks<br>- Monitor process performance<br>- Recommend quality improvement controls |
| **Environmental Lead** | - Identify environmental aspects<br>- Assess environmental impacts and significance<br>- Maintain Environmental Aspects Register<br>- Recommend environmental controls<br>- Monitor environmental performance |
| **Department Heads** | - Participate in risk assessments for their areas<br>- Identify operational risks within their departments<br>- Act as Risk Owners for departmental risks<br>- Implement assigned risk treatments<br>- Report new/changed risks to IMS Owner |
| **Risk Owners** | - Monitor assigned risks<br>- Ensure controls are implemented and effective<br>- Report changes in risk status<br>- Implement risk treatment actions<br>- Review risks at specified intervals<br>- Escalate risks exceeding tolerance |
| **All Employees** | - Report potential risks and incidents<br>- Follow documented procedures and controls<br>- Participate in risk awareness activities<br>- Suggest risk mitigation improvements |

## 9. Review Frequency

### Comprehensive Risk Assessment:
- **Annually** (minimum) - Full review of all risk categories
- **Major organizational changes** - New services, office locations, significant headcount changes, strategic pivots
- **Regulatory changes** - New laws, standards, or customer requirements

### Ongoing Risk Monitoring:
- **Quarterly** - Review of high and critical risks; update risk register
- **Monthly** - CISO reviews information security threat landscape
- **Continuous** - Risk owners monitor their assigned risks

### Triggered Reviews:
Risk assessments are conducted when:
- Security incidents or data breaches occur
- Significant environmental incidents happen
- Major customer complaints or service failures occur
- Audit findings identify new risks or inadequate controls
- New technologies, services, or business models are introduced
- Supplier or customer relationships significantly change
- Market or competitive landscape shifts

## 10. Records to Maintain

| Record | Retention Period | Location | Owner |
|--------|-----------------|----------|-------|
| Integrated Risk Register | Current + 3 years | [TBD] | IMS Owner |
| Risk Assessment Reports | 7 years | [TBD] | IMS Owner |
| Environmental Aspects Register | Current + 3 years | [TBD] | Environmental Lead |
| Statement of Applicability (SoA) | Current + 3 years | [TBD] | CISO |
| Risk Treatment Plans | Until superseded + 3 years | [TBD] | Risk Treatment Owner |
| Risk Review Meeting Minutes | 3 years | [TBD] | IMS Owner |
| Incident Reports (triggering risk reviews) | 5 years | [TBD] | IMS Owner |
| Management approval of risk acceptance | 5 years | [TBD] | IMS Owner |

## 11. Related Documents

- **SW-IMS-POL-001** - Integrated Management System Policy
- **SW-ISMS-POL-001** - Information Security Policy
- **SW-EMS-POL-001** - Environmental Policy
- **SW-QMS-POL-001** - Quality Policy
- **SW-IMS-PRO-001** - Document Control Procedure
- **SW-IMS-PRO-003** - Incident Management Procedure
- **SW-IMS-PRO-004** - Internal Audit Procedure
- **SW-IMS-PRO-005** - Management Review Procedure
- **SW-IMS-FRM-003** - Integrated Risk Register Template
- **SW-IMS-FRM-004** - Risk Treatment Plan Template
- **SW-ISMS-FRM-001** - Statement of Applicability Template
- **SW-EMS-FRM-001** - Environmental Aspects Register Template

## 12. Continuous Improvement

This risk assessment procedure is subject to continuous improvement:

- Lessons learned from risk assessments are documented
- Effectiveness of risk treatments is measured
- Risk assessment methodology is refined based on experience
- Benchmarking against industry best practices
- Incorporation of audit findings and recommendations

**Suggestions for improvement** should be submitted to the IMS Owner using the Improvement Suggestion Form (SW-IMS-FRM-002).

---

## Appendix A: Risk Assessment Workshop Agenda Template

**Purpose**: Annual comprehensive risk assessment
**Duration**: Half-day (4 hours)
**Participants**: IMS Owner, CISO, Quality Lead, Environmental Lead, Department Heads, SMEs

### Agenda:

| Time | Activity | Responsible |
|------|----------|-------------|
| 0:00-0:15 | Welcome, objectives, review of methodology | IMS Owner |
| 0:15-0:30 | Review of previous year's risks and treatment outcomes | IMS Owner |
| 0:30-1:30 | **Information Security Risks**<br>- Asset identification<br>- Threat and vulnerability analysis<br>- Likelihood and impact assessment | CISO |
| 1:30-1:45 | Break | - |
| 1:45-2:30 | **Quality and Operational Risks**<br>- Process and service risks<br>- Customer satisfaction risks<br>- Supplier and resource risks | Quality Lead, Dept Heads |
| 2:30-3:00 | **Environmental Aspects**<br>- Activity and aspect identification<br>- Impact and significance assessment | Environmental Lead |
| 3:00-3:30 | **Risk Prioritization and Treatment Planning**<br>- Review all identified risks<br>- Prioritize by risk score<br>- Assign risk owners<br>- Determine treatment approaches | All |
| 3:30-4:00 | **Next Steps and Close**<br>- Agree on risk treatment priorities<br>- Assign action items<br>- Schedule follow-up meetings<br>- Set next review date | IMS Owner |

### Post-Workshop Actions:
1. IMS Owner updates Integrated Risk Register
2. Risk Treatment Plans created for high/critical risks
3. Risk Assessment Report drafted and circulated
4. Management Team review and approval
5. Communication to all staff

---

## Appendix B: Example Risk Scenarios for Swedwise

### Information Security

| Risk ID | Risk Scenario | Likelihood | Impact | Score | Level |
|---------|---------------|------------|--------|-------|-------|
| IS-001 | Phishing attack leading to compromised email account | 4 | 3 | 12 | High |
| IS-002 | Laptop theft containing unencrypted customer data | 2 | 5 | 10 | High |
| IS-003 | Unauthorized access to SaaS platform via weak password | 3 | 4 | 12 | High |
| IS-004 | Cloud provider outage affecting SaaS service delivery | 3 | 3 | 9 | Medium |
| IS-005 | Insider threat - employee exfiltrating customer data | 1 | 5 | 5 | Medium |
| IS-006 | Ransomware attack encrypting business systems | 2 | 4 | 8 | Medium |
| IS-007 | GDPR compliance breach due to inadequate data retention | 3 | 4 | 12 | High |

### Quality

| Risk ID | Risk Scenario | Likelihood | Impact | Score | Level |
|---------|---------------|------------|--------|-------|-------|
| Q-001 | Consultant unavailability causing project delay | 4 | 3 | 12 | High |
| Q-002 | Scope creep leading to project budget overrun | 4 | 3 | 12 | High |
| Q-003 | Customer dissatisfaction due to unclear requirements | 3 | 3 | 9 | Medium |
| Q-004 | Service quality issues due to competence gaps | 3 | 3 | 9 | Medium |
| Q-005 | Supplier (software vendor) discontinuing product support | 2 | 4 | 8 | Medium |

### Environmental

| Risk ID | Environmental Aspect | Impact | Likelihood | Severity | Score | Level |
|---------|---------------------|--------|------------|----------|-------|-------|
| E-001 | Office energy consumption (heating, cooling, IT) | Climate change | 5 | 2 | 10 | High |
| E-002 | Business travel (flights for customer meetings) | GHG emissions | 5 | 2 | 10 | High |
| E-003 | E-waste from laptop/equipment disposal | Soil/water contamination | 3 | 2 | 6 | Medium |
| E-004 | Paper consumption (printing, office supplies) | Deforestation, waste | 4 | 1 | 4 | Low |
| E-005 | Cloud infrastructure energy use (SaaS hosting) | Climate change (indirect) | 5 | 2 | 10 | High |

### Strategic/Operational

| Risk ID | Risk Scenario | Likelihood | Impact | Score | Level |
|---------|---------------|------------|--------|-------|-------|
| S-001 | Customer concentration - loss of top 3 customers | 2 | 5 | 10 | High |
| S-002 | Difficulty recruiting qualified consultants | 4 | 3 | 12 | High |
| S-003 | Supplier dependency on single cloud provider | 3 | 4 | 12 | High |
| S-004 | Competitive pressure from larger consulting firms | 4 | 3 | 12 | High |
| S-005 | Economic downturn reducing IT consulting demand | 3 | 4 | 12 | High |

**Note**: These are illustrative examples. Actual risk assessments must be conducted with relevant stakeholders.

---

## Appendix C: Quick Reference - Risk Assessment Process

```
1. PLAN
   - Schedule workshop
   - Gather participants
   - Review previous risks

2. IDENTIFY
   - Assets/Activities
   - Threats/Aspects
   - Vulnerabilities

3. ANALYZE
   - Assess Likelihood (1-5)
   - Assess Impact (1-5)
   - Calculate Risk Score (L × I)

4. EVALUATE
   - Determine Risk Level
   - Compare to acceptance criteria
   - Prioritize risks

5. TREAT
   - Select treatment: Avoid, Reduce, Transfer, Accept
   - Plan controls
   - Assign owners and deadlines

6. DOCUMENT
   - Update Risk Register
   - Create Treatment Plans
   - Update SoA (ISO 27001)
   - Update Aspects Register (ISO 14001)

7. MONITOR
   - Quarterly: High/Critical risks
   - Annual: Comprehensive review
   - Continuous: Risk owner monitoring
```

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| IMS Owner | | | |
| CISO | | | |
| Management Team Representative | | | |
