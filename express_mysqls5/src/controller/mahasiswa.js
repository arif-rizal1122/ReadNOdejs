

const db = require('../config/database');
const response = require('../models/responses');
const express = require('express')



// all data (sudah fix)

const getAllDataMhs = async (req, res) => {
  const sql = `SELECT * FROM mahasiswa`;

  const result = await db.execute(sql, (err, result) => {
    if (result) {
    response(200, result, 'show get all data succes', res);
    } else {
    res.status(500).json({
      message: 'server error'
    })  
    }
  });
};



// // all data spesific (belum fix)
const getSpesificMhs = async (req, res) => {
  const idmhs = req.params.idmhs  
  const sql = `SELECT * FROM mahasiswa WHERE id = ${idmhs}`
  const values = [idmhs]

    const result = await db.execute(sql, values, (err, result) => {
      if (result) {
        if (err) throw err
        response(200, result, 'get spesific succes', res)
      } else {
        res.status(404).json({
          message: 'not found'
        })
      }
    })
 } 



// add - post (sudah fix)
const addMhs = (req, res) => {
  const { nim, nama_lengkap, kelas, alamat } = req.body
  const sql = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES ('${nim}', '${nama_lengkap}', '${kelas}', '${alamat}')`

  const result = db.execute(sql, (err, result) => {
    // ? (jika affectedRows Ada isinya maka lanjutkan)
    if (result?.affectedRows) {
      const data = {
        isSucces: result.affectedRows,
        id: result.insertId
      }
      response(200, data, 'add data succes', res)
    } else {
      response(500, 'nim sudah ada', 'nim sudah ada silahakan ubah nim', res)
    }
  })
}





// PATCH seperti memperbarui file yang sudah ada di komputer. PATCH hanya akan memperbarui bagian dari file, bukan seluruh file. Jika file tidak ada, PATCH akan menghasilkan kesalahan





// PUT seperti membuat file baru di komputer. Jika file sudah ada, PUT akan menimpa file itu. Jika file tidak ada, PUT akan membuat file baru..




// delete data spesific id


// delete untuk menghapus data yg ada dalam database

const deletemhs = async (req, res) => {
  const idmhs = req.params.idmhs
  const sql = `DELETE FROM mahasiswa WHERE id = ${idmhs}`
  const values = [idmhs]

  const result = await db.execute(sql, values, (err, result) => {
    if (result) {
      response(200, result, 'delete succes', res)
    } else {
       if (err) throw err
      res.status(404).json({
        message: 'not found'
      })
    }
  })
}



module.exports = {
  deletemhs,
  getAllDataMhs,
  getSpesificMhs,
  addMhs, 
 
}
// 
//     if (id) {
//     // ambil data dari db berdasarkan id
//     return response.status(200).json({status: true, data: mahasiswa})
//   } else {
//     return response.status(404).json({status: false, data: null}) // kalo data gagal diambil
//   }

//     })
// // }