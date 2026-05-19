import Link from 'next/link';

interface Props {
  area: string;
  slug: string;
}

export function EditDocumentButton({ area, slug }: Props) {
  return (
    <Link
      href={`/edit?area=${encodeURIComponent(area)}&slug=${encodeURIComponent(slug)}`}
      className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700
                 border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-1.5
                 transition-colors bg-white"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      Redigera
    </Link>
  );
}
