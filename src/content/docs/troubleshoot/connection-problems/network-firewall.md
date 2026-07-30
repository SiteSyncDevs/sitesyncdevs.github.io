---
title: "Network or firewall issue"
description: "Traffic between SiteSync and the external system is blocked."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

A **Connection timed out** — SiteSync can't reach the broker or API, usually a firewall/network policy.

## Resolution

- Ensure SiteSync's IP ranges are allowlisted (contact SiteSync support for the current list).
- Confirm the required ports are open — MQTT broker (commonly `8883`) and the LNS API port (network-server dependent).

## Related pages

- [Ports and network requirements](/reference/ports-network-requirements/)
- [Connection errors](/configure/connections/errors/)
