'use client';

import { useState } from 'react';
import { Video, Info } from 'lucide-react';

const ROLES = [
  'Sales',
  'Customer Success',
  'Account Management',
  'Support',
  'Community Management',
  'Retail',
  'Hospitality',
];

const SKILLS = [
  'Communication',
  'CRM',
  'B2B',
  'B2C',
  'Retail',
  'Bilingual',
  'Leadership',
  'Negotiation',
  'Problem Solving',
  'Public Speaking',
];

export default function UploadPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  return (
    <div className="min-h-screen pt-14">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Upload your vlog</h1>
          <p className="text-text-secondary">
            Show recruiters who you really are
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Video Upload Zone */}
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-12 text-center transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
                    <Video size={28} className="text-accent" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-text">
                      Drag and drop your video here
                    </p>
                    <p className="text-sm text-text-muted">
                      or click to browse. MP4, MOV, WebM up to 500MB
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-all duration-300 hover:bg-surface-hover hover:text-text"
                  >
                    Choose File
                  </button>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Why I'm great at sales"
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell recruiters about yourself, your experience, and what makes you stand out..."
                  className="w-full resize-none rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Target Role */}
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                  Target Role
                </label>
                <select className="w-full appearance-none rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/50">
                  <option value="" className="bg-bg-elevated">
                    Select a role...
                  </option>
                  {ROLES.map((role) => (
                    <option key={role} value={role} className="bg-bg-elevated">
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Skills */}
              <div>
                <label className="mb-3 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                  Skills
                </label>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`rounded-lg border px-3 py-1 text-xs font-medium transition-all duration-300 ${
                        selectedSkills.includes(skill)
                          ? 'border-accent/20 bg-accent/10 text-accent'
                          : 'border-border bg-surface text-text-secondary hover:bg-surface-hover hover:text-text'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. San Francisco, CA or Remote"
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:brightness-110"
              >
                Publish Vlog
              </button>
            </form>
          </div>

          {/* Guidelines Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex items-center gap-2">
                <Info size={16} className="text-accent" />
                <h3 className="font-semibold text-text">Vlog Tips</h3>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                <li className="flex gap-2">
                  <span className="shrink-0 text-accent">-</span>
                  Keep it 2-5 minutes. Short and impactful.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-accent">-</span>
                  Be yourself. This isn&apos;t a formal interview.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-accent">-</span>
                  Talk about what you&apos;re great at or walk through a
                  project.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-accent">-</span>
                  Good lighting and clear audio go a long way.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-accent">-</span>
                  Authenticity beats production quality every time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
