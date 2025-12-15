# IMS Gap Analysis

Perform a gap analysis against ISO standard requirements.

## Task
Analyze gaps against: **$ARGUMENTS** (e.g., "ISO 27001", "ISO 9001", "ISO 14001", or "all")

## Instructions

1. Read existing Swedwise documentation from:
   - `../project-scaffolder/docs/Context Documents/Draft ISMS content/`
   - `../project-scaffolder/docs/Context Documents/`

2. Read sample ISMS documentation from:
   - `../project-scaffolder/docs/Sample Documentation/`

3. For each ISO standard clause, assess:
   - **Current State**: What exists now?
   - **Required State**: What does the standard require?
   - **Gap**: What is missing?
   - **Priority**: High/Medium/Low
   - **Effort**: Low/Medium/High
   - **Recommendation**: How to close the gap

## ISO Standard Clause Structure

### ISO 9001:2015 (Quality)
- Clause 4: Context of the Organization
- Clause 5: Leadership
- Clause 6: Planning
- Clause 7: Support
- Clause 8: Operation
- Clause 9: Performance Evaluation
- Clause 10: Improvement

### ISO 14001:2015 (Environmental)
- Clause 4: Context of the Organization
- Clause 5: Leadership
- Clause 6: Planning
- Clause 7: Support
- Clause 8: Operation
- Clause 9: Performance Evaluation
- Clause 10: Improvement

### ISO 27001:2022 (Information Security)
- Clause 4: Context of the Organization
- Clause 5: Leadership
- Clause 6: Planning
- Clause 7: Support
- Clause 8: Operation
- Clause 9: Performance Evaluation
- Clause 10: Improvement
- Annex A: Information Security Controls (93 controls)

## Output Format

```markdown
# Gap Analysis Report: [Standard]

**Date**: [Date]
**Analyst**: Claude Code
**Scope**: Swedwise AB

## Executive Summary
[High-level findings and recommendations]

## Detailed Gap Analysis

### Clause [X]: [Name]

| Requirement | Current State | Gap | Priority | Effort | Recommendation |
|-------------|---------------|-----|----------|--------|----------------|
| [X.1] | [Description] | [Gap] | [H/M/L] | [L/M/H] | [Action] |

## Quick Wins
[Items that can be addressed easily]

## Priority Actions
[Items requiring immediate attention]

## Resource Requirements
[Estimated effort and resources needed]

## Recommended Implementation Sequence
1. [Phase 1 items]
2. [Phase 2 items]
3. [Phase 3 items]
```

## Output

Save the gap analysis to: `docs/gap-analysis/[standard]-gap-analysis.md`
