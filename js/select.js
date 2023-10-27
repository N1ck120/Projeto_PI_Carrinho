const connection = require('./connection')

function select(email, pass, callback) {
    let sql = 'SELECT * FROM User WHERE Email = ? AND Senha = ?'
    
    connection.query(sql, [email, pass], function(error, results, fields) {
        if (error) {
            callback(error, null); // Se houver erro, chame o callback com o erro
            return;
        }
    
        if (results.length === 0) {
            console.log('Nenhum dado encontrado');
            callback(null, null); // Nenhum dado encontrado, chame o callback com null
            return;
        }
    
        const dados = results[0];
        console.log('Id: ' + dados.Id_User);
        console.log('Nome: ' + dados.Nome);
        console.log('Email: ' + dados.Email);
        console.log('Senha: ' + dados.Senha);
 
        callback(null, dados); // Chame o callback com os dados
    });
    
    //connection.end();
}



function selectcarrinho(id, callback) {
    let sql = 'SELECT * FROM Carrinho WHERE Id_Carrinho = ?'
    
    connection.query(sql, [id], function(error, results, fields) {
        if (error) {
            callback(error, null); // Se houver erro, chame o callback com o erro
            return;
        }
    
        if (results.length === 0) {
            console.log('Nenhum dado encontrado');
            callback(null, null); // Nenhum dado encontrado, chame o callback com null
            return;
        }
    
        const dados = results[0];
        console.log('Id: ' + dados.Nome);
        console.log('Email: ' + dados.email);
        console.log('Pass: ' + dados.pass);

        callback(null, dados); // Chame o callback com os dados
    });
    
    //connection.end();
}

exports.select = select;
