
const response = (statusCode, data, messange, res) => {
 res.json(statusCode, [
   {
     payload: {
     data,
     messange,   
       },
       metedata: {
       prev: "",
       next: "",
       current: ""
        } 
    }
  ])
}

module.exports = response