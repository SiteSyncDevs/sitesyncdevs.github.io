---
title: "Device never activated"
description: "The device was added but has not yet joined the network."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

The device exists in SiteSync but has never made a successful join — it shows **Never Activated** and has no Last Seen.

## Most likely causes

- The device hasn't been powered on, or is out of range of a gateway.
- The **Dev EUI**, **App EUI/JoinEUI**, or **App Key** entered don't match what's registered on the network server.
- The device isn't registered on the LNS (SiteSync provisions via the [API connection](/configure/connections/configure-api/) — confirm it succeeded).

## Check these first

1. Confirm the device is powered on and within gateway coverage.
2. Compare the Dev EUI and App Key in SiteSync against the device label and the network server.
3. Confirm the [connection](/configure/connections/health/) is **Active**.

## Resolution

Correct any mismatched keys (edit the device), power-cycle the device, and wait for a join.

## Verify

**Last Seen** updates and the status moves to **Online**. See [Validate activation](/use/add-device/validate-activation/).

## Information to collect if unresolved

Dev EUI (redacted), the site, the network server, and whether the device appears registered on the LNS. See [Collect information for support](/troubleshoot/collect-info-for-support/).

## Related pages

- [Device added but not reporting](/troubleshoot/onboarding-problems/added-not-reporting/)
- [Invalid device keys](/troubleshoot/onboarding-problems/invalid-keys/)
