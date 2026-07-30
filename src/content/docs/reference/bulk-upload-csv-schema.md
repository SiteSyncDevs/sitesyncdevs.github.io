---
title: "Bulk-upload CSV schema"
description: "The columns SiteSync expects in a bulk-upload CSV."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

Always start from the downloaded [template](/use/bulk-upload/download-template/) — don't change the headers.

| Column | Required | Description |
| --- | --- | --- |
| Device Name | Yes | Unique, human-readable label. |
| Dev EUI | Yes | 16-character hardware identifier. |
| App EUI | No | Application EUI / JoinEUI. |
| App Key | No | OTAA root key. |
| Description | No | Free-text note. |

All devices in one file are assigned to a single site and device type. See [Complete the template](/use/bulk-upload/complete-template/).
