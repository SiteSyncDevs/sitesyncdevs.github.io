---
title: "Downlink remains queued"
description: "A downlink was sent but hasn't been delivered."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## What this means

Downlinks are **queued and delivered on the device's next uplink**. A queued downlink usually means the device hasn't transmitted yet.

## Check these first

1. **Check-in Status** on the device — the device must be online and reachable.
2. The device **class** (see [Class A timing](/troubleshoot/downlink-problems/class-a-timing/)).
3. Whether the device has uplinked since you queued it.
4. The **device's downlink queue in your network server (LNS)** — SiteSync hands the downlink to the LNS, so the LNS queue shows whether it's still pending delivery.

## Related pages

- [Class A timing](/troubleshoot/downlink-problems/class-a-timing/)
- [Send a downlink](/use/send-downlink/)
