# Managed Services

> **Offering-typ:** `ManagedServices`
> **Konsultinsats:** `Ja — uppstart alltid, löpande vid driftåtgärder`
> **Faktureringsmodell:** `Prenumeration | Retainer`

## Vad är det?

Swedwise tar driftansvar för kundens miljö. Kunden betalar en fast löpande
avgift och Swedwise hanterar drift, övervakning och förvaltning.

Precis som för support startar ett managed services-avtal alltid med ett
uppstartsprojekt där vi tar över och dokumenterar miljön.

---

## Tjänster

| Tjänst | Konsultinsats | Beskrivning | Tillämpliga produkter |
|--------|--------------|-------------|----------------------|
| Uppstart | Ja (engång) | Överlämning, dokumentation och driftsättning av förvaltningsmodell | Content Management, Service Management, Knowledge Discovery |
| Drift & Övervakning | Nej (automatiserat) | Löpande drift, loggning och larmhantering | Content Management, Service Management, Knowledge Discovery |
| Patchning & Uppgradering | Ja (vid åtgärd) | Planerat underhåll, säkerhetsuppdateringar och versionsuppgraderingar | Content Management, Service Management, Knowledge Discovery |
| Incidenthantering | Ja (vid incident) | Åtgärd vid driftstörning enligt avtalad SLA | Content Management, Service Management, Knowledge Discovery |

---

## Från katalog till avtal

```
Välj tjänster ur listan
  └── Komponeras till ett Commercial Package / SOW
        └── Uppstart → Contract Line (Consulting) + Delivery Plan
        └── Löpande drift → Contract Line (ManagedServices) + Customer Environment
```

---

## Datamodell-koppling

| Fält | Värde |
|------|-------|
| `dim_offering.type` | `ManagedServices` (löpande) / `Consulting` (uppstart) |
| `dim_package_item` | En rad per vald tjänst i paketet |
| `dim_contract_line` | Separata rader för uppstart och löpande drift |
| Uppstart kräver Delivery Plan? | Ja |
| Löpande drift kräver Delivery Plan? | Nej |
| Nyckelobjekt (löpande) | Customer Environment, Ticket, Resource Plan |
