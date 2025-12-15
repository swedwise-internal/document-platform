'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  autoFocus?: boolean;
}

export function SearchBar({
  placeholder = 'Search documents...',
  className = '',
  defaultValue = '',
  autoFocus = false
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }, [query, router]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`relative ${className}`}
    >
      <div className="relative">
        {/* Search icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="block w-full pl-10 pr-12 py-2 border border-slate-200 rounded-lg
                     bg-slate-50 text-sm placeholder-slate-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     focus:bg-white transition-colors"
        />

        {/* Keyboard shortcut hint */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-slate-400 bg-slate-100 rounded border border-slate-200">
            {typeof navigator !== 'undefined' && navigator.platform?.includes('Mac') ? '⌘' : 'Ctrl'}K
          </kbd>
        </div>
      </div>

      {/* Hint text */}
      {isOpen && query.length > 0 && query.length < 2 && (
        <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-white border border-slate-200 rounded-lg shadow-lg text-sm text-slate-500">
          Type at least 2 characters to search
        </div>
      )}
    </form>
  );
}

// Compact version for header
export function SearchBarCompact({ className = '' }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('q') as string;
    if (query?.trim().length >= 2) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsExpanded(true);
      }
      if (e.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className={`flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500
                   bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors ${className}`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden md:inline">Search</span>
        <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-slate-400 bg-white rounded border border-slate-200">
          {typeof navigator !== 'undefined' && navigator.platform?.includes('Mac') ? '⌘' : 'Ctrl'}K
        </kbd>
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        ref={inputRef}
        type="text"
        name="q"
        placeholder="Search documents..."
        onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
        className="w-48 md:w-64 px-3 py-1.5 text-sm border border-slate-200 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </form>
  );
}
