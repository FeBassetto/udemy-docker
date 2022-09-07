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

<br>

# Stop container

- ***docker stop id*** &rarr; Stop docker container by container id

- ***docker stop name*** &rarr; Stop docker container by container name

<br>

# Start container

- ***docker start id*** &rarr; Start docker container by container id

- ***docker start name*** &rarr; Start docker container by container name