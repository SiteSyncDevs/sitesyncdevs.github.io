SiteSync streamlines the device provisioning process by supporting a bulk upload feature that allows a user to use an
Excel template to add many devices to SiteSync quickly.

[SiteSync Bulk Upload Template](../files/SiteSync Bulk Upload Template.xlsx){:SiteSync Bulk fUpload Template}

## Excel Column Requirements

Users are heavily encouraged to utilize the SiteSync Bulk Upload Template rather than making their own as SiteSync 
performs spreadsheet validation on upload. The list below describes the data type and purpose of each column in the bulk
upload template.

- `dev_eui`: _Hexadecimal_. The unique identifier for the device (e.g., 0123456789ABCDEF) *
- `app_key`: _String_. The application key for secure communication between the device and the application *
- `name`: _String_. The device name, used as the Ignition tag name. It should be descriptive to help identify the device 
within the tag provider *
- `join_eui`: _hexadecimal_. The globally unique identifier used during device activation (e.g., 0123456789ABCDEF) *
- `deviceType`: _String_. The UDT name associated with the device, which initializes the correct UDT instance in the 
selected tag provider and associates an existing decoder with the device *
- `description`: _String_. A brief description or notes about the device.
- `tagPath`: _String_. Specifies a complete tag path with folders and nested folders. If left empty, all tags/devices 
are created at the root of the tag provider.
- `hardware_version`: _String_. Metadata about the sensor's hardware, written to the metadata tag.
- `Location Description`: _String_. Information describing the installation location of the device.
- `equipment`: _String_. Information about the equipment on which the sensor is installed.

_* required_

## Custom Attributes
Custom attributes can be added to the bulk upload template by adding a new column. The column name will be mapped to a 
nested tag named "custom_attributes". This allows for any additional device-specific data to be included in the upload.