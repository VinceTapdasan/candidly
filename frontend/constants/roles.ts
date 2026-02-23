export const TARGET_ROLES = [
  'Software Engineer',
  'Product Manager',
  'Designer',
  'Data Scientist',
  'Marketing Manager',
  'Sales Representative',
  'Teacher',
  'Project Manager',
  'Business Analyst',
  'DevOps Engineer',
  'Content Creator',
  'Customer Success Manager',
  'Financial Analyst',
  'HR Specialist',
  'Operations Manager',
  'Consultant',
  'Account Executive',
  'UX Researcher',
  'Full Stack Developer',
  'Growth Marketer',
] as const;

export type TargetRole = (typeof TARGET_ROLES)[number];
