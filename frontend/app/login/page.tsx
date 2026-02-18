'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-14">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Welcome back</h1>
          <p className="text-text-secondary">Log in to your candidly account</p>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
              Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm text-accent transition-colors hover:text-accent-hover"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:brightness-110"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-text-muted">or continue with</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* OAuth */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border bg-surface py-3 text-sm text-text-secondary transition-all duration-300 hover:bg-surface-hover hover:text-text">
            Google
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border bg-surface py-3 text-sm text-text-secondary transition-all duration-300 hover:bg-surface-hover hover:text-text">
            LinkedIn
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-text-muted">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
