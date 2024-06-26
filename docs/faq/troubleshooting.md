**Issue:  Not getting data into SiteSync module**

Check the Connections page to check  the status of MQTT connection. The status is updated live, and the client will try to auto-reconnect when disconnected.

If your connection status is Connected, check the mqtt topic that is being used, and ensure that information is being published on the expected topic. 
We recommend the client https://mqtt-explorer.com/ to see the activity of topics on a selected broker

Ensure devices are synced in SiteSync that are also being published on the topic. Devices that are not synced in SiteSync are not processed. 







