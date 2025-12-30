# Non-Functional Requirements

## Performance

**NFR-P1: Mobile-First Response Times**
- First Contentful Paint (FCP) < 1.5 seconds on 4G mobile connection
- Time to Interactive (TTI) < 3 seconds on 4G mobile connection
- Largest Contentful Paint (LCP) < 2.5 seconds
- Rationale: Liza uses mobile device during pickups/drop-offs; delays impact operational efficiency

**NFR-P2: Interactive UI Performance**
- Booking calendar scrolling maintains 60fps on mobile devices
- Form submissions provide optimistic UI updates < 100ms
- Navigation transitions < 200ms perceived latency
- Rationale: Smooth interactions critical for non-tech-savvy users to build confidence in system

**NFR-P3: PWA Offline Performance**
- Cached booking calendar and client data accessible < 500ms when offline
- Service worker caching delivers app shell < 1 second on repeat visits
- Background sync queues operations when offline, syncs within 30 seconds of reconnection
- Rationale: Liza may lose connectivity during driving; offline access ensures operational continuity

**NFR-P4: Database Query Performance**
- Invoice generation for 30-day period completes < 5 seconds
- Client/dog profile searches return results < 1 second
- Dashboard data loads < 2 seconds
- Rationale: Weekend billing workflow efficiency depends on fast invoice generation

## Security

**NFR-S1: Data Encryption**
- All data encrypted at rest using AES-256
- All data transmitted over HTTPS/TLS 1.3
- Database backups encrypted with separate encryption keys
- Rationale: Protects sensitive client information, dog health data, and payment records

**NFR-S2: Authentication and Authorization**
- JWT-based authentication with secure httpOnly cookies
- Refresh token rotation every 24 hours
- Role-based access control enforces admin vs. client permissions
- Session timeout after 30 minutes of inactivity (admin), 7 days (client with remember-me)
- Rationale: Prevents unauthorized access to booking and financial data

**NFR-S3: Multi-Tenant Data Isolation**
- Separate database per tenant ensures complete data isolation
- No cross-tenant queries possible at application or database level
- Tenant context validated on every API request
- Rationale: Critical for GDPR compliance and future SaaS trust; separate-DB architecture provides strongest isolation

**NFR-S4: Payment Data Security**
- No credit card data stored in Zenzo databases (PCI-DSS scope reduction)
- Payment gateway integration uses tokenization
- Payment status tracking only (not sensitive card details)
- Rationale: Reduces regulatory compliance burden; MVP uses manual payment tracking, future payment gateway handles PCI compliance

**NFR-S5: Audit Logging**
- All invoice generation, payment status changes, and booking modifications logged with timestamp and user
- Audit logs retained for 7 years (Hungarian tax requirement)
- Admin access to audit trail for reconciliation
- Rationale: Financial audit trail required for KATA tax compliance

## Scalability

**NFR-SC1: Tenant Growth**
- System architecture supports scaling from 1 tenant (MVP) to 50+ tenants (Phase 4 SaaS) without architectural changes
- Tenant provisioning (new database creation) completes < 10 minutes
- Rationale: Multi-tenant SaaS foundation enables future expansion without re-architecture

**NFR-SC2: Per-Tenant Data Growth**
- System handles 100 clients, 150 dogs, 5,000 bookings/year per tenant without performance degradation
- Represents 5+ years of growth for typical small daycare (10-15 dogs/day operation)
- Rationale: Supports Liza's business scaling from 5-10 to 15+ dogs daily

**NFR-SC3: Concurrent Usage**
- MVP supports 5 concurrent users (Liza + 4 dog owners browsing/booking simultaneously)
- Phase 2+ supports 50 concurrent users per tenant (multi-employee operations)
- Rationale: MVP low concurrency acceptable; future scaling for larger daycare operations with employees

**NFR-SC4: Database Scalability**
- PostgreSQL separate-database-per-tenant pattern scales to 100+ tenant databases on single managed instance
- Migration path to Citus/sharding when exceeding 100 tenants
- Rationale: Cost-effective scaling for early SaaS growth; clear path to distributed architecture at scale

## Reliability

**NFR-R1: System Availability**
- MVP target: 95% uptime (acceptable occasional downtime during nights/weekends)
- Phase 4 SaaS target: 99.5% uptime (4.38 hours downtime/year)
- Rationale: MVP serves single user with manual fallback (Messenger); SaaS requires higher reliability for paying customers

**NFR-R2: Data Durability**
- Zero data loss tolerance for committed bookings and invoices
- Automated daily database backups with 30-day retention
- Point-in-time recovery capability within last 7 days
- Rationale: Lost financial data impacts KATA tax compliance and client trust

**NFR-R3: Graceful Degradation**
- PWA offline mode provides read-only access to cached data when backend unavailable
- Error boundaries prevent full application crashes; show user-friendly error messages
- Failed API requests retry 3 times with exponential backoff before showing error
- Rationale: Non-tech-savvy users need clear feedback; offline mode maintains basic functionality during outages

**NFR-R4: Recovery Time Objective (RTO)**
- MVP: System restored within 4 hours of critical failure
- Phase 4 SaaS: System restored within 1 hour of critical failure
- Rationale: MVP failure during business hours handled manually; SaaS requires faster recovery for multiple paying tenants

## Accessibility

**NFR-A1: WCAG 2.1 Level A Compliance**
- Keyboard navigation support for all interactive elements
- Sufficient color contrast for text (4.5:1 minimum ratio)
- Alternative text for meaningful images
- Semantic HTML structure with proper heading hierarchy
- Form labels properly associated with inputs
- Focus indicators visible on all interactive elements
- Rationale: Basic accessibility ensures broader usability; meets minimum legal requirements for EU market

**NFR-A2: Screen Reader Compatibility**
- Basic ARIA labels for interactive components
- Form validation errors announced to assistive technologies
- Logical reading order matches visual layout
- Rationale: Ensures keyboard-only users and future users with disabilities can use core features

**NFR-A3: Responsive Design Accessibility**
- Touch targets minimum 44px for mobile devices
- Text remains readable when zoomed to 200%
- No horizontal scrolling required at standard zoom levels
- Rationale: Mobile-first design must accommodate users with motor impairments and vision limitations

**Note:** WCAG Level AA compliance deferred to post-MVP; Level A sufficient for initial market entry

## Maintainability

**NFR-M1: Code Quality**
- TypeScript strict mode enabled for type safety
- ESLint rules enforced in CI/CD pipeline
- Test coverage > 70% for critical business logic (booking, invoicing, payment tracking)
- Rationale: Solo developer project requires maintainable code; portfolio value depends on demonstrating professional practices

**NFR-M2: Documentation**
- API endpoints documented with OpenAPI/Swagger
- Multi-tenant architecture decisions documented in technical design doc
- KATA tax compliance logic documented with Hungarian regulatory references
- Rationale: Future contributors and portfolio reviewers need clear documentation; KATA compliance requires audit trail

**NFR-M3: Deployment and CI/CD**
- Automated deployment pipeline (GitHub Actions)
- Database migrations automated and reversible
- Zero-downtime deployments for non-breaking changes
- Rationale: Solo developer needs reliable deployment process; reduces risk of manual errors

**NFR-M4: Monitoring and Observability**
- Application error logging with stack traces (Sentry or equivalent)
- Database performance monitoring (slow query detection)
- Basic uptime monitoring with alerts
- Rationale: Solo developer needs to detect and diagnose issues quickly; critical for production support

## Compliance

**NFR-C1: KATA Tax Compliance (Hungary)**
- Generated invoices meet Hungarian KATA freelancer requirements
- Invoice numbering sequential and compliant with tax regulations
- Tax scheme identifier correctly populated on all invoices
- Invoice data retained for 7 years (Hungarian tax law requirement)
- Rationale: Non-compliance exposes Liza to tax penalties; core value proposition is automated KATA invoicing

**NFR-C2: GDPR Compliance (European Union)**
- User consent for data collection documented
- Data minimization principle applied (collect only necessary information)
- Right to access: Clients can export their data
- Right to deletion: Clients can request account deletion (soft delete with audit trail)
- Data processing transparency documented in privacy policy
- Rationale: GDPR mandatory for EU operations; non-compliance carries significant fines (up to 4% revenue)

**NFR-C3: Data Residency**
- Client and dog data stored in EU-region database instances
- Option for Hungarian data residency (future regulatory requirement)
- No data transfer to non-EU regions without explicit consent
- Rationale: GDPR compliance and Hungarian government trends toward local data storage requirements

**NFR-C4: Localization Compliance**
- All financial amounts displayed in HUF currency
- Hungarian language UI for admin and client portals
- Date/time formats follow Hungarian conventions (YYYY-MM-DD)
- Rationale: Cultural fit and usability for Hungarian market; reduces confusion in financial transactions


