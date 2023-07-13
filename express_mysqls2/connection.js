
// =====>>>>> latihan 1 <<<<<====== \\


// const mysql = require('mysql')
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "cuy_university"
// })

// module.exports = db


// =======>>>>>>>> latihan 2 <<<<<<<< =========== \\

const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cuy-university"
})


module.exports = db