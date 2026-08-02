---
title: "Device assigned to wrong site"
description: "A device is in a different site than intended."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The device exists but is attached to the wrong site — commonly after a bulk upload to the wrong site, or when devices land in a **default site**.

## Resolution

Transfer the device to the correct site from the Enterprise Management app. Devices sitting in a default site can be moved from there.

You can also **re-run a bulk upload** from Enterprise Management with the correct site to reassign the affected devices.

:::caution[Old tags persist]
Moving a device to a different site creates its tags in the new site's folder, but the device's **original tags remain in their first location**. Clean up the old folder if needed.
:::

## Related pages

- Edit a device
- [Understand sites](/configure/sites/understand-sites/)
