

const db = require('../config/connection')

const spesificMhs = () => {
    const sql = `SELECT FROM mahasiswa WHERE id = ${id}`
    return db.query(sql)
}

module.exports = spesificMhs