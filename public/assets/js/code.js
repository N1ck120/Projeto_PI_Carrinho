// Funções Login
/*function matriz(){

  let dados
  
  if(JSON.parse(window.localStorage.getItem('tds')) != null){
    dados = JSON.parse(window.localStorage.getItem('tds'))
  }

  else {
    dados = []
  }  

  return dados
}

function login(mail,pass){

  const db = matriz()
  var encontrado = false;
  let name

  for (var i = 0; i < db.length; i++) {
    
    if (db[i].login == mail && db[i].senha == pass) {
      encontrado = true;
      break;
    }
  }

  if (encontrado == false) {
    alert("Email ou senha inválidos");
  }

  else {
    if(localStorage.getItem("compra") == 1){
    alert("Login bem-sucedido!");
    name = db[i].nome;
    name = "Bem vindo(a) "+ name;
    window.open("/carrinho");
    window.close('/login')
    localStorage.setItem("user", name);
    document.getElementById("navloginid").innerHTML = name;
    localStorage.removeItem("compra");
    }else{
    alert("Login bem-sucedido!");
    name = db[i].nome;
    name = "Bem vindo(a) "+ name;
    window.open("/index");
    window.close('/login')
    localStorage.setItem("user", name);
    document.getElementById("navloginid").innerHTML = name;
    }
  }
}

// Funções Cadastro
function cadastro(mail, name, pass){

  var db = matriz()

  db.push({id:Date.now(),login:mail,nome:name,senha:pass })

  let n = JSON.stringify(db);

  localStorage.setItem("tds", n);

  console.log(db)

  alert("Cadastro realizado com sucesso!")

  window.open('/login')
  window.close('/cadastro')
}

function passver(mail, name, pass, pass1) {

  if(pass !== pass1){
    alert("As senhas não coincidem")

  }else{
    cadastro(mail, name, pass)
  }
}

function userlogin(){
  if(localStorage.getItem("user") != null){
    loginuser = localStorage.getItem('user');
    document.getElementById("navloginid").innerHTML = loginuser;
    document.getElementById("navloginid").href = "/userinfo";
  }
}

function verify(){
  if (localStorage.getItem("user") != null){
    window.location.href = "/index";
  }
}

function verify1(){
  if (localStorage.getItem("user") == null){
    window.location.href = "/index";
  }
}

function logoff(){
  localStorage.removeItem("user")
  localStorage.removeItem("itenscarrinho")
  window.location.href = "/index";
}

document.addEventListener('DOMContentLoaded', function() {
  var btnTopo = document.getElementById('btn-topo');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });

  btnTopo.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
*/