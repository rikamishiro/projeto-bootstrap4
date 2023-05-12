const botao = document.querySelector('.btn');

botao.addEventListener(
  'click', // Nome do evento no qual vou inscrever
  function(){ // callback function (handler)
    // 1. Ler a cor escolhida pelo usuário.
    const caixa = document.getElementById('cor');
    const cor = caixa.value;
    console.log(cor);

    // 2. aplicar background-color do body
    const body = document.querySelector('body');
    body.style.backgroundColor = cor;
    console.log(body);

    // 3. exibir mensagem de erro
    if (body.style.backgroundColor !== cor) {
      alert('Por gentileza utilize cores do CSS!')
    }
  }
)
