# Relationsflöde: Sälja → Leverera

Det här dokumentet beskriver hur affärsobjekten hänger ihop från det att vi
säljer något till att vi levererar det — och hur leveransformen skiljer sig
beroende på om konsultinsats ingår eller inte.

---

## Utgångspunkten: Vad vi säljer

Allt börjar med vad vi erbjuder marknaden. Det finns sex grundläggande
**Offering-typer** som avgör allt annat nedströms:

| Offering-typ | Konsultinsats? | Exempel |
|---|---|---|
| Consulting | Ja, alltid | Implementationsprojekt, rådgivning |
| Support | Delvis (vid felsökning) | Supportavtal, SLA |
| License | Nej | Vidareförsäljning av ISV-licens |
| Managed Services | Delvis (driftåtgärder) | Hosting, förvaltning |
| SaaS | Nej (initialt) | SaaS-prenumeration |
| Training | Ja | Utbildning, workshop |

Ett **Commercial Package** buntar ihop en eller flera Offerings till ett
säljbart erbjudande med pris och villkor.

---

## Flöde: Sälja

```
Customer
  └── Deal  (affärsmöjlighet i pipeline)
        └── Commercial Package  (vad erbjudandet innehåller)
              └── Offering(s)  (tjänstetyper som ingår)
                    └── Product / SKU  (om licens eller produkt ingår)
```

En **Deal** vinner vi → den omvandlas till ett **Contract**.

---

## Flöde: Kontraktera

```
Deal (vunnen)
  └── Contract  (ramavtal, juridiskt bindande)
        └── Contract Line(s)  (en rad per Offering/tjänst/period/pris)
```

Varje **Contract Line** är en enskild åtagandepost. Den bär:
- Tjänstetyp (Offering)
- Faktureringsmodell (T&M, Fast pris, Prenumeration, …)
- Period och pris
- Leveranssätt (OnPrem, SaaS, CustomerHosted, …)

---

## Flöde: Leverera — två spår

Beroende på om Contract Line kräver konsultinsats eller inte tar leveransen
olika väg.

### Spår A — Med konsultinsats (Consulting, Training, delvis Support & Managed Services)

```
Contract Line
  └── Engagement  (uppdrag — projekt eller retainer)
        └── Delivery Plan  (vad vi ska göra och när)
              └── Work Package(s)  (atomär enhet — bär tid & kostnad)
                    ├── Deliverable(s)  (konkreta leverabler)
                    ├── Milestone(s)    (delmål)
                    ├── Resource Plan   (vem gör vad, planerade timmar)
                    ├── Budget Line(s)  (planerade kostnader)
                    ├── Time Entry(s)   (rapporterad tid)
                    └── Cost Line(s)    (faktiska kostnader)
```

Från Work Package flödar ekonomin:

```
Work Package
  └── Invoice Line  (fakturering: T&M eller fast)
        └── Payment  (inbetalning)
  └── Revenue Schedule  (periodiserad intäkt)
```

### Spår B — Utan konsultinsats (License, SaaS, prenumerationsbaserad Managed Service)

```
Contract Line
  ├── License Entitlement  (kundens rättighet: antal användare, GB, etc.)
  ├── Customer Environment  (var produkten körs: Prod, Test, SaaS)
  └── Invoice Line  (fakturering: prenumeration per period)
        └── Payment
  └── Revenue Schedule  (periodiserad intäkt)
```

Ingen Delivery Plan eller Work Package behövs — leveransen är automatisk
eller produkt-driven.

---

## Gemensamma objekt i båda spåren

Oavsett leveransspår gäller alltid:

| Objekt | Roll |
|--------|------|
| **Customer** | Motpart i allt |
| **Contact** | Kontaktperson hos kunden |
| **Initiative / Customer Program** | Strategiskt ankare för hela kundrelationen |
| **Ticket** | Supportärende som kan uppstå i vilket spår som helst |
| **Customer Health** | Periodisk mätning av kundrelationens status |
| **Growth Signal** | Signal om ny affärsmöjlighet eller risk |

---

## Samlad bild

```
Customer ──────────────────────────────────────────── Initiative
   │                                                    (Customer Program)
   └── Deal
         └── Commercial Package
               └── Contract
                     └── Contract Line
                           │
                     ┌─────┴──────────────┐
                     │                    │
               [Med konsult]        [Utan konsult]
                     │                    │
               Engagement          License Entitlement
               Delivery Plan       Customer Environment
               Work Package
               ├── Deliverable
               ├── Resource Plan
               ├── Time Entry
               └── Cost Line
                     │                    │
                     └─────────┬──────────┘
                               │
                         Invoice Line
                         Payment
                         Revenue Schedule
```

---

## Nästa steg

- [Support-flöde: Ticket → SLA → Worklog](04-domains/support.md)
- [Ekonomiflöde: Invoice → Payment → Revenue](04-domains/erp.md)
- [Affärsobjekt – komplett överblick](09-objects.md)
