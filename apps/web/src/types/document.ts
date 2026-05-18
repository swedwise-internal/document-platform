/**
 * Document types for the IMS Platform
 * Matches the frontmatter schema defined in CLAUDE.md
 */

export type DocumentType =
  | 'policy'
  | 'procedure'
  | 'guideline'
  | 'role'
  | 'form'
  | 'training'
  | 'contract'
  | 'service-component';

export type DocumentStatus =
  | 'draft'
  | 'review'
  | 'approved'
  | 'obsolete';

export type Classification =
  | 'public'
  | 'internal'
  | 'confidential'
  | 'restricted';

export type ISOStandard =
  | 'ISO 9001'
  | 'ISO 14001'
  | 'ISO 27001';

/**
 * SaaS service component
 * Used to categorize SaaS documents by service component
 */
export type ServiceComponent =
  | 'general'
  | 'communications'
  | 'notifications'
  | 'wopi'
  | 'cloud-print';

/**
 * Document frontmatter schema
 */
export interface DocumentFrontmatter {
  document_id: string;
  title: string;
  doc_type: DocumentType;
  version: string;
  status: DocumentStatus;
  classification: Classification;
  owner: string;
  effective_date?: string;
  review_date?: string;
  standard?: ISOStandard[];
  related_documents?: string[];
  component?: ServiceComponent; // SaaS-specific: service component
  required_for_certification?: boolean; // IMS-specific: mandatory for certification
}

/**
 * Training-specific frontmatter extension
 */
export interface TrainingFrontmatter extends DocumentFrontmatter {
  training?: {
    course_id: string;
    duration: number; // minutes
    target_audience: string[];
    required_for: string[];
    assessment?: {
      enabled: boolean;
      passing_score: number;
      attempts_allowed: number;
    };
    validity_period: number; // months
  };
}

/**
 * Table of contents item
 */
export interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Parsed document with content and metadata
 */
export interface ParsedDocument {
  frontmatter: DocumentFrontmatter | TrainingFrontmatter;
  content: string; // Rendered HTML content
  rawContent?: string; // Raw markdown content
  tableOfContents: TocItem[]; // Table of contents extracted from headings
  path: string; // File path
  slug: string; // URL-friendly identifier
}

/**
 * Document listing item (for navigation/lists)
 */
export interface DocumentListItem {
  document_id: string;
  title: string;
  doc_type: DocumentType;
  status: DocumentStatus;
  classification: Classification;
  standard?: ISOStandard[];
  component?: ServiceComponent; // SaaS-specific: service component
  required_for_certification?: boolean; // IMS-specific: mandatory for certification
  path: string;
  slug: string;
  updated_at?: Date;
  area?: 'ims' | 'saas' | 'operating-model';
}

/**
 * Document category for navigation
 */
export interface DocumentCategory {
  id: string;
  name: string;
  description: string;
  path: string;
  count: number;
}

export const DOCUMENT_CATEGORIES: DocumentCategory[] = [
  { id: 'policies', name: 'Policies', description: 'Management policies', path: 'policies', count: 0 },
  { id: 'procedures', name: 'Procedures', description: 'Operational procedures', path: 'procedures', count: 0 },
  { id: 'guidelines', name: 'Guidelines', description: 'Non-mandatory guidance', path: 'guidelines', count: 0 },
  { id: 'role-descriptions', name: 'Roles', description: 'Role definitions', path: 'role-descriptions', count: 0 },
  { id: 'training', name: 'Training', description: 'LMS courses', path: 'training', count: 0 },
  { id: 'forms', name: 'Forms', description: 'Templates and forms', path: 'forms', count: 0 },
  { id: 'registers', name: 'Registers', description: 'Risk and asset registers', path: 'registers', count: 0 },
];

/**
 * Status badge styling
 */
export const STATUS_STYLES: Record<DocumentStatus, { bg: string; text: string; label: string }> = {
  draft: { bg: 'bg-amber-100', text: 'text-amber-800', label: 'Draft' },
  review: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'In Review' },
  approved: { bg: 'bg-green-100', text: 'text-green-800', label: 'Approved' },
  obsolete: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Obsolete' },
};

/**
 * Classification badge styling
 */
export const CLASSIFICATION_STYLES: Record<Classification, { bg: string; text: string; label: string }> = {
  public: { bg: 'bg-green-100', text: 'text-green-800', label: 'Public' },
  internal: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Internal' },
  confidential: { bg: 'bg-amber-100', text: 'text-amber-800', label: 'Confidential' },
  restricted: { bg: 'bg-red-100', text: 'text-red-800', label: 'Restricted' },
};

/**
 * ISO Standard badge styling
 * Uses Record<string, ...> to support any standard dynamically
 */
export const ISO_STANDARD_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  'ISO 9001': { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-600' },
  'ISO 14001': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-600' },
  'ISO 27001': { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-600' },
  'ISO 22301': { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-600' },
};

/**
 * Available ISO standards for filtering
 */
export const AVAILABLE_STANDARDS: ISOStandard[] = ['ISO 9001', 'ISO 14001', 'ISO 27001'];

/**
 * Service component badge styling
 * For SaaS documents to indicate which service component they belong to
 */
export const COMPONENT_STYLES: Record<ServiceComponent, { bg: string; text: string; label: string }> = {
  general: { bg: 'bg-slate-100', text: 'text-slate-800', label: 'General' },
  communications: { bg: 'bg-cyan-100', text: 'text-cyan-800', label: 'Communications' },
  notifications: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Notifications' },
  wopi: { bg: 'bg-orange-100', text: 'text-orange-800', label: 'WOPI' },
  'cloud-print': { bg: 'bg-emerald-100', text: 'text-emerald-800', label: 'Cloud Print' },
};
