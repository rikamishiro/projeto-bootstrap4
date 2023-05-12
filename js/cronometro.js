const botaoIniciar = document.getElementById('iniciar');
const botaoPausar = document.getElementById('pausar');
const botaoReiniciar = document.getElementById('reiniciar');

// eventos
botaoIniciar.addEventListener('click', () => alteraEstado('INICIAR'));
botaoPausar.addEventListener('click', () => alteraEstado('PAUSAR'));
botaoReiniciar.addEventListener('click', () => alteraEstado('PARAR'));

// capturar output
const output = document.querySelector('output');

let contagem = 0;
let estado = 'PARADO';

/**
 * Computa o novo estado da aplicação baseado na ação especificada
 * @param acao INICIAR ou PAUSAR ou REINICIAR
 */
function alteraEstado(acao){
  switch (estado) {
    case 'PARADO':
    switch (acao) {
      case 'INICIAR':
        estado = 'RODANDO';
        break;
      case 'PARAR':
        estado = 'PARADO';
        contagem = 0;
        break;
    }
      break;

    case 'RODANDO':
      switch (acao) {
        case 'PAUSAR':
          estado = 'PARADO';
          break;
        case 'PARAR':
          estado = 'PARADO';
          contagem = 0;
          break;
      }
      break;
  }
}

setInterval(
  function(){
    if (estado === 'RODANDO'){
      contagem += 100;
    }
    output.innerHTML = `${(contagem / 1000).toFixed(1)} s`;
  },
  100,
)
