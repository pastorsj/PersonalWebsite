FROM node:10-alpine

LABEL Sam Pastoriza <samjpastoriza@gmail.com>

ARG WORKING_DIR

WORKDIR $WORKING_DIR
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install --silent && mv node_modules ./
COPY . .
EXPOSE 4200
