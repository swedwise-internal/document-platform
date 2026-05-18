'use client';

import { useState, useMemo, useCallback } from 'react';
import { renderMermaid } from '@/lib/workflow/renderer';
import { MermaidDiagram } from './MermaidDiagram';
import { NodeMetaPanel } from './NodeMetaPanel';
import {
  WorkflowDefinition,
  WorkflowInstance,
  WorkflowNode,
  WorkflowNodeState,
  NODE_STATE_STYLES,
} from '@/types/workflow';
import { Clock, Braces, ChevronDown, ChevronRight } from 'lucide-react';

interface WorkflowVisualizerProps {
  definition: WorkflowDefinition;
  instance?: WorkflowInstance;
}

export function WorkflowVisualizer({ definition, instance }: WorkflowVisualizerProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showVars, setShowVars] = useState(false);

  const renderResult = useMemo(
    () => renderMermaid(definition, instance),
    [definition, instance]
  );

  const selectedNode: WorkflowNode | undefined = useMemo(
    () => definition.nodes.find(n => n.id === selectedNodeId),
    [definition.nodes, selectedNodeId]
  );

  const selectedNodeState: WorkflowNodeState | undefined = useMemo(
    () => (selectedNodeId && instance) ? instance.nodeState[selectedNodeId] : undefined,
    [selectedNodeId, instance]
  );

  const selectedNodeTimestamp: string | undefined = useMemo(
    () => {
      if (!selectedNodeId || !instance) return undefined;
      const entry = [...instance.history].reverse().find(h => h.nodeId === selectedNodeId);
      return entry?.at;
    },
    [selectedNodeId, instance]
  );

  const handleNodeClick = useCallback((nodeId: string) => {
    setSelectedNodeId(prev => prev === nodeId ? null : nodeId);
  }, []);

  const hasSidebar = selectedNode || (instance && (instance.history.length > 0 || Object.keys(instance.vars).length > 0));

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-6">
      {/* Main diagram area */}
      <div className={hasSidebar ? 'lg:col-span-8' : 'lg:col-span-12'}>
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {definition.id}
                {definition.version && (
                  <span className="text-sm font-normal text-slate-400 ml-2">v{definition.version}</span>
                )}
              </h3>
              {instance && (
                <p className="text-sm text-slate-500 mt-0.5">
                  Instance: <span className="font-mono text-xs">{instance.instanceId}</span>
                </p>
              )}
            </div>

            {/* Legend */}
            <div className="hidden md:flex items-center gap-3 text-xs">
              {(['done', 'active', 'blocked', 'skipped'] as WorkflowNodeState[]).map((state) => {
                const style = NODE_STATE_STYLES[state];
                return (
                  <div key={state} className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-sm border"
                      style={{ backgroundColor: style.mermaidFill, borderColor: style.mermaidStroke }}
                    />
                    <span className="text-slate-600">{style.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Diagram */}
          <MermaidDiagram
            source={renderResult.source}
            diagramId={`wf-${definition.id}`}
            onNodeClick={handleNodeClick}
            className="min-h-[200px]"
          />

          <p className="text-xs text-slate-400 mt-3 text-center">
            Click a node to view details
          </p>
        </div>
      </div>

      {/* Right sidebar */}
      {hasSidebar && (
        <div className="lg:col-span-4 mt-6 lg:mt-0 space-y-4">
          {/* Node meta panel */}
          {selectedNode && (
            <NodeMetaPanel
              node={selectedNode}
              state={selectedNodeState}
              historyTimestamp={selectedNodeTimestamp}
              onClose={() => setSelectedNodeId(null)}
            />
          )}

          {/* History */}
          {instance && instance.history.length > 0 && (
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="w-full px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold text-slate-900 text-sm">History</span>
                  <span className="text-xs text-slate-400">({instance.history.length})</span>
                </div>
                {showHistory
                  ? <ChevronDown className="w-4 h-4 text-slate-400" />
                  : <ChevronRight className="w-4 h-4 text-slate-400" />
                }
              </button>
              {showHistory && (
                <div className="px-4 pb-3 border-t border-slate-100">
                  <ul className="mt-2 space-y-1">
                    {[...instance.history].reverse().map((entry, i) => {
                      const node = definition.nodes.find(n => n.id === entry.nodeId);
                      return (
                        <li
                          key={i}
                          className="flex items-center justify-between text-sm cursor-pointer hover:bg-slate-50 rounded px-2 py-1.5 -mx-2 transition-colors"
                          onClick={() => setSelectedNodeId(entry.nodeId)}
                        >
                          <span className="text-slate-700">{node?.label ?? entry.nodeId}</span>
                          <span className="text-xs text-slate-400 font-mono">
                            {new Date(entry.at).toLocaleString()}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Variables */}
          {instance && Object.keys(instance.vars).length > 0 && (
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setShowVars(!showVars)}
                className="w-full px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Braces className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold text-slate-900 text-sm">Variables</span>
                  <span className="text-xs text-slate-400">({Object.keys(instance.vars).length})</span>
                </div>
                {showVars
                  ? <ChevronDown className="w-4 h-4 text-slate-400" />
                  : <ChevronRight className="w-4 h-4 text-slate-400" />
                }
              </button>
              {showVars && (
                <div className="px-4 pb-3 border-t border-slate-100">
                  <dl className="mt-2 space-y-2">
                    {Object.entries(instance.vars).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <dt className="text-slate-500 font-mono text-xs">{key}</dt>
                        <dd className="text-slate-700 font-medium">{String(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
