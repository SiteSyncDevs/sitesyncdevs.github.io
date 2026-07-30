---
title: "Roles and permissions"
description: "How Enterprise separates central administrators from site-level users."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
lastReviewed: "2026-07-30"
---

SiteSync Enterprise separates responsibilities through your Ignition Identity Provider.

| Role | Who | What they do |
| --- | --- | --- |
| Administrator | Central enterprise team | Manage the Enterprise Management app — connections, device profiles, decoders, sites, and the fleet. See everything enterprise-wide. |
| General (field user) | Site personnel | Use the Field App to onboard and monitor devices at their assigned site only. Never see infrastructure or credentials. |

This lets site users focus on devices and data without touching the underlying LoRa stack, while a central team owns the infrastructure.

**SiteSync Standard** is a single deployment and does not use this role separation.

## Related pages

- [Configure identity and roles](/install-upgrade/enterprise/configure-identity-roles/)
- [Multi-site operating model](/products/enterprise/multi-site-model/)
