import { redirect } from 'next/navigation';

// This page redirects to /ims/documents
// The redirect is also configured in next.config.js
export default function DocumentsPage() {
  redirect('/ims/documents');
}
