---
title: "Perform field diagnostics"
description: "Use the Communication Flow to find why a device isn't reporting, while you're on site."
products: ["field-app"]
roles: ["field-user"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Steps

1. Open the device and select **View Full Diagnostics**.
2. Work through the **Communication Flow** left to right — **Device → Gateway → MQTT In → Decoder**:
   - **Device** shows a very old timestamp → the device isn't transmitting (check power/placement).
   - **Gateway** missing → no gateway received it (check network coverage).
   - **MQTT In** error → SiteSync isn't receiving from the broker (an infrastructure issue — escalate).
   - **Decoder** error → the payload arrived but couldn't be decoded (usually a profile/decoder issue).
3. Note where the chain breaks and act, or [collect info for support](/troubleshoot/collect-info-for-support/).

## Related pages

- [Device diagnostics workflow](/troubleshoot/device-diagnostics/)
- [Device added but not reporting](/troubleshoot/device-problems/added-not-reporting/)
