---
title: "Troubleshooting overview"
description: "How to read device status, where to start, and a quick symptom-to-fix matrix."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "overview"
lastReviewed: "2026-07-30"
---

SiteSync continuously monitors your fleet and surfaces problems as they arise. Start here to orient, then jump to the specific problem.

## Device statuses

Statuses are mutually exclusive (see [Health metrics](/reference/health-metrics/#device-status)):

- **Online** — reporting normally.
- **Never Activated** — added but has not yet joined the network.
- **Missed Check-in** — has not checked in within its expected interval (formerly "Offline").
- **Decode Error** — messages arrive but can't be decoded.
- **Other** — any remaining state.

Battery and signal are separate flags layered on top — a device can be Online and still flagged **Needs Attention**.

## Where to start

1. Open the device page and read the **Status** panel and **Alerts**.
2. For "not reporting" problems, open **View Full Diagnostics** and read the [Communication Flow](/troubleshoot/device-diagnostics/) left to right.
3. Match your symptom below.

## Symptom → fix

| Symptom | Likely layer | First check | Guide |
| --- | --- | --- | --- |
| Never Activated | Device or network server | Join credentials and activation | [Device never activated](/troubleshoot/device-problems/never-activated/) |
| Missed Check-in | Radio, power, or interval | Last Seen vs expected interval | [Device missed check-in](/troubleshoot/device-problems/missed-check-in/) |
| Decode Error | Decoder or profile | Decoder assignment and payload | [Decode error](/troubleshoot/device-problems/decode-error/) |
| MQTT disconnected | Infrastructure | Broker reachability and credentials | [MQTT disconnected](/troubleshoot/connection-problems/mqtt-disconnected/) |
| Downlink queued | Device class or uplink timing | Device class and latest uplink | [Downlink remains queued](/troubleshoot/downlink-problems/queued/) |

## Related pages

- [Device diagnostics workflow](/troubleshoot/device-diagnostics/)
- [Collect information for support](/troubleshoot/collect-info-for-support/)
