const credentials = require("./config/db_config.js");
module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  }
  
};
