const mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  user: {
    ref: 'User',
    type: mongoose.Schema.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
