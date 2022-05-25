const credentials = require("./config/db_config.js");
const pgp = require('pg-promise');
module.exports = {
  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    ssl:  { require: false,rejectUnauthorized: false },

  }
  
};
