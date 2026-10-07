---
title: "Choose what gets logged"
description: "Turn audit actions on or off from the Audit Log settings screen in Enterprise Management."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-09-30"
---

Administrators decide what is logged, in **Enterprise Management › Settings › Audit Log** (beside [RBAC](/configure/rbac/overview/)). Changes take effect **immediately** in every SiteSync app, with no project update.

<figure class="ss-shot" data-shot-id="AUDIT-CONFIG-001" data-product="enterprise-management" data-viewport="desktop">
<figcaption>The Configure Audit Logging screen: the Audit logging master toggle, the Audit profile panel (SiteSyncAudit, retention, status, recent events), and the Audit scope sections with per-section recorded counts and Select all / Clear.</figcaption>
</figure>

## The settings

- **Audit logging** — the master switch that turns all recording on or off. Events already in the log are kept either way.
- **Audit scope** — lists every [auditable action](/configure/audit-logging/auditable-actions/), grouped into collapsible sections. Each section shows how many of its actions are recorded (for example, *14 of 14 recorded*).
- **Tick or clear individual actions**, or use **Select all** / **Clear** to set a whole section at once. **Select all** / **Clear all** at the top set every section.
- **Save changes** applies the selection. The save itself is recorded, including which actions were turned on or off.

:::tip[Start broad, then trim]
You can start with everything on, then turn off anything your team doesn't need — for example, session starts from shared mobile devices. This replaces the usual back-and-forth about which actions should be audited.
:::

:::caution[You can't turn off auditing of the settings]
Changes to the audit settings themselves are always recorded, so there's always a trail of who changed what's being logged.
:::

## Related pages

- [What can be audited](/configure/audit-logging/auditable-actions/)
- [Review the audit log](/configure/audit-logging/review-the-log/)
