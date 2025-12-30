# User Journeys

## Journey 1: Liza's Weekend Transformation - From Billing Chaos to 15-Minute Miracle

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

## Journey 2: Éva's Late-Night Booking - Freedom from Messenger Tag

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

## Journey 3: System Administrator's Setup - Preparing for Scale

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

## Journey 4: Payment System Integration - The Silent Partner

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

## Journey Requirements Summary

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
