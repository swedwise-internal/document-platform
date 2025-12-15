import Link from 'next/link';
import { IMS_CATEGORIES, getCategoryIcon, getCategoryColor } from '@/lib/areas/categories';
import { getDocumentCounts } from '@/lib/markdown/loader';

export const dynamic = 'force-dynamic';

export default async function IMSPage() {
  let counts: Record<string, number> = {};

  try {
    counts = await getDocumentCounts('ims');
  } catch (error) {
    console.error('Error loading document counts:', error);
  }

  const categories = IMS_CATEGORIES.map(cat => ({
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
          Integrated Management System
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Quality, Environmental, and Information Security Management
        </p>
      </div>

      {/* Implementation notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-amber-500 text-xl">⚠️</span>
          <div>
            <h3 className="font-semibold text-amber-800">Implementation In Progress</h3>
            <p className="text-sm text-amber-700 mt-1">
              The IMS is currently being implemented. Documents may require organizational review before approval.
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
          <p className="text-sm font-medium text-slate-500">Policies</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{counts['policies'] || 0}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm font-medium text-slate-500">Procedures</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{counts['procedures'] || 0}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm font-medium text-slate-500">Roles</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{counts['role-descriptions'] || 0}</p>
        </div>
      </div>

      {/* Document categories */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Document Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/ims/documents?category=${category.id}`}
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
          <p className="text-xs text-slate-400 mt-2">Customer focus, process approach</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">E</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 14001:2015</h3>
          </div>
          <p className="text-sm text-slate-600">Environmental Management</p>
          <p className="text-xs text-slate-400 mt-2">Environmental aspects, compliance</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">S</span>
            </div>
            <h3 className="font-semibold text-slate-900">ISO 27001:2022</h3>
          </div>
          <p className="text-sm text-slate-600">Information Security</p>
          <p className="text-xs text-slate-400 mt-2">Risk management, 93 controls</p>
        </div>
      </div>

      {/* Quick actions */}
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-3">
        <Link href="/ims/documents" className="btn btn-primary">
          Browse Documents
        </Link>
        <Link href="/ims/training" className="btn btn-secondary">
          Training Courses
        </Link>
        <Link href="/ims/registers" className="btn btn-outline">
          View Registers
        </Link>
      </div>
    </div>
  );
}
