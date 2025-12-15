'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SearchBar } from '@/components/SearchBar';
import { STATUS_STYLES, CLASSIFICATION_STYLES, DocumentStatus, Classification } from '@/types/document';
import { ContentArea } from '@/types/area';

interface SearchMatch {
  field: 'title' | 'document_id' | 'content';
  snippet: string;
  lineNumber?: number;
}

interface SearchResult {
  document_id: string;
  title: string;
  doc_type: string;
  status: DocumentStatus;
  classification: Classification;
  standard?: string[];
  slug: string;
  area: ContentArea;
  matches: SearchMatch[];
  score: number;
}

interface SearchResponse {
  query: string;
  count: number;
  results: SearchResult[];
}

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const areasParam = searchParams.get('areas');
  const statusParam = searchParams.get('status');

  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  // Filters
  const [selectedAreas, setSelectedAreas] = useState<ContentArea[]>(
    areasParam ? (areasParam.split(',') as ContentArea[]) : ['ims', 'saas']
  );
  const [selectedStatus, setSelectedStatus] = useState<string[]>(
    statusParam ? statusParam.split(',') : []
  );

  // Perform search
  const performSearch = useCallback(async () => {
    if (!query || query.length < 2) {
      setResults([]);
      setTotalCount(0);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        q: query,
        areas: selectedAreas.join(',')
      });
      if (selectedStatus.length > 0) {
        params.set('status', selectedStatus.join(','));
      }

      const response = await fetch(`/api/search?${params}`);
      if (!response.ok) throw new Error('Search failed');

      const data: SearchResponse = await response.json();
      setResults(data.results);
      setTotalCount(data.count);
    } catch (err) {
      setError('Failed to search documents. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [query, selectedAreas, selectedStatus]);

  // Search when query or filters change
  useEffect(() => {
    performSearch();
  }, [performSearch]);

  // Update URL when filters change
  const updateFilters = (areas: ContentArea[], status: string[]) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (areas.length > 0 && areas.length < 2) params.set('areas', areas.join(','));
    if (status.length > 0) params.set('status', status.join(','));
    router.push(`/search?${params.toString()}`);
  };

  const toggleArea = (area: ContentArea) => {
    const newAreas = selectedAreas.includes(area)
      ? selectedAreas.filter(a => a !== area)
      : [...selectedAreas, area];
    if (newAreas.length > 0) {
      setSelectedAreas(newAreas);
      updateFilters(newAreas, selectedStatus);
    }
  };

  const toggleStatus = (status: string) => {
    const newStatus = selectedStatus.includes(status)
      ? selectedStatus.filter(s => s !== status)
      : [...selectedStatus, status];
    setSelectedStatus(newStatus);
    updateFilters(selectedAreas, newStatus);
  };

  // Highlight matching text
  const highlightMatch = (text: string, searchQuery: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 rounded px-0.5">{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Search Documents</h1>
        <SearchBar defaultValue={query} autoFocus className="max-w-2xl" />
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Filters sidebar */}
        <div className="lg:col-span-1 mb-6 lg:mb-0">
          <div className="card p-4 sticky top-4">
            <h2 className="font-semibold text-slate-900 mb-4">Filters</h2>

            {/* Area filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-slate-700 mb-2">Content Area</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAreas.includes('ims')}
                    onChange={() => toggleArea('ims')}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-600">IMS</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAreas.includes('saas')}
                    onChange={() => toggleArea('saas')}
                    className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-600">SaaS</span>
                </label>
              </div>
            </div>

            {/* Status filter */}
            <div>
              <h3 className="text-sm font-medium text-slate-700 mb-2">Status</h3>
              <div className="space-y-2">
                {['draft', 'review', 'approved', 'obsolete'].map(status => (
                  <label key={status} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedStatus.includes(status)}
                      onChange={() => toggleStatus(status)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className={`text-sm ${STATUS_STYLES[status as DocumentStatus]?.text || 'text-slate-600'}`}>
                      {STATUS_STYLES[status as DocumentStatus]?.label || status}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {(selectedAreas.length < 2 || selectedStatus.length > 0) && (
              <button
                onClick={() => {
                  setSelectedAreas(['ims', 'saas']);
                  setSelectedStatus([]);
                  updateFilters(['ims', 'saas'], []);
                }}
                className="mt-4 text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          {/* Results count */}
          {query && (
            <div className="mb-4 text-sm text-slate-500">
              {isLoading ? (
                'Searching...'
              ) : (
                <>
                  Found <strong>{totalCount}</strong> result{totalCount !== 1 ? 's' : ''} for{' '}
                  <strong>&ldquo;{query}&rdquo;</strong>
                </>
              )}
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Loading state */}
          {isLoading && (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="card p-4 animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-1/4 mb-2"></div>
                  <div className="h-5 bg-slate-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-slate-100 rounded w-full"></div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!isLoading && query && results.length === 0 && (
            <div className="card p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-slate-900">No results found</h3>
              <p className="mt-2 text-sm text-slate-500">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}

          {/* No query state */}
          {!query && (
            <div className="card p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-slate-900">Search documents</h3>
              <p className="mt-2 text-sm text-slate-500">
                Enter a search term to find documents by title, ID, or content
              </p>
            </div>
          )}

          {/* Results list */}
          {!isLoading && results.length > 0 && (
            <div className="space-y-4">
              {results.map((result) => (
                <Link
                  key={`${result.area}-${result.slug}`}
                  href={`/${result.area}/documents/${result.slug}`}
                  className="card block p-4 hover:shadow-md transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      result.area === 'ims' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {result.area.toUpperCase()}
                    </span>
                    <span className="font-mono text-sm text-slate-500">
                      {highlightMatch(result.document_id, query)}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${STATUS_STYLES[result.status]?.bg} ${STATUS_STYLES[result.status]?.text}`}>
                      {STATUS_STYLES[result.status]?.label}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${CLASSIFICATION_STYLES[result.classification]?.bg} ${CLASSIFICATION_STYLES[result.classification]?.text}`}>
                      {CLASSIFICATION_STYLES[result.classification]?.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-medium text-slate-900 mb-2">
                    {highlightMatch(result.title, query)}
                  </h3>

                  {/* Match snippets */}
                  {result.matches.filter(m => m.field === 'content').length > 0 && (
                    <div className="mt-2 space-y-1">
                      {result.matches
                        .filter(m => m.field === 'content')
                        .slice(0, 2)
                        .map((match, i) => (
                          <p key={i} className="text-sm text-slate-600 line-clamp-2">
                            {match.lineNumber && (
                              <span className="text-slate-400 mr-2">Line {match.lineNumber}:</span>
                            )}
                            {highlightMatch(match.snippet, query)}
                          </p>
                        ))}
                    </div>
                  )}

                  {/* Standards */}
                  {result.standard && result.standard.length > 0 && (
                    <div className="mt-2 flex gap-1">
                      {result.standard.map(std => (
                        <span key={std} className="px-1.5 py-0.5 rounded text-xs bg-slate-100 text-slate-600">
                          {std}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/4 mb-4"></div>
          <div className="h-10 bg-slate-200 rounded w-full max-w-2xl mb-8"></div>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
