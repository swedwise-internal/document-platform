'use client';

import { STATUS_STYLES, DocumentStatus } from '@/types/document';

interface StatusFilterProps {
  availableStatuses: string[];
  selectedStatuses: string[];
  onFilterChange: (statuses: string[]) => void;
}

// Color mapping for statuses
const STATUS_COLORS: Record<string, { selected: string; unselected: string }> = {
  draft: {
    selected: 'bg-amber-600 text-white border-amber-600 shadow-sm',
    unselected: 'hover:border-amber-400 hover:bg-amber-50',
  },
  review: {
    selected: 'bg-blue-600 text-white border-blue-600 shadow-sm',
    unselected: 'hover:border-blue-400 hover:bg-blue-50',
  },
  approved: {
    selected: 'bg-green-600 text-white border-green-600 shadow-sm',
    unselected: 'hover:border-green-400 hover:bg-green-50',
  },
  obsolete: {
    selected: 'bg-gray-600 text-white border-gray-600 shadow-sm',
    unselected: 'hover:border-gray-400 hover:bg-gray-50',
  },
};

const DEFAULT_COLORS = {
  selected: 'bg-slate-600 text-white border-slate-600 shadow-sm',
  unselected: 'hover:border-slate-400 hover:bg-slate-50',
};

export function StatusFilter({ availableStatuses, selectedStatuses, onFilterChange }: StatusFilterProps) {
  const isAllSelected = selectedStatuses.length === 0;

  const toggleStatus = (status: string) => {
    if (selectedStatuses.includes(status)) {
      onFilterChange(selectedStatuses.filter(s => s !== status));
    } else {
      onFilterChange([...selectedStatuses, status]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  // Get display label for status
  const getLabel = (status: string): string => {
    const style = STATUS_STYLES[status as DocumentStatus];
    return style?.label || status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by status">
      {/* All button */}
      <button
        onClick={clearFilters}
        className={`
          px-4 py-2 rounded-full text-sm font-medium transition-all border-2
          ${isAllSelected
            ? 'bg-slate-700 text-white border-slate-700 shadow-sm'
            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500 hover:bg-slate-50'
          }
        `}
        aria-pressed={isAllSelected}
      >
        All
      </button>

      {/* Status filter buttons - dynamically generated */}
      {availableStatuses.map(status => {
        const isSelected = selectedStatuses.includes(status);
        const colors = STATUS_COLORS[status] || DEFAULT_COLORS;

        return (
          <button
            key={status}
            onClick={() => toggleStatus(status)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all border-2
              ${isSelected
                ? colors.selected
                : `bg-white text-slate-700 border-slate-300 ${colors.unselected}`
              }
            `}
            aria-pressed={isSelected}
          >
            {getLabel(status)}
          </button>
        );
      })}

      {/* Clear filters link (only shown when filters are active) */}
      {!isAllSelected && (
        <button
          onClick={clearFilters}
          className="px-3 py-2 text-sm text-slate-500 hover:text-slate-700 underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
