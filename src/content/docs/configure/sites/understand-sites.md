---
title: Understand sites
description: Sites are the core organizational unit in SiteSync — every device belongs to one.
products:
  - enterprise-management
roles:
  - administrator
introduced: 1.0.0
contentType: concept
lastReviewed: 2026-07-30
owner: ''
---

Sites are the core organizational unit in SiteSync. Each site represents a physical location or logical grouping — a building, plant, campus, region, or any boundary that makes sense for your organization. **Every device in SiteSync belongs to a site**, so setting your sites up well early makes everything else easier to manage at scale.

Access your organization's sites from the left sidebar menu.

## Key behavior

- Devices are added to their respective site's folder by default, aligned with the site name.
- Field App users see only the devices for their assigned site; Enterprise Management can see all devices enterprise-wide.

![](/screenshots/20260802-184248.png "Example Site List in SiteSync Enterprise")

_Site List with several example sites in Enterprise Management_

## Product differences

Sites are an **Enterprise** concept. Standard is a single deployment and does not use multi-site structure.

## Related tasks

- [Create a site](/configure/sites/create-a-site/)
- [Site naming conventions](/configure/sites/naming-conventions/)
