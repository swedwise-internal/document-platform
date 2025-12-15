# Create SaaS Support Procedure

Generate support and operations procedures for Swedwise Communications SaaS.

## Task
Create support procedure: **$ARGUMENTS** (e.g., "incident-management", "change-management", "monitoring", "backup-restore", "escalation")

## Procedure Types

### incident-management
Complete incident management procedure:

```markdown
## Incident Management Procedure

### Purpose
Define the process for detecting, responding to, and resolving incidents.

### Scope
All incidents affecting Swedwise Communications SaaS service availability or functionality.

### Incident Categories

| Level | Category | Definition | Response | Resolution Target |
|-------|----------|------------|----------|-------------------|
| A | Critical | Service down, data loss risk | 15 min / 30 min | 2 hours |
| B | Serious | Major functionality affected | 15 min / 1 hour | Best effort |
| C | Minor | Limited impact, workaround exists | 15 min / 8 hours | Best effort |

### Process Flow

1. **Detection**
   - Customer report via service portal
   - Monitoring alert
   - Internal discovery

2. **Logging**
   - Create ticket in service portal
   - Capture: customer, description, impact, time

3. **Classification**
   - Assess severity (A/B/C)
   - Assign priority
   - Route to appropriate team

4. **Initial Response**
   - Acknowledge receipt
   - Provide case number
   - Set customer expectations

5. **Investigation**
   - Technical analysis
   - Root cause identification
   - Solution development

6. **Resolution**
   - Implement fix
   - Verify service restored
   - Test functionality

7. **Communication**
   - Update customer on progress
   - Provide resolution summary
   - Document workarounds if applicable

8. **Closure**
   - Customer confirmation
   - Update knowledge base
   - Close ticket

9. **Review** (Level A/B incidents)
   - Post-incident review
   - Document lessons learned
   - Update procedures if needed
```

### change-management
Change management procedure including:
- Change types (Standard/Normal/Emergency)
- CAB process
- Approval workflow
- Implementation checklist
- Rollback procedures

### monitoring
Monitoring and alerting procedure:
- What is monitored (infrastructure, application, security)
- Alert thresholds
- Escalation triggers
- Response actions
- Tools and dashboards

### backup-restore
Backup and restore procedure:
- Backup schedule (every 6 hours)
- Retention policy (7 days)
- Restore process
- Disaster recovery
- Testing schedule

### escalation
Escalation procedure:
- Internal escalation path (L1 → L2 → L3)
- OpenText escalation
- Management escalation
- Contact information
- When to escalate

## Customer Communication Templates

### Incident Alert
```
Subject: [Incident Alert] Swedwise Communications - [Brief Description]

Bästa kund,

Vi upplever för närvarande [kort beskrivning av problem].

**Påverkan**: [Vad som är påverkat]
**Status**: [Nuvarande status]
**Förväntad lösning**: [ETA om känt]

Vi återkommer med uppdateringar var [30 min/1 timme].

Med vänliga hälsningar,
Swedwise SaaS Operations
```

### Incident Resolved
```
Subject: [Resolved] Swedwise Communications - [Brief Description]

Bästa kund,

Incidenten rapporterad [datum/tid] är nu löst.

**Orsak**: [Kort beskrivning]
**Åtgärd**: [Vad som gjordes]
**Påverkan**: [Total påverkan/tid]

Kontakta support om ni upplever fortsatta problem.

Med vänliga hälsningar,
Swedwise SaaS Operations
```

### Planned Maintenance
```
Subject: [Planerat underhåll] Swedwise Communications - [Datum]

Bästa kund,

Vi kommer att utföra planerat underhåll enligt nedan.

**Tid**: [Start] - [Slut] CET
**Påverkan**: [Beskrivning av påverkan]
**Åtgärd krävs**: [Eventuella kundåtgärder]

Tack för er förståelse.

Med vänliga hälsningar,
Swedwise SaaS Operations
```

## SLA Parameters

| Metric | Target | Measurement |
|--------|--------|-------------|
| Availability | >= 99.9% | Quarterly |
| Initial Response | 15 minutes | Per ticket |
| Critical Resolution | 2 hours | Per incident |

## Compensation Scheme

| Uptime | Compensation |
|--------|-------------|
| < 98% | 30% of 1 month |
| 98.0-98.9% | 20% of 1 month |
| 99.0-99.8% | 10% of 1 month |

## Reference Materials

- Operational procedures: `../project-scaffolder/docs/SaaS Draft/07_operations-and-maintenance/operational-procedures.md`
- Incident management: `../project-scaffolder/docs/SaaS Draft/03_delivery-organization/process-flows/incident-management.md`
- Change management: `../project-scaffolder/docs/SaaS Draft/07_operations-and-maintenance/change-management.md`
- Monitoring: `../project-scaffolder/docs/SaaS Draft/07_operations-and-maintenance/monitoring-plan.md`

## Output

Save to: `content/saas/operations/[procedure-name].md`
