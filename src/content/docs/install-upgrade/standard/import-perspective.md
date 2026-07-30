---
title: "Import the Perspective project"
description: "Import SiteSync Source and the Standard project."
products: ["standard"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Steps

1. In the Gateway web config, go to **Config → Projects → Import**.
2. Import **SiteSync Source** (the parent project) first.
3. Import the **Standard** project, which inherits from Source.
4. Confirm both projects load without errors.

:::tip[Keep them together]
Source and the Standard project should be on the same version — import them as a set.
:::

## Next step

[Initial configuration](/install-upgrade/standard/initial-configuration/).
