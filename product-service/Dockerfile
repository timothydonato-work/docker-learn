FROM node:10

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 3001
CMD ["node", "server.js"]