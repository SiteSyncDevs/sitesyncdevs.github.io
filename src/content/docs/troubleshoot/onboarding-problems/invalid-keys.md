---
title: "Invalid device keys"
description: "The join keys don't match the network server."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The device saved but never joins, because the **Dev EUI**, **App EUI/JoinEUI**, or **App Key** don't match what's registered on the LNS.

## Check these first

1. Compare each key against the device label and the network server.
2. Dev EUI is 16 hex characters; App Key is 32 hex characters.

## Resolution

Correct the keys via [Edit a device](/use/edit-device/) and power-cycle the device.

## Related pages

- [Device never activated](/troubleshoot/device-problems/never-activated/)
