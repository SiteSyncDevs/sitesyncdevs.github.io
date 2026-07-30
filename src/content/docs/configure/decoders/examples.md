---
draft: true
title: "Examples"
description: "Illustrative decoder examples."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

## JavaScript decoder skeleton

```js
function Decoder(bytes, port) {
  // Example: first two bytes = temperature (0.1 °C), next byte = battery %
  var tempC = ((bytes[0] << 8) | bytes[1]) / 10;
  var battery = bytes[2];
  return {
    temperatureCelsius: tempC,
    battery: battery,
  };
}
```

:::note[Needs a canonical example]
The snippet above is illustrative only. Add one or two real SiteSync decoder examples (a shipped/library decoder and a common custom one), plus a matching sample hex payload and expected output. Confirm with SiteSync engineering.
:::

## Related pages

- [Input and output contract](/configure/decoders/io-contract/)
- [Create a decoder](/configure/decoders/create/)
