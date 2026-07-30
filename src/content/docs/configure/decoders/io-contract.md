---
draft: true
title: "Input and output contract"
description: "The Decoder(bytes, port) function signature and what a decoder returns."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

## JavaScript decoder

A JavaScript decoder is a single function:

```js
function Decoder(bytes, port) {
  // ...
  return { /* decoded fields */ };
}
```

| Parameter | Description |
| --- | --- |
| `bytes` | The raw payload from the device (the uplink byte array). |
| `port` | The LoRaWAN `fPort` the uplink arrived on. |

The function **returns an object** of decoded fields. Those fields are what the device profile's [Primary Value and Display Values](/configure/device-profiles/tag-paths/) reference, and what the assigned [UDT](/configure/udts-and-tags/udt-requirements/) structures into tags.

:::note[Return shape — to confirm]
Confirm any required conventions for the returned object (nested `data` object, naming, units, error signaling) with SiteSync engineering so the contract is exact.
:::

## API decoder

An API decoder sends the payload to a configured **URL** with **None / Bearer / Basic** auth and an **API Payload Format** (JSON template). See [Create a decoder](/configure/decoders/create/#option-b--api-decoder).

:::note[API Payload Format — to document]
The JSON template structure for the request, and the expected decoded response shape, still need to be specified.
:::

## Related pages

- [Create a decoder](/configure/decoders/create/)
- [Configure tag paths](/configure/device-profiles/tag-paths/)
