---
title: "Audit logging"
description: "SiteSync records who changed what and when across the platform. Administrators choose which actions are logged, directly in Enterprise Management."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-09-30"
---

SiteSync records **who changed what, and when**, across every part of the platform where data changes or a user signs in. Administrators choose exactly which of those actions are logged, directly in the Enterprise Management app — no project update is needed to change what's captured.

Each record carries the user, their IP address, the time, the app it came from, whether it succeeded, and — for changes — the exact **before → after** values.

## How it works

Every change travels the same path, so a record is written the moment an action succeeds:

1. A user makes a change in a SiteSync app — for example editing a device profile or sending a downlink.
2. SiteSync checks your audit settings. If that action is switched on, it builds a record: who did it, from which address, what they acted on, and exactly what changed.
3. The SiteSync module writes the record to the **SiteSyncAudit** audit profile on your Ignition Gateway.
4. Administrators review, search, and export the log in **Enterprise Management › Settings › Audit Log**, and on each device's **Downlinks & Changes** tab.

## The SiteSyncAudit profile

The **SiteSyncAudit** profile is created automatically when the upgraded module starts. It uses Ignition's **Internal** storage with **90-day retention**, so it needs no database connection. You can switch it to a **Database** profile under **Gateway › Security › Auditing** at any time, and SiteSync keeps logging to it. See [Deployment and security](/configure/audit-logging/deploy-and-security/).

:::note[Auditing never interrupts work]
If a record can't be written, the user's action still completes — the failure is noted in the Gateway log instead. Auditing never blocks or slows the underlying action.
:::

:::caution[Turning logging down is itself recorded]
Changes to the audit settings themselves are **always** recorded and cannot be switched off, so there is always a record of anyone who reduces what's logged.
:::

## Next steps

- [What can be audited](/configure/audit-logging/auditable-actions/)
- [Choose what gets logged](/configure/audit-logging/configure/)
- [Review the audit log](/configure/audit-logging/review-the-log/)
- [Deployment and security](/configure/audit-logging/deploy-and-security/)
- [FAQ](/configure/audit-logging/faq/)
- [Planned enhancements](/configure/audit-logging/planned/)
