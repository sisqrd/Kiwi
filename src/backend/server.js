const express = require('express');
<<<<<<< HEAD
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
=======
const firebase = require("firebase");
var config = {
  apiKey: "AIzaSyCoDCRFGKuNj_oBxQiLrClFlHlBlHkJjAQ",
  authDomain: "tensile-psyche-218000.firebaseapp.com",
  databaseURL: "https://tensile-psyche-218000.firebaseio.com",
  projectId: "tensile-psyche-218000",
  storageBucket: "tensile-psyche-218000.appspot.com",
  messagingSenderId: "271934682296"
};
firebase.initializeApp(config)
>>>>>>> 5c393c1044030e861de3515be969a668425a601f

const app = express();
const port = process.env.PORT || 5000;

const toNum = ['+12405996788', '+19082658881', '+19175260377', '+16073794908'];

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/kiwi', (req, res) => {
  //get request to twilio
  Promise.all(
  toNum.map(number => {
    return client.messages.create({
      to: number,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      body: "it's ya boy ye"
    })
  })
  )
  .then(message => console.log('Messages sent!'))
  .then(res.json({ 'kiwi': 'works'}));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
