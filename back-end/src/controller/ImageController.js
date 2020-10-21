const knex = require('../database')

module.exports = {

    async getFirstImage(req, res) {
        const firstImage = await knex('image')
        return res.json(firstImage)
    },

    async getImageByCryptoName(req, res) {
        try {
           const { crypto } = req.params 
           const query = await knex('image')
           .where({ crypto })
            return res.send(query)
        } catch (err) {
            
        }
    },

    async uploadImage(req, res) {
        console.log(req.body);
    }
}