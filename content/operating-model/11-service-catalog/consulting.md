# Consulting

> **Offering-typ:** `Consulting`
> **Konsultinsats:** `Ja, alltid`
> **Faktureringsmodell:** `T&M | FastPris | Milstolpe | Blandad`

## Vad är det?

Konsulttjänster där Swedwises personal utför arbete för kund. Tjänsterna är
generella och kan kopplas till en eller flera produkter.

Listan nedan är den meny man väljer ifrån när man sätter ihop ett erbjudande,
ett avtal eller en SOW. En kombination av valda tjänster formar ett projekt.

---

## Tjänster

| Tjänst | Beskrivning | Tillämpliga produkter |
|--------|-------------|----------------------|
| Implementation | Nyinstallation och grundkonfiguration | Content Management, Service Management, Knowledge Discovery |
| Uppgradering | Versionsuppgradering av befintlig installation | Content Management, Service Management, Knowledge Discovery |
| Migration | Flytt av data eller system till ny miljö | Content Management, Service Management, Knowledge Discovery |
| Konfiguration | Anpassning och inställningar i befintligt system | Content Management, Service Management, Knowledge Discovery |
| Integration | Kopplingar mot andra system och plattformar | Content Management, Service Management, Knowledge Discovery |
| Arkitektur & Rådgivning | Teknisk rådgivning och lösningsdesign | Generell |
| Projektledning | Ledning och styrning av leveransprojekt | Generell |

---

## Från katalog till projekt

```
Välj tjänster ur listan
  └── Komponeras till ett Commercial Package / SOW
        └── Instansieras som Contract Lines på ett kontrakt
              └── Genererar Delivery Plan + Work Packages
                    └── Tid, kostnad och fakturering kopplas per Work Package
```

---

## Datamodell-koppling

| Fält | Värde |
|------|-------|
| `dim_offering.type` | `Consulting` |
| `dim_package_item` | En rad per vald tjänst i paketet |
| `dim_contract_line` | En rad per tjänst på kontraktet |
| Kräver Delivery Plan? | Ja |
| Kräver Work Package? | Ja |
| Kräver License Entitlement? | Nej |
