---
draft: true
title: "SiteSync tag model"
description: "How SiteSync organizes devices and decoded data in the Ignition tag provider."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

SiteSync writes device data into the Ignition tag provider using a consistent structure so data is easy to find, historize, and alarm on.

## How devices are organized

- Devices are added to their **site's folder** by default, aligned with the site name. See [Device folders](/configure/udts-and-tags/device-folders/).
- Each device's decoded output is structured by the [UDT](/configure/udts-and-tags/udt-requirements/) assigned on its device profile.
- The profile's [Primary Value and Display Values](/configure/device-profiles/tag-paths/) reference fields within the decoded payload.

:::note[Needs input]
Document the full tag hierarchy (device tags, diagnostic/`LoRaMetrics` tags, metadata tags) and data types. Partial detail exists in the [Health metrics](/reference/health-metrics/) tag list; confirm the complete model with SiteSync Product.
:::

## Related pages

- [UDT requirements](/configure/udts-and-tags/udt-requirements/)
- [Device folders](/configure/udts-and-tags/device-folders/)
- [Tag model reference](/reference/tag-model/)
