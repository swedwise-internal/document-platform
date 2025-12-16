import Link from 'next/link';
import { SAAS_CATEGORIES, getCategoryIcon, getCategoryColor } from '@/lib/areas/categories';
import { getDocumentCounts } from '@/lib/markdown/loader';

export const dynamic = 'force-dynamic';

export default async function SaaSPage() {
  let counts: Record<string, number> = {};

  try {
    counts = await getDocumentCounts('saas');
  } catch (error) {
    console.error('Error loading document counts:', error);
  }

  const categories = SAAS_CATEGORIES.map(cat => ({
    ...cat,
    count: counts[cat.id] || 0,
    icon: getCategoryIcon(cat.id),
    color: getCategoryColor(cat.id),
  }));

  const totalDocs = Object.values(counts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          SaaS Service Documentation
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Swedwise SaaS Platform
        </p>
      </div>

      {/* Service info */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-emerald-500 text-xl">☁️</span>
          <div>
            <h3 className="font-semibold text-emerald-800">Swedwise SaaS Platform</h3>
            <p className="text-sm text-emerald-700 mt-1">
              A multi-tenant, cloud-based infrastructure platform that provides the foundation for delivering enterprise-grade business applications as Software-as-a-Service.
            </p>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-4">
          <p className="text-sm font-medium text-slate-500">Total Documents</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{totalDocs}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm font-medium text-slate-500">Service Docs</p>
          <p className="text-2xl font-bold text-cyan-600 mt-1">{counts['service-description'] || 0}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm font-medium text-slate-500">Operations</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">{counts['operations'] || 0}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm font-medium text-slate-500">Sales Materials</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{counts['sales-materials'] || 0}</p>
        </div>
      </div>

      {/* Document categories */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Documentation Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/saas/documents#${category.id}`}
            className={`card p-6 border-2 ${category.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h3 className="font-semibold text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{category.description}</p>
                <p className="text-xs text-slate-400 mt-2">{category.count} documents</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Service highlights */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Service Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">📄</span>
            </div>
            <h3 className="font-semibold text-slate-900">Communications (Exstream)</h3>
          </div>
          <p className="text-sm text-slate-600">High-volume document generation</p>
          <p className="text-xs text-slate-400 mt-2">Batch processing, templates, personalization</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">📨</span>
            </div>
            <h3 className="font-semibold text-slate-900">Notifications</h3>
          </div>
          <p className="text-sm text-slate-600">Multi-channel delivery</p>
          <p className="text-xs text-slate-400 mt-2">Email, SMS, push notifications</p>
        </div>
      </div>

      {/* Quick actions */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-3">
        <Link href="/saas/documents" className="btn btn-primary">
          Browse Documents
        </Link>
        <Link href="/ims" className="btn btn-outline">
          View IMS →
        </Link>
      </div>
    </div>
  );
}
