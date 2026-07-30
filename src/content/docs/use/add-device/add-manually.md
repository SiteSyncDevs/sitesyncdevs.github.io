---
title: "Add a device manually"
description: "Add a single device by filling in the QR Sync form."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Add one device by entering its details in the QR Sync form (no camera required).

## Before you begin

:::note[Prerequisites]
- The site the device belongs to already exists.
- You have the device's **Dev EUI** (and, where required, App EUI and App Key) from the device label or manufacturer docs.
:::

## Steps

1. Select **QR Sync** in the left sidebar (or **Add Device** on the Devices page). The QR Sync form opens.
2. Enter the device identity fields:

   | Field | Required | Description |
   | --- | --- | --- |
   | Device Name | Yes | A human-readable label. Use a consistent naming convention (e.g. include location or asset). |
   | Dev EUI | Yes | The unique 16-character hardware identifier, from the device label. |
   | App EUI | No | The Application EUI (sometimes called JoinEUI). |
   | App Key | No | The encryption key used to secure the device's join request. |
   | Description | No | A free-text note — what it monitors or where it's installed. |

3. On the right, set the **device type**: choose the **Manufacturer** first, then the **Sensor Type** (linked dropdowns).
4. Select the **Site** this device belongs to.
5. Optionally add **Device Coordinates** (enter lat/long or **Autofill Current Location**) and **Upload Picture of Install**.
6. Select **Save**.

:::caution[A site is required]
If no site is selected, the device cannot be saved. Every device must belong to a site.
:::

:::tip[Sensor Type drives decoding]
The Sensor Type you select determines which [device profile](/configure/device-profiles/concepts/) SiteSync uses to interpret the data. The wrong type can make a device appear connected but report incorrect or empty values.
:::

## Expected result

The device is added to the selected site and appears once it makes its first check-in. See [Validate activation](/use/add-device/validate-activation/).

## Related pages

- [Scan a QR code](/use/add-device/scan-qr/)
- [Validate activation](/use/add-device/validate-activation/)
