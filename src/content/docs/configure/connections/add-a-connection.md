---
title: Add a connection
description: Create a connection to your LoRa Network Server by completing the MQTT and Join Server (API) forms.
products:
  - standard
  - enterprise-management
roles:
  - administrator
introduced: 1.0.0
contentType: task
lastReviewed: 2026-07-30
owner: ''
---

## Goal

Connect SiteSync to your LoRa Network Server so device data flows in (MQTT) and SiteSync can provision devices (API).

## Before you begin

:::note[Prerequisites]

- Know which [supported network server](/configure/network-servers/supported/) you run.
- Have your MQTT broker address and, where required, MQTT credentials.
- Have your LNS API endpoint, application ID, and an API token or service-account credentials with the required permissions.
:::

:::note[Open firewall access from the Ignition gateway]
Connections are initiated **outbound from the Ignition gateway**, so make sure the gateway can reach your broker and network-server API through the firewall. Ports depend on your setup — typical ports are `1883` and `8883` (MQTT) and `8090` (network-server API). The MQTT connection status is tracked in a managed Ignition tag and updates in real time — see [Connection health](/configure/connections/health/).
:::

## Steps

1. In the left sidebar, select **Connections**.
2. Complete **both** forms — one for the **MQTT** connection (data ingress) and one for the **Join Server / LNS API** connection. Both are required.
3. Enter the connection details: connection name, credentials, and any configuration options. Exact fields differ per network server — see [Network servers](/configure/network-servers/supported/).
4. **Save your settings**.

![](/screenshots/pasted-image-1785445059933.png)

## Worked example — ChirpStack

A single-connection ChirpStack setup might look like this:

**MQTT connection**

| Field | Value |
| --- | --- |
| Broker URL or IP address | `chirpstack.example.com` |
| Port | `1883` |
| MQTT topic | `application/1/device/+/event/up` |
| Username / Password | `sitesync` / your broker password |

**Join Server (API) connection**

| Field | Value |
| --- | --- |
| URL | `https://chirpstack.example.com:8090` |
| Application ID | `1` |
| Device Profile ID | `f2c1a0b4-...` (from ChirpStack) |
| API Token | generated in ChirpStack under **API Keys** |

Ingesting from two ChirpStack applications on the **same broker**? Use one connection with both topics, separated by a semicolon:

```text
application/1/device/+/event/up;application/2/device/+/event/up
```

See ChirpStack for where each value comes from, and [Configure MQTT](/configure/connections/configure-mqtt/#multiple-topics-on-one-broker) for multi-topic details.

## Expected result

The connection is saved and its status begins reporting on the Connections list. See [Connection health](/configure/connections/health/).

## Verify

1. Confirm **Save and test** reports success (see [Test a connection](/configure/connections/test-a-connection/)).
2. Confirm the connection shows **Active** on the Connections list.

## Related pages

- [Configure MQTT](/configure/connections/configure-mqtt/)
- [Configure network-server API access](/configure/connections/configure-api/)
- [Connection errors](/configure/connections/errors/)
