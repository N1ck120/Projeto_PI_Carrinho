const connection = require('./connection')

function insert(nome, email, pass){

  let sql = 'INSERT INTO User SET ?';
  let dados = {Nome: nome, Email: email, Senha: pass}

  connection.query(sql, dados, function(error, results, fields) {
    if (error)throw error
    console.log('Registro adicionado com sucesso.');
    return error
  });

  //connection.end()
}

function insertcarrinho(id_user){

  let sql = 'INSERT INTO Carrinho SET ?';
  let dados = {id_user: id_user, valor_carrinho: 0}

  connection.query(sql, dados, function(error, results, fields) {
    if (error)throw error
    console.log('Registro adicionado com sucesso.');
    return error
  });

  //connection.end()
}


exports.insert = insert

exports.insertcarrinho = insertcarrinho

