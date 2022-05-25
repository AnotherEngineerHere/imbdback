const credentials = require("./config/db_config.js");

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
    },
  },
};