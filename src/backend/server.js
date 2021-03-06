const express = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('../models/user');
const Contact = require('../models/contact');

var MongoStore = require('connect-mongo')(session);

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('log:' + err);
  process.exit(1);
})

const app = express();
const port = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
let mainId;

app.get('/getContacts/:userId', (req, res) => {
  let userId = req.params.userId;
  mainId = req.params.userId;
  Contact.find({
    user: userId
  })
  .populate('contacts')
  .exec((err, contactArr) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(contactArr);
    return res.send(contactArr);
  })
})

app.post('/login', (req, res) => {

  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (user) {
      res.json({
        userId: user._id,
        success: true
      })
    }
    else {
      res.json({
        success: false
      });
    }
  });
});

app.post('/register', (req, res) => {

  User.findOne({
    username: req.body.Username
  }, (err, user) => {
    if(user){
      res.send('User exists, please pick another username');
      return;
    } else if (!user) {
      new User({
        username: req.body.username,
        password: req.body.password
      })
      .save((err, user) => {
        if (err) {
          res.send(err);
          return;
        }
        res.send('User has been added successfully!');
        return;
      })
    }
  })
});

app.post('/addContact', (req, res) => {
  new Contact({
    user: req.body.userId,
    name: req.body.name,
    relationship: req.body.relationship,
    phone: req.body.phone,
    message: req.body.message
  })
    .save((err, contact) => {
      if(err){
        res.send(err);
        return;
      }
      else {
        User.findOne({
          _id: contact.user
        }, (err, user) => {
          if(user){
            user.contacts.push(contact);
            user.save();
            contacts = user.contacts;
            return res.send(contact._id);
          }
          else {
            res.send('User not found');
          }
        })
      }
    })
})

app.post('/editContact', (req, res) =>{
  Contact.findOne({
    _id: req.body.contactId
  }, (err, contact) => {
    if (err) {
      console.log(err);
      return;
    }
    if(contact){
      contact.name = req.body.name;
      contact.relationship = req.body.relationship;
      contact.phone = req.body.phone;
      contact.message = req.body.message;
      contact.save();
      return res.send('Contact updated!');
    }
    else {
      return res.send('Contact is not found!')
    }
  })
})

app.get('/deleteContact/:contactId', (req, res) => {
  let deleteId = req.params.contactId;
  Contact.deleteOne({
    _id: deleteId
  }, (err, success) => {
    if (err) return next({err})
    else if (!err) {
      return res.send('Contact has been deleted.')
    }
  })
})

app.post('/kiwi', (req, res) => {

  let contacts = [];

  Contact.find({
    user: userId
  })
  .populate('contacts')
  .exec((err, contactArr) => {
    if (err) {
      console.log(err);
      return;
    }
    contacts = contactArr;
  })

  Promise.all(
    contacts.map(contact => {
      return client.messages.create({
        to: contact.number,
        from: process.env.TWILIO_MESSAGING_SERVICE_SID,
        body: contact.typedMessage
      })
    })
  )
  .then(message => console.log('Messages sent!'))
  .then(res.json({ 'kiwi': 'works'}))
  .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
