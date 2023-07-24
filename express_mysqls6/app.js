


// envirotment variabel adalah kita membuat sebauh variabel untuk setiap envirotment kita inginkan contoh di leptop kita mempunyai envirotment local kemudian ketika production tujuanya adalah kita akan menyimpan data2 yg bersifat mungkin rahasia didalam envirotment variabel ini karena envirotment ini tidak dapat diakses oleh user dari sisi clientnya sehinnga ini lebih aman kita simpan didalam envirotment variabel dan biasanya envirotment variabel juga tidak kita commit ke dlm repository sehinnga ini membuat data rahasia kita lebih aman kita simpan
// konfig nya
require('dotenv').config()
// kalau gk terbaca maka diset di port 5000
const PORT = process.env.PORT || 5000;

const express = require('express')


const mahasiswaRouters = require('./src/routers/mahasiswa')
const middlewareLogRequest = require('./src/middleware/log')
const upload = require('./src/middleware/multer')

const app = express()
///////////////////////////////////
app.use(middlewareLogRequest)
app.use(express.json())
app.use('/aset',express.static('public/images'))



app.use('/mahasiswa', mahasiswaRouters)

app.post('/upload',upload.single('photo'), (req, res) => {
    res.json({
        message: 'upload berhasil'
    })
})

app.use((err, req, next) => {
    res.json({
        message: err.message
    })
})



app.get('/', (req, res) => {
    res.send('entry point')
})

app.listen(PORT, (req, res) => {
    console.log(`listenning port try to running ${PORT}`)
})


















// HTTP Status Code 

// succesfully response (2xx)

// 200 OK (get, patch)
// 201 Created (post, put)

// Client Error Response (4xx)

// 400 Bad Request
// 401 Unauthorized
// 403 forbidden
// 404 not found
// 405 method not allowed

// server error response (5xx)

// 500 internal server error 

