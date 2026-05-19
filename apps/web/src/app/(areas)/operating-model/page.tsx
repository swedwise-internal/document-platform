import Link from 'next/link';
import { listOmDocuments } from '@/lib/markdown/om-loader';
import { OPERATING_MODEL_CATEGORIES } from '@/lib/areas/categories';
import { NewDocumentButtons } from '@/components/NewDocumentButtons';

export const dynamic = 'force-dynamic';

export default async function OperatingModelPage() {
  const allDocs = await listOmDocuments();

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-violet-900 mb-2">Operating Model</h1>
          <p className="text-slate-600">
            Affärsmodell, servicekatalog, processer och datamodell för Swedwise.
          </p>
        </div>
        <NewDocumentButtons area="operating-model" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OPERATING_MODEL_CATEGORIES.map((category) => {
          const docs = allDocs.filter((d) =>
            category.path === ''
              ? !d.path.includes('/')
              : d.path.startsWith(category.path)
          );

          return (
            <div
              key={category.id}
              className="bg-white border border-violet-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-violet-900 mb-1">
                {category.name}
              </h2>
              <p className="text-sm text-slate-500 mb-4">{category.description}</p>

              <ul className="space-y-1">
                {docs.slice(0, 8).map((doc) => (
                  <li key={doc.slug}>
                    <Link
                      href={`/operating-model/docs/${doc.slug}`}
                      className="text-sm text-violet-700 hover:text-violet-900 hover:underline"
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
                {docs.length > 8 && (
                  <li className="text-sm text-slate-400">+{docs.length - 8} till</li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
