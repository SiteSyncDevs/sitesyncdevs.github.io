---
title: "Multi-site operating model"
description: "How Enterprise organizes devices and people across sites."
products: ["enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

Enterprise centers on **sites** — physical locations or logical groupings that every device belongs to.

- A **central team** uses Enterprise Management to manage infrastructure (connections, credentials), decoders, device profiles, and sites, and to monitor the whole fleet.
- **Site users** use the Field App and see only the devices for their assigned site — never the underlying infrastructure or credentials.

This separation lets site users add a device and watch data start reporting without touching the LoRa stack, while the central team owns the platform.

## Related pages

- [Understand sites](/configure/sites/understand-sites/)
- [Roles and access](/products/enterprise/roles-and-access/)
