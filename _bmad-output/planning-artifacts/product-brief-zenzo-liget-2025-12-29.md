---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - '_bmad-output/analysis/brainstorming-session-2025-12-28.md'
  - '_bmad-output/planning-artifacts/research/technical-dotnet-web-stack-research-2025-12-29.md'
  - '_bmad-output/planning-artifacts/research/market-dog-daycare-management-platforms-research-2025-12-29.md'
date: 2025-12-29
author: Bencu
---

# Product Brief: zenzo-liget

<!-- Content will be appended sequentially through collaborative workflow steps -->

## Executive Summary

**Zenzo** is a booking and billing management platform designed for small pet daycare operators in Hungary, with your sister's solo operation (5-10 dogs/day) as the first user. The platform addresses the fragmented workflow of managing bookings through Messenger and manually creating invoices by unifying booking management and KATA-compliant billing into one intuitive system.

**The Core Value Proposition**: When billing time arrives, operators no longer need to reconstruct booking history from message threads - the system automatically knows who booked what, generates compliant invoices, and tracks payments.

**Target Market**: Hungarian solo/small pet daycare operators (KATA freelancers) currently managing with manual systems, with long-term vision to expand as a modular SaaS platform for small businesses across markets.

**Strategic Positioning**:
- First mover in underserved Hungarian pet care software market
- KATA-compliant invoicing (unique for pet care platforms)
- Affordable alternative to expensive international platforms ($105-155/month)
- Friendly UX designed for non-technical solo operators
- Configurable architecture enables future market expansion

**Development Philosophy**: Built with modern tech stack (Next.js/TypeScript) for learning and portfolio value, with pragmatic MVP focus on core booking + billing pain points before expanding to portfolio modules, driver logistics, and broader small business features.

---

## Core Vision

### Problem Statement

Small pet daycare operators in Hungary manage bookings through messaging apps (Messenger, WhatsApp) and handle billing manually. When it's time to create invoices, they must reconstruct booking history from scattered message threads, manually calculate what each client owes, create invoices by hand (often as KATA freelancers with specific compliance requirements), and track payments in spreadsheets or memory. This fragmented workflow is manageable at 5-10 dogs daily but becomes increasingly error-prone and time-consuming as the business grows.

### Problem Impact

- **Time waste**: Hours spent reconstructing booking history and creating invoices manually
- **Payment tracking errors**: Forgotten payments, unclear balances, client disputes
- **KATA compliance burden**: Manual invoicing with specific tax scheme requirements adds administrative overhead
- **Scaling bottleneck**: Manual processes prevent growth beyond solo operation
- **Lost revenue**: No systematic follow-up on unpaid invoices
- **Professionalization barrier**: Manual systems make it hard to operate like a "real business"

### Why Existing Solutions Fall Short

Based on market research:
- **International platforms too expensive** ($105-155/month USD) for Hungary's affordable market (£8.39/day average)
- **No Hungarian tax compliance** - Don't support KATA or local invoicing requirements
- **Not designed for small operations** (5-10 dogs) - most target kennels/facilities
- **No localization** - Language barriers, no HUF currency support, no local payment methods
- **Enterprise complexity** - SAP-like interfaces intimidate solo operators
- **No driver/pickup logistics** - Gap in market for operators who do pickups

### Proposed Solution

**Zenzo**: A friendly, intuitive booking + billing management platform designed specifically for small pet daycare operators in Hungary (with configurable language and currency for future expansion).

**Core MVP Features:**
- **Unified Booking Management** - Replace Messenger chaos with simple booking calendar
- **Automatic Billing** - System knows who booked what, generates invoices automatically
- **KATA-Compliant Invoicing** - Built-in support for Hungarian KATA freelancer tax scheme
- **Payment Tracking** - Clear view of who paid, who owes, automated reminders
- **Configurable Localization** - Hungarian/HUF by default, language and currency configurable for future markets

**Post-MVP Vision:**
- Portfolio/intro SPA module for client acquisition
- Driver Mode for pickup/delivery logistics (unique market differentiator)
- Multi-day booking flexibility (Daily, Pension, Pass)
- Modular SaaS platform for other small Hungarian businesses
- Multi-tax scheme support (KATA, standard VAT, etc.)

### Key Differentiators

1. **Hungarian-first (but configurable)** - Default Hungarian/HUF with KATA compliance; architecture supports future localization
2. **Small business optimized** - Designed for 5-15 dogs/day solo operators, not enterprise kennels
3. **Friendly UX** - Approachable, not SAP-rigid; intuitive enough for non-technical users
4. **Booking + Billing integrated** - Solves the core workflow pain as one unified system
5. **KATA freelancer support** - Critical for Hungarian solo entrepreneurs (first platform to target this)
6. **Learning-driven development** - Built with modern stack (Next.js/TypeScript) for portfolio value and future-proof architecture

---

## Target Users

### Primary Users

#### Persona 1: Liza - Solo Daycare Operator (Admin User)

**Role & Context:**
- Solo KATA freelancer running a small dog daycare in Hungary
- Manages 5-10 dogs daily in early-stage business establishment
- Not tech-savvy but capable of learning with intuitive interfaces
- Values simplicity and efficiency over feature complexity

**Daily Workflow:**
- **Morning (7-9am)**: Picks up dogs from client homes using personal vehicle
- **Day (9am-5pm)**: Full day at daycare facility caring for dogs
- **Evening (5-6pm)**: Returns dogs to client homes
- **Weekends**: 1-2 hours on billing/invoicing when she has time

**Current Pain Points:**
- Bookings scattered across Messenger threads with multiple clients
- Weekend billing requires reconstructing booking history manually from messages
- Manual KATA-compliant invoice creation is time-consuming
- Unclear who paid vs. who still owes money
- No systematic way to track recurring clients or multi-day bookings

**Technology Comfort:**
- Uses Facebook/Instagram for business presence
- Manages bookings via Messenger (comfortable but inefficient)
- Not familiar with business management software
- Needs "friendly, not SAP-like" interfaces

**Success Vision:**
When Liza uses Zenzo successfully:
- Billing takes 15 minutes instead of 1-2 hours
- No more hunting through Messenger threads
- KATA invoices generated automatically with one click
- Clear dashboard shows who paid, who owes, upcoming bookings
- She can focus on dogs, not admin work

**"Aha!" Moment:**
The first time she goes to do billing and realizes all the booking data is already there - she just clicks "Generate Invoices" and it's done.

---

#### Persona 2: Éva - Dog Owner/Client (Self-Service Portal User)

**Role & Context:**
- Working professional dog owner in Hungary
- Uses Liza's daycare 2-3 times per week for her Golden Retriever, Max
- Currently books via Messenger and pays via bank transfer
- Wants convenient, reliable care for Max while she's at work

**Current Booking Experience:**
- Messages Liza on Messenger: "Can I bring Max next Tuesday?"
- Waits for confirmation (sometimes delayed if Liza is busy with dogs)
- Shows up on the day, drops Max off
- At end of month, receives invoice via Messenger with bank transfer details
- Manually transfers payment, sometimes forgets exact amount owed

**Pain Points:**
- Messenger booking feels informal, worries about forgotten bookings
- No confirmation unless Liza responds immediately
- Unclear what she owes until invoice arrives
- Bank transfer is extra step, easy to forget or delay
- No visibility into Max's day (would love photos/updates)

**Technology Comfort:**
- Comfortable with mobile apps and online booking
- Uses similar self-service platforms for other services
- Expects modern, convenient digital experiences

**Success Vision:**
When Éva uses Zenzo's client portal:
- Books Max's daycare slots in 30 seconds from her phone
- Gets instant confirmation, can see upcoming bookings
- Receives photos/updates during the day (post-MVP feature)
- Sees running balance, pays online when convenient
- Professional experience makes her trust Liza's business more

**"Aha!" Moment:**
First time she books online at 10pm (when Liza isn't available) and gets instant confirmation for next week - "This is so much easier!"

---

### Secondary Users

#### Persona 3: Future Employee - Daycare Assistant (Growth Phase)

**Role & Context:**
- Part-time employee Liza might hire when scaling beyond 10-15 dogs
- Needs access to daily schedules, client information, pickup/drop-off lists
- May handle check-in/check-out while Liza is driving
- Limited admin privileges, focused on operational tasks

**Access Needs:**
- View daily schedule (who's coming, pickup times, special instructions)
- Mark dogs as checked in/out
- View client contact info for emergencies
- Cannot access billing, financial data, or invoicing

**Technology Comfort:**
- Variable - could be teen/young adult comfortable with apps
- Needs mobile-friendly interface for on-the-go access

**Success Vision:**
- Can operate independently without constant calls to Liza
- Has all info needed to handle pickups/drop-offs professionally
- Liza can delegate operational tasks without losing control

**Note:** This persona is future-focused (post-MVP). MVP should architect for multi-user access but implement only single admin user initially.

---

### User Journey Mapping

#### Liza's Journey (Daycare Operator)

**Discovery & Onboarding:**
1. **Introduction**: Bencu introduces Zenzo to Liza, explaining the billing time-savings
2. **Initial Setup**: Guided setup wizard - adds her business info, KATA tax settings, initial clients
3. **Data Migration**: Imports existing client list and dog profiles (or manually enters key clients)
4. **First Booking**: Creates first booking manually to see how it works

**Core Daily Usage:**
1. **Morning**: Opens Zenzo on phone, checks today's pickup list with addresses
2. **During Day**: Bookings come in via client portal, she gets notifications
3. **Evening**: Marks dogs as picked up/dropped off
4. **Weekend Billing**: Opens Zenzo, clicks "Generate Invoices for [date range]", reviews KATA invoices, sends to clients

**Success Milestone:**
- First full month using Zenzo
- Billing takes 15 minutes instead of 2 hours
- Zero payment tracking errors
- Liza realizes she can't go back to Messenger chaos

**Long-term Integration:**
- Becomes her single source of truth for business operations
- Checks dashboard daily for upcoming week view
- Appreciates how professional it makes her business feel
- Considers expanding because admin burden is manageable

---

#### Éva's Journey (Dog Owner/Client)

**Discovery:**
1. Liza mentions she's using new booking system, sends Éva portal link
2. Éva receives invite email/message with registration link

**Onboarding:**
1. Creates account (email + password)
2. Adds Max's profile (breed, age, any special notes)
3. Sees available booking calendar

**Core Usage:**
1. **Booking**: Opens Zenzo portal, selects date, clicks "Book Daily Daycare", instant confirmation
2. **Reminders**: Gets reminder day before booking
3. **Drop-off/Pickup**: Brings Max at agreed time, Liza marks as checked in
4. **Billing**: Sees running balance in portal, receives invoice notification, pays online

**Success Milestone:**
- First time she books online without texting Liza
- Convenience factor makes her increase booking frequency
- Refers other dog owners to Liza because booking is so easy

**Long-term:**
- Recurring bookings for regular schedule (e.g., every Tuesday/Thursday)
- Trusts the system, reduces communication overhead
- Becomes loyal client because professional experience builds trust

---

## Success Metrics

### Developer Success (Learning & Portfolio Goals)

**Primary Goal: Learning through Building**

Success is achieved through the development process itself, independent of adoption. Key learning objectives:

**Technical Skills Demonstrated:**
- Full-stack Next.js/TypeScript application with modern patterns
- Multi-tenant SaaS architecture (separate database per tenant)
- KATA-compliant invoicing integration (Hungarian tax system)
- Dual interface design (admin portal + client self-service)
- PWA capabilities for mobile-first experience
- Production deployment and CI/CD pipeline

**Portfolio Value Indicators:**
- ✅ **Completed MVP deployed to production** - Demonstrates end-to-end delivery capability
- ✅ **Clean, maintainable codebase** - Shows professional development practices
- ✅ **Real-world problem solving** - Addresses genuine business need (not tutorial project)
- ✅ **Localization & compliance** - Hungarian language/HUF/KATA demonstrates attention to market requirements
- ✅ **Interview showcase piece** - Technical decisions documented, architecture defensible

**Measurement:** These goals are achieved upon MVP deployment, regardless of usage metrics.

---

### User Adoption Success (Liza - Primary User)

**Goal: Liza regularly uses Zenzo for core workflows**

**Success Indicator: Regular Billing Usage**
- **Target:** Liza uses Zenzo for billing at least 2 out of 4 weekends per month
- **Measurement:** Tracks "Generate Invoices" feature usage
- **Success threshold:** After 3-month trial period, Liza prefers Zenzo over manual Messenger-based billing

**Success Indicator: Booking Management Migration**
- **Target:** Liza checks Zenzo dashboard for upcoming bookings instead of scrolling Messenger
- **Measurement:** Daily/weekly active usage of calendar view
- **Success threshold:** 50%+ of bookings tracked in Zenzo within 6 months

**Success Indicator: Time Savings Realized**
- **Target:** Billing time reduced from 1-2 hours to 15-30 minutes
- **Measurement:** Liza's subjective feedback during monthly check-ins
- **Success threshold:** Liza reports "Zenzo makes billing faster" after 2 months

**Critical User Success Moment:**
Liza says: "I can't imagine going back to the old way" - indicates she's crossed the adoption threshold and sees clear value.

**Acceptable Partial Success:**
Even if Liza only uses billing features (not full booking management), the project validates that:
- KATA invoicing automation provides real value
- The UX is approachable enough for non-tech-savvy users
- The billing pain point is genuine and solvable

---

### Client Adoption Success (Dog Owners)

**Goal: Clients prefer online booking over Messenger**

**Success Indicator: Self-Service Booking Adoption**
- **Target:** 30% of bookings come through client portal (vs. Messenger) within 6 months
- **Measurement:** Ratio of portal bookings to manually-entered bookings
- **Success threshold:** At least 3 clients consistently book online

**Success Indicator: Booking Confirmation Preference**
- **Target:** Clients find online booking "easier" or "more convenient" than Messenger
- **Measurement:** Informal feedback from 3-5 clients
- **Success threshold:** Zero complaints about booking difficulty

**Success Indicator: Payment Convenience**
- **Target:** Faster invoice payment when clients can see balance in portal
- **Measurement:** Average days from invoice to payment (before vs. after Zenzo)
- **Success threshold:** Payment cycle reduces from ~7-14 days to ~3-7 days

**Critical Client Success Moment:**
A client books online at 10pm or on weekend when Liza isn't available, demonstrating the convenience value of self-service.

**Acceptable Partial Success:**
Even if only power users adopt the portal (tech-savvy clients), this validates:
- The client portal UX is functional
- Self-service booking has market demand
- The concept works for target demographic

---

### Business Objectives

#### Phase 1: MVP Validation (Months 1-6)

**Objective:** Prove core value proposition with Liza's operation

**Key Metrics:**
- **Deployment:** Zenzo MVP live in production
- **User onboarding:** Liza completes setup, imports 5-10 client profiles
- **Feature adoption:** Liza uses billing feature 4+ times in first 3 months
- **Technical validation:** Multi-tenant architecture works, KATA invoicing generates compliant documents
- **Learning achieved:** Portfolio-ready project completed

**Success Criteria:** Liza is actively using Zenzo for at least one core workflow (billing OR booking)

---

#### Phase 2: Scaling Validation (Months 6-12+)

**Objective:** Validate whether Zenzo enables business growth

**Key Metrics:**
- **Business growth:** Liza scales from 5-10 dogs/day to 10-15 dogs/day (if desired)
- **Multi-user capability:** If Liza hires employee, they successfully use Zenzo for operational tasks
- **Client base growth:** Liza acquires 3-5 new clients through professional booking experience
- **Professionalization:** Liza views her business as "more professional" because of Zenzo

**Success Criteria:** Zenzo demonstrably helps Liza scale or professionalize her operation

---

#### Future: SaaS Platform Vision (12+ Months)

**Objective:** Validate broader market opportunity (speculative)

**Key Metrics:**
- **Market interest:** 1-2 other Hungarian pet care operators express interest in using Zenzo
- **Pricing validation:** Willingness to pay ~5,000-10,000 HUF/month (~$15-30 USD) confirmed
- **Modular expansion:** Portfolio or Driver Mode features demonstrate differentiation value

**Success Criteria:** Evidence that Zenzo concept has legs beyond just Liza's operation

**Note:** This phase is aspirational, not required for project success.

---

### Key Performance Indicators (KPIs)

#### Developer/Portfolio KPIs (Primary - Guaranteed Success)
- ✅ MVP deployed to production environment
- ✅ Codebase demonstrates Next.js/TypeScript proficiency
- ✅ KATA invoicing generates compliant Hungarian tax documents
- ✅ Multi-tenant architecture successfully isolates tenant data
- ✅ Portfolio case study written with technical decisions documented

#### User Adoption KPIs (Secondary - Desired Success)
- **Liza usage frequency:** Billing feature used 2+ times/month
- **Liza time savings:** Billing time reduced 60%+ (from 90min to 30min)
- **Client adoption rate:** 30% of bookings via portal within 6 months
- **User satisfaction:** Liza rates Zenzo 7/10+ for "makes my life easier"

#### Business Impact KPIs (Tertiary - Aspirational Success)
- **Operational efficiency:** Liza handles 15 dogs/day with same admin time as 10 dogs previously
- **Payment velocity:** Invoice-to-payment time reduced 40%+
- **Professional perception:** 50%+ of clients describe booking experience as "professional"
- **Market validation:** 1+ additional daycare operator requests access

---

### Success Definition Summary

**Minimum Success (Achieved through development):**
- Bencu completes learning objectives, has portfolio-worthy project
- Technical architecture validates multi-tenant SaaS approach
- KATA invoicing demonstrates domain-specific solution capability

**Target Success (Requires Liza adoption):**
- Liza uses Zenzo regularly for billing (primary pain point solved)
- Billing time reduced significantly (measurable value creation)
- At least partial booking management adoption (workflow improvement)

**Stretch Success (Requires client adoption + business impact):**
- Clients prefer online booking over Messenger
- Liza's business grows or professionalizes because of Zenzo
- Evidence of broader market opportunity beyond first user

**Philosophy:** Each layer of success builds on the previous, but earlier layers stand alone. Bencu wins regardless of adoption, making this a low-risk, high-learning project with upside potential.

---

## MVP Scope

### Core Features (In Scope for MVP)

#### 1. Multi-Tenant Architecture Foundation
- **Separate database per tenant** - Each daycare gets isolated database
- **Single tenant implementation** - MVP supports Liza only, architecture ready for multiple tenants
- **Tenant-specific configuration** - Business settings, pricing rules, KATA tax details per tenant

#### 2. Admin Portal (Liza's Interface)

**Client & Dog Management:**
- Add/edit client profiles (name, contact info, address)
- Add/edit dog profiles (name, breed, age, special notes, linked to client)
- View client list and dog list

**Booking Management:**
- Create bookings with three types:
  - **Daily Daycare** - Single day booking
  - **Multi-Day Pension** - Consecutive days (e.g., vacation boarding)
  - **Multi-Day Pass** - Bundle of X days usable over time period
- Calendar view showing upcoming bookings
- Manual booking entry (when clients book via Messenger, Liza enters it)
- Accept/reject bookings from client portal
- Mark bookings as checked-in/checked-out

**Configurable Pricing System:**
- Set base prices for each booking type (Daily, Pension, Pass)
- Configure percentage discounts for multi-day bookings
- Pricing stored in tenant settings (Liza can change anytime)

**Billing & Invoicing:**
- Generate KATA-compliant invoices for date range
- One-click "Generate Invoices" from booking history
- Invoice shows: client name, dog name, booking dates, type, calculated price
- Hungarian language invoices with HUF currency
- KATA tax scheme fields included

**Payment Tracking:**
- Manual payment status (Unpaid → Paid)
- Liza marks invoices as paid after bank transfer received
- Dashboard shows: total unpaid, who owes what, payment status by client
- Filter invoices by paid/unpaid status

**Dashboard:**
- Today's pickups/drop-offs
- Upcoming week view of bookings
- Unpaid invoice summary
- Quick stats (dogs today, bookings this week, outstanding payments)

---

#### 3. Client Portal (Dog Owner Self-Service)

**Account & Profile:**
- Client registration (email + password)
- Client login/logout
- Add/edit dog profiles (one client can have multiple dogs)

**Self-Service Booking:**
- View available booking calendar
- Create booking requests (Daily, Pension, Pass)
- Select dog, dates, booking type
- Submit for Liza's approval (not instant confirmation in MVP)
- View upcoming bookings
- View booking history

**Payment & Invoices:**
- View invoices (generated by Liza)
- See running balance (total owed)
- See payment status per invoice
- **Note:** Payment happens outside system (bank transfer), client just views status

**Notifications:**
- Email notification when booking approved/rejected
- Email notification when new invoice generated
- Reminder notification day before booking

---

#### 4. Localization & Compliance

**Hungarian Language:**
- All UI text in Hungarian (configurable for future languages)
- Hungarian date/time formats
- HUF currency throughout

**KATA Tax Compliance:**
- Invoice format meets KATA requirements
- Tax scheme identifier on invoices
- Fields required by Hungarian KATA freelancers
- Compliant invoice numbering scheme

---

#### 5. PWA Capabilities

**Mobile-First Design:**
- Responsive design works on phone, tablet, desktop
- Touch-friendly interfaces for Liza's on-the-go use

**PWA Features:**
- Installable on mobile home screen
- Offline-capable (view cached booking data without internet)
- Fast loading with service workers

---

#### 6. Technical Foundation

**Authentication & Authorization:**
- Email/password authentication for both admin and clients
- Role-based access (admin vs. client)
- Secure session management (JWT tokens)

**Data Model:**
- Tenants, Clients, Dogs, Bookings, Invoices, Payments
- Multi-tenant data isolation (separate DBs)

**Deployment:**
- Production deployment (Vercel + Render or similar)
- CI/CD pipeline (GitHub Actions)
- Database hosting with backups

---

### Out of Scope for MVP

**Explicitly NOT included in MVP** (future enhancements):

❌ **Driver Mode / Pickup Logistics**
- Pickup/delivery route planning
- Real-time location tracking
- Driver interface for route optimization
- **Rationale:** Not core to billing pain point, future differentiator

❌ **Portfolio/Intro SPA Module**
- Public-facing marketing website
- Service showcase page
- Client testimonials section
- **Rationale:** Marketing, not operational necessity

❌ **Multi-User/Employee Access**
- Multiple staff accounts per tenant
- Employee role with limited permissions
- Employee scheduling/shift management
- **Rationale:** Liza is solo, this is for scaling phase

❌ **Online Payment Integration**
- Stripe/PayPal integration
- Hungarian payment gateway (SimplePay, Barion)
- Automatic payment processing
- **Rationale:** Defer to Phase 2, manual tracking sufficient for MVP

❌ **Photo/Update Sharing**
- Upload dog photos during day
- Send updates to clients
- Photo gallery per dog
- **Rationale:** Nice-to-have, not billing/booking essential

❌ **Advanced Booking Features**
- Recurring bookings (auto-create weekly schedule)
- Waitlist management
- Capacity limits per day
- Booking conflicts detection
- **Rationale:** MVP can handle basic booking, advanced features deferred

❌ **Reporting & Analytics**
- Revenue reports
- Client retention metrics
- Booking trends analysis
- Export to CSV/Excel
- **Rationale:** MVP focuses on operations, analytics deferred

❌ **Multiple Tenants in Production**
- Onboarding flow for new daycares
- Tenant admin panel
- Billing for SaaS subscriptions
- **Rationale:** MVP validates with Liza only, multi-tenant SaaS is Phase 3+

❌ **Advanced Localization**
- Multiple language support in UI
- Multiple currency support
- Region-specific tax schemes beyond KATA
- **Rationale:** Hungarian/HUF/KATA is MVP, configurability deferred

---

### MVP Success Criteria

**MVP is considered successful when:**

✅ **Technical Validation:**
- Deployed to production and accessible via URL
- Multi-tenant architecture working (even with single tenant)
- KATA invoices generate correctly
- Dual interface (admin + client) functional
- No critical bugs blocking core workflows

✅ **User Adoption (Liza):**
- Liza completes onboarding (business setup, 5+ clients imported)
- Liza uses billing feature at least once successfully
- Liza reports billing is "faster than before"
- Liza can navigate the admin portal without constant help

✅ **Client Adoption (Optional but Desired):**
- At least 1-2 clients successfully book through portal
- Zero critical usability complaints from clients
- Clients can view invoices and understand payment status

✅ **Learning Objectives:**
- Bencu completes Next.js/TypeScript full-stack application
- Portfolio case study documents technical decisions
- Demonstrates multi-tenant SaaS architecture capability
- Shows domain-specific compliance (KATA) implementation

**Decision Point for Phase 2:**
- If Liza uses MVP regularly for 3+ months → Add payment integration and advanced features
- If clients adopt portal (30%+ booking rate) → Prioritize client-facing enhancements
- If adoption is low → Pivot or learn from why it didn't work

---

### Future Vision (Post-MVP)

**Phase 2: Enhanced Operations (Months 6-12)**

If MVP succeeds, add:
- **Online payment integration** (Stripe or Hungarian gateway)
- **Recurring bookings** (auto-schedule regulars)
- **Photo/update sharing** (daily dog photos to clients)
- **Advanced booking rules** (capacity limits, conflict detection)
- **Basic reporting** (monthly revenue, client retention)

**Phase 3: Driver Mode Differentiator (Year 1-2)**

Unique market advantage:
- **Pickup/delivery logistics** module
- **Route optimization** for morning/evening runs
- **Real-time tracking** for dog owners
- **Driver mobile interface** (PWA optimized)

**Phase 4: Multi-Tenant SaaS Platform (Year 2+)**

If market validates:
- **Tenant onboarding flow** (other daycares can sign up)
- **SaaS billing** (subscription pricing for tenants)
- **Multiple tax schemes** (beyond KATA, support VAT, etc.)
- **Multiple languages/currencies** (expand beyond Hungary)
- **Modular architecture** (tenants pick features they need)
- **Portfolio/Marketing module** (tenant-branded public pages)

**Phase 5: Platform Ecosystem (Year 3+)**

Vision if wildly successful:
- **Marketplace integration** (pet supply vendors, vets)
- **Mobile native apps** (iOS/Android beyond PWA)
- **API for third-party integrations**
- **White-label option** (larger daycares brand it themselves)
- **Multi-service support** (grooming, training, not just daycare)

---

### Scope Management Philosophy

**MVP Discipline:**
- Every feature must directly solve booking→billing workflow
- When in doubt, defer to Phase 2
- Protect learning objectives (finish and deploy, don't get stuck)
- Liza's adoption > feature completeness

**Feature Requests Handling:**
- Document all ideas in "Future Vision" backlog
- Resist scope creep during MVP development
- Use Liza's feedback to prioritize Phase 2
- Validate with real usage before building speculative features

**Success Metrics Drive Roadmap:**
- If billing adoption succeeds → Enhance billing features
- If client portal succeeds → Enhance client experience
- If neither adopts → Reassess before investing more
- Portfolio value achieved regardless of adoption

---
