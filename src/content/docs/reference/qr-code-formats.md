---
title: "QR-code formats"
description: "The QR formats SiteSync can scan for onboarding."
products: ["field-app"]
roles: []
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

SiteSync's QR Sync reads join keys (**devEUI**, **appKey**, **joinEUI**) from a device label QR code and creates the device.

## Supported formats

- The **LoRa Alliance** QR code format.
- QR codes provided by **SiteSync**.

If neither is detected, the app returns the raw scanned text so you can parse it manually. Camera scanning is available only in the Perspective mobile app — see [Scan a QR code](/use/add-device/scan-qr/).
