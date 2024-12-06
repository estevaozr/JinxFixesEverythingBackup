# JinxFixesEverything launcher
This is a basic launcher for the *Jinx Fixes Everything* mini-game by Riot Games.

It allows the user to select the game's localization and room.

# Overview
The project contains the original game files, a new **index.html** file that is a basic HTML launcher, Dockerfile and docker-compose.yaml definitions for a localy hosted web server.

The web server that is used is **nginx**, and it is setup to serve the files under *webroot* directory.

The **server.conf** file is used to define where the local files are in the docker container, and where to server the contents.

**Dockerfile** and **docker-compose.yaml** file defines the docker image and service that will serve the files locally.

# Using this repository to play the game
The following sections contain detailed instructions on how to use this repository to play the game.

## Install *docker engine* and *docker compose*
Follow the steps in this page to install *Docker Community Edition (CE)*
* https://docs.docker.com/engine/install/

Follow the steps in this page to install *Docker compose*
* https://docs.docker.com/compose/install/

After installing, one should be able to use the `docker` command, and `docker compose` commands. Please make sure that both are working and available

## Build the docker image from the repository
To build the *docker image* one needs to run the following command on the repository folder (e.g. the same that contains the *Dockerfile* and *docker-compose.yaml* files):

```
docker compose build
```

This will cause the docker engine to download the base nginx image and copy the *server.conf* file into a new image.

To check that the image was built correctly one can run the following command, and should see something like this:

```
docker images
REPOSITORY                        TAG       IMAGE ID       CREATED          SIZE
jinxfixeseverythingbackup-nginx   latest    8f693e226cba   28 minutes ago   192MB
```

## Running the image
To run the image (e.g. so it is pospsible to play the game), one should use the following command:

```
docker compose up
```
**Note**: this will lock the console that run the command, as it is "attached" to the container.

at this point in time one can then open the page:
* http://localhost:8080

to open the basic game launcher (as defined in `index.html`). In the launcher one can select the localization and room to play.

When one wants to stop the docker container, one just needs to hit `ctrl+c` on the console that has docker compose running. After stopping the container it will still linger as "stopped". One can remove it by running the following command:

```
docker compose down
```

alternatively, one could run the commands as follows:

```
docker compose up ; docker compose down
```
