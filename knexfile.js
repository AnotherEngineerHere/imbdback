
const credentials = require("./config/db_config.js");

module.exports = {
  production: {
    client: config.DB_DIALECT,
    connection:"postgres://vwsbssou:8BgM-mUoVXB1ag7ZOFNym-AC5lwPzpgn@fanny.db.elephantsql.com/vwsbssou"
      
    },
    migrations: {
      directory: "./migrations"
    }
};

