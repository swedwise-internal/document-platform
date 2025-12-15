import { AreaSelector } from '@/components/AreaSelector';
import { getDocumentCounts } from '@/lib/markdown/loader';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let imsCounts: Record<string, number> = {};
  let saasCounts: Record<string, number> = {};

  try {
    imsCounts = await getDocumentCounts('ims');
    saasCounts = await getDocumentCounts('saas');
  } catch (error) {
    console.error('Error loading document counts:', error);
  }

  const imsTotal = Object.values(imsCounts).reduce((sum, count) => sum + count, 0);
  const saasTotal = Object.values(saasCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Welcome section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Swedwise Documentation Platform
        </h1>
        <p className="text-xl text-slate-600 mb-2">
          "Make Time For The Good"
        </p>
        <p className="text-lg text-slate-500">
          Select a content area to get started
        </p>
      </div>

      {/* Area selection */}
      <AreaSelector counts={{ ims: imsTotal, saas: saasTotal }} />

      {/* Info section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 text-sm text-slate-500">
          <span>ISO 9001:2015</span>
          <span className="text-slate-300">|</span>
          <span>ISO 14001:2015</span>
          <span className="text-slate-300">|</span>
          <span>ISO 27001:2022</span>
        </div>
      </div>
    </div>
  );
}
