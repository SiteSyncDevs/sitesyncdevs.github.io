---
title: "Validate the installation"
description: "Confirm an Enterprise install is working end to end."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Checks

1. The SiteSync Enterprise module shows **Running**.
2. **SiteSync Source**, **Enterprise Management**, and **Field App** projects load without errors.
3. An **administrator** can open Enterprise Management; a **general** user can sign in to the Field App and see their site.
4. Each [connection](/configure/connections/health/) shows **Active**.
5. The Enterprise and site [dashboards](/troubleshoot/fleet-dashboard/) load (including with no devices).
6. A test device onboarded to a site reports values and updates **Last Seen**.

## Related pages

- [Configure sites](/install-upgrade/enterprise/configure-sites/)
- [Add a device](/use/add-device/add-manually/)
