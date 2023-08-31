require('dotenv').config();
const Twilio = require('twilio');

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const getSentMessages = (req, res) => {
  client.messages
    .list({ from: phoneNumber })
    .then((messages) => {
      const allMessages = messages.map((message) => message.body);

      res.json(allMessages);
    })
    .catch((err) => res.json({ err }));
};

const getRecentSentMessages = (req, res) => {
  let msg;
  client.messages
    .list()
    .then((messages) => {
      msg = ` The most recent message is ${messages[0].body}`;
      res.json({ msg });
    })
    .catch((err) => res.json({ err }));
};

const sendMessage = (req, res) => {
  client.messages
    .create({
      from: phoneNumber,
      body: `${req.body.sender} says ${req.body.message}`,
      to: '+254721442506',
    })
    .then((message) =>
      res.json({ Action: 'message sent', content: message.body })
    )
    .catch((error) =>
      res
        .status(error.status || 503)
        .json({ success: false, message: error.message })
    );
};

module.exports = {
  getSentMessages,
  getRecentSentMessages,
  sendMessage,
  deleteAllMessages,
};

/* not working for some reason
const sendMessage = async (req, res) => {
  try {
    const send = await client.messages.create({
      from: phoneNumber,
      body: `${req.body.sender} says ${req.body.message}`,
      to: '+254721442506',
    });

    res.json({ Action: 'message sent', content: message.body });
  } catch (error) {
    res.status(error.status).json({ success: false, message: error.message });
    console.error(error);
  }
};
*/
