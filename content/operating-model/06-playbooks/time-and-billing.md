# Tidsregistrering och fakturering

## Grundregel

**Tid som registreras är inte automatiskt det som faktureras.**

Det finns alltid tre separata frågor:

| Fråga | Objekt | Exempel |
|-------|--------|---------|
| Vad utfördes? | `fact_time_entry` | 10h implementation |
| Vad är debiterbart? | `fact_time_entry.is_billable` | 8h (2h var intern overhead) |
| Vad faktureras? | `fact_invoice_line` | Fast pris per milstolpe — inte timmar |

Faktureringsmodellen på Work Package styr hur tid omvandlas till faktura.

---

## Faktureringsmodeller och vad de innebär för tid

| Modell | Tid registreras? | Tid styr faktura? | Vad triggar faktura? |
|--------|-----------------|------------------|----------------------|
| T&M | Ja | Ja — direkt | Godkända timmar per period |
| FastPris | Ja | Nej | Milstolpe eller leverabel godkänd |
| Milstolpe | Ja | Nej | Specifik milstolpe nådd |
| Prenumeration | Nej (valfritt) | Nej | Period (månad/kvartal) |
| Retainer | Ja | Delvis — mot takbelopp | Period + ev. överskott |

---

## Vem registrerar tid och när

| Roll | Ansvar | När |
|------|--------|-----|
| Konsult / Resurs | Registrerar faktisk tid per Work Package | Löpande, senast veckovis |
| Projektledare | Granskar och godkänner tidrapporter | Veckovis eller per period |
| Kundansvarig | Stämmer av debiterbara timmar mot kontrakt | Inför fakturaperiod |

Tid som inte är godkänd (`is_approved = false`) får inte ligga till grund för fakturering.

---

## Flöde: T&M

```
Resurs registrerar tid på Work Package
  └── is_billable = true/false (per rad)
        └── PM godkänner (is_approved = true)
              └── Kundansvarig skapar Invoice Line
                    └── Timmar × bill_rate = fakturabelopp
```

## Flöde: Fast pris / Milstolpe

```
Resurs registrerar tid på Work Package  (synlighet och kostnadskontroll)
  └── Tid påverkar INTE faktura
        └── Deliverable/Milestone godkänns av kund
              └── Invoice Line skapas per avtalad milstolpe/summa
```

## Flöde: Prenumeration

```
Contract Line aktiveras per period
  └── Invoice Line skapas automatiskt per period
        └── Tid registreras valfritt (för intern kostnadskontroll)
```

---

## Vad PM och kundansvarig behöver se

### Projektledare

| Vy | Källa |
|----|-------|
| Budget vs faktiskt (timmar) | `fact_budget_line.budget_hours` vs `sum(fact_time_entry.hours)` per Work Package |
| Ej godkänd tid | `fact_time_entry` där `is_approved = false` |
| Leverabler och status | `fact_deliverable_status` |
| Projekthälsa | `fact_project_status` |
| Milstolpar | `fact_milestone` |

### Kundansvarig

| Vy | Källa |
|----|-------|
| Debiterbara timmar ej fakturerade | `fact_time_entry` där `is_billable = true`, `is_approved = true`, ingen kopplad `fact_invoice_line` |
| Avtalsvärde vs fakturerat | `dim_contract_line` vs `sum(fact_invoice_line.amount)` |
| Kommande milstolpar | `fact_milestone` där status = Planned |
| Löpande avtal med förfallodatum | `dim_contract_line.end_date` |

---

## DBML-koppling

Nyckelförändringar i modellen som stödjer detta flöde:

- `fact_time_entry.is_billable` — är denna rad debiterbar mot kund?
- `fact_time_entry.is_approved` — är raden granskad och godkänd?
- `dim_work_package.billing_model` — styr hur tid omvandlas till faktura
- `dim_activity.is_billable_default` — standardvärde för is_billable baserat på aktivitetstyp
