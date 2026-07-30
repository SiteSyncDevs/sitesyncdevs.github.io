---
title: "Before upgrading"
description: "What a SiteSync upgrade involves and what to line up first."
products: ["standard", "enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

Upgrading SiteSync means installing a **new version of the SiteSync module** and **re-importing its Perspective project(s)** through the Ignition Gateway web configuration page. It is not a change of product — it moves your existing deployment to a newer version.

## When an upgrade is required

Each release's notes call out required deployment actions at the top. For example, **1.0.0** requires re-importing the SiteSync Source, Enterprise Management, and Field App projects — see the [1.0.0 release notes](/release-notes/1-0-0/).

Always read the target version's release notes before starting — they call out anything out of the ordinary, such as specific UDTs to re-import.

## Line these up first

- Access to the Ignition Gateway **web configuration page**.
- The new module `.modl` and the matching Perspective project file(s) for the target version.
- **(Enterprise)** an Ignition Identity Provider with an **administrator** role (manage the enterprise app) and a **general** role (Field App sign-in).
- Network access to your LoRa Network Server API (port is network-server dependent) and MQTT broker (port `8883`), plus LNS API credentials. If Standard SiteSync is already running, these are already in place.

## Next steps

1. [Back up SiteSync](/install-upgrade/upgrade/back-up/).
2. Check [version compatibility](/install-upgrade/upgrade/version-compatibility/).
3. Run [Upgrade Standard](/install-upgrade/upgrade/upgrade-standard/) or [Upgrade Enterprise](/install-upgrade/upgrade/upgrade-enterprise/).
