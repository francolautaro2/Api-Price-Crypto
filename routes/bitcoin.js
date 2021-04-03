const express = require('express');
const router = express.Router();

const getPrice = require('../data/getPrice');

router.get('/api/bitcoin', (req,res) => {
    res.send(dataBitcoin)
})

module.exports = router
