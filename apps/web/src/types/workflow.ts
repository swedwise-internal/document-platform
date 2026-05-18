// ── Node types ──────────────────────────────────────────────

export type WorkflowNodeType = 'start' | 'end' | 'task' | 'decision' | 'subprocess';

export type WorkflowNodeState = 'done' | 'active' | 'blocked' | 'failed' | 'idle' | 'skipped';

export interface WorkflowNodeMeta {
  description?: string;
  ownerRole?: string;
  sla?: string;
  links?: { label: string; href: string }[];
  [key: string]: unknown;
}

export interface WorkflowNode {
  id: string;
  label: string;
  type: WorkflowNodeType;
  meta?: WorkflowNodeMeta;
}

// ── Edge types ──────────────────────────────────────────────

export interface WorkflowEdgeMeta {
  description?: string;
  condition?: string;
  [key: string]: unknown;
}

export interface WorkflowEdge {
  id?: string;
  from: string;
  to: string;
  label?: string;
  meta?: WorkflowEdgeMeta;
}

// ── Definition (static template) ────────────────────────────

export type WorkflowDirection = 'TD' | 'LR' | 'RL' | 'BT';

export interface WorkflowDefinition {
  id: string;
  version?: string;
  direction: WorkflowDirection;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

// ── Instance (runtime state) ────────────────────────────────

export interface SelectedEdge {
  from?: string;
  to?: string;
  edgeId?: string;
}

export interface HistoryEntry {
  nodeId: string;
  at: string;
}

export interface WorkflowInstance {
  instanceId: string;
  definitionId: string;
  currentNodeId: string;
  nodeState: Record<string, WorkflowNodeState>;
  selectedEdges: SelectedEdge[];
  history: HistoryEntry[];
  vars: Record<string, unknown>;
}

// ── Styling map ─────────────────────────────────────────────

export const NODE_STATE_STYLES: Record<WorkflowNodeState, {
  bg: string;
  text: string;
  label: string;
  mermaidFill: string;
  mermaidStroke: string;
  mermaidColor: string;
}> = {
  done:    { bg: 'bg-green-100',  text: 'text-green-800',  label: 'Done',    mermaidFill: '#d1fae5', mermaidStroke: '#065f46', mermaidColor: '#064e3b' },
  active:  { bg: 'bg-blue-100',   text: 'text-blue-800',   label: 'Active',  mermaidFill: '#bfdbfe', mermaidStroke: '#1d4ed8', mermaidColor: '#1e3a8a' },
  blocked: { bg: 'bg-red-100',    text: 'text-red-800',    label: 'Blocked', mermaidFill: '#fee2e2', mermaidStroke: '#991b1b', mermaidColor: '#7f1d1d' },
  failed:  { bg: 'bg-red-100',    text: 'text-red-800',    label: 'Failed',  mermaidFill: '#fee2e2', mermaidStroke: '#991b1b', mermaidColor: '#7f1d1d' },
  idle:    { bg: 'bg-slate-50',   text: 'text-slate-500',  label: 'Idle',    mermaidFill: '#f8fafc', mermaidStroke: '#94a3b8', mermaidColor: '#475569' },
  skipped: { bg: 'bg-gray-100',   text: 'text-gray-500',   label: 'Skipped', mermaidFill: '#e5e7eb', mermaidStroke: '#6b7280', mermaidColor: '#374151' },
};
