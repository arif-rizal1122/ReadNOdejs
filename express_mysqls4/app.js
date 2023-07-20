

const express = require('express')
const app = express()
const port = 3000


const db = require('./config/connection')
const response = require('./models/response')


const bodyParser = require('body-parser')
app.use(bodyParser.json())

// root default
app.get('/', (req, res) => {
    response(200, 'ini root utama', 'messange default', res)
})

// get all data mahasiswa

app.get('/mahasiswa', (req, res) => {
 const sql = 'SELECT * FROM mahasiswa'
 db.query(sql, (err, result) => {
    response(200, result, 'get all data mahasiswa', res)
 })
})

// get all data dosen

app.get('/dosen', (req, res) => {
    const sql = 'SELECT * FROM dosen'

    db.query(sql, (err, result) => {
        response(200, result, 'get all data dosen', res)
    })
})


// spesific search data nim

app.get('/mahasiswa/:nim', (req, res) => {
  const nim = req.params.nim
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`

  db.query(sql, (err, result) => {
   if (err) throw err //response(404, 'not found', 'error', res)
   response(200, result, 'get all data spesific dosen', res)
  })
})

// add data mahasiswa


app.post('/mahasiswa', (req, res) => {
    const {nama_lengkap, nim, kelas, alamat} = req.body
    console.log(req.body)

    // mengunakan query mysql nya
    const sql = `INSERT INTO mahasiswa (nama_lengkap, nim, kelas, alamat) VALUES ( '${nama_lengkap}','${nim}', '${kelas}', '${alamat}')`

    db.query(sql, (err, result) => {
        if (err) throw response(500, 'server error', 'error', res)
        console.log({ f : result.affectedRows})
        if (result?.affectedRows) {
            console.log('masuk')
            response(200, result.insertId, 'data add succes', res)
            
        }
    })
})




app.post('/dosen', (req, res) => {
    const {nama_lengkap, nim, kelas, alamat} = req.body
    // console.log(req.body)

    const sql = `INSERT INTO dosen (nama_lengkap, nim, kelas, alamat) VALUES ('${nama_lengkap}', '${nim}', '${kelas}', '${alamat}')`

    db.query(sql, (err, result) => {
        if (err) throw response(500, 'not found', 'error', res)
        console.log(result) 


        if (result?.affectedRows) {
            const data = {
                isSucces: result.affectedRows,
                idnya: result.insertId
            }
            response(200, data, 'data add succes dosen', res)
        }
    })
})


// updata data mahasiswa

app.put('/mahasiswa', (req, res) => {
    const {nama_lengkap, nim, kelas, alamat} = req.body

    const sql =  `UPDATE mahasiswa SET  nama_lengkap ='${nama_lengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = '${nim}'`
    db.query(sql, (err, result) => {
        if (err) throw err// response(500, 'server error', 'error', res)
        // console.log(result)

        if (result?.affectedRows) {
            const data = {
                isSucces: result.affectedRows,
                idnya: result.insertId,
                message: result.message
            }
            response(200, data, 'update mahasiswa succes', res)
        } else {
            response(404, 'not found', 'error', res)
            
        }
    })
})



// delete data mahasiswa

app.delete('/mahasiswa', (req, res) => {
    const {nim} = req.body

    const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`

    db.query(sql, (err, result) => {
        if (err) throw response(500, 'server error', 'error', res)

        if (result.affectedRows) {
            const data = {
                isSucces: result.affectedRows
            }
            response(200, data, 'delete mahasiswa', res)
        } else {
            response(404, 'not found', 'error', res)
        }
    })
})

.listen(port, (req, res) => {
    console.log(`listening to walk for port http://localhost${port}`)
})