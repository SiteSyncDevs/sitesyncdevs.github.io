---
title: "Configure sites"
description: "Create the sites your devices will belong to."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

With the module and projects in place, set up your [sites](/configure/sites/understand-sites/) — the organizational unit every device belongs to.

## Steps

1. [Create a site](/configure/sites/create-a-site/) for each location or logical grouping. Agree on a [naming convention](/configure/sites/naming-conventions/) first.
2. Devices are added to a folder aligned with the site name, so a clean scheme keeps your tags tidy.
3. Devices can be transferred between sites from the Enterprise Management app.

:::note[Default site]
Devices without an explicit site assignment may appear in a default site; move them to the correct site from Enterprise Management.
:::

:::caution[Renaming a site later]
Changing a site's name creates a **new folder** for devices added afterward — the site keeps its existing devices, but their tags stay in the original folder. Agree on names up front to avoid split folders. See [Edit a site](/configure/sites/edit-a-site/).
:::

## Next step

[Validate the installation](/install-upgrade/enterprise/validate/).
