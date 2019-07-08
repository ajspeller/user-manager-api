require('dotenv').config();
require('./db');

const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app:server');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  debug(`Webserver started successfully on port ${PORT}`);
});
