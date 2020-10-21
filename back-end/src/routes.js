const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const ImageController = require('./controller/ImageController')

routes.get('/upload', ImageController.getFirstImage)
routes.post('/upload', multer(multerConfig).single('image'), ImageController.uploadImage)

module.exports = routes