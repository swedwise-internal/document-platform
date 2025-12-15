import Link from 'next/link';

// Document category cards for the homepage
const categories = [
  {
    id: 'policies',
    name: 'Policies',
    description: 'Management policies defining organizational commitments',
    icon: '📋',
    href: '/documents/policies',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'procedures',
    name: 'Procedures',
    description: 'Step-by-step operational procedures',
    icon: '📝',
    href: '/documents/procedures',
    color: 'bg-green-50 border-green-200',
  },
  {
    id: 'roles',
    name: 'Role Descriptions',
    description: 'IMS roles and responsibilities',
    icon: '👤',
    href: '/documents/role-descriptions',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    id: 'training',
    name: 'Training',
    description: 'Awareness and competence training courses',
    icon: '🎓',
    href: '/training',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'registers',
    name: 'Registers',
    description: 'Risk, asset, and compliance registers',
    icon: '📊',
    href: '/documents/registers',
    color: 'bg-red-50 border-red-200',
  },
  {
    id: 'forms',
    name: 'Forms & Templates',
    description: 'Operational forms and document templates',
    icon: '📄',
    href: '/documents/forms',
    color: 'bg-slate-50 border-slate-200',
  },
];

// Quick stats placeholder
const stats = [
  { label: 'Documents', value: '[TBD]', trend: 'Policies, procedures, guidelines' },
  { label: 'Training Courses', value: '[TBD]', trend: 'Active courses' },
  { label: 'Completion Rate', value: '[TBD]', trend: 'Staff training completion' },
  { label: 'Next Review', value: '[TBD]', trend: 'Documents due for review' },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Swedwise Integrated Management System
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          "Make Time For The Good" - Quality, Environmental, and Information Security Management
        </p>
      </div>

      {/* Implementation notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-amber-500 text-xl">⚠️</span>
          <div>
            <h3 className="font-semibold text-amber-800">Implementation In Progress</h3>
            <p className="text-sm text-amber-700 mt-1">
              The IMS is currently being implemented. Documents marked with <span className="bg-amber-100 px-1 rounded">[TBD]</span> require
              organizational input. Please contact the IMS Owner for questions.
            </p>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-4">
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Document categories */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Document Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className={`card p-6 border-2 ${category.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h3 className="font-semibold text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ISO Standards coverage */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Standards Coverage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">Q</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 9001:2015</h3>
          </div>
          <p className="text-sm text-slate-600">Quality Management System</p>
          <p className="text-xs text-slate-400 mt-2">Customer focus, process approach, continuous improvement</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">E</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 14001:2015</h3>
          </div>
          <p className="text-sm text-slate-600">Environmental Management System</p>
          <p className="text-xs text-slate-400 mt-2">Environmental aspects, compliance, life-cycle perspective</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">S</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 27001:2022</h3>
          </div>
          <p className="text-sm text-slate-600">Information Security Management System</p>
          <p className="text-xs text-slate-400 mt-2">Risk management, 93 controls, asset protection</p>
        </div>
      </div>

      {/* Quick actions */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-3">
        <Link href="/training" className="btn btn-primary">
          Start Training
        </Link>
        <Link href="/documents" className="btn btn-secondary">
          Browse Documents
        </Link>
        <Link href="/documents/registers/risk-register" className="btn btn-outline">
          View Risk Register
        </Link>
      </div>
    </div>
  );
}
