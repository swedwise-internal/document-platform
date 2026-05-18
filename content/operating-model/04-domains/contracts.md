# Contracts

## Syfte
Kommersiell och juridisk sanning: åtagande, pris, period, billing model och delivery mode.

## Tabeller
- `dim_contract`
- `dim_contract_line`
- `fact_contract_event`
- `fact_revenue_schedule`

## Viktiga fält (Swedwise)
- `billing_model`: T&M / FixedPrice / Subscription / Retainer / Mixed
- `delivery_mode`: CustomerHosted / SwedwiseHosted / Azure / SaaS / OnPrem
- `sku_id` (för licens/SaaS/managed), annars `offering_id`
