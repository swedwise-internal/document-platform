import { listAllDocuments } from '@/lib/markdown/loader';
import { DocumentListItem } from '@/types/document';
import { DocumentsPageClient } from '@/components/DocumentsPageClient';

export const dynamic = 'force-dynamic'; // Always fetch fresh data

export default async function DocumentsPage() {
  let documents: DocumentListItem[];
  let error: string | null = null;

  try {
    documents = await listAllDocuments();
  } catch (e) {
    error = 'Unable to load documents. Content directory may not be configured.';
    documents = [];
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Document Library</h1>
        <p className="mt-1 text-slate-600">
          Browse all IMS policies, procedures, and supporting documents
        </p>
      </div>

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800">{error}</p>
        </div>
      )}

      <DocumentsPageClient documents={documents} />
    </div>
  );
}
