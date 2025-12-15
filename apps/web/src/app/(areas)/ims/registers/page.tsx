import Link from 'next/link';
import { listDocuments } from '@/lib/markdown/loader';

export const dynamic = 'force-dynamic';

export default async function IMSRegistersPage() {
  let registerDocs: Awaited<ReturnType<typeof listDocuments>> = [];

  try {
    registerDocs = await listDocuments('registers', 'ims');
  } catch (error) {
    console.error('Error loading register documents:', error);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">IMS Registers</h1>
        <p className="mt-1 text-slate-600">
          Risk registers, asset inventories, and compliance tracking
        </p>
      </div>

      {registerDocs.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-slate-500">No registers available yet.</p>
          <Link href="/ims/documents" className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block">
            Browse all documents →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {registerDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/ims/documents/${doc.slug.replace(/--/g, '/')}`}
              className="card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold text-slate-900">{doc.title}</h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">{doc.document_id}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
