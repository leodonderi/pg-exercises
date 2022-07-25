const express = require('express')

const app = express();
const productsRouter = require('./router/produtos.js')

app.use('/api', productsRouter)

app.listen(3000, () => {
    console.log('Starting Server')
})
