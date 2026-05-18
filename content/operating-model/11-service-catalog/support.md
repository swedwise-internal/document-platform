# Support

> **Offering-typ:** `Support`
> **Konsultinsats:** `Ja — uppstart alltid, löpande vid incidenter`
> **Faktureringsmodell:** `Prenumeration | Retainer | T&M`

## Vad är det?

Supportavtal som ger kunden tillgång till Swedwises expertis vid problem och
frågor. Ett supportavtal startar alltid med ett uppstartsprojekt som säkerställer
att vi känner kunden och miljön innan vi tar supportansvaret.

Precis som för consulting väljer man tjänster ur listan nedan när man sätter
ihop ett erbjudande eller SOW.

---

## Tjänster

| Tjänst | Konsultinsats | Beskrivning | Tillämpliga produkter |
|--------|--------------|-------------|----------------------|
| Uppstart | Ja (engång) | Onboarding av ny supportkund — dokumentation, miljögenomgång, rutiner | Content Management, Service Management, Knowledge Discovery |
| Löpande support | Delvis (vid incident) | Tillgång till support enligt avtalad SLA-nivå | Content Management, Service Management, Knowledge Discovery |
| Proaktiv förvaltning | Ja | Regelbunden genomgång och åtgärd utan att kund behöver höra av sig | Content Management, Service Management, Knowledge Discovery |

---

## Från katalog till avtal

```
Välj tjänster ur listan
  └── Komponeras till ett Commercial Package / SOW
        └── Uppstart → Contract Line (Consulting) + Delivery Plan
        └── Löpande support → Contract Line (Support) + Tickets vid behov
```

---

## Datamodell-koppling

| Fält | Värde |
|------|-------|
| `dim_offering.type` | `Support` (löpande) / `Consulting` (uppstart) |
| `dim_package_item` | En rad per vald tjänst i paketet |
| `dim_contract_line` | Separata rader för uppstart och löpande support |
| Uppstart kräver Delivery Plan? | Ja |
| Löpande support kräver Delivery Plan? | Nej |
| Nyckelobjekt (löpande) | Ticket, SLA, Ticket Worklog |
