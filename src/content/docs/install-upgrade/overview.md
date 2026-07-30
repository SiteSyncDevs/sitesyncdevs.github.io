---
title: "Installation overview"
description: "How SiteSync installs on an Ignition gateway, and the parent SiteSync Source project both editions share."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "overview"
lastReviewed: "2026-07-30"
---

SiteSync installs onto an Ignition gateway as a **module** plus one or more **Perspective projects**, all added through the Gateway web configuration page.

## SiteSync Source (parent project)

Every deployment includes **SiteSync Source**, the parent Perspective project. The product projects inherit from it:

- **Standard** → Source + the **Standard** project.
- **Enterprise** → Source + **Enterprise Management** + **Field App**.

Keep Source and its child projects on the same version.

## Choose your path

- **[Install Standard](/install-upgrade/standard/requirements/)** — a single deployment on one gateway.
- **[Install Enterprise](/install-upgrade/enterprise/requirements/)** — multi-site, with a central management app and a site-facing Field App.

Already running a version and moving to a newer one? See [Upgrade SiteSync](/install-upgrade/upgrade/before-upgrading/).
