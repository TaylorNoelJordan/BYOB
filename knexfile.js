module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/passport',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/dev'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
