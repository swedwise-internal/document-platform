import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS - Swedwise',
  description: 'SaaS Service Documentation',
};

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
