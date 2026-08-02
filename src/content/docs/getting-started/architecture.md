---
title: "Architecture"
description: "How SiteSync sits between your LoRa Network Server and Ignition, and what it creates."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

SiteSync runs inside an Ignition gateway and bridges your LoRa Network Server (LNS) to Ignition tags.

## Data flow

```text
LoRaWAN device
      ↓  (radio)
LoRaWAN gateway
      ↓  (Semtech packet forwarder)
LoRa Network Server (LNS)
      ├─ MQTT uplinks ─▶ SiteSync ─▶ decoder ─▶ UDT / Ignition tags ─▶ Perspective
      └─ REST API ◀────  SiteSync  (provision devices, send downlinks)
```

1. A device transmits; a gateway forwards it to your LNS.
2. SiteSync receives uplinks over **MQTT**, runs the device's **decoder**, and writes values into **UDT-structured Ignition tags**.
3. Operators view and act on the data in **Perspective** (Enterprise Management or the Field App).
4. SiteSync provisions devices and sends **downlinks** through the LNS **REST API**.

## The pieces

- **Ignition gateway** — the platform SiteSync runs on.
- **SiteSync module** — decoding, provisioning, diagnostics, tag creation.
- **SiteSync Source** — the parent Perspective project; Standard, Enterprise Management, and Field App inherit from it.
- **Connections** — MQTT (data) + LNS REST API (provisioning). See [Connections](/configure/connections/concepts/).
- **Tag provider** — where device UDTs and diagnostic tags live.

## Related pages

- [What is SiteSync?](/getting-started/what-is-sitesync/)
- SiteSync tag model
