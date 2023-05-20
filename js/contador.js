const botaoMenos = document.getElementById('decrementar');
const botaoMenosDez = document.getElementById('decrementarDez');
const botaoMais = document.getElementById('incrementar');
const botaoMaisDez = document.getElementById('incrementarDez');
const botaoZerar = document.getElementById('zerar');
let contagem = 0;

botaoMenos.addEventListener(
  'click',
  function(){
    alteraValor(-1);
  }
)

botaoMenosDez.addEventListener(
  'click',
  function(){
    alteraValor(-10);
  }
)

botaoMais.addEventListener(
  'click',
  function(){
    alteraValor(+1)
  }
)

botaoMaisDez.addEventListener(
  'click',
  function(){
    alteraValor(+10)
  }
)

botaoZerar.addEventListener(
  'click',
  function(){
    zerarValor()
  }
)

const output = document.querySelector('output')

function zerarValor(valor){

  output.innerHTML = "0";

}

function alteraValor(valor){
  const valorAtual = +output.innerHTML+ valor;
  output.innerHTML = valorAtual;

}

