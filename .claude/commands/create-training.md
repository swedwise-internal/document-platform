# Create IMS Training Material

Generate training material for the Swedwise Integrated Management System.

## Task
Create training material for: **$ARGUMENTS**

## Instructions

1. Read relevant policies and procedures from `templates/`
2. Read Swedwise organizational context from `../project-scaffolder/docs/Context Documents/`
3. Consider the target audience (primarily consultants who work externally)

## Training Material Structure

```markdown
# Training: [Topic Title]

**Module ID**: SW-TRN-[NUMBER]
**Duration**: [Estimated time]
**Target Audience**: [Who should take this training]
**Prerequisites**: [Any required prior training]

## Learning Objectives

By the end of this training, participants will be able to:
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

## Introduction
[Why this topic matters to Swedwise and the individual]

## Key Concepts

### [Concept 1]
[Explanation with practical examples]

### [Concept 2]
[Explanation with practical examples]

## How This Applies at Swedwise

### Your Role
[What the trainee needs to do]

### Common Scenarios
[Real-world examples relevant to consultants]

### What to Watch Out For
[Common mistakes and how to avoid them]

## Quick Reference Guide

| Situation | Action | Who to Contact |
|-----------|--------|----------------|
| [Scenario] | [Step] | [Contact] |

## Knowledge Check

1. [Question 1]
   - A) [Option]
   - B) [Option]
   - C) [Option]

2. [Question 2]
   - A) [Option]
   - B) [Option]
   - C) [Option]

## Resources
- [Link to policy]
- [Link to procedure]
- [Additional reading]

## Summary
[Key takeaways in 3-5 bullet points]

## Feedback
Questions or suggestions? Contact [IMS Owner/Role]
```

## Training Topics by Standard

### Quality (ISO 9001)
- Customer focus and satisfaction
- Process approach
- Continuous improvement (PDCA)
- Handling non-conformities
- Documentation requirements

### Environmental (ISO 14001)
- Environmental aspects and impacts
- Legal compliance
- Waste management
- Energy efficiency
- Sustainable practices

### Information Security (ISO 27001)
- Information classification
- Access control
- Password and authentication
- Incident reporting
- Remote working security
- Data protection (GDPR)

## Context Requirements

- Keep content practical and relevant to daily work
- Use Swedwise examples and scenarios
- Consider that most staff work at client sites
- Include "Make Time For The Good" philosophy connection
- Make it engaging - avoid dry, compliance-only tone

## Output

Save training material to: `docs/training-materials/[topic]-training.md`
