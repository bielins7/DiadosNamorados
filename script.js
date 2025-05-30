// === CONTADORES DE DIAS ===
const dataInicio = new Date(2023, 11, 30, 19, 0, 0);
const dataInicio1 = new Date(2023, 5, 17, 23, 0, 0);
const dataInicio2 = new Date(2024, 0, 22, 21, 0, 0);

function atualizarContador(data, id) {
  const agora = new Date();
  const diferenca = agora - data;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);
  
  document.getElementById(id).textContent = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(() => {
  atualizarContador(dataInicio, "dias");
  atualizarContador(dataInicio1, "dias1");
  atualizarContador(dataInicio2, "dias2");
}, 1000);

// === CONTROLE DE MÚSICA ===
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

// === ANIMAÇÕES ===
const fotos = document.querySelectorAll('.foto-reveal');
const iniciarElementos = document.querySelectorAll('.container');

function mostrarFotos() {
  fotos.forEach(foto => {
    const posicao = foto.getBoundingClientRect().top;
    if (posicao < window.innerHeight - 100) {
      foto.classList.add('aparecer');
    }
  });
}

function mostrarElementosIniciais() {
  iniciarElementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < window.innerHeight - 100) {
      el.classList.add('container-aparecer');
    }
  });
}

window.addEventListener('scroll', () => {
  mostrarFotos();
  mostrarElementosIniciais();
});

window.addEventListener('load', () => {
  mostrarFotos();
  mostrarElementosIniciais();
});
