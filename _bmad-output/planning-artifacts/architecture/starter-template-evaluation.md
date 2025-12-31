# Starter Template Evaluation

## Primary Technology Domain

Full-stack PWA Web Application (Next.js 15 + TypeScript)

## Starter Options Considered

| Option | Description | Verdict |
|--------|-------------|---------|
| `create-next-app@latest` | Official Next.js CLI, minimal setup | ✅ Selected |
| `create-t3-app` | NextAuth + Prisma + tRPC integrated | Considered - tRPC adds unnecessary complexity |
| supastarter | Production SaaS boilerplate | Rejected - paid, reduces learning value |
| ixartz/SaaS-Boilerplate | Multi-tenant starter | Rejected - too opinionated, steep learning curve |

## Selected Starter: create-next-app with Manual Enhancements

**Rationale for Selection:**

1. **Learning Objective Alignment**: Building auth, multi-tenant, and PWA manually demonstrates portfolio-worthy skills
2. **Flexibility**: REST API routes simpler than tRPC for first full-stack Next.js project
3. **PWA Control**: Next.js 15 native PWA support provides cleaner implementation
4. **Multi-Tenant Custom**: Separate DB per tenant requires custom implementation regardless of starter
5. **Incremental Complexity**: Add libraries as needed rather than starting with everything

**Initialization Command:**

```bash
npx create-next-app@latest zenzo-liget --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

## Architectural Decisions Provided by Starter

**Language & Runtime:**
- TypeScript 5.x with strict mode
- Node.js 18+ runtime
- React 19 with Server Components

**Styling Solution:**
- Tailwind CSS 3.4+ with PostCSS
- CSS Modules support (optional)
- Add shadcn/ui post-creation: `npx shadcn-ui@latest init`

**Build Tooling:**
- Turbopack (dev mode, beta)
- Webpack 5 (production)
- SWC for fast compilation

**Testing Framework:**
- Not included by default
- Recommend adding: Vitest + React Testing Library

**Code Organization:**
- App Router (`/src/app/`)
- Collocated components, layouts, loading states
- Route groups for portal separation: `(admin)`, `(client)`

**Development Experience:**
- Hot Module Replacement
- TypeScript integration
- ESLint with Next.js rules
- Import alias: `@/*`

## Post-Creation Setup Required

| Addition | Package/Tool | Purpose |
|----------|--------------|---------|
| Database ORM | Prisma | Type-safe database access, multi-tenant support |
| Authentication | NextAuth.js v5 | JWT-based auth with role claims |
| UI Components | shadcn/ui | Accessible, customizable components |
| PWA | Serwist or native SW | Service worker, offline caching |
| Email | Resend | Transactional email notifications |
| Validation | Zod | Schema validation for forms and API |
| Testing | Vitest + RTL | Unit and integration testing |

**Note:** Project initialization using this command should be the first implementation story.
