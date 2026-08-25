---
title: "Role-based access control (RBAC)"
description: "Administrator guide to controlling which identity-provider roles can add, edit, or delete devices in the SiteSync Field App, and at which sites."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-08-25"
---

## What RBAC does

Role-based access control lets you decide which of your identity provider's roles can **Add**, **Edit**, or **Delete** devices in the SiteSync Field App — and at which sites. Every user can always **view (Read)** devices; RBAC controls whether they can also change or remove them.

| Privilege | What it allows |
| --- | --- |
| Read | View devices and their data. Every authenticated user has this by default — it is the baseline everyone gets, whether or not RBAC is turned on. |
| Add | Create new devices at a site (for example, via QR sync or manual entry). |
| Edit | Modify an existing device — its configuration, location, tags, and similar settings. |
| Delete | Remove a device from a site. |

## How access is determined

RBAC does not maintain its own list of users. Instead, it reads the role names your identity provider (IdP) already assigns to each person when they log in, and checks those role names against the permissions you configure on the admin screen.

This works with any identity provider Ignition supports — Azure AD / Entra ID, Okta, Auth0, ADFS, a generic SAML or OIDC provider, or Ignition's own built-in accounts. For an OIDC-based provider like Azure AD / Entra ID with roles configured as App Roles, Ignition typically picks up the standard `roles` claim automatically — no extra mapping step needed once the App Role is assigned to a user in Azure. If your identity provider uses SAML, or sends role/group information under a non-standard claim or attribute name, your Gateway's Identity Provider configuration may need an explicit attribute mapping so that information lands in Ignition's session roles. Your SiteSync contact can confirm what, if anything, is needed for your specific provider.

:::caution[Role names must match exactly]
Role names must match exactly what your identity provider sends, **including capitalization**. If a role you've configured here doesn't appear to be taking effect, double-check the exact spelling and case your IdP uses.
:::

Reference documentation from Inductive Automation:

- [Configuring Identity Providers](https://www.docs.inductiveautomation.com/docs/8.1/platform/security/identity-provider-authentication-strategy/configuring-identity-providers)
- [User Attribute Mapping](https://www.docs.inductiveautomation.com/docs/8.1/platform/security/identity-provider-authentication-strategy/configuring-identity-providers/user-attribute-mapping) — only needed for non-standard claim names, e.g. SAML

## Default behavior and safety

**Off by default.** Until you explicitly turn RBAC on, every authenticated user retains full Add, Edit, and Delete access — identical to how the Field App has always worked. Upgrading to a version with RBAC changes nothing on its own.

**Fails safe.** If the underlying configuration is ever unreadable or invalid for any reason, the app does not break or lock anyone out — it falls back to **Read-only** access for everyone until the issue is resolved.

**Scoped to the Field App only.** RBAC has no effect on the Enterprise Management app or Site dashboards.

## Using the Configure Role Permissions screen

You'll find this screen in **Enterprise Management**, under **Settings → RBAC**.

:::note[Where it lives vs. what it controls]
Although the screen itself lives in Enterprise Management, the permissions you configure here only govern what a person can do in the **Field App** — they have no effect on access to Enterprise Management or Site dashboards themselves.
:::

### RBAC Enabled

The toggle at the top of the screen turns enforcement on or off entirely. When off, every authenticated user has full access, regardless of anything else configured below.

### Roles

Each role you've configured appears as its own card, showing Add, Edit, and Delete at a glance. Click a role's header to expand it.

1. Click **+ Add Role** and enter the role name exactly as your identity provider sends it.
2. Expand the role and turn on **Granted** for each privilege (Add, Edit, and/or Delete) you want this role to have.
3. For each granted privilege, choose **All Sites** to apply it everywhere, or turn All Sites off and select specific sites from the dropdown.
4. Click **Save Configuration** when finished.

Add, Edit, and Delete are scoped independently for each role. For example, the same role can have Edit access everywhere but Delete access limited to one or two specific sites.

### Example: setting up two roles

A common starting point is one broad administrative role and one limited field-technician role:

- **Administrator** — Add, Edit, and Delete all granted, each scoped to All Sites.
- **FieldTech** — Edit granted, scoped to only the specific sites that role's technicians actually service; Add and Delete left ungranted, so those technicians retain Read-only for those two actions everywhere.

Any role you don't explicitly grant a privilege to simply keeps the Read-only default for that privilege — there's nothing to configure for a role you want restricted.

## What users see

If someone attempts an action they don't have permission for — for example, trying to delete a device without Delete access at that site — the app shows a message explaining they don't have permission, and the action does not go through. Nothing is silently blocked without explanation.

## When changes take effect

Permissions are checked on every Add, Edit, or Delete attempt, so a change you save here takes effect **immediately** — including for users who are already logged in. There's no need to ask anyone to log out and back in for a permissions change to apply.

## Troubleshooting

- **A role's permissions don't seem to apply:** confirm the role name matches your identity provider's role claim exactly, including case.
- **A user has more or less access than expected:** check whether that user has more than one role assigned by your identity provider — if any of their roles grants a privilege at a site, they have it, even if another one of their roles doesn't.
- **Everything is Read-only unexpectedly:** this is the fail-safe behavior described above. Contact your SiteSync representative to confirm the underlying configuration is intact.
- **Not sure this applies to a particular app:** RBAC only governs the Field App. The Enterprise Management app and Site dashboards are unaffected.

## Related pages

- [Configure identity and roles](/install-upgrade/enterprise/configure-identity-roles/)
- [Field App overview](/products/field-app/overview/)
