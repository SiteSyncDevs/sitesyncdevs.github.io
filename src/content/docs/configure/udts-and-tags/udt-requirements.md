---
draft: true
title: "UDT requirements"
description: "The Ignition UDT a device profile needs, and the SiteSyncModels folder for downstream models."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

Every device profile must reference a **UDT** (Ignition User Defined Template) that defines the structure of the decoded output. Without a UDT on the profile, adding devices fails.

## Requirements

- The UDT is a standard **Ignition UDT / User Defined Template**.
- It must be selected **and saved** on the profile before you can choose a [Primary Value or Display Values](/configure/device-profiles/tag-paths/).
- **Limited Models** (optional) link a custom data structure for downstream integrations such as PI. These pull from the UDT folder **`SiteSyncModels`**. Implementations vary — contact support.

:::note[Needs input]
Document the required UDT member structure (which member tags SiteSync expects, data types, and how decoded fields map onto them). Confirm with SiteSync Product.
:::

## Related pages

- [Assign a UDT](/configure/device-profiles/assign-udt/)
- [SiteSync tag model](/configure/udts-and-tags/tag-model/)
