const express = require('express')

const app = express();
app.use(express.json())
let produtos = require('./produtos.js')


app.get('/produtos', (req, res) => {
    res.status(200).json(produtos)
})

app.post('/produtos', (req, res) => {
    
    produtos = [...produtos, ...req.body]
    res.status(200).json(produtos)
})

app.put('/produtos/', (req, res) => {
    
    const newProduct = req.body
    const product = produtos.filter((produto) => produto.id == newProduct.id)

    if(!product) {
        res.status(404).json({message: 'Not Found'})
    } else {
        produtos = produtos.map((produto) => {
            if(produto.id == newProduct.id) return newProduct
            return produto
        })
        res.status(200).json(produtos)
    }

})

app.delete('/produtos/:id', (req, res) => {
    const {id} = req.params
    
    const product = produtos.filter((produto) => produto.id == id)
    if(!product) {
        res.status(404).json({message: 'Not Found'})
    } else {
        produtos = produtos.filter((produto) => produto.id != id)
        res.status(200).json(produtos)
    }

})

app.listen(3000, () => {
    console.log('Starting Server')
})
