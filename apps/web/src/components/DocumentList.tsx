'use client';

import Link from 'next/link';
import { CollapsibleSection } from './CollapsibleSection';
import { STATUS_STYLES, CLASSIFICATION_STYLES, ISO_STANDARD_STYLES, DocumentListItem } from '@/types/document';

interface CategoryWithDocuments {
  id: string;
  name: string;
  description: string;
  path: string;
  documents: DocumentListItem[];
  count: number;
  totalCount?: number;
}

interface DocumentListProps {
  categories: CategoryWithDocuments[];
}

export function DocumentList({ categories }: DocumentListProps) {
  return (
    <div className="space-y-4">
      {categories.map(category => (
        <CollapsibleSection
          key={category.id}
          title={category.name}
          description={category.description}
          count={category.count}
          defaultOpen={category.count > 0}
        >
          {category.documents.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {category.documents.map(doc => (
                <Link
                  key={doc.slug}
                  href={`/documents/${doc.slug}`}
                  className="block px-6 py-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-sm text-slate-500">
                          {doc.document_id}
                        </span>
                        <span className={`badge ${STATUS_STYLES[doc.status].bg} ${STATUS_STYLES[doc.status].text}`}>
                          {STATUS_STYLES[doc.status].label}
                        </span>
                        <span className={`badge ${CLASSIFICATION_STYLES[doc.classification].bg} ${CLASSIFICATION_STYLES[doc.classification].text}`}>
                          {CLASSIFICATION_STYLES[doc.classification].label}
                        </span>
                      </div>
                      <h3 className="font-medium text-slate-900 mt-1">{doc.title}</h3>
                      {/* ISO Standard badges */}
                      {doc.standard && doc.standard.length > 0 && (
                        <div className="flex gap-1.5 mt-2">
                          {doc.standard.map(std => {
                            const style = ISO_STANDARD_STYLES[std];
                            // Fallback for unknown standards
                            const bg = style?.bg ?? 'bg-slate-100';
                            const text = style?.text ?? 'text-slate-700';
                            return (
                              <span
                                key={std}
                                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${bg} ${text}`}
                              >
                                {std}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-6 py-8 text-center text-slate-500">
              <p>No documents in this category yet</p>
              <p className="text-sm mt-1">Documents will appear here once created</p>
            </div>
          )}
        </CollapsibleSection>
      ))}
    </div>
  );
}
