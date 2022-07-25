const express = require('express')

const app = express();
const userRoute = require('./router/usersRoute.js')

app.use('/api', userRoute)

app.listen(3000, () => {
    console.log('Starting Server')
})
