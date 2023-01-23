const express = require('express');
const router = express.Router();
const { StorageController } = require('../controllers');
const { UploadMiddleware } = require('../middlewares')


router.post('/upload', UploadMiddleware.single('file'), StorageController.uploadFile);


module.exports = router;