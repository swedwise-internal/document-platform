import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IMS - Swedwise',
  description: 'Integrated Management System - ISO 9001, 14001, 27001',
};

export default function IMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
