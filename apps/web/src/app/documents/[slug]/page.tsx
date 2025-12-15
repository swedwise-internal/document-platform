import { notFound } from 'next/navigation';
import Link from 'next/link';
import { loadDocumentBySlug } from '@/lib/markdown/loader';
import { STATUS_STYLES, CLASSIFICATION_STYLES } from '@/types/document';

interface DocumentPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { slug } = await params;
  const document = await loadDocumentBySlug(slug);

  if (!document) {
    notFound();
  }

  const { frontmatter, content, tableOfContents } = document;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-slate-500 hover:text-slate-700">
              Home
            </Link>
          </li>
          <li className="text-slate-300">/</li>
          <li>
            <Link href="/documents" className="text-slate-500 hover:text-slate-700">
              Documents
            </Link>
          </li>
          <li className="text-slate-300">/</li>
          <li className="text-slate-900 font-medium">{frontmatter.document_id}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main content */}
        <div className="lg:col-span-3">
          {/* Document header */}
          <div className="card mb-6">
            <div className="card-header">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-sm text-slate-500">
                  {frontmatter.document_id}
                </span>
                <span className={`badge ${STATUS_STYLES[frontmatter.status].bg} ${STATUS_STYLES[frontmatter.status].text}`}>
                  {STATUS_STYLES[frontmatter.status].label}
                </span>
                <span className={`badge ${CLASSIFICATION_STYLES[frontmatter.classification].bg} ${CLASSIFICATION_STYLES[frontmatter.classification].text}`}>
                  {CLASSIFICATION_STYLES[frontmatter.classification].label}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">{frontmatter.title}</h1>
            </div>

            {/* Document metadata */}
            <div className="card-body bg-slate-50 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-slate-500">Version</p>
                <p className="font-medium">{frontmatter.version}</p>
              </div>
              <div>
                <p className="text-slate-500">Owner</p>
                <p className="font-medium">{frontmatter.owner}</p>
              </div>
              <div>
                <p className="text-slate-500">Effective Date</p>
                <p className="font-medium">{frontmatter.effective_date || '[TBD]'}</p>
              </div>
              <div>
                <p className="text-slate-500">Review Date</p>
                <p className="font-medium">{frontmatter.review_date || '[TBD]'}</p>
              </div>
            </div>

            {/* Standards tags */}
            {frontmatter.standard && frontmatter.standard.length > 0 && (
              <div className="px-6 py-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">Applicable Standards:</span>
                  {frontmatter.standard.map((std) => (
                    <span key={std} className="badge bg-sky-100 text-sky-800">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Document content */}
          <div className="card">
            <div className="card-body">
              <div
                className="prose-document"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Table of contents */}
          {tableOfContents.length > 0 && (
            <div className="card sticky top-24">
              <div className="card-header">
                <h3 className="font-semibold text-slate-900">On this page</h3>
              </div>
              <nav className="p-4">
                <ul className="space-y-2 text-sm">
                  {tableOfContents.map((item) => (
                    <li
                      key={item.id}
                      style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}
                    >
                      <a
                        href={`#${item.id}`}
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Related documents */}
          {frontmatter.related_documents && frontmatter.related_documents.length > 0 && (
            <div className="card mt-6">
              <div className="card-header">
                <h3 className="font-semibold text-slate-900">Related Documents</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {frontmatter.related_documents.map((docId) => (
                    <li key={docId}>
                      <span className="font-mono text-slate-600">{docId}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="card mt-6">
            <div className="card-header">
              <h3 className="font-semibold text-slate-900">Actions</h3>
            </div>
            <div className="p-4 space-y-2">
              <button className="btn btn-outline w-full text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
              <button className="btn btn-outline w-full text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: DocumentPageProps) {
  const { slug } = await params;
  const document = await loadDocumentBySlug(slug);

  if (!document) {
    return {
      title: 'Document Not Found',
    };
  }

  return {
    title: `${document.frontmatter.document_id} - ${document.frontmatter.title} | Swedwise IMS`,
    description: `${document.frontmatter.title} - Version ${document.frontmatter.version}`,
  };
}
