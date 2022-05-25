const credentials = require("./config/db_config.js");

module.exports = {
  production: {
    ssl: {
      rejectUnauthorized: false,
    },
    connection: process.env.DATABASE_URL,
    client: 'pg',
  
  

  }
  
};
