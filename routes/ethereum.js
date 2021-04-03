const express = require('express');
const router = express.Router();

const price = require('../data/getPrice');
price.getPrice();

router.get('/api/ethereum', (req,res) => {
    res.send(dataEthereum)
});

module.exports = router;