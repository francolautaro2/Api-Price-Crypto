const express = require('express');
const router = express.Router();
const bitcoin = require('../data/getPrice')

router.get('/api/bitcoin', (req,res) => {
    getPrice();
    res.send(dataBitcoin)
})

module.exports = router
