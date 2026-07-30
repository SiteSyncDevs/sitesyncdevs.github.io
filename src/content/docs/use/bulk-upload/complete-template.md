---
title: "Complete the template"
description: "Fill one row per device using the required columns."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

Add one row per device. The columns match the fields you'd enter manually in QR Sync.

| Column | Required | Description |
| --- | --- | --- |
| Device Name | Yes | A unique, human-readable label for the device. |
| Dev EUI | Yes | The device's unique 16-character hardware identifier, from the device label. |
| App EUI | No | The Application EUI, from the device label or network server. |
| App Key | No | The encryption key, from the device label or manufacturer docs. |
| Description | No | A note about the device — what it monitors, where it's installed. |

:::caution[Double-check Dev EUI values]
A mistyped Dev EUI produces a device that appears in SiteSync but never connects. These are difficult to find after a large upload.
:::

## Related pages

- [Validate the file](/use/bulk-upload/validate-file/)
- [Import devices](/use/bulk-upload/import/)
