

const express = require('express')
const router = express.Router()

const fromUsersController = require('../controller/mahasiswa') 


// get - tampilkan semua data
router.get('/', fromUsersController.getAllMhs)


// post - tambahkan data
router.post('/', fromUsersController.createNewMhs)

// patch - upadate
router.patch('/:idMhs', fromUsersController.updateDataMhs)


// put - update data 


// delete - hapus
router.delete('/:idMhs', fromUsersController.deleteMhs)



module.exports = router