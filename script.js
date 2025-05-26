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

// Data que vocês começaram a namorar: ano, mês (0-11), dia, hora, minuto
const dataInicio1 = new Date(2023, 5, 17, 23, 0, 0); // 12 de junho de 2022 às 00h
function atualizarContador1() {
  const agora = new Date();
  const diferenca = agora - dataInicio1;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);
    
  document.getElementById("dias1").textContent = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

// Data que vocês começaram a namorar: ano, mês (0-11), dia, hora, minuto
const dataInicio2 = new Date(2024, 0, 22, 21, 0, 0); // 12 de junho de 2022 às 00h
function atualizarContador2() {
  const agora = new Date();
  const diferenca = agora - dataInicio2;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);
    
  document.getElementById("dias2").textContent = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
setInterval(atualizarContador1, 1000);
setInterval(atualizarContador2, 1000);

// Chama uma vez ao carregar
atualizarContador();
atualizarContador1();
atualizarContador2();

 const audio = document.getElementById("musica");
  const playPauseBtn = document.getElementById("playPause");
  const statusText = document.getElementById("status");

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸️";
      statusText.textContent = "Tocando";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️";
      statusText.textContent = "Pausado";
    }
  });

  const fotos = document.querySelectorAll('.foto-reveal');

  function mostrarFotos(){
    fotos.forEach(foto => {
      const posicao = foto.getBoundingClientRect().top;
      const alturaTela = window.innerHeight;

      if(posicao < alturaTela - 100){
        foto.classList.add('aparecer');
      }
    });
  }

  window.addEventListener('scroll', mostrarFotos);
  window.addEventListener('load', mostrarFotos);
