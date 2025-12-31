# Project Context Analysis

## Requirements Overview

**Functional Requirements:**

The PRD defines 55 functional requirements across 7 domains:

| Domain | FRs | Key Capabilities |
|--------|-----|------------------|
| User & Access Management | FR1-FR9 | Multi-tenant user creation, role-based auth (System Admin/Tenant Admin/Client), JWT sessions |
| Client & Dog Profile Management | FR10-FR18 | CRUD for clients and dogs, admin and self-service management |
| Booking Management | FR19-FR29 | Three booking types, calendar views, approval workflow, check-in/out tracking |
| Billing & Invoicing | FR30-FR40 | KATA-compliant invoice generation, automatic calculations, payment status tracking |
| Notifications | FR41-FR44 | Email notifications for booking status, invoices, reminders |
| System Administration | FR45-FR50 | Tenant configuration, pricing rules, audit logs, data isolation, Hungarian localization |
| PWA & Offline | FR51-FR55 | Home screen installation, offline data viewing, background sync |

**Non-Functional Requirements:**

Critical NFRs shaping architecture:

- **Performance**: Mobile-first targets (FCP <1.5s, TTI <3s on 4G), invoice generation <5s
- **Security**: AES-256 encryption, HTTPS/TLS 1.3, separate DB per tenant for isolation
- **Scalability**: Architecture supports 1→50+ tenants without re-architecture
- **Reliability**: 95% uptime (MVP), zero data loss, automated daily backups with 30-day retention
- **Accessibility**: WCAG 2.1 Level A compliance
- **Compliance**: KATA tax compliance, GDPR, EU data residency

**Scale & Complexity:**

- Primary domain: Full-stack PWA (Mobile-first web application)
- Complexity level: Medium
- Estimated architectural components: 8-12 major components (Auth, Admin Portal, Client Portal, API, Database, Email Service, PWA Service Worker, Caching Layer)

## Technical Constraints & Dependencies

**From Research & PRD:**

1. **Tech Stack Decision**: Next.js + TypeScript + Prisma + PostgreSQL (validated in technical research)
2. **Hosting Strategy**: Vercel (frontend/API) + Render (PostgreSQL multi-tenant DBs)
3. **Multi-Tenant Pattern**: Separate database per tenant (chosen for strong data isolation, GDPR compliance)
4. **PWA Framework**: next-pwa plugin for service worker generation
5. **Authentication**: NextAuth.js with JWT tokens
6. **Email Service**: Required but not yet specified (Resend, SendGrid, or similar)

**Known Constraints:**

- Hungarian language UI required (single language MVP)
- HUF currency only (MVP)
- KATA tax scheme compliance mandatory
- Mobile-first design (Liza uses phone during pickups)
- Offline capability for cached data viewing
- Solo developer (architecture must be maintainable)

## Cross-Cutting Concerns Identified

| Concern | Affected Components | Architectural Approach |
|---------|--------------------|-----------------------|
| **Multi-Tenant Isolation** | All data access, API routes, auth | Tenant ID in JWT, DB connection per tenant, middleware validation |
| **Authentication/Authorization** | All protected routes, both portals | NextAuth.js, JWT with role claims, route guards |
| **Offline Capability** | Client data viewing, booking calendar | Service worker caching strategy, IndexedDB for structured data |
| **Hungarian Localization** | All UI text, date/time/currency formatting | i18n setup (single locale MVP), Intl APIs |
| **KATA Compliance** | Invoice generation, tax fields, numbering | Invoice template engine, sequential numbering, validation rules |
| **Email Notifications** | Booking workflow, invoicing, reminders | Email service integration, template system, queue for reliability |
| **Error Handling** | All user interactions | Error boundaries, graceful degradation, user-friendly messages |
| **Audit Logging** | Admin actions, invoice generation, payment changes | Structured logging, 7-year retention for tax compliance |
