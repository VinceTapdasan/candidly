import Link from 'next/link';
import { MapPin, Briefcase, Video, ArrowRight } from 'lucide-react';

export default function CandidateProfilePage() {
  return (
    <div className="min-h-screen pt-14">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Profile Header */}
        <div className="mb-8 rounded-xl border border-border bg-surface p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <div className="h-24 w-24 shrink-0 rounded-lg bg-surface-hover" />

            <div className="flex-1">
              <h1 className="mb-1 text-2xl font-bold text-text">
                Candidate Name
              </h1>
              <p className="mb-3 text-text-secondary">
                Headline or tagline goes here
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  Location
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={14} />
                  Target Role
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  No skills added
                </span>
              </div>
            </div>

            <div className="flex shrink-0 gap-3">
              <button className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110">
                Request Contact
              </button>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
            About
          </h2>
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-secondary">No bio added yet.</p>
          </div>
        </div>

        {/* Links */}
        <div className="mb-8">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
            Links
          </h2>
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-muted">No links added yet.</p>
          </div>
        </div>

        {/* Vlogs */}
        <div>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
            Vlogs
          </h2>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-hover">
              <Video size={28} className="text-text-muted" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-text">
              No vlogs yet
            </h3>
            <p className="mb-6 max-w-sm text-sm text-text-secondary">
              This candidate hasn&apos;t uploaded any vlogs yet. Check back
              later or explore other candidates.
            </p>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-hover"
            >
              Browse other candidates
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
