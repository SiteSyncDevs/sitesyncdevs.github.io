---
title: "Missing signal data"
description: "The device reports no signal metrics."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

Signal shows as missing. A reported **SNR of exactly 0.0 is treated as missing**, and when spreading factor is unavailable SF9 is assumed (see [Health metrics](/reference/health-metrics/)).

## Most likely causes

- No uplink received yet (Never Activated or Missed Check-in).
- The gateway metadata (RSSI/SNR/SF) didn't arrive with the uplink.

## Check these first

1. Device status and Last Seen.
2. The Diagnostics panel for RSSI/SNR/SF values.

## Related pages

- [Poor or fair signal](/troubleshoot/device-problems/poor-signal/)
- [Device missed check-in](/troubleshoot/device-problems/missed-check-in/)
