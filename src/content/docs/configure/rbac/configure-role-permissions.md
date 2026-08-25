---
title: "Configure role permissions"
description: "Use the Configure Role Permissions screen in Enterprise Management to grant Add, Edit, and Delete to identity-provider roles, scoped by site."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-08-25"
---

You'll find this screen in **Enterprise Management**, under **Settings → RBAC**.

:::note[Where it lives vs. what it controls]
Although the screen itself lives in Enterprise Management, the permissions you configure here only govern what a person can do in the **Field App** — they have no effect on access to Enterprise Management or Site dashboards themselves.
:::

## RBAC Enabled

The toggle at the top of the screen turns enforcement on or off entirely. When off, every authenticated user has full access, regardless of anything else configured below.

## Roles

Each role you've configured appears as its own card, showing Add, Edit, and Delete at a glance. Click a role's header to expand it.

1. Click **+ Add Role** and enter the role name exactly as your identity provider sends it.
2. Expand the role and turn on **Granted** for each privilege (Add, Edit, and/or Delete) you want this role to have.
3. For each granted privilege, choose **All Sites** to apply it everywhere, or turn All Sites off and select specific sites from the dropdown.
4. Click **Save Configuration** when finished.

Add, Edit, and Delete are scoped independently for each role. For example, the same role can have Edit access everywhere but Delete access limited to one or two specific sites.

## Example: setting up two roles

A common starting point is one broad administrative role and one limited field-technician role:

- **Administrator** — Add, Edit, and Delete all granted, each scoped to All Sites.
- **FieldTech** — Edit granted, scoped to only the specific sites that role's technicians actually service; Add and Delete left ungranted, so those technicians retain Read-only for those two actions everywhere.

Any role you don't explicitly grant a privilege to simply keeps the Read-only default for that privilege — there's nothing to configure for a role you want restricted.

## What users see

If someone attempts an action they don't have permission for — for example, trying to delete a device without Delete access at that site — the app shows a message explaining they don't have permission, and the action does not go through. Nothing is silently blocked without explanation.

## When changes take effect

Permissions are checked on every Add, Edit, or Delete attempt, so a change you save here takes effect **immediately** — including for users who are already logged in. There's no need to ask anyone to log out and back in for a permissions change to apply.

## Related pages

- [Role-based access control (RBAC)](/configure/rbac/overview/)
- [RBAC troubleshooting](/configure/rbac/troubleshooting/)
