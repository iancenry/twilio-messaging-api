const express = require('express');
const router = express.Router();

const {
  getSentMessages,
  getRecentSentMessages,
  sendMessage,
} = require('../../controllers/message');

router.get('/', getSentMessages);
router.get('/recent', getRecentSentMessages);
router.post('/send', sendMessage);

module.exports = router;
