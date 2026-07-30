---
draft: true
title: "Other or custom integrations"
description: "Multitech Conduit onboard LNS and other custom MQTT/API integrations."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "integration"
lastReviewed: "2026-07-30"
---

## Multitech Conduit

The Multitech Conduit 300 and mPower models are LoRaWAN gateways with an onboard edge network server.

### MQTT connection

The Conduit outputs data to an external MQTT broker. Configure SiteSync to subscribe to that same broker.

| Field | Value |
| --- | --- |
| Broker URL or IP address | Your external MQTT broker address. |
| Port | Usually `1883`, or `8883` for TLS. |
| MQTT topic | User defined. |

:::note[Multiple topics]
To ingest from several applications on this broker, put multiple topics in the MQTT topic field separated by a semicolon (`;`). This works on any broker regardless of version — see [Configure MQTT](/configure/connections/configure-mqtt/#multiple-topics-on-one-broker).
:::

### Join Server (API) connection

| Field | Value |
| --- | --- |
| URL | The URL where you access the Conduit. HTTPS is recommended. |
| Username | A username on the Conduit. Create a dedicated service account, separate from the management login. |
| Password | The corresponding password. |

:::note[Default application]
SiteSync adds devices to the onboard application `01-01-01-01-01-01-01-01` by default. Set your output broker ID to the same value. For help getting data out of the Conduit, contact Multitech Support or SiteSync support.
:::

## Custom integrations

Architectures that need multiple connections or a non-standard broker/API are handled per deployment.

:::note[Needs input]
Document the supported custom patterns here (e.g. shared broker with per-tenant topics). Source material is thin — confirm with SiteSync Product.
:::

## Related pages

- [Add a connection](/configure/connections/add-a-connection/)
- [Supported network servers](/configure/network-servers/supported/)
