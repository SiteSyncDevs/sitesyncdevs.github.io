---
title: "Complete the template"
description: "Fill one row per device using the required columns."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-31"
---

Add one row per device. Use the column headers exactly as they appear in the downloaded template (shown below); the values map to the same fields you'd enter manually in QR Sync.

| Column | Required | Description |
| --- | --- | --- |
| `dev_eui` | Yes | The device's unique 16-character hardware identifier (Dev EUI), from the device label. |
| `join_eui` | Yes | The Join EUI / App EUI, from the device label or network server. |
| `app_key` | Yes | The OTAA encryption key, from the device label or manufacturer docs. |
| `name` | Yes | A human-readable label for the device. Cannot contain a forward slash (`/`) — see the caution below. |
| `deviceType` | No | The device profile for this row. Leave blank to use the **Device Type** selected on the form; fill it in to mix sensor types in one upload. Must match a profile label **exactly**. |
| `tag_path` | No | Where this device's tags are created. Leave blank to place the device in the site folder; fill it in to target a specific folder, optionally with a tag provider. |
| `description` | No | A note about the device — what it monitors, where it's installed. |

:::tip[Extra columns become metadata]
Any additional columns you add beyond these — for example a `serial_number` column — are rolled up into the device's **MetaData / customattributes** tag and displayed on the device info page, a handy way to carry through asset IDs, locations, or other attributes.
:::

:::note[Headers are matched loosely, but ship exactly]
SiteSync matches headers case- and separator-insensitively (`tag_path`, `tagPath`, and `tag path` all resolve), but the template ships them exactly as shown above — start from it and leave the headers unchanged.
:::

## Mixing device types in one upload

The **deviceType** column sets the device profile per row, so a single file can contain several sensor types. Any row that leaves deviceType blank uses the Device Type selected on the form instead.

The value must match a profile label exactly, so watch for two common data-quality traps in your profile list:

- **Trailing spaces.** A profile named `TWTGPressure ` (with a trailing space) won't match a CSV that says `TWTGPressure` — the row uploads with no profile. Trim spaces from your profile labels.
- **Duplicate labels.** If the same label exists on two profiles, the value is ambiguous and the row is rejected. Give each profile a unique label.

## Targeting a tag folder with `tag_path`

By default every device lands in its **site folder**. Use the **tag_path** column to place a device somewhere specific instead:

- A plain path such as `Plant A/Unit 3` creates the device under that folder.
- A path may include a **tag provider** prefix in brackets, e.g. `[default]Plant A/Unit 3`. With no prefix, the device uses the session's default tag provider (`default`).
- Spacing, underscores, case, and stray or doubled slashes are cleaned up automatically — `[default]\\Plant A//Unit 3//` resolves to `[default]Plant A/Unit 3`.

:::note[Tag paths must be unique]
Two devices can't share the same tag path — a row that collides with another row (or an existing device) is rejected. Duplicate `name` values, on the other hand, are allowed.
:::

:::caution[No slashes in the name]
A `/` in the `name` column would nest the device's tag under an unintended folder, so names containing a slash are rejected. Use the `tag_path` column to control foldering instead.
:::

:::caution[Double-check dev_eui values]
A mistyped `dev_eui` produces a device that appears in SiteSync but never connects. These are difficult to find after a large upload.
:::

## Related pages

- [Validate the file](/use/bulk-upload/validate-file/)
- [Import devices](/use/bulk-upload/import/)
