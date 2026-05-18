# Affärsobjekt – Komplett överblick

Alla objekt vi arbetar med i operationsmodellen, oavsett domän.
Listan är avsiktligt platt – relationer och flöden dokumenteras separat.

---

## Aktörer

| Objekt | Beskrivning |
|--------|-------------|
| **Customer** | Kund (bolag eller organisation) |
| **Vendor** | Leverantör / ISV vi vidareförsäljer |
| **Partner** | Samarbetspartner |
| **Contact** | Person kopplad till kund, vendor eller partner |
| **Resource** | Intern medarbetare eller underkonsult |
| **Org Unit** | Intern organisationsenhet (avdelning, team) |

---

## Försäljning

| Objekt | Beskrivning |
|--------|-------------|
| **Deal** | Affärsmöjlighet i pipeline |
| **Commercial Package** | Fördefinierat erbjudandepaket (vad vi säljer) |
| **Offering** | Tjänstetyp (Konsulting, Support, Licens, ManagedService, SaaS, Training) |

---

## Kontrakt

| Objekt | Beskrivning |
|--------|-------------|
| **Contract** | Ramavtal eller huvudkontrakt med kund |
| **Contract Line** | Enskild rad i kontraktet (en tjänst, period, pris) |

---

## Leverans & Projekt

| Objekt | Beskrivning |
|--------|-------------|
| **Engagement** | Uppdrag (projekt, retainer eller internt) |
| **Delivery Plan** | Leveransplan kopplad till kontrakt |
| **Work Package** | Arbetspaket — minsta enhet för tid & kostnad |
| **Deliverable** | Konkret leverabel (dokument, workshop, release) |
| **Milestone** | Delmål i leveransen |
| **Resource Plan** | Planerade resursuttag per arbetspaket |
| **Budget Line** | Budgetrad (planerad kostnad) |

---

## Tid & Aktivitet

| Objekt | Beskrivning |
|--------|-------------|
| **Time Entry** | Rapporterad tid av en resurs |
| **Work Item** | Arbetsuppgift / task (kan leva i vilket system som helst) |
| **Activity** | Aktivitetskod (Delivery, Presales, Support, Intern, Admin) |

---

## Ekonomi

| Objekt | Beskrivning |
|--------|-------------|
| **Invoice Line** | Fakturarad (T&M, Fast, Prenumeration, Licens) |
| **Payment** | Inbetalning mot faktura |
| **Cost Line** | Kostnadsrad (underkonsult, resa, molntjänst) |
| **Revenue Schedule** | Intäktsperiodisering per månad |

---

## Support

| Objekt | Beskrivning |
|--------|-------------|
| **Ticket** | Supportärende från kund |
| **Ticket Worklog** | Nedlagd tid på ett ärende |
| **SLA** | Servicenivåavtal kopplat till ärende |

---

## Produktkatalog

| Objekt | Beskrivning |
|--------|-------------|
| **Product** | Produkt (t.ex. en mjukvaruplattform) |
| **SKU** | Artikelnummer / prisbart alternativ av en produkt |

---

## Kundinfrastruktur

| Objekt | Beskrivning |
|--------|-------------|
| **Customer Environment** | Kundinstans (Prod, Test, Dev, DR, SaaS) |
| **License Entitlement** | Kundens licensrättighet (antal användare, GB, etc.) |

---

## Program & Initiativ

| Objekt | Beskrivning |
|--------|-------------|
| **Initiative** | Program eller projekt på strategisk nivå (Customer Program, Delivery Project, SaaS Program, etc.) |

---

## Kundhälsa

| Objekt | Beskrivning |
|--------|-------------|
| **Customer Health** | Periodisk hälsomätning av kundrelation |
| **Growth Signal** | Signal om expansionsmöjlighet eller risk |

---

## ISO / GRC

| Objekt | Beskrivning |
|--------|-------------|
| **ISO Requirement** | Krav från ISO-standard (9001, 14001, 27001) |
| **Control** | Intern kontroll som uppfyller ett krav |
| **Risk** | Identifierad risk |
| **Audit** | Revision / granskning |
| **Nonconformity** | Avvikelse funnen vid revision |
| **Corrective Action** | Åtgärd på avvikelse (CAPA) |
| **Document** | Styrdokument, rutin, mall |
| **Evidence** | Bevis för att en kontroll utförts |

---

## Se även

- [Relationsflöde: Sälja → Leverera](10-object-relations-sell-to-deliver.md)
- [Principer & begreppslista](02-principles-glossary.md)
