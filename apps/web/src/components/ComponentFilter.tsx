'use client';

import { COMPONENT_STYLES, ServiceComponent } from '@/types/document';

interface ComponentFilterProps {
  availableComponents: string[];
  selectedComponents: string[];
  onFilterChange: (components: string[]) => void;
}

// Color mapping for components
const COMPONENT_COLORS: Record<string, { selected: string; unselected: string }> = {
  general: {
    selected: 'bg-slate-600 text-white border-slate-600 shadow-sm',
    unselected: 'hover:border-slate-400 hover:bg-slate-50',
  },
  communications: {
    selected: 'bg-cyan-600 text-white border-cyan-600 shadow-sm',
    unselected: 'hover:border-cyan-400 hover:bg-cyan-50',
  },
  notifications: {
    selected: 'bg-purple-600 text-white border-purple-600 shadow-sm',
    unselected: 'hover:border-purple-400 hover:bg-purple-50',
  },
};

const DEFAULT_COLORS = {
  selected: 'bg-slate-600 text-white border-slate-600 shadow-sm',
  unselected: 'hover:border-slate-400 hover:bg-slate-50',
};

export function ComponentFilter({ availableComponents, selectedComponents, onFilterChange }: ComponentFilterProps) {
  const isAllSelected = selectedComponents.length === 0;

  const toggleComponent = (component: string) => {
    if (selectedComponents.includes(component)) {
      onFilterChange(selectedComponents.filter(c => c !== component));
    } else {
      onFilterChange([...selectedComponents, component]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  // Get display label for component
  const getLabel = (component: string): string => {
    const style = COMPONENT_STYLES[component as ServiceComponent];
    return style?.label || component.charAt(0).toUpperCase() + component.slice(1);
  };

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by service component">
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

      {/* Component filter buttons - dynamically generated */}
      {availableComponents.map(component => {
        const isSelected = selectedComponents.includes(component);
        const colors = COMPONENT_COLORS[component] || DEFAULT_COLORS;

        return (
          <button
            key={component}
            onClick={() => toggleComponent(component)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all border-2
              ${isSelected
                ? colors.selected
                : `bg-white text-slate-700 border-slate-300 ${colors.unselected}`
              }
            `}
            aria-pressed={isSelected}
          >
            {getLabel(component)}
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
