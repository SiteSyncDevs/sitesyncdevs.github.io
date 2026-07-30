---
title: "Network-server API error"
description: "SiteSync can't provision or manage devices via the LNS API."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The Join Server (API) connection is failing, so device registration/management doesn't work even if MQTT data flows.

## Most likely causes

- Wrong API URL/endpoint (**Endpoint not found**).
- Invalid/expired API token (**Authentication failed**).
- Token scope too narrow (**Insufficient permissions**).

## Check these first

1. The API URL and application ID on the [API connection](/configure/connections/configure-api/).
2. The API token validity and permissions for your network server.
3. **Save and test** to see the specific error.

## Related pages

- [Connection errors](/configure/connections/errors/)
- [Invalid credentials](/troubleshoot/connection-problems/invalid-credentials/)
