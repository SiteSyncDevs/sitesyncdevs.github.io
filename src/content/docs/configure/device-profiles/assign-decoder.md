---
title: "Assign a decoder"
description: "Select the payload decoder a profile uses to parse raw device messages."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Attach a payload decoder to a device profile so incoming messages are parsed.

## Steps

1. Open the device profile and find the **Integrations** section.
2. In the **Decoder** field, select the payload decoder for this sensor type. The arrow on the right opens the [decoder page](/configure/decoders/concepts/) for more detail.
3. Select **Save**.

:::caution[A decoder is required]
If no decoder is selected, decoding **fails** for every device on this profile.
:::

## Related pages

- [Decoder concepts](/configure/decoders/concepts/)
- [Assign a UDT](/configure/device-profiles/assign-udt/)
- [Decode error](/troubleshoot/device-problems/decode-error/)
