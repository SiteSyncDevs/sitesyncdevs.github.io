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
| Missing required field | Add the missing value (`name`, `dev_eui`, `join_eui`, or `app_key`) to the row. |
| `Duplicate dev_eui in this file (rows X, Y)` | The **same file** lists one Dev EUI more than once. Remove or correct the duplicate rows. (A Dev EUI that already exists *in SiteSync* is not an error — that device is updated in place, not duplicated.) |
| `Duplicate tag path in this file (rows X, Y)` | Two rows resolve to the same tag path. Tag paths must be unique — change a name or `tag_path` so each device lands somewhere distinct. |
| `Device name contains '/', which would nest the tag` | Remove the forward slash from the `name` value; use the `tag_path` column to control foldering. |
| `Unknown device type 'X'` | The `deviceType` value doesn't match a profile label. Check for a trailing space or an ambiguous duplicate label, and match the label exactly. |
| `Unknown tag provider 'X'` | The `[provider]` prefix in a `tag_path` isn't a real tag provider. Use a valid provider (for example `[default]`) or omit the prefix. |
| `Error in tag path, illegal characters` | The `tag_path` contains characters that aren't allowed in a tag path. Remove them. |
| Upload fails immediately | Headers were changed — re-download the template. |
| Rows fail with a connection/API error | Check network connectivity — [test the API connection](/configure/connections/test-a-connection/) in **Connections**. |

## Related pages

- [Bulk-upload validation error](/troubleshoot/onboarding-problems/bulk-validation-error/)
