
const mysql2 = require('mysql2')


const dbPool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    // password: "",
    database: process.env.DB_NAME,
})

// karena dbpool bersifat async maka cara exports dgn promises
module.exports = dbPool.promise()

