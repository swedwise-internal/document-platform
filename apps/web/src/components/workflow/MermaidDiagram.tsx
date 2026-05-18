'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

interface MermaidDiagramProps {
  source: string;
  diagramId?: string;
  onNodeClick?: (nodeId: string) => void;
  className?: string;
}

export function MermaidDiagram({
  source,
  diagramId = 'workflow-diagram',
  onNodeClick,
  className = '',
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const renderIdRef = useRef(0);

  const renderDiagram = useCallback(async () => {
    if (!containerRef.current) return;
    setError(null);

    const currentRenderId = ++renderIdRef.current;

    try {
      const mermaidModule = await import('mermaid');
      const mermaid = mermaidModule.default;

      mermaid.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'inherit',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
        },
      });

      // Unique ID per render to avoid mermaid caching
      const uniqueId = `${diagramId}-${currentRenderId}`;
      const { svg } = await mermaid.render(uniqueId, source);

      // Guard against stale renders
      if (currentRenderId !== renderIdRef.current) return;

      containerRef.current.innerHTML = svg;

      // Attach click handlers to node elements
      if (onNodeClick) {
        const nodes = containerRef.current.querySelectorAll('.node');
        nodes.forEach((nodeEl) => {
          const id = nodeEl.id;
          // Mermaid generates IDs like "flowchart-nodeId-0"
          const match = id.match(/^flowchart-(.+?)-\d+$/);
          if (match) {
            (nodeEl as HTMLElement).style.cursor = 'pointer';
            nodeEl.addEventListener('click', () => onNodeClick(match[1]));
          }
        });
      }
    } catch (err) {
      if (currentRenderId !== renderIdRef.current) return;
      setError(err instanceof Error ? err.message : 'Failed to render diagram');
    }
  }, [source, diagramId, onNodeClick]);

  useEffect(() => {
    renderDiagram();
  }, [renderDiagram]);

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
        <p className="font-medium">Diagram rendering error</p>
        <p className="mt-1 font-mono text-xs">{error}</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
    />
  );
}
