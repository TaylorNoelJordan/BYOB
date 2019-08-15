module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/tays_crystals',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
