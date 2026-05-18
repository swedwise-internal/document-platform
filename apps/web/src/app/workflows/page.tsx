import { WorkflowVisualizer } from '@/components/workflow/WorkflowVisualizer';
import {
  onboardingDefinition,
  onboardingInstance,
  documentApprovalDefinition,
  documentApprovalInstance,
  incidentDefinition,
  incidentInstance,
} from '@/lib/workflow/examples';

export const dynamic = 'force-dynamic';

export default function WorkflowsPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Workflow Visualizer</h1>
        <p className="mt-2 text-slate-600">
          Visual process flows for IMS procedures and operational workflows.
          Click any node to view metadata details.
        </p>
      </div>

      {/* Example 1: Onboarding (from spec) */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Onboarding Process</h2>
        <WorkflowVisualizer
          definition={onboardingDefinition}
          instance={onboardingInstance}
        />
      </section>

      {/* Example 2: Document Approval */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Document Approval</h2>
        <WorkflowVisualizer
          definition={documentApprovalDefinition}
          instance={documentApprovalInstance}
        />
      </section>

      {/* Example 3: Incident Management (LR direction) */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Incident Management</h2>
        <WorkflowVisualizer
          definition={incidentDefinition}
          instance={incidentInstance}
        />
      </section>
    </div>
  );
}
