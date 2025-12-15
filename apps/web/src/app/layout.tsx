import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swedwise IMS Platform',
  description: 'Integrated Management System and Learning Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50">
          {/* Header */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <a href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">SW</span>
                    </div>
                    <span className="font-semibold text-slate-900">IMS Platform</span>
                  </a>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                  <a href="/documents" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                    Documents
                  </a>
                  <a href="/training" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                    Training
                  </a>
                  <a href="/registers" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                    Registers
                  </a>
                </nav>

                {/* User menu placeholder */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500">[TBD - User Login]</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="bg-white border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500">
                  Swedwise AB - Integrated Management System
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
