# Process: Support-flöde

Från inkommen ticket till stängd och eventuellt fakturerad.

## Flödesdiagram

```mermaid
flowchart TD
    subgraph Kund
        A([Kund kontaktar support\nchannel: Email/Portal/Phone/Chat])
    end

    subgraph Support
        A --> B[Skapa Ticket\nfact_ticket\nstatus = Open\npriority = P1–P4]
        B --> C[Koppla till Contract Line\noch Customer Environment]
        C --> D[SLA startar\nfact_ticket_sla\nFirstResponse-klocka]
        D --> E[Tilldela resurs]
        E --> F[Resurs arbetar\nfact_ticket_worklog\nis_billable = true/false]
        F --> G{Löst?}
        G -->|Nej| F
        G -->|Ja| H[resolved_date sätts\nSLA Resolution-klocka stoppas]
    end

    subgraph Kund
        H --> I{Kund bekräftar?}
        I -->|Nej – återöppnad| E
        I -->|Ja| J[Ticket stängs\nclosed_date sätts\nstatus = Closed]
    end

    subgraph KAM / Ekonomi
        J --> K{Debiterbara\ntimmar?}
        K -->|Nej – ingår i supportavtal| L([Slut])
        K -->|Ja – T&M eller övertid| M[Skapa Invoice Line\nfact_invoice_line]
        M --> L
    end
```

## Objekt som skapas

| Steg | Objekt | Ansvarig |
|------|--------|----------|
| Inkommen kontakt | `fact_ticket` | Support |
| SLA-mätning | `fact_ticket_sla` (FirstResponse + Resolution) | System |
| Arbete loggas | `fact_ticket_worklog` (`is_billable`, `is_approved`) | Resurs / PM |
| Stängning | `fact_ticket` (resolved + closed dates) | Support |
| Fakturering vid T&M | `fact_invoice_line` | Ekonomi |

## SLA-regler

- **FirstResponse**: Tid från `created_date` till första worklog
- **Resolution**: Tid från `created_date` till `resolved_date`
- `resolved_date` ≠ `closed_date` — teknisk lösning kan vara klar innan kunden bekräftar

## Se även

- [Service Catalog: Support](../11-service-catalog/support.md)
- [Tidsregistrering & fakturering](../06-playbooks/time-and-billing.md)
