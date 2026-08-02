---
title: "Configure Display Values"
description: "Set the Primary Value and Display Values that SiteSync surfaces from a decoded payload."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Choose which decoded fields SiteSync surfaces as the headline and secondary values for devices on this profile.

## Before you begin

:::note[Display Values live on the UDT]
Display Values are configured on the **UDT**, not on the profile form directly — the fields you want to surface must exist in the UDT's designated Display Values folder. Select **and save** the UDT on the profile before you can pick a Primary Value or Display Values.
:::

## Primary Value

The main data point SiteSync treats as the device's headline metric — for example, `.../data/maximumAmps`. It is shown most prominently on the device detail page and in fleet-level views. The path references a field within the decoded payload.

## Display Values

A comma-separated list of additional payload fields to show on the device values page — for example, `averageAmps, temperatureCelsius`. These appear alongside the Primary Value on the device detail and values pages. Each path references a field within the decoded payload.

## Related pages

- [Profile fields](/configure/device-profiles/fields/)
- SiteSync tag model
