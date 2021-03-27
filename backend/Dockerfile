# backend/Dockerfile

FROM node:14-alpine3.13

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]