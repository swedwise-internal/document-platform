# Create LMS Training Course

Create a new training course with modules and assessments.

## Task
Create training course: **$ARGUMENTS** (e.g., "information-security-awareness", "new-hire-onboarding")

## Instructions

1. Determine course structure based on topic
2. Create course content in Markdown format
3. Include assessment questions
4. Configure course metadata

## Course Document Structure

```yaml
---
document_id: SW-TRN-XXX
title: [Course Title]
doc_type: training

training:
  course_id: [slug]
  duration: [estimated minutes]

  target_audience:
    - all_staff          # Everyone
    - new_hire           # New employees
    - management         # Managers only
    - technical          # Technical staff
    - customer_facing    # Client-facing roles

  required_for:
    - new_hire           # Part of onboarding
    - annual_refresh     # Annual requirement
    - role_specific      # When assigned

  prerequisites:
    - ims-awareness      # Must complete first

  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
    time_limit: 15
    randomize_questions: true
    show_correct_answers: true

  validity_period: 12
  certificate_template: standard

  modules:
    - id: intro
      title: Introduction
      estimated_time: 5
      type: content
    - id: main-content
      title: Core Concepts
      estimated_time: 15
      type: content
    - id: practical
      title: Practical Application
      estimated_time: 10
      type: content
    - id: assessment
      title: Knowledge Check
      type: assessment
---

# [Course Title]

## Introduction

[Hook - why this matters]

## Learning Objectives

By the end of this course, you will be able to:
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

---

## Module 1: [Title]

### [Topic]

[Content...]

### Key Points

- Point 1
- Point 2
- Point 3

---

## Module 2: [Title]

[Content...]

---

## Module 3: Practical Application

### Scenario 1

[Scenario description]

**What would you do?**

[Guidance]

---

## Assessment Questions

<!--
Questions are stored as YAML at the end of the document
or in a separate file. Format:
-->

```yaml
questions:
  - id: q1
    type: multiple_choice
    text: "Which of the following is true about..."
    options:
      - id: a
        text: "Option A"
      - id: b
        text: "Option B"
      - id: c
        text: "Option C"
      - id: d
        text: "Option D"
    correct_answers: [b]
    explanation: "Option B is correct because..."
    points: 1

  - id: q2
    type: true_false
    text: "Statement to evaluate"
    options:
      - id: true
        text: "True"
      - id: false
        text: "False"
    correct_answers: [true]
    explanation: "This is true because..."
    points: 1

  - id: q3
    type: multi_select
    text: "Select ALL that apply..."
    options:
      - id: a
        text: "Option A"
      - id: b
        text: "Option B"
      - id: c
        text: "Option C"
    correct_answers: [a, c]
    explanation: "Both A and C are correct..."
    points: 2
```

---

## Summary

Key takeaways:
1. [Takeaway 1]
2. [Takeaway 2]
3. [Takeaway 3]

## Additional Resources

- [Link to policy]
- [Link to procedure]
- [External resource]
```

## Standard Courses for IMS

### Core Courses (Required for All)

| Course | Content Source | Duration |
|--------|---------------|----------|
| IMS Awareness | ims-awareness-training.md | 30 min |
| Information Security Basics | security-awareness.md | 45 min |
| Quality Fundamentals | quality-awareness.md | 20 min |
| Environmental Responsibility | environmental-awareness.md | 15 min |

### Role-Specific Courses

| Course | Target Audience | Duration |
|--------|-----------------|----------|
| Data Handling for Consultants | customer_facing | 30 min |
| Secure Remote Working | all_staff | 20 min |
| Incident Response | technical | 25 min |
| Supplier Management | management | 20 min |

### Refresher Courses (Annual)

| Course | Original Course | Duration |
|--------|-----------------|----------|
| IMS Annual Refresh | IMS Awareness | 15 min |
| Security Refresh | Security Basics | 15 min |

## Assessment Guidelines

### Question Distribution
- 60% knowledge recall
- 30% application/scenario
- 10% analysis/judgment

### Question Count by Duration
| Course Duration | Questions |
|-----------------|-----------|
| < 20 min | 5-8 |
| 20-30 min | 8-12 |
| 30-45 min | 12-15 |
| > 45 min | 15-20 |

## Output

Save course content to: `content/training/[course-id].md`
