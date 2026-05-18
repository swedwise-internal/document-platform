# 1. Syfte & scope

## Syfte
Skapa en **systemoberoende canonical modell** som ger full spårbarhet från **sälj → avtal → leverans → drift/support → ekonomi**,
och som samtidigt bär ett **ISO/GRC-lager** (krav/kontroller/evidens/audit/CAPA).

## Scope (vad vi modellerar)
- Konsult (T&M, fastpris, milstolpar)
- Support (SLA, tickets, worklog, cost-to-serve)
- Licenser (multi-vendor, olika metrics, maintenance)
- Managed services (kundmiljöer, driftägarskap, SLA)
- SaaS (tenants, subscriptions, drift)
- Egna produkter (product catalog, releases/deliverables)
- ISO (9001/27001/14001) via GRC-objekt

## Systemoberoende
Modellen beskriver begrepp och relationer. Externa system integreras via:
- `dim_source_system`
- `map_source_key`

## Målbild
- **Customer Program** som ankare för Land & Expand
- **Work Package** som kostnadsbärare
- **Customer Health** + **Growth Signals** som tillväxtmotor
- **ISO-evidens** direkt kopplad till verkliga leveranser och incidenter
