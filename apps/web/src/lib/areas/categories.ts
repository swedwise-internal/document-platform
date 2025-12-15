import { DocumentCategory } from '@/types/document';
import { ContentArea } from '@/types/area';

export const IMS_CATEGORIES: DocumentCategory[] = [
  { id: 'policies', name: 'Policies', description: 'Management policies', path: 'policies', count: 0 },
  { id: 'procedures', name: 'Procedures', description: 'Operational procedures', path: 'procedures', count: 0 },
  { id: 'guidelines', name: 'Guidelines', description: 'Non-mandatory guidance', path: 'guidelines', count: 0 },
  { id: 'role-descriptions', name: 'Roles', description: 'Role definitions', path: 'role-descriptions', count: 0 },
  { id: 'training', name: 'Training', description: 'LMS courses', path: 'training', count: 0 },
  { id: 'forms', name: 'Forms', description: 'Templates and forms', path: 'forms', count: 0 },
  { id: 'registers', name: 'Registers', description: 'Risk and asset registers', path: 'registers', count: 0 },
];

export const SAAS_CATEGORIES: DocumentCategory[] = [
  { id: 'service-description', name: 'Service Description', description: 'Technical service documentation', path: 'service-description', count: 0 },
  { id: 'operations', name: 'Operations', description: 'Operational procedures', path: 'operations', count: 0 },
  { id: 'onboarding', name: 'Onboarding', description: 'Customer onboarding guides', path: 'onboarding', count: 0 },
  { id: 'sales-materials', name: 'Sales Materials', description: 'Sales collateral', path: 'sales-materials', count: 0 },
  { id: 'pricing', name: 'Pricing', description: 'Pricing models', path: 'pricing', count: 0 },
  { id: 'training', name: 'Training', description: 'Staff training', path: 'training', count: 0 },
];

export function getCategoriesForArea(area: ContentArea): DocumentCategory[] {
  switch (area) {
    case 'ims':
      return IMS_CATEGORIES;
    case 'saas':
      return SAAS_CATEGORIES;
  }
}

export function getCategoryIcon(categoryId: string): string {
  const icons: Record<string, string> = {
    policies: '📋',
    procedures: '📝',
    guidelines: '📖',
    'role-descriptions': '👤',
    training: '🎓',
    forms: '📄',
    registers: '📊',
    'service-description': '📑',
    operations: '⚙️',
    onboarding: '🚀',
    'sales-materials': '💼',
    pricing: '💰',
  };
  return icons[categoryId] || '📄';
}

export function getCategoryColor(categoryId: string): string {
  const colors: Record<string, string> = {
    policies: 'bg-blue-50 border-blue-200',
    procedures: 'bg-green-50 border-green-200',
    guidelines: 'bg-purple-50 border-purple-200',
    'role-descriptions': 'bg-amber-50 border-amber-200',
    training: 'bg-pink-50 border-pink-200',
    forms: 'bg-slate-50 border-slate-200',
    registers: 'bg-red-50 border-red-200',
    'service-description': 'bg-cyan-50 border-cyan-200',
    operations: 'bg-orange-50 border-orange-200',
    onboarding: 'bg-teal-50 border-teal-200',
    'sales-materials': 'bg-indigo-50 border-indigo-200',
    pricing: 'bg-yellow-50 border-yellow-200',
  };
  return colors[categoryId] || 'bg-slate-50 border-slate-200';
}
