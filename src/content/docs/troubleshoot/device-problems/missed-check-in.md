---
title: "Device missed check-in"
description: "The device joined before but hasn't reported within its expected interval."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The device previously reported but hasn't checked in within the interval defined on its [device profile](/configure/device-profiles/fields/#advanced-settings). It shows **Missed Check-in** (formerly "Offline").

## Most likely causes

- Device power loss or depleted battery.
- Lost radio coverage (gateway down, moved, or obstructed).
- The profile's **Message Interval** doesn't match the device's real reporting rate, so it's flagged too early.

## Check these first

1. **Last Seen** vs the profile's expected interval.
2. If **many devices at one site** missed check-in together, suspect a gateway/network outage at that site — not individual devices.
3. Battery level and signal on the Status panel.
4. The device's **signal score** — a low score means weak coverage, and the device may be dropping (missing) packets rather than being fully offline.

## Resolution

Restore power/coverage, or correct the profile Message Interval if it's set shorter than reality.

## Verify

Last Seen updates and status returns to **Online**.

## Related pages

- [Poor or fair signal](/troubleshoot/device-problems/poor-signal/)
- [Critical or warning battery](/troubleshoot/device-problems/critical-battery/)
