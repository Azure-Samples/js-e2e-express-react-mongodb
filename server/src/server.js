// general dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// app dependencies
const data = require('./data');
const routes = require('./routes');

/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

const create = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const dbConnection = await data.connectToDatabase();
  if (!dbConnection) throw new Error('db isn\'t connected');

  app.use('/static', express.static('public/static'));
  app.use('/', routes);
  app.use(errorHandler);

  return app;
};

module.exports = {
  create,
};
