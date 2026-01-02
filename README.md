# Zenzo Liget

Pet daycare booking and billing management system for Hungarian pet daycare facilities.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Database:** PostgreSQL + Prisma (multi-tenant)
- **Authentication:** NextAuth.js v5
- **UI:** Tailwind CSS + shadcn/ui
- **Testing:** Vitest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Render or local)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database credentials

# Initialize Prisma (when schema is ready)
npx prisma generate
npx prisma db push
```

### Development

```bash
# Run development server
npm run dev

# Run tests
npm test

# Run type checking
npm run typecheck

# Run linter
npm run lint

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   └── ui/          # shadcn/ui components
├── lib/             # Utilities
└── test/            # Test setup
```

## Documentation

See `_bmad-output/planning-artifacts/` for:
- Product Requirements Document (PRD)
- Architecture Decision Document
- UX Design Specification
- Epics & Stories

## License

Private project
