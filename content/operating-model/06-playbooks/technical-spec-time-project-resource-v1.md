# Technical Specification v1
## Time, Project & Resource Planning

---

# 1. Purpose

Defines minimum functional and technical scope for:

- Engagement / Delivery structure
- Work Packages
- Resource planning
- Time tracking
- Capacity planning
- Budget vs Actual
- Forecasting

Supports consulting, support, managed services, SaaS and internal initiatives.

---

# 2. Core Principle

All work (planned and actual) MUST attach to a Work Package.

Deal → Contract Line → Delivery Plan → Work Package → Time/Cost/Invoice

Work Package is the financial atomic unit.

---

# 3. Core Entities

- dim_engagement
- dim_delivery_plan
- dim_work_package
- fact_budget_line
- fact_resource_plan
- fact_time_entry
- fact_project_status

---

# 4. Work Package Spec

Required fields:

- work_package_id
- delivery_plan_id
- contract_line_id (nullable)
- name
- planned_start_date_id
- planned_end_date_id
- status
- acceptance_criteria

Financial:

- budget_hours
- budget_amount
- forecast_hours_remaining
- forecast_cost_remaining

Rules:

1. Billable time requires work_package_id
2. Internal projects allowed
3. Support retainers may use monthly WP

---

# 5. Resource Planning

## Capacity (per resource, per month)

- resource_id
- period_month_id
- capacity_hours
- planned_hours
- actual_hours

## Signed Work

fact_resource_plan:

- period_month_id
- work_package_id
- resource_id (optional)
- role
- planned_hours

## Time Entry

fact_time_entry:

- date_id
- resource_id
- work_package_id
- hours
- bill_rate
- cost_rate

---

# 6. Core Calculations

Utilization % = actual_billable_hours / capacity_hours  
Remaining Hours = budget_hours − actual_hours  
Capacity Gap = capacity_hours − planned_hours  
Margin = Revenue − Cost  

---

# 7. API (v1)

GET /engagements  
POST /engagement  
POST /work-package  
POST /resource-plan  
POST /time-entry  
GET /capacity?period=YYYYMM  

---

# 8. Definition of Done

✔ Work Packages exist  
✔ Resource Plan exists  
✔ Time attaches to WP  
✔ Capacity view works  
✔ Budget vs Actual visible  

---

END
