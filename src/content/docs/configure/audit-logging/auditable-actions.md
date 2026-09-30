---
title: "What can be audited"
description: "The 60 auditable SiteSync actions across 8 areas, and what each record contains."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-09-30"
---

**60 actions across 8 areas** can each be switched on or off. All are **on by default** except *Network server connection tested*. Every record also carries the user, their IP address, the time, the app it came from, and whether it succeeded.

Turn individual actions on or off from the [Audit Log settings screen](/configure/audit-logging/configure/).

## Devices

| Action | What the record contains |
| --- | --- |
| Device created | DevEUI, name, serial number, profile, and site |
| Device added by bulk upload | The same as Device created, marked as a bulk upload |
| Bulk upload completed | One summary per upload: devices processed, succeeded, and failed |
| Device details edited | Each changed field, including location description, before → after |
| Device renamed | Old name → new name, from the device page or Tag Management |
| Tag path changed | Old tag path → new tag path, from the device page or Tag Management |
| Device type changed | Old device profile → new device profile |
| Device swapped | Old DevEUI → new DevEUI, device name, whether metadata was kept |
| Device metadata edited | Each changed metadata field, before → after |
| Install location changed | Old coordinates → new coordinates |
| Device photo uploaded | The device and image size |
| Device deleted | Name, tag path, network server, and any cleanup warnings |
| Device list exported | File name and number of rows (XLSX from Device Management) |
| Device activity exported | File name and number of rows (CSV from a device's activity page) |

## Downlinks

| Action | What the record contains |
| --- | --- |
| Downlink sent | Command, port, payload and size, frame number, device and tag, the screen it was sent from, encoder answers for built downlinks, and the network server's response |
| Downlink failed | Everything above, plus the error |
| Downlink command saved | Command name, port, payload, description, and device profile |
| Downlink command deleted | Command name, port, payload, and device profile |

## Device profiles

| Action | What the record contains |
| --- | --- |
| Device profile created | Profile name and ID |
| Device profile copied | Source profile and the new profile |
| Device profile details edited | Each changed general field (name, manufacturer, firmware, hardware, notes), before → after |
| LoRa specs changed | Each changed spec, e.g. Check-in interval: 14000 → 14005 |
| Decoder, encoder or UDT assignment changed | Old → new assignment, e.g. UDT: 1 → 3 |
| Primary value changed | Old value and unit → new value and unit |
| Display values changed | Values added to and removed from device cards |
| Device profiles imported | File name and size |
| Device profile deleted | Profile name and ID |

## Decoders and UDTs

| Action | What the record contains |
| --- | --- |
| Decoder created | Decoder name and type |
| Decoder code changed | Lines added and removed, and the new line count |
| Decoder renamed or type changed | Old → new name or type |
| Decoder API connection changed | Changed URL, format, or authentication; secrets shown only as "changed" |
| Decoder deleted | Decoder ID |
| UDT created | UDT name and site |
| UDT members changed | Members added, removed, and changed |
| UDT generated from a payload | UDT name |
| UDT deleted | UDT name and ID |

## Connections

| Action | What the record contains |
| --- | --- |
| Network server settings changed | Changed server type, URL, application, or credentials; secrets shown only as "changed" |
| Primary network server changed | Old → new primary network server |
| Network server connection tested | Passed or failed, with the server's message (**off by default**) |
| Connection created | Connection name and ID |
| Connection renamed | New name and ID |
| Connection deleted | Connection name and ID |
| MQTT broker settings changed | Changed address, port, protocol, TLS, or credentials; passwords shown only as "changed" |
| MQTT topics changed | Old topics → new topics |
| MQTT connection started | The connection and the broker's response |
| MQTT connection stopped | The connection and the broker's response |
| Enterprise settings changed | Changed MQTT export, deduplication, or Actility options |

## Sites and use cases

| Action | What the record contains |
| --- | --- |
| Site created | Site name and ID |
| Site details edited | Changed name, notes, or region, before → after |
| Site roles changed | The site's new roles |
| Site deleted | Site name and ID |
| Use case created | The site it belongs to |
| Use case edited | Old tag path → new tag path |
| Use case deleted | Tag path and ID |

## Sessions and sign-in

| Action | What the record contains |
| --- | --- |
| User signed in | User, roles, device type, and IP address |
| User signed out | User, from the Sign Out button or the identity provider |
| Session started | Device type and IP address, signed in or not |
| Session ended | How long the session lasted |

## Security and administration

| Action | What the record contains |
| --- | --- |
| Role permissions changed | Enforcement on/off, roles added or removed, and each changed grant, e.g. FieldTech delete: no → all sites |
| Troubleshooting logs downloaded | Who downloaded them and when |

:::caution[Audit-settings changes are always recorded]
Changes to the audit settings themselves are always recorded and cannot be switched off.
:::
