import { Briefcase, Building2, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { EmptyHint } from '@/components/shared/empty-hint';

export function ExperienceSection() {
  return (
    <section>
      <SectionHeader icon={<Briefcase size={16} />} title="Experience" />
      <div className="flex flex-col gap-6">
        <ExperienceCard
          role="Senior Frontend Developer"
          company="TechCorp Inc."
          dates="Jan 2023 — Present"
          description="Led the frontend team in building a modern SaaS platform using React and TypeScript."
        />
        <ExperienceCard
          role="Frontend Developer"
          company="StartupXYZ"
          dates="Mar 2021 — Dec 2022"
          description="Built and shipped customer-facing features for the core product."
        />
      </div>
      <div className="mt-4 max-w-2xl">
        <EmptyHint text="Add more experience to strengthen your profile" />
      </div>
    </section>
  );
}

function ExperienceCard({
  role,
  company,
  dates,
  description,
}: {
  role: string;
  company: string;
  dates: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl rounded-xl rounded-bl-none rounded-tl-none border border-border bg-surface p-5">
      <div className="flex gap-4">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover">
          <Building2 size={18} className="text-text-muted" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-text">{role}</h3>
          <p className="text-sm text-text-secondary">{company}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-text-muted">
            <Clock size={12} />
            {dates}
          </p>
          <p className="mt-2 text-sm text-text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
}
