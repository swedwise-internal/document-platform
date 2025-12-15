import Link from 'next/link';
import { AREA_CONFIGS } from '@/lib/areas/config';

interface AreaSelectorProps {
  counts?: Record<string, number>;
}

export function AreaSelector({ counts }: AreaSelectorProps) {
  const areas = Object.values(AREA_CONFIGS);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {areas.map((area) => (
        <Link
          key={area.id}
          href={area.href}
          className={`card p-8 border-2 ${area.color.bg} ${area.color.border} hover:shadow-lg transition-all duration-200 hover:scale-[1.02]`}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">{area.icon}</div>
            <h2 className={`text-2xl font-bold ${area.color.text} mb-2`}>
              {area.name}
            </h2>
            <p className="text-lg font-medium text-slate-700 mb-3">
              {area.tagline}
            </p>
            <p className="text-sm text-slate-600">
              {area.description}
            </p>
            {counts && counts[area.id] !== undefined && (
              <p className="text-xs text-slate-400 mt-4">
                {counts[area.id]} documents
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
