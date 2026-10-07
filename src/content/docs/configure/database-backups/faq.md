---
title: "FAQ and troubleshooting"
description: "Common questions about SiteSync database backups, and what to do when a backup or restore doesn't work."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.2"
contentType: "troubleshooting"
lastReviewed: "2026-10-07"
---

:::caution[Beta]
Database backups is in beta in 1.0.2. See the [overview](/configure/database-backups/overview/).
:::

## Do I still need Ignition Gateway backups?

Yes. Gateway backups cover your projects, tags, and Gateway settings; SiteSync's backups cover SiteSync's own data. With snapshots on (the default), every Gateway backup also carries a recent SiteSync snapshot, so the two work together.

## How recent is the SiteSync data in a Gateway backup?

At most one snapshot interval old: an hour, by default. Take a **Snapshot now** just before a manual Gateway backup if you need it to be current.

## A backup shows Failed

The error beside it says why. The most common causes:

- **Can't write to the folder:** the Ignition service account doesn't have write access to the share, or the path is wrong. Use **Test destination** to check, then fix the share's permissions.
- **No destination set:** enter and save a destination before **Back up now**.
- **Disk full:** free space at the destination, or lower **Keep**.

The failed entry stays in the list until a later backup to the same place succeeds.

## Back up now says a backup is already running

Only one backup runs at a time, including scheduled ones. Wait for the **In progress** entry to finish, then try again.

## The progress bar jumps or pauses

The progress while a database is being copied is an estimate, so on large databases it can move unevenly. It never goes backwards, and it stays just short of 100% until the file is complete.

## The restore failed after the restart

The page shows why. Your previous databases were put back automatically, so SiteSync is running as it was before. Common causes:

- **A database file was in use:** this can happen if only the module was restarted. Stage the restore again and restart the whole Gateway.
- **The backup is damaged:** try another backup.

## A backup can't be restored

The restore check lists the reason. **Made by a newer SiteSync version** means the backup has data this version doesn't understand: upgrade the module first, then restore. **Checksum** or **integrity** problems mean the file is damaged or incomplete: use another backup.

## Redundant Gateways

Backups, snapshots, and restores happen on the **master**. The backup node takes no snapshots of its own, and staging a restore there is refused, because its databases are copies of the master's.

## Who did what?

Backups, snapshots, and downloads started by a user are recorded in the **SiteSyncAudit** audit log, with the user and their address. A download that was refused is recorded as failed. Scheduled backups aren't recorded. See [Audit logging](/configure/audit-logging/overview/).

## Related pages

- [Database backups overview](/configure/database-backups/overview/)
- [Set up backups](/configure/database-backups/set-up/)
- [Restore a backup](/configure/database-backups/restore/)
