// Funções Produtos
function dbprodutos(){

  let estoque

  if(JSON.parse(window.localStorage.getItem('produtos')) != null){
    estoque = JSON.parse(window.localStorage.getItem('produtos'))
  }
  else {
    estoque = [
      {id:1, nome:"Central Amplificador Ascael", desc:"Amplificador", preco:600, img:"assets/img/Imgs_Produtos/CentralAmplificadorRedeSirene.png"},
      {id:2, nome:"Alarme de Incêncio Ascael", desc:"Alarme", preco:500, img:"assets/img/produtos/24-300.png"},

      {id:3, nome:"Botoeira Endereçável Ascael", desc:"Botoeira", preco:440, img:"assets/img/Imgs_Produtos/BotoeiraEnderecavelMaterlo.png"},
      {id:4, nome:"Acionador Manual BIX3000 Ascael", desc:"Acionador", preco:590, img:"assets/img/Imgs_Produtos/AcioandorManualConvencionalBIX3000.png"},

      {id:5, nome:"Detector de Fumaça Endereçável Ascael", desc:"Detector", preco:430, img:"assets/img/Imgs_Produtos/DetectorFumacaEnderecavel.png"},
      {id:6, nome:"Central Alarme de Incêndio CAX-i Ascael", desc:"Alarme", preco:690, img:"assets/img/Imgs_Produtos/CAX-i.png"},
      {id:7, nome:"Central de Iluminação de Emergência Ascael", desc:"Iluminação", preco:490, img:"assets/img/produtos/CentralIluminacaoEmergencia.png"},
      {id:8, nome:"Central Endereçável Ascael", desc:"Endereçável", preco:710, img:"assets/img/produtos/CentralEnderecavel.png"},
      {id:9, nome:"Módulo Horus 3000 Ascael", desc:"Módulo", preco:645, img:"assets/img/Imgs_Produtos/ModuloHorusMes3000.png"},
      {id:10, nome:"Central de Endereçamento Individual Ascael", desc:"Endereçável", preco:435, img:"assets/img/Imgs_Produtos/ModuloEnderecamentoIndividual.png"},

      {id:11, nome:"Sirene Audiovisual Ascael", desc:"Sirene", preco:475, img:"assets/img/Imgs_Produtos/SireneAudioVisual.png"}
    ]
  }
  return estoque
}

function carregahome() {

  const prod = dbprodutos()
  
  document.getElementById("prod1").innerHTML = prod[0].nome;
  document.getElementById("prod3").innerHTML = prod[2].nome;
  document.getElementById("prod5").innerHTML = prod[4].nome;
  document.getElementById("prod11").innerHTML = prod[10].nome;

  document.getElementById("prec1").innerHTML = "R$"+prod[0].preco;
  document.getElementById("prec5").innerHTML = "R$"+prod[2].preco;
  document.getElementById("prec3").innerHTML = "R$"+prod[4].preco;
  document.getElementById("prec11").innerHTML = "R$"+prod[10].preco;

  var imagem = document.getElementById('img1');
  imagem.src = prod[0].img;
  var imagem = document.getElementById('img3');
  imagem.src = prod[2].img;
  var imagem = document.getElementById('img5');
  imagem.src = prod[4].img;
  var imagem = document.getElementById('img11');
  imagem.src = prod[10].img;
}

function carregaprod(){

  const prod = dbprodutos()
  
  document.getElementById("prod1").innerHTML = prod[0].nome;
  document.getElementById("prod2").innerHTML = prod[1].nome;
  document.getElementById("prod3").innerHTML = prod[2].nome;
  document.getElementById("prod4").innerHTML = prod[3].nome;
  document.getElementById("prod5").innerHTML = prod[4].nome;
  document.getElementById("prod6").innerHTML = prod[5].nome;
  document.getElementById("prod7").innerHTML = prod[6].nome;
  document.getElementById("prod8").innerHTML = prod[7].nome;
  document.getElementById("prod9").innerHTML = prod[8].nome;
  document.getElementById("prod10").innerHTML = prod[9].nome;
  document.getElementById("prod11").innerHTML = prod[10].nome;

  document.getElementById("prec1").innerHTML = "R$"+prod[0].preco;
  document.getElementById("prec2").innerHTML = "R$"+prod[1].preco;
  document.getElementById("prec3").innerHTML = "R$"+prod[2].preco;
  document.getElementById("prec4").innerHTML = "R$"+prod[3].preco;
  document.getElementById("prec5").innerHTML = "R$"+prod[4].preco;
  document.getElementById("prec6").innerHTML = "R$"+prod[5].preco;
  document.getElementById("prec7").innerHTML = "R$"+prod[6].preco;
  document.getElementById("prec8").innerHTML = "R$"+prod[7].preco;
  document.getElementById("prec9").innerHTML = "R$"+prod[8].preco;
  document.getElementById("prec10").innerHTML = "R$"+prod[9].preco;
  document.getElementById("prec11").innerHTML = "R$"+prod[10].preco;

  var imagem = document.getElementById('img1');
  imagem.src = prod[0].img;
  var imagem = document.getElementById('img2');
  imagem.src = prod[1].img;
  var imagem = document.getElementById('img3');
  imagem.src = prod[2].img;
  var imagem = document.getElementById('img4');
  imagem.src = prod[3].img;
  var imagem = document.getElementById('img5');
  imagem.src = prod[4].img;
  var imagem = document.getElementById('img6');
  imagem.src = prod[5].img;
  var imagem = document.getElementById('img7');
  imagem.src = prod[6].img;
  var imagem = document.getElementById('img8');
  imagem.src = prod[7].img;
  var imagem = document.getElementById('img9');
  imagem.src = prod[8].img;
  var imagem = document.getElementById('img10');
  imagem.src = prod[9].img;
  var imagem = document.getElementById('img11');
  imagem.src = prod[10].img;
}










//Funçoes carrinho
function itenscarrinho(){

    let dadositens
    
    if(JSON.parse(window.localStorage.getItem("itenscarrinho")) != null){
      dadositens = JSON.parse(window.localStorage.getItem("itenscarrinho"))
    }
  
    else {
      dadositens = []
    }  
  
    return dadositens
}
  
function carrinhoprod(){

  const prod = dbprodutos()
  const aitens = itenscarrinho()
  console.log(aitens)
  let total1 = 0 


  var button = document.getElementById('finaliza');
  button.addEventListener('click', function() {
  window.location.href = '/produtos';
  });

if(aitens.length > 0){
  document.getElementById("test").innerHTML = "Seu carrinho";
  document.getElementById("finaliza").innerHTML = "Finalizar compra";
  document.getElementById("finaliza").href = "/userinfo";

  var button = document.getElementById('finaliza');
  button.addEventListener('click', function() {

    if(localStorage.getItem("user") == null){
      
      window.location.href = "/login";
      localStorage.setItem("compra", 1);
      
    }else{

      window.location.href = '/pix';

    }

  });  
}
     
    
  var elementoPai = document.getElementById('cardprodutos');
  var lista = document.createElement('div');
  lista.style.listStyle = 'none';

  for (var i = 0; i < aitens.length; i++) {
    var item = document.createElement('li');

    var imagem = document.createElement('img');
    imagem.src = prod[aitens[i].id].img;
    imagem.width = 40;
    imagem.height = 40;

    var nome = document.createElement('span');
    nome.textContent = prod[aitens[i].id].nome;

    var preco = document.createElement('span');
    preco.textContent = "R$"+prod[aitens[i].id].preco;
    total1 = total1 + prod[aitens[i].id].preco;

    // Aninhando os elementos dentro do item
    item.appendChild(imagem);
    item.appendChild(nome);
    item.appendChild(preco);

    // Aninhando o item dentro da lista
    lista.appendChild(item);
    elementoPai.appendChild(lista);
  }
    var total = document.createElement('span');
    total.textContent = "Total: R$"+total1;
    elementoPai.appendChild(total);
}

function addcart(id){
  
  var db = itenscarrinho()

  db.push({id:id})

  let n = JSON.stringify(db);

  localStorage.setItem("itenscarrinho", n);

  console.log(db)

  alert('Produto adicionado ao carrinho com sucesso!')
}

function limpar(){
  localStorage.removeItem("itenscarrinho");
  location.reload(true);
}

function pago() {

  alert('Pagamento efeituado com sucesso!')
  limpar()
  window.location.href = '/index'
}