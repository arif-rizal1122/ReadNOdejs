

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



// all data mahasiswa

app.get('/mahasiswa', (req, res) => {
    const sql = 'SELECT * FROM mahasiswa'

    db.query(sql, (err, result) => {
    // console.log(result)
    if(err) throw err
    response(200, result, 'ini messange/mahasiswa', res)
})
})


// all data dosen


app.get('/dosen', (req, res) => {
    const sql = 'SELECT * FROM dosen'

    db.query(sql, (err, result) => {
    // console.log(result)
    if (err) throw err
    response(200, result, 'ini messange/mahasiswa', res)
})
})




// spesific searching data nim mahasiswa

app.get('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim     
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    
    db.query(sql, (err, result) => {
        if (err) throw err
       response(200, result , 'get spesific data nim mahasiswa', res)
})  
})
   

// spesific searching data nim dosen


app.get('/dosen/:nim', (req, res) => {
    const nim = req.params.nim
    const sql = `SELECT * FROM dosen WHERE nim = ${nim}`

    db.query(sql, (err, result) => {
        if (err) throw err
        response(200, result, 'get spesific data nim dosen', res)
    })
})



//############# MENAMBAHKAN DATA MAHASISWA part 1


// post diperuntuhkan untuk mengisert data(biasanya meski bisa melakukakn yg lain) yg bisa menambahkan data ke database
// app.post('/mahasiswa', (req, res) => {
//     // ditangkap mengunakan req.body
//     const {nim, nama_lengkap, kelas, alamat} = req.body 
    
//     console.log(req.body)
//     const sql = `INSERT INTO mahasiswa (nama_lengkap, nim, kelas, alamat) VALUES ('${nama_lengkap}', '${nim}', '${kelas}', '${alamat}')`

//     db.query(sql, (err, result) => {
//         if (err) throw err
//         // console.log({ f: result.affectedRows})
//         if (result.affectedRows) {
//             // console.log('masuk')
//         response(200, result.InsertId, 'data added succesfully from mahasiswa', res)

//         } //else {
//             // console.log('gak masuk')
//        // }
//         // response(200, 'ini data', 'ini messange from post', res)
//         // console.log(result)
//     })
//     // res.send('ok')
// })






//############# MENAMBAHKAN DATA MAHASISWA part 2

app.post('/mahasiswa', (req, res) => {
    // ini yg menjadi isian dari template body nya
    const { nim, nama_lengkap, kelas, alamat } = req.body
    // console.log(req.body)

    const sql = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (${nim}, '${nama_lengkap}', '${kelas}', '${alamat}')`

    db.query(sql, (err, result) => {
        if (err) throw response(500, 'invalid data ta', 'err', res)
        // console.log({ f: result.affectedRows})

        // (?) artinya kalau ada isinya maka eksekusi ke yg berikutnya
        // kalau tidak ada maka gak dieksekusi
        // cara ngefix agar command line tidak crash
       if (result?.affectedRows) {

        const data = {
            isSucces: result.affectedRows,
            id: result.insertId
        }

        response(200, data, 'add data succesfully', res)
       }

    })
})

//   OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 40,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }
  







// ################# MENAMBAHKAN DATA DOSEN



app.post('/dosen', (req, res) => {
    const {nim, nama_lengkap, kelas, alamat} = req.body
    // console.log(req.body)

    const sql = `INSERT INTO dosen (nim, nama_lengkap, kelas, alamat) VALUES ('${nim}', '${nama_lengkap}', '${kelas}', '${alamat}')`

    db.query(sql, (err, result) => {
        if (err) response(500, 'invalid', 'error', res)
        if (result?.effectedRows) {
            // // format ulang output data
            const data = {
                isSuccess: result.affectedRows,
                id: result.InsertId,
            }
            response(200, data, 'data added succesfully from dosen', res)
        }
        // console.log(result)

    })

})









// put untuk merubah atau menganti nilai yg ada di database(update data)
app.put('/mahasiswa', (req, res) => {
    const { nim, nama_lengkap, kelas, alamat } = req.body

    const sql = `UPDATE mahasiswa SET nama_lengkap = '${nama_lengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = ${nim}`
  

    db.query(sql, (err, result) => {
        // console.log(result)
        if (err) response(500, 'invalid put', 'error', res)
        if (result?.affectedRows) {
        const data = {
            isSucces: result.affectedRows,
            message: result.message
        }    
            response(200, data, 'update data succesfully', res)
        } else {
            response(404, 'not found', 'error', res)
        }
    })
})






// delete untuk menghapus data yg ada dalam database
app.delete('/mahasiswa', (req, res) => {
    const { nim } = req.body
    const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`

    db.query(sql, (err, result) => {
        if (err) response(500, 'invalid nim', 'error', res)

        if(result?.affectedRows) {
        const data = {
            isDeleted: result.affectedRows
        }
        response(200, data, 'ini messange from delete', res)
        } else {
         response(404, 'user not found', 'err', res)
        }
    })
})




.listen(port, (req, res)  => {
    console.log(`exemple on port try2 to lestening http://localhost:${port}`)
})




// =========== 1 dari get ================ \\


// [
//     {
//     "payload": {
//     "data": [
//     {
//     "id": 1,
//     "nim": 101010,
//     "nama_lengkap": "arif rizal",
//     "kelas": "Mipa12",
//     "alamat": "alamat. hj daeng sirua"
//     },
//     {
//     "id": 2,
//     "nim": 202020,
//     "nama_lengkap": "megalodon",
//     "kelas": "Ips12",
//     "alamat": "jl. cendrawasih utara bojongloes"
//     },
//     {
//     "id": 3,
//     "nim": 103,
//     "nama_lengkap": "deafrizal",
//     "kelas": "tkj12",
//     "alamat": "jln. purbalingga"
//     }
//     ],
//     "messange": "ini messange/mahasiswa"
//     },
//     "metadata": {
//     "prev": "",
//     "next": "",
//     "current": ""
//     }
//     }
//     ]




// =========== 2 dari get============ \\




// [
//     {
//     "payload": [
//     {
//     "id": 1,
//     "nim": 101010,
//     "nama_lengkap": "arif rizal",
//     "kelas": "Mipa12",
//     "alamat": "alamat. hj daeng sirua"
//     },
//     {
//     "id": 2,
//     "nim": 202020,
//     "nama_lengkap": "megalodon",
//     "kelas": "Ips12",
//     "alamat": "jl. cendrawasih utara bojongloes"
//     },
//     {
//     "id": 3,
//     "nim": 103,
//     "nama_lengkap": "deafrizal",
//     "kelas": "tkj12",
//     "alamat": "jln. purbalingga"
//     }
//     ],
//     "messange": "ini messange/mahasiswa",
//     "metadata": {
//     "prev": "",
//     "next": "",
//     "current": ""
//     }
//     }
//     ]


// =========== 3 ============ \\



// [
//     {
//         "messange": "data added succesfully from mahasiswa",
//         "metadata": {
//             "prev": "",
//             "next": "",
//             "current": ""
//         }
//     }
// ]



// =========== 4 ============ \\



// [
//     {
//         "payload": "invalid",
//         "messange": "error",
//         "metadata": {
//             "prev": "",
//             "next": "",
//             "current": ""
//         }
//     }
// ]






// =========== 5 dari post ============ \\




// {
//     nim: 0,
//     nama_lengkap: 'syamuel jurnal3',
//     kelas: 'if6',
//     alamat: 'jln. damai sejahtera'
//   }

// ini tanda bahwa data berhasil diinsert ke database nya

//   OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 40,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }
  


// =========== 6 dari put ============ \\



// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '(Rows matched: 1  Changed: 1  Warnings: 0',
//     protocol41: true,
//     changedRows: 1
//   }
  



// =========== 7 dari put ============ \\




// [
//     {
//         "payload": {
//             "data": {
//                 "isSucces": 1,
//                 "message": "(Rows matched: 1  Changed: 0  Warnings: 0"
//             },
//             "messange": "update data succesfully"
//         },
//         "metadata": {
//             "prev": "",
//             "next": "",
//             "current": ""
//         }
//     }
// ]