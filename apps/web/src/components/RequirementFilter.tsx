'use client';

export type RequirementFilterValue = 'all' | 'required' | 'optional';

interface RequirementFilterProps {
  selectedRequirement: RequirementFilterValue;
  onFilterChange: (requirement: RequirementFilterValue) => void;
}

const REQUIREMENT_COLORS = {
  all: {
    selected: 'bg-slate-700 text-white border-slate-700 shadow-sm',
    unselected: 'bg-white text-slate-700 border-slate-300 hover:border-slate-500 hover:bg-slate-50',
  },
  required: {
    selected: 'bg-red-600 text-white border-red-600 shadow-sm',
    unselected: 'bg-white text-slate-700 border-slate-300 hover:border-red-400 hover:bg-red-50',
  },
  optional: {
    selected: 'bg-indigo-600 text-white border-indigo-600 shadow-sm',
    unselected: 'bg-white text-slate-700 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50',
  },
};

const REQUIREMENT_LABELS = {
  all: 'All',
  required: 'Required',
  optional: 'Optional',
};

export function RequirementFilter({ selectedRequirement, onFilterChange }: RequirementFilterProps) {
  const options: RequirementFilterValue[] = ['all', 'required', 'optional'];

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by certification requirement">
      {options.map(option => {
        const isSelected = selectedRequirement === option;
        const colors = REQUIREMENT_COLORS[option];

        return (
          <button
            key={option}
            onClick={() => onFilterChange(option)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all border-2
              ${isSelected ? colors.selected : colors.unselected}
            `}
            aria-pressed={isSelected}
          >
            {REQUIREMENT_LABELS[option]}
          </button>
        );
      })}

      {selectedRequirement !== 'all' && (
        <button
          onClick={() => onFilterChange('all')}
          className="px-3 py-2 text-sm text-slate-500 hover:text-slate-700 underline"
        >
          Clear filter
        </button>
      )}
    </div>
  );
}
