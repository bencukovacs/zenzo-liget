---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-complete']
inputDocuments:
  - '_bmad-output/planning-artifacts/product-brief-zenzo-liget-2025-12-29.md'
  - '_bmad-output/planning-artifacts/research/technical-dotnet-web-stack-research-2025-12-29.md'
  - '_bmad-output/planning-artifacts/research/market-dog-daycare-management-platforms-research-2025-12-29.md'
  - '_bmad-output/analysis/brainstorming-session-2025-12-28.md'
documentCounts:
  briefCount: 1
  researchCount: 2
  brainstormingCount: 1
  projectDocsCount: 0
workflowType: 'prd'
lastStep: 11
workflowComplete: true
completionDate: '2025-12-29'
---

# Product Requirements Document - zenzo-liget

**Author:** Bencu
**Date:** 2025-12-29

## Executive Summary

**Zenzo** is a booking and billing management platform designed specifically for small pet daycare operators in Hungary. The MVP focuses on solving the core workflow pain: unifying scattered Messenger-based booking management with KATA-compliant invoicing into one simple system.

**The Core Problem:** Small pet daycare operators like Liza manage bookings through messaging apps and handle billing manually on weekends. When invoicing time arrives, she must reconstruct booking history from scattered Messenger threads, manually calculate what each client owes, create KATA-compliant invoices by hand, and track payments in spreadsheets or memory. This fragmented workflow wastes 1-2 hours every weekend and becomes increasingly error-prone as the business grows.

**The Solution:** Zenzo provides a unified web application (PWA) where dog owners book directly through a self-service portal, and operators like Liza generate KATA-compliant invoices with one click based on the system's booking history. No more hunting through Messenger threads—the system already knows who booked what.

**Target Users:**
- **Primary:** Liza - Solo KATA freelancer daycare operator (5-10 dogs/day), not tech-savvy, values simplicity over complexity
- **Secondary:** Éva - Dog owner who wants convenient self-service booking with instant confirmation
- **Future:** Part-time employees (post-MVP scaling phase)

**The "Aha" Moments:**
- **For dog owners:** Booking online at 10pm when Liza isn't available and getting instant confirmation - "This is so much easier than messaging!"
- **For Liza:** The first weekend billing session takes 15 minutes instead of 2 hours - "I can't imagine going back to the old way"

### What Makes This Special

**MVP Differentiators:**
1. **Hungarian-first localization** - KATA tax compliance (unique for pet care platforms), Hungarian language, HUF currency, local payment methods
2. **Small business optimized** - Designed for 5-15 dogs/day solo operators, not enterprise kennels with complex facility management
3. **Booking + Billing unified** - Solves the complete workflow as one integrated system, not separate tools
4. **Friendly, approachable UX** - Intuitive enough for non-tech-savvy users, "not SAP-like"
5. **Affordable for Hungarian market** - Targets price-sensitive small operators where international platforms ($105-155/month USD) are prohibitive

**Strategic Vision (Post-MVP):**
While the MVP focuses on core booking and billing, the platform architecture enables future differentiation through:
- Driver Mode for pickup/delivery logistics (no competitors offer this)
- Real-time tracking like Uber for dog owners
- Flexible multi-day booking models (Daily, Pension, Pass)
- Potential expansion to other service-based small businesses in Hungary

**Success Definition:**
The MVP succeeds when Liza uses Zenzo regularly for billing (primary pain point solved) and at least 30% of her bookings come through the client portal within 6 months, demonstrating that both sides of the market find value in the simplified workflow.

## Project Classification

**Technical Type:** web_app (PWA with offline capabilities)
**Domain:** general (small business pet care - standard requirements)
**Complexity:** low (no heavy regulatory compliance like healthcare/fintech)
**Project Context:** Greenfield - new project

**Classification Rationale:**
- Web application with PWA capabilities for mobile-first experience
- Hungarian language/currency/KATA tax compliance are localization concerns, not high-complexity regulatory requirements
- Multi-tenant architecture is a technical implementation detail for future SaaS scaling, not an MVP product complexity driver
- Standard security, user experience, and performance requirements apply

## Success Criteria

### User Success

**Primary User Success (Liza - Daycare Operator):**

**Adoption Metrics:**
- Liza uses Zenzo for billing at least 2 out of 4 weekends per month
- After 3-month trial period, Liza prefers Zenzo over manual Messenger-based billing
- Liza checks Zenzo dashboard for upcoming bookings instead of scrolling Messenger

**Time Savings Realized:**
- Billing time reduced from 1-2 hours to 15-30 minutes (60%+ reduction)
- Liza reports "Zenzo makes billing faster" after 2 months of use

**Critical Success Moment:**
- Liza says: "I can't imagine going back to the old way" - indicates she's crossed the adoption threshold and sees clear value

**Acceptable Partial Success:**
- Even if Liza only uses billing features (not full booking management), the project validates that KATA invoicing automation provides real value and the UX is approachable enough for non-tech-savvy users

**Secondary User Success (Dog Owners - Clients):**

**Self-Service Adoption:**
- 30% of bookings come through client portal (vs. Messenger) within 6 months
- At least 3 clients consistently book online
- Zero complaints about booking difficulty

**Convenience Value:**
- Clients find online booking "easier" or "more convenient" than Messenger
- Critical moment: A client books online at 10pm or on weekend when Liza isn't available

**Payment Behavior:**
- Payment cycle reduces from 7-14 days to 3-7 days (faster invoice payment when clients can see balance in portal)

### Business Success

**Phase 1: MVP Validation (Months 1-6)**

**Primary Objectives:**
- Zenzo MVP live in production and accessible via URL
- Liza completes setup, imports 5-10 client profiles
- Liza uses billing feature 4+ times in first 3 months
- Liza is actively using Zenzo for at least one core workflow (billing OR booking)

**Operational Efficiency:**
- Liza handles 15 dogs/day with same admin time as 10 dogs previously (if she chooses to scale)
- Payment tracking errors eliminated
- Invoice-to-payment time reduced 40%+

**Professional Perception:**
- Liza views her business as "more professional" because of Zenzo
- 3-5 new clients acquired through professional booking experience
- 50%+ of clients describe booking experience as "professional"

**Phase 2: Growth Validation (Months 6-12+) - Aspirational**

**Scaling Indicators:**
- Liza scales from 5-10 dogs/day to 10-15 dogs/day (if desired)
- If Liza hires employee, they successfully use Zenzo for operational tasks
- Multi-user capability validated (if needed)

**Market Validation (Speculative):**
- 1-2 other Hungarian pet care operators express interest in using Zenzo
- Willingness to pay ~5,000-10,000 HUF/month (~$15-30 USD) confirmed
- Evidence that Zenzo concept has legs beyond just Liza's operation

### Technical Success

**MVP Deployment:**
- ✅ Deployed to production environment (Vercel + Render or similar)
- ✅ Multi-tenant architecture working (even with single tenant)
- ✅ KATA invoices generate correctly and meet Hungarian tax compliance
- ✅ Dual interface (admin + client) functional
- ✅ No critical bugs blocking core workflows

**Developer/Portfolio Success:**
- ✅ Portfolio-worthy Next.js/TypeScript codebase demonstrating modern full-stack skills
- ✅ Clean, maintainable code following professional development practices
- ✅ Multi-tenant SaaS architecture successfully isolates tenant data
- ✅ CI/CD pipeline operational (GitHub Actions)
- ✅ Portfolio case study written with technical decisions documented

**Performance & Reliability:**
- PWA capabilities functional (installable, offline-capable for viewing cached data)
- Mobile-first responsive design works on phone, tablet, desktop
- Authentication & authorization secure (JWT-based)
- Database backups configured

### Measurable Outcomes

**6-Month Success Benchmark:**

**Minimum Success (Achieved through development):**
- Bencu completes learning objectives, has portfolio-worthy project
- Technical architecture validates multi-tenant SaaS approach
- KATA invoicing demonstrates domain-specific solution capability

**Target Success (Requires Liza adoption):**
- Liza uses Zenzo regularly for billing (primary pain point solved)
- Billing time reduced 60%+ (measurable value creation)
- At least partial booking management adoption (workflow improvement)

**Stretch Success (Requires client adoption + business impact):**
- 30% client portal booking adoption achieved
- Liza's business grows or professionalizes because of Zenzo
- Evidence of broader market opportunity beyond first user

## Product Scope

### MVP - Minimum Viable Product

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

### Growth Features (Post-MVP)

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

### Vision (Future)

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

## User Journeys

### Journey 1: Liza's Weekend Transformation - From Billing Chaos to 15-Minute Miracle

It's Saturday morning, 10:47 AM. Liza sits at her kitchen table with a cup of coffee going cold, her phone in one hand and a notebook in the other. She's been doing this for 47 minutes already - scrolling back through Messenger conversations from the past two weeks, trying to remember who booked what days. "Éva said Max on Tuesday... or was it Thursday? Let me check..." She finds the message buried under 15 other conversations. Mark that down. Move to the next client.

By the time she's reconstructed all the bookings and manually calculated what everyone owes, it's 12:23 PM. Nearly two hours gone. She hasn't even started creating the actual invoices yet. Her sister calls asking if she wants to grab lunch - "Sorry, still doing billing, maybe in an hour?" This happens every weekend.

Three weeks after discovering Zenzo, Saturday morning looks different. Liza opens her laptop at 10:47 AM, logs into the admin portal, and clicks "Generate Invoices for Dec 1-15." The system already knows exactly who booked what - every booking entered through the client portal or manually added by her during the week is right there. She reviews the list: Éva (3 days, €60), András (5 days with multi-day pass, €90), seven more clients. Everything's already calculated, KATA tax fields filled in correctly.

She clicks "Generate All." Twelve invoices create instantly, properly formatted, compliant, ready to send. By 11:02 AM, she's done. Fifteen minutes. She calls her sister back: "Actually, yes - lunch sounds perfect. I'm free!"

The breakthrough comes three months later when Liza realizes she hasn't thought about "billing weekend anxiety" in weeks. She's even started checking the dashboard on her phone during the week - upcoming bookings at a glance, no Messenger scrolling needed. When her friend asks how the business is going, Liza says: "I can't imagine going back to the old way. Zenzo gave me my weekends back."

**This journey reveals requirements for:**
- Dashboard with weekly booking overview
- One-click invoice generation for date ranges
- KATA-compliant invoice templates with auto-filled tax fields
- Manual booking entry (for Messenger bookings she still receives)
- Client & dog profile management
- Payment status tracking
- Email delivery system for invoices

### Journey 2: Éva's Late-Night Booking - Freedom from Messenger Tag

It's Wednesday, 10:37 PM. Éva just realized she needs daycare for Max this Friday - she forgot about an early meeting. She picks up her phone to message Liza on Messenger, then stops. "It's late... she's probably asleep. I'll message tomorrow morning and hope she has space." She sets a phone reminder for 7 AM so she doesn't forget.

Thursday morning at 7:15 AM, she messages: "Hi Liza! Sorry for short notice - can Max come Friday?" Then she waits. Liza's probably already doing pickups. The reply comes at 9:43 AM: "Yes, I have space! See you Friday 8:30-9:00 for pickup." Éva breathes a sigh of relief but thinks "this is stressful - what if she'd been fully booked?"

Two months after Liza starts using Zenzo, Éva gets an email: "You can now book Max's daycare online at Zenzo!" She's skeptical at first - will it actually be easier than just messaging? Wednesday night at 10:37 PM, same situation: she needs Friday. She opens the Zenzo client portal on her phone, logs in, navigates to the calendar.

Friday shows "2 spots available" with a green dot. She selects the date, confirms "Daily Daycare" for Max, sees the price (€20), and clicks "Request Booking." Instant confirmation appears: "Booking request sent to Liza. You'll receive confirmation within 24 hours." She gets a notification the next morning at 8:05 AM: "Your booking for Max on Friday Dec 15 is confirmed!"

The "aha moment" comes three weeks later when she books at 10 PM on a Sunday for Tuesday - and it works perfectly. She tells her colleague at work: "It's so much easier than messaging - I can book whenever I remember, even at midnight." By month six, Éva has booked 12 times through the portal and only messaged Liza twice for special requests.

**This journey reveals requirements for:**
- Client self-registration and login
- Dog profile creation (one client can have multiple dogs)
- Calendar view with availability indicators
- Booking request submission (not instant - Liza approves)
- Email notification system (booking confirmed, reminder day before)
- Mobile-responsive interface (works on phone at night)
- Booking history view for clients

### Journey 3: System Administrator's Setup - Preparing for Scale

Right now, Bencu is the system administrator - but the role is designed for future growth when Zenzo becomes a multi-tenant SaaS platform.

Bencu sits down with Liza for her onboarding session. He logs into the admin portal with his system administrator credentials and creates her tenant account. He navigates to Tenant Configuration and sets up her business profile:
- Business name: "Liza's Dog Daycare"
- Tax scheme: KATA (Hungarian freelancer)
- Currency: HUF
- Language: Hungarian
- Base pricing: Daily €20, Pension €80/5-day, 10-day pass €180

He creates Liza's admin account, sets her password, and shows her how to access the dashboard. Then he walks through the first client import - adding Éva and Max as the example. "See? Name, phone, email for Éva. Then add Max under her account - breed, age, special notes. Now when Éva logs in, she'll see Max and can book."

The critical moment is when Liza asks: "What if I want to change my prices later?" Bencu shows her the Pricing Configuration page: "You control this anytime - change base prices, adjust multi-day discounts, it all updates automatically." Liza nods, relieved.

Six months later, when a second Hungarian daycare operator (Anna from Szeged) wants to use Zenzo, Bencu repeats the process - but this time Anna has different needs: VAT tax scheme instead of KATA, different pricing (€25/day), English + Hungarian bilingual. Same architecture, different configuration. The multi-tenant foundation works perfectly.

**This journey reveals requirements for:**
- System administrator role with elevated permissions
- Tenant creation and configuration interface
- Business settings management (tax scheme, currency, language, pricing)
- User account creation and role assignment
- Multi-tenant data isolation
- Audit logs for system admin actions
- Future: Self-service tenant onboarding (without Bencu's manual intervention)

### Journey 4: Payment System Integration - The Silent Partner

This isn't a human user, but it's a critical interaction point. When Liza marks a booking as "Paid" in Zenzo, the system needs to handle payment processing gracefully.

**MVP (Manual Payment Tracking):**
Liza receives €60 from Éva via bank transfer. She logs into Zenzo admin, navigates to "Pending Payments," finds Éva's invoice, clicks "Mark as Paid," selects payment method "Bank Transfer," enters received date. The invoice status updates to "Paid," and Liza can now generate the KATA-compliant invoice knowing the payment is tracked.

**Post-MVP (Payment Gateway Integration):**
Future state: Éva clicks "Pay Now" in the client portal, selects "Barion" (Hungarian payment gateway), enters her card details. Zenzo sends the payment request to Barion API, receives confirmation, automatically marks the invoice as paid, generates the KATA invoice, and emails it to Éva. Liza sees the payment notification in her dashboard. Zero manual work.

**The payment system "user" expects:**
- API endpoints for payment initiation and confirmation
- Webhook handling for async payment status updates
- Transaction logging for audit and reconciliation
- Graceful error handling (failed payments, partial payments, refunds)
- Security compliance (PCI DSS for card data handling)

**This journey reveals requirements for:**
- Manual payment tracking (MVP): UI for marking invoices paid with payment method and date
- Payment history per client
- Outstanding balance calculation
- Future: Payment gateway API integration (Stripe, Barion, SimplePay)
- Future: Webhook receivers for payment confirmations
- Future: Partial payment tracking (€30 cash + €20 Revolut = €50 total)

### Journey Requirements Summary

These four journeys reveal the complete capability set needed for Zenzo MVP:

**Core Admin Capabilities (Liza's Journeys):**
- Dashboard with booking overview and quick stats
- Client & dog profile management
- Manual booking entry and management
- Booking approval/rejection workflow
- One-click KATA-compliant invoice generation
- Payment status tracking
- Calendar view with capacity indicators

**Client Self-Service (Éva's Journey):**
- Client registration and authentication
- Dog profile creation
- Self-service booking request submission
- Availability calendar view
- Booking history and upcoming bookings
- Invoice viewing and balance tracking
- Email notifications (confirmations, reminders)

**System Administration (Bencu's Journey):**
- Tenant configuration and management
- User account creation with role assignment
- Pricing and business settings control
- Multi-tenant architecture with data isolation
- Future: Self-service tenant onboarding

**Payment Processing (System Integration):**
- Manual payment tracking (MVP)
- Payment history and reconciliation
- Future: Payment gateway API integration
- Future: Automated payment status updates

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Service Booking + Logistics Platform Combination**

Zenzo combines two platform types that traditionally exist separately in the market:
- **Booking/Scheduling SaaS** (customer-facing portal, appointment management)
- **Logistics/Delivery platforms** (route optimization, driver interfaces, real-time tracking)

Market research confirmed this gap: "What's MISSING: Service Booking + Logistics/Delivery SaaS" - existing pet care platforms (Gingr, PetExec, BusyPaws) focus on facility scheduling without logistics capabilities, while logistics platforms (Route4Me, Onfleet) serve delivery businesses but lack integrated customer booking portals.

**Core Innovation Thesis:**
Service businesses that "come to the customer" (dog daycare with pickup/dropoff, mobile grooming, dog walking, home healthcare, elderly care) need unified systems that handle both customer booking AND operational logistics. Current market forces these businesses to use separate tools or manual processes.

**Architectural Implications:**
- Multi-tenant SaaS foundation supports both facility-based and mobile service operators
- Driver Mode PWA designed from Phase 2+ with offline capabilities for in-vehicle use
- Real-time status tracking infrastructure planned for customer visibility
- Modular design allows businesses to adopt booking-only OR booking + logistics based on operational model

**2. Real-Time Tracking UX Patterns from Ride-Sharing Applied to Pet Care**

Borrowing proven UX patterns from Uber/Lyft and applying them to pet daycare operations:
- Live location tracking during pickup/dropoff runs
- Dynamic ETA updates ("Sister is 3 stops away, approximately 25 minutes")
- Status progression similar to food delivery ("En route" → "Picked up" → "At daycare" → "En route for dropoff" → "Home safe")

**Assumption Challenged:**
Pet owners care deeply about their pets but current platforms offer only basic check-in/check-out notifications. If consumers expect real-time tracking for food delivery, why not for their dog's safety and whereabouts?

**Differentiation:**
No competitors in pet care space offer Uber-style real-time tracking according to market research. This creates emotional value (peace of mind for owners) and operational transparency that builds trust.

### Market Context & Competitive Landscape

**Pet Care Software Market Growth:**
- Global market size: USD 389.7M (2025) → USD 811.4M (2033) at 9.6% CAGR
- 50% of market is cloud-based SaaS solutions
- North America dominates (40% market share) but European markets growing

**Hungarian Market Opportunity:**
- Pet care market: USD 1,172.9M (2023) → USD 1,913.5M (2029) at 8.5% CAGR
- Most affordable dog daycare market globally (£8.39/day average)
- Limited local Hungarian competitors; international platforms lack localization
- 81% of Hungarians view digitalization positively but SME adoption lags EU peers

**Competitive Gap Analysis:**
- **Established platforms** (Kennel Connection 5,000+ customers, MoeGo 10,000+ businesses): Strong facility management, no driver logistics
- **Market gap identified:** "Search revealed no platforms with dedicated driver routing or fleet management"
- **Zenzo's wedge:** Hungarian-first localization + post-MVP logistics differentiation
- **Technical differentiation:** Separate database per tenant (uncommon architecture providing superior data isolation)

**Adjacent Markets Validation:**
- Rover (pet sitting marketplace) expanded to Europe via Gudog acquisition - validates European pet tech growth
- Time To Pet (pet sitting/dog walking) growing but lacks logistics features
- Home healthcare platforms (visiting nurses) have similar logistics needs - potential future vertical expansion

### Validation Approach

**Phase 1: MVP Validation (Months 1-6) - Foundation First**
- **Goal:** Prove booking + billing solves core pain point without logistics complexity
- **Validation metrics:**
  - Liza uses Zenzo regularly for billing (60%+ time savings achieved)
  - 30% client portal adoption for bookings
  - Technical architecture (multi-tenant, KATA compliance) works correctly
- **Risk mitigation:** Build excellent execution of existing concepts before adding innovation

**Phase 2: Logistics Innovation Testing (Months 6-12) - If MVP Succeeds**
- **Goal:** Validate that Driver Mode + route optimization add measurable value
- **Validation metrics:**
  - 15-20% time reduction on Liza's morning/evening pickup/dropoff runs
  - Real-time tracking engagement: >50% of owners check status at least once per booking
  - Liza reports Driver Mode as "valuable" vs "nice to have"
- **Test approach:**
  - Implement route optimization using Google Maps Directions API with optimizeWaypoints
  - Compare: Manual route planning time vs. optimized route time (measure with real-world pickup runs)
  - A/B test real-time tracking with 10-20 client subset (do they actually use it?)
- **Risk mitigation:**
  - GPS tracking has privacy implications (configurable on/off per tenant)
  - Battery drain and technical complexity (fallback: manual status button presses provide 80% value)

**Phase 3: Market Expansion Validation (Year 1-2) - If Logistics Prove Valuable**
- **Goal:** Validate logistics features have broad appeal beyond single user
- **Validation approach:**
  - Recruit 2-3 additional operators in adjacent verticals:
    - Mobile dog grooming (pickup, groom at customer location, dropoff)
    - Dog walking services (multiple pickup points per walk)
    - Home healthcare (visiting nurses with patient route schedules)
  - Measure: Do different verticals find value in same logistics features, or do requirements diverge?
- **Strategic decision point:**
  - If logistics features are universally valuable → Platform expansion justified
  - If only valuable for specific verticals → Focus on those (pivot from "all pet care" to "mobile pet services")
  - If adoption is low → Excellent booking/billing SaaS remains valuable without logistics innovation

**Phase 4: SaaS Platform Validation (Year 2+) - If Market Validates**
- **Goal:** Prove multi-tenant SaaS model with self-service onboarding works at scale
- **Validation metrics:**
  - 10-50 paying tenants (Hungarian daycares)
  - $5k-10k MRR (monthly recurring revenue)
  - <5% churn rate (customers stay because product is valuable)
  - NPS > 50 (customers recommend to peers)
- **Go/no-go criteria:** If Liza + 2-3 pilot tenants find value, proceed to broader market launch

### Risk Mitigation

**Innovation Risk 1: Logistics Features Too Complex for Target Users**
- **Mitigation:** MVP validates core booking/billing with non-tech-savvy user (Liza) before adding logistics
- **Fallback:** If Driver Mode confuses users, simplify to manual status updates OR make logistics opt-in feature for advanced users only

**Innovation Risk 2: Real-Time Tracking Adds Minimal Value**
- **Mitigation:** Phase 2 A/B testing with engagement metrics shows actual usage before full rollout
- **Fallback:** Simple email notifications at key milestones provide 80% of value with 20% of complexity

**Innovation Risk 3: Multi-Tenant Architecture Overengineered for Single-User MVP**
- **Mitigation:** Architecture is learning objective (portfolio value) even if SaaS pivot never happens
- **Validation:** Separate database per tenant provides data isolation benefits even with one tenant (security, privacy, easier debugging)

**Innovation Risk 4: Market Too Niche for Logistics Platform**
- **Mitigation:** Brownfield testing with Liza proves concept before capital investment in marketing/sales
- **Pivot options:**
  - Focus on Hungarian market only (first-mover advantage, localization barrier)
  - Expand to adjacent verticals (home healthcare, mobile services beyond pet care)
  - Remain excellent booking/billing SaaS without logistics (still valuable)

**Innovation Risk 5: Competitors Copy Logistics Features**
- **Mitigation:** First-mover advantage in Hungarian market with localization barrier (language, KATA compliance)
- **Defensibility:** Multi-tenant architecture with separate databases harder to retrofit than shared-schema competitors
- **Network effects:** Once operators and clients adopt, switching costs increase (data lock-in, learned workflows)

## Web Application Specific Requirements

### Project-Type Overview

Zenzo is architected as a **modern single-page application (SPA)** with Progressive Web App (PWA) capabilities, optimized for mobile-first usage by non-tech-savvy operators and their clients. The technical approach prioritizes simplicity and reliability over cutting-edge complexity, with a clear path to add advanced features post-MVP.

### Technical Architecture Considerations

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

### Responsive Design Requirements

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

### Performance Targets

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

### SEO Strategy

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

### Accessibility Level

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

### Real-Time Features

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

### Implementation Considerations

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

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

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

### MVP Feature Boundaries

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

### Post-MVP Roadmap

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

### Risk Mitigation Strategy

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

### Scope Management Discipline

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

## Functional Requirements

### User & Access Management

- **FR1:** System Administrators can create new tenant accounts with unique database isolation
- **FR2:** System Administrators can configure tenant business settings (tax scheme, currency, language, pricing rules)
- **FR3:** System Administrators can create admin user accounts and assign them to specific tenants
- **FR4:** Admins can authenticate using email and password credentials
- **FR5:** Clients can register for an account associated with a specific tenant
- **FR6:** Clients can authenticate using email and password credentials
- **FR7:** System can enforce role-based access control (System Admin, Tenant Admin, Client roles)
- **FR8:** Users can securely maintain authenticated sessions across page refreshes
- **FR9:** Users can log out and terminate their authenticated session

### Client & Dog Profile Management

- **FR10:** Admins can create new client profiles with contact information (name, email, phone)
- **FR11:** Admins can edit existing client profiles
- **FR12:** Admins can view a list of all clients for their tenant
- **FR13:** Admins can add dog profiles associated with a client (name, breed, age, special notes)
- **FR14:** Admins can edit existing dog profiles
- **FR15:** Clients can view their own profile information
- **FR16:** Clients can add dog profiles to their account
- **FR17:** Clients can edit their dog profiles
- **FR18:** Clients can view all dogs associated with their account

### Booking Management

- **FR19:** Admins can manually create booking entries for three booking types (Daily Daycare, Multi-Day Pension, Multi-Day Pass)
- **FR20:** Admins can view a calendar showing all upcoming bookings
- **FR21:** Admins can mark bookings with check-in status
- **FR22:** Admins can mark bookings with check-out status
- **FR23:** Admins can approve pending booking requests from clients
- **FR24:** Admins can reject pending booking requests from clients
- **FR25:** Clients can submit booking requests for specific dates and booking types
- **FR26:** Clients can view their booking history (past bookings)
- **FR27:** Clients can view their upcoming confirmed bookings
- **FR28:** Clients can see availability indicators on the booking calendar
- **FR29:** System can display dashboard showing today's bookings and upcoming week overview

### Billing & Invoicing

- **FR30:** Admins can generate KATA-compliant invoices for a specific date range
- **FR31:** System can automatically calculate invoice totals based on booking history and pricing rules
- **FR32:** System can populate KATA tax fields correctly (tax scheme identifier, compliant numbering)
- **FR33:** Admins can generate invoices for individual clients
- **FR34:** Admins can generate bulk invoices for all clients with outstanding bookings
- **FR35:** Admins can manually mark invoices as paid with payment method and received date
- **FR36:** Admins can view pending payments (unpaid invoices)
- **FR37:** Clients can view their invoices in the client portal
- **FR38:** Clients can see their current outstanding balance
- **FR39:** Clients can view payment history for their account
- **FR40:** System can track payment status (Unpaid, Paid) for each invoice

### Notifications & Communication

- **FR41:** System can send email notifications when booking requests are approved
- **FR42:** System can send email notifications when booking requests are rejected
- **FR43:** System can send email notifications when new invoices are generated
- **FR44:** System can send email reminder notifications the day before a scheduled booking

### System Administration & Configuration

- **FR45:** System Administrators can configure tenant pricing rules (base prices for each booking type)
- **FR46:** Admins can modify pricing configuration for their tenant
- **FR47:** System Administrators can view audit logs of system admin actions
- **FR48:** System can enforce multi-tenant data isolation (tenant data never exposed to other tenants)
- **FR49:** System can display all UI text in Hungarian language
- **FR50:** System can display all currency values in HUF (Hungarian Forint)

### PWA & Offline Capabilities

- **FR51:** Users can install the application to their mobile device home screen
- **FR52:** Users can view cached booking calendar data when offline (read-only)
- **FR53:** Users can view cached client and dog profile data when offline (read-only)
- **FR54:** System can display offline status indicator when network is unavailable
- **FR55:** System can synchronize pending actions when network connection is restored

## Non-Functional Requirements

### Performance

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

### Security

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

### Scalability

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

### Reliability

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

### Accessibility

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

### Maintainability

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

### Compliance

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


