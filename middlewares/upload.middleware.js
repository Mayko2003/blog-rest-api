const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = `${__dirname}/../storage`
        cb(null, path)
    },
    filename: (req, file, cb) => {

        const ext = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${ext}` // file-1234567890.jpg

        cb(null, filename)
    }
})

const UploadMiddleware = multer({ storage });

module.exports = UploadMiddleware