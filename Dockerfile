# syntax=docker/dockerfile:1.0

FROM node:16.15
# ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

# RUN npm install --production
RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]