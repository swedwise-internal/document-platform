# ERP

## Syfte
Finansiell sanning: fakturor, betalningar, kostnader och periodisering.

## Tabeller
- `fact_invoice_line`
- `fact_payment`
- `fact_cost_line`
- `fact_revenue_schedule` (periodisering)

## Praktik
- Knyt gärna fakturarader till `contract_line_id` och när möjligt `work_package_id`.
