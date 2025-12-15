'use client';

interface ISOStandardFilterProps {
  availableStandards: string[];
  selectedStandards: string[];
  onFilterChange: (standards: string[]) => void;
}

// Color mapping for known standards, with a default for unknown ones
const STANDARD_COLORS: Record<string, { selected: string; unselected: string }> = {
  'ISO 9001': {
    selected: 'bg-blue-600 text-white border-blue-600 shadow-sm',
    unselected: 'hover:border-blue-400 hover:bg-blue-50',
  },
  'ISO 14001': {
    selected: 'bg-green-600 text-white border-green-600 shadow-sm',
    unselected: 'hover:border-green-400 hover:bg-green-50',
  },
  'ISO 27001': {
    selected: 'bg-purple-600 text-white border-purple-600 shadow-sm',
    unselected: 'hover:border-purple-400 hover:bg-purple-50',
  },
  'ISO 22301': {
    selected: 'bg-orange-600 text-white border-orange-600 shadow-sm',
    unselected: 'hover:border-orange-400 hover:bg-orange-50',
  },
};

const DEFAULT_COLORS = {
  selected: 'bg-slate-600 text-white border-slate-600 shadow-sm',
  unselected: 'hover:border-slate-400 hover:bg-slate-50',
};

export function ISOStandardFilter({ availableStandards, selectedStandards, onFilterChange }: ISOStandardFilterProps) {
  const isAllSelected = selectedStandards.length === 0;

  const toggleStandard = (standard: string) => {
    if (selectedStandards.includes(standard)) {
      onFilterChange(selectedStandards.filter(s => s !== standard));
    } else {
      onFilterChange([...selectedStandards, standard]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by ISO standard">
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

      {/* Standard filter buttons - dynamically generated */}
      {availableStandards.map(standard => {
        const isSelected = selectedStandards.includes(standard);
        const colors = STANDARD_COLORS[standard] || DEFAULT_COLORS;

        return (
          <button
            key={standard}
            onClick={() => toggleStandard(standard)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all border-2
              ${isSelected
                ? colors.selected
                : `bg-white text-slate-700 border-slate-300 ${colors.unselected}`
              }
            `}
            aria-pressed={isSelected}
          >
            {standard}
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
