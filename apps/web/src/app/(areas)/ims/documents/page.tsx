import { listAllDocuments } from '@/lib/markdown/loader';
import { IMS_CATEGORIES } from '@/lib/areas/categories';
import { DocumentsPageClient } from '@/components/DocumentsPageClient';

export const dynamic = 'force-dynamic';

export default async function IMSDocumentsPage() {
  let documents: Awaited<ReturnType<typeof listAllDocuments>> = [];
  let error: string | null = null;

  try {
    documents = await listAllDocuments('ims');
  } catch (e) {
    error = 'Unable to load IMS documents. Content directory may not be configured.';
    console.error('Error loading IMS documents:', e);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">IMS Document Library</h1>
        <p className="mt-1 text-slate-600">
          Browse all IMS policies, procedures, and supporting documents
        </p>
      </div>

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800">{error}</p>
        </div>
      )}

      <DocumentsPageClient documents={documents} categories={IMS_CATEGORIES} />
    </div>
  );
}
