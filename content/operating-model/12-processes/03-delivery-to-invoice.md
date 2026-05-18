# Process: Leverans → Faktura

Från utfört arbete till godkänd tid och skickad faktura. Visar de tre
faktureringsmodellerna T&M, Fast pris och Prenumeration.

## T&M (Tid & Material)

```mermaid
flowchart TD
    subgraph Konsult
        A[Registrera tid\nfact_time_entry\nis_billable = true/false]
    end

    subgraph PM
        A --> B[Granska tidrapporter]
        B --> C{Korrekt?}
        C -->|Nej| A
        C -->|Ja| D[Godkänn\nis_approved = true]
    end

    subgraph KAM / Ekonomi
        D --> E[Sammanställ debiterbara timmar\nis_billable=true & is_approved=true]
        E --> F[Skapa Invoice\nfact_invoice\nstatus = Draft]
        F --> G[Skapa Invoice Lines\nfact_invoice_line\nquantity = timmar × bill_rate]
        G --> H[Skicka faktura\nstatus = Sent]
    end

    subgraph Kund
        H --> I{Betalar?}
        I -->|Ja| J[Registrera Payment\nfact_payment]
        I -->|Försenad| K[status = Overdue]
    end

    J --> L([Slut: Faktura betald])
```

---

## Fast pris / Milstolpe

```mermaid
flowchart TD
    subgraph Konsult
        A[Registrera tid\nfact_time_entry\nsynlighet & kostnadskontroll]
    end

    subgraph PM
        A --> B[Uppdatera Deliverable-status\nfact_deliverable_status\nstatus = Delivered]
        B --> C[Uppdatera Milestone\nfact_milestone\nstatus = Done]
    end

    subgraph Kund
        C --> D{Godkänner\nleverabel?}
        D -->|Nej – Rejected| B
        D -->|Ja – Accepted| E
    end

    subgraph KAM / Ekonomi
        E[Skapa Invoice\nfact_invoice] --> F[Invoice Line\nfast belopp per milstolpe]
        F --> G[Skicka faktura\nstatus = Sent]
    end
```

---

## Prenumeration / Licens

```mermaid
flowchart TD
    A([Nytt fakturaperiod]) --> B

    subgraph Ekonomi
        B[Kontrollera aktiva Contract Lines\nstatus = Active & period inom end_date]
        B --> C[Skapa Invoice\nfact_invoice]
        C --> D[Invoice Line per Contract Line\nfact_invoice_line]
        D --> E[Skicka faktura\nstatus = Sent]
    end

    subgraph Kund
        E --> F[Betalar\nfact_payment]
    end
```

---

## Objekt per steg

| Objekt | Roll |
|--------|------|
| `fact_time_entry` | Faktisk tid — `is_billable` + `is_approved` styr vad som faktureras |
| `fact_deliverable_status` | Trigger för fast pris-fakturering |
| `fact_milestone` | Alternativ trigger för milstolpefakturering |
| `fact_invoice` | Fakturahuvud — status, datum, motpart |
| `fact_invoice_line` | En rad per Work Package eller Contract Line |
| `fact_payment` | Inbetalning mot faktura |

## Se även

- [Tidsregistrering & fakturering](../06-playbooks/time-and-billing.md)
- [Deal → Kontrakt](01-deal-to-contract.md)
