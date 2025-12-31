# Story 1.1: Initialize Next.js Project with Core Dependencies

Status: ready-for-dev

## Story

**As a** developer,
**I want** a properly configured Next.js 15 project with TypeScript, Tailwind, and essential tooling,
**So that** I have a solid foundation for building the zenzo-liget pet daycare booking/billing application.

## Acceptance Criteria

### AC1: Project Initialization
**Given** a fresh development environment
**When** the project is initialized using the documented starter command
**Then** the project structure matches the architecture document exactly
**And** TypeScript strict mode is enabled in tsconfig.json
**And** Tailwind CSS is configured with PostCSS
**And** ESLint is configured with Next.js rules
**And** App Router is enabled with src directory structure
**And** Import alias `@/*` is configured

### AC2: Development Server Verification
**Given** the initialized project
**When** `npm run dev` is executed
**Then** the application starts without errors on localhost:3000
**And** the default Next.js page loads successfully

### AC3: Core Dependencies Installation
**Given** the project dependencies
**When** reviewing package.json
**Then** Prisma is installed
**And** shadcn/ui is initialized with Button, Card, Input, Form components
**And** Zod is installed
**And** Vitest + React Testing Library are installed
**And** React Hook Form is installed
**And** NextAuth.js v5 (next-auth@beta) is installed

## Tasks / Subtasks

- [ ] **Task 1: Initialize Next.js Project** (AC: #1)
  - [ ] 1.1: Run `npx create-next-app@latest zenzo-liget --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
  - [ ] 1.2: Verify project structure matches architecture (App Router, src/ directory)
  - [ ] 1.3: Verify TypeScript strict mode is enabled in tsconfig.json
  - [ ] 1.4: Verify `@/*` import alias is configured

- [ ] **Task 2: Install Core Dependencies** (AC: #3)
  - [ ] 2.1: Install Prisma: `npm install prisma @prisma/client`
  - [ ] 2.2: Initialize Prisma: `npx prisma init --datasource-provider postgresql`
  - [ ] 2.3: Install NextAuth.js v5: `npm install next-auth@beta`
  - [ ] 2.4: Install React Hook Form + Zod: `npm install react-hook-form zod @hookform/resolvers`
  - [ ] 2.5: Install Vitest + React Testing Library: `npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom`

- [ ] **Task 3: Initialize shadcn/ui** (AC: #3)
  - [ ] 3.1: Initialize shadcn/ui: `npx shadcn-ui@latest init`
  - [ ] 3.2: Install core components: `npx shadcn-ui@latest add button card input form`
  - [ ] 3.3: Verify components installed in `src/components/ui/`

- [ ] **Task 4: Configure Vitest** (AC: #3)
  - [ ] 4.1: Create `vitest.config.ts` with React Testing Library configuration
  - [ ] 4.2: Create a sample test file to verify setup works
  - [ ] 4.3: Add test scripts to package.json: `"test": "vitest"`, `"test:run": "vitest run"`

- [ ] **Task 5: Verify Development Server** (AC: #2)
  - [ ] 5.1: Run `npm run dev`
  - [ ] 5.2: Verify application starts on localhost:3000
  - [ ] 5.3: Verify no TypeScript or ESLint errors

- [ ] **Task 6: Create Base Configuration Files** (AC: #1)
  - [ ] 6.1: Create `.env.example` with placeholder environment variables
  - [ ] 6.2: Ensure `.env.local` is in .gitignore
  - [ ] 6.3: Set HTML lang attribute to `hu` in root layout

## Dev Notes

### Critical Implementation Details

**INITIALIZATION COMMAND (EXACT):**
```bash
npx create-next-app@latest zenzo-liget --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Post-initialization working directory:** After running the command above, all subsequent commands must be run from within the `zenzo-liget` directory.

### Technology Versions (MUST USE)
- **Next.js**: 15.x (latest)
- **React**: 19.x (included with Next.js 15)
- **TypeScript**: 5.x (strict mode)
- **Tailwind CSS**: 3.4+
- **Node.js**: 18+ (required for Next.js 15)

### shadcn/ui Initialization Options
When prompted during `npx shadcn-ui@latest init`, use these settings:
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**
- tailwind.config.js location: **tailwind.config.ts**
- components.json location: **./components.json**
- Components directory: **src/components**
- Utils directory: **src/lib/utils**
- React Server Components: **Yes**

### Vitest Configuration Template

Create `vitest.config.ts` in project root:

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

Create `src/test/setup.ts`:

```typescript
import '@testing-library/jest-dom';
```

### Sample Test File

Create `src/app/page.test.tsx` to verify Vitest setup:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Page />);
    expect(document.body).toBeDefined();
  });
});
```

### Environment Variables Template

Create `.env.example`:

```env
# Database (PostgreSQL - Render)
DATABASE_URL="postgresql://user:password@host:5432/dbname"

# Tenant Database URL Pattern
# Format: postgresql://user:password@host:5432/{tenant_id}_db
TENANT_DB_URL_TEMPLATE="postgresql://user:password@host:5432/{tenant_id}_db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-generate-with-openssl"

# Email (Resend) - will be configured later
RESEND_API_KEY=""
```

### Root Layout Hungarian Localization

Update `src/app/layout.tsx` to include Hungarian lang attribute:

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### Project Structure Notes

After completing this story, the project should have:

```
zenzo-liget/
├── .env.example
├── .gitignore (includes .env.local)
├── components.json (shadcn/ui config)
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
├── prisma/
│   └── schema.prisma
├── public/
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx (with lang="hu")
    │   ├── page.tsx
    │   └── page.test.tsx (sample test)
    ├── components/
    │   └── ui/
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── form.tsx
    │       └── input.tsx
    ├── lib/
    │   └── utils.ts (shadcn/ui utility)
    └── test/
        └── setup.ts (Vitest setup)
```

### Package.json Scripts (Expected)

After setup, package.json should include:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest",
    "test:run": "vitest run",
    "typecheck": "tsc --noEmit"
  }
}
```

### Anti-Patterns to AVOID

| Avoid | Use Instead |
|-------|-------------|
| `export default function` | `export function ComponentName` |
| Jest configuration | Vitest configuration |
| `jest.mock()` | `vi.mock()` |
| Components outside src/ | All components in `src/components/` |
| Missing `lang="hu"` in HTML | Always set Hungarian locale |

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Starter-Template-Evaluation]
- [Source: _bmad-output/planning-artifacts/architecture.md#Post-Creation-Setup-Required]
- [Source: _bmad-output/project-context.md#Technology-Stack-Versions]
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.1]

### Success Validation

Run these commands to validate successful completion:

```bash
# 1. Verify dev server starts
npm run dev
# Should start on localhost:3000 without errors

# 2. Verify TypeScript compiles
npm run typecheck
# Should complete with no errors

# 3. Verify ESLint passes
npm run lint
# Should complete with no errors (warnings acceptable)

# 4. Verify tests run
npm run test:run
# Should run sample test and pass

# 5. Verify Prisma is configured
npx prisma --version
# Should show Prisma version
```

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### Change Log
| Change | File(s) | Reason |
|--------|---------|--------|

### File List
