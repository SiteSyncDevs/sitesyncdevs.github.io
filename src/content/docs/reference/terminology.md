---
title: "Terminology and identifiers"
description: "LoRaWAN identifiers and radio terms used across SiteSync."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

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

- [Glossary](/reference/glossary/)
- [Health metrics](/reference/health-metrics/)
