'use client';

import { useState, useMemo, useEffect } from 'react';
import { DocumentList } from './DocumentList';
import { ISOStandardFilter } from './ISOStandardFilter';
import { ClassificationFilter } from './ClassificationFilter';
import { StatusFilter } from './StatusFilter';
import { ComponentFilter } from './ComponentFilter';
import { RequirementFilter, RequirementFilterValue } from './RequirementFilter';
import { DocumentListItem, DocumentCategory, CLASSIFICATION_STYLES, Classification, STATUS_STYLES, DocumentStatus, COMPONENT_STYLES, ServiceComponent } from '@/types/document';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DocumentsPageClientProps {
  documents: DocumentListItem[];
  categories: DocumentCategory[];
  basePath?: string; // e.g., '/ims/documents' or '/saas/documents'
}

const FILTER_COLLAPSE_KEY = 'document-filters-collapsed';

export function DocumentsPageClient({ documents, categories, basePath = '/ims/documents' }: DocumentsPageClientProps) {
  const [selectedStandards, setSelectedStandards] = useState<string[]>([]);
  const [selectedClassifications, setSelectedClassifications] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [selectedRequirement, setSelectedRequirement] = useState<RequirementFilterValue>('all');
  const [isFiltersCollapsed, setIsFiltersCollapsed] = useState(false);

  // Determine if this is a SaaS area (for component filtering)
  const isSaaSArea = basePath.includes('/saas/');

  // Load collapsed state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FILTER_COLLAPSE_KEY);
    if (stored !== null) {
      setIsFiltersCollapsed(stored === 'true');
    }
  }, []);

  // Scroll to anchor on mount if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the '#'
    if (hash) {
      // Small delay to ensure DOM is ready
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  // Save collapsed state to localStorage whenever it changes
  const toggleFiltersCollapsed = () => {
    const newState = !isFiltersCollapsed;
    setIsFiltersCollapsed(newState);
    localStorage.setItem(FILTER_COLLAPSE_KEY, String(newState));
  };

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

  // Extract unique components from all documents (SaaS only), sorted by predefined order
  const availableComponents = useMemo(() => {
    if (!isSaaSArea) return [];

    const components = new Set<string>();
    documents.forEach(doc => {
      if (doc.component) {
        components.add(doc.component);
      }
    });
    // Sort by predefined order: general, communications, notifications
    const componentOrder = ['general', 'communications', 'notifications'];
    return Array.from(components).sort((a, b) => {
      const aIndex = componentOrder.indexOf(a);
      const bIndex = componentOrder.indexOf(b);
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }, [documents, isSaaSArea]);

  // Filter documents based on selected standards, classifications, statuses, AND components
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

    // Filter by components (OR logic within components) - SaaS only
    if (isSaaSArea && selectedComponents.length > 0) {
      result = result.filter(doc => {
        return doc.component && selectedComponents.includes(doc.component);
      });
    }

    // Filter by certification requirement (IMS only, excluding training)
    if (!isSaaSArea && selectedRequirement !== 'all') {
      result = result.filter(doc => {
        // Exclude training documents from certification requirement filtering
        if (doc.doc_type === 'training') {
          return true; // Always show training regardless of requirement filter
        }

        if (selectedRequirement === 'required') {
          return doc.required_for_certification === true;
        } else if (selectedRequirement === 'optional') {
          return doc.required_for_certification !== true;
        }
        return true;
      });
    }

    return result;
  }, [documents, selectedStandards, selectedClassifications, selectedStatuses, selectedComponents, selectedRequirement, isSaaSArea]);

  // Group filtered documents by category
  const documentsByCategory = useMemo(() => {
    return categories.map(category => ({
      ...category,
      documents: filteredDocuments.filter(doc => doc.path.startsWith(category.path)),
      count: filteredDocuments.filter(doc => doc.path.startsWith(category.path)).length,
      totalCount: documents.filter(doc => doc.path.startsWith(category.path)).length,
    }));
  }, [filteredDocuments, documents, categories]);

  const isFiltering = selectedStandards.length > 0 || selectedClassifications.length > 0 || selectedStatuses.length > 0 || selectedComponents.length > 0 || selectedRequirement !== 'all';

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
    if (selectedComponents.length > 0) {
      const labels = selectedComponents.map(c =>
        COMPONENT_STYLES[c as ServiceComponent]?.label || c
      );
      parts.push(labels.join(', '));
    }
    if (selectedRequirement !== 'all') {
      const label = selectedRequirement === 'required' ? 'Required for Certification' : 'Optional';
      parts.push(label);
    }
    return parts.join(' + ');
  };

  const clearAllFilters = () => {
    setSelectedStandards([]);
    setSelectedClassifications([]);
    setSelectedStatuses([]);
    setSelectedComponents([]);
    setSelectedRequirement('all');
  };

  // Check if there are any filters available to show
  const hasFiltersAvailable = availableStandards.length > 0 || availableClassifications.length > 0 || availableStatuses.length > 0 || availableComponents.length > 0;

  // Count active filters
  const activeFilterCount = selectedStandards.length + selectedClassifications.length + selectedStatuses.length + selectedComponents.length + (selectedRequirement !== 'all' ? 1 : 0);

  return (
    <>
      {/* Collapsible Filter Section */}
      {hasFiltersAvailable && (
        <div className="mb-6">
          {/* Toggle Button */}
          <button
            onClick={toggleFiltersCollapsed}
            className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors duration-150 mb-4"
            aria-expanded={!isFiltersCollapsed}
            aria-controls="document-filters"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-slate-700">
                Filters
                {isFiltering && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    {activeFilterCount} active
                  </span>
                )}
              </h2>
            </div>
            {isFiltersCollapsed ? (
              <ChevronDown className="h-5 w-5 text-slate-500" />
            ) : (
              <ChevronUp className="h-5 w-5 text-slate-500" />
            )}
          </button>

          {/* Filter Content */}
          <div
            id="document-filters"
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: isFiltersCollapsed ? '0' : '1000px',
              opacity: isFiltersCollapsed ? 0 : 1,
            }}
          >
            <div className="space-y-4 pb-2">
              {/* Requirement filter - IMS only, placed FIRST */}
              {!isSaaSArea && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Filter by Certification Requirement</h3>
                  <RequirementFilter
                    selectedRequirement={selectedRequirement}
                    onFilterChange={setSelectedRequirement}
                  />
                </div>
              )}

              {/* Component filter - only show for SaaS area */}
              {isSaaSArea && availableComponents.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Filter by Service Component</h3>
                  <ComponentFilter
                    availableComponents={availableComponents}
                    selectedComponents={selectedComponents}
                    onFilterChange={setSelectedComponents}
                  />
                </div>
              )}

              {/* Standard filter - only show if there are standards to filter by */}
              {availableStandards.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Filter by Standard</h3>
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
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Filter by Classification</h3>
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
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Filter by Status</h3>
                  <StatusFilter
                    availableStatuses={availableStatuses}
                    selectedStatuses={selectedStatuses}
                    onFilterChange={setSelectedStatuses}
                  />
                </div>
              )}
            </div>
          </div>
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
      <DocumentList categories={documentsByCategory} basePath={basePath} />
    </>
  );
}
