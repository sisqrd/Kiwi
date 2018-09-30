const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const toNum = ['+12405996788', '+19082658881', '+19175260377', '+16073794908']

Promise.all(
toNum.map(number => {
  return client.messages.create({
    to: number,
    from: process.env.TWILIO_MESSAGING_SERVICE_SID,
    body: "The pizza boy is here"
  })
})
)
.then(message => console.log('Messages sent!'));
