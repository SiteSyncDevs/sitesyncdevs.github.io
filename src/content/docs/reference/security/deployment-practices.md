---
draft: true
title: "Recommended deployment practices"
description: "Security practices for production."
products: ["standard", "enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

- Enable authentication on your MQTT broker, even where it's optional by default.
- Use TLS (`8883`) for broker and API connections.
- Scope API tokens/service accounts to the minimum required permissions.
- Restrict who holds the administrator role; use the general role for site users.
- Back up the gateway before upgrades.
- Store device AppKeys and API secrets securely outside screenshots and shared docs.

:::note[Confirm]
Confirm additional production recommendations (network segmentation, audit logging) with SiteSync Product.
:::
