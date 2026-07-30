---
draft: true
title: "Decoder contract"
description: "The decoder function signature and API-decoder shape."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "reference"
lastReviewed: "2026-07-30"
---

A JavaScript decoder is a function `Decoder(bytes, port)` returning an object of decoded fields; an API decoder posts to a URL with configurable auth. The full contract is on [Input and output contract](/configure/decoders/io-contract/).

:::note[Confirm exact contract]
The precise return shape and the API Payload Format template still need confirmation from engineering — tracked in the open questions.
:::
