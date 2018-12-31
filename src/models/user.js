let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contacts: [{
    ref: 'Contact',
    type: mongoose.Schema.ObjectId
  }]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
