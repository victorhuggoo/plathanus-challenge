const knex = require('../database/')

module.exports = {
    async index(req, res) {
        const firstImage = await knex('image')

        return res.json(firstImage)
    },

    async create(req, res, next) {

        try {
            const { originalname } = req.file
            const { filename } = req.file
            
            const url_img = `http://localhost:3333/${filename}`

            await knex('image').insert({
                file_name: originalname,
                crypto: filename,
                url_img: url_img
            });

            return res.status(201).send('foi')
        } catch (err) {
            next(err)
        }
    },
}