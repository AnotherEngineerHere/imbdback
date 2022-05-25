const credentials = require("./config/db_config.js");
const pgp = require('pg-promise');
let ssl = null;
if (process.env.NODE_ENV === 'development') {
   ssl = {rejectUnauthorized: false};
}

const config = {
   host: 'localhost',
   port: 5432,
   database: 'my-database-name',
   user: 'user-name',
   password: 'user-password',
   max: 30, // use up to 30 connections
   ssl:ssl
};

module.exports = {
  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL+"sslmode=require",
    ssl:  {rejectUnauthorized: false },

  }
  
};
