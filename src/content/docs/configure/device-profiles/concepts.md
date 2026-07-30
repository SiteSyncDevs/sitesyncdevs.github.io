---
title: "Device-profile concepts"
description: "A device profile is a reusable template that defines how a device is added, decoded, structured in Ignition, and integrated downstream."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

A device profile is a reusable configuration template that defines how a device is added to your network, how its data is parsed, how it is structured in the Ignition tag provider, and any further downstream integrations. Profiles also hold configuration information, links to documentation, and notes.

## Key behavior

- Typically there is **one profile per sensor type + firmware combination**.
- If you run **multiple LoRa regions**, you may have one profile per region, filtered by a site's operating region.
- Device profiles are the selectable **sensor types** when adding a device.

You can see every profile on the Device profiles page, which lists the profile name, manufacturer, LoRa region, and firmware version. Double-click a row to open the profile for configuration.

## What a profile ties together

- A [decoder](/configure/device-profiles/assign-decoder/) (required) — parses raw payloads.
- A [UDT](/configure/device-profiles/assign-udt/) (required) — the tag structure for decoded output.
- [Primary and display values](/configure/device-profiles/tag-paths/) — which decoded fields to surface.
- [Downlinks](/configure/device-profiles/downlink-profiles/) — over-the-air configuration commands.

## Related tasks

- [Create a device profile](/configure/device-profiles/create/)
- [Profile fields](/configure/device-profiles/fields/)
