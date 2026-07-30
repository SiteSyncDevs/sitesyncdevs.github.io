---
draft: true
title: "Remove a device"
description: "Delete a single device, or bulk-delete many."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Delete a single device

1. Open the device page.
2. Select the **trashcan** icon.
3. Confirm in the dialog.

This deletes the device entry **and its associated Ignition tag**.

## Bulk delete

From **Devices**, select **More (···) → Bulk Delete**, choose the devices in the table, and confirm.

:::caution[Permanent]
Bulk Delete permanently removes all selected devices and their associated data and cannot be undone. If you're unsure, move devices to an inactive site instead of deleting them.
:::

:::note[Confirm network-server effect]
Confirm whether deleting a device in SiteSync also removes it from the configured network server. Confirm with SiteSync Product.
:::

## Related pages

- [Edit a device](/use/edit-device/)
- [Find and open a device](/use/find-and-open-device/)
