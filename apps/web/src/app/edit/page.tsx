'use client';

import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const DIAGRAM_TEMPLATES: Record<string, string> = {
  Flödesschema: `flowchart TD
    A[Start] --> B{Beslut}
    B -->|Ja| C[Åtgärd]
    B -->|Nej| D[Alternativ]
    C --> E[Slut]
    D --> E`,
  Sekvensdiagram: `sequenceDiagram
    participant K as Kund
    participant S as Säljare
    participant L as Leverans
    K->>S: Förfrågan
    S->>L: Beställning
    L-->>S: Bekräftelse
    S-->>K: Orderbekräftelse`,
  'Swim lane': `flowchart LR
    subgraph Kund
      A[Förfrågan] --> D[Godkänner]
    end
    subgraph Säljare
      B[Tar emot] --> C[Offert]
    end
    subgraph Leverans
      E[Planerar] --> F[Levererar]
    end
    A --> B
    C --> D
    D --> E`,
  Tidslinje: `timeline
    title Projektplan
    Q1 : Analys : Kravspec
    Q2 : Design : Utveckling
    Q3 : Test : Driftsättning
    Q4 : Uppföljning`,
};

export default function EditPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-400">Laddar…</div>}>
      <Editor />
    </Suspense>
  );
}

const AREA_LABELS: Record<string, string> = {
  ims: 'IMS',
  saas: 'SaaS',
  'operating-model': 'Operating Model',
};

const AREA_BACK: Record<string, string> = {
  ims: '/ims/documents',
  saas: '/saas/documents',
  'operating-model': '/operating-model',
};

function Editor() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const area = searchParams.get('area') ?? 'operating-model';
  const slug = searchParams.get('slug') ?? '';
  const isNew = searchParams.get('new') === 'true';
  const defaultFolder = searchParams.get('folder') ?? '';
  const prefillPath = searchParams.get('prefillPath') ?? '';

  const [raw, setRaw] = useState('');
  const [newPath, setNewPath] = useState(
    prefillPath || (defaultFolder ? `${defaultFolder}/` : '')
  );
  const [previewHtml, setPreviewHtml] = useState('');
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'error' | 'exists'>('idle');
  const [tab, setTab] = useState<'edit' | 'preview'>('edit');
  const [showDiagramMenu, setShowDiagramMenu] = useState(false);

  const previewTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function insertDiagram(template: string) {
    setShowDiagramMenu(false);
    const ta = textareaRef.current;
    const block = `\n\`\`\`mermaid\n${template}\n\`\`\`\n`;
    if (ta) {
      const pos = ta.selectionEnd ?? raw.length;
      setRaw(raw.slice(0, pos) + block + raw.slice(pos));
      // Restore focus after state update
      setTimeout(() => { ta.focus(); ta.selectionStart = ta.selectionEnd = pos + block.length; }, 0);
    } else {
      setRaw((prev) => prev + block);
    }
  }

  const backHref = slug
    ? (area === 'ims' ? `/ims/documents/${slug.replace(/--/g, '/')}`
      : area === 'saas' ? `/saas/documents/${slug.replace(/--/g, '/')}`
      : `/operating-model/docs/${slug.replace(/--/g, '/')}`)
    : AREA_BACK[area] ?? '/';

  // Load existing document
  useEffect(() => {
    if (isNew || !slug) { setLoading(false); return; }
    fetch(`/api/content/raw?area=${encodeURIComponent(area)}&slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.content !== undefined) setRaw(data.content);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [area, slug, isNew]);

  // Debounced preview
  const refreshPreview = useCallback((text: string) => {
    if (previewTimer.current) clearTimeout(previewTimer.current);
    previewTimer.current = setTimeout(async () => {
      const res = await fetch('/api/content/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: text }),
      });
      const data = await res.json();
      setPreviewHtml(data.html ?? '');
    }, 400);
  }, []);

  useEffect(() => {
    if (tab === 'preview' && raw) refreshPreview(raw);
  }, [tab, raw, refreshPreview]);

  async function save() {
    setSaving(true);
    setSaveStatus('idle');

    const body = isNew
      ? { area, newPath: newPath.endsWith('.md') ? newPath : newPath + '.md', content: raw }
      : { area, slug, content: raw };

    const res = await fetch('/api/content/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (res.status === 409) {
      setSaveStatus('exists');
      return;
    }
    if (!res.ok) {
      setSaveStatus('error');
      return;
    }

    const data = await res.json();
    setSaveStatus('saved');

    if (isNew && data.viewUrl) {
      // Redirect to the new document after a short delay
      setTimeout(() => router.push(data.viewUrl), 800);
    } else {
      setTimeout(() => setSaveStatus('idle'), 2500);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); save(); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const areaLabel = AREA_LABELS[area] ?? area;
  const pathDisplay = isNew
    ? `${area}/${newPath || '…'}`
    : `${area}/${slug.replace(/--/g, '/')}.md`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center gap-3 flex-wrap">
        <Link href={backHref} className="text-sm text-slate-500 hover:text-slate-700 shrink-0">
          ← {areaLabel}
        </Link>

        {isNew ? (
          /* New file — show an editable path input */
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <span className="text-xs text-slate-400 font-mono shrink-0">{area}/</span>
            <input
              value={newPath}
              onChange={(e) => setNewPath(e.target.value)}
              placeholder="mapp/filnamn.md"
              className="flex-1 min-w-0 text-xs font-mono border border-slate-200 rounded px-2 py-1
                         focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        ) : (
          <p className="text-xs text-slate-400 font-mono truncate flex-1 min-w-0">
            {pathDisplay}
          </p>
        )}

        {/* Insert diagram */}
        <div className="relative shrink-0">
          <button
            onClick={() => setShowDiagramMenu((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm text-slate-600
                       border border-slate-200 hover:border-slate-300 bg-white
                       rounded-lg px-3 py-1.5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M7 12h10M7 8h6M7 16h4M3 6l3-3 3 3M3 18l3 3 3-3" />
            </svg>
            Infoga diagram
          </button>
          {showDiagramMenu && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200
                            rounded-xl shadow-lg py-1 z-20 min-w-40">
              {Object.keys(DIAGRAM_TEMPLATES).map((name) => (
                <button
                  key={name}
                  onClick={() => insertDiagram(DIAGRAM_TEMPLATES[name])}
                  className="w-full text-left px-4 py-2 text-sm text-slate-700
                             hover:bg-slate-50 transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Edit / Preview tabs */}
        <div className="flex rounded-lg border border-slate-200 overflow-hidden text-sm shrink-0">
          <button
            onClick={() => setTab('edit')}
            className={`px-3 py-1.5 ${tab === 'edit' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Redigera
          </button>
          <button
            onClick={() => setTab('preview')}
            className={`px-3 py-1.5 ${tab === 'preview' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Förhandsgranska
          </button>
        </div>

        {saveStatus === 'saved' && (
          <span className="text-xs text-emerald-600 shrink-0">
            {isNew ? 'Skapad! Omdirigerar…' : 'Sparat'}
          </span>
        )}
        {saveStatus === 'error' && (
          <span className="text-xs text-red-500 shrink-0">Kunde inte spara</span>
        )}
        {saveStatus === 'exists' && (
          <span className="text-xs text-amber-600 shrink-0">Filen finns redan</span>
        )}

        <button
          onClick={save}
          disabled={saving || loading || (isNew && !newPath.trim())}
          className="bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white
                     text-sm font-medium px-4 py-1.5 rounded-lg transition-colors shrink-0"
        >
          {saving ? 'Sparar…' : isNew ? 'Skapa' : 'Spara'}
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-full text-slate-400">
            Laddar dokument…
          </div>
        ) : tab === 'edit' ? (
          <textarea
            ref={textareaRef}
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            spellCheck={false}
            autoFocus
            className="w-full h-full resize-none bg-white font-mono text-sm text-slate-800
                       p-6 focus:outline-none border-0"
            placeholder={isNew ? `# Sidans rubrik\n\nBörja skriva här…` : 'Markdown-innehåll…'}
          />
        ) : (
          <div className="h-full overflow-auto p-8 bg-white">
            <div
              className="prose prose-slate max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: previewHtml }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
