'use client';

import { useState } from 'react';
import { TocItem } from '@/types/document';

interface TableOfContentsDrawerProps {
  items: TocItem[];
  defaultOpen?: boolean;
}

export function TableOfContentsDrawer({ items, defaultOpen = true }: TableOfContentsDrawerProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className="card sticky top-20 flex flex-col"
      style={{ maxHeight: 'calc(100vh - 10rem)' }}
    >
      {/* Header with toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors flex-shrink-0"
        aria-expanded={isOpen}
        aria-controls="toc-content"
      >
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <span className="font-semibold text-slate-900">Contents</span>
        </div>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Collapsible content */}
      <div
        id="toc-content"
        className={`overflow-hidden transition-all duration-200 flex-1 min-h-0 ${
          isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4 space-y-1 overflow-y-auto h-full">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded px-2 py-1 transition-colors ${
                item.level === 2
                  ? 'font-medium'
                  : item.level === 3
                  ? 'pl-4 text-slate-500'
                  : 'pl-6 text-slate-400 text-xs'
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
