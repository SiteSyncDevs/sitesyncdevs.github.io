---
draft: true
title: "Edit a device"
description: "Change a device's name, type, metadata, location, or photo, or move it to another site."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Update a device's details after it has been added.

## Steps

1. Open the device page.
2. Select the **pencil icon** in the top-right of the **Overview** panel.
3. Update any of:
   - **Name** — the display name (also see [renaming a tag](/use/move-rename-tags/#rename-a-tag)).
   - **Description / metadata** — notes about the device.
   - **Location** — via **Set Location** (enter coordinates or autofill GPS).
   - **Photo** — a picture of the install.
4. Save.

## Change the device type

The device type is its [device profile](/configure/device-profiles/concepts/). Changing it changes how the payload is decoded.

:::note[Confirm behavior]
Confirm whether the device type can be changed in place from the edit page, and how it affects existing history. Confirm with SiteSync Product.
:::

## Move to another site

:::note[Confirm behavior]
Confirm the exact steps to move a device between sites (edit page vs. Tag Management) and what happens to its tag folder. Confirm with SiteSync Product.
:::

## Related pages

- [Move and rename tags](/use/move-rename-tags/)
- [Remove a device](/use/remove-device/)
