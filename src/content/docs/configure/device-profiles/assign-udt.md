---
title: "Assign a UDT"
description: "Select the Ignition UDT that defines the structure of a profile's decoded output."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Attach a UDT (User Defined Template) to a device profile so decoded data has a defined structure in Ignition.

## Steps

1. Open the device profile and find the **Integrations** section.
2. In the **UDT** field, select the standardized schema for the decoded output.
3. Select **Save**. A saved UDT is required before you can choose a [Primary Value or Display Values](/configure/device-profiles/tag-paths/).

:::caution[A UDT is required]
If no UDT is selected, **adding devices fails** for this profile.
:::

## Related pages

- UDT requirements
- [Configure tag paths](/configure/device-profiles/tag-paths/)
