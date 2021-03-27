# backend/Dockerfile

FROM node:14-alpine3.13

WORKDIR /usr/app

COPY package*.json ./

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
	then npm install;  \
	else npm install --only=production; \
	fi


EXPOSE 3000

CMD [ "npm", "start" ]

COPY . . 