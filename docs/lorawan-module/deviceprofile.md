Device Profiles assign a device to a decoder, UDT, downlinks, and has information about the sensor.

Device Profiles are selectable as the Sensor Type when adding devices. 

To create a Device Profile, click Create Device Profile. Sensor Type, Profile Name, and Region will be available to configure. 


## Minimal Configuration
At minimum, a device profile must have a decoder and UDT selected. This can be selected on the first page. Hit save to apply the configuration.

![Device Profile Example](../../assets/deviceProfile.png)

The selected decoder and UDT can be investigated through the arrow on the right.


## More Settings

Other information on the device profile includes:

- External ID
    ID used in the LNS (Chirpstack and Actility)
- Device manufacturer
    Shows in Sensor Type Filter
- Firmware Version
- Hardware Versoin
- Limited Model
    This is a reference model in the folder SiteSyncModels
- Primary Value
    Allows user to select the PV or valueToDisplay when the Device Profile is selected. This value shows up on the device table, as well as the device page. It is the most important value reported by the sensor, as determined by the end user.
- Description
    User-inputted description of the device profile