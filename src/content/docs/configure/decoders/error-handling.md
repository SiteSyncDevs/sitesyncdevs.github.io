---
draft: true
title: "Decoder error handling"
description: "What happens when decoding fails, and how it surfaces."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

When a decoder cannot parse a payload, the device is flagged with the **Decode Error** status (one of the mutually exclusive [device statuses](/reference/health-metrics/#device-status)).

Most common causes:

- No decoder assigned to the profile.
- The wrong decoder assigned for the device's payload format.
- A payload that doesn't match what the decoder expects.

To resolve, see [Decode error](/troubleshoot/device-problems/decode-error/).

:::note[Needs input]
Document how decoder failures are logged (Gateway logger name, decoder console output) so users can inspect the underlying error. Confirm with SiteSync Product.
:::

## Related pages

- [Decoder concepts](/configure/decoders/concepts/)
- [Decode error](/troubleshoot/device-problems/decode-error/)
