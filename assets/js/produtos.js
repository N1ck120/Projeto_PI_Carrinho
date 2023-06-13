// Funções Produtos
function dbprodutos(){

  let estoque

  if(JSON.parse(window.localStorage.getItem('produtos')) != null){
    estoque = JSON.parse(window.localStorage.getItem('produtos'))
  }
  else {
    estoque = [
    {id:1,nome:"Central Amplificador Ascael", desc:"Amplificador", preco:600, img:"assets/img/Imgs_Produtos/CentralAmplificadorRedeSirene.png"},
    {id:2,nome:"Botoeira Endereçavel Ascael", desc:"Botoeira", preco:440, img:"assets/img/Imgs_Produtos/BotoeiraEnderecavelMaterlo.png"},
    {id:3,nome:"Detector de Fumaça Endereçavel Ascael", desc:"Detector", preco:430, img:"assets/img/Imgs_Produtos/DetectorFumacaEnderecavel.png"},
    {id:4,nome:"Sirene Ascael", desc:"Sirene", preco:265, img:"assets/img/Imgs_Produtos/SireneAudioVisual.png"}
    ]
  }
  return estoque
}

function carregaprod(){

  const prod = dbprodutos()
  
  document.getElementById("prod1").innerHTML = prod[0].nome;
  document.getElementById("prod2").innerHTML = prod[1].nome;
  document.getElementById("prod3").innerHTML = prod[2].nome;
  document.getElementById("prod4").innerHTML = prod[3].nome;

  document.getElementById("prec1").innerHTML = "R$"+prod[0].preco;
  document.getElementById("prec2").innerHTML = "R$"+prod[1].preco;
  document.getElementById("prec3").innerHTML = "R$"+prod[2].preco;
  document.getElementById("prec4").innerHTML = "R$"+prod[3].preco;

  var imagem = document.getElementById('img1');
  imagem.src = prod[0].img;
  var imagem = document.getElementById('img2');
  imagem.src = prod[1].img;
  var imagem = document.getElementById('img3');
  imagem.src = prod[2].img;
  var imagem = document.getElementById('img4');
  imagem.src = prod[3].img;

}










//Funçoes carrinho
function itenscarrinho(){

    let dadositens
    
    if(JSON.parse(window.localStorage.getItem('itenscarrinho')) != null){
        dadositens = JSON.parse(window.localStorage.getItem('itenscarrinho'))
        document.getElementById("test").innerHTML = "Seu carrinho";
        document.getElementById("finaliza").innerHTML = "Finalizar compra";
        document.getElementById("finaliza").href = "userinfo.html";
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

}


