## Wireframe: Auth Page (`/auth`)

### Desktop (approx.)

```text
+--------------------------------------------------------------+
|                       Header / Nav                           |
| LOGO + Home About What we do Testimonials Contact ...      |
+--------------------------------------------------------------+

+--------------------------------------------------------------+
|                    Auth Container (center)                  |
|                                                              |
|  +--------------------------------------------------------+ |
|  | Tabs: [Sign in] [Sign up]                             | |
|  +--------------------------------------------------------+ |
|                                                              |
|  If Sign in selected:                                       |
|   - Title: Welcome back                                    |
|   - [Email]                                                 |
|   - [Password]                                              |
|   - [Sign in button]                                       |
|   - Inline error state (wrong email/password)              |
|   - link: Create account                                   |
|                                                              |
|  If Sign up selected:                                       |
|   - Title: Create your account                             |
|   - [Full name] (optional)                                 |
|   - [Email]                                                 |
|   - [Password]                                              |
|   - [Confirm password] (optional depending provider)       |
|   - [Terms checkbox]                                       |
|   - [Create account button]                                |
|   - Inline error state (email already in use, etc.)       |
|                                                              |
|  Status area: loading spinner + success message (optional)|
|  +--------------------------------------------------------+ |
+--------------------------------------------------------------+

+--------------------------------------------------------------+
|                              Footer                           |
+--------------------------------------------------------------+
```

### Mobile (approx.)

```text
Header
Auth card (full width minus padding)
Tabs on top
Form fields stacked
Footer
```

