---
title: "Configure network-server API access"
description: "Configure the Join Server (REST API) half of a connection so SiteSync can provision and manage devices."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Configure the Join Server (REST API) connection SiteSync uses to register and manage devices in your LNS.

## Common fields

| Field | Description |
| --- | --- |
| URL | The API endpoint of your LNS instance (include the port where required). |
| Application ID | The LNS application/connection devices are synced into. |
| API token or service account | Credentials with permission to view and create devices, view/edit device keys, and write downlinks. |

The exact URL, IDs, and credential type depend on your network server. Pick yours:

- [ChirpStack](/configure/network-servers/chirpstack/)
- [Actility ThingPark](/configure/network-servers/actility-thingpark/)
- [The Things Stack (TTN/TTS/TTI)](/configure/network-servers/the-things-stack/)
- [Loriot](/configure/network-servers/loriot/)
- [Multitech Conduit](/configure/network-servers/multitech/)

## Related pages

- [Configure MQTT](/configure/connections/configure-mqtt/)
- [Test a connection](/configure/connections/test-a-connection/)
