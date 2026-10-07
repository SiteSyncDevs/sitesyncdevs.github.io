---
title: "Set up backups"
description: "Configure Gateway backup snapshots and folder or network-share backups, run a backup now, and follow its progress."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.2"
contentType: "task"
lastReviewed: "2026-10-07"
---

:::caution[Beta]
Database backups is in beta in 1.0.2. See the [overview](/configure/database-backups/overview/).
:::

Open **Database Backups** (8.1: **Config › SiteSync**; 8.3: **Platform › SiteSync**). The page has four parts: **Status**, **Gateway Backup Snapshot**, **Folder or Network Share**, and **Backups**.

The page looks slightly different depending on your Ignition version — the settings are the same, only the Gateway menu and the snapshot path differ:

<figure class="ss-shot" data-shot-id="DB-BACKUPS-SETUP-83" data-product="enterprise-management" data-viewport="desktop">
<figcaption>On Ignition 8.3 (Platform › SiteSync › Database Backups): the Status panel above the Gateway Backup Snapshot settings. Snapshots are written under <code>data/config/local/com.syncautomation.LoraWANDecoder/backups</code>.</figcaption>
</figure>

<figure class="ss-shot" data-shot-id="DB-BACKUPS-SETUP-81" data-product="enterprise-management" data-viewport="desktop">
<figcaption>On Ignition 8.1 (Config › SiteSync › Database Backups): the same page, with snapshots written under <code>data/modules/com.syncautomation.LoraWANDecoder/backups</code>.</figcaption>
</figure>

## Check the status

**Status** shows when the last Gateway snapshot and the last folder backup were taken, whether they worked, and when the next ones are due.

If the page says the Gateway is the **redundant backup node**, backups and snapshots run on the master instead. See [Redundant Gateways](/configure/database-backups/faq/#redundant-gateways).

## Gateway backup snapshot

Snapshots are on by default: every 60 minutes, newest 2 kept, main database only. To change them:

1. Under **Gateway Backup Snapshot**, set:
   - **Enabled**: turn snapshots on or off.
   - **Interval (minutes)**: 15 to 1440.
   - **Keep**: how many snapshots to keep, 1 to 24. Older ones are deleted.
   - **Include logging database** and **Include messages database**: off by default. They can be large, and leaving them out keeps Gateway backups small.
2. Click **Save**.

To take one straight away, click **Snapshot now**.

Snapshots are stored where Ignition's Gateway backups pick them up:

| Ignition version | Snapshot folder |
|---|---|
| 8.1 | `data/modules/com.syncautomation.LoraWANDecoder/backups/` |
| 8.3 | `data/config/local/com.syncautomation.LoraWANDecoder/backups/` |

:::tip[Ignition 8.3 and version control]
If you keep the 8.3 `data/config` folder under version control, the snapshot folder above changes every hour. Add it to your ignore list, or lengthen the snapshot interval.
:::

## Folder or network share

1. Under **Folder or Network Share**, enter a **Destination**: a full path such as `\\fileserver\ignition\sitesync` or `D:\Backups\SiteSync`.
2. Click **Test destination**. SiteSync creates the folder if it's missing, checks it can write there, and shows the free space. It warns you if the folder is on the Gateway's own disk.
3. Choose a **Schedule**:
   - **Daily at a set time**: enter the time as 24-hour `HH:mm`, in the Gateway's local time.
   - **Every N hours**: 1 to 168.
4. Set **Keep**: how many backups from this Gateway to keep, 1 to 365. Older ones are deleted. Backups from other Gateways and any other files in the folder are never touched, so several Gateways can share one folder.
5. Choose whether to include the logging and messages databases.
6. Tick **Enabled** and click **Save**.

To take one straight away, click **Back up now**.

:::note[Access to the share]
The Gateway writes backups as the account the Ignition service runs under, not as you. If **Test destination** reports it can't write, give that account write access to the share.
:::

If the Gateway was off when a daily backup was due, SiteSync takes it as soon as it's running again.

## Follow a backup's progress

**Snapshot now** and **Back up now** start the backup in the background, so you can keep using the page. The **Backups** table shows every backup with its status:

| Status | Meaning |
|---|---|
| **In progress** | Being written now. A progress bar shows how far it has got and what it's doing (copying a database, then writing the file). |
| **Complete** | Finished. You can download or restore it. |
| **Failed** | The last attempt didn't work. The error is shown, for example a folder the Gateway can't write to. It stays until a later backup to the same place succeeds. |

The table refreshes by itself, every few seconds while a backup is running, so scheduled backups appear too. Only one backup runs at a time. If you start another while one is running, you're told to wait.

A backup is written to a temporary file and only appears in the table once it's complete, so a half-written backup can never be downloaded or restored.

## Download a backup

Click **Download** beside any complete backup. You need Gateway write access, because a backup contains stored credentials.

## Related pages

- [Database backups overview](/configure/database-backups/overview/)
- [Restore a backup](/configure/database-backups/restore/)
- [FAQ and troubleshooting](/configure/database-backups/faq/)
