import Link from 'next/link';

type RegisterStatus = 'active' | 'draft' | 'coming_soon';

interface Register {
  id: string;
  name: string;
  documentId: string;
  description: string;
  status: RegisterStatus;
  lastUpdated: string;
  standard: string[];
  href: string;
}

const registers: Register[] = [
  {
    id: 'risk-register',
    name: 'Integrated Risk Register',
    documentId: 'SW-IMS-REG-001',
    description: 'Comprehensive register of quality, environmental, and information security risks.',
    status: 'draft',
    lastUpdated: '[TBD]',
    standard: ['ISO 9001', 'ISO 14001', 'ISO 27001'],
    href: '/documents/registers--risk-register',
  },
  {
    id: 'asset-register',
    name: 'Information Asset Register',
    documentId: 'SW-ISMS-REG-001',
    description: 'Inventory of information assets including classification, ownership, and controls.',
    status: 'draft',
    lastUpdated: '[TBD]',
    standard: ['ISO 27001'],
    href: '/documents/registers--asset-register',
  },
  {
    id: 'environmental-aspects',
    name: 'Environmental Aspects Register',
    documentId: 'SW-EMS-REG-001',
    description: 'Environmental aspects, impacts, and significance evaluation.',
    status: 'draft',
    lastUpdated: '[TBD]',
    standard: ['ISO 14001'],
    href: '/documents/registers--environmental-aspects-register',
  },
  {
    id: 'document-register',
    name: 'Document Control Register',
    documentId: 'SW-IMS-REG-002',
    description: 'Master list of all controlled IMS documents with version tracking.',
    status: 'coming_soon',
    lastUpdated: '[TBD]',
    standard: ['ISO 9001', 'ISO 14001', 'ISO 27001'],
    href: '#',
  },
  {
    id: 'training-register',
    name: 'Training & Competence Register',
    documentId: 'SW-IMS-REG-003',
    description: 'Staff training records, competence assessments, and certification tracking.',
    status: 'coming_soon',
    lastUpdated: '[TBD]',
    standard: ['ISO 9001', 'ISO 14001', 'ISO 27001'],
    href: '#',
  },
  {
    id: 'supplier-register',
    name: 'Supplier Register',
    documentId: 'SW-IMS-REG-004',
    description: 'Approved suppliers, evaluation records, and performance monitoring.',
    status: 'coming_soon',
    lastUpdated: '[TBD]',
    standard: ['ISO 9001', 'ISO 27001'],
    href: '#',
  },
  {
    id: 'legal-register',
    name: 'Legal & Compliance Register',
    documentId: 'SW-IMS-REG-005',
    description: 'Applicable legal requirements and compliance status.',
    status: 'coming_soon',
    lastUpdated: '[TBD]',
    standard: ['ISO 9001', 'ISO 14001', 'ISO 27001'],
    href: '#',
  },
];

const statusStyles: Record<RegisterStatus, { bg: string; text: string; label: string }> = {
  active: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    label: 'Active',
  },
  draft: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    label: 'Draft',
  },
  coming_soon: {
    bg: 'bg-slate-100',
    text: 'text-slate-600',
    label: 'Coming Soon',
  },
};

export default function RegistersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">IMS Registers</h1>
        <p className="mt-1 text-slate-600">
          Access and manage the key registers of our Integrated Management System
        </p>
      </div>

      {/* Register statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-4">
          <p className="text-sm text-slate-500">Total Registers</p>
          <p className="text-2xl font-bold text-slate-900">{registers.length}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Active</p>
          <p className="text-2xl font-bold text-green-600">
            {registers.filter(r => r.status === 'active').length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Draft</p>
          <p className="text-2xl font-bold text-amber-600">
            {registers.filter(r => r.status === 'draft').length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Planned</p>
          <p className="text-2xl font-bold text-slate-600">
            {registers.filter(r => r.status === 'coming_soon').length}
          </p>
        </div>
      </div>

      {/* Core registers */}
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Core Registers</h2>
      <div className="grid gap-4 mb-8">
        {registers.filter(r => ['risk-register', 'asset-register', 'environmental-aspects'].includes(r.id)).map(register => (
          <div key={register.id} className="card">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-sm text-slate-500">
                      {register.documentId}
                    </span>
                    <span className={`badge ${statusStyles[register.status].bg} ${statusStyles[register.status].text}`}>
                      {statusStyles[register.status].label}
                    </span>
                    {register.standard.map(std => (
                      <span key={std} className="badge bg-sky-100 text-sky-800">{std}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{register.name}</h3>
                  <p className="text-slate-600 mt-1">{register.description}</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Last updated: {register.lastUpdated}
                  </p>
                </div>
                <div className="ml-4">
                  {register.status !== 'coming_soon' ? (
                    <Link href={register.href} className="btn btn-primary">
                      View Register
                    </Link>
                  ) : (
                    <button className="btn btn-secondary" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Supporting registers */}
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Supporting Registers</h2>
      <div className="grid gap-4">
        {registers.filter(r => !['risk-register', 'asset-register', 'environmental-aspects'].includes(r.id)).map(register => (
          <div key={register.id} className="card">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-sm text-slate-500">
                      {register.documentId}
                    </span>
                    <span className={`badge ${statusStyles[register.status].bg} ${statusStyles[register.status].text}`}>
                      {statusStyles[register.status].label}
                    </span>
                    {register.standard.map(std => (
                      <span key={std} className="badge bg-sky-100 text-sky-800">{std}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{register.name}</h3>
                  <p className="text-slate-600 mt-1">{register.description}</p>
                </div>
                <div className="ml-4">
                  {register.status !== 'coming_soon' ? (
                    <Link href={register.href} className="btn btn-outline">
                      View Register
                    </Link>
                  ) : (
                    <button className="btn btn-secondary" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Information box */}
      <div className="mt-8 p-6 bg-slate-100 rounded-lg">
        <h3 className="font-semibold text-slate-900 mb-3">About IMS Registers</h3>
        <p className="text-sm text-slate-600 mb-4">
          Registers are living documents that track key elements of our management system.
          They require regular review and maintenance to ensure accuracy and compliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-slate-900">Risk Register</h4>
            <p className="text-slate-600">Identifies and tracks all significant risks across quality, environment, and security.</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Asset Register</h4>
            <p className="text-slate-600">Inventories information assets with classification and ownership details.</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Aspects Register</h4>
            <p className="text-slate-600">Evaluates environmental impacts of our activities and services.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
