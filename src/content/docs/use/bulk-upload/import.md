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

1. On the **Bulk Upload** page, use the **Site** dropdown to select the site all devices in this upload will be assigned to.
2. Use the **Device Type** fields to set the manufacturer and model. Both apply to every device in the file.
3. Select **Browse** to locate your CSV, or drag and drop it into the upload area. Only CSV files are supported.
4. Select **Upload**.

:::caution[One site, one device type per file]
All devices in a single upload go to the selected site and share the selected device type. For multiple sites or device types, upload separate batches.
:::

## Expected result

SiteSync processes the file and adds each device to the selected site. Any rows with errors are reported — see [Resolve import errors](/use/bulk-upload/resolve-errors/).

## Related pages

- [Resolve import errors](/use/bulk-upload/resolve-errors/)
- [Validate activation](/use/add-device/validate-activation/)
