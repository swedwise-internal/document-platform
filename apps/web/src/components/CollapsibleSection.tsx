'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  description?: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({
  title,
  description,
  count,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full card-header flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-400">
            {isOpen ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </span>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            {description && (
              <p className="text-sm text-slate-500">{description}</p>
            )}
          </div>
        </div>
        {count !== undefined && (
          <span className="badge bg-slate-100 text-slate-600">
            {count} {count === 1 ? 'document' : 'documents'}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="border-t border-slate-200">
          {children}
        </div>
      )}
    </div>
  );
}
