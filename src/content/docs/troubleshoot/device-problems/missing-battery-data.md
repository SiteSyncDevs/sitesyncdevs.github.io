---
title: "Missing battery data"
description: "The device reports no battery reading."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

Battery shows **Unknown** / `--`. Missing battery data is not counted as healthy, but it isn't necessarily a fault.

## Most likely causes

- The device type does not report battery.
- The device hasn't checked in recently.
- The decoder isn't surfacing a battery field SiteSync recognizes.

## Check these first

1. Whether this device type is expected to report battery.
2. Recent Last Seen.
3. The decoder output for a battery field.
4. The **UDT mapping** for the LoRa metrics UDT — if the decoded battery field isn't mapped to the UDT, SiteSync can't surface it.

## Related pages

- [Decode error](/troubleshoot/device-problems/decode-error/)
- [Health metrics](/reference/health-metrics/)
