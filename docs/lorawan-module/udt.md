In Ignition, User-Defined Types (UDTs) are custom data types that allow you to group multiple tags into a single, 
reusable structure. SiteSync utilizes UDTs to create a structure for decoded sensor data, device metadata, and other
attributes to serialize messages into a standard format that can be written to Ignition tags.

## UDT Structure





SiteSync consumes JSON objects to create UDTs. Each UDT definition must meet the requirements listed below:

- `type` should be set to `UdtType`
- `name` should specify the UDT name
- `tags` should contain an array of tag objects, where each object defines one tag's properties

## Example
```json 
{
    "name": "MyUDT",
    "tagType": "UdtType",
    "tags": [
        {
            "dataType": "String",
            "name": "ExampleTagFolder",
            "tagType": "AtomicTag",
            "valueSource": "memory"
        },
        {
            "name": "ExampleTagFolder",
            "tagType": "Folder",
            "tags": [
                {
                    "dataType": "String",
                    "name": "Temperature",
                    "tagType": "AtomicTag",
                    "valueSource": "memory"
                },
                {
                    "dataType": "String",
                    "name": "Battery",
                    "tagType": "AtomicTag",
                    "valueSource": "memory"
                }
            ]
        }
    ]
}
```
