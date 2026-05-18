'use client';

import { X, User, Clock, ExternalLink, Info } from 'lucide-react';
import {
  WorkflowNode,
  WorkflowNodeState,
  NODE_STATE_STYLES,
} from '@/types/workflow';

interface NodeMetaPanelProps {
  node: WorkflowNode;
  state?: WorkflowNodeState;
  historyTimestamp?: string;
  onClose: () => void;
}

export function NodeMetaPanel({ node, state, historyTimestamp, onClose }: NodeMetaPanelProps) {
  const stateStyle = state ? NODE_STATE_STYLES[state] : null;

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">{node.label}</h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">{node.id}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-slate-100 transition-colors"
          aria-label="Close panel"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Body */}
      <div className="px-4 py-3 space-y-3">
        {/* State badge */}
        {stateStyle && (
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${stateStyle.bg} ${stateStyle.text}`}>
              {stateStyle.label}
            </span>
            {historyTimestamp && (
              <span className="text-xs text-slate-400">
                {new Date(historyTimestamp).toLocaleString()}
              </span>
            )}
          </div>
        )}

        {/* Node type */}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span>Type: <span className="font-medium capitalize">{node.type}</span></span>
        </div>

        {/* Meta fields */}
        {node.meta?.description && (
          <div>
            <p className="text-xs text-slate-500 mb-1">Description</p>
            <p className="text-sm text-slate-700">{node.meta.description}</p>
          </div>
        )}

        {node.meta?.ownerRole && (
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="text-slate-600">Owner:</span>
            <span className="font-medium text-slate-700">{node.meta.ownerRole}</span>
          </div>
        )}

        {node.meta?.sla && (
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="text-slate-600">SLA:</span>
            <span className="font-medium text-slate-700">{node.meta.sla}</span>
          </div>
        )}

        {node.meta?.links && node.meta.links.length > 0 && (
          <div>
            <p className="text-xs text-slate-500 mb-2">Related Links</p>
            <ul className="space-y-1">
              {node.meta.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-sky-600 hover:text-sky-800 flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
