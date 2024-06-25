---
hide:
  - toc
---

Follow the steps below for installing an Ignition gateway on your platform of choice

=== ":simple-docker: Docker"

    An Ignition gateway can quickly be deployed via Docker. 

    SiteSync reccomends all new installations of Ignition to be 
    installed using Docker as it allows for process isolation, quick deployment, and easy management using Docker Engine.
    

    For full documentation on running Ignition within a Docker container, please visit the [Ignition Docker Image documentation](https://www.docs.inductiveautomation.com/docs/8.1/platform/docker-image)

    ### Installation via CLI:
    ```shell
    docker run -d -p 8088:8088 --name Ignition-Gateway \
    -v gw-data:/usr/local/bin/ignition/data \
    --pull always inductiveautomation/ignition:latest \
    -n Ignition-Gateway -a localhost -h 8088 -s 8043
    ```
    ### Docker Compose
    ```yaml
    services:
      # Ignition Gateway
      gateway:
        image: inductiveautomation/ignition:latest
        ports:
          - 8088:8088
          - 8043:8043
        volumes:
          - gw-data:/usr/local/bin/ignition/data
        # env_file: ignition.env  # optionally specify variables in a file, or using `environment:` below
        environment:
          - ACCEPT_IGNITION_EULA=Y
          - IGNITION_EDITION=standard
          - TZ=America/Chicago  # see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
        command: >
          -n docker-test
          -m 1024
          --
          wrapper.java.initmemory=512
          -Dignition.allowunsignedmodules=true
    volumes:
      gw-data:
    ```
     


=== ":simple-linux: Linux"

    ### Linux installation steps
    1. Download the Ignition installer from [https://inductiveautomation.com/downloads/ignition/](https://inductiveautomation.com/downloads/ignition/) and move installer to target system (if applicable)
    2. make the executable installable `chmod +x ignition-x.x.x-linux-xxxinstaller.run`
    3. Run the installer to install Ignition `./ignition-x.x.x-linux-xxxinstaller.run`
    4. Visit the gateway provisioning page in your web browser using http://GATEWAY_IP:8088
    
    For full installation documentation, please consult [Ignition Installation Documentation](https://www.docs.inductiveautomation.com/docs/8.1/getting-started/installing-and-upgrading)

=== ":fontawesome-brands-windows: Windows"

    ### Windows installation steps
    1. Download the Ignition installer from [https://inductiveautomation.com/downloads/ignition/](https://inductiveautomation.com/downloads/ignition/) and move installer to target system (if applicable)
    2. Run the installer and follow the prompts on the installation wizard

    For full installation documentation, please consult [Ignition Installation Documentation](https://www.docs.inductiveautomation.com/docs/8.1/getting-started/installing-and-upgrading)
