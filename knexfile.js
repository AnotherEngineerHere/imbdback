const credentials = require("./config/db_config.js");

module.exports = {
  production: {
    client: 'pg',
    // The next line is where the application will read that environment variable to connect to the database
    connection: process.env.DB,
},
  
};