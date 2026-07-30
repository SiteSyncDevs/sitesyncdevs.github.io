---
title: "Connection health"
description: "Understand the Active, Degraded, Failed, and Disabled connection statuses."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

SiteSync monitors each connection and reports its status on the Connections list.

| Status | Meaning |
| --- | --- |
| Active | The connection is functioning normally. |
| Degraded | The connection is reachable but experiencing errors — some data may be failing to sync. |
| Failed | SiteSync cannot reach the external system, or the credentials are no longer valid. |
| Disabled | The connection has been manually paused. No data is being exchanged. |

<figure class="ss-shot" data-shot-id="EM-CONN-001" data-product="enterprise-management" data-viewport="desktop">
<figcaption>Connections list showing Active, Degraded, and Failed status indicators.</figcaption>
</figure>

## Related pages

- [Test a connection](/configure/connections/test-a-connection/)
- [Connection errors](/configure/connections/errors/)
