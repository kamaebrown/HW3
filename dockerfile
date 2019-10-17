# This is going to be run on a Linux image so we use the linux file structure
FROM node:carbon

# Our image will be using the code we place in the this folder inside the linux image
WORKDIR ./

# Then we will copy over everything that is in our current folder again (this will be all the JS code)
COPY . . 

# Now it will run the npm install to get all of the node modules so they will be on the image (preloaded)
RUN npm install

# So we can talk to the web we need to expose a port, in this case 8080
EXPOSE 8080

# Finally, running the image will also need to run the web server so we need to tell it to run the command "npm start"
CMD ["npm", "start"]


## Other useful pieces
# To build this image use the line below (without the #)
#docker build -t sjr/node-example .
#This says to Docker: build (build) the image from the Dockerfile at the root level ( . ) and tag it -t as sjr/node-example. Don’t forget the period — this is how Docker knows where to look for the Dockerfile.
#docker run -p 3003:8080 -d sjr/node-example
#This tells Docker to run (run) the image that was built and tagged as user1/node-example, expose port 3003 on the host machine and look for port 8080 inside the Docker container (-p 3003:8080), and start the process as a background daemon process (-d).


