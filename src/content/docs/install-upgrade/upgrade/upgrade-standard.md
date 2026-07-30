---
title: "Upgrade Standard"
description: "Move a SiteSync Standard deployment to a new version."
products: ["standard"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Upgrade a single-deployment SiteSync Standard install to a newer version.

## Before you begin

:::note[Prerequisites]
- Read the [target release notes](/release-notes/1-0-0/) for required actions — including any UDTs to re-import or non-standard upgrade steps.
- [Back up the gateway](/install-upgrade/upgrade/back-up/).
- Have the new module `.modl` and the new **SiteSync Source** and **Standard** Perspective project files.
:::

:::tip[About SiteSync Source]
**SiteSync Source** is the parent Perspective project; the Standard project **inherits** from it. Re-import Source together with the Standard project so they stay on the same version.
:::

## Steps

1. Open the Ignition Gateway web configuration page.
2. Go to **Config → Modules** and **Install or Upgrade a Module…**, selecting the new SiteSync `.modl`.
3. Re-import the Perspective projects for the new version (**Config → Projects → Import**):
   - SiteSync Source (parent)
   - Standard
4. Complete any version-specific steps called out in the release notes (for example, re-importing specific UDTs).
5. Run [post-upgrade validation](/install-upgrade/upgrade/post-upgrade-validation/).

## Related pages

- [Post-upgrade validation](/install-upgrade/upgrade/post-upgrade-validation/)
- [Uninstall or roll back](/install-upgrade/uninstall-rollback/)
