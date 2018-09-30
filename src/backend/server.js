const express = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

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
      body: "Hi, this is an automated message from Francis. I'm in a tricky situation at home--could you please call or text my number right now and get some help."
    })
  })
  )
  .then(message => console.log('Messages sent!'))
  .then(res.json({ 'kiwi': 'works'}));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
