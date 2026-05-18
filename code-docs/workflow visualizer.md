MÅL
Bygg en liten “workflow visualizer” där ett workflow definieras statiskt (definition/template)
och instansieras dynamiskt (runtime state). Visualisering sker med Mermaid (flowchart TD).
Instansens state ska färgsätta noder (och gärna även kanter) så man direkt ser var man är
(active), vad som är klart (done), och vad som blockerar (blocked/failed).

KRAV (HÖGNIVÅ)
1) Separera:
   - WorkflowDefinition (statisk “klass” / template)
   - WorkflowInstance (runtime “objekt” / state)
2) Generera Mermaid text från definitionen.
3) Injecta Mermaid styling från instansen:
   - active node = blå
   - done node = grön
   - blocked/failed node = röd
   - idle node = default (ingen style)
4) Utökningsbart: varje nod/edge kan ha meta (SLA, ownerRole, description, links, etc.)
5) Valfritt (men önskat): highlight edges som valts i instansen (t.ex. decision “OK”-väg).

DATA-MODELL (JSON)

WorkflowDefinition:
{
  "id": "string",
  "version": "string | number (optional)",
  "direction": "TD | LR | RL | BT (default TD)",
  "nodes": [
    {
      "id": "string",              // unik, t.ex. "A", "validate", "task_1"
      "label": "string",           // text i Mermaid-noden
      "type": "start|end|task|decision|subprocess (freeform ok)",
      "meta": { ... }              // valfritt, utökningsbart
    }
  ],
  "edges": [
    {
      "id": "string (optional)",   // om du vill referera edges i instansen
      "from": "nodeId",
      "to": "nodeId",
      "label": "string (optional)",// label på pilen
      "meta": { ... }              // valfritt
    }
  ]
}

WorkflowInstance:
{
  "instanceId": "string",
  "definitionId": "string",
  "currentNodeId": "string",
  "nodeState": {                  // nyckel = nodeId
    "A": "done|active|blocked|failed|idle|skipped"
  },
  "selectedEdges": [              // valfritt: edges att highlighta (antingen via edgeId eller from->to)
    { "from": "B", "to": "C" }
    // eller: { "edgeId": "edge-123" }
  ],
  "history": [
    { "nodeId": "string", "at": "ISO-8601 timestamp" }
  ],
  "vars": { ... }                 // case data
}

MERMAID-GENERERING

Funktion:
renderMermaid(definition, instance) -> string (mermaid source)

1) Header:
- Använd flowchart + direction:
  flowchart TD
  (byt TD mot definition.direction om angivet)

2) Noder:
- För varje node:
  <nodeId>[<label>]
  eller om type==decision:
  <nodeId>{<label>}
  (enkel mapping räcker: decision => {}, annars [] )

3) Edges:
- För varje edge:
  <from> --> <to>
  Om label finns:
  <from> -->|<label>| <to>

4) Styling:
- Lägg classDef för states (färger kan vara hårdkodade i generatorn):
  classDef done fill:#d1fae5,stroke:#065f46,color:#064e3b;
  classDef active fill:#bfdbfe,stroke:#1d4ed8,color:#1e3a8a;
  classDef blocked fill:#fee2e2,stroke:#991b1b,color:#7f1d1d;
  classDef skipped fill:#e5e7eb,stroke:#6b7280,color:#374151;

- Applicera classes:
  class <nodeId> <stateClass>;
  Mappa:
    done -> done
    active -> active
    blocked/failed -> blocked
    skipped -> skipped
    idle/unknown -> (ingen class)

5) (Valfritt) Edge-highlighting:
Mermaid har begränsat stöd för att styla enskilda edges i flowchart.
En praktisk workaround:
- Ge varje edge en “syntetisk” id genom att skapa en mellan-nod (punkt) eller använd linkStyle index.
Enklast:
- Beräkna edgeIndex i den ordning du skriver edges.
- Om selectedEdges matchar edge i definition.edges, generera:
  linkStyle <edgeIndex> stroke:#1d4ed8,stroke-width:3px;
  (och ev för done-path: grön stroke)
OBS: linkStyle använder index 0..n-1 i ordning av edges i mermaid-texten.

6) Output ska vara en komplett Mermaid-sträng som kan renderas direkt.

EXEMPEL: DEFINITION
{
  "id": "onboarding-v1",
  "direction": "TD",
  "nodes": [
    { "id": "A", "label": "Start", "type": "start", "meta": { "ownerRole": "PM" } },
    { "id": "B", "label": "Validera", "type": "decision", "meta": { "slaHours": 24 } },
    { "id": "C", "label": "Utför", "type": "task", "meta": { "ownerRole": "Ops" } },
    { "id": "D", "label": "Åtgärda", "type": "task", "meta": { "ownerRole": "Support" } },
    { "id": "E", "label": "Klart", "type": "end", "meta": {} }
  ],
  "edges": [
    { "from": "A", "to": "B" },
    { "from": "B", "to": "C", "label": "OK" },
    { "from": "B", "to": "D", "label": "Ej OK" },
    { "from": "D", "to": "B" },
    { "from": "C", "to": "E" }
  ]
}

EXEMPEL: INSTANS
{
  "instanceId": "case-123",
  "definitionId": "onboarding-v1",
  "currentNodeId": "C",
  "nodeState": {
    "A": "done",
    "B": "done",
    "C": "active",
    "D": "idle",
    "E": "idle"
  },
  "selectedEdges": [
    { "from": "B", "to": "C" }
  ],
  "history": [
    { "nodeId": "A", "at": "2026-02-24T08:10:00Z" },
    { "nodeId": "B", "at": "2026-02-24T08:12:00Z" }
  ],
  "vars": { "customer": "Boliden", "priority": "P2" }
}

EXEMPEL: FÖRVÄNTAD MERMAID-UTDATA (minst)
flowchart TD
  A[Start] --> B{Validera}
  B -->|OK| C[Utför]
  B -->|Ej OK| D[Åtgärda]
  D --> B
  C --> E[Klart]

  classDef done fill:#d1fae5,stroke:#065f46,color:#064e3b;
  classDef active fill:#bfdbfe,stroke:#1d4ed8,color:#1e3a8a;
  classDef blocked fill:#fee2e2,stroke:#991b1b,color:#7f1d1d;
  classDef skipped fill:#e5e7eb,stroke:#6b7280,color:#374151;

  class A done;
  class B done;
  class C active;

  %% (valfritt) edge highlight via linkStyle om implementerat:
  %% linkStyle 1 stroke:#1d4ed8,stroke-width:3px;

BONUS (UI-INTEGRATION, VALFRITT)
- Klick på nod i UI => visa meta-panel (ownerRole, SLA, instruktioner, länkar).
- Instansens “vars” kan visas i en sidopanel.
- Stöd för subprocess: node.type=="subprocess" kan länka till en annan definitionId.