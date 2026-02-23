# candidly

## Tech Stack

- **Frontend**: Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript
- **Backend**: NestJS 11 + Firebase Admin + TypeScript
- **Package Manager**: pnpm

## Project Structure

- `frontend/` - Next.js App Router frontend (port 3000)
- `backend/` - NestJS backend API (port 3001)

## Development

```bash
# Frontend
cd frontend && pnpm dev

# Backend
cd backend && pnpm start:dev
```

## Conventions

### Constants
- When creating `const` arrays, objects, or config values, always put them in a dedicated file inside `frontend/constants/` (e.g. `job-categories.ts`, `skills.ts`). Never inline constants in component files.

### Components
- **Shared/reusable components** go in `frontend/components/shared/` (e.g. `section-header.tsx`, `empty-hint.tsx`, `navbar.tsx`)
- **Feature-specific components** go in `frontend/components/<feature>/` (e.g. `components/profile/profile-header.tsx`, `components/profile/experience-section.tsx`)
- Page files (`app/**/page.tsx`) should be thin orchestrators — import and compose components, manage page-level state only. Do not define sub-components inline in page files.
- Sub-components used only within a single section (e.g. `ExperienceCard` inside `experience-section.tsx`) can stay in the same file as their parent.

### Utils
- If a helper function is needed, place it in `frontend/utils/` (e.g. `utils/format-date.ts`). Do not define utility functions inside component files.

## Firebase

- Module: `backend/src/firebase/firebase.module.ts`
- Service account key: `backend/serviceAccountKey.json` (not committed)
