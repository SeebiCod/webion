## Wireframe: Member Area (`/member`)

### Desktop (approx.)

```text
+--------------------------------------------------------------+
|                       Header / Nav                           |
| LOGO | Dashboard Profile (My Meetings if enabled)        |
| [User menu: account / sign out]                             |
+--------------------------------------------------------------+

+--------------------------------------------------------------+
|                 Member Page Layout (2 columns)            |
|  +-----------------------------+  +-----------------------+|
|  | Sidebar (optional)        |  | Main Dashboard       | |
|  | - Dashboard               |  | Title: Dashboard       | |
|  | - Profile                 |  |                         | |
|  | - My Meetings (optional) |  | Card: Upcoming         | |
|  | - Messages (optional)    |  | meeting count          | |
|  +-----------------------------+  |                         | |
|                                   |  [Upcoming list/table] | |
|                                   |  - Date/time           | |
|                                   |  - Status              | |
|                                   |                         | |
|                                   |  Card: Profile summary | |
|                                   |  - Name / email         | |
|                                   |  [Edit profile button] | |
|                                   |                         | |
|                                   |  CTA: Book another     | |
|                                   |  meeting                | |
|                                   +-----------------------+ |
|                                                              |
+--------------------------------------------------------------+

+--------------------------------------------------------------+
|                              Footer                           |
+--------------------------------------------------------------+
```

### Mobile (approx.)

```text
Header at top
Main dashboard stacked cards
Navigation as bottom bar or simple top menu
```

### Protected behavior (UX notes)
- If user is not signed in: redirect to `/auth`
- After sign in: redirect to `/member`

