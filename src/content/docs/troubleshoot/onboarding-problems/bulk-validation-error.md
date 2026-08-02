---
title: "Bulk-upload validation error"
description: "Rows in a CSV upload failed validation."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

SiteSync processed the file and reported which rows failed and why — successful rows are still added.

## Most likely causes

- Changed/missing column headers (upload fails immediately).
- Missing required field (Device Name, Dev EUI, App EUI, or App Key).

:::note[Duplicate Dev EUI is not an error]
A row whose Dev EUI already exists doesn't fail — SiteSync **updates the existing device** with that Dev EUI instead of creating a duplicate.
:::

## Resolution

Fix the reported rows and re-upload **only the failed rows**. Always start from the downloaded [template](/use/bulk-upload/download-template/).

## Related pages

- [Resolve import errors](/use/bulk-upload/resolve-errors/)
- [Complete the template](/use/bulk-upload/complete-template/)
