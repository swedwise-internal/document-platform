# CRM (Sales)

## Syfte
Pipeline, forecast, ägarskap och historik som driver Land/Expand.

## Tabeller
- `fact_deal`: affär, stage, status, belopp, ägare, sannolikhet.
- `fact_deal_stage_history`: historik för stage/probability.
- `fact_deal_package_link`: kopplar deal till Commercial Package.

## Minimifält (krav)
- Customer (`party_id`), stage, status, created_date, owner, expected_amount+currency.
