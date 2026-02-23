'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/explore', label: 'Home', icon: Home },
  { href: '/profile', label: 'Profile', icon: User },
];

// Pages where sidebar should NOT appear
const HIDDEN_ROUTES = ['/', '/login', '/signup'];

// Wrapper that adds padding for sidebar/bottom tabs
export function ContentShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasSidebar = !HIDDEN_ROUTES.includes(pathname);

  return (
    <main className={hasSidebar ? 'md:pl-48 pb-14 md:pb-0' : ''}>
      {children}
    </main>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  return (
    <>
      {/* Desktop sidebar — always expanded */}
      <aside className="fixed left-0 top-14 z-40 hidden h-[calc(100vh-3.5rem)] w-48 flex-col gap-1 border-r border-border bg-bg px-3 pt-4 md:flex">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href === '/explore' && pathname.startsWith('/explore'));
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-surface text-accent'
                  : 'text-text-muted hover:bg-surface-hover hover:text-text'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              {label}
            </Link>
          );
        })}
      </aside>

      {/* Mobile bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-bg/95 backdrop-blur-xl md:hidden">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href === '/explore' && pathname.startsWith('/explore'));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-accent'
                  : 'text-text-muted'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
