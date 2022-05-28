const credentials = require("./config/db_config.js");

module.exports = {
  development: {
    client: "postgres",
    // The next line is where the application will read that environment variable to connect to the database
    connection: process.env.DB_URL,
},
  
};

