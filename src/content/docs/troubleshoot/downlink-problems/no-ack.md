---
title: "Device did not acknowledge"
description: "A confirmed downlink wasn't acknowledged."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

A confirmed downlink was sent but the device didn't acknowledge receipt.

## Most likely causes

- The device didn't have a receive window in range (weak link or missed uplink).
- The device is offline or has poor signal.

## Check these first

1. Signal quality and Last Seen.
2. Re-send after confirming the device is online.

:::note[Confirm retry behavior]
Confirm how SiteSync surfaces unacknowledged confirmed downlinks and any retry behavior with SiteSync Product.
:::

## Related pages

- [Downlink remains queued](/troubleshoot/downlink-problems/queued/)
