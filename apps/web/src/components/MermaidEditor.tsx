'use client';

import { useEffect, useState, useCallback } from 'react';
import { deflate } from 'pako';
import { fromUint8Array } from 'js-base64';

interface MermaidEditorProps {
  filePath: string;
}

interface EditRequest {
  code: string;
  blockIndex: number;
}

function encodeState(code: string): string {
  const state = JSON.stringify({
    code,
    mermaid: JSON.stringify({ theme: 'neutral' }),
    updateDiagram: true,
    rough: false,
    panZoom: true,
    grid: true,
  });
  const data = new TextEncoder().encode(state);
  const compressed = deflate(data, { level: 9 });
  return 'pako:' + fromUint8Array(compressed, true);
}

export function MermaidEditor({ filePath }: MermaidEditorProps) {
  const [editRequest, setEditRequest] = useState<EditRequest | null>(null);
  const [saving, setSaving] = useState(false);

  const handleOpen = useCallback((e: Event) => {
    const detail = (e as CustomEvent).detail as { code: string; blockIndex: number };
    setEditRequest(detail);
  }, []);

  const handleMessage = useCallback(
    async (e: MessageEvent) => {
      if (!editRequest) return;

      if (e.data?.type === 'mermaid-save') {
        setSaving(true);
        try {
          const res = await fetch('/api/content/mermaid', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filePath,
              blockIndex: editRequest.blockIndex,
              newCode: e.data.code,
            }),
          });

          if (!res.ok) {
            const err = await res.json();
            alert(`Failed to save: ${err.error}`);
          } else {
            setEditRequest(null);
            window.location.reload();
          }
        } catch (err) {
          alert(`Failed to save: ${err}`);
        } finally {
          setSaving(false);
        }
      }

      if (e.data?.type === 'mermaid-close') {
        setEditRequest(null);
      }
    },
    [editRequest, filePath]
  );

  useEffect(() => {
    document.addEventListener('mermaid-edit', handleOpen);
    return () => document.removeEventListener('mermaid-edit', handleOpen);
  }, [handleOpen]);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  if (!editRequest) return null;

  const hash = encodeState(editRequest.code);
  // Route through the /editor proxy (configured in next.config.js → MERMAID_EDITOR_URL)
  const editorUrl = `/editor/edit?embedded#${hash}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[95vw] h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        {saving && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
            <p className="text-lg font-medium">Saving...</p>
          </div>
        )}
        <iframe
          src={editorUrl}
          className="w-full h-full border-0"
          title="Mermaid Editor"
        />
      </div>
    </div>
  );
}
