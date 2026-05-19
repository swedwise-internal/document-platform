'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  area: string;
  /** Pre-fill the folder path, e.g. "12-processes" */
  folder?: string;
}

export function NewDocumentButtons({ area, folder }: Props) {
  const router = useRouter();
  const [showFolderDialog, setShowFolderDialog] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [folderError, setFolderError] = useState('');

  function openNewPage() {
    const params = new URLSearchParams({ area, new: 'true' });
    if (folder) params.set('folder', folder);
    router.push(`/edit?${params}`);
  }

  function openNewFolder() {
    setFolderName('');
    setFolderError('');
    setShowFolderDialog(true);
  }

  function confirmNewFolder() {
    const name = folderName.trim().replace(/[^a-zA-Z0-9-_åäöÅÄÖ]/g, '-').replace(/-+/g, '-').toLowerCase();
    if (!name) { setFolderError('Ange ett mappnamn.'); return; }
    // Create an overview page in the new folder as the entry point
    const newPath = `${name}/00-overview`;
    const params = new URLSearchParams({ area, new: 'true' });
    params.set('folder', newPath.replace('/00-overview', ''));
    // Pre-fill the path in the editor
    router.push(`/edit?${params}&prefillPath=${encodeURIComponent(newPath)}`);
    setShowFolderDialog(false);
  }

  return (
    <>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={openNewPage}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white
                     bg-violet-600 hover:bg-violet-700 rounded-lg px-3 py-1.5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Ny sida
        </button>
        <button
          onClick={openNewFolder}
          className="inline-flex items-center gap-1.5 text-sm text-slate-600
                     border border-slate-200 hover:border-slate-300 bg-white
                     rounded-lg px-3 py-1.5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Ny mapp
        </button>
      </div>

      {/* Folder name dialog */}
      {showFolderDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 w-full max-w-sm">
            <h2 className="text-base font-semibold text-slate-900 mb-1">Ny mapp</h2>
            <p className="text-sm text-slate-500 mb-4">
              En <span className="font-mono text-xs bg-slate-100 px-1 rounded">00-overview.md</span> skapas
              automatiskt i mappen som startpunkt.
            </p>
            <input
              autoFocus
              value={folderName}
              onChange={(e) => { setFolderName(e.target.value); setFolderError(''); }}
              onKeyDown={(e) => { if (e.key === 'Enter') confirmNewFolder(); if (e.key === 'Escape') setShowFolderDialog(false); }}
              placeholder="t.ex. 13-governance"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm
                         focus:outline-none focus:ring-2 focus:ring-violet-500 mb-1"
            />
            {folderError && <p className="text-xs text-red-500 mb-2">{folderError}</p>}
            <div className="flex gap-2 mt-4">
              <button
                onClick={confirmNewFolder}
                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white text-sm
                           font-medium py-2 rounded-lg transition-colors"
              >
                Skapa mapp
              </button>
              <button
                onClick={() => setShowFolderDialog(false)}
                className="flex-1 border border-slate-200 text-slate-600 text-sm
                           py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Avbryt
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
