---
title: "Swap a device (Beta)"
description: "Replace a failed, flat, or upgraded sensor in one guided flow. The new sensor takes over the old one's tags and the old sensor is archived, not deleted."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.2"
contentType: "task"
lastReviewed: "2026-10-07"
---

:::caution[Beta — available from 1.0.2]
Available in the Enterprise Management app and the Field App from SiteSync 1.0.2. Beta features are fully supported, but screen details may still change based on feedback.
:::

When a sensor fails, runs out of battery, or is upgraded, **Swap Device** replaces it in one guided flow. The new sensor takes over the old one's position, so its tags, trends, and alarms carry on without a gap. The old sensor is **archived** — it disappears from your device lists but is never deleted.

## Before you start

- You need **edit** access to the device's site.
- If the new sensor isn't in SiteSync yet, have its DevEUI, JoinEUI (AppEUI), and AppKey to hand, or its QR code if you're using the SiteSync mobile app.
- The gateway needs SiteSync 1.0.2 or later. On earlier versions, **Swap Device** still works, but the old sensor isn't archived — see [Earlier versions](#earlier-versions).

## Replace a sensor

1. Open the old sensor's page, choose **Edit**, then choose **Swap Device**.
2. **Find the new sensor.** The list shows every sensor you can replace it with, at every site, with its **Device type**, **Site**, and **Last seen** time. Type in the search box to filter by name, DevEUI, device type, or site, then select the sensor and choose **Next**.
   - You can also type the new sensor's 16-character DevEUI and choose **Next** without selecting a row.
   - If the sensor you choose already writes to its own tag path, a warning names that path. That path stops updating after the swap; its tag folder stays where it is.
3. **Add a new sensor**, if it isn't in SiteSync yet. Choose **Add new sensor**, then either **Scan QR code** (in the mobile app) or enter its DevEUI, JoinEUI, and AppKey. It's added with the old sensor's device profile, site, and application, and registered on your network server when you swap.
4. **Review.** Check what carries over, choose a **Reason** (Failed, Battery, Damaged, Upgrade, or Other), and add any **Notes**.
   - If the two sensors use different device profiles, a warning appears. Tick **Use the old device's profile** to switch the new sensor to the old one's profile, so its values fit the existing tags.
5. Choose **Swap**. Each step shows its own result as it runs:

   | Step | What happens |
   | --- | --- |
   | Register the new sensor | Adds it to SiteSync and your network server — only if you added it in step 3 |
   | Hand over the tag path | The new sensor takes over the old one's tags |
   | Copy device info | Name, description, metadata and custom attributes, install location, and photo |
   | Archive the old device and record the replacement | Hides the old sensor and links the two |
   | Record in the audit log | Adds *Device replaced* and *Device swapped in* entries |

6. When every step is green, choose **Done** to open the new sensor's page.

If a step fails, it shows the error and a **Retry** button. Each step checks what has already happened before it runs, so retrying is always safe. If registering or handing over the tag path fails, the later steps wait until you retry it.

## What carries over

| Carries over | Doesn't carry over |
| --- | --- |
| The tag path, with its trends, history, and alarms | The new sensor's own previous tag folder, which is left in place |
| Name and description | The old sensor's network server registration, which stays as it was |
| Metadata and custom attributes | |
| Install location and photo | |
| Device profile, if you chose **Use the old device's profile** | |

The new sensor starts reporting into the old position from its first uplink. If the old sensor is still powered and transmitting, its uplinks are ignored.

To reconfigure the new sensor the way the old one was set up, see [Downlink history](/use/downlink-history/).

## Archived sensors

An archived sensor is hidden from device lists, dashboards, and search, but nothing about it is deleted. Its page opens read-only, with a **Replaced by …** banner that has:

- **Open new device**, to go to its replacement;
- **Un-archive**, to bring it back;
- **All archived devices**, to see every archived sensor.

### The Archived devices page

To open it, choose **Archived devices** in the header of Device Management, or **Archived** in the Field App's device list.

| Filter | Options |
| --- | --- |
| Site | All sites, or one site |
| Search | Name, DevEUI, tag path, or the replacement's name or DevEUI |
| Kind | All archived, Replaced, or Archived without successor |
| Reason | Any reason recorded when the sensor was swapped |
| Archived | All time, last 30 days, last 90 days, last 12 months |
| Archived by | Who archived it |
| Include un-archived | Also lists sensors that were later brought back |

Select a row to see **Open device**, **Open successor**, and **Un-archive** above the list, or double-click a row to open the sensor. **Export CSV** downloads the filtered list. On a phone, each sensor is shown as a card.

### Un-archive a sensor

1. Choose **Un-archive** on the sensor's banner or on the Archived devices page.
2. The popup explains what happens and, if the sensor gave its tag path to a replacement, asks where it should write now:
   - If its old position is free, it's filled in for you.
   - If another sensor now holds it — usually the replacement — the popup says which one. Choose **Use …** to take the suggested free name (for example `Pump1_old`), or edit the provider, folder, and tag name yourself. **Un-archive** stays unavailable until the path is free.
3. Add any notes and choose **Un-archive**.

The sensor returns to device lists and its page becomes editable again. Its new tag path starts with empty tags — values recorded at the old position stay with the sensor that holds it. The replacement record and the downlink history are kept.

### Put the original sensor back

Un-archiving doesn't take a position away from the sensor that holds it. To move the original sensor back into its old position, first un-archive it. Then open its replacement and run **Swap Device** again, choosing the original sensor. The replacement is archived in its place, and both swaps are recorded.

## Audit log

These entries appear under **Devices** in the audit log, and each can be turned on or off in the [Audit Log settings](/configure/audit-logging/configure/):

| Entry | Recorded on |
| --- | --- |
| Device replaced | The old sensor |
| Device swapped in | The new sensor |
| Device archived | A sensor archived without a replacement |
| Device un-archived | The sensor brought back, with the tag path it was given |
| Device moved to another site | A sensor moved with **Move Site** |

## Earlier versions

With a gateway on a SiteSync version before 1.0.2:

- **Swap Device** still hands over the tag path and copies the device info.
- The old sensor isn't archived, so it stays in your device lists.
- **Archived devices**, **Un-archive**, and **Previous device's downlinks** don't appear.

## Good to know

- A swap can't be undone in one step. Swap again to correct it; both swaps are kept in the history.
- Nothing is removed from your network server. Delete the old sensor there yourself once you no longer need it.
- Downlinks sent to the old sensor are listed for the new one under **Previous device's downlinks** — see [Downlink history](/use/downlink-history/).

## Related pages

- [Downlink history](/use/downlink-history/)
- [Send a downlink](/use/send-downlink/)
- [Audit logging](/configure/audit-logging/overview/)
