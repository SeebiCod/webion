## Functional Documentation

### Overview
This project is a small business website with:
- A public landing page (Hero, About, What we do, Testimonials, Footer)
- A public contact page (contact form + meeting scheduling entry point)
- A member authentication area (sign up + sign in)
- A protected member area (dashboard)

### Pages and Routes
1. `GET /` (Landing Page)
   - Header/navigation
   - Hero section with primary CTA to schedule a meeting and secondary CTA to contact
   - About section
   - What we do section
   - Testimonials section
   - Footer

2. `GET /contact` (Contact Page)
   - Contact form (name, email, subject/reason, message)
   - Meeting scheduling area (embedded scheduler or internal scheduler UI)
   - Footer

3. `GET /auth` (Auth)
   - Sign in form
   - Sign up form
   - Toggle/tab UI between sign in and sign up

4. `GET /member` (Protected Member Area)
   - Accessible only to authenticated users
   - Dashboard (example: upcoming bookings, profile summary)

### User Roles
1. Visitor (unauthenticated)
   - Can view the landing and contact pages
   - Can submit the contact form
   - Can schedule a meeting (via embedded widget or scheduling UI)
   - Can access the auth page but cannot access protected routes

2. Member (authenticated)
   - Can sign up and sign in
   - Can access `/member`
   - May view scheduled meeting info and/or contact submissions (optional for v1)

3. Admin (optional, future)
   - Can review submissions/bookings (if you add an admin panel or use the provider dashboard)

### Core Functional Requirements

#### Landing Page
- Must be responsive (desktop + mobile)
- Must include a prominent hero CTA to “Book a meeting”
- Must provide navigation to key sections (About, What we do, Testimonials)

#### Contact Form (Visitor)
- Inputs:
  - Full name
  - Email
  - Subject / Reason
  - Message
- Validation:
  - Required fields enforced
  - Email format validation
  - Message length constraints (min/max)
- Submission behavior:
  - Show loading state while submitting
  - On success:
    - Show success confirmation (optionally a reference ID)
  - On failure:
    - Show a friendly error message

#### Meeting Scheduling
- Must provide a “schedule a meeting” entry on:
  - Hero CTA on landing page
  - Scheduling section on `/contact`
- Scheduling behavior (choose one for v1):
  - External embed (recommended for speed):
    - The user selects time from the embed
    - The embed handles booking and confirmation
  - Internal scheduler:
    - User selects date/time + timezone
    - System stores booking and confirms

#### Authentication (Member Login Area)
- Provide two modes:
  - Sign in
  - Sign up
- Sign up requirements:
  - Collect user details (at least email + password; optionally full name)
  - Validate password rules as defined by the auth provider
  - Show meaningful errors (e.g., email already in use)
- Sign in requirements:
  - Validate credentials
  - On success:
    - Redirect to `/member`
  - On failure:
    - Show friendly error messaging

#### Protected Routes (Member Area)
- `/member` must be protected
  - Unauthenticated users are redirected to `/auth`
  - Auth state persists across refresh

### Acceptance Criteria (v1)
- All pages render correctly on mobile and desktop
- Navigation and footer are consistent across public pages
- Contact form:
  - Validates client-side before submit
  - Shows loading + success/error states
- Auth:
  - Signup works end-to-end
  - Login works end-to-end
  - Protected route redirect works
- Meeting scheduling works via the chosen v1 approach (embed or internal)

### Out of Scope (v1 unless you request otherwise)
- Full admin dashboard
- Complex user profile editing
- Advanced CMS for landing page content
- Payment processing / subscriptions

