const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/kiwi', (req, res) => {
  //get request to twilio
  console.log(req);
  res.json({ 'kiwi': 'works'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
