import { GraduationCap, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { EmptyHint } from '@/components/shared/empty-hint';

export function EducationSection() {
  return (
    <section>
      <SectionHeader icon={<GraduationCap size={16} />} title="Education" />
      <div className="flex flex-col gap-6">
        <EducationCard
          degree="B.S. Computer Science"
          school="State University"
          dates="2017 — 2021"
        />
      </div>
      <div className="mt-4 max-w-2xl">
        <EmptyHint text="Add your education background" />
      </div>
    </section>
  );
}

function EducationCard({
  degree,
  school,
  dates,
}: {
  degree: string;
  school: string;
  dates: string;
}) {
  return (
    <div className="max-w-2xl rounded-xl rounded-bl-none rounded-tl-none border border-border bg-surface p-5">
      <div className="flex gap-4">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover">
          <GraduationCap size={18} className="text-text-muted" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-text">{degree}</h3>
          <p className="text-sm text-text-secondary">{school}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-text-muted">
            <Clock size={12} />
            {dates}
          </p>
        </div>
      </div>
    </div>
  );
}
