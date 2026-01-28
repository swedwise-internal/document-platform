---
document_id: SW-EMS-REG-001
title: Environmental Aspects Register
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: Environmental Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 14001
required_for_certification: true
related_documents:
  - SW-EMS-POL-001
  - SW-IMS-PRO-002
---

# Environmental Aspects Register

## 1. Purpose

This Environmental Aspects Register identifies and evaluates the environmental aspects of Swedwise AB's activities, products, and services to determine which aspects have or can have significant environmental impacts, as required by ISO 14001:2015 Clause 6.1.2.

## 2. Scope

This register covers:

- **Office Operations**: All three Swedwise offices (Karlstad HQ, Stockholm, Uddevalla)
- **Business Travel**: Air, car, and rail travel for business purposes
- **IT Equipment**: Hardware, consumables, and e-waste
- **Procurement**: Goods and services purchased
- **Customer Delivery**: On-site consulting and remote service delivery
- **SaaS Operations**: Cloud infrastructure and data center impacts (indirect)

## 3. Significance Evaluation Criteria

| Criterion | Description | Score Range |
|-----------|-------------|-------------|
| **Scale** | Magnitude of environmental impact | 1-5 (1=minimal, 5=severe) |
| **Frequency** | How often the aspect occurs | 1-5 (1=rare, 5=continuous) |
| **Legal Requirement** | Subject to legal/regulatory requirement | Y/N (adds +5 if Yes) |
| **Stakeholder Concern** | Level of stakeholder interest/concern | 1-5 (1=low, 5=high) |

**Significance Score** = (Scale × Frequency) + Stakeholder Concern + (Legal × 5)

**Significance Threshold**:
- **Score ≥ 15**: Significant aspect (requires objectives, targets, and controls)
- **Score 10-14**: Moderate aspect (monitor and consider for improvement)
- **Score < 10**: Low significance (routine monitoring)

---

## 4. Environmental Aspects Register

### 4.1 Office Operations - Energy & Resources

| Aspect ID | Activity | Environmental Aspect | Environmental Impact | Condition | Scale | Freq | Legal | Stakeholder | Score | Significant? | Control Measures | Owner |
|-----------|----------|---------------------|---------------------|-----------|-------|------|-------|-------------|-------|--------------|------------------|-------|
| EA-001 | Office lighting and equipment | Electricity consumption | Climate change, resource depletion | Normal | 3 | 5 | N | 4 | 19 | **Y** | LED lighting, auto-off timers, energy-efficient equipment | Facility Manager |
| EA-002 | Office HVAC | Heating/cooling energy use | Climate change | Normal | 4 | 5 | N | 3 | 23 | **Y** | Temperature controls, regular maintenance | Facility Manager |
| EA-003 | Office water usage | Water consumption | Resource depletion | Normal | 2 | 4 | N | 2 | 10 | N | Low-flow fixtures | Facility Manager |
| EA-004 | Office waste generation | General waste to landfill | Land pollution, resource loss | Normal | 3 | 5 | N | 3 | 18 | **Y** | Waste sorting, recycling programs | Environmental Lead |
| EA-005 | Office paper use | Paper consumption | Deforestation, resource depletion | Normal | 2 | 3 | N | 2 | 8 | N | Digital-first policy, double-sided printing | IT Manager |

### 4.2 Business Travel

| Aspect ID | Activity | Environmental Aspect | Environmental Impact | Condition | Scale | Freq | Legal | Stakeholder | Score | Significant? | Control Measures | Owner |
|-----------|----------|---------------------|---------------------|-----------|-------|------|-------|-------------|-------|--------------|------------------|-------|
| EA-006 | Employee air travel | Aviation fuel emissions | Climate change (high CO2/km) | Normal | 5 | 3 | N | 5 | 20 | **Y** | Virtual meetings default, travel approval process | Resource Manager |
| EA-007 | Employee car travel | Vehicle fuel emissions | Air pollution, climate change | Normal | 4 | 4 | N | 4 | 20 | **Y** | Car pooling, public transport incentives | Resource Manager |
| EA-008 | Employee train travel | Rail electricity use | Climate change (low CO2/km) | Normal | 1 | 3 | N | 2 | 5 | N | Preferred travel mode | Resource Manager |

### 4.3 IT Equipment & Operations

| Aspect ID | Activity | Environmental Aspect | Environmental Impact | Condition | Scale | Freq | Legal | Stakeholder | Score | Significant? | Control Measures | Owner |
|-----------|----------|---------------------|---------------------|-----------|-------|------|-------|-------------|-------|--------------|------------------|-------|
| EA-009 | IT equipment disposal | Electronic waste (WEEE) | Toxic pollution, resource loss | Normal | 3 | 2 | **Y** | 4 | 15 | **Y** | WEEE-certified recyclers, asset tracking | IT Manager |
| EA-010 | IT equipment energy | Equipment energy consumption | Climate change | Normal | 3 | 5 | N | 3 | 18 | **Y** | Energy Star equipment, power management | IT Manager |
| EA-011 | Printer consumables | Toner cartridges, batteries | Hazardous waste | Normal | 2 | 2 | **Y** | 2 | 11 | N | Supplier take-back programs | IT Manager |

### 4.4 Procurement & Supply Chain

| Aspect ID | Activity | Environmental Aspect | Environmental Impact | Condition | Scale | Freq | Legal | Stakeholder | Score | Significant? | Control Measures | Owner |
|-----------|----------|---------------------|---------------------|-----------|-------|------|-------|-------------|-------|--------------|------------------|-------|
| EA-012 | Hardware purchasing | Supplier environmental practices | Indirect manufacturing impacts | Normal | 3 | 3 | N | 3 | 12 | N | Supplier environmental questionnaire | Procurement Lead |
| EA-013 | Cloud services | Data center energy consumption | Climate change (indirect) | Normal | 4 | 5 | N | 4 | 24 | **Y** | Green cloud providers, resource optimization | CTO/CISO |

### 4.5 Service Delivery

| Aspect ID | Activity | Environmental Aspect | Environmental Impact | Condition | Scale | Freq | Legal | Stakeholder | Score | Significant? | Control Measures | Owner |
|-----------|----------|---------------------|---------------------|-----------|-------|------|-------|-------------|-------|--------------|------------------|-------|
| EA-014 | On-site consulting | Travel to customer sites | Emissions, air pollution | Normal | 3 | 4 | N | 3 | 15 | **Y** | Remote delivery where possible | Delivery Manager |
| EA-015 | Customer use of solutions | Energy use of deployed systems | Indirect operational emissions | Normal | 3 | 5 | N | 2 | 17 | **Y** | Energy-efficient design | Development Lead |

---

## 5. Significant Environmental Aspects Summary

Based on the evaluation, the following aspects are **significant** and require environmental objectives:

1. **EA-001**: Office electricity consumption (Score: 19)
2. **EA-002**: HVAC energy use (Score: 23)
3. **EA-004**: Office waste generation (Score: 18)
4. **EA-006**: Employee air travel (Score: 20)
5. **EA-007**: Employee car travel (Score: 20)
6. **EA-009**: Electronic waste disposal (Score: 15)
7. **EA-010**: IT equipment energy (Score: 18)
8. **EA-013**: Cloud services data center energy (Score: 24)
9. **EA-014**: Travel to customer sites (Score: 15)
10. **EA-015**: Customer use of solutions (Score: 17)

---

## 6. Priority Improvement Opportunities

### High Priority

1. **Green Electricity**: Switch all offices to 100% renewable energy
2. **Travel Reduction**: Implement travel reduction targets and virtual-first policy
3. **Cloud Optimization**: Select carbon-neutral cloud regions and optimize resource use
4. **Circular Economy**: Extend IT equipment life and establish refurbishment programs

### Medium Priority

5. **Zero Waste Office**: Implement comprehensive waste reduction and recycling
6. **Sustainable Procurement**: Formal environmental criteria for suppliers
7. **Green Software**: Design energy-efficient solutions for customers

---

## 7. Roles & Responsibilities

| Role | Responsibility |
|------|---------------|
| **Environmental Lead** | Overall register maintenance, significance evaluation, annual review |
| **Facility Manager** | Office energy, waste, water data collection and controls |
| **IT Manager** | IT equipment aspects, e-waste management, energy efficiency |
| **Resource Manager** | Travel data collection, travel policy enforcement |
| **CTO/CISO** | Cloud infrastructure environmental impacts |
| **Delivery Manager** | Customer site impacts, remote delivery promotion |

---

## 8. Review & Update Process

This register shall be reviewed:

- **Annually** as part of management review
- When significant changes occur (new offices, services, equipment)
- After incidents with environmental impact
- When legal requirements change

---

## Related Documents

- **SW-EMS-POL-001**: Environmental Policy
- **SW-IMS-PRO-002**: Risk Assessment Procedure
- **SW-IMS-REG-001**: Integrated Risk Register

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | Environmental Lead | Initial draft | [TBD] |

**Next Review Date**: [TBD - typically 12 months from effective date]
