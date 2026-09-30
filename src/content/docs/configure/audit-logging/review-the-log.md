---
title: "Review the audit log"
description: "Filter, search, inspect, and export audit records in Enterprise Management, and see per-device history on the Downlinks & Changes tab."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-09-30"
---

The **Audit log** table in **Enterprise Management › Settings › Audit Log** shows the newest events first, with time, user, action, resource, details, and result.

## Filter, search, and export

- **Filter and search.** Pick a time window (last hour to last 30 days) and a category, or search by user, action, or resource. For example, search `downlink` to see every downlink that was sent.
- **See the full record.** Click any row to open its details below the table: time, user, IP address, resource, result, and every change, one per line.
- **Export CSV.** Download the events currently shown, with all fields, for reporting or handing to an auditor.

## Check the profile

- The **Audit profile** panel shows the profile's type, retention, status, events in the last 24 hours, and the most recent event.
- **Verify profile** asks the module to confirm or recreate the profile.
- Under **••• More**, **Send test event** writes a test record so you can confirm logging end to end.

## Per-device history: Downlinks & Changes

Each device also has a **Downlinks & Changes** tab on its **Activity** page. It shows that device's history only, with **All**, **Downlinks**, and **Changes** filters, windows up to 90 days, the same row details, and its own CSV export. This is the quickest way to answer "who sent what to this device, and when."

:::note[Visible in the Field App]
The Activity page is shared with the Field App, so field technicians can see this tab too. It shows usernames and IP addresses — it can be hidden, limited to downlinks only, or restricted to certain roles if you prefer. See [Deployment and security](/configure/audit-logging/deploy-and-security/).
:::

## Related pages

- [Choose what gets logged](/configure/audit-logging/configure/)
- [What can be audited](/configure/audit-logging/auditable-actions/)
