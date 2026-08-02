---
title: "Connection errors"
description: "Diagnose and resolve common Join Server (API) connection errors."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-31"
---

These errors apply to the **Join Server (REST API)** connection — the channel SiteSync uses to provision and manage devices.

## Common connection errors

| Error | Likely cause | What to do |
| --- | --- | --- |
| Authentication failed | Credentials invalid or expired. | Regenerate the API key in the network server and update the connection. |
| Connection timed out | Firewall blocking traffic. | Ensure the Ignition gateway can reach the network-server API host and port through your firewall. |
| Insufficient permissions | Credentials have the wrong scope. | Review the permission requirements in the network server's [setup guide](/configure/network-servers/supported/). |
| Endpoint not found | URL or host is incorrect. | Double-check the network server's API endpoint URL. |

## Related pages

- [Connection health](/configure/connections/health/)
- [Test a connection](/configure/connections/test-a-connection/)
- [Network-server API error](/troubleshoot/connection-problems/api-error/)
