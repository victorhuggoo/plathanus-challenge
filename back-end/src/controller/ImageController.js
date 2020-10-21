const knex = require('../database/')

module.exports = {
    async index(req, res) {
        const firstImage = await knex('image')

        return res.json(firstImage)
    },

    async create(req, res, next) {

        try {
            const { file_name } = req.body
            console.log(file_name);
            const { crypto } = req.body
            
            const url_img = `http://localhost:3333/${crypto}`

            await knex('image').insert({
                file_name,
                crypto,
                url_img
            });

            return res.status(201).send('foi')
        } catch (err) {
            next(err)
        }
    },
}