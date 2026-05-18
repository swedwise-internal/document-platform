# [Tjänstens namn]

> **Offering-typ:** `Consulting | Support | License | ManagedServices | SaaS | Training`
> **Konsultinsats:** `Ja / Nej / Delvis`
> **Faktureringsmodell:** `T&M | FastPris | Prenumeration | Milstolpe | Blandad`

## Vad är det?

Kort beskrivning av tjänsten — vad kunden köper och vad de får ut av det.

---

## Vad ingår?

Lista de delar/komponenter som tjänsten består av.

| Del | Beskrivning | Konsultinsats? |
|-----|-------------|----------------|
| Del 1 | ... | Ja / Nej |
| Del 2 | ... | Ja / Nej |

---

## Leverabler

Vad levererar vi konkret till kunden? (Kopplar till **Deliverable** i modellen)

- [ ] Leverabel 1
- [ ] Leverabel 2

---

## Milstolpar (om tillämpligt)

Viktiga delmål under leveransen.

- Milstolpe 1: ...
- Milstolpe 2: ...

---

## Förutsättningar

Vad krävs av kunden eller oss för att tjänsten ska fungera?

- ...

---

## Fakturering

Beskriv hur och när vi fakturerar.

- **Modell:** T&M / Fast pris / Prenumeration
- **Periodicitet:** Engång / Månadsvis / Kvartalsvis / Årsvis
- **Trigger:** Signerat avtal / Milstolpe / Levererad och godkänd

---

## Datamodell-koppling

| Fält | Värde |
|------|-------|
| `dim_offering.type` | `Consulting` (exempel) |
| `dim_contract_line.billing_model` | `T&M` (exempel) |
| `dim_contract_line.delivery_mode` | `OnPrem / SaaS / …` |
| Kräver Delivery Plan? | Ja / Nej |
| Kräver Work Package? | Ja / Nej |
| Kräver License Entitlement? | Ja / Nej |

---

## Vanliga paket där tjänsten ingår

- [Paketnamn](../commercial-packages/paket.md) *(lägg till när paket definieras)*
