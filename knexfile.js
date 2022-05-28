const credentials = require("./config/db_config.js");

module.exports = {
  production: {
    client: "postgres",
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
    },
    migrations: {
      directory: __dirname + './migrations',
    },
    seeds: {
      directory: __dirname + './seeds'
    }
  },
};