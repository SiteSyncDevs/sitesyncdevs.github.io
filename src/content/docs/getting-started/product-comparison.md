---
draft: true
title: "Product comparison"
description: "What each SiteSync product does, side by side."
products: ["standard", "enterprise-management", "field-app"]
roles: []
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

Most people arrive with a task, not a product name. This table shows which SiteSync product owns each capability.

| Capability | Standard | Enterprise Management | Field App |
| --- | --- | --- | --- |
| Single-deployment management | Yes | Yes | Site-scoped |
| Multi-site structure | No | Yes | Assigned site |
| Configure infrastructure connections | Yes (single) | Yes (multiple) | No |
| Multiple connections | No | Yes | No |
| Create device profiles & decoders | Yes | Yes | No |
| Onboard by form / QR | Yes (form) | Yes (form) | Yes (form + camera scan) |
| Bulk upload | Yes | Yes | No |
| Mobile camera scanning | No | No | Yes |
| Fleet dashboard | No | Yes | No |
| Site dashboard | Yes | Yes | Yes |
| Enterprise-wide device access | No | Yes | No (own site only) |

:::note[A couple of cells to confirm]
Confirm whether **Standard** exposes **Bulk upload** and a **Site dashboard** in the same form as Enterprise. Tracked in the open questions.
:::

## Which do I have?

- One gateway, one site, no role separation → **[SiteSync Standard](/products/standard/overview/)**.
- Multiple sites with a central admin team and site-level users → **[SiteSync Enterprise](/products/enterprise/overview/)** (Enterprise Management + Field App).
