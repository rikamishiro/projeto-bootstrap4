// pegar data da contagem
let contagemAnoNovo = new Date('jan 1, 2024 00:00:00').getTime();
let x = setInterval(function() {

  // pegar o tempo atual
  let now = new Date().getTime();

  // estabelecer diferença
  let distance = contagemAnoNovo - now;

  // pegar os dias, horas, minutos e segundos
  let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((distance % (1000 * 60)) / 1000);

  // visualização
  document.getElementById('dia').innerHTML = '<div id="header1" class="card-header h1">' + dias + '</div>' + '<div class=card-body>' + '<div class="card-text">dias</div></div>';
  document.getElementById('hora').innerHTML = '<div id="header2" class="card-header  h1">' + horas + '</div>' + '<div class=card-body>' + '<div class="card-text">horas</div></div>';
  document.getElementById('minuto').innerHTML = '<div id="header3" class="card-header h1">' + minutos + '</div>' + '<div class=card-body>' + '<div class="card-text">minutos</div></div>';
  document.getElementById('segundo').innerHTML = '<div id="header4" class="card-header h1">' + segundos + '</div>' + '<div class=card-body>' + '<div class="card-text">segundos</div></div>';

  // quando a contagem expirar
  if (dias === 0 && horas === 0 && minutos === 0 && segundos === 0) {
    clearInterval(x);
    document.getElementById("header1").classList.add("bg-success");
    document.getElementById("header2").classList.add("bg-success");
    document.getElementById("header3").classList.add("bg-success");
    document.getElementById("header4").classList.add("bg-success");
  }
}, 1000)
