const credentials = require("./config/db_config.js");

module.exports = {
  development: {
    client: 'pg',
    // The next line is where the application will read that environment variable to connect to the database
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: __dirname + '/migrations',
    },
    seeds: {
        directory: __dirname + '/seeds',
    },
},
  
};