---
title: "Wrong primary connection"
description: "Devices are being provisioned against the wrong connection."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

In a multi-connection Enterprise setup, the **primary** connection is the one used to add devices to the network server. If the wrong one is primary, new devices register in the wrong place.

## Resolution

Set the intended connection as primary — see [Select the primary connection](/configure/connections/primary-connection/). (Standard is single-connection, so this doesn't apply.)

## Related pages

- [Select the primary connection](/configure/connections/primary-connection/)
- [Connection concepts](/configure/connections/concepts/)
