---
title: "Move and rename tags"
description: "Use Tag Management to move a device's identity to a new unit or rename it without losing history."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

In SiteSync, a **tag** is the registered identity of a physical device — its name, Dev EUI, and profile assignment. Tag Management lets you move a tag to a different device record or rename it without losing history.

Open it from **More (···) → Tag Management**, or from a device's edit page.

## Move a tag

Moving a tag transfers a device's identity and configuration to a different device entry — used when a physical device is swapped out, so the replacement inherits the original's name and history and reporting continuity is maintained.

1. In the Tag Management panel, use search or the sensor-type filter to find the device whose tag you want to reassign.
2. Select the device — the **Selected Device** section confirms your choice.
3. Select **Move Tag** and follow the prompts to choose the target device.

## Rename a tag

Renaming updates the display name across SiteSync without affecting the Dev EUI, profile, or collected data.

1. Select the device in the Tag Management panel.
2. Select **Rename**, enter the new name, and confirm.

## Related pages

- [Edit a device](/use/edit-device/)
- [The device page](/use/device-page/)
