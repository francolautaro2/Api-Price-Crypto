const express = require('express');
const router = express.Router();
const bitcoin = require('../data/getPrice')

router.get('/api/bitcoin', (req,res) => {
    res.send(dataBitcoin)
})

module.exports = router
