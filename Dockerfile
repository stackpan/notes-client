FROM node:fermium-alpine

WORKDIR /app
COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD npm start
