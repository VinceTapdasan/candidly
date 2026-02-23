import { Briefcase } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { SKILLS } from '@/constants/skills';

export function SkillsSection() {
  return (
    <section>
      <SectionHeader icon={<Briefcase size={16} />} title="Skills" />
      <div className="flex max-w-2xl flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
