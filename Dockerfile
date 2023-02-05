FROM node:lts-slim as build-step

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
EXPOSE 3000

COPY package.json  package-lock.json ./
RUN npm i --silent
COPY . .
