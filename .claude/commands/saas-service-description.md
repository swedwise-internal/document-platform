# Generate SaaS Service Description

Generate or update sections of the Swedwise Communications SaaS service description.

## Task
Generate service description section: **$ARGUMENTS** (e.g., "introduction", "support", "sla", "security", "full")

## Available Sections

| Section | Content |
|---------|---------|
| `introduction` | Service overview, multi-tenant model, licensing |
| `standard-service` | Components, infrastructure, operations |
| `support` | Support channels, SLO response times |
| `sla` | Availability targets, measurement, compensation |
| `security` | ISO 27001, access controls, penetration testing |
| `pricing` | Subscription model, units, renewal terms |
| `decommissioning` | Cancellation, data return, obligations |
| `responsibilities` | Customer and Swedwise responsibilities |
| `customization` | Development, configuration, consulting |
| `add-ons` | Optional services (Notifications, SSO, etc.) |
| `full` | Complete service description document |

## Document Structure

```yaml
---
document_id: SW-SAAS-SVC-001
title: Swedwise Communications (SaaS) Service Description
doc_type: service-description
version: "1.0"
status: draft
classification: confidential
owner: SaaS Service Manager
effective_date: YYYY-MM-DD
---
```

## Key Service Parameters

| Parameter | Value |
|-----------|-------|
| Service Name | Swedwise Communications (SaaS) |
| Platform | OpenText Communications (Exstream) + Notifications |
| Data Center | Sweden (via Entiros AB) |
| Uptime Target | >= 99.9% |
| Backup Frequency | Every 6 hours |
| Backup Retention | 7 days |
| Maintenance Window (Weekly) | Saturday 18:00-20:00 CET |
| Maintenance Window (Monthly) | Saturday 18:00 - Sunday 02:00 CET |

## Support SLO

| Level | Category | Initial Response | Technical Response | Resolution |
|-------|----------|-----------------|-------------------|------------|
| A | Critical | 15 min | 30 min | 2 hours |
| B | Serious | 15 min | 1 hour | N/A |
| C | Minor | 15 min | 8 hours | N/A |

## Reference Templates

- Primary template: `../project-scaffolder/docs/SaaS Draft/02_service-definition/service-description.md`
- PDF reference: `../project-scaffolder/docs/SaaS Draft/OpenText Communications on SaaS Service Description 2025.10.14.pdf`

## Writing Guidelines

1. Use "The Company" to refer to Swedwise AB
2. Use "The Service" to refer to Swedwise Communications SaaS
3. Be precise about SLOs vs SLAs (objectives vs agreements)
4. Include Swedish-specific compliance (GDPR, Swedish data residency)
5. Reference ISO 27001 certification appropriately

## Output

Save to: `content/saas/service-description/[section-name].md` or `content/saas/service-description.md` for full document
