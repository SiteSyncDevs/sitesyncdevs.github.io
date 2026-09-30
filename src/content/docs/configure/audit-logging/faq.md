---
title: "Audit logging FAQ"
description: "Common questions about retention, storage, performance, failures, security, and Ignition 8.3 / redundancy."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-09-30"
---

## How long are audit records kept?

90 days by default. Ignition prunes older records automatically, following the retention set on the **SiteSyncAudit** profile under **Gateway › Security › Auditing**. A retention of 0 or less turns pruning off and keeps records indefinitely, which grows storage without limit. Logging starts when the upgrade is installed; nothing before that is recorded.

## Where are the records stored?

On the Gateway itself, in Ignition's **Internal** audit profile, so no database connection is required. To keep records in your own SQL database — for reporting or long-term retention — switch the profile to a **Database** profile under **Gateway › Security › Auditing**. SiteSync keeps writing to it and the Audit Log screen keeps working, because both address the profile by name.

## What if a user isn't signed in?

The action is still recorded, with the user shown as **anonymous**, along with the device type and IP address of the session. Actions that run on the Gateway without any user session, such as scheduled or automatic scripts, are recorded as **SiteSync**. Failed sign-in attempts are not recorded, because they happen at your identity provider before the user reaches SiteSync.

## Will this slow down the Gateway?

No noticeable impact is expected. Each audited action adds one read of the audit settings and one small write, alongside work that is already far heavier (network server calls, tag writes). Actions that record before → after values also read the current value once, and only while that action is switched on — turning an action off removes its cost entirely. Records are small text, so storage stays modest at typical volumes; bulk uploads add one record per device, and multi-frame downlinks add one per frame.

## What happens if audit logging fails?

The user's action always completes. If the profile is unavailable or a record can't be written, the action goes ahead and the failure is noted in the Gateway log. The **Audit profile** panel shows the profile's status, and **Verify profile** recreates it if it's missing.

## Can the log be sent to another system?

Yes, in two ways. **Export CSV** gives an immediate file. For ongoing integration — such as a SIEM or reporting tool — switch the profile to a **Database** profile and read the audit table directly.

## Does this work with redundant Gateways and Ignition 8.3?

Yes. With redundancy, the profile is created on the master Gateway and Ignition synchronizes it to the backup. The module supports Ignition 8.1 and 8.3; on 8.3, module installs need a Gateway restart. Ignition 8.3 Gateways cannot forward audit records to an 8.1 Gateway's Remote profile, so upgrade any central Gateway first if you forward audit data between sites.

## Can field technicians see a device's history in the Field App?

Yes. The **Downlinks & Changes** tab is part of the device Activity page, which the Field App shares, so technicians can see which downlinks were sent to a device and what was changed, by whom, and when. The tab shows usernames and IP addresses. It can be hidden in the Field App, limited to downlinks only, or restricted to certain roles.

## Related pages

- [Audit logging overview](/configure/audit-logging/overview/)
- [Deployment and security](/configure/audit-logging/deploy-and-security/)
