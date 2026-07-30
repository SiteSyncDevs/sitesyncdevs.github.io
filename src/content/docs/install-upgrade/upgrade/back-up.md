---
draft: true
title: "Back up SiteSync"
description: "Take a gateway backup before any module or project change."
products: ["standard", "enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Capture a restore point before upgrading, so you can roll back if needed.

## Steps

1. Open the Ignition Gateway web configuration page.
2. Go to **Config → Backup/Restore**.
3. Select **Download Backup** to save a gateway backup (`.gwbk`). This includes SiteSync's module configuration, projects, and tags.
4. Store the backup somewhere safe and note the current SiteSync and Ignition versions.

:::note[Confirm scope]
Confirm whether anything beyond the gateway backup needs separate capture (for example, externally stored connection credentials). Confirm with SiteSync Product.
:::

## Related pages

- [Before upgrading](/install-upgrade/upgrade/before-upgrading/)
- [Uninstall or roll back](/install-upgrade/uninstall-rollback/)
