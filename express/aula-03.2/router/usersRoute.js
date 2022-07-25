const express = require('express')
let users = require('../users.js')
const router = express.Router()

router.use(express.json())

router.get('/users', (req,res) => {
    res.status(200).json(users)
})

router.get('/users/:id', (req,res) => {
    const user = users.find((user) => user.id == req.params.id)
    if(user) {
        return res.status(200).json(user)
    } else {
        return res.status(404).json({message: 'Not found'})
    }
})

router.post('/users', (req,res) => {
    users = [...users, ...req.body]
    res.status(200).json(users)
})

router.put('/users/:id', (req,res) => {
    const newUser = req.body
    const {id} = req.params

    let user = users.filter((user) => user.id == id)

    if(!user) {
        res.status(404).json({message: 'Not Found'})
    } else {
        users = users.map((user) => {
            if(user.id == id) return newUser
            return user
        })
        res.status(200).json(users)
    }
})

router.delete('/users/:id', (req,res) => {
    const {id} = req.params
    const user = users.filter((user) => user.id == id)
    if(!user) {
        res.status(404).json({message: 'Not Found'})
    } else {
        users = users.filter((user) => user.id != id)
        res.status(200).json(users)
    }
})

router.patch('/users/:id', (req, res) => {
    const {id} = req.params;
    const change = req.body

    if(Object.keys(change) != 'password'){
        return res.send(403).json({message: 'Only password pls'})
    }

    users.forEach((user) => {
        if(user.id == id) {
            user.password = change.password
        }
    })

    return res.status(200).json(users)
})

module.exports = router