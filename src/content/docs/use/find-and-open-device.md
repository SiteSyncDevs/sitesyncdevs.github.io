---
title: "Find and open a device"
description: "Use Device Management to search, filter, and open any device across your fleet."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

Device Management is the central list of every device registered across all sites — a searchable, filterable table of your whole fleet. Open it by selecting **Devices** in the left sidebar.

## Summary cards

Four cards give a fleet-wide count at a glance:

| Card | What it shows |
| --- | --- |
| Total Devices | Every device registered across the enterprise. |
| Operational | Devices active and communicating normally. |
| Not Activated | Devices added but not yet in contact with the network. |
| Alerts | Devices with one or more active alerts. |

## The device table

One row per device. Default columns: **Status** (color-coded — green operational, orange not activated, red alert), **DevEUI**, **Name**, **Sensor Type**, **Signal** (Strong / Average / Poor / Bad), and **Last Seen**.

## Search and filter

- **Search** — type any part of a device name, Dev EUI, or description to filter in real time (partial matches supported).
- **All Sensor Types** — filter to one sensor type.
- **All Statuses** — filter by Operational, Not Activated, or Alerts.
- **Clear** — remove all filters and search.

:::tip
Filters and search combine — e.g. search `pump` and filter by **Alerts** to see only pump devices with active alerts.
:::

## Open a device

- **Web:** double-click the device's row.
- **Mobile:** tap the device's tile to open it, or scan its QR code to jump straight to its page. (Searching and filtering only narrow the list — tap the tile to open the device.)

## Related pages

- [The device page](/use/device-page/)
- [Export device data](/use/export-device-data/)
