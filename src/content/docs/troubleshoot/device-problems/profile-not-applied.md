---
title: "Profile change not applied"
description: "A device isn't reflecting a device-profile change."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

You updated a device profile but a device isn't showing the change.

## Most likely causes

- The device hasn't checked in since the change (a Class A device receives changes on its next uplink).
- The device is assigned to a **different profile** than you edited.
- A configuration push failed.

## Check these first

1. **Last Seen** — if the device is offline, it will pick up changes on its next check-in.
2. Confirm which profile the device is actually assigned to.
3. The Activity log for errors around the change.

## Related pages

- [Troubleshoot profiles](/configure/device-profiles/troubleshoot/)
- [Device missed check-in](/troubleshoot/device-problems/missed-check-in/)
