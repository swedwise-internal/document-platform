import Link from 'next/link';
import { listAllDocuments } from '@/lib/markdown/loader';
import { STATUS_STYLES, CLASSIFICATION_STYLES, DOCUMENT_CATEGORIES, DocumentListItem } from '@/types/document';

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

      {/* Documents by category */}
      <div className="space-y-8">
        {documentsByCategory.map(category => (
          <div key={category.id} className="card">
            <div className="card-header flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{category.name}</h2>
                <p className="text-sm text-slate-500">{category.description}</p>
              </div>
              <span className="badge bg-slate-100 text-slate-600">
                {category.count} documents
              </span>
            </div>

            {category.documents.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {category.documents.map(doc => (
                  <Link
                    key={doc.document_id}
                    href={`/documents/${doc.slug}`}
                    className="block px-6 py-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm text-slate-500">
                            {doc.document_id}
                          </span>
                          <span className={`badge ${STATUS_STYLES[doc.status].bg} ${STATUS_STYLES[doc.status].text}`}>
                            {STATUS_STYLES[doc.status].label}
                          </span>
                          <span className={`badge ${CLASSIFICATION_STYLES[doc.classification].bg} ${CLASSIFICATION_STYLES[doc.classification].text}`}>
                            {CLASSIFICATION_STYLES[doc.classification].label}
                          </span>
                        </div>
                        <h3 className="font-medium text-slate-900 mt-1">{doc.title}</h3>
                      </div>
                      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="px-6 py-8 text-center text-slate-500">
                <p>No documents in this category yet</p>
                <p className="text-sm mt-1">Documents will appear here once created</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
