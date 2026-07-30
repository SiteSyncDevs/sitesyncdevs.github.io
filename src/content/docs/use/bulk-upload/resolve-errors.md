---
title: "Resolve import errors"
description: "Fix and re-upload rows that failed during bulk upload."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What happens

If any rows contain errors — such as a duplicate Dev EUI or a missing required field — SiteSync reports **which rows failed and why**. Successful rows are still added.

## Resolution

1. Read the reported errors and note the failing rows.
2. Correct those rows in your CSV (fix the Dev EUI, add the missing field, remove duplicates).
3. Re-upload **only the failed rows**.

## Common causes

| Reported problem | Fix |
| --- | --- |
| Duplicate Dev EUI | Search for the Dev EUI across sites; the device may already exist. |
| Missing required field | Add a Device Name / Dev EUI to the row. |
| Upload fails immediately | Headers were changed — re-download the template. |

## Related pages

- [Duplicate DevEUI](/troubleshoot/device-problems/duplicate-deveui/)
- [Bulk-upload validation error](/troubleshoot/onboarding-problems/bulk-validation-error/)
