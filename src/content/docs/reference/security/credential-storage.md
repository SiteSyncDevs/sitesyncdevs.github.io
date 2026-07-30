---
draft: true
title: "Credential storage"
description: "How SiteSync stores connection credentials."
products: ["standard", "enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

SiteSync stores connection credentials (MQTT and LNS API) in **encrypted form locally**. In Enterprise, connections are configured at the organization level in Enterprise Management and used implicitly by Field App users — the underlying credentials are never exposed to Field App users.

:::note[Confirm specifics]
Add specifics on encryption at rest, key handling, and credential rotation. Confirm with SiteSync Product.
:::
