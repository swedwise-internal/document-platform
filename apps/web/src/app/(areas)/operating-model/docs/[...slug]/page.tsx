import { notFound } from 'next/navigation';
import Link from 'next/link';
import { loadOmDocumentBySlug } from '@/lib/markdown/om-loader';
import { TableOfContentsDrawer } from '@/components/TableOfContentsDrawer';
import { EditDocumentButton } from '@/components/EditDocumentButton';
import { MermaidInit } from '@/components/MermaidInit';
import { MermaidEditor } from '@/components/MermaidEditor';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function OperatingModelDocPage({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug.join('--');
  const doc = await loadOmDocumentBySlug(slugPath);

  if (!doc) notFound();

  const hasToc = doc.tableOfContents.length > 0;

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <MermaidInit />
      <MermaidEditor filePath={`operating-model/${doc.path}`} />

      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/operating-model"
          className="text-violet-600 hover:text-violet-800 text-sm"
        >
          ← Tillbaka till Operating Model
        </Link>
        <EditDocumentButton area="operating-model" slug={slugPath} />
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        {/* TOC sidebar */}
        {hasToc && (
          <div className="hidden lg:block lg:col-span-2">
            <TableOfContentsDrawer items={doc.tableOfContents} defaultOpen={true} />
          </div>
        )}

        {/* Content */}
        <div className={hasToc ? 'lg:col-span-10' : 'lg:col-span-12'}>
          {hasToc && (
            <div className="lg:hidden mb-6">
              <TableOfContentsDrawer items={doc.tableOfContents} defaultOpen={false} />
            </div>
          )}

          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">{doc.title}</h1>
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
