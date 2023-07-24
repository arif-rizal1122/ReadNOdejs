
// tempat query mysql nya


// query get all mahasiswa (succes)

const dbPool = require('../config/database')

const getAllMhs = () => {
    const sqlQuery = 'SELECT * FROM mahasiswa';

   return dbPool.execute(sqlQuery)
}

// post / add data (succes)

const createNewMhs = (body) => { 
      const sqlQuery = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES ('${body.nim}', '${body.nama_lengkap}', '${body.kelas}', '${body.alamat}')`; 
      return dbPool.execute(sqlQuery)
}

// patch update data ()

const updateDataMhs = (body, idMhs) => {
    const sqlQuery = `UPDATE mahasiswa SET nim='${body.nim}', nama_lengkap='${body.nama_lengkap}', kelas='${body.kelas}', alamat='${body.alamat}' WHERE id=${idMhs}`

    return dbPool.execute(sqlQuery)
}


const delateMhs = (idMhs) => {
const sqlQuery = `DELETE FROM mahasiswa WHERE id=${idMhs}` 

return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllMhs,
    createNewMhs,
    updateDataMhs,
    delateMhs
}