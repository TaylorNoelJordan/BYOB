module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/tays_crystals'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
