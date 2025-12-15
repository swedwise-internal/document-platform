import { AreaBreadcrumb } from '@/components/AreaBreadcrumb';

export default function AreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto">
          <AreaBreadcrumb />
        </div>
      </div>
      {children}
    </>
  );
}
