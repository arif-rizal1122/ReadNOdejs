//###########################  1 ############################//

// const response = (statusCode, data, messange, res) => {
//   res.json(statusCode, [{
//     data,
//     messange,
//     metadata: {
//       prev: "",
//       next: ""
//     },
//   },
//  ])
// }

// module.exports = response



//###########################  2 ############################//


// const response = (statusCode, data, messange, res) => {
//   res.json(statusCode, [
//     {
//     payload: {
//       data, 
//       messange,
//     },
//     metadata: {
//       prev: "",
//       next: "",
//       current: "",
//     },
//   },
// ])
// }


// module.exports = response




//###########################  3 ############################//



const response = (statusCode, data, messange, res) => {
  res.json(statusCode, [
    {
    payload: {
    data,  
    messange,
    },
    metadata: {
      prev: "",
      next: "",
      current: "",
    },
  },
])
}


module.exports = response
