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
- A Dev EUI or a tag path **repeated within the file** (each must be unique per file).
- A Device Name containing a forward slash (`/`).
- A `deviceType` that doesn't match a profile label exactly — often a trailing space or an ambiguous duplicate label.
- A `tag_path` with an unknown `[provider]` prefix or illegal path characters.

See [Resolve import errors](/use/bulk-upload/resolve-errors/) for the exact messages and fixes.

:::note[An existing Dev EUI is not an error]
A row whose Dev EUI already exists **in SiteSync** doesn't fail — SiteSync updates that device in place instead of creating a duplicate. This is different from repeating a Dev EUI within the same file, which is rejected.
:::

## Resolution

Fix the reported rows and re-upload **only the failed rows**. Always start from the downloaded [template](/use/bulk-upload/download-template/).

## Related pages

- [Resolve import errors](/use/bulk-upload/resolve-errors/)
- [Complete the template](/use/bulk-upload/complete-template/)
