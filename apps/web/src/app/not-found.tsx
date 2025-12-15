import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <p className="text-6xl font-bold text-slate-200">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Document Not Found
        </h1>
        <p className="mt-2 text-slate-600">
          The document you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/documents" className="btn btn-primary">
            Browse Documents
          </Link>
          <Link href="/" className="btn btn-secondary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
