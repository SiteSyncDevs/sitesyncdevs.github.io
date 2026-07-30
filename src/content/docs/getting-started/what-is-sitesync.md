---
title: "What is SiteSync?"
description: "SiteSync connects a LoRaWAN network server to Ignition — onboarding devices, modeling data as tags, and surfacing diagnostics."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

SiteSync is an easy way to onboard, diagnose, model, and process IIoT data. It is a plug-in extension of your existing Ignition SCADA system that helps you onboard LoRaWAN devices with context, create UDTs and tags in Ignition to represent the data collected, and alert when issues arise. The goal is to get your IIoT data normalized, modeled, and ready to consume — in Ignition or a downstream system.

## What SiteSync does

SiteSync lets you:

- **Integrate with the LoRa Network Server (LNS) of your choice** — ChirpStack, Actility ThingPark, Loriot, or The Things Stack — in any hosting model (air-gapped, on-prem, private cloud, or public cloud).
- **Onboard LoRa devices** by scanning a QR code in the Perspective mobile app, uploading a spreadsheet, or filling out a form.
- **Use the existing device-profile library or extend it** with custom profiles, including mapping of templates for downstream integrations.
- **Manage device configuration** through sensor-specific downlinks.
- **Diagnose and troubleshoot** deployed devices that are showing undesirable behavior.

## How the pieces fit together

A LoRaWAN device transmits to a gateway, which forwards to your LoRa Network Server. SiteSync receives that traffic (over MQTT and the LNS API), decodes the payload, and writes structured values into Ignition tags and UDTs. Operators view and act on that data in Perspective; downlinks flow back out through the network server. See [Architecture](/getting-started/architecture/) for the full data flow.

## Standard vs Enterprise

**SiteSync Standard** is a standalone deployment for a single site that doesn't need multi-site structure or role separation.

**SiteSync Enterprise** supports multiple sites and separates responsibilities:

- **Enterprise Management** lets a central team manage the administrative side — credentials, connections to IT infrastructure, decoders, device profiles, and sites — across the whole fleet.
- The **Field App** exposes only device onboarding and management to site users, who see only the devices for their assigned site. They can add a device, watch data start reporting, and move on — without touching the underlying infrastructure or LoRa stack.

For a capability-by-capability breakdown, see the [Product comparison](/getting-started/product-comparison/).

## Where to go next

1. Compare the products on the [Product comparison](/getting-started/product-comparison/) page.
2. Understand the [Architecture](/getting-started/architecture/).
3. Pick a quick start: [Standard](/getting-started/quick-start-standard/), [Enterprise admin](/getting-started/quick-start-enterprise/), or [Field App](/getting-started/quick-start-field-app/).
