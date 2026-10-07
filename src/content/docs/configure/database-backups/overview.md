---
title: "Database backups (Beta)"
description: "Back up, download, and restore SiteSync's databases from the Ignition Gateway web page, on Ignition 8.1 and 8.3."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.2"
contentType: "concept"
lastReviewed: "2026-10-07"
---

:::caution[Beta]
Database backups is new in **1.0.2** and is in **beta**. It's ready to use, and we're still validating it across Ignition 8.1 and 8.3 installs. Keep your existing Ignition Gateway backups and any database backups in place while it's in beta, and [tell us](/support/contact-support/) about anything unexpected.
:::

SiteSync keeps your devices, device profiles, network-server connections, and settings in its own databases on the Ignition Gateway. The **Database Backups** page lets you see when they were last backed up, back them up on a schedule, download a copy, and put an earlier copy back if something goes wrong, without scripts or remote access to the server.

## Where to find it

| Ignition version | Page |
|---|---|
| 8.1 | **Config › SiteSync › Database Backups** |
| 8.3 | **Platform › SiteSync › Database Backups** |

You need Gateway configuration rights to open the page.

## Two kinds of backup

**Gateway backup snapshot.** Every hour, SiteSync copies its main database into a folder that Ignition's own Gateway backups include, and keeps the newest two. Any Gateway backup you already take (a `.gwbk`, scheduled or manual) carries your SiteSync data with it. Snapshots are on by default and need no setup.

**Folder or network share.** SiteSync writes backups to a folder you choose, on a daily or every-few-hours schedule, and keeps as many as you ask for. Use a protected share on another server, so a backup survives the loss of the Gateway itself.

Both kinds are listed together under **Backups** on the page, where you can download or restore any of them.

## What's in a backup

Each backup is a single `.zip` named after the Gateway and the time it was taken, for example `SiteSync_gateway01_20261007-020000.zip`. It holds:

- the **main database**: devices, device profiles, connections, network-server settings
- optionally the **logging database** and the **messages database** (your choice, per backup type)
- a manifest with a checksum for every file and the SiteSync version that made it, which SiteSync checks before any restore

Backups are consistent copies taken while SiteSync keeps running. Nothing stops while a backup is written.

:::caution[Backups contain credentials]
A backup includes the MQTT and network-server credentials SiteSync has stored. Keep backup folders protected, and treat a downloaded backup like a password file. Downloading a backup needs Gateway write access for the same reason.
:::

## Restoring, in short

A restore is never applied while SiteSync is running. You choose a backup, SiteSync checks it, and you confirm by typing its file name. The restore is applied the next time the SiteSync module or the Gateway restarts, and your current databases are kept so a restore can be undone. See [Restore a backup](/configure/database-backups/restore/).

:::note[Restoring a Gateway backup doesn't restore SiteSync by itself]
When you restore an Ignition Gateway backup, the SiteSync snapshots inside it come back, but SiteSync keeps running on its current databases. To put SiteSync's data back, restore one of those snapshots from the Database Backups page.
:::

## Next steps

- [Set up backups](/configure/database-backups/set-up/)
- [Restore a backup](/configure/database-backups/restore/)
- [FAQ and troubleshooting](/configure/database-backups/faq/)
