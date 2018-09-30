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
const contacts = []

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
    return client.messages.create({
      to: contact.number,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      body: contact.message
    })
  })
  )
  .then(message => console.log('Messages sent!'))
  .then(res.json({ 'kiwi': 'works'}));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
