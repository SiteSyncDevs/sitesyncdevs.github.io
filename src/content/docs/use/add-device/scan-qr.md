---
title: "Scan a QR code"
description: "Provision a device instantly by scanning its QR code in the Perspective mobile app."
products: ["field-app"]
roles: ["field-user"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

QR Sync provisions a sensor instantly by scanning a QR code. The code embeds the required join keys (`devEUI`, `appKey`, `joinEUI`); scanning creates the device and its Ignition tags.

:::note[Mobile only]
Camera scanning is available only through the **Ignition Perspective mobile app**. On the web, use [Add a device manually](/use/add-device/add-manually/).
:::

## Steps

1. Open the SiteSync Field App in the Perspective mobile app and go to **Devices**.
2. Select **Add Device** and launch the QR scanner.
3. Point the camera at the QR code on the device label. The identity fields populate automatically.

4. Confirm the device type and **site**, then submit.

## Supported QR formats

- The **LoRa Alliance** QR code format
- QR codes provided by **SiteSync**

If neither format is detected, the app returns everything it read so you can parse it manually.

:::tip
The tag path is automatically populated with the current site's name.
:::

## Related pages

- [Add a device manually](/use/add-device/add-manually/)
- [Perspective mobile setup](/products/field-app/mobile-setup/)
- [Validate activation](/use/add-device/validate-activation/)
