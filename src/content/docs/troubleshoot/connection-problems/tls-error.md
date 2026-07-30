---
draft: true
title: "Certificate or TLS error"
description: "A TLS/certificate problem is blocking a secure connection."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The connection uses TLS (e.g. MQTT on `8883`) but the handshake fails.

## Most likely causes

- Expired or untrusted broker/server certificate.
- Wrong port (using a TLS port without TLS, or vice-versa).

## Check these first

1. The port matches the security mode (`8883` TLS vs `1883` plain).
2. The server's certificate is valid and trusted.

:::note[Needs input]
Confirm SiteSync's exact TLS options (custom CA upload, verification toggles) with SiteSync Product.
:::

## Related pages

- [Connection errors](/configure/connections/errors/)
- [TLS](/reference/security/tls/)
