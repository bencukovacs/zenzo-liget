# Web Application Specific Requirements

## Project-Type Overview

Zenzo is architected as a **modern single-page application (SPA)** with Progressive Web App (PWA) capabilities, optimized for mobile-first usage by non-tech-savvy operators and their clients. The technical approach prioritizes simplicity and reliability over cutting-edge complexity, with a clear path to add advanced features post-MVP.

## Technical Architecture Considerations

**Application Architecture: Single-Page Application (SPA)**
- Client-side routing for smooth navigation between admin and client interfaces
- Modern JavaScript framework approach (Next.js/React)
- State management for real-time UI updates within sessions
- Optimized bundle splitting for fast initial load
- Service worker for PWA offline capabilities

**Browser Support Matrix**
- **Primary targets:** Modern mobile browsers
  - Chrome on Android (latest 2 versions)
  - Safari on iOS (latest 2 versions)
- **Secondary support:** Modern desktop browsers
  - Chrome, Firefox, Safari, Edge (latest versions)
- **Explicitly NOT supported:** Legacy browsers (Internet Explorer, older mobile browsers)
- **Rationale:** Target users (Liza, Éva) use modern smartphones; legacy browser support adds unnecessary complexity for MVP

## Responsive Design Requirements

**Mobile-First Design Philosophy:**
- Primary interface designed for mobile phones (320px-428px width)
- Touch-optimized UI elements (minimum 44px tap targets)
- Simplified navigation for small screens
- Progressive enhancement for tablet (768px+) and desktop (1024px+)

**Key Responsive Breakpoints:**
- Mobile: 320px - 767px (primary design target)
- Tablet: 768px - 1023px (adapted layout)
- Desktop: 1024px+ (enhanced layout with more information density)

**PWA Capabilities:**
- Installable to home screen (mobile and desktop)
- Offline mode: View cached booking data and client information
- Service worker caching strategy for core app shell
- Fast load times with lazy-loaded route chunks
- App manifest for native-like experience

## Performance Targets

**Load Time Requirements:**
- First Contentful Paint (FCP): < 1.5 seconds on 4G mobile
- Time to Interactive (TTI): < 3 seconds on 4G mobile
- Largest Contentful Paint (LCP): < 2.5 seconds

**Runtime Performance:**
- Smooth scrolling (60fps) on booking calendar and client lists
- Form submissions with instant optimistic UI updates
- Navigation transitions < 200ms perceived latency

**Offline Capabilities (MVP):**
- View cached booking calendar (read-only when offline)
- View client and dog profiles (read-only when offline)
- Graceful degradation with "Offline - changes will sync when reconnected" messaging
- Background sync for pending actions when connection restored

## SEO Strategy

**MVP Approach (Minimal SEO):**
- Basic meta tags (title, description) for branding
- Proper HTML semantics for accessibility and crawlability
- Robots.txt allowing indexing but not prioritizing it
- Sitemap.xml with core public pages

**Post-MVP SEO Enhancement (Future Feature):**
- Server-side rendering (SSR) or Static Site Generation (SSG) for public pages
- Tenant-branded public landing pages (e.g., lizas-dog-daycare.zenzo.hu)
- Schema.org markup for local business SEO
- Google My Business integration for operators
- Blog/content marketing capabilities

**Rationale:** MVP users (Liza, Éva) find Zenzo through direct invitation, not Google search. SEO becomes valuable when expanding to multi-tenant SaaS platform where new operators discover Zenzo organically.

## Accessibility Level

**MVP Accessibility Standard: WCAG 2.1 Level A (Basic Compliance)**

**Core Accessibility Requirements:**
- Keyboard navigation support (tab order, enter/space activation)
- Sufficient color contrast for text (4.5:1 minimum ratio)
- Alternative text for meaningful images
- Semantic HTML structure (headings, landmarks, lists)
- Form labels properly associated with inputs
- Focus indicators visible on interactive elements
- No keyboard traps or inaccessible modal dialogs

**Screen Reader Compatibility:**
- Basic ARIA labels for interactive components
- Announced form validation errors
- Status messages communicated to assistive tech
- Logical reading order matches visual layout

**Not Required for MVP (Defer to Post-MVP):**
- WCAG 2.1 Level AA compliance
- Advanced ARIA patterns (complex widgets, live regions)
- Multiple language support beyond Hungarian (i18n impacts accessibility)
- High contrast mode or customizable themes

**Rationale:** Target users (Liza, Éva) are not reliant on assistive technologies, but basic accessibility ensures keyboard-only users and future users with disabilities can use core features. Full WCAG AA compliance becomes priority if expanding to government contracts or enterprise clients with accessibility requirements.

## Real-Time Features

**MVP Approach: Eventual Consistency (Refresh-Based Updates)**

**User Actions Requiring Refresh:**
- New booking requests from clients → Liza refreshes admin dashboard to see
- Booking approval from Liza → Éva refreshes booking history to see confirmation
- Invoice generation → Client refreshes invoice list to see new invoice
- Payment status updates → Refresh to see "Paid" status

**Optimistic UI Updates (Immediate Feedback Without Server Confirmation):**
- Form submissions show instant success state, then validate with server
- Navigation between pages feels instant (SPA routing)
- Inline editing (e.g., mark as paid) updates UI immediately, syncs in background

**No Real-Time WebSocket/Polling for MVP:**
- Avoids architectural complexity (WebSocket infrastructure, state synchronization)
- Reduces server costs (no persistent connections)
- Acceptable for MVP use case (Liza checks dashboard periodically, not continuously monitoring)

**Post-MVP Real-Time Enhancement (Future):**
- WebSocket or Server-Sent Events (SSE) for instant notifications
- Live booking request alerts for Liza (toast notification when Éva books)
- Real-time availability updates when multiple clients browse calendar simultaneously
- Driver Mode real-time tracking (essential for Phase 2 logistics features)

**Rationale:** MVP workflow is async by nature (Liza approves bookings within hours, not seconds). Refresh-based updates reduce technical complexity while validating core product value. Real-time becomes valuable when concurrent usage increases or Driver Mode logistics require live tracking.

## Implementation Considerations

**Technology Stack Alignment:**
- Next.js (App Router) for SPA with SSR capability for future SEO
- React for component-based UI architecture
- TypeScript for type safety and developer experience
- Tailwind CSS for responsive mobile-first design
- PWA capabilities via next-pwa plugin

**Authentication & Session Management:**
- JWT-based authentication (stateless, mobile-friendly)
- Secure httpOnly cookies for token storage
- Refresh token rotation for security
- Role-based access control (admin vs. client)

**API Communication:**
- RESTful API with JSON payloads
- Optimistic UI updates with background synchronization
- Retry logic for failed requests (especially important for offline PWA mode)
- Error boundaries for graceful degradation

**Development & Testing:**
- Mobile-first development (test on actual devices, not just desktop browser dev tools)
- Chrome DevTools Lighthouse audits for performance and PWA compliance
- Responsive design testing across breakpoints
- Accessibility testing with keyboard navigation and screen readers (basic validation)
