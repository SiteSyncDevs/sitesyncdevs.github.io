---
title: "Downlink history (Beta)"
description: "Every downlink sent through SiteSync is kept permanently. Review what a replaced sensor was sent and resend its settings to the new one."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.2"
contentType: "task"
lastReviewed: "2026-10-07"
---

:::caution[Beta — available from 1.0.2]
Available in the Enterprise Management app and the Field App from SiteSync 1.0.2. Beta features are fully supported, but screen details may still change based on feedback.
:::

From SiteSync 1.0.2, every downlink sent through SiteSync is kept **permanently**, independent of how long your audit log is retained. When you replace a sensor, you can review what the old sensor was sent and resend its settings to the new one with a few clicks.

## What's recorded

Each frame sent to a device is recorded with:

| Detail | Example |
| --- | --- |
| When it was sent | 2026-10-07 13:02 UTC |
| Who sent it | The signed-in user, or *SiteSync* for automated sends |
| Where it was sent from | Device downlinks, Downlink builder, Bulk downlink, Configuration builder |
| Command | The saved command's name and description |
| Port and payload | Port 10, `01AB` |
| Encoder answers | The values entered in the downlink builder |
| Frames | Frame 2 of 3, for multi-frame commands |
| Result | Sent or Failed, with the network server's response or error |

Downlinks that fail are recorded too, so you can see what was attempted.

## Downlinks sent before 1.0.2

When the gateway first starts on 1.0.2, SiteSync copies earlier downlinks from the audit log into the history, once. Only downlinks still in the audit log at that point can be copied — with the default 90-day retention, that's the last 90 days. The **Previous device's downlinks** screen shows the date its history starts from.

## Resend a previous sensor's settings

After a [device swap](/use/device-swap/), the new sensor has a **Previous device's downlinks** button. It appears only on sensors that replaced another one, in two places:

- the header of the sensor's **Activity** page;
- the **Downlinks & Changes** tab on that page.

1. Choose **Previous device's downlinks**. The list shows what the old sensor was sent, newest first.
   - **Latest per command** (the default) shows only the most recent successful send of each command, already ticked.
   - **All downlinks** shows the full history.
   - If the position has been replaced more than once, use the device selector to choose which earlier sensor to show.
2. Tick the downlinks to resend, or use **Select all** and **Clear**.
3. Choose **Resend selected**. Each row shows **Pending**, then **Sent** or **Failed** with the error.
4. If any fail, choose **Retry failed** to resend just those.

Multi-frame commands are resent as a whole, every frame in order. **Last resent** shows when and by whom each downlink was last resent to this sensor, so a second resend is always a deliberate choice.

:::caution[Different device profiles]
If the old and new sensors use different device profiles, a warning appears and nothing is ticked, because the old payloads may not mean the same thing to the new sensor. Check each command before resending it.
:::

Resent downlinks are recorded in the new sensor's history with the source *Resend from previous device*, linked to the original. They also appear in the audit log as *Downlink sent*.

## Permissions

| To | You need |
| --- | --- |
| View previous downlinks | Read access to the device's site |
| Resend them | Edit access to the device's site |

## For integrators

Gateway scripts can read a device's permanent history with `system.sitesync.getDownlinkHistory(devEUI, limit)`. It returns the device's downlinks as JSON, newest first; a `limit` of `0` returns all of them.

Scripts that send downlinks through `system.sitesync.executeDownlink` are recorded automatically, with the source *Script*. To record the user, command name, and other details, use `system.sitesync.executeDownlinkWithContext(devEUI, hexCode, port, tenantID, contextJson)`, where `contextJson` can include `user`, `source`, `commandName`, `description`, `encoderAnswers`, `frameIndex`, and `frameCount`.

## Good to know

- Only downlinks sent **through SiteSync** are recorded. A downlink sent from your network server's own console isn't.
- The history is never pruned, and it isn't affected by audit log retention.
- On a gateway before 1.0.2, **Previous device's downlinks** doesn't appear and downlinks are only kept in the audit log.

## Related pages

- [Swap a device](/use/device-swap/)
- [Send a downlink](/use/send-downlink/)
- [Audit logging](/configure/audit-logging/overview/)
