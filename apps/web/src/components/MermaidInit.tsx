'use client';

import { useEffect } from 'react';

/**
 * Client component that initialises Mermaid.js and renders all
 * .mermaid divs produced by the rehype-mermaid plugin.
 * Also injects "Edit" buttons that dispatch a custom event
 * to open the MermaidEditor modal.
 */
export function MermaidInit() {
  useEffect(() => {
    import('mermaid').then((mod) => {
      const mermaid = mod.default;
      mermaid.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'inherit',
      });
      mermaid.run({ querySelector: '.mermaid' }).then(() => {
        // After rendering, inject edit buttons
        const mermaidDivs = document.querySelectorAll('.mermaid');
        mermaidDivs.forEach((div, index) => {
          // Store original source before mermaid replaces content
          const source = div.getAttribute('data-mermaid-source');
          if (!source) return;

          // Wrap in relative container if not already
          const parent = div.parentElement;
          if (parent && !parent.classList.contains('mermaid-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'mermaid-wrapper relative group';
            parent.insertBefore(wrapper, div);
            wrapper.appendChild(div);

            // Create edit button
            const btn = document.createElement('button');
            btn.className =
              'absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity ' +
              'bg-white border border-slate-300 rounded px-2 py-1 text-xs text-slate-600 ' +
              'hover:bg-slate-50 hover:text-slate-900 shadow-sm cursor-pointer z-10';
            btn.textContent = 'Edit';
            btn.addEventListener('click', () => {
              document.dispatchEvent(
                new CustomEvent('mermaid-edit', {
                  detail: { code: source, blockIndex: index },
                })
              );
            });
            wrapper.appendChild(btn);
          }
        });
      });
    });
  }, []);

  return null;
}
