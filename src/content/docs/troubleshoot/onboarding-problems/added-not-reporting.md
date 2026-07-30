---
title: "Device added but not reporting"
description: "A device saved successfully but no data appears."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The device is in SiteSync but shows no values. Use the [Communication Flow](/troubleshoot/device-diagnostics/) to find where data stops.

## Work the flow

1. **Device** old/blank → not transmitting: check power, placement, and interval → [Missed check-in](/troubleshoot/device-problems/missed-check-in/) / [Never activated](/troubleshoot/device-problems/never-activated/).
2. **Gateway** missing → coverage problem.
3. **MQTT In** error → [connection issue](/troubleshoot/connection-problems/mqtt-disconnected/).
4. **Decoder** error → [decode error](/troubleshoot/device-problems/decode-error/).

## Related pages

- [Validate activation](/use/add-device/validate-activation/)
- [Device diagnostics workflow](/troubleshoot/device-diagnostics/)
