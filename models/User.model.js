const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String
  },
  lastName: {
    type: String
  },
  age: Number,
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  team: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
