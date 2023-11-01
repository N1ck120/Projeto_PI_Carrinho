const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('express-cookie')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const port = 8081

app.listen(port, () => {
  console.log('Example app listening on port ' + port)
})

// Modulos

const insert = require('./js/insert')
const select = require('./js/select')

// Rotas

app.get('/index', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/produtos', function(req, res) {
  res.sendFile(__dirname + '/produtos.html')
})

app.get('/carrinho', function(req, res) {
  res.sendFile(__dirname + '/carrinho.html')
})

app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/login.html')
})

app.get('/cadastro', function(req, res) {
  res.sendFile(__dirname + '/cadastro.html')
})

app.get('/pagamento', function(req, res) {
  res.sendFile(__dirname + '/pagamento.html')
})

app.get('/pix', function(req, res) {
  res.sendFile(__dirname + '/pix.html')
})

app.get('/userinfo', function(req, res) {
  res.sendFile(__dirname + '/userinfo.html')
})

app.get('/sobre', function(req, res) {
  res.redirect("https://github.com/N1ck120/Projeto_PI_Carrinho");
});

//ERROR 404
app.get('*', (req, res) => {
  res.send("<h1>404 Página não encontrada!</h1>");
});

// Funções

app.post('/cadastro', async (req, res) => {
  const name = req.body.nome;
  const email = req.body.email;
  const pass = req.body.pass;

  console.log("Log App.js:", name, email, pass)

  try {
    await insert.insert(name, email, pass); // Espera a função insert ser concluída
    res.redirect('/login');
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }

  select.select(email, pass, (error, dados) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro no servidor');
      return;
    }

    if (dados) {
      // Faça algo com os dados, por exemplo, enviar uma resposta com os dados
      
      console.log('Dados encontrados: ' + JSON.stringify(dados.Id_User))

      const idusr = parseInt(JSON.stringify(dados.Id_User))

      insert.insertcarrinho(idusr);
    
    } else {
      // Nenhum dado encontrado
      res.send('Nenhum dado encontrado');
    }
  });
});


app.post('/login', async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  select.select(email, pass, (error, dados) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro no servidor');
      return;
    }

    if (dados) {
      res.cookie('id', dados.Id_User);
      res.cookie('name', dados.Nome);
      res.cookie('email', dados.Email);
      res.redirect('/index');
    } else {
      // Nenhum dado encontrado
      res.send('Nenhum dado encontrado');
    }
  });
});