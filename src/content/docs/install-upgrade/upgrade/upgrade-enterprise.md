---
title: "Upgrade Enterprise"
description: "Move a SiteSync Enterprise deployment to a new version by re-importing its projects."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Upgrade a SiteSync Enterprise deployment to a newer version.

## Before you begin

:::note[Prerequisites]
- Read the [target release notes](/release-notes/1-0-0/) for required actions — including any UDTs to re-import or non-standard upgrade steps. **1.0.0 requires re-importing all three projects.**
- [Back up the gateway](/install-upgrade/upgrade/back-up/).
- Have the new Enterprise module `.modl` and the new **SiteSync Source**, **Enterprise Management**, and **Field App** project files.
:::

:::tip[About SiteSync Source]
**SiteSync Source** is the parent Perspective project. **Enterprise Management** and **Field App** both **inherit** from it, so Source is re-imported alongside them and all three should be on the same version.
:::

## Steps

1. Open the Ignition Gateway web configuration page.
2. Go to **Config → Modules** and **Install or Upgrade a Module…**, selecting the new SiteSync Enterprise `.modl`.
3. Re-import the three Perspective projects for the new version (**Config → Projects → Import**):
   - SiteSync Source (parent)
   - Enterprise Management
   - Field App
4. Complete any version-specific steps called out in the release notes (for example, re-importing specific UDTs).
5. Run [post-upgrade validation](/install-upgrade/upgrade/post-upgrade-validation/).

:::caution[Re-import all together]
The module and all three projects should be on the same version. Re-import Source and both child projects as a set.
:::

## Related pages

- [Post-upgrade validation](/install-upgrade/upgrade/post-upgrade-validation/)
- [1.0.0 release notes](/release-notes/1-0-0/)
