# syntax=docker/dockerfile:1.0

FROM node:16.15-slim
# ENV NODE_ENV=production

WORKDIR /app

COPY package*.json .env ./
COPY dist ./dist

RUN npm install --production
# RUN npm install

# COPY . .

EXPOSE 9000
# ENTRYPOINT [ "npm", "run", "start:dev" ]
CMD [ "node", "dist/main.js" ]