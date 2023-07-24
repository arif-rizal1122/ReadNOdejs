

const express = require('express')
const routerDosen = express.Router()
const db = require('../config/database.js')


// get data dosen
routerDosen.get('/dosen', (req, res) => {
    res.send('this get from dosen')
})


// get spesific data
routerDosen.get('/dosen/:id', (req, res) => {
  const id = req.params.id
    res.send(`spesific id dosen : ${id}`)
    console.log(`id dosen: ${id}`)
   }) 


// post spesific data
routerDosen.post('/dosen', (req, res) => {
    const data = req.body

    res.json({
        message: 'add data dosen succes',
        data
    })
}) 


// put - update data dosen
routerDosen.put('/dosen/:id', (req, res) => {
    const dataBody = req.body
    const newid = req.params.id

    if (dataBody.id === newid) {
    res.json({
       dataLama: {
        message: 'data lama',
        dataBody
       }, 

       dataBaru: {
        message: 'new data',       
        dataBody: {
         newid: `id baru ${newid}`,
         nim: "r",
         nama_lengkap: "sri ayud",
         kelas: "ui",
         alamat: "bandung"
        }
       }       
    })} else {
        res.send(404, 'not found')}
})


routerDosen.delete('/dosen/:id', (req, res) => {  
    const {id} = req.body
    const query = req.params

    if (query === id){
       res.send(`data delete : ${id}`)
    } else {
     console.log(404, 'not found');
    } 
})

module.exports = routerDosen