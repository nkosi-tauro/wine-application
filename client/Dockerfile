#frontend/Dockerfile

FROM node:14-alpine3.13

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8081

# Bundle app source
COPY . .