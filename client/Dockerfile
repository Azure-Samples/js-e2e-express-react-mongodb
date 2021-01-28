FROM node:12.18.3

LABEL version="1.0"
LABEL description="Client via create-reaact-app"

WORKDIR /app/client

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN yarn install 
COPY . .
RUN ls -la
RUN ls -la public
EXPOSE 3000

CMD ["npm", "run", "start:prod"]