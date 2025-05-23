// Data que vocês começaram a namorar: ano, mês (0-11), dia, hora, minuto
const dataInicio = new Date(2023, 11, 30, 19, 0, 0); // 12 de junho de 2022 às 00h

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);
    
  document.getElementById("dias").textContent = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Chama uma vez ao carregar
atualizarContador();
