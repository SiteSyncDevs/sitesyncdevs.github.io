---
title: "Decoder concepts"
description: "A decoder parses a device's raw LoRaWAN payload into named values. SiteSync supports JavaScript decoders and API-based decoders."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

A decoder turns a device's raw LoRaWAN payload into named, structured values SiteSync can model as tags. Decoders are selected on a [device profile](/configure/device-profiles/assign-decoder/) — one decoder per profile — and run automatically on every uplink from devices using that profile.

## Two ways to decode

- **JavaScript decoder** — a function you paste in or a `.js` file you upload, run inside SiteSync.
- **API decoder** — SiteSync sends the payload to a URL you specify and uses the decoded response.

See [Create a decoder](/configure/decoders/create/) for both.

## Managing decoders

Enterprise Management lets you add, delete, and manage decoders — including updating decoder titles, handling empty states, and uploading decoder files — so only relevant, current decoders are available to device profiles.

## Key behavior

- A decoder is **required** on a profile. Without one, decoding fails for every device on that profile.
- When adding a new sensor type, create or select a decoder that matches the device's payload format, then assign it in the [device profile](/configure/device-profiles/assign-decoder/).
- If a device shows no data or is flagged **Decode Error**, check that the correct decoder is assigned in its profile.

## Related tasks

- [Create a decoder](/configure/decoders/create/)
- [Test a decoder](/configure/decoders/test/)
- [Decode error](/troubleshoot/device-problems/decode-error/)
