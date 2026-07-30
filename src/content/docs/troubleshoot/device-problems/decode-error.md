---
title: "Decode error"
description: "Messages arrive but SiteSync cannot decode the payload."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

Uplinks are reaching SiteSync (the Communication Flow reaches **Decoder**) but the payload can't be interpreted — the device shows **Decode Error** and values are empty.

## Most likely causes

- No decoder assigned to the device's profile.
- The wrong decoder for this device's payload format (often the wrong **Sensor Type** chosen at onboarding).
- A payload that doesn't match what the decoder expects.

## Check these first

1. Open the device profile and confirm a [decoder is assigned](/configure/device-profiles/assign-decoder/).
2. Confirm the profile/Sensor Type matches the physical device.
3. [Test the decoder](/configure/decoders/test/) against a recent hex payload.

## Resolution

Assign or correct the decoder, or reassign the device to the right profile.

## Verify

New uplinks decode and values appear on the device page.

## Related pages

- [Decoder concepts](/configure/decoders/concepts/)
- [Assign a decoder](/configure/device-profiles/assign-decoder/)
