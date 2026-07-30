---
title: "Validate the file"
description: "Check your CSV before uploading."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Catch problems before uploading, when they're cheapest to fix.

## Checklist

- The file is a **CSV** (only CSV is supported).
- Column **headers are unchanged** from the downloaded template.
- Every row has a **Device Name** and a valid 16-character **Dev EUI**.
- Dev EUI values are correct — a mistyped EUI produces a device that never connects.
- The file contains a **single device type** (one manufacturer/model per upload).

## Related pages

- [Complete the template](/use/bulk-upload/complete-template/)
- [Import devices](/use/bulk-upload/import/)
- [Resolve import errors](/use/bulk-upload/resolve-errors/)
