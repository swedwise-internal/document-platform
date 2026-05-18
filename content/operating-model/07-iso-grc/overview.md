# ISO / GRC – Översikt

## Syfte
Koppla ISO-krav till faktiska aktiviteter och evidens i samma modell.

## Objekt
- Requirements: `dim_iso_requirement`
- Controls: `dim_control`
- Control executions: `fact_control_execution`
- Risk register: `dim_risk` + `fact_risk_assessment`
- Evidence: `dim_evidence` (+ dokumentregister `dim_document`)
- Audit: `dim_audit` + `fact_audit_finding`
- CAPA: `dim_nonconformity` + `fact_corrective_action`
- Generic linking: `bridge_grc_link`

## Praktisk regel
- ISO-certifieringen körs som ett `dim_initiative` (type=InternalImprovement eller eget ISO-program).
- Alla kontroller har owner + frekvens och loggar execution med evidens.
