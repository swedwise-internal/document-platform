# Service Catalog – Översikt

Här definieras alla Swedwises tjänster och erbjudanden — vad de innehåller,
om de kräver konsultinsats, och hur de kopplar till datamodellen.

## Syfte

Katalogen är källan till sanning för *vad vi säljer*. Den styr:
- Vilka **Commercial Packages** vi kan konfigurera
- Vilka **Offerings** som skapas på Contract Lines
- Vilka **Delivery Plans / Work Packages** som genereras (om konsultinsats ingår)
- Vilken typ av **fakturering** som används

---

## Struktur per tjänst

Varje tjänst dokumenteras med:
- Vad den är och vad den levererar
- Om konsultinsats ingår (och hur mycket)
- Vilka delar/komponenter den innehåller
- Faktureringsmodell
- Koppling till datamodellen

Se [_template.md](_template.md) för mallen.

---

## Tjänstetyper (Offering-typer)

| Typ | Konsultinsats | Filer |
|-----|---------------|-------|
| Consulting | Ja, alltid | [consulting.md](consulting.md) |
| Support | Delvis | [support.md](support.md) |
| License | Nej | [license.md](license.md) |
| Managed Services | Delvis | [managed-services.md](managed-services.md) |
| SaaS | Nej (initialt) | [saas.md](saas.md) |
| Training | Ja | [training.md](training.md) |

---

## Koppling till datamodellen

```
Service Catalog (detta dokument)
  └── definierar → dim_offering (tjänstetyp)
  └── definierar → dim_commercial_package (paket vi säljer)
        └── innehåller → dim_package_item (rader i paketet)
              └── refererar → dim_product / dim_sku (om produkt ingår)
```

En **Commercial Package** är en instans av ett eller flera erbjudanden
från katalogen — med pris, period och villkor satta för en specifik affär.

---

## Se även

- [Relationsflöde: Sälja → Leverera](../10-object-relations-sell-to-deliver.md)
- [Affärsobjekt – komplett överblick](../09-objects.md)
