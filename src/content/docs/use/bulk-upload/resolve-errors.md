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

If any rows contain errors — such as a missing required field — SiteSync reports **which rows failed and why**. Successful rows are still added.

## Resolution

1. Read the reported errors and note the failing rows.
2. Correct those rows in your CSV (add the missing field, fix the Dev EUI).
3. Re-upload **only the failed rows**.

## Common causes

| Reported problem | Fix |
| --- | --- |
| Duplicate Dev EUI | Not an error — SiteSync updates the existing device with that Dev EUI rather than creating a duplicate. |
| Missing required field | Add the missing value (Device Name, Dev EUI, App EUI, or App Key) to the row. |
| Upload fails immediately | Headers were changed — re-download the template. |
| Rows fail with a connection/API error | Check network connectivity — [test the API connection](/configure/connections/test-a-connection/) in **Connections**. |

## Related pages

- [Bulk-upload validation error](/troubleshoot/onboarding-problems/bulk-validation-error/)
