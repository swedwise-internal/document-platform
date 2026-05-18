export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    /*
     * Protect everything except:
     * - /login (sign-in page)
     * - /api/auth/* (NextAuth endpoints)
     * - /_next/* (Next.js internals)
     * - /favicon.ico, /robots.txt, etc.
     */
    '/((?!login|api/auth|_next/static|_next/image|favicon.ico|robots.txt).*)',
  ],
};
