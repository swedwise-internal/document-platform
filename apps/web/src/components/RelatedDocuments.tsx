import Link from 'next/link';
import { listAllDocuments } from '@/lib/markdown/loader';
import { ContentArea } from '@/types/area';
import { DocumentListItem } from '@/types/document';

interface RelatedDocumentsProps {
  documentIds: string[];
  currentArea: ContentArea;
}

interface ResolvedDocument {
  document_id: string;
  title: string;
  slug: string;
  area: ContentArea;
  doc_type: string;
  found: boolean;
}

/**
 * Resolve document IDs to their full document information
 * Searches both IMS and SaaS areas
 */
async function resolveDocumentIds(documentIds: string[]): Promise<ResolvedDocument[]> {
  // Get all documents from both areas
  const [imsDocuments, saasDocuments] = await Promise.all([
    listAllDocuments('ims'),
    listAllDocuments('saas'),
  ]);

  const allDocuments = [...imsDocuments, ...saasDocuments];

  // Create a map for quick lookup
  const documentMap = new Map<string, DocumentListItem>();
  for (const doc of allDocuments) {
    documentMap.set(doc.document_id, doc);
  }

  // Resolve each document ID
  return documentIds.map((docId) => {
    const doc = documentMap.get(docId);
    if (doc) {
      return {
        document_id: doc.document_id,
        title: doc.title,
        slug: doc.slug,
        area: doc.area || 'ims',
        doc_type: doc.doc_type,
        found: true,
      };
    }
    return {
      document_id: docId,
      title: docId,
      slug: '',
      area: 'ims' as ContentArea,
      doc_type: 'unknown',
      found: false,
    };
  });
}

// Document type icons
const DOC_TYPE_ICONS: Record<string, string> = {
  policy: '📋',
  procedure: '📝',
  guideline: '📖',
  role: '👤',
  form: '📄',
  training: '🎓',
  unknown: '📎',
};

export async function RelatedDocuments({ documentIds, currentArea }: RelatedDocumentsProps) {
  if (!documentIds || documentIds.length === 0) {
    return null;
  }

  const resolvedDocs = await resolveDocumentIds(documentIds);

  return (
    <div className="card sticky top-20">
      <div className="p-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span className="font-semibold text-slate-900">Related Documents</span>
        </div>
      </div>

      <div className="p-4">
        <ul className="space-y-2">
          {resolvedDocs.map((doc) => (
            <li key={doc.document_id}>
              {doc.found ? (
                <Link
                  href={`/${doc.area}/documents/${doc.slug}`}
                  className="group flex items-start gap-2 p-2 -m-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm flex-shrink-0" aria-hidden="true">
                    {DOC_TYPE_ICONS[doc.doc_type] || DOC_TYPE_ICONS.unknown}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-700 group-hover:text-blue-600 truncate">
                      {doc.title}
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      {doc.document_id}
                    </p>
                  </div>
                  {doc.area !== currentArea && (
                    <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${
                      doc.area === 'saas'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {doc.area.toUpperCase()}
                    </span>
                  )}
                </Link>
              ) : (
                <div className="flex items-start gap-2 p-2 -m-2 opacity-50">
                  <span className="text-sm flex-shrink-0" aria-hidden="true">
                    {DOC_TYPE_ICONS.unknown}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-500 font-mono">
                      {doc.document_id}
                    </p>
                    <p className="text-xs text-slate-400">
                      Document not found
                    </p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
