---
title: "Connection health"
description: "How SiteSync reports the health of the MQTT connection."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-31"
---

Connection health reflects the **MQTT** connection — the channel SiteSync uses to receive device data. SiteSync checks the MQTT connection **every 30 seconds** and writes the result to a managed Ignition tag; the Connections list simply displays that tag, so the status updates in near real time.

| Status | Meaning |
| --- | --- |
| Active | The MQTT connection is up and receiving data. |
| Failed | SiteSync cannot reach the broker, or the credentials are no longer valid. |
| Disabled | The connection has been manually paused. No data is being exchanged. |

<figure class="ss-shot" data-shot-id="EM-CONN-001" data-product="enterprise-management" data-viewport="desktop">
<figcaption>Connections list showing MQTT connection status.</figcaption>
</figure>

## Related pages

- [Configure MQTT](/configure/connections/configure-mqtt/)
- [MQTT disconnected](/troubleshoot/connection-problems/mqtt-disconnected/)
