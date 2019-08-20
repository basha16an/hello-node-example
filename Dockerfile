FROM node:latest
WORKDIR app/
COPY server.js .
ENTRYPOINT node server.js
