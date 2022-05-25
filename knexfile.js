const credentials = require("./config/db_config.js");
require('dotenv')
module.exports = {
  development: {
    client: "postgres",
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
      ssl: true
    },
    
  },
  production: {
    client: config.DB_DIALECT,
    connection: {
      host      : process.env.DB_HOST,
      user      : process.env.DB_USERNAME,
      password  : process.env.DB_PASSWORD,
      database  : process.env.DB_NAME,
      timezone  : config.GLOBAL_TIME_ZONE
    }
  }  
  
};
