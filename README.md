<h1 align="center">Containers</h1>

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

- ***docker stats*** &rarr; See how many memory, cpu and some informations about every containers

<br>
<br>

<h1 align="center">Images</h1>

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

- ***docker build -t name:tag .*** &rarr; Build with name and tag

<br>

# Remove image

- ***docker rmi name*** &rarr; Remove image by name

- ***docker rmi id*** &rarr; Remove image by id

- ***docker systmem prune*** &rarr; Remove all containers, images and networks that are't being used

<br>
<br>

# Docker commands

- ***docker login*** &rarr; Login to docker

- ***docker logout*** &rarr; Logout docker

-***docker build -t 17102003/first_image_node .*** &rarr; Get image to docker hub

- ***docker push 17102003/first_image_node*** &rarr; Push image to docker hub

- ***docker pull 17102003/first_image_node*** &rarr; Update local image with hub image

- ***docker build -t 17102003/first_image_node:1.0 .*** &rarr; Build image with a tag

- ***docker push 17102003/first_image_node:1.0*** &rarr; Push image with a tag

- ***docker pull 17102003/first_image_node:1.0*** &rarr; Pull image with a tag

- ***docker run -d -p 3000:3000 --name test_image 17102003/first_image_node:1.0*** &rarr; Run image

<br>
<br>

<h1 align="center">Volumes</h1>


# See volumes

- ***docker volume ls*** &rarr; See all docker volumes

<br>

# Run with volume

## Without name
- ***docker run -d -p 80:80 --name node_container -v /data node_image*** &rarr; Run container and create a volume without name

## With name
- ***docker run -d -p 80:80 --name node_container -v name_volume:/var/www/html/messages node_image*** &rarr; Run container and create a volume with name

## In local
- ***docker run -d -p 80:80 --name php_container -v /mnt/c/Users/felip/workspace/2-study/udemy/docker/2-Volumes/messages:/var/www/html/messages --rm php_messages*** &rarr; Run container and create a volume and upload local folder

## Read Only

- ***docker run -d -p 80:80 --name php_container -v volumeleitura:/var/www/html:ro --rm php_messages*** &rarr; Create a read only volume

<br>

# Create Volumes

- ***docker volume create name*** &rarr; Create a volume

# Inspect volume

- ***docker volume inspect name*** &rarr; Inspect a volume

# Remove Volume 

- ***docker volume rm name*** &rarr; Remove a volume

# Remove unused volumes

- ***docker volume prune*** &rarr; Remove unused volumes

<br>
<br>

<h1 align="center">Networks</h1>

<br>

# Types 

- ***bridge*** &rarr; Connect container to other container

- ***host*** &rarr; Connect container to Host

- ***macvlan*** &rarr; Connect container to container with MAC address

- ***nonde*** &rarr; Container can't connect to other

- ***plugins*** &rarr; Connect container with custom network (other person)

<br>

# See all networks

- ***docker network ls*** &rarr; See all networks