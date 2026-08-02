---
title: "Send a downlink"
description: "Send a command or configuration to a device from the downlink configurator."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Send a downlink — a message from SiteSync to a device to change settings, trigger an action, or push a configuration.

## Steps

1. On the device page, select **Send Downlink** (Overview panel) or **Downlink Configurator** (Configuration panel).
2. Choose a tab:

   | Tab | Use |
   | --- | --- |
   | Preconfigured | Ready-made commands defined for this device type. Select one and send — no payload knowledge needed. |
   | Downlink Builder | A guided form that constructs a downlink from structured, device-specific fields. |
   | Ad Hoc | Advanced: enter a raw hex payload and a port (1–223). Optionally name it. Hex characters only (0–9, A–F). |

3. Send.

:::tip[Delivery timing]
Downlinks are queued and delivered on the device's next uplink. The device must be online and reachable — check **Check-in Status** in the Status panel before sending.
:::

:::note[Bulk downlinks]
To send the same downlink to many devices at once, use the **device profile page** — a bulk downlink applies to every device on that profile, rather than sending one device at a time.
:::

## Related pages

- Downlink concepts
- [Configure downlink profiles](/configure/device-profiles/downlink-profiles/)
- [Downlink remains queued](/troubleshoot/downlink-problems/queued/)
