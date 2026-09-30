---
title: "Planned enhancements"
description: "Roadmap for permanent device replacement history and permanent device configuration history, and how each works today."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-09-30"
---

:::note[Roadmap]
The capabilities on this page are **planned**, not yet available. They build on today's audit log, which is described first in each section.
:::

## Device replacement history

The goal is to link every sensor replacement permanently to the device it replaced, so the full hardware history of a measurement point survives any number of swaps.

### How replacements work today

**Replace Device** carries the device name, description, location details, photo, and last configuration over to the new sensor, and the audit log records a **Device swapped** event with the old and new DevEUI. The new sensor is still a **separate device record**, though: the old device keeps its own tags and history, and the only link between the two is that audit record — which appears on the new device only and is removed with the rest of the log after the retention period.

### What's planned

- **Permanent replacement record** — old and new DevEUI, tag path, date, who replaced it, reason, device profiles, and whether metadata was kept, stored in SiteSync's database and never pruned.
- **New sensor takes over the position** — the replacement inherits the old device's tag path, so tags, trends, and alarms continue without a break.
- **Old device archived as Replaced** — it leaves device lists and dashboards, but its record and history stay available.
- **Reason captured at the swap** — Failed, Battery, Damaged, Upgrade, or Other, plus notes.
- **Replacement history on the device page** — the whole chain is visible from any device in it, with links to earlier devices.
- **Combined history** — an *Include previous devices* option on the Downlinks & Changes tab merges history across the chain.
- **Site-wide reporting** — export all replacements for a site, for example replacements per month by reason.

## Device configuration history

The goal is to keep a permanent record of every configuration sent to each device, and to show each device's current configuration at a glance.

### What's kept today

Every downlink sent from SiteSync is in the audit log with its command, payload, encoder settings, sender, and network server response — but only for the retention period. The device itself keeps only its **most recent** configuration. Changes to a device profile (LoRa specs, the decoder) are also audited, but they aren't tied to the individual devices they affect.

### What's planned

- **Permanent configuration history** — every configuration sent to a device (date, sender, command, settings, payload, port, the screen it came from, and the network server's response), stored in SiteSync's database and never pruned.
- **Current configuration view** — the last value set for each setting, so you can see how a device should be configured right now.
- **Follows replacements** — a replacement sensor inherits its position's configuration history, and SiteSync flags settings the new sensor hasn't yet received, so they can be resent.
- **Profile changes in context** — device profile changes appear in the history of each device that uses that profile.
- **Export** — configuration history by device or by site, for commissioning records and audits.

### Keeping more history today

Without any new software, you can extend history now by raising the **SiteSyncAudit** profile's retention, or switching it to a **Database** profile to keep the records in your own SQL database. See [Deployment and security](/configure/audit-logging/deploy-and-security/).

:::note[What can't be captured]
Configurations sent outside SiteSync — for example from the network server's own console — can't be recorded, because they never pass through SiteSync.
:::

## Related pages

- [Audit logging overview](/configure/audit-logging/overview/)
- [Review the audit log](/configure/audit-logging/review-the-log/)
