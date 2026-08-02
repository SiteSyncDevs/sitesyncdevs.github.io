---
title: "Test a connection"
description: "Use Save and test to confirm the connection works."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-31"
---

## Goal

Confirm a connection works before relying on it.

## Steps

1. On the **Connections** tab, complete or open a connection.
2. Select **Save and test**.

## What the test reports

**Save and test** returns one of two things:

- **Success** — SiteSync reached the system and the credentials worked.
- **The response from the network server's API** — if something's wrong, SiteSync surfaces the error message returned by the system so you can act on it (for example, invalid credentials or a bad endpoint).

## Related pages

- [Connection health](/configure/connections/health/)
- [Connection errors](/configure/connections/errors/)
