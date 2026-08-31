---
title: "How RBAC stores its configuration"
description: "Technical reference for the single tag RBAC uses to store its configuration, including the decoded JSON structure."
products: ["enterprise-management", "field-app"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-08-25"
---

:::note[For reference only]
The tag section below is for troubleshooting and technical reference — you should not need to edit it directly. All day-to-day configuration should go through the [Configure role permissions](/configure/rbac/configure-role-permissions/) screen. The install-time settings immediately below, however, **must** be set once when the module is deployed.
:::

## Install-time settings (`rbac/settings/code.py`)

When RBAC is first deployed, three per-install values must be set in `rbac/settings/code.py`. This is the one place in the package that ties RBAC to your specific projects and tags, and it's done by whoever installs the module — not through the admin screen.

```python
FIELD_APP_PROJECT_NAME = "SiteSync-FieldApp"   # confirm via system.util.getProjectName()
ERROR_POPUP_VIEWPATH   = "Popups/error"
CONFIG_TAG_PATH        = "[SiteSync]_Config/RBAC"
```

| Value | What it is |
| --- | --- |
| `FIELD_APP_PROJECT_NAME` | The exact name of the Field App project RBAC enforces against. Confirm it with `system.util.getProjectName()` from within that project — it must match exactly. |
| `ERROR_POPUP_VIEWPATH` | The view path shown when a user attempts an action they don't have permission for. |
| `CONFIG_TAG_PATH` | The tag that stores the RBAC configuration (see below). Must match the tag your deployment actually uses. |

:::caution[Set these before enabling RBAC]
If `FIELD_APP_PROJECT_NAME` or `CONFIG_TAG_PATH` don't match your actual project and tag, permission checks won't line up with the sessions they're meant to govern. Confirm these alongside the [Identity Provider prerequisites](/configure/rbac/configure-role-permissions/#before-you-enable-rbac).
:::

## Where the configuration lives

Everything RBAC knows lives in a single tag:

| Tag path | Type |
| --- | --- |
| `[SiteSync]_Config/RBAC` | String (memory tag) |

## Tag value, decoded

The tag's value is stored as a JSON-encoded string. Parsed, it represents the same information the admin screen edits:

- **`enabled`** — the master on/off switch; same as the RBAC Enabled toggle on the admin screen.
- **`roleMappings`** — one entry per privilege: `add`, `edit`, and `delete`. Read isn't listed here because every authenticated user always has it.
- Each grant is a `{ role, tenantIDs }` pair. `role` must match your identity provider's role name exactly, including case. `tenantIDs` is either `"*"` (all sites) or a list of specific site IDs.

```json
{
  "enabled": true,
  "roleMappings": {
    "add": [
      { "role": "FieldTech",      "tenantIDs": [2] },
      { "role": "Administrator",  "tenantIDs": [3, 8] },
      { "role": "EnterpriseOwner","tenantIDs": "*" }
    ],
    "edit": [
      { "role": "FieldTech",      "tenantIDs": [2] },
      { "role": "Administrator",  "tenantIDs": "*" }
    ],
    "delete": [
      { "role": "FieldTech",      "tenantIDs": [2] },
      { "role": "Administrator",  "tenantIDs": "*" }
    ]
  }
}
```

If you ever need to inspect this directly — for example, while troubleshooting with your SiteSync contact — you can view or export it from the Designer's Tag Browser at the path above, the same way you would any other tag.

## Related pages

- [Role-based access control (RBAC)](/configure/rbac/overview/)
- [Configure role permissions](/configure/rbac/configure-role-permissions/)
- [RBAC troubleshooting](/configure/rbac/troubleshooting/)
