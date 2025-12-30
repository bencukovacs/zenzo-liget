# Product Scope

## MVP - Minimum Viable Product

**Core Features (In Scope for MVP):**

**1. Multi-Tenant Architecture Foundation**
- Separate database per tenant (Liza is first tenant, architecture ready for multiple)
- Tenant-specific configuration (business settings, pricing rules, KATA tax details)

**2. Admin Portal (Liza's Interface)**
- Client & Dog Management (add/edit profiles, view lists)
- Booking Management (Daily Daycare, Multi-Day Pension, Multi-Day Pass)
- Calendar view showing upcoming bookings
- Manual booking entry (when clients book via Messenger)
- Accept/reject bookings from client portal
- Mark bookings as checked-in/checked-out
- Configurable pricing system (set base prices, configure discounts)
- Billing & Invoicing (generate KATA-compliant invoices, one-click generation)
- Payment Tracking (manual status: Unpaid → Paid)
- Dashboard (today's pickups/drop-offs, upcoming week, unpaid invoices, quick stats)

**3. Client Portal (Dog Owner Self-Service)**
- Account & Profile (registration, login, add/edit dog profiles)
- Self-Service Booking (view calendar, create booking requests, view history)
- Payment & Invoices (view invoices, see running balance, see payment status)
- Notifications (email for booking approved/rejected, new invoice, day-before reminder)

**4. Localization & Compliance**
- Hungarian language UI
- HUF currency throughout
- KATA tax compliance (invoice format, tax scheme identifier, compliant numbering)

**5. PWA Capabilities**
- Mobile-first responsive design
- Installable on mobile home screen
- Offline-capable (view cached booking data)
- Fast loading with service workers

**6. Technical Foundation**
- Email/password authentication (admin and clients)
- Role-based access (admin vs. client)
- JWT-based secure session management
- Production deployment with CI/CD pipeline

**MVP Success Criteria:**
- ✅ Technical validation: Deployed, working, KATA invoices correct
- ✅ User adoption: Liza uses billing successfully, reports it's faster
- ✅ Client adoption (optional but desired): 1-2 clients book through portal
- ✅ Learning objectives: Next.js/TypeScript full-stack app completed

## Growth Features (Post-MVP)

**Phase 2: Enhanced Operations (Months 6-12) - If MVP Succeeds**

Priority features based on adoption signals:
- Online payment integration (Stripe or Hungarian gateway: SimplePay, Barion)
- Recurring bookings (auto-schedule weekly regulars)
- Photo/update sharing (daily dog photos to clients)
- Advanced booking rules (capacity limits, conflict detection)
- Basic reporting (monthly revenue, client retention metrics)

**Decision Point:**
- If Liza uses MVP regularly for 3+ months → Add payment integration and advanced features
- If clients adopt portal (30%+ booking rate) → Prioritize client-facing enhancements
- If adoption is low → Pivot or learn from why it didn't work

## Vision (Future)

**Phase 3: Driver Mode Differentiator (Year 1-2)**

Unique market advantage if validated:
- Pickup/delivery logistics module
- Route optimization for morning/evening runs
- Real-time tracking for dog owners
- Driver mobile interface (PWA optimized)

**Phase 4: Multi-Tenant SaaS Platform (Year 2+)**

If market validates beyond Liza:
- Tenant onboarding flow (other daycares can sign up)
- SaaS billing (subscription pricing: ~5,000-10,000 HUF/month)
- Multiple tax schemes (beyond KATA, support VAT, etc.)
- Multiple languages/currencies (expand beyond Hungary)
- Modular architecture (tenants pick features they need)
- Portfolio/Marketing module (tenant-branded public pages)

**Phase 5: Platform Ecosystem (Year 3+) - Speculative**

Vision if wildly successful:
- Marketplace integration (pet supply vendors, vets)
- Mobile native apps (iOS/Android beyond PWA)
- API for third-party integrations
- White-label option (larger daycares brand it themselves)
- Multi-service support (grooming, training, not just daycare)

**Scope Management Philosophy:**
- MVP Discipline: Every feature must directly solve booking→billing workflow
- When in doubt, defer to Phase 2
- Protect learning objectives (finish and deploy, don't get stuck)
- Liza's adoption > feature completeness
- Use Liza's feedback to prioritize Phase 2
- Validate with real usage before building speculative features
