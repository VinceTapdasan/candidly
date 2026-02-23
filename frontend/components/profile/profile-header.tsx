import Link from 'next/link';
import { Facehash } from 'facehash';
import { Pencil, Video } from 'lucide-react';
import { TARGET_ROLES } from '@/constants/roles';

export function ProfileHeader() {
  const sampleRoles = TARGET_ROLES.slice(0, 5);

  return (
    <div className="flex flex-col items-start gap-5 sm:flex-row">
      {/* Square avatar */}
      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface-hover sm:h-40 sm:w-40">
        <Facehash
          name="candidly-profile"
          size={160}
          interactive={false}
          showInitial={false}
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-text sm:text-3xl">
          Your Name
        </h1>
        <p className="mt-0.5 text-sm text-text-muted">
          @username &middot; 3 vlogs &middot; 1.2K views
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          More about this profile...
        </p>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-surface-hover">
            <Pencil size={14} />
            Edit Profile
          </button>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-surface-hover"
          >
            <Video size={14} />
            Manage Vlogs
          </Link>
        </div>

        {/* Target Roles */}
        <div className="mt-4 flex flex-wrap gap-2">
          {sampleRoles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
