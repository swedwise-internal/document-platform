# Customer Program Playbook

## Standardflöde
1. Vid sign: skapa `CustomerProgram` i `dim_initiative` (owner=KAM/CSM).
2. Deal → Commercial Package → Contract + Contract Lines.
3. Generera Delivery Plan + Work Packages + Deliverables via template.
4. Sätt resursplan (signed work) i `fact_resource_plan`.
5. Följ upp tid/kostnad/faktura per Work Package.
6. Kvartalsvis: skapa `fact_customer_health` + `fact_customer_growth_signal`.
7. Signals → skapa Work Items; vid stark signal → skapa Expand Deal under samma initiative.
8. ISO: logga controls/executions/evidence kopplat till program och leveranser.

## Definition of Done (v1)
- Alla aktiva kunder har ett CustomerProgram-initiative.
- Alla leveranser har work packages.
- Tid rapporteras minst på work package.
- Tickets kopplas minst på customer och helst environment + contract line.
