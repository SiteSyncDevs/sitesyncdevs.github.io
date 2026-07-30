---
title: "Connection field reference"
description: "The fields on the MQTT and Join Server (API) connection forms."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

## MQTT connection

| Field | Notes |
| --- | --- |
| Broker URL / IP | Without the scheme. |
| Port | `1883`, or `8883` for TLS. |
| MQTT topic | Network-server specific; multiple topics separated by `;`. |
| Username / Password | Required by some servers. |

## Join Server (API) connection

| Field | Notes |
| --- | --- |
| URL | LNS API endpoint (include port where required). |
| Application ID | The LNS application to sync into. |
| API token / service account | With device view/create and downlink permissions. |

Exact values per network server: [ChirpStack](/configure/network-servers/chirpstack/), [Actility ThingPark](/configure/network-servers/actility-thingpark/), [The Things Stack](/configure/network-servers/the-things-stack/), [Loriot](/configure/network-servers/loriot/), [Other](/configure/network-servers/other/).
