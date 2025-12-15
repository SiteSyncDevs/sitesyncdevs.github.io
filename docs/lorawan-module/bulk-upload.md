**Overview**

Bulk Upload allows you to create or update many LoRaWAN devices at once by uploading a spreadsheet (Excel or CSV). This workflow is designed for large deployments where manually onboarding devices one‑by‑one would be slow or error‑prone.

When to use Bulk Upload

-Onboarding dozens to thousands of devices

-Migrating devices from another platform

-Applying consistent metadata across fleets

If you are onboarding devices individually or in the field, consider using QR Sync instead. Additionally, devices can be preprovisioned through the bulk upload process, and then installation metadata can be added in the field through QR Sync.


SiteSync streamlines the device provisioning process by supporting a bulk upload feature that allows a user to use csv template to add many devices to SiteSync quickly.

[SiteSync Bulk Upload Template](../files/SiteSyncUploadTemplate.csv){:SiteSync Bulk fUpload Template}

## CSV Column Requirements

Users are heavily encouraged to utilize the SiteSync Bulk Upload Template rather than making their own as SiteSync 
performs spreadsheet validation on upload. The list below describes the data type and purpose of each column in the bulk
upload template.

- `dev_eui`: _Hexadecimal String_. The 16 character unique identifier for the device (e.g., 0123456789ABCDEF) *
- `app_key`: _Hexadecimal String_. The 32 character application key for secure communication between the device and the application *
- `name`: _String_. The device name, used as the Ignition tag name. It should be descriptive to help identify the device 
within the tag provider *
- `join_eui`: _Hexadecimal String_. The the 16 character key used during device activation (e.g., 0123456789ABCDEF) *


Additional columns can be added and get mapped into Ignition tags on creation:
- `serialNumber`: Optional serial number of device
- `description`: Optional description of the device or installation location
- `tagPath`: This string can override the selected location in an Ignition Tag Provider where devices are uploaded into on upload.
- `deviceType`: This string device profile name can override the selected device profile on upload. The name must match the SiteSync device profile name exactly.


## Custom Attributes
Custom attributes or metadata can be added to the bulk upload template by adding a new column to the csv. The column name will be mapped to a 
nested tag named "custom_attributes", and stored within a JSON object, which can be displayed within the application. This allows for any additional device-specific data to be included in the upload.


## Step‑by‑Step: Performing a Bulk Upload

-Navigate to Devices → Bulk Upload in the SiteSync UI.

-Download the Bulk Upload Template.

-Open the CSV template

-Fill in one row per device (see column definitions below).

-Save the file (XLSX or CSV format).

-Upload the file using the Bulk Upload interface, selecting Sensor Type, and tag path.

-Review validation results.

-Confirm to apply valid rows.

-Devices that pass validation will appear in the device list immediately.