FROM node:12.18.3

LABEL version="1.0"
LABEL description="Client via create-reaact-app"

WORKDIR /app/client

COPY ["package.json", "package-lock.json", "./"]
RUN yarn install 
COPY . .
EXPOSE 3000

CMD ["npm", "run", "start:prod"]