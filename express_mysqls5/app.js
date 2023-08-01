

const express = require('express')
const app = express()
const port = 4000

// untuk menghandle request body
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const routersMhs = require('./src/routers/mahasiswa')
app.use('/mahasiswa', routersMhs)



app.listen(port, (req, res) => {
    console.log(`listenning port try to running ${port}`)
})