

const express = require('express')
const routerMhs = express.Router()
const controllerMhs = require('../controller/mahasiswa')


// get data 
routerMhs.get('/', controllerMhs.getAllDataMhs)
routerMhs.get('/:idmhs', controllerMhs.getSpesificMhs)


// post - add data
routerMhs.post('/', controllerMhs.addMhs)

// PATCH seperti memperbarui file yang sudah ada di komputer. PATCH hanya akan memperbarui bagian dari file, bukan seluruh file. Jika file tidak ada, PATCH akan menghasilkan kesalahan



// PUT seperti membuat file baru di komputer. Jika file sudah ada, PUT akan menimpa file itu. Jika file tidak ada, PUT akan membuat file baru.


// delete data
routerMhs.delete('/:idmhs', controllerMhs.deletemhs)


module.exports = routerMhs