# Objektlivscykler

Status-flöden för de viktigaste objekten i modellen.

---

## Deal

```mermaid
stateDiagram-v2
    [*] --> Prospecting
    Prospecting --> Qualified
    Qualified --> Proposal
    Proposal --> Negotiation
    Negotiation --> Won
    Negotiation --> Lost
    Proposal --> Lost
    Won --> [*]
    Lost --> [*]
```

---

## Contract

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Active : Signerat
    Active --> Expired : Slutdatum passerat
    Active --> Terminated : Uppsagt i förtid
    Expired --> [*]
    Terminated --> [*]
```

---

## Work Package

```mermaid
stateDiagram-v2
    [*] --> Planned
    Planned --> Active : Arbete påbörjat
    Active --> Blocked : Hinder uppstår
    Blocked --> Active : Hinder löst
    Active --> Done : Levererat och godkänt
    Done --> [*]
```

---

## Deliverable

```mermaid
stateDiagram-v2
    [*] --> Planned
    Planned --> InProgress
    InProgress --> Delivered : Levererat till kund
    Delivered --> Accepted : Kund godkänner
    Delivered --> Rejected : Kund underkänner
    Rejected --> InProgress : Rättas
    Accepted --> [*]
```

---

## Ticket

```mermaid
stateDiagram-v2
    [*] --> Open
    Open --> InProgress : Tilldelas resurs
    InProgress --> Waiting : Väntar på kund/info
    Waiting --> InProgress : Svar inkommer
    InProgress --> Resolved : Teknisk lösning klar
    Resolved --> Closed : Kund bekräftar
    Resolved --> InProgress : Kund återöppnar
    Closed --> [*]
```

---

## Invoice

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Sent : Skickad till kund
    Sent --> PartiallyPaid : Delbetald
    Sent --> Paid : Fullt betald
    PartiallyPaid --> Paid
    Sent --> Overdue : Förfallodatum passerat
    Overdue --> Paid
    Paid --> Credited : Kreditering
    Credited --> [*]
    Paid --> [*]
```

---

## Initiative (Customer Program)

```mermaid
stateDiagram-v2
    [*] --> Idea
    Idea --> Planned : Beslut att gå vidare
    Planned --> Approved : Formellt godkänt
    Approved --> Active : Kickoff
    Active --> OnHold : Pausat
    OnHold --> Active : Återupptas
    Active --> Completed : Avslutat
    Active --> Cancelled : Avbryts
    Completed --> [*]
    Cancelled --> [*]
```
