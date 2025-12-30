# Project Scoping & Phased Development

## MVP Strategy & Philosophy

**MVP Approach: Hybrid Problem-Solving + Platform Foundation**

Zenzo's MVP combines two strategic objectives:

1. **Problem-Solving Focus (Primary):** Solve Liza's billing chaos with KATA-compliant invoice automation and booking tracking
2. **Platform Foundation (Secondary):** Build multi-tenant SaaS architecture for portfolio demonstration and future scaling potential

**Strategic Rationale:**
- **User value first:** Even if only Liza uses billing features, the MVP validates real-world problem-solving for non-tech-savvy operators
- **Portfolio value:** Multi-tenant architecture demonstrates full-stack SaaS capabilities (separate database per tenant, role-based access, tenant configuration)
- **Future optionality:** Architecture supports SaaS expansion if Liza + pilot users validate broader market opportunity
- **Learning objectives protected:** Finish and deploy > feature completeness; avoid scope creep that prevents launch

**Resource Requirements:**
- **Team:** Solo developer (Bencu) with PM/design/development responsibilities
- **Timeline:** Flexible development schedule prioritizing completion over timeline estimates
- **Technical skills:** Next.js/TypeScript, PostgreSQL multi-tenancy, JWT authentication, PWA implementation, KATA tax compliance knowledge

## MVP Feature Boundaries

**Core User Journeys Supported in MVP:**

1. ✅ **Liza's Weekend Transformation** - Billing automation workflow (primary success criterion)
2. ✅ **Éva's Late-Night Booking** - Client portal self-service (secondary success criterion)
3. ✅ **System Administrator Setup** - Multi-tenant foundation (portfolio/architecture objective)
4. ⚠️ **Payment System Integration** - Manual tracking only (gateway integration deferred to Phase 2)

**Must-Have Capabilities (Non-Negotiable for MVP):**

**Admin Portal (Liza's Interface):**
- Client & dog profile management
- Manual booking entry (for Messenger bookings)
- Calendar view with upcoming bookings
- One-click KATA-compliant invoice generation
- Manual payment tracking (Unpaid → Paid status)
- Dashboard with today's overview and quick stats

**Client Portal (Éva's Self-Service):**
- Registration and login
- Dog profile creation
- Self-service booking requests (not instant - requires Liza approval)
- Booking history view
- Invoice viewing and balance tracking
- Email notifications (booking approved/rejected, new invoice)

**Technical Foundation:**
- Multi-tenant architecture with separate database per tenant
- Tenant configuration (business settings, pricing, KATA tax details)
- Email/password authentication
- Role-based access control (admin vs. client vs. system admin)
- JWT-based session management
- PWA capabilities (installable, offline-capable for read-only data)
- Production deployment with CI/CD

**Localization & Compliance:**
- Hungarian language UI
- HUF currency throughout
- KATA tax compliance (invoice format, numbering, tax identifiers)

**Explicitly OUT of MVP Scope (Deferred to Phase 2+):**
- ❌ Online payment gateway integration (Stripe/Barion/SimplePay)
- ❌ Recurring bookings automation
- ❌ Photo/update sharing (daily dog photos)
- ❌ Advanced booking rules (capacity limits, conflict detection beyond basic calendar)
- ❌ Real-time WebSocket notifications
- ❌ Reporting and analytics dashboards
- ❌ Driver Mode / logistics features
- ❌ Multi-user roles within tenant (multiple employees)
- ❌ Self-service tenant onboarding (Bencu manually creates tenants in MVP)

## Post-MVP Roadmap

**Phase 2: Enhanced Operations (Months 6-12) - If MVP Succeeds**

**Decision Trigger:** Liza uses MVP regularly for 3+ months AND reports measurable time savings

**Priority Enhancements:**
1. **Online payment integration** - Stripe or Hungarian gateway (SimplePay, Barion) for automated payment flow
2. **Recurring bookings** - Auto-schedule weekly regulars to reduce manual entry
3. **Advanced booking rules** - Capacity limits, conflict detection, waitlist management
4. **Basic reporting** - Monthly revenue, client retention metrics, popular booking types
5. **Photo sharing** - Daily dog photos to client portal (increase engagement)

**Decision Point:**
- If Liza adoption is strong (uses billing 8+ times) → Add payment gateway and automation features
- If client portal adoption is strong (30%+ booking rate) → Prioritize client-facing enhancements
- If adoption is weak → Retrospective to understand why, consider pivot or learnings

**Phase 3: Driver Mode Differentiator (Year 1-2) - Innovation Validation**

**Decision Trigger:** Phase 2 features adopted successfully AND Liza expresses interest in pickup/delivery optimization

**Unique Market Advantage:**
- Pickup/delivery logistics module
- Route optimization using Google Maps Directions API
- Real-time tracking for dog owners (Uber-style UX)
- Driver mobile interface (PWA optimized for in-vehicle use)
- Status progression notifications ("En route" → "Picked up" → "At daycare")

**Validation Approach:**
- A/B test with Liza: Compare manual route planning vs. optimized routes (measure time savings)
- Pilot real-time tracking with 10-20 client subset (measure engagement: do they actually check it?)
- Target: 15-20% time reduction on morning/evening pickup runs to justify development investment

**Phase 4: Multi-Tenant SaaS Platform (Year 2+) - Market Expansion**

**Decision Trigger:** Liza + 2-3 pilot tenants validate product value beyond single user

**Platform Scaling:**
- Self-service tenant onboarding (remove Bencu manual setup requirement)
- SaaS billing and subscription management (~5,000-10,000 HUF/month pricing)
- Multiple tax schemes (beyond KATA: VAT, other Hungarian business structures)
- Multi-language support (expand beyond Hungarian market)
- Tenant-branded public pages (operator marketing/portfolio)

**Market Validation Metrics:**
- 10-50 paying tenants (Hungarian daycares)
- $5k-10k MRR (monthly recurring revenue)
- <5% monthly churn rate
- NPS > 50 (customers recommend to peers)

**Phase 5: Platform Ecosystem (Year 3+) - Speculative Vision**

**Only if Phase 4 succeeds with strong market traction:**
- Marketplace integrations (pet supply vendors, veterinarians)
- Mobile native apps (iOS/Android beyond PWA)
- API for third-party integrations
- White-label option for larger daycares
- Multi-service support (grooming, training, not just daycare)

## Risk Mitigation Strategy

**Technical Risks:**

**Risk: Multi-tenant architecture overengineered for single-user MVP**
- **Mitigation:** Architecture serves dual purpose (portfolio demonstration + future SaaS optionality)
- **Validation:** Separate database per tenant provides better data isolation even with one tenant
- **Fallback:** Excellent portfolio project even if SaaS expansion never happens

**Risk: KATA tax compliance incorrect, invoices not legally valid**
- **Mitigation:** Research Hungarian KATA requirements thoroughly, validate with Liza's accountant before launch
- **Validation:** Liza uses generated invoices for actual tax filing (real-world compliance test)
- **Fallback:** Manual invoice template override if automated generation has issues

**Risk: PWA offline capabilities add complexity without value**
- **Mitigation:** Implement minimal offline capability (read-only cached data) using service workers
- **Validation:** Test with Liza: does offline mode provide actual utility or just technical novelty?
- **Fallback:** Standard web app without PWA if offline features cause issues

**Market Risks:**

**Risk: Liza doesn't adopt Zenzo, prefers existing Messenger workflow**
- **Mitigation:** Solve biggest pain point first (billing automation) to maximize adoption likelihood
- **Validation:** If billing succeeds but booking management fails, validate KATA invoicing value independently
- **Fallback:** Pivot to billing-only SaaS if booking management proves unnecessary
- **Learning value:** Portfolio project completed successfully regardless of adoption outcome

**Risk: Client portal adoption low, users prefer Messenger**
- **Mitigation:** Client portal is MVP feature but not critical success criterion (acceptable partial success: Liza uses billing only)
- **Validation:** 30% client adoption is stretch goal, not minimum success
- **Fallback:** Admin-only interface with excellent billing features still validates core value

**Risk: Hungarian market too niche for SaaS expansion**
- **Mitigation:** MVP validates single-user value before investing in SaaS go-to-market
- **Validation:** Phase 4 expansion only proceeds if Liza + 2-3 pilot tenants validate interest
- **Pivot options:**
  - Focus on Hungarian market only (first-mover advantage with localization barrier)
  - Expand to adjacent verticals (home healthcare, mobile services beyond pet care)
  - Remain excellent booking/billing solution for Liza (successful outcome even without scaling)

**Resource Risks:**

**Risk: Solo developer timeline extends beyond planned completion**
- **Mitigation:** MVP discipline protects against scope creep (every feature must directly solve booking→billing)
- **Validation:** Use "when in doubt, defer to Phase 2" principle for scope decisions
- **Fallback:** Launch with smaller feature set if needed (admin-only interface, no client portal)

**Risk: Technical complexity blocks progress (multi-tenancy, PWA, KATA compliance)**
- **Mitigation:** Break complex features into incremental milestones, validate progressively
- **Validation:** Build simplest version first, add complexity only when needed
- **Fallback:** Simplify architecture if multi-tenancy proves too complex (single-tenant first, refactor later)

**Risk: Liza unavailable for testing/feedback during development**
- **Mitigation:** Portfolio and learning objectives ensure project success independent of Liza's availability
- **Validation:** Self-test with mock data, use domain knowledge to simulate realistic usage
- **Fallback:** Launch with confidence in technical architecture even if real-world user testing is limited

## Scope Management Discipline

**Decision Framework for New Feature Requests:**

1. **Does it directly solve booking→billing workflow?** → If yes, consider for MVP. If no, defer to Phase 2.
2. **Is it essential for Liza's adoption?** → If yes, prioritize. If nice-to-have, defer.
3. **Does it demonstrate portfolio-worthy technical skills?** → If yes and low complexity, include. If high complexity, defer.
4. **Can it be manual initially?** → If yes, start manual (e.g., payment tracking), automate in Phase 2.

**Protective Rules:**
- **No feature bloat:** Every MVP feature must have clear justification from user journeys or technical requirements
- **No premature optimization:** Build for Liza first, optimize for scale in Phase 4 if market validates
- **No speculative integrations:** Payment gateways, SMS notifications, external APIs deferred to Phase 2+ unless critical
- **Launch > perfection:** Ship working MVP with known limitations rather than delay for "one more feature"

**Success Definition:**
- **Minimum success:** Portfolio-worthy project demonstrating full-stack SaaS skills
- **Target success:** Liza uses billing feature regularly, reports time savings
- **Stretch success:** Client portal adoption + evidence of broader market opportunity
