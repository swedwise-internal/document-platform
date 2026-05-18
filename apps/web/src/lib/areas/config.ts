import { AreaConfig, ContentArea } from '@/types/area';

export const AREA_CONFIGS: Record<ContentArea, AreaConfig> = {
  'operating-model': {
    id: 'operating-model',
    name: 'Operating Model',
    tagline: 'Affärsmodell & Datamodell',
    description: 'Servicekatalog, processer, datamodell och affärsobjekt',
    icon: '⚙️',
    href: '/operating-model',
    color: {
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-900',
      accent: 'text-violet-600',
    },
  },
  ims: {
    id: 'ims',
    name: 'IMS',
    tagline: 'Integrated Management System',
    description: 'ISO 9001, 14001, and 27001 certification documentation',
    icon: '📋',
    href: '/ims',
    color: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      accent: 'text-blue-600',
    },
  },
  saas: {
    id: 'saas',
    name: 'SaaS',
    tagline: 'SaaS Service Documentation',
    description: 'Service descriptions, operations, and sales materials',
    icon: '☁️',
    href: '/saas',
    color: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      accent: 'text-emerald-600',
    },
  },
};

export function getAreaConfig(area: ContentArea): AreaConfig {
  return AREA_CONFIGS[area];
}

export function isValidArea(area: string): area is ContentArea {
  return area === 'ims' || area === 'saas' || area === 'operating-model';
}
