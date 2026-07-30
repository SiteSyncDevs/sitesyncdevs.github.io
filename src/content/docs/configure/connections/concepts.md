---
title: "Connection concepts"
description: "How SiteSync connects to your LoRa Network Server — MQTT for data, and a REST API for device provisioning."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

SiteSync connects to your LoRa Network Server (LNS) through two channels:

- **MQTT** — for data ingestion (receiving live uplinks from devices).
- **REST API (Join Server)** — for provisioning and managing devices in the LNS.

Both are required. You configure and manage them on the **Connections** tab.

## What a connection is

A connection is a configured link between SiteSync and your LNS and MQTT broker. In Enterprise, connections are set up **at the organization level** in Enterprise Management and used implicitly by Field App users — the underlying credentials are never exposed to Field App users.

:::tip[Credentials are encrypted]
SiteSync stores connection credentials in encrypted form locally.
:::

## How many connections?

- **SiteSync Standard** supports a **single connection**.
- **Enterprise Management** supports **multiple connections** — for example, provisioning devices through your main LNS while ingesting data from an additional broker (such as an Aloxy broker). One of them is the [primary connection](/configure/connections/primary-connection/), used to add devices to the network server.

:::note[One broker, many topics]
Multiple connections is different from multiple **topics**. A single broker connection can subscribe to several MQTT topics at once — see [Configure MQTT](/configure/connections/configure-mqtt/#multiple-topics-on-one-broker).
:::

## Next steps

1. [Add a connection](/configure/connections/add-a-connection/)
2. Configure the [MQTT](/configure/connections/configure-mqtt/) and [API](/configure/connections/configure-api/) halves for your network server.
3. [Test the connection](/configure/connections/test-a-connection/).
