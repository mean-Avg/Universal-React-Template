const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/basic');

const appConfig = require('./config/appConfig');
const dbConfig = require('./config/dbConfig');

const app = express();

const port = appConfig.port;
const mongoUrl = dbConfig.mongoUrl;

mongoose.connect(mongoUrl);

app.use('/', router);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`app running at ${port}`);
});
