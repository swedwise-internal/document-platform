# 2. Designprinciper & begreppslista

## Designprinciper
1. **Canonical först** – modellen ska fungera oavsett ERP/CRM/TID/SUPPORT.
2. **Work Package som kostnadsbärare** – tid, kostnad och gärna faktura kopplas hit.
3. **Initiative som programlager** – kundprogram, produkt, ISO, konferens.
4. **Work Items som cross-system aktiviteter** – med evidence-länk till var det utfördes.
5. **Enums för datakvalitet** – stage/status/priority/billing model/delivery mode etc.
6. **ISO/GRC som lager** – krav → kontroll → evidens → audit → CAPA.
7. **Land & Expand som loop** – Expand är ny affär under samma Customer Program.

## Begreppslista (kort)
- **Customer Program**: Långlivat initiative per kund, håller ihop land/expand.
- **Engagement**: Kunduppdrag/projektkärna (kan vara leveransprojekt eller retainer).
- **Commercial Package**: Strukturerad lista av vad som säljs (PS + support + licens + managed + SaaS).
- **Contract Line**: Minsta kommersiella åtagandet (typ, pris, period, billing, delivery mode, SKU).
- **Delivery Plan**: Leveransplan som instansierar work packages/deliverables.
- **Work Package**: Leverans-/kostnadsbärande komponent som tid/kostnad/faktura kan kopplas till.
- **Deliverable**: Leverabel (dokument, workshop, release, go-live) med acceptansstatus.
- **Customer Environment**: Tenant/installation/miljö (prod/test/dev) som supportas/driftas.
- **Entitlement**: Kundens licensrättighet (SKU, metric, quantity, period).
- **Customer Health**: Periodisk snapshot (hälsa & potential).
- **Growth Signal**: Trigger för expansion (t.ex. license near limit, high ticket volume).
- **ISO Evidence**: Bevis (ticket, dokument, logg, minutes, audit record).
