---
draft: true
title: "ChirpStack"
description: "Connect SiteSync to a ChirpStack LoRa Network Server."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "integration"
lastReviewed: "2026-07-30"
---

ChirpStack is an open-source LoRaWAN network server. The values below assume **default** ChirpStack settings — confirm with whoever set up your instance if it has been customized.

## MQTT connection

| Field | Value |
| --- | --- |
| Broker URL or IP address | The URL you use to access your ChirpStack instance, without `http://`. |
| Port | `1883` (default). |
| MQTT topic | `application/{chirpstack-application-id}/device/+/event/up` — replace `{chirpstack-application-id}` with your application's ID. |
| Username / Password | Not required by default. SiteSync recommends enabling authentication to secure your broker data. |

:::note[Multiple topics]
To ingest from several applications on this broker, put multiple topics in the MQTT topic field separated by a semicolon (`;`). This works on any broker regardless of version — see [Configure MQTT](/configure/connections/configure-mqtt/#multiple-topics-on-one-broker).
:::

## Join Server (API) connection

| Field | Value |
| --- | --- |
| URL | The URL of your ChirpStack instance, including port `8090`. |
| Application ID | The ChirpStack application to sync devices into. Found on the application's main page. |
| Device Profile ID | The default device profile applied to synced devices. Found on a device profile's main page. Start generic and customize as needs grow. |
| API Token | Generated in ChirpStack under **API Keys**. |

## Related pages

- [Add a connection](/configure/connections/add-a-connection/)
- [Test a connection](/configure/connections/test-a-connection/)
