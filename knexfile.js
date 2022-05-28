const credentials = require("./config/db_config.js");

module.exports = {
    client: "postgres",
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: __dirname + './migrations',
    },
    seeds: {
      directory: __dirname + './seeds'
    }
  
};