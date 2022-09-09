FROM node

WORKDIR /src

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]