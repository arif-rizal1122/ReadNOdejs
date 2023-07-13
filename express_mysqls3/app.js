

const express = require('express')
const app = express()
const port = 3000

const db = require('./connection')
const response = require('./response')



const bodyParser = require('body-parser')
app.use(bodyParser.json())




app.get('/', (req, res) => {
    response(200, 'API v1 ready to go', 'messange from get succes', res)
})

app.get('/mahasiswa', (req, res) => {
    const sql = " "
    response(200, 'ini data', 'ini messange', res)
})

app.get('/mahasiswa/:id', (req, res) => {
    const id = req.params.id
    res.send(`search spesific data id: ${id}`)
})


// post diperuntuhkan untuk mengisert data(biasanya meski bisa melakukakn yg lain) yg bisa menambahkan data ke database
app.post('/', (req, res) => {
    response(200, 'ini data', 'ini messange from post', res)
})


// put untuk merubah atau menganti nilai yg ada di database(update data)
app.put('/', (req, res) => {
    response(200, 'ini data', 'ini messange from put', res)
})


// delete untuk menghapus data yg ada dalam database
app.delete('/', (req, res) => {
    response(200, 'ini data', 'ini messange from delete', res)
})




.listen(port, (req, res)  => {
    console.log(`exemple on port try to lestening http://localhost:${port}`)
})





