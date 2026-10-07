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

## Manage UDTs

The UDTs you can assign come from the UDT library in **Data Manager → UDTs**, where you can add, filter, and delete them.

<figure class="ss-shot" data-shot-id="UDT-MANAGE-001" data-product="enterprise-management" data-viewport="desktop">
<figcaption>Manage UDTs in Data Manager: each UDT with its name, a filter box, + New UDT, and a delete control per row.</figcaption>
</figure>

## Related pages

- UDT requirements
- [Configure tag paths](/configure/device-profiles/tag-paths/)
