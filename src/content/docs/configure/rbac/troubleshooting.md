---
title: "RBAC troubleshooting"
description: "Fixes for common RBAC issues: roles not applying, unexpected access, and the Read-only fail-safe."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-08-25"
---

- **A role's permissions don't seem to apply:** confirm the role name matches your identity provider's role claim exactly, including case.
- **A user has more or less access than expected:** check whether that user has more than one role assigned by your identity provider — if any of their roles grants a privilege at a site, they have it, even if another one of their roles doesn't.
- **Everything is Read-only unexpectedly:** this is the fail-safe behavior — if the underlying configuration is unreadable or invalid, the app falls back to Read-only for everyone. Contact your SiteSync representative to confirm the underlying configuration is intact.
- **Not sure this applies to a particular app:** RBAC only governs the Field App. The Enterprise Management app and Site dashboards are unaffected.

## Related pages

- [Role-based access control (RBAC)](/configure/rbac/overview/)
- [Configure role permissions](/configure/rbac/configure-role-permissions/)
