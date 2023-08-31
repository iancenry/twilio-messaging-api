const express = require('express');
const router = express.Router();

const {
  getSentMessages,
  getRecentSentMessages,
  sendMessage,
  deleteAllMessages,
} = require('../../controllers/message');

router.get('/', getSentMessages);
router.get('/recent', getRecentSentMessages);
router.post('/send', sendMessage);
router.delete('/delete', deleteAllMessages);

module.exports = router;
