import { WorkflowDefinition, WorkflowInstance } from '@/types/workflow';

// ── Example 1: Document Approval (from spec) ───────────────

export const onboardingDefinition: WorkflowDefinition = {
  id: 'onboarding-v1',
  direction: 'TD',
  nodes: [
    { id: 'A', label: 'Start', type: 'start', meta: { ownerRole: 'PM' } },
    { id: 'B', label: 'Validera', type: 'decision', meta: { sla: '24 timmar' } },
    { id: 'C', label: 'Utför', type: 'task', meta: { ownerRole: 'Ops' } },
    { id: 'D', label: 'Åtgärda', type: 'task', meta: { ownerRole: 'Support' } },
    { id: 'E', label: 'Klart', type: 'end' },
  ],
  edges: [
    { from: 'A', to: 'B' },
    { from: 'B', to: 'C', label: 'OK' },
    { from: 'B', to: 'D', label: 'Ej OK' },
    { from: 'D', to: 'B' },
    { from: 'C', to: 'E' },
  ],
};

export const onboardingInstance: WorkflowInstance = {
  instanceId: 'case-123',
  definitionId: 'onboarding-v1',
  currentNodeId: 'C',
  nodeState: {
    A: 'done',
    B: 'done',
    C: 'active',
    D: 'idle',
    E: 'idle',
  },
  selectedEdges: [
    { from: 'A', to: 'B' },
    { from: 'B', to: 'C' },
  ],
  history: [
    { nodeId: 'A', at: '2026-02-24T08:10:00Z' },
    { nodeId: 'B', at: '2026-02-24T08:12:00Z' },
    { nodeId: 'C', at: '2026-02-24T08:15:00Z' },
  ],
  vars: { customer: 'Boliden', priority: 'P2' },
};

// ── Example 2: Document Approval ────────────────────────────

export const documentApprovalDefinition: WorkflowDefinition = {
  id: 'doc-approval-v1',
  version: '1.0',
  direction: 'TD',
  nodes: [
    { id: 'create', label: 'Document Created', type: 'start', meta: { description: 'A new document is initiated in the IMS platform' } },
    { id: 'draft', label: 'Draft Review', type: 'task', meta: { ownerRole: 'Document Author', sla: '5 business days', description: 'Author reviews and self-checks the document' } },
    { id: 'peer', label: 'Peer Review', type: 'task', meta: { ownerRole: 'SME Reviewer', sla: '3 business days', description: 'Subject matter expert reviews for accuracy' } },
    { id: 'approve', label: 'Approved?', type: 'decision', meta: { description: 'Management decides whether to approve or request changes' } },
    { id: 'revise', label: 'Revise', type: 'task', meta: { ownerRole: 'Document Author', sla: '3 business days' } },
    { id: 'publish', label: 'Publish', type: 'task', meta: { ownerRole: 'Quality Lead', description: 'Document is published to the IMS platform' } },
    { id: 'done', label: 'Complete', type: 'end' },
  ],
  edges: [
    { from: 'create', to: 'draft' },
    { from: 'draft', to: 'peer' },
    { from: 'peer', to: 'approve' },
    { from: 'approve', to: 'publish', label: 'Yes' },
    { from: 'approve', to: 'revise', label: 'No' },
    { from: 'revise', to: 'peer' },
    { from: 'publish', to: 'done' },
  ],
};

export const documentApprovalInstance: WorkflowInstance = {
  instanceId: 'doc-approval-001',
  definitionId: 'doc-approval-v1',
  currentNodeId: 'approve',
  nodeState: {
    create: 'done',
    draft: 'done',
    peer: 'done',
    approve: 'active',
    revise: 'idle',
    publish: 'idle',
    done: 'idle',
  },
  selectedEdges: [
    { from: 'create', to: 'draft' },
    { from: 'draft', to: 'peer' },
    { from: 'peer', to: 'approve' },
  ],
  history: [
    { nodeId: 'create', at: '2026-02-15T09:00:00Z' },
    { nodeId: 'draft', at: '2026-02-15T09:05:00Z' },
    { nodeId: 'peer', at: '2026-02-20T14:00:00Z' },
    { nodeId: 'approve', at: '2026-02-25T10:00:00Z' },
  ],
  vars: { documentId: 'SW-IMS-POL-015', title: 'Remote Work Policy', author: 'Erik Svensson' },
};

// ── Example 3: Incident Management (LR) ────────────────────

export const incidentDefinition: WorkflowDefinition = {
  id: 'incident-mgmt-v1',
  version: '1.0',
  direction: 'LR',
  nodes: [
    { id: 'detect', label: 'Incident Detected', type: 'start', meta: { description: 'Incident reported via monitoring or user report' } },
    { id: 'triage', label: 'Triage', type: 'task', meta: { ownerRole: 'L1 Support', sla: '15 min' } },
    { id: 'severity', label: 'Critical?', type: 'decision', meta: { description: 'Assess severity level' } },
    { id: 'escalate', label: 'Escalate to L2', type: 'task', meta: { ownerRole: 'L2 Support', sla: '30 min' } },
    { id: 'resolve', label: 'Resolve', type: 'task', meta: { ownerRole: 'L1 Support', sla: '4 hours' } },
    { id: 'review', label: 'Post-Mortem', type: 'subprocess', meta: { ownerRole: 'Quality Lead', description: 'Conduct root cause analysis and document lessons learned' } },
    { id: 'close', label: 'Closed', type: 'end' },
  ],
  edges: [
    { from: 'detect', to: 'triage' },
    { from: 'triage', to: 'severity' },
    { from: 'severity', to: 'escalate', label: 'Yes' },
    { from: 'severity', to: 'resolve', label: 'No' },
    { from: 'escalate', to: 'resolve' },
    { from: 'resolve', to: 'review' },
    { from: 'review', to: 'close' },
  ],
};

export const incidentInstance: WorkflowInstance = {
  instanceId: 'INC-2026-042',
  definitionId: 'incident-mgmt-v1',
  currentNodeId: 'escalate',
  nodeState: {
    detect: 'done',
    triage: 'done',
    severity: 'done',
    escalate: 'active',
    resolve: 'idle',
    review: 'idle',
    close: 'idle',
  },
  selectedEdges: [
    { from: 'detect', to: 'triage' },
    { from: 'triage', to: 'severity' },
    { from: 'severity', to: 'escalate' },
  ],
  history: [
    { nodeId: 'detect', at: '2026-02-28T14:22:00Z' },
    { nodeId: 'triage', at: '2026-02-28T14:25:00Z' },
    { nodeId: 'severity', at: '2026-02-28T14:30:00Z' },
    { nodeId: 'escalate', at: '2026-02-28T14:32:00Z' },
  ],
  vars: { incidentId: 'INC-2026-042', service: 'Communications SaaS', severity: 'P1', reporter: 'Monitoring System' },
};
