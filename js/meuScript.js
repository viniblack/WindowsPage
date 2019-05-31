// relógio da barra do Windows

function relogio() {
  var data = new Date();

  var hora = ("0" + data.getHours()).slice(-2);
  var minuto = ("0" + data.getMinutes()).slice(-2);
  var horaFormatada = hora + ":" + minuto;

  var dia = ("0" + data.getDate()).slice(-2);
  var mes = ("0" + data.getMonth()).slice(-2);
  var ano = data.getFullYear();
  var dataFormatada = dia + "/" + mes + "/" + ano;

  var mostraHora = document.querySelector(".relogio");
  mostraHora.textContent = horaFormatada;

  var mostraDia = document.querySelector(".data");
  mostraDia.textContent = dataFormatada;
}
relogio();
setInterval(relogio, 30000);

//mostra as janelas de conteúdo
function mostraConteudo(janela) {
  someConteudo();
  var elemento = document.querySelector(janela);
  elemento.style.visibility = "visible";
  elemento.style.opacity = "100";
}

//oculta qualquer caixa que estiver visivel
function someConteudo() {
  var elementos = document.querySelectorAll(".conteudo");
  var tamanho = elementos.length;
  for (indice = 0; indice < tamanho; indice++) {
    elementos[indice].style.visibility = "hidden";
    elementos[indice].style.opacity = "0";
  }
}
