module.exports = {

  test: {
    client: config.DB_DIALECT,
    connection: {
      host      : process.env.DB_HOST,
      user      : process.env.DB_USERNAME,
      password  : process.env.DB_PASSWORD,
      database  : (process.env.DB_NAME == "test") ? process.env.DB_NAME_TEST : process.env.DB_NAME,
      timezone  : config.GLOBAL_TIME_ZONE
    },
    migrations: {
      tableName: migrationTable
    }
  },
  Local: {
    client: config.DB_DIALECT,
    connection: {
      host      : process.env.DB_HOST,
      user      : process.env.DB_USERNAME,
      password  : process.env.DB_PASSWORD,
      database  : (process.env.DB_NAME == "test") ? process.env.DB_NAME_TEST : process.env.DB_NAME,
      timezone  : config.GLOBAL_TIME_ZONE
    },
    migrations: {
      tableName: migrationTable
    }
  },
  
  staging: {
    client: config.DB_DIALECT,
    connection: {
      host      : process.env.DB_HOST,
      user      : process.env.DB_USERNAME,
      password  : process.env.DB_PASSWORD,
      database  : process.env.DB_NAME,
      timezone  : config.GLOBAL_TIME_ZONE
    },
    migrations: {
      tableName: migrationTable
    }
  },

  production: {
    client: config.DB_DIALECT,
    connection: {
      host      : process.env.DB_HOST,
      user      : process.env.DB_USERNAME,
      password  : process.env.DB_PASSWORD,
      database  : process.env.DB_NAME,
      timezone  : config.GLOBAL_TIME_ZONE
    },
    migrations: {
      tableName: migrationTable
    }
  }

};
