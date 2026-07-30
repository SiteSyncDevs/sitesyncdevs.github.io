---
title: "Loriot"
description: "Connect SiteSync to a LORIOT network server."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "integration"
lastReviewed: "2026-07-30"
---

LORIOT is a Swiss LoRaWAN network server provider, available as a hosted service or on-premises. The values below are based on the USPRO edition.

## MQTT connection

LORIOT outputs data to an external MQTT broker. Configure SiteSync to subscribe to that same broker.

| Field | Value |
| --- | --- |
| Broker URL or IP address | Your external MQTT broker address. |
| Port | Usually `1883`, or `8883` for TLS. |
| MQTT topic | User defined. |

:::note[Multiple topics]
To ingest from several applications on this broker, put multiple topics in the MQTT topic field separated by a semicolon (`;`). This works on any broker regardless of version — see [Configure MQTT](/configure/connections/configure-mqtt/#multiple-topics-on-one-broker).
:::

## Join Server (API) connection

| Field | Value |
| --- | --- |
| URL | The URL of your LORIOT instance. |
| Application ID | The LORIOT application to sync devices into. Found on the application's main page. |
| API Token | Generated in LORIOT under **Account → API Keys**. |

## Related pages

- [Add a connection](/configure/connections/add-a-connection/)
- [Test a connection](/configure/connections/test-a-connection/)
