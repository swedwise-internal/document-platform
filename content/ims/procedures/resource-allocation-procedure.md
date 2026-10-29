---
document_id: SW-QMS-PRO-006
title: Resource Allocation Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: Resource Management Lead
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
related_documents:
  - SW-QMS-PRO-001
  - SW-QMS-PRO-004
  - SW-QMS-PRO-007
  - SW-IMS-PRO-012
  - SW-IMS-PRO-004
---

# Resource Allocation Procedure

**Document ID**: SW-QMS-PRO-006-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: Resource Management Lead (held by the CSO)
**Approved by**: [TBD]

## 1. Purpose

This procedure describes how Swedwise assigns its people — and subcontractors — to projects, assignments and
support, so that what sales promises can be delivered, nobody is over-booked, and gaps are seen before they
are late. It is the procedure of the process *Resource allocation* (process owner: CSO).

## 2. Scope

This procedure applies to all consultants in Professional Services, project managers, and subcontractors'
people booked on Swedwise projects; to every engagement type (project, maintenance, support, resource
assignment, internal, presales); and to probable deals not yet won.

**Out of scope**: recruitment (HR management process), competence development (SW-IMS-PRO-012), selecting and
contracting subcontractor firms (SW-QMS-PRO-007).

## 3. Where the work runs

Resource planning runs in **Nexta Hub** (hub function *Delivery*). The plan is the projects' activities:
an activity's estimate, dates and assigned people are each person's planned load per week; a manual booking
is only for work that has no activity (`delivery.activity-plan`).

| Hub part | Used for |
|----------|----------|
| Capacity and absence (`delivery.capacity`) | What each person can work per week: hours per day less Swedish public holidays and absence; absence is kept in the hub |
| Resource planning (`delivery.resource-plan`) | Bookings per person or role and week; preliminary on a draft project, firm once signed |
| Pipeline as demand (`delivery.demand`) | Probable deals as demand per level and week, weighted by probability |
| Workload per consultant (`delivery.workload`, `delivery.workload-view`) | Per person and week: capacity, planned load, preliminary load, reported time and what is free; over-booked weeks first |
| Unstaffed work (`delivery.unstaffed-work`) | Planned work with no person, per role and week |
| Staffing proposals (`delivery.staffing-proposal`) | AI-proposed people and dates; nothing applies until the consultant manager accepts it |
| Competence and CVs (`delivery.competence`) | Skills, certifications and assignments used to staff |
| Delivery overview (`delivery.overview`) | All projects, a team, a project or a consultant: load against capacity and conflicts; replanning as a draft |
| Utilisation (`profitability.utilisation`) | Billable time against capacity looking back; bookings against capacity looking ahead |

While Swedwise still reports time in TimeLog, the hub reads time from TimeLog every night (`time.external`), so
reported time in the workload comes from there until the switch.

## 4. Roles and Responsibilities

| Role (job) | Responsibilities |
|------------|------------------|
| **Resource Management Lead (CSO)** | Owns this procedure; decides between projects when demand exceeds capacity; decides on hiring or subcontractors; follows utilisation |
| **Group manager (consultant manager)** | Staffs the activities of their people; accepts or rejects staffing proposals; agrees what is promised with sales; keeps the week's plan realistic |
| **Project manager** | Keeps the project's activities, estimates and dates current, so the plan is right |
| **Consultant** | Registers absence in the hub; reports time; tells the group manager when an estimate will not hold |
| **Account manager / deal owner** | Keeps deal probability and expected start current; drafts staffing on a quote but does not decide |
| **HR** | Registers changes to normal working time from the date they apply `[the hub part delivery.working-time is planned]` |

## 5. Procedure

### Step 1: Keep capacity true

1. Each consultant registers absence in the hub as soon as it is known (`delivery.capacity`); the plan shows it
   the same week.
2. A person's normal working time (hours per day or part time) is kept current from the date it changes.

### Step 2: See the demand

Demand comes from three places, all visible in the workload and the delivery overview:

- **Signed work**: activities of active projects, maintenance and support agreements, recurring tasks
- **Probable deals**: deals sales will probably win, weighted by probability (`delivery.demand`)
- **Unstaffed work**: activities with an estimate and dates but no person, per role (`delivery.unstaffed-work`)

### Step 3: Agree staffing before a consulting quote is sent

1. For a quote with consulting, the group manager staffs the quote's activities — by hand or from the hub's
   staffing proposals, which respect levels, skills, free capacity, absence and dependencies
   (`delivery.staffing-proposal`).
2. The group manager and the seller agree what is promised — activities, estimates, staffing and dates — and
   record it on the deal (`sales.delivery-agreement`, SW-QMS-PRO-004 step 4).
3. Bookings on the deal's draft project are preliminary.

### Step 4: Make bookings firm on signature

When the consulting contract is signed, the project is activated and its bookings become firm
(`delivery.resource-plan`). The project's first gate, handover from sales, checks that the people are named
(SW-QMS-PRO-001).

### Step 5: Review the workload every week

Every week `[to confirm: day and forum]` each group manager reviews their people's workload:

1. Over-booked weeks (shown first) are resolved: move dates, move work to someone else, or accept a staffing
   proposal that resolves them. A proposal records who accepted it and when.
2. Unstaffed work is given to a person before it is late; assigning a person moves the hours from the role's
   unstaffed demand to that person's load.
3. People without enough load are offered to other groups, to presales or to internal work.
4. Conflicts between projects that a group manager cannot solve go to the CSO.

### Step 6: Close capacity gaps

When the demand ahead exceeds capacity for a role (seen in the pipeline against capacity,
`sales.pipeline-impact`, and the delivery overview), the CSO decides between:

- a later start, agreed with the customer through the account manager
- a subcontractor: the firm is selected and contracted under SW-QMS-PRO-007; its people are invited to the hub,
  booked and report their own time (`parties.people`)
- recruitment, raised to the CEO and HR `[to confirm: recruitment decision forum]`

### Step 7: Follow up

Monthly, the CSO reviews utilisation per consultant and group — billable against capacity looking back, and
bookings against capacity looking ahead, with overbooking and bench time (`profitability.utilisation`) — and
reports it to the management review (SW-IMS-PRO-004).

## 6. Records

All records are in the hub.

| Record | Where | Owner |
|--------|-------|-------|
| Absence and normal working time | Hub (capacity) | Consultant / HR |
| Bookings and activity assignments | Hub (resource plan, project activities) | Group manager |
| Accepted staffing proposals with who and when | Hub (staffing proposals) | Group manager |
| Delivery agreement on the deal | Hub (deal) | Group manager |
| Competence and certifications | Hub (`delivery.competence`) | Consultant / group manager |
| Utilisation reports | Hub (profitability) | CSO |

## 7. Key Performance Indicators

| KPI | Definition | Source of the number | Target |
|-----|------------|----------------------|--------|
| Utilisation | Billable hours / capacity per consultant and month | Hub (`profitability.utilisation`) | `[to confirm: billing target]` |
| Over-booked person-weeks | Person-weeks in the next 8 weeks where planned load exceeds capacity | Hub workload (`delivery.workload`) | 0 at the end of the weekly review |
| Unstaffed demand ahead | Unstaffed hours per role in the next 4 weeks | Hub (`delivery.unstaffed-work`) | 0 at the end of the weekly review |
| Projects started on the promised date | Share of won consulting deals started on the date agreed with delivery | Hub projects and deals | `[to confirm]` |
| Bench time | Hours of capacity without load, per month | Hub (`profitability.utilisation`) | `[to confirm]` |

## 8. Related Documents

- SW-QMS-PRO-001 Service Delivery Procedure
- SW-QMS-PRO-004 Sales Procedure
- SW-QMS-PRO-007 Partner and Vendor Management Procedure
- SW-IMS-PRO-012 Competence and Training Procedure
- SW-IMS-PRO-004 Management Review Procedure
- ISO 9001:2015 clause 7.1.2 (People), 8.1 (Operational planning and control)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-10-29 | Resource Management Lead (draft) | First version, written from how staffing runs in the hub |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Resource Management Lead (CSO) | | | |
| IMS Owner (COO) | | | |
