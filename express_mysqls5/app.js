

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json());


const routerDosen = require('./models/dosen.js')
app.use(routerDosen)

const mahasiswa = require('./models/mahasiswa.js')
app.use(mahasiswa)

app.get('/', (req, res) => {
    res.send('ini end point')
})

app.listen(port, (req, res) => {
    console.log(`listenning port try to running ${port}`)
})