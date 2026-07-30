---
draft: true
title: "Select the primary connection"
description: "In Enterprise, the primary connection is the one used to add devices to the network server; other connections handle additional data ingress."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

When you have more than one connection, choose which one SiteSync uses to provision devices.

:::note[Enterprise Management only]
Multiple connections are an **Enterprise Management** capability. **SiteSync Standard supports a single connection**, so there is no primary to select.
:::

## What "primary" means

The **primary connection** is the one SiteSync uses to **add devices to the network server** — new devices are registered against it.

Additional connections can be used for **other data ingress** — for example, a separate MQTT broker feeding data from another source (such as an Aloxy broker). This lets one deployment provision devices through its main LNS while still ingesting data from other brokers.

## Steps

1. In the left sidebar, select **Connections**.
2. Ensure each required connection is configured and healthy — see [Add a connection](/configure/connections/add-a-connection/).
3. Set the connection you provision devices through as the **primary** connection.

:::note[Confirm the exact control]
The concept above is confirmed. The precise UI control for marking a connection primary should be captured with a screenshot when available.
:::

## Related pages

- [Connection concepts](/configure/connections/concepts/)
- [Add a connection](/configure/connections/add-a-connection/)
