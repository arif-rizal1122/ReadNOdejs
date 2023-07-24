

const logRequest = ( req, res, next) => {
    console.log('terjadi req ke path: ', req.path)
    next()
}


module.exports = logRequest