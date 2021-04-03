const express = require('express');
const router = express.Router();

const price = require('../data/getPrice');
price.getPrice();

router.get('/api/bitcoin', (req,res) => {
    res.send(dataBitcoin);
});

module.exports = router;
