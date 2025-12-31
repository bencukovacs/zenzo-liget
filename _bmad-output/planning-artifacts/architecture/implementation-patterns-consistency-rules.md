# Implementation Patterns & Consistency Rules

## Pattern Categories Defined

**Critical Conflict Points Addressed:** 12 areas where AI agents could make different choices

These patterns ensure any AI agent (including future Claude sessions) writes consistent, compatible code.

## Naming Patterns

**Database Naming:**

| Element | Convention | Example |
|---------|------------|---------|
| Models | PascalCase | `Client`, `Booking`, `Dog` |
| Tables | snake_case (via `@@map`) | `clients`, `bookings`, `dogs` |
| Columns | snake_case (via `@map`) | `first_name`, `created_at` |
| Foreign Keys | `<entity>_id` | `client_id`, `dog_id` |

```prisma
model Client {
  id        String   @id @default(uuid())
  firstName String   @map("first_name")
  createdAt DateTime @default(now()) @map("created_at")

  @@map("clients")
}
```

**Code Naming:**

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `BookingCard.tsx` |
| Hooks | camelCase + `use` prefix | `useBookings.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types/Interfaces | PascalCase | `Booking`, `ClientFormData` |
| Variables | camelCase | `userId`, `bookingDate` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_DOGS_PER_DAY` |
| Folders | kebab-case | `booking-form/`, `api-utils/` |

**API Naming:**

| Element | Convention | Example |
|---------|------------|---------|
| Endpoints | Plural nouns, lowercase | `/api/bookings`, `/api/clients` |
| Route params | `[id]` format | `/api/bookings/[id]` |
| Query params | camelCase | `?startDate=...&clientId=...` |
| JSON fields | camelCase | `{ firstName, createdAt }` |

## Structure Patterns

**Test Location:** Co-located with source files

```
src/components/bookings/
  BookingCard.tsx
  BookingCard.test.tsx
  BookingForm.tsx
  BookingForm.test.tsx
```

**Component Organization:** Hybrid (UI + Domain)

```
src/components/
  ui/              # shadcn/ui components
  bookings/        # Booking domain components
  clients/         # Client domain components
  dogs/            # Dog domain components
  layout/          # Layout components
```

**Import/Export Patterns:**

- Barrel exports via `index.ts` in each folder
- Absolute imports with `@/` alias
- Named exports preferred over default exports

```typescript
// components/bookings/index.ts
export { BookingCard } from './BookingCard';
export { BookingForm } from './BookingForm';

// Usage
import { BookingCard } from '@/components/bookings';
```

## Format Patterns

**Date Handling:**

- Store: ISO 8601 strings in database (`2025-01-15T10:30:00Z`)
- API: ISO 8601 strings in JSON
- Display: Hungarian format via `Intl.DateTimeFormat('hu-HU')`

**Error Codes:**

| Code | Meaning |
|------|---------|
| `VALIDATION_ERROR` | Input validation failed |
| `NOT_FOUND` | Resource doesn't exist |
| `UNAUTHORIZED` | Not authenticated |
| `FORBIDDEN` | Authenticated but not permitted |
| `CONFLICT` | Resource state conflict (e.g., double booking) |
| `INTERNAL_ERROR` | Unexpected server error |

## Process Patterns

**Loading States:**

- Use React Query's `isLoading`, `isPending` states
- Skeleton components for initial load
- Inline spinners for mutations

**Error Handling:**

- API routes: Try/catch with consistent error response
- Components: Error boundaries for unexpected errors
- Forms: Field-level validation errors from Zod
- User-facing: Hungarian error messages, technical details logged only

**Authentication Flow:**

1. Middleware checks JWT on protected routes
2. Redirect to `/login` if unauthenticated
3. After login, redirect to original destination or dashboard
4. Role-based route protection in middleware

## Enforcement Guidelines

**All AI Agents MUST:**

1. Follow naming conventions exactly as specified
2. Use the API response wrapper for all endpoints
3. Co-locate tests with source files
4. Use barrel exports for component folders
5. Handle errors with standard error codes
6. Format dates consistently (ISO in API, Hungarian in UI)

**Pattern Verification:**

- ESLint rules enforce naming conventions
- TypeScript enforces API response types
- PR review checklist includes pattern compliance

## Anti-Patterns to Avoid

| Avoid | Use Instead |
|-------|-------------|
| `export default function` | `export function ComponentName` |
| `../../../components` | `@/components` |
| `users` table with `UserId` column | `users` table with `user_id` column |
| Inline error messages | Error codes from standard list |
| `any` type | Proper TypeScript types |
| Console.log in production | Structured logging |

## UX Enhancement Patterns

**Patterns for UX features mentioned in UX Design Specification:**

| Pattern | Implementation | Library/Approach |
|---------|---------------|------------------|
| **Dark Mode** | Tailwind CSS dark mode | `class="dark"` with `prefers-color-scheme` media query detection |
| **Swipe Gestures** | Native touch events | `onTouchStart`, `onTouchMove`, `onTouchEnd` for swipe-to-mark-paid |
| **Confetti Animation** | Optional delight feature | `canvas-confetti` (lightweight, 3KB) for first invoice success |

**Dark Mode Implementation:**
```typescript
// lib/theme.ts
export function initTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
}

// Call in root layout
useEffect(() => {
  initTheme();
}, []);
```

**Configuration in tailwind.config.ts:**
```typescript
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  // ... rest of config
}
```

**Swipe Gesture Implementation:**
```typescript
// components/invoices/InvoiceRow.tsx
const handleSwipe = (direction: 'left' | 'right') => {
  if (direction === 'right') markAsPaid();
};

// Usage with native touch events
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX - touchStartX > 50) handleSwipe('right');
  if (touchStartX - touchEndX > 50) handleSwipe('left');
};
```

**Confetti Animation Implementation:**
```typescript
// lib/confetti.ts
import confetti from 'canvas-confetti';

export function celebrateFirstInvoice() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Usage in invoice generation success callback
if (isFirstInvoice) celebrateFirstInvoice();
```

## Audit Logging Pattern

**Strategy:** Prisma Middleware (Centralized)

**Rationale:**
- NFR-S5 requires audit logging with 7-year retention for KATA compliance
- Centralized middleware ensures all invoice/payment/booking changes are logged automatically
- Single implementation point prevents inconsistent logging across stories

**Implementation:**
```typescript
// lib/audit.ts
import { Prisma } from '@prisma/client';

export const auditMiddleware: Prisma.Middleware = async (params, next) => {
  const result = await next(params);

  // Log invoice/payment/booking changes for KATA compliance
  if (['Invoice', 'Payment', 'Booking'].includes(params.model ?? '')) {
    if (['create', 'update', 'delete'].includes(params.action)) {
      const prisma = getPrismaClient(getCurrentTenantId());
      await prisma.auditLog.create({
        data: {
          model: params.model,
          action: params.action,
          recordId: result.id,
          userId: getCurrentUserId(),
          timestamp: new Date(),
          changes: JSON.stringify(params.args),
          tenantId: getCurrentTenantId(),
        },
      });
    }
  }

  return result;
};

// Register in lib/prisma.ts
export function getPrismaClient(tenantId: string): PrismaClient {
  if (!prismaClients.has(tenantId)) {
    const client = new PrismaClient({
      datasources: { db: { url: getTenantConnectionString(tenantId) } }
    });
    client.$use(auditMiddleware); // Register audit middleware
    prismaClients.set(tenantId, client);
  }
  return prismaClients.get(tenantId)!;
}
```

**Database Schema (Prisma):**
```prisma
model AuditLog {
  id        String   @id @default(uuid())
  model     String   @map("model_name")
  action    String   // 'create', 'update', 'delete'
  recordId  String   @map("record_id")
  userId    String   @map("user_id")
  timestamp DateTime @default(now())
  changes   String   @db.Text // JSON string
  tenantId  String   @map("tenant_id")

  @@map("audit_logs")
  @@index([tenantId, timestamp])
}
```

**Retention Policy:**
- 7 years minimum (KATA compliance requirement)
- Automated cleanup job runs annually to delete logs older than 7 years
- Logs stored per-tenant database for data isolation
