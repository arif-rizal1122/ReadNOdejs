

const response = (statusCode, data, messange, res) => {
    res.status(statusCode).json([
      {
      payload: {  
      messange,
      data,  
    
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
  