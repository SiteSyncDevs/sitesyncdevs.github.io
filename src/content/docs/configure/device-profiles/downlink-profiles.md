---
title: "Configure downlink profiles"
description: "Attach over-the-air configuration commands (downlinks) to a device profile."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Add downlinks — over-the-air configuration commands — to a device profile so they appear on devices for easy configuration.

Downlinks are linked to a device profile and show up on the device. Some profiles come pre-configured with downlinks; you can add your own.

## Add a downlink

To add a downlink you need:

| Field | Description |
| --- | --- |
| Hex payload | The command payload, in hex. |
| Friendly name | A human-readable name shown on the device. |
| Description | Logged to the device for future reference and traceability. |
| Port | The port the downlink is sent on. |

Once added, the downlink is available only on devices with this profile.

:::tip[Chaining commands]
To send several commands in one action — for example, setting a configuration and then applying it to device memory (a specific firmware requirement) — separate the hex values with a **semicolon**. They are sent in the order listed.
:::

## Bulk send

**Bulk Send** applies the same command to any existing devices in your fleet — helpful for pushing the same configuration across many devices at once.

## Related pages

- [Downlink concepts](/configure/downlinks/concepts/)
- [Send a downlink](/use/send-downlink/)
- [Device-class behavior](/configure/downlinks/device-class/)
