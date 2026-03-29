## Technical Documentation

### Goals
Implement a React-based website with:
- Public pages: landing + contact
- Auth pages: sign in + sign up
- Protected member dashboard
- Meeting scheduling entry (embed or internal scheduler)
- Clean component structure and documented integration points

### Recommended Tech Stack (v1)
Frontend:
- React (with TypeScript recommended)
- Vite for development/build tooling
- React Router for routes (`/`, `/contact`, `/auth`, `/member`)
- Auth provider (pick one):
  - Firebase Authentication, or
  - Clerk, Auth0, or similar hosted auth
- Form handling:
  - React Hook Form + Zod (or equivalent) for validation
- UI:
  - Any component system (Tailwind, CSS modules, or a UI library)

Backend (choose one approach):
1. No custom backend (fastest)
   - Contact submission via a serverless function that sends email (and optionally stores in DB)
   - Meeting scheduling via a provider embed (Calendly-style), optionally with webhooks
2. Minimal backend
   - Implement endpoints for contact submissions and meeting booking storage
   - Use a database if you need member-visible history in `/member`

### High-Level Architecture
1. Frontend SPA
   - `Layout` component renders header + footer
   - `LandingPage` renders hero/about/what-we-do/testimonials
   - `ContactPage` renders `ContactForm` + `ScheduleMeeting` section
   - `AuthPage` renders sign in/sign up forms
   - `MemberPage` is wrapped by a `ProtectedRoute`

2. Routing and Protection
   - Use a `ProtectedRoute` component:
     - If user is authenticated: render `/member`
     - If not: redirect to `/auth`
   - Auth state comes from the auth provider SDK (session/JWT handled by provider)

### Component-Level Design (Frontend)
- `App.tsx`
  - Defines routes with React Router
  - Wraps routes with `Layout` where appropriate
- `components/Layout/Header.tsx`
  - Sticky navigation with anchor links for public sections
- `components/Layout/Footer.tsx`
  - Footer columns + links
- `pages/LandingPage.tsx`
  - Composition of:
    - `HeroSection`
    - `AboutSection`
    - `WhatWeDoSection`
    - `TestimonialsSection`
    - `Footer`
- `pages/ContactPage.tsx`
  - Composition of:
    - `ContactForm`
    - `ScheduleMeeting` (embed or internal scheduler UI)
- `pages/AuthPage.tsx`
  - Two tabs/forms:
    - `SignInForm`
    - `SignUpForm`
- `pages/MemberPage.tsx`
  - Dashboard layout and member-only content

### Meeting Scheduling Integration (v1 Options)
Option A: Embedded scheduler (recommended for v1)
- Embed provider widget on landing hero and/or `/contact`
- Pros:
  - Fast implementation
  - Provider handles time slots and confirmations
- Cons:
  - Member history may require provider webhooks or extra API calls

Option B: Internal scheduling UI
- Implement a scheduling form UI:
  - Choose date/time and timezone
  - Optional meeting topic/reason
- Backend:
  - Store booking in DB
  - Confirm booking via email (optional)
- Member dashboard can list upcoming bookings by querying bookings by `userId`

### Contact Form Integration
Frontend behavior:
- Validates input on client
- Submits to an API endpoint or serverless function
- Shows loading state, success state, and error state

Backend endpoint (conceptual):
- `POST /api/contact`
  - Input:
    - `name`
    - `email`
    - `subject` (or `reason`)
    - `message`
  - Server responsibilities:
    - Validate payload server-side (never trust only client validation)
    - Send an email notification to your inbox (and/or store in DB)
  - Output:
    - `ok: true`
    - `referenceId` (optional)

### Authentication Integration
Auth provider responsibilities:
- User registration, sign in, password reset (optional)
- Session persistence (cookie/JWT/session)

Frontend responsibilities:
- Sign up:
  - Collect form data and call provider SDK sign-up
  - Handle errors (duplicate email, invalid password, etc.)
  - Redirect to `/member` after success
- Sign in:
  - Call provider SDK sign-in
  - Redirect to `/member` after success
- Protected route:
  - Enforce access to `/member`

### Data Model (Conceptual, if you store data)
1. `ContactSubmission`
   - `id`
   - `name`
   - `email`
   - `subject`
   - `message`
   - `createdAt`
   - `status` (optional: new/processed)

2. `MeetingBooking` (if internal scheduler is used)
   - `id`
   - `userId` (nullable if booking is allowed for visitors too)
   - `name`
   - `email`
   - `scheduledAt`
   - `timezone`
   - `topic` (optional)
   - `status`

Auth user identity:
- Use `userId` from the auth provider if you store member-related records.

### Non-Functional Requirements
- Accessibility:
  - Forms are keyboard navigable
  - Clear focus states and error messages
- Security:
  - Protect member routes
  - Server-side validation for contact submissions
  - Do not store plaintext passwords (delegate to auth provider)
- Performance:
  - Responsive images and lightweight layout
- Reliability:
  - Idempotent-ish handling for form submit (client-side disable button on submit)

### Deployment Considerations (v1)
- Frontend:
  - Deploy as SPA (Vercel/Netlify/Render/etc.)
- Serverless (if used):
  - Deploy API functions alongside frontend
- Environment variables:
  - API keys for auth provider
  - Email provider credentials (if sending emails from backend)
  - Scheduling provider keys (if needed)

### Implementation Checklist (When you start coding)
- Create React app + routing
- Implement Layout (header/footer)
- Implement Landing page sections
- Implement Contact form + validation + submission endpoint
- Integrate scheduling (embed or internal)
- Implement Auth page (sign in/sign up)
- Implement ProtectedRoute and member dashboard

