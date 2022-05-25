module.exports = {  
  client: 'pg',
  debug: true,
  connection: DB_URL,
  migrations: {
      directory: '/migrations'
  },
  ssl: true
  
};