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

- When creating `const` arrays, objects, or config values, always put them in a dedicated file inside `frontend/constants/` (e.g. `job-categories.ts`, `skills.ts`). Never inline constants in component files.

## Firebase

- Module: `backend/src/firebase/firebase.module.ts`
- Service account key: `backend/serviceAccountKey.json` (not committed)
