'use client';

import { useSession, signOut } from 'next-auth/react';

export function UserMenu() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const initials = session.user.name
    ? session.user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : session.user.email?.[0].toUpperCase() ?? '?';

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs font-semibold">
          {initials}
        </div>
        <span className="hidden sm:block text-sm text-slate-600">
          {session.user.name ?? session.user.email}
        </span>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
      >
        Logga ut
      </button>
    </div>
  );
}
