require('dotenv').config();
require('./db');

const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app:server');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userController = require('./controllers/UserController');

app.post('/api/user/create', userController.create);
app.put('/api/user/update', userController.update);

app.listen(PORT, () => {
  debug(`Webserver started successfully on port ${PORT}`);
});
