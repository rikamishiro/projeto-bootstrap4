const botao = document.querySelector('.btn');

var fontes = ["Montez","Lobster","Josefin Sans","Shadows Into Light","Pacifico","Amatic SC", "Orbitron", "Rokkitt","Righteous","Dancing Script","Bangers","Chewy","Sigmar One","Architects Daughter","Abril Fatface","Covered By Your Grace","Kaushan Script","Gloria Hallelujah","Satisfy","Lobster Two","Comfortaa","Cinzel","Courgette", "Arial"];

botao.addEventListener(
    'click', // Nome do evento no qual vou inscrever
    function(){ // callback function (handler)
      // 1. Ler a fonte escolhida pelo usuário.
      const caixa = document.getElementById('fonte');
      const fonte = caixa.value;
      console.log(fonte);
  
      // 2. aplicar fonte no p e h1
      const body = document.querySelector('body');
      body.style.fontFamily = fonte;
      console.log(body);
  
      // 3. exibir mensagem de erro
      if (body.style.fontFamily !== fonte) {
        alert('Por gentileza escolher outra fonte')
      }
    }
  )