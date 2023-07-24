// upload file kedalam node js atau proyeck rest api kita dengan mengunkan module malter untuk menghandle multi form,form data yg biasa digunakan untuk mengupload file data kita, membantu membaca dan menghandle prosses upload kita

const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const originalname = file.originalname;
        // const extension = path.extname(file.originalname);

        cb(null, `${timestamp}-${originalname}`)
    }
})

const upload = multer({
    storage: storage, 
    limits: {
        fieldSize: 3 * 1000 * 1000 // 3 MB // ini batasan file yg diupload
    }
})

module.exports = upload