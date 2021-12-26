const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema
const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  favourites: {
    type: [Schema.Types.ObjectId],
    ref: 'recipes'
  },
  joinDate: {
    type: Date,
    default: Date.now
  }
});

// export recipe schema
module.exports = mongoose.model('users', UserSchema);