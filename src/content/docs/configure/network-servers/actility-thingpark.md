---
title: "Actility ThingPark"
description: "Connect SiteSync to an Actility ThingPark network server."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "integration"
lastReviewed: "2026-07-30"
---

ThingPark is an enterprise LoRaWAN network server by Actility, available as a community edition (TPC), enterprise edition (TPE), or self-hosted on-premise. The values below are based on the community edition.

## MQTT connection

ThingPark outputs data to an external MQTT broker. Configure SiteSync to subscribe to that same broker.

| Field | Value |
| --- | --- |
| Broker URL or IP address | Your external MQTT broker address. |
| Port | Usually `1883`, or `8883` for TLS. |
| MQTT topic | `mqtt/things/+/uplink` (default — editable in ThingPark). |

:::note[Multiple topics]
To ingest from several applications on this broker, put multiple topics in the MQTT topic field separated by a semicolon (`;`). This works on any broker regardless of version — see [Configure MQTT](/configure/connections/configure-mqtt/#multiple-topics-on-one-broker).
:::

## Join Server (API) connection

| Field | Value |
| --- | --- |
| URL | Your ThingPark instance URL. Community edition: `https://community.thingpark.io/`. |
| Application ID | The ThingPark connection to sync devices into — the full **ID** string from your Connection's main page. |
| Username | The username of the service account created for SiteSync. Create it in **Administration → Service Accounts**, granting the *Devices, multicast groups, and connections manager* permission. |
| Password | The corresponding service-account password. |

## Related pages

- [Add a connection](/configure/connections/add-a-connection/)
- [Test a connection](/configure/connections/test-a-connection/)
