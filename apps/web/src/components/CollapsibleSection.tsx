'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapsibleSectionProps {
  id?: string;
  title: string;
  description?: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({
  id,
  title,
  description,
  count,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  // Initialize with defaultOpen to avoid hydration mismatch
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isHydrated, setIsHydrated] = useState(false);

  // Restore state from localStorage after hydration
  useEffect(() => {
    if (id) {
      try {
        const storageKey = `collapsible-section-${id}`;
        const savedState = localStorage.getItem(storageKey);

        if (savedState !== null) {
          setIsOpen(savedState === 'true');
        }
      } catch (error) {
        // localStorage not available (e.g., SSR, private browsing)
        console.warn('localStorage not available:', error);
      }
    }
    setIsHydrated(true);
  }, [id]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    // Save to localStorage if id is provided
    if (id) {
      try {
        const storageKey = `collapsible-section-${id}`;
        localStorage.setItem(storageKey, String(newState));
      } catch (error) {
        // localStorage not available (e.g., quota exceeded, private browsing)
        console.warn('Failed to save to localStorage:', error);
      }
    }
  };

  return (
    <div id={id} className="card scroll-mt-24">
      <button
        onClick={handleToggle}
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
