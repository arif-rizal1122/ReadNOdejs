

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const { allMhs, allDosen } = require('./models/routers.js')
app.use(allMhs)
app.use(allDosen)

app.get('/', (req, res) => {
    res.send('ini end point')
})

app.listen(port, (req, res) => {
    console.log(`listenning port try to running ${port}`)
})