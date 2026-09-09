---
title: "Import devices"
description: "Select a site and device type, then upload the CSV."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Upload your completed CSV to add all its devices to one site.

## Steps

1. On the **Bulk Upload** page, use the **Site** dropdown to select the site devices are assigned to.
2. Use the **Device Type** fields to set the manufacturer and model.
3. Select **Browse** to locate your CSV, or drag and drop it into the upload area. Only CSV files are supported.
4. Select **Upload**.

:::note[The form supplies defaults; the CSV can override]
The **Device Type** you pick applies to every row that leaves the `deviceType` column blank — fill that column in to mix sensor types in one file. Likewise, rows without a `tag_path` land in the selected **Site** folder, while a `tag_path` value sends that device to a specific folder. See [Complete the template](/use/bulk-upload/complete-template/).
:::

## Expected result

SiteSync processes the file and adds each device to the selected site. Any rows with errors are reported — see [Resolve import errors](/use/bulk-upload/resolve-errors/).

## Related pages

- [Resolve import errors](/use/bulk-upload/resolve-errors/)
- [Validate activation](/use/add-device/validate-activation/)
