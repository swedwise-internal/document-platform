# License

> **Offering-typ:** `License`
> **Konsultinsats:** `Nej`
> **Faktureringsmodell:** `Engångsavgift (Perpetual) | Prenumeration (Term)`

## Vad är det?

Vidareförsäljning av tredjepartslicenser. Kunden får rättighet att använda
en produkt enligt definierade villkor (metric, kvantitet, period).

---

## Licenstyper

### Perpetual

Kunden köper en permanent äganderätt till mjukvaran (en specifik version).
Betalas som en engångsavgift.

- **Underhåll (Maintenance)** säljs separat, vanligen årsvis
- Maintenance ger rätt till nya versioner och support från vendorn
- Kunden kan välja att inte förnya maintenance — då äger de fortfarande licensen men får inte uppgraderingar
- `end_date` är null — licensen löper ut aldrig
- `maintenance_end_date` är det kritiska datumet att bevaka

### Term

Kunden hyr rätten att använda mjukvaran under en definierad period.
Betalas löpande (månadsvis, kvartalsvis eller årsvis).

- Licensen upphör om den inte förnyas
- `end_date` är alltid satt
- Maintenance ingår typiskt i prenumerationspriset

---

## Metrics

Licenser mäts och prissätts per enhet. Vilken metric som gäller beror på produkten.

| Metric | Beskrivning |
|--------|-------------|
| `NamedUser` | Specifika, namngivna användare |
| `ConcurrentUser` | Antal samtidiga inloggningar |
| `CPU` | Antal processorer |
| `Core` | Antal CPU-kärnor |
| `Instance` | Antal serverinstanser |
| `GB` | Datamängd (lagring eller indexerat innehåll) |
| `Document` | Antal dokument / poster |
| `Other` | Annat (definieras per produkt) |

---

## Vendors

| Vendor | Produktlinjer | Fil |
|--------|---------------|-----|
| OpenText | Content Management, Service Management, Knowledge Discovery | [opentext.md](vendors/opentext.md) |
| *(lägg till)* | | |

---

## Datamodell-koppling

| Fält | Värde |
|------|-------|
| `dim_offering.type` | `License` |
| `dim_sku.license_type` | `Perpetual` eller `Term` |
| `dim_sku.license_metric` | Beror på produkt (se metrics ovan) |
| `dim_license_entitlement.license_type` | `Perpetual` eller `Term` |
| `dim_license_entitlement.end_date_id` | null för Perpetual |
| `dim_license_entitlement.maintenance_end_date_id` | Satt för Perpetual |
| Kräver Delivery Plan? | Nej |
| Kräver Work Package? | Nej |
| Kräver License Entitlement? | **Ja** |
