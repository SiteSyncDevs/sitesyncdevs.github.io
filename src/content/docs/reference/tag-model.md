---
draft: true
title: "Tag model"
description: "How SiteSync structures device data in the Ignition tag provider."
products: ["standard", "enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

SiteSync writes decoded device data into the Ignition tag provider using each device profile's UDT. The full model — hierarchy, standard device tags, diagnostic (`LoRaMetrics`) tags, and metadata — is described in [SiteSync tag model](/configure/udts-and-tags/tag-model/), and the diagnostic tag paths are listed in [Health metrics](/reference/health-metrics/).

:::note[Complete the tag hierarchy]
Add the full tag tree (folder path template, standard tags, diagnostic tags, metadata tags, and data types). Confirm with SiteSync Product — tracked in the open questions.
:::
