const credentials = require("./config/db_config.js");

module.exports = {
  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL+'?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',ssl: {require:false, rejectUnauthorized: false },
    
    
  }
  
};
