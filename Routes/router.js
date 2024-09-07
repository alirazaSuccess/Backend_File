const express = require('express');
const router = express.Router();
const { Send_Mail_Data } = require('../Controller/Send_Mail_Data');

router.post('/contact', Send_Mail_Data);

module.exports = router;
