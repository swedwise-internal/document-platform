'use client';

import { CLASSIFICATION_STYLES, Classification } from '@/types/document';

interface ClassificationFilterProps {
  availableClassifications: string[];
  selectedClassifications: string[];
  onFilterChange: (classifications: string[]) => void;
}

// Color mapping for classifications
const CLASSIFICATION_COLORS: Record<string, { selected: string; unselected: string }> = {
  public: {
    selected: 'bg-green-600 text-white border-green-600 shadow-sm',
    unselected: 'hover:border-green-400 hover:bg-green-50',
  },
  internal: {
    selected: 'bg-blue-600 text-white border-blue-600 shadow-sm',
    unselected: 'hover:border-blue-400 hover:bg-blue-50',
  },
  confidential: {
    selected: 'bg-amber-600 text-white border-amber-600 shadow-sm',
    unselected: 'hover:border-amber-400 hover:bg-amber-50',
  },
  restricted: {
    selected: 'bg-red-600 text-white border-red-600 shadow-sm',
    unselected: 'hover:border-red-400 hover:bg-red-50',
  },
};

const DEFAULT_COLORS = {
  selected: 'bg-slate-600 text-white border-slate-600 shadow-sm',
  unselected: 'hover:border-slate-400 hover:bg-slate-50',
};

export function ClassificationFilter({ availableClassifications, selectedClassifications, onFilterChange }: ClassificationFilterProps) {
  const isAllSelected = selectedClassifications.length === 0;

  const toggleClassification = (classification: string) => {
    if (selectedClassifications.includes(classification)) {
      onFilterChange(selectedClassifications.filter(c => c !== classification));
    } else {
      onFilterChange([...selectedClassifications, classification]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  // Get display label for classification
  const getLabel = (classification: string): string => {
    const style = CLASSIFICATION_STYLES[classification as Classification];
    return style?.label || classification.charAt(0).toUpperCase() + classification.slice(1);
  };

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by classification">
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

      {/* Classification filter buttons - dynamically generated */}
      {availableClassifications.map(classification => {
        const isSelected = selectedClassifications.includes(classification);
        const colors = CLASSIFICATION_COLORS[classification] || DEFAULT_COLORS;

        return (
          <button
            key={classification}
            onClick={() => toggleClassification(classification)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all border-2
              ${isSelected
                ? colors.selected
                : `bg-white text-slate-700 border-slate-300 ${colors.unselected}`
              }
            `}
            aria-pressed={isSelected}
          >
            {getLabel(classification)}
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
