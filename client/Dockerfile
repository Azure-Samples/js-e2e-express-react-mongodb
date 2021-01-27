FROM node:12.18.3

LABEL version="1.0"
LABEL description="Client via create-reaact-app"

WORKDIR /app/client

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN yarn install --production
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]