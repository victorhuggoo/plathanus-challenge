const knex = require('../database')

module.exports = {

    async getFirstImage(req, res) {
        const firstImage = await knex('image')
        return res.json(firstImage)
    },

    async getUrlImg(req, res) {
        try {
           const { crypto } = req.params 
           const query = await knex('image')
           .where({ crypto })
            return res.send(query)
        } catch (err) {
            return err
        }
    },

    async uploadImage(req, res) {
        try {
            const { crypto } = req.image.filename;
            const { filename } = req.image.originalname;

            const url = `http://localhost:3333/files/${crypto}`;

            await knex('image').insert({
                file_name: { filename },
                crypto: { crypto },
                url_img: url
            });

            return res.status(201).send()
        } catch (err) {
            return err
        };
    },
}