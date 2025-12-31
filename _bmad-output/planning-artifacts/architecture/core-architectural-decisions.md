# Core Architectural Decisions

## Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Multi-tenant database connection strategy
- Authentication provider and JWT design
- API response format standard

**Important Decisions (Shape Architecture):**
- Data validation strategy
- Data fetching approach
- Form handling
- Email service
- CI/CD pipeline

**Deferred Decisions (Post-MVP):**
- OAuth/social login providers
- API versioning
- Advanced caching strategies
- Multi-language support

## Data Architecture

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Multi-Tenant DB Strategy** | Dynamic Prisma Client Factory | Prisma-recommended for separate DBs, clean tenant-scoped code |
| **Schema Design** | Single Schema File | Simpler migrations, consistency for solo developer |
| **Data Validation** | Zod Schemas (shared) | Single source of truth for frontend + API, TypeScript inference |

**Prisma Client Factory Pattern:**
```typescript
// lib/prisma.ts
const prismaClients = new Map<string, PrismaClient>();

export function getPrismaClient(tenantId: string): PrismaClient {
  if (!prismaClients.has(tenantId)) {
    const connectionString = getTenantConnectionString(tenantId);
    prismaClients.set(tenantId, new PrismaClient({ datasources: { db: { url: connectionString } } }));
  }
  return prismaClients.get(tenantId)!;
}
```

## Authentication & Security

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Auth Provider** | Email/Password (Credentials) | Familiar to Hungarian users, no social dependency |
| **JWT Payload** | userId + tenantId + role | Enables DB routing and auth checks without DB lookup |
| **Session Strategy** | JWT (stateless) | Scales with serverless, works offline |

**JWT Payload Structure:**
```typescript
{
  sub: "user-uuid",
  tenantId: "tenant-uuid",
  role: "tenant_admin" | "client",
  iat: number,
  exp: number
}
```

## API & Communication Patterns

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **API Structure** | Flat REST | Simple for MVP, internal API, versioning not critical |
| **Error Handling** | Consistent JSON `{ success, data, error }` | Predictable frontend handling, easy TypeScript typing |

**API Response Types:**
```typescript
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string; details?: unknown } };
```

**Route Structure:**
```
/api/auth/[...nextauth]
/api/bookings
/api/bookings/[id]
/api/clients
/api/clients/[id]
/api/dogs
/api/invoices
```

## Frontend Architecture

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Data Fetching** | Hybrid RSC + React Query | RSC for initial load, React Query for mutations |
| **Form Handling** | React Hook Form + Zod | shadcn/ui integration, shared validation schemas |
| **State Management** | React Query + React Context | No global store needed, query cache handles server state |

## Infrastructure & Deployment

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Email Service** | Resend + React Email | React components for emails, modern API, Vercel ecosystem |
| **CI/CD** | GitHub Actions + Vercel | GH Actions for tests, Vercel auto-deploy |
| **Environment Config** | .env files + Vercel | Standard pattern, local flexibility |

**CI/CD Pipeline:**
```
PR Push → GitHub Actions (lint, typecheck, test) → Vercel Preview
Merge to main → GitHub Actions (lint, typecheck, test) → Vercel Production
```

## Decision Impact Analysis

**Implementation Sequence:**
1. Project initialization (create-next-app)
2. Prisma setup with multi-tenant client factory
3. NextAuth.js with Credentials provider
4. shadcn/ui + React Hook Form + Zod
5. React Query provider
6. API routes with standard response format
7. Resend email integration
8. GitHub Actions workflow
9. PWA configuration

**Cross-Component Dependencies:**
- JWT payload design → affects middleware, API routes, client components
- Prisma client factory → affects all data access code
- Zod schemas → shared between API validation and form validation
- React Query → wraps mutations, integrates with RSC initial data
