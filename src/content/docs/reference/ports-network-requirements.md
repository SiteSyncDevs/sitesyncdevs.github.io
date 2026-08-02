---
title: "Ports and network requirements"
description: "The network access SiteSync needs."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

SiteSync needs outbound access to your LoRa Network Server and MQTT broker.

| Purpose | Port |
| --- | --- |
| MQTT broker | `8883` (TLS); some servers use `1883` |
| LoRa Network Server API | Network-server dependent |

:::note[Connections are outbound from the Ignition gateway]
Connections are initiated **from the Ignition gateway server** — they are outbound connections to your services, not inbound to the gateway. Make sure the gateway's firewall allows outbound access to your broker and network-server API on the ports above. If a firewall blocks the traffic, connections time out.
:::
