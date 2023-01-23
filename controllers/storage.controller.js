const { Storage } = require('../models')


const StorageController = {}


/**
 * Upload a file to static folder and save the file name and url to database
 * @param {*} req - request object
 * @param {*} res - response object
 */
StorageController.uploadFile = async (req, res) => {
    try {
        const { file, body } = req
        const filename = file.filename

        const storage = await Storage.create({
            filename: filename,
            url: `${process.env.PUBLIC_URL}/${filename}`
        })
        

        res.status(200).json({
            status: 200,
            message: 'File uploaded successfully'
        })
    } catch (error) {

    }
}


module.exports = StorageController