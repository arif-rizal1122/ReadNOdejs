


// const response = () => {
//     return {
//         payload: {
//             status_code: "",
//             datas: "",
//             massage: ""
//         },
//         pagination: {
//             prev: "",
//             next: "",
//             max: ""
//         }
//     }
// }

// module.exports = response

                                    // res disini di routing nya
const response = (statuscode, data, messange, res) => {
    res.status(statuscode).json({
        payload: {
            status_code: statuscode,
            datas: data,
            messange: messange
        },
        
        pagination: {
            prev: "",
            next: "",
            max: ""
        }
    })
}

module.exports = response

// {
//     "payload": {
//         "status_code": 200,
//         "datas": [
//             {
//                 "id": 1,
//                 "nim": 101010,
//                 "nama lengkap": "arif rizal",
//                 "kelas": "Mipa12",
//                 "alamat": "alamat. hj daeng sirua"
//             },
//             {
//                 "id": 2,
//                 "nim": 202020,
//                 "nama lengkap": "megalodon",
//                 "kelas": "Ips12",
//                 "alamat": "jl. cendrawasih utara bojongloes"
//             },
//             {
//                 "id": 3,
//                 "nim": 103,
//                 "nama lengkap": "deafrizal",
//                 "kelas": "tkj12",
//                 "alamat": "jln. purbalingga"
//             }
//         ],
//         "messange": "get all data mahasiswa"
//     },
//     "pagination": {
//         "prev": "",
//         "next": "",
//         "max": ""
//     }
// }