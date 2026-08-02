---
title: "Multitech Conduit"
description: "Connect SiteSync to a Multitech Conduit onboard LoRaWAN network server."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "integration"
lastReviewed: "2026-07-31"
---

The Multitech Conduit 300 and mPower models are LoRaWAN gateways with an onboard edge network server.

## MQTT connection

The Conduit outputs data to an external MQTT broker. Configure SiteSync to subscribe to that same broker.

| Field | Value |
| --- | --- |
| Broker URL or IP address | Your external MQTT broker address. |
| Port | Usually `1883`, or `8883` for TLS. |
| MQTT topic | User defined. |

## Join Server (API) connection

| Field | Value |
| --- | --- |
| URL | The URL where you access the Conduit. HTTPS is recommended. |
| Username | A username on the Conduit. Create a dedicated service account, separate from the management login. |
| Password | The corresponding password. |

:::note[Default application]
SiteSync adds devices to the onboard application `01-01-01-01-01-01-01-01` by default. Set your output broker ID to the same value. For help getting data out of the Conduit, contact Multitech Support or SiteSync support.
:::

## Related pages

- [Add a connection](/configure/connections/add-a-connection/)
- [Supported network servers](/configure/network-servers/supported/)
