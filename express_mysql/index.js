
// ===>> latihan 1 <<=== \\


// const express = require('express')
// const app = express()
// const port = 3000

// // module dibawah ini dipakai apa2 request dari body
// const bodyParser = require('body-parser')
// // init dari bodyParser
// app.use(bodyParser.json())

// // routes /URL/ endpoint utama kita adalah method GET

// app.get('/', (request, response) => {
//     response.send('utama')
// })

// app.get('/hello', (req, res) => {
//     console.log({ urlParamsss: req.query})
//     // { urlParamsss: { nama: 'arif-rizal', alamat: 'bandung' } }
    
//     res.send('hello world query data')
// })

// app.post('/login', (req, res) => {
//     console.log({requestFromOutsideAja: req.body})
//     //isi body di postman { username: 'deafrizal', password: '38782' } }
    
//     // if(req.name === 'deafrizal') {
//         res.send('login succes')
//         // } 
//     })
    
//     app.put('/username', (req, res) => {
//         console.log({updatedDaku: req.body})
//         // updatedDaku: {
//             //     'old-username': 'deafrizal',
//             //     'new-username': 'marathon',
//             //     password: '38782'
//             //   }
//             // }
            
//             res.send('update berhasil')
//         })
        
//         .listen(port, (req, res) => {
//             console.log(`try on the listening port http://localhost${port}`)
//         })
        


        // ===>> latihan 2 <<=== \\
        
        // const express = require('express')
        // const app = express()
        // // untuk menangkap body dari luar (frontend)
        // const bodyParser = require('body-parser')
        // const port = 3000
        
        
        // // file connection db
        // const db = require('./connection')
        
        // // file connection response
        // const response = require('./response')
        
        
        // // ini mengambil body dari frontend
        // // yg artinya kita ambil format dari frontend yg mengirim ke kita berupa post format yg kita tangkap jadi json
        // app.use(bodyParser.json())
        
        
        // // route / url / endpoint 
        
        // // app.get('/', (req, res) => {
        // //     db.query("SELECT * FROM mahasiswa", (error, result) => {
        // //         // hasil data dr mahasisiwa
        // //         console.log(result)
        
        // //         res.send(result)
        // //     })
        // // })
        
        
        // // route / url / endpoint 
        
        // app.get('/', (req, res) => {
        //     // ini dipakai untuk menyeleksi dari database
        //     const sql = "SELECT * FROM mahasiswa"
        //     // ini fuction select nya
        //     db.query(sql, (error, result) => {
        //         // hasil data(result) dr mahasisiwa
        //         response(200, result, "get all data mahasiswa", res)
        //         // diats : yaitu terhubung ke file res yg dipakai sebagai template disini
        //     })
        // })
        
        
        // // hello
        
        // // app.get('/hello', (req, res) => {
        // //     console.log({ urlParam: req.query.alamat})
        // //     res.send('hello world lllll???')
        // // })
        
        
        // // hello
        
        // app.get('/find', (req, res) => {
        // //  console.log('find nim', req.query.nim)
        
        // const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim} `
        //  db.query(sql, (error, result) => {
        //     response(200, result, "find mahasisiwa", res)
        //  })
        // })
        
        
        
        // // post, delete, dll(mesti diperlakukana berbeda)
        // app.post('/login', (req, res) => {
        //     console.log(req.body)
        //     console.log({ requestFromOutside: req.body }) // ini untuk trouble shooting
        //     const username = req.body.username
        //     // 
        //     if(username === usernameFromDbExist) {
        //         res.status(400).send('usernama sudah digunakan')
        //     }
        //     res.send('success login')
        // })
        
        // app.put('/username', (req, res) => {
        //  console.log({updateData: req.body})
        //  res.send('update succes')
        // })
        
        
        
        // .listen(port, () => {
        //     console.log(`running to http://localhost${port}`)
        // })
        
        
        
        
        //###// res apa yg dikirim (ke postman nya)
        
        //### // req apa yg dipanngil ( dari postman misalnya )




        // ====>>> latihan 3 <<<==== \\


const express = require('express')
const app = express()
const port = 3000


const db = require('./connection.js')
const response = require('./response.js')

app.get('/', (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (error, result) => {
        // hasil data dari mysql
        // res.send(result)

        response(200, result, "get all data mahasiswa", res)
    })
})


// untuk mencari nama lengkap dosen dengan  nim
app.get('/find', (req, res) => { 
      // console.log('find nimnya: ', req.query.nim)
    const sql = `SELECT nama_lengkap FROM dosen WHERE nim = ${req.query.nim}`
    db.query(sql, (error, result) => {
        response(200, result, "find all data  dosen nim", res)
    })
 

})


// 
app.post('/login', (req, res) => {
    res.send('succes login')
    
})


// 
app.put('/username', (req, res) => {
    res.send('update succes')

})







.listen(port, (req, res) => {
    console.log(`exemple listening on port http://localhost${port}`)
})


        
