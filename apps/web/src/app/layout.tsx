import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { AreaNavigation } from '@/components/AreaNavigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swedwise Documentation Platform',
  description: 'Integrated Management System and SaaS Service Documentation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">SW</span>
                    </div>
                    <span className="font-semibold text-slate-900">Swedwise</span>
                  </Link>
                </div>

                {/* Navigation */}
                <div className="hidden md:block">
                  <AreaNavigation />
                </div>

                {/* User menu placeholder */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-400">[User Login]</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500">
                  Swedwise AB - Documentation Platform
                </p>
                <p className="text-sm text-slate-400">
                  ISO 9001 | ISO 14001 | ISO 27001
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
