---
title: "Poor or fair signal"
description: "The device's link quality is low."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The device's dual-margin signal rating is **Fair** or **Poor** (see [Health metrics](/reference/health-metrics/#signal-quality-dual-margin-rating)). It may still report, but reliability is at risk.

## Most likely causes

- Distance or obstructions between device and gateway.
- Poor gateway placement or coverage gaps.
- A high spreading factor forced by a weak link.

## Check these first

1. **RSSI** and **SNR** on the Diagnostics panel.
2. Whether **many devices** share poor/fair signal — that points to gateway placement, not one device.

## Resolution

Relocate the device or gateway, add a gateway, or improve antenna placement.

## Verify

The signal rating improves to Good/Strong on the next uplinks.

## Related pages

- [Missing signal data](/troubleshoot/device-problems/missing-signal-data/)
- [Health metrics](/reference/health-metrics/)
