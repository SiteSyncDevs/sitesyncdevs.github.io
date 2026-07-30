---
title: "MQTT disconnected"
description: "SiteSync isn't receiving device data from the broker."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The MQTT half of a connection is down, so uplinks stop arriving (the Communication Flow breaks at **MQTT In**). The connection may show **Degraded** or **Failed**.

## Most likely causes

- Broker unreachable (host/port wrong, broker down).
- Invalid or expired MQTT credentials.
- Firewall blocking the broker port (commonly `8883` for TLS, or `1883`).

## Check these first

1. [Connection health](/configure/connections/health/) status.
2. Broker URL, port, and credentials on the [MQTT connection](/configure/connections/configure-mqtt/).
3. That SiteSync's IP ranges are allowlisted through the firewall.

## Resolution

Fix the broker address/credentials or firewall rule, then **Save and test**.

## Related pages

- [Connection errors](/configure/connections/errors/)
- [Network or firewall issue](/troubleshoot/connection-problems/network-firewall/)
