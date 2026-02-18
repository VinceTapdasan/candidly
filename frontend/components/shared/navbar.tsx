'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Upload, Search, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const showUpload = pathname !== '/' && pathname !== '/explore';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="flex h-14 items-center gap-4">
          {/* Left: Logo + Explore */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-text-muted hover:text-text md:hidden"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <Link href="/" className="flex items-center gap-0.5">
                <span className="text-xl font-bold text-text">candidly</span>
              </Link>
            </div>
            <Link
              href="/explore"
              className="hidden text-sm text-text-secondary transition-colors hover:text-text md:block"
            >
              Explore
            </Link>
          </div>

          {/* Center: Search Bar — only on /explore */}
          {pathname === '/explore' && (
            <div className="hidden flex-1 justify-center md:flex">
              <div className="flex w-full max-w-[480px]">
                <input
                  type="text"
                  placeholder="Search candidates, roles, skills..."
                  className="flex-1 rounded-l-lg border border-r-0 border-border bg-surface py-2 pl-4 pr-3 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent/50 focus:bg-surface-hover"
                />
                <button className="flex items-center justify-center rounded-r-lg border border-l-0 border-border bg-surface-hover px-4 text-text-muted transition-colors hover:text-text">
                  <Search size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Right: Theme + Upload + Auth */}
          <div className="flex items-center gap-2 shrink-0 ml-auto md:gap-3">
            <ThemeToggle />

            {showUpload && (
              <Link
                href="/upload"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-accent transition-colors hover:bg-accent/10"
                title="Upload vlog"
              >
                <Upload size={18} />
              </Link>
            )}

            {pathname !== '/' && (
              <div className="hidden items-center gap-3 md:flex">
                <Link
                  href="/login"
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search — only on /explore */}
        {pathname === '/explore' && (
          <div className="pb-3 md:hidden">
            <div className="flex">
              <input
                type="text"
                placeholder="Search candidates..."
                className="flex-1 rounded-l-lg border border-r-0 border-border bg-surface py-2 pl-4 pr-3 text-sm text-text outline-none placeholder:text-text-muted focus:border-accent/50"
              />
              <button className="flex items-center justify-center rounded-r-lg border border-l-0 border-border bg-surface-hover px-4 text-text-muted">
                <Search size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-border pb-4 md:hidden">
            <div className="flex flex-col gap-1 pt-2">
              <Link
                href="/explore"
                className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-text"
                onClick={() => setMobileOpen(false)}
              >
                Explore
              </Link>
              {pathname !== '/' && (
                <>
                  {showUpload && (
                    <Link
                      href="/upload"
                      className="rounded-lg px-3 py-2.5 text-sm text-accent transition-colors hover:bg-accent/10"
                      onClick={() => setMobileOpen(false)}
                    >
                      Upload
                    </Link>
                  )}
                  <div className="my-2 h-px bg-border" />
                  <Link
                    href="/login"
                    className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-text"
                    onClick={() => setMobileOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="mx-3 mt-1 rounded-lg bg-accent py-2.5 text-center text-sm font-semibold text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
