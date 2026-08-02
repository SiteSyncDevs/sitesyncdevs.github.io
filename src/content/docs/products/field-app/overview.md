---
title: "Field App overview"
description: "What the SiteSync Field App is, how to access it, and what field users do with it."
products: ["field-app"]
roles: ["field-user"]
introduced: "1.0.0"
contentType: "overview"
lastReviewed: "2026-07-30"
---

The SiteSync Field App is the site-level interface for adding, managing, and viewing device data. It exposes device onboarding and monitoring to site users without exposing the underlying infrastructure, connections, or credentials.

## Two ways to access

- **Browser** — see [Browser access](/products/field-app/browser-access/).
- **Ignition Perspective mobile app** — see [Perspective mobile setup](/products/field-app/mobile-setup/).

:::note[Camera scanning is mobile-only]
Some features — notably camera access to scan QR codes for onboarding — are available only through the Perspective mobile app.
:::

## What field users do

- [Select a site](/use/field-app/select-site/)
- [Add a device](/use/add-device/scan-qr/) (scan or manual)
- [Find and open a device](/use/find-and-open-device/)
- [Review device health](/use/field-app/review-health/) and [diagnose issues](/use/field-app/field-diagnostics/)
- [Send a downlink](/use/send-downlink/) and remove a device

## Data integration

Once a device is synced, SiteSync writes its data to tags, which can be integrated into other systems (such as PI) using the synced device name, location, and device profile.
