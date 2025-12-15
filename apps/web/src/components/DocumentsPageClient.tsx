'use client';

import { useState, useMemo } from 'react';
import { DocumentList } from './DocumentList';
import { ISOStandardFilter } from './ISOStandardFilter';
import { DocumentListItem, DOCUMENT_CATEGORIES } from '@/types/document';

interface DocumentsPageClientProps {
  documents: DocumentListItem[];
}

export function DocumentsPageClient({ documents }: DocumentsPageClientProps) {
  const [selectedStandards, setSelectedStandards] = useState<string[]>([]);

  // Extract unique standards from all documents, sorted alphabetically
  const availableStandards = useMemo(() => {
    const standards = new Set<string>();
    documents.forEach(doc => {
      doc.standard?.forEach(std => standards.add(std));
    });
    return Array.from(standards).sort();
  }, [documents]);

  // Filter documents based on selected standards
  const filteredDocuments = useMemo(() => {
    if (selectedStandards.length === 0) {
      return documents; // No filters = show all
    }

    return documents.filter(doc => {
      // Document matches if it has at least one of the selected standards
      return doc.standard?.some(std => selectedStandards.includes(std)) ?? false;
    });
  }, [documents, selectedStandards]);

  // Group filtered documents by category
  const documentsByCategory = useMemo(() => {
    return DOCUMENT_CATEGORIES.map(category => ({
      ...category,
      documents: filteredDocuments.filter(doc => doc.path.startsWith(category.path)),
      count: filteredDocuments.filter(doc => doc.path.startsWith(category.path)).length,
      totalCount: documents.filter(doc => doc.path.startsWith(category.path)).length,
    }));
  }, [filteredDocuments, documents]);

  const isFiltering = selectedStandards.length > 0;

  return (
    <>
      {/* Filter Section - only show if there are standards to filter by */}
      {availableStandards.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Filter by Standard</h2>
          <ISOStandardFilter
            availableStandards={availableStandards}
            selectedStandards={selectedStandards}
            onFilterChange={setSelectedStandards}
          />
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-4">
          <p className="text-sm text-slate-500">
            {isFiltering ? 'Showing' : 'Total Documents'}
          </p>
          <p className="text-2xl font-bold text-slate-900">
            {isFiltering ? (
              <span>
                {filteredDocuments.length}
                <span className="text-base font-normal text-slate-500"> / {documents.length}</span>
              </span>
            ) : (
              documents.length
            )}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Approved</p>
          <p className="text-2xl font-bold text-green-600">
            {filteredDocuments.filter(d => d.status === 'approved').length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Draft</p>
          <p className="text-2xl font-bold text-amber-600">
            {filteredDocuments.filter(d => d.status === 'draft').length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">In Review</p>
          <p className="text-2xl font-bold text-blue-600">
            {filteredDocuments.filter(d => d.status === 'review').length}
          </p>
        </div>
      </div>

      {/* Filter indicator */}
      {isFiltering && (
        <div className="mb-4 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
          <p className="text-sm text-blue-800">
            Showing {filteredDocuments.length} of {documents.length} documents matching:{' '}
            <span className="font-medium">{selectedStandards.join(', ')}</span>
          </p>
          <button
            onClick={() => setSelectedStandards([])}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Show all
          </button>
        </div>
      )}

      {/* Document List */}
      <DocumentList categories={documentsByCategory} />
    </>
  );
}
