import { listAllDocuments } from '@/lib/markdown/loader';
import { SAAS_CATEGORIES } from '@/lib/areas/categories';
import { DocumentsPageClient } from '@/components/DocumentsPageClient';

export const dynamic = 'force-dynamic';

export default async function SaaSDocumentsPage() {
  let documents: Awaited<ReturnType<typeof listAllDocuments>> = [];
  let error: string | null = null;

  try {
    documents = await listAllDocuments('saas');
  } catch (e) {
    error = 'Unable to load SaaS documents. Content directory may not be configured.';
    console.error('Error loading SaaS documents:', e);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">SaaS Document Library</h1>
        <p className="mt-1 text-slate-600">
          Service documentation, operations guides, and sales materials
        </p>
      </div>

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800">{error}</p>
        </div>
      )}

      {documents.length === 0 && !error ? (
        <div className="card p-8 text-center">
          <p className="text-slate-500 mb-4">No SaaS documents available yet.</p>
          <p className="text-sm text-slate-400">
            Add markdown files to the <code className="bg-slate-100 px-1 rounded">content/saas/</code> directory to get started.
          </p>
        </div>
      ) : (
        <DocumentsPageClient documents={documents} categories={SAAS_CATEGORIES} />
      )}
    </div>
  );
}
