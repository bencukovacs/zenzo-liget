# Functional Requirements

## User & Access Management

- **FR1:** System Administrators can create new tenant accounts with unique database isolation
- **FR2:** System Administrators can configure tenant business settings (tax scheme, currency, language, pricing rules)
- **FR3:** System Administrators can create admin user accounts and assign them to specific tenants
- **FR4:** Admins can authenticate using email and password credentials
- **FR5:** Clients can register for an account associated with a specific tenant
- **FR6:** Clients can authenticate using email and password credentials
- **FR7:** System can enforce role-based access control (System Admin, Tenant Admin, Client roles)
- **FR8:** Users can securely maintain authenticated sessions across page refreshes
- **FR9:** Users can log out and terminate their authenticated session

## Client & Dog Profile Management

- **FR10:** Admins can create new client profiles with contact information (name, email, phone)
- **FR11:** Admins can edit existing client profiles
- **FR12:** Admins can view a list of all clients for their tenant
- **FR13:** Admins can add dog profiles associated with a client (name, breed, age, special notes)
- **FR14:** Admins can edit existing dog profiles
- **FR15:** Clients can view their own profile information
- **FR16:** Clients can add dog profiles to their account
- **FR17:** Clients can edit their dog profiles
- **FR18:** Clients can view all dogs associated with their account

## Booking Management

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

## Billing & Invoicing

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

## Notifications & Communication

- **FR41:** System can send email notifications when booking requests are approved
- **FR42:** System can send email notifications when booking requests are rejected
- **FR43:** System can send email notifications when new invoices are generated
- **FR44:** System can send email reminder notifications the day before a scheduled booking

## System Administration & Configuration

- **FR45:** System Administrators can configure tenant pricing rules (base prices for each booking type)
- **FR46:** Admins can modify pricing configuration for their tenant
- **FR47:** System Administrators can view audit logs of system admin actions
- **FR48:** System can enforce multi-tenant data isolation (tenant data never exposed to other tenants)
- **FR49:** System can display all UI text in Hungarian language
- **FR50:** System can display all currency values in HUF (Hungarian Forint)

## PWA & Offline Capabilities

- **FR51:** Users can install the application to their mobile device home screen
- **FR52:** Users can view cached booking calendar data when offline (read-only)
- **FR53:** Users can view cached client and dog profile data when offline (read-only)
- **FR54:** System can display offline status indicator when network is unavailable
- **FR55:** System can synchronize pending actions when network connection is restored
