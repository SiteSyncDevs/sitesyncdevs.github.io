---
title: "Duplicate DevEUI"
description: "A device with this Dev EUI already exists."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

Saving or uploading fails because the **Dev EUI** already exists in SiteSync.

## Resolution

1. Search for the Dev EUI **across all sites** — the device may already be onboarded.
2. If it's a genuine duplicate row in a bulk file, remove it and re-upload only the failed rows.

## Related pages

- [Resolve import errors](/use/bulk-upload/resolve-errors/)
- [Device not visible](/troubleshoot/device-problems/not-visible/)
