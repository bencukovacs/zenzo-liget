---
stepsCompleted: [1, 2, 3, 4]
status: complete
inputDocuments:
  - '_bmad-output/planning-artifacts/prd/index.md'
  - '_bmad-output/planning-artifacts/prd/functional-requirements.md'
  - '_bmad-output/planning-artifacts/prd/non-functional-requirements.md'
  - '_bmad-output/planning-artifacts/architecture.md'
  - '_bmad-output/planning-artifacts/ux-design-specification.md'
---

# zenzo-liget - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for zenzo-liget, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**User & Access Management (FR1-FR9)**
- FR1: System Administrators can create new tenant accounts with unique database isolation
- FR2: System Administrators can configure tenant business settings (tax scheme, currency, language, pricing rules)
- FR3: System Administrators can create admin user accounts and assign them to specific tenants
- FR4: Admins can authenticate using email and password credentials
- FR5: Clients can register for an account associated with a specific tenant
- FR6: Clients can authenticate using email and password credentials
- FR7: System can enforce role-based access control (System Admin, Tenant Admin, Client roles)
- FR8: Users can securely maintain authenticated sessions across page refreshes
- FR9: Users can log out and terminate their authenticated session

**Client & Dog Profile Management (FR10-FR18)**
- FR10: Admins can create new client profiles with contact information (name, email, phone)
- FR11: Admins can edit existing client profiles
- FR12: Admins can view a list of all clients for their tenant
- FR13: Admins can add dog profiles associated with a client (name, breed, age, special notes)
- FR14: Admins can edit existing dog profiles
- FR15: Clients can view their own profile information
- FR16: Clients can add dog profiles to their account
- FR17: Clients can edit their dog profiles
- FR18: Clients can view all dogs associated with their account

**Booking Management (FR19-FR29)**
- FR19: Admins can manually create booking entries for three booking types (Daily Daycare, Multi-Day Pension, Multi-Day Pass)
- FR20: Admins can view a calendar showing all upcoming bookings
- FR21: Admins can mark bookings with check-in status
- FR22: Admins can mark bookings with check-out status
- FR23: Admins can approve pending booking requests from clients
- FR24: Admins can reject pending booking requests from clients
- FR25: Clients can submit booking requests for specific dates and booking types
- FR26: Clients can view their booking history (past bookings)
- FR27: Clients can view their upcoming confirmed bookings
- FR28: Clients can see availability indicators on the booking calendar
- FR29: System can display dashboard showing today's bookings and upcoming week overview

**Billing & Invoicing (FR30-FR40)**
- FR30: Admins can generate KATA-compliant invoices for a specific date range
- FR31: System can automatically calculate invoice totals based on booking history and pricing rules
- FR32: System can populate KATA tax fields correctly (tax scheme identifier, compliant numbering)
- FR33: Admins can generate invoices for individual clients
- FR34: Admins can generate bulk invoices for all clients with outstanding bookings
- FR35: Admins can manually mark invoices as paid with payment method and received date
- FR36: Admins can view pending payments (unpaid invoices)
- FR37: Clients can view their invoices in the client portal
- FR38: Clients can see their current outstanding balance
- FR39: Clients can view payment history for their account
- FR40: System can track payment status (Unpaid, Paid) for each invoice

**Notifications & Communication (FR41-FR44)**
- FR41: System can send email notifications when booking requests are approved
- FR42: System can send email notifications when booking requests are rejected
- FR43: System can send email notifications when new invoices are generated
- FR44: System can send email reminder notifications the day before a scheduled booking

**System Administration & Configuration (FR45-FR50)**
- FR45: System Administrators can configure tenant pricing rules (base prices for each booking type)
- FR46: Admins can modify pricing configuration for their tenant
- FR47: System Administrators can view audit logs of system admin actions
- FR48: System can enforce multi-tenant data isolation (tenant data never exposed to other tenants)
- FR49: System can display all UI text in Hungarian language
- FR50: System can display all currency values in HUF (Hungarian Forint)

**PWA & Offline Capabilities (FR51-FR55)**
- FR51: Users can install the application to their mobile device home screen
- FR52: Users can view cached booking calendar data when offline (read-only)
- FR53: Users can view cached client and dog profile data when offline (read-only)
- FR54: System can display offline status indicator when network is unavailable
- FR55: System can synchronize pending actions when network connection is restored

### Non-Functional Requirements

**Performance (NFR-P1 to NFR-P4)**
- NFR-P1: Mobile-First Response Times - FCP <1.5s, TTI <3s, LCP <2.5s on 4G
- NFR-P2: Interactive UI Performance - 60fps calendar scrolling, <100ms optimistic UI, <200ms navigation
- NFR-P3: PWA Offline Performance - <500ms cached data access, <1s app shell on repeat visits
- NFR-P4: Database Query Performance - Invoice generation <5s, searches <1s, dashboard <2s

**Security (NFR-S1 to NFR-S5)**
- NFR-S1: Data Encryption - AES-256 at rest, HTTPS/TLS 1.3 in transit
- NFR-S2: Authentication and Authorization - JWT with httpOnly cookies, refresh token rotation, RBAC
- NFR-S3: Multi-Tenant Data Isolation - Separate database per tenant, no cross-tenant queries
- NFR-S4: Payment Data Security - No credit card storage, tokenization for future payment gateway
- NFR-S5: Audit Logging - 7-year retention for invoice/payment changes

**Scalability (NFR-SC1 to NFR-SC4)**
- NFR-SC1: Tenant Growth - 1 to 50+ tenants without re-architecture
- NFR-SC2: Per-Tenant Data Growth - 100 clients, 150 dogs, 5,000 bookings/year
- NFR-SC3: Concurrent Usage - MVP: 5 concurrent users
- NFR-SC4: Database Scalability - PostgreSQL separate-DB pattern to 100+ tenants

**Reliability (NFR-R1 to NFR-R4)**
- NFR-R1: System Availability - 95% uptime for MVP
- NFR-R2: Data Durability - Zero data loss, daily backups with 30-day retention
- NFR-R3: Graceful Degradation - PWA offline mode, error boundaries, retry logic
- NFR-R4: Recovery Time Objective - 4 hours for MVP

**Accessibility (NFR-A1 to NFR-A3)**
- NFR-A1: WCAG 2.1 Level A Compliance - Keyboard navigation, color contrast, semantic HTML
- NFR-A2: Screen Reader Compatibility - ARIA labels, error announcements
- NFR-A3: Responsive Design Accessibility - 44px touch targets, 200% zoom support

**Maintainability (NFR-M1 to NFR-M4)**
- NFR-M1: Code Quality - TypeScript strict mode, ESLint, >70% test coverage for critical logic
- NFR-M2: Documentation - OpenAPI/Swagger, architecture docs, KATA compliance docs
- NFR-M3: Deployment and CI/CD - GitHub Actions, automated migrations, zero-downtime deploys
- NFR-M4: Monitoring and Observability - Error logging, DB monitoring, uptime alerts

**Compliance (NFR-C1 to NFR-C4)**
- NFR-C1: KATA Tax Compliance - Hungarian KATA invoice requirements, sequential numbering, 7-year retention
- NFR-C2: GDPR Compliance - Consent, data minimization, right to access/deletion
- NFR-C3: Data Residency - EU-region database storage
- NFR-C4: Localization Compliance - HUF currency, Hungarian language, Hungarian date formats

### Additional Requirements

**From Architecture Document:**

- **Starter Template**: `npx create-next-app@latest zenzo-liget --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` - This impacts Epic 1 Story 1 (project initialization)
- **Post-Creation Setup**: Prisma, NextAuth.js v5, shadcn/ui, Serwist or native SW, Resend, Zod, Vitest + RTL
- **Multi-Tenant Strategy**: Dynamic Prisma Client Factory pattern for separate DB per tenant
- **Authentication**: NextAuth.js with Credentials provider, JWT with userId + tenantId + role
- **API Structure**: Flat REST with consistent `{ success, data, error }` response format
- **Data Fetching**: Hybrid RSC + React Query (RSC for initial load, React Query for mutations)
- **Form Handling**: React Hook Form + Zod with shared validation schemas
- **Email Service**: Resend + React Email for templates
- **CI/CD Pipeline**: GitHub Actions (lint, typecheck, test) → Vercel deployment
- **Route Groups**: `(auth)` for public, `(admin)` for tenant admin, `(client)` for clients
- **Naming Conventions**: PascalCase models, snake_case DB tables/columns, camelCase code
- **Co-located Tests**: Tests alongside source files (`*.test.tsx`)
- **Barrel Exports**: Index files in component folders
- **Error Codes**: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED, FORBIDDEN, CONFLICT, INTERNAL_ERROR
- **Date Handling**: ISO 8601 in DB/API, Hungarian format in UI via Intl.DateTimeFormat('hu-HU')

**From UX Design Specification:**

- **Mobile-First PWA**: Touch-optimized (44px targets), installable to home screen, offline-capable
- **Dashboard as Landing**: Today's critical info visible without scrolling (today's dogs, pickups, unpaid invoices)
- **One-Click Invoice Generation**: Wizard-style flow with preview before commit
- **4-Tap Booking Flow**: Calendar → Date → Dog → Type → Book (Wolt-inspired)
- **Availability Indicators**: Green/yellow/red dots on calendar dates (traffic light metaphor)
- **Status Visibility**: Color-coded financial clarity (green=paid, yellow=pending, red=overdue)
- **Progressive Disclosure**: Essential actions visible, advanced settings hidden until needed
- **Bottom Tab Navigation**: Dashboard, Calendar, Invoices, Clients on mobile
- **Swipe Gestures**: Swipe-to-mark-paid as optional enhancement
- **Dark Mode**: Auto-detect for late-night booking (Éva's 10pm scenario)
- **Error Prevention**: Confirmation dialogs for destructive actions, preview before finalizing
- **Hungarian Microcopy**: Friendly, professional tone in Hungarian language

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 2 | System Admin creates tenant accounts |
| FR2 | Epic 2 | System Admin configures tenant settings |
| FR3 | Epic 2 | System Admin creates admin users |
| FR4 | Epic 2 | Admin authentication |
| FR5 | Epic 2 | Client registration |
| FR6 | Epic 2 | Client authentication |
| FR7 | Epic 2 | Role-based access control |
| FR8 | Epic 2 | Session persistence |
| FR9 | Epic 2 | Logout functionality |
| FR10 | Epic 3 | Admin creates client profiles |
| FR11 | Epic 3 | Admin edits client profiles |
| FR12 | Epic 3 | Admin views client list |
| FR13 | Epic 3 | Admin adds dog profiles |
| FR14 | Epic 3 | Admin edits dog profiles |
| FR15 | Epic 3 | Client views own profile |
| FR16 | Epic 3 | Client adds dogs |
| FR17 | Epic 3 | Client edits dogs |
| FR18 | Epic 3 | Client views own dogs |
| FR19 | Epic 4 | Admin creates bookings (3 types) |
| FR20 | Epic 4 | Admin views booking calendar |
| FR21 | Epic 4 | Admin marks check-in |
| FR22 | Epic 4 | Admin marks check-out |
| FR23 | Epic 4 | Admin approves booking requests |
| FR24 | Epic 4 | Admin rejects booking requests |
| FR25 | Epic 4 | Client submits booking requests |
| FR26 | Epic 4 | Client views booking history |
| FR27 | Epic 4 | Client views upcoming bookings |
| FR28 | Epic 4 | Client sees availability indicators |
| FR29 | Epic 4 | Dashboard with today's bookings |
| FR30 | Epic 5 | Admin generates KATA invoices for date range |
| FR31 | Epic 5 | Auto-calculate invoice totals |
| FR32 | Epic 5 | KATA tax field population |
| FR33 | Epic 5 | Individual client invoices |
| FR34 | Epic 5 | Bulk invoice generation |
| FR35 | Epic 5 | Mark invoices as paid |
| FR36 | Epic 5 | View pending payments |
| FR37 | Epic 5 | Client views invoices |
| FR38 | Epic 5 | Client sees outstanding balance |
| FR39 | Epic 5 | Client views payment history |
| FR40 | Epic 5 | Track payment status |
| FR41 | Epic 6 | Email on booking approval |
| FR42 | Epic 6 | Email on booking rejection |
| FR43 | Epic 6 | Email on invoice generation |
| FR44 | Epic 6 | Day-before booking reminder |
| FR45 | Epic 2 | System Admin configures pricing |
| FR46 | Epic 2 | Admin modifies pricing |
| FR47 | Epic 2 | System Admin views audit logs |
| FR48 | Epic 1 | Multi-tenant data isolation |
| FR49 | Epic 1 | Hungarian language UI |
| FR50 | Epic 1 | HUF currency display |
| FR51 | Epic 7 | Home screen installation |
| FR52 | Epic 7 | Offline booking calendar |
| FR53 | Epic 7 | Offline client/dog data |
| FR54 | Epic 7 | Offline status indicator |
| FR55 | Epic 7 | Background sync |

## Epic List

### Epic 1: Enable Multi-Tenant Platform for Hungarian Pet Daycare Operations
**Goal:** Enable System Administrators to provision isolated tenant environments with Hungarian localization and automated quality enforcement.

**User Outcome:** System Administrators can set up tenant accounts with data isolation, Hungarian UI, HUF currency, and reliable deployments.

**FRs covered:** FR48, FR49, FR50
**NFRs addressed:** NFR-M1, NFR-M3, NFR-SC4, NFR-C4

---

### Epic 2: Authentication & User Management
**Goal:** Users can register, log in, and maintain secure sessions with role-based access control, enabling Liza to manage her business and Éva to access her client portal.

**User Outcome:**
- Liza can log in as tenant admin and access admin portal
- Éva can register/log in as client and access client portal
- System enforces role-based access (admin vs. client routes)

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR9, FR45, FR46, FR47
**NFRs addressed:** NFR-S2, NFR-S3, NFR-S5

---

### Epic 3: Client & Dog Profile Management
**Goal:** Liza can manage her client roster and their dogs, while Éva can view and manage her own dogs, creating the data foundation for bookings and invoices.

**User Outcome:**
- Liza can add/edit clients and their dogs (admin-managed profiles)
- Éva can view her profile, add/edit her dogs (self-service)
- Liza can see full client list for her tenant

**FRs covered:** FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR17, FR18
**NFRs addressed:** NFR-A1, NFR-P2

---

### Epic 4: Booking Management
**Goal:** Liza can manage daily operations (view calendar, create bookings, check-in/out dogs), while Éva can request and track bookings, enabling the core daycare workflow.

**User Outcome:**
- Liza can create bookings (Daily Daycare, Multi-Day Pension, Multi-Day Pass)
- Liza can view booking calendar with today/week/month views
- Liza can approve/reject client booking requests
- Liza can mark check-in and check-out status
- Éva can submit booking requests and see availability (green/yellow/red dots)
- Éva can view her booking history and upcoming bookings
- Dashboard shows "Today: 8 dogs" with pickup info

**FRs covered:** FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR27, FR28, FR29
**NFRs addressed:** NFR-P2, NFR-A3

---

### Epic 5: Billing & Invoicing
**Goal:** Liza can generate KATA-compliant invoices with one click and track payments, while Éva can view her invoices and balance, delivering the "Weekend Miracle" that transforms 2-hour billing into 15 minutes.

**User Outcome:**
- Liza can generate invoices for date range (the killer feature!)
- Liza can generate individual or bulk invoices
- Liza can mark invoices as paid with payment method
- Liza can see unpaid invoice summary on dashboard
- Éva can view her invoices and outstanding balance
- KATA tax fields are correctly populated

**FRs covered:** FR30, FR31, FR32, FR33, FR34, FR35, FR36, FR37, FR38, FR39, FR40
**NFRs addressed:** NFR-C1, NFR-S5, NFR-P4

---

### Epic 6: Email Notifications
**Goal:** The system automatically sends email notifications for key events (booking approvals, invoices, reminders), reducing manual communication and building trust through proactive updates.

**User Outcome:**
- Éva receives email when booking is approved/rejected
- Éva receives email when invoice is generated
- Éva receives reminder the day before scheduled booking
- Liza doesn't have to manually message clients

**FRs covered:** FR41, FR42, FR43, FR44
**NFRs addressed:** NFR-R3

---

### Epic 7: PWA & Offline Capabilities
**Goal:** Users can install the app to their home screen and access cached data when offline, ensuring Liza can check today's schedule even with poor signal during pickups.

**User Outcome:**
- Liza can install Zenzo to iPhone home screen
- Liza can view cached booking calendar when driving (offline)
- Liza can view cached client/dog data offline
- Clear offline indicator when network unavailable
- Pending actions sync when connection restored

**FRs covered:** FR51, FR52, FR53, FR54, FR55
**NFRs addressed:** NFR-P3, NFR-R3

---

## Epic Summary

| Epic | Title | FRs | Stories | Key Value Delivered |
|------|-------|-----|---------|---------------------|
| 1 | Project Foundation & Infrastructure | 3 | 6 | Development can begin, multi-tenant ready |
| 2 | Authentication & User Management | 12 | 10 | Liza and Éva can log in with proper roles |
| 3 | Client & Dog Profile Management | 9 | 7 | Client roster and dog profiles managed |
| 4 | Booking Management | 11 | 9 | Core daycare workflow operational |
| 5 | Billing & Invoicing | 11 | 9 | Weekend Miracle - one-click invoicing |
| 6 | Email Notifications | 4 | 5 | Automated client communication |
| 7 | PWA & Offline Capabilities | 5 | 6 | Mobile-first offline access |

**Total: 7 Epics, 52 Stories covering 55 Functional Requirements**

---

## Epic 1: Enable Multi-Tenant Platform for Hungarian Pet Daycare Operations

**Goal:** Enable System Administrators to provision isolated tenant environments with Hungarian localization and automated quality enforcement, allowing future epics to deliver booking and billing features to daycare operators.

**User Value:**
- System Administrators can set up new tenant accounts with complete data isolation (FR48)
- Each tenant environment supports Hungarian language UI (FR49) and HUF currency (FR50)
- Automated CI/CD pipeline ensures code quality and reliable deployments
- Multi-tenant architecture foundation enables GDPR-compliant data isolation

**FRs Addressed:** FR48, FR49, FR50

### Story 1.1: Initialize Next.js Project with Core Dependencies

**As a** developer,
**I want** a properly configured Next.js 15 project with TypeScript, Tailwind, and essential tooling,
**So that** I have a solid foundation for building the application.

**Acceptance Criteria:**

**Given** a fresh development environment
**When** the project is initialized using the documented starter command
**Then** the project structure matches the architecture document exactly
**And** TypeScript strict mode is enabled in tsconfig.json
**And** Tailwind CSS is configured with PostCSS
**And** ESLint is configured with Next.js rules
**And** App Router is enabled with src directory structure
**And** Import alias `@/*` is configured

**Given** the initialized project
**When** `npm run dev` is executed
**Then** the application starts without errors on localhost:3000
**And** the default Next.js page loads successfully

**Given** the project dependencies
**When** reviewing package.json
**Then** Prisma, shadcn/ui, Zod, and Vitest are installed
**And** React Hook Form is installed
**And** NextAuth.js v5 (next-auth@beta) is installed

---

### Story 1.2: Configure Multi-Tenant Prisma Database Architecture

**As a** developer,
**I want** Prisma configured with a dynamic client factory for multi-tenant database connections,
**So that** each tenant's data is completely isolated in separate databases.

**Acceptance Criteria:**

**Given** the initialized project
**When** Prisma is configured
**Then** `prisma/schema.prisma` exists with database provider set to PostgreSQL
**And** the schema includes a placeholder model for connection testing

**Given** the Prisma client factory
**When** `getPrismaClient(tenantId)` is called
**Then** it returns a PrismaClient connected to the tenant's specific database
**And** clients are cached to prevent connection pool exhaustion
**And** invalid tenantId throws a descriptive error

**Given** environment configuration
**When** `.env.example` is reviewed
**Then** it documents the tenant database URL pattern
**And** `.env.local` is gitignored

**Given** the tenant connection string resolver
**When** `getTenantConnectionString(tenantId)` is called
**Then** it constructs the correct database URL for the tenant
**And** it handles missing configuration gracefully with clear error messages

---

### Story 1.3: Set Up shadcn/ui Component Library and Base Layout

**As a** developer,
**I want** shadcn/ui initialized with essential components and base layouts,
**So that** I have a consistent, accessible component foundation.

**Acceptance Criteria:**

**Given** the project with Tailwind configured
**When** shadcn/ui is initialized
**Then** `components.json` exists with project-specific configuration
**And** `src/components/ui/` directory is created
**And** Button, Card, Input, Form components are installed

**Given** the shadcn/ui setup
**When** reviewing the installed components
**Then** components follow the barrel export pattern (`index.ts`)
**And** components are accessible (keyboard navigation, ARIA labels)

**Given** the base layout requirements
**When** `src/app/layout.tsx` is implemented
**Then** it includes proper HTML structure with Hungarian lang attribute
**And** it includes meta tags for PWA preparation
**And** global CSS imports Tailwind base styles

---

### Story 1.4: Configure Hungarian Localization and HUF Currency Formatting

**As a** user,
**I want** all UI text displayed in Hungarian and currency in HUF format,
**So that** the application feels native to Hungarian users.

**Acceptance Criteria:**

**Given** the application configuration
**When** `src/lib/config/constants.ts` is created
**Then** it defines `LOCALE = 'hu-HU'` and `CURRENCY = 'HUF'`
**And** exports `MAX_DOGS_PER_DAY` and other business constants

**Given** the formatting utilities
**When** `src/lib/utils.ts` includes formatCurrency function
**Then** `formatCurrency(5000)` returns "5 000 Ft" (Hungarian format)
**And** `formatDate(date)` returns Hungarian date format (YYYY. MM. DD.)
**And** `formatDateTime(date)` includes Hungarian time format

**Given** a component displaying currency
**When** rendering invoice amounts
**Then** all monetary values use the formatCurrency utility
**And** the format is consistent across admin and client portals

**Given** the HTML lang attribute
**When** viewing page source
**Then** `<html lang="hu">` is present

---

### Story 1.5: Set Up GitHub Actions CI/CD Pipeline

**As a** developer,
**I want** automated CI/CD that runs lint, typecheck, and tests on every PR,
**So that** code quality is enforced before deployment.

**Acceptance Criteria:**

**Given** the GitHub repository
**When** `.github/workflows/ci.yml` is created
**Then** it triggers on pull requests to main branch
**And** it triggers on push to main branch

**Given** a PR is opened
**When** the CI workflow runs
**Then** it installs dependencies with `npm ci`
**And** runs `npm run lint` (ESLint)
**And** runs `npm run typecheck` (TypeScript)
**And** runs `npm run test` (Vitest)
**And** the workflow fails if any step fails

**Given** the Vitest configuration
**When** `vitest.config.ts` is created
**Then** it's configured for React Testing Library
**And** includes coverage configuration
**And** a sample test exists and passes

**Given** successful CI
**When** merged to main
**Then** Vercel auto-deploys (configured via Vercel dashboard, not in code)

---

### Story 1.6: Implement API Response Helpers and Error Handling

**As a** developer,
**I want** standardized API response format and error handling utilities,
**So that** all API routes return consistent, typed responses.

**Acceptance Criteria:**

**Given** the API types
**When** `src/types/api.ts` is created
**Then** it defines `ApiResponse<T>` type as documented in architecture
**And** it defines standard error codes (VALIDATION_ERROR, NOT_FOUND, etc.)

**Given** the API helper utilities
**When** `src/lib/api.ts` is created
**Then** it exports `successResponse(data)` function
**And** it exports `errorResponse(code, message, details?)` function
**And** TypeScript enforces correct response structure

**Given** an API route handler
**When** using the helpers
**Then** success returns `{ success: true, data: T }`
**And** error returns `{ success: false, error: { code, message, details? } }`

**Given** a test API route `/api/health`
**When** GET request is made
**Then** it returns `{ success: true, data: { status: "ok", timestamp: "..." } }`
**And** the response follows the ApiResponse type exactly

---

## Epic 2: Authentication & User Management

**Goal:** Users can register, log in, and maintain secure sessions with role-based access control, enabling Liza to manage her business and Éva to access her client portal.

### Story 2.1: Implement User and Tenant Database Schema

**As a** developer,
**I want** the User and Tenant database models created with Prisma,
**So that** authentication and multi-tenancy have proper data structures.

**Acceptance Criteria:**

**Given** the Prisma schema
**When** User model is defined
**Then** it includes id (UUID), email, passwordHash, firstName, lastName, role, tenantId, createdAt, updatedAt
**And** role is an enum: SYSTEM_ADMIN, TENANT_ADMIN, CLIENT
**And** email is unique within the tenant scope
**And** table is mapped to `users` (snake_case)

**Given** the Prisma schema
**When** Tenant model is defined
**Then** it includes id (UUID), name, slug (unique), settings (JSON), createdAt, updatedAt
**And** settings JSON includes taxScheme, currency, language, pricingRules
**And** table is mapped to `tenants`

**Given** the schema is complete
**When** `npx prisma migrate dev` is run
**Then** migrations are created successfully
**And** the database tables are created with correct structure

---

### Story 2.2: Configure NextAuth.js with Credentials Provider

**As a** user,
**I want** to authenticate using email and password,
**So that** I can securely access the application.

**Acceptance Criteria:**

**Given** NextAuth.js configuration
**When** `src/lib/auth.ts` is created
**Then** it configures NextAuth with Credentials provider
**And** it uses JWT strategy for sessions
**And** JWT includes userId, tenantId, role, and email

**Given** the auth configuration
**When** `/api/auth/[...nextauth]/route.ts` is created
**Then** it exports GET and POST handlers from NextAuth

**Given** valid credentials (email + password)
**When** user submits login form
**Then** password is verified using bcrypt comparison
**And** JWT is issued with correct claims
**And** httpOnly cookie is set with the token

**Given** invalid credentials
**When** user submits login form
**Then** authentication fails with UNAUTHORIZED error
**And** no token is issued
**And** generic error message is shown (no email enumeration)

---

### Story 2.3: Create Login Page with Form Validation

**As a** user,
**I want** a login page where I can enter my credentials,
**So that** I can access my portal.

**Acceptance Criteria:**

**Given** the auth route group
**When** `src/app/(auth)/login/page.tsx` is created
**Then** it displays a centered card with login form
**And** form includes email and password fields
**And** form uses React Hook Form with Zod validation

**Given** the login form
**When** user enters invalid email format
**Then** validation error is shown immediately (client-side)
**And** submit button remains enabled

**Given** the login form
**When** user submits valid credentials
**Then** loading state is shown on button
**And** on success, user is redirected to appropriate dashboard
**And** on failure, error message is displayed

**Given** the auth layout
**When** `src/app/(auth)/layout.tsx` is created
**Then** it centers content vertically and horizontally
**And** it has a clean, minimal design
**And** it's accessible (keyboard navigation, focus management)

---

### Story 2.4: Implement Client Registration Flow

**As a** client (Éva),
**I want** to register for an account,
**So that** I can access the client portal to manage my bookings.

**Acceptance Criteria:**

**Given** the registration page
**When** `src/app/(auth)/register/page.tsx` is created
**Then** it displays registration form with firstName, lastName, email, password, confirmPassword
**And** form uses Zod validation schema
**And** password requirements are shown (min 8 chars)

**Given** the registration API
**When** `src/app/api/auth/register/route.ts` is created
**Then** it validates input using shared Zod schema
**And** it hashes password with bcrypt (cost factor 12)
**And** it creates user with CLIENT role
**And** it associates user with the tenant (from subdomain or param)

**Given** valid registration data
**When** user submits registration form
**Then** user account is created in database
**And** user is automatically logged in
**And** user is redirected to client dashboard

**Given** duplicate email
**When** user tries to register
**Then** CONFLICT error is returned
**And** user-friendly message is shown: "Ez az email cím már regisztrálva van"

---

### Story 2.5: Implement Authentication Middleware and Route Protection

**As a** system,
**I want** to protect routes based on authentication status and user role,
**So that** users only access authorized areas.

**Acceptance Criteria:**

**Given** the middleware
**When** `src/middleware.ts` is created
**Then** it intercepts all requests to protected routes
**And** it validates JWT token from cookies
**And** it extracts tenantId and role from token

**Given** unauthenticated request to `/(admin)/*`
**When** middleware runs
**Then** user is redirected to `/login`
**And** original URL is preserved for post-login redirect

**Given** authenticated CLIENT request to `/(admin)/*`
**When** middleware runs
**Then** user is redirected to `/client/dashboard`
**And** FORBIDDEN is not shown (graceful redirect)

**Given** authenticated TENANT_ADMIN request to `/(admin)/*`
**When** middleware runs
**Then** request proceeds normally
**And** tenantId is available in the request context

**Given** authenticated request to `/(client)/*`
**When** middleware runs
**Then** both CLIENT and TENANT_ADMIN roles are allowed
**And** tenantId is validated against the route

---

### Story 2.6: Create Admin and Client Dashboard Shells

**As a** user,
**I want** to land on my appropriate dashboard after login,
**So that** I can see relevant information for my role.

**Acceptance Criteria:**

**Given** admin dashboard
**When** `src/app/(admin)/dashboard/page.tsx` is created
**Then** it displays "Irányítópult" (Dashboard) heading
**And** it shows placeholder for today's overview
**And** it's wrapped in admin layout with sidebar

**Given** admin layout
**When** `src/app/(admin)/layout.tsx` is created
**Then** it includes AdminSidebar component
**And** it includes AdminHeader with user info and logout
**And** it's responsive (sidebar collapses on mobile)

**Given** client dashboard
**When** `src/app/(client)/dashboard/page.tsx` is created
**Then** it displays welcome message with user's first name
**And** it shows placeholder for upcoming bookings
**And** it's wrapped in client layout

**Given** client layout
**When** `src/app/(client)/layout.tsx` is created
**Then** it includes ClientNav component (simpler than admin)
**And** it includes bottom tab navigation on mobile
**And** it shows user profile/logout in header

---

### Story 2.7: Implement Session Persistence and Logout

**As a** user,
**I want** my session to persist across page refreshes and be able to log out,
**So that** I don't have to log in repeatedly and can securely end my session.

**Acceptance Criteria:**

**Given** an authenticated session
**When** user refreshes the page
**Then** session is maintained from JWT cookie
**And** user remains on protected page
**And** no re-authentication is required

**Given** the AuthProvider
**When** `src/providers/AuthProvider.tsx` is created
**Then** it wraps the app with NextAuth SessionProvider
**And** it provides useSession hook access throughout app

**Given** the logout functionality
**When** user clicks logout button
**Then** JWT cookie is cleared
**And** user is redirected to login page
**And** session is terminated server-side

**Given** session timeout (30 min admin, 7 days client)
**When** JWT expires
**Then** user is redirected to login on next request
**And** friendly message explains session expired

---

### Story 2.8: Implement Tenant Settings and Pricing Configuration

**As a** tenant admin (Liza),
**I want** to configure my business settings including pricing,
**So that** the system uses my specific rates and tax scheme.

**Acceptance Criteria:**

**Given** the settings page
**When** `src/app/(admin)/settings/page.tsx` is created
**Then** it displays current tenant settings
**And** it shows pricing for each booking type (Daily, Pension, Pass)
**And** it shows KATA tax scheme configuration

**Given** the settings API
**When** `PATCH /api/settings` is called with valid data
**Then** tenant settings are updated in database
**And** success response confirms the update
**And** audit log entry is created

**Given** pricing configuration
**When** admin updates base prices
**Then** prices are stored in tenant settings JSON
**And** new invoices use updated prices
**And** existing invoices are not affected

**Given** settings form validation
**When** invalid data is submitted (e.g., negative price)
**Then** VALIDATION_ERROR is returned
**And** specific field errors are shown

---

### Story 2.9: Implement System Admin Tenant Management (Bootstrap)

**As a** system admin (Bencu),
**I want** to create tenant accounts and admin users,
**So that** new daycare operators can be onboarded.

**Acceptance Criteria:**

**Given** this is MVP bootstrap
**When** system admin functionality is needed
**Then** it's implemented as protected API routes (not full UI)
**And** accessed via authenticated API calls or seed scripts

**Given** the tenant creation API
**When** `POST /api/admin/tenants` is called
**Then** new tenant record is created
**And** new database is provisioned for tenant
**And** default settings are applied

**Given** the admin user creation API
**When** `POST /api/admin/users` is called with tenantId
**Then** new user with TENANT_ADMIN role is created
**And** password is hashed before storage
**And** user is associated with specified tenant

**Given** the seed script
**When** `npx prisma db seed` is run
**Then** it creates a test tenant "zenzo-liget"
**And** it creates admin user for Liza
**And** it creates sample client user for testing

---

### Story 2.10: Implement Audit Logging for Admin Actions

**As a** system,
**I want** to log admin actions for audit purposes,
**So that** we maintain compliance with KATA 7-year retention requirements.

**Acceptance Criteria:**

**Given** the AuditLog model
**When** added to Prisma schema
**Then** it includes id, visitorId, tenantId, action, entityType, entityId, details (JSON), timestamp
**And** table is mapped to `audit_logs`

**Given** the audit logging utility
**When** `src/lib/audit.ts` is created
**Then** it exports `logAuditEvent(userId, tenantId, action, entityType, entityId, details)` function
**And** it's async and non-blocking (fire-and-forget)

**Given** admin performs settings change
**When** the action completes
**Then** audit log entry is created with action "SETTINGS_UPDATED"
**And** details include before/after values
**And** timestamp is recorded

**Given** the audit log viewer
**When** system admin accesses audit logs
**Then** logs are queryable by date range, user, action type
**And** logs are retained for 7 years (database-level policy)

---

## Epic 3: Client & Dog Profile Management

**Goal:** Liza can manage her client roster and their dogs, while Éva can view and manage her own dogs, creating the data foundation for bookings and invoices.

### Story 3.1: Implement Client and Dog Database Schema

**As a** developer,
**I want** Client and Dog database models created with Prisma,
**So that** client roster and pet information can be stored and managed.

**Acceptance Criteria:**

**Given** the Prisma schema
**When** Client model is defined
**Then** it includes id (UUID), userId (FK to User), firstName, lastName, email, phone, notes, createdAt, updatedAt
**And** userId links to User table for clients who self-register
**And** table is mapped to `clients`

**Given** the Prisma schema
**When** Dog model is defined
**Then** it includes id (UUID), clientId (FK), name, breed, age, specialNotes, createdAt, updatedAt
**And** age is stored as integer (years)
**And** table is mapped to `dogs`

**Given** the relationships
**When** schema is reviewed
**Then** Client has many Dogs (one-to-many)
**And** Dog belongs to one Client
**And** cascade delete is configured appropriately

---

### Story 3.2: Create Admin Client List View

**As a** tenant admin (Liza),
**I want** to view a list of all my clients,
**So that** I can quickly find and manage client information.

**Acceptance Criteria:**

**Given** the clients page
**When** `src/app/(admin)/clients/page.tsx` is created
**Then** it displays a list of all clients for the tenant
**And** each row shows name, email, phone, number of dogs
**And** list is sorted alphabetically by last name

**Given** the clients API
**When** `GET /api/clients` is called
**Then** it returns all clients for the authenticated tenant
**And** includes dog count for each client
**And** response follows ApiResponse format

**Given** a client list with 20+ entries
**When** viewing on mobile
**Then** list scrolls smoothly (60fps target)
**And** touch targets are at least 44px
**And** card-based layout is used instead of table

**Given** search functionality
**When** user types in search box
**Then** list filters by name, email, or phone
**And** filtering happens client-side for performance

---

### Story 3.3: Implement Admin Client Creation

**As a** tenant admin (Liza),
**I want** to add new client profiles,
**So that** I can track all my daycare customers.

**Acceptance Criteria:**

**Given** the new client page
**When** `src/app/(admin)/clients/new/page.tsx` is created
**Then** it displays a form with firstName, lastName, email, phone, notes
**And** form uses React Hook Form with Zod validation
**And** email and phone are optional fields

**Given** the client creation API
**When** `POST /api/clients` is called with valid data
**Then** new client is created in database
**And** client is associated with current tenant
**And** success response includes new client data

**Given** valid client data
**When** admin submits the form
**Then** loading state shows on submit button
**And** on success, redirect to client list with success toast
**And** on error, display field-specific errors

**Given** duplicate email within tenant
**When** creating client
**Then** CONFLICT error is returned
**And** helpful message suggests checking existing clients

---

### Story 3.4: Implement Admin Client Edit and View

**As a** tenant admin (Liza),
**I want** to view and edit client profiles,
**So that** I can keep client information up to date.

**Acceptance Criteria:**

**Given** the client detail page
**When** `src/app/(admin)/clients/[id]/page.tsx` is created
**Then** it displays all client information
**And** it shows list of client's dogs
**And** it has "Szerkesztés" (Edit) button

**Given** the edit mode
**When** admin clicks Edit
**Then** form becomes editable
**And** Cancel and Save buttons appear
**And** original values can be restored with Cancel

**Given** the client update API
**When** `PATCH /api/clients/[id]` is called
**Then** client record is updated
**And** audit log entry is created
**And** updated data is returned

**Given** the client detail API
**When** `GET /api/clients/[id]` is called
**Then** client data with dogs array is returned
**And** 404 is returned for non-existent or wrong-tenant client

---

### Story 3.5: Implement Admin Dog Management

**As a** tenant admin (Liza),
**I want** to add and edit dogs for my clients,
**So that** I can track all dogs in my care.

**Acceptance Criteria:**

**Given** the client detail page
**When** "Kutya hozzáadása" (Add Dog) button is clicked
**Then** a dialog/modal opens with dog form
**And** form includes name, breed, age, specialNotes
**And** specialNotes is a textarea for detailed info

**Given** the dog creation API
**When** `POST /api/dogs` is called with clientId
**Then** new dog is created and associated with client
**And** dog count is updated on client list
**And** success response includes new dog data

**Given** an existing dog
**When** admin clicks on dog card
**Then** edit dialog opens with current values
**And** admin can update or delete the dog

**Given** dog deletion
**When** admin confirms delete
**Then** dog is soft-deleted (or hard-deleted if no bookings)
**And** confirmation dialog prevents accidental deletion
**And** audit log entry is created

---

### Story 3.6: Create Client Self-Service Profile View

**As a** client (Éva),
**I want** to view my profile information,
**So that** I can verify my contact details are correct.

**Acceptance Criteria:**

**Given** the client profile page
**When** `src/app/(client)/profile/page.tsx` is created
**Then** it displays the logged-in client's information
**And** shows firstName, lastName, email, phone
**And** email is read-only (tied to account)

**Given** the profile data
**When** page loads
**Then** data is fetched from `GET /api/me` or session
**And** loading skeleton is shown during fetch
**And** error boundary handles failures gracefully

**Given** profile information
**When** client views their profile
**Then** they see when they joined (member since)
**And** they see quick stats (total bookings, dogs registered)

---

### Story 3.7: Implement Client Self-Service Dog Management

**As a** client (Éva),
**I want** to add and manage my dogs,
**So that** I can book daycare for them.

**Acceptance Criteria:**

**Given** the client dogs page
**When** `src/app/(client)/dogs/page.tsx` is created
**Then** it displays list of client's own dogs
**And** each dog shows name, breed, age, photo placeholder
**And** "Kutya hozzáadása" (Add Dog) button is prominent

**Given** client adding a dog
**When** form is submitted
**Then** dog is created via `POST /api/dogs`
**And** dog is automatically linked to client's account
**And** success toast confirms addition

**Given** client editing a dog
**When** `src/app/(client)/dogs/[id]/page.tsx` is accessed
**Then** client can only edit their own dogs
**And** 403 is returned for other clients' dogs
**And** edit form pre-fills current values

**Given** client dog validation
**When** saving a dog
**Then** name is required (min 2 chars)
**And** breed is optional but suggested
**And** age must be positive integer

---

## Epic 4: Booking Management

**Goal:** Liza can manage daily operations (view calendar, create bookings, check-in/out dogs), while Éva can request and track bookings, enabling the core daycare workflow.

### Story 4.1: Implement Booking Database Schema

**As a** developer,
**I want** the Booking database model created with proper relationships,
**So that** all booking types can be tracked with their statuses.

**Acceptance Criteria:**

**Given** the Prisma schema
**When** Booking model is defined
**Then** it includes id (UUID), dogId (FK), clientId (FK), type (enum), status (enum), startDate, endDate, notes, createdAt, updatedAt
**And** type is enum: DAILY_DAYCARE, MULTI_DAY_PENSION, MULTI_DAY_PASS
**And** status is enum: PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, REJECTED
**And** table is mapped to `bookings`

**Given** the relationships
**When** schema is reviewed
**Then** Booking belongs to Dog (many-to-one)
**And** Booking belongs to Client (many-to-one)
**And** indexes exist on startDate, endDate, status for query performance

**Given** multi-day bookings
**When** storing pension or pass bookings
**Then** startDate and endDate define the date range
**And** for daily bookings, startDate equals endDate

---

### Story 4.2: Create Admin Booking Calendar View

**As a** tenant admin (Liza),
**I want** to view all bookings in a calendar format,
**So that** I can see my schedule at a glance.

**Acceptance Criteria:**

**Given** the bookings calendar page
**When** `src/app/(admin)/bookings/page.tsx` is created
**Then** it displays a calendar with booking entries
**And** calendar supports month, week, and day views
**And** default view is week view

**Given** the calendar component
**When** viewing bookings
**Then** each booking shows dog name and status color
**And** clicking a booking opens detail view
**And** calendar scrolls smoothly at 60fps on mobile

**Given** the bookings API
**When** `GET /api/bookings?startDate=X&endDate=Y` is called
**Then** it returns bookings within the date range
**And** includes dog and client info
**And** response is optimized for calendar rendering

**Given** calendar navigation
**When** user switches views or dates
**Then** React Query handles data fetching
**And** optimistic UI updates for smooth transitions

---

### Story 4.3: Implement Admin Booking Creation

**As a** tenant admin (Liza),
**I want** to manually create bookings for any client,
**So that** I can record phone/Messenger bookings in the system.

**Acceptance Criteria:**

**Given** the new booking flow
**When** admin clicks "Új foglalás" (New Booking)
**Then** a form/wizard opens
**And** admin selects client from dropdown
**And** admin selects dog (auto-filtered by client)
**And** admin selects booking type
**And** admin selects date(s)

**Given** booking type selection
**When** DAILY_DAYCARE is selected
**Then** single date picker is shown
**When** MULTI_DAY_PENSION or MULTI_DAY_PASS is selected
**Then** date range picker is shown

**Given** the booking creation API
**When** `POST /api/bookings` is called
**Then** booking is created with CONFIRMED status (admin-created)
**And** success response includes booking data
**And** audit log entry is created

**Given** double-booking prevention
**When** creating booking for a dog
**Then** system checks for existing bookings on same dates
**And** CONFLICT error is returned if dog already booked

---

### Story 4.4: Implement Booking Check-In and Check-Out

**As a** tenant admin (Liza),
**I want** to mark dogs as checked-in and checked-out,
**So that** I can track daily attendance.

**Acceptance Criteria:**

**Given** a confirmed booking for today
**When** admin views dashboard or booking detail
**Then** "Bejelentkezés" (Check In) button is visible

**Given** check-in action
**When** admin clicks Check In
**Then** booking status changes to CHECKED_IN
**And** check-in timestamp is recorded
**And** optimistic UI updates immediately

**Given** a checked-in booking
**When** admin views the booking
**Then** "Kijelentkezés" (Check Out) button is visible

**Given** check-out action
**When** admin clicks Check Out
**Then** booking status changes to CHECKED_OUT
**And** check-out timestamp is recorded
**And** booking is considered complete

**Given** the status update API
**When** `PATCH /api/bookings/[id]/status` is called
**Then** status is updated with timestamp
**And** only valid transitions are allowed
**And** audit log entry is created

---

### Story 4.5: Implement Booking Approval Workflow

**As a** tenant admin (Liza),
**I want** to approve or reject client booking requests,
**So that** I can control my schedule.

**Acceptance Criteria:**

**Given** pending booking requests
**When** admin views dashboard
**Then** pending count is shown prominently
**And** "X függőben lévő foglalás" (X pending bookings) is clickable

**Given** the pending bookings list
**When** admin opens pending requests
**Then** list shows client name, dog, dates, booking type
**And** each request has Approve/Reject buttons

**Given** approval action
**When** admin clicks "Jóváhagyás" (Approve)
**Then** booking status changes to CONFIRMED
**And** client notification will be triggered (Epic 6)
**And** booking appears on calendar

**Given** rejection action
**When** admin clicks "Elutasítás" (Reject)
**Then** optional rejection reason modal appears
**And** booking status changes to REJECTED
**And** client notification will be triggered (Epic 6)

---

### Story 4.6: Create Client Booking Request Flow

**As a** client (Éva),
**I want** to request bookings through a simple 4-tap flow,
**So that** I can book daycare at 10pm without waiting for responses.

**Acceptance Criteria:**

**Given** the client booking page
**When** `src/app/(client)/bookings/new/page.tsx` is created
**Then** it shows a Wolt-inspired minimal flow
**And** Step 1: Calendar with availability indicators
**And** Step 2: Select dog (pre-selected if only one)
**And** Step 3: Select booking type
**And** Step 4: Confirm and submit

**Given** the availability calendar
**When** client views dates
**Then** green dot = available (capacity remaining)
**And** yellow dot = limited (1-2 spots)
**And** red dot = fully booked
**And** past dates are grayed out

**Given** booking submission
**When** client confirms the request
**Then** booking is created with PENDING status
**And** instant confirmation: "Foglalási kérelmed elküldtük!"
**And** optimistic UI shows pending booking immediately

**Given** the client booking API
**When** `POST /api/bookings` is called by client
**Then** booking is created with PENDING status
**And** only client's own dogs can be selected

---

### Story 4.7: Create Client Booking History and Upcoming Views

**As a** client (Éva),
**I want** to view my booking history and upcoming bookings,
**So that** I can track my daycare usage.

**Acceptance Criteria:**

**Given** the client bookings page
**When** `src/app/(client)/bookings/page.tsx` is created
**Then** it shows two sections: Upcoming and History
**And** upcoming shows confirmed and pending bookings
**And** history shows past completed bookings

**Given** upcoming bookings
**When** client views the list
**Then** each booking shows dog, date, status badge
**And** pending bookings show "Függőben" (Pending) in yellow
**And** confirmed bookings show "Jóváhagyva" (Confirmed) in green

**Given** booking history
**When** client views past bookings
**Then** bookings are sorted by date descending
**And** completed bookings show "Teljesítve" (Completed)
**And** cancelled/rejected show appropriate status

**Given** the client bookings API
**When** `GET /api/bookings?mine=true` is called
**Then** only the authenticated client's bookings are returned
**And** includes dog info for each booking

---

### Story 4.8: Implement Availability Calculation

**As a** system,
**I want** to calculate and display availability per day,
**So that** clients see accurate capacity information.

**Acceptance Criteria:**

**Given** tenant configuration
**When** MAX_DOGS_PER_DAY is set (e.g., 10)
**Then** this value is used for capacity calculation

**Given** the availability API
**When** `GET /api/availability?startDate=X&endDate=Y` is called
**Then** it returns availability per date in range
**And** each date shows: { date, confirmed, available, status }
**And** status is 'available', 'limited', or 'full'

**Given** availability calculation
**When** computing for a date
**Then** count confirmed bookings for that date
**And** available = MAX_DOGS_PER_DAY - confirmed
**And** 'limited' when available <= 2, 'full' when available = 0

**Given** the client calendar
**When** displaying availability dots
**Then** color is based on availability status
**And** data is cached and refreshed appropriately

---

### Story 4.9: Enhance Admin Dashboard with Today's Overview

**As a** tenant admin (Liza),
**I want** the dashboard to show today's critical information,
**So that** I can start my day knowing exactly what's happening.

**Acceptance Criteria:**

**Given** the admin dashboard
**When** `src/app/(admin)/dashboard/page.tsx` is enhanced
**Then** hero section shows "Ma: X kutya" (Today: X dogs)
**And** list shows each dog with check-in status
**And** pending booking requests count is visible
**And** week overview shows upcoming 7 days

**Given** today's dog list
**When** viewing the dashboard
**Then** each entry shows dog name, client name, booking type
**And** unchecked dogs have Check In button
**And** checked-in dogs show check-in time

**Given** quick actions
**When** admin uses dashboard
**Then** Check In is one tap
**And** Check Out is one tap
**And** New Booking is accessible from dashboard

**Given** the dashboard API
**When** `GET /api/dashboard` is called
**Then** it returns today's bookings, pending count, week summary
**And** response is optimized for fast loading (<2s)

---

## Epic 5: Billing & Invoicing

**Goal:** Liza can generate KATA-compliant invoices with one click and track payments, while Éva can view her invoices and balance, delivering the "Weekend Miracle" that transforms 2-hour billing into 15 minutes.

### Story 5.1: Implement Invoice Database Schema

**As a** developer,
**I want** Invoice and InvoiceLineItem database models created,
**So that** KATA-compliant invoices can be stored with full audit trail.

**Acceptance Criteria:**

**Given** the Prisma schema
**When** Invoice model is defined
**Then** it includes id (UUID), clientId (FK), invoiceNumber, issueDate, dueDate, totalAmount, status, taxScheme, notes, createdAt, updatedAt
**And** status is enum: DRAFT, ISSUED, PAID, CANCELLED
**And** taxScheme stores KATA identifier
**And** table is mapped to `invoices`

**Given** the Prisma schema
**When** InvoiceLineItem model is defined
**Then** it includes id (UUID), invoiceId (FK), description, quantity, unitPrice, totalPrice, bookingId (FK nullable)
**And** bookingId links line items to source bookings
**And** table is mapped to `invoice_line_items`

**Given** the relationships
**When** schema is reviewed
**Then** Invoice has many InvoiceLineItems (one-to-many)
**And** Invoice belongs to Client (many-to-one)
**And** InvoiceLineItem optionally references Booking

---

### Story 5.2: Implement Invoice Number Generation

**As a** system,
**I want** sequential, KATA-compliant invoice numbers generated automatically,
**So that** invoices meet Hungarian tax requirements.

**Acceptance Criteria:**

**Given** the invoice number format
**When** generating a new invoice number
**Then** format follows pattern: `{YEAR}-{SEQUENCE}` (e.g., 2024-0001)
**And** sequence is padded to 4 digits minimum
**And** sequence resets annually on January 1st

**Given** concurrent invoice creation
**When** multiple invoices are created simultaneously
**Then** atomic database operations ensure no duplicate numbers
**And** sequence is incremented safely using database transactions

**Given** the invoice number utility
**When** `generateInvoiceNumber(tenantId)` is called
**Then** it queries current max sequence for year
**And** returns next sequential number
**And** handles year boundary correctly

**Given** KATA compliance
**When** invoice number is generated
**Then** it's unique within the tenant
**And** sequence has no gaps (cancelled invoices retain their numbers)

---

### Story 5.3: Implement Invoice Calculation Logic

**As a** system,
**I want** invoice totals automatically calculated from bookings,
**So that** Liza doesn't have to manually calculate amounts.

**Acceptance Criteria:**

**Given** the invoice calculation service
**When** `calculateInvoiceForClient(clientId, startDate, endDate)` is called
**Then** it fetches all uninvoiced CHECKED_OUT bookings in date range
**And** it applies pricing rules from tenant settings
**And** returns line items and total

**Given** pricing rules
**When** calculating line items
**Then** DAILY_DAYCARE uses daily rate
**And** MULTI_DAY_PENSION uses per-night rate × nights
**And** MULTI_DAY_PASS uses pass rate
**And** rates come from tenant settings (FR45, FR46)

**Given** the calculation result
**When** previewing an invoice
**Then** each line item shows: date(s), dog name, booking type, quantity, unit price, total
**And** grand total sums all line items
**And** currency is HUF with proper formatting

**Given** no billable bookings
**When** calculating for a client
**Then** empty result is returned
**And** client is skipped in bulk invoice generation

---

### Story 5.4: Create Invoice Generation Wizard (Weekend Miracle)

**As a** tenant admin (Liza),
**I want** a one-click invoice generation wizard for date ranges,
**So that** my weekend billing takes 15 minutes instead of 2 hours.

**Acceptance Criteria:**

**Given** the invoice wizard page
**When** `src/app/(admin)/invoices/generate/page.tsx` is created
**Then** Step 1: Select date range (default: last month)
**And** Step 2: Preview all clients with billable amounts
**And** Step 3: Confirm and generate invoices

**Given** the date range selection
**When** admin selects a period
**Then** quick presets are available: "Elmúlt hónap", "Elmúlt hét", "Egyéni"
**And** custom date picker for precise range
**And** preview updates automatically on range change

**Given** the preview step
**When** admin reviews clients
**Then** each client shows: name, booking count, total amount
**And** clients with no billable bookings are hidden
**And** admin can deselect specific clients
**And** grand total of all selected clients is shown

**Given** the generation step
**When** admin clicks "Számlák generálása" (Generate Invoices)
**Then** confirmation dialog shows count and total
**And** progress indicator during generation
**And** all invoices created with ISSUED status
**And** success summary shows generated count

**Given** generation completion
**When** invoices are created
**Then** bookings are marked as invoiced (prevent double-billing)
**And** audit log entries created for each invoice
**And** redirect to invoice list with success message

---

### Story 5.5: Implement Individual Invoice Generation

**As a** tenant admin (Liza),
**I want** to generate an invoice for a specific client,
**So that** I can handle one-off billing situations.

**Acceptance Criteria:**

**Given** the client detail page
**When** admin views a client with uninvoiced bookings
**Then** "Számla készítése" (Generate Invoice) button is visible
**And** shows count of uninvoiced bookings

**Given** individual invoice creation
**When** admin clicks Generate Invoice
**Then** preview shows all uninvoiced bookings for client
**And** admin can select date range to limit scope
**And** preview shows line items and total

**Given** the invoice creation API
**When** `POST /api/invoices` is called
**Then** invoice is created with line items
**And** sequential invoice number is assigned
**And** KATA tax fields are populated
**And** associated bookings are marked as invoiced

**Given** invoice customization
**When** creating individual invoice
**Then** admin can add notes to invoice
**And** admin can adjust due date (default: 8 days)

---

### Story 5.6: Create Invoice List and Detail Views

**As a** tenant admin (Liza),
**I want** to view all invoices and their details,
**So that** I can manage billing and track payments.

**Acceptance Criteria:**

**Given** the invoices list page
**When** `src/app/(admin)/invoices/page.tsx` is created
**Then** it displays all invoices sorted by issue date (newest first)
**And** each row shows: invoice number, client, issue date, total, status
**And** status badges use color coding (green=paid, yellow=pending, red=overdue)

**Given** invoice filtering
**When** admin uses filters
**Then** can filter by status (All, Unpaid, Paid)
**And** can filter by date range
**And** can search by client name or invoice number

**Given** the invoice detail page
**When** `src/app/(admin)/invoices/[id]/page.tsx` is created
**Then** it shows full invoice with all line items
**And** KATA tax scheme identifier is displayed
**And** client billing details are shown
**And** "Fizetve jelölés" (Mark as Paid) button if unpaid

**Given** the invoices API
**When** `GET /api/invoices` is called
**Then** returns invoices for tenant with summary data
**And** supports pagination for large datasets
**And** includes client name in response

---

### Story 5.7: Implement Payment Tracking

**As a** tenant admin (Liza),
**I want** to mark invoices as paid and track payment history,
**So that** I know who has outstanding balances.

**Acceptance Criteria:**

**Given** the payment recording
**When** admin marks invoice as paid
**Then** modal requests payment method (Cash, Transfer, Card)
**And** requests payment date (default: today)
**And** optional payment reference field

**Given** the payment API
**When** `POST /api/invoices/[id]/payment` is called
**Then** invoice status changes to PAID
**And** payment details stored (method, date, reference)
**And** audit log entry created

**Given** pending payments view
**When** admin views unpaid invoices
**Then** list shows overdue indicators (past due date)
**And** total outstanding amount is displayed
**And** can be accessed from dashboard quick stats

**Given** the dashboard unpaid summary
**When** viewing admin dashboard
**Then** "Kifizetetlen: X Ft" (Unpaid: X Ft) is prominently shown
**And** clicking navigates to filtered unpaid invoice list

---

### Story 5.8: Create Client Invoice Portal

**As a** client (Éva),
**I want** to view my invoices and outstanding balance,
**So that** I know what I owe and can track my payments.

**Acceptance Criteria:**

**Given** the client invoices page
**When** `src/app/(client)/invoices/page.tsx` is created
**Then** it displays the client's invoices
**And** shows outstanding balance prominently at top
**And** list shows invoice number, date, total, status

**Given** client invoice detail
**When** `src/app/(client)/invoices/[id]/page.tsx` is created
**Then** shows full invoice with line items
**And** shows payment status and history
**And** only client's own invoices accessible (403 otherwise)

**Given** the client balance API
**When** `GET /api/me/balance` is called
**Then** returns total outstanding amount
**And** includes count of unpaid invoices
**And** response is fast (<1s)

**Given** payment history
**When** client views an invoice
**Then** paid invoices show payment date and method
**And** unpaid invoices show "Kifizetésre vár" (Awaiting payment)

---

### Story 5.9: Implement KATA Compliance Validation

**As a** system,
**I want** to validate invoices meet KATA requirements,
**So that** Liza stays compliant with Hungarian tax law.

**Acceptance Criteria:**

**Given** invoice generation
**When** creating any invoice
**Then** KATA tax scheme identifier is populated from tenant settings
**And** invoice number follows sequential format
**And** issue date and due date are recorded
**And** all amounts are in HUF

**Given** invoice data
**When** invoice is created
**Then** issuer details come from tenant settings (business name, tax ID)
**And** client details include name and address if available
**And** line items have clear descriptions

**Given** the KATA validation utility
**When** `validateKataCompliance(invoice)` is called
**Then** it checks all required fields are present
**And** returns validation result with any issues
**And** invoices cannot be ISSUED if validation fails

**Given** audit trail
**When** invoice is generated or modified
**Then** full audit log entry with all details
**And** 7-year retention policy documented
**And** cancelled invoices retain number but show cancelled status

---

## Epic 6: Email Notifications

**Goal:** The system automatically sends email notifications for key events (booking approvals, invoices, reminders), reducing manual communication and building trust through proactive updates.

### Story 6.1: Configure Email Service Infrastructure

**As a** developer,
**I want** Resend email service configured with React Email templates,
**So that** the system can send transactional emails.

**Acceptance Criteria:**

**Given** the email infrastructure
**When** `src/lib/email.ts` is created
**Then** it configures Resend client with API key from env
**And** exports `sendEmail(to, subject, template, data)` function
**And** handles errors gracefully with logging

**Given** environment configuration
**When** `.env.example` is updated
**Then** it includes RESEND_API_KEY placeholder
**And** includes FROM_EMAIL configuration

**Given** the React Email setup
**When** `src/emails/` directory is created
**Then** base layout template is established
**And** templates use Zenzo branding (colors, logo placeholder)
**And** templates are mobile-responsive

**Given** email sending
**When** `sendEmail` is called in development
**Then** emails can be sent to test addresses
**And** Resend dashboard shows delivery status

---

### Story 6.2: Implement Booking Approval Email

**As a** client (Éva),
**I want** to receive an email when my booking request is approved,
**So that** I have confirmation without checking the app.

**Acceptance Criteria:**

**Given** the approval email template
**When** `src/emails/BookingApproved.tsx` is created
**Then** it includes greeting with client's first name
**And** shows dog name, booking dates, booking type
**And** includes "Foglalásod jóváhagyva!" (Your booking is approved!) heading
**And** has call-to-action to view in app

**Given** booking approval
**When** admin approves a booking request
**Then** email is sent to client's email address
**And** email uses the BookingApproved template
**And** all booking details are populated correctly

**Given** the email trigger
**When** booking status changes to CONFIRMED (from PENDING)
**Then** `sendBookingApprovalEmail(booking, client)` is called
**And** email sending is async (non-blocking)
**And** failures are logged but don't block the approval

**Given** email content
**When** client receives the email
**Then** subject is "Foglalásod jóváhagyva - Zenzo Liget"
**And** email renders correctly on mobile

---

### Story 6.3: Implement Booking Rejection Email

**As a** client (Éva),
**I want** to receive an email when my booking request is rejected,
**So that** I know I need to make alternative arrangements.

**Acceptance Criteria:**

**Given** the rejection email template
**When** `src/emails/BookingRejected.tsx` is created
**Then** it includes empathetic greeting
**And** shows the requested dates and dog name
**And** includes rejection reason if provided by admin
**And** suggests contacting daycare for alternatives

**Given** booking rejection
**When** admin rejects a booking request
**Then** email is sent to client's email address
**And** rejection reason is included if provided
**And** email uses professional, non-accusatory tone

**Given** the email trigger
**When** booking status changes to REJECTED
**Then** `sendBookingRejectionEmail(booking, client, reason?)` is called
**And** handles optional rejection reason gracefully

**Given** email content
**When** client receives the email
**Then** subject is "Foglalási kérelem - Zenzo Liget"
**And** message is helpful and suggests next steps

---

### Story 6.4: Implement Invoice Generated Email

**As a** client (Éva),
**I want** to receive an email when a new invoice is generated,
**So that** I know I have a payment due.

**Acceptance Criteria:**

**Given** the invoice email template
**When** `src/emails/InvoiceGenerated.tsx` is created
**Then** it includes invoice number and issue date
**And** shows total amount in HUF format
**And** shows due date prominently
**And** includes link to view invoice in client portal

**Given** invoice generation
**When** admin generates an invoice for a client
**Then** email is sent to client's email address
**And** both individual and bulk invoices trigger emails

**Given** bulk invoice generation
**When** multiple invoices are generated via wizard
**Then** each client receives their own email
**And** emails are sent in batch (not blocking UI)
**And** failed sends are logged for retry

**Given** email content
**When** client receives the email
**Then** subject is "Új számla - {invoice_number} - Zenzo Liget"
**And** amount and due date are clearly visible

---

### Story 6.5: Implement Day-Before Booking Reminder

**As a** client (Éva),
**I want** to receive a reminder the day before my booking,
**So that** I don't forget to bring my dog.

**Acceptance Criteria:**

**Given** the reminder email template
**When** `src/emails/BookingReminder.tsx` is created
**Then** it includes friendly reminder message
**And** shows booking date (tomorrow), dog name, booking type
**And** includes any special notes from the booking
**And** shows daycare address/contact info

**Given** the reminder scheduler
**When** `src/lib/jobs/booking-reminders.ts` is created
**Then** it finds confirmed bookings for tomorrow
**And** sends reminder to each client with booking
**And** tracks which reminders have been sent (prevent duplicates)

**Given** the cron job trigger
**When** daily job runs (e.g., 6 PM)
**Then** all next-day bookings are processed
**And** job can be triggered via API route for Vercel Cron
**And** job logs success/failure counts

**Given** multiple bookings
**When** client has multiple dogs booked for same day
**Then** single consolidated email is sent
**And** lists all dogs in the reminder

**Given** email content
**When** client receives the reminder
**Then** subject is "Emlékeztető: Holnapi foglalás - Zenzo Liget"
**And** tone is helpful, not nagging

---

## Epic 7: PWA & Offline Capabilities

**Goal:** Users can install the app to their home screen and access cached data when offline, ensuring Liza can check today's schedule even with poor signal during pickups.

### Story 7.1: Configure PWA Manifest and Icons

**As a** user,
**I want** to install Zenzo on my phone's home screen,
**So that** it feels like a native app.

**Acceptance Criteria:**

**Given** the PWA manifest
**When** `public/manifest.json` is created
**Then** it includes app name "Zenzo Liget"
**And** short_name is "Zenzo"
**And** theme_color matches brand colors
**And** background_color is set for splash screen
**And** display is "standalone"
**And** start_url is "/"

**Given** app icons
**When** icon set is configured
**Then** icons exist at 192x192 and 512x512 sizes
**And** maskable icon variant is included
**And** icons are referenced in manifest

**Given** the HTML head
**When** `src/app/layout.tsx` is updated
**Then** it links to manifest.json
**And** includes apple-touch-icon for iOS
**And** includes theme-color meta tag
**And** includes apple-mobile-web-app-capable meta

**Given** installation prompt
**When** user visits on mobile browser
**Then** browser's native install prompt appears
**And** after install, app launches in standalone mode

---

### Story 7.2: Implement Service Worker with Serwist

**As a** developer,
**I want** a service worker configured for offline caching,
**So that** the app works without network connectivity.

**Acceptance Criteria:**

**Given** the service worker setup
**When** Serwist (or native SW) is configured
**Then** service worker is generated during build
**And** service worker registers on app load
**And** registration is logged in development

**Given** the app shell strategy
**When** caching is configured
**Then** static assets (JS, CSS, images) use cache-first
**And** app shell loads from cache on repeat visits
**And** cache is invalidated on new deployments

**Given** Next.js App Router integration
**When** service worker is built
**Then** it works with App Router's streaming
**And** doesn't interfere with RSC hydration

**Given** cache versioning
**When** new version is deployed
**Then** old caches are cleaned up
**And** users get new version on next visit

---

### Story 7.3: Implement Offline Data Caching for Bookings

**As a** tenant admin (Liza),
**I want** to view today's booking calendar when offline,
**So that** I can check my schedule while driving.

**Acceptance Criteria:**

**Given** the booking data cache
**When** user views booking calendar online
**Then** booking data is cached in IndexedDB
**And** cache includes current week by default
**And** dog and client names are included

**Given** offline access
**When** user opens calendar without network
**Then** cached booking data is displayed
**And** UI clearly indicates "Offline mód"
**And** data freshness timestamp is shown

**Given** cache invalidation
**When** user comes back online
**Then** cached data is refreshed in background
**And** UI updates if data changed
**And** stale cache is replaced

**Given** React Query integration
**When** `useBookings` hook is used
**Then** it checks cache first
**And** falls back to network if cache miss
**And** optimistically shows cached data while refreshing

---

### Story 7.4: Implement Offline Data Caching for Clients and Dogs

**As a** tenant admin (Liza),
**I want** to view client and dog profiles when offline,
**So that** I can look up information during pickups.

**Acceptance Criteria:**

**Given** the client data cache
**When** user views client list online
**Then** client data is cached in IndexedDB
**And** includes all clients for the tenant
**And** includes associated dogs for each client

**Given** offline client access
**When** user opens clients page without network
**Then** cached client list is displayed
**And** search works on cached data
**And** client detail with dogs is accessible

**Given** the dog data cache
**When** dog profiles are viewed
**Then** dog details are cached
**And** special notes are included
**And** data is linked to client cache

**Given** cache size management
**When** cache grows large
**Then** oldest unused entries are pruned
**And** essential data (today's dogs) is prioritized
**And** cache size stays reasonable for mobile

---

### Story 7.5: Create Offline Status Indicator

**As a** user,
**I want** to clearly see when I'm offline,
**So that** I know my data might not be current.

**Acceptance Criteria:**

**Given** the offline indicator component
**When** `src/components/OfflineIndicator.tsx` is created
**Then** it listens to browser online/offline events
**And** displays non-intrusive banner when offline
**And** banner shows "Nincs internetkapcsolat" (No internet connection)

**Given** online status change
**When** connection is restored
**Then** banner automatically hides
**And** brief "Kapcsolat helyreállt" (Connection restored) toast appears
**And** background sync is triggered

**Given** the layout integration
**When** indicator is added to layouts
**Then** it appears at top of screen (fixed position)
**And** doesn't obscure critical UI elements
**And** is styled consistently with app theme

**Given** accessibility
**When** offline status changes
**Then** screen readers announce the change
**And** visual indicator has sufficient contrast

---

### Story 7.6: Implement Background Sync for Pending Actions

**As a** user,
**I want** my actions to sync when I come back online,
**So that** work done offline isn't lost.

**Acceptance Criteria:**

**Given** the action queue
**When** user performs action while offline
**Then** action is stored in IndexedDB queue
**And** UI shows action as "pending sync"
**And** timestamp is recorded with action

**Given** sync trigger
**When** connection is restored
**Then** queued actions are synced automatically
**And** sync happens in background within 30 seconds
**And** success/failure is logged

**Given** conflict handling
**When** synced action conflicts with server state
**Then** error is shown to user
**And** conflicting action is removed from queue
**And** user can retry or dismiss

**Given** admin actions (check-in/out)
**When** performed offline
**Then** status change is queued
**And** syncs when online
**And** calendar updates to reflect synced status

**Given** client actions (booking request)
**When** performed offline
**Then** booking request is queued
**And** syncs when online
**And** confirmation updates pending to submitted

---

