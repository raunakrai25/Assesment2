const express = require('express')
const app = express()
const axios = require('axios')
const userRoutes = require('./routes/apiRoutes')



const port = 2508

app.use(userRoutes)

app.listen(port,()=>{
    console.log(`this server is running on port ${port}`)
})
