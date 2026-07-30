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

If a firewall blocks traffic, connections time out. Ensure SiteSync's IP ranges are allowlisted.

:::note[IP allowlist]
Contact SiteSync support for the current list of IP ranges to allowlist. Add the definitive port/host list here once confirmed.
:::
