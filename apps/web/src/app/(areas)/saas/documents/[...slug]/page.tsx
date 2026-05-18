import { notFound } from 'next/navigation';
import Link from 'next/link';
import { loadDocumentBySlug } from '@/lib/markdown/loader';
import { STATUS_STYLES, CLASSIFICATION_STYLES, ISO_STANDARD_STYLES, DocumentStatus, Classification } from '@/types/document';
import { TableOfContentsDrawer } from '@/components/TableOfContentsDrawer';
import { RelatedDocuments } from '@/components/RelatedDocuments';
import { PdfExportButton } from '@/components/PdfExportButton';
import { MermaidInit } from '@/components/MermaidInit';
import { MermaidEditor } from '@/components/MermaidEditor';

export const dynamic = 'force-dynamic';

// Format date to string (handles both Date objects and strings)
function formatDate(date: Date | string | undefined): string {
  if (!date) return '';
  if (date instanceof Date) {
    return date.toISOString().split('T')[0];
  }
  return String(date);
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function SaaSDocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug.join('--');
  const document = await loadDocumentBySlug(slugPath, 'saas');

  if (!document) {
    notFound();
  }

  const { frontmatter, content, tableOfContents, path: docPath } = document;
  const contentFilePath = `saas/${docPath}`;
  const statusStyle = STATUS_STYLES[frontmatter.status as DocumentStatus];
  const classificationStyle = CLASSIFICATION_STYLES[frontmatter.classification as Classification];
  const hasRelatedDocs = frontmatter.related_documents && frontmatter.related_documents.length > 0;
  const hasToc = tableOfContents.length > 0;

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <MermaidInit />
      <MermaidEditor filePath={contentFilePath} />
      {/* Navigation bar */}
      <div className="mb-6 flex items-center justify-between">
        <Link href="/saas/documents" className="text-emerald-600 hover:text-emerald-800 text-sm">
          ← Back to SaaS Documents
        </Link>
        <PdfExportButton
          slug={slugPath}
          area="saas"
          documentId={frontmatter.document_id}
        />
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Left sidebar - Table of Contents */}
        <div className={`hidden lg:block ${hasToc ? 'lg:col-span-2' : ''}`}>
          {hasToc && (
            <TableOfContentsDrawer items={tableOfContents} defaultOpen={true} />
          )}
        </div>

        {/* Main content */}
        <div className={`${hasToc && hasRelatedDocs ? 'lg:col-span-7' : hasToc || hasRelatedDocs ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
          {/* Document header */}
          <div className="card p-6 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyle?.bg} ${statusStyle?.text}`}>
                {statusStyle?.label || frontmatter.status}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${classificationStyle?.bg} ${classificationStyle?.text}`}>
                {classificationStyle?.label || frontmatter.classification}
              </span>
              {frontmatter.standard?.map((std) => {
                const style = ISO_STANDARD_STYLES[std];
                return (
                  <span
                    key={std}
                    className={`px-2 py-1 rounded text-xs font-medium ${style?.bg ?? 'bg-slate-100'} ${style?.text ?? 'text-slate-800'}`}
                  >
                    {std}
                  </span>
                );
              })}
            </div>

            <p className="text-sm text-slate-500 font-mono mb-2">{frontmatter.document_id}</p>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">{frontmatter.title}</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-slate-500">Version</p>
                <p className="font-medium">{frontmatter.version}</p>
              </div>
              <div>
                <p className="text-slate-500">Owner</p>
                <p className="font-medium">{frontmatter.owner}</p>
              </div>
              {frontmatter.effective_date && (
                <div>
                  <p className="text-slate-500">Effective Date</p>
                  <p className="font-medium">{formatDate(frontmatter.effective_date)}</p>
                </div>
              )}
              {frontmatter.review_date && (
                <div>
                  <p className="text-slate-500">Review Date</p>
                  <p className="font-medium">{formatDate(frontmatter.review_date)}</p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile TOC - shown above content on small screens */}
          {hasToc && (
            <div className="lg:hidden mb-6">
              <TableOfContentsDrawer items={tableOfContents} defaultOpen={false} />
            </div>
          )}

          {/* Document content */}
          <div className="card p-6">
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Mobile Related Documents - shown below content on small screens */}
          {hasRelatedDocs && (
            <div className="lg:hidden mt-6">
              <RelatedDocuments
                documentIds={frontmatter.related_documents!}
                currentArea="saas"
              />
            </div>
          )}
        </div>

        {/* Right sidebar - Related Documents */}
        <div className={`hidden lg:block ${hasRelatedDocs ? 'lg:col-span-3' : ''}`}>
          {hasRelatedDocs && (
            <RelatedDocuments
              documentIds={frontmatter.related_documents!}
              currentArea="saas"
            />
          )}
        </div>
      </div>
    </div>
  );
}
