

const express = require('express')
const router = express.Router()


// get data dosen
router.get('/dosen', (req, res) => {
    res.send('this get from dosen')
})


// get spesific data
// router.get('/dosen/:id', (req, res) => {
//   const id = req.params.id
//     res.send(`spesific id dosen : ${id}`)
//     console.log(`id dosen: ${id}`)
//    }) 


// post spesific data
router.post('/dosen', (req, res) => {
    const data = req.body

    res.json({
        message: 'add data dosen succes',
        data
    })
}) 


// put - update data dosen
router.put('/dosen/:id', (req, res) => {
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


module.exports = router