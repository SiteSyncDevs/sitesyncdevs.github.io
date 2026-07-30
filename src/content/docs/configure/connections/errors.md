---
title: "Connection errors"
description: "Diagnose and resolve common connection errors."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## Common connection errors

| Error | Likely cause | What to do |
| --- | --- | --- |
| Authentication failed | Credentials invalid or expired. | Regenerate the API key in the external system and update the connection. |
| Connection timed out | Firewall blocking traffic. | Ensure SiteSync's IP ranges are allowlisted. Contact SiteSync support for the current list. |
| Insufficient permissions | Credentials have the wrong scope. | Review the permission requirements in the network server's [setup guide](/configure/network-servers/supported/). |
| Endpoint not found | URL or host is incorrect. | Double-check the external system's endpoint URL. |

## Related pages

- [Connection health](/configure/connections/health/)
- [Test a connection](/configure/connections/test-a-connection/)
- [MQTT disconnected](/troubleshoot/connection-problems/mqtt-disconnected/)
