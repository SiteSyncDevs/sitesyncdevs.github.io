---
title: "Supported network servers"
description: "The LoRa Network Servers SiteSync connects to, and how to reach each one's setup guide."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-31"
---

SiteSync connects to your LoRaWAN network server two ways — an **MQTT** connection (live device data) and a **Join Server API** connection (registering and managing devices). Both are required, and the fields differ by network server.

## Supported

| Network server | Setup guide |
| --- | --- |
| ChirpStack | [ChirpStack](/configure/network-servers/chirpstack/) |
| Actility ThingPark (TPC / TPE / on-prem) | [Actility ThingPark](/configure/network-servers/actility-thingpark/) |
| The Things Network / Stack / Industries (TTN/TTS/TTI) | [The Things Stack](/configure/network-servers/the-things-stack/) |
| Loriot | [Loriot](/configure/network-servers/loriot/) |
| Multitech Conduit (onboard LNS) | [Multitech Conduit](/configure/network-servers/multitech/) |

## Related pages

- [Connection concepts](/configure/connections/concepts/)
- [Add a connection](/configure/connections/add-a-connection/)
