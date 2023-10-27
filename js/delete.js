const connection = require('./connection')

function del(id) {
    const sql = 'DELETE FROM User WHERE id_user = ?'

    connection.query(sql, id, (error, results) => {
      if (error) throw error
      console.log('Registro apagado com sucesso.');
    });

    connection.end()
}

exports.del = del