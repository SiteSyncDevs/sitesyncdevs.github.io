---
title: "Glossary and terminology"
description: "Definitions of SiteSync and LoRaWAN terms, plus the LoRaWAN identifiers and radio terms used across SiteSync."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-31"
---

## Terms

- **Connection** — a configured link to your LNS (MQTT for data, REST API for provisioning).
- **Decoder** — parses a raw payload into named values (JavaScript or API).
- **Device profile** — reusable template (decoder, UDT, values, downlinks) per sensor type.
- **Downlink** — a message sent from SiteSync to a device.
- **Field App** — the site-facing app for onboarding and monitoring.
- **LNS** — LoRa Network Server (ChirpStack, Actility ThingPark, The Things Stack, Loriot, Multitech Conduit).
- **Missed Check-in** — device hasn't reported within its expected interval (formerly "Offline").
- **Needs Attention** — a device that is Missed Check-in, Critical battery, or Fair/Poor signal.
- **Site** — the organizational unit every device belongs to (Enterprise).
- **SiteSync Source** — the parent Perspective project the Enterprise projects (Enterprise Management, Field App) inherit from.
- **UDT** — Ignition User Defined Template defining the structure of decoded data.
- **Uplink** — a message sent from a device to the network.

## Identifiers and radio terms

| Term | Meaning |
| --- | --- |
| DevEUI | The device's unique 64-bit hardware identifier (16 hex characters). On the device label. |
| JoinEUI / AppEUI | Identifies the join server / application the device joins (16 hex characters). "AppEUI" is the older name for the same value. |
| AppKey | The 32-hex-character root key used to secure OTAA joins. |
| Frame counter (fCntUp) | Increments by 1 per uplink; gaps indicate dropped packets (used for [packet delivery](/reference/health-metrics/#packet-delivery-24-hour)). |
| RSSI | Received Signal Strength Indicator (dBm) — how strong the signal is at the gateway. Closer to 0 is stronger. |
| SNR | Signal-to-Noise Ratio (dB) — how clearly the signal stands out from noise. Higher is better. |
| Spreading factor (SF) | The LoRa data-rate setting. Lower SF = faster, shorter range; higher SF = slower, longer range. |
| Device class | LoRaWAN class. **Class A** listens only briefly after an uplink; **Class C** listens continuously (see [Class A timing](/troubleshoot/downlink-problems/class-a-timing/)). |

## Related pages

- [Health metrics](/reference/health-metrics/)
