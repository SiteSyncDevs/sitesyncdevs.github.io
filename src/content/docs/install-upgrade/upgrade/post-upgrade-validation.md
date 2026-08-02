---
title: "Post-upgrade validation"
description: "Confirm SiteSync is healthy after an upgrade."
products: ["standard", "enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Confirm the upgrade succeeded and the deployment is healthy.

## Checks

1. **Modules** — SiteSync shows **Running** in **Config → Modules** with the expected version.
2. **Projects** — the re-imported project(s) load without errors.
3. **Connections** — each [connection](/configure/connections/health/) shows **Active**.
4. **Dashboards** — open the Enterprise, site, and Field App dashboards; confirm they load and device counts look right (including with no devices).
5. **A live device** — confirm a device reports current values and updates **Last Seen**.
6. **Onboarding** — add a device through the desktop workflow and confirm it saves and navigates correctly.

## If something's wrong

Roll back using your gateway backup — see Uninstall or roll back.

## Related pages

- [Upgrade Enterprise](/install-upgrade/upgrade/upgrade-enterprise/)
- Back up SiteSync
