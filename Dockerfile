FROM node:8.9-alpine

LABEL Sam Pastoriza <samjpastoriza@gmail.com>

ARG WORKING_DIR

WORKDIR $WORKING_DIR
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "server.dist.js" "./"]
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install && mv node_modules ./
COPY . .
EXPOSE 4200
