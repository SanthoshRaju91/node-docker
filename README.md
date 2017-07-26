# Node and Mongodb setup using docker.

We will be using docker, to setup our development environment so that everything just works out of the box. 

We have a few steps to follow in order to accomplish this. First we need to install docker itself.

### For Windows 10 users.

This should be simple enough to have the docker installed on a Windows 10 machine. Open the below link and download the stable version of Docker. Follow the steps and you be ready to go with Docker.

[Docker for Windows 10](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows)

### For Mac users.

This should be fairly simple just like Windows 10. Open the below link and the download the stable version of Docker and follow the steps and you be ready to go.

[Docker for Mac](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac)

### For Windows 8 or former versions (This will be same for older versions of Mac).

This will be slightly different for Windows 8 users, as you would be downloading an additional toolbox called Docker Toolbox. Reason being is that, Docker excepts your operating system to meet its minimal requirements, if not, then you be forced to take this route.

Download the Docker toolbox from the below link and follow the steps in order to install them. 

[Docker toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/)

For easy installation, do not override any step during the installation, let it be in its defaults. Once the installation is done open `Docker quick start terminal` and run `docker run hello-world`. This step will prompt a hello world on your console, which means you have docker installed.


---

After your docker installation. Please follow the below steps to have the project setup on your machine.

1. Clone this repository to your workspace / desired location.
2. Go to the location where you have cloned the project.
3. Before you run any command you would need to edit the `docker-compose.yml` file. Where you would need to specify your project location, so that docker mounts it to the container.


`
  version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - <your-app-location>:/project/app
  mongo:
    image: "mongo"
    ports:
      - "27017:27017"
`

Edit the `<your-app-location>` with your project location (eg: /c/Users/raju/workspace/node-docker/app), please specify absolute path of your project, and save the file.

Now run the below command.

`docker-compose up --build`

From now, let docker do its magic. Your setup would take it's time depending on your network. Once your installation is complete. You would see a message `listening on port 3000`

Now open your browser and type 'http://localhost:3000', you will see the below screen. Which means you have a docker container with node and mongo running.


![Screen](https://image.ibb.co/dM40zk/Screen_Shot_2017_07_26_at_8_14_48_AM.png)




