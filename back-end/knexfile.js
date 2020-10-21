// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite'
    },
    useNullAsDefault: true,
    migrations: {
      directory:`${__dirname}/src/database/migrations`
    }
  },

};
