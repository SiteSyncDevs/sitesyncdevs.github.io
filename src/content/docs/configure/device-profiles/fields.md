---
title: "Profile fields"
description: "Every field on a device profile — overview, integrations, LoRa specifications, and advanced settings."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

## Profile overview

| Field | Required | Description |
| --- | --- | --- |
| Device Profile Name | Yes | A unique name for this profile within SiteSync. Appears in the device list, the fleet Overview dashboard, and exported CSV data. |
| Manufacturer | No | The device manufacturer. Used for display and filtering. |
| Sensor Type | No | Categorizes the measurement the device produces (e.g. Current, Temperature, Voltage). |
| Firmware Version | No | The firmware this profile targets (e.g. `v1`). Typically `v1`. |
| Hardware Version | No | The hardware revision this profile targets. Used with Firmware Version to identify the physical variant. Typically `v1`. |

## Integrations

| Field | Required | Description |
| --- | --- | --- |
| Decoder | Yes | The payload decoder used to parse raw messages for devices on this profile. If none is selected, decoding fails for all devices on this profile. |
| UDT | Yes | The Ignition UDT (User Defined Template) that defines the structure of the decoded output. If none is selected, adding devices fails. |
| External Profile ID | No | Links this SiteSync profile to a profile/entity in an external system. Some network servers (Actility ThingPark, ChirpStack) require a device profile; a default is set per server but can be overridden here. The magnifying glass launches the Actility profile picker — select, then save the profile to apply it to future devices. |
| Primary Value | No | The headline metric from the device's payload (e.g. `.../data/maximumAmps`). Shown most prominently on the device detail page and fleet views. Requires a saved UDT. |
| Display Values | No | A comma-separated list of additional payload fields to show on the device values page (e.g. `averageAmps, temperatureCelsius`). Requires a saved UDT. |
| Limited Model | No | Links a custom data structure for integrations into other systems (e.g. PI). Pulls from the UDT folder `SiteSyncModels`. Implementations vary — contact support. |

## LoRa specifications

| Field | Description |
| --- | --- |
| Region | The LoRaWAN frequency plan for where devices are deployed (e.g. `US915` for North America). Primarily used for filtering today; richer LoRa profile settings are planned here. |

## Advanced settings

| Field | Description |
| --- | --- |
| Message Interval | How frequently (in seconds) the device should report — e.g. `1400` seconds ≈ every 23 minutes. This defines the expected check-in window used to decide whether a device has [missed a check-in](/troubleshoot/device-problems/missed-check-in/). |

## Fragment payloads

Some LoRa devices send a lot of data across many payloads (fragmentation). SiteSync can reassemble these into a decodable payload — for specific firmwares only.

| Field | Description |
| --- | --- |
| Fragment payloads | Checkbox, default off. When enabled, large payloads from this device are split into smaller messages and reassembled by SiteSync. Contact support if unsure whether your device needs this. |

## Related pages

- [Create a device profile](/configure/device-profiles/create/)
- [Configure tag paths](/configure/device-profiles/tag-paths/)
