'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { User, Building2 } from 'lucide-react';

function SignUpForm() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get('role') || '';
  const [selectedRole, setSelectedRole] = useState<string>(initialRole);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-14">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Create your account</h1>
          <p className="text-text-secondary">
            Join candidly and flip the hiring script
          </p>
        </div>

        {/* Role Selection */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => setSelectedRole('candidate')}
            className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all duration-300 ${
              selectedRole === 'candidate'
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-border bg-surface text-text-secondary hover:bg-surface-hover'
            }`}
          >
            <User size={24} />
            <span className="text-sm font-medium">I&apos;m a Candidate</span>
          </button>
          <button
            onClick={() => setSelectedRole('recruiter')}
            className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all duration-300 ${
              selectedRole === 'recruiter'
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-border bg-surface text-text-secondary hover:bg-surface-hover'
            }`}
          >
            <Building2 size={24} />
            <span className="text-sm font-medium">I&apos;m a Recruiter</span>
          </button>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/50"
            />
          </div>
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
              placeholder="At least 8 characters"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:brightness-110"
          >
            Create Account
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
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpForm />
    </Suspense>
  );
}
