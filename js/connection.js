const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BO_Solucoes'
})

connection.connect()

module.exports = connection