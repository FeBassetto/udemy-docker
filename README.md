# See containers

- ***docker ps*** &rarr; See containers running

- ***docker container ls*** &rarr; See containers running

- ***docker ps -a*** &rarr; See all containers

- ***docker container ls -a*** &rarr; See all containers

<br>

# Run containers

- ***docker run docker/whalesay cowsay Docker*** &rarr; Run cowsay with message Docker

- ***docker run node*** &rarr; Run node

- ***docker run ubuntu*** &rarr; Run ubuntu

- ***docker run nginx*** &rarr; Run nginx
## -it

- ***docker run -it node*** &rarr; Run node and use node console

- ***docker run -it ubuntu*** &rarr; Run ubuntu and use node console

## -d

- ***docker run -d nginx*** &rarr; Run nginx background

## -p

- ***docker run -d -p 80:80 nginx*** &rarr; Run nginx background and in browser port 80

- ***docker run -d -p 3000:80 nginx*** &rarr; Run nginx background and in browser port 3000

## --name 

- ***docker run -d -p 80:80 --name nginx-container nginx*** &rarr; Run nginx with name nginx-container

<br>

# Stop container

- ***docker stop id*** &rarr; Stop docker container by container id

- ***docker stop name*** &rarr; Stop docker container by container name

<br>

# Start container

- ***docker start id*** &rarr; Start docker container by container id

- ***docker start name*** &rarr; Start docker container by container name

- ***docker start -i name*** &rarr; Start docker and see logs

<br>

# Logs container 

- ***docker logs id*** &rarr; Logs docker container by container id

- ***docker logs name*** &rarr; Logs docker container by container name

<br>

# Remove container

- ***docker rm id*** &rarr; Remove docker container by container id

- ***docker rm name*** &rarr; Remove docker container by container id

## -f

- ***docker rm -f id*** &rarr; Force stop and remove docker container by container id

- ***docker rm -f name*** &rarr; Force stop and remove docker container by container id

<br>

# Copy container file or folder to other folder

- ***docker cp node_container:/app/app.js ./copy/*** &rarr; Copy the file app.js to a local folder copy

<br>

# Get informations docker container

- ***docker top container*** &rarr; See informations about container

- ***docker inspect container*** &rarr; See id, createdData, image, etc

<br>
<br>

# ***Dockerfile***

- ***FROM*** &rarr; Base image

- ***WORKDIR*** &rarr; Application directory

- ***EXPOSE*** &rarr; Application port

- ***COPY*** &rarr; Files that need to be copied

<br>

## Example: 
FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

- ***docker build .*** &rarr; Build Dockerfile "docker build (root of Dockerfile)"

- ***docker run -d -p 3000:3000 --name my_node id*** &rarr; Run Dockerfile

- ***docker run -d -p 3000:3000 --name my_node name*** &rarr; Run Dockerfile

- ***docker run -d -p 3000:3000 --name my_node --rm name*** &rarr; Run Dockerfile and when stop it is removed

<br>
<br>

# See images

- ***docker image ls*** &rarr; See images

- ***docker images*** &rarr; See images

<br>

# Dowloading image

- ***docker pull python*** &rarr; Dowload python

<br>

# Name for image

- ***docker tag id name:tag*** &rarr; Change name and tag image

- ***docker build -t name:tag .*** &rarr; Build with name

<br>

# Remove image

- ***docker rmi name*** &rarr; Remove image by name

- ***docker rmi id*** &rarr; Remove image by id

- ***docker systmem prune*** &rarr; Remove all containers, images and networks that are't being used