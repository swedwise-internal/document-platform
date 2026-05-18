'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAreaConfig, isValidArea } from '@/lib/areas/config';

export function AreaBreadcrumb() {
  const pathname = usePathname();

  // Extract area from pathname
  const match = pathname.match(/^\/(ims|saas|operating-model)/);
  if (!match) return null;

  const area = match[1];
  if (!isValidArea(area)) return null;

  const config = getAreaConfig(area);

  // Build breadcrumb segments
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      <Link href="/" className="text-slate-500 hover:text-slate-700">
        Home
      </Link>
      <span className="text-slate-300">/</span>
      <Link
        href={config.href}
        className={`font-medium ${config.color.accent} hover:underline`}
      >
        {config.name}
      </Link>
      {segments.length > 1 && segments[1] !== '' && (
        <>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600 capitalize">
            {segments[1]}
          </span>
        </>
      )}
    </nav>
  );
}
