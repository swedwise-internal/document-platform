'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAreaConfig, isValidArea } from '@/lib/areas/config';
import { ContentArea } from '@/types/area';

interface NavItem {
  label: string;
  href: string;
}

const IMS_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/ims' },
  { label: 'Documents', href: '/ims/documents' },
  { label: 'Training', href: '/ims/training' },
  { label: 'Registers', href: '/ims/registers' },
];

const SAAS_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/saas' },
  { label: 'Documents', href: '/saas/documents' },
];

const ROOT_NAV_ITEMS: NavItem[] = [
  { label: 'IMS', href: '/ims' },
  { label: 'SaaS', href: '/saas' },
];

function getNavItems(area: ContentArea | null): NavItem[] {
  if (area === 'ims') return IMS_NAV_ITEMS;
  if (area === 'saas') return SAAS_NAV_ITEMS;
  return ROOT_NAV_ITEMS;
}

export function AreaNavigation() {
  const pathname = usePathname();

  // Extract area from pathname
  const match = pathname.match(/^\/(ims|saas)/);
  const area = match && isValidArea(match[1]) ? (match[1] as ContentArea) : null;
  const areaConfig = area ? getAreaConfig(area) : null;

  const navItems = getNavItems(area);

  return (
    <nav className="flex items-center gap-1">
      {/* Area indicator (when in an area) */}
      {areaConfig && (
        <Link
          href="/"
          className={`px-3 py-1.5 rounded-md text-sm font-semibold ${areaConfig.color.accent} ${areaConfig.color.bg} mr-2`}
        >
          {areaConfig.name}
        </Link>
      )}

      {/* Navigation items */}
      {navItems.map((item) => {
        const isActive = pathname === item.href ||
          (item.href !== '/ims' && item.href !== '/saas' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
