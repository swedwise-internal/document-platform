'use client';

import { useState, useMemo } from 'react';
import { DocumentList } from './DocumentList';
import { ISOStandardFilter } from './ISOStandardFilter';
import { ClassificationFilter } from './ClassificationFilter';
import { StatusFilter } from './StatusFilter';
import { DocumentListItem, DocumentCategory, CLASSIFICATION_STYLES, Classification, STATUS_STYLES, DocumentStatus } from '@/types/document';

interface DocumentsPageClientProps {
  documents: DocumentListItem[];
  categories: DocumentCategory[];
}

export function DocumentsPageClient({ documents, categories }: DocumentsPageClientProps) {
  const [selectedStandards, setSelectedStandards] = useState<string[]>([]);
  const [selectedClassifications, setSelectedClassifications] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  // Extract unique standards from all documents, sorted alphabetically
  const availableStandards = useMemo(() => {
    const standards = new Set<string>();
    documents.forEach(doc => {
      doc.standard?.forEach(std => standards.add(std));
    });
    return Array.from(standards).sort();
  }, [documents]);

  // Extract unique classifications from all documents, sorted by importance
  const availableClassifications = useMemo(() => {
    const classifications = new Set<string>();
    documents.forEach(doc => {
      if (doc.classification) {
        classifications.add(doc.classification);
      }
    });
    // Sort by predefined order: public, internal, confidential, restricted
    const classificationOrder = ['public', 'internal', 'confidential', 'restricted'];
    return Array.from(classifications).sort((a, b) => {
      const aIndex = classificationOrder.indexOf(a);
      const bIndex = classificationOrder.indexOf(b);
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }, [documents]);

  // Extract unique statuses from all documents, sorted by workflow order
  const availableStatuses = useMemo(() => {
    const statuses = new Set<string>();
    documents.forEach(doc => {
      if (doc.status) {
        statuses.add(doc.status);
      }
    });
    // Sort by workflow order: draft, review, approved, obsolete
    const statusOrder = ['draft', 'review', 'approved', 'obsolete'];
    return Array.from(statuses).sort((a, b) => {
      const aIndex = statusOrder.indexOf(a);
      const bIndex = statusOrder.indexOf(b);
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }, [documents]);

  // Filter documents based on selected standards, classifications, AND statuses
  const filteredDocuments = useMemo(() => {
    let result = documents;

    // Filter by standards (OR logic within standards)
    if (selectedStandards.length > 0) {
      result = result.filter(doc => {
        return doc.standard?.some(std => selectedStandards.includes(std)) ?? false;
      });
    }

    // Filter by classifications (OR logic within classifications)
    if (selectedClassifications.length > 0) {
      result = result.filter(doc => {
        return selectedClassifications.includes(doc.classification);
      });
    }

    // Filter by statuses (OR logic within statuses)
    if (selectedStatuses.length > 0) {
      result = result.filter(doc => {
        return selectedStatuses.includes(doc.status);
      });
    }

    return result;
  }, [documents, selectedStandards, selectedClassifications, selectedStatuses]);

  // Group filtered documents by category
  const documentsByCategory = useMemo(() => {
    return categories.map(category => ({
      ...category,
      documents: filteredDocuments.filter(doc => doc.path.startsWith(category.path)),
      count: filteredDocuments.filter(doc => doc.path.startsWith(category.path)).length,
      totalCount: documents.filter(doc => doc.path.startsWith(category.path)).length,
    }));
  }, [filteredDocuments, documents, categories]);

  const isFiltering = selectedStandards.length > 0 || selectedClassifications.length > 0 || selectedStatuses.length > 0;

  // Build filter description for the indicator
  const getFilterDescription = () => {
    const parts: string[] = [];
    if (selectedStandards.length > 0) {
      parts.push(selectedStandards.join(', '));
    }
    if (selectedClassifications.length > 0) {
      const labels = selectedClassifications.map(c =>
        CLASSIFICATION_STYLES[c as Classification]?.label || c
      );
      parts.push(labels.join(', '));
    }
    if (selectedStatuses.length > 0) {
      const labels = selectedStatuses.map(s =>
        STATUS_STYLES[s as DocumentStatus]?.label || s
      );
      parts.push(labels.join(', '));
    }
    return parts.join(' + ');
  };

  const clearAllFilters = () => {
    setSelectedStandards([]);
    setSelectedClassifications([]);
    setSelectedStatuses([]);
  };

  return (
    <>
      {/* Filter Section */}
      <div className="mb-6 space-y-4">
        {/* Standard filter - only show if there are standards to filter by */}
        {availableStandards.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-700 mb-3">Filter by Standard</h2>
            <ISOStandardFilter
              availableStandards={availableStandards}
              selectedStandards={selectedStandards}
              onFilterChange={setSelectedStandards}
            />
          </div>
        )}

        {/* Classification filter - only show if there are classifications to filter by */}
        {availableClassifications.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-700 mb-3">Filter by Classification</h2>
            <ClassificationFilter
              availableClassifications={availableClassifications}
              selectedClassifications={selectedClassifications}
              onFilterChange={setSelectedClassifications}
            />
          </div>
        )}

        {/* Status filter - only show if there are statuses to filter by */}
        {availableStatuses.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-700 mb-3">Filter by Status</h2>
            <StatusFilter
              availableStatuses={availableStatuses}
              selectedStatuses={selectedStatuses}
              onFilterChange={setSelectedStatuses}
            />
          </div>
        )}
      </div>

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
            <span className="font-medium">{getFilterDescription()}</span>
          </p>
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Document List */}
      <DocumentList categories={documentsByCategory} />
    </>
  );
}
