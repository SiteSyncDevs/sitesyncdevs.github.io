---
title: "Troubleshoot profiles"
description: "Common device-profile problems and how to fix them."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "troubleshooting"
lastReviewed: "2026-07-30"
---

## Common profile problems

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Adding a device fails | No UDT selected on the profile | Assign a UDT and save — see [Assign a UDT](/configure/device-profiles/assign-udt/). |
| Devices report but show a decode error | No decoder, or the wrong decoder, on the profile | Assign the correct decoder — see [Assign a decoder](/configure/device-profiles/assign-decoder/) and [Decode error](/troubleshoot/device-problems/decode-error/). |
| Can't select a Primary or Display Value | UDT not selected/saved | Select a UDT and save the profile first. |
| Device appears to miss check-ins unexpectedly | Message Interval doesn't match the device's real reporting rate | Set the profile's Message Interval to the device's actual interval. |

## Related pages

- [Profile fields](/configure/device-profiles/fields/)
- [Decode error](/troubleshoot/device-problems/decode-error/)
