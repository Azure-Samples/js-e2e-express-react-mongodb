FROM node:12.18.3

LABEL version="1.0"
LABEL description="API Server"

WORKDIR /app/server

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 3005

CMD ["npm", "run", "start:prod"]