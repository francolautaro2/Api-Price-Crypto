const express = require('express');
const router = express.Router()

const getPrice = require('../data/getPrice')

router.get('/api/ethereum', (req,res) => {
    getPrice();
    res.send(dataEthereum)
})

module.exports = router;