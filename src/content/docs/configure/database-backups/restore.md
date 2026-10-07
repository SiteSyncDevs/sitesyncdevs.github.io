---
title: "Restore a backup"
description: "Check a backup, stage a restore, apply it on restart, and cancel or undo it."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.2"
contentType: "task"
lastReviewed: "2026-10-07"
---

:::caution[Beta]
Database backups is in beta in 1.0.2. See the [overview](/configure/database-backups/overview/).
:::

A restore replaces SiteSync's databases with the ones in a backup. It is **staged**, not applied at once: SiteSync puts the backup in place the next time the module or the Gateway restarts, while nothing is using the databases.

:::caution[Changes since the backup are lost]
Devices, profiles, and connections changed after the backup was taken go back to how they were. Devices **added** since then still exist on the network server and as Ignition tags, but SiteSync no longer knows about them, so you'd need to add them again.
:::

## Restore from the Backups list

1. On **Database Backups**, find the backup under **Backups** and click **Restore…**.
2. SiteSync checks the backup and shows:
   - when it was taken and how old it is
   - which Gateway it came from, with a warning if it's a different Gateway
   - the SiteSync version that made it
   - anything that stops it being restored (see [What SiteSync checks](#what-sitesync-checks))
3. Choose what to restore. **Main database** is selected by default; you can add the **Logging database** and **Messages database** if the backup has them.
4. Type the backup's file name in **Confirm**. **Restore** stays disabled until it matches.
5. Click **Restore**. A **Restore staged** banner appears at the top of the page.
6. Restart the SiteSync module or the Gateway when it suits you. If you can, restart the whole Gateway.

After the restart, the page shows whether the restore succeeded.

## Restore from a file

Use this for a backup you downloaded earlier or copied from another Gateway.

1. Under **Backups**, click **Restore from a backup file**.
2. Choose the `.zip` (up to 512 MB) and click **Upload and check**.
3. Continue from step 2 above.

## Cancel a staged restore

Until the restart, click **Cancel restore** on the **Restore staged** banner. Nothing changes when SiteSync next starts.

## What SiteSync checks

Before staging, and again just before applying, SiteSync checks that:

- the file is a SiteSync backup and every database in it matches its checksum (it isn't damaged or incomplete)
- each database passes SQLite's integrity check
- the backup wasn't made by a **newer** SiteSync version than the one running. Backups from older versions are fine; SiteSync upgrades them when it starts.

When the restore is applied, SiteSync checks the restored databases again. If anything is wrong, it puts the previous databases back automatically and the page reports that the restore failed.

## Undoing a restore

Before a restore is applied, your current databases are moved, not deleted, to a folder named `data/sitesync/pre-restore-<date and time>` on the Gateway. SiteSync never deletes these folders. To go back to the databases from before a restore, contact [SiteSync support](/support/contact-support/) with the folder name shown on the page.

## Limits

- **PostgreSQL installs:** if your SiteSync main data is stored in PostgreSQL, restore it from your PostgreSQL backups. The page can still restore the logging and messages databases.
- **Redundant Gateways:** stage the restore on the master. The backup node keeps its own copy of the databases, and staging is refused there.

## Related pages

- [Database backups overview](/configure/database-backups/overview/)
- [Set up backups](/configure/database-backups/set-up/)
- [FAQ and troubleshooting](/configure/database-backups/faq/)
