---
draft: true
title: "Create a decoder"
description: "Create a JavaScript decoder (paste or upload) or an API decoder, then test and save it."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-07-30"
---

## Goal

Create a decoder that parses your device's payload, then assign it to a [device profile](/configure/device-profiles/assign-decoder/).

## Open the decoder editor

1. In the left sidebar, go to **Device profiles → Decoders**.
2. Select **New decoder**.
3. Choose the decoder type with the **Decoder** / **API** toggle at the top.

## Option A — JavaScript decoder

Select **Decoder**. The editor has **Content**, **Test**, and **Upload** tabs.

- **Content** — paste your decoder. It must be a function with this signature:

  ```js
  function Decoder(bytes, port) {
    // parse bytes (the raw payload) using port (the fPort)
    // return an object of decoded fields
    return {};
  }
  ```

- **Upload** — instead of pasting, upload a `.js` file containing the same `Decoder(bytes, port)` function.
- Select **Update Decoder** to save.

![The JavaScript decoder editor with Content, Test, and Upload tabs.](/screenshots/DEC-JS-001.png)

## Option B — API decoder

Select **API**. The editor has **Connection** and **Test** tabs.

On **Connection**, set:

| Field | Description |
| --- | --- |
| URL | The endpoint SiteSync sends the payload to for decoding. |
| API Authentication | **None**, **Bearer**, or **Basic**. |
| API Payload Format | A JSON payload template for the request. |

Select **Save Configuration** to save.

![The API decoder editor showing URL, API Authentication (None/Bearer/Basic), and the API Payload Format template.](/screenshots/DEC-API-001.png)

:::note[API Payload Format — to document]
The exact structure of the **API Payload Format** JSON template still needs to be specified. Confirm the required fields and an example with SiteSync engineering.
:::

## Test and assign

1. Use the **Test** tab to [test the decoder](/configure/decoders/test/) against a sample payload.
2. Save, then [assign the decoder](/configure/device-profiles/assign-decoder/) on the relevant device profile.

## Related pages

- [Input and output contract](/configure/decoders/io-contract/)
- [Test a decoder](/configure/decoders/test/)
- [Assign a decoder](/configure/device-profiles/assign-decoder/)
