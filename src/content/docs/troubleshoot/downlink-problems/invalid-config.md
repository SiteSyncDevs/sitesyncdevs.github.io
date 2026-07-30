---
title: "Invalid downlink configuration"
description: "The downlink payload or port was rejected."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The downlink couldn't be sent because of a malformed payload or port.

## Check these first

1. Payload is **hex only** (0–9, A–F).
2. Port is in range **1–223**.
3. For chained commands, hex segments are separated by semicolons in the order to send.

## Related pages

- [Send a downlink](/use/send-downlink/)
- [Configure downlink profiles](/configure/device-profiles/downlink-profiles/)
