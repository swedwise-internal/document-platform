import { listAllDocuments } from '@/lib/markdown/loader';
import { DOCUMENT_CATEGORIES, DocumentListItem } from '@/types/document';
import { DocumentList } from '@/components/DocumentList';

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

  // Group documents by category
  const documentsByCategory = DOCUMENT_CATEGORIES.map(category => ({
    ...category,
    documents: documents.filter(doc => doc.path.startsWith(category.path)),
    count: documents.filter(doc => doc.path.startsWith(category.path)).length,
  }));

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

      {/* Document statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-4">
          <p className="text-sm text-slate-500">Total Documents</p>
          <p className="text-2xl font-bold text-slate-900">{documents.length}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Approved</p>
          <p className="text-2xl font-bold text-green-600">
            {documents.filter(d => d.status === 'approved').length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Draft</p>
          <p className="text-2xl font-bold text-amber-600">
            {documents.filter(d => d.status === 'draft').length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">In Review</p>
          <p className="text-2xl font-bold text-blue-600">
            {documents.filter(d => d.status === 'review').length}
          </p>
        </div>
      </div>

      {/* Documents by category - Collapsible sections */}
      <DocumentList categories={documentsByCategory} />
    </div>
  );
}
