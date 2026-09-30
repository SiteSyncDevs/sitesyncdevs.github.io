---
title: "Deployment and security"
description: "What the audit-logging upgrade installs, retention and storage options, and the security considerations for the audit log."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-09-30"
---

## What the upgrade includes

Audit logging needs three things installed together — a module upgrade, project updates, and two new screens.

| Part | What it adds |
| --- | --- |
| SiteSync module upgrade | Creates and manages the SiteSyncAudit audit profile, and writes audit records for the SiteSync apps. Available for Ignition 8.1 and 8.3. |
| Project updates | Changes across the SiteSync scripts and screens so each action is recorded where it happens: devices, bulk uploads, downlinks, tag paths, device profiles, decoders, UDTs, connections, sites and use cases, role permissions, and sign-in. |
| Audit Log settings screen | A new **Audit Log** item under **Settings** in Enterprise Management, beside RBAC, for configuring and reviewing the log. |
| Downlinks & Changes tab | A new tab on each device's **Activity** page showing that device's audit history. |

:::note[Ignition 8.3 needs a Gateway restart]
On Ignition 8.3, installing or upgrading a module requires a Gateway restart, so the upgrade should be scheduled in a maintenance window. The update also fixes custom downlinks built with the downlink builder, which previously failed to send.
:::

## Retention and storage

The **SiteSyncAudit** profile uses Ignition's **Internal** storage with **90-day retention** by default, so no database connection is required. Ignition prunes older records automatically, following the retention set on the profile under **Gateway › Security › Auditing**. A retention of 0 or less turns pruning off and keeps records indefinitely, which grows storage without limit.

To keep records in your own SQL database — for reporting, SIEM integration, or long-term retention — switch the profile to a **Database** profile under **Gateway › Security › Auditing**. SiteSync keeps writing to it and the Audit Log screen keeps working, because both address the profile by name. SiteSync never overwrites your profile settings.

## Good to know

- **Secrets are never logged.** Passwords, API tokens, and keys appear only as "set", "changed", or "cleared" — never their values.
- **Records cannot be edited from SiteSync.** The apps can add and read audit records, but not change or delete them.
- **Failed sign-in attempts are not recorded.** They happen at your identity provider, before the user reaches SiteSync; use your IdP's own sign-in logs for those.
- **Sessions include anonymous users.** Field App sessions that never sign in are recorded as anonymous. Turn off *Session started* and *Session ended* if you only want signed-in activity.
- **Logging starts at upgrade.** Nothing before the upgrade is recorded.

## Security considerations

- Records hold usernames, IP addresses, and device identifiers — treat the log as **internal operational data**.
- **Limit who can open the Audit Log screen.** Anyone with access to Enterprise Management Settings can view and export the log. Restrict Settings to administrator roles.
- **Protect the audit settings tag.** The settings live in the tag `[default]SiteSync/AuditLog`. Changes made on the Audit Log screen are always recorded, but a direct edit to that tag is not — restrict write access to it in Ignition's tag security.
- **Gateway access still matters.** Records can't be edited from SiteSync, but Gateway administrators can change retention or remove the profile, so Gateway configuration access should stay limited.

## Related pages

- [Audit logging overview](/configure/audit-logging/overview/)
- [FAQ](/configure/audit-logging/faq/)
