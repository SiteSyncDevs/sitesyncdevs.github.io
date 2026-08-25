---
title: "Role-based access control (RBAC)"
description: "How RBAC controls which identity-provider roles can add, edit, or delete devices in the SiteSync Field App, and at which sites."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "concept"
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

## Next steps

- [Configure role permissions](/configure/rbac/configure-role-permissions/)
- [RBAC troubleshooting](/configure/rbac/troubleshooting/)

## Related pages

- [Configure identity and roles](/install-upgrade/enterprise/configure-identity-roles/)
- [Field App overview](/products/field-app/overview/)
