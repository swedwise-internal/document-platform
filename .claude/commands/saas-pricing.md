# Create SaaS Pricing Documentation

Generate pricing and packaging documentation for Swedwise Communications SaaS.

## Task
Create pricing documentation: **$ARGUMENTS** (e.g., "pricing-model", "packages", "cost-analysis", "customer-quote")

## Pricing Model Overview

### Base Components
| Component | Description | Pricing |
|-----------|-------------|---------|
| Enterprise Solution Suite Base | Platform access | 10,000 SEK/month |
| Hosting (Small capacity) | Infrastructure | 5,000 SEK/month |
| Premium Support | Exstream support | 10,000 SEK/month |

### Communications Module
| Component | Pricing |
|-----------|---------|
| Base fee | 9,500 SEK/month |
| Interactive User | 500 SEK/user/month |
| Content Author | 4,500 SEK/user/month |
| Transaction fee | 3 SEK/transaction (min 1,000/month) |

### Notifications Module
| Component | Pricing |
|-----------|---------|
| Base fee | 5,000 SEK/month |
| Email | 0.20 SEK/st (min 1,000/month) |
| SMS | 1 SEK/st (min 1,000/month) |

## Document Types

### pricing-model
Complete pricing model documentation:
- Component breakdown
- Volume tiers
- Minimum commitments
- Optional add-ons
- Annual vs monthly

### packages
Pre-defined packages for common scenarios:

```markdown
## Starter Package
**For**: Small organizations, pilot projects
**Includes**:
- 1 Production tenant
- 1 Development tenant
- Up to 5 Interactive Users
- 2 Content Authors
- 5,000 transactions/month
- Email notifications (10,000/month)

**Price**: XX,XXX SEK/month

---

## Professional Package
**For**: Mid-size organizations
**Includes**:
- 1 Production tenant
- 1 Development tenant
- Up to 20 Interactive Users
- 5 Content Authors
- 25,000 transactions/month
- Email + SMS notifications
- SSO integration

**Price**: XX,XXX SEK/month

---

## Enterprise Package
**For**: Large organizations, high volume
**Includes**:
- 1 Production tenant
- 1 Development tenant
- Unlimited Interactive Users
- 10 Content Authors
- 100,000 transactions/month
- Email + SMS notifications
- SSO integration
- Dedicated Success Manager
- Quarterly business reviews

**Price**: Contact sales
```

### cost-analysis
Cost comparison analysis:
- On-premise vs SaaS TCO
- Break-even analysis
- Hidden cost identification
- 3-year projection

### customer-quote
Customer-specific quote template:

```markdown
## Offert: Swedwise Communications SaaS
**Kund**: [Kundnamn]
**Datum**: YYYY-MM-DD
**Giltig till**: YYYY-MM-DD
**Offert-ID**: SW-SAAS-XXXX

### Sammanfattning
[Kort beskrivning av kundens behov och föreslagen lösning]

### Ingående komponenter

| Komponent | Antal | Pris/enhet | Summa/månad |
|-----------|-------|------------|-------------|
| Platform Base | 1 | X SEK | X SEK |
| Communications Module | 1 | X SEK | X SEK |
| Interactive Users | X | X SEK | X SEK |
| Content Authors | X | X SEK | X SEK |
| Transactions | X | X SEK | X SEK |
| Notifications Email | X | X SEK | X SEK |
| **Total månadsavgift** | | | **X SEK** |

### Engångskostnader

| Aktivitet | Kostnad |
|-----------|---------|
| SSO-uppsättning | X SEK |
| Onboarding-projekt | X SEK |
| **Total engångskostnad** | **X SEK** |

### Avtalsvillkor
- Avtalsperiod: 36 månader
- Fakturering: Kvartalsvis i förskott
- Uppsägningstid: 90 dagar

### Nästa steg
1. Genomgång av offert
2. Eventuella justeringar
3. Kontraktssignering
4. Projektstart

**Kontakt**: [Säljare, telefon, email]
```

## Budget Parameters (from GTM Project)

| Parameter | Value |
|-----------|-------|
| Average customer price | 50,000 SEK/month |
| Onboarding project | 100,000 SEK |
| CAR (Customer Acquisition Rate) | 0.30/month |
| CAC (Customer Acquisition Cost) | 60,000 SEK |
| ACL (Average Customer Lifetime) | 48 months |
| OT License Cost | 20% of revenue |
| Hosting Cost | 50,000 SEK/month |

## Break-Even Analysis

Based on project assumptions:
- Month 10: First positive monthly result
- Month 18: Accumulated break-even (approximately June 2027)

## Reference Materials

- Pricing strategy: `../project-scaffolder/docs/SaaS Draft/04_finance-and-pricing/pricing-strategy.md`
- Packaging: `../project-scaffolder/docs/SaaS Draft/04_finance-and-pricing/packaging-and-plans.md`
- Cost model: `../project-scaffolder/docs/SaaS Draft/04_finance-and-pricing/cost-model.md`
- Break-even: `../project-scaffolder/docs/SaaS Draft/04_finance-and-pricing/breakeven-analysis.md`

## Output

Save to: `content/saas/pricing/[document-type].md`
