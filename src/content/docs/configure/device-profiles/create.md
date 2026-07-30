---
title: "Create a device profile"
description: "Create a reusable profile that defines how a sensor type is onboarded, decoded, and modeled."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Create a device profile you can assign when onboarding devices of a given sensor type.

## Before you begin

:::note[Prerequisites]
- A [decoder](/configure/decoders/concepts/) for this sensor type (required to decode payloads).
- A UDT for the decoded output (required to add devices).
:::

## Steps

1. In the left sidebar, select **Device profiles**.
2. Select **New profile** in the top-right corner.
3. Give the profile a name and, optionally, a description.
4. Configure the profile settings — see [Profile fields](/configure/device-profiles/fields/).
5. Select **Save**. The profile is immediately available to assign to devices.

## Expected result

The profile appears in the Device profiles list and can be selected as a sensor type when adding a device.

## Verify

1. Open **Device profiles** and confirm the new profile is listed with its manufacturer, region, and firmware.
2. Confirm a decoder and UDT are assigned (otherwise onboarding or decoding will fail).

## Related pages

- [Profile fields](/configure/device-profiles/fields/)
- [Assign a decoder](/configure/device-profiles/assign-decoder/)
- [Assign a UDT](/configure/device-profiles/assign-udt/)
