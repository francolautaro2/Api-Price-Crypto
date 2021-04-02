// getting price to bitcoin 
// api utilized https://www.coindesk.com/
// api utilized https://min-api.cryptocompare.com/

const request = require('request');

const getPrice = () => {
    const bitcoin = request('https://api.coindesk.com/v1/bpi/currentprice.json', (error, response, body) => {
        if(!error && response.statusCode == 200){
            dataBitcoin = JSON.parse(body);
        }
    });

    const Ethereum = request('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,CNY,JPY,GBP',(error, response, body) => {
        if(!error && response.statusCode == 200){
            dataEthereum = JSON.parse(body);
        }
    });
}

// called the function for get price to apis
getPrice();


module.exports = getPrice;