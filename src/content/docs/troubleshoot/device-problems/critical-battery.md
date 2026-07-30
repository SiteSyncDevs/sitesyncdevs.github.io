---
title: "Critical or warning battery"
description: "The device's battery is low."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The device's battery is in the **Low (warning)** or **Critical** tier — see [Health metrics](/reference/health-metrics/#battery-health) (Good ≥ 3.5 V / ≥ 30%, Low 3.3–3.5 V / 15–30%, Critical < 3.3 V / < 15%).

## Resolution

Plan replacement or recharge before the device drops offline. Prioritize devices in **Critical**.

## Check these first

1. The battery reading on the Status panel.
2. Whether many devices are trending low at once (batch replacement opportunity).

## Verify

After replacement, the reading returns to **Good**.

## Related pages

- [Missing battery data](/troubleshoot/device-problems/missing-battery-data/)
- [Health metrics](/reference/health-metrics/)
