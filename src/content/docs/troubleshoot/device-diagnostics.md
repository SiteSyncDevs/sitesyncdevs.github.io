---
title: "Device diagnostics workflow"
description: "Use the Communication Flow to find exactly where a device's data stops flowing."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

When a device isn't reporting, the fastest diagnosis is the **Communication Flow** on the device's Status & Diagnostics page (open the device, then **View Full Diagnostics**).

## Read the flow left to right

The flow shows each step the device's data takes to reach SiteSync:

1. **Device** — when it last transmitted (time elapsed). A very old timestamp → the device isn't transmitting (check power/placement/interval).
2. **Gateway** — the gateway that received the message. Missing → no gateway heard it (check coverage).
3. **MQTT In** — whether SiteSync is connected to the broker and receiving. Error → an infrastructure/[connection](/configure/connections/health/) issue.
4. **Decoder** — whether the payload decoded without errors. Error → usually a [decoder/profile](/configure/device-profiles/assign-decoder/) misconfiguration.

Wherever the chain first breaks is where to act.

## What to check on the device page first

- **Status panel** — battery, signal score, and check-in status.
- **Diagnostics panel** — RSSI, SNR, last gateway, spreading factor, frame count.
- **Activity log** — recent events and errors.

:::note[Source discrepancy — confirm]
An older management doc describes a "Run diagnostic" tool and Summary/Events/Metrics tabs with CPU/memory/firmware/certificate checks. Those don't match the current LoRaWAN device page (Overview/Status/Values/Diagnostics/Profile/Alerts/Activity) and the Communication Flow. Confirm which UI is current before documenting a "Run diagnostic" action.
:::

## Related pages

- [The device page](/use/device-page/)
- [Device added but not reporting](/troubleshoot/onboarding-problems/added-not-reporting/)
- [Health metrics](/reference/health-metrics/)
