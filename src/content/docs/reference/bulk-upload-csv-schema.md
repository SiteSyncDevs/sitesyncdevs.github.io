---
title: "Bulk-upload CSV schema"
description: "The columns SiteSync expects in a bulk-upload CSV."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-31"
---

Always start from the downloaded [template](/use/bulk-upload/download-template/) — don't change the headers.

| Column | Required | Description |
| --- | --- | --- |
| Device Name | Yes | Human-readable label. No forward slash (`/`). |
| Dev EUI | Yes | 16-character hardware identifier. Unique within the file. |
| App EUI | Yes | Application EUI / JoinEUI. |
| App Key | Yes | OTAA root key. |
| deviceType | No | Device profile label for this row. Blank uses the Device Type selected on the form. Must match a profile label exactly. |
| tag_path | No | Target tag folder, optionally with a `[provider]` prefix (e.g. `[default]Plant A/Unit 3`). Blank places the device in the site folder. Must be unique within the file. |
| Description | No | Free-text note. |

Any extra columns are stored as device **metadata** (the customattributes tag) and shown on the device info page.

The **Site** and **Device Type** chosen on the form apply to rows that leave `tag_path` and `deviceType` blank; fill those columns in to mix device types or target specific folders in a single file. Column headers are case- and separator-insensitive (`tag_path`, `tagPath`, and `tag path` all resolve). See [Complete the template](/use/bulk-upload/complete-template/).
