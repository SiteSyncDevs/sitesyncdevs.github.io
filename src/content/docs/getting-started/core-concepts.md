---
title: "Core concepts"
description: "The handful of ideas that everything else builds on."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

A quick map of the core ideas, each linking to its full page.

- **Site** — the organizational unit every device belongs to (Enterprise). See [Understand sites](/configure/sites/understand-sites/).
- **Connection** — the link to your LNS: MQTT for data, REST API for provisioning. See [Connection concepts](/configure/connections/concepts/).
- **Device profile** — a reusable template (decoder + UDT + values + downlinks) per sensor type. See [Device-profile concepts](/configure/device-profiles/concepts/).
- **Decoder** — parses a raw payload into named values (JavaScript or API). See [Decoder concepts](/configure/decoders/concepts/).
- **UDT & tags** — the Ignition structure decoded data is written into. See SiteSync tag model.
- **Uplink / downlink** — data from the device / commands back to it. See [Send a downlink](/use/send-downlink/).
- **Health metrics** — signal, battery, packet delivery, status, and Site Health Score. See [Health metrics](/reference/health-metrics/).

## Related pages

- [Architecture](/getting-started/architecture/)
- [Product comparison](/products/enterprise/standard-vs-enterprise/)
