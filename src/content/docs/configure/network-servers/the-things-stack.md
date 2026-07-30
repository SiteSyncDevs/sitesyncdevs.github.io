---
title: "The Things Stack (TTN / TTS / TTI)"
description: "Connect SiteSync to The Things Network / Stack / Industries."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "integration"
lastReviewed: "2026-07-30"
---

The Things Network (also called The Things Stack or The Things Industries) is an open-source LoRaWAN network server available as public cloud or a private hosted instance. The values below are based on the community edition.

## MQTT connection

TTN has a built-in MQTT integration. To enable it, open your TTN application, go to **Integrations**, and select **MQTT**.

| Field | Value |
| --- | --- |
| Broker URL or IP address | The **Public address** from the MQTT Server host field in TTN, without the port. |
| Port | The MQTT Server host port: `1883`, or `8883` for TLS. |
| MQTT topic | `v3/{username}/devices/+/up` — replace `{username}` with your TTN MQTT username. |
| Username / Password | Required. Authentication is ACL-bound — use the MQTT username and generated password from TTN. |

:::note[Multiple topics]
To ingest from several applications on this broker, put multiple topics in the MQTT topic field separated by a semicolon (`;`). This works on any broker regardless of version — see [Configure MQTT](/configure/connections/configure-mqtt/#multiple-topics-on-one-broker).
:::

## Join Server (API) connection

| Field | Value |
| --- | --- |
| URL | The URL of your TTN instance. |
| Application ID | The TTN application to sync devices into. Found on the application's main page. |
| API Token | Generated within your TTN application, scoped to that app. |

Required token permissions: **View devices**, **View device keys**, **Create devices**, **Edit device keys**, and **Write downlink application traffic**.

## Related pages

- [Add a connection](/configure/connections/add-a-connection/)
- [Test a connection](/configure/connections/test-a-connection/)
