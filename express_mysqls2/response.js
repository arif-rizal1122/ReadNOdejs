

// ==###>> INI FORMAT UNTUK JSON (BISA DIKATAKAN SEBAGAI TEMPLATENYA) <<==## \\


// ###################### awal 2 ####################### \\


// const response = (statusCode, data, messange, res) => {
//     res.status(statusCode).json({
//         payload: {
//             status_code: statusCode,
//             datas: data,
//             messange: messange,
//         },
//         pagination: {
//             prev: "",
//             next: "",
//             max: ""
//         }
//     })
// }

// module.exports = response


// ###################### akhir 2 ####################### \\


// const response = (statusCode, data, messange, res) => {
//     res.send(statusCode, [
//       {
//         data, 
//         messange,
//         metadata: {
//             prev: "",
//             next: "",
//             current: ""
//         }
//       }  
//     ])
// }

// module.exports = response


// ======>>> latihan 3 <<<======== \\

// const response = () => {
//   return {
//     payload: {
//       status_code: "",
//       datas: "",
//       massage: ""
//     },
//     pagination: {
//       prev: "",
//       next: "",
//       max: ""
//     }
//   }
// }

// module.exports = response





// ==>> latihan 3 <<== \\

const response = (statusCode, data, messange, res) => {
  res.status(statusCode).json({
    payload: {
      status_code: statusCode,
      datas: data,
      message: messange
    },
    pagination: {
      prev: "",
      next: "",
      max: ""
    }
  }) 
}

module.exports = response
