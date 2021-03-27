# backend/Dockerfile

FROM node:14-alpine3.13

# Set the working directory to /backend
WORKDIR /backend
# copy package.json into the container at /backend
COPY package*.json /backend/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /backend
COPY . /backend/
# Make port available to the world outside this container
# EXPOSE 9000

CMD [ "npm", "start" ]