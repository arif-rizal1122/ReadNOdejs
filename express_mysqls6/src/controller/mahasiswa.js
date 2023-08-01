
const mhsModel = require('../models/mahasiswa')

// get all data from database (succes)
//pemangilan dari database itu bersifat async untuk mendapatkan values perlu await
const getAllMhs = async (req, res) => {
    try {
     // didistructuring [data]
    const [result] = await mhsModel.getAllMhs()
    res.json({
        message: 'get all mahasiswa succes',
        data: result
    }) 

    } catch (error) {
    res.status(500).json({
        message: 'server error',
        serverMessage: error,
    })    
    }
}


///////////////////////////////////////////////////////




// get spsific data from mahasiswa

// const getSpesificMhs = async (req, res) => {
//     //pemangilan dari database itu bersifat async untuk mendapatkan values perlu await
//     try {
//      // didistructuring [data]
//     const [data] = await mhsModel.getAllMhs()
//     res.json({
//         message: 'get all mahasiswa succes',
//         data: data
//     })    
//     } catch (error) {
//     res.status(500).json({
//         message: 'server error',
//         serverMessage: error
//     })    
//     }
// }




const createNewMhs = async (req, res) => {
    // console.log(req.body)
    const {body} = req;

    if (!body.nim || !body.nama_lengkap || !body.kelas || !body.alamat) {
        res.status(400).json({
            message: 'anda mengirimkan data yg salah',
            data: null,
        })
    }

    try {
     await mhsModel.createNewMhs(body)    
      res.status(201).json({
        message: 'add data mahasiswa succes',
        data: body
    })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

// patch - update (50%)

const updateDataMhs = async (req, res) => {
    const {idMhs} = req.params
    const {body} = req;

    try {
        await mhsModel.updateDataMhs(body, idMhs)
    res.json({
        message: 'update succes mhs',
        data: {
            id: idMhs,
            // titik 3 adl spreatch agar muncul semua
            ...body
        }
    })   
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}


// delete - hapus data


const deleteMhs = async (req, res) => {
    const {idMhs} = req.params

    try {
    await mhsModel.delateMhs(idMhs)    
    res.json({
        message: 'succes delete mhs',
        data: null
    })    
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
    })    
    }   
}


module.exports = {
    getAllMhs,
    createNewMhs,
    updateDataMhs,
    deleteMhs,
}