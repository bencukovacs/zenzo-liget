---
project_name: 'zenzo-liget'
user_name: 'Bencu'
date: '2025-12-30'
sections_completed: ['technology_stack', 'typescript_rules', 'nextjs_react_rules', 'database_naming_rules', 'testing_rules', 'code_organization_rules', 'critical_rules']
status: 'complete'
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

**Core Framework:**
- Next.js 15 (App Router with `src/` directory)
- React 19 (Server Components by default)
- TypeScript 5.x (strict mode enabled)
- Node.js 18+

**Database & ORM:**
- PostgreSQL (Render hosted, separate DB per tenant)
- Prisma (latest, Dynamic Client Factory for multi-tenancy)

**Authentication:**
- NextAuth.js v5 (Credentials provider, JWT strategy)

**UI & Styling:**
- Tailwind CSS 3.4+
- shadcn/ui (accessible components)
- React Hook Form + Zod (form handling + validation)

**Data Fetching:**
- React Query (TanStack Query) for client-side mutations
- React Server Components for initial data load

**Email:**
- Resend + React Email (transactional emails)

**Testing:**
- Vitest + React Testing Library

**Deployment:**
- Vercel (frontend + API routes)
- GitHub Actions (CI: lint, typecheck, test)

## Critical Implementation Rules

### TypeScript Rules

- **Strict mode is mandatory** - never use `any` type; use `unknown` for truly unknown types
- **Use named exports** - avoid `export default`; use `export function X` or `export const X`
  - **EXCEPTION:** Next.js requires `export default` for special files: `page.tsx`, `layout.tsx`, `error.tsx`, `loading.tsx`, `not-found.tsx`, `template.tsx`
- **Absolute imports only** - use `@/` alias for all imports (e.g., `@/components/bookings`)
- **Zod for runtime validation** - all API inputs must be validated with Zod schemas from `@/schemas/`
- **Infer types from Zod** - use `z.infer<typeof schema>` instead of duplicating type definitions
- **API Response wrapper** - all API routes must return `ApiResponse<T>` type:
  ```typescript
  type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: { code: string; message: string; details?: unknown } };
  ```
- **Error codes are standardized** - use only: `VALIDATION_ERROR`, `NOT_FOUND`, `UNAUTHORIZED`, `FORBIDDEN`, `CONFLICT`, `INTERNAL_ERROR`

### Next.js & React Rules

- **Server Components by default** - only add `"use client"` when using hooks, event handlers, or browser APIs
- **Route groups for portals** - use `(admin)` and `(client)` route groups for role separation
- **Hybrid data fetching** - RSC for initial page load, React Query for mutations and refetching
- **Multi-tenant middleware** - extract `tenantId` from JWT in middleware, validate on every request
- **Prisma Client Factory** - always use `getPrismaClient(tenantId)` never a global Prisma client:
  ```typescript
  const prisma = getPrismaClient(session.user.tenantId);
  ```
- **Form handling** - use React Hook Form + Zod resolver; never manual form state
- **shadcn/ui components** - use existing UI components from `@/components/ui/`; don't create custom primitives
- **Loading states** - use React Query's `isPending` for mutations, skeleton components for page loads
- **Error boundaries** - wrap route segments with error.tsx for graceful error handling

### Database & Naming Rules

**Prisma Schema:**
- Models: `PascalCase` (e.g., `Client`, `Booking`, `Dog`)
- Tables: `snake_case` via `@@map("clients")`
- Columns: `snake_case` via `@map("first_name")`
- Foreign keys: `<entity>_id` pattern (e.g., `client_id`, `dog_id`)

**Code Naming:**
- Components: `PascalCase.tsx` (e.g., `BookingCard.tsx`)
- Hooks: `camelCase` with `use` prefix (e.g., `useBookings.ts`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Constants: `SCREAMING_SNAKE_CASE` (e.g., `MAX_DOGS_PER_DAY`)
- Folders: `kebab-case` (e.g., `booking-form/`)

**API Naming:**
- Endpoints: plural nouns, lowercase (`/api/bookings`, `/api/clients`)
- Route params: `[id]` format (`/api/bookings/[id]`)
- Query params: `camelCase` (`?startDate=...&clientId=...`)
- JSON fields: `camelCase` (`{ firstName, createdAt }`)

**Date Handling:**
- Store: ISO 8601 strings (`2025-01-15T10:30:00Z`)
- API: ISO 8601 strings in JSON
- Display: Hungarian format via `Intl.DateTimeFormat('hu-HU')`

### Testing Rules

- **Co-locate tests** - place `ComponentName.test.tsx` next to `ComponentName.tsx`
- **Vitest + React Testing Library** - no Enzyme or Jest globals
- **Test file naming** - `*.test.ts` or `*.test.tsx` (never `*.spec.*`)
- **Run before commit** - CI pipeline runs lint, typecheck, and test on every PR

### Code Organization Rules

- **Barrel exports** - every component folder has `index.ts` with named exports
- **Import pattern**: `import { BookingCard } from '@/components/bookings'`
- **Domain folders** - organize by domain: `bookings/`, `clients/`, `dogs/`, `invoices/`
- **UI vs Domain** - `@/components/ui/` for shadcn primitives, `@/components/<domain>/` for business components
- **Hooks in hooks/** - custom hooks live in `@/hooks/`, not scattered in components
- **Schemas in schemas/** - Zod schemas live in `@/schemas/`, shared by forms and API

### Critical Don't-Miss Rules

**Multi-Tenancy (CRITICAL):**
- NEVER use a global Prisma client - always `getPrismaClient(tenantId)`
- ALWAYS validate tenantId from JWT before any database operation
- NEVER expose tenant data across tenant boundaries

**Hungarian Localization:**
- All UI text must be in Hungarian (single language MVP)
- Currency: HUF only, format with `Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' })`
- Dates: Display as `yyyy. MM. dd.` (Hungarian format)

**KATA Compliance:**
- Invoice numbers must be sequential per tenant (no gaps)
- Required invoice fields: seller name, tax ID, date, sequential number
- 7-year audit log retention for tax compliance

**Security:**
- Never log sensitive data (passwords, tokens, personal data)
- All API routes must check authentication via middleware
- Role-based access: `tenant_admin` vs `client` permissions enforced

**Anti-Patterns to AVOID:**
- `export default` - use named exports
- `../../../` relative imports - use `@/` alias
- Global Prisma client - use tenant-scoped factory
- Manual form state - use React Hook Form
- Custom UI primitives - use shadcn/ui
- `any` type - use proper TypeScript types

---

## Usage Guidelines

**For AI Agents:**
- Read this file before implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option
- Update this file if new patterns emerge

**For Humans:**
- Keep this file lean and focused on agent needs
- Update when technology stack changes
- Review quarterly for outdated rules
- Remove rules that become obvious over time

---

**Last Updated:** 2025-12-30
