---
title: "Test a connection"
description: "Use Save and test to confirm credentials, reachability, and permissions."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Confirm a connection works before relying on it.

## Steps

1. On the **Connections** tab, complete or open a connection.
2. Select **Save and test**.

## What the test checks

When you select **Save and test**, SiteSync confirms that:

- the credentials are valid,
- SiteSync can reach the external system over the network, and
- the account has the required permissions in the external system.

## Verify

The connection reports **Active** on the Connections list. If it reports **Degraded** or **Failed**, see [Connection errors](/configure/connections/errors/).

## Related pages

- [Connection health](/configure/connections/health/)
- [Connection errors](/configure/connections/errors/)
