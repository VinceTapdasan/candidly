# candidly

The reverse job platform where candidates post video vlogs and recruiters discover talent.

## Tech Stack

- **Frontend**: Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript
- **Backend**: NestJS 11 + Firebase Admin + TypeScript
- **Package Manager**: pnpm

## Project Structure

```
candidly/
├── frontend/    # Next.js App Router (port 3000)
├── backend/     # NestJS API (port 3001)
```

## Getting Started

```bash
# Install dependencies
cd frontend && pnpm install
cd backend && pnpm install

# Run frontend
cd frontend && pnpm dev

# Run backend
cd backend && pnpm start:dev
```

## Environment Variables

Copy `.env.example` to `.env` in each directory and fill in your values. Never commit `.env` files.

## License

Private
