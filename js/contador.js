const botaoMenos = document.getElementById('decrementar');
const botaoMais = document.getElementById('incrementar');
let contagem = 0;

botaoMenos.addEventListener(
  'click',
  function(){
    alteraValor(-1);
  }
)

botaoMais.addEventListener(
  'click',
  function(){
    alteraValor(+1)
  }
)

const output = document.querySelector('output')

function alteraValor(valor){
  const valorAtual = +output.innerHTML+ valor;
  output.innerHTML = valorAtual;

  if (valorAtual > 0){
    output.classList.add('text-success');
  } else if (valorAtual < 0){
    output.classList.add('text-danger');
  } else {
    output.classList.remove('text-danger', 'text-success');
  }
}
