import { AreaBreadcrumb } from '@/components/AreaBreadcrumb';

export default function OperatingModelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-violet-50 border-b border-violet-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <AreaBreadcrumb />
        </div>
      </div>
      {children}
    </div>
  );
}
