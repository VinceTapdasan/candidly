import { ExperienceSection } from '@/components/profile/experience-section';
import { EducationSection } from '@/components/profile/education-section';
import { SkillsSection } from '@/components/profile/skills-section';

export function OverviewTab() {
  return (
    <div className="flex flex-col gap-8">
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
    </div>
  );
}
