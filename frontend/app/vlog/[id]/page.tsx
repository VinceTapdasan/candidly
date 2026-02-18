import Link from 'next/link';
import {
  Play,
  ThumbsUp,
  Share2,
  Bookmark,
  MoreHorizontal,
  Video,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

export default function VlogPage() {
  return (
    <div className="min-h-screen pt-14">
      <div className="mx-auto max-w-[1400px] px-4 py-6 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div>
            {/* Video Player */}
            <div className="mb-3 flex aspect-video items-center justify-center rounded-xl bg-black">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent/20">
                  <Play size={32} className="ml-1 text-zinc-400" />
                </div>
                <p className="text-sm text-zinc-500">No video available</p>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-2 text-xl font-bold text-text">
              Untitled Vlog
            </h1>

            {/* Actions Row */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-surface-hover" />
                  <div>
                    <Link
                      href="/candidate/1"
                      className="text-sm font-semibold text-text hover:text-accent transition-colors"
                    >
                      Candidate Name
                    </Link>
                    <p className="text-xs text-text-muted">Target Role</p>
                  </div>
                </div>
                <button className="ml-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_0_20px_rgba(209,17,74,0.25)]">
                  Request Contact
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex overflow-hidden rounded-lg border border-border bg-surface">
                  <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-hover hover:text-text">
                    <ThumbsUp size={16} />
                    <span className="font-mono text-xs">0</span>
                  </button>
                  <div className="w-px bg-border" />
                  <button className="px-3 py-2 text-text-muted transition-colors hover:bg-surface-hover hover:text-text">
                    <ThumbsUp size={16} className="rotate-180" />
                  </button>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-hover hover:text-text">
                  <Share2 size={16} />
                  Share
                </button>
                <button className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-hover hover:text-text">
                  <Bookmark size={16} />
                  Save
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors hover:bg-surface-hover hover:text-text">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            {/* Description Card */}
            <div className="rounded-xl bg-surface p-3 transition-colors hover:bg-surface-hover">
              <div className="mb-1 flex items-center gap-3 text-sm">
                <span className="font-mono text-xs font-medium text-text-secondary">
                  0 views
                </span>
                <span className="font-mono text-xs text-text-muted">
                  No date
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                No description provided yet.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  No skills added
                </span>
              </div>
              <button className="mt-2 flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text">
                Show more
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Sidebar - Related Vlogs */}
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
              Related Vlogs
            </h3>

            {/* Empty state */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface py-16 text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-lg bg-accent/15 blur-xl" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-bg-elevated">
                  <Video size={22} className="text-accent" />
                </div>
              </div>
              <p className="mb-1 text-sm font-medium text-text-secondary">
                No related vlogs yet
              </p>
              <p className="mb-4 text-xs text-text-muted">
                More content coming soon
              </p>
              <Link
                href="/explore"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Explore all vlogs
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Ghost sidebar cards */}
            <div className="mt-4 flex flex-col gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="aspect-video w-40 shrink-0 rounded-lg bg-surface border border-border" />
                  <div className="flex-1 py-0.5">
                    <div className="mb-2 h-3.5 w-full rounded bg-surface" />
                    <div className="mb-1 h-3 w-2/3 rounded bg-surface" />
                    <div className="h-3 w-1/2 rounded bg-surface" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
