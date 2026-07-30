---
title: "Glossary"
description: "Short definitions of SiteSync and LoRaWAN terms."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

- **Connection** — a configured link to your LNS (MQTT for data, REST API for provisioning).
- **Decoder** — parses a raw payload into named values (JavaScript or API).
- **Device profile** — reusable template (decoder, UDT, values, downlinks) per sensor type.
- **Downlink** — a message sent from SiteSync to a device.
- **Field App** — the site-facing app for onboarding and monitoring.
- **LNS** — LoRa Network Server (ChirpStack, Actility ThingPark, The Things Stack, Loriot, Multitech Conduit).
- **Missed Check-in** — device hasn't reported within its expected interval (formerly "Offline").
- **Needs Attention** — a device that is Missed Check-in, Critical battery, or Fair/Poor signal.
- **Site** — the organizational unit every device belongs to (Enterprise).
- **SiteSync Source** — the parent Perspective project the product projects inherit from.
- **UDT** — Ignition User Defined Template defining the structure of decoded data.
- **Uplink** — a message sent from a device to the network.

See also [Terminology and identifiers](/reference/terminology/).
