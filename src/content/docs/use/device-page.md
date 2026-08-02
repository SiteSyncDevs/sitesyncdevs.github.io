---
title: "The device page"
description: "Every panel on a device's detail page — overview, status, values, configuration, diagnostics, profile, alerts, and activity."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

Every device has a detail page showing live values, health, diagnostics, alerts, activity, and configuration. Open it from a site overview, the fleet dashboard, or the **Devices** list.

## Overview

Device identity and quick actions: **Device EUI**, **Location** (or "No location set"), **Model**, **Firmware**, **Device Type**. Buttons: **Send Downlink** and **Set Location**. The pencil icon (top-right) opens editing.

## Status

Four health indicators:

| Indicator | Description |
| --- | --- |
| Battery | Current battery level as a percentage. `--` if not reported or not seen recently. |
| Signal Score | 0–100 score from RSSI and SNR. Below 50 may indicate connectivity issues. |
| Device Temperature | Internal hardware temperature (not the measured environment). |
| Check-in Status | Whether the device is checking in on schedule ("On Time" vs late/missed). |

## Values

Live readings as tiles (from the profile's **Display Values**), each with units — e.g. `AverageAmps (0 amps)`. **View Values** opens the full list. Below the tiles, a **24-hour Primary Value trend** chart appears when history logging is enabled.

## Configuration and downlinks

Shows the currently applied configuration. **Downlink Configurator** (or **Send Downlink**) opens the downlink tool — see [Send a downlink](/use/send-downlink/).

## Diagnostics

Raw LoRaWAN radio metrics from the most recent transmission: **RSSI**, **SNR**, **Voltage**, **Last Gateway**, **Spreading Factor**, **Frame Count**. **View Full Diagnostics** opens the Status & Diagnostics page, whose **Communication Flow** (Device → Gateway → MQTT In → Decoder) is the fastest way to find where data stops flowing.

## Device Profile

Summary of the assigned profile: Model Name, Manufacturer, Device Type, Device Class, Check-in Interval, Region. **View Full Profile** opens the [profile](/configure/device-profiles/concepts/).

## Alerts

Active and shelved alarms for this device, with Active Time, Display Path, Priority, State, Source, and Name. A healthy device shows **0 Active** alerts.

## Activity

A timestamped event log — e.g. "Successfully decoded message" each check-in — with Event, Level (INFO/WARNING), and time.

## Related pages

- [Send a downlink](/use/send-downlink/)
- Edit a device
- [Device diagnostics workflow](/troubleshoot/device-diagnostics/)
