const routes = require('express').Router();
const multer = require('multer')
const multerConfig = require('./config/multer')

const ImageController = require('./controller/ImageController')


routes.get('/', ImageController.index)
routes.post('/upload', multer(multerConfig).single('image'), ImageController.create )
routes.put('/upload/:id', multer(multerConfig).single('image'), ImageController.update)

module.exports = routes