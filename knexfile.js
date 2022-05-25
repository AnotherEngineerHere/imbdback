const credentials = require("./config/db_config.js");

module.exports = {
  production: {
    connection: process.env.DATABASE_URL+'?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',ssl: { rejectUnauthorized: false },
    client: 'pg',
    
  }
  
};
