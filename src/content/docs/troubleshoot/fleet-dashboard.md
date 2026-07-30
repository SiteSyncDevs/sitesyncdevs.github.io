---
draft: true
title: "Fleet dashboard"
description: "Assess fleet-wide health at a glance and drill into problem sites."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

The dashboard gives a real-time view of every device across all sites, so you can triage without navigating site by site. Open it with **Dashboard** in the left sidebar.

## What it shows

- **Critical issues banner** — a red banner appears when devices are offline (e.g. "76 devices are offline and require immediate attention"). It clears automatically when they recover.
- **Summary cards** — Total Devices, Offline Devices, Critical Battery, and Weak Signal counts for the whole fleet.
- **Fleet health score** — a 0–100 score with a plain-language rating:

  | Score | Rating |
  | --- | --- |
  | 90–100 | Excellent |
  | 75–89 | Good |
  | 50–74 | Fair |
  | 25–49 | Poor |
  | 0–24 | Critical |

- **Status bar** — a proportional bar of device states (green online, amber low battery, red offline).
- **Battery Distribution** and **Signal Quality Distribution** panels — how battery and signal are spread across the fleet.
- **Filter by Site** — scope every panel to one site.
- **Your Sites** — a card per site (health score, device count, online count, alerts), ordered worst-first.

:::caution[Thresholds — use the canonical model]
For the exact battery and signal thresholds, follow [Health metrics](/reference/health-metrics/) (battery Good ≥ 3.5 V / ≥ 30%; dual-margin signal in dB). An older dashboard doc lists different bands (RSSI ≥ 80 "score", battery > 50%); those predate the 1.0.0 model and are being reconciled — see the conflict log.
:::

## Related pages

- [Site dashboard](/troubleshoot/site-dashboard/)
- [Health metrics](/reference/health-metrics/)
