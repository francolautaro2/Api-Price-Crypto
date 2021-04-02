const express = require('express');
const app = express();

// import routes
const routerB = require('./routes/bitcoin')
const routerE = require('./routes/ethereum')

const PORT = 8080

// views in comming



//middlewares routes
app.use('/', routerB);
app.use('/', routerE);

app.listen(PORT, ()=>{
    console.log(`running in port: ${PORT}`)
})