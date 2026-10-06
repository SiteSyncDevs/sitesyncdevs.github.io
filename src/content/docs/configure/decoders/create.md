---
title: "Create a decoder"
description: "Create a JavaScript or API-based decoder, including the API connection, authentication, and the JSON API Payload Format template."
products: ["standard", "enterprise-management"]
roles: ["administrator"]
introduced: "1.0.0"
contentType: "task"
lastReviewed: "2026-10-05"
---

A decoder turns a device's raw LoRaWAN payload into named values SiteSync can model as tags. SiteSync supports two kinds — see [Decoder concepts](/configure/decoders/concepts/) for the difference.

## Before you begin

- Open **Device profiles → Decoders** and select **+ Add decoder** (or open an existing one to edit it).
- Give the decoder a clear **name** — this is what you'll select on a [device profile](/configure/device-profiles/assign-decoder/).
- At the top of the editor, choose the decoder type: **Decoder** (JavaScript) or **API**.

## Create a JavaScript decoder

With **Decoder** selected, provide a JavaScript decode function — paste it in or upload a `.js` file. It runs inside SiteSync on every uplink from devices using this profile.

### Required function signature

At minimum, your code must define a function named `Decoder` that takes **`bytes`** and **`port`**:

```javascript
function Decoder(bytes, port) {
  // bytes: the payload as a byte array, e.g. [20, 34, 19, ...]
  // port:  the LoRaWAN FPort the uplink arrived on, e.g. 10

  var data = {};
  data.size = bytes.length;
  // ...map bytes[] into named fields for this device...

  return { data: data };   // optionally add: warnings: [...], errors: [...]
}
```

- **`bytes`** is the raw payload as an array of byte values; **`port`** is the FPort. You can branch on `port` to decode different message types.
- Return an object with a **`data`** field holding your decoded values. You may also return optional **`warnings`** and **`errors`** arrays — if `errors` is non-empty, SiteSync treats the decode as failed.

[Test it](/configure/decoders/test/) against a sample payload before assigning it.

## Create an API decoder

With **API** selected, SiteSync sends each uplink to an external service and uses the decoded response. The **Connection** tab has three parts:

### URL

The endpoint SiteSync posts each payload to — for example `http://lab.sitesync.cloud:9080/core`. Include the port where your service requires one.

### API Authentication

How SiteSync authenticates to that endpoint:

| Option | Use |
| --- | --- |
| None | The endpoint needs no credentials. |
| Bearer | SiteSync sends a bearer token in the `Authorization` header. |
| Basic | SiteSync sends a username and password using HTTP Basic auth. |

### API Payload Format

A **JSON template** for the request body SiteSync sends to your endpoint. You structure the body however your decode service expects it, and use placeholder variables where the live uplink values should go. SiteSync replaces those placeholders with the message's values before posting the request, then reads the decoded JSON the service returns.

Two placeholders are substituted from each uplink:

| Variable | Replaced with | Notes |
| --- | --- | --- |
| `!PAYLOAD!` | The raw uplink payload, as a hex string | It's a string, so keep it **inside quotes** in the template. |
| `!FPORT!` | The LoRaWAN FPort the uplink arrived on | It's a number, so leave it **unquoted**. |

For example, a service that expects a hex string and an FPort would use:

```json
{
  "hex": "!PAYLOAD!",
  "fport": !FPORT!
}
```

Because the body is just a template you control, you can point SiteSync at different API decode services and shape the request to match whatever each one expects — the placeholders pipe the values in from the message pipeline.

When the fields are complete, select **Save Configuration**.

## Input and output contract

For a **JavaScript** decoder, the input is `Decoder(bytes, port)` — `bytes` is the payload byte array and `port` is the FPort — and the output is the object you return: a **`data`** object of decoded values, plus optional **`warnings`** and **`errors`** arrays (a non-empty `errors` means the decode failed).

For an **API** decoder, SiteSync sends your [API Payload Format](#api-payload-format) template to the endpoint and uses the decoded JSON it returns.

Either way, the decoder's output is a flat set of **named fields**. Those names are what a device profile's [Primary Value and Display Values](/configure/device-profiles/tag-paths/) reference, and what the assigned [UDT](/configure/device-profiles/assign-udt/) maps into tags — so keep the output names stable once devices depend on them.

## Save and test

1. Select **Save Configuration**.
2. Open the **Test** tab and [test the decoder](/configure/decoders/test/) against a sample hex payload. For an API decoder, the Test tab exercises the configured endpoint.
3. Assign the decoder on the relevant [device profile](/configure/device-profiles/assign-decoder/).

## Related pages

- [Decoder concepts](/configure/decoders/concepts/)
- [Test a decoder](/configure/decoders/test/)
- [Assign a decoder to a profile](/configure/device-profiles/assign-decoder/)
- [Decode error](/troubleshoot/device-problems/decode-error/)
