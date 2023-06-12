// Funções Produtos
function dbprodutos(){

    let produtosestoque
    
    if(JSON.parse(window.localStorage.getItem('produtos')) != null){
        produtosestoque = JSON.parse(window.localStorage.getItem('produtos'))
    }
  
    else {
        produtosestoque = [
        {id:1,nome:"Central Amplificador Ascael", desc:"Amplificador", preco:600, img:"assets/img/Imgs_Produtos/CentralAmplificadorRedeSirene.png"},
        {id:2,nome:"Botoeira Endereçavel Ascael", desc:"Botoeira", preco:440, img:"assets/img/Imgs_Produtos/BotoeiraEnderecavelMaterlo.png"},
        {id:3,nome:"Detector de Fumaça Endereçavel Ascael", desc:"Detector", preco:430, img:"assets/img/Imgs_Produtos/DetectorFumacaEnderecavel.png"},
        {id:4,nome:"Sirene Ascael", desc:"Sirene", preco:265, img:"assets/img/Imgs_Produtos/SireneAudioVisual.png"}
      ]
    }  
  
    return produtosestoque
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

    /*var botao = document.getElementById('btn1');
    botao.onclick = "addcart("+prod[0].id+")";

    var botao = document.getElementById('btn2');
    botao.onclick = "addcart("+prod[1].id+")";

    var botao = document.getElementById('btn3');
    botao.onclick = "addcart("+prod[2].id+")";

    var botao = document.getElementById('btn4');
    botao.onclick = "addcart("+prod[3].id+")";
    */
}










//Funçoes carrinho
function itenscarrinho(){

    let dadositens
    
    if(JSON.parse(window.localStorage.getItem('itenscarrinho')) != null){
        dadositens = JSON.parse(window.localStorage.getItem('itenscarrinho'))
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
    
  // Acessando o elemento pai
  var elementoPai = document.getElementById('cardprodutos');

  // Loop para criar os elementos
  for (var i = 0; i < aitens.length; i++) {
    // Criando o novo elemento (li)
    var novoElemento = document.createElement('li');
  
    // Definindo o texto do elemento com base no item atual do loop
    novoElemento.textContent = prod[aitens[i].id].nome;
   
    // Anexando o novo elemento ao elemento pai
    elementoPai.appendChild(novoElemento);
  }
}

function addcart(id){
  var db = itenscarrinho()

  db.push({id:id})

  let n = JSON.stringify(db);

  localStorage.setItem("itenscarrinho", n);

  console.log(db)

  alert("adicionado com sucesso!")

}


