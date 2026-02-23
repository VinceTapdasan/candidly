export const SKILLS = [
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Next.js',
  'PostgreSQL',
  'Figma',
  'Git',
] as const;

export type Skill = (typeof SKILLS)[number];
