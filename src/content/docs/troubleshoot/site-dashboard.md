---
title: "Site dashboard"
description: "The same health view as the fleet dashboard, scoped to one site — plus the Needs Attention action list."
products: ["enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

Selecting a site card from the fleet dashboard opens the site view — the same structure, scoped to that site's devices.

## What it shows

- **Site header** — site name with its health score and rating (e.g. "40 – Poor"). **Edit Site** opens site settings.
- **Summary cards** — Total Devices, Offline Devices, Critical Battery, Weak Signal, for this site only.
- **Health score and status bar** — reflect only this site's devices.
- **Battery and Signal distribution** — as on the fleet view, scoped here.
- **Needs Attention** — every device at the site that is offline or flagged, with Device name, Status, Batt, RSSI, and a `>` arrow to open the device. This is your action list — work through each row.

:::tip[Whole-site outage]
If every device at a site is offline at once, suspect a network or gateway issue at that location before investigating devices individually.
:::

## Related pages

- Fleet dashboard
- [Device diagnostics workflow](/troubleshoot/device-diagnostics/)
