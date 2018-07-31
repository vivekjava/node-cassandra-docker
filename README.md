# Node-Cassandra as a docker container

NOTE : Here i am using my own private npm repository. Because of that i am using an unique ip in my Dockerfile.

How to create separate network : 

 1. Using the below command we can easily see the Current network

    ​        $ docker network inspect bridge

    2. Create a new network

      ​	$ docker network create --driver bridge service

    3. Using docker compose applying the network to the containers.

       * Please refer the docker-compose.yml file. 
       * From the out put you  can verify the network
         * using this command : docker network inspect ls
         * From the output the container name will ends with your network name Like 
           1. a331782f5e7b        **nodecassandradocker_serve**     bridge              local
           2. ec58cd80a9b4        none                          		   null                local
           3. 7ddd05de3047        **serve**                                          bridge              local