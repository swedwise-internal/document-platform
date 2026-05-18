import {
  WorkflowDefinition,
  WorkflowInstance,
  WorkflowNode,
  WorkflowNodeState,
  NODE_STATE_STYLES,
} from '@/types/workflow';

export interface RenderResult {
  source: string;
  nodeIds: string[];
  edgeIndexMap: Map<string, number>;
}

function escapeLabel(label: string): string {
  // Mermaid special chars that need quoting
  if (/[{}[\]()"|]/.test(label)) {
    return `"${label.replace(/"/g, '#quot;')}"`;
  }
  return label;
}

function nodeShape(node: WorkflowNode): string {
  const label = escapeLabel(node.label);
  switch (node.type) {
    case 'start':
    case 'end':
      return `${node.id}([${label}])`;
    case 'decision':
      return `${node.id}{${label}}`;
    case 'subprocess':
      return `${node.id}[[${label}]]`;
    case 'task':
    default:
      return `${node.id}[${label}]`;
  }
}

export function renderMermaid(
  definition: WorkflowDefinition,
  instance?: WorkflowInstance
): RenderResult {
  const lines: string[] = [];
  const nodeIds: string[] = [];
  const edgeIndexMap = new Map<string, number>();

  // Header
  lines.push(`flowchart ${definition.direction || 'TD'}`);

  // Nodes
  for (const node of definition.nodes) {
    lines.push(`  ${nodeShape(node)}`);
    nodeIds.push(node.id);
  }

  // Edges
  let edgeIndex = 0;
  for (const edge of definition.edges) {
    const edgeKey = `${edge.from}->${edge.to}`;
    edgeIndexMap.set(edgeKey, edgeIndex);
    if (edge.id) {
      edgeIndexMap.set(edge.id, edgeIndex);
    }

    if (edge.label) {
      lines.push(`  ${edge.from} -->|${escapeLabel(edge.label)}| ${edge.to}`);
    } else {
      lines.push(`  ${edge.from} --> ${edge.to}`);
    }
    edgeIndex++;
  }

  // Styling from instance
  if (instance) {
    lines.push('');

    // classDef declarations
    const usedStates = Array.from(new Set(Object.values(instance.nodeState)));
    for (const state of usedStates) {
      if (state === 'idle') continue;
      const style = NODE_STATE_STYLES[state];
      if (style) {
        lines.push(`  classDef ${state} fill:${style.mermaidFill},stroke:${style.mermaidStroke},color:${style.mermaidColor};`);
      }
    }

    // Apply classes to nodes
    for (const [nodeId, state] of Object.entries(instance.nodeState)) {
      if (state === 'idle') continue;
      // Map failed to blocked class (same colors)
      const className = state === 'failed' ? 'blocked' : state;
      lines.push(`  class ${nodeId} ${className};`);
    }

    // Edge highlighting for selected edges
    const selectedIndices: number[] = [];
    for (const sel of instance.selectedEdges) {
      let idx: number | undefined;
      if (sel.edgeId) {
        idx = edgeIndexMap.get(sel.edgeId);
      } else if (sel.from && sel.to) {
        idx = edgeIndexMap.get(`${sel.from}->${sel.to}`);
      }
      if (idx !== undefined) {
        selectedIndices.push(idx);
      }
    }
    if (selectedIndices.length > 0) {
      lines.push(`  linkStyle ${selectedIndices.join(',')} stroke:#1d4ed8,stroke-width:3px;`);
    }
  }

  return {
    source: lines.join('\n'),
    nodeIds,
    edgeIndexMap,
  };
}
