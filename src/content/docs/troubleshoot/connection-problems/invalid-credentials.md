---
title: "Invalid credentials"
description: "Authentication to the broker or LNS API failed."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

SiteSync reached the external system but the credentials were rejected — **Authentication failed**.

## Resolution

Regenerate the API key/token (or MQTT password) in the external system and update the connection, then **Save and test**.

## Related pages

- [Connection errors](/configure/connections/errors/)
- [Network-server API error](/troubleshoot/connection-problems/api-error/)
