---
title: "Complete the template"
description: "Fill one row per device using the required columns."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-31"
---

Add one row per device. The columns match the fields you'd enter manually in QR Sync.

| Column | Required | Description |
| --- | --- | --- |
| Device Name | Yes | A unique, human-readable label for the device. |
| Dev EUI | Yes | The device's unique 16-character hardware identifier, from the device label. |
| App EUI | Yes | The Application EUI, from the device label or network server. |
| App Key | Yes | The encryption key, from the device label or manufacturer docs. |
| Description | No | A note about the device — what it monitors, where it's installed. |

:::tip[Extra columns become metadata]
Any additional columns you add beyond these are rolled up into the device's **MetaData / customattributes** tag and displayed on the device info page — a handy way to carry through asset IDs, locations, or other attributes.
:::

:::caution[Double-check Dev EUI values]
A mistyped Dev EUI produces a device that appears in SiteSync but never connects. These are difficult to find after a large upload.
:::

## Related pages

- [Validate the file](/use/bulk-upload/validate-file/)
- [Import devices](/use/bulk-upload/import/)
