---
title: "Test a decoder"
description: "Validate a decoder against a sample hex payload before assigning it."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Confirm a decoder produces the expected output before assigning it to a profile.

## Steps

1. Open the decoder in the editor (**Device profiles → Decoders →** open a decoder).
2. Select the **Test** tab.
3. Provide a sample **hex payload** (for an API decoder, the Test tab exercises the configured endpoint).
4. Run the test and review the decoded output.

## Verify

The decoded fields match what you expect for that payload — and align with the fields your device profile's [Primary Value and Display Values](/configure/device-profiles/tag-paths/) reference.

## Related pages

- [Create a decoder](/configure/decoders/create/)
- [Input and output contract](/configure/decoders/io-contract/)
