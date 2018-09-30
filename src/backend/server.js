const express = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
let contacts = []

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/contacts', (req, res) => {
   contacts = req.body.contacts;
}
)

app.post('/kiwi', (req, res) => {
  //get request to twilio

  Promise.all(
  contacts.map(contact => {
    console.log(contact.number, contact.typedMessage);
    return client.messages.create({
      to: contact.number,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      body: contact.typedMessage
      // to: '+19175260377',
      // from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      // body: 'help'
    })
  })
  )
  .then(message => console.log('Messages sent!'))
  .then(res.json({ 'kiwi': 'works'}))
  .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
