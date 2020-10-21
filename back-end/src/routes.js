const routes = require('express').Router();
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.post('/upload', multer(multerConfig).single('image'), (req, res) => {
    console.log(req.file);
    return res.json({ message: 'Ok' })
})

module.exports = routes