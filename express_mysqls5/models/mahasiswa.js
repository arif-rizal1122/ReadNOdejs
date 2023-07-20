

const express = require('express')
const router = express.Router()


// get data 
router.get('/mahasiswa', (req, res) => {
    res.send('this get from mahasiswa')
})

// get data spesific
router.get('/mahasiswa/:id', (req, res) => {
    const id = req.params.id
    res.send(`spesific data id mahasiswa: ${id}`)
    console.log(`id : ${id}`)
})


// post tambah data
router.post('/mahasiswa', (req, res) => {
    const data = req.body
    res.json({
        message: 'add data succes',
        data
    })
})


// put - update data

router.put('/mahasiswa/:id', (req, res) => {
    const dataBody = req.body
    const newid = req.params.id

    if (dataBody.id === newid) {
    res.json({
    //    dataLama: {
    //     message: 'data lama',
    //     dataBody
    //    }, 

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



router.delete('/mahasiswa/:id', (req, res) => {  
    const {id} = req.body
    const query = req.params

    if (id === query){
       res.send(`data delete : ${id}`)
    } else {
     console.log(404, 'not found');
    } 
})


module.exports = router