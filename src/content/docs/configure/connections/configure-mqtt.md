---
title: "Configure MQTT"
description: "Configure the MQTT half of a connection so SiteSync receives live device uplinks."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Configure the MQTT connection SiteSync uses to receive live device data.

## Common fields

| Field | Description | Example |
| --- | --- | --- |
| Broker URL or IP address | The address of your MQTT broker (or LNS with built-in MQTT), without the `http://` scheme. | `chirpstack.example.com` |
| Port | Usually `1883`, or `8883` for TLS. | `1883` |
| MQTT topic | The topic pattern uplinks are published to. Format is network-server specific. | `application/1/device/+/event/up` |
| Username / Password | Required by some network servers; optional but recommended for others. | `sitesync` / `••••••` |

:::tip[Secure your broker]
Where authentication is optional (for example, default ChirpStack), SiteSync recommends enabling it to protect your broker data.
:::

## Multiple topics on one broker

A single broker connection can subscribe to **multiple topics** at once. Separate them with a **semicolon (`;`)**. This works for **any MQTT broker, regardless of network server or version**:

```text
application/1/device/+/event/up;application/2/device/+/event/up
```

This is useful when devices are split across several applications on the same broker. (This is different from multiple *connections* — see [Connection concepts](/configure/connections/concepts/#how-many-connections).)

## Per-network-server settings

The exact broker address, port, and topic depend on your network server. Pick yours:

- [ChirpStack](/configure/network-servers/chirpstack/)
- [Actility ThingPark](/configure/network-servers/actility-thingpark/)
- [The Things Stack (TTN/TTS/TTI)](/configure/network-servers/the-things-stack/)
- [Loriot](/configure/network-servers/loriot/)
- [Multitech Conduit](/configure/network-servers/multitech/)

## Common issues

- **No data arriving:** confirm the broker URL and port, and that the Ignition gateway can reach the broker through your firewall (typically `1883`, or `8883` for TLS). The MQTT status is polled every 30 seconds — check [Connection health](/configure/connections/health/).
- **Connected but no values:** the topic pattern may not match your application, or the device still needs a decoder — see [Decode error](/troubleshoot/device-problems/decode-error/).
- **Auth rejected:** re-check the MQTT username and password; some brokers require authentication.

For deeper help, see [MQTT disconnected](/troubleshoot/connection-problems/mqtt-disconnected/).

## Related pages

- [Configure network-server API access](/configure/connections/configure-api/)
- [Test a connection](/configure/connections/test-a-connection/)
