---
title: "Class A timing"
description: "Why Class A devices receive downlinks only after an uplink."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

**Class A** devices only open receive windows right after they send an uplink, so a downlink waits in the queue until the device next transmits. **Class C** devices listen continuously and receive downlinks promptly.

## What to do

- For an infrequent Class A device, expect delivery to lag until its next scheduled uplink.
- Confirm the device class on the [device profile](/configure/device-profiles/fields/).

## Related pages

- [Downlink remains queued](/troubleshoot/downlink-problems/queued/)
- [Device-class behavior](/configure/downlinks/device-class/)
