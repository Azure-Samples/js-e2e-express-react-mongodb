FROM node:12.18.3

LABEL version="1.0"
LABEL description="API Server via Express.js and MongoDB"

WORKDIR /app/server

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .

EXPOSE 3005

CMD ["npm", "run", "start:prod"]