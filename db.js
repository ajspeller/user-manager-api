const mongoose = require('mongoose');
const debug = require('debug')('app:db');

const db = process.env.MONGODB_URI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    debug(`Database connection established`);
  })
  .catch((e) => {
    console.error(e);
  });
