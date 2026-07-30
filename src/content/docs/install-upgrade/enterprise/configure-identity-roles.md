---
title: "Configure identity and roles"
description: "Set up the administrator and general roles in your identity provider."
products: ["enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

SiteSync Enterprise uses your Ignition **Identity Provider** to separate who manages the platform from who uses the Field App.

## Roles

| Role | Who | Purpose |
| --- | --- | --- |
| Administrator | Central enterprise team | Manage the Enterprise Management app — connections, device profiles, decoders, sites, and fleet. |
| General | Site / field users | Sign in to the Field App to onboard and monitor devices at their site. |

## Steps

1. In your Identity Provider, create (or confirm) the **administrator** and **general** roles.
2. Assign users to the appropriate role.
3. Confirm an administrator can open Enterprise Management and a general user can sign in to the Field App.

:::tip[Automate site selection]
Field App site selection can be automated through sign-in credential roles — see [Select a site](/use/field-app/select-site/).
:::

## Next step

[Configure sites](/install-upgrade/enterprise/configure-sites/).
