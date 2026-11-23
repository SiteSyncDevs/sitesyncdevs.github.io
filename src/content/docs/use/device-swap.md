---
title: "Swap a device"
description: "Replace a failed, flat, or upgraded sensor in one guided flow. The new sensor takes over the old one's tags, and the old sensor is deleted."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.2"
contentType: "task"
lastReviewed: "2026-11-23"
---

:::note[Availability]
Available in the Enterprise Management app and the Field App from SiteSync 1.0.2, and generally available from [SiteSync 1.1.0](/release-notes/1-1-0/). Deleting the old sensor at the end of a swap is in builds from November 2026.
:::

When a sensor fails, runs out of battery, or is upgraded, **Swap Device** replaces it in one guided flow. The new sensor takes over the old one's position, so its tags, trends, and alarms carry on without a gap. The old sensor is then **deleted** from SiteSync and your network server.

## When to use it

Use **Swap Device** when a new physical sensor goes into the same place as an old one: the old sensor failed, was damaged, ran out of battery, or is being upgraded. The measurement point stays the same and only the hardware behind it changes.

| | Swap Device | Delete the old sensor and add the new one |
| --- | --- | --- |
| Name, description, metadata, install location and photo | Copied to the new sensor | Entered again by hand |
| Tag path | The new sensor takes it over, so anything reading those tags keeps working | Set up again for the new sensor |
| Old sensor's downlinks | Listed on the new sensor, ready to resend | Lost with the old sensor |
| Record of the replacement | Who, when and why, kept on the new sensor | None |

If the new sensor is going somewhere else, or measuring something else, add it as a new device instead.

### Name devices after what they measure

The new sensor takes the old sensor's name and tag path. That reads correctly when a device is named after its measurement point, for example `PT-101 Pump discharge`. It reads wrongly when the name is a serial number or a DevEUI, because the new sensor would carry the old unit's identity. The DevEUI and serial number fields are where the hardware is identified.

### Two ways to choose the new sensor

| The new sensor is | What to do |
| --- | --- |
| New, and not in SiteSync yet | Scan its QR code or enter its keys. It's added and swapped in together. |
| Already in SiteSync, such as a spare that was added or bulk uploaded ahead of time | Choose **Choose an existing sensor instead** and pick it from the list. No keys are needed. |

## Before you start

- You need **edit** access to the device's site.
- If the new sensor isn't in SiteSync yet, have its DevEUI, JoinEUI (AppEUI), and AppKey to hand, or its QR code if you're using the SiteSync mobile app.

## Replace a sensor

1. Open the old sensor's page, choose **Edit**, then choose **Swap Device**. The **Replace sensor** screen opens.
2. **Choose the new sensor.**
   - **A new sensor:** choose **Scan QR code** (in the mobile app), or enter its DevEUI, JoinEUI / AppEUI, and AppKey. It's added with the old sensor's device profile, site, and application.
   - **A sensor already in SiteSync:** choose **Choose an existing sensor instead**. The list shows sensors of the same device type at the same site, with their **Device type**, **Site**, and **Last seen** time. Untick **Same device type and site only** to see every sensor you can use. Search by name or DevEUI, or type a full DevEUI, and select the sensor.
   - If the sensor you choose already writes to its own tag path, a warning names that path. That path stops updating after the swap; its tag folder stays where it is.
3. Choose **Review replacement**. Check what carries over, choose a **Reason** (Failed, Battery, Damaged, Upgrade, or Other), and add any **Notes**.
   - If the two sensors use different device profiles, a warning appears. Tick **Use the old device's profile** to switch the new sensor to the old one's profile, so its values fit the existing tags.
4. Choose **Replace sensor**. Each step shows its own result as it runs:

   | Step | What happens |
   | --- | --- |
   | Register the new sensor | Adds it to SiteSync and your network server, only if you entered a new sensor |
   | Hand over the tag path | The new sensor takes over the old one's tags |
   | Copy device info | Name, description, metadata and custom attributes, install location, and photo. A sensor from another site moves to the old sensor's site. |
   | Record the replacement and delete the old sensor | Links the two sensors, then deletes the old one from SiteSync and your network server |
   | Record in the audit log | Adds *Device replaced* and *Device swapped in* entries |

5. When every step is green, choose **Done** to open the new sensor's page.

If a step fails, it shows the error and a **Retry** button. Each step checks what has already happened before it runs, so retrying is always safe. If registering or handing over the tag path fails, the later steps wait until you retry it. The old sensor is only deleted once every earlier step has succeeded, so its details are never lost halfway through.

## What carries over

| Carries over | Doesn't carry over |
| --- | --- |
| The tag path, with its trends, history, and alarms | The new sensor's own previous tag folder, which is left in place |
| Name and description | The old sensor's audit, activity, and MQTT logs |
| Metadata and custom attributes | The **In testing** mark |
| Install location and photo | |
| Site, when the new sensor was at another site | |
| Device profile, if you chose **Use the old device's profile** | |
| The old sensor's downlinks, under **Previous device's downlinks** | |

The new sensor starts reporting into the old position from its first uplink.

To reconfigure the new sensor the way the old one was set up, see [Downlink history](/use/downlink-history/).

## What happens to the old sensor

The old sensor is deleted from SiteSync and from your network server. Its tags aren't deleted, because the new sensor now writes to them.

These stay after the delete:

- the replacement record, so the new sensor still shows which sensor it replaced, when, by whom, and why;
- the old sensor's downlinks, under **Previous device's downlinks** on the new sensor;
- the *Device replaced* and *Device deleted* entries in the audit log.

Sensors archived by swaps on an earlier version are deleted the same way, automatically, the next time someone signs in.

## Audit log

These entries appear under **Devices** in the audit log, and each can be turned on or off in the [Audit Log settings](/configure/audit-logging/configure/):

| Entry | Recorded on |
| --- | --- |
| Device replaced | The old sensor |
| Device swapped in | The new sensor |
| Device deleted | The old sensor, when the swap deletes it |
| Device moved to another site | A sensor moved with **Move Site** |

## Good to know

- A swap can't be undone. To put the original sensor back, add it again and swap it in; both swaps are kept in the history.
- Adding a deleted sensor's DevEUI back needs SiteSync module 1.95.21 or later. On earlier modules, wait until the module is upgraded.
- Downlinks sent to the old sensor are listed for the new one under **Previous device's downlinks**. See [Downlink history](/use/downlink-history/).

## Related pages

- [Downlink history](/use/downlink-history/)
- [Send a downlink](/use/send-downlink/)
- [Audit logging](/configure/audit-logging/overview/)
