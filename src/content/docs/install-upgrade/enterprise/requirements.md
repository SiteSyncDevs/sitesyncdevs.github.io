---
title: "Requirements"
description: "What you need before installing SiteSync Enterprise."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

## Requirements

- An **Ignition gateway** with access to the web configuration page.
- An **Ignition Identity Provider** configured with:
  - an **administrator** role — users who manage the enterprise application, and
  - a **general** role — users who sign in to the Field App.
- **Network access to your LoRa Network Server API** (port is network-server dependent) and to your **MQTT broker** (port `8883`).
- **Credentials for network-server API access**.

## Required files

- The SiteSync LoRaWAN **Enterprise** module (`.modl`).
- The **SiteSync Source** (parent), **Enterprise Management**, and **Field App** Perspective project files.

All are installed through the Gateway web configuration page.

## Next step

[Install the module](/install-upgrade/install-module/).
