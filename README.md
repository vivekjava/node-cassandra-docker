# Node-Cassandra as a docker container

NOTE : Here i am using my own private npm repository. Because of that i am using an unique ip in my Dockerfile.

How to create separate network : 

 1. Using the below command we can easily see the Current network

    ​        $ docker network inspect bridge

	2.  Create a new network

     ​	$ docker network create --driver bridge service

	3.  Using docker compose applying the network to the containers.

     `

     version: '2'

     services:

       express:

     ​      build: .

     ​      depends_on:

     ​        \- cassandra

     ​      environment:

     ​        \- NODE_ENV=production

     ​      ports:

     ​        \- "8000:8000"

     ​      links: 

     ​        \- cassandra

     ​      networks: 

     ​        \- service

     ​      command: node index.js

       cassandra:

     ​      image: cassandra

     ​      ports:

     ​        \- "9042:9042"

     ​      networks:

     ​        \- service

     ​      restart: always

     networks:

       service:

     ​    driver: "bridge"

     `