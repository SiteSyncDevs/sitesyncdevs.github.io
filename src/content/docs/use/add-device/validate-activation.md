---
title: "Validate activation"
description: "Confirm a newly added device joins the network and reports data."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Confirm a device you just added actually joins and reports.

## What to expect

After you save, the device is added to the selected site and appears in SiteSync once it makes its **first check-in**. Until it successfully joins, it shows as **Never Activated**.

## Verify

1. Open the device page and confirm the assigned **site** and **device profile**.
2. Power on or reset the device.
3. Confirm **Last Seen** updates and the status moves to **Online**.
4. Confirm decoded **values** appear.

## If the device does not appear as Online within a few minutes

- Confirm it is powered on and has network access.
- Confirm the **Dev EUI** and **App Key** match what is registered on your network server.
- If it reports but values are empty or it shows **Decode Error**, check the [assigned decoder](/configure/device-profiles/assign-decoder/).

## Related pages

- [Device never activated](/troubleshoot/device-problems/never-activated/)
- [Device added but not reporting](/troubleshoot/onboarding-problems/added-not-reporting/)
