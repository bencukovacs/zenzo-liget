# Project Structure & Boundaries

## Complete Project Directory Structure

```
zenzo-liget/
├── .env.example                    # Environment template (committed)
├── .env.local                      # Local dev secrets (gitignored)
├── .eslintrc.json                  # ESLint configuration
├── .gitignore
├── .github/
│   └── workflows/
│       └── ci.yml                  # GitHub Actions: lint, typecheck, test
├── README.md
├── next.config.ts                  # Next.js configuration + PWA
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts                # Vitest test configuration
├── components.json                 # shadcn/ui configuration
│
├── prisma/
│   ├── schema.prisma               # Single schema for all tenants
│   ├── migrations/                 # Database migrations
│   └── seed.ts                     # Development seed data
│
├── emails/                         # React Email templates
│   ├── BookingConfirmed.tsx
│   ├── BookingRejected.tsx
│   ├── InvoiceGenerated.tsx
│   └── BookingReminder.tsx
│
├── public/
│   ├── icons/                      # PWA icons (192x192, 512x512)
│   ├── screenshots/                # PWA screenshots for install prompt
│   └── sw.js                       # Generated service worker (gitignored)
│
└── src/
    ├── app/
    │   ├── globals.css             # Global styles + Tailwind
    │   ├── layout.tsx              # Root layout
    │   ├── manifest.ts             # PWA manifest
    │   ├── not-found.tsx           # 404 page
    │   ├── error.tsx               # Global error boundary
    │   │
    │   ├── (auth)/                 # Auth route group (public)
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── register/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx          # Auth layout (centered card)
    │   │
    │   ├── (admin)/                # Admin portal route group
    │   │   ├── layout.tsx          # Admin layout (sidebar nav)
    │   │   ├── dashboard/
    │   │   │   └── page.tsx        # Admin dashboard
    │   │   ├── bookings/
    │   │   │   ├── page.tsx        # Booking list + calendar
    │   │   │   └── [id]/
    │   │   │       └── page.tsx    # Booking detail
    │   │   ├── clients/
    │   │   │   ├── page.tsx        # Client list
    │   │   │   ├── new/
    │   │   │   │   └── page.tsx    # Add client
    │   │   │   └── [id]/
    │   │   │       └── page.tsx    # Client detail + dogs
    │   │   ├── invoices/
    │   │   │   ├── page.tsx        # Invoice list
    │   │   │   └── [id]/
    │   │   │       └── page.tsx    # Invoice detail
    │   │   └── settings/
    │   │       └── page.tsx        # Tenant settings
    │   │
    │   ├── (client)/               # Client portal route group
    │   │   ├── layout.tsx          # Client layout (simple nav)
    │   │   ├── dashboard/
    │   │   │   └── page.tsx        # Client dashboard
    │   │   ├── bookings/
    │   │   │   ├── page.tsx        # My bookings
    │   │   │   └── new/
    │   │   │       └── page.tsx    # Request booking
    │   │   ├── dogs/
    │   │   │   ├── page.tsx        # My dogs
    │   │   │   └── [id]/
    │   │   │       └── page.tsx    # Dog detail
    │   │   ├── invoices/
    │   │   │   └── page.tsx        # My invoices
    │   │   └── profile/
    │   │       └── page.tsx        # My profile
    │   │
    │   └── api/
    │       ├── auth/
    │       │   └── [...nextauth]/
    │       │       └── route.ts    # NextAuth.js handler
    │       ├── bookings/
    │       │   ├── route.ts        # GET (list), POST (create)
    │       │   └── [id]/
    │       │       └── route.ts    # GET, PATCH, DELETE
    │       ├── clients/
    │       │   ├── route.ts
    │       │   └── [id]/
    │       │       └── route.ts
    │       ├── dogs/
    │       │   ├── route.ts
    │       │   └── [id]/
    │       │       └── route.ts
    │       └── invoices/
    │           ├── route.ts        # GET (list), POST (generate)
    │           └── [id]/
    │               └── route.ts
    │
    ├── components/
    │   ├── ui/                     # shadcn/ui components
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── form.tsx
    │   │   ├── input.tsx
    │   │   ├── calendar.tsx
    │   │   ├── dialog.tsx
    │   │   ├── toast.tsx
    │   │   └── ...
    │   │
    │   ├── layout/
    │   │   ├── AdminSidebar.tsx
    │   │   ├── AdminHeader.tsx
    │   │   ├── ClientNav.tsx
    │   │   └── index.ts
    │   │
    │   ├── bookings/
    │   │   ├── BookingCard.tsx
    │   │   ├── BookingCard.test.tsx
    │   │   ├── BookingForm.tsx
    │   │   ├── BookingForm.test.tsx
    │   │   ├── BookingCalendar.tsx
    │   │   ├── BookingStatusBadge.tsx
    │   │   └── index.ts
    │   │
    │   ├── clients/
    │   │   ├── ClientCard.tsx
    │   │   ├── ClientForm.tsx
    │   │   ├── ClientList.tsx
    │   │   └── index.ts
    │   │
    │   ├── dogs/
    │   │   ├── DogCard.tsx
    │   │   ├── DogForm.tsx
    │   │   ├── DogList.tsx
    │   │   └── index.ts
    │   │
    │   └── invoices/
    │       ├── InvoiceCard.tsx
    │       ├── InvoiceDetail.tsx
    │       ├── InvoiceList.tsx
    │       └── index.ts
    │
    ├── lib/
    │   ├── prisma.ts               # Multi-tenant Prisma client factory
    │   ├── auth.ts                 # NextAuth configuration
    │   ├── api.ts                  # API response helpers
    │   ├── utils.ts                # General utilities
    │   │
    │   ├── config/
    │   │   ├── env.ts              # Type-safe environment variables
    │   │   └── constants.ts        # Application constants
    │   │
    │   ├── email/
    │   │   ├── resend.ts           # Resend client configuration
    │   │   └── send.ts             # Email sending utilities
    │   │
    │   ├── invoicing/
    │   │   ├── calculate.ts        # Invoice calculation logic
    │   │   ├── generate.ts         # Invoice PDF/data generation
    │   │   └── kata.ts             # KATA compliance rules
    │   │
    │   └── offline/
    │       ├── cache.ts            # Cache management utilities
    │       └── sync.ts             # Background sync logic
    │
    ├── hooks/
    │   ├── useBookings.ts          # Booking data hook (React Query)
    │   ├── useClients.ts
    │   ├── useDogs.ts
    │   ├── useInvoices.ts
    │   ├── useAuth.ts              # Auth state hook
    │   └── useOffline.ts           # Offline detection hook
    │
    ├── schemas/
    │   ├── booking.ts              # Booking Zod schemas
    │   ├── client.ts               # Client Zod schemas
    │   ├── dog.ts                  # Dog Zod schemas
    │   ├── invoice.ts              # Invoice Zod schemas
    │   ├── auth.ts                 # Auth Zod schemas
    │   └── index.ts                # Barrel export
    │
    ├── types/
    │   ├── booking.ts              # Booking TypeScript types
    │   ├── client.ts
    │   ├── dog.ts
    │   ├── invoice.ts
    │   ├── api.ts                  # API response types
    │   └── index.ts
    │
    ├── providers/
    │   ├── QueryProvider.tsx       # React Query provider
    │   ├── AuthProvider.tsx        # NextAuth session provider
    │   └── ToastProvider.tsx       # Toast notifications provider
    │
    └── middleware.ts               # Auth + tenant routing middleware
```

## Architectural Boundaries

**API Boundaries:**

| Boundary | Location | Purpose |
|----------|----------|---------|
| Authentication | `/api/auth/*` | NextAuth.js endpoints |
| Tenant Data | `/api/*` (all routes) | All data scoped by JWT tenantId |
| Public Routes | `/(auth)/*` | Login, register only |
| Admin Routes | `/(admin)/*` | Tenant admin only |
| Client Routes | `/(client)/*` | Authenticated clients |

**Component Boundaries:**

| Layer | Communication Pattern |
|-------|----------------------|
| Pages (RSC) | Fetch data server-side, pass to client components |
| Client Components | Use React Query hooks for mutations |
| Forms | React Hook Form + Zod → API routes |
| UI Components | Props only, no data fetching |

**Data Boundaries:**

| Boundary | Pattern |
|----------|---------|
| Tenant Isolation | Prisma client per tenant via factory |
| API Layer | Zod validation on all inputs |
| Database | Prisma with typed models |
| Cache | React Query cache per user session |

## Requirements to Structure Mapping

**FR Domain → Directory Mapping:**

| Domain | Primary Locations |
|--------|-------------------|
| User & Access Management | `src/app/(auth)/`, `src/lib/auth.ts`, `src/middleware.ts` |
| Client & Dog Profiles | `src/components/clients/`, `src/components/dogs/`, `src/app/api/clients/`, `src/app/api/dogs/` |
| Booking Management | `src/components/bookings/`, `src/app/(admin)/bookings/`, `src/app/(client)/bookings/` |
| Billing & Invoicing | `src/components/invoices/`, `src/lib/invoicing/`, `src/app/api/invoices/` |
| Notifications | `src/lib/email/`, `emails/` |
| System Administration | `src/app/(admin)/settings/`, `src/lib/config/` |
| PWA & Offline | `src/app/manifest.ts`, `public/`, `src/lib/offline/` |

## Integration Points

**External Integrations:**

| Service | Integration Point | Purpose |
|---------|-------------------|---------|
| Render PostgreSQL | `src/lib/prisma.ts` | Database connections |
| Resend | `src/lib/email/resend.ts` | Email sending |
| Vercel | Deployment | Hosting + edge functions |

**Data Flow:**

```
User Action → Client Component → React Query Mutation
  → API Route → Zod Validation → Prisma Client (tenant-scoped)
  → PostgreSQL → Response → React Query Cache Update → UI
```

## File Organization Summary

| Directory | Purpose |
|-----------|---------|
| `src/app/` | Next.js App Router pages and API routes |
| `src/components/` | React components (UI + domain) |
| `src/lib/` | Server-side utilities and business logic |
| `src/hooks/` | Client-side React hooks |
| `src/schemas/` | Zod validation schemas (shared) |
| `src/types/` | TypeScript type definitions |
| `src/providers/` | React context providers |
| `prisma/` | Database schema and migrations |
| `emails/` | React Email templates |
| `public/` | Static assets and PWA files |
