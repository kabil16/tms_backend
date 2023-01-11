const mysql = require('mysql');

//sql db connection
const con = mysql.createConnection({
  host: env.process.HOST_URL,
  user: env.process.DB_NAME,
  password: env.process.USER_NAME,
  database: env.process.PASSWORD
})

con.connect()

